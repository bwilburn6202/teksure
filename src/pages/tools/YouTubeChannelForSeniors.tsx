import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export default function YouTubeChannelForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Starting a YouTube Channel for Seniors | TekSure" description="Senior YouTube channel guide. Document hobbies + family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Youtube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior YouTube Channel</h1>
          <p className="text-lg text-muted-foreground">Share + document.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior consider</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Document life stories.</li><li>Share knowledge.</li><li>Family record forever.</li><li>Hobby tutorials.</li><li>Senior wisdom shared.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google account = YouTube.</li><li>Create channel name.</li><li>Upload first video.</li><li>Senior 30 min.</li><li>Free always.</li><li>Phone shoots fine.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior topics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family history.</li><li>Cooking grandma recipes.</li><li>Garden lessons.</li><li>Woodworking.</li><li>Senior hobby teaching.</li><li>Family heritage.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Public — anyone can see.</li><li>Unlisted — only with link.</li><li>Private — invited only.</li><li>Senior choose comfort.</li><li>Family share unlisted.</li><li>Per video setting.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Equipment</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone enough.</li><li>$30 ring light.</li><li>$40 USB mic.</li><li>Senior basic.</li><li>$70 starter setup.</li><li>Free phone editor.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Famous senior YouTubers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cooking with Grandma.</li><li>Senior tech tutors.</li><li>Family historians.</li><li>Senior inspiration.</li><li>It&apos;s never too late.</li><li>Find your audience.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free YouTube = senior legacy preserved</h3><p className="text-sm text-muted-foreground">Free YouTube channel = senior legacy preserved forever. Family history stories, cooking grandma recipes, hobby teaching. Unlisted videos for family-only privacy. iPhone records fine. $70 mic + light upgrade. Most under-considered senior creative outlet.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
