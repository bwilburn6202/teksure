import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorGiftIdeasApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Gift Idea Apps | TekSure" description="Find perfect gifts for senior loved ones using apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Gift Ideas</h1>
          <p className="text-lg text-muted-foreground">Apps that help.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pinterest</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>Search senior gift ideas.</li><li>Save inspiration.</li><li>Senior unique gifts.</li><li>Browse abundantly.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">StoryWorth $99/yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best senior gift.</li><li>Weekly memoir prompts.</li><li>Year-end book.</li><li>Senior parents love.</li><li>Family treasure forever.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Subscription gifts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Audible audiobooks.</li><li>NYT cooking.</li><li>Senior monthly delight.</li><li>Better than physical.</li><li>$60-$120 typical year.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Experience gifts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cleaning service.</li><li>Meal kit subscription.</li><li>Senior practical love.</li><li>Don&apos;t accumulate.</li><li>Worth.</li><li>Personal touch.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tech gifts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Watch fall detect.</li><li>Echo Show photo frame.</li><li>iPad for FaceTime.</li><li>Senior life-changing.</li><li>$100-$500 range.</li><li>Worth setup help.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Worst gifts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>More clutter.</li><li>Generic candles.</li><li>Things to dust.</li><li>Senior downsizing.</li><li>Skip stuff.</li><li>Experiences > things.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$99 StoryWorth + experiences = senior best gifts</h3><p className="text-sm text-muted-foreground">Senior best gifts = $99 StoryWorth memoir prompts + cleaning service + meal kit + Echo Show photo frame. Experiences and useful tech beat clutter. Pinterest browse ideas. Skip generic stuff seniors downsize. Worth meaningful gifts.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
