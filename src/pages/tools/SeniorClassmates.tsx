import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorClassmates() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Classmates & Reunion Apps — TekSure" description="Reconnect with high school and college friends — Classmates, Facebook, alumni sites." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reconnect with Classmates</h1>
          <p className="text-lg text-muted-foreground">Find old friends.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Classmates.com</h2><p>$5/month. Search high school yearbooks. Find old classmates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Facebook groups</h2><p>FREE. Search &ldquo;[Your School] Class of [Year].&rdquo; Most reunions plan in groups.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alumni websites</h2><p>Most colleges have alumni directories. Free with school login.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LinkedIn</h2><p>Free. Search by school + graduation year. Many people on it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reunite It</h2><p>Free. Specifically for organizing class reunions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gone too soon</h2><p>Sites like findagrave.com help honor classmates who passed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Reach out gently. Many old friends are waiting to hear from you.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
