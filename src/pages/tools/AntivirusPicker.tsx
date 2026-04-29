import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

const PICKS = [
  { name: 'Windows Defender (built into Windows)', cost: 'FREE', best: 'Already installed on every Windows 10/11 PC. Microsoft has made it genuinely good. Real-time protection, scheduled scans.', good: 'Don\'t pay for antivirus on Windows. This works.' },
  { name: 'Malwarebytes Free', cost: 'FREE', best: 'For deep scans when you\'re worried something\'s wrong. Pair with Defender — they don\'t conflict.', good: 'Best second opinion.' },
  { name: 'Bitdefender Free', cost: 'FREE', best: 'Top-rated free option for those who don\'t trust Defender.', good: 'Quiet, low resource use.' },
  { name: 'Apple\'s built-in security', cost: 'FREE', best: 'Macs have built-in Gatekeeper, XProtect, MRT. They quietly remove known malware.', good: 'Don\'t pay for "Mac antivirus" unless you really need extra.' },
  { name: 'Malwarebytes for Mac', cost: 'Free; $40/year Premium', best: 'Best Mac antivirus. The free version is good for occasional scans.', good: 'Worth running monthly.' },
  { name: 'Norton, McAfee, Kaspersky', cost: '$50-100/year', best: 'Have features Defender lacks — VPN, password manager, identity monitoring. Often pre-installed and pricey.', good: 'Skip unless they came in a bundle.' },
];

export default function AntivirusPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Antivirus Picker — Free vs Paid for 2025 | TekSure" description="Free Windows Defender, Malwarebytes, Bitdefender vs paid Norton, McAfee. What you really need — plain-English picks for Windows and Mac." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Antivirus Picker</h1>
          <p className="text-lg text-muted-foreground">The honest take on what you actually need.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The honest truth</h2>
            <p className="text-sm">For most people, the FREE built-in antivirus on your Windows PC or Mac is enough. Paid antivirus often slows your computer more than it helps. Better protection comes from: NOT clicking unknown links, NOT installing random software, and using a password manager.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recommended setup</h2>
            <p className="font-semibold text-sm">Windows:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
              <li>Keep <strong>Windows Defender</strong> (already on).</li>
              <li>Install <strong>Malwarebytes Free</strong> for occasional deep scans.</li>
              <li>Keep Windows updated automatically.</li>
              <li>Don\'t install third-party paid antivirus unless you have a specific reason.</li>
            </ul>
            <p className="font-semibold text-sm">Mac:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Keep macOS updated.</li>
              <li>Install <strong>Malwarebytes for Mac (free)</strong> for monthly scans.</li>
              <li>That\'s it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your computer came with paid antivirus</h2>
            <p className="text-sm mb-2">Most new PCs come with Norton or McAfee free for a year. They auto-renew at $50-100/year unless you cancel.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Find the auto-renew in your account → cancel.</li>
              <li>Or uninstall it: Settings → Apps → find Norton/McAfee → Uninstall.</li>
              <li>Windows Defender automatically takes over.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Antivirus scams</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>"Your computer is infected!" pop-ups</strong> — never real. (See our Tech Support Pop-up Defense.)</li>
              <li><strong>Free antivirus from random websites</strong> — often malware itself.</li>
              <li><strong>"Antivirus scan reveals 47 threats"</strong> emails — phishing.</li>
              <li>Stick to the brands above. Download only from each company\'s real website.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best protection isn\'t software</h3>
            <p className="text-sm text-muted-foreground">Strong unique passwords (use a password manager). Two-factor on important accounts. Don\'t click random links. Keep your operating system updated. These prevent more attacks than any antivirus catches.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
