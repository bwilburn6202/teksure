import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Printer, AlertTriangle, CheckCircle2, RotateCcw } from "lucide-react";

interface Task {
  id: string;
  task: string;
  detail: string;
  monthsBetween: number;
  lastDone: string;
}

const DEFAULT_TASKS: Omit<Task, "lastDone">[] = [
  { id: "hvac-filter", task: "Change HVAC air filter", detail: "Replace your furnace or AC filter to keep air clean and equipment running well.", monthsBetween: 3 },
  { id: "smoke-batt", task: "Test smoke detectors", detail: "Press the test button on every smoke and CO detector. Replace batteries yearly.", monthsBetween: 12 },
  { id: "gutter", task: "Clean gutters", detail: "Clear leaves and debris so water drains away from your home. Twice a year is typical.", monthsBetween: 6 },
  { id: "fridge-coils", task: "Vacuum refrigerator coils", detail: "Cleaning the back coils helps your fridge run more efficiently and last longer.", monthsBetween: 6 },
  { id: "dryer-vent", task: "Clean dryer vent", detail: "A clogged dryer vent is a fire hazard. Vacuum out lint from the vent at least once a year.", monthsBetween: 12 },
  { id: "water-heater", task: "Flush water heater", detail: "Drain and flush the tank to remove sediment. Once a year keeps it running cleanly.", monthsBetween: 12 },
  { id: "weather-strip", task: "Check door and window weatherstripping", detail: "Look for gaps around doors and windows. Replace worn strips to save on energy bills.", monthsBetween: 12 },
  { id: "fire-extinguisher", task: "Check fire extinguishers", detail: "Make sure pressure gauges are in the green and the pin is secure. Once a year.", monthsBetween: 12 },
  { id: "garage-door", task: "Test garage door auto-reverse", detail: "Place a roll of paper towels under the door. The door should reverse when it touches them.", monthsBetween: 6 },
  { id: "caulk-bath", task: "Re-caulk tub and shower if needed", detail: "Look for cracks or mildew in caulk around the tub. Re-caulk if you see gaps.", monthsBetween: 12 },
  { id: "fridge-water", task: "Replace refrigerator water filter", detail: "If your fridge has a water dispenser, change the filter every 6 months.", monthsBetween: 6 },
  { id: "dishwasher-clean", task: "Run dishwasher cleaning cycle", detail: "Use a dishwasher cleaner or a cup of vinegar to clean built-up grime.", monthsBetween: 3 },
];

function monthsSince(dateStr: string): number {
  if (!dateStr) return 999;
  const last = new Date(dateStr);
  const now = new Date();
  const months = (now.getFullYear() - last.getFullYear()) * 12 + (now.getMonth() - last.getMonth());
  return Math.max(0, months);
}

function formatDate(s: string) {
  if (!s) return "Never";
  const [y, m, d] = s.split("-");
  return `${m}/${d}/${y}`;
}

export default function HomeMaintenanceTracker() {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS.map(t => ({ ...t, lastDone: "" })));

  function setLastDone(id: string, value: string) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, lastDone: value } : t));
  }

  function markDoneToday(id: string) {
    const today = new Date().toISOString().slice(0, 10);
    setLastDone(id, today);
  }

  function reset() {
    setTasks(DEFAULT_TASKS.map(t => ({ ...t, lastDone: "" })));
  }

  function statusFor(t: Task): { label: string; tone: "ok" | "soon" | "overdue" | "never"; color: string } {
    if (!t.lastDone) return { label: "Never logged", tone: "never", color: "bg-gray-100 text-gray-600" };
    const m = monthsSince(t.lastDone);
    if (m < t.monthsBetween) return { label: `In ${t.monthsBetween - m} mo.`, tone: "ok", color: "bg-green-100 text-green-700" };
    if (m === t.monthsBetween) return { label: "Due now", tone: "soon", color: "bg-amber-100 text-amber-700" };
    return { label: `${m - t.monthsBetween} mo. overdue`, tone: "overdue", color: "bg-red-100 text-red-700" };
  }

  const overdue = tasks.filter(t => statusFor(t).tone === "overdue").length;
  const dueNow = tasks.filter(t => statusFor(t).tone === "soon").length;

  // Sort: overdue first, then due now, then by months until due
  const sorted = [...tasks].sort((a, b) => {
    const order = { overdue: 0, soon: 1, never: 2, ok: 3 };
    const sa = order[statusFor(a).tone];
    const sb = order[statusFor(b).tone];
    if (sa !== sb) return sa - sb;
    return a.task.localeCompare(b.task);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Home Maintenance Tracker | TekSure"
        description="Track 12 home maintenance tasks with recommended frequencies. See what's overdue, due now, or coming up."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Home className="h-7 w-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Home Maintenance Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Stay on top of routine home tasks. Mark when you last did each one and see what's coming due.
          </p>
        </div>

        {/* Summary */}
        {(overdue > 0 || dueNow > 0) && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 text-sm">
                  {overdue > 0 && `${overdue} overdue`}
                  {overdue > 0 && dueNow > 0 && " · "}
                  {dueNow > 0 && `${dueNow} due now`}
                </p>
                <p className="text-sm text-amber-700">Plan to take care of these soon to avoid bigger problems later.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tasks */}
        <div className="space-y-3">
          {sorted.map(t => {
            const status = statusFor(t);
            const card = status.tone === "overdue" ? "border-red-200 bg-red-50/30"
              : status.tone === "soon" ? "border-amber-200 bg-amber-50/30"
                : status.tone === "never" ? "border-gray-200" : "border-green-100";
            return (
              <Card key={t.id} className={`${card} print:break-inside-avoid`}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-semibold text-gray-900 text-base">{t.task}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{t.detail}</p>
                      <p className="text-xs text-gray-400 mt-1">Recommended: every {t.monthsBetween} months</p>
                    </div>
                    <Badge variant="secondary" className={`text-xs whitespace-nowrap ${status.color}`}>
                      {status.label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2 print:hidden">
                    <span className="text-sm text-gray-600 shrink-0">Last done:</span>
                    <Input
                      type="date"
                      value={t.lastDone}
                      onChange={e => setLastDone(t.id, e.target.value)}
                      className="text-sm h-8 w-40"
                    />
                    <Button size="sm" variant="outline" onClick={() => markDoneToday(t.id)} className="text-xs gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Done today
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 hidden print:block">
                    Last done: {formatDate(t.lastDone)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Schedule
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Reset All
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              If you cannot or do not want to do a task yourself, your local AAA (Area Agency on Aging) often has lists of trusted handymen and home modification programs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
