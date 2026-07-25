import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wine, Trash2, Printer, PlusCircle } from "lucide-react";

type DrinkType = "Beer (12 oz)" | "Wine (5 oz)" | "Spirits (1.5 oz)" | "Cocktail" | "Other";

interface DayEntry {
  id: string;
  date: string;
  drinks: number;
  type: DrinkType;
  urgeLevel: number;
  note: string;
}

const TYPES: DrinkType[] = ["Beer (12 oz)", "Wine (5 oz)", "Spirits (1.5 oz)", "Cocktail", "Other"];

export default function AlcoholModerationTracker() {
  const [entries, setEntries] = useState<DayEntry[]>([]);
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    date: today,
    drinks: "0",
    type: "Wine (5 oz)" as DrinkType,
    urgeLevel: 3,
    note: "",
  });

  function add() {
    const d = parseFloat(form.drinks);
    if (isNaN(d) || d < 0) return;
    setEntries(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      date: form.date,
      drinks: d,
      type: form.type,
      urgeLevel: form.urgeLevel,
      note: form.note.trim(),
    }]);
    setForm(f => ({ ...f, drinks: "0", urgeLevel: 3, note: "" }));
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const recent = entries.filter(e => e.date >= cutoffStr);
  const totalRecent = recent.reduce((s, e) => s + e.drinks, 0);
  const avgDaily = recent.length ? (totalRecent / 14) : 0;
  const dryDays = 14 - new Set(recent.filter(e => e.drinks > 0).map(e => e.date)).size;
  const overGuideline = avgDaily > 1.0;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Alcohol Moderation Tracker for Seniors | TekSure" description="Log daily drinks and urge level. See your 14-day average compared to the NIAAA senior guideline of 1 drink/day max." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Wine className="h-7 w-7 text-rose-700" />
            <h1 className="text-3xl font-bold text-gray-900">Alcohol Moderation Tracker</h1>
          </div>
          <p className="text-gray-600 text-lg">For older adults curious about their patterns. No judgment. Patterns are easier to change once you can see them.</p>
        </div>

        {recent.length >= 5 && (
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">14-day total</p><p className="text-2xl font-bold text-rose-700">{totalRecent.toFixed(0)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Daily avg</p><p className="text-2xl font-bold text-rose-700">{avgDaily.toFixed(1)}</p></CardContent></Card>
            <Card><CardContent className="py-3 px-3 text-center"><p className="text-xs text-gray-500">Dry days</p><p className="text-2xl font-bold text-emerald-700">{dryDays}</p></CardContent></Card>
          </div>
        )}

        {overGuideline && recent.length >= 5 && (
          <Card className="mb-4 bg-amber-50 border-amber-300 border-2">
            <CardContent className="py-3 px-4">
              <p className="text-sm text-amber-900"><span className="font-semibold">Above the NIAAA senior guideline.</span> The current National Institute on Alcohol Abuse and Alcoholism guideline for adults 65+ is no more than 1 drink per day (women) or 1 drink per day (men). Your 14-day average is {avgDaily.toFixed(1)} per day. This is information, not judgment — talk with your doctor if you'd like to reduce. SAMHSA helpline: 1-800-662-HELP (4357), free, confidential, 24/7.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2 pt-3"><CardTitle className="text-lg flex items-center gap-2"><PlusCircle className="h-5 w-5 text-rose-700" />Log today</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            <div>
              <label className="text-sm font-medium text-gray-700">Number of drinks today (a drink = 12 oz beer, 5 oz wine, or 1.5 oz spirits)</label>
              <Input type="number" step="0.5" min="0" value={form.drinks} onChange={e => setForm(f => ({ ...f, drinks: e.target.value }))} className="text-2xl text-center h-12" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Mostly which?</label>
              <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as DrinkType }))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white mt-1">
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Urge level today (1 = no urge, 5 = strong urge)</label>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(n => (
                  <Button key={n} type="button" size="sm" variant={form.urgeLevel === n ? "default" : "outline"} onClick={() => setForm(f => ({ ...f, urgeLevel: n }))} className="flex-1">
                    {n}
                  </Button>
                ))}
              </div>
            </div>
            <Input placeholder="Note (optional - social setting, mood, trigger)" value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            <Button onClick={add} className="bg-rose-700 hover:bg-rose-800">Save day</Button>
          </CardContent>
        </Card>

        {entries.length > 0 && (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>All entries ({entries.length})</span>
                <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1 print:hidden">
                  <Printer className="h-3 w-3" />Print
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {[...entries].reverse().map(e => (
                  <div key={e.id} className="py-2 text-sm flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                      <span className="text-gray-500 text-xs">{e.date}</span>
                      <span className="font-bold">{e.drinks}</span>
                      <Badge variant="secondary" className="text-xs">{e.type}</Badge>
                      <span className="text-xs text-gray-500">Urge: {e.urgeLevel}/5</span>
                      {e.note && <p className="text-xs text-gray-500 italic w-full">{e.note}</p>}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(e.id)} className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">After 60, alcohol affects you differently.</span> Body water drops, the liver metabolizes alcohol slower, and many common medications (blood thinners, antidepressants, blood pressure meds, sleep aids) don't mix safely with alcohol. NIAAA guideline for older adults: 1 drink per day max. Not medical advice. Talk to your doctor.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
