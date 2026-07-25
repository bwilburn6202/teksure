import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Printer, RotateCcw, FileText } from "lucide-react";

interface Item {
  id: string;
  task: string;
  detail: string;
}

interface Section {
  label: string;
  emoji: string;
  color: string;
  items: Item[];
}

const SECTIONS: Section[] = [
  {
    label: "Personal Information",
    emoji: "👤",
    color: "text-gray-700",
    items: [
      { id: "ssn", task: "Social Security cards or numbers", detail: "For yourself, your spouse, and any dependents you claim. The number on last year's tax return works too." },
      { id: "id", task: "Photo ID for yourself and spouse", detail: "Driver's license or state ID. Some tax software now requires verification." },
      { id: "bank", task: "Bank account and routing numbers", detail: "Needed for direct deposit of any refund or for paying any tax owed. You can find these on a check or in your bank app." },
    ],
  },
  {
    label: "Income Documents",
    emoji: "💰",
    color: "text-green-700",
    items: [
      { id: "ssa-1099", task: "SSA-1099 from Social Security", detail: "Shows total Social Security benefits received. Comes by mail in January or available online at ssa.gov/myaccount." },
      { id: "1099-r", task: "1099-R for pension or IRA withdrawals", detail: "If you took money from a pension, 401(k), or IRA. Sent by the company that paid you." },
      { id: "1099-int", task: "1099-INT for interest income", detail: "From banks, credit unions, or savings accounts. Required even for small amounts." },
      { id: "1099-div", task: "1099-DIV for dividend income", detail: "From stocks, mutual funds, or brokerage accounts." },
      { id: "1099-b", task: "1099-B for stock sales", detail: "Only if you sold stocks, bonds, or mutual funds during the year." },
      { id: "w2", task: "W-2 if you worked for an employer", detail: "Even part-time work counts. Sent by your employer by January 31." },
      { id: "1099-misc", task: "1099-MISC or 1099-NEC for self-employment", detail: "If you did consulting, gig work, or had any income that was not from an employer." },
    ],
  },
  {
    label: "Health & Medical",
    emoji: "🏥",
    color: "text-rose-700",
    items: [
      { id: "1095", task: "1095 forms for health insurance", detail: "1095-A from healthcare.gov, 1095-B or 1095-C from Medicare or other insurance. Confirms you had coverage." },
      { id: "medical", task: "Medical and dental expense receipts", detail: "Only matters if you itemize deductions. Includes doctor visits, prescriptions, hearing aids, glasses, mileage to medical appointments." },
      { id: "ltc", task: "Long-term care insurance premiums", detail: "Premiums paid for long-term care insurance can be partially deductible." },
    ],
  },
  {
    label: "Charitable & Deductions",
    emoji: "💝",
    color: "text-pink-700",
    items: [
      { id: "donations", task: "Charitable donation receipts", detail: "Cash and non-cash donations to qualified charities. Donations over $250 require a written acknowledgment." },
      { id: "mortgage", task: "Form 1098 for mortgage interest", detail: "Sent by your mortgage company. Shows interest paid that may be deductible if you itemize." },
      { id: "property-tax", task: "Property tax statements", detail: "From your county or city. Property tax paid is deductible up to the SALT cap if you itemize." },
      { id: "state-tax", task: "State and local income tax records", detail: "From last year's state return or current year payments. Deductible if you itemize." },
    ],
  },
  {
    label: "Retirement & Other",
    emoji: "📊",
    color: "text-purple-700",
    items: [
      { id: "ira-contrib", task: "IRA contribution records", detail: "If you contributed to an IRA during the year — Form 5498 will arrive in May, but keep your own records too." },
      { id: "rmd", task: "Records of required minimum distributions", detail: "If you are 73 or older with a traditional IRA, you must take RMDs. Confirm the amount taken matches the required amount." },
      { id: "hsa", task: "HSA contributions and distributions", detail: "Form 5498-SA for contributions, Form 1099-SA for distributions." },
      { id: "estimated", task: "Estimated tax payment records", detail: "If you paid quarterly estimated taxes, gather the dates and amounts." },
      { id: "prior-return", task: "Last year's tax return", detail: "Gives you a starting point and confirms numbers like AGI and any carryover items." },
    ],
  },
];

const ALL_ITEMS = SECTIONS.flatMap(s => s.items);

export default function TaxDocumentChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [na, setNa] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else { next.add(id); setNa(prevNa => { const n = new Set(prevNa); n.delete(id); return n; }); }
      return next;
    });
  }

  function markNA(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setNa(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else { next.add(id); setChecked(prevC => { const c = new Set(prevC); c.delete(id); return c; }); }
      return next;
    });
  }

  function reset() {
    setChecked(new Set());
    setNa(new Set());
  }

  const needed = ALL_ITEMS.filter(i => !na.has(i.id));
  const done = needed.filter(i => checked.has(i.id)).length;
  const total = needed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Tax Document Checklist | TekSure"
        description="An organized checklist of tax documents seniors typically need for filing — income, health, charity, retirement, and personal information."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="h-7 w-7 text-green-700" />
            <h1 className="text-3xl font-bold text-gray-900">Tax Document Checklist</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Gather everything you need before tax time. Mark items as collected or "not applicable" to focus on what is left.
          </p>
        </div>

        {/* Progress */}
        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-gray-800">{done} of {total} gathered</span>
              <span className="text-2xl font-bold text-green-700">{pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="h-3 bg-green-500 rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
            </div>
            {pct === 100 && total > 0 && (
              <p className="text-green-700 font-semibold mt-2 text-center">
                Ready to file! Time to make an appointment with your tax preparer or open IRS Free File.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Sections */}
        {SECTIONS.map(section => {
          const sectionItems = section.items.filter(i => !na.has(i.id));
          const sectionDone = sectionItems.filter(i => checked.has(i.id)).length;
          return (
            <Card key={section.label} className="mb-4">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className={`text-lg flex items-center justify-between ${section.color}`}>
                  <span>{section.emoji} {section.label}</span>
                  <Badge variant="secondary" className="text-sm">{sectionDone}/{sectionItems.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="space-y-2">
                  {section.items.map(item => {
                    const isDone = checked.has(item.id);
                    const isNA = na.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg border transition-colors ${
                          isNA ? "bg-gray-100 border-gray-200 opacity-60"
                            : isDone ? "bg-green-50 border-green-200"
                              : "bg-white border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() => toggle(item.id)}
                          disabled={isNA}
                          className="w-full text-left flex items-start gap-3"
                        >
                          <span className="mt-0.5 shrink-0">
                            {isDone ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Circle className="h-5 w-5 text-gray-400" />}
                          </span>
                          <span className="flex-1">
                            <span className={`block text-sm font-semibold ${isDone ? "line-through text-gray-400" : isNA ? "text-gray-400 line-through" : "text-gray-900"}`}>
                              {item.task}
                            </span>
                            {!isDone && !isNA && <span className="block text-sm text-gray-500 mt-0.5">{item.detail}</span>}
                          </span>
                        </button>
                        <button
                          onClick={(e) => markNA(item.id, e)}
                          className="mt-1 ml-8 text-xs text-blue-600 underline hover:text-blue-800 print:hidden"
                        >
                          {isNA ? "Bring back" : "Not applicable to me"}
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
            Start Over
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Don't worry if you cannot find every item — your tax preparer or AARP Tax-Aide volunteer can help track down missing documents.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
