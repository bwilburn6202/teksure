import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Cake } from "lucide-react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");

  const result = (() => {
    if (!dob) return null;
    const birth = new Date(dob);
    const today = new Date();
    if (isNaN(birth.getTime()) || birth > today) return null;
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) { years -= 1; months += 12; }
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    // Compare at day granularity so the birthday day itself reads as 0
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const nextBday = new Date(todayMidnight.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday < todayMidnight) nextBday.setFullYear(todayMidnight.getFullYear() + 1);
    const daysToBday = Math.round((nextBday.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24));
    return { years, months, days, totalDays, daysToBday };
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Age Calculator | TekSure" description="Type a birthdate and see exact age in years, months, days, plus days until your next birthday." />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Cake className="h-7 w-7 text-pink-500" />
            <h1 className="text-3xl font-bold text-gray-900">Age Calculator</h1>
          </div>
          <p className="text-gray-600 text-lg">Enter a birthday and see the exact age — yours, a grandchild's, anyone.</p>
        </div>
        <Card>
          <CardContent className="py-6 px-4 space-y-4">
            <div>
              <label htmlFor="dob" className="text-base font-medium text-gray-700">Date of birth</label>
              <Input id="dob" type="date" value={dob} onChange={e => setDob(e.target.value)} className="mt-1 text-2xl text-center h-14" />
            </div>
            {result && (
              <div className="text-center bg-pink-50 border border-pink-200 rounded-md py-4 px-3 space-y-2">
                <p className="text-3xl font-bold text-pink-700">
                  {result.years} year{result.years !== 1 ? "s" : ""}, {result.months} month{result.months !== 1 ? "s" : ""}, {result.days} day{result.days !== 1 ? "s" : ""}
                </p>
                <p className="text-sm text-pink-600">{result.totalDays.toLocaleString()} days alive</p>
                <p className="text-sm text-pink-600">🎂 {result.daysToBday === 0 ? "Birthday today!" : `${result.daysToBday} days until next birthday`}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
