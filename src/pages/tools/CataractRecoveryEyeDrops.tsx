import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Eye, Printer } from "lucide-react";

type Week = "Week 1" | "Week 2" | "Week 3-4";

interface Drop {
  name: string;
  type: string;
  weeks: Record<Week, number>;
}

const DEFAULT_DROPS: Drop[] = [
  { name: "Antibiotic", type: "moxifloxacin / Vigamox", weeks: { "Week 1": 4, "Week 2": 0, "Week 3-4": 0 } },
  { name: "Steroid", type: "prednisolone / Pred Forte", weeks: { "Week 1": 4, "Week 2": 3, "Week 3-4": 2 } },
  { name: "NSAID", type: "ketorolac / Acular", weeks: { "Week 1": 2, "Week 2": 2, "Week 3-4": 1 } },
];

const HOURS = ["8 AM", "12 PM", "4 PM", "8 PM"];

export default function CataractRecoveryEyeDrops() {
  const [surgeryDate, setSurgeryDate] = useState(new Date().toISOString().slice(0, 10));
  const [taken, setTaken] = useState<Record<string, boolean>>({});

  function daysSince() {
    const start = new Date(surgeryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    return Math.max(0, Math.floor((today.getTime() - start.getTime()) / 86400000));
  }

  const d = daysSince();
  const currentWeek: Week = d <= 7 ? "Week 1" : d <= 14 ? "Week 2" : "Week 3-4";

  function toggle(key: string) {
    setTaken(p => ({ ...p, [key]: !p[key] }));
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Cataract Recovery Eye-Drop Tracker | TekSure" description="A printable 4-week schedule for the strict eye-drop regimen after cataract surgery. Antibiotic, steroid, and NSAID doses by week. Check off each time you take a drop." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="h-7 w-7 text-sky-700" />
            <h1 className="text-3xl font-bold text-gray-900">Cataract Eye-Drop Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">The first 4 weeks after cataract surgery require careful drops. Type your surgery date and see today as a checklist.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium">Date of cataract surgery</label>
            <Input type="date" value={surgeryDate} onChange={e => setSurgeryDate(e.target.value)} className="mt-1" />
          </CardContent>
        </Card>

        <Card className="mb-4 bg-sky-50 border-sky-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-sky-900">Day {d} after surgery. You are in <span className="font-bold">{currentWeek}</span>.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Today is {today()}</h2>
            <div className="space-y-4">
              {DEFAULT_DROPS.map(drop => {
                const dosesToday = drop.weeks[currentWeek];
                if (dosesToday === 0) return null;
                return (
                  <div key={drop.name} className="border border-gray-200 rounded-lg p-3 bg-white">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">{drop.name}</p>
                        <p className="text-xs text-gray-500 italic">{drop.type}</p>
                      </div>
                      <Badge variant="outline">{dosesToday}x per day</Badge>
                    </div>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {HOURS.slice(0, dosesToday).map(hour => {
                        const key = `${today()}-${drop.name}-${hour}`;
                        return (
                          <label key={key} className={`flex items-center gap-2 border rounded p-2 cursor-pointer text-sm ${taken[key] ? "bg-emerald-50 border-emerald-300" : "bg-white border-gray-200"}`}>
                            <Checkbox checked={!!taken[key]} onCheckedChange={() => toggle(key)} className="print:hidden" />
                            <span className={taken[key] ? "line-through text-gray-500" : "text-gray-900"}>{hour}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-amber-50 border-amber-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-amber-900"><span className="font-semibold">Wait 5 minutes between different drops.</span> Lie back, look up, pull lower lid down, drop in pocket, close eyes for 30 seconds. Press the inner corner with a clean finger to slow drainage and reduce systemic absorption.</p>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-rose-50 border-rose-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-rose-900"><span className="font-semibold">CALL YOUR SURGEON if:</span> sudden severe pain, vision suddenly worse, new flashes or shower of floaters, redness with discharge, fever. These can mean infection or retinal detachment and need same-day care.</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Activity rules typical month 1:</span> No lifting over 10 pounds. No bending below the waist for the first week. No eye rubbing ever. Wear sunglasses outdoors (even cloudy days). No swimming pools or hot tubs for 2 weeks. Always confirm with YOUR surgeon — these vary.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Today
          </Button>
        </div>
      </div>
    </div>
  );
}
