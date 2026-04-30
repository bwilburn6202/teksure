import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dog } from 'lucide-react';

export default function PetSittingIncomeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Sitting Income for Seniors | TekSure" description="Earn money pet sitting through Rover, Care.com. Senior pet lover income guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Sitting Income</h1>
          <p className="text-lg text-muted-foreground">Get paid playing with pets.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Rover platform</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular pet sitting app.</li>
              <li>Sign up free as sitter.</li>
              <li>Background check required.</li>
              <li>Set your rates.</li>
              <li>Boarding, walking, drop-ins.</li>
              <li>Take 20% commission.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flexible — pick your hours.</li>
              <li>Pet visits during day.</li>
              <li>Get paid to walk.</li>
              <li>Build with retirees in your area.</li>
              <li>Many love grandparent-aged sitters.</li>
              <li>Senior reliability appreciated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Income potential</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drop-in visits — $15-$25 each.</li>
              <li>Dog walks — $15-$25.</li>
              <li>Boarding — $40-$70/night per dog.</li>
              <li>$500-$2,500/month part-time.</li>
              <li>More if multi-pet weekends.</li>
              <li>Cash + tips.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wag alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Similar app — slightly different rates.</li>
              <li>Dog-walking focused.</li>
              <li>Sign up both platforms.</li>
              <li>More opportunities.</li>
              <li>Different customers.</li>
              <li>Same idea.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY local</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Care.com — keep more of fee.</li>
              <li>Nextdoor neighborhood ads.</li>
              <li>Word of mouth in retirement community.</li>
              <li>Set own rate.</li>
              <li>Avoid 20% Rover fee.</li>
              <li>Build trust over time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t take aggressive dogs.</li>
              <li>Verify dog meets you first.</li>
              <li>Check dog&apos;s vaccinations.</li>
              <li>Negotiate special needs care extra.</li>
              <li>Insurance through Rover.</li>
              <li>Trust gut feelings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pet lover gold</h3>
            <p className="text-sm text-muted-foreground">If you love pets + need extra income, pet sitting on Rover is genuinely enjoyable work. Get paid to walk dogs + play with pets. Senior reliability sells. Many seniors earn $1,000-$2,000/month part-time. Combined with daily exercise, social interaction, animal love. Win-win retirement work.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
