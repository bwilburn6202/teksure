import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const UA = 'TekSure Knowledge Importer/1.0 (https://teksure.com)';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function cleanText(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .trim();
}

function extractContent(html: string): { title: string; content: string } {
  const titleMatch = /<title[^>]*>([^<]+)<\/title>/i.exec(html);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  let doc = html;
  doc = doc.replace(/<script[\s\S]*?<\/script>/gi, '');
  doc = doc.replace(/<style[\s\S]*?<\/style>/gi, '');
  doc = doc.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  doc = doc.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  doc = doc.replace(/<!--[\s\S]*?-->/g, '');
  doc = doc.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
  doc = doc.replace(/<(nav|header|footer|aside)[^>]*>[\s\S]*?<\/\1>/gi, '');

  const noisePattern =
    /class="[^"]*(?:ad(?:s|vert)?|sidebar|related|nav(?:bar)?|menu|cookie|banner|popup|modal|promo|subscribe|newsletter|social|share|comment|widget)[^"]*"/i;
  doc = doc.replace(/<[a-z][^>]*>/gi, (tag) => (noisePattern.test(tag) ? '<!-- removed -->' : tag));
  doc = doc.replace(/<!-- removed -->[\s\S]*?<\/[a-z]+>/gi, '');

  let body = '';
  const articleMatch = /<article[^>]*>([\s\S]*?)<\/article>/i.exec(doc);
  if (articleMatch) {
    body = articleMatch[1];
  } else {
    const mainMatch = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(doc);
    if (mainMatch) {
      body = mainMatch[1];
    } else {
      const contentMatch =
        /<div[^>]+class="[^"]*(?:article|post|entry|story|body|content)[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(doc);
      body = contentMatch ? contentMatch[1] : doc;
    }
  }

  const content = body
    .replace(/<h[1-3][^>]*>/gi, '\n\n## ')
    .replace(/<h[4-6][^>]*>/gi, '\n\n### ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n• ')
    .replace(/<\/li>/gi, '')
    .replace(/<p[^>]*>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();

  return { title, content };
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
    const url = String(body.url ?? '').trim();
    const titleOverride = String(body.title ?? '').trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      return json({ error: 'A valid http or https URL is required.' }, 400);
    }

    const response = await fetch(url, {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(20_000),
    });

    if (!response.ok) {
      return json({ error: `Failed to fetch URL: ${response.status}` }, 422);
    }

    const html = await response.text();
    const extracted = extractContent(html);

    if (!extracted.content || extracted.content.length < 120) {
      return json({ error: 'Could not extract enough readable content from that URL.' }, 422);
    }

    const title = titleOverride || extracted.title || new URL(url).hostname;
    const { data, error } = await serviceClient
      .from('knowledge_manual_sources')
      .insert({
        title,
        source_type: 'manual',
        source_url: url,
        content: extracted.content,
        created_by: userId,
      })
      .select('id, title, source_url, created_at')
      .single();

    if (error) {
      throw error;
    }

    return json({
      ok: true,
      source: data,
      extractedChars: extracted.content.length,
    });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    return json({
      error: error instanceof Error ? error.message : 'Knowledge source import failed.',
    }, 500);
  }
});
