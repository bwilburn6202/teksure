import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserX } from 'lucide-react';

export default function SocialMediaPrivacyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Media Privacy for Seniors | TekSure" description="Lock down Facebook, Instagram. Senior privacy settings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Social Media Privacy</h1>
          <p className="text-lg text-muted-foreground">Lock down accounts.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Facebook</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Privacy.</li><li>Friends only posts.</li><li>Hide friends list.</li><li>Senior less data leaks.</li><li>Disable face recognition.</li><li>30-min checkup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Instagram</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Private account.</li><li>Approve followers.</li><li>Senior control audience.</li><li>Hide story.</li><li>Disable activity status.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t over-share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t announce travel.</li><li>Burglar listings.</li><li>Don&apos;t post checks.</li><li>Don&apos;t show driver license.</li><li>Senior caution.</li><li>Wait til home post.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid quizzes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Your name is...&quot;</li><li>Steal security questions.</li><li>Mom&apos;s maiden name.</li><li>Pet first name.</li><li>Senior never play.</li><li>Hackers love them.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Friend requests</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verify identity.</li><li>Mutual friends?</li><li>Recent profile?</li><li>Senior catfish risk.</li><li>Decline strangers.</li><li>Many fake.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Annual review</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Privacy settings change.</li><li>Review yearly.</li><li>Senior stay current.</li><li>Adult kid help.</li><li>30 min annual.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Annual privacy review = senior safety</h3><p className="text-sm text-muted-foreground">Senior 30-min annual social media privacy review. Friends-only posts, private account, decline strangers, skip quizzes, no travel announcements until home. Adult kid helps. Most seniors over-share. Lock it down today. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
