import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function TeachGrandkidsTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Teach Grandkids Tech (Reverse) | TekSure" description="Grandkids teaching grandparents = bonding. Plain-English guide to senior-grandkid tech sessions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Lessons w/ Grandkids</h1>
          <p className="text-lg text-muted-foreground">Best bonding activity ever.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kids LOVE being the expert.</li>
              <li>You actually learn (kids show you tricks).</li>
              <li>Real conversation beats forced "how&apos;s school?".</li>
              <li>Builds confidence in grandkids.</li>
              <li>You learn modern phone tricks.</li>
              <li>Funny moments. Bonds last decades.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Things to learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FaceTime / video call setup.</li>
              <li>Take + send photos.</li>
              <li>Voice texting tricks.</li>
              <li>Use TikTok / Instagram (basics).</li>
              <li>Apple Photos / Google Photos sharing.</li>
              <li>Music app — make playlist together.</li>
              <li>Gaming basics — Mario Kart, Minecraft.</li>
              <li>"What&apos;s your favorite app?"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-tech-class for grandkids to teach</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Schedule 30-60 min session.</li>
              <li>1-2 specific topics (not 10).</li>
              <li>Take notes — write down steps.</li>
              <li>Reward grandkid — homemade cookies, $20, lunch out.</li>
              <li>Repeat in 2 weeks for refresh.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift exchange</h3>
            <p className="text-sm text-muted-foreground">You teach grandkid: cooking, story from your life, old skills (knitting, woodworking, fishing). They teach: tech, slang, current music. Mutual learning = real relationship. Lasts decades.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
