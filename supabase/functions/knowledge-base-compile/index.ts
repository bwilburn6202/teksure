import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const OLLAMA_BASE_URL = Deno.env.get('OLLAMA_BASE_URL') ?? 'http://host.docker.internal:11434';
const OLLAMA_MODEL = Deno.env.get('OLLAMA_MODEL') ?? 'qwen2.5:7b';

type Mode = 'compile' | 'answer' | 'deck' | 'report';

interface ScrapedArticle {
  id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  tags: string[] | null;
  category: string | null;
  scrape_status: string;
  source: { name: string; domain: string } | null;
}

interface ManualSource {
  id: string;
  title: string;
  source_url: string | null;
  content: string;
  source_type: string;
  original_filename: string | null;
}

interface KnowledgeDocument {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
}

interface CompileSource {
  sourceId: string;
  sourceKind: 'scraped_article' | 'manual_source';
  title: string;
  sourceUrl: string;
  content: string;
  category: string | null;
  tags: string[];
  sourceName: string;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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

  return serviceClient;
}

async function callOllama(prompt: string, format: 'json' | undefined = undefined) {
  const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
      format,
      options: {
        temperature: 0.2,
      },
    }),
    signal: AbortSignal.timeout(90_000),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Ollama error ${response.status}: ${body}`);
  }

  const payload = await response.json();
  return String(payload.response ?? '').trim();
}

async function summarizeArticle(article: CompileSource) {
  const prompt = `Summarize this source for an internal markdown knowledge base.

Return strict JSON with keys:
- summary: 2-4 sentence summary
- keywords: array of 4 to 8 short keywords

Title: ${article.title}
Category: ${article.category ?? 'unknown'}
Source: ${article.sourceName}
URL: ${article.sourceUrl}

Content:
${article.content.slice(0, 8000)}`;

  const raw = await callOllama(prompt, 'json');
  const parsed = JSON.parse(raw) as { summary?: string; keywords?: string[] };
  const keywords = Array.isArray(parsed.keywords)
    ? parsed.keywords.map((entry) => entry.toLowerCase().trim()).filter(Boolean).slice(0, 8)
    : [];

  return {
    summary: parsed.summary?.trim() || 'Summary unavailable.',
    keywords,
  };
}

function buildDocumentMarkdown(article: CompileSource, summary: string, keywords: string[]) {
  return `# ${article.title}

## Source
- URL: ${article.sourceUrl}
- Source: ${article.sourceName}
- Source Kind: ${article.sourceKind}
- Category: ${article.category ?? 'Uncategorized'}
- Keywords: ${keywords.map((keyword) => `\`${keyword}\``).join(', ') || 'None'}

## Summary
${summary}

## Raw excerpt
${article.content.slice(0, 2500).trim()}
`;
}

function buildConceptMarkdown(keyword: string, docs: Array<{ id: string; title: string; summary: string }>) {
  return `# ${keyword}

## Summary
This concept currently appears in ${docs.length} compiled source${docs.length === 1 ? '' : 's'}.

## Related Sources
${docs.map((doc) => `- ${doc.title}: ${doc.summary}`).join('\n')}
`;
}

function scoreDocument(question: string, doc: KnowledgeDocument) {
  const terms = new Set((question.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []).filter(Boolean));
  let score = 0;
  for (const term of terms) {
    if (doc.title.toLowerCase().includes(term)) score += 3;
    if (doc.summary.toLowerCase().includes(term)) score += 2;
    if ((doc.keywords ?? []).includes(term)) score += 4;
  }
  return score;
}

function buildCanonicalSourceMap(ranked: Array<KnowledgeDocument & { score: number }>) {
  return ranked
    .map((doc, index) => `- S${index + 1}: ${doc.title}`)
    .join('\n');
}

function appendCanonicalCitations(markdown: string, ranked: Array<KnowledgeDocument & { score: number }>, mode: 'answer' | 'deck' | 'report') {
  const canonicalMap = buildCanonicalSourceMap(ranked);

  if (mode === 'deck') {
    return `${markdown.trim()}\n\n---\n\n# Canonical Source Map\n\n${canonicalMap}\n`;
  }

  const hasSourcesSection = /\n##\s+Sources\b/i.test(markdown);
  if (hasSourcesSection) {
    return `${markdown.trim()}\n\n### Canonical Source Map\n${canonicalMap}\n`;
  }

  return `${markdown.trim()}\n\n## Sources\n${canonicalMap}\n`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const supabase = await requireAdmin(req);
    const body = await req.json().catch(() => ({}));
    const mode = (body.mode ?? 'compile') as Mode;

    if (mode === 'compile') {
      const limit = Math.max(1, Math.min(Number(body.limit ?? 8), 20));
      const { data: articles, error } = await supabase
        .from('scraped_articles')
        .select(`
          id, original_url, original_title, original_content, tags, category, scrape_status,
          source:source_id ( name, domain )
        `)
        .in('scrape_status', ['scraped', 'simplified', 'published'])
        .order('scraped_at', { ascending: false })
        .limit(limit);

      if (error) {
        throw error;
      }

      const { data: manualSources, error: manualError } = await supabase
        .from('knowledge_manual_sources')
        .select('id, title, source_url, content, source_type, original_filename')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (manualError) {
        throw manualError;
      }

      const compileSources: CompileSource[] = [
        ...((articles ?? []) as unknown as ScrapedArticle[]).map((article) => ({
          sourceId: article.id,
          sourceKind: 'scraped_article' as const,
          title: article.original_title,
          sourceUrl: article.original_url,
          content: article.original_content,
          category: article.category,
          tags: article.tags ?? [],
          sourceName: article.source?.name ?? 'Scraped article',
        })),
        ...((manualSources ?? []) as ManualSource[]).map((source) => ({
          sourceId: source.id,
          sourceKind: 'manual_source' as const,
          title: source.title,
          sourceUrl: source.source_url ?? `manual://${source.id}`,
          content: source.content,
          category: 'Manual Source',
          tags: [source.source_type, ...(source.original_filename ? [source.original_filename] : [])],
          sourceName: source.source_type === 'upload' ? 'Admin upload' : 'Manual source',
        })),
      ].slice(0, limit * 2);

      const compiledDocs: Array<{ id: string; title: string; summary: string; keywords: string[] }> = [];

      for (const article of compileSources) {
        const summary = await summarizeArticle(article);
        const keywords = [...new Set([...(summary.keywords ?? []), ...(article.tags ?? []).map((tag) => tag.toLowerCase())])].slice(0, 8);
        const markdown = buildDocumentMarkdown(article, summary.summary, keywords);

        const { data: savedDoc, error: docError } = await supabase
          .from('knowledge_documents')
          .upsert({
            source_article_id: article.sourceKind === 'scraped_article' ? article.sourceId : null,
            manual_source_id: article.sourceKind === 'manual_source' ? article.sourceId : null,
            title: article.title,
            source_url: article.sourceUrl,
            summary: summary.summary,
            keywords,
            markdown,
            model_name: OLLAMA_MODEL,
            compile_status: 'ready',
          }, { onConflict: article.sourceKind === 'scraped_article' ? 'source_article_id' : 'manual_source_id' })
          .select('id, title, summary, keywords')
          .maybeSingle();

        if (docError) {
          throw docError;
        }
        if (savedDoc) {
          compiledDocs.push(savedDoc as unknown as { id: string; title: string; summary: string; keywords: string[] });
        }
      }

      const conceptMap = new Map<string, Array<{ id: string; title: string; summary: string }>>();
      for (const doc of compiledDocs) {
        for (const keyword of doc.keywords ?? []) {
          if (!conceptMap.has(keyword)) conceptMap.set(keyword, []);
          conceptMap.get(keyword)!.push({ id: doc.id, title: doc.title, summary: doc.summary });
        }
      }

      const topConcepts = [...conceptMap.entries()]
        .sort((a, b) => b[1].length - a[1].length)
        .slice(0, 12);

      for (const [keyword, docs] of topConcepts) {
        await supabase
          .from('knowledge_concepts')
          .upsert({
            slug: slugify(keyword),
            title: keyword,
            summary: `Concept compiled from ${docs.length} source${docs.length === 1 ? '' : 's'}.`,
            markdown: buildConceptMarkdown(keyword, docs),
            source_document_ids: docs.map((doc) => doc.id),
            model_name: OLLAMA_MODEL,
          }, { onConflict: 'slug' });
      }

      return json({
        ok: true,
        compiledDocuments: compiledDocs.length,
        compiledConcepts: topConcepts.length,
        sourceCount: compileSources.length,
        model: OLLAMA_MODEL,
      });
    }

    if (mode === 'answer' || mode === 'deck' || mode === 'report') {
      const question = String(body.question ?? '').trim();
      if (!question) {
        return json({ error: `Question is required for ${mode} mode.` }, 400);
      }

      const { data: docs, error } = await supabase
        .from('knowledge_documents')
        .select('id, title, summary, keywords')
        .order('updated_at', { ascending: false })
        .limit(50);

      if (error) {
        throw error;
      }

      const ranked = ((docs ?? []) as unknown as KnowledgeDocument[])
        .map((doc) => ({ ...doc, score: scoreDocument(question, doc) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      if (!ranked.length) {
        return json({ error: 'No compiled knowledge documents are available yet.' }, 422);
      }

      const prompt = mode === 'deck'
        ? `Create a Marp markdown slide deck using the provided knowledge base sources.

Requirements:
- Return valid markdown only
- Start with frontmatter suitable for Marp
- 6 to 10 slides
- Use short bullets
- Every substantive slide must cite relevant sources inline using square brackets like [S1] or [S2, S3]
- Include a final slide listing the sources used
- Do not invent sources

Deck topic: ${question}

Sources:
${ranked.map((doc, index) => `S${index + 1}: ${doc.title}\nSummary: ${doc.summary}\nKeywords: ${(doc.keywords ?? []).join(', ')}`).join('\n\n')}`
        : mode === 'report'
          ? `Write a detailed markdown research report using the provided knowledge base sources.

Return markdown with these sections:
- # title
- ## Executive Summary
- ## Key Findings
- ## Analysis
- ## Risks and Unknowns
- ## Sources
- ## Recommended Next Steps
- In the substantive sections, cite claims inline using source markers like [S1] or [S2, S3]
- In the Sources section, map each source marker to its title
- Keep the report concise but substantial, roughly 700 to 1400 words
- Do not cite any source that is not provided

Report topic: ${question}

Sources:
${ranked.map((doc, index) => `S${index + 1}: ${doc.title}\nSummary: ${doc.summary}\nKeywords: ${(doc.keywords ?? []).join(', ')}`).join('\n\n')}`
          : `Answer the question using the provided knowledge base sources.

Return markdown with these sections:
- # title
- ## Answer
- ## Sources
- ## Next Steps
- In the Answer section, cite claims inline using source markers like [S1] or [S2, S3]
- In the Sources section, map each source marker to its title
- Do not cite any source that is not provided

Question: ${question}

Sources:
${ranked.map((doc, index) => `S${index + 1}: ${doc.title}\nSummary: ${doc.summary}\nKeywords: ${(doc.keywords ?? []).join(', ')}`).join('\n\n')}`;

      const rawMarkdown = await callOllama(prompt);
      const markdown = appendCanonicalCitations(rawMarkdown, ranked, mode);
      const title = question.length > 80 ? `${question.slice(0, 77)}...` : question;
      const outputType = mode === 'deck' ? 'deck' : mode === 'report' ? 'report' : 'answer';

      const { data: output, error: outputError } = await supabase
        .from('knowledge_outputs')
        .insert({
          output_type: outputType,
          title,
          prompt: question,
          markdown,
          source_document_ids: ranked.map((doc) => doc.id),
          model_name: OLLAMA_MODEL,
          status: 'ready',
        })
        .select('id, title, markdown, created_at')
        .single();

      if (outputError) {
        throw outputError;
      }

      return json({
        ok: true,
        output,
        outputType,
        sourcesUsed: ranked.length,
        model: OLLAMA_MODEL,
      });
    }

    return json({ error: `Unsupported mode "${mode}".` }, 400);
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    return json({
      error: error instanceof Error ? error.message : 'Knowledge-base operation failed.',
    }, 500);
  }
});
