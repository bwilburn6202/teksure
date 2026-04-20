-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260331120000_technician_availability.sql
--
-- Creates a technician_availability table so technicians can mark specific
-- dates & time slots as available. The booking page uses this data to show
-- only time slots that have an available technician.
--
-- Availability is per-date, per-slot, per-technician.
-- When a booking is assigned, admin can filter to available techs.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Table ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS technician_availability (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  technician_id     UUID        NOT NULL REFERENCES technician_profiles(id) ON DELETE CASCADE,
  available_date    DATE        NOT NULL,
  time_slot         TEXT        NOT NULL,   -- e.g. "9:00 AM", "10:00 AM"
  is_booked         BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Prevent duplicate availability entries for same tech + date + slot
CREATE UNIQUE INDEX IF NOT EXISTS tech_availability_unique_idx
  ON technician_availability (technician_id, available_date, time_slot);

-- Fast lookups for available slots on a given date
CREATE INDEX IF NOT EXISTS tech_availability_date_idx
  ON technician_availability (available_date, is_booked)
  WHERE is_booked = FALSE;

-- ── Row Level Security ────────────────────────────────────────────────────────
ALTER TABLE technician_availability ENABLE ROW LEVEL SECURITY;

-- Anyone can read availability (needed for the booking page to show slots)
CREATE POLICY "Anyone can read technician availability"
  ON technician_availability
  FOR SELECT
  USING (TRUE);

-- Technicians can manage their own availability
CREATE POLICY "Technicians can insert own availability"
  ON technician_availability
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM technician_profiles tp
      WHERE tp.id = technician_availability.technician_id
        AND tp.user_id = auth.uid()
        AND tp.status = 'approved'
    )
  );

CREATE POLICY "Technicians can update own availability"
  ON technician_availability
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM technician_profiles tp
      WHERE tp.id = technician_availability.technician_id
        AND tp.user_id = auth.uid()
        AND tp.status = 'approved'
    )
  );

CREATE POLICY "Technicians can delete own availability"
  ON technician_availability
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM technician_profiles tp
      WHERE tp.id = technician_availability.technician_id
        AND tp.user_id = auth.uid()
        AND tp.status = 'approved'
    )
  );

-- Admins can do everything
CREATE POLICY "Admins can manage all availability"
  ON technician_availability
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
        AND profiles.is_admin = TRUE
    )
  );

-- ── View: available slots per date ──────────────────────────────────────────
-- Aggregates how many techs are available per date+slot (for the booking page)
CREATE OR REPLACE VIEW available_slots AS
SELECT
  available_date,
  time_slot,
  COUNT(*) AS available_count
FROM technician_availability
WHERE is_booked = FALSE
  AND available_date >= CURRENT_DATE
GROUP BY available_date, time_slot
ORDER BY available_date, time_slot;
