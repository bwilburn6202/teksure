import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorEyeExamApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eye Exam Apps for Seniors — Senior Guide" description="Online vision tests and eye care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eye Exam Apps</h1>
          <p className="text-lg text-muted-foreground">Vision testing on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Warby Parker app</h2><p>Free vision check. Renew glasses prescription if not changed much.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. EyeQue</h2><p>$30 device + free app. Tests refraction at home. Doctor reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Real exam every year</h2><p>App tests can't replace dilated exams. Cataracts, glaucoma need real doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Eye drops reminders</h2><p>If on glaucoma drops, set phone alarms.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Optical apps</h2><p>1-800 Contacts, Warby Parker. Order glasses at home. Try-on with phone camera.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Medicare vision</h2><p>Original Medicare has limited vision benefits. Medicare Advantage often includes glasses.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Annual dilated exam is critical 60+. Catches cataracts, macular degeneration early.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
