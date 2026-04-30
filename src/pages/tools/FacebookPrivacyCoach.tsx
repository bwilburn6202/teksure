import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function FacebookPrivacyCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Privacy Coach — Lock Down Your Account | TekSure" description="Stop strangers seeing your photos and personal info. Plain-English steps to lock down Facebook privacy in 15 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Privacy Coach</h1>
          <p className="text-lg text-muted-foreground">Lock down what strangers can see. 15 minutes.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">By default, Facebook shows your photos, friends list, hometown, family members, and recent posts to anyone. Scammers harvest this info for targeted scams ("I see your daughter Sarah just had a baby — I need to send her a gift!").</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Privacy Checkup (5 min)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Tap your photo (top right on web; bottom right on phone).</li>
              <li>Settings & Privacy → Privacy Checkup.</li>
              <li>Walk through all 5 sections. Set "Only Me" or "Friends" everywhere.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Manual privacy lockdown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Future posts</strong> default to "Friends" only. Settings → Privacy → "Who can see your future posts?".</li>
              <li><strong>Past posts</strong> — there\'s a "Limit who can see past public posts" button. One click.</li>
              <li><strong>Friends list</strong> — set to "Only Me". Scammers love seeing who you know.</li>
              <li><strong>Profile info</strong> (hometown, birthday, family, work) — go through each in your "About" page. Set to "Friends" or "Only Me".</li>
              <li><strong>Search engine listing</strong> — Settings → Privacy → "Do you want search engines outside Facebook to link to your profile?" — turn OFF.</li>
              <li><strong>Tag review</strong> — turn ON: review what others tag you in before it shows up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Security</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings & Privacy → Settings → Accounts Center → Password and security.</li>
              <li>Turn on Two-factor authentication.</li>
              <li>Set up "Login Alerts" — get notified about new logins.</li>
              <li>Review "Where you\'re logged in" — log out anything you don\'t recognize.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — Control what you see</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Snooze noisy people</strong> — three dots on a post → "Snooze for 30 days".</li>
              <li><strong>Unfollow without unfriending</strong> — three dots on a friend\'s post → "Unfollow". They stay friends but stop showing in your feed.</li>
              <li><strong>Hide political ads</strong> — Settings → Ad Preferences → "Less Of" specific topics.</li>
              <li><strong>Pause Facebook Marketplace</strong> messages from strangers — Settings → Notifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Watch out for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Friend request from someone who\'s already your friend</strong> — scammer cloned them. Don\'t accept; report.</li>
              <li><strong>"I lost my account, can you help me get it back?"</strong> — you\'re being conned to give them YOUR login.</li>
              <li><strong>Quizzes asking for your mother\'s maiden name, your first car, etc.</strong> — these are security question answers. Skip.</li>
              <li><strong>"You\'ve won a Facebook giveaway!"</strong> — always a scam.</li>
              <li><strong>Suspicious DMs with links</strong> — hackers take over accounts and message friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Yearly review</h3>
            <p className="text-sm text-muted-foreground">Facebook changes settings often. Run Privacy Checkup once a year. Pick a date — Memorial Day, your birthday, January 1st. 5 minutes. Big peace of mind.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
