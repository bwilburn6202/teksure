import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ChevronRight } from 'lucide-react';

interface Mistake {
  number: number;
  title: string;
  category: string;
  whatPeopleDo: string;
  whyItIsBad: string;
  theFix: string;
  fixLink?: { to: string; label: string };
}

const MISTAKES: Mistake[] = [
  {
    number: 1,
    title: 'Same password everywhere',
    category: 'Passwords',
    whatPeopleDo: 'Pick one password (often a pet name plus a number) and reuse it for email, banking, Amazon, Facebook, and Medicare.',
    whyItIsBad: 'When any one site gets hacked, the attackers try that password on every other site they can think of. One leak becomes ten.',
    theFix: 'Use a password manager (Bitwarden is free) so each site has its own long password. Run a password health check first to see where you are exposed.',
    fixLink: { to: '/tools/password-health', label: 'Password Health Check' },
  },
  {
    number: 2,
    title: 'Reading a 6-digit code aloud over the phone',
    category: 'Account takeover',
    whatPeopleDo: 'A caller says they are from the bank. A code arrives by text. The caller asks you to read it back to confirm your identity.',
    whyItIsBad: 'That code is your two-factor login. The caller is signing into your real account at the same moment you read the code. You hand them the keys.',
    theFix: 'No real bank, no real Amazon, no real Apple ever asks you to read a code aloud. Hang up. Call the number on the back of your card.',
    fixLink: { to: '/tools/scam-message-decoder', label: 'Scam Message Decoder' },
  },
  {
    number: 3,
    title: 'Clicking links in emails',
    category: 'Phishing',
    whatPeopleDo: 'An email looks like it is from FedEx, Netflix, or the bank. It says click here to fix a problem. You click.',
    whyItIsBad: 'The link goes to a fake login page that captures your username and password. You will not see anything wrong until money is gone.',
    theFix: 'Never click. Open a new tab and type the company name yourself, or use the app on your phone. If it is a real alert, you will find it there.',
    fixLink: { to: '/tools/scam-message-decoder', label: 'Check a message' },
  },
  {
    number: 4,
    title: 'Saving passwords in a Word document',
    category: 'Passwords',
    whatPeopleDo: 'A file called passwords.docx sits on the desktop with every login written down.',
    whyItIsBad: 'Any malware that lands on your computer reads that file in seconds. So does anyone who borrows your laptop. The file is also not encrypted.',
    theFix: 'Move every password into a real password manager. Bitwarden and 1Password encrypt the data and unlock with one master password.',
    fixLink: { to: '/tools/password-health', label: 'Password Health Check' },
  },
  {
    number: 5,
    title: 'Buying overpriced antivirus you do not need',
    category: 'Money',
    whatPeopleDo: 'A pop-up or salesperson convinces you to pay $200 a year for McAfee, Norton, or some unknown brand.',
    whyItIsBad: 'Windows 11 and macOS already include strong built-in protection. The third-party antivirus often slows the computer and renews at higher prices each year.',
    theFix: 'Use Windows Security (built in) or the built-in macOS protection. Cancel the paid renewal through your bank if needed.',
  },
  {
    number: 6,
    title: 'Letting "tech support" remote into your computer',
    category: 'Tech impersonation',
    whatPeopleDo: 'A caller or pop-up says your computer has a virus. They walk you through downloading a remote-access program (AnyDesk, TeamViewer) and take control.',
    whyItIsBad: 'They can install real malware, lock your files, copy your bank screens, and sometimes empty your account while you watch.',
    theFix: 'Never give remote access to a stranger. Real Microsoft and Apple support never call you first. Hang up. Restart the computer.',
    fixLink: { to: '/tools/scam-message-decoder', label: 'Scam Message Decoder' },
  },
  {
    number: 7,
    title: 'Not backing up your phone',
    category: 'Backup',
    whatPeopleDo: 'Years of grandkid photos and contacts sit only on the phone. No iCloud. No Google backup.',
    whyItIsBad: 'A dropped phone, a lost phone, or a stolen phone wipes out the only copy. Photos cannot be recovered.',
    theFix: 'Turn on iCloud Backup (iPhone) or Google One backup (Android). Both have free tiers, then a few dollars a month for more space.',
    fixLink: { to: '/tools/backup-wizard', label: 'Backup Wizard' },
  },
  {
    number: 8,
    title: 'Sharing too much on Facebook',
    category: 'Privacy',
    whatPeopleDo: 'Posting birthday parties, vacation dates, full birthdates, mother\'s maiden name memes, and grandkids\' full names — all public.',
    whyItIsBad: 'Scammers harvest these details to answer security questions, target grandparent scams, and know exactly when your house is empty.',
    theFix: 'Change your Facebook posts to "Friends only". Skip the fun memes that ask for your first car, first pet, or street you grew up on — those are security-question answers.',
    fixLink: { to: '/tools/privacy-checkup', label: 'Privacy Checkup' },
  },
  {
    number: 9,
    title: 'Old wifi router with the default password',
    category: 'Home network',
    whatPeopleDo: 'The router has been on the floor since 2014. The wifi password is still "admin" or printed on a sticker. Firmware never updated.',
    whyItIsBad: 'Old routers have known security holes. A neighbor or passing car can log in and watch your traffic, or worse, change settings to redirect your banking.',
    theFix: 'If your router is more than 5 years old, replace it. Change the admin password. Turn on automatic firmware updates. Use WPA3 if available.',
    fixLink: { to: '/tools/wifi-troubleshooter', label: 'Wifi Troubleshooter' },
  },
  {
    number: 10,
    title: 'Not telling family the iPad PIN',
    category: 'Estate planning',
    whatPeopleDo: 'The iPad, iPhone, or laptop has a PIN nobody else knows. The Apple ID password is in your head only.',
    whyItIsBad: 'After a hospital stay or worse, family cannot get to photos, contacts, banking, or two-factor codes. Apple will not unlock the device for them. Years of memories become unreachable.',
    theFix: 'Write the device PINs and one master password down. Put the paper in a sealed envelope with your will, or use a password manager with an emergency-access feature. Have the conversation now.',
    fixLink: { to: '/tools/family-tech-roundtable', label: 'Family Tech Roundtable' },
  },
];

export default function SeniorTechMistakes() {
  return (
    <>
      <SEOHead
        title="10 Common Tech Mistakes Seniors Make"
        description="Ten mistakes we see again and again — and the fix for each one. From password reuse to sharing 6-digit codes, this list keeps you and your family safer online."
        path="/tools/senior-tech-mistakes"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">10 Common Tech Mistakes Seniors Make</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The patterns we see most often — and the fix for each one. Read with a family member.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Senior Tech Mistakes' }]} />

          <div className="space-y-4 mb-6">
            {MISTAKES.map(m => (
              <Card key={m.number} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">
                      <span className="text-amber-600 mr-2">#{m.number}</span>{m.title}
                    </p>
                    <Badge variant="outline">{m.category}</Badge>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">What people do</p>
                  <p className="text-sm">{m.whatPeopleDo}</p>

                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mt-3 mb-1">Why it is bad</p>
                  <p className="text-sm p-2 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">{m.whyItIsBad}</p>

                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider mt-3 mb-1">The fix</p>
                  <p className="text-sm p-2 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">{m.theFix}</p>

                  {m.fixLink && (
                    <Link to={m.fixLink.to} className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3">
                      <ChevronRight className="h-3 w-3" /> {m.fixLink.label}
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health</p>
                <p className="text-xs text-muted-foreground mt-0.5">See where you are exposed.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste a text and check it.</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Have the conversation.</p>
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pick one mistake per week and fix that one. Ten weeks from now you will be ahead of most people online.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
