import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Printer, Copy, Check } from "lucide-react";

export default function TechHelpRequestForm() {
  const [device, setDevice] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");
  const [whenStarted, setWhenStarted] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tried, setTried] = useState("");
  const [urgency, setUrgency] = useState("");
  const [copied, setCopied] = useState(false);

  function reset() {
    setDevice(""); setModel(""); setProblem(""); setWhenStarted("");
    setErrorMessage(""); setTried(""); setUrgency("");
  }

  const summary = [
    device && `Device: ${device}${model ? ` (${model})` : ""}`,
    problem && `Problem: ${problem}`,
    whenStarted && `Started: ${whenStarted}`,
    errorMessage && `Error message I see: ${errorMessage}`,
    tried && `What I have tried: ${tried}`,
    urgency && `How urgent: ${urgency}`,
  ].filter(Boolean).join("\n\n");

  function copyToClipboard() {
    if (!summary) return;
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const filled = !!(device || problem);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Tech Help Request Form | TekSure"
        description="Describe a tech problem clearly before asking for help. The form gives you the right things to write down, then prints or copies a clean summary."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Tech Help Request Form</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Before calling tech support or asking a family member, fill this in. A clear summary saves everyone time.
          </p>
        </div>

        {/* Form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">Describe the Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="device" className="text-base font-medium">What kind of device is having the problem?</Label>
              <Input id="device" placeholder="e.g. iPhone, laptop, smart TV, printer" value={device} onChange={e => setDevice(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="model" className="text-base font-medium">Model or version (if you know)</Label>
              <Input id="model" placeholder="e.g. iPhone 14, HP Pavilion, Samsung Smart TV 2022" value={model} onChange={e => setModel(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="problem" className="text-base font-medium">What is happening that is wrong?</Label>
              <textarea id="problem" rows={3} placeholder="Describe what you see, hear, or what is not working" value={problem} onChange={e => setProblem(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
            </div>
            <div>
              <Label htmlFor="when" className="text-base font-medium">When did it start?</Label>
              <Input id="when" placeholder="e.g. This morning, after the last update, two days ago" value={whenStarted} onChange={e => setWhenStarted(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="err" className="text-base font-medium">Error message you see (if any)</Label>
              <Input id="err" placeholder="e.g. Network error 503, Battery service" value={errorMessage} onChange={e => setErrorMessage(e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="tried" className="text-base font-medium">What have you already tried?</Label>
              <textarea id="tried" rows={2} placeholder="e.g. Restarted, tried different cable, looked at Settings" value={tried} onChange={e => setTried(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
            </div>
            <div>
              <Label htmlFor="urgency" className="text-base font-medium">How urgent is this?</Label>
              <Input id="urgency" placeholder="e.g. Need it fixed today for a doctor visit, can wait a few days" value={urgency} onChange={e => setUrgency(e.target.value)} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Preview / output */}
        {filled && (
          <Card className="mb-4 print:break-inside-avoid">
            <CardHeader className="pb-2 pt-3 print:hidden">
              <CardTitle className="text-lg">Your Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="hidden print:block mb-2">
                <h2 className="text-xl font-bold text-gray-900">Tech Help Request</h2>
                <p className="text-xs text-gray-500">Prepared {new Date().toLocaleDateString("en-US")}</p>
              </div>
              <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-sans">{summary}</pre>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} disabled={!filled} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Summary
          </Button>
          <Button variant="outline" onClick={copyToClipboard} disabled={!filled} className="gap-2">
            {copied ? <><Check className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy Text</>}
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">Clear</Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              The more specific you are about what was happening right before the problem started, the faster a helper can figure it out. Even small details matter.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
