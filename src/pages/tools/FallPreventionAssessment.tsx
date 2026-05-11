import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUESTIONS = [
  { id: "fall", text: "Have you fallen in the last year?", risky: "yes" },
  { id: "balance", text: "Do you ever feel unsteady when standing or walking?", risky: "yes" },
  { id: "support", text: "Do you have to hold furniture when walking at home?", risky: "yes" },
  { id: "concerned", text: "Are you worried about falling?", risky: "yes" },
  { id: "stairs", text: "Do you have trouble stepping up onto a curb?", risky: "yes" },
  { id: "wet", text: "Have you stopped some activities (like going out alone) because you might fall?", risky: "yes" },
  { id: "vision", text: "Has your vision gotten worse in the last year?", risky: "yes" },
  { id: "meds", text: "Are you taking 4 or more medications?", risky: "yes" },
  { id: "alone", text: "Do you live alone?", risky: "yes" },
  { id: "rugs", text: "Are there any throw rugs in your walking paths?", risky: "yes" },
  { id: "lights", text: "Are there dim or burned-out lights in stairwells or hallways?", risky: "yes" },
  { id: "bathroom", text: "Is there a grab bar by the toilet and in the shower?", risky: "no" },
];

export default function FallPreventionAssessment() {
  const [answers, setAnswers] = useState<Record<string, "yes" | "no">>({});

  function set(id: string, val: "yes" | "no") {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function reset() { setAnswers({}); }

  const answered = Object.keys(answers).length;
  const risks = QUESTIONS.filter(q => answers[q.id] === q.risky).length;
  const complete = answered === QUESTIONS.length;

  let level = "", color = "";
  if (complete) {
    if (risks === 0) { level = "Low risk"; color = "bg-green-50 border-green-200 text-green-800"; }
    else if (risks <= 3) { level = "Moderate risk"; color = "bg-yellow-50 border-yellow-200 text-yellow-800"; }
    else if (risks <= 6) { level = "Elevated risk — talk with your doctor"; color = "bg-amber-50 border-amber-200 text-amber-800"; }
    else { level = "High risk — schedule an appointment soon"; color = "bg-red-50 border-red-200 text-red-800"; }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Fall Risk Self-Assessment | TekSure" description="12 yes/no questions adapted from the CDC STEADI fall risk questionnaire. See your risk level and what to do next." />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="h-7 w-7 text-amber-600" />
            <h1 className="text-3xl font-bold text-gray-900">Fall Risk Self-Assessment</h1>
          </div>
          <p className="text-gray-600 text-lg">12 yes/no questions adapted from the CDC STEADI fall risk tool. Honest answers give the most useful result.</p>
        </div>

        <div className="space-y-2 mb-4">
          {QUESTIONS.map((q, idx) => (
            <Card key={q.id}>
              <CardContent className="py-3 px-4 flex items-center justify-between gap-2">
                <p className="text-sm flex-1"><span className="text-gray-400 mr-2">{idx + 1}.</span>{q.text}</p>
                <div className="flex gap-1">
                  <Button size="sm" variant={answers[q.id] === "yes" ? "default" : "outline"} onClick={() => set(q.id, "yes")}>Yes</Button>
                  <Button size="sm" variant={answers[q.id] === "no" ? "default" : "outline"} onClick={() => set(q.id, "no")}>No</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {complete && (
          <Card className={`border-2 ${color}`}>
            <CardContent className="py-4 px-4 text-center">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
              <p className="text-lg font-bold">{level}</p>
              <p className="text-sm mt-2">{risks} risk factor{risks !== 1 ? "s" : ""} identified out of 12</p>
              {risks > 0 && (
                <div className="mt-3 text-sm text-left bg-white/80 rounded p-3">
                  <p className="font-semibold mb-2">Next steps to consider:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Have your doctor review your medications — some cause dizziness.</li>
                    <li>Get your vision checked yearly.</li>
                    <li>Remove throw rugs or use non-slip backing.</li>
                    <li>Install grab bars in the bathroom.</li>
                    <li>Add nightlights in hallways and the bathroom.</li>
                    <li>Try a balance class — many senior centers offer free Tai Chi.</li>
                    <li>Ask about a fall-detection wearable like Apple Watch or Life Alert.</li>
                  </ul>
                </div>
              )}
              <Button variant="ghost" onClick={reset} className="mt-3">Start over</Button>
            </CardContent>
          </Card>
        )}
        {!complete && (
          <p className="text-center text-sm text-gray-500">{answered} of {QUESTIONS.length} answered</p>
        )}
      </div>
    </div>
  );
}
