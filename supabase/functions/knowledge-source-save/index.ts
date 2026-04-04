import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

async function requireAdmin(req: Request) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    throw new Response(JSON.stringify({ error: 'Missing Authorization header.' }), { status: 401, headers: CORS_HEADERS });
  }

  const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });
  const serviceClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { data: authData, error: authError } = await userClient.auth.getUser();
  if (authError || !authData.user) {
    throw new Response(JSON.stringify({ error: 'Authentication failed.' }), { status: 401, headers: CORS_HEADERS });
  }

  const { data: profile, error: profileError } = await serviceClient
    .from('profiles')
    .select('role')
    .eq('id', authData.user.id)
    .maybeSingle();

  if (profileError || profile?.role !== 'admin') {
    throw new Response(JSON.stringify({ error: 'Admin access required.' }), { status: 403, headers: CORS_HEADERS });
  }

  return { serviceClient, userId: authData.user.id };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const { serviceClient, userId } = await requireAdmin(req);
    const body = await req.json().catch(() => ({}));

    const sourceId = typeof body.sourceId === 'string' ? body.sourceId.trim() : '';
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    const sourceUrl = typeof body.sourceUrl === 'string' ? body.sourceUrl.trim() : '';
    const sourceType = body.sourceType === 'upload' ? 'upload' : 'manual';
    const originalFilename = typeof body.originalFilename === 'string' ? body.originalFilename.trim() : '';

    if (!title) {
      return json({ error: 'Title is required.' }, 400);
    }

    if (!content) {
      return json({ error: 'Content is required.' }, 400);
    }

    if (sourceUrl && !/^https?:\/\//i.test(sourceUrl)) {
      return json({ error: 'Source URL must start with http or https.' }, 400);
    }

    const payload = {
      title,
      content,
      source_type: sourceType,
      source_url: sourceUrl || null,
      original_filename: originalFilename || null,
    };

    const query = sourceId
      ? serviceClient
          .from('knowledge_manual_sources')
          .update(payload)
          .eq('id', sourceId)
          .select('id, title, source_type, source_url, original_filename, created_at')
          .single()
      : serviceClient
          .from('knowledge_manual_sources')
          .insert({
            ...payload,
            created_by: userId,
          })
          .select('id, title, source_type, source_url, original_filename, created_at')
          .single();

    const { data, error } = await query;
    if (error) {
      throw error;
    }

    return json({
      ok: true,
      source: data,
      mode: sourceId ? 'update' : 'create',
    });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    return json(
      {
        error: error instanceof Error ? error.message : 'Knowledge source save failed.',
      },
      500,
    );
  }
});
