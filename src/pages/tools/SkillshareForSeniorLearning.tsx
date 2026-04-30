import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpenCheck } from 'lucide-react';

export default function SkillshareForSeniorLearning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skillshare for Senior Learning | TekSure" description="Creative classes online. Skillshare guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpenCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Skillshare</h1>
          <p className="text-lg text-muted-foreground">Creative class library.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15/month or $99/year.</li><li>30,000+ video classes.</li><li>Creative + business focus.</li><li>Self-paced.</li><li>30-day free trial.</li><li>Senior creative pursuits.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photography.</li><li>Watercolor + drawing.</li><li>Knitting + sewing.</li><li>Writing.</li><li>Cooking.</li><li>Languages.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discover hobbies in retirement.</li><li>Self-paced.</li><li>Replay anytime.</li><li>Learn at own speed.</li><li>Quality varies.</li><li>Read reviews.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Udemy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skillshare — subscription.</li><li>Udemy — pay per course.</li><li>Both have classes.</li><li>Senior pick frequency.</li><li>Try free trial.</li><li>Most courses cheap on sale.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best for</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discovery — try many.</li><li>Hobbies vs careers.</li><li>Visual learners.</li><li>Project-based learning.</li><li>Senior creative explore.</li><li>Better for crafts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free YouTube alt</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many free instructors.</li><li>Senior frugal start.</li><li>Try YouTube first.</li><li>Skillshare for organized.</li><li>Free first.</li><li>Subscribe if great.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$99/year = 30,000 senior classes</h3><p className="text-sm text-muted-foreground">$99/year Skillshare = unlimited creative classes for seniors. Watercolor, photography, knitting, writing. 30-day free trial first. Many find new retirement hobby. Or use free YouTube. Both senior-friendly. Try Skillshare for organized learning.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
