import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Square } from 'lucide-react';

export default function QuiltingForBeginners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quilting for Beginners | TekSure" description="Start quilting at any age. Plain-English beginner senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Square className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quilting for Beginners</h1>
          <p className="text-lg text-muted-foreground">Heirloom quilts. Patience + simple geometry.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why quilt?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family heirloom potential.</li>
              <li>Use scraps + memory clothing.</li>
              <li>Therapeutic + meditative.</li>
              <li>Creative geometry.</li>
              <li>Gifts treasured for generations.</li>
              <li>Connects to American tradition.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools needed ($150 start)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sewing machine</strong> — basic OK.</li>
              <li><strong>Rotary cutter + mat</strong> ($40).</li>
              <li><strong>Quilting ruler</strong> — clear plastic.</li>
              <li><strong>100% cotton fabric</strong>.</li>
              <li><strong>Cotton batting</strong> — middle layer.</li>
              <li><strong>Quilting thread</strong>.</li>
              <li>Iron + ironing board.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First quilt: Easy 9-patch</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>9 squares per block.</li>
              <li>Cut 5&quot; x 5&quot; squares.</li>
              <li>Sew 3 rows of 3 squares.</li>
              <li>Sew rows together.</li>
              <li>Repeat — make 12-20 blocks.</li>
              <li>Sew blocks into quilt top.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quilt sandwich</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bottom: backing fabric.</li>
              <li>Middle: cotton batting.</li>
              <li>Top: pieced quilt top.</li>
              <li>Pin or baste together.</li>
              <li>Quilt — sew through all 3 layers.</li>
              <li>Bind edges to finish.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — Jenny Doan, Missouri Star.</li>
              <li><strong>Suzy Quilts</strong> — patterns + blog.</li>
              <li><strong>FreeQuiltingPatterns.com</strong>.</li>
              <li><strong>Connecting Threads</strong> — patterns.</li>
              <li><strong>Quilters Newsletter</strong> archives.</li>
              <li>Library — quilting books endless.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quilting groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local quilt guild — most towns.</li>
              <li>Quilt shops — host classes.</li>
              <li>Senior centers — quilting circles.</li>
              <li>Church groups.</li>
              <li>Project Linus — donate to kids.</li>
              <li>Quilt for Veterans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memory quilts</h3>
            <p className="text-sm text-muted-foreground">Most meaningful: cut squares from loved one&apos;s shirts after passing — memory quilt for family. T-shirt quilt from college / sports days. Wedding-dress quilt. Baby clothes quilt for grandchild. Time + love = treasured heirloom.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
