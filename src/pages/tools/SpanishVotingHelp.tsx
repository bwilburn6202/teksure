import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Vote } from 'lucide-react';

export default function SpanishVotingHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spanish Voting Help | Ayuda Para Votar en Español | TekSure" description="Vote in Spanish. Plain-English (and Spanish) guide to bilingual ballots, registration, and voting rights." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Vote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spanish Voting Help</h1>
          <p className="text-lg text-muted-foreground">Vote in your language.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal language law</h2>
            <p className="text-sm">Voting Rights Act Section 203 — counties with significant Spanish-speaking populations MUST provide Spanish ballots, voting instructions, and oral assistance. <strong>Free, federal right.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vote in Spanish — official sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vote.gov en Español</strong> — federal voter info.</li>
              <li><strong>Vote411.org español</strong> — League of Women Voters bilingual ballot guide.</li>
              <li><strong>NALEO Educational Fund</strong> — naleo.org. Spanish-language voter info hotline 1-888-VE-Y-VOTA (1-888-839-8682).</li>
              <li><strong>State Secretary of State website</strong> — most have Spanish version.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">At the polls — your rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right to bring ANY person to help you vote (except boss/union rep).</li>
              <li>Right to ask for Spanish ballot if county provides.</li>
              <li>Right to ask for Spanish-speaking poll worker.</li>
              <li>Right to provisional ballot if name not in book.</li>
              <li>Right to vote even if line stretches past closing time (if you&apos;re in line by closing).</li>
              <li>Federal observers + non-partisan election protection volunteers can help if issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Help hotlines (Spanish)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-888-VE-Y-VOTA (NALEO)</strong> — Spanish voter help hotline.</li>
              <li><strong>1-888-839-8682</strong> — same number, easier to dial.</li>
              <li><strong>1-866-MI-VOTO-1</strong> — Election protection in Spanish.</li>
              <li>Both free, both real-time help during voting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Para abuelos votantes</h3>
            <p className="text-sm text-muted-foreground">Si tu abuelo o abuela necesita ayuda — ¡puedes acompañarles a la urna! Es legal traer un familiar de confianza. Federal law says any voter can bring an assistant. Don&apos;t skip voting due to language barrier.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
