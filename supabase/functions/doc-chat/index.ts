// Supabase Edge Function: doc-chat
// Proxies Chat-with-Docs requests to the Gemini API (free tier).
// Keeps the API key server-side so the frontend needs zero configuration.
//
// Required Supabase secret:
//   GEMINI_API_KEY — free key from https://aistudio.google.com/apikey
//
// Set it with:
//   npx supabase secrets set GEMINI_API_KEY=your-key --project-ref vrhxitxzqtbphzsbdqih

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MODEL = 'gemini-2.5-flash';
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

const SYSTEM_INSTRUCTION = `You are a friendly, patient tech-support assistant on TekSure.com — a website that helps everyday people (especially seniors and non-technical users) understand and manage their technology.

Rules for every response:
- Use plain, jargon-free language. If you must use a technical term, explain it in parentheses right away.
- Keep sentences short and paragraphs brief.
- Use numbered steps when explaining how to do something.
- Be encouraging — never condescending.
- If you are unsure, say so honestly. Never make up information.
- Format your responses using Markdown for readability: bold key terms, use headings for sections, and code blocks for anything the user might need to type.`;

interface ChatRequestBody {
  prompt: string;
  urls: string[];
  mode?: 'chat' | 'suggestions';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY is not configured. Please set it in Supabase secrets.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { prompt, urls, mode = 'chat' } = (await req.json()) as ChatRequestBody;

    if (!prompt && mode === 'chat') {
      return new Response(
        JSON.stringify({ error: 'A prompt is required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── Build the request for Gemini ────────────────────────────────
    if (mode === 'suggestions') {
      // Suggestions mode: ask for starter questions as JSON
      const urlList = urls.join('\n');
      const suggestionsPrompt = `Based on the content of the following documentation URLs, provide 3-4 short, friendly questions a non-technical person might ask to learn from these pages. The questions should be in plain English — no jargon. Return ONLY a JSON object with a key "suggestions" containing an array of question strings. Example: {"suggestions": ["How do I update my phone?", "What is two-factor authentication?"]}

Relevant URLs:
${urlList}`;

      const geminiUrl = `${GEMINI_BASE}/${MODEL}:generateContent?key=${apiKey}`;
      const geminiResp = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: suggestionsPrompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
          },
          safetySettings: safetySettings(),
        }),
      });

      if (!geminiResp.ok) {
        const errText = await geminiResp.text();
        console.error('Gemini suggestions error:', errText);
        return new Response(
          JSON.stringify({ error: 'Could not load suggestions. Please try again.' }),
          { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const geminiData = await geminiResp.json();
      const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? '{"suggestions":[]}';

      return new Response(
        JSON.stringify({ text }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── Chat mode: send prompt with URL context ─────────────────────
    let fullPrompt = prompt;
    if (urls && urls.length > 0) {
      fullPrompt = `${prompt}\n\nRelevant documentation URLs for context:\n${urls.join('\n')}`;
    }

    const geminiUrl = `${GEMINI_BASE}/${MODEL}:generateContent?key=${apiKey}`;
    const geminiResp = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
        tools: [{ urlContext: {} }],
        safetySettings: safetySettings(),
      }),
    });

    if (!geminiResp.ok) {
      const errText = await geminiResp.text();
      console.error('Gemini chat error:', errText);
      return new Response(
        JSON.stringify({ error: 'The AI service is temporarily unavailable. Please try again in a moment.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const geminiData = await geminiResp.json();
    const candidate = geminiData?.candidates?.[0];
    const text = candidate?.content?.parts?.[0]?.text ?? '';

    // Extract URL context metadata if present
    let urlContextMetadata = undefined;
    if (candidate?.urlContextMetadata?.urlMetadata) {
      urlContextMetadata = candidate.urlContextMetadata.urlMetadata;
    }

    return new Response(
      JSON.stringify({ text, urlContextMetadata }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('doc-chat error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function safetySettings() {
  return [
    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
  ];
}
