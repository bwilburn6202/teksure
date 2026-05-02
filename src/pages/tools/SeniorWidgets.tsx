import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

export default function SeniorWidgets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Widgets for Seniors — TekSure" description="Add useful widgets to home screen — weather, calendar, photos, family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutGrid className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Widgets for Seniors</h1>
          <p className="text-lg text-muted-foreground">Important info at a glance.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add widget (iPhone)</h2><p>Long-press home screen → tap +. Pick widget. Drag to size.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add widget (Android)</h2><p>Long-press home screen → Widgets. Drag favorite to home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Weather (today + week)</li><li>Calendar (today&apos;s events)</li><li>Reminders</li><li>Family photo (rotates)</li><li>Battery level</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo widget</h2><p>Adds rotating family photos. See loved ones each time you unlock phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big widgets = easier</h2><p>Use largest size widgets. Easier to read for senior eyes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lock screen widgets</h2><p>iPhone iOS 16+. See temperature without unlocking. Great for quick checks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Replace one app icon with weather widget. Useful info always visible.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
