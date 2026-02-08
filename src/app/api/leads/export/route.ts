import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

export async function GET(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.ADMIN_API_KEY;

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!fs.existsSync(LEADS_FILE)) {
    return new NextResponse("email,name,source,timestamp\n", {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=expatbro-leads.csv",
      },
    });
  }

  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));

  // Convert to CSV
  const header = "email,name,source,timestamp";
  const rows = leads.map(
    (l: { email: string; name?: string; source: string; timestamp: string }) =>
      `${l.email},"${l.name || ""}",${l.source},${l.timestamp}`
  );

  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=expatbro-leads.csv",
    },
  });
}
