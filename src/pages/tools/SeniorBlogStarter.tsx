import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorBlogStarter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Start a Blog as a Senior — TekSure" description="Free blogging platforms for seniors — WordPress, Substack, Medium." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Start a Blog as a Senior</h1>
          <p className="text-lg text-muted-foreground">Share your story. Earn or just enjoy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Substack</h2><p>FREE. Newsletter format. Email subscribers. Senior-popular.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medium</h2><p>FREE. Big audience. Earn through Partner Program (small income).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">WordPress.com</h2><p>FREE basic. $4/month for custom domain. Most flexible.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Topics seniors love</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Memoirs</li><li>Travel</li><li>Recipes</li><li>Genealogy</li><li>Career advice</li><li>Grandparenting</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Earnings</h2><p>Some bloggers earn $0. Others $1,000+/month. Depends on consistency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2 posts/week</h2><p>Consistent posting builds an audience. Even 100 readers can be life-changing.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Voice-typing makes blogging easier. Speak first, edit second.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
