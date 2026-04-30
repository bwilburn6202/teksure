-- Allow half-hour appointment slots (e.g. "07:00", "07:30", … "22:00")
-- by dropping the legacy CHECK that only permitted morning/afternoon/evening.
-- The column stays TEXT so existing legacy rows continue to display.

ALTER TABLE public.bookings
  DROP CONSTRAINT IF EXISTS bookings_preferred_slot_check;
