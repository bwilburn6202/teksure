import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

export default function SeniorWoodworkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Woodworking Apps for Seniors — TekSure" description="Plans, tutorials, calculators — Woodworking apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Woodworking Apps</h1>
          <p className="text-lg text-muted-foreground">Plans, tools, calculators.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wood Magazine</h2><p>FREE app. Free plans for senior projects: chairs, shelves, boxes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SketchUp Free</h2><p>FREE. 3D model your project before building.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Construction Master Pro</h2><p>$29. Calculator app for woodworking math. Saves rebuilds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube channels</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Steve Ramsey (beginner-friendly)</li><li>Wood By Wright (hand tools)</li><li>The Wood Whisperer</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior project ideas</h2><p>Birdhouses, jewelry boxes, picture frames. Small projects, big satisfaction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sell on Etsy</h2><p>Handmade wood items sell well. Earn from hobby.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Safety first. Always wear safety glasses. Push sticks save fingers.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
