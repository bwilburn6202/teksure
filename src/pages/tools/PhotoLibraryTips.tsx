import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ImageIcon, ChevronRight, Search, Heart, Trash2, FolderTree,
  Share2, Cloud, type LucideIcon,
} from 'lucide-react';

type Platform = 'iphone' | 'android';

interface Trick {
  id: string;
  icon: LucideIcon;
  title: string;
  detail: Record<Platform, string>;
}

const TRICKS: Trick[] = [
  {
    id: 'search',
    icon: Search,
    title: 'Search by what is in the photo',
    detail: {
      iphone: 'Open Photos → tap the magnifying-glass icon at the bottom. Type "dog" or "beach" or "Mom" — your iPhone has been quietly recognizing faces and places for years and shows them all.',
      android: 'Open Google Photos → tap the search bar at the top. Type "dog" or "Christmas 2018" or even "red car". Google\'s search is even better than Apple\'s — it knows places, food, and most objects.',
    },
  },
  {
    id: 'people',
    icon: Heart,
    title: 'Tag faces once — search by name forever',
    detail: {
      iphone: 'Photos → Albums → "People & Pets" album. Tap a face → "Add Name". Now you can search "Mom" or "Aunt Carol" and pull up every photo of them.',
      android: 'Google Photos → tap the round people icons at the top of Search. Tap each face → "Add a name". After that, "Sarah" finds every photo of Sarah.',
    },
  },
  {
    id: 'duplicates',
    icon: Trash2,
    title: 'Find and delete duplicates',
    detail: {
      iphone: 'Photos → Albums → scroll to "Utilities" section → "Duplicates". iPhone groups every duplicate it finds — tap "Merge" to keep the best copy and free up storage. Often clears 5–10 GB.',
      android: 'Google Photos → Free up space → "Manage storage" → "Backed up & deleted on device" or look at "Large photos" to find the obvious wins. Or install the free app "Duplicate Photo Cleaner" for a deeper sweep.',
    },
  },
  {
    id: 'albums',
    icon: FolderTree,
    title: 'Make a few clear albums',
    detail: {
      iphone: 'Photos → Albums → "+" → New Album → name it ("2026 Trips", "Grandkids 2026"). Tap photos → bottom-left share icon → "Add to Album". Albums are way faster to find than scrolling.',
      android: 'Google Photos → Library → Albums → "+" → New album. Pick photos. You can also turn on "Auto-update" so an album fills itself when you take more photos with that face.',
    },
  },
  {
    id: 'shared',
    icon: Share2,
    title: 'Share an album the family adds to',
    detail: {
      iphone: 'Photos → "+" → New Shared Album. Invite family members. Anyone you invite can drop photos into it. Perfect for grandkid photos that everyone takes from their own phones.',
      android: 'Google Photos → tap an album → top-right menu → "Share" → "Add to share". Same idea — everyone you invite can add to it.',
    },
  },
  {
    id: 'memories',
    icon: Heart,
    title: 'Let memories surface old photos',
    detail: {
      iphone: 'Photos → "For You" tab → Memories. iPhone makes short slideshows by trip, by year, by person — usually with music. A nice surprise.',
      android: 'Google Photos → Memories appear at the top of the main screen. Tap one to see it.',
    },
  },
  {
    id: 'free-space',
    icon: Cloud,
    title: 'Free up phone storage by uploading',
    detail: {
      iphone: 'Settings → your name → iCloud → Photos → "Optimise iPhone Storage". Full-resolution photos live in the cloud, smaller copies stay on the phone. Same library, much less space used.',
      android: 'Open Google Photos → tap your photo → "Free up space on this device". It removes photos already backed up. They are still in Google Photos in the cloud — only the local copy goes.',
    },
  },
];

export default function PhotoLibraryTips() {
  const [phone, setPhone] = useState<Platform>('iphone');

  return (
    <>
      <SEOHead
        title="Photo Library Tips"
        description="Tame thousands of phone photos. Search by face, place, or thing. Tag people once. Delete duplicates. Make albums. Free up storage. Plain-English steps for iPhone and Android."
        path="/tools/photo-library-tips"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-pink-50 via-background to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-pink-500/10 rounded-full">
                <ImageIcon className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Photo Library Tips</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Find that one photo from 2014. Tame thousands of pictures in a few minutes.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Photo Library Tips' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Platform[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone (Apple Photos)' : 'Android (Google Photos)'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {TRICKS.map((t, i) => {
              const Icon = t.icon;
              return (
                <Card key={t.id} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1 text-xs">Trick {i + 1}</Badge>
                        <p className="font-semibold text-base">{t.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground ml-12">{t.detail[phone]}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mt-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">One thing not to do</p>
              <p className="text-xs text-muted-foreground">
                Do not delete an entire camera roll to "start over". You will regret it the next year. Instead, scroll to your oldest photos, and from there work forward. Use "Recently Deleted" as a 30-day safety net (Photos → Albums → Recently Deleted) before anything is permanent.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/backup-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Backup Wizard</p>
                <p className="text-xs text-muted-foreground mt-0.5">Make sure photos are safe somewhere else.</p>
              </Link>
              <Link to="/tools/storage-cleanup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Storage Cleanup</p>
                <p className="text-xs text-muted-foreground mt-0.5">More ways to free up phone space.</p>
              </Link>
              <Link to="/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up shared photo albums for family.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: spend 5 minutes naming the 3 or 4 people you photograph most often. That single move makes search 10× more useful forever.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
