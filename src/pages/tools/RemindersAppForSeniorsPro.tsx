import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function RemindersAppForSeniorsPro() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Reminders Pro for Seniors | TekSure" description="Master Reminders app. Senior memory aid + tasks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reminders Pro</h1>
          <p className="text-lg text-muted-foreground">Senior memory aid.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice add</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Remind me to call Mary tomorrow 10am.&quot;</li><li>&quot;Remind me when I get home.&quot;</li><li>Location-based.</li><li>Senior easy.</li><li>Free.</li><li>Hands-free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lists</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Groceries.</li><li>Pharmacy.</li><li>Daily routine.</li><li>Senior categorize.</li><li>Free.</li><li>Multiple lists.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Location-based</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Remind at grocery store.</li><li>When arrive home.</li><li>When leave house.</li><li>Senior geo-magic.</li><li>Free.</li><li>iPhone GPS.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recurring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Daily medications.</li><li>Weekly trash day.</li><li>Monthly bills.</li><li>Senior memory aid.</li><li>Set + forget.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Shared list adult kid + senior.</li><li>Both add items.</li><li>Senior groceries kids see.</li><li>Free.</li><li>Coordinate care.</li><li>Best feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Photo reminders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add photo to reminder.</li><li>&quot;Get this brand of milk.&quot;</li><li>Senior visual.</li><li>Forget no more.</li><li>Free.</li><li>Multi-modal.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">&quot;Hey Siri remind me&quot; = senior memory</h3><p className="text-sm text-muted-foreground">Voice add reminders senior easiest. Location-based — &quot;remind me at pharmacy.&quot; Recurring meds. Family-shared lists for caregiving coordination. Photo attached. Free. Most senior-helpful iPhone app for memory aid. Use daily.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
