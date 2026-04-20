// Supabase Edge Function: ollama-health
// Checks if Ollama is running and returns model info.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const baseUrl = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://host.docker.internal:11434';
    const model = Deno.env.get('OLLAMA_MODEL') ?? 'qwen2.5:7b';

    // Check Ollama health
    const healthResp = await fetch(`${baseUrl}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!healthResp.ok) {
      return new Response(
        JSON.stringify({
          available: false,
          model,
          baseUrl,
          message: 'Ollama is not responding. Make sure it is running.',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tags = await healthResp.json();
    const available = tags.models?.some((m: any) => m.name.startsWith(model.split(':')[0]));

    return new Response(
      JSON.stringify({
        available: available ?? false,
        model,
        baseUrl,
        message: available ? 'Ollama is available.' : `Model "${model}" not found. Available: ${JSON.stringify(tags.models ?? [])}`,
        models: tags.models ?? [],
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        available: false,
        model: Deno.env.get('OLLAMA_MODEL') ?? 'qwen2.5:7b',
        baseUrl: Deno.env.get('OLLAMA_BASE_URL') ?? 'http://host.docker.internal:11434',
        message: `Could not connect to Ollama: ${message}. Make sure Ollama is running on your machine.`,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
