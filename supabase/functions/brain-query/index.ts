// Supabase Edge Function: brain-query
// Receives a question + guide context and queries the hosted Ollama server.
// Set OLLAMA_BASE_URL and OLLAMA_MODEL as Supabase secrets.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const baseUrl = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://localhost:11434';
    const model   = Deno.env.get('OLLAMA_MODEL')    ?? 'llama3.2:1b';

    const { question, context } = await req.json();

    if (!question?.trim()) {
      return new Response(
        JSON.stringify({ error: 'No question provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const prompt = `You are TekSure, a friendly tech helper for everyday people and seniors. Answer the question below using ONLY the provided guide content. Keep your answer to 2-3 sentences. Always end by mentioning the most relevant guide URL.

Guide content:
${context ?? 'No guides found.'}

Question: ${question}

Answer:`;

    const ollamaRes = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(30_000),
      body: JSON.stringify({ model, prompt, stream: false }),
    });

    if (!ollamaRes.ok) {
      throw new Error(`Ollama returned ${ollamaRes.status}: ${await ollamaRes.text()}`);
    }

    const data = await ollamaRes.json();

    return new Response(
      JSON.stringify({ answer: data.response ?? '' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
