import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneOff, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

type ScamType = "Medicare" | "IRS / tax" | "Social Security" | "Tech support" | "Grandchild emergency" | "Charity" | "Sweepstakes / lottery" | "Bank / fraud alert" | "Other";

interface ScamCall {
  id: string;
  date: string;
  time: string;
  phoneNumber: string;
  type: ScamType;
  claim: string;
  action: string;
  reported: boolean;
}

const SCAM_TYPES: ScamType[] = ["Medicare", "IRS / tax", "Social Security", "Tech support", "Grandchild emergency", "Charity", "Sweepstakes / lottery", "Bank / fraud alert", "Other"];

export default function ScamCallLog() {
  const [calls, setCalls] = useState<ScamCall[]>([]);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toTimeString().slice(0, 5),
    phoneNumber: "",
    type: "Medicare" as ScamType,
    claim: "",
    action: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.claim.trim()) { setError("Please describe what they claimed."); return; }
    setError("");
    setCalls(prev => [...prev, { id: Date.now().toString() + Math.random(), date: form.date, time: form.time, phoneNumber: form.phoneNumber.trim(), type: form.type, claim: form.claim.trim(), action: form.action.trim(), reported: false }]);
    setForm(f => ({ ...f, phoneNumber: "", claim: "", action: "" }));
  }

  function remove(id: string) {
    setCalls(prev => prev.filter(c => c.id !== id));
  }

  function toggleReported(id: string) {
    setCalls(prev => prev.map(c => c.id === id ? { ...c, reported: !c.reported } : c));
  }

  function formatDate(s: string) {
    const [y, m, d] = s.split("-");
    return `${m}/${d}/${y}`;
  }

  function formatTime(t: string) {
    const [h, m] = t.split(":");
    const hh = parseInt(h, 10);
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
    return `${hour12}:${m} ${period}`;
  }

  const sorted = [...calls].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));

  // Stats
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const last30 = calls.filter(c => c.date >= cutoffStr);
  const typeCounts = SCAM_TYPES.map(t => ({ type: t, count: calls.filter(c => c.type === t).length })).filter(t => t.count > 0).sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Scam Call Log | TekSure"
        description="Track scam and robocall attempts. Spot patterns, share with family, and report to the FTC. Free, private, lives on your device."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <PhoneOff className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Scam Call Log</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Every time a fishy call comes in, log it here. Patterns will start to show, and you'll have a record to report to the FTC.
          </p>
        </div>

        {/* Stats */}
        {calls.length > 0 && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardContent className="py-3 px-4">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Last 30 days</p>
                  <p className="text-xl font-bold text-red-700">{last30.length} call{last30.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">All-time logged</p>
                  <p className="text-xl font-bold text-gray-700">{calls.length}</p>
                </div>
              </div>
              {typeCounts.length > 0 && (
                <div className="border-t pt-2">
                  <p className="text-xs text-gray-500 mb-1">Most common types:</p>
                  <div className="flex flex-wrap gap-1">
                    {typeCounts.slice(0, 4).map(t => (
                      <Badge key={t.type} variant="secondary" className="text-xs">{t.type}: {t.count}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {last30.length >= 5 && (
          <Card className="mb-4 bg-amber-50 border-amber-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{last30.length} scam attempts in the last 30 days.</span> Consider turning on Silence Unknown Callers in Settings → Phone, and reporting these calls to the FTC at reportfraud.ftc.gov.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-red-600" />
              Log a Scam Call
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="sc-date" className="text-base font-medium">Date</Label>
                <Input id="sc-date" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="sc-time" className="text-base font-medium">Time</Label>
                <Input id="sc-time" type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="sc-phone" className="text-base font-medium">Phone number that called</Label>
              <Input id="sc-phone" placeholder="e.g. 555-555-1234 or Unknown" value={form.phoneNumber} onChange={e => setForm(f => ({ ...f, phoneNumber: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label className="text-base font-medium">Type of scam</Label>
              <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as ScamType }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {SCAM_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="sc-claim" className="text-base font-medium">What did they claim?</Label>
              <Input id="sc-claim" placeholder="e.g. Said my Medicare card was being cancelled" value={form.claim} onChange={e => setForm(f => ({ ...f, claim: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="sc-action" className="text-base font-medium">What did you do? (optional)</Label>
              <Input id="sc-action" placeholder="e.g. Hung up, didn't give info, blocked number" value={form.action} onChange={e => setForm(f => ({ ...f, action: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Log Call</Button>
          </CardContent>
        </Card>

        {calls.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Log
            </Button>
          </div>
        )}

        {sorted.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <PhoneOff className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No scam calls logged yet.</p>
              <p className="text-sm mt-1">Hopefully it stays that way. If a strange call comes in, log it here.</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="pb-2 pt-3">
              <CardTitle className="text-lg">Log (newest first)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {sorted.map(c => (
                  <div key={c.id} className="py-2 flex items-start justify-between gap-2 print:break-inside-avoid">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">{c.type}</Badge>
                        {c.phoneNumber && <span className="text-sm font-mono text-gray-700">{c.phoneNumber}</span>}
                        {c.reported && <Badge className="text-xs bg-green-100 text-green-700">Reported</Badge>}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(c.date)} at {formatTime(c.time)}</p>
                      <p className="text-sm text-gray-800 mt-1">{c.claim}</p>
                      {c.action && <p className="text-xs text-gray-500 italic mt-0.5">What I did: {c.action}</p>}
                      <Button variant="ghost" size="sm" onClick={() => toggleReported(c.id)} className="text-xs text-blue-600 hover:text-blue-800 mt-1 print:hidden">
                        {c.reported ? "Mark not reported" : "Mark as reported to FTC"}
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => remove(c.id)} className="h-7 w-7 text-red-400 hover:text-red-600 print:hidden">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Report scam calls: </span>
              Go to reportfraud.ftc.gov (free, anonymous). For Medicare or Social Security scams specifically, also report to oig.hhs.gov or oig.ssa.gov. Reporting helps shut these schemes down.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
