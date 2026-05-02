import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorEyeExercises() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Exercise Apps — Senior Guide" description="Apps for eye health and exercises." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Exercises</h1>
          <p className="text-lg text-muted-foreground">Reduce eye strain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. 20-20-20 rule</h2><p>Every 20 minutes, look at something 20 feet away for 20 seconds.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Time Out app</h2><p>Free Mac app. Reminds you to take eye breaks every 20 min.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Eye Care Plus</h2><p>$5. Guided eye exercises. Track sight over time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Blink reminder</h2><p>We blink less at screens. Conscious blinking prevents dry eyes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Eye lubricant drops</h2><p>Doctor-recommended drops. Use before screen sessions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Exercise apps mostly</h2><p>Don't expect apps to improve vision. Strain reduction yes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Sudden vision changes? Don't wait. See an eye doctor immediately. May be detached retina.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
