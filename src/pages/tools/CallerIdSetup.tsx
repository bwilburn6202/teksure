import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PhoneOff, Phone, AlertTriangle,
} from 'lucide-react';

type Phone = 'iphone' | 'pixel' | 'samsung' | 'android';

interface Step {
  title: string;
  detail: string;
}

const SETUP: Record<Phone, Step[]> = {
  iphone: [
    { title: 'Open Settings on your iPhone', detail: 'Tap the grey gear icon on your home screen. Scroll down and tap "Phone".' },
    { title: 'Turn on Silence Unknown Callers', detail: 'In the Phone settings, scroll down to "Silence Unknown Callers" and flip the switch ON. Calls from numbers not in your contacts will go straight to voicemail without ringing.' },
    { title: 'Add trusted numbers to Contacts first', detail: 'Before turning this on, save your doctor, pharmacy, family, and any number that might call you (like the bank). Otherwise their calls will be silenced too.' },
    { title: 'Turn on Live Voicemail (iOS 17+)', detail: 'Settings → Phone → Live Voicemail → ON. When a silenced caller leaves a message, you will see the words on your screen as they speak. You can pick up partway through if it sounds important.' },
    { title: 'Check missed calls daily', detail: 'Open the Phone app → Recents tab. Silenced calls show up here so you can spot anyone you missed. Tap the small "i" next to a number to add them to contacts.' },
  ],
  pixel: [
    { title: 'Open the Phone app on your Pixel', detail: 'Tap the green Phone icon. In the top right corner, tap your profile picture or the three dots menu, then tap "Settings".' },
    { title: 'Tap "Spam and Call Screen"', detail: 'You will see options for Call Screen, which is the Pixel feature that answers unknown calls for you and asks who is calling.' },
    { title: 'Turn on Call Screen', detail: 'Tap "Call Screen" → choose how to handle each type of caller. For "Spam" pick "Silently decline". For "Possibly faked numbers" pick "Screen". For "First-time callers" pick "Screen". This makes the Google Assistant pick up the call and ask the caller their name and reason.' },
    { title: 'Read the screened call on screen', detail: 'When a screened call comes in, you see what the caller is saying in real time, written on your screen. You can tap "Pick up" if it is real, or tap "Mark as spam and hang up" if it sounds shady.' },
    { title: 'Turn on caller ID warnings', detail: 'Same Settings menu → "Caller ID announcement" can read the name out loud when a contact calls. Helpful when your phone is across the room.' },
  ],
  samsung: [
    { title: 'Open the Phone app on your Galaxy', detail: 'Tap the green Phone icon. Tap the three dots menu in the top right, then tap "Settings".' },
    { title: 'Turn on Smart Call', detail: 'Tap "Caller ID and spam protection" → flip it ON. This is Samsung\'s name for the feature that looks up unknown numbers and shows you a warning if the number is reported as spam.' },
    { title: 'Block calls from unknown numbers', detail: 'Same Settings menu → "Block numbers" → flip "Block unknown/private numbers" ON. Anyone not in your contacts goes straight to voicemail. Add doctors and family to contacts first.' },
    { title: 'Turn on Bixby Text Call (Galaxy S23 and newer)', detail: 'Settings → Bixby Text Call → ON. When an unknown number calls, Bixby answers and types out what they say on your screen. You can type back and Bixby reads your reply out loud to the caller.' },
    { title: 'Review the spam call list weekly', detail: 'Phone app → Recents. Numbers flagged red are confirmed spam. Tap one and choose "Block" to make sure they never ring through again.' },
  ],
  android: [
    { title: 'Open the Phone app', detail: 'On most Android phones (Motorola, OnePlus, etc.), tap the green Phone icon, then tap the three dots menu in the top right, then tap "Settings".' },
    { title: 'Tap "Caller ID and spam"', detail: 'Flip "See caller and spam ID" ON. Google looks up unknown numbers and shows the business name (like "Walgreens Pharmacy") so you know who is calling.' },
    { title: 'Turn on filter spam calls', detail: 'Same Settings menu → "Filter spam calls" → ON. Calls Google has flagged as spam will not ring your phone. They go straight to voicemail and show in Recents marked as spam.' },
    { title: 'Block specific numbers', detail: 'When a spam call comes in, open Recents, tap the number, then tap "Block / report spam". The phone will not ring from that number again, and Google adds it to the warning database for everyone.' },
    { title: 'Install Hiya or Truecaller for older phones', detail: 'If your phone is from before 2020, the built-in caller ID may be limited. Hiya (free) and Truecaller (free) add a name lookup for unknown callers. Download from the Play Store.' },
  ],
};

const TIPS = [
  {
    title: 'Save trusted numbers in Contacts before turning silence ON',
    detail: 'Doctor, pharmacy, kids\' school, bank fraud line, your own family. If a number is not saved, it is treated as unknown — and silenced or sent to spam.',
  },
  {
    title: 'A "missed call" from an unknown number is not urgent',
    detail: 'Real businesses leave voicemail or send a text. If neither comes, do not call back. Calling unknown numbers back is one way scammers confirm your line is active.',
  },
  {
    title: 'Caller ID names are not proof',
    detail: 'When the screen says "IRS" or "Social Security", that name comes from the caller\'s phone system — not from a verified database. Anyone can put any name there.',
  },
  {
    title: 'Use "Do Not Disturb" hours alongside call screening',
    detail: 'Settings → Focus (iPhone) or Sound → Do Not Disturb (Android). Set 9 PM to 7 AM. Family contacts can still ring through; everyone else waits until morning.',
  },
  {
    title: 'Report spam after blocking',
    detail: 'Blocking only stops that one number. Reporting it (the same screen has a "Report spam" toggle) helps Apple, Google, and Samsung warn other people. Takes 2 seconds.',
  },
];

export default function CallerIdSetup() {
  const [phone, setPhone] = useState<Phone>('iphone');

  const labelFor = (p: Phone) => {
    if (p === 'iphone') return 'iPhone';
    if (p === 'pixel') return 'Pixel';
    if (p === 'samsung') return 'Samsung';
    return 'Other Android';
  };

  return (
    <>
      <SEOHead
        title="Caller ID and Call Screening Setup"
        description="Stop unknown callers from ringing your phone. Step-by-step setup for iPhone Silence Unknown Callers, Pixel Call Screen, Samsung Smart Call, and other Android phones."
        path="/tools/caller-id-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <PhoneOff className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Caller ID and Call Screening Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set your phone to silence or screen unknown callers. The ones worth talking to will leave a message.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Caller ID Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex flex-wrap gap-2">
                {(['iphone', 'pixel', 'samsung', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {labelFor(p)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Setup steps</p>
              <ol className="space-y-3">
                {SETUP[phone].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Five tricks worth knowing</p>
              <div className="space-y-3">
                {TIPS.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Caller ID can be faked</p>
                <p className="text-muted-foreground">
                  Scammers use a trick called "spoofing" to make any name or number show on your screen — including your own area code, your bank&apos;s name, or a government agency. If a caller claims to be from the IRS, Medicare, or your bank, hang up and call the number on the back of your card. Never trust the name on caller ID alone.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/robocall-blocker-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Robocall Blocker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn on the carrier-side blocker too.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check that suspicious voicemail or text.</p>
              </Link>
              <Link to="/tools/voicemail-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voicemail Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Read silenced calls on screen.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <Phone className="h-3 w-3" /> Quick Tip: a real caller will leave a message. Silence is the best filter you have.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
