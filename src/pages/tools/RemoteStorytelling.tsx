import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

const TOOLS = [
  { name: 'Caribu', cost: 'FREE / $5/mo', best: 'Read books + activities together over video. Designed for grandparent-grandkid.', good: 'Best video-read.' },
  { name: 'Voice Memos / Audacity', cost: 'FREE', best: 'Record a story, send. Grandkid plays at bedtime.', good: 'Best audio.' },
  { name: 'Storyworth', cost: '$99/yr', best: 'Weekly prompts → year of stories → printed book. See /tools/memoir-writing-apps.', good: 'Best for memoirs.' },
  { name: 'StoryCorps', cost: 'FREE', best: 'Interview each other. Audio archived in Library of Congress.', good: 'Best for legacy.' },
  { name: 'Marco Polo', cost: 'FREE / $10/mo Premium', best: 'Video voicemails. Tell story when convenient. Receiver plays anytime.', good: 'Best for asynchronous.' },
];

export default function RemoteStorytelling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Remote Storytelling Tools for Grandparents | TekSure" description="Caribu, voice memos, Marco Polo. Plain-English picks for telling bedtime stories + family stories from far away." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Remote Storytelling</h1>
          <p className="text-lg text-muted-foreground">Tell stories from anywhere.</p>
        </div>

        <div className="space-y-3 mb-6">
          {TOOLS.map(t => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm font-semibold text-primary">{t.cost}</span>
                </div>
                <p className="text-sm">{t.best}</p>
                <p className="text-sm text-muted-foreground">{t.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Story prompt ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"When daddy was your age, he..."</li>
              <li>"My first job was..."</li>
              <li>"The day you were born..."</li>
              <li>"When I was 10, my biggest dream was..."</li>
              <li>"Funniest thing I ever saw was..."</li>
              <li>"My favorite place to visit growing up was..."</li>
              <li>"My mom (great-grandma) used to..."</li>
              <li>"How I met grandpa..."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make it fun for kids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Show old photos while telling.</li>
              <li>Ask kid to GUESS what happened next.</li>
              <li>Use voices for different characters.</li>
              <li>Keep stories 5-10 min — kids&apos; attention span.</li>
              <li>Repeat favorite stories — they&apos;ll ask for them.</li>
              <li>End with a question for them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Build a library</h3>
            <p className="text-sm text-muted-foreground">Record 50 stories over 1-2 years. Save in shared family folder. Grandkids will play them as adults. Their kids will play them. Multi-generation gift.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
