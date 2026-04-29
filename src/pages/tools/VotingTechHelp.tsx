import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Vote } from 'lucide-react';

export default function VotingTechHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voting Tech Help — Register, Vote, Track | TekSure" description="Register to vote, find polling place, track your ballot. Plain-English picks for free official voting websites and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Vote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voting Tech Help</h1>
          <p className="text-lg text-muted-foreground">Make voting simple. Use official sites only.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trusted official sites only</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vote.gov</strong> — federal site. Links to all 50 state voter info.</li>
              <li><strong>Vote411.org</strong> — League of Women Voters. Nonpartisan ballot guide by zip.</li>
              <li><strong>Your Secretary of State website</strong> — search "[state] secretary of state".</li>
              <li><strong>Ballotpedia.org</strong> — nonpartisan info on candidates + measures.</li>
              <li><strong>Avoid</strong> sketchy "voter info" sites — many are partisan or scams.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Register to vote</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>vote.gov</strong>.</li>
              <li>Pick your state.</li>
              <li>Online registration in 41 states (need driver license or state ID).</li>
              <li>Other states — print, mail, or in-person at DMV / library.</li>
              <li>Deadline varies by state — usually 15-30 days before election.</li>
              <li>Re-register if you moved, changed name.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find polling place + ballot</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search "[your state] polling place lookup" + your zip.</li>
              <li>Vote411.org — sample ballot for your zip.</li>
              <li>Many states show ballot in the official voter portal.</li>
              <li>Photo ID required in 36 states — check yours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail-in / absentee voting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>9 states send ballot to all registered voters automatically.</li>
              <li>Other states — request "absentee" or "mail-in" ballot online or by mail.</li>
              <li>Many states allow seniors 65+ to vote by mail without reason.</li>
              <li>Mail back EARLY — at least 1 week before election day.</li>
              <li>Track your ballot at "[state] ballot tracker".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior / accessibility help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Curbside voting</strong> — most polling places. Stay in car, ask poll worker.</li>
              <li><strong>Free rides</strong> — League of Women Voters, Lyft/Uber free rides on Election Day in many cities.</li>
              <li><strong>Accessible voting machines</strong> — every polling place required to have one.</li>
              <li><strong>Permanent absentee status</strong> — many states. Apply once, vote by mail forever.</li>
              <li><strong>Help filling ballot</strong> — bring trusted family member, OR ask poll worker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voting myths to ignore</h3>
            <p className="text-sm text-muted-foreground">"You need to bring proof of address." — Only some states. "Mail-in ballots aren&apos;t safe." — They are. Tracked, signed, signature-verified. "You&apos;ll get arrested if there&apos;s an error." — No. Election workers fix mistakes. Check your state&apos;s OFFICIAL site for facts.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
