// Supabase Edge Function: knowledge-base-compile
// Uses Ollama to compile scraped articles into knowledge documents and concepts.
// Also handles: answer, deck, report generation modes.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_INSTRUCTION = `You are a helpful assistant that compiles tech support documentation.

For summaries: Extract key information, create a concise summary (3-5 sentences), and identify important keywords.
For concepts: Explain topics clearly in plain English suitable for beginners and seniors.
For answers: Give direct, practical answers using plain language.
For decks: Create Marp-compatible markdown slides (=== for slide separator).
For reports: Create detailed markdown reports with proper structure.

Never use jargon without explaining it. Be patient and encouraging.`;

// Modes: compile, answer, deck, report
interface CompileBody {
  mode: 'compile' | 'answer' | 'deck' | 'report';
  limit?: number;
  question?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const ollamaUrl = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://host.docker.internal:11434';
    const model = Deno.env.get('OLLAMA_MODEL') ?? 'qwen2.5:7b';

    const { mode, limit = 8, question } = await req.json() as CompileBody;

    // ── Compile Mode: Process scraped articles ─────────────────────────────
    if (mode === 'compile') {
      const compiledDocuments: string[] = [];
      const compiledConcepts: string[] = [];

      // Fetch uncompiled articles
      const { data: articles, error: articlesError } = await supabase
        .from('knowledge_documents')
        .select('*')
        .eq('compile_status', 'pending')
        .limit(Number(limit))
        .is('source_article_id', null);

      if (articlesError) {
        return new Response(JSON.stringify({ error: articlesError.message }), {
          status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (!articles || articles.length === 0) {
        return new Response(JSON.stringify({ 
          compiledDocuments: 0, 
          compiledConcepts: 0,
          message: 'No pending documents to compile.' 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Process each article
      for (const article of articles) {
        try {
          const prompt = `Analyze this document and create:
1. A summary (3-5 sentences)
2. Keywords (5-10 words)
3. A concept explanation suitable for beginners

Document:
${article.content?.substring(0, 8000) || article.markdown?.substring(0, 8000) || 'No content'}

Respond in JSON format:
{
  "summary": "your summary here",
  "keywords": ["word1", "word2", ...],
  "concept": "your concept explanation in plain English"
}`;

          const ollamaResp = await fetch(`${ollamaUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model,
              prompt,
              system: SYSTEM_INSTRUCTION,
              stream: false,
              options: { temperature: 0.3, num_predict: 2000 }
            }),
            signal: AbortSignal.timeout(120000),
          });

          if (!ollamaResp.ok) {
            console.error(`Ollama error for ${article.id}:`, await ollamaResp.text());
            continue;
          }

          const result = await ollamaResp.json();
          let parsed;
          try {
            parsed = JSON.parse(result.response);
          } catch {
            parsed = { summary: result.response.substring(0, 500), keywords: [], concept: result.response };
          }

          // Update the document
          await supabase
            .from('knowledge_documents')
            .update({
              summary: parsed.summary || '',
              keywords: parsed.keywords || [],
              markdown: parsed.concept || parsed.summary || '',
              compile_status: 'ready',
              model_name: model,
              updated_at: new Date().toISOString(),
            })
            .eq('id', article.id);

          compiledDocuments.push(article.id);

          // Create a concept from this document
          if (parsed.concept && parsed.concept.length > 100) {
            const slug = article.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '')
              .substring(0, 60);

            const { error: conceptError } = await supabase
              .from('knowledge_concepts')
              .upsert({
                slug,
                title: article.title,
                summary: parsed.summary || '',
                markdown: parsed.concept,
                source_document_ids: [article.id],
                model_name: model,
              }, { onConflict: 'slug' });

            if (!conceptError) {
              compiledConcepts.push(slug);
            }
          }
        } catch (err) {
          console.error(`Error compiling ${article.id}:`, err);
          await supabase
            .from('knowledge_documents')
            .update({ compile_status: 'error' })
            .eq('id', article.id);
        }
      }

      return new Response(JSON.stringify({
        compiledDocuments: compiledDocuments.length,
        compiledConcepts: compiledConcepts.length,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // ── Answer Mode: Generate answer from knowledge base ─────────────────
    if (mode === 'answer') {
      if (!question) {
        return new Response(JSON.stringify({ error: 'Question is required for answer mode.' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Fetch recent documents for context
      const { data: docs } = await supabase
        .from('knowledge_documents')
        .select('title, summary, markdown, keywords')
        .eq('compile_status', 'ready')
        .limit(10);

      const context = docs?.map((d) => 
        `## ${d.title}\n${d.markdown || d.summary || ''}`
      ).join('\n\n') || 'No documents in knowledge base.';

      const prompt = `Based on the following knowledge base, answer the user's question in plain English.

Knowledge Base:
${context}

User Question: ${question}

If the knowledge base doesn't have enough information, say so honestly.`;

      const ollamaResp = await fetch(`${ollamaUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          prompt,
          system: SYSTEM_INSTRUCTION,
          stream: false,
          options: { temperature: 0.7, num_predict: 1500 }
        }),
        signal: AbortSignal.timeout(120000),
      });

      if (!ollamaResp.ok) {
        return new Response(JSON.stringify({ error: 'AI service unavailable.' }), {
          status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const result = await ollamaResp.json();

      // Save as output
      await supabase
        .from('knowledge_outputs')
        .insert({
          output_type: 'answer',
          title: question,
          prompt: question,
          markdown: result.response,
          source_document_ids: docs?.map((d) => d.id) || [],
          model_name: model,
        });

      return new Response(JSON.stringify({ 
        text: result.response,
        sources: docs?.map((d) => ({ title: d.title, id: d.id })) || []
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // ── Deck Mode: Generate Marp slides ─────────────────────────────────
    if (mode === 'deck') {
      if (!question) {
        return new Response(JSON.stringify({ error: 'Topic is required for deck mode.' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const { data: docs } = await supabase
        .from('knowledge_documents')
        .select('title, markdown, keywords')
        .eq('compile_status', 'ready')
        .limit(8);

      const context = docs?.map((d) => 
        `# ${d.title}\n${d.markdown || ''}`
      ).join('\n\n') || '';

      const prompt = `Create a Marp-compatible slide deck about "${question}".

Use this format for each slide:
=== slide
# Slide Title
Content here...

Base your content on this knowledge:
${context}

Create 6-10 slides covering the topic. Use simple language suitable for beginners.`;

      const ollamaResp = await fetch(`${ollamaUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          prompt,
          system: 'Create Marp markdown slide decks. Use "=== slide" to separate slides.',
          stream: false,
          options: { temperature: 0.7, num_predict: 3000 }
        }),
        signal: AbortSignal.timeout(180000),
      });

      if (!ollamaResp.ok) {
        return new Response(JSON.stringify({ error: 'AI service unavailable.' }), {
          status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const result = await ollamaResp.json();

      const output = await supabase
        .from('knowledge_outputs')
        .insert({
          output_type: 'deck',
          title: question,
          prompt: question,
          markdown: result.response,
          source_document_ids: docs?.map((d) => d.id) || [],
          model_name: model,
        });

      return new Response(JSON.stringify({ 
        output: { markdown: result.response },
        id: output.data?.id
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // ── Report Mode: Generate detailed report ───────────────────────────────
    if (mode === 'report') {
      if (!question) {
        return new Response(JSON.stringify({ error: 'Topic is required for report mode.' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const { data: docs } = await supabase
        .from('knowledge_documents')
        .select('title, markdown, summary, keywords')
        .eq('compile_status', 'ready')
        .limit(15);

      const context = docs?.map((d) => 
        `## ${d.title}\n${d.markdown || d.summary || ''}`
      ).join('\n\n') || '';

      const prompt = `Write a comprehensive report about "${question}".

Research and write a detailed report based on this knowledge base:
${context}

Include:
- Introduction
- Key concepts
- Practical steps/guidance
- Common issues and solutions
- Resources

Use plain English suitable for non-technical readers.`;

      const ollamaResp = await fetch(`${ollamaUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          prompt,
          system: SYSTEM_INSTRUCTION,
          stream: false,
          options: { temperature: 0.7, num_predict: 5000 }
        }),
        signal: AbortSignal.timeout(300000),
      });

      if (!ollamaResp.ok) {
        return new Response(JSON.stringify({ error: 'AI service unavailable.' }), {
          status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const result = await ollamaResp.json();

      const output = await supabase
        .from('knowledge_outputs')
        .insert({
          output_type: 'report',
          title: question,
          prompt: question,
          markdown: result.response,
          source_document_ids: docs?.map((d) => d.id) || [],
          model_name: model,
        });

      return new Response(JSON.stringify({ 
        output: { markdown: result.response },
        id: output.data?.id
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid mode.' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('knowledge-base-compile error:', err);
    return new Response(JSON.stringify({ 
      error: err instanceof Error ? err.message : 'Unknown error' 
    }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
