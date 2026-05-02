import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dog } from 'lucide-react';

export default function AKCAppForSeniorDogOwners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AKC App for Senior Dog Owners | TekSure" description="American Kennel Club app for senior dog owners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dog className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AKC App</h1>
          <p className="text-lg text-muted-foreground">Senior dog reference.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Breed information.</li><li>Training tips.</li><li>Senior dog reference.</li><li>Health concerns.</li><li>AKC-trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior dog tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Smaller breed easier.</li><li>Adopted senior dog.</li><li>Lower energy.</li><li>House-trained.</li><li>Senior + senior dog match.</li><li>AKC breed selector.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Adopt vs buy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Petfinder shelter dogs.</li><li>Senior dog adoption.</li><li>Often $200 vs $2,000+ breeder.</li><li>Save life.</li><li>House-trained.</li><li>Senior best match.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$60/month.</li><li>Senior dogs vet bills high.</li><li>$1,000+ surgeries common.</li><li>Worth it many.</li><li>Compare plans.</li><li>Pre-existing exclusions.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior dog needs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily walks short.</li><li>Joint supplements.</li><li>Soft bed.</li><li>Senior dog care.</li><li>Vet visits 2x year.</li><li>Senior food.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior shouldn&apos;t</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Limited mobility — small dog only.</li><li>Travel often — boarding cost.</li><li>Apartment — breed matters.</li><li>Senior honest assess.</li><li>Family help available?</li><li>Plan ahead.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Adopt senior dog = senior best match</h3><p className="text-sm text-muted-foreground">Senior + senior dog adoption = best match. Petfinder shelters $200 vs $2,000 breeder. House-trained, lower energy, calmer. Free AKC app for breed reference. Pet insurance $30-$60/mo worth older dogs. Plan vet 2x/year + family help if needed.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
