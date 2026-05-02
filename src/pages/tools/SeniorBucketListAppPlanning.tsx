import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListTodo } from 'lucide-react';

export default function SeniorBucketListAppPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Bucket List App Planning | TekSure" description="Plan + track bucket list trips. Senior life goals apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListTodo className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bucket List Planning</h1>
          <p className="text-lg text-muted-foreground">Senior life goals.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Notes app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Notes free.</li><li>List dreams.</li><li>Senior add over time.</li><li>Photos attach.</li><li>Free.</li><li>Simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bucketlist app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Premium.</li><li>Visual organize.</li><li>Senior browse ideas.</li><li>Track completed.</li><li>Inspiration.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel categories</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bucket-list trips.</li><li>National parks.</li><li>Cruises.</li><li>International.</li><li>Senior 5-10/year max.</li><li>Plan ahead.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Beyond travel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skills learn.</li><li>Books read.</li><li>Memoir write.</li><li>Volunteer.</li><li>Senior life-rich.</li><li>Don&apos;t limit travel.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Realistic</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Health + budget.</li><li>Senior pace.</li><li>Don&apos;t over-promise.</li><li>Schedule top 3 yearly.</li><li>Mobility considerations.</li><li>Worth honest assess.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedule first one</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bucket list = inaction.</li><li>Senior pick + book.</li><li>This year.</li><li>Don&apos;t wait.</li><li>Health unpredictable.</li><li>Now matters.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Schedule first bucket list = senior actually do</h3><p className="text-sm text-muted-foreground">Senior bucket list = inaction often. Pick top 1-3 + actually book this year. Free Notes app sufficient. Health + budget realistic. Don&apos;t wait — health unpredictable. Travel + skills + writing all valid bucket items. Worth scheduling.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
