import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Copy, Check, Printer } from "lucide-react";

interface LetterTemplate {
  id: string;
  category: string;
  title: string;
  body: string;
}

const TEMPLATES: LetterTemplate[] = [
  {
    id: "complaint",
    category: "Complaint",
    title: "Complaint about a product or service",
    body: `[Date]\n\n[Your Name]\n[Your Address]\n[City, State ZIP]\n\n[Company Name]\nAttention: Customer Service\n[Company Address]\n[City, State ZIP]\n\nDear Customer Service:\n\nI am writing about an issue I have had with [product or service] purchased on [date] at [location or order number]. The problem is [describe the issue clearly and briefly].\n\nI have already tried [what you have done], but the problem has not been resolved. I am asking for [specific resolution — refund, replacement, repair, etc.].\n\nI have enclosed a copy of [receipt, photo, etc.] for your reference.\n\nPlease let me know how you plan to resolve this matter within [10-14 days]. You can reach me at [phone] or [email].\n\nThank you for your time and prompt attention.\n\nSincerely,\n\n[Sign your name]\n[Print your name]`,
  },
  {
    id: "thanks",
    category: "Gratitude",
    title: "Thank-you letter",
    body: `[Date]\n\nDear [Name],\n\nI wanted to take a moment to thank you for [specific kindness or gift]. It meant so much to me, and I want you to know how grateful I am.\n\n[A specific memory or detail about why it mattered]\n\nThank you again for thinking of me. It made my day brighter.\n\nWith warm regards,\n\n[Your name]`,
  },
  {
    id: "condolence",
    category: "Sympathy",
    title: "Condolence letter",
    body: `[Date]\n\nDear [Name],\n\nI was so sorry to hear about [Name of person who passed]. Please accept my heartfelt sympathy for you and your family during this difficult time.\n\n[Share a brief, kind memory of the person if you knew them]\n\nThere are no words that can take away the loss, but please know that I am thinking of you and holding you in my thoughts. If there is anything at all I can do — bring a meal, run an errand, or just sit and listen — please don't hesitate to call.\n\nWith deepest sympathy,\n\n[Your name]`,
  },
  {
    id: "medicare-appeal",
    category: "Appeal",
    title: "Medicare claim appeal",
    body: `[Date]\n\n[Your Name]\n[Medicare Number, found on your card]\n[Your Address]\n[Phone Number]\n\nMedicare Appeals\n[Address from your denial letter]\n\nRe: Appeal of denied claim\nDate of service: [Date]\nClaim number: [Number from denial letter]\n\nDear Medicare:\n\nI am writing to appeal the denial of the claim listed above. I believe this denial is incorrect because [reason — for example, the service was medically necessary, was ordered by my doctor, or was covered by my plan].\n\nI have enclosed copies of [doctor's note, lab results, prior authorization, etc.] supporting my appeal.\n\nThank you for reviewing this appeal. Please contact me at [phone number] if you need any additional information.\n\nSincerely,\n\n[Sign and print your name]`,
  },
  {
    id: "congratulations",
    category: "Gratitude",
    title: "Congratulations letter",
    body: `[Date]\n\nDear [Name],\n\nI was thrilled to hear about [accomplishment]. Congratulations! You have worked so hard for this, and you deserve every bit of the celebration.\n\n[Add a personal note, memory, or specific reason this is meaningful]\n\nWishing you continued success and joy. I am so proud to know you.\n\nWarmly,\n\n[Your name]`,
  },
  {
    id: "representative",
    category: "Civic",
    title: "Letter to your representative",
    body: `[Date]\n\nThe Honorable [Senator or Representative Name]\n[Office Address]\n[City, State ZIP]\n\nDear Senator [Last Name] / Representative [Last Name]:\n\nI am writing as a constituent in [city, state] to share my thoughts on [issue or piece of legislation, including bill number if known].\n\nI urge you to [your specific position — vote yes, vote no, sponsor, oppose, etc.]. This issue matters to me because [your personal reason, briefly].\n\n[Optional: a personal story or example that supports your position]\n\nThank you for your service to our state. I look forward to hearing your position on this issue.\n\nSincerely,\n\n[Your name]\n[Your address — important so they verify you are a constituent]`,
  },
  {
    id: "doctor-records",
    category: "Medical",
    title: "Request medical records",
    body: `[Date]\n\n[Your Name]\n[Your Date of Birth]\n[Your Address]\n[Your Phone]\n\n[Doctor's Office or Hospital]\nAttention: Medical Records\n[Address]\n\nRe: Request for copies of medical records\n\nDear Medical Records Department:\n\nI am writing to request copies of my medical records from [date range — for example, January 2020 to present].\n\nMy information:\n- Full Name: [Your full name]\n- Date of Birth: [Your DOB]\n- Last visit date: [If known]\n\nPlease send the records to [your address, or fax/secure email if preferred]. I understand there may be a copying fee, and I agree to pay reasonable charges.\n\nThank you for your help.\n\nSincerely,\n\n[Sign and print your name]`,
  },
];

const CATEGORIES = Array.from(new Set(TEMPLATES.map(t => t.category)));

export default function FormalLetterTemplates() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  const visible = filter === "All" ? TEMPLATES : TEMPLATES.filter(t => t.category === filter);
  const active = TEMPLATES.find(t => t.id === activeId);

  function copy() {
    if (!active) return;
    navigator.clipboard.writeText(active.body).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Formal Letter Templates | TekSure"
        description="7 ready-to-customize letter templates: complaint, thank-you, condolence, Medicare appeal, congratulations, congressional, medical records request."
      />

      <div className="max-w-3xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="h-7 w-7 text-blue-700" />
            <h1 className="text-3xl font-bold text-gray-900">Formal Letter Templates</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Real letter templates for situations when the right words matter. Pick one, copy it, and fill in the brackets.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-4 print:hidden">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-full text-sm font-medium ${filter === "All" ? "bg-blue-700 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
          >
            All
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${filter === c ? "bg-blue-700 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Template list */}
        {!activeId && (
          <div className="space-y-3">
            {visible.map(t => (
              <Card key={t.id} className="hover:shadow-md cursor-pointer transition-shadow" onClick={() => setActiveId(t.id)}>
                <CardContent className="py-3 px-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{t.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.category}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); setActiveId(t.id); }}>View</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Active template */}
        {active && (
          <>
            <Card>
              <CardHeader className="pb-2 pt-3">
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{active.title}</span>
                  <button onClick={() => setActiveId(null)} className="text-sm text-blue-600 underline print:hidden">Back to list</button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 leading-relaxed bg-white p-4 border border-gray-200 rounded">{active.body}</pre>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3 mt-4 print:hidden">
              <Button variant="outline" onClick={copy} className="gap-2">
                {copied ? <><Check className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy text</>}
              </Button>
              <Button variant="outline" onClick={() => window.print()} className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>
          </>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">How to use: </span>
              Pick a template, tap Copy, paste into Word or Notes, replace the bracketed [parts] with your info. Print or mail when done.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
