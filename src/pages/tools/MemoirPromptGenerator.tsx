import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Shuffle, Printer } from "lucide-react";

type Theme = "Childhood" | "Family" | "Work & career" | "Love & marriage" | "Tough chapters" | "Joy & wonder" | "Faith & meaning" | "Today's chapter";

interface Prompt {
  theme: Theme;
  text: string;
}

const PROMPTS: Prompt[] = [
  { theme: "Childhood", text: "What did your kitchen smell like on Sunday mornings when you were a child?" },
  { theme: "Childhood", text: "Describe the house you grew up in, room by room." },
  { theme: "Childhood", text: "What was your favorite hiding place as a child? Why there?" },
  { theme: "Childhood", text: "Tell about a meal that your mother or grandmother made that you still think about." },
  { theme: "Childhood", text: "Who was your best friend at age 10? What did you do together?" },
  { theme: "Childhood", text: "What did the first day of school feel like for you?" },
  { theme: "Family", text: "Write about your father in the form of a single afternoon you spent together." },
  { theme: "Family", text: "What did your mother believe about how a family should be run?" },
  { theme: "Family", text: "Describe a holiday tradition your family kept. Where did it come from?" },
  { theme: "Family", text: "What family photograph do you wish you had taken?" },
  { theme: "Family", text: "Write about a sibling — the day you stopped being children with them." },
  { theme: "Family", text: "Tell a family story that your children may not have heard." },
  { theme: "Work & career", text: "Your first job — what did you wear, what did you earn, what did you learn?" },
  { theme: "Work & career", text: "The hardest day at work you ever had. What happened, what did you do?" },
  { theme: "Work & career", text: "A mentor or boss who shaped you. Tell the story of one specific conversation." },
  { theme: "Work & career", text: "The day you retired — or the day you knew you would." },
  { theme: "Work & career", text: "A project or job you are proud of, even if no one else knows about it." },
  { theme: "Love & marriage", text: "Describe the moment you met your spouse. Include what you noticed first." },
  { theme: "Love & marriage", text: "Write about a fight you and your spouse had that you both still laugh about." },
  { theme: "Love & marriage", text: "What kind of partner did you grow into being? Not the version you started as." },
  { theme: "Love & marriage", text: "A first date, your first slow dance, or your wedding day — pick one and write it as if it is happening." },
  { theme: "Tough chapters", text: "A loss that shaped you. What you would tell yourself, if you could go back." },
  { theme: "Tough chapters", text: "Write about a year that was harder than the others. Why? How did it end?" },
  { theme: "Tough chapters", text: "A regret. Be honest. Then write what you learned from it." },
  { theme: "Tough chapters", text: "A mistake your parents made that you swore you would not repeat. Did you keep that promise?" },
  { theme: "Joy & wonder", text: "Describe a sunset, sunrise, or night sky you still remember." },
  { theme: "Joy & wonder", text: "What music belongs to a specific year of your life? Tell that year through the music." },
  { theme: "Joy & wonder", text: "A laugh you laughed so hard you cried. Set the scene." },
  { theme: "Joy & wonder", text: "A trip you took that made you a different person when you came home." },
  { theme: "Faith & meaning", text: "What do you believe about what comes after this life? When did you start believing that?" },
  { theme: "Faith & meaning", text: "Has a prayer been answered? Tell the story of one specific time." },
  { theme: "Faith & meaning", text: "A moment when your faith was tested. What did you do? What happened to the faith afterward?" },
  { theme: "Faith & meaning", text: "What do you want your grandchildren to know about why you live the way you live?" },
  { theme: "Today's chapter", text: "What does a normal day look like right now? Hour by hour." },
  { theme: "Today's chapter", text: "Who do you talk to most often? What do you talk about?" },
  { theme: "Today's chapter", text: "What are you looking forward to this month? This year?" },
  { theme: "Today's chapter", text: "What is one thing you have learned in your most recent decade that surprised you?" },
];

const THEMES: Theme[] = ["Childhood", "Family", "Work & career", "Love & marriage", "Tough chapters", "Joy & wonder", "Faith & meaning", "Today's chapter"];

export default function MemoirPromptGenerator() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>(PROMPTS[0]);

  function pickRandom() {
    const pool = selectedTheme ? PROMPTS.filter(p => p.theme === selectedTheme) : PROMPTS;
    const next = pool[Math.floor(Math.random() * pool.length)];
    setCurrentPrompt(next);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Memoir Prompt Generator | TekSure" description="40 thoughtful writing prompts for older adults capturing their life story. Pick a theme, get a prompt, write for 15 minutes. Repeat tomorrow." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-7 w-7 text-amber-700" />
            <h1 className="text-3xl font-bold text-gray-900">Memoir Prompts</h1>
          </div>
          <p className="text-gray-600 text-lg">One prompt per day. Write 10-15 minutes. By the end of three months you will have a memoir.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-4 px-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Pick a theme (or leave All Themes selected for a random prompt)</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant={selectedTheme === null ? "default" : "outline"} onClick={() => setSelectedTheme(null)}>All Themes</Button>
              {THEMES.map(t => (
                <Button key={t} size="sm" variant={selectedTheme === t ? "default" : "outline"} onClick={() => setSelectedTheme(t)}>{t}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-amber-50 border-amber-200 border-2">
          <CardContent className="py-6 px-6">
            <Badge variant="outline" className="mb-3 bg-white">{currentPrompt.theme}</Badge>
            <p className="text-2xl font-semibold text-gray-900 leading-snug">{currentPrompt.text}</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button onClick={pickRandom} className="gap-2 bg-amber-700 hover:bg-amber-800">
            <Shuffle className="h-4 w-4" />New Prompt
          </Button>
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print This Prompt
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Tip:</span> If writing by hand or typing is hard, use your phone's Voice Memo (iPhone) or Recorder (Android) to speak your answer. Free transcription is available at otter.ai or in the Voice Memos app. The recording IS the memoir — your voice in your family's hands.</p>
          </CardContent>
        </Card>

        <Card className="mt-3 bg-emerald-50 border-emerald-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-emerald-900"><span className="font-semibold">Want a bound book?</span> StoryWorth.com mails a weekly prompt for a year and binds your answers into a hardcover book ($99-149). Remento.co does the same with voice recordings. Lulu.com and Amazon KDP let you self-publish for $0 setup once you have a manuscript.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
