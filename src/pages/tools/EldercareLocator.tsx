import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function EldercareLocator() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Eldercare Locator & Area Agency on Aging | TekSure" description="The single most important free senior resource you&apos;ve probably never used. Plain-English guide to Eldercare Locator and Area Agency on Aging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Eldercare Locator</h1>
          <p className="text-lg text-muted-foreground">The single most useful free senior resource. Use it.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What it is</h2>
            <p className="text-sm">A free federal service connecting older adults and caregivers to local services — meals, transportation, legal help, caregiver support, in-home help, exercise programs.</p>
            <p className="text-sm mt-2"><strong>Eldercare Locator: 1-800-677-1116</strong> or <strong>eldercare.acl.gov</strong>. Type your zip code, get connected to YOUR local Area Agency on Aging.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What your local Area Agency on Aging helps with</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SNAP food benefits</strong> — help applying.</li>
              <li><strong>Meals on Wheels</strong> — home-delivered meals.</li>
              <li><strong>Senior center meals</strong> — congregate meals at low cost.</li>
              <li><strong>Transportation</strong> — to doctor, grocery, senior center.</li>
              <li><strong>Caregiver support</strong> — respite, training, support groups.</li>
              <li><strong>In-home services</strong> — help with bathing, cleaning.</li>
              <li><strong>Energy assistance (LIHEAP)</strong>.</li>
              <li><strong>Legal services</strong> — free or low-cost wills, advance directives.</li>
              <li><strong>SHIP Medicare counseling</strong> — free unbiased Medicare advice.</li>
              <li><strong>Long-term care ombudsman</strong> — for nursing home complaints.</li>
              <li><strong>Adult Protective Services</strong> — abuse / neglect reports.</li>
              <li><strong>Senior fitness programs</strong> — many free.</li>
              <li><strong>Tax-Aide locations</strong>.</li>
              <li><strong>Veterans benefits help</strong>.</li>
              <li><strong>Specifically for your county</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You\'re feeling overwhelmed by caregiving.</li>
              <li>A parent is becoming unsafe at home.</li>
              <li>You don\'t know what programs exist.</li>
              <li>You\'re trying to keep someone in their home longer.</li>
              <li>You need transportation to doctor appointments.</li>
              <li>Money is tight and you wonder what aid exists.</li>
              <li>You need help finding a good nursing home or assisted living.</li>
              <li>You want to volunteer to help other seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other key federal hotlines</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Eldercare Locator:</strong> 1-800-677-1116</li>
              <li><strong>Adult Protective Services / Elder Abuse:</strong> 1-800-677-1116 (refers locally)</li>
              <li><strong>Medicare:</strong> 1-800-MEDICARE</li>
              <li><strong>Social Security:</strong> 1-800-772-1213</li>
              <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233</li>
              <li><strong>988 — Suicide & Crisis Lifeline</strong></li>
              <li><strong>211 — local human services in any US area</strong></li>
              <li><strong>VA Benefits:</strong> 1-800-827-1000</li>
              <li><strong>Friendship Line for Older Adults:</strong> 1-800-971-0016 (24/7 just to talk)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most underused resource in America</h3>
            <p className="text-sm text-muted-foreground">Most seniors and family caregivers don\'t know the Area Agency on Aging exists. It\'s funded by federal Older Americans Act money. Free, no income test for many services. Call them ONCE and ask "what programs am I eligible for in my zip code?". You\'ll often discover thousands in benefits you didn\'t know existed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
