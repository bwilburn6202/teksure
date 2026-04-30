import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function FacebookPrivacyAudit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Privacy Audit | TekSure" description="Lock down Facebook. Plain-English walkthrough of Privacy Checkup, Off-Facebook Activity, Friends-only posts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Privacy Audit</h1>
          <p className="text-lg text-muted-foreground">15 min. Major privacy gain.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy Checkup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → Privacy Checkup.</li>
              <li>Step 1: Who can see your posts? → "Friends".</li>
              <li>Step 2: Who can find you (search, friend requests)? → Restrict.</li>
              <li>Step 3: How to keep account secure? → 2FA + password.</li>
              <li>Step 4: Data settings → review apps connected.</li>
              <li>Step 5: Profile and tagging → control who tags you.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Profile lock-down</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Profile photo + cover photo: Public OK.</li>
              <li>Birthday — show only month/day, NOT year.</li>
              <li>Location, hometown, work — Friends only OR remove.</li>
              <li>Religion + politics — Friends or remove.</li>
              <li>Relationship status — Friends only.</li>
              <li>Family members — Friends only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Off-Facebook Activity</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → "Off-Facebook Activity".</li>
              <li>"Disconnect Future Activity" — turn ON.</li>
              <li>"Clear History" — wipes existing tracking data.</li>
              <li>Other websites + apps no longer tell Facebook what you do.</li>
              <li>Best Facebook privacy setting most don&apos;t know about.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Past posts cleanup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → "Limit Past Posts".</li>
              <li>Changes ALL old public posts to Friends-only.</li>
              <li>One-click. Done.</li>
              <li>Strangers can no longer scroll your 2008 posts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tagging + photos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Profile + Tagging → "Review tags before they appear" — ON.</li>
              <li>Family/friends can&apos;t tag you in embarrassing photos without permission.</li>
              <li>Face recognition — turn OFF if uncomfortable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memorialize / Legacy contact</h3>
            <p className="text-sm text-muted-foreground">While in privacy settings — set your <strong>Legacy Contact</strong> (Account Ownership and Control). Lets a trusted family member memorialize / manage your account after death. See /tools/digital-legacy-planner.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
