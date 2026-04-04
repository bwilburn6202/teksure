# Knowledge Base Deployment

This feature is admin-only in v1 and depends on Supabase Edge Functions plus an Ollama runtime.

## Scope

The current branch adds:

- `/admin/knowledge-base`
- `knowledge_documents`
- `knowledge_concepts`
- `knowledge_outputs`
- `knowledge_manual_sources`
- `ollama-health` edge function
- `knowledge-base-compile` edge function

It compiles from `scraped_articles` plus admin-added manual sources and generates markdown answer artifacts.
It also generates Marp-compatible deck outputs.
The admin UI now includes browsers for compiled documents, concept pages, and source-linked outputs.

## Required Secrets

Set these in Supabase:

```bash
supabase secrets set OLLAMA_BASE_URL=http://host.docker.internal:11434
supabase secrets set OLLAMA_MODEL=qwen2.5:7b
```

Notes:

- `OLLAMA_BASE_URL` must be reachable from the Supabase function runtime you use.
- If you deploy hosted Supabase functions, `host.docker.internal` will not work unless you provide a reachable server endpoint for Ollama.
- For local development with `supabase start`, `host.docker.internal` is usually the correct starting point when Ollama runs on the host machine.

## Apply Database Changes

```bash
supabase link --project-ref vrhxitxzqtbphzsbdqih
supabase db push
```

This applies:

- [`supabase/migrations/20260403150000_knowledge_base.sql`](/Users/baileywilburn/Documents/New%20project/teksure/supabase/migrations/20260403150000_knowledge_base.sql)
- [`supabase/migrations/20260403170000_knowledge_manual_sources.sql`](/Users/baileywilburn/Documents/New%20project/teksure/supabase/migrations/20260403170000_knowledge_manual_sources.sql)
- [`supabase/migrations/20260403171000_knowledge_document_source_links.sql`](/Users/baileywilburn/Documents/New%20project/teksure/supabase/migrations/20260403171000_knowledge_document_source_links.sql)

## Deploy Edge Functions

Deploy the new functions:

```bash
supabase functions deploy ollama-health
supabase functions deploy knowledge-base-compile
```

Or deploy everything:

```bash
supabase functions deploy
```

## Local Runbook

1. Start Ollama locally:

```bash
ollama serve
ollama pull qwen2.5:7b
```

2. Start Supabase local services if needed:

```bash
supabase start
```

3. Run the frontend:

```bash
npm install
npm run dev
```

4. Sign in as an admin user and visit:

`/admin/knowledge-base`

## Expected Admin Flow

1. Confirm Ollama health shows `Available`.
2. Add manual sources by file import or paste.
   Supported file types: `.md`, `.txt`, `.pdf`, `.docx`
   You can also import directly from a web URL through the admin UI.
3. Edit or delete manual sources in the source library as needed.
4. Use `Compile Knowledge Base` to build compiled docs from `scraped_articles` and manual sources.
5. Use `Generate Answer` or `Generate Deck` to create markdown artifacts in `knowledge_outputs`.
6. Inspect compiled documents, concepts, and selected outputs directly in the admin UI.

## Failure Modes

### Ollama unavailable

Symptoms:

- Runtime badge shows unavailable
- Compile and answer actions remain disabled

Checks:

- verify `ollama serve` is running
- verify the configured model is installed
- verify `OLLAMA_BASE_URL` is reachable from the function runtime

### No compiled data

Symptoms:

- answer generation returns no compiled documents

Checks:

- ensure `scraped_articles` contains rows with status `scraped`, `simplified`, or `published`
- run compile first

### Permission denied

Symptoms:

- edge function returns `Admin access required`

Checks:

- ensure the signed-in user has `profiles.role = 'admin'`

## Current Limitations

- no filesystem vault sync yet
- no image OCR pipeline yet
- URL extraction is heuristic HTML parsing, not a full reader-mode pipeline
- concept generation is intentionally lightweight and derived from compiled keywords
