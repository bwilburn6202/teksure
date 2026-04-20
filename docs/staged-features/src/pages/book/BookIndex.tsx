import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Monitor, Home, Phone, Package, CreditCard, CheckCircle, Users } from "lucide-react";

// ── Service Types ──────────────────────────────────────────────────────────────
const SERVICE_TYPES = [
  {
    id: "remote",
    label: "Remote Support",
    description: "We connect to your device securely and fix it online.",
    icon: Monitor,
    price: 49.99,
    duration: "30–60 min",
    popular: true,
  },
  {
    id: "phone",
    label: "Phone Guidance",
    description: "Walk through the fix together over the phone.",
    icon: Phone,
    price: 29.99,
    duration: "20–40 min",
    popular: false,
  },
  {
    id: "in-home",
    label: "In-Home Visit",
    description: "A technician comes to your home.",
    icon: Home,
    price: 89.99,
    duration: "1–2 hrs",
    popular: false,
  },
  {
    id: "drop-off",
    label: "Drop-Off Service",
    description: "Bring your device to us for repair.",
    icon: Package,
    price: 59.99,
    duration: "1–3 days",
    popular: false,
  },
];

// ── Available Times ────────────────────────────────────────────────────────────
const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function BookIndex() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [availableSlots, setAvailableSlots] = useState<Record<string, number>>({});
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    checkUser();
  }, []);

  // Fetch available technician slots when a date is selected
  const fetchAvailability = useCallback(async (date: string) => {
    setLoadingSlots(true);
    try {
      const { data } = await supabase
        .from("technician_availability")
        .select("time_slot")
        .eq("available_date", date)
        .eq("is_booked", false);

      // Count available techs per slot
      const counts: Record<string, number> = {};
      (data ?? []).forEach((row: { time_slot: string }) => {
        counts[row.time_slot] = (counts[row.time_slot] || 0) + 1;
      });
      setAvailableSlots(counts);
    } catch {
      // If table doesn't exist yet (migration not run), show all slots
      setAvailableSlots({});
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate, fetchAvailability]);

  // Minimum booking date: tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const selectedService = SERVICE_TYPES.find((s) => s.id === serviceType);

  // ── Step 1: Select Service ──
  const renderStep1 = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose a Service</h2>
      <div className="grid gap-3">
        {SERVICE_TYPES.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.id}
              onClick={() => { setServiceType(service.id); setStep(2); }}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all hover:border-blue-400 hover:shadow-sm ${
                serviceType === service.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-800">{service.label}</span>
                    {service.popular && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{service.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-blue-600 font-semibold">${service.price}</span>
                    <span className="text-gray-400">{service.duration}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── Step 2: Pick Date & Time ──
  const renderStep2 = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Pick a Date & Time
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Service: <span className="font-medium text-blue-600">{selectedService?.label}</span>
        &nbsp;·&nbsp;${selectedService?.price}
      </p>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
        <Input
          type="date"
          min={minDateStr}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="text-base"
        />
      </div>

      {selectedDate && (
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
          {loadingSlots ? (
            <div className="flex items-center gap-2 text-sm text-gray-400 py-4">
              <div className="w-4 h-4 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
              Checking availability...
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((time) => {
                  const techCount = availableSlots[time] ?? 0;
                  const hasAvailability = Object.keys(availableSlots).length > 0;
                  const isAvailable = !hasAvailability || techCount > 0;

                  return (
                    <button
                      key={time}
                      onClick={() => isAvailable && setSelectedTime(time)}
                      disabled={!isAvailable}
                      className={`py-2 px-3 rounded-lg text-sm border transition-colors ${
                        !isAvailable
                          ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                          : selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <span>{time}</span>
                      {hasAvailability && isAvailable && (
                        <span className="flex items-center justify-center gap-0.5 mt-0.5 text-[10px] text-green-600">
                          <Users className="h-2.5 w-2.5" />
                          {techCount} tech{techCount > 1 ? "s" : ""}
                        </span>
                      )}
                      {hasAvailability && !isAvailable && (
                        <span className="block mt-0.5 text-[10px] text-gray-300">
                          Unavailable
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {Object.keys(availableSlots).length > 0 && (
                <p className="text-[11px] text-gray-400 mt-2">
                  Showing slots with available technicians
                </p>
              )}
            </>
          )}
        </div>
      )}

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Describe Your Issue (optional)
        </label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. My computer won't turn on, my phone screen is cracked..."
          className="text-base min-h-[100px]"
        />
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
          Back
        </Button>
        <Button
          disabled={!selectedDate || !selectedTime}
          onClick={() => setStep(3)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Continue
        </Button>
      </div>
    </div>
  );

  // ── Step 3: Review & Pay ──
  const handleBookAndPay = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Create the booking record first
      const { data: booking, error: bookingError } = await supabase
        .from("bookings")
        .insert({
          user_id: user.id,
          date: selectedDate,
          time: selectedTime,
          service_type: serviceType,
          price_cents: Math.round((selectedService?.price ?? 49.99) * 100),
          notes: notes.trim() || null,
          payment_status: "unpaid",
          status: "pending",
        })
        .select()
        .single();

      if (bookingError || !booking) {
        throw new Error("Failed to create booking");
      }

      // Get auth token for Edge Function call
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;

      // Create Stripe checkout session
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-stripe-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            bookingId: booking.id,
            serviceType,
            bookingDate: selectedDate,
            bookingTime: selectedTime,
          }),
        }
      );

      const result = await response.json();

      if (result.url) {
        // Redirect to Stripe Checkout
        window.location.href = result.url;
      } else {
        throw new Error(result.error || "Failed to create checkout session");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const renderStep3 = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Review & Pay</h2>

      <Card className="mb-5 border border-gray-200">
        <CardContent className="p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service</span>
            <span className="font-medium">{selectedService?.label}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Date</span>
            <span className="font-medium">
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long", month: "long", day: "numeric", year: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Time</span>
            <span className="font-medium">{selectedTime}</span>
          </div>
          {notes && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Notes</span>
              <span className="font-medium text-right max-w-[200px]">{notes}</span>
            </div>
          )}
          <div className="border-t pt-3 flex justify-between">
            <span className="font-semibold text-gray-800">Total</span>
            <span className="font-bold text-blue-600 text-lg">
              ${selectedService?.price.toFixed(2)}
            </span>
          </div>
        </CardContent>
      </Card>

      {!user && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 text-sm text-yellow-700">
          You need to <strong>sign in</strong> to complete your booking.
          <br />
          <button
            onClick={() => navigate("/login")}
            className="underline font-medium mt-1 block"
          >
            Sign in now →
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-3 mb-5 text-xs text-gray-500 flex items-center gap-2">
        <CreditCard className="h-4 w-4 flex-shrink-0" />
        <span>Payments are secured by Stripe. We never store your card details.</span>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setStep(2)} className="flex-1" disabled={loading}>
          Back
        </Button>
        <Button
          onClick={handleBookAndPay}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          disabled={loading || !user}
        >
          <CreditCard className="h-4 w-4" />
          {loading ? "Redirecting to payment..." : `Pay $${selectedService?.price.toFixed(2)}`}
        </Button>
      </div>
    </div>
  );

  // ── Layout ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-10 px-4">
        <div className="container mx-auto max-w-lg">
          <h1 className="text-3xl font-bold mb-2">Book a Technician</h1>
          <p className="text-blue-100">Get expert help with your technology — fast, friendly, and affordable.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-lg px-4 py-8">
        {/* Step Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  s < step
                    ? "bg-green-500 text-white"
                    : s === step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {s < step ? <CheckCircle className="h-4 w-4" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 w-12 rounded ${s < step ? "bg-green-400" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
          <div className="ml-2 text-sm text-gray-500">
            {step === 1 ? "Choose service" : step === 2 ? "Pick a time" : "Review & pay"}
          </div>
        </div>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
