import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function AlexaDropInForSeniorFamilies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa Drop In for Senior Families | TekSure" description="Family member checks in via Alexa. Senior Drop In feature guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa Drop In</h1>
          <p className="text-lg text-muted-foreground">Family check-in.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family says &quot;Alexa Drop In Mom.&quot;</li><li>Two-way audio.</li><li>No senior action needed.</li><li>Like intercom.</li><li>Free.</li><li>Senior independence.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alexa app — Drop In permission.</li><li>Approve family contacts.</li><li>One-time setup.</li><li>Senior ok with audio access.</li><li>Add or remove anytime.</li><li>Privacy controlled.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Falls — family hears.</li><li>Daily wellness check.</li><li>No buttons to press.</li><li>Like family in next room.</li><li>Senior independent + safe.</li><li>Family peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Calling</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alexa Calling — senior answers.</li><li>Drop In — automatic listen.</li><li>Two different.</li><li>Drop In riskier privacy.</li><li>Senior comfort matters.</li><li>Family discusses.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Light ring shows when used.</li><li>Audio chime.</li><li>Senior knows when listening.</li><li>Disable in app.</li><li>Use only trusted family.</li><li>Senior boundary.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best for</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Solo seniors.</li><li>Adult kids worried.</li><li>Mild dementia (with consent).</li><li>Aging in place.</li><li>Senior independence preserved.</li><li>Tech-capable adult kids.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Alexa Drop In = senior aging-in-place magic</h3><p className="text-sm text-muted-foreground">Adult children worried about senior parents living alone — Alexa Drop In = audio check-in anytime. Light ring + chime preserves senior dignity. Falls can be heard. Daily wellness chats. Best aging-in-place tech for $50 Echo Dot.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
