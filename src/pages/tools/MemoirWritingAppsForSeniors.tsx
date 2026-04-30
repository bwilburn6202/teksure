import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Library } from 'lucide-react';

export default function MemoirWritingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memoir Writing Apps for Seniors | TekSure" description="Write your life story. Senior memoir app + service guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Library className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memoir Writing</h1>
          <p className="text-lg text-muted-foreground">Your life story.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">StoryWorth</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$99/year.</li><li>Weekly question email.</li><li>You answer in writing.</li><li>Year-end book.</li><li>Senior easy.</li><li>Family treasure.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Remento</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$120/year.</li><li>Voice answers.</li><li>AI transcribes.</li><li>Senior easier than typing.</li><li>Family book.</li><li>Newer service.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free DIY</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Docs free.</li><li>Type chapters.</li><li>Add photos.</li><li>Print book service later.</li><li>Senior cheap.</li><li>Lulu, Amazon KDP.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice recording</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Voice Memo.</li><li>Tell stories.</li><li>Otter transcribes.</li><li>Senior preserve voice.</li><li>Family hears.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Childhood.</li><li>Meeting spouse.</li><li>Career milestones.</li><li>Family stories.</li><li>Lessons learned.</li><li>Senior wisdom.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Print services</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lulu.com.</li><li>Mixbook.</li><li>Shutterfly.</li><li>$30-$50 per book.</li><li>Senior gift family.</li><li>Hardcover quality.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$99 StoryWorth = senior legacy gift</h3><p className="text-sm text-muted-foreground">Adult kids buy $99 StoryWorth for senior parents = year of weekly memoir prompts, year-end family book. Senior writes 1 hour/week. Family legacy preserved. Many call it best gift they ever gave parents. Consider for next birthday.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
