import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dna } from 'lucide-react';

const SVCS = [
  { name: 'AncestryDNA', cost: '$60-100', best: 'Largest database = more relative matches.', good: 'Best for matching.' },
  { name: '23andMe', cost: '$100-200', best: 'Health reports + ancestry. Privacy issues recently.', good: 'Best for health.' },
  { name: 'MyHeritage', cost: '$50-90', best: 'Strong in European matches. Cheaper.', good: 'Best for Europe.' },
  { name: 'FamilyTreeDNA', cost: '$80-200', best: 'Y-DNA + mtDNA testing. Deep ancestry.', good: 'Best for deep ancestry.' },
  { name: 'LivingDNA', cost: '$80-150', best: 'British Isles specialist.', good: 'Best for UK ancestry.' },
];

export default function AncestryDNAGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ancestry DNA Guide for Seniors | TekSure" description="Pick the right DNA test. Plain-English guide for senior genealogy + privacy concerns." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dna className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ancestry DNA</h1>
          <p className="text-lg text-muted-foreground">Find roots + relatives. Know what you&apos;re sharing.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior generation matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You&apos;re closest to ancestors — most useful generation.</li>
              <li>Test parents/aunts/uncles BEFORE they pass.</li>
              <li>Older generation reveals branches descendants can&apos;t.</li>
              <li>Your sample = invaluable family record.</li>
              <li>One time test = forever record.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy concerns 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>23andMe was hacked 2023 — millions exposed.</li>
              <li>Most companies share with research (opt out).</li>
              <li>Police use these databases — Golden State Killer caught.</li>
              <li>Even if you don&apos;t test — relative testing reveals you partly.</li>
              <li>Insurance can&apos;t use (GINA Act protects health insurance + employment, NOT life or LTC insurance).</li>
              <li>Read privacy policy before testing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ethnicity estimate (% by region).</li>
              <li>DNA matches — relatives also tested.</li>
              <li>Health risks (23andMe — limited).</li>
              <li>Migration patterns of ancestors.</li>
              <li>Sometimes surprises — adoptions, half-siblings.</li>
              <li>Be prepared for unexpected truths.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maximize results</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Best to test on AncestryDNA (largest database).</li>
              <li>Upload raw DNA to MyHeritage + GEDmatch (free).</li>
              <li>Build family tree on Ancestry.com (free trial).</li>
              <li>Send messages to DNA matches.</li>
              <li>Wait for sales — often 50% off Mother&apos;s Day, Black Friday.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Difficult discoveries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Paternity surprises common.</li>
              <li>Half-siblings from sperm donors.</li>
              <li>Hidden adoptions.</li>
              <li>Different ethnic background than expected.</li>
              <li>Talk to family BEFORE testing.</li>
              <li>Consider therapy support if processing surprises.</li>
              <li><strong>NPE Friends Fellowship</strong> — npefellowship.org. Support group.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free genealogy sources</h3>
            <p className="text-sm text-muted-foreground"><strong>FamilySearch.org</strong> — free, run by LDS Church. Best free resource. <strong>USGenWeb</strong> — free state-level records. <strong>Ellis Island records</strong> — free immigration. Library cards often include ancestry.com access at libraries. Free at libraries makes paid Ancestry membership unnecessary for many.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
