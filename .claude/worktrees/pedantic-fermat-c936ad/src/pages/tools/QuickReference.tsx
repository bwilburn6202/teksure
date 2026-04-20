import { useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Printer, Monitor, Apple, ShieldCheck, KeyRound, Gauge, MailWarning, Smartphone,
} from 'lucide-react';

interface RefCard {
  title: string;
  icon: React.ElementType;
  tips: string[];
}

const cards: RefCard[] = [
  {
    title: 'Windows Keyboard Shortcuts',
    icon: Monitor,
    tips: [
      'Ctrl + C / Ctrl + V — Copy and paste',
      'Ctrl + Z — Undo your last action',
      'Alt + Tab — Switch between open apps',
      'Win + D — Show or hide the desktop',
      'Win + L — Lock your computer instantly',
      'Ctrl + Shift + Esc — Open Task Manager',
      'Win + E — Open File Explorer',
    ],
  },
  {
    title: 'Mac Keyboard Shortcuts',
    icon: Apple,
    tips: [
      '⌘ + C / ⌘ + V — Copy and paste',
      '⌘ + Z — Undo your last action',
      '⌘ + Tab — Switch between open apps',
      '⌘ + Space — Open Spotlight search',
      '⌘ + Q — Quit the current app',
      '⌘ + Shift + 3 — Take a screenshot',
      '⌘ + W — Close the current window',
    ],
  },
  {
    title: 'Safe Browsing Checklist',
    icon: ShieldCheck,
    tips: [
      'Look for the padlock icon and HTTPS in the address bar',
      'Don\'t click pop-ups that say your device is infected',
      'Avoid downloading files from untrusted websites',
      'Keep your browser updated to the latest version',
      'Use an ad blocker to reduce malicious adverts',
      'Never enter passwords on sites you reached via email links',
    ],
  },
  {
    title: 'Password Safety Rules',
    icon: KeyRound,
    tips: [
      'Use at least 12 characters with letters, numbers & symbols',
      'Never reuse the same password on different sites',
      'Use a password manager to store them securely',
      'Turn on two-factor authentication wherever possible',
      'Don\'t share passwords via email or text',
      'Change passwords immediately if a site reports a breach',
    ],
  },
  {
    title: 'What To Do When Your Computer Is Slow',
    icon: Gauge,
    tips: [
      'Restart your computer — it clears temporary issues',
      'Close tabs and apps you\'re not using',
      'Check for and install system updates',
      'Run a malware scan with your antivirus software',
      'Free up storage by deleting old files and emptying the bin',
      'Disable programs that start automatically on boot',
      'Consider upgrading RAM or switching to an SSD',
    ],
  },
  {
    title: 'How To Spot a Scam Email',
    icon: MailWarning,
    tips: [
      'Check the sender\'s address — does it match the real company?',
      'Look for generic greetings like "Dear Customer"',
      'Watch for urgent language: "Act now or lose your account"',
      'Hover over links before clicking — does the URL look right?',
      'Beware of attachments you weren\'t expecting',
      'Legitimate companies won\'t ask for passwords by email',
      'When in doubt, go directly to the company\'s official website',
    ],
  },
  {
    title: 'iPhone Basic Tips',
    icon: Smartphone,
    tips: [
      'Swipe down from top-right for Control Center',
      'Press and hold the side button for Siri',
      'Go to Settings → General → Software Update to update iOS',
      'Use Settings → Battery to see what\'s draining power',
      'Take a screenshot: press Side + Volume Up at the same time',
      'Turn on iCloud backup in Settings → [Your Name] → iCloud',
    ],
  },
  {
    title: 'Android Basic Tips',
    icon: Smartphone,
    tips: [
      'Swipe down from the top for Quick Settings',
      'Long-press the Power button for Google Assistant',
      'Go to Settings → System → Software Update to update',
      'Use Settings → Battery to check usage and enable saver mode',
      'Take a screenshot: press Power + Volume Down together',
      'Back up with Settings → Google → Backup',
      'Use Digital Wellbeing to track and limit screen time',
    ],
  },
];

export default function QuickReference() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrintCard = (index: number) => {
    const allCards = printRef.current?.querySelectorAll('[data-card]');
    if (!allCards) return;

    allCards.forEach((card, i) => {
      (card as HTMLElement).classList.toggle('print-this', i === index);
    });

    window.print();

    allCards.forEach((card) => {
      (card as HTMLElement).classList.remove('print-this');
    });
  };

  return (
    <>
      <SEOHead
        title="Quick Reference Cards | TekSure"
        description="Printable cheat-sheet cards for common tech tasks — shortcuts, safety tips, and troubleshooting."
        path="/tools/quick-reference"
      />
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          [data-card].print-this,
          [data-card].print-this * { visibility: visible !important; }
          [data-card].print-this {
            position: absolute; left: 0; top: 0; width: 100%;
            border: 1px solid #ccc; padding: 2rem; break-inside: avoid;
          }
          .no-print { display: none !important; }
        }
      `}</style>
      <div className="no-print">
        <Navbar />
      </div>
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2 no-print">
          <Printer className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Quick Reference Cards</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl no-print">
          Printable cheat-sheet cards you can stick next to your screen. Click "Print Card" on any card to print just that one.
        </p>

        <div ref={printRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} data-card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <card.icon className="h-6 w-6 text-primary shrink-0" />
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 flex-1 mb-4">
                  {card.tips.map((tip, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 no-print w-full"
                  onClick={() => handlePrintCard(i)}
                >
                  <Printer className="h-4 w-4" /> Print Card
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
