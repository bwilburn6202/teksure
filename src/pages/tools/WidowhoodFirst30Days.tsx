import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Printer } from "lucide-react";

interface Task {
  id: string;
  title: string;
  detail: string;
  category: "Immediate" | "Week 1" | "Week 2-4" | "Important paperwork";
}

const TASKS: Task[] = [
  { id: "a1", category: "Immediate", title: "Notify close family and one trusted friend", detail: "Pick one person to make the first round of calls if it helps you. You do not have to break the news to everyone yourself." },
  { id: "a2", category: "Immediate", title: "Confirm pronouncement of death and disposition", detail: "If at home, the hospice or coroner pronounces. If at hospital, staff handles it. Pick a funeral home and they coordinate transport." },
  { id: "a3", category: "Immediate", title: "Order 10-15 certified death certificates", detail: "Funeral home orders them. You will need one for each bank, insurance company, pension, the deed, the car title, and Social Security. Better to have too many." },
  { id: "a4", category: "Immediate", title: "Locate the will, life insurance policies, and key papers", detail: "Look in the home safe, filing cabinet, or safety deposit box. Make a single folder to keep them in one place." },

  { id: "b1", category: "Week 1", title: "Funeral or memorial planning", detail: "If pre-arranged, the funeral home walks you through it. If not, ask for an itemized price list. The FTC Funeral Rule says they must give you one." },
  { id: "b2", category: "Week 1", title: "Notify Social Security (1-800-772-1213)", detail: "Funeral home often reports the death automatically. Confirm it. Apply for the one-time $255 lump-sum death benefit and switch to survivor benefits if you qualify." },
  { id: "b3", category: "Week 1", title: "Notify employer or pension administrator", detail: "If your spouse worked or had a pension, the HR or benefits office handles final pay, retirement balances, and any group life insurance." },
  { id: "b4", category: "Week 1", title: "Eat and rest", detail: "Grief is physical work. People bring food because it matters. Accept it. Sleep when you can. The paperwork can wait a few days." },

  { id: "c1", category: "Week 2-4", title: "File life insurance claims", detail: "Call each company. They send a claim form. You return it with a certified death certificate. Most pay within 2-4 weeks. Term and whole life are both filed this way." },
  { id: "c2", category: "Week 2-4", title: "Switch joint accounts to your name only", detail: "Bank, credit cards, brokerage. Bring photo ID, the death certificate, and the account number. Some can do it by mail." },
  { id: "c3", category: "Week 2-4", title: "Update home and car titles", detail: "Home deed: file an Affidavit of Survivorship at the county recorder. Car title: visit your state DMV with the death certificate and current title." },
  { id: "c4", category: "Week 2-4", title: "Update utility bills, phone, internet, streaming", detail: "Call each. Some need a death certificate, some take a phone call. While you are at it, cancel anything you do not use." },

  { id: "d1", category: "Important paperwork", title: "File final joint tax return", detail: "You file as Married Filing Jointly for the year of death. After that, qualifying widow/widower status for 2 years if you have a dependent child. A CPA or AARP Tax-Aide can help free." },
  { id: "d2", category: "Important paperwork", title: "Veterans benefits if applicable", detail: "If your spouse was a veteran, you may qualify for survivor pension (DIC), $300 burial allowance, or a flag. Call the VA at 1-800-827-1000 or VA.gov." },
  { id: "d3", category: "Important paperwork", title: "Beneficiary updates on YOUR accounts", detail: "Your spouse was likely the primary beneficiary on your IRA, 401(k), and life insurance. Update each to a new person. Your bank or broker has a one-page form." },
  { id: "d4", category: "Important paperwork", title: "Update your own will and healthcare proxy", detail: "Your spouse was probably your healthcare proxy and named in your will. Pick someone new for each. An estate attorney charges $300-$600 for a basic update." },
];

const CATEGORIES: Task["category"][] = ["Immediate", "Week 1", "Week 2-4", "Important paperwork"];

export default function WidowhoodFirst30Days() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="First 30 Days After Losing a Spouse | TekSure" description="A compassionate, plainspoken checklist of the most important tasks after losing a husband or wife. Print and work through at your own pace." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-7 w-7 text-rose-700" />
            <h1 className="text-3xl font-bold text-gray-900">First 30 Days After Losing a Spouse</h1>
          </div>
          <p className="text-gray-600 text-lg">A compassionate checklist for the most overwhelming month. Take it one item at a time. Nothing on this list has to be done today.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-rose-50 border-rose-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-rose-900 font-semibold">{completedCount} of {TASKS.length} done</p>
            </CardContent>
          </Card>
        )}

        {CATEGORIES.map(cat => (
          <Card key={cat} className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{cat}</h2>
              <div className="space-y-3">
                {TASKS.filter(t => t.category === cat).map(t => (
                  <div key={t.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                    <Checkbox checked={!!done[t.id]} onCheckedChange={() => toggle(t.id)} className="mt-1 print:hidden" />
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${done[t.id] ? "line-through text-gray-400" : "text-gray-900"}`}>{t.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-blue-50 border-blue-200 mb-4">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Free help:</span> Many funeral homes provide a 30-day survivor checklist booklet. Hospice agencies have bereavement counselors at no cost for 13 months after a loss. AARP Tax-Aide files final returns free. A 211 call connects you to local grief support groups.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Checklist
          </Button>
        </div>
      </div>
    </div>
  );
}
