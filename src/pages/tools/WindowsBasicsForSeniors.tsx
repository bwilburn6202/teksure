import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

export default function WindowsBasicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows 11 Basics for Seniors | TekSure" description="Pick + use Windows. Plain-English Windows guide for senior PC users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows 11 for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most popular OS. Easy with right setup.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows 10 ending Oct 2025</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Windows 10 = no security updates after Oct 14, 2025.</li>
              <li>Upgrade to Windows 11 if hardware compatible (free).</li>
              <li>If incompatible — buy new PC OR switch to Linux Mint.</li>
              <li>Don&apos;t stay on Windows 10 — vulnerable to scams.</li>
              <li>Most PCs 2018+ can run 11.</li>
              <li>Microsoft offers paid extended security ($30/yr).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Windows laptops for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dell Inspiron 16</strong> — $700. Big screen.</li>
              <li><strong>Lenovo ThinkPad E16</strong> — $900. Great keyboard.</li>
              <li><strong>HP Pavilion 15</strong> — $700. Mid-range.</li>
              <li><strong>Microsoft Surface Laptop 7</strong> — $1,000. Premium.</li>
              <li>Skip $300 Windows laptops — too slow, frustrating.</li>
              <li>Min 8GB RAM, 256GB SSD.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → System → Display → Scale 125-150% (bigger text).</li>
              <li>Settings → Accessibility → Mouse pointer (larger).</li>
              <li>Settings → Accessibility → Text size.</li>
              <li>Magnifier (Win+Plus key) zooms in.</li>
              <li>Narrator reads aloud (Win+Ctrl+N).</li>
              <li>Live Captions for videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t click pop-ups warning of viruses.</li>
              <li>Microsoft NEVER calls about viruses.</li>
              <li>Use built-in Windows Defender (free, good).</li>
              <li>Don&apos;t pay for &quot;PC speedup&quot; software.</li>
              <li>Bookmark important sites (don&apos;t Google search bank).</li>
              <li>If pop-up scary — restart computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free useful tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Microsoft 365</strong> Personal $70/yr — Word, Excel, OneDrive, Outlook.</li>
              <li><strong>LibreOffice</strong> — free Office alternative.</li>
              <li><strong>Microsoft Edge</strong> browser (built-in).</li>
              <li><strong>OneDrive 5GB free</strong> — backup.</li>
              <li><strong>Photos app</strong> built in.</li>
              <li><strong>Skype</strong> built in for calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free senior classes</h3>
            <p className="text-sm text-muted-foreground"><strong>Senior Planet</strong> — free Windows classes online + in-person. <strong>Public libraries</strong> — many offer free 1-on-1 PC help. <strong>OATS</strong> — free training. <strong>YouTube</strong> — &quot;Windows 11 for seniors.&quot; Tons of free help. Don&apos;t struggle alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
