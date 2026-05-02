import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Refrigerator } from 'lucide-react';

export default function SmartFridgeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Fridges for Seniors | TekSure" description="Samsung + LG smart fridges for senior kitchens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Refrigerator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Fridges</h1>
          <p className="text-lg text-muted-foreground">Senior kitchen tech.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Samsung Family Hub</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$3,000-$5,000.</li><li>Touchscreen door.</li><li>Inside cameras.</li><li>Senior see groceries away.</li><li>Calendar share.</li><li>Music + photos.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Worth it?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mostly gimmicks.</li><li>Same fridge function.</li><li>Senior maybe not.</li><li>Get standard $1,500.</li><li>Save $$$.</li><li>Tech outdates fast.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Useful features</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Door alarm if open.</li><li>Senior memory aid.</li><li>Filter reminders.</li><li>Energy efficient.</li><li>Worth basic smart.</li><li>Not premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Magnet camera</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 fridge cam.</li><li>Smart fridge effect cheap.</li><li>Senior see contents.</li><li>App view.</li><li>Add to existing fridge.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior reality</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Standard fridge fine.</li><li>Save $1,500+.</li><li>Add list app for groceries.</li><li>Free.</li><li>Tech features senior rarely use.</li><li>Skip premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Counter-depth important</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Fits flush cabinets.</li><li>Senior easier reach.</li><li>French door style.</li><li>Bottom freezer.</li><li>Senior worth premium.</li><li>Better than smart features.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Skip $5,000 smart fridge = senior</h3><p className="text-sm text-muted-foreground">Senior $5,000 smart fridge mostly gimmick. Save $1,500 with standard counter-depth French door. Add free grocery app. Or $30 magnet fridge cam if want check contents away. Senior real-life smart features rarely used. Skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
