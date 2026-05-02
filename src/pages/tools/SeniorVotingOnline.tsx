import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function SeniorVotingOnline() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voting Tools for Seniors — Senior Guide" description="Register, request mail-in ballots, find polling places." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voting Tools</h1>
          <p className="text-lg text-muted-foreground">Register and vote with ease.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Register or check</h2><p>Visit vote.org. Verify your voter registration in 2 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Request a mail ballot</h2><p>Most states offer no-excuse absentee. Apply online weeks before election.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Find your polling place</h2><p>Vote.gov or your state Secretary of State website. Type address.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Sample ballot</h2><p>Most state sites show your custom sample ballot. Print and mark before voting.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Track your ballot</h2><p>BallotTrax — see when ballot is mailed, received, and counted.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Election Protection</h2><p>1-866-OUR-VOTE — free, non-partisan help if you have voting problems.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't trust election emails. Real election info comes from .gov sites or postal mail.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
