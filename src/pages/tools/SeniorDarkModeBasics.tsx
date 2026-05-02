import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SeniorDarkModeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dark Mode for Seniors — TekSure" description="Easy on tired eyes — turn on dark mode on iPhone, Android, and computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dark Mode for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier on tired eyes — especially at night.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone</h2><p>Settings → Display &amp; Brightness → Dark.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android</h2><p>Settings → Display → Dark Theme.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac</h2><p>System Settings → Appearance → Dark.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Windows</h2><p>Settings → Personalization → Colors → Dark.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto switch</h2><p>Set to switch automatically — light during day, dark at sunset.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Battery saver</h2><p>OLED screens use 30-60% less battery in dark mode.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try dark mode for a week. Most seniors say their eyes feel less tired at night.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
