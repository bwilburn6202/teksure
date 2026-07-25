import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BatteryFull, BatteryLow, BatteryMedium, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";

type Platform = "iphone" | "android" | null;

interface Question {
  id: string;
  text: string;
  options: { label: string; value: string; score: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: "overnight",
    text: "Do you charge your phone overnight every night?",
    options: [
      { label: "Yes, every night", value: "yes", score: -1 },
      { label: "Sometimes", value: "sometimes", score: 0 },
      { label: "Rarely or never", value: "no", score: 1 },
    ],
  },
  {
    id: "drain",
    text: "How often do you let your battery run all the way down to 0%?",
    options: [
      { label: "Often (once a week or more)", value: "often", score: -2 },
      { label: "Occasionally (once a month)", value: "sometimes", score: -1 },
      { label: "Rarely or never", value: "rarely", score: 1 },
    ],
  },
  {
    id: "heat",
    text: "Does your phone regularly get very warm or hot while charging?",
    options: [
      { label: "Yes, it gets noticeably hot", value: "hot", score: -2 },
      { label: "Slightly warm sometimes", value: "warm", score: 0 },
      { label: "No, it stays cool", value: "cool", score: 1 },
    ],
  },
  {
    id: "charger",
    text: "What charger do you use most often?",
    options: [
      { label: "The one that came with my phone", value: "official", score: 1 },
      { label: "A brand-name replacement (Apple, Samsung, etc.)", value: "brand", score: 1 },
      { label: "A cheap off-brand charger", value: "offbrand", score: -1 },
    ],
  },
  {
    id: "level",
    text: "Where do you usually keep your battery level day to day?",
    options: [
      { label: "Above 20% (I charge before it gets low)", value: "above20", score: 1 },
      { label: "I let it drop to 10-20% before charging", value: "low", score: 0 },
      { label: "I often let it get to 5% or below", value: "verylow", score: -1 },
    ],
  },
];

interface Tip {
  title: string;
  detail: string;
  platform?: "iphone" | "android" | "both";
}

const TIPS_BY_PLATFORM: Record<"iphone" | "android", Tip[]> = {
  iphone: [
    { title: "Turn on Optimized Battery Charging", detail: "Go to Settings → Battery → Battery Health & Charging → turn on Optimized Battery Charging. This prevents your phone from staying at 100% all night, which reduces long-term wear.", platform: "iphone" },
    { title: "Check your battery health percentage", detail: "Settings → Battery → Battery Health & Charging. Anything above 80% is normal. Below 80% means the battery may need replacement.", platform: "iphone" },
    { title: "Enable Low Power Mode when below 30%", detail: "Settings → Battery → Low Power Mode. This reduces background activity and screen brightness to stretch your remaining charge.", platform: "iphone" },
    { title: "See which apps drain the most battery", detail: "Settings → Battery → scroll down to see battery usage by app over the last 24 hours or 10 days. Consider deleting or limiting apps that consume a lot.", platform: "iphone" },
    { title: "Reduce screen brightness", detail: "Swipe down from the top-right corner to open Control Center. Drag the brightness slider down. A dimmer screen uses significantly less power.", platform: "iphone" },
  ],
  android: [
    { title: "Turn on Adaptive Battery", detail: "Settings → Battery → Adaptive Battery (or Battery Optimization). This learns which apps you use most and limits power to others running in the background.", platform: "android" },
    { title: "Check battery usage by app", detail: "Settings → Battery → Battery Usage. Look for apps using a large percentage of your battery in the background. You can restrict background activity for those apps.", platform: "android" },
    { title: "Enable Battery Saver when below 30%", detail: "Settings → Battery → Battery Saver → turn it on, or set it to turn on automatically at 15%. This reduces performance but extends your remaining charge.", platform: "android" },
    { title: "Turn off Always-On Display if available", detail: "If your phone has an Always-On Display feature, turning it off can noticeably extend battery life. Settings → Lock Screen → Always On Display.", platform: "android" },
    { title: "Reduce screen brightness and timeout", detail: "Settings → Display → Brightness. Lower brightness and set the screen to turn off after 30 seconds of inactivity to save power.", platform: "android" },
  ],
};

const GENERAL_TIPS: Tip[] = [
  { title: "Avoid charging in very hot or cold places", detail: "Extreme temperatures damage batteries faster than anything else. Don't charge your phone in a hot car, in direct sunlight, or outside in freezing weather.", platform: "both" },
  { title: "Use the cable that came with your phone", detail: "Cheap off-brand chargers can overcharge or undercharge your battery, reducing its lifespan. Stick with official or well-known brand-name cables.", platform: "both" },
  { title: "Keep charge between 20% and 80% for best longevity", detail: "Lithium batteries last longest when kept in the middle range. You don't need to do this perfectly — it's a general guideline, not a strict rule.", platform: "both" },
  { title: "Remove thick cases while charging if the phone gets hot", detail: "A heavy case can trap heat during charging. If your phone regularly gets warm, remove the case while it charges.", platform: "both" },
];

function scoreToRating(score: number): { label: string; color: string; icon: React.ReactNode; advice: string } {
  if (score >= 3) return {
    label: "Great habits",
    color: "text-green-700",
    icon: <BatteryFull className="h-8 w-8 text-green-600" />,
    advice: "Your charging habits are already protecting your battery. Keep it up — and review the tips below to make sure you haven't missed anything.",
  };
  if (score >= 0) return {
    label: "Room to improve",
    color: "text-yellow-700",
    icon: <BatteryMedium className="h-8 w-8 text-yellow-500" />,
    advice: "Your habits are decent but a few small changes could noticeably extend your battery life and health over time.",
  };
  return {
    label: "Battery at risk",
    color: "text-red-700",
    icon: <BatteryLow className="h-8 w-8 text-red-500" />,
    advice: "Some of your current habits may be wearing down your battery faster than normal. The tips below will help you change that.",
  };
}

export default function PhoneBatteryCareGuide() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const allAnswered = QUESTIONS.every(q => answers[q.id] !== undefined);
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const rating = scoreToRating(totalScore);

  function restart() {
    setPlatform(null);
    setAnswers({});
    setShowResults(false);
  }

  const platformTips = platform ? TIPS_BY_PLATFORM[platform] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Phone Battery Care Guide | TekSure"
        description="Find out if your charging habits are hurting your battery. Get personalized tips for iPhone and Android to extend battery life."
      />

      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Phone Battery Care Guide</h1>
          <p className="text-gray-600 text-lg">
            Answer 5 quick questions about your charging habits, then get personalized tips for your phone.
          </p>
        </div>

        {/* Step 1: Pick platform */}
        {!platform && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What kind of phone do you have?</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Button size="lg" className="flex-1 text-base" onClick={() => setPlatform("iphone")}>
                iPhone
              </Button>
              <Button size="lg" variant="outline" className="flex-1 text-base" onClick={() => setPlatform("android")}>
                Android
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Questions */}
        {platform && !showResults && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{platform === "iphone" ? "iPhone" : "Android"}</Badge>
              <button onClick={() => setPlatform(null)} className="text-sm text-blue-600 underline">Change</button>
            </div>

            {QUESTIONS.map((q, i) => (
              <Card key={q.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">
                    {i + 1}. {q.text}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                  {q.options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.score }))}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                        answers[q.id] === opt.score
                          ? "bg-blue-50 border-blue-400 font-medium text-blue-800"
                          : "bg-white border-gray-200 hover:bg-gray-50 text-gray-800"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </CardContent>
              </Card>
            ))}

            <Button
              size="lg"
              className="w-full text-base gap-2"
              disabled={!allAnswered}
              onClick={() => setShowResults(true)}
            >
              See My Results <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 3: Results */}
        {showResults && (
          <div className="space-y-4">
            {/* Score card */}
            <Card className={`border-2 ${totalScore >= 3 ? "border-green-300" : totalScore >= 0 ? "border-yellow-300" : "border-red-300"}`}>
              <CardContent className="py-5 px-5">
                <div className="flex items-center gap-3 mb-2">
                  {rating.icon}
                  <span className={`text-xl font-bold ${rating.color}`}>{rating.label}</span>
                </div>
                <p className="text-gray-700 text-sm">{rating.advice}</p>
              </CardContent>
            </Card>

            {/* Charging habits that hurt */}
            {totalScore < 3 && (
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2 text-amber-800">
                    <AlertTriangle className="h-4 w-4" /> Habits to change
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-amber-900 space-y-1 list-disc pl-4">
                    {answers["overnight"] === -1 && <li>Charging overnight keeps the battery at 100% for hours, which adds stress over time.</li>}
                    {answers["drain"] !== undefined && answers["drain"] <= -1 && <li>Letting the battery hit 0% regularly degrades it faster. Try to plug in before 20%.</li>}
                    {answers["heat"] === -2 && <li>Heat is the biggest enemy of phone batteries. A hot phone while charging is a warning sign.</li>}
                    {answers["charger"] === -1 && <li>Cheap off-brand chargers can damage batteries. Switch to an official or brand-name charger.</li>}
                    {answers["level"] === -1 && <li>Running the battery very low regularly shortens its life. Try to charge before hitting 10%.</li>}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Platform tips */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                Tips for your {platform === "iphone" ? "iPhone" : "Android phone"}
              </h2>
              <div className="space-y-3">
                {platformTips.map(tip => (
                  <Card key={tip.title}>
                    <CardContent className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{tip.title}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{tip.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* General tips */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Good habits for any phone</h2>
              <div className="space-y-3">
                {GENERAL_TIPS.map(tip => (
                  <Card key={tip.title}>
                    <CardContent className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{tip.title}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{tip.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button variant="outline" onClick={restart} className="w-full">
              Start Over
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
