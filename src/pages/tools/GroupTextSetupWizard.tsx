import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ChevronLeft, ChevronRight, CheckCircle2, Smartphone } from "lucide-react";

type Platform = "iphone" | "android" | null;

interface Step {
  title: string;
  detail: string;
  tip?: string;
}

const IPHONE_STEPS: Step[] = [
  {
    title: "Open the Messages app",
    detail: "Tap the Messages app on your iPhone home screen — the green icon with a white speech bubble. This is the same app you use to send regular text messages.",
  },
  {
    title: "Tap the new message button",
    detail: "Look for the square icon with a pencil in the top-right corner. Tap it. A blank new message will open.",
  },
  {
    title: "Add everyone you want in the group",
    detail: "In the \"To:\" field at the top, tap the blue plus (+) button or start typing names. Add each person one at a time. You can include 2 to 32 people in a group text.",
    tip: "Make sure you have each person saved as a contact first — that way their names show up instead of phone numbers.",
  },
  {
    title: "Type your first message",
    detail: "Tap the message box at the bottom and type your message. Once you send it, all the people you added will receive it together. Their replies will go to the whole group.",
  },
  {
    title: "Name your group (optional)",
    detail: "After you send the first message, tap the names at the top of the chat, then tap \"Change Name and Photo\". Type a name like \"Smith Family\" or \"Book Club\" so it is easy to find later.",
    tip: "Group names only show up if everyone is using iPhones (iMessage). If anyone is on Android, the group will show as a list of phone numbers.",
  },
];

const ANDROID_STEPS: Step[] = [
  {
    title: "Open the Messages app",
    detail: "Tap the Messages app — usually a blue or white speech bubble icon. On most Android phones this is Google Messages, the standard texting app.",
  },
  {
    title: "Tap \"Start chat\" to create a new message",
    detail: "Look for a button that says \"Start chat\" or a circular plus (+) button at the bottom-right corner. Tap it.",
  },
  {
    title: "Choose \"Create group\"",
    detail: "On the new chat screen, tap \"Create group\" at the top. This tells your phone you want to send to multiple people at once instead of just one.",
  },
  {
    title: "Add the people you want in the group",
    detail: "Tap each contact you want to include. A blue checkmark will appear next to each name. Once you have everyone, tap \"Next\" in the top-right corner.",
    tip: "Save each family member as a contact ahead of time so you can find them quickly when adding to a group.",
  },
  {
    title: "Name the group and send your first message",
    detail: "Type a group name like \"Family Updates\" or \"Bridge Club\" so the group is easy to find later. Then tap \"Next\". Type your first message and tap the send arrow.",
    tip: "If you and everyone in the group have RCS chat turned on, you will see typing indicators and read receipts. If anyone is on iPhone, the group still works — just as a regular text message.",
  },
];

const TIPS: string[] = [
  "Keep groups small — 4 to 10 people is a good size. Larger groups can become noisy fast.",
  "Use the group only for what it was made for. Don't post unrelated jokes or forwards in a family logistics group.",
  "If the group gets noisy, you can mute notifications without leaving — see the \"silence notifications\" guide.",
  "Photos and videos sent in a group can fill up your phone storage quickly. Save the ones you want and delete the rest.",
  "Anyone can leave a group text on iPhone if it is iMessage and has at least 3 people. On Android, leaving works for RCS group chats.",
];

export default function GroupTextSetupWizard() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = platform === "iphone" ? IPHONE_STEPS : platform === "android" ? ANDROID_STEPS : [];
  const total = steps.length;
  const isLast = stepIndex === total - 1;

  function reset() {
    setPlatform(null);
    setStepIndex(0);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Group Text Setup Wizard | TekSure"
        description="Step-by-step walkthrough to start a group text on iPhone or Android — perfect for staying in touch with family."
      />

      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Group Text Setup</h1>
          </div>
          <p className="text-gray-600 text-lg">
            A step-by-step walkthrough to start a group text with your family or friends.
          </p>
        </div>

        {/* Step 1: Pick platform */}
        {!platform && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What kind of phone do you have?</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button size="lg" className="text-base h-auto py-4 gap-2" onClick={() => setPlatform("iphone")}>
                <Smartphone className="h-5 w-5" />
                iPhone
              </Button>
              <Button size="lg" variant="outline" className="text-base h-auto py-4 gap-2" onClick={() => setPlatform("android")}>
                <Smartphone className="h-5 w-5" />
                Android
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Show walkthrough */}
        {platform && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-sm">{platform === "iphone" ? "iPhone" : "Android"}</Badge>
              <button onClick={reset} className="text-sm text-blue-600 underline">Switch phone</button>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Step {stepIndex + 1} of {total}</span>
                <span className="text-sm text-gray-500">{Math.round(((stepIndex + 1) / total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${((stepIndex + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            {/* Current step */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-7 h-7 inline-flex items-center justify-center text-sm font-bold shrink-0">
                    {stepIndex + 1}
                  </span>
                  <span>{steps[stepIndex].title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 mb-3">{steps[stepIndex].detail}</p>
                {steps[stepIndex].tip && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                    <p className="text-sm text-amber-900">
                      <span className="font-semibold">Quick Tip: </span>
                      {steps[stepIndex].tip}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex gap-2 mb-6">
              <Button
                variant="outline"
                onClick={() => setStepIndex(i => Math.max(0, i - 1))}
                disabled={stepIndex === 0}
                className="gap-1"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              {!isLast ? (
                <Button onClick={() => setStepIndex(i => i + 1)} className="flex-1 gap-1">
                  Next Step <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={reset} className="flex-1 gap-1 bg-green-600 hover:bg-green-700">
                  <CheckCircle2 className="h-4 w-4" /> Done
                </Button>
              )}
            </div>

            {/* Bonus tips after last step */}
            {isLast && (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-blue-800">Group Texting Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {TIPS.map((t, i) => (
                      <li key={i} className="text-sm text-blue-900 flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
