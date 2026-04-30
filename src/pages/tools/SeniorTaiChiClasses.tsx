import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function SeniorTaiChiClasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tai Chi for Senior Balance + Wellness | TekSure" description="Tai chi for falls prevention + senior wellness. Apps, classes, YouTube channels." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tai Chi</h1>
          <p className="text-lg text-muted-foreground">Best fall-prevention exercise.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why tai chi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strongest research for fall prevention.</li>
              <li>Improves balance dramatically.</li>
              <li>Gentle on joints.</li>
              <li>Reduces stress + depression.</li>
              <li>Strengthens legs subtly.</li>
              <li>Elegant + meditative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find local classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers offer free.</li>
              <li>Local YMCA classes.</li>
              <li>Park departments — outdoor.</li>
              <li>Hospital wellness programs.</li>
              <li>Tai chi schools — paid but quality.</li>
              <li>Group setting helps motivation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube tai chi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tai Chi Made Easy — beginners.</li>
              <li>Yang Style 24 forms — most popular.</li>
              <li>Senior tai chi specifically.</li>
              <li>Free.</li>
              <li>Cast to TV.</li>
              <li>20-30 minute routines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tai Chi Apps — basic free options.</li>
              <li>Gaia (yoga app) has tai chi sections.</li>
              <li>Glo — paid yoga + tai chi.</li>
              <li>Free YouTube usually best.</li>
              <li>In-person beats apps anyway.</li>
              <li>Try local class first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior research</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NIH studies — significant fall reduction.</li>
              <li>Improved balance after 8 weeks.</li>
              <li>Better sleep.</li>
              <li>Lower blood pressure.</li>
              <li>Depression score improvements.</li>
              <li>Strongest evidence of any exercise for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Getting started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One in-person class to learn form.</li>
              <li>Then practice at home daily.</li>
              <li>10-20 minutes typical.</li>
              <li>Outdoors when weather allows.</li>
              <li>Group practice in parks common.</li>
              <li>Patience — slow movements are point.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best fall prevention</h3>
            <p className="text-sm text-muted-foreground">If fall risk concerns you (and it should after 65), tai chi is the most-evidenced prevention. NIH studies show 8 weeks of practice reduces fall risk significantly. Find local class through senior center or YMCA. Free or low cost. Pair with strength training. Many seniors discover tai chi changes their entire health trajectory.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
