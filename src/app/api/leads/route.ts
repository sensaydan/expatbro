import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Lead {
  email: string;
  name?: string;
  source: string;
  timestamp: string;
  country?: string;
  interests?: string[];
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function getLeads(): Lead[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveLeads(leads: Lead[]) {
  ensureDataDir();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const leads = getLeads();

    // Check for duplicate
    const existingIndex = leads.findIndex(
      (l) => l.email.toLowerCase() === email.toLowerCase()
    );

    const lead: Lead = {
      email: email.toLowerCase(),
      name: name || undefined,
      source: source || "unknown",
      timestamp: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      // Update existing lead
      leads[existingIndex] = {
        ...leads[existingIndex],
        ...lead,
        timestamp: leads[existingIndex].timestamp, // Keep original signup date
      };
    } else {
      // Add new lead
      leads.push(lead);
    }

    saveLeads(leads);

    // Also send to email service if configured (future: Resend, ConvertKit, etc.)
    // await sendToEmailService(lead);

    return NextResponse.json({
      success: true,
      isNew: existingIndex < 0,
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Simple auth check (in production, use proper auth)
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.ADMIN_API_KEY;

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = getLeads();

  return NextResponse.json({
    total: leads.length,
    leads,
  });
}
