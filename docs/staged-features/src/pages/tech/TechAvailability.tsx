/**
 * TechAvailability — /tech/availability
 *
 * Allows approved technicians to manage their availability calendar.
 * Techs select dates and toggle time slots on/off.
 *
 * Features:
 *  - 7-day forward calendar with date selection
 *  - Toggle time slots for each date
 *  - Visual indicators for set availability
 *  - Bulk "Set available all day" option
 *  - Saved slots shown with green highlights
 */

import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ArrowLeft,
} from "lucide-react";

// ── Constants ────────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const DAYS_SHOWN = 14; // Two weeks ahead

// ── Helpers ──────────────────────────────────────────────────────────────────

function getDateRange(startOffset: number): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = startOffset; i < startOffset + DAYS_SHOWN; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1); // Start from tomorrow
    dates.push(d);
  }
  return dates;
}

function toISODate(d: Date): string {
  return d.toISOString().split("T")[0];
}

function fmtShortDate(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function fmtFullDate(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Types ────────────────────────────────────────────────────────────────────

interface AvailSlot {
  id: string;
  available_date: string;
  time_slot: string;
  is_booked: boolean;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function TechAvailability() {
  const navigate = useNavigate();
  const [techId, setTechId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [slots, setSlots] = useState<AvailSlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [pageOffset, setPageOffset] = useState(0);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const dates = getDateRange(pageOffset);

  // ── Auth & tech profile check ──────────────────────────────────────────────

  useEffect(() => {
    const init = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        navigate("/login");
        return;
      }

      // Check if user is an approved technician
      const { data: tp } = await supabase
        .from("technician_profiles")
        .select("id, status")
        .eq("user_id", userData.user.id)
        .eq("status", "approved")
        .maybeSingle();

      if (!tp) {
        navigate("/tech");
        return;
      }

      setTechId(tp.id);
      setSelectedDate(dates[0]);
      setLoading(false);
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  // ── Fetch availability whenever techId or page changes ─────────────────────

  const fetchSlots = useCallback(async () => {
    if (!techId) return;

    const startDate = toISODate(getDateRange(pageOffset)[0]);
    const endDate = toISODate(getDateRange(pageOffset)[DAYS_SHOWN - 1]);

    const { data } = await supabase
      .from("technician_availability")
      .select("id, available_date, time_slot, is_booked")
      .eq("technician_id", techId)
      .gte("available_date", startDate)
      .lte("available_date", endDate)
      .order("available_date")
      .order("time_slot");

    setSlots(data ?? []);
  }, [techId, pageOffset]);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  // ── Slot management ────────────────────────────────────────────────────────

  const isSlotSet = (date: string, slot: string): boolean =>
    slots.some((s) => s.available_date === date && s.time_slot === slot);

  const isSlotBooked = (date: string, slot: string): boolean =>
    slots.some(
      (s) => s.available_date === date && s.time_slot === slot && s.is_booked
    );

  const toggleSlot = async (date: string, slot: string) => {
    if (!techId) return;
    setSaving(true);

    const existing = slots.find(
      (s) => s.available_date === date && s.time_slot === slot
    );

    try {
      if (existing) {
        // If booked, don't allow removal
        if (existing.is_booked) {
          setSaving(false);
          return;
        }
        // Remove availability
        await supabase
          .from("technician_availability")
          .delete()
          .eq("id", existing.id);
      } else {
        // Add availability
        await supabase.from("technician_availability").insert({
          technician_id: techId,
          available_date: date,
          time_slot: slot,
        });
      }
      await fetchSlots();
    } catch (err) {
      console.error("Error toggling slot:", err);
    } finally {
      setSaving(false);
    }
  };

  const setAllDay = async (date: string) => {
    if (!techId) return;
    setSaving(true);

    try {
      const existingForDate = slots.filter((s) => s.available_date === date);
      const missingSlots = TIME_SLOTS.filter(
        (ts) => !existingForDate.some((s) => s.time_slot === ts)
      );

      if (missingSlots.length > 0) {
        await supabase.from("technician_availability").insert(
          missingSlots.map((ts) => ({
            technician_id: techId,
            available_date: date,
            time_slot: ts,
          }))
        );
      }

      await fetchSlots();
      setSuccessMsg("All slots set for this day");
      setTimeout(() => setSuccessMsg(null), 2000);
    } catch (err) {
      console.error("Error setting all day:", err);
    } finally {
      setSaving(false);
    }
  };

  const clearDay = async (date: string) => {
    if (!techId) return;
    setSaving(true);

    try {
      // Only clear non-booked slots
      const clearable = slots.filter(
        (s) => s.available_date === date && !s.is_booked
      );

      if (clearable.length > 0) {
        await supabase
          .from("technician_availability")
          .delete()
          .in(
            "id",
            clearable.map((s) => s.id)
          );
      }

      await fetchSlots();
      setSuccessMsg("Day cleared");
      setTimeout(() => setSuccessMsg(null), 2000);
    } catch (err) {
      console.error("Error clearing day:", err);
    } finally {
      setSaving(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
      </div>
    );
  }

  const selDateStr = selectedDate ? toISODate(selectedDate) : "";
  const slotsForDate = slots.filter((s) => s.available_date === selDateStr);
  const availCountForDate = (d: Date) =>
    slots.filter((s) => s.available_date === toISODate(d)).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/tech"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            My Availability
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Set the dates and times you're available for bookings. Customers
            will only see time slots where a technician is available.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-6">
        {/* Date Selector */}
        <Card className="mb-6 border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setPageOffset(Math.max(0, pageOffset - DAYS_SHOWN))}
                disabled={pageOffset === 0}
                className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous dates"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-600">
                {fmtShortDate(dates[0])} — {fmtShortDate(dates[dates.length - 1])}
              </span>
              <button
                onClick={() => setPageOffset(pageOffset + DAYS_SHOWN)}
                disabled={pageOffset >= 56} // max ~2 months out
                className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next dates"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {dates.map((d) => {
                const iso = toISODate(d);
                const isSelected = selDateStr === iso;
                const count = availCountForDate(d);
                const isWeekend = d.getDay() === 0 || d.getDay() === 6;

                return (
                  <button
                    key={iso}
                    onClick={() => setSelectedDate(d)}
                    className={`relative p-2 rounded-lg text-center transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-sm"
                        : isWeekend
                        ? "bg-gray-50 text-gray-400 hover:bg-gray-100"
                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-100"
                    }`}
                  >
                    <div className="text-[10px] font-medium uppercase tracking-wider">
                      {d.toLocaleDateString("en-GB", { weekday: "short" })}
                    </div>
                    <div className="text-lg font-bold">{d.getDate()}</div>
                    {count > 0 && (
                      <div
                        className={`text-[10px] font-medium ${
                          isSelected ? "text-blue-200" : "text-green-600"
                        }`}
                      >
                        {count} slot{count > 1 ? "s" : ""}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Time Slot Manager for Selected Date */}
        {selectedDate && (
          <Card className="border border-gray-200">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {fmtFullDate(selectedDate)}
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {slotsForDate.length} of {TIME_SLOTS.length} slots set
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => clearDay(selDateStr)}
                    disabled={saving || slotsForDate.length === 0}
                    className="text-xs"
                  >
                    Clear Day
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setAllDay(selDateStr)}
                    disabled={saving || slotsForDate.length === TIME_SLOTS.length}
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Set All Day
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isSet = isSlotSet(selDateStr, slot);
                  const booked = isSlotBooked(selDateStr, slot);

                  return (
                    <button
                      key={slot}
                      onClick={() => toggleSlot(selDateStr, slot)}
                      disabled={saving || booked}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg border-2 transition-all ${
                        booked
                          ? "border-amber-200 bg-amber-50 cursor-not-allowed"
                          : isSet
                          ? "border-green-300 bg-green-50 hover:border-green-400"
                          : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      aria-label={`${slot} — ${
                        booked
                          ? "Booked"
                          : isSet
                          ? "Available — click to remove"
                          : "Not set — click to add"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock
                          className={`h-4 w-4 ${
                            booked
                              ? "text-amber-500"
                              : isSet
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            booked
                              ? "text-amber-700"
                              : isSet
                              ? "text-green-700"
                              : "text-gray-600"
                          }`}
                        >
                          {slot}
                        </span>
                      </div>

                      {booked ? (
                        <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                          Booked
                        </span>
                      ) : isSet ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <span className="text-xs text-gray-400">
                          Tap to set
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {saving && (
                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-blue-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Help text */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
          <p className="font-medium mb-1">How availability works</p>
          <p className="text-blue-600 leading-relaxed">
            When you mark a time slot as available, customers booking on that
            date will see it as an option. If you're the only available
            technician for a slot, you'll automatically be assigned when a
            customer books. Booked slots (shown in amber) cannot be removed
            until the booking is completed or cancelled.
          </p>
        </div>
      </div>

      {/* Success toast */}
      {successMsg && (
        <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {successMsg}
        </div>
      )}
    </div>
  );
}
