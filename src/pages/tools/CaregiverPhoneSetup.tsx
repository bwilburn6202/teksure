import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UsersRound, CheckCircle2 } from 'lucide-react';

export default function CaregiverPhoneSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caregiver Phone Setup — Set Up a Parent's Phone | TekSure" description="Adult child setting up a parent's first smartphone or simplifying their existing one? A 12-step checklist that makes everything easier — for them and you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UsersRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caregiver Phone Setup</h1>
          <p className="text-lg text-muted-foreground">A 12-step checklist for setting up an aging parent's phone.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">For adult children</h2>
            <p className="text-sm">Mom or Dad got a new phone. The default settings are NOT designed for them — they're designed to look pretty in store demos. These 12 changes turn any phone into a phone for someone over 70. Takes about 30 minutes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-4">The Checklist</h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm">
              <li><strong>Make text BIG.</strong> Settings → Display → Text Size → push the slider as far right as they can comfortably read.</li>
              <li><strong>Bold all text.</strong> Settings → Display → Bold Text → ON.</li>
              <li><strong>Bigger app icons.</strong> iPhone: Settings → Display → Display Zoom → Larger Text. Android: Settings → Display → Display Size.</li>
              <li><strong>Set up Medical ID</strong> — emergency info on lock screen. (See our Medical ID Setup tool.)</li>
              <li><strong>Set up Emergency SOS</strong> — one button calls 911. (See our Emergency SOS Setup.)</li>
              <li><strong>Add favorites.</strong> Open Phone → Favorites → add your number, spouse, doctor's office, pharmacy, and one or two close friends. They tap a name — no scrolling.</li>
              <li><strong>Set up tap-to-pay.</strong> Apple Pay or Google Pay. Safer than swiping a card. Show them how once. (See Tap-to-Pay Setup.)</li>
              <li><strong>Turn on two-factor</strong> on Apple ID / Google account, email, and bank. Add YOUR number as a backup. (See Two-Factor Coach.)</li>
              <li><strong>Block spam calls.</strong> iPhone: Settings → Phone → Silence Unknown Callers → ON. Android: install carrier's free spam filter. (See Block Spam Calls.)</li>
              <li><strong>Photo of each contact.</strong> Open Contacts → tap a name → Edit → Add Photo. Now when family calls, their face shows on the screen. Big help for memory.</li>
              <li><strong>Set up Find My / Find My Device.</strong> So if the phone is lost, you (and they) can find it. Add yourself as a family member.</li>
              <li><strong>Print the cheat sheet.</strong> List of important phone numbers, the home Wi-Fi password, the Apple ID/Google email and password (in a safe place), and 5-10 things they ask about most often. Tape it to the fridge or inside a kitchen cabinet.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bonus moves</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Family Sharing (Apple) or Family Link (Google)</strong> — lets you see if their phone is offline, share their location, and help with App Store purchases.</li>
              <li><strong>Add yourself as Legacy Contact</strong> on their Apple ID / Google account. (See Digital Legacy Setup.)</li>
              <li><strong>Set up a password manager</strong> like 1Password or Bitwarden. They forget passwords; the manager remembers. Set up Emergency Access so you can help.</li>
              <li><strong>Schedule a 6-month checkup.</strong> Put a calendar reminder to come back, update apps, check storage, and refresh the cheat sheet.</li>
              <li><strong>Practice video calling.</strong> FaceTime or WhatsApp. If they only ever video-call once a week, that's still a huge win.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps to install</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Their bank's app</strong> — set it up together so you've seen their login.</li>
              <li><strong>Their pharmacy's app</strong> — refills are 2 taps.</li>
              <li><strong>MyChart</strong> or their hospital's portal — for results and messaging the doctor.</li>
              <li><strong>WhatsApp</strong> — if cousins or grandkids use it.</li>
              <li><strong>Maps</strong> (Apple Maps or Google Maps) — even if they don't drive much, useful for store hours and directions.</li>
              <li><strong>Magnifier</strong> (iPhone has a built-in one) — for reading menus and price tags.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Most important</h3>
                <p className="text-sm text-muted-foreground">Don't try to teach everything at once. Pick 2-3 things they'll use this week, and only those. Come back next month and add 2 more. Confidence beats coverage every time.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
