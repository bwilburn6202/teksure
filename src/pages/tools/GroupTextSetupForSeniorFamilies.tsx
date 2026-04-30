import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function GroupTextSetupForSeniorFamilies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Group Text Setup for Senior Families | TekSure" description="Family group chat setup for seniors. Coordinate easily." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Group Texts</h1>
          <p className="text-lg text-muted-foreground">Coordinate, share, connect.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why group texts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Holiday planning.</li><li>Birthday wishes.</li><li>Photo sharing.</li><li>Health updates.</li><li>Everyone stays in loop.</li><li>One message, all see.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Create group</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Messages.</li><li>Tap compose.</li><li>Add multiple contacts.</li><li>Type first message.</li><li>Send.</li><li>Group is created.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Name group</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap top of group.</li><li>Tap Info.</li><li>Add name (&quot;Smith Family&quot;).</li><li>Add photo.</li><li>Easier to find.</li><li>Senior organized.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mute too busy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap Info.</li><li>Hide Alerts on.</li><li>Still see messages.</li><li>No constant pings.</li><li>Check on your time.</li><li>Senior peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Reply to one</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press their message.</li><li>Tap Reply.</li><li>Reply only to that.</li><li>Threads conversations.</li><li>Senior less confusion.</li><li>iMessage feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Etiquette</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t reply &quot;K&quot; to all.</li><li>Photos welcome.</li><li>Don&apos;t forward chains.</li><li>Big news = private text.</li><li>Be patient with seniors.</li><li>Family connection.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family group text = daily connection</h3><p className="text-sm text-muted-foreground">Family group texts replace newsletters + holiday cards as daily senior connection. Photos of grandkids, birthday wishes, holiday planning. Mute alerts if too busy. Reply when ready. Senior-perfect for staying in family loop without overwhelm. Set one up today.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
