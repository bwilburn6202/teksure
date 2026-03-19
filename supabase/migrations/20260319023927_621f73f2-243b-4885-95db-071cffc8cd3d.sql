
CREATE TABLE public.help_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT,
  phone TEXT,
  email TEXT,
  device_type TEXT,
  problem_description TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.help_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (anon + authenticated) can insert
CREATE POLICY "Anyone can insert help requests"
  ON public.help_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Authenticated users can read their own rows
CREATE POLICY "Users can read own help requests"
  ON public.help_requests FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
