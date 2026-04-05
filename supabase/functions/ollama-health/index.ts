import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const OLLAMA_BASE_URL = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://host.docker.internal:11434';
const OLLAMA_MODEL = Deno.env.get('OLLAMA_MODEL') ?? 'qwen2.5:7b';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
      method: 'GET',
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      return json({
        available: false,
        baseUrl: OLLAMA_BASE_URL,
        model: OLLAMA_MODEL,
        message: `Ollama responded with ${response.status}.`,
      });
    }

    const payload = await response.json();
    const models = Array.isArray(payload.models) ? payload.models : [];
    const modelAvailable = models.some((entry: { name?: string }) => entry.name === OLLAMA_MODEL);

    return json({
      available: modelAvailable,
      baseUrl: OLLAMA_BASE_URL,
      model: OLLAMA_MODEL,
      message: modelAvailable
        ? 'Ollama is reachable and the configured model is available.'
        : 'Ollama is reachable, but the configured model is not installed.',
      installedModels: models.map((entry: { name?: string }) => entry.name).filter(Boolean),
    });
  } catch (error) {
    return json({
      available: false,
      baseUrl: OLLAMA_BASE_URL,
      model: OLLAMA_MODEL,
      message: error instanceof Error ? error.message : 'Unable to reach Ollama.',
    });
  }
});
