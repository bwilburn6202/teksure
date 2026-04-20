-- Stripe payments migration
-- Adds payment columns to the bookings table

-- Add Stripe payment columns to bookings
ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS stripe_session_id TEXT,
  ADD COLUMN IF NOT EXISTS stripe_payment_intent TEXT,
  ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'unpaid',
  ADD COLUMN IF NOT EXISTS service_type TEXT DEFAULT 'remote',
  ADD COLUMN IF NOT EXISTS price_cents INTEGER DEFAULT 4999;

-- Add check constraint for payment_status
ALTER TABLE bookings
  DROP CONSTRAINT IF EXISTS bookings_payment_status_check;
ALTER TABLE bookings
  ADD CONSTRAINT bookings_payment_status_check
  CHECK (payment_status IN ('unpaid', 'pending', 'paid', 'refunded', 'failed'));

-- Add check constraint for service_type
ALTER TABLE bookings
  DROP CONSTRAINT IF EXISTS bookings_service_type_check;
ALTER TABLE bookings
  ADD CONSTRAINT bookings_service_type_check
  CHECK (service_type IN ('in-home', 'remote', 'phone', 'drop-off'));

-- Index for faster Stripe lookup
CREATE INDEX IF NOT EXISTS bookings_stripe_session_idx ON bookings(stripe_session_id);

-- ============================================================
-- Create bookings table if it doesn't exist (safety fallback)
-- ============================================================
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  service_type TEXT DEFAULT 'remote',
  price_cents INTEGER DEFAULT 4999,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure RLS is enabled
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can read own bookings" ON bookings;
DROP POLICY IF EXISTS "Users can create bookings" ON bookings;
DROP POLICY IF EXISTS "Users can update own bookings" ON bookings;

-- Users can read their own bookings
CREATE POLICY "Users can read own bookings"
  ON bookings FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create bookings (user_id must match)
CREATE POLICY "Users can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own bookings (e.g., cancel)
CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE
  USING (auth.uid() = user_id);
