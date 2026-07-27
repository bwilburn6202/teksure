-- Length limits on the anonymously-writable tables.
--
-- WHY
-- bookings, help_requests, scam_reports and newsletter_subscribers all carry an
-- INSERT policy of `WITH CHECK (true)` so that people can book and report
-- things without an account. That is the right call for this audience — forcing
-- a signup on someone who just wants help would defeat the point — but it means
-- anyone can POST directly to the REST API without going through the site.
--
-- Nothing constrained the size of those fields. A single request could store a
-- multi-megabyte `problem_description`, and nothing stopped it being repeated.
-- For a small business paying for storage and egress, that is a cheap way for
-- someone to run up a bill or fill the table.
--
-- These limits are deliberately generous. The largest real value in the table
-- today is 20 characters; someone describing a genuinely complicated problem
-- might reasonably write a few hundred. 2,000 leaves plenty of room while still
-- making bulk-stuffing pointless.
--
-- WHAT THIS IS NOT
-- This is not rate limiting. Someone can still insert many rows, just not huge
-- ones. Proper protection needs a captcha or an edge function in front of the
-- insert — worth doing before TekSure advertises widely, noted in
-- BUSINESS-DECISIONS-NEEDED.md.

ALTER TABLE public.bookings
  ADD CONSTRAINT bookings_name_len CHECK (char_length(name) <= 100),
  ADD CONSTRAINT bookings_email_len CHECK (email IS NULL OR char_length(email) <= 200),
  ADD CONSTRAINT bookings_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT bookings_device_len CHECK (device_type IS NULL OR char_length(device_type) <= 60),
  ADD CONSTRAINT bookings_desc_len CHECK (problem_description IS NULL OR char_length(problem_description) <= 2000),
  ADD CONSTRAINT bookings_notes_len CHECK (notes IS NULL OR char_length(notes) <= 2000),
  ADD CONSTRAINT bookings_street_len CHECK (street_address IS NULL OR char_length(street_address) <= 200),
  ADD CONSTRAINT bookings_city_len CHECK (city IS NULL OR char_length(city) <= 100),
  ADD CONSTRAINT bookings_state_len CHECK (state IS NULL OR char_length(state) <= 50),
  ADD CONSTRAINT bookings_postal_len CHECK (postal_code IS NULL OR char_length(postal_code) <= 20);

ALTER TABLE public.help_requests
  ADD CONSTRAINT help_requests_name_len CHECK (name IS NULL OR char_length(name) <= 100),
  ADD CONSTRAINT help_requests_email_len CHECK (email IS NULL OR char_length(email) <= 200),
  ADD CONSTRAINT help_requests_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT help_requests_device_len CHECK (device_type IS NULL OR char_length(device_type) <= 60),
  ADD CONSTRAINT help_requests_desc_len CHECK (problem_description IS NULL OR char_length(problem_description) <= 2000);

ALTER TABLE public.scam_reports
  ADD CONSTRAINT scam_reports_desc_len CHECK (char_length(description) <= 4000),
  ADD CONSTRAINT scam_reports_type_len CHECK (char_length(scam_type) <= 100),
  ADD CONSTRAINT scam_reports_url_len CHECK (scam_url IS NULL OR char_length(scam_url) <= 500),
  ADD CONSTRAINT scam_reports_phone_len CHECK (scam_phone IS NULL OR char_length(scam_phone) <= 40),
  ADD CONSTRAINT scam_reports_email_len CHECK (scam_email_address IS NULL OR char_length(scam_email_address) <= 200),
  ADD CONSTRAINT scam_reports_contact_len CHECK (reporter_contact IS NULL OR char_length(reporter_contact) <= 200);

ALTER TABLE public.newsletter_subscribers
  ADD CONSTRAINT newsletter_email_len CHECK (char_length(email) <= 200);
