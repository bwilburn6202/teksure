import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PROVIDERS = [
  { name: 'CapTel', who: 'Best-known landline captioned phone. Free phone if you qualify.', site: 'https://www.captel.com', phone: '1-800-233-9130' },
  { name: 'ClearCaptions', who: 'Free home phone with caption screen. Pre-screened for hearing-impaired adults.', site: 'https://www.clearcaptions.com', phone: '1-866-868-8695' },
  { name: 'CaptionCall', who: 'Free hearing-impaired captioned phone. Includes installation help.', site: 'https://www.captioncall.com', phone: '1-877-557-2227' },
  { name: 'Hamilton CapTel', who: 'Mobile and landline captioning. Federal program.', site: 'https://www.hamiltoncaptel.com', phone: '1-888-514-7933' },
];

export default function CaptionedPhoneService() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Captioned Phone Service — For Hearing-Impaired Adults | TekSure" description="Trouble hearing on the phone? The federal government pays for captioned phone service for hearing-impaired adults. Free phone, free service. Here's how to qualify." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Captioned Phone Service</h1>
          <p className="text-lg text-muted-foreground">If you struggle to hear on the phone, the government pays for this.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What it is</h2>
            <p className="text-sm mb-2">A captioned telephone has a screen above the keypad. While the other person talks, their words appear on the screen — like subtitles for the call. You read along while you listen.</p>
            <p className="text-sm">It's federally funded by the FCC for adults with hearing loss. The phone is FREE. The service is FREE. There's no monthly cost, no contract.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Do you qualify?</h2>
            <p className="text-sm mb-2">Yes if:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You have hearing loss that makes phone conversations hard.</li>
              <li>You have a regular phone line (most providers) or fast internet (some providers).</li>
              <li>An audiologist, ENT, or other hearing professional fills out a one-page form. Some providers accept self-certification too.</li>
            </ul>
            <p className="text-sm mt-3">No income limits. No insurance needed.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top providers (all free, all FCC-certified)</h2>
            <div className="space-y-3">
              {PROVIDERS.map(p => (
                <div key={p.name} className="border-l-4 border-primary pl-3">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{p.who}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Button asChild variant="outline" size="sm"><a href={p.site} target="_blank" rel="noopener noreferrer">Website <ExternalLink className="w-3 h-3 ml-1" /></a></Button>
                    <Button asChild variant="outline" size="sm"><a href={`tel:${p.phone.replace(/\D/g, '')}`}>{p.phone}</a></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How signup works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a provider above. Call or visit their website.</li>
              <li>They'll mail you a one-page hearing-loss certification form. Bring it to your audiologist, ENT doctor, or even your primary care doctor — they sign it.</li>
              <li>Mail or upload the form back.</li>
              <li>The provider ships you a captioned phone — usually free shipping.</li>
              <li>Plug it into your home phone jack (or for some providers, your home internet).</li>
              <li>Most providers offer free in-home installation help if you ask.</li>
            </ol>
            <p className="text-sm mt-3">Total time: usually 2-3 weeks from call to phone working.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don't have a landline?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>iPhone:</strong> turn on Live Captions for phone calls — Settings → Accessibility → Live Captions. Free, built in.</li>
              <li><strong>Android:</strong> Live Caption works on phone calls on most Pixel and newer Samsung phones. Press volume → tap captions icon.</li>
              <li><strong>Hamilton CapTel app</strong> for iPhone and Android — captions any cell phone call. Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Many people put off getting one of these because "it sounds like too much trouble". One phone call to a provider gets the ball rolling — they walk you through everything. The phone changes daily life for people who can't easily hear callers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
