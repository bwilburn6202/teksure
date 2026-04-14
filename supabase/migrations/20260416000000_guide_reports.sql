-- Migration: create guide_reports for user-submitted issue reports
CREATE TABLE IF NOT EXISTS guide_reports (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  guide_slug TEXT NOT NULL,
  user_id TEXT,
  report_type TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
