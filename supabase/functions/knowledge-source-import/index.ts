// Supabase Edge Function: knowledge-source-import
// Fetches and imports content from a URL into the knowledge base.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ImportBody {
  url: string;
  title?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { url, title } = await req.json() as ImportBody;

    if (!url?.trim()) {
      return new Response(
        JSON.stringify({ error: 'URL is required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url.trim());
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid URL format.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch the URL content
    const response = await fetch(parsedUrl.toString(), {
      signal: AbortSignal.timeout(30000),
      headers: {
        'User-Agent': 'TekSure Knowledge Base Importer/1.0',
        'Accept': 'text/html,application/xhtml+xml,text/plain,*/*',
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch URL: ${response.status} ${response.statusText}` }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const contentType = response.headers.get('content-type') ?? '';
    let content = '';
    let extractedTitle = title?.trim() || parsedUrl.hostname;

    if (contentType.includes('text/html')) {
      // Parse HTML and extract text content
      const html = await response.text();
      content = extractTextFromHtml(html);
      
      // Try to get title from <title> or <h1>
      if (!title?.trim()) {
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        if (titleMatch) extractedTitle = titleMatch[1].trim();
        else {
          const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
          if (h1Match) extractedTitle = h1Match[1].trim();
        }
      }
    } else {
      // Plain text or other
      content = await response.text();
    }

    // Truncate very large content (150k chars)
    if (content.length > 150000) {
      content = content.substring(0, 150000) + '\n\n[Content truncated...]';
    }

    // Save to database
    const { data, error } = await supabase
      .from('knowledge_manual_sources')
      .insert({
        title: extractedTitle,
        content: content,
        source_url: parsedUrl.toString(),
        source_type: 'manual',
        original_filename: null,
      })
      .select('id')
      .single();

    if (error) {
      console.error('Insert error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        id: data.id, 
        title: extractedTitle,
        extractedChars: content.length 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('knowledge-source-import error:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function extractTextFromHtml(html: string): string {
  // Remove scripts and styles
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Remove HTML comments
  text = text.replace(/<!--[\s\S]*?-->/g, '');
  
  // Replace block elements with newlines
  text = text.replace(/<\/(p|div|h[1-6]|li|tr|br)>/gi, '\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  
  // Remove remaining tags
  text = text.replace(/<[^>]+>/g, ' ');
  
  // Decode HTML entities
  text = text.replace(/&nbsp;/gi, ' ');
  text = text.replace(/&amp;/gi, '&');
  text = text.replace(/&lt;/gi, '<');
  text = text.replace(/&gt;/gi, '>');
  text = text.replace(/&quot;/gi, '"');
  text = text.replace(/&#39;/gi, "'");
  
  // Clean up whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.replace(/[ \t]+/g, ' ');
  text = text.trim();

  return text;
}
