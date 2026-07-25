import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Printer } from "lucide-react";

const QUESTIONS = [
  {
    id: "cpr",
    text: "If your heart stops, do you want CPR (chest compressions and defibrillation)?",
    options: ["Yes, always try", "Yes, but only if I'd be likely to recover", "No, allow natural death"],
  },
  {
    id: "tube",
    text: "If you cannot breathe on your own, do you want a breathing tube and ventilator?",
    options: ["Yes, for as long as needed", "Only for a short trial (a few days)", "No"],
  },
  {
    id: "feed",
    text: "If you cannot eat, do you want a feeding tube?",
    options: ["Yes", "Only short-term", "No"],
  },
  {
    id: "antibiotics",
    text: "If you have a serious infection, do you want antibiotics?",
    options: ["Yes", "Only for comfort, not cure", "No"],
  },
  {
    id: "hospice",
    text: "When the time comes, where do you want to receive end-of-life care?",
    options: ["Home with hospice", "Hospital", "Nursing home / care facility", "Wherever family decides"],
  },
  {
    id: "organ",
    text: "Do you want to donate organs and tissues?",
    options: ["Yes", "No", "Family can decide"],
  },
];

export default function AdvanceDirectiveWorksheet() {
  const [name, setName] = useState("");
  const [proxy, setProxy] = useState({ name: "", phone: "", relationship: "" });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [wishes, setWishes] = useState("");

  function setAnswer(id: string, val: string) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Advance Directive Worksheet | TekSure" description="A starter worksheet to record your end-of-life wishes. Print it and discuss with family — this is not a legal substitute for your state's advance directive form." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="h-7 w-7 text-blue-700" />
            <h1 className="text-3xl font-bold text-gray-900">Advance Directive Worksheet</h1>
          </div>
          <p className="text-gray-600 text-lg">A starter worksheet to help you think through end-of-life wishes. Talk it over with family and your doctor — and finalize with your state's legal advance directive form.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="py-4 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Your full name</label>
              <Input value={name} onChange={e => setName(e.target.value)} className="mt-1" placeholder="Mary Smith" />
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-2">Your healthcare proxy (the person who decides if you cannot):</p>
            <div className="grid grid-cols-2 gap-3">
              <Input value={proxy.name} onChange={e => setProxy({ ...proxy, name: e.target.value })} placeholder="Proxy name" />
              <Input value={proxy.relationship} onChange={e => setProxy({ ...proxy, relationship: e.target.value })} placeholder="Relationship" />
              <Input value={proxy.phone} onChange={e => setProxy({ ...proxy, phone: e.target.value })} placeholder="Proxy phone" className="col-span-2" />
            </div>
          </CardContent>
        </Card>

        {QUESTIONS.map(q => (
          <Card key={q.id} className="mb-3">
            <CardContent className="py-3 px-4">
              <p className="font-semibold mb-2">{q.text}</p>
              <div className="flex flex-wrap gap-2">
                {q.options.map(o => (
                  <Button
                    key={o}
                    variant={answers[q.id] === o ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAnswer(q.id, o)}
                  >
                    {o}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium">Any other wishes or comfort items? (favorite music, prayers, photos)</label>
            <textarea value={wishes} onChange={e => setWishes(e.target.value)} rows={4} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
          </CardContent>
        </Card>

        <Card className="mb-4 print:break-before-page print:break-inside-avoid">
          <CardContent className="py-4 px-4">
            <h2 className="text-xl font-bold mb-2">My Advance Directive Wishes</h2>
            {name && <p className="text-sm">Patient: <strong>{name}</strong></p>}
            {proxy.name && <p className="text-sm">Healthcare proxy: <strong>{proxy.name}</strong>{proxy.relationship && ` (${proxy.relationship})`}{proxy.phone && ` — ${proxy.phone}`}</p>}
            <div className="mt-3 space-y-2 text-sm">
              {QUESTIONS.map(q => answers[q.id] && (
                <div key={q.id}>
                  <p className="font-semibold">{q.text}</p>
                  <p className="ml-3">{answers[q.id]}</p>
                </div>
              ))}
              {wishes && (
                <div>
                  <p className="font-semibold">Other wishes:</p>
                  <p className="ml-3 whitespace-pre-wrap">{wishes}</p>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 italic mt-3">Worksheet — not a legal document. Use this to guide a conversation, then complete the legal form for your state (caringinfo.org has free templates).</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Worksheet
          </Button>
        </div>
      </div>
    </div>
  );
}
