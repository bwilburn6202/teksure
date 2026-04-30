import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function RoadScholarForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Road Scholar for Senior Travelers | TekSure" description="Educational travel for 55+. Road Scholar trips senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Road Scholar</h1>
          <p className="text-lg text-muted-foreground">Learning travel 55+.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nonprofit educational travel.</li><li>For ages 55+.</li><li>5,500+ programs worldwide.</li><li>Solo travelers welcome.</li><li>Senior-paced.</li><li>Was Elderhostel.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Trips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Domestic + international.</li><li>$1,000-$10,000+.</li><li>5-21 days typical.</li><li>All meals + activities.</li><li>Senior comprehensive.</li><li>Solo-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Make friends easily.</li><li>Educational expert lectures.</li><li>Slow pace.</li><li>Single supplement options.</li><li>No tip pressure.</li><li>Senior community.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>History tours.</li><li>National parks.</li><li>Cooking + wine.</li><li>Music + arts.</li><li>Adventure (gentler).</li><li>Senior wide variety.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Online programs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lectures from home.</li><li>$50-$300.</li><li>If can&apos;t travel.</li><li>Online community.</li><li>Senior intellectual stimulation.</li><li>Shorter commitment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Activity levels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-6 scale.</li><li>1-2 — sedentary.</li><li>3-4 — moderate walking.</li><li>5-6 — active.</li><li>Senior pick honestly.</li><li>Avoid frustration.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Road Scholar = senior travel friends</h3><p className="text-sm text-muted-foreground">Many senior solo travelers find their tribe through Road Scholar. Educational + slow-paced + friend-making. From $1,000 trips. Online programs cheaper. Trusted nonprofit since 1975. Best educational senior travel. Especially for solo travelers.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
