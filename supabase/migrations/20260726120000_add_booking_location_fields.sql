-- Add service location details to bookings.
--
-- WHY
-- The site sells in-home technician visits ("a technician comes to your home",
-- "travel within 10 miles", per-mile charges beyond that) but the bookings
-- table had no way to record whether a customer wanted remote or in-home help,
-- and no address to send anyone to. A customer could book and pay a deposit for
-- a home visit and TekSure would have no idea where to go.
--
-- SAFETY
-- Every column here is nullable with no default change to existing rows, so
-- this is additive and non-breaking. Existing bookings keep working; they
-- simply have NULL location details, which the admin UI shows as "not
-- specified" (that is accurate — those bookings genuinely never captured it).

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS service_location text
    CHECK (service_location IN ('remote', 'onsite')),
  ADD COLUMN IF NOT EXISTS street_address text,
  ADD COLUMN IF NOT EXISTS city text,
  ADD COLUMN IF NOT EXISTS state text,
  ADD COLUMN IF NOT EXISTS postal_code text;

COMMENT ON COLUMN public.bookings.service_location IS
  'remote = phone/screen-share session; onsite = technician travels to the customer.';
COMMENT ON COLUMN public.bookings.street_address IS
  'Only collected for onsite bookings. Null for remote sessions.';
COMMENT ON COLUMN public.bookings.postal_code IS
  'Used to confirm the address falls inside the served area before dispatch.';

-- Lets the admin dashboard pull the day''s onsite jobs without scanning the
-- whole table as booking volume grows.
CREATE INDEX IF NOT EXISTS bookings_service_location_date_idx
  ON public.bookings (service_location, preferred_date);
