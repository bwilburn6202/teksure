import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Trash2, Printer, PlusCircle } from "lucide-react";

type VisitType = "annual" | "specialist" | "followup" | "urgent";

interface Question {
  id: string;
  text: string;
  category: string;
}

const VISIT_TYPES: Record<VisitType, { label: string; emoji: string; suggested: { category: string; question: string }[] }> = {
  annual: {
    label: "Annual physical / checkup",
    emoji: "🩺",
    suggested: [
      { category: "Screenings", question: "Which screenings or tests do I need this year based on my age?" },
      { category: "Vaccinations", question: "Are my vaccinations up to date (flu, pneumonia, shingles, COVID)?" },
      { category: "Medications", question: "Are all my current medications still right for me?" },
      { category: "Lifestyle", question: "Are there any changes to my diet, exercise, or sleep I should consider?" },
      { category: "Numbers", question: "How are my blood pressure, cholesterol, and blood sugar?" },
    ],
  },
  specialist: {
    label: "Visit with a specialist",
    emoji: "👨‍⚕️",
    suggested: [
      { category: "Diagnosis", question: "What is causing my symptoms — what is the diagnosis?" },
      { category: "Treatment", question: "What treatment options do I have? Pros and cons of each?" },
      { category: "Tests", question: "What tests will you order, and what will they tell us?" },
      { category: "Side effects", question: "What side effects should I watch for from any new treatment?" },
      { category: "Follow-up", question: "When do I come back, and what should I do in the meantime?" },
    ],
  },
  followup: {
    label: "Follow-up appointment",
    emoji: "📋",
    suggested: [
      { category: "Progress", question: "How am I doing compared to last visit?" },
      { category: "Test results", question: "What do my recent test results mean?" },
      { category: "Medication changes", question: "Should we adjust any medications based on how I have been feeling?" },
      { category: "Concerns", question: "Are any new symptoms I have noticed worth worrying about?" },
      { category: "Next steps", question: "What is the plan from here? When is my next appointment?" },
    ],
  },
  urgent: {
    label: "Urgent visit / new symptom",
    emoji: "⚠️",
    suggested: [
      { category: "What is wrong", question: "What is causing this symptom?" },
      { category: "Severity", question: "Is this serious? Should I go to the ER if it gets worse?" },
      { category: "Treatment", question: "What can I do at home to feel better?" },
      { category: "Warning signs", question: "What symptoms mean I should call you or 911 right away?" },
      { category: "Next steps", question: "Do I need a follow-up appointment?" },
    ],
  },
};

export default function DoctorQuestionPrepBuilder() {
  const [visitType, setVisitType] = useState<VisitType | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medications, setMedications] = useState("");

  function pickVisitType(t: VisitType) {
    setVisitType(t);
    setQuestions(
      VISIT_TYPES[t].suggested.map((s, i) => ({
        id: `s-${i}-${Date.now()}`,
        text: s.question,
        category: s.category,
      }))
    );
  }

  function addQuestion() {
    if (!newQuestion.trim()) return;
    setQuestions(prev => [...prev, { id: Date.now().toString(), text: newQuestion.trim(), category: "My question" }]);
    setNewQuestion("");
  }

  function removeQuestion(id: string) {
    setQuestions(prev => prev.filter(q => q.id !== id));
  }

  function reset() {
    setVisitType(null);
    setQuestions([]);
    setNewQuestion("");
    setAppointmentDate("");
    setDoctorName("");
    setSymptoms("");
    setMedications("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Doctor Visit Question Builder | TekSure"
        description="Prepare for your doctor's appointment. Build a list of questions, jot down symptoms and medications, and print it to take with you."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Stethoscope className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Doctor Visit Prep</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Walk into your appointment confident. Pick the visit type, customize your questions, and print the list to take with you.
          </p>
        </div>

        {/* Step 1: Pick visit type */}
        {!visitType && (
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="text-xl">What kind of appointment is this?</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(Object.keys(VISIT_TYPES) as VisitType[]).map(t => (
                <Button key={t} size="lg" variant="outline" className="h-auto py-4 px-3 text-left flex flex-col items-start" onClick={() => pickVisitType(t)}>
                  <span className="text-xl mb-1">{VISIT_TYPES[t].emoji}</span>
                  <span className="text-sm font-semibold text-gray-900">{VISIT_TYPES[t].label}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Steps 2-3: Build question list */}
        {visitType && (
          <>
            {/* Visit details */}
            <Card className="mb-4 print:shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{VISIT_TYPES[visitType].emoji} {VISIT_TYPES[visitType].label}</span>
                  <button onClick={reset} className="text-sm text-blue-600 underline print:hidden">Change</button>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0">
                <div>
                  <Label htmlFor="appt-date" className="text-base font-medium">Appointment Date</Label>
                  <Input id="appt-date" type="date" value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} className="mt-1 text-base" />
                </div>
                <div>
                  <Label htmlFor="doctor" className="text-base font-medium">Doctor's Name</Label>
                  <Input id="doctor" placeholder="e.g. Dr. Patel" value={doctorName} onChange={e => setDoctorName(e.target.value)} className="mt-1 text-base" />
                </div>
              </CardContent>
            </Card>

            {/* Symptoms / medications */}
            <Card className="mb-4 print:shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Symptoms &amp; Medications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div>
                  <Label htmlFor="symptoms" className="text-base font-medium">Current symptoms or concerns</Label>
                  <textarea
                    id="symptoms"
                    placeholder="e.g. Knee pain when standing up, started 2 weeks ago"
                    value={symptoms}
                    onChange={e => setSymptoms(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white min-h-[80px]"
                  />
                </div>
                <div>
                  <Label htmlFor="meds" className="text-base font-medium">Current medications and supplements</Label>
                  <textarea
                    id="meds"
                    placeholder="e.g. Lisinopril 10mg daily, Metformin 500mg twice daily, Vitamin D 1000 IU"
                    value={medications}
                    onChange={e => setMedications(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Questions */}
            <Card className="mb-4 print:shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PlusCircle className="h-5 w-5 text-blue-600" />
                  My Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {questions.length === 0 && (
                  <p className="text-sm text-gray-500 italic mb-3">No questions yet. Add some below.</p>
                )}
                <div className="space-y-2 mb-4">
                  {questions.map((q, i) => (
                    <div key={q.id} className="border rounded-md p-3 flex items-start justify-between gap-2 bg-white">
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
                          <div>
                            <p className="text-sm text-gray-900">{q.text}</p>
                            <Badge variant="secondary" className="text-xs mt-1">{q.category}</Badge>
                          </div>
                        </div>
                        <div className="mt-2 border-t border-dashed border-gray-300 pt-2 hidden print:block">
                          <span className="text-xs text-gray-400">Doctor's answer:</span>
                          <div className="mt-1 h-12 border-b border-gray-300"></div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0 text-red-400 hover:text-red-600 print:hidden" onClick={() => removeQuestion(q.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 print:hidden">
                  <Input
                    placeholder="Type your own question and press Enter"
                    value={newQuestion}
                    onChange={e => setNewQuestion(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addQuestion(); } }}
                    className="text-base"
                  />
                  <Button onClick={addQuestion} className="text-base">
                    Add Question
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3 mt-4 print:hidden">
              <Button variant="outline" onClick={() => window.print()} className="gap-2">
                <Printer className="h-4 w-4" />
                Print to Take With Me
              </Button>
              <Button variant="ghost" onClick={reset} className="text-gray-500">
                Start Over
              </Button>
            </div>

            <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
              <CardContent className="py-3 px-4">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Tip: </span>
                  Bring a friend or family member if you can — a second set of ears helps you remember what was said and ask questions you might forget.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
