import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ChevronRight, AlertTriangle, ShieldAlert, Users, Flag } from 'lucide-react';

const APPS: { name: string; tagline: string; note: string }[] = [
  { name: 'Match', tagline: 'Long-running paid app, mixed ages', note: 'Profiles are reviewed and most users pay, which cuts down on throwaway scam accounts.' },
  { name: 'OurTime', tagline: 'Built for ages 50 and over', note: 'Owned by the same parent as Match. Smaller pool, but the audience matches your age range.' },
  { name: 'Silver Singles', tagline: 'Ages 50+, longer questionnaire', note: 'Personality test based. Slower matching, fewer fake profiles than free apps.' },
  { name: 'eHarmony', tagline: 'Long questionnaire, paid only', note: 'The paywall keeps most scammers out. Best for people looking for long-term partners.' },
  { name: 'Bumble', tagline: 'Free, women message first', note: 'Younger crowd, but a Bumble filter lets you set 55+. Women send the first message, which reduces harassment.' },
];

const PROFILE_RULES: { title: string; detail: string }[] = [
  { title: 'No full last name', detail: 'First name only on the profile. A last name plus your city is enough for a stranger to find your home address.' },
  { title: 'No work address or employer name', detail: 'Saying "Retired nurse" is fine. Saying "I worked at Mercy Hospital in Cleveland for 30 years" lets a scammer find you on LinkedIn and at home.' },
  { title: 'No photos that show your neighborhood', detail: 'Skip pictures taken in front of your house, your street sign, your church, or your local coffee shop. The background gives away where you live.' },
  { title: 'No photos with grandchildren', detail: 'Children should never appear on a public dating profile. Romance scammers also target families through the kids in the photos.' },
  { title: 'New email, not your main one', detail: 'Make a free Gmail account for dating apps. If a profile is compromised or sold, your real inbox stays clean.' },
  { title: 'Phone number stays private', detail: 'Use the in-app chat for the first few weeks. Never share your real number until you have video-called and met in person.' },
];

const RED_FLAGS: { title: string; detail: string }[] = [
  { title: 'They will not video call', detail: 'Every excuse — broken camera, bad signal, shy on video. Real people will video chat within a week or two. Scammers cannot, because the photos are stolen.' },
  { title: 'They ask for money — any amount', detail: 'A real partner you have never met in person does not need 200 dollars for a phone bill, a plane ticket, or hospital fees. This is the single biggest red flag.' },
  { title: '"Deployed military" or "oil rig worker"', detail: 'These two cover stories appear in most romance scams because they explain why the person cannot meet, video, or call. The US military does not need your money to come home.' },
  { title: 'They say "I love you" within days', detail: 'Real feelings take weeks or months. Scammers move fast on purpose to bond you emotionally before the money request comes.' },
  { title: 'They live abroad or are "traveling for work"', detail: 'Conveniently far away, conveniently unable to meet. Most romance scams are run by groups overseas. Stick to people in driving distance.' },
  { title: 'A sudden sob story', detail: 'Sick child, frozen bank account, customs fees, hospital bill. The story changes but the ending is always the same — they need money and only you can help.' },
  { title: 'Their photos look like a model', detail: 'Reverse-image search any profile photo at images.google.com. If the same picture shows up under a different name, the profile is fake.' },
  { title: 'They want to move off the app fast', detail: 'Within a day or two they push you to WhatsApp, Telegram, or text. Dating apps log scam reports. Off-app, there is no record and no protection.' },
];

const FIRST_MEET: { title: string; detail: string }[] = [
  { title: 'Meet in a busy public place', detail: 'A coffee shop, diner, or restaurant in daylight. Never their home, never your home, never an isolated park or hiking trail.' },
  { title: 'Drive yourself, both ways', detail: 'Your own car, your own keys. Do not get picked up. Do not let them drive you home, even if the date goes well — they should not see your address yet.' },
  { title: 'Tell a friend the plan', detail: 'Name of the person, name of the place, time you will be there, time you expect to be home. Send a photo of their dating profile to your friend before you leave.' },
  { title: 'Share your live location', detail: 'iPhone: Find My → Share My Location with a trusted friend for the evening. Android: Google Maps → menu → Location sharing → For 1 hour. They can see where you are in real time.' },
  { title: 'Have an exit plan', detail: 'Set a "check-in" text from a friend at the 30-minute mark. If you need to leave, you have an excuse ready. Trust your gut — leave any time something feels off.' },
  { title: 'No alcohol on the first meet', detail: 'Coffee, lunch, or a walk — not drinks. Stay sharp until you know this person is who they said they were.' },
];

const REPORT_STEPS: { title: string; detail: string }[] = [
  { title: 'Report inside the app', detail: 'Every major dating app has a flag or "Report" button on each profile. Choose "Fake profile" or "Asked for money". The app removes the profile and warns other users.' },
  { title: 'Block them', detail: 'Block on the dating app, then block their phone number and email if you shared them. They will try to come back under a new name.' },
  { title: 'Report to the FTC', detail: 'Go to ReportFraud.ftc.gov. The Federal Trade Commission tracks romance scams and uses your report to shut down scam networks.' },
  { title: 'Report to the FBI IC3', detail: 'File at IC3.gov — the FBI Internet Crime Complaint Center. Important if any money changed hands or if the contact felt threatening.' },
  { title: 'Talk to your bank right away', detail: 'If you sent any money — gift cards, wire transfer, Zelle, cryptocurrency — call your bank the same day. A few transfers can be reversed if reported within 24 to 48 hours.' },
  { title: 'Tell someone you trust', detail: 'A family member, your doctor, or a friend. Romance-scam victims feel ashamed and stay quiet, which is exactly what the scammer wants. Speaking up helps you and helps the next person.' },
];

export default function OnlineDatingSafety() {
  return (
    <>
      <SEOHead
        title="Online Dating Safety for Older Adults"
        description="A plain-English safety guide to dating apps for adults 55+. Best apps, profile rules, romance-scam red flags, first-meet rules, and how to report scam profiles."
        path="/tools/online-dating-safety"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Dating Safety for Older Adults</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real connection is possible after 55. Here is how to find it without losing your money or your peace of mind.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Dating Safety' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-amber-900 dark:text-amber-200">FTC warning — romance scams</p>
                <p className="text-xs text-amber-900/80 dark:text-amber-200/80 mt-1">
                  The Federal Trade Commission reports that romance scams cost US victims over $1.3 billion in 2024. Adults 60 and older lose more money per scam than any other age group. The rules below are what protect you.
                </p>
              </div>
            </CardContent>
          </Card>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-rose-600" />
              <h2 className="text-xl font-bold">Five apps worth trying</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">All five are US-based, English-language, and used widely by people over 50. The first three are the most common picks.</p>
            <div className="space-y-3">
              {APPS.map(a => (
                <Card key={a.name} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-sm">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.tagline}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{a.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="h-5 w-5 text-rose-600" />
              <h2 className="text-xl font-bold">Building a safe profile</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Your profile is read by everyone — kind people and scammers alike. Less is safer.</p>
            <div className="space-y-3">
              {PROFILE_RULES.map(r => (
                <Card key={r.title} className="border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h2 className="text-xl font-bold">Eight romance-scam red flags</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">If you see two or more of these, the person is almost certainly a scammer. If you see four or more, stop replying and report the profile.</p>
            <div className="space-y-3">
              {RED_FLAGS.map(f => (
                <Card key={f.title} className="border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{f.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="h-5 w-5 text-rose-600" />
              <h2 className="text-xl font-bold">The first in-person meet</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Meeting in person is the goal. Plan it so that you stay in control of where you are and how you get home.</p>
            <div className="space-y-3">
              {FIRST_MEET.map(m => (
                <Card key={m.title} className="border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{m.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Flag className="h-5 w-5 text-rose-600" />
              <h2 className="text-xl font-bold">How to report a scam profile</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Reporting is free and anonymous. It removes the scammer from the app and helps the FBI track the rings behind these scams.</p>
            <div className="space-y-3">
              {REPORT_STEPS.map(s => (
                <Card key={s.title} className="border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{s.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">One sentence to remember</p>
              <p className="text-xs text-muted-foreground">
                Anyone who says they love you but cannot video call, will not meet in person, and asks you for money is not real — no matter how kind their messages sound.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste a message and see the red flags.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Witness Statement</p>
                <p className="text-xs text-muted-foreground mt-0.5">Write a clear report for police or your bank.</p>
              </Link>
              <Link to="/tools/common-scams-library" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Common Scams Library</p>
                <p className="text-xs text-muted-foreground mt-0.5">Every scam pattern, plain-English.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: a kind person will wait while you take your time. Pressure to move fast — off the app, into love, into money — is the warning sign.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
