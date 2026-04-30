import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ShieldCheck, Monitor, Apple, Smartphone, Wifi, Search, MessageCircle, AppWindow, Baby,
} from 'lucide-react';

export default function ParentalControls() {
  return (
    <>
      <SEOHead
        title="Parental Controls Guide | TekSure"
        description="A beginner-friendly guide for parents on setting up parental controls and keeping kids safe online."
        path="/safety/parental-controls"
      />
      <Navbar />
      <main id="main-content" className="container py-16 min-h-[60vh] max-w-4xl">
        <div className="flex items-center gap-3 mb-2 border-b border-border pb-6">
          <Baby className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Parental Controls Guide</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A plain-English guide to keeping children safe online — from built-in device settings to apps and conversations.
        </p>

        {/* 1. Why Parental Controls Matter */}
        <Section icon={ShieldCheck} title="Why Parental Controls Matter">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Children are going online younger than ever — and while the internet is an amazing learning tool, it also exposes them to content, contacts, and habits that aren't age-appropriate. Parental controls don't replace good conversations, but they add a safety net. Think of them like a seatbelt: you hope you won't need it, but you're glad it's there.
          </p>
        </Section>

        <Separator className="my-8" />

        {/* 2. Built-In Device Controls */}
        <Section icon={Monitor} title="Built-In Device Controls">
          <p className="text-sm text-muted-foreground mb-6">
            Every major device has free parental controls built in. Here's how to set them up:
          </p>

          <SubSection title="Windows — Family Safety">
            <Steps steps={[
              'Go to Settings → Accounts → Family & other users.',
              'Click "Add a family member" and create a child account with their own email.',
              'Sign in at family.microsoft.com to manage their settings.',
              'Set screen time limits, app restrictions, and content filters.',
              'Turn on activity reporting to see what sites and apps they use.',
            ]} />
          </SubSection>

          <SubSection title="Mac — Screen Time">
            <Steps steps={[
              'Open System Settings → Screen Time.',
              'If setting up for a child, click "Set Up for a Child" and follow the prompts.',
              'Use Content & Privacy Restrictions to block adult websites and restrict app purchases.',
              'Set Downtime schedules to limit use during bedtime or homework hours.',
              'Use App Limits to cap time on specific categories like games or social media.',
            ]} />
          </SubSection>

          <SubSection title="iPhone / iPad — Screen Time">
            <Steps steps={[
              'Go to Settings → Screen Time → Turn On Screen Time.',
              'Tap "This is My Child\'s iPhone/iPad" and set a Screen Time passcode.',
              'Use Content & Privacy Restrictions to filter web content and block explicit material.',
              'Set App Limits to control how long they spend on specific apps.',
              'Enable Downtime to disable most apps during set hours.',
            ]} />
          </SubSection>

          <SubSection title="Android — Family Link">
            <Steps steps={[
              'Download the Google Family Link app on your phone.',
              'Create a Google Account for your child (under 13) through the app.',
              'Link their account to their Android device.',
              'Set daily screen time limits and a bedtime schedule.',
              'Approve or block app downloads and review their activity.',
            ]} />
          </SubSection>
        </Section>

        <Separator className="my-8" />

        {/* 3. Router-Level Controls */}
        <Section icon={Wifi} title="Router-Level Controls">
          <p className="text-sm text-muted-foreground mb-4">
            Router-level controls protect every device on your home network at once — including smart TVs, tablets, and games consoles that might not have their own parental settings.
          </p>
          <Steps steps={[
            'Find your router\'s admin page — usually 192.168.0.1 or 192.168.1.1 in your browser.',
            'Log in with the admin username and password (often on a sticker on the router).',
            'Look for "Parental Controls", "Access Restrictions", or "Content Filtering" in the menu.',
            'Add your child\'s devices and set website filters or time schedules.',
            'Some ISPs (like BT, Sky, Virgin) offer free parental controls through their own apps — check your provider\'s website.',
          ]} />
        </Section>

        <Separator className="my-8" />

        {/* 4. Safe Search Settings */}
        <Section icon={Search} title="Safe Search Settings">
          <p className="text-sm text-muted-foreground mb-4">
            Safe search filters help block explicit content from search results and video platforms.
          </p>

          <SubSection title="Google Safe Search">
            <Steps steps={[
              'Go to google.com/preferences.',
              'Tick "Turn on SafeSearch" and click Save.',
              'For extra control, sign in with a supervised Google account so the setting can\'t be turned off.',
            ]} />
          </SubSection>

          <SubSection title="YouTube Restricted Mode">
            <Steps steps={[
              'Open YouTube and click your profile icon → Settings.',
              'Scroll to the bottom and toggle "Restricted Mode" on.',
              'For children under 13, use the YouTube Kids app instead for a safer experience.',
            ]} />
          </SubSection>

          <SubSection title="Bing Safe Search">
            <Steps steps={[
              'Go to bing.com/account.',
              'Under "SafeSearch", select "Strict" to filter out adult content.',
              'Click Save to apply the setting.',
            ]} />
          </SubSection>
        </Section>

        <Separator className="my-8" />

        {/* 5. Apps to Help */}
        <Section icon={AppWindow} title="Apps to Help">
          <p className="text-sm text-muted-foreground mb-4">
            These well-known apps offer additional monitoring and filtering beyond what's built into devices:
          </p>
          <div className="space-y-3">
            {[
              { name: 'Google Family Link', desc: 'Free app for Android and Chromebook. Manage apps, screen time, and location tracking from your own phone.' },
              { name: 'Apple Screen Time', desc: 'Built into every iPhone, iPad, and Mac. Set app limits, content filters, and downtime — all managed through Family Sharing.' },
              { name: 'Circle', desc: 'Works at the network level to manage every device in your home. Set time limits by category, pause the internet, and filter content.' },
              { name: 'Qustodio', desc: 'Cross-platform app with web filtering, screen time management, location tracking, and social media monitoring.' },
              { name: 'Bark', desc: 'Monitors texts, emails, and 30+ social media platforms for signs of cyberbullying, depression, and online predators.' },
            ].map((app) => (
              <Card key={app.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="py-3 flex gap-3">
                  <AppWindow className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{app.name}</p>
                    <p className="text-sm text-muted-foreground">{app.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator className="my-8" />

        {/* 6. Tips for Talking to Kids */}
        <Section icon={MessageCircle} title="Tips for Talking to Kids About Online Safety">
          <ul className="space-y-3">
            {[
              'Start early and keep it casual — bring it up naturally, not as a lecture.',
              'Ask what they enjoy online and show genuine interest before jumping to rules.',
              'Explain why rules exist — "I\'m not spying, I\'m keeping you safe, just like wearing a seatbelt."',
              'Encourage them to come to you if anything online makes them uncomfortable — without fear of punishment.',
              'Revisit the conversation regularly as they grow — what\'s appropriate at age 8 changes by age 12.',
            ].map((tip, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </Section>

        <Separator className="my-8" />

        <Card className="rounded-2xl border border-primary/20 bg-primary/5">
          <CardContent className="py-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more about staying safe online?</p>
            <Link to="/safety/scam-alerts" className="text-primary font-medium hover:underline">
              View our Scam Alerts Guide →
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
        <Icon className="h-6 w-6 text-primary" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="text-sm text-muted-foreground flex gap-3">
          <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
            {i + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
