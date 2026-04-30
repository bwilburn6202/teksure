import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function ThreadsAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Threads App Guide for Seniors | TekSure" description="Threads explained. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Threads App</h1>
          <p className="text-lg text-muted-foreground">Twitter alternative. Meta-owned.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Threads?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Made by Meta (Facebook + Instagram).</li>
              <li>Like Twitter but text-focused.</li>
              <li>Launched 2023 — newer.</li>
              <li>FREE.</li>
              <li>Connected to Instagram.</li>
              <li>200M+ users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Threads vs Twitter (X)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Threads — calmer atmosphere.</li>
              <li>Less political extremism.</li>
              <li>News + lifestyle balance.</li>
              <li>Twitter (X) — more chaotic.</li>
              <li>Try Threads if Twitter overwhelming.</li>
              <li>Both free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Need Instagram account first.</li>
              <li>Download Threads app.</li>
              <li>Sign in with Instagram.</li>
              <li>Choose to follow Instagram contacts.</li>
              <li>Or start fresh.</li>
              <li>Profile auto-created.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to post</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap pencil icon bottom.</li>
              <li>Type up to 500 characters.</li>
              <li>Add photo or video.</li>
              <li>Tap &quot;Post&quot;.</li>
              <li>People reply, like, repost.</li>
              <li>Reply directly to others.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to follow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local news sources.</li>
              <li>Favorite authors / celebrities.</li>
              <li>AARP for seniors.</li>
              <li>Hobby experts (gardening, cooking).</li>
              <li>Family + friends already there.</li>
              <li>Curate your feed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same Meta privacy policy as Facebook.</li>
              <li>Tied to Instagram = harder to delete.</li>
              <li>Ads in feed.</li>
              <li>Misinformation possible.</li>
              <li>Don&apos;t engage trolls.</li>
              <li>Block / mute liberally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip if not interested</h3>
            <p className="text-sm text-muted-foreground">Many seniors don&apos;t need yet another platform. If Facebook + Instagram + email + texting enough = skip Threads. No FOMO. Most don&apos;t miss it. Twitter (X) declining. If wanting alternative — try BlueSky too. Or skip social text platforms entirely. Quality over quantity.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
