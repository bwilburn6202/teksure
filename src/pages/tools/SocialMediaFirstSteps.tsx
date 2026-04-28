import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Users, AlertTriangle, ChevronRight, CheckCircle2, XCircle, Facebook, Instagram, Home } from 'lucide-react';

interface PlatformGuide {
  id: 'facebook' | 'instagram' | 'nextdoor';
  label: string;
  intro: string;
  signup: string[];
  privacy: string[];
  findFamily: string[];
  doPost: string[];
  skipPost: string[];
}

const GUIDES: PlatformGuide[] = [
  {
    id: 'facebook', label: 'Facebook',
    intro: 'Best for staying in touch with family and old friends. Most people 60+ are already here.',
    signup: ['Open facebook.com or the Facebook app and tap Create New Account.', 'Enter your full name, mobile number or email, a strong password, birthday, and gender.', 'Confirm the code Facebook texts or emails you, then sign in.', 'Skip the suggested friends and photo upload screens for now — privacy comes first.'],
    privacy: ['Tap menu (three lines) → Settings & Privacy → Settings → Privacy.', 'Set "Who can see your future posts?" to Friends.', 'Tap "Limit Past Posts" to sweep older public posts down to Friends-only.', 'Set friend requests to "Friends of Friends" to cut off spam accounts.', 'Set phone and email lookup to Friends so strangers cannot search you.', 'Turn on Login Alerts in Security and Login.'],
    findFamily: ['Tap the search bar at the top and type a family member\'s full name.', 'Look at the profile photo and mutual friends — confirm it is the right person.', 'Tap Add Friend. Send a short message so they know it is you.', 'Wait for them to accept before sending more requests.'],
    doPost: ['Photos of grandkids, gardens, pets, recipes, day trips.', 'Birthday and holiday greetings to family members.', 'Comments and reactions on family posts — this is how you stay connected.'],
    skipPost: ['Vacation photos while you are still away (post after you return home).', 'Your full birthday including the year — set it to friends-only or hide the year.', 'Your home address, phone number, or photos showing your house number.', 'Health details, bank info, or anything you would not say to a stranger at the grocery store.'],
  },
  {
    id: 'instagram', label: 'Instagram',
    intro: 'Best for following grandkids, hobbies, travel, and recipes. Photo and video focused.',
    signup: ['Download Instagram from the App Store or Google Play.', 'Tap Create New Account, enter your mobile number or email, then a strong password.', 'Pick a username — your real name or a nickname is fine. You can change it later.', 'Skip "Find Friends" for now and head straight to settings.'],
    privacy: ['Tap your profile photo → menu (three lines) → Settings and privacy.', 'Tap Account privacy → toggle Private account ON. Now only approved followers see your posts.', 'Under Messages and story replies, set message requests to Followers only.', 'Turn off Show activity status so people cannot see when you are online.', 'Turn on Two-factor authentication in Accounts Center → Password and security.'],
    findFamily: ['Tap the magnifying glass at the bottom and type a family name or username.', 'Ask your kids or grandkids for their exact username — Instagram has many fake accounts.', 'Tap Follow. Because their account may also be private, wait for them to approve.', 'Once approved, tap their name to see posts and stories.'],
    doPost: ['Photos of meals, garden, pets, scenery, and crafts.', 'Short captions — one or two sentences is plenty.', 'Comments and heart-reactions on family posts.'],
    skipPost: ['Stories or reels showing you are away from home for days.', 'Pictures with your address, license plate, or mailbox numbers visible.', 'Your full date of birth — never put it in your bio.', 'Anything political or angry — Instagram is not the place and family will see it.'],
  },
  {
    id: 'nextdoor', label: 'Nextdoor',
    intro: 'A neighborhood-only network. Good for lost pets, local recommendations, and neighbors.',
    signup: ['Go to nextdoor.com or download the app, then tap Sign Up.', 'Enter your home address — Nextdoor uses it to confirm your neighborhood. Your address is not shown publicly.', 'Verify by phone code, postcard mailed to your home, or a credit-card check.', 'Add a clear profile photo and your real first and last name (required by Nextdoor).'],
    privacy: ['Tap your profile photo → Settings → Privacy.', 'Set "Who can see your full address?" to Only me.', 'Set "Who can see your last name?" to Neighbors only or First initial only.', 'Turn off "Allow my profile to appear in search engine results."', 'Under Notifications, mute groups you do not want emails from.'],
    findFamily: ['Nextdoor is neighborhood-based, so family will only appear if they live near you.', 'Tap the search icon and type a name to check.', 'For most people, use Nextdoor for neighbors and Facebook or Instagram for family.'],
    doPost: ['Lost pet alerts, found items, and neighborhood watch updates.', 'Asking for handyman, plumber, or contractor recommendations.', 'Selling or giving away furniture and household items.'],
    skipPost: ['Your daily schedule, vacation dates, or when your house is empty.', 'Photos showing your full house number or front door.', 'Political arguments — Nextdoor neighborhood threads turn ugly fast.', 'Personal disputes with neighbors. Knock on the door instead.'],
  },
];

const ICONS = { facebook: Facebook, instagram: Instagram, nextdoor: Home } as const;
const TONE = {
  amber: 'border-amber-300 bg-amber-50/50 dark:bg-amber-950/20',
  green: 'border-green-300 bg-green-50/50 dark:bg-green-950/20',
  red: 'border-red-300 bg-red-50/50 dark:bg-red-950/20',
  none: 'border-border',
} as const;

const Block = ({ title, items, ordered, tone = 'none' }: { title: string; items: string[]; ordered?: boolean; tone?: keyof typeof TONE }) => (
  <Card className={TONE[tone]}><CardContent className="p-5">
    <p className="font-semibold mb-3 flex items-center gap-2">
      {tone === 'green' && <CheckCircle2 className="h-4 w-4 text-green-700" />}
      {tone === 'red' && <XCircle className="h-4 w-4 text-red-700" />}
      {title}
    </p>
    {ordered ? (
      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">{items.map((s, i) => <li key={i}>{s}</li>)}</ol>
    ) : (
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">{items.map((s, i) => <li key={i}>{s}</li>)}</ul>
    )}
  </CardContent></Card>
);

const RELATED = [
  { to: '/tools/social-privacy-lockdown', title: 'Social Privacy Lockdown', sub: 'Deeper privacy settings on each platform.' },
  { to: '/tools/scam-message-decoder', title: 'Scam Message Decoder', sub: 'Spot fake DMs and friend requests.' },
  { to: '/tools/family-tech-roundtable', title: 'Family Tech Roundtable', sub: 'Talk it through with your family.' },
];

export default function SocialMediaFirstSteps() {
  return (
    <>
      <SEOHead title="Social Media First Steps for Seniors"
        description="A first-time guide to Facebook, Instagram, and Nextdoor for seniors. Sign up, set privacy first, find family, and learn what to post and what to skip."
        path="/tools/social-media-first-steps" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-emerald-50 dark:from-sky-950/20 dark:to-emerald-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3"><div className="p-3 bg-sky-500/10 rounded-full"><Users className="h-8 w-8 text-sky-600" /></div></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Social Media First Steps</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A first-time walkthrough for Facebook, Instagram, and Nextdoor. Set privacy before you post anything.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Social Media First Steps' }]} />

          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Read this before you post anything</AlertTitle>
            <AlertDescription>Never post that you are on vacation while you are still away — burglars watch social media. Hide your full birthday (especially the year). Do not show your home address, mailbox number, or any photo that gives away where you live.</AlertDescription>
          </Alert>

          <Tabs defaultValue="facebook" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              {GUIDES.map(g => {
                const Icon = ICONS[g.id];
                return <TabsTrigger key={g.id} value={g.id} className="gap-2"><Icon className="h-4 w-4" /><span>{g.label}</span></TabsTrigger>;
              })}
            </TabsList>
            {GUIDES.map(g => (
              <TabsContent key={g.id} value={g.id} className="space-y-4 mt-4">
                <Card className="border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">{g.intro}</p></CardContent></Card>
                <Block title="1. Sign up" items={g.signup} ordered />
                <Block title="2. Privacy first — do this before posting" items={g.privacy} ordered tone="amber" />
                <Block title="3. Find family and friends" items={g.findFamily} ordered />
                <div className="grid sm:grid-cols-2 gap-3">
                  <Block title="Good to post" items={g.doPost} tone="green" />
                  <Block title="Skip these" items={g.skipPost} tone="red" />
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {RELATED.map(r => (
                <Link key={r.to} to={r.to} className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <p className="font-medium text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.sub}</p>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1"><ChevronRight className="h-3 w-3" /> Quick Tip: privacy first, post second. Once something is public it can be screenshotted forever.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
