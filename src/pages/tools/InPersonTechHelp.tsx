import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const PLACES = [
  { name: 'Apple Genius Bar (Apple Store)', cost: 'FREE for advice; $$ for repairs', best: 'Best help for iPhone, iPad, Mac. Book at apple.com/retail. Patient, well-trained.', good: 'Free walk-in for advice if not busy.' },
  { name: 'Best Buy Geek Squad', cost: '$Free with Total Tech ($200/yr) or per-visit', best: 'For PC, TV, smart home setup. Strong on home installs.', good: 'Total Tech subscription pays for itself if you have multiple devices.' },
  { name: 'Microsoft Store / Surface Support', cost: 'FREE for Microsoft devices', best: 'Surface laptop / tablet support.', good: 'Most stores closed; phone-only now.' },
  { name: 'Local repair shop', cost: '$$ varies', best: 'Phone screen, battery replacement. Often faster + cheaper than Apple. Vet via Yelp reviews.', good: 'Best for older devices Apple won\'t fix.' },
  { name: 'Public library', cost: 'FREE', best: 'Many libraries have "Tech Tutors" — appointments to help with email, phone, computer basics. Free.', good: 'Most underused resource.' },
  { name: 'Senior center', cost: 'FREE', best: 'Often run free tech classes for older adults.', good: 'Built specifically for seniors.' },
  { name: 'AARP TEK', cost: 'FREE for members', best: 'AARP runs in-person and online tech workshops.', good: 'Free with membership.' },
  { name: 'Adult education at high school / community college', cost: 'Often free or under $50', best: 'Multi-week classes — "iPhone for Beginners", "Photos and Videos", etc.', good: 'For deeper learning.' },
  { name: 'Volunteer "Helping Hands" / Cyber Seniors', cost: 'FREE', best: 'Volunteer programs match seniors with younger tech mentors.', good: 'CyberSeniors.org.' },
];

export default function InPersonTechHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="In-Person Tech Help — Apple Genius, Geek Squad, Library | TekSure" description="When phone calls and YouTube don\'t cut it. Plain-English guide to where to get patient in-person tech help — much of it FREE." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">In-Person Tech Help</h1>
          <p className="text-lg text-muted-foreground">Where to get a real person to sit with you and help.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PLACES.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Genius Bar — most underused</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Book at <strong>apple.com/retail</strong> → pick a store → "Get Help".</li>
              <li>Tell them what you need: "I want help setting up Family Sharing" or "Help me pair AirPods to my hearing aids".</li>
              <li>Bring your iPhone, iPad, or Mac.</li>
              <li>Free 15-minute appointment for ANY question — even non-repair.</li>
              <li>Apple staff genuinely love helping seniors. Patient, no upsell.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Today at Apple" sessions</h2>
            <p className="text-sm">Free in-store classes — Photo basics, iPhone basics, iPad creativity, even music-making. 30-90 minutes. Book at apple.com/today. Best free tech learning available.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For ongoing help</h3>
            <p className="text-sm text-muted-foreground">Best Buy\'s <strong>Total Tech ($200/year)</strong> covers unlimited Geek Squad help — install your TV, set up smart home, fix computer, configure printer. Pays for itself with one big install. Compare to local installer pricing first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
