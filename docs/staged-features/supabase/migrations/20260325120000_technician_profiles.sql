-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260325120000_technician_profiles.sql
--
-- Creates the technician_profiles table to store technician applications and
-- approved technician records.
--
-- Status flow: pending → approved | rejected
-- ─────────────────────────────────────────────────────────────────────────────

-- ── Table ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS technician_profiles (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Optional link to an auth.users account (the tech may not have one yet
  -- when they apply, so this is nullable)
  user_id           UUID        REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Personal info
  full_name         TEXT        NOT NULL,
  email             TEXT        NOT NULL,
  phone             TEXT        NOT NULL,
  location          TEXT        NOT NULL,          -- city / postcode area

  -- Experience
  years_experience  INTEGER     NOT NULL DEFAULT 0,
  specialties       TEXT[]      NOT NULL DEFAULT '{}',
  bio               TEXT        NOT NULL,

  -- Availability & practical
  availability      TEXT        NOT NULL,
  has_dbs           BOOLEAN     NOT NULL DEFAULT FALSE,
  has_own_transport BOOLEAN     NOT NULL DEFAULT FALSE,

  -- Optional extras
  linkedin_url      TEXT,

  -- Admin fields
  status            TEXT        NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes       TEXT,                          -- internal notes from admin
  reviewed_at       TIMESTAMPTZ,
  reviewed_by       UUID        REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Timestamps
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS technician_profiles_status_idx
  ON technician_profiles (status);

CREATE INDEX IF NOT EXISTS technician_profiles_user_id_idx
  ON technician_profiles (user_id)
  WHERE user_id IS NOT NULL;

-- Prevent duplicate applications from the same email
CREATE UNIQUE INDEX IF NOT EXISTS technician_profiles_email_unique_idx
  ON technician_profiles (lower(email));

-- ── Auto-update updated_at ────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_technician_profiles_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER technician_profiles_updated_at
  BEFORE UPDATE ON technician_profiles
  FOR EACH ROW EXECUTE FUNCTION update_technician_profiles_updated_at();

-- ── Row Level Security ────────────────────────────────────────────────────────
ALTER TABLE technician_profiles ENABLE ROW LEVEL SECURITY;

-- Applicants can insert their own application (with or without account)
CREATE POLICY "Anyone can apply as a technician"
  ON technician_profiles
  FOR INSERT
  WITH CHECK (TRUE);

-- Approved technicians can read their own record
CREATE POLICY "Technicians can view their own profile"
  ON technician_profiles
  FOR SELECT
  USING (
    user_id IS NOT NULL AND auth.uid() = user_id
  );

-- Admins can do everything
CREATE POLICY "Admins can manage all technician profiles"
  ON technician_profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
        AND profiles.is_admin = TRUE
    )
  );
