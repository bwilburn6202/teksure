import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Smartphone, Monitor, Gamepad2, Tv, Router, ExternalLink, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: typeof Shield;
  description: string;
  steps: { title: string; detail: string }[];
  officialLink: { label: string; url: string };
}

const PLATFORMS: Platform[] = [
  {
    id: 'iphone',
    name: 'iPhone / iPad',
    icon: Smartphone,
    description: 'Screen Time — built into every iPhone and iPad. No extra app needed.',
    steps: [
      { title: 'Open Settings', detail: 'Tap the Settings app on your child\'s iPhone or iPad.' },
      { title: 'Tap Screen Time', detail: 'Scroll down and tap "Screen Time". Then tap "Turn On Screen Time".' },
      { title: 'Choose "This is My Child\'s iPhone"', detail: 'This gives you parent options and lets you set a separate passcode.' },
      { title: 'Set Downtime hours', detail: 'Pick hours when only approved apps work (like bedtime 9 PM – 7 AM).' },
      { title: 'Set App Limits', detail: 'Cap social media, games, or entertainment to a number of hours per day.' },
      { title: 'Set Content & Privacy Restrictions', detail: 'Block explicit content, in-app purchases, and adult websites.' },
      { title: 'Create a Parent Passcode', detail: 'Use a passcode different from the phone unlock. Your child shouldn\'t know this one.' },
    ],
    officialLink: { label: 'Apple — Family Screen Time', url: 'https://support.apple.com/en-us/HT201304' },
  },
  {
    id: 'android',
    name: 'Android Phone / Tablet',
    icon: Smartphone,
    description: 'Google Family Link — free app from Google. Works with any Android device.',
    steps: [
      { title: 'Install Family Link on your phone', detail: 'Download "Google Family Link for Parents" from the Play Store.' },
      { title: 'Install Family Link on your child\'s phone', detail: 'Download "Google Family Link for Children". Sign in with their Google account.' },
      { title: 'Link the accounts', detail: 'Scan the QR code or enter the code shown on the parent phone.' },
      { title: 'Set daily screen time limit', detail: 'Pick a total daily limit (e.g. 2 hours on school days, 4 hours weekends).' },
      { title: 'Set bedtime hours', detail: 'The phone locks during bedtime except for calls and alarms.' },
      { title: 'Review and approve apps', detail: 'Any app they try to download must be approved by you first.' },
      { title: 'Turn on SafeSearch and YouTube restrictions', detail: 'Blocks explicit search results and age-inappropriate YouTube content.' },
    ],
    officialLink: { label: 'Google — Family Link', url: 'https://families.google/familylink/' },
  },
  {
    id: 'windows',
    name: 'Windows PC / Laptop',
    icon: Monitor,
    description: 'Microsoft Family Safety — built into Windows 10 and 11.',
    steps: [
      { title: 'Sign in with a Microsoft account', detail: 'Your child needs a Microsoft account (not a local Windows account) for this to work.' },
      { title: 'Go to family.microsoft.com', detail: 'Sign in as the parent/organizer and click "Add a family member".' },
      { title: 'Add your child\'s email', detail: 'They\'ll get an invite email. They must accept to join your family group.' },
      { title: 'Set screen time limits', detail: 'Set total PC time per day and specific hours they can use it.' },
      { title: 'Set content filters', detail: 'Block adult websites and require approval for app and game purchases.' },
      { title: 'Review weekly activity reports', detail: 'Microsoft emails you a summary of what they searched, watched, and played.' },
    ],
    officialLink: { label: 'Microsoft Family Safety', url: 'https://www.microsoft.com/en-us/microsoft-365/family-safety' },
  },
  {
    id: 'mac',
    name: 'Mac Computer',
    icon: Monitor,
    description: 'Screen Time on Mac — same as iPhone, works across all their Apple devices.',
    steps: [
      { title: 'Set up Family Sharing first', detail: 'System Settings → Family → add your child\'s Apple ID to your family.' },
      { title: 'Open Screen Time settings', detail: 'System Settings → Screen Time → pick your child\'s account from the dropdown.' },
      { title: 'Turn on Screen Time', detail: 'Click "Turn On" at the top of the panel.' },
      { title: 'Set Downtime hours', detail: 'Set hours when the Mac is locked to approved apps only.' },
      { title: 'Set App Limits', detail: 'Limit categories like Games, Social, or Entertainment.' },
      { title: 'Turn on Content Restrictions', detail: 'Block adult sites, limit explicit content, require purchase approval.' },
    ],
    officialLink: { label: 'Apple — Screen Time on Mac', url: 'https://support.apple.com/guide/mac-help/set-up-screen-time-mchl8bb1c524/mac' },
  },
  {
    id: 'xbox',
    name: 'Xbox (One, Series S/X)',
    icon: Gamepad2,
    description: 'Xbox Family Settings app — control games, chat, and screen time.',
    steps: [
      { title: 'Download the Xbox Family Settings app', detail: 'Free app on iPhone or Android.' },
      { title: 'Sign in with your Microsoft account', detail: 'Use the same parent account you set up for Microsoft Family Safety.' },
      { title: 'Add your child to your family', detail: 'If you already did this for Windows, they\'ll already be here.' },
      { title: 'Set daily screen time', detail: 'Pick hours per day and specific time ranges the Xbox can be used.' },
      { title: 'Set content filters by age', detail: 'Block games rated above their age (E, E10+, T, M).' },
      { title: 'Control chat and multiplayer', detail: 'Decide who they can talk to — friends only, or nobody.' },
      { title: 'Require purchase approval', detail: 'No surprise charges on your credit card for in-game items.' },
    ],
    officialLink: { label: 'Xbox Family Settings', url: 'https://www.xbox.com/en-US/family-hub' },
  },
  {
    id: 'playstation',
    name: 'PlayStation (PS4, PS5)',
    icon: Gamepad2,
    description: 'PlayStation Family Management — set through your parent account.',
    steps: [
      { title: 'Sign into PlayStation Network as the parent', detail: 'Use the main PSN account — not your child\'s.' },
      { title: 'Go to Account Management → Family Management', detail: 'You can do this on the console or at playstation.com.' },
      { title: 'Add a child account', detail: 'If they already have one, link it to your family. If not, create one for them.' },
      { title: 'Set monthly spending limit', detail: 'Cap how much they can spend in the PlayStation Store per month.' },
      { title: 'Set daily play time', detail: 'Hours per day and restricted times (like school hours or bedtime).' },
      { title: 'Set age-based game restrictions', detail: 'Choose the highest game rating they can play (E, T, M).' },
      { title: 'Control communication', detail: 'Limit or disable chat, messages, and user-created content.' },
    ],
    officialLink: { label: 'PlayStation — Family & Parental Controls', url: 'https://www.playstation.com/en-us/support/account/psn-safety-parental-controls/' },
  },
  {
    id: 'nintendo',
    name: 'Nintendo Switch',
    icon: Gamepad2,
    description: 'Nintendo Switch Parental Controls app — detailed and easy to use.',
    steps: [
      { title: 'Download the Nintendo Switch Parental Controls app', detail: 'Free on iPhone or Android.' },
      { title: 'Sign in with your Nintendo Account', detail: 'Create one if you don\'t have it. It only takes a minute.' },
      { title: 'Link the app to the Switch', detail: 'On the Switch: System Settings → Parental Controls → link the registration code.' },
      { title: 'Set daily play time limit', detail: 'The Switch will alert them when time is up. You can suspend play or let them finish.' },
      { title: 'Set bedtime alarm', detail: 'Switch alerts at bedtime and can suspend the game automatically.' },
      { title: 'Set age-based restrictions', detail: 'Use the preset age groups or customize by game rating.' },
      { title: 'Control social features', detail: 'Block posting to social media from the Switch and restrict in-game chat.' },
    ],
    officialLink: { label: 'Nintendo Switch Parental Controls', url: 'https://www.nintendo.com/us/switch/parental-controls/' },
  },
  {
    id: 'tv',
    name: 'Smart TV / Streaming',
    icon: Tv,
    description: 'Netflix, Disney+, YouTube, and smart TVs all have kid-friendly profiles.',
    steps: [
      { title: 'Create a Kids profile on each service', detail: 'Netflix, Disney+, Hulu, Max — every major service has a Kids profile option.' },
      { title: 'Set a PIN to lock adult profiles', detail: 'So they can\'t switch to an adult profile without your permission.' },
      { title: 'YouTube: use YouTube Kids app instead', detail: 'Separate app with only kid-appropriate content. Regular YouTube is not filtered for kids.' },
      { title: 'Set age rating limits on the TV itself', detail: 'Most smart TVs let you block content above a certain rating in Settings → Parental Controls.' },
      { title: 'Turn off autoplay', detail: 'So the next video doesn\'t start automatically after a show ends.' },
      { title: 'Review watch history monthly', detail: 'Most services let parents see what their kids watched in the past 30 days.' },
    ],
    officialLink: { label: 'Common Sense Media — Streaming Guides', url: 'https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-parental-controls' },
  },
  {
    id: 'router',
    name: 'Home Wi-Fi Router',
    icon: Router,
    description: 'Block sites and schedule internet downtime at the router — applies to every device on your network.',
    steps: [
      { title: 'Log into your router', detail: 'Open a web browser and go to 192.168.1.1 or 192.168.0.1. Use the admin password on the router sticker.' },
      { title: 'Look for "Parental Controls" or "Access Control"', detail: 'Usually under Advanced Settings. Names vary by brand (Netgear, Linksys, TP-Link, etc.).' },
      { title: 'Add your child\'s devices', detail: 'Select their phone, tablet, laptop, and console from the device list.' },
      { title: 'Set a Wi-Fi schedule', detail: 'Block internet during bedtime hours or homework time.' },
      { title: 'Block adult websites', detail: 'Many routers have built-in filters. Or use OpenDNS Family Shield for stronger filtering.' },
      { title: 'Consider a dedicated tool', detail: 'Circle, Gryphon, or Eero Secure+ offer much better parental control than stock router apps.' },
    ],
    officialLink: { label: 'OpenDNS Family Shield (free)', url: 'https://www.opendns.com/setupguide/?url=familyshield' },
  },
];

export default function ParentalControlsWizard() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    const next = new Set(completedSteps);
    if (next.has(index)) next.delete(index); else next.add(index);
    setCompletedSteps(next);
  };

  const resetPlatform = () => {
    setSelectedPlatform(null);
    setCompletedSteps(new Set());
  };

  return (
    <>
      <SEOHead
        title="Parental Controls Wizard — Free Setup Guide"
        description="Step-by-step wizard to set up parental controls on iPhone, Android, Xbox, PlayStation, Nintendo Switch, smart TVs, and Wi-Fi routers."
        path="/tools/parental-controls-wizard"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Family Safety</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Parental Controls Wizard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Pick the device your child uses. We'll walk you through setting up screen time limits, content filters, and purchase approvals — step by step, in plain English.
            </p>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          {!selectedPlatform ? (
            <div>
              <h2 className="text-xl font-semibold mb-6">What device do they use?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PLATFORMS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card
                      key={p.id}
                      className="cursor-pointer hover:border-primary transition-colors"
                      onClick={() => setSelectedPlatform(p)}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{p.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <Button variant="ghost" size="sm" onClick={resetPlatform} className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />Pick a different device
              </Button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{selectedPlatform.name}</h2>
                <p className="text-muted-foreground">{selectedPlatform.description}</p>
              </div>

              <div className="flex items-center justify-between mb-4 p-3 rounded-md bg-muted/50 border border-border">
                <span className="text-sm font-medium">
                  {completedSteps.size} of {selectedPlatform.steps.length} steps done
                </span>
                <div className="flex-1 mx-4 h-2 bg-border rounded-full overflow-hidden max-w-xs">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(completedSteps.size / selectedPlatform.steps.length) * 100}%` }}
                  />
                </div>
                {completedSteps.size === selectedPlatform.steps.length && (
                  <Badge className="bg-green-600 hover:bg-green-600">Complete</Badge>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {selectedPlatform.steps.map((step, i) => {
                  const done = completedSteps.has(i);
                  return (
                    <Card
                      key={i}
                      className={`cursor-pointer transition-colors ${done ? 'border-green-600/40 bg-green-50/40 dark:bg-green-950/20' : 'hover:border-primary/40'}`}
                      onClick={() => toggleStep(i)}
                    >
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {done ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs shrink-0">Step {i + 1}</Badge>
                            <h4 className={`font-semibold ${done ? 'line-through text-muted-foreground' : ''}`}>{step.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-semibold mb-1">Official setup guide</h4>
                    <p className="text-sm text-muted-foreground">For screenshots and the latest version, check the official documentation.</p>
                  </div>
                  <Button asChild>
                    <a href={selectedPlatform.officialLink.url} target="_blank" rel="noopener noreferrer">
                      {selectedPlatform.officialLink.label}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-10 p-5 rounded-md border border-border bg-muted/30">
                <h3 className="font-semibold mb-2">Quick Tip</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The best parental control is an ongoing conversation. Tell your kids what you're blocking and why, and check in regularly. Kids who understand the reasons behind rules are much less likely to try to work around them.
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="border-t border-border bg-muted/30">
          <div className="container py-10">
            <h3 className="text-lg font-semibold mb-4">Related tools & guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Family Tech Agreement</h4>
                  <p className="text-xs text-muted-foreground mb-3">Printable rules for screens, passwords, and online behavior.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/tools/family-tech-agreement">Open <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Home Network Map</h4>
                  <p className="text-xs text-muted-foreground mb-3">See every device on your Wi-Fi — spot unknown ones.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/tools/home-network-map">Open <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1 text-sm">Guide: Keeping Kids Safe Online</h4>
                  <p className="text-xs text-muted-foreground mb-3">Age-by-age guide to online safety conversations.</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/guides/keeping-kids-safe-online">Read <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
