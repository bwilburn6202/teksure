import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function SeniorVeteransOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Veterans Online — Senior Guide" description="Online tools for US veterans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Award className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Veterans Online</h1>
          <p className="text-lg text-muted-foreground">VA help on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. VA.gov account</h2><p>Access benefits, claims, health records. Sign in with Login.gov or ID.me.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Disability claim</h2><p>File at va.gov/disability. Track every step. Upload evidence digitally.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Education benefits</h2><p>Use the GI Bill Comparison Tool. Find approved schools.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Home loans</h2><p>Apply for VA Certificate of Eligibility online. Saves a phone tag with the lender.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Burial benefits</h2><p>Plan ahead. Apply for cemetery, headstone, presidential memorial certificates.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Crisis line</h2><p>Veterans Crisis Line: dial 988, press 1. 24/7 free support. Confidential.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't pay anyone to help with VA claims. Free help from VFW, American Legion, DAV.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
