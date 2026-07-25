import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Printer, RotateCcw } from "lucide-react";

type Goal = "Stay independent" | "Get stronger" | "Prevent falls" | "Build muscle";
type Equipment = "Bodyweight (free)" | "Resistance bands" | "Dumbbells at home" | "Gym machines";

interface Exercise {
  name: string;
  why: string;
  how: string;
}

const ROUTINES: Record<Equipment, Exercise[]> = {
  "Bodyweight (free)": [
    { name: "Sit-to-stand from a chair", why: "Number-one predictor of falling and losing independence", how: "Cross arms over chest. Stand up from chair, sit back down. 3 sets of 10. If too easy, slow it down. If too hard, use a taller chair." },
    { name: "Wall pushups", why: "Upper body strength, keeps you safe in a fall", how: "Stand 2 feet from a wall, arms out. Lean in and push back out. 3 sets of 10. Move closer to wall to make it harder." },
    { name: "Glute bridges on the floor", why: "Strong hips prevent falls and help you get out of low chairs", how: "Lie on back, knees bent, feet flat. Push hips up so body is straight from shoulders to knees. 3 sets of 10." },
    { name: "Calf raises holding a counter", why: "Calves keep you balanced when you stop walking", how: "Stand at kitchen counter. Push up onto toes, lower slowly. 3 sets of 15." },
    { name: "Standing march", why: "Hip-flexor strength and balance, all in one", how: "Hold counter. Lift right knee high. Lower. Lift left knee high. 20 lifts per side." },
  ],
  "Resistance bands": [
    { name: "Banded squat (looped under feet)", why: "Whole lower body without joint impact", how: "Loop band under feet. Hold ends at shoulders. Squat down halfway, drive up. 3 sets of 12." },
    { name: "Banded row (band looped around door)", why: "Pulls shoulder blades back, fixes hunched posture", how: "Anchor band at chest height. Hold one end in each hand. Step back. Pull elbows to ribs. 3 sets of 12." },
    { name: "Banded chest press", why: "Push strength for opening doors, lifting things off shelves", how: "Anchor band behind you at shoulder height. Hold ends in each hand at chest. Press forward. 3 sets of 10." },
    { name: "Banded lateral raise", why: "Shoulder strength for reaching cabinets", how: "Stand on band. Hold ends at thighs. Lift arms out to sides to shoulder height. 3 sets of 10." },
    { name: "Banded clamshell (hip strength)", why: "Side-hip strength that walking does not build", how: "Lie on side with loop band above knees. Top knee opens away while feet stay touching. 3 sets of 12 per side." },
  ],
  "Dumbbells at home": [
    { name: "Goblet squat (one dumbbell at chest)", why: "Full lower body and grip in one move", how: "Hold a 5-15 pound dumbbell at chest with both hands. Squat halfway, stand. 3 sets of 10." },
    { name: "One-arm row (knee on couch)", why: "Builds back without straining lower back", how: "Knee and hand on couch. Other hand holds dumbbell. Row weight to ribs. 3 sets of 10 each side." },
    { name: "Dumbbell shoulder press (seated)", why: "Shoulder strength for putting things on shelves", how: "Sit. Hold dumbbells at shoulders. Press straight up. Lower. 3 sets of 10." },
    { name: "Romanian deadlift", why: "Posterior chain, key for back health", how: "Hold dumbbells in front. Hinge at hips, push butt back, keep back flat. Stand. 3 sets of 10." },
    { name: "Dumbbell carry (farmer walk)", why: "Total-body strength and grip", how: "Hold a dumbbell in each hand. Walk 30 steps slowly. Rest. Repeat 3 times." },
  ],
  "Gym machines": [
    { name: "Leg press", why: "Big leg builder, safer than barbell squats for older joints", how: "Set seat so knees are 90 degrees at top. Press. 3 sets of 10. Light enough to control the lowering." },
    { name: "Lat pulldown", why: "Back strength and posture", how: "Sit. Grip bar shoulder-width. Pull to upper chest. Slowly let it return. 3 sets of 10." },
    { name: "Chest press machine", why: "Easier on shoulders than free weights", how: "Set seat so handles are at chest. Press out. Slow return. 3 sets of 10." },
    { name: "Seated row machine", why: "Pulls shoulder blades back, fights hunched posture", how: "Chest pad supports you. Pull handles to ribs. Squeeze shoulder blades. 3 sets of 10." },
    { name: "Standing or seated calf raise", why: "Calf strength for balance", how: "Add light weight on shoulders. Raise heels. Slow lower. 3 sets of 15." },
  ],
};

export default function StrengthRoutineBuilder() {
  const [goal, setGoal] = useState<Goal>("Stay independent");
  const [equipment, setEquipment] = useState<Equipment>("Bodyweight (free)");

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Senior Strength Routine Builder | TekSure" description="Pick your goal and your equipment, get a printable 5-exercise strength routine for older adults. Twice a week, 30 minutes, no jargon." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Dumbbell className="h-7 w-7 text-emerald-700" />
            <h1 className="text-3xl font-bold text-gray-900">Strength Routine Builder</h1>
          </div>
          <p className="text-gray-600 text-lg">Pick your equipment, print the page, do this twice a week. The Fiatarone studies showed seniors gain muscle at any age.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Your goal (informational)</p>
              <div className="flex flex-wrap gap-1">
                {(["Stay independent", "Get stronger", "Prevent falls", "Build muscle"] as Goal[]).map(g => (
                  <Button key={g} size="sm" variant={goal === g ? "default" : "outline"} onClick={() => setGoal(g)}>{g}</Button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">What equipment do you have?</p>
              <div className="flex flex-wrap gap-1">
                {(Object.keys(ROUTINES) as Equipment[]).map(e => (
                  <Button key={e} size="sm" variant={equipment === e ? "default" : "outline"} onClick={() => setEquipment(e)}>{e}</Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Your Routine</h2>
              <Badge variant="outline">{equipment}</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-3">Twice a week, 30-45 minutes per session. Rest 60-90 seconds between sets. Add a 5-minute walk warm-up.</p>
            <div className="space-y-3">
              {ROUTINES[equipment].map((ex, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <p className="font-semibold text-gray-900">{i + 1}. {ex.name}</p>
                  <p className="text-xs text-emerald-700 italic mt-0.5">Why: {ex.why}</p>
                  <p className="text-sm text-gray-700 mt-1">How: {ex.how}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Progress, not perfection:</span> Most older adults gain measurable strength within 6 weeks of starting. Add one rep per set every two weeks. When you can do all 3 sets of 12 reps easily, add light weight or harder leverage. Not medical advice — talk to your doctor first, especially if you have heart, joint, or balance concerns.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2"><Printer className="h-4 w-4" />Print Routine</Button>
          <Button variant="outline" onClick={() => { setGoal("Stay independent"); setEquipment("Bodyweight (free)"); }} className="gap-2"><RotateCcw className="h-4 w-4" />Reset</Button>
        </div>
      </div>
    </div>
  );
}
