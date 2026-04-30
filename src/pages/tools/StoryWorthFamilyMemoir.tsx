import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookHeart } from 'lucide-react';

export default function StoryWorthFamilyMemoir() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="StoryWorth Family Memoir for Seniors | TekSure" description="Save your life stories for family. StoryWorth and free alternatives explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">StoryWorth</h1>
          <p className="text-lg text-muted-foreground">Your life stories preserved for grandchildren.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is StoryWorth?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Service that helps you write your life story.</li>
              <li>Sends one question per week by email.</li>
              <li>Reply with your answer — that&apos;s a chapter.</li>
              <li>52 questions = 52 chapters in a year.</li>
              <li>Hardcover book printed at the end.</li>
              <li>Family receives copies — treasured forever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adult child or family member buys for you.</li>
              <li>$99 first year, $79 each renewal.</li>
              <li>Email arrives weekly with question.</li>
              <li>Examples: &quot;What was your first job?&quot; &quot;Best vacation memory?&quot;</li>
              <li>You reply — story saves automatically.</li>
              <li>Add photos to each chapter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No typing? No problem</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reply by talking to phone — voice-to-text.</li>
              <li>Phone-call recordings transcribed automatically.</li>
              <li>Family member can type your spoken stories.</li>
              <li>Email works for those comfortable typing.</li>
              <li>Even handwritten — scan and upload.</li>
              <li>No barrier to getting your stories down.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The book at the end</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hardcover, 250+ pages possible.</li>
              <li>Includes all your stories + photos.</li>
              <li>Professional printing quality.</li>
              <li>One copy included with subscription.</li>
              <li>Order extras at cost.</li>
              <li>Make copies for each grandchild.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Doc — type your own stories, free.</li>
              <li>Voice Memos app — record yourself, transcribe later.</li>
              <li>FamilySearch Memories — free audio + text.</li>
              <li>Custom photo book via Shutterfly.</li>
              <li>Free question lists online to inspire stories.</li>
              <li>Same result, $99 saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Getting started questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>What is your earliest memory?</li>
              <li>Tell about a grandparent.</li>
              <li>How did you meet your spouse?</li>
              <li>What was your wedding day like?</li>
              <li>Best advice from a parent?</li>
              <li>Most meaningful job + why.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift you can leave</h3>
            <p className="text-sm text-muted-foreground">Future generations care less about money inherited and more about WHO you were. Your stories — meeting your spouse, raising kids, the funny family vacation, what your parents were like — these are irreplaceable. StoryWorth makes it easy. Or do it yourself for free with Google Docs and a question list. Either way, start writing this year. Many adult children say their parent&apos;s memoir became their most treasured keepsake.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
