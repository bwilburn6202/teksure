import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SpanishSpeakingSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spanish Tech Support for Seniors | TekSure" description="En español. Plain-English (and Spanish) picks for tech support hotlines for Spanish-speaking seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spanish Tech Support</h1>
          <p className="text-lg text-muted-foreground">Apoyo tecnológico en español.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major company Spanish hotlines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Spanish</strong> — 1-800-MY-APPLE press 4 for Spanish.</li>
              <li><strong>Microsoft Spanish</strong> — 1-800-936-5900 + Spanish option.</li>
              <li><strong>Comcast/Xfinity Spanish</strong> — 1-855-765-8961.</li>
              <li><strong>Verizon Wireless Spanish</strong> — 1-866-686-7349.</li>
              <li><strong>AT&amp;T Spanish</strong> — 1-800-870-5855.</li>
              <li><strong>T-Mobile Spanish</strong> — 1-877-746-0909.</li>
              <li><strong>Best Buy Geek Squad</strong> — bilingual techs in many areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spanish-language help organizations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP en Español</strong> — aarp.org/espanol. Articles, tools.</li>
              <li><strong>Senior Planet en Español</strong> — free senior tech classes online.</li>
              <li><strong>Latinas Aging Services</strong> — local communities offer Spanish tech help.</li>
              <li><strong>Local libraries</strong> — many have bilingual tech help volunteers.</li>
              <li><strong>Catholic / community church</strong> — often have Spanish tech volunteers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone in Spanish</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → General → Language &amp; Region → iPhone Language → Spanish.</li>
              <li>Phone restarts in Spanish.</li>
              <li>Siri also speaks Spanish.</li>
              <li>All apps that support Spanish auto-switch.</li>
              <li>Add Spanish keyboard: Settings → General → Keyboard → Add New Keyboard.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real-time translation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Translate</strong> — built-in. Voice + camera + conversation.</li>
              <li><strong>Google Translate</strong> — free. Camera translates signs in real-time.</li>
              <li><strong>iPhone Live Captions</strong> — auto-captions any audio in Spanish (and translates).</li>
              <li><strong>Microsoft Translator</strong> — multi-person conversations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Para abuelos</h3>
            <p className="text-sm text-muted-foreground">Si su abuelo o abuela necesita ayuda con el teléfono — los recursos de arriba están en español. AARP en Español es excelente. Su biblioteca local probablemente tiene voluntarios bilingües. ¡Pregunte!</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
