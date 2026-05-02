import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorMeetupGroups() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meetup for Seniors — Senior Guide" description="Find local groups with Meetup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meetup Groups</h1>
          <p className="text-lg text-muted-foreground">Local interest groups near you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Visit meetup.com. Browse without an account. Sign up to RSVP.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Senior groups</h2><p>Search Senior + your city. Many cities have hiking, book, dining groups for 60+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. RSVP</h2><p>Tap RSVP to attend. Most events are free or under $10.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Common topics</h2><p>Hiking, photography, tech help, board games, cooking, language learning.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Always public</h2><p>First meet at coffee shops, parks, libraries. Tell family where you're going.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free trial</h2><p>Some groups charge a small fee. Most are free thanks to volunteer organizers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Lonely? Try one Meetup a month. Friendships grow with regular attendance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
