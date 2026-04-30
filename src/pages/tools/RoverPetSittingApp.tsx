import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dog } from 'lucide-react';

export default function RoverPetSittingApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rover Pet Sitting for Seniors | TekSure" description="Find trusted pet sitters and dog walkers through Rover. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rover</h1>
          <p className="text-lg text-muted-foreground">Trusted pet sitters and dog walkers near you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Rover?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App + website connecting pet owners with sitters.</li>
              <li>Largest pet-sitting platform in the US.</li>
              <li>Find dog walkers, sitters, boarding, daycare.</li>
              <li>Read reviews from previous clients.</li>
              <li>Communicate, pay, and review through app.</li>
              <li>Background-checked sitters available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Services available</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Boarding — dog stays at sitter&apos;s home.</li>
              <li>House sitting — sitter stays at your home.</li>
              <li>Drop-in visits — short check-ins, feeding, potty.</li>
              <li>Doggy day care — daytime only.</li>
              <li>Dog walking — scheduled or on-demand.</li>
              <li>Cat sitting via drop-in visits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Boarding — $35–$75/night per dog.</li>
              <li>House sitting — $50–$100/night.</li>
              <li>Drop-in visits — $15–$25 per visit.</li>
              <li>Daycare — $25–$50/day.</li>
              <li>Dog walking — $15–$25 per walk.</li>
              <li>Sitters set their own rates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Booking safely</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read all reviews — focus on multiple recent ones.</li>
              <li>Look for &quot;Star Sitter&quot; badge.</li>
              <li>Request meet-and-greet before booking.</li>
              <li>Free meet-and-greet — sitter visits your home.</li>
              <li>Trust your instincts — pets too.</li>
              <li>Always book through Rover for insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily photo updates from sitter.</li>
              <li>Sitter takes pet out for daily walks.</li>
              <li>Reduces caregiver burden.</li>
              <li>Cheaper than kennel boarding usually.</li>
              <li>Pet stays in home environment.</li>
              <li>Helpful when temporarily disabled.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other pet care options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wag — similar app, dog-walking focused.</li>
              <li>Care.com — also has pet sitters.</li>
              <li>Local nonprofit pet pantries — emergency pet food.</li>
              <li>Vet schools — discounted veterinary care.</li>
              <li>Pets Are Worth Saving (PAWS) — pet care assistance.</li>
              <li>Local rescues sometimes have emergency funds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one drop-in visit first</h3>
            <p className="text-sm text-muted-foreground">Before booking a multi-day stay, try a single $20 drop-in visit while you&apos;re home. See how the sitter interacts with your pet, how communication works through the app, and how detailed the photo updates are. If it goes well, book longer stays with confidence.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
