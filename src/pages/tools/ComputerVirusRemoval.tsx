import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bug } from 'lucide-react';

export default function ComputerVirusRemoval() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Computer Virus Removal for Seniors | TekSure" description="Remove malware safely. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Computer Virus?</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t panic. Steps to clean.</p>
        </div>

        <Card className="mb-4 border-red-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-red-700">DON&apos;T do this</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call number on the popup.</li>
              <li>Pay the &quot;ransom&quot;.</li>
              <li>Buy software from popup.</li>
              <li>Give remote access.</li>
              <li>Provide credit card.</li>
              <li>NEVER do these = scammer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Computer slow.</li>
              <li>Pop-up ads everywhere.</li>
              <li>Strange browser homepage.</li>
              <li>Files missing or encrypted.</li>
              <li>Antivirus turned off.</li>
              <li>Battery drains fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Disconnect from internet (turn off WiFi).</li>
              <li>Don&apos;t turn off computer.</li>
              <li>Take photo of any popup.</li>
              <li>Note what you were doing.</li>
              <li>Don&apos;t click anything.</li>
              <li>Stay calm.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free virus scanner</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Microsoft Defender</strong> — built-in Windows.</li>
              <li><strong>Apple Built-in</strong> — automatic Mac protection.</li>
              <li><strong>Malwarebytes</strong> — free deep scan.</li>
              <li><strong>Bitdefender Free</strong>.</li>
              <li>Run from clean computer if needed.</li>
              <li>USB transfer if files needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Clean Windows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Windows Security&quot;.</li>
              <li>&quot;Virus &amp; threat protection&quot;.</li>
              <li>&quot;Quick scan&quot; first.</li>
              <li>If found — &quot;Full scan&quot;.</li>
              <li>Quarantine threats.</li>
              <li>Restart computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get pro help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Geek Squad</strong> ($150-300).</li>
              <li><strong>Apple Genius Bar</strong> (free if Apple).</li>
              <li><strong>Local computer shop</strong>.</li>
              <li>Bring computer in person.</li>
              <li>Avoid &quot;remote help&quot; scams.</li>
              <li>Family member who knows tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After cleanup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Change all passwords.</li>
              <li>Use new device for the changes.</li>
              <li>Enable 2FA on all accounts.</li>
              <li>Check bank accounts for fraud.</li>
              <li>Backup important files.</li>
              <li>Update OS + software.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Prevention</h3>
            <p className="text-sm text-muted-foreground">Keep Windows + Mac updated automatically. Use only Microsoft Defender or built-in Mac protection — paid antivirus often unnecessary. Don&apos;t click email attachments from strangers. Don&apos;t install &quot;free&quot; PC cleaners. Browser extensions — only well-reviewed. Best defense = caution. Backup files weekly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
