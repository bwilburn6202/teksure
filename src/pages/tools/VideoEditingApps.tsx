import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Film, ChevronRight, ExternalLink } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'iPhone Photos editor',
    cost: 'Free (built in)',
    bestFor: 'Quick trims on an iPhone or iPad. No extra app to install.',
    pros: ['Already on every iPhone — open Photos, tap Edit on a video.', 'Drag the yellow bar to trim the start or end.', 'Save as new clip to keep the original safe.'],
    cons: ['Trim only — no titles, music, or multi-clip editing.'],
    link: 'https://support.apple.com/guide/iphone/trim-video-length-iph3d8d2dc6/ios',
  },
  {
    name: 'iMovie',
    cost: 'Free',
    bestFor: 'iPhone, iPad, or Mac users who want titles, music, and combined clips.',
    pros: ['Free from Apple — drag clips into a timeline and trim with your finger.', 'Add titles, transitions, and music in a few taps.', 'Magic Movie auto-builds a film from your photos and videos.'],
    cons: ['Apple devices only.', 'Older iPhones can feel slow with long videos.'],
    link: 'https://apps.apple.com/us/app/imovie/id377298193',
  },
  {
    name: 'CapCut',
    cost: 'Free (paid Pro tier exists)',
    bestFor: 'Phone editing on iPhone or Android. Big buttons, friendly layout.',
    pros: ['Same app on iPhone and Android — handy if family helps.', 'One-tap auto captions for grandkids who watch on mute.', 'Hundreds of free music tracks cleared for sharing.'],
    cons: ['Asks you to sign in with email or Google.', 'Pro upsells appear inside the app.'],
    link: 'https://www.capcut.com',
  },
  {
    name: 'Adobe Express',
    cost: 'Free tier (Premium $10/mo)',
    bestFor: 'Editing in a web browser on any computer. No download needed.',
    pros: ['Works in Chrome, Safari, or Edge — nothing to install.', 'Trim, crop, resize for Facebook, and add text overlays.', 'Free tier covers most family video tasks.'],
    cons: ['Needs a free Adobe account.', 'Some templates are Premium only.'],
    link: 'https://www.adobe.com/express/feature/video',
  },
  {
    name: 'Photos app on Windows',
    cost: 'Free (built in)',
    bestFor: 'Windows 10 and 11 users. Already on your PC.',
    pros: ['Trim, split, and combine clips from inside the Photos app.', 'Add title cards, slow motion, and background music.', 'No sign-in needed for basic edits.'],
    cons: ['Layout changed in recent Windows updates — menus can move.'],
    link: 'https://support.microsoft.com/en-us/windows/create-films-with-a-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6',
  },
  {
    name: 'Clipchamp',
    cost: 'Free (Premium $12/mo)',
    bestFor: 'Microsoft 365 users who want more than the Photos app.',
    pros: ['Built into Windows 11 and free on the web at clipchamp.com.', 'Drag-and-drop timeline, auto captions, ready-made templates.', '1080p exports on the free tier.'],
    cons: ['Needs a free Microsoft account.', 'Some music requires Premium.'],
    link: 'https://clipchamp.com',
  },
];

export default function VideoEditingApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Simple Video Editing Apps for Seniors"
        description="Six friendly video editors for trimming home videos, adding titles, and sharing with family. iPhone Photos, iMovie, CapCut, Adobe Express, Windows Photos, Clipchamp."
        path="/tools/video-editing-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-violet-50 via-background to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Film className="h-8 w-8 text-violet-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Simple Video Editing Apps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six friendly picks for trimming home videos, adding a title, and sharing with the grandkids. Most are free.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Video Editing Apps' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Start with what you already have</p>
              <p className="text-xs text-muted-foreground">
                On an iPhone or iPad, the Photos app trims videos in three taps. On Windows 10 or 11, the Photos app does the same. Try those first before installing anything new.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / learn more <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Sharing finished videos</p>
              <p className="text-xs text-muted-foreground">
                Long clips are too big for text or email. Send them through iMessage, WhatsApp, Google Photos, or a shared iCloud album. For one-link sharing, upload to YouTube as Unlisted — only people with the link can watch.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/photo-library-tips" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Photo Library Tips</p>
                <p className="text-xs text-muted-foreground mt-0.5">Organize the videos you want to edit.</p>
              </Link>
              <Link to="/tools/screen-recording-guide" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Screen Recording Guide</p>
                <p className="text-xs text-muted-foreground mt-0.5">Capture how-to clips for family.</p>
              </Link>
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up the phone or tablet first.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: always save your edit as a new clip so the untouched original stays safe in your photo library.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
