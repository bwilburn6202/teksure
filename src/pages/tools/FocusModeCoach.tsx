import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Bell } from 'lucide-react';

export default function FocusModeCoach() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Do Not Disturb & Focus Mode Coach — Quiet Your Phone | TekSure" description="Sleep through the night without buzzing or beeping. Set up Do Not Disturb so emergency calls still get through but everyone else waits till morning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Do Not Disturb & Focus Mode</h1>
          <p className="text-lg text-muted-foreground">Sleep without dings. But still let real emergencies through.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What Do Not Disturb does</h2>
            <p className="text-sm">Silences calls, texts, and notifications during the hours you pick. Both iPhone and Android can be set so:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li>Emergency contacts (spouse, kids) ALWAYS ring through.</li>
              <li>Anyone who calls twice in 3 minutes rings through (in case of real emergency).</li>
              <li>Alarms still work.</li>
              <li>Spam and junk texts stay quiet.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone (Focus)</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android (DND)</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone — Focus / Sleep mode</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → <strong>Focus</strong>.</li>
                <li>Tap <strong>Sleep</strong> (or "Do Not Disturb").</li>
                <li>Tap <strong>People</strong> → Allow Notifications From → Add anyone who can ALWAYS reach you (spouse, kids, your doctor's office).</li>
                <li>Turn ON <strong>"Allow Repeated Calls"</strong> — if someone calls twice within 3 minutes, the second ring goes through. Real emergencies survive this.</li>
                <li>Go back. Tap <strong>Set a Schedule</strong> → "Add Schedule" → choose times (e.g., 10 PM to 7 AM).</li>
                <li>Done. Phone stays quiet at those times — but family and emergencies still reach you.</li>
              </ol>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Quick toggle:</p>
                <p>Swipe down from the top-right corner → tap the half-moon icon. Turn DND on/off instantly.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — Do Not Disturb</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → <strong>Sound & vibration</strong> → <strong>Do Not Disturb</strong>. (Samsung: Notifications → Do not disturb.)</li>
                <li>Tap <strong>People</strong> → Calls → "Starred contacts" or "Contacts". (Star your spouse and kids in the Contacts app first.)</li>
                <li>Turn ON <strong>"Allow repeat callers"</strong> — second call within 15 minutes rings through.</li>
                <li>Tap <strong>Schedules</strong> → "Sleeping" → set a start and end time (e.g., 10 PM to 7 AM).</li>
                <li>Done.</li>
              </ol>
              <div className="mt-3 bg-muted/50 p-3 rounded text-sm">
                <p className="font-semibold mb-1">Quick toggle:</p>
                <p>Pull down twice from the top of the screen. Tap the "Do Not Disturb" tile.</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Bell className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Other Focus modes worth knowing</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Driving</strong> — silences notifications when your phone detects you're in a moving car.</li>
                  <li><strong>Personal</strong> — silences work email outside work hours.</li>
                  <li><strong>Custom</strong> — make your own (e.g., "At Doctor" — silence everything except family).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worried about missing a real emergency?</h3>
            <p className="text-sm text-muted-foreground">Don't be. With Repeated Calls turned on, anyone calling twice within a few minutes rings through. And family members starred as contacts always reach you. Real emergencies get through; midnight Amazon delivery alerts don't.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
