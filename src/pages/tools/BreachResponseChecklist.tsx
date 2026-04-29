import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

const STEPS = [
  { hour: 'Right now', title: 'Change the password', body: 'Open the affected account on a different device if possible. Pick a brand-new password — not one you\'ve used before. Use 12+ characters.' },
  { hour: 'Next 10 min', title: 'Turn on two-factor', body: 'In the account\'s Security settings, turn on two-factor authentication. This blocks the hacker even if they kept your password.' },
  { hour: 'Next 15 min', title: 'Sign out everywhere', body: 'Most accounts have "Sign out of all devices" or "Active sessions" — use it. The hacker is kicked out.' },
  { hour: 'Next 30 min', title: 'Check for damage', body: 'Look at recent emails sent, posts made, money moved, or password reset emails you didn\'t request. Note anything strange.' },
  { hour: 'Same day', title: 'Check your other accounts', body: 'If you used the same password elsewhere, change those too. Banks first, then email, then social media.' },
  { hour: 'Same day', title: 'Tell your bank', body: 'If anything financial was touched — call the number on the back of your card. Ask for new card numbers if needed.' },
  { hour: 'This week', title: 'Place a credit freeze', body: 'Free at all 3 bureaus. Stops anyone from opening new credit in your name. (See our Credit Freeze Coach.)' },
  { hour: 'This week', title: 'Report it', body: 'File at IdentityTheft.gov — the FTC walks you through every step and creates a recovery plan.' },
];

export default function BreachResponseChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="I Got Hacked — What Do I Do? Step-by-Step Recovery | TekSure" description="Account broken into? Stay calm. Here's the step-by-step plan to lock it down, check the damage, and protect your money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">I Got Hacked — What Do I Do?</h1>
          <p className="text-lg text-muted-foreground">Stay calm. Work through these in order.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-1">Before you start</h2>
            <p className="text-sm">If your computer might have a virus, do these steps from a different device — your phone, a tablet, or a relative's computer. The hacker may still be watching the infected one.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {STEPS.map((s, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                  <div className="flex-1">
                    <p className="text-xs text-primary uppercase tracking-wide font-semibold">{s.hour}</p>
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Once you're locked back in</h3>
                <p className="text-sm text-muted-foreground">Watch your bank statements and email closely for 30 days. If something else strange happens, repeat this checklist. And tell a family member what happened — they may need to watch their own accounts too if you share any.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
