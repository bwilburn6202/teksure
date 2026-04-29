import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

export default function EthicalWillTemplate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ethical Will Template | TekSure" description="Pass on values + lessons. Plain-English ethical will guide for seniors with templates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScrollText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ethical Will Template</h1>
          <p className="text-lg text-muted-foreground">Your legal will divides money. Ethical will divides wisdom.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What&apos;s an ethical will?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NOT legally binding.</li>
              <li>Personal letter to family + future generations.</li>
              <li>Shares values, lessons, hopes.</li>
              <li>Tradition dating to ancient times.</li>
              <li>Often more meaningful than legal will.</li>
              <li>Can be written or video-recorded.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sections to include</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Opening</strong> — &quot;Dear family, I want to share...&quot;</li>
              <li><strong>What I&apos;ve learned</strong> — top 5 life lessons.</li>
              <li><strong>Values that mattered</strong> — what I tried to live by.</li>
              <li><strong>People who shaped me</strong> — gratitude.</li>
              <li><strong>Family stories I want preserved</strong>.</li>
              <li><strong>What I want for you</strong> — hopes for descendants.</li>
              <li><strong>Lessons from regrets</strong>.</li>
              <li><strong>Final blessing</strong> — words to close.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sample prompts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;I am grateful for...&quot;</li>
              <li>&quot;Things I learned the hard way...&quot;</li>
              <li>&quot;What I wish I&apos;d known at 30...&quot;</li>
              <li>&quot;The family traditions worth keeping...&quot;</li>
              <li>&quot;I forgive...&quot;</li>
              <li>&quot;I&apos;m sorry for...&quot;</li>
              <li>&quot;I love you because...&quot;</li>
              <li>&quot;I hope you...&quot;</li>
              <li>Each prompt = paragraph or section.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Length + format</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2-10 pages typical.</li>
              <li>Short = more likely to be read repeatedly.</li>
              <li>One letter to all OR letters to each child/grandchild.</li>
              <li>Handwritten more personal — but typed easier to read decades later.</li>
              <li>Update yearly.</li>
              <li>Date it.</li>
              <li>Sign with personal note.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep + share</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Give copies NOW (don&apos;t wait until you&apos;re gone).</li>
              <li>Read at family gathering.</li>
              <li>Keep with legal documents.</li>
              <li>Tell estate executor.</li>
              <li>Some share at 80th birthday party.</li>
              <li>Or store with instructions to read after passing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>celebrationsoflife.net</strong> — free templates. <strong>&quot;Ethical Wills&quot; book by Barry Baines</strong> — examples + framework. <strong>StoryWorth</strong> + <strong>Remento</strong> — services help capture similar content. Many synagogues, churches, hospices offer ethical-will writing workshops.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
