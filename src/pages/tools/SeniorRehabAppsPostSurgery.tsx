import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crutch } from 'lucide-react';

export default function SeniorRehabAppsPostSurgery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Rehab Apps Post-Surgery | TekSure" description="Recovery apps for senior knee, hip, shoulder surgery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crutch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rehab Apps Post-Surgery</h1>
          <p className="text-lg text-muted-foreground">Senior recovery.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PT virtual</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hinge Health (insurance often).</li><li>Sword Health.</li><li>Senior at-home PT.</li><li>Free with employer/insurance.</li><li>Studies-backed.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bob and Brad free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube PTs.</li><li>Free post-surgery routines.</li><li>Senior trusted source.</li><li>Knee, hip, shoulder.</li><li>Daily exercises.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">In-person PT first</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare covers.</li><li>Senior 4-12 weeks.</li><li>Critical recovery.</li><li>Don&apos;t skip.</li><li>Apps supplement.</li><li>Real PT essential.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Track progress</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Health steps.</li><li>Daily reps log.</li><li>Senior motivation.</li><li>PT visit show.</li><li>Free.</li><li>Patterns visible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pain mgmt during</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ice + heat alternating.</li><li>Senior careful pain meds.</li><li>Track meds via Medisafe.</li><li>Don&apos;t overdo.</li><li>Communicate doctor.</li><li>Patient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family help apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Lotsa Helping Hands.</li><li>Meal Train.</li><li>CaringBridge updates.</li><li>Senior accept help.</li><li>Free.</li><li>Critical recovery.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">In-person PT + Bob and Brad = senior recovery</h3><p className="text-sm text-muted-foreground">Senior post-surgery: in-person PT (Medicare covers) critical 4-12 weeks. Plus Bob and Brad free YouTube PT supplements. Track via Apple Health. Family help via Lotsa Helping Hands + Meal Train. Insurance Hinge/Sword if available. Don&apos;t skip real PT.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
