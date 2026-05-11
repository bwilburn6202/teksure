import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarCheck, Printer } from "lucide-react";

interface Item {
  id: string;
  title: string;
  detail: string;
  category: "Days 1-7" | "Weeks 2-4" | "Days 30-60" | "Days 60-90";
}

const ITEMS: Item[] = [
  { id: "a1", category: "Days 1-7", title: "Confirm final paycheck and unused PTO payout", detail: "HR processes a final paycheck within 1-3 weeks. Confirm the amount and how unused vacation is paid out. Some states require immediate payout, others 14-30 days." },
  { id: "a2", category: "Days 1-7", title: "Close out work email and contacts", detail: "Export important personal contacts. Forward critical email to your personal account. Save any documents you have permission to keep." },
  { id: "a3", category: "Days 1-7", title: "Decompress - first week is for rest", detail: "The first week feels like a long weekend. Around day 8 reality sets in. That is normal. Plan a low-key week. Do not start new projects yet." },
  { id: "a4", category: "Days 1-7", title: "Tell key contacts you have retired", detail: "Doctor's office, bank, insurance company, and pharmacy may have your work phone or email on file. Update each one with your personal contact information." },

  { id: "b1", category: "Weeks 2-4", title: "Decide on Medicare or gap coverage", detail: "If you are 65+, Medicare A is automatic. Sign up for B and D. If you retire before 65, choose between COBRA (your old plan for 18 months, expensive), ACA marketplace (subsidies based on income), or a spouse's plan." },
  { id: "b2", category: "Weeks 2-4", title: "Decide 401(k) - stay or roll over", detail: "You can leave it with your employer, roll to an IRA (more investment choices, more flexibility), or roll to a new employer plan. A flat-fee fiduciary advisor charges $300-$600 to walk you through tradeoffs." },
  { id: "b3", category: "Weeks 2-4", title: "Apply for Social Security if you have decided", detail: "Most retirees do this in person at the local SSA office or online at ssa.gov. The timing decision is huge - check our SS Claiming Age Chart tool before you file." },
  { id: "b4", category: "Weeks 2-4", title: "Sign up for or cancel work-related subscriptions", detail: "LinkedIn Premium, professional society memberships, work expense apps. Decide which to keep personally. Some membership rates drop after retirement." },

  { id: "c1", category: "Days 30-60", title: "Build a weekly schedule", detail: "No workday means no structure unless you build one. Pick three anchors: morning walk, weekly volunteer shift, weekly social. Three anchors keep depression at bay better than a long to-do list." },
  { id: "c2", category: "Days 30-60", title: "Plan a meaningful first month-3 project", detail: "Pick one thing you put off for years - a hobby, a trip, a class, learning an instrument. Block the first weeks of months 2-3 for it. This is your reward." },
  { id: "c3", category: "Days 30-60", title: "Reconnect with neighbors and old friends", detail: "Working life filtered out a lot of casual contacts. Now is the time. Make a list of 10 people you have lost touch with. Call one a week." },
  { id: "c4", category: "Days 30-60", title: "Update emergency contacts everywhere", detail: "Your work emergency contact is no longer the right one. Update at doctors offices, pharmacy, banks, and your phone's emergency screen." },

  { id: "d1", category: "Days 60-90", title: "Re-do your beneficiaries on every account", detail: "IRA, 401(k), life insurance, pension survivor option. Marriage and divorce change things. Make sure each form reflects your current wishes." },
  { id: "d2", category: "Days 60-90", title: "Update or write your will and healthcare proxy", detail: "If you have not touched these in 5+ years, refresh them. An attorney charges $300-$600 for a basic update. AARP and your state bar have free legal aid for low-income seniors." },
  { id: "d3", category: "Days 60-90", title: "Build a retirement budget you can actually live on", detail: "Track 60 days of real spending. Compare to projected SSA + pension + IRA withdrawals. Adjust before the gap becomes a problem. A flat-fee advisor can stress-test it." },
  { id: "d4", category: "Days 60-90", title: "Consider downsizing or aging-in-place upgrades", detail: "Many retirees know within 90 days whether the current home still fits. Aging-in-place upgrades (grab bars, walk-in shower, lever door handles) typically cost $2,000-$8,000 and add years of independence." },
];

const CATEGORIES: Item["category"][] = ["Days 1-7", "Weeks 2-4", "Days 30-60", "Days 60-90"];

export default function Retirement90DayChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="First 90 Days of Retirement Checklist | TekSure" description="A week-by-week checklist for the first 90 days of retirement. Health insurance, Social Security, 401(k), structure, and aging-in-place decisions." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <CalendarCheck className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">First 90 Days of Retirement</h1>
          </div>
          <p className="text-gray-600 text-lg">The first three months set the tone for the next thirty years. One bite at a time.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-emerald-50 border-emerald-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-emerald-900 font-semibold">{completedCount} of {ITEMS.length} done</p>
            </CardContent>
          </Card>
        )}

        {CATEGORIES.map(cat => (
          <Card key={cat} className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{cat}</h2>
              <div className="space-y-3">
                {ITEMS.filter(i => i.category === cat).map(i => (
                  <div key={i.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                    <Checkbox checked={!!done[i.id]} onCheckedChange={() => toggle(i.id)} className="mt-1 print:hidden" />
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${done[i.id] ? "line-through text-gray-400" : "text-gray-900"}`}>{i.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{i.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Checklist
          </Button>
        </div>
      </div>
    </div>
  );
}
