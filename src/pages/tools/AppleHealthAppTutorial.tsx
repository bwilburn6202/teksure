import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function AppleHealthAppTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Health App Tutorial for Seniors | TekSure" description="Use the Apple Health app on your iPhone. Track steps, heart rate, sleep, and more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Health App</h1>
          <p className="text-lg text-muted-foreground">Track your health from your iPhone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Apple Health?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-installed on every iPhone — free.</li>
              <li>Red heart icon on your home screen.</li>
              <li>Tracks steps, heart rate, sleep, and more.</li>
              <li>Connects to Apple Watch and other devices.</li>
              <li>Stores health data securely on your phone.</li>
              <li>Share selected data with doctors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it tracks automatically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Steps — just carrying your phone counts them.</li>
              <li>Distance walked.</li>
              <li>Flights of stairs climbed.</li>
              <li>Sleep — iPhone tracks basic sleep on its own.</li>
              <li>Heart rate — if you have Apple Watch.</li>
              <li>Menstrual health (optional).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up your profile</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Health app (red heart icon).</li>
              <li>Tap your photo or initial top right.</li>
              <li>Enter name, date of birth, height, weight, blood type.</li>
              <li>This powers the Medical ID emergency feature.</li>
              <li>Medical ID — tap &quot;Medical ID&quot; — fill in conditions, medications.</li>
              <li>Emergency responders can read without unlocking phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical ID — very important</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Medical ID&quot; and set it up now.</li>
              <li>List conditions (diabetes, heart disease, etc.).</li>
              <li>List medications with doses.</li>
              <li>Add allergies.</li>
              <li>Add emergency contacts.</li>
              <li>Toggle &quot;Show When Locked&quot; — paramedics can see it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connecting devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch — pairs automatically.</li>
              <li>Omron BP cuff — Omron Connect app feeds to Health.</li>
              <li>Withings scale — syncs weight + body fat.</li>
              <li>Most health apps ask permission to share with Health.</li>
              <li>Browse → Data Sources — see what&apos;s connected.</li>
              <li>Control what each app can add.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Sharing&quot; tab at bottom.</li>
              <li>Share with Health Records from your provider.</li>
              <li>Some hospitals — see lab results, appointments.</li>
              <li>Export PDF for doctor — tap your name → Export.</li>
              <li>Email summary before appointment.</li>
              <li>Apple Health data is private — you control sharing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up Medical ID today</h3>
            <p className="text-sm text-muted-foreground">The single most important thing seniors should do in Apple Health is set up Medical ID. If you&apos;re ever in an accident or medical emergency, first responders can access your blood type, medical conditions, medications, and emergency contacts without needing your passcode. Open Health, tap your profile, tap Medical ID, fill it in, and turn on &quot;Show When Locked.&quot;</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
