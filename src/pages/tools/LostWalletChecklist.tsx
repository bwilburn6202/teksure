import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, CheckCircle2, Circle, Printer, RotateCcw, Phone } from "lucide-react";

interface Item {
  id: string;
  task: string;
  detail: string;
  phone?: string;
}

interface Section {
  label: string;
  emoji: string;
  color: string;
  items: Item[];
}

const SECTIONS: Section[] = [
  {
    label: "Right Now (first hour)",
    emoji: "🚨",
    color: "text-red-700",
    items: [
      { id: "retrace", task: "Retrace your steps", detail: "Check the last places you remember having your wallet — pockets, car, kitchen counter, between couch cushions. Most lost wallets show up in 24 hours." },
      { id: "cancel-debit", task: "Cancel your debit card", detail: "Call your bank's number on the back of your statement — or use the bank app's Lock Card feature if you have it. Time matters with debit because your money is exposed.", phone: "Bank's 1-800 number on statements" },
      { id: "cancel-credit", task: "Cancel each credit card", detail: "Call each issuer one at a time. Federal law caps your fraud liability at $50 if reported, $0 if reported before unauthorized use.", phone: "Visa: 1-800-847-2911, Mastercard: 1-800-627-8372, Amex: 1-800-528-4800, Discover: 1-800-347-2683" },
    ],
  },
  {
    label: "Within 24 Hours",
    emoji: "⏰",
    color: "text-amber-700",
    items: [
      { id: "police", task: "File a police report", detail: "Even if it does not lead to recovery, the report number is important if charges show up later. Call the non-emergency line, not 911.", phone: "Local police non-emergency number" },
      { id: "fraud-alert", task: "Place a free fraud alert with the credit bureaus", detail: "You only need to call one bureau. They tell the other two. Stays on for 1 year.", phone: "Equifax 1-800-685-1111, Experian 1-888-397-3742, TransUnion 1-888-909-8872" },
      { id: "id-theft-report", task: "File a report at IdentityTheft.gov", detail: "If anything sensitive was in the wallet (Social Security card, checks). Free, takes 15 minutes." },
    ],
  },
  {
    label: "Replace IDs (this week)",
    emoji: "🪪",
    color: "text-blue-700",
    items: [
      { id: "drivers-license", task: "Replace your driver's license at the DMV", detail: "Many states let you order online for a fee, mailed in 7-14 days. You will need to verify identity. Bring your passport or birth certificate if you go in person." },
      { id: "ss-card", task: "Replace Social Security card if needed", detail: "Most people do NOT need to carry the Social Security card. If yours was in the wallet, you can apply for a replacement free at ssa.gov/myaccount.", phone: "SSA 1-800-772-1213" },
      { id: "medicare-card", task: "Replace Medicare card", detail: "Login to mymedicare.gov and request a free replacement, mailed in 30 days. You can print a temporary card right away from the site." },
      { id: "insurance-cards", task: "Request new health insurance cards", detail: "Call your insurance company or use their app. Many provide a digital ID immediately." },
    ],
  },
  {
    label: "Wallet Reset",
    emoji: "💼",
    color: "text-purple-700",
    items: [
      { id: "new-wallet", task: "Get a new wallet", detail: "Look for one with RFID-blocking material if you carry chip-enabled cards. Keep it slim — the less you carry, the less you can lose." },
      { id: "photocopy", task: "Photocopy or scan the new contents", detail: "When you put cards into the new wallet, photograph the front and back of each. Keep the photos in a secure folder on your phone or in your safe." },
      { id: "less", task: "Carry less next time", detail: "Most experts recommend: ID, one credit card, one debit card, insurance card, and small cash. Leave the Social Security card, extra cards, and old receipts at home." },
    ],
  },
];

const ALL = SECTIONS.flatMap(s => s.items);

export default function LostWalletChecklist() {
  const [done, setDone] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() { setDone(new Set()); }

  const pct = Math.round((done.size / ALL.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Lost Wallet Checklist | TekSure"
        description="Step-by-step checklist for what to do when your wallet is lost or stolen. Cancel cards, replace IDs, freeze credit, prevent fraud."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Wallet className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Lost Wallet Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Take a deep breath. Work this list top to bottom — it covers every step from the first hour through replacement.
          </p>
        </div>

        {/* Progress */}
        <Card className="mb-4 print:break-inside-avoid">
          <CardContent className="py-3 px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold text-gray-800">{done.size} of {ALL.length} done</span>
              <span className="text-2xl font-bold text-red-700">{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="h-3 bg-red-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        {SECTIONS.map(section => {
          const sectionDone = section.items.filter(i => done.has(i.id)).length;
          return (
            <Card key={section.label} className="mb-4 print:break-inside-avoid">
              <CardHeader className="pb-2 pt-3">
                <CardTitle className={`text-lg flex items-center justify-between ${section.color}`}>
                  <span>{section.emoji} {section.label}</span>
                  <Badge variant="secondary" className="text-sm">{sectionDone}/{section.items.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="space-y-2">
                  {section.items.map(item => {
                    const isDone = done.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg border transition-colors ${
                          isDone ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
                        }`}
                      >
                        <button onClick={() => toggle(item.id)} className="w-full text-left flex items-start gap-3">
                          <span className="mt-0.5 shrink-0">
                            {isDone ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Circle className="h-5 w-5 text-gray-400" />}
                          </span>
                          <span className="flex-1">
                            <span className={`block text-sm font-semibold ${isDone ? "line-through text-gray-400" : "text-gray-900"}`}>
                              {item.task}
                            </span>
                            {!isDone && <span className="block text-sm text-gray-600 mt-0.5">{item.detail}</span>}
                            {!isDone && item.phone && (
                              <span className="block text-xs text-blue-700 mt-1 flex items-start gap-1">
                                <Phone className="h-3 w-3 mt-0.5 shrink-0" />
                                {item.phone}
                              </span>
                            )}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Checklist
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">After everything is replaced: </span>
              Print this list now and tape it inside your filing cabinet, with your bank phone numbers filled in. Future-you will be grateful.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
