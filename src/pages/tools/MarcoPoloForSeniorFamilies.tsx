import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function MarcoPoloForSeniorFamilies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Marco Polo for Senior Families | TekSure" description="Send video messages to family. Marco Polo app guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Marco Polo</h1>
          <p className="text-lg text-muted-foreground">Video messages, no scheduling.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Video voicemail app.</li><li>Send video, they watch later.</li><li>No scheduled call needed.</li><li>Like FaceTime async.</li><li>Free version.</li><li>Senior + family hit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No scheduling stress.</li><li>Watch when convenient.</li><li>Reply on your time.</li><li>See faces + voices.</li><li>Family group chats.</li><li>Keep close to grandkids.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free download.</li><li>Phone number signup.</li><li>Add family contacts.</li><li>Allow camera + mic.</li><li>Tap to record.</li><li>Tap to play.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family group</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Create group with kids.</li><li>Everyone sees videos.</li><li>Asynchronous chat.</li><li>Grandkids reply when they can.</li><li>Time zone friendly.</li><li>Connection across distance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium ($60/yr)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Effects + filters.</li><li>Faster playback.</li><li>HD video.</li><li>Backwards transcripts.</li><li>Optional.</li><li>Free is plenty.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Good lighting.</li><li>Quiet background.</li><li>Hold phone steady.</li><li>Keep videos short (1-3 min).</li><li>Update grandkids on life.</li><li>Don&apos;t worry about looks.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Best long-distance grandparenting app</h3><p className="text-sm text-muted-foreground">Marco Polo solves grandparent isolation. No more &quot;they&apos;re too busy.&quot; Send 2-min video — grandkids watch while waiting in line. Reply that night. Connection without scheduled call. Many senior families use daily. Free, simple, transformative for distant relationships.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
