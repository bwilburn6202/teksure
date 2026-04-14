-- Add 'resolved' flag to guide_reports for moderation state
ALTER TABLE guide_reports ADD COLUMN resolved BOOLEAN DEFAULT FALSE;
