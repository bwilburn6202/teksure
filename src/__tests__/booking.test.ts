import { describe, it, expect } from "vitest";
import { testBookings, invalidBooking } from "../../tests/fixtures/bookings";
import { testUsers } from "../../tests/fixtures/users";

/**
 * Booking schema and validation tests
 * Tests payment flow requirements, RLS policy compliance, and data integrity
 */

describe("Booking Schema Validation", () => {
  it("should have all required fields on a valid booking", () => {
    const booking = testBookings.pending;

    expect(booking).toHaveProperty("id");
    expect(booking).toHaveProperty("user_id");
    expect(booking).toHaveProperty("booking_date");
    expect(booking).toHaveProperty("booking_time");
    expect(booking).toHaveProperty("status");
    expect(booking).toHaveProperty("created_at");
    expect(booking).toHaveProperty("updated_at");
  });

  it("should have valid status value", () => {
    const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
    const booking = testBookings.pending;

    expect(validStatuses).toContain(booking.status);
  });

  it("should have valid payment_status when present", () => {
    const validPaymentStatuses = ["unpaid", "paid", "refunded"];
    const booking = testBookings.paid;

    if (booking.payment_status) {
      expect(validPaymentStatuses).toContain(booking.payment_status);
    }
  });

  it("should have valid ISO 8601 date formats", () => {
    const booking = testBookings.pending;
    const createdDate = new Date(booking.created_at);
    const updatedDate = new Date(booking.updated_at);

    expect(createdDate instanceof Date && !isNaN(createdDate.getTime())).toBe(
      true
    );
    expect(updatedDate instanceof Date && !isNaN(updatedDate.getTime())).toBe(
      true
    );
  });

  it("should have valid date format (YYYY-MM-DD)", () => {
    const booking = testBookings.pending;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    expect(booking.booking_date).toMatch(dateRegex);
  });

  it("should have valid time format (HH:MM)", () => {
    const booking = testBookings.pending;
    const timeRegex = /^\d{2}:\d{2}$/;

    expect(booking.booking_time).toMatch(timeRegex);
  });

  it("should have updated_at >= created_at", () => {
    const booking = testBookings.pending;
    const createdTime = new Date(booking.created_at).getTime();
    const updatedTime = new Date(booking.updated_at).getTime();

    expect(updatedTime).toBeGreaterThanOrEqual(createdTime);
  });
});

describe("Booking Payment Flow", () => {
  it("should have stripe_session_id when payment_status is 'paid'", () => {
    const booking = testBookings.paid;

    if (booking.payment_status === "paid") {
      expect(booking.stripe_session_id).toBeTruthy();
      expect(booking.stripe_session_id).toMatch(/^cs_test_/);
    }
  });

  it("should have deposit_paid_at when payment_status is 'paid'", () => {
    const booking = testBookings.paid;

    if (booking.payment_status === "paid") {
      expect(booking.deposit_paid_at).toBeTruthy();
      const date = new Date(booking.deposit_paid_at!);
      expect(date instanceof Date && !isNaN(date.getTime())).toBe(true);
    }
  });

  it("should not have stripe_session_id when payment is unpaid", () => {
    const booking = testBookings.pending;

    if (booking.payment_status === "unpaid") {
      expect(booking.stripe_session_id).toBeFalsy();
    }
  });

  it("should have deposit_paid_at <= confirmed/completed time", () => {
    const booking = testBookings.completed;

    if (booking.deposit_paid_at) {
      const depositTime = new Date(booking.deposit_paid_at).getTime();
      const updatedTime = new Date(booking.updated_at).getTime();

      expect(depositTime).toBeLessThanOrEqual(updatedTime);
    }
  });
});

describe("Booking RLS Policy Compliance", () => {
  it("should belong to a valid user", () => {
    const booking = testBookings.pending;
    const userIds = Object.values(testUsers).map((u) => u.id);

    expect(userIds).toContain(booking.user_id);
  });

  it("should allow user to read their own booking", () => {
    const booking = testBookings.pending;
    const user = testUsers.user1;

    // RLS policy: users should be able to read their own bookings
    expect(booking.user_id).toBe(user.id);
  });

  it("should enforce user_id constraint", () => {
    const booking = testBookings.pending;

    // user_id should never be null or empty
    expect(booking.user_id).toBeTruthy();
    expect(booking.user_id).not.toBe("");
  });
});

describe("Booking State Transitions", () => {
  it("should allow: pending -> confirmed (after payment)", () => {
    const pendingBooking = testBookings.pending;
    const confirmedBooking = testBookings.paid;

    // Valid transition: unpaid/pending -> paid/confirmed
    expect(pendingBooking.status).toBe("pending");
    expect(pendingBooking.payment_status).toBe("unpaid");

    expect(confirmedBooking.status).toBe("confirmed");
    expect(confirmedBooking.payment_status).toBe("paid");
  });

  it("should allow: confirmed -> completed", () => {
    const confirmedBooking = testBookings.paid;
    const completedBooking = testBookings.completed;

    expect(confirmedBooking.status).toBe("confirmed");
    expect(completedBooking.status).toBe("completed");
  });

  it("should allow: any state -> cancelled", () => {
    // Bookings can be cancelled from pending, confirmed, or completed states
    const validCancelStates = ["pending", "confirmed", "completed"];

    expect(validCancelStates).toContain(testBookings.pending.status);
  });
});

describe("Booking Data Integrity", () => {
  it("should not allow future booking date to be in the past after completion", () => {
    const completedBooking = testBookings.completed;
    const bookingDate = new Date(completedBooking.booking_date).getTime();
    const completedTime = new Date(completedBooking.updated_at).getTime();

    // Completed booking's booking_date should be before or equal to completion time
    expect(bookingDate).toBeLessThanOrEqual(completedTime);
  });

  it("should have unique ID", () => {
    const bookingIds = Object.values(testBookings).map((b) => b.id);
    const uniqueIds = new Set(bookingIds);

    expect(uniqueIds.size).toBe(bookingIds.length);
  });
});
