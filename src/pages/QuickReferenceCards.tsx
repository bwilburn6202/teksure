import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Printer, Shield, Key, Wifi, Smartphone, Mail, Globe, AlertTriangle, CheckCircle } from 'lucide-react';

interface QuickRefCard {
  id: string;
  title: string;
  icon: typeof Shield;
  items: { title: string; content: string }[];
  color: string;
}

const QUICK_REF_CARDS: QuickRefCard[] = [
  {
    id: 'password',
    title: 'Password Safety',
    icon: Key,
    color: 'border-blue-200 dark:border-blue-800',
    items: [
      { title: 'Strong Passwords', content: 'Use 12+ characters with letters, numbers, and symbols. Never use personal info like birthdays.' },
      { title: 'Unique Passwords', content: 'Use a different password for every account. One password breach should not unlock everything.' },
      { title: 'Password Managers', content: 'Apps like Bitwarden, 1Password, or Apple Keychain can generate and store passwords safely.' },
      { title: 'Two-Factor Authentication', content: 'Enable 2FA on important accounts (email, banking). This requires a code from your phone even if someone has your password.' },
    ],
  },
  {
    id: 'wifi',
    title: 'WiFi Safety',
    icon: Wifi,
    color: 'border-green-200 dark:border-green-800',
    items: [
      { title: 'Home WiFi Security', content: 'Use WPA3 or WPA2 encryption. Change default router passwords. Update router firmware regularly.' },
      { title: 'Public WiFi Risks', content: 'Avoid banking or shopping on public WiFi. Hackers can intercept your information on open networks.' },
      { title: 'VPN Protection', content: 'Use a VPN on public WiFi to encrypt your connection and protect your privacy.' },
      { title: 'Auto-Connect Dangers', content: 'Turn off auto-connect to WiFi when traveling. Hackers create fake networks with common names.' },
    ],
  },
  {
    id: 'email',
    title: 'Email Safety',
    icon: Mail,
    color: 'border-purple-200 dark:border-purple-800',
    items: [
      { title: 'Spot Phishing', content: 'Check sender address carefully. Hover over links before clicking. Watch for urgent language and spelling errors.' },
      { title: 'Never Share Passwords', content: 'No legitimate company will ask for your password via email. This is always a scam.' },
      { title: 'Verify Before Clicking', content: 'Call the company directly using a known phone number if an email seems suspicious.' },
      { title: 'Attachment Warnings', content: 'Never open attachments from unknown senders. Even known senders can be spoofed.' },
    ],
  },
  {
    id: 'scams',
    title: 'Common Scams',
    icon: AlertTriangle,
    color: 'border-red-200 dark:border-red-800',
    items: [
      { title: 'Tech Support Scams', content: 'Microsoft, Apple, or Amazon will never call you first about computer problems. Hang up on cold calls.' },
      { title: 'IRS/Government Scams', content: 'The IRS never calls demanding immediate payment or threatens arrest. They use mail first.' },
      { title: 'Grandparent Scams', content: 'Scammers call pretending to be grandchildren in trouble. Verify by calling the grandchild directly.' },
      { title: 'Prize/Lottery Scams', content: 'If you did not enter, you cannot win. Real lotteries never require upfront fees.' },
    ],
  },
  {
    id: 'phone',
    title: 'Phone Security',
    icon: Smartphone,
    color: 'border-amber-200 dark:border-amber-800',
    items: [
      { title: 'Screen Lock', content: 'Always use a PIN, password, fingerprint, or face ID. This protects your data if your phone is lost or stolen.' },
      { title: 'App Permissions', content: 'Review app permissions regularly. Ask why an app needs access to your camera, microphone, or location.' },
      { title: 'Software Updates', content: 'Keep your phone operating system updated. Updates fix security vulnerabilities.' },
      { title: 'App Store Only', content: 'Only download apps from the App Store (iPhone) or Google Play Store (Android). Avoid third-party sites.' },
    ],
  },
  {
    id: 'browsing',
    title: 'Safe Browsing',
    icon: Globe,
    color: 'border-cyan-200 dark:border-cyan-800',
    items: [
      { title: 'HTTPS Sites', content: 'Look for the lock icon and "https://" in the address bar. This means the site encrypts your data.' },
      { title: 'Browser Security', content: 'Keep your browser updated. Use built-in security features. Consider uBlock Origin for ad blocking.' },
      { title: 'Private Browsing', content: 'Use incognito/private mode for shopping or sensitive searches. It does not make you completely anonymous.' },
      { title: 'Clear Cache Regularly', content: 'Clear your browser cache and history periodically. This removes stored data that websites leave behind.' },
    ],
  },
];

export default function QuickReferenceCards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handlePrint = () => window.print();

  const handleDownload = (card: QuickRefCard) => {
    const content = `
${card.title.toUpperCase()}
${'='.repeat(card.title.length)}

${card.items.map(item => `
${item.title}
${'-'.repeat(item.title.length)}
${item.content}
`).join('\n')}

---
Printed from TekSure.com
`.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `teksure-${card.id}-reference.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEOHead
        title="Quick Reference Cards | TekSure"
        description="Downloadable cheat sheets for password safety, WiFi security, email safety, scam alerts, and more."
        path="/quick-reference"
      />
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main-content" className="container py-12 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Download className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">Quick Reference Cards</h1>
              </div>
              <p className="text-muted-foreground">
                Download or print these handy cheat sheets. Keep them by your computer for quick reference.
              </p>
            </div>
            <Button onClick={handlePrint} className="print:hidden gap-2">
              <Printer className="h-4 w-4" />
              Print All
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="print:hidden">
              <TabsTrigger value="all">All Cards</TabsTrigger>
              <TabsTrigger value="safety">Safety & Security</TabsTrigger>
              <TabsTrigger value="devices">Devices</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {QUICK_REF_CARDS.map((card) => (
                  <Card key={card.id} className={`border-l-4 ${card.color}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <card.icon className="h-5 w-5 text-primary" />
                          {card.title}
                        </CardTitle>
                        <div className="flex gap-1 print:hidden">
                          <Button size="sm" variant="ghost" onClick={() => handleDownload(card)}>
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}>
                            <Printer className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="print:pt-0">
                      <div className="space-y-4">
                        {card.items.map((item, i) => (
                          <div key={i}>
                            <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="safety" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {QUICK_REF_CARDS.filter(c => ['password', 'wifi', 'email', 'scams'].includes(c.id)).map((card) => (
                  <Card key={card.id} className={`border-l-4 ${card.color}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <card.icon className="h-5 w-5 text-primary" />
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="print:pt-0">
                      <div className="space-y-4">
                        {card.items.map((item, i) => (
                          <div key={i}>
                            <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devices" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {QUICK_REF_CARDS.filter(c => ['phone', 'browsing'].includes(c.id)).map((card) => (
                  <Card key={card.id} className={`border-l-4 ${card.color}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <card.icon className="h-5 w-5 text-primary" />
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="print:pt-0">
                      <div className="space-y-4">
                        {card.items.map((item, i) => (
                          <div key={i}>
                            <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-muted/50">
            <CardContent className="py-6">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Want to learn more?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                These quick reference cards give you the essentials. For detailed step-by-step guides on each topic, visit our full guides section.
              </p>
              <Button asChild>
                <a href="/guides">Browse All Guides</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
