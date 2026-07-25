import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dices, Printer } from "lucide-react";

export default function CasinoBudgetLimit() {
  const [budget, setBudget] = useState("100");
  const [tripDate, setTripDate] = useState(new Date().toISOString().slice(0, 10));
  const [casino, setCasino] = useState("");
  const [spent, setSpent] = useState("0");

  const budgetNum = parseFloat(budget) || 0;
  const spentNum = parseFloat(spent) || 0;
  const remaining = budgetNum - spentNum;
  const lossPct = budgetNum > 0 ? (spentNum / budgetNum) * 100 : 0;

  let status: { label: string; color: string };
  if (lossPct < 50) status = { label: "Plenty left", color: "bg-emerald-50 text-emerald-700 border-emerald-200" };
  else if (lossPct < 80) status = { label: "Slow down", color: "bg-amber-50 text-amber-700 border-amber-200" };
  else if (lossPct < 100) status = { label: "Last warning — walk away soon", color: "bg-orange-50 text-orange-700 border-orange-200" };
  else status = { label: "STOP - budget hit", color: "bg-red-100 text-red-800 border-red-300" };

  function fmt(n: number) { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }); }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Casino Budget Limit Card | TekSure" description="Set a hard loss limit before you go. See where you are. Walk away when the card says walk away. For senior casino trips." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Dices className="h-7 w-7 text-purple-700" />
            <h1 className="text-3xl font-bold text-gray-900">Casino Budget Card</h1>
          </div>
          <p className="text-gray-600 text-lg">Decide your loss limit before you go. Update it during the trip. Walk away when the card says walk away.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="py-4 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Casino / Bus trip name</label>
              <Input value={casino} onChange={e => setCasino(e.target.value)} placeholder="Mohegan Sun, casino bus, etc." className="mt-1" />
            </div>
            <div>
              <label className="text-base font-medium">Date</label>
              <Input type="date" value={tripDate} onChange={e => setTripDate(e.target.value)} className="mt-1" />
            </div>
            <div>
              <label className="text-base font-medium">Loss limit for the trip ($)</label>
              <p className="text-xs text-gray-500">The most you are OK losing. This is entertainment money. Don't go past this.</p>
              <Input type="number" min="0" step="10" value={budget} onChange={e => setBudget(e.target.value)} className="mt-1 text-xl text-center h-14" />
            </div>
            <div>
              <label className="text-base font-medium">Amount lost so far ($)</label>
              <p className="text-xs text-gray-500">Update after each cash withdrawal or after a session.</p>
              <Input type="number" min="0" step="5" value={spent} onChange={e => setSpent(e.target.value)} className="mt-1 text-xl text-center h-14" />
            </div>
          </CardContent>
        </Card>

        <Card className={`mb-4 border-2 ${status.color}`}>
          <CardContent className="py-6 px-4 text-center">
            <p className="text-sm font-semibold">{casino || "Today"}</p>
            <p className="text-4xl font-bold mt-2">{fmt(remaining)} <span className="text-base font-normal">remaining</span></p>
            <Badge className={`mt-3 ${status.color}`} variant="outline">{status.label}</Badge>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className={`h-3 rounded-full ${lossPct < 50 ? "bg-emerald-500" : lossPct < 80 ? "bg-amber-500" : lossPct < 100 ? "bg-orange-500" : "bg-red-600"}`} style={{ width: `${Math.min(100, lossPct)}%` }} />
              </div>
              <p className="text-xs text-gray-600 mt-1">{lossPct.toFixed(0)}% of budget used</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">3 senior-smart casino rules:</span> (1) Leave the credit and debit cards in the car or hotel safe. Bring cash only. (2) Set a TIME limit too — 2 hours, then take a break. (3) Get the player card. Free play, free buffet, free room nights add up.</p>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 border-rose-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-rose-900"><span className="font-semibold">If gambling has stopped being fun:</span> Call the National Council on Problem Gambling helpline 1-800-GAMBLER (1-800-426-2537). It is free, confidential, available 24 hours, and the calling person does not have to admit anything. Gam-Anon supports spouses and family.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print This Card
          </Button>
        </div>
      </div>
    </div>
  );
}
