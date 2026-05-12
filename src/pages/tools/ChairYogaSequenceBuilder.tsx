import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Printer, Shuffle } from "lucide-react";

type Goal = "Wake up gentle" | "Arthritis relief" | "Balance and focus" | "Wind down before bed";

interface Pose {
  name: string;
  how: string;
  hold: string;
  goal: Goal[];
}

const POSES: Pose[] = [
  { name: "Seated mountain breath", how: "Sit tall with feet flat. Inhale arms up, exhale arms down. Repeat.", hold: "5 breaths", goal: ["Wake up gentle", "Wind down before bed", "Balance and focus"] },
  { name: "Neck rolls", how: "Drop right ear toward right shoulder, slow circle forward, then the other direction. Stop at any pinch.", hold: "3 each way", goal: ["Wake up gentle", "Arthritis relief"] },
  { name: "Shoulder rolls", how: "Roll both shoulders backward in big slow circles. Reverse direction.", hold: "5 each way", goal: ["Wake up gentle", "Arthritis relief"] },
  { name: "Wrist circles and stretches", how: "Hold arms in front. Slow circles. Then flex hands up and down at the wrist.", hold: "10 circles, 5 each way", goal: ["Arthritis relief"] },
  { name: "Ankle rolls", how: "Lift one foot a few inches. Slow ankle circles each direction. Repeat other side.", hold: "5 each way per ankle", goal: ["Wake up gentle", "Arthritis relief", "Balance and focus"] },
  { name: "Seated cat-cow", how: "Hands on knees. Inhale arch back gently (cow). Exhale round forward (cat).", hold: "5 cycles", goal: ["Wake up gentle", "Wind down before bed"] },
  { name: "Seated twist", how: "Sit tall. Hand on opposite knee. Slowly twist toward the back of the chair. Switch sides.", hold: "5 breaths each side", goal: ["Wake up gentle", "Wind down before bed", "Balance and focus"] },
  { name: "Seated side bend", how: "Right hand on seat. Left arm reaches up and over. Repeat other side.", hold: "5 breaths each side", goal: ["Wake up gentle", "Arthritis relief"] },
  { name: "Seated forward fold", how: "Feet flat. Inhale tall. Exhale fold forward over your thighs. Let your head hang.", hold: "5-10 breaths", goal: ["Wind down before bed"] },
  { name: "Knee lifts (single-leg balance prep)", how: "Sit tall. Lift right knee toward chest. Lower. Repeat left.", hold: "8 each side", goal: ["Balance and focus"] },
  { name: "Heel raises and toe raises", how: "Feet flat. Push heels off the floor. Lower. Then lift toes off the floor.", hold: "10 each", goal: ["Balance and focus", "Arthritis relief"] },
  { name: "Eagle arms variation", how: "Cross right arm under left at elbows. Wrap forearms. Lift elbows. Switch sides.", hold: "5 breaths each", goal: ["Wake up gentle", "Balance and focus"] },
  { name: "Box breath (4-4-4-4)", how: "Inhale 4 counts, hold 4, exhale 4, hold 4. Repeat.", hold: "4-8 rounds", goal: ["Wind down before bed", "Balance and focus"] },
  { name: "Three-part breath", how: "Inhale fill belly, then ribs, then chest. Exhale chest, ribs, belly. Slow.", hold: "8-10 breaths", goal: ["Wind down before bed"] },
  { name: "Seated tree (toe-tap version)", how: "Feet flat. Lift right heel and place ball of foot against left ankle. Press hands together at chest. Switch sides.", hold: "5 breaths each", goal: ["Balance and focus"] },
  { name: "Hand mudras", how: "Bring tip of thumb to tip of index finger lightly. Hold for a minute. Switch to other fingertips.", hold: "1 minute each", goal: ["Wind down before bed"] },
];

export default function ChairYogaSequenceBuilder() {
  const [goal, setGoal] = useState<Goal>("Wake up gentle");
  const [seed, setSeed] = useState(0);

  const candidatePool = POSES.filter(p => p.goal.includes(goal));
  const sequenceLength = 6;
  const sequence = (() => {
    const pool = [...candidatePool];
    const out: Pose[] = [];
    let s = seed;
    while (out.length < sequenceLength && pool.length > 0) {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      const idx = s % pool.length;
      out.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return out;
  })();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Chair Yoga Sequence Builder | TekSure" description="Pick a goal and get a printable 6-pose chair yoga sequence. Wake up gentle, arthritis relief, balance, or wind down before bed. No floor work." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="h-7 w-7 text-teal-700" />
            <h1 className="text-3xl font-bold text-gray-900">Chair Yoga Builder</h1>
          </div>
          <p className="text-gray-600 text-lg">Pick a goal. Get a printable 6-pose sequence you can do in a sturdy chair. About 10-15 minutes total.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4 space-y-2">
            <p className="text-sm font-semibold text-gray-700">Pick a goal</p>
            <div className="flex flex-wrap gap-1">
              {(["Wake up gentle", "Arthritis relief", "Balance and focus", "Wind down before bed"] as Goal[]).map(g => (
                <Button key={g} size="sm" variant={goal === g ? "default" : "outline"} onClick={() => { setGoal(g); setSeed(Date.now()); }}>{g}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold text-gray-900">{goal}</h2>
              <Badge variant="outline">6 poses</Badge>
            </div>
            <div className="space-y-3">
              {sequence.map((p, i) => (
                <div key={`${p.name}-${i}`} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold text-gray-900">{i + 1}. {p.name}</p>
                    <span className="text-xs text-teal-700 italic">{p.hold}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{p.how}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden mb-4">
          <Button onClick={() => setSeed(Date.now())} className="gap-2 bg-teal-700 hover:bg-teal-800">
            <Shuffle className="h-4 w-4" />New Sequence
          </Button>
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print
          </Button>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Setup that helps:</span> Use a sturdy chair with no wheels. Feet flat (or on a yoga block or thick book if they do not reach). Loose comfortable clothes. Water nearby. Stop any movement that pinches or sharpens pain. Modify always.</p>
          </CardContent>
        </Card>

        <Card className="mt-3 bg-emerald-50 border-emerald-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-emerald-900"><span className="font-semibold">Free in-person classes:</span> SilverSneakers (most Medicare Advantage plans include this), Renew Active (UnitedHealthcare AARP), local senior center or library. YouTube channels: Yoga With Adriene chair routine, Senior Shape, Silver Yogis.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
