-- Homepage testimonials — Supabase-backed so Bailey can edit without code changes.
--
-- Read-side: anyone can SELECT rows where is_published = true (powers the public homepage).
-- Write-side: only admins can insert/update/delete.
-- The homepage component falls back to a small hardcoded list if this table
-- is empty or the query fails, so the site always renders something friendly.

CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  detail TEXT NOT NULL,
  quote TEXT NOT NULL,
  rating SMALLINT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_published BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX testimonials_published_order_idx
  ON public.testimonials (is_published, display_order, created_at DESC);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Public read of published testimonials (anon + authenticated)
CREATE POLICY "Anyone can read published testimonials"
  ON public.testimonials FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Admins can read everything (including drafts)
CREATE POLICY "Admins can read all testimonials"
  ON public.testimonials FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can insert testimonials"
  ON public.testimonials FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can update testimonials"
  ON public.testimonials FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can delete testimonials"
  ON public.testimonials FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Keep updated_at fresh on edits
CREATE OR REPLACE FUNCTION public.touch_testimonials_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER testimonials_set_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.touch_testimonials_updated_at();

-- Seed the three placeholders that the homepage currently hardcodes so the
-- transition to Supabase-backed content is invisible to users on day one.
-- Bailey can edit, hide (is_published = false), or replace these any time.
INSERT INTO public.testimonials (name, detail, quote, rating, display_order)
VALUES
  (
    'Margaret T.',
    '67, Florida',
    'TekSure helped me finally understand how to back up my photos. The instructions were so clear. I didn''t feel stupid for the first time!',
    5,
    1
  ),
  (
    'Harold W.',
    '72, Ohio',
    'My son used to spend every Sunday helping me with my phone. Now I just go to TekSure and figure it out myself. He''s very proud.',
    5,
    2
  ),
  (
    'Dorothy K.',
    '69, Texas',
    'I was almost scammed out of $2,000. TekSure''s scam guide taught me exactly what to look for. I caught it in time.',
    5,
    3
  );
