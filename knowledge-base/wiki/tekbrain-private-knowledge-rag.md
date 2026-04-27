# TekBrain Private Knowledge RAG (MindStudio-style)

This implementation adds a **private knowledge retrieval path** to TekBrain so answers can be grounded in internal/admin documents, not only public guide content.

## What was implemented

1. **Private vector chunk table**
   - New table: `knowledge_document_chunks`
   - Stores chunked `knowledge_documents` content + OpenAI embeddings (`vector(1536)`).
   - Includes metadata, heading, and source URL for citation display.

2. **Private retrieval SQL RPC**
   - New function: `match_knowledge_document_chunks(query_embedding, match_count)`
   - Returns top semantic matches from internal knowledge docs.

3. **Embedding pipeline for private docs**
   - New edge function: `embed-knowledge-documents`
   - Chunks `knowledge_documents` markdown, generates embeddings, upserts changed chunks.
   - Supports `document_ids`, `limit`, and `force_refresh`.

4. **TekBrain chat retrieval upgrade**
   - `tekbrain-chat` now retrieves from:
     - public guide chunks (`match_guide_chunks`), and
     - private knowledge chunks (`match_knowledge_document_chunks`)
   - Results are merged by similarity and trimmed to the top K context snippets.
   - Citation payload now includes `source_type` (`guide` vs `private_doc`) and optional `source_url`.

## Suggested rollout steps

1. Run DB migration to create `knowledge_document_chunks` + RPC.
2. Deploy `embed-knowledge-documents` and `tekbrain-chat` edge functions.
3. Backfill embeddings:
   - call `embed-knowledge-documents` with `force_refresh=true`.
4. Re-run after each knowledge-doc compile/import cycle.

## Example embed call

```bash
curl -X POST "$SUPABASE_URL/functions/v1/embed-knowledge-documents" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"limit":50,"force_refresh":true}'
```

## Why this matches the article pattern

- Separate ingestion/indexing from runtime chat.
- Use embeddings + vector search for semantic retrieval.
- Merge retrieved context into generation prompt.
- Keep citations and source traceability.
- Preserve private data in your controlled datastore (Supabase/Postgres).
