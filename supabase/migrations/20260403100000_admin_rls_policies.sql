-- Add missing admin RLS policies for help_requests and profiles tables
-- These are required for the admin console to function properly

-- ============================================================
-- help_requests: Admin can read ALL help requests
-- ============================================================
CREATE POLICY "Admins can read all help requests"
  ON public.help_requests FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- help_requests: Admin can update ALL help requests (change status)
CREATE POLICY "Admins can update help requests"
  ON public.help_requests FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================
-- profiles: Admin can read ALL profiles (needed for tech verification tab)
-- ============================================================
CREATE POLICY "Admins can read all profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
