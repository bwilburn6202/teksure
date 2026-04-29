import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function NewsletterPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Newsletter Picks for Seniors | TekSure" description="Quality newsletters delivered to inbox. Plain-English picks for senior-friendly free newsletters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Newsletter Picks</h1>
          <p className="text-lg text-muted-foreground">Quality reading. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">News (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1440 Daily Digest</strong> — 5-min unbiased news brief.</li>
              <li><strong>Morning Brew</strong> — business + general news, fun.</li>
              <li><strong>The Skimm</strong> — politics + culture, casual.</li>
              <li><strong>NPR Up First</strong> — top stories, audio + email.</li>
              <li><strong>Axios AM</strong> — political + business overview.</li>
              <li><strong>Atlantic Daily</strong> — thoughtful long-form.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP Bulletin</strong> — free for members.</li>
              <li><strong>Reader&apos;s Digest</strong> — short stories + jokes + tips.</li>
              <li><strong>Old Farmer&apos;s Almanac</strong> — gardening + weather + folklore.</li>
              <li><strong>National Park Service</strong> — free park alerts.</li>
              <li><strong>Smithsonian Magazine</strong> — paid + free articles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hobby + interest newsletters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lifehacker</strong> — daily tips.</li>
              <li><strong>Wirecutter (NYT)</strong> — best products.</li>
              <li><strong>Atlas Obscura</strong> — interesting places.</li>
              <li><strong>The Sample</strong> — personalized newsletter discovery.</li>
              <li><strong>Substack</strong> — pick your topics, follow writers free or paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid newsletter overload</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick 3-5 maximum.</li>
              <li>Use separate email for newsletters.</li>
              <li>Unsubscribe ruthlessly.</li>
              <li>10 min/day total reading max.</li>
              <li>Newsletters supplement news, don&apos;t replace it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Slow newsletter movement</h3>
            <p className="text-sm text-muted-foreground">Old-school feel. No notifications. No ads in face. Read at YOUR pace. Many seniors prefer this to scrolling apps. Inbox controlled. Read what YOU want. Like a paper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
