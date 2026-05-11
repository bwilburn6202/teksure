import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Scale, Printer } from "lucide-react";

interface Item {
  id: string;
  title: string;
  detail: string;
  category: "Before filing" | "During the process" | "First 90 days after" | "Year 1";
}

const ITEMS: Item[] = [
  { id: "a1", category: "Before filing", title: "Consult an elder-law family attorney", detail: "Not a generic divorce attorney. Elder-law family attorneys understand QDROs, Social Security spousal benefits, pension division, and the IRS rules that affect 70+ separations. First consult is usually $200-$400." },
  { id: "a2", category: "Before filing", title: "Gather 3 years of joint financials", detail: "Tax returns, retirement statements, bank statements, deeds, life insurance policies, pension docs. The more complete, the smoother the case." },
  { id: "a3", category: "Before filing", title: "Open a separate bank account if you do not have one", detail: "Direct deposit your own SSA and pension into it. Some seniors have shared finances with their spouse for 40+ years — separating accounts is psychologically harder than legally." },
  { id: "a4", category: "Before filing", title: "Understand the 10-year-marriage Social Security rule", detail: "If your marriage lasted 10+ years, you may be entitled to a spousal benefit on your ex's record — without affecting their benefit. Worth checking at ssa.gov/myaccount." },

  { id: "b1", category: "During the process", title: "Divide retirement accounts properly with a QDRO", detail: "A Qualified Domestic Relations Order divides 401(k)s and pensions without triggering early-withdrawal penalties. Your attorney drafts it. Costs $500-$1,500 per QDRO." },
  { id: "b2", category: "During the process", title: "Decide the family home — sell, buy out, or co-own", detail: "Selling and splitting is cleanest at 70+. Buying out the other requires cash or a refi at a higher rate. Co-owning post-divorce gets messy. A real estate attorney + appraiser helps." },
  { id: "b3", category: "During the process", title: "Address health insurance gap", detail: "If you were on your spouse's employer plan, you have a Special Enrollment Period for Medicare or ACA Marketplace. COBRA bridges 18-36 months but is expensive. The clock starts the day the divorce is final." },
  { id: "b4", category: "During the process", title: "Consider mediation or collaborative divorce", detail: "Cheaper than litigation ($3,000-$10,000 total vs $20,000-$80,000). Works well when both spouses want to be reasonable. Less appropriate when there is abuse, hidden assets, or one party in poor health." },

  { id: "c1", category: "First 90 days after", title: "Update beneficiaries on EVERY account", detail: "401(k), IRA, life insurance, pension survivor option, bank accounts, brokerage. Your ex is automatically still the beneficiary until you change it. This is the #1 reason ex-spouses receive money they were not supposed to." },
  { id: "c2", category: "First 90 days after", title: "Write a new will and update healthcare proxy", detail: "Old will probably names ex as executor, beneficiary, and healthcare proxy. Update all three. Even a basic update with an attorney is $300-$600." },
  { id: "c3", category: "First 90 days after", title: "Update deed/title on home, car, anything titled jointly", detail: "Quitclaim deed at county recorder for the house. DMV for the car. The divorce decree is not enough — the recording has to happen." },
  { id: "c4", category: "First 90 days after", title: "Change passwords and account access", detail: "Email, banking, brokerage, social media. The ex still has the passwords. Change them all and use different passwords for each (a password manager helps)." },

  { id: "d1", category: "Year 1", title: "Recalibrate your retirement budget", detail: "Two households cost more than one. Review SSA, pension, IRA withdrawals against new expenses. A flat-fee fiduciary advisor stress-tests the new budget for $400-$800." },
  { id: "d2", category: "Year 1", title: "File a SEPARATE tax return", detail: "Your filing status changed Dec 31 of the year you divorced. You file Single or Head of Household. AARP Tax-Aide files free for low-income seniors. Save 7 years of returns from the marriage." },
  { id: "d3", category: "Year 1", title: "Reconnect with your support network", detail: "Friends often picked sides. Adult children may have done the same. Rebuilding takes time. Senior centers, faith communities, and support groups for older divorcees fill the gap. AARP has a national directory." },
  { id: "d4", category: "Year 1", title: "Therapist or grief counselor", detail: "Divorce at 70+ is a real grief. Many therapists offer sliding-scale fees. Medicare Part B covers psychiatry and clinical psychology. Free 24/7 emotional support: 211 connects you to local mental health resources." },
];

const CATEGORIES: Item["category"][] = ["Before filing", "During the process", "First 90 days after", "Year 1"];

export default function DivorceAt70Checklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Divorce at 70+ Checklist | TekSure" description="A dignified, plainspoken checklist for older adults navigating gray divorce. Retirement assets, Medicare, the home, beneficiaries, the new chapter." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="h-7 w-7 text-slate-700" />
            <h1 className="text-3xl font-bold text-gray-900">Gray Divorce Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">A dignified plan for divorce at 70+. Move at your own pace. Bring this to your attorney's first meeting.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-slate-50 border-slate-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-slate-900 font-semibold">{completedCount} of {ITEMS.length} done</p>
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
