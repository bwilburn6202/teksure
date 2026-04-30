import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hammer } from 'lucide-react';

const RESOURCES = [
  { name: 'Ana White (free)', cost: 'FREE', best: 'Beginner-friendly free plans. Furniture, garden boxes, kids&apos; toys. Most popular site.', good: 'Best free.' },
  { name: 'Wood Magazine Plans Library', cost: '$30/year', best: '2,000+ tested plans. Skill-rated. Step-by-step photos.', good: 'Best paid library.' },
  { name: 'Fine Woodworking', cost: '$35/year', best: 'Higher-end techniques. Joinery, finishing, hand tool projects.', good: 'Best advanced.' },
  { name: 'YouTube — Steve Ramsey, WWMM', cost: 'FREE', best: 'Best free video instruction. "Weekend Woodworker" course is terrific.', good: 'Best video learning.' },
  { name: 'Rockler / Woodcraft / Lee Valley', cost: 'Mostly free downloads', best: 'Tool brand sites with free project plans.', good: 'Best brand resources.' },
  { name: 'r/woodworking, r/BeginnerWoodworking', cost: 'FREE', best: 'Reddit communities. Honest critiques. Great help with stuck projects.', good: 'Best community.' },
];

export default function WoodworkingPlans() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Woodworking Plans — Free &amp; Paid | TekSure" description="Where to find well-tested woodworking plans. Plain-English picks from Ana White (free) to Fine Woodworking and YouTube." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hammer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Woodworking Plans</h1>
          <p className="text-lg text-muted-foreground">Build something today.</p>
        </div>

        <div className="space-y-3 mb-6">
          {RESOURCES.map(r => (
            <Card key={r.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className="text-sm font-semibold text-primary">{r.cost}</span>
                </div>
                <p className="text-sm">{r.best}</p>
                <p className="text-sm text-muted-foreground">{r.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First projects (no fancy tools)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cutting board (just need a saw + sandpaper).</li>
              <li>Bird house.</li>
              <li>Simple bookcase.</li>
              <li>Picture frame.</li>
              <li>Wood crate / planter box.</li>
              <li>Adirondack chair.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tool starter kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drill</strong> ($60) — DeWalt 20V or Ryobi 18V cordless.</li>
              <li><strong>Circular saw</strong> ($80) — DeWalt or Skilsaw.</li>
              <li><strong>Tape measure, square, pencil</strong>.</li>
              <li><strong>Sander</strong> ($40) — random orbit.</li>
              <li><strong>Clamps</strong> — 4 minimum, more is better.</li>
              <li><strong>Eye + hearing protection</strong> — non-negotiable.</li>
              <li>Total: $250-400 to start. Add table saw later ($200-700).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools libraries (free!)</h2>
            <p className="text-sm">Many cities have "tool libraries" — borrow expensive tools (table saw, planer, jointer) for free with a library card. Search "[your city] tool library". Saves $1,000+ before committing to buying.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local makerspace</h3>
            <p className="text-sm text-muted-foreground">Most cities have a makerspace — shared workshop with table saws, lathes, even CNC machines. $30-100/month membership. Learn from neighbors. Way cheaper than buying a full shop yourself. Search "[city] makerspace".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
