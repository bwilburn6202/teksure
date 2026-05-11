import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldAlert, Printer } from "lucide-react";

interface Step {
  id: string;
  title: string;
  detail: string;
  category: "First hour - stop the bleeding" | "First 24 hours - report" | "Week 1 - lock down identity" | "Ongoing - heal";
}

const STEPS: Step[] = [
  { id: "a1", category: "First hour - stop the bleeding", title: "Stop. Send no more money. Take a slow breath.", detail: "The scammer will pressure you. Hang up. Block the number. Step away from the computer. Nothing you do in the next 60 minutes makes it worse if you simply STOP." },
  { id: "a2", category: "First hour - stop the bleeding", title: "Write down what happened while it's fresh", detail: "Names used, phone numbers, websites, dollar amounts, payment methods, dates. Even fragments help investigators. Save screenshots if there was a website or text." },
  { id: "a3", category: "First hour - stop the bleeding", title: "Tell one trusted person", detail: "Spouse, adult child, neighbor, pastor, friend. You don't have to tell everyone, but telling one person breaks the isolation and gets a calm second pair of hands." },
  { id: "a4", category: "First hour - stop the bleeding", title: "This was NOT your fault", detail: "Scammers are professionals running psychological attacks designed by teams of people. You were targeted, not stupid. The shame you feel is the scammer's last weapon — don't carry it." },

  { id: "b1", category: "First 24 hours - report", title: "Report to the FTC at ReportFraud.ftc.gov", detail: "Takes 10 minutes. No login needed. You can call 1-877-FTC-HELP (1-877-382-4357) for help filing. This is the master record investigators reference." },
  { id: "b2", category: "First 24 hours - report", title: "Report to FBI IC3 at IC3.gov", detail: "For internet, email, and wire-transfer scams. Larger dollar amounts get more attention. Include every detail from your written record." },
  { id: "b3", category: "First 24 hours - report", title: "Report to your state Attorney General", detail: "Each state has a consumer protection or elder-abuse division. Find your state at naag.org. Local investigators sometimes act on patterns the federal level cannot." },
  { id: "b4", category: "First 24 hours - report", title: "Call your bank or credit card company", detail: "If money was taken: ask about Regulation E (debit cards) and the Fair Credit Billing Act (credit cards). Dispute deadlines are tight (60 days for credit cards, sooner for debit). Get a case number." },

  { id: "c1", category: "Week 1 - lock down identity", title: "Freeze your credit at all 3 bureaus", detail: "Free, online, takes 5 minutes each: Equifax.com (1-800-685-1111), Experian.com (1-888-397-3742), TransUnion.com (1-888-909-8872). A freeze blocks new accounts opened in your name. Unfreeze when you need to apply for credit." },
  { id: "c2", category: "Week 1 - lock down identity", title: "Place a 1-year fraud alert", detail: "Call any one of the three bureaus and they alert the other two automatically. Lenders must extra-verify your identity before opening new accounts." },
  { id: "c3", category: "Week 1 - lock down identity", title: "Change passwords on email, banking, social", detail: "If the scammer got any password, they may try it elsewhere. Change email first (because email controls password resets), then banking, then everything else. Use a different password for each." },
  { id: "c4", category: "Week 1 - lock down identity", title: "Check your Social Security and Medicare accounts", detail: "Log in to SSA.gov/myaccount and Medicare.gov to make sure no one has created an account in your name. If they have, file a report at IdentityTheft.gov." },

  { id: "d1", category: "Ongoing - heal", title: "Monitor accounts for 12 months", detail: "Scammers often sell information to other criminals. Check bank statements weekly for unfamiliar charges. AnnualCreditReport.com gives free credit reports — pull one every 4 months." },
  { id: "d2", category: "Ongoing - heal", title: "Talk to a peer counselor about the emotional side", detail: "AARP Fraud Watch Helpline 1-877-908-3360 has trained peer counselors who have been there. The conversation is free. The shame fades faster when you talk it out with someone who gets it." },
  { id: "d3", category: "Ongoing - heal", title: "Recovery scams are also a scam", detail: "If anyone calls promising to recover the lost money for a fee, hang up. Real law enforcement and banks NEVER charge to recover stolen funds. Legitimate recovery is through the official channels you already filed." },
  { id: "d4", category: "Ongoing - heal", title: "Tell your story when you are ready", detail: "Sharing what happened with your senior center, your faith community, or even just one friend helps protect others. The scammers count on victims staying silent. Breaking the silence breaks their business." },
];

const CATEGORIES: Step["category"][] = ["First hour - stop the bleeding", "First 24 hours - report", "Week 1 - lock down identity", "Ongoing - heal"];

export default function ScamRecoveryChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Scam Recovery Checklist | TekSure" description="A dignified step-by-step guide for what to do AFTER being scammed. Reporting, credit freeze, bank dispute, identity lockdown, and emotional recovery." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="h-7 w-7 text-red-700" />
            <h1 className="text-3xl font-bold text-gray-900">Scam Recovery Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">If a scam has already happened. Take it one step at a time. The shame you may be feeling is the scammer's last weapon — set it down.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-red-50 border-red-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-red-900 font-semibold">{completedCount} of {STEPS.length} done</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4 bg-amber-50 border-amber-300 border-2">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-amber-900"><span className="font-semibold">You were targeted, not stupid.</span> Scammers run professional psychological attacks designed by teams. Millions of Americans get scammed every year. You are not alone, and reporting helps stop them from doing this to someone else.</p>
          </CardContent>
        </Card>

        {CATEGORIES.map(cat => (
          <Card key={cat} className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{cat}</h2>
              <div className="space-y-3">
                {STEPS.filter(s => s.category === cat).map(s => (
                  <div key={s.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                    <Checkbox checked={!!done[s.id]} onCheckedChange={() => toggle(s.id)} className="mt-1 print:hidden" />
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${done[s.id] ? "line-through text-gray-400" : "text-gray-900"}`}>{s.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{s.detail}</p>
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
