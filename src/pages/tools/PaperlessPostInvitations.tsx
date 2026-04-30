import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MailOpen } from 'lucide-react';

export default function PaperlessPostInvitations() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paperless Post + Evite for Seniors | TekSure" description="Send beautiful digital invitations + RSVPs. Paperless Post and Evite for senior hosts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MailOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Invitations</h1>
          <p className="text-lg text-muted-foreground">Beautiful invites. Easy RSVPs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paperless Post</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium digital invitations.</li>
              <li>Beautiful designer templates.</li>
              <li>Free Flyer style or premium designs.</li>
              <li>Coins system — pay per send.</li>
              <li>Track RSVPs automatically.</li>
              <li>Best for elegant events.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Evite (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with ads.</li>
              <li>$50/year ad-free Evite Pro.</li>
              <li>Casual + festive templates.</li>
              <li>Track RSVPs.</li>
              <li>Most users — your guests likely know it.</li>
              <li>Best for casual gatherings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use digital invitations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Casual parties, BBQs, gatherings.</li>
              <li>Family reunion invites.</li>
              <li>Birthday parties.</li>
              <li>Anniversary celebrations.</li>
              <li>Save money + time vs paper.</li>
              <li>Auto-track who&apos;s coming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use paper</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Weddings — still traditional.</li>
              <li>Formal events.</li>
              <li>Older generation that doesn&apos;t check email.</li>
              <li>Save the dates with photos.</li>
              <li>Combine — paper + digital RSVP card.</li>
              <li>Mix works for most senior events.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Punchbowl — Evite alternative.</li>
              <li>Eventbrite — for ticketed events.</li>
              <li>Facebook Events — free, casual.</li>
              <li>Email blast — simplest.</li>
              <li>Use Google Forms for free RSVP.</li>
              <li>Many free options for any budget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for success</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Send invites 4–6 weeks ahead.</li>
              <li>Reminder send 1 week before.</li>
              <li>Include all event details clearly.</li>
              <li>Set RSVP deadline.</li>
              <li>Follow up by phone for non-responders.</li>
              <li>Have older guests&apos; phone numbers as backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Evite for casual events</h3>
            <p className="text-sm text-muted-foreground">For most senior events — birthday parties, anniversary celebrations, family reunions — free Evite is plenty. Beautiful templates, easy RSVP tracking, free for unlimited sends. Save Paperless Post Coins for elegant events. For weddings or formal occasions, stick with traditional paper invitations. Mix and match based on event formality.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
