-- Unified Get Help form: capture preferred appointment time, service
-- category, and uploaded images alongside the existing callback request.
-- The form merges the old "Reach out to me" + "Schedule a time" flows
-- into a single submission, so help_requests now holds everything that
-- bookings used to handle for an unauthenticated user.

ALTER TABLE public.help_requests
  ADD COLUMN IF NOT EXISTS service_type    TEXT,
  ADD COLUMN IF NOT EXISTS preferred_date  DATE,
  ADD COLUMN IF NOT EXISTS preferred_slot  TEXT,
  ADD COLUMN IF NOT EXISTS image_urls      TEXT[];

-- Public storage bucket for images attached to a help request. Public
-- read makes the URLs we save embeddable in confirmation emails and the
-- admin inbox without needing signed URLs.
INSERT INTO storage.buckets (id, name, public)
VALUES ('help-attachments', 'help-attachments', true)
ON CONFLICT (id) DO NOTHING;

-- RLS on storage.objects: anon + authenticated can upload to this bucket
-- and anyone can read. Upload size is capped client-side; we still rely
-- on Supabase storage's per-bucket file-size cap as the authoritative limit.
DROP POLICY IF EXISTS "help-attachments anon insert" ON storage.objects;
CREATE POLICY "help-attachments anon insert"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'help-attachments');

DROP POLICY IF EXISTS "help-attachments public read" ON storage.objects;
CREATE POLICY "help-attachments public read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'help-attachments');
