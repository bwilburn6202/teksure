import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Phone, MessageSquare, Home } from "lucide-react";

interface BookingDetails {
  id: string;
  date: string;
  time: string;
  service_type: string;
  price_cents: number;
  status: string;
  payment_status: string;
  notes?: string;
}

export default function BookingConfirmation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const sessionId = searchParams.get("session_id");
  const bookingId = searchParams.get("booking_id");

  useEffect(() => {
    const fetchBooking = async () => {
      if (!bookingId) {
        navigate("/book");
        return;
      }

      const { data } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (data) {
        setBooking(data);
      }
      setLoading(false);
    };

    fetchBooking();
  }, [bookingId, navigate]);

  const serviceLabels: Record<string, string> = {
    "in-home": "In-Home Visit",
    "remote": "Remote Support",
    "phone": "Phone Guidance",
    "drop-off": "Drop-Off Service",
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading your booking...</p>
      </div>
    );
  }

  const isPaid = booking?.payment_status === "paid";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-lg px-4 py-12">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isPaid ? "Booking Confirmed!" : "Booking Received!"}
          </h1>
          <p className="text-gray-500">
            {isPaid
              ? "Your payment was successful and your appointment is confirmed."
              : "We received your request. You'll get a confirmation email shortly."}
          </p>
        </div>

        {/* Booking Details */}
        {booking && (
          <Card className="mb-6 border border-gray-200">
            <CardContent className="p-6 space-y-4">
              <h2 className="font-semibold text-gray-800 text-lg">Appointment Details</h2>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Date</p>
                  <p className="font-medium">{formatDate(booking.date)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Service</p>
                  <p className="font-medium">{serviceLabels[booking.service_type] ?? booking.service_type}</p>
                </div>
              </div>

              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-bold text-blue-600 text-lg">
                  ${(booking.price_cents / 100).toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* What's Next */}
        <Card className="mb-6 bg-blue-50 border border-blue-100">
          <CardContent className="p-5">
            <h3 className="font-semibold text-blue-800 mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>You'll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>A technician will be assigned to your appointment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>We'll contact you 24 hours before to confirm</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link to="/guides">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Browse Guides While You Wait
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Support */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Need to reschedule? Email us at{" "}
          <a href="mailto:support@teksure.com" className="text-blue-500 hover:underline">
            support@teksure.com
          </a>
        </p>
      </div>
    </div>
  );
}
