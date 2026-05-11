import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, CheckCircle2, Circle, Printer, RotateCcw, MapPin } from "lucide-react";

interface Item {
  id: string;
  task: string;
  detail: string;
}

interface Section {
  label: string;
  emoji: string;
  color: string;
  items: Item[];
}

const SECTIONS: Section[] = [
  {
    label: "1 Month Before",
    emoji: "📅",
    color: "text-blue-700",
    items: [
      { id: "passport", task: "Check passport expiration", detail: "If traveling abroad, your passport must be valid for at least 6 months past your travel date. If it expires sooner, renew now." },
      { id: "book-flights", task: "Book flights or transportation", detail: "Lock in your flights, train tickets, or rental car. Book directly with the airline or a trusted travel site." },
      { id: "book-lodging", task: "Reserve lodging", detail: "Book your hotel, vacation rental, or other accommodations. Save the confirmation email and reservation number." },
      { id: "tell-bank", task: "Tell your bank about international travel", detail: "If traveling out of the country, call your bank or use the bank app to set a travel alert. Otherwise, your card may be blocked when you try to use it abroad." },
      { id: "travel-insurance", task: "Consider travel insurance", detail: "Compare options on a site like InsureMyTrip. Look for coverage for trip cancellation, medical emergencies, and lost baggage." },
    ],
  },
  {
    label: "2 Weeks Before",
    emoji: "🗓️",
    color: "text-purple-700",
    items: [
      { id: "refill-meds", task: "Refill prescriptions", detail: "Make sure you have enough medication for the whole trip plus a few extra days. Ask your pharmacy to refill early if needed." },
      { id: "doctor", task: "Visit doctor for travel concerns", detail: "Especially for international travel — ask about vaccinations, medications, and any concerns about your health while away." },
      { id: "pet-care", task: "Arrange pet care", detail: "Book a pet sitter, kennel, or boarding facility. Share your pet's medication schedule and vet contact." },
      { id: "share-itinerary", task: "Share your itinerary", detail: "Email your full itinerary to a trusted family member or friend — flights, hotels, phone numbers, and dates." },
    ],
  },
  {
    label: "1 Week Before",
    emoji: "⏰",
    color: "text-orange-700",
    items: [
      { id: "hold-mail", task: "Put a hold on your mail", detail: "Go to USPS.com → Hold Mail Service. Mail will be held at the post office until you return. It's free and takes 5 minutes." },
      { id: "check-in-online", task: "Check in for your flight online", detail: "Most airlines let you check in 24 hours before. Save the digital boarding pass to your phone wallet." },
      { id: "neighbor", task: "Tell a neighbor or friend", detail: "Ask someone you trust to keep an eye on the house. Give them your contact info and a key if needed." },
      { id: "thermostat", task: "Set thermostat schedule", detail: "Adjust the temperature for an empty house — usually a few degrees warmer in summer or cooler in winter to save energy." },
    ],
  },
  {
    label: "Travel Documents",
    emoji: "📄",
    color: "text-green-700",
    items: [
      { id: "id", task: "Driver's license or ID", detail: "Make sure your photo ID has not expired. After May 2025, you need a REAL ID-compliant license to fly within the US." },
      { id: "passport-pack", task: "Passport and visa (if abroad)", detail: "Carry your passport in a secure place. Make a photocopy and keep it separate from the original." },
      { id: "boarding", task: "Printed and digital boarding passes", detail: "Save the digital version to your phone, but print a paper backup in case your phone dies." },
      { id: "insurance-card", task: "Insurance and medical cards", detail: "Bring your health insurance card, Medicare card if applicable, and travel insurance documents." },
    ],
  },
  {
    label: "Day Before / Day Of",
    emoji: "🎒",
    color: "text-pink-700",
    items: [
      { id: "charge", task: "Charge phone, tablet, and battery pack", detail: "Plug in everything overnight. A portable battery pack is great for long travel days." },
      { id: "weather", task: "Check the weather at your destination", detail: "Look up the forecast for the days you will be there. Adjust your packing if needed." },
      { id: "flight-status", task: "Check flight status", detail: "Make sure your flight is on time. Sign up for text alerts from the airline." },
      { id: "water", task: "Empty trash, water plants, lock up", detail: "Take out the trash, water plants, lock all doors and windows, and unplug small appliances." },
      { id: "leave-home", task: "Leave home with extra time", detail: "For domestic flights, get to the airport at least 90 minutes before takeoff. For international, plan on 2-3 hours." },
    ],
  },
];

const ALL_ITEMS = SECTIONS.flatMap(s => s.items);

export default function TripPreparationChecklist() {
  const [tripName, setTripName] = useState("");
  const [tripDate, setTripDate] = useState("");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() {
    setChecked(new Set());
    setTripName("");
    setTripDate("");
  }

  const done = checked.size;
  const total = ALL_ITEMS.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Trip Preparation Checklist | TekSure"
        description="A step-by-step checklist for getting ready to travel — bookings, documents, home prep, and last-minute reminders, all in one place."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Plane className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Trip Preparation Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Get ready to travel without forgetting anything important. Work through this list in the weeks before you leave.
          </p>
        </div>

        {/* Trip details */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-4 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="trip-name" className="text-base font-medium">Trip Name</Label>
              <Input id="trip-name" placeholder="e.g. Florida 2026" value={tripName} onChange={e => setTripName(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="trip-date" className="text-base font-medium">Departure Date</Label>
              <Input id="trip-date" type="date" value={tripDate} onChange={e => setTripDate(e.target.value)} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-gray-800">{done} of {total} done</span>
              <span className="text-2xl font-bold text-blue-700">{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="h-3 bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
            </div>
            {pct === 100 && (
              <p className="text-green-700 font-semibold mt-2 text-center">
                Ready for takeoff! Have a wonderful trip{tripName ? ` — ${tripName}` : ""}.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Sections */}
        {SECTIONS.map(section => {
          const sDone = section.items.filter(i => checked.has(i.id)).length;
          return (
            <Card key={section.label} className="mb-4">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className={`text-lg flex items-center justify-between ${section.color}`}>
                  <span>{section.emoji} {section.label}</span>
                  <Badge variant="secondary" className="text-sm">{sDone}/{section.items.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="space-y-2">
                  {section.items.map(item => {
                    const isDone = checked.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                          isDone ? "bg-green-50 border-green-200" : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isDone ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Circle className="h-5 w-5 text-gray-400" />}
                        </span>
                        <span>
                          <span className={`block text-sm font-semibold ${isDone ? "line-through text-gray-400" : "text-gray-900"}`}>
                            {item.task}
                          </span>
                          {!isDone && <span className="block text-sm text-gray-500 mt-0.5">{item.detail}</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Checklist
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Start Over
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-4 flex items-center gap-1 print:hidden">
          <MapPin className="h-3 w-3" />
          Tip: Print this checklist and tape it to the fridge while you prepare.
        </p>
      </div>
    </div>
  );
}
