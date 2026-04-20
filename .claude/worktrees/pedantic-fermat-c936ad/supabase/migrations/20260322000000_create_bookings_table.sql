-- Create bookings table for technician scheduling
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  service_type TEXT NOT NULL,
  device_type TEXT,
  preferred_date DATE NOT NULL,
  preferred_slot TEXT NOT NULL CHECK (preferred_slot IN ('morning', 'afternoon', 'evening')),
  problem_description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  tech_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (supports anonymous bookings)
CREATE POLICY "Anyone can create a booking"
  ON public.bookings FOR INSERT
  TO public
  WITH CHECK (true);

-- Authenticated users can read their own bookings
CREATE POLICY "Users can read own bookings"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Admins can read all bookings
CREATE POLICY "Admins can read all bookings"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update all bookings
CREATE POLICY "Admins can update bookings"
  ON public.bookings FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Techs can read bookings assigned to them
CREATE POLICY "Techs can read assigned bookings"
  ON public.bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = tech_id);

-- Trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION public.update_bookings_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_bookings_updated_at();
