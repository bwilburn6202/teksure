export interface TestBooking {
  id: string;
  user_id: string;
  booking_date: string;
  booking_time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  payment_status?: "unpaid" | "paid" | "refunded";
  stripe_session_id?: string;
  deposit_paid_at?: string;
  created_at: string;
  updated_at: string;
}

export const testBookings: Record<string, TestBooking> = {
  pending: {
    id: "booking-001",
    user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    booking_date: "2026-04-15",
    booking_time: "10:00",
    status: "pending",
    payment_status: "unpaid",
    created_at: "2026-04-05T10:30:00Z",
    updated_at: "2026-04-05T10:30:00Z",
  },
  paid: {
    id: "booking-002",
    user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    booking_date: "2026-04-20",
    booking_time: "14:00",
    status: "confirmed",
    payment_status: "paid",
    stripe_session_id: "cs_test_abc123",
    deposit_paid_at: "2026-04-05T10:35:00Z",
    created_at: "2026-04-05T10:30:00Z",
    updated_at: "2026-04-05T10:35:00Z",
  },
  completed: {
    id: "booking-003",
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    booking_date: "2026-03-01",
    booking_time: "11:00",
    status: "completed",
    payment_status: "paid",
    stripe_session_id: "cs_test_def456",
    deposit_paid_at: "2026-02-28T09:00:00Z",
    created_at: "2026-02-28T09:00:00Z",
    updated_at: "2026-03-01T11:30:00Z",
  },
};

export const invalidBooking: Partial<TestBooking> = {
  // Missing required fields
  user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  // Missing: booking_date, booking_time, status, created_at, updated_at
};
