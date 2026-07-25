import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function DaysBetweenDates() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const result = (() => {
    if (!start || !end) return null;
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;
    const ms = e.getTime() - s.getTime();
    const days = Math.round(ms / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(Math.abs(days) / 7);
    const remainder = Math.abs(days) % 7;
    const months = Math.round(Math.abs(days) / 30.44);
    const years = Math.round(Math.abs(days) / 365.25 * 10) / 10;
    return { days, weeks, remainder, months, years };
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Days Between Dates | TekSure" description="Pick two dates and instantly see days, weeks, months, and years between them." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-7 w-7 text-teal-600" />
            <h1 className="text-3xl font-bold text-gray-900">Days Between Dates</h1>
          </div>
          <p className="text-gray-600 text-lg">Pick two dates and instantly see how far apart they are.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-base font-medium text-gray-700">Start date</label>
                <Input type="date" value={start} onChange={e => setStart(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-700">End date</label>
                <Input type="date" value={end} onChange={e => setEnd(e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            {result && (
              <div className="text-center bg-teal-50 border border-teal-200 rounded-md py-4 px-3">
                <p className="text-4xl font-bold text-teal-700">{Math.abs(result.days).toLocaleString()} days</p>
                <p className="text-sm text-teal-600 mt-2">
                  {result.weeks} week{result.weeks !== 1 ? "s" : ""} {result.remainder > 0 ? `+ ${result.remainder} days` : ""}
                </p>
                <p className="text-sm text-teal-600">~{result.months} months · ~{result.years} years</p>
                {result.days < 0 && <p className="text-xs text-gray-500 mt-1">(end date is before start)</p>}
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Use cases: </span>
              Count days until a vacation, anniversary, birthday, or appointment. Or figure out how long it has been since an event.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
