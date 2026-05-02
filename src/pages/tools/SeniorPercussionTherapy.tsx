import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorPercussionTherapy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Percussion Therapy for Seniors — TekSure" description="Percussion massage devices for seniors — gentler than massage guns." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Percussion Therapy</h1>
          <p className="text-lg text-muted-foreground">Gentle alternative to massage guns.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vs massage guns</h2><p>Lighter. Quieter. Gentler. Better for delicate senior muscles.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">HoMedics Pro</h2><p>$50. Light. Easy on senior hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Brookstone</h2><p>$60. Long handle. Reach back without help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Heated wand</h2><p>Some include heat. Combo benefit. $80-$120.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Foam roller alternative</h2><p>$15-$30 foam roller. Lay on it. Cheaper, often equally effective.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t overdo</h2><p>5-10 minutes max per area. Bruising possible if too long.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use after walks. Prevents next-day soreness.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
