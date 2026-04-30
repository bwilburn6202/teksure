import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SmuleKaraokeApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smule Karaoke for Seniors | TekSure" description="Sing karaoke at home or with friends online. Smule and other karaoke apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Karaoke Apps</h1>
          <p className="text-lg text-muted-foreground">Sing at home, alone or with friends.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why karaoke for seniors?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Singing reduces stress + boosts mood.</li>
              <li>Lung exercise — good for breathing.</li>
              <li>Memory exercise — recalling lyrics.</li>
              <li>Connect with friends online.</li>
              <li>Sing classics — Sinatra, Beatles, Patsy Cline.</li>
              <li>No judgment — sing in privacy of your home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smule — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50 million users worldwide.</li>
              <li>Sing solo or with strangers worldwide.</li>
              <li>Auto-tune effects — sound great.</li>
              <li>Free with limits — VIP: $7.99/month.</li>
              <li>Huge song library — old + new.</li>
              <li>Group sing with friends remotely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube Karaoke (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search any song + &quot;karaoke&quot; on YouTube.</li>
              <li>Lyrics scroll on screen as music plays.</li>
              <li>100% free, no app needed.</li>
              <li>Cast to TV for big-screen lyrics.</li>
              <li>Channels: Sing King, KaraFun.</li>
              <li>Best free option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Singa karaoke app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50,000+ songs across genres.</li>
              <li>Free version available.</li>
              <li>Premium $9.99/month — unlimited songs.</li>
              <li>Cast to your TV via Chromecast.</li>
              <li>Senior-friendly large lyrics display.</li>
              <li>Family game night activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone or tablet for app.</li>
              <li>Optional Bluetooth speaker for better sound.</li>
              <li>Optional USB microphone — Blue Yeti $100.</li>
              <li>Or sing into phone&apos;s microphone — works fine.</li>
              <li>Cast to TV for big-screen lyrics.</li>
              <li>Living room becomes karaoke bar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Singing with friends</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smule lets you duet with anyone, anywhere.</li>
              <li>Family far away — sing together over distance.</li>
              <li>Record duets for memory.</li>
              <li>Join existing recordings or invite duet partners.</li>
              <li>Great way for grandkids to connect with grandparents.</li>
              <li>Reduces loneliness — proven by research.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with YouTube</h3>
            <p className="text-sm text-muted-foreground">Try free YouTube karaoke first — search &quot;Frank Sinatra My Way karaoke&quot; or any favorite. The lyrics scroll automatically. If you love it, then try Smule for the social features. Cast to your TV for the full karaoke bar feel. Singing is one of the most underrated activities for senior wellbeing — physical, mental, social all at once.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
