import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function ISPNegotiationGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ISP Negotiation Guide for Seniors | TekSure" description="Cut Comcast, Verizon, Spectrum bills 30%+. Plain-English negotiation script." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ISP Negotiation</h1>
          <p className="text-lg text-muted-foreground">$30-100/mo savings. 30 min phone call.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why call</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Promo rates expire after 1-2 years.</li>
              <li>Bill quietly increased $20-40/mo.</li>
              <li>Senior often pays 50%+ more than new customers.</li>
              <li>One annual call saves $300-1,200/year.</li>
              <li>Most never call.</li>
              <li>You&apos;re leaving money on table.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-call prep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pull current bill — note speed + monthly amount.</li>
              <li>Research competitor prices (10 min Google).</li>
              <li>Note: T-Mobile Home Internet $50/mo, Verizon Fios promo, etc.</li>
              <li>Know what speeds you&apos;d accept.</li>
              <li>Consider what services you don&apos;t use (cable TV?).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Negotiation script</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call. Ask for &quot;Retention Department.&quot;</li>
              <li>&quot;I&apos;m considering canceling. My bill went from $X to $Y.&quot;</li>
              <li>&quot;Verizon is offering $Z for similar speed. Can you match?&quot;</li>
              <li>If &quot;no&quot; — &quot;What&apos;s the best you can do?&quot;</li>
              <li>If still high — &quot;I&apos;ll think about it&quot; (often, they call back lower).</li>
              <li>Be polite but firm.</li>
              <li>Take notes during call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specific savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comcast/Xfinity</strong> — usually 25-40% reduction.</li>
              <li><strong>Spectrum</strong> — 20-30% reduction.</li>
              <li><strong>Verizon Fios</strong> — locks in for 2 years.</li>
              <li><strong>AT&amp;T</strong> — drop unused services.</li>
              <li>&quot;Senior plan&quot; available on AT&amp;T + Verizon (Fios).</li>
              <li>Cut HBO Max, Showtime add-ons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If they won&apos;t budge</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Switch — actually cancel + go competitor.</li>
              <li>Often, calling cancellation triggers retention offer.</li>
              <li>Real switch is okay — bill drops 30%.</li>
              <li>Cable companies hate losing customers.</li>
              <li>Worst case — switch successful.</li>
              <li>Best case — they finally negotiate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Service alternatives</h3>
            <p className="text-sm text-muted-foreground"><strong>BillCutterz</strong> + <strong>Trim</strong> — services negotiate for you, take % of savings. <strong>Honey</strong> + Trim apps. Or use AI (ChatGPT) to write negotiation letter. Anyway saves $$$. Annual review = $300-1,200/yr in your pocket.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
