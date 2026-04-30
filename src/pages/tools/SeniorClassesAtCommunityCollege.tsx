import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { School } from 'lucide-react';

export default function SeniorClassesAtCommunityCollege() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Community College Classes for Seniors | TekSure" description="Free or discounted community college courses for senior students 60+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <School className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Community College</h1>
          <p className="text-lg text-muted-foreground">Cheap or free for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tuition waivers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many states waive tuition for 60+.</li>
              <li>Auditing free in many states.</li>
              <li>Cred for credit possible too.</li>
              <li>Fees still apply ($30-$100).</li>
              <li>Books optional.</li>
              <li>Often space-available basis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">States with free senior</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Maryland — free 60+.</li>
              <li>Florida — free at many.</li>
              <li>Georgia — free 62+.</li>
              <li>Massachusetts — free 60+.</li>
              <li>Texas — free 65+ at many.</li>
              <li>Check your state policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Continuing education</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Non-credit classes for hobbies + interests.</li>
              <li>Photography, computer skills, languages.</li>
              <li>$30-$100 per class typically.</li>
              <li>Senior discount often.</li>
              <li>Mix with younger students.</li>
              <li>Lower commitment than degree program.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audit vs credit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audit — attend, no grade or credit.</li>
              <li>For learning, low pressure.</li>
              <li>Credit — graded + earns credit.</li>
              <li>Toward degree if want.</li>
              <li>Audit usually free for seniors.</li>
              <li>Credit may charge fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online + in-person</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most colleges offer both.</li>
              <li>In-person — social interaction.</li>
              <li>Online — convenience.</li>
              <li>Hybrid — best of both.</li>
              <li>Many seniors prefer in-person.</li>
              <li>Try one of each.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit local community college website.</li>
              <li>Search &quot;senior tuition&quot; or &quot;continuing ed.&quot;</li>
              <li>Or call admissions office.</li>
              <li>Pick a topic that interests you.</li>
              <li>Register for fall or spring.</li>
              <li>First class is the hardest part.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free education in your state</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t pay for online courses if your state offers free community college tuition for seniors. Check policy. Many seniors take 1-2 classes per semester for years — free education + social interaction. Wonderful retirement strategy. Combined with OLLI, your retirement education becomes essentially free + endless.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
