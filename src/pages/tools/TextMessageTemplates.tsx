import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Copy, Check } from "lucide-react";

interface Template {
  id: string;
  category: string;
  title: string;
  text: string;
}

const TEMPLATES: Template[] = [
  // Quick everyday
  { id: "running-late", category: "Everyday", title: "Running late", text: "Running about 15 minutes late, see you soon!" },
  { id: "made-it-home", category: "Everyday", title: "Made it home safely", text: "Just got home safe. Thanks for the lovely visit!" },
  { id: "thinking-of-you", category: "Everyday", title: "Thinking of you", text: "Just thinking of you today. Hope you're well." },
  { id: "thanks-meal", category: "Everyday", title: "Thanks for the meal", text: "Thank you so much for dinner — I had a wonderful time. Loved seeing you." },
  { id: "miss-you", category: "Everyday", title: "Miss you", text: "Miss you. Let's catch up soon — when works for a phone call?" },

  // Family
  { id: "happy-birthday", category: "Family", title: "Happy birthday", text: "Happy birthday! I hope your day is filled with all your favorite things. Love you." },
  { id: "happy-anniversary", category: "Family", title: "Happy anniversary", text: "Happy anniversary to two of my favorite people. Wishing you many more wonderful years together." },
  { id: "good-luck", category: "Family", title: "Good luck", text: "Sending good thoughts your way today. You've got this. Let me know how it goes." },
  { id: "congrats", category: "Family", title: "Congratulations", text: "Congratulations! I'm so proud of you. This is wonderful news." },

  // Sympathy
  { id: "sorry-loss", category: "Sympathy", title: "Sorry for your loss", text: "I'm so sorry for your loss. You and your family are in my thoughts. Please don't feel like you need to write back — just know I'm thinking of you." },
  { id: "get-well", category: "Sympathy", title: "Get well soon", text: "I heard you're not feeling well. Sending healing thoughts. Let me know if I can drop off a meal or run errands." },
  { id: "thinking-tough-time", category: "Sympathy", title: "Tough time check-in", text: "I know things have been hard lately. I'm here if you want to talk, or just sit quietly. No pressure — just thinking of you." },

  // Helpful & practical
  { id: "need-help", category: "Help", title: "Asking for help", text: "Could I ask you a small favor? When you have a minute, would you mind giving me a call?" },
  { id: "techissue", category: "Help", title: "Tech help needed", text: "I'm having trouble with my phone (or computer). Would you mind walking me through it next time we talk? No rush." },
  { id: "ride-needed", category: "Help", title: "Asking for a ride", text: "Would you be able to give me a ride to a doctor's appointment? It's on [date] at [time]. Totally fine if not — I can ask someone else." },
  { id: "check-in", category: "Help", title: "Check-in", text: "Just checking in — haven't heard from you in a bit. Hope all is well. No need to reply right away." },

  // Appointments
  { id: "confirm", category: "Appointments", title: "Confirm appointment", text: "Hi, I'd like to confirm my appointment on [date] at [time]. Thank you." },
  { id: "reschedule", category: "Appointments", title: "Reschedule request", text: "Hi, I need to reschedule my appointment on [date]. Could we look at [next week / another date]? Thanks for your help." },
  { id: "cancel", category: "Appointments", title: "Cancel appointment", text: "Hi, I'm not able to make my appointment on [date]. I'll call to reschedule when I can. Thank you." },
];

const CATEGORIES = Array.from(new Set(TEMPLATES.map(t => t.category)));

export default function TextMessageTemplates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  function copy(id: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  const visible = filter === "All" ? TEMPLATES : TEMPLATES.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Text Message Templates | TekSure"
        description="Ready-to-use text messages for everyday situations, family, sympathy, asking for help, and appointments. One tap to copy."
      />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Text Message Templates</h1>
          </div>
          <p className="text-gray-600 text-lg">
            When the right words don't come easily, pick a template, tap copy, and paste it into a text. Edit before sending.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-full text-sm font-medium ${filter === "All" ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
          >
            All ({TEMPLATES.length})
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${filter === c ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
            >
              {c} ({TEMPLATES.filter(t => t.category === c).length})
            </button>
          ))}
        </div>

        {/* Templates */}
        <div className="space-y-3">
          {visible.map(t => (
            <Card key={t.id}>
              <CardHeader className="pb-2 pt-3">
                <CardTitle className="text-base flex items-center justify-between">
                  <span>{t.title}</span>
                  <Badge variant="secondary" className="text-xs">{t.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 italic mb-2">"{t.text}"</p>
                <Button size="sm" variant="outline" onClick={() => copy(t.id, t.text)} className="gap-1">
                  {copiedId === t.id ? <><Check className="h-3 w-3" /> Copied!</> : <><Copy className="h-3 w-3" /> Copy text</>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              These are starters — feel free to make them your own. Add a name, a memory, or a personal note. The most meaningful text is one that sounds like you.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
