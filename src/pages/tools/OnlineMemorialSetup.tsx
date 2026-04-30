import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ChevronRight, ExternalLink, type LucideIcon, Globe, Users, Camera, Music } from 'lucide-react';

interface Service {
  name: string;
  icon: LucideIcon;
  cost: string;
  what: string;
  howToSetup: string[];
  link: string;
  notes?: string;
}

const SERVICES: Service[] = [
  {
    name: 'Memorialize a Facebook profile',
    icon: Globe,
    cost: 'Free',
    what: 'Keeps the profile up under "Remembering [Name]". Friends can still post tributes. Profile no longer appears in friend suggestions or birthday reminders.',
    howToSetup: [
      'Go to facebook.com/help/contact/234739086860192.',
      'Submit the deceased\'s profile URL.',
      'Upload proof of death (obituary link or death certificate).',
      'Facebook usually completes in 7-10 days.',
    ],
    link: 'https://www.facebook.com/help/contact/234739086860192',
    notes: 'Alternative — full removal at facebook.com/help/contact/228813257197480 if the family prefers.',
  },
  {
    name: 'Set up a free tribute page on Legacy.com',
    icon: Users,
    cost: 'Free',
    what: 'Hosts the obituary, lets people light virtual candles and leave condolences. Auto-shared with the local newspaper if you publish through them.',
    howToSetup: [
      'Go to legacy.com → "Memorial Sites" → "Create a free Memorial Website".',
      'Add name, photos, dates, biography.',
      'Invite family by email — they can add photos and stories.',
      'Page stays online indefinitely at no cost.',
    ],
    link: 'https://www.legacy.com',
  },
  {
    name: 'Forever Missed (full memorial site)',
    icon: Heart,
    cost: 'Free version, paid removes ads',
    what: 'More features than Legacy.com — timeline, story collections, downloadable memorial book.',
    howToSetup: [
      'forevermissed.com → "Create a Memorial".',
      'Add basic info, photos, music.',
      'Invite family to contribute. Each member gets their own login.',
      'Free version has small ads. $50/year removes them and unlocks more storage.',
    ],
    link: 'https://www.forevermissed.com',
  },
  {
    name: 'YouTube tribute channel',
    icon: Camera,
    cost: 'Free',
    what: 'Upload home videos and family memorial slideshows. Family searches one channel name to find them all.',
    howToSetup: [
      'Sign in to youtube.com with a Google account (a new one for the family is fine).',
      'Click your profile icon → "Create a channel" → name it after your loved one.',
      'Upload videos as "Unlisted" — family with the link can watch, strangers cannot find via search.',
      'Add Photos slideshows by uploading a Google Photos slideshow as a video.',
    ],
    link: 'https://support.google.com/youtube/answer/1646861',
    notes: 'Unlisted is safer than Public — keeps it for family without making it findable.',
  },
  {
    name: 'GoFundMe Memorial',
    icon: Heart,
    cost: '~3% platform fee + 2.9% + $0.30 per donation',
    what: 'For funeral costs, medical bills, or charity in their name. One link to share with family who want to contribute.',
    howToSetup: [
      'gofundme.com → "Start a GoFundMe" → Memorial.',
      'Add story, photo, goal amount.',
      'Verify identity (drivers license).',
      'Share the link via text, email, social.',
    ],
    link: 'https://www.gofundme.com/start/memorial-fundraiser',
    notes: 'For funerals specifically, you may also try TapRoot Foundation or Modest Needs for need-based grants.',
  },
  {
    name: 'Spotify / Apple Music memorial playlist',
    icon: Music,
    cost: 'Free with the streaming subscription',
    what: 'Their favorite music, all in one place. Family can collaborate, or listen quietly.',
    howToSetup: [
      'Spotify or Apple Music → "+" New Playlist.',
      'Name it after your loved one.',
      'Add their favorite songs.',
      'On Spotify, make it collaborative — family can add their own picks.',
      'Share the link via text or email.',
    ],
    link: 'https://support.spotify.com/us/article/create-playlists/',
  },
];

export default function OnlineMemorialSetup() {
  return (
    <>
      <SEOHead
        title="Online Memorial Setup"
        description="Set up online memorials and tributes after a loss — Facebook memorialization, Legacy.com, Forever Missed, YouTube tribute channels, GoFundMe, music playlists. Free or low-cost."
        path="/tools/online-memorial-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-purple-50 via-background to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Memorial Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six ways to honor a life online. Free or near-free. Each helps friends and family share what they remember.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Memorial Setup' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">First, take care of yourself</p>
              <p className="text-xs text-muted-foreground">
                There is no rush. Online memorials can wait days or months. Pick one that feels right — you do not need all of these. Done in good time, they help. Done in panic, they often get re-done later.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {SERVICES.map(s => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{s.name}</p>
                        <Badge variant="outline" className="mt-1">{s.cost}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{s.what}</p>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to set up</p>
                    <ol className="space-y-1.5 mb-3">
                      {s.howToSetup.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    {s.notes && (
                      <p className="text-xs text-muted-foreground italic mt-2">{s.notes}</p>
                    )}

                    <a href={s.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                      Visit / set up <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note about scammers and grief</p>
              <p className="text-xs text-muted-foreground">
                Within days of an online obituary, families sometimes get scam calls and emails. Common ones: fake "your loved one had a debt with us" calls, fake life-insurance "verification", fake credit-collector "deceased account" inquiries. None of those are real until you have proven the caller. Real businesses write paper letters and accept callbacks.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Closing accounts after a death.</p>
              </Link>
              <Link to="/bereavement-tech" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Bereavement Tech Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wider grief-tech guide.</p>
              </Link>
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check messages claiming to be from the deceased\'s creditors.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
