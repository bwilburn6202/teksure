-- Create scam_reports table for community scam reporting
CREATE TABLE public.scam_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  scam_type TEXT NOT NULL,
  description TEXT NOT NULL,
  scam_url TEXT,
  scam_phone TEXT,
  scam_email_address TEXT,
  money_lost TEXT,
  reporter_contact TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.scam_reports ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a scam report
CREATE POLICY "Anyone can insert scam reports"
  ON public.scam_reports FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Admins can read all reports
CREATE POLICY "Admins can read scam reports"
  ON public.scam_reports FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
