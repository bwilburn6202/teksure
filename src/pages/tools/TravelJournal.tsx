import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trash2, Printer, PlusCircle } from "lucide-react";

interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
}

interface Day {
  id: string;
  tripId: string;
  date: string;
  location: string;
  highlight: string;
  meal: string;
  notes: string;
}

export default function TravelJournal() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [days, setDays] = useState<Day[]>([]);
  const [activeTrip, setActiveTrip] = useState<string | null>(null);
  const [tripForm, setTripForm] = useState({ destination: "", startDate: "", endDate: "" });
  const [dayForm, setDayForm] = useState({ date: new Date().toISOString().slice(0, 10), location: "", highlight: "", meal: "", notes: "" });
  const [error, setError] = useState("");

  function addTrip() {
    if (!tripForm.destination.trim()) { setError("Please enter a destination."); return; }
    setError("");
    const id = Date.now().toString() + Math.random();
    setTrips(prev => [...prev, { id, destination: tripForm.destination.trim(), startDate: tripForm.startDate, endDate: tripForm.endDate }]);
    setActiveTrip(id);
    setTripForm({ destination: "", startDate: "", endDate: "" });
  }

  function removeTrip(id: string) {
    setTrips(prev => prev.filter(t => t.id !== id));
    setDays(prev => prev.filter(d => d.tripId !== id));
    if (activeTrip === id) setActiveTrip(null);
  }

  function addDay() {
    if (!activeTrip) return;
    if (!dayForm.date) { setError("Please pick a date."); return; }
    setError("");
    setDays(prev => [...prev, { id: Date.now().toString() + Math.random(), tripId: activeTrip, date: dayForm.date, location: dayForm.location.trim(), highlight: dayForm.highlight.trim(), meal: dayForm.meal.trim(), notes: dayForm.notes.trim() }]);
    setDayForm({ date: dayForm.date, location: "", highlight: "", meal: "", notes: "" });
  }

  function removeDay(id: string) {
    setDays(prev => prev.filter(d => d.id !== id));
  }

  function formatDate(s: string) {
    if (!s) return "";
    const d = new Date(s);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  const trip = trips.find(t => t.id === activeTrip);
  const tripDays = activeTrip ? [...days.filter(d => d.tripId === activeTrip)].sort((a, b) => a.date.localeCompare(b.date)) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Travel Journal | TekSure"
        description="Keep a simple travel journal — one entry per day with location, highlight, favorite meal, and notes. Print as a memento after the trip."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="h-7 w-7 text-teal-600" />
            <h1 className="text-3xl font-bold text-gray-900">Travel Journal</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Spend two minutes each evening capturing the day. By trip's end you have a small book of memories.
          </p>
        </div>

        {/* Trip selector */}
        {trips.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 print:hidden">
            {trips.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTrip(t.id)}
                className={`px-3 py-2 rounded-md border text-sm font-medium ${activeTrip === t.id ? "bg-teal-100 border-teal-400 text-teal-900" : "bg-white border-gray-200 text-gray-700"}`}
              >
                <MapPin className="h-3 w-3 inline mr-1" />
                {t.destination}
              </button>
            ))}
            <button onClick={() => setActiveTrip(null)} className="px-3 py-2 rounded-md border border-dashed border-gray-300 text-sm text-gray-500 hover:bg-gray-50">
              + New trip
            </button>
          </div>
        )}

        {/* Add trip */}
        {!activeTrip && (
          <Card className="mb-6 print:hidden">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-teal-600" />
                New Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="dest" className="text-base font-medium">Destination</Label>
                <Input id="dest" placeholder="e.g. Florida, Italy, Niagara Falls" value={tripForm.destination} onChange={e => setTripForm(f => ({ ...f, destination: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="start-date" className="text-base font-medium">Start Date</Label>
                  <Input id="start-date" type="date" value={tripForm.startDate} onChange={e => setTripForm(f => ({ ...f, startDate: e.target.value }))} className="mt-1 text-base" />
                </div>
                <div>
                  <Label htmlFor="end-date" className="text-base font-medium">End Date</Label>
                  <Input id="end-date" type="date" value={tripForm.endDate} onChange={e => setTripForm(f => ({ ...f, endDate: e.target.value }))} className="mt-1 text-base" />
                </div>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <Button onClick={addTrip} size="lg" className="w-full sm:w-auto text-base">Start Journal</Button>
            </CardContent>
          </Card>
        )}

        {/* Active trip detail */}
        {trip && (
          <>
            <Card className="mb-4 print:break-inside-avoid">
              <CardContent className="py-3 px-4 flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold text-teal-700">{trip.destination}</h2>
                  {(trip.startDate || trip.endDate) && (
                    <p className="text-sm text-gray-500">{trip.startDate && formatDate(trip.startDate)}{trip.startDate && trip.endDate && " — "}{trip.endDate && formatDate(trip.endDate)}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">{tripDays.length} day{tripDays.length !== 1 ? "s" : ""} logged</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeTrip(trip.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Add day */}
            <Card className="mb-6 print:hidden">
              <CardHeader>
                <CardTitle className="text-lg">Today's Entry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="d-date" className="text-base font-medium">Date</Label>
                    <Input id="d-date" type="date" value={dayForm.date} onChange={e => setDayForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
                  </div>
                  <div>
                    <Label htmlFor="d-loc" className="text-base font-medium">Where you were</Label>
                    <Input id="d-loc" placeholder="e.g. Rome, Yellowstone Lake" value={dayForm.location} onChange={e => setDayForm(f => ({ ...f, location: e.target.value }))} className="mt-1 text-base" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="highlight" className="text-base font-medium">Highlight of the day</Label>
                  <Input id="highlight" placeholder="e.g. Saw the Trevi Fountain at sunset" value={dayForm.highlight} onChange={e => setDayForm(f => ({ ...f, highlight: e.target.value }))} className="mt-1 text-base" />
                </div>
                <div>
                  <Label htmlFor="meal" className="text-base font-medium">Best meal (optional)</Label>
                  <Input id="meal" placeholder="e.g. Pasta carbonara at the corner café" value={dayForm.meal} onChange={e => setDayForm(f => ({ ...f, meal: e.target.value }))} className="mt-1 text-base" />
                </div>
                <div>
                  <Label htmlFor="d-notes" className="text-base font-medium">Other notes (optional)</Label>
                  <textarea id="d-notes" rows={3} placeholder="What stood out, who you met, what surprised you..." value={dayForm.notes} onChange={e => setDayForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
                </div>
                <Button onClick={addDay} size="lg" className="w-full sm:w-auto text-base">Save Today</Button>
              </CardContent>
            </Card>

            {tripDays.length > 0 && (
              <div className="mb-3 flex items-center justify-end print:hidden">
                <Button variant="outline" onClick={() => window.print()} className="gap-2">
                  <Printer className="h-4 w-4" />
                  Print Journal
                </Button>
              </div>
            )}

            {/* Days */}
            {tripDays.length === 0 ? (
              <Card className="print:hidden">
                <CardContent className="py-10 text-center text-gray-500">
                  <p className="text-lg">No entries yet.</p>
                  <p className="text-sm mt-1">Save the first day above.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {tripDays.map(d => (
                  <Card key={d.id} className="print:break-inside-avoid">
                    <CardContent className="py-3 px-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-teal-700">{formatDate(d.date)}</span>
                            {d.location && <Badge variant="secondary" className="text-xs">{d.location}</Badge>}
                          </div>
                          {d.highlight && <p className="text-base text-gray-900 mt-1">{d.highlight}</p>}
                          {d.meal && <p className="text-sm text-gray-600 mt-1">🍽️ {d.meal}</p>}
                          {d.notes && <p className="text-sm text-gray-500 italic mt-1">{d.notes}</p>}
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeDay(d.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Snap a photo of one tiny detail each day — a menu, a doorway, the view from your hotel. Pair them with these notes for the best memory keeper.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
