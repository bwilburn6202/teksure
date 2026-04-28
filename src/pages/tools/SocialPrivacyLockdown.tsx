import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Lock, ChevronRight, ExternalLink, type LucideIcon, Facebook, Instagram } from 'lucide-react';

type Platform = 'facebook' | 'instagram' | 'tiktok' | 'x';

interface Setting {
  id: string;
  title: string;
  detail: string;
  why: string;
}

const PLATFORM_SETTINGS: Record<Platform, Setting[]> = {
  facebook: [
    { id: 'fb-1', title: 'Future posts → Friends only', detail: 'Settings & Privacy → Settings → Privacy → "Who can see your future posts?" → Friends.', why: 'Stops strangers from seeing what you post going forward.' },
    { id: 'fb-2', title: 'Limit past posts to Friends', detail: 'Same Privacy menu → "Limit Past Posts" → confirm. Sweeps everything you ever posted publicly down to Friends-only.', why: 'Old posts that were public stay public until you do this. One-click fix.' },
    { id: 'fb-3', title: 'Profile lookup by phone or email → Friends only', detail: 'Privacy → "How people find and contact you" → both phone and email → "Friends".', why: 'Strangers cannot search you by phone number or email — common scam-targeting tactic.' },
    { id: 'fb-4', title: 'Friend request privacy → Friends of Friends', detail: 'Privacy → "Who can send you friend requests?" → Friends of Friends.', why: 'Cuts off most spam friend requests from scammer accounts.' },
    { id: 'fb-5', title: 'Turn off face recognition', detail: 'Settings → Profile and Tagging → Face Recognition → No.', why: 'Stops Facebook from auto-tagging you in any photo it thinks is you.' },
    { id: 'fb-6', title: 'Review tags before they go on your profile', detail: 'Profile and Tagging → "Review tags people add..." → ON.', why: 'No more being tagged in embarrassing or political posts without review.' },
    { id: 'fb-7', title: 'Turn on Login Alerts', detail: 'Settings → Security and Login → "Get alerts about unrecognised logins" → Email + Notification.', why: 'You hear immediately if someone logs in from a new device.' },
    { id: 'fb-8', title: 'Review who has access', detail: 'Apps and Websites → review every "Logged in with Facebook" app. Remove ones you do not use.', why: 'Old apps you forgot about can still see your Facebook data.' },
  ],
  instagram: [
    { id: 'ig-1', title: 'Set account to Private', detail: 'Profile → menu (≡) → Settings and privacy → Account privacy → ON.', why: 'Only people you approve can see your photos and videos.' },
    { id: 'ig-2', title: 'Hide story from specific people', detail: 'Settings and privacy → "Hide story and live" → block coworkers, exes, anyone you do not want seeing daily life.', why: 'Lets you stay on Instagram without sharing every day with everyone.' },
    { id: 'ig-3', title: 'Limit who can DM you', detail: 'Settings → Messages and story replies → "Allow message requests" → Followers only.', why: 'Cuts down on scammer DMs from accounts pretending to be customer service.' },
    { id: 'ig-4', title: 'Hide your "Activity Status"', detail: 'Settings → Messages and story replies → "Show activity status" → OFF.', why: 'Followers cannot see when you were last online.' },
    { id: 'ig-5', title: 'Two-factor auth ON', detail: 'Settings → Accounts Center → Password and security → 2FA → Authenticator app.', why: 'Single most important security setting on every social platform.' },
    { id: 'ig-6', title: 'Review login activity', detail: 'Accounts Center → Password and security → "Login activity". Sign out anywhere unfamiliar.', why: 'Catches account takeovers fast.' },
  ],
  tiktok: [
    { id: 'tt-1', title: 'Private account', detail: 'Profile → menu (≡) → Settings and privacy → Privacy → Private account → ON.', why: 'Without this, a 70-year-old\'s TikTok is visible to the entire world.' },
    { id: 'tt-2', title: 'Suggest your account → OFF', detail: 'Privacy → "Suggest your account to others" → toggle off all four sub-options.', why: 'Stops TikTok from offering your account to strangers, including scammers.' },
    { id: 'tt-3', title: 'Comments → Friends only', detail: 'Privacy → Comments → "Filter all comments" + "Friends only".', why: 'Eliminates the abuse and spam comments most accounts get.' },
    { id: 'tt-4', title: 'DM permissions → Friends only', detail: 'Privacy → Direct messages → "Friends".', why: 'Most TikTok scam attempts come through DMs from strangers.' },
    { id: 'tt-5', title: 'Two-factor auth ON', detail: 'Settings → Security & login → 2-step verification.', why: 'Most TikTok takeovers happen because the account has only a password.' },
  ],
  x: [
    { id: 'x-1', title: 'Protect your posts', detail: 'Settings and privacy → Privacy and safety → Audience and tagging → "Protect your posts" → ON.', why: 'Tweets are visible only to followers you approve. Single biggest privacy switch.' },
    { id: 'x-2', title: 'Photo tagging → No one', detail: 'Privacy and safety → Audience and tagging → "Photo tagging" → No one (or only people you follow).', why: 'No one can drag you into their political or weird-account orbit by tagging.' },
    { id: 'x-3', title: 'Direct messages → People you follow only', detail: 'Privacy and safety → Direct Messages → toggle "Allow message requests from everyone" OFF.', why: 'X DMs are full of crypto and romance scammers. Filter aggressively.' },
    { id: 'x-4', title: 'Discoverability OFF', detail: 'Privacy and safety → Discoverability and contacts → uncheck both phone and email.', why: 'Stops people who have your phone number from finding your X.' },
    { id: 'x-5', title: 'Two-factor auth ON', detail: 'Settings and privacy → Security and account access → Security → Two-factor authentication.', why: 'X account takeovers spike during news events. Lock it down.' },
  ],
};

const PLATFORMS: { id: Platform; label: string; icon: LucideIcon }[] = [
  { id: 'facebook',  label: 'Facebook',  icon: Facebook },
  { id: 'instagram', label: 'Instagram', icon: Instagram },
  { id: 'tiktok',    label: 'TikTok',    icon: Lock },
  { id: 'x',         label: 'X (Twitter)', icon: Lock },
];

export default function SocialPrivacyLockdown() {
  const [platform, setPlatform] = useState<Platform>('facebook');
  const [done, setDone] = useState<Set<string>>(new Set());

  const settings = PLATFORM_SETTINGS[platform];

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const switchPlatform = (p: Platform) => {
    setPlatform(p);
    setDone(new Set());
  };

  return (
    <>
      <SEOHead
        title="Social Media Privacy Lockdown"
        description="Lock down Facebook, Instagram, TikTok, and X (Twitter) privacy in 5 minutes each. Step-by-step settings most people never change."
        path="/tools/social-privacy-lockdown"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-violet-50 via-background to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Lock className="h-8 w-8 text-violet-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Social Media Privacy Lockdown</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Five minutes per platform. The settings every user should change but almost no one does.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Social Privacy Lockdown' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick a platform</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PLATFORMS.map(p => {
                  const Icon = p.icon;
                  return (
                    <button key={p.id} onClick={() => switchPlatform(p.id)}
                      className={`p-3 rounded-lg border text-left transition-all flex items-center gap-2 ${
                        platform === p.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                      }`}>
                      <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                      <p className="font-medium text-sm">{p.label}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {settings.length} done</p>

          <div className="space-y-3 mb-6">
            {settings.map(s => (
              <Card key={s.id} className={`border-border ${done.has(s.id) ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                <CardContent className="p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox checked={done.has(s.id)} onCheckedChange={() => toggle(s.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${done.has(s.id) ? 'line-through text-muted-foreground' : ''}`}>{s.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                      <p className="text-xs italic text-muted-foreground mt-1"><strong>Why:</strong> {s.why}</p>
                    </div>
                  </label>
                </CardContent>
              </Card>
            ))}
          </div>

          {done.size === settings.length && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
              <CardContent className="p-5 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">All done</Badge>
                <p className="font-semibold">{PLATFORMS.find(p => p.id === platform)?.label} is locked down.</p>
                <p className="text-sm text-muted-foreground mt-1">Pick the next platform to continue.</p>
              </CardContent>
            </Card>
          )}

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A quarterly habit</p>
              <p className="text-xs text-muted-foreground">
                Privacy settings get reset by app updates and product launches. Set a calendar reminder once a quarter — review your privacy settings on the platforms you use most. 10 minutes, four times a year, keeps the lockdown holding.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Remove yourself from people-search.</p>
              </Link>
              <Link to="/tools/cookie-consent-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Cookie Consent Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Reject tracking on every site.</p>
              </Link>
              <Link to="/tools/account-deletion-wizard" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account Deletion</p>
                <p className="text-xs text-muted-foreground mt-0.5">Or close it entirely.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: privacy lockdown does not break any of these apps. Friends still see your posts. Strangers stop being able to.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
