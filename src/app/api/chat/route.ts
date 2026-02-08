import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are the Expat Bro AI assistant, helping people who want to move to Mexico, Colombia, Venezuela, or Brazil.

Your knowledge comes from Dan Thomson, who has:
- 6+ years of nomad life
- Visited 110 countries, every country in the Americas
- Speaks English, Spanish, Portuguese, and French
- Currently splits time between Mexico, Venezuela, and Brazil

Your style:
- Direct and honest, no BS
- Practical advice over generic tips
- Acknowledge downsides, not just positives
- Conversational but informative
- Keep responses concise (2-3 paragraphs max)

Key topics you can help with:
- Cost of living (real numbers, not YouTube fantasy)
- Best neighborhoods in each city
- Visa requirements and processes
- Safety (honest assessment)
- Dating and social scene
- Banking and money
- Remote work setup
- Language learning

Countries/Cities you know well:
- Mexico: CDMX, Guadalajara, Oaxaca, Playa del Carmen
- Colombia: Medellín, Bogotá, Cartagena
- Venezuela: Caracas, Margarita Island
- Brazil: São Paulo, Rio de Janeiro, Florianópolis

If someone asks about booking a call or getting more detailed help, mention they can book a strategy call at calendly.com/dan-thomson/consult ($150 for 30 min).

If you don't know something specific, say so rather than making it up. Suggest they book a call for personalized advice.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Check for API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Fallback response if no API key
      return NextResponse.json({
        reply: getFallbackResponse(message),
      });
    }

    const client = new Anthropic({ apiKey });

    // Build messages from history
    const messages: { role: "user" | "assistant"; content: string }[] = [];

    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-6)) {
        if (msg.role === "user" || msg.role === "assistant") {
          messages.push({ role: msg.role, content: msg.content });
        }
      }
    }

    messages.push({ role: "user", content: message });

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply = response.content[0];
    if (reply.type !== "text") {
      throw new Error("Unexpected response type");
    }

    return NextResponse.json({ reply: reply.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply: "I'm having a bit of trouble right now. For immediate help, you can book a call with Dan at calendly.com/dan-thomson/consult",
    });
  }
}

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("cost") || lowerMessage.includes("expensive") || lowerMessage.includes("cheap")) {
    return "Cost of living varies a lot by city. In CDMX or Medellín, expect $2,000-2,500/month for a comfortable life. Caracas can be much cheaper with USD. For a detailed breakdown specific to your situation, book a call at calendly.com/dan-thomson/consult";
  }

  if (lowerMessage.includes("safe") || lowerMessage.includes("danger")) {
    return "Safety depends heavily on the specific city and neighborhood. Generally: stay in good areas, use Uber not street taxis, don't flash wealth. Each country has its nuances. Check out our city guides on the blog, or book a call for specific advice.";
  }

  if (lowerMessage.includes("visa")) {
    return "Most countries offer 90-180 day tourist visas on arrival. Digital nomad visas are available in Mexico, Colombia, and Brazil. The specifics depend on your nationality and plans. Check our visa guides in the blog section!";
  }

  if (lowerMessage.includes("neighborhood") || lowerMessage.includes("where to live")) {
    return "The best neighborhood depends on your vibe and budget. In CDMX, Roma/Condesa are expat favorites. In Medellín, El Poblado or Laureles. Check out our detailed neighborhood guides in the blog!";
  }

  return "Great question! For detailed, personalized advice on moving to Latin America, check out our blog posts or book a strategy call with Dan at calendly.com/dan-thomson/consult. He's been living this life for 6+ years and knows the ins and outs.";
}
