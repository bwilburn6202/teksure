/**
 * TekBot AI — Edge Function
 *
 * Receives a user message (plus optional conversation history) and
 * returns a plain-language tech-support answer powered by Claude.
 *
 * Requires the following Supabase secret:
 *   ANTHROPIC_API_KEY   — your Anthropic API key (sk-ant-...)
 *
 * Deploy:
 *   npx supabase functions deploy tekbot-ai --project-ref zrgtoefkqafndhxhbuag
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ── CORS headers (allow calls from TekSure frontend) ─────────────────────────
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ── System prompt for Claude ──────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are TekBot, a friendly and patient tech support assistant for TekSure.com.
TekSure helps everyday people — especially seniors and people who are not very experienced with technology — understand and use their devices confidently.

Your job:
- Answer technology questions in plain, simple language — no jargon
- Be warm, encouraging, and never make people feel embarrassed for asking
- Give step-by-step instructions when helpful, using numbered steps
- Keep answers focused and concise (2–5 sentences or a short numbered list)
- If someone is frustrated, acknowledge their feelings and reassure them
- If the question is beyond your scope, suggest they book a technician on TekSure

Topics you help with:
- Smartphones (iPhone and Android), tablets, computers (Windows and Mac)
- WiFi, internet connection, and routers
- Apps, downloads, and software updates
- Email, video calls, and messaging
- Passwords, account security, and avoiding scams
- Backing up photos and files
- Printers, Bluetooth devices, and accessories

What you never do:
- Give advice about illegal activities
- Discuss things unrelated to technology
- Pretend to be a human
- Share personal data about users

At the end of your response, if relevant, you may suggest: "You can also find a step-by-step guide on TekSure — just search for [topic]."`;

// ── Message type ──────────────────────────────────────────────────────────────
interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  message: string;
  history?: ConversationMessage[];
}

// ── Handler ───────────────────────────────────────────────────────────────────
serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }

  try {
    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY secret is not configured.");
    }

    const body: RequestBody = await req.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "message is required" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Build messages array (include conversation history for context)
    const messages: ConversationMessage[] = [
      ...history.slice(-10),  // keep last 10 exchanges for context window efficiency
      { role: "user", content: message.trim() },
    ];

    // Call Anthropic Claude API
    const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",  // fast + affordable for chat
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error("Anthropic API error:", errorText);
      throw new Error(`Anthropic API returned ${anthropicResponse.status}`);
    }

    const data = await anthropicResponse.json();
    const reply = data.content?.[0]?.text ?? "I'm sorry, I couldn't generate a response. Please try again.";

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("tekbot-ai error:", err);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please try again.",
        // Provide a fallback reply the frontend can display
        reply: "I'm having a little trouble right now. Please try again in a moment, or check our Guides section for step-by-step help!",
      }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
});
