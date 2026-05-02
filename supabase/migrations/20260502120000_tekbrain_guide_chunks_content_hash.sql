-- ─────────────────────────────────────────────────────────────────────────────
-- TekBrain v2 — guide_chunks.content_hash
--
-- The `embed-guides` Edge Function decides whether to call OpenAI for a chunk
-- by comparing the chunk's freshly-computed SHA-256 against the hash stored on
-- the matching row in `guide_chunks`. Without this column, every re-ingestion
-- pays the full embedding cost and the upsert itself fails because the edge
-- function writes a `content_hash` field the table doesn't have.
--
-- This migration mirrors what 20260422100000_tekbrain_private_kb_chunk_hashes
-- did for `knowledge_document_chunks`, so the public-guide and private-doc
-- ingestion paths stay in lockstep.
--
-- Steps:
--   1. Add the column nullable so the ALTER works on a populated table.
--   2. Backfill any existing rows with md5(content) — close enough for the
--      first comparison; the next embed run will overwrite with the real
--      SHA-256 the edge function uses going forward.
--   3. Lock the column NOT NULL once it's populated.
--   4. Index (guide_id, content_hash) to make the lookup in
--      loadExistingHashes() index-only.
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.guide_chunks
  ADD COLUMN IF NOT EXISTS content_hash text;

UPDATE public.guide_chunks
SET content_hash = md5(content)
WHERE content_hash IS NULL;

ALTER TABLE public.guide_chunks
  ALTER COLUMN content_hash SET NOT NULL;

CREATE INDEX IF NOT EXISTS idx_guide_chunks_content_hash
  ON public.guide_chunks (guide_id, content_hash);
