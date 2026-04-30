import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export default function HomeSecurityChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Security Checklist for Seniors | TekSure" description="Complete home security checklist for seniors. Free and low-cost steps to secure your home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Security Checklist</h1>
          <p className="text-lg text-muted-foreground">Free and low-cost steps to stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free steps — do today</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock doors when home — not just when leaving.</li>
              <li>Don&apos;t advertise vacations on social media.</li>
              <li>Get to know neighbors — look out for each other.</li>
              <li>Don&apos;t open door for unannounced strangers.</li>
              <li>Keep porch light on a timer.</li>
              <li>Trim bushes near windows — no hiding spots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Under $100 upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Door reinforcement kit — kick-proof the door.</li>
              <li>Sliding door bar — prevents patio door opening.</li>
              <li>Window locks — add to older windows.</li>
              <li>Motion sensor night lights indoors — fall prevention.</li>
              <li>Outdoor solar motion lights — deter intruders.</li>
              <li>Doorbell camera — see who&apos;s there without opening.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Doors + locks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Deadbolt on every exterior door.</li>
              <li>No spare key under mat or flower pot.</li>
              <li>Smart lock or code lock — no keys to lose.</li>
              <li>Peephole or doorbell camera — see callers.</li>
              <li>Door chain for answering safely.</li>
              <li>Replace hollow-core doors with solid wood.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock all windows when not home.</li>
              <li>Window sensors alert if opened.</li>
              <li>Security film makes glass harder to break.</li>
              <li>Ground-floor windows extra important.</li>
              <li>Don&apos;t leave valuables visible from windows.</li>
              <li>Curtains or blinds at night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lights + appearance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Timers on indoor lights when away.</li>
              <li>Outdoor motion lights — all entry points.</li>
              <li>Collect mail daily or pause delivery.</li>
              <li>Have neighbor park in driveway when traveling.</li>
              <li>Don&apos;t let newspapers or packages pile up.</li>
              <li>Lawn maintained — occupied appearance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alarm + cameras</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visible alarm signs deter burglars.</li>
              <li>Even fake cameras have deterrent effect.</li>
              <li>SimpliSafe or Ring Alarm — no contract options.</li>
              <li>Doorbell camera — see + talk to anyone at door.</li>
              <li>Back yard camera — blind spot coverage.</li>
              <li>Share camera access with adult children.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to police too</h3>
            <p className="text-sm text-muted-foreground">Many local police departments offer free home security assessments for seniors. An officer will walk through your home and identify vulnerabilities at no cost. Call your non-emergency police line and ask about the program. Also register with your local utility company&apos;s medical alert priority list — if power goes out, they restore yours first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
