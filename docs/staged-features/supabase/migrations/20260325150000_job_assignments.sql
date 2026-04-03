-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260325150000_job_assignments.sql
--
-- Adds job assignment support:
--  • assigned_technician_id column on bookings table (FK → technician_profiles)
--  • assigned_at timestamp to track when a job was assigned
--  • RLS policy so approved technicians can see their own assigned bookings
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Add assignment columns to bookings ────────────────────────────────────
ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS assigned_technician_id  UUID
    REFERENCES technician_profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS assigned_at             TIMESTAMPTZ;

-- Index for fast lookup of jobs assigned to a specific tech
CREATE INDEX IF NOT EXISTS bookings_assigned_tech_idx
  ON bookings (assigned_technician_id)
  WHERE assigned_technician_id IS NOT NULL;

-- ── 2. RLS: Approved technicians can read their own assigned bookings ─────────
-- (bookings table must already have RLS enabled from earlier migrations)

CREATE POLICY "Technicians can view their assigned bookings"
  ON bookings
  FOR SELECT
  USING (
    assigned_technician_id IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM technician_profiles tp
      WHERE tp.id = bookings.assigned_technician_id
        AND tp.user_id = auth.uid()
        AND tp.status = 'approved'
    )
  );
