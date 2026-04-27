/**
 * BecomeATech — Technician Application Page
 *
 * Allows anyone to apply to become a TekSure technician.
 * Collects basic info and stores in the `technician_profiles` table
 * with status = 'pending'. Admin can then approve/reject in the Console.
 *
 * Route: /become-a-technician
 * DB: technician_profiles table (see migration 20260325120000_technician_profiles.sql)
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Wrench,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormData {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  years_experience: string;
  specialties: string[];
  bio: string;
  availability: string;
  has_dbs: boolean;
  has_own_transport: boolean;
  linkedin_url: string;
}

const SPECIALTY_OPTIONS = [
  "Windows PC",
  "Mac / Apple",
  "iPhone / iPad",
  "Android Phone",
  "Printers & Scanners",
  "WiFi & Networking",
  "Smart TV / Streaming",
  "Smart Home Devices",
  "Email & Accounts",
  "Virus / Security",
];

const AVAILABILITY_OPTIONS = [
  "Weekdays (9am–5pm)",
  "Evenings (after 5pm)",
  "Weekends",
  "Flexible / Any time",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function BecomeATech() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"intro" | "form" | "success">("intro");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    years_experience: "",
    specialties: [],
    bio: "",
    availability: "",
    has_dbs: false,
    has_own_transport: false,
    linkedin_url: "",
  });

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const updateField = (field: keyof FormData, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const toggleSpecialty = (specialty: string) => {
    setForm((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }));
  };

  const validate = (): string | null => {
    if (!form.full_name.trim()) return "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.location.trim()) return "Please enter your location (city or postcode).";
    if (!form.years_experience) return "Please select your years of experience.";
    if (form.specialties.length === 0)
      return "Please select at least one area of expertise.";
    if (!form.bio.trim() || form.bio.trim().length < 30)
      return "Please write a short bio (at least 30 characters).";
    if (!form.availability) return "Please select your availability.";
    return null;
  };

  // ── Submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError(null);

    // Get current user if logged in (optional — tech can apply without account)
    const { data: authData } = await supabase.auth.getUser();
    const userId = authData.user?.id ?? null;

    const { error: insertError } = await supabase
      .from("technician_profiles")
      .insert({
        user_id: userId,
        full_name: form.full_name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        years_experience: parseInt(form.years_experience, 10),
        specialties: form.specialties,
        bio: form.bio.trim(),
        availability: form.availability,
        has_dbs: form.has_dbs,
        has_own_transport: form.has_own_transport,
        linkedin_url: form.linkedin_url.trim() || null,
        status: "pending",
      });

    setSubmitting(false);

    if (insertError) {
      console.error("Application insert error:", insertError);
      setError(
        "Something went wrong submitting your application. Please try again or contact us directly."
      );
      return;
    }

    setStep("success");
  };

  // ── Intro screen ─────────────────────────────────────────────────────────────
  if (step === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="container mx-auto max-w-3xl">
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to TekSure
            </Link>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 py-12">
          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Wrench className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Become a TekSure Technician
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Help everyday people — especially seniors — get comfortable with
              their technology. Set your own hours, work in your local area,
              and earn money doing what you love.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Clock,
                title: "Flexible Hours",
                desc: "Work when it suits you — evenings, weekends, weekdays.",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: MapPin,
                title: "Local Work",
                desc: "Help people in your neighbourhood — no long commutes.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Star,
                title: "Good Earnings",
                desc: "Keep the majority of each job fee. Transparent pricing.",
                color: "bg-yellow-50 text-yellow-600",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <Card key={title}>
                <CardContent className="p-5 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${color} mb-3`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What we look for */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                What we look for
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Patient and friendly — our customers are often nervous about technology",
                  "Able to explain things clearly in plain language, without jargon",
                  "Experience helping people with phones, computers, or home tech",
                  "Reliable and punctual — our customers depend on you",
                  "A DBS check is required before your first in-home visit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              onClick={() => setStep("form")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 text-lg"
            >
              Apply Now — It Takes 5 Minutes
            </Button>
            <p className="text-sm text-gray-400 mt-3">
              We review every application within 3–5 working days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Success screen ───────────────────────────────────────────────────────────
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Application Received!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to join TekSure. We'll review your
              application and get back to you within 3–5 working days at{" "}
              <strong>{form.email}</strong>.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700 text-left mb-6">
              <strong>What happens next?</strong>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>We review your application</li>
                <li>We'll email you within 3–5 working days</li>
                <li>If approved, we'll set up an onboarding call</li>
                <li>Complete a DBS check (we can help with this)</li>
                <li>Start accepting jobs!</li>
              </ol>
            </div>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to TekSure Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Application Form ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto max-w-2xl">
          <button
            onClick={() => setStep("intro")}
            className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm mb-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            Technician Application
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container mx-auto max-w-2xl px-4 py-8 space-y-6">
          {/* ── Personal Info ── */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-gray-800 mb-4 text-base flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                Your Details
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input
                    id="full_name"
                    type="text"
                    value={form.full_name}
                    onChange={(e) => updateField("full_name", e.target.value)}
                    placeholder="Jane Smith"
                    className="mt-1"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="jane@example.com"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="07700 900000"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Your Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="e.g. Manchester, M1 or Bristol, BS1"
                    className="mt-1"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    City and postcode helps us match you with nearby customers.
                  </p>
                </div>
                <div>
                  <Label htmlFor="linkedin_url">LinkedIn Profile (optional)</Label>
                  <Input
                    id="linkedin_url"
                    type="url"
                    value={form.linkedin_url}
                    onChange={(e) => updateField("linkedin_url", e.target.value)}
                    placeholder="https://linkedin.com/in/yourname"
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── Experience ── */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-gray-800 mb-4 text-base flex items-center gap-2">
                <Wrench className="h-4 w-4 text-blue-600" />
                Your Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="years_experience">
                    Years of tech support experience *
                  </Label>
                  <select
                    id="years_experience"
                    value={form.years_experience}
                    onChange={(e) =>
                      updateField("years_experience", e.target.value)
                    }
                    className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="0">Less than 1 year</option>
                    <option value="1">1–2 years</option>
                    <option value="3">3–5 years</option>
                    <option value="6">6–10 years</option>
                    <option value="11">More than 10 years</option>
                  </select>
                </div>

                {/* Specialties checkboxes */}
                <div>
                  <Label className="mb-2 block">
                    Areas of expertise * (select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {SPECIALTY_OPTIONS.map((specialty) => (
                      <label
                        key={specialty}
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer text-sm transition-colors ${
                          form.specialties.includes(specialty)
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.specialties.includes(specialty)}
                          onChange={() => toggleSpecialty(specialty)}
                          className="sr-only"
                        />
                        <CheckCircle
                          className={`h-3.5 w-3.5 shrink-0 ${
                            form.specialties.includes(specialty)
                              ? "text-blue-500"
                              : "text-gray-300"
                          }`}
                        />
                        {specialty}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">
                    Tell us about yourself *
                  </Label>
                  <Textarea
                    id="bio"
                    value={form.bio}
                    onChange={(e) => updateField("bio", e.target.value)}
                    placeholder="Tell us a bit about your background and why you'd like to help people with their tech. Plain, friendly language is great!"
                    className="mt-1 min-h-[100px]"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    {form.bio.length} characters (minimum 30)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── Availability & Practical ── */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-gray-800 mb-4 text-base flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                Availability & Practicalities
              </h2>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">
                    When are you usually available? *
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {AVAILABILITY_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-sm transition-colors ${
                          form.availability === option
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="availability"
                          checked={form.availability === option}
                          onChange={() => updateField("availability", option)}
                          className="sr-only"
                        />
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                            form.availability === option
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.has_dbs}
                      onChange={(e) =>
                        updateField("has_dbs", e.target.checked)
                      }
                      className="mt-0.5 rounded"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        I have a current DBS check
                      </span>
                      <p className="text-xs text-gray-400">
                        Required for in-home visits. We can guide you if you
                        don't have one yet.
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.has_own_transport}
                      onChange={(e) =>
                        updateField("has_own_transport", e.target.checked)
                      }
                      className="mt-0.5 rounded"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        I have my own transport
                      </span>
                      <p className="text-xs text-gray-400">
                        Helpful for in-home and drop-off visits, but not
                        required.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="pb-8">
            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base"
            >
              {submitting ? "Submitting..." : "Submit My Application"}
            </Button>
            <p className="text-xs text-gray-400 text-center mt-3">
              We'll review your application within 3–5 working days and contact
              you at the email you provided.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
