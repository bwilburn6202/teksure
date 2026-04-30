import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { NotebookPen } from 'lucide-react';

export default function JournalingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Journaling Apps for Seniors | TekSure" description="Daily reflection apps. Senior journaling app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <NotebookPen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Journaling Apps</h1>
          <p className="text-lg text-muted-foreground">Daily senior reflection.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Journal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free iOS 17.2+.</li><li>Suggests prompts.</li><li>Photos + audio entries.</li><li>Private encrypted.</li><li>Senior easy.</li><li>Daily notification.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Day One</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$35/year premium.</li><li>Multi-device sync.</li><li>Photos + tags.</li><li>Senior favorite.</li><li>Free version too.</li><li>Encrypted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free pen + paper</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Notebook + pen.</li><li>Tactile + private.</li><li>Senior tradition.</li><li>$5 spiral.</li><li>No tech needed.</li><li>Always works.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memoir writing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>StoryWorth — weekly questions.</li><li>$99/year.</li><li>Family photo book.</li><li>Senior legacy gift.</li><li>Best wedding/birthday.</li><li>Or use journal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mental clarity.</li><li>Process emotions.</li><li>Memory exercise.</li><li>Sleep better.</li><li>Studies-proven.</li><li>15 min daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same time daily.</li><li>Just 5 min start.</li><li>No spelling worry.</li><li>Voice memos ok.</li><li>Senior process.</li><li>Build habit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Apple Journal = senior reflection</h3><p className="text-sm text-muted-foreground">Apple Journal free in iOS 17.2+. Daily prompts, photos, voice. Or Day One free version. Or pen + paper $5. Studies show senior journaling improves sleep, mental clarity, processing. 15 minutes daily. Simple habit, big benefit.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
