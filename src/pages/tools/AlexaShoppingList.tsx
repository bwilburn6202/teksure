import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function AlexaShoppingList() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa + Google Shopping List for Seniors | TekSure" description="Voice-add to grocery list. Plain-English voice list guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Shopping List</h1>
          <p className="text-lg text-muted-foreground">Add items by voice. List on phone for shopping.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, add milk to shopping list.&quot;</li>
              <li>&quot;Hey Google, add bread to shopping list.&quot;</li>
              <li>List syncs to phone app.</li>
              <li>Open phone app at store — see list.</li>
              <li>Check off items as buy.</li>
              <li>Family can share list.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup Alexa</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Alexa app.</li>
              <li>Lists → Shopping List.</li>
              <li>Add items by voice anytime.</li>
              <li>View at store on phone.</li>
              <li>Connect AnyList ($10/yr) for nicer interface.</li>
              <li>Or Bring! app — free, popular.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup Google</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Google, add eggs to shopping list&quot; auto-creates.</li>
              <li>Open Google Keep on phone.</li>
              <li>See list there.</li>
              <li>Or Google Home app → Shopping List.</li>
              <li>Share with family for collaborative list.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add items WHEN YOU REMEMBER (cooking, in bath, watching TV).</li>
              <li>No paper lost.</li>
              <li>Always with you (on phone).</li>
              <li>Spouse adds too.</li>
              <li>Categorized by store section in some apps.</li>
              <li>Reminds at store via geofence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best shopping apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AnyList</strong> ($10/yr) — most loved. Best lists.</li>
              <li><strong>Bring!</strong> — free, beautiful.</li>
              <li><strong>Cozi Family Organizer</strong> — list + calendar.</li>
              <li><strong>Google Keep</strong> — free.</li>
              <li><strong>Apple Notes</strong> — free, voice via Siri.</li>
              <li><strong>Reminders</strong> — Apple, free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">More uses</h3>
            <p className="text-sm text-muted-foreground">Multiple lists by voice — &quot;to-do list,&quot; &quot;Costco list,&quot; &quot;hardware store list,&quot; &quot;packing list.&quot; Tell Alexa/Google which list. Voice-add removes effort. Senior life simplifier. Family stays coordinated.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
