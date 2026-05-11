import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const ZONES = [
  { id: "America/Los_Angeles", label: "Pacific (LA, Seattle)" },
  { id: "America/Denver", label: "Mountain (Denver, Phoenix)" },
  { id: "America/Chicago", label: "Central (Chicago, Dallas)" },
  { id: "America/New_York", label: "Eastern (NYC, Atlanta)" },
  { id: "America/Anchorage", label: "Alaska" },
  { id: "Pacific/Honolulu", label: "Hawaii" },
  { id: "Europe/London", label: "London" },
  { id: "Europe/Paris", label: "Paris / Berlin / Rome" },
];

export default function TimeZoneConverter() {
  const [time, setTime] = useState("");
  const [fromZone, setFromZone] = useState("America/New_York");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function convertTo(zone: string): string {
    if (!time || !date) return "—";
    try {
      const isoCandidate = `${date}T${time}:00`;
      const sourceDate = new Date(isoCandidate);
      if (isNaN(sourceDate.getTime())) return "—";
      // Format using the from zone, then re-parse to UTC
      const fromOffsetStr = new Intl.DateTimeFormat("en-US", { timeZone: fromZone, timeZoneName: "shortOffset" }).formatToParts(sourceDate).find(p => p.type === "timeZoneName")?.value || "GMT";
      // Easier: just format the entered local time as if it's in fromZone, then format in target zone
      // Approach: build date in UTC equivalent for fromZone, then format in target
      const tempDate = new Date(`${date}T${time}:00Z`);
      const fromLocaleMs = tempDate.getTime() - getOffsetMs(fromZone, tempDate);
      const target = new Date(fromLocaleMs);
      return new Intl.DateTimeFormat("en-US", { timeZone: zone, hour: "numeric", minute: "2-digit", weekday: "short", month: "short", day: "numeric" }).format(target) + " " + fromOffsetStr.replace(/GMT|UTC/g, "");
    } catch {
      return "—";
    }
  }

  function getOffsetMs(zone: string, d: Date): number {
    const dtf = new Intl.DateTimeFormat("en-US", { timeZone: zone, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const parts = dtf.formatToParts(d).reduce<Record<string, string>>((acc, p) => { acc[p.type] = p.value; return acc; }, {});
    const asUTC = Date.UTC(parseInt(parts.year), parseInt(parts.month) - 1, parseInt(parts.day), parseInt(parts.hour), parseInt(parts.minute), parseInt(parts.second));
    return asUTC - d.getTime();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Time Zone Converter | TekSure" description="Type a time and see it in every US time zone, plus London and Paris. Perfect for scheduling calls with family." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Time Zone Converter</h1>
          </div>
          <p className="text-gray-600 text-lg">Type a time and see it in every common time zone.</p>
        </div>
        <Card className="mb-4">
          <CardContent className="py-4 px-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Date</label>
                <Input type="date" value={date} onChange={e => setDate(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">Time</label>
                <Input type="time" value={time} onChange={e => setTime(e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-700">In time zone</label>
              <select value={fromZone} onChange={e => setFromZone(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {ZONES.map(z => <option key={z.id} value={z.id}>{z.label}</option>)}
              </select>
            </div>
          </CardContent>
        </Card>

        {time && (
          <Card>
            <CardContent className="py-3 px-4">
              <div className="space-y-1">
                {ZONES.filter(z => z.id !== fromZone).map(z => (
                  <div key={z.id} className="flex justify-between items-center py-2 border-b last:border-0 text-sm">
                    <span className="text-gray-700">{z.label}</span>
                    <span className="font-semibold text-blue-700">{convertTo(z.id)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Use this before calling family who live far away. A 9 AM call from California is noon in New York.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
