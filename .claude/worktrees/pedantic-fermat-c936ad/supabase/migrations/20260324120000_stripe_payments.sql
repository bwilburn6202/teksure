-- Add Stripe payment tracking columns to bookings table

ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS payment_status   TEXT NOT NULL DEFAULT 'none'
    CHECK (payment_status IN ('none', 'deposit_pending', 'deposit_paid', 'deposit_expired', 'paid_on_day')),
  ADD COLUMN IF NOT EXISTS stripe_session_id TEXT,
  ADD COLUMN IF NOT EXISTS deposit_paid_at   TIMESTAMPTZ;

-- Index for quick webhook lookups by Stripe session
CREATE INDEX IF NOT EXISTS idx_bookings_stripe_session_id
  ON public.bookings (stripe_session_id)
  WHERE stripe_session_id IS NOT NULL;

COMMENT ON COLUMN public.bookings.payment_status IS
  'none = pay on day selected; deposit_pending = Stripe session created but not paid; deposit_paid = £15 deposit received; paid_on_day = technician marked as paid';
