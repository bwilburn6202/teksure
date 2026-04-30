import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function YouVersionBibleApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouVersion Bible App for Seniors | TekSure" description="The most popular Bible app explained for senior users. Read, listen, study scripture." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouVersion Bible App</h1>
          <p className="text-lg text-muted-foreground">Free Bible. Free reading plans. 100M+ users.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why YouVersion?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most-used Bible app — over 600 million downloads.</li>
              <li>100% free — no subscription.</li>
              <li>2,000+ Bible translations.</li>
              <li>Read or listen to audio Bible.</li>
              <li>Reading plans — read Bible in a year.</li>
              <li>Adjustable text size.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Large text option — up to extra large.</li>
              <li>Audio Bible — listen while doing chores.</li>
              <li>Verse of the Day on home screen.</li>
              <li>Highlight + take notes on verses.</li>
              <li>Daily devotionals.</li>
              <li>Multiple translations side-by-side.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reading plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bible in a year — most popular.</li>
              <li>Bible in 90 days for fast reading.</li>
              <li>Topic-specific plans (grief, marriage, anxiety).</li>
              <li>5–10 minutes daily commitment.</li>
              <li>Audio versions of plans.</li>
              <li>Track progress through plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouVersion Kids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Separate app for grandkids.</li>
              <li>Animated Bible stories.</li>
              <li>Activities + games.</li>
              <li>Free, ad-free, kid-safe.</li>
              <li>Watch with grandkids during visits.</li>
              <li>Build faith in next generation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other Bible apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Olive Tree Bible — academic study features.</li>
              <li>Logos Bible — pastors + serious students.</li>
              <li>BibleGateway — large parallel Bible.</li>
              <li>Bible Study Tools — verse research.</li>
              <li>NIV Quest Bible — beginner-friendly.</li>
              <li>Most have free versions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download YouVersion Bible from app store.</li>
              <li>Tap Settings → Text Size → make larger.</li>
              <li>Pick translation you prefer (NIV, ESV, KJV, etc.).</li>
              <li>Try a 5-minute reading plan.</li>
              <li>Bookmark favorite verses.</li>
              <li>Set Verse of the Day notification.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Listen during chores</h3>
            <p className="text-sm text-muted-foreground">For seniors with vision issues or who simply enjoy listening, YouVersion&apos;s audio Bible turns any task into Bible study time. Listen while cooking, gardening, or driving. James Earl Jones narrated KJV is particularly beautiful. Free, on every device, available offline once downloaded. The most-used Bible app in the world for good reason.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
