import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function SeniorAncestryApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Genealogy Apps for Seniors — TekSure" description="Trace your family tree — Ancestry, FamilySearch, MyHeritage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TreePine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Genealogy for Seniors</h1>
          <p className="text-lg text-muted-foreground">Trace your family history.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ancestry.com</h2><p>$25/month. 30+ billion records. Best for US family history.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FamilySearch</h2><p>FREE. Run by LDS Church. Excellent worldwide records.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyHeritage</h2><p>$15/month. Strong for European records. AI photo restoration tool.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DNA test</h2><p>AncestryDNA $99 ($59 on sale). Connect to family tree. Find unknown relatives.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library access</h2><p>Most libraries offer FREE Ancestry access on library computers. Save the $25/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Decide if you want your tree public. Private trees are still searchable by you.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Interview your oldest relative now. Their stories disappear forever otherwise.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
