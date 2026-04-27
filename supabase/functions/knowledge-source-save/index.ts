// Supabase Edge Function: knowledge-source-save
// Saves a manual source (pasted content or uploaded file) to the knowledge base.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SaveBody {
  sourceId?: string;
  title: string;
  content: string;
  sourceUrl?: string;
  sourceType: 'manual' | 'upload';
  originalFilename?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { sourceId, title, content, sourceUrl, sourceType, originalFilename } = await req.json() as SaveBody;

    if (!title?.trim() || !content?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Title and content are required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (sourceId) {
      // Update existing
      const { error } = await supabase
        .from('knowledge_manual_sources')
        .update({
          title: title.trim(),
          content: content.trim(),
          source_url: sourceUrl?.trim() || null,
          source_type: sourceType,
          original_filename: originalFilename?.trim() || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', sourceId);

      if (error) {
        console.error('Update error:', error);
        return new Response(
          JSON.stringify({ error: error.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ id: sourceId, title: title.trim() }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      // Insert new
      const { data, error } = await supabase
        .from('knowledge_manual_sources')
        .insert({
          title: title.trim(),
          content: content.trim(),
          source_url: sourceUrl?.trim() || null,
          source_type: sourceType,
          original_filename: originalFilename?.trim() || null,
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
        JSON.stringify({ id: data.id, title: title.trim() }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (err) {
    console.error('knowledge-source-save error:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
