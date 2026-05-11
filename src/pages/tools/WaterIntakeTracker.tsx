import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Plus, Minus, RotateCcw, Printer } from "lucide-react";

interface DayLog {
  date: string;
  glasses: number;
}

const GOAL_GLASSES = 8;

export default function WaterIntakeTracker() {
  const [todayCount, setTodayCount] = useState(0);
  const today = new Date().toISOString().slice(0, 10);
  const [history, setHistory] = useState<DayLog[]>([]);

  function increment() {
    if (todayCount >= 20) return;
    setTodayCount(c => c + 1);
  }

  function decrement() {
    if (todayCount <= 0) return;
    setTodayCount(c => c - 1);
  }

  function saveDay() {
    if (todayCount === 0) return;
    setHistory(prev => {
      const filtered = prev.filter(h => h.date !== today);
      return [{ date: today, glasses: todayCount }, ...filtered].slice(0, 7);
    });
    setTodayCount(0);
  }

  function reset() {
    setTodayCount(0);
    setHistory([]);
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  const pct = Math.min(100, Math.round((todayCount / GOAL_GLASSES) * 100));
  const goalMet = todayCount >= GOAL_GLASSES;
  const ozCount = todayCount * 8;
  const cupCount = todayCount;

  // Avg from history
  const avg = history.length > 0
    ? Math.round((history.reduce((s, h) => s + h.glasses, 0) / history.length) * 10) / 10
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Water Intake Tracker | TekSure"
        description="Tap a button each time you drink a glass of water. See progress against the 8-glass goal and a 7-day history."
      />

      <div className="max-w-xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Droplet className="h-7 w-7 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Water Intake Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Tap the plus button each time you finish a glass. Aim for about 8 glasses a day — adjust as your doctor advises.
          </p>
        </div>

        {/* Today's tracker */}
        <Card className="mb-4">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-lg text-gray-700 text-center">
              Today: {formatDate(today)}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {/* Big counter */}
            <div className="my-4">
              <p className="text-6xl font-bold text-blue-600">{todayCount}</p>
              <p className="text-sm text-gray-500 mt-1">{cupCount === 1 ? "glass" : "glasses"} · about {ozCount} oz</p>
            </div>

            {/* Visual glasses */}
            <div className="flex justify-center gap-1 my-4 flex-wrap">
              {Array.from({ length: GOAL_GLASSES }).map((_, i) => (
                <Droplet
                  key={i}
                  className={`h-7 w-7 ${i < todayCount ? "fill-blue-500 text-blue-500" : "text-gray-300"}`}
                />
              ))}
            </div>

            {/* Progress */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
              <div
                className={`h-3 rounded-full transition-all ${goalMet ? "bg-green-500" : "bg-blue-500"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className={`text-sm font-medium mb-4 ${goalMet ? "text-green-700" : "text-gray-600"}`}>
              {goalMet ? "Goal met! Keep sipping." : `${GOAL_GLASSES - todayCount} more to reach today's goal`}
            </p>

            {/* Buttons */}
            <div className="flex gap-2 justify-center print:hidden">
              <Button
                size="lg"
                variant="outline"
                onClick={decrement}
                disabled={todayCount <= 0}
                className="h-14 w-14 p-0"
                aria-label="Remove a glass"
              >
                <Minus className="h-6 w-6" />
              </Button>
              <Button
                size="lg"
                onClick={increment}
                className="h-14 px-8 bg-blue-500 hover:bg-blue-600"
              >
                <Plus className="h-6 w-6 mr-2" />
                I drank a glass
              </Button>
            </div>

            {todayCount > 0 && (
              <Button variant="ghost" onClick={saveDay} className="mt-3 text-sm text-gray-500 print:hidden">
                Save today and start tomorrow
              </Button>
            )}
          </CardContent>
        </Card>

        {/* 7-day history */}
        {history.length > 0 && (
          <Card className="mb-4">
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>Last {history.length} day{history.length !== 1 ? "s" : ""}</span>
                <Badge variant="secondary" className="text-xs">avg {avg} / day</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {history.map(h => {
                  const dayPct = Math.min(100, (h.glasses / GOAL_GLASSES) * 100);
                  const dayMet = h.glasses >= GOAL_GLASSES;
                  return (
                    <div key={h.date} className="flex items-center gap-2 text-sm py-1">
                      <span className="w-20 text-gray-600">{formatDate(h.date)}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${dayMet ? "bg-green-500" : "bg-blue-500"}`}
                          style={{ width: `${dayPct}%` }}
                        />
                      </div>
                      <span className="w-12 text-right text-gray-700 font-medium">{h.glasses}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          {history.length > 0 && (
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print History
            </Button>
          )}
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Reset All
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Set a glass on the kitchen counter and refill it any time it is empty. The visual reminder works better than counting.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
