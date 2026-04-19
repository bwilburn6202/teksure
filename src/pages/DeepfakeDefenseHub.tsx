import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShieldAlert,
  Eye,
  Phone,
  Video,
  KeyRound,
  Search,
  Flag,
  Lock,
  AlertTriangle,
  ListChecks,
  Users,
  ExternalLink,
  CheckCircle2,
  Siren,
  Megaphone,
} from 'lucide-react';

type Item = {
  name: string;
  url?: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof ShieldAlert;
  badge: string;
  intro: string;
  accent: string;
  items: Item[];
  emphasis?: boolean;
};

const sections: Section[] = [
  {
    id: 'what-is',
    title: "What's a deepfake?",
    icon: ShieldAlert,
    badge: 'THE BASICS',
    accent: 'from-slate-50 to-slate-100/40 dark:from-slate-950/30 dark:to-slate-900/10',
    intro:
      'A deepfake is AI-created video, audio, or imagery that looks and sounds real. In 2026 it takes seconds and costs almost nothing to make one — which means they are being used in scams against ordinary people right now.',
    items: [
      {
        name: 'Who can make one',
        description:
          'Anyone with a laptop. Voice clones need as little as 3 seconds of audio from a voicemail or social media video. Face swaps and full video fakes take a few minutes on free or $10/mo websites.',
      },
      {
        name: 'Who they are used against',
        description:
          'Not celebrities — you. Grandparents, parents of college students, small business owners wiring money, HR staff processing "urgent" requests from "the CEO." The FBI logged over $500 million in AI-assisted impersonation scams last year.',
      },
      {
        name: 'Why this page exists',
        description:
          'You cannot stop deepfakes from being made. But you can train yourself and your family to not fall for them. Most of the defense is one habit, repeated consistently.',
      },
    ],
  },
  {
    id: 'threats',
    title: 'The three biggest threats',
    icon: AlertTriangle,
    badge: 'KNOW YOUR ENEMY',
    accent: 'from-red-50 to-red-100/40 dark:from-red-950/30 dark:to-red-900/10',
    intro:
      'Most deepfake crime falls into three buckets. If you know these three, you know the pattern when it lands.',
    items: [
      {
        name: 'Voice cloning scams',
        description:
          '"Grandma, I am in trouble, please send money." The voice sounds exactly like your grandchild — because a 3-second Instagram clip was enough to clone it. The caller is crying, panicking, telling you not to tell Mom. It is NOT your grandchild.',
      },
      {
        name: 'Video deepfakes',
        description:
          'A celebrity endorsing a miracle pill or crypto scheme they have never heard of. A politician saying something inflammatory they never said. Footage of "your boss" in a Zoom call asking you to wire money urgently.',
      },
      {
        name: 'Image deepfakes',
        description:
          '"Proof" photos used in romance scams (a handsome stranger\'s face on a generic soldier photo). Fake IDs for verification fraud. Fake "nudes" used to extort teenagers and adults. None of them are real.',
      },
    ],
  },
  {
    id: 'family-password',
    title: 'Family password system (most important)',
    icon: KeyRound,
    badge: 'DO THIS TODAY',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    intro:
      'Set up a family password right now. A word or phrase only your family knows. When anyone calls claiming to be in trouble, ask for the password. Any voice can be cloned in seconds — this cannot.',
    emphasis: true,
    items: [
      {
        name: 'Pick a word or phrase',
        description:
          'Something memorable but not guessable from social media. Not a pet name. Not a hometown. Something silly: "purple dog," "Tuesday pancakes," "Aunt Linda\'s piano." Silly is better — harder to guess, easier to remember.',
      },
      {
        name: 'Share it with everyone who matters',
        description:
          'Kids, parents, spouse, grandparents, close friends, anyone who might call you in a panic or be called about. Tell them in person or on a video call. Not in a text, not in an email.',
      },
      {
        name: 'Keep it OFF the internet',
        description:
          'Never in a group chat. Never in an email. Never on social media. Never written down on a Post-it on your fridge where a house sitter could photograph it. It only works if scammers cannot find it.',
      },
      {
        name: 'Use it EVERY time',
        description:
          'If someone calls in distress asking for money, ask for the password before you react. Real family will not be offended — they will be relieved you are careful. If the caller refuses, gets angry, or says "this is not the time" — hang up.',
      },
      {
        name: 'Refresh it if you think it has leaked',
        description:
          'If someone outside the circle asks about it, or you discover it was in a hacked account, pick a new one. Takes 30 seconds.',
      },
    ],
  },
  {
    id: 'spot-video',
    title: 'How to spot video deepfakes',
    icon: Video,
    badge: 'YOUR EYES',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'Deepfake technology is improving fast, but most 2026 fakes still have visible giveaways if you slow down and look carefully.',
    items: [
      {
        name: 'Blinking looks wrong',
        description:
          'Too much, too little, or oddly-timed. Real eye movement has subtle drift and micro-blinks; AI often gets this uncanny.',
      },
      {
        name: 'Lips do not match audio perfectly',
        description:
          "Watch the mouth during 'b', 'p', and 'f' sounds — AI often lets lips stay open or closed at the wrong moment. Slow the video down to half speed if you can.",
      },
      {
        name: 'Skin texture is too smooth or too perfect',
        description:
          'Real skin has pores, small reflections, slight asymmetry. Deepfake faces often look like they went through a beauty filter — airbrushed, waxy, or weirdly glowing.',
      },
      {
        name: 'Lighting inconsistencies',
        description:
          'The face is lit from one direction, the neck from another. Shadows fall differently on the face than on the background. The person\'s glasses do not reflect the room they claim to be in.',
      },
      {
        name: 'Slow Ken Burns zooms and static shots',
        description:
          'Many low-effort deepfakes hide flaws with very slow zooms on a single photo or stiff, locked-camera shots. Real videos have natural handheld motion or varied angles.',
      },
      {
        name: 'Audio quality "convenient"',
        description:
          'Background is weirdly silent, or very noisy in a uniform way. Echo does not match the room. No natural breathing or mouth sounds between words.',
      },
    ],
  },
  {
    id: 'spot-voice',
    title: 'How to spot voice clones',
    icon: Phone,
    badge: 'YOUR EARS',
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    intro:
      'Voice clones are harder to spot than video fakes — the tech is genuinely good. Rely less on how the voice sounds and more on how the call behaves.',
    items: [
      {
        name: 'Urgency about money',
        description:
          'Needs cash right now. Cannot wait for the bank to open. Cannot call back in five minutes. Real family emergencies almost never require a wire transfer in the next 10 minutes.',
      },
      {
        name: 'Will not answer personal questions',
        description:
          "Ask something only they would know — not something on Facebook. 'What did Aunt Linda make for Thanksgiving last year?' If there is stammering, deflection, or 'I cannot hear you right now,' hang up.",
      },
      {
        name: 'Poor audio quality (often intentional)',
        description:
          'A muffled or crackly connection hides AI artifacts. "I am in a noisy place" or "this is a bad cell signal" is a red flag when combined with a money request.',
      },
      {
        name: 'Refuses to switch to video',
        description:
          'Any excuse not to go to FaceTime, Google Meet, or Zoom. "My phone is broken." "I am at the police station." "They took my phone." Pressure for video is the single fastest way to unmask a scam.',
      },
      {
        name: 'Asks for gift cards, wire transfers, or crypto',
        description:
          'Real emergencies are paid with credit cards or real bank transfers, which can be reversed. Gift cards, wires, and crypto cannot. These three payment methods are the universal scam signature.',
      },
    ],
  },
  {
    id: 'verify',
    title: 'Verification techniques',
    icon: CheckCircle2,
    badge: 'CONFIRM',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    intro:
      'When your instincts say "something is off," these are the five moves that end the scam in under 5 minutes.',
    items: [
      {
        name: 'Hang up and call back on a KNOWN number',
        description:
          "Not the number they called from. Not a number they give you. The number you already have in your phone for that person or institution. If it was real, they will pick up or call you right back.",
      },
      {
        name: 'Ask specific personal questions',
        description:
          "Things that are not on Facebook. A shared inside joke. The name of the family dog that died ten years ago. The color of Grandma's kitchen wall. Scammers and AI will stumble.",
      },
      {
        name: 'Switch to video call',
        description:
          '"I want to see your face. Let me FaceTime you." A real loved one will do it. A scammer will invent a reason why they cannot.',
      },
      {
        name: 'Ask for the family password',
        description:
          'The single fastest test. If the answer is hesitation, anger, or a different word — it is a scam.',
      },
      {
        name: 'Wait 15 minutes and reach out another way',
        description:
          'Text the person. Call their spouse. Message a friend who would know. If the story was real, 15 minutes does not change it. If it was fake, the scammer will have moved on to the next target.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Real tools to help',
    icon: Search,
    badge: 'TECH YOU CAN USE',
    accent: 'from-indigo-50 to-indigo-100/40 dark:from-indigo-950/30 dark:to-indigo-900/10',
    intro:
      'None of these are magic, but used together they catch a lot of fakes before they land.',
    items: [
      {
        name: 'Deepware',
        url: 'https://deepware.ai',
        description:
          'Free deepfake-detection tool. Paste a video URL or upload a clip; it scans for known AI-generation fingerprints. Not perfect but a useful first check.',
      },
      {
        name: 'Intel FakeCatcher',
        description:
          'Built into some Intel-powered browsers and platforms. Analyzes blood-flow signals in face pixels (real skin flushes subtly; AI faces do not) in real time.',
      },
      {
        name: 'Reverse image search',
        url: 'https://tineye.com',
        description:
          'Paste any profile photo into TinEye or Google Lens. If it shows up as a stock photo, a model\'s portfolio, or someone else entirely — it is a fake identity.',
      },
      {
        name: 'Google Lens',
        url: 'https://lens.google.com',
        description:
          'Works straight from a phone photo. Upload a screenshot of the suspicious person — if Lens finds the same face on other names, you have a scammer.',
      },
      {
        name: 'Truepic',
        url: 'https://truepic.com',
        description:
          'Photo-verification service used by insurers and journalists. Its Lens app captures "certified" photos that can be verified as unedited — useful if you need to prove something is real.',
      },
    ],
  },
  {
    id: 'report',
    title: 'Reporting deepfakes',
    icon: Flag,
    badge: 'FIGHT BACK',
    accent: 'from-orange-50 to-orange-100/40 dark:from-orange-950/30 dark:to-orange-900/10',
    intro:
      'Reporting takes 5–10 minutes. It helps investigators, and a surprising number of these cases do lead to arrests when patterns are pieced together.',
    items: [
      {
        name: 'FTC — ReportFraud.ftc.gov',
        url: 'https://reportfraud.ftc.gov',
        description:
          'The Federal Trade Commission\'s front door for all US consumer fraud. Report deepfake scams, romance scams, and impersonation. Feeds directly to law enforcement.',
      },
      {
        name: 'FBI IC3',
        url: 'https://www.ic3.gov',
        description:
          'The FBI\'s Internet Crime Complaint Center. Use for any scam involving over $1,000, business email compromise, or wire transfers. Your report goes into the federal database used across investigations.',
      },
      {
        name: 'Your state Attorney General',
        description:
          'Every state AG office has a consumer fraud reporting form online. Good for scams that cross state lines or involve a specific local business.',
      },
      {
        name: 'Platform reporting (Instagram, Facebook, TikTok, X)',
        description:
          'Every major platform has a deepfake / impersonation / manipulated-media report button. Use it. Large volumes of reports move the needle on takedowns faster than a single one.',
      },
      {
        name: 'If you sent money',
        description:
          'Call the sending bank or card within 24 hours — reversals are sometimes possible, especially on credit cards. Call local police for a report number (required by some insurance and tax claims). Change any compromised passwords immediately.',
      },
    ],
  },
  {
    id: 'protect-you',
    title: 'Protect your own voice and image',
    icon: Lock,
    badge: 'SHRINK YOUR TARGET',
    accent: 'from-purple-50 to-purple-100/40 dark:from-purple-950/30 dark:to-purple-900/10',
    intro:
      'The less public audio and video of you that exists, the harder you are to clone. You do not have to go dark — just dial back a little.',
    items: [
      {
        name: 'Lock down social media',
        description:
          'Switch personal Instagram, Facebook, and TikTok to private. Profile photos can be public; videos, stories, and voice clips should be for followers only.',
      },
      {
        name: 'Do not post voice messages publicly',
        description:
          'Public TikTok voiceovers, podcast clips, and Instagram stories with you talking — these are prime voice-clone training data. Keep spoken content to private accounts.',
      },
      {
        name: 'Think twice before public video',
        description:
          'Especially in distress or emotional contexts. A clip of you crying at a wedding is perfect training data for a "your family member is in trouble" scam targeting your parents.',
      },
      {
        name: 'Children especially',
        description:
          'Their voices and faces should not be on public accounts. Scammers target grandparents using cloned grandchild voices — the clip came from somewhere. Share in Apple Shared Albums, Google Photos shared albums, or private family messaging instead.',
      },
      {
        name: 'Review what is already public',
        description:
          'Google your own name. Check old blogs, school sites, company "about" pages. Request takedowns where you can, especially of voice clips and public children\'s photos.',
      },
    ],
  },
  {
    id: 'scripts',
    title: 'The scariest scam scripts (so you recognize them)',
    icon: Siren,
    badge: 'KNOW THE SCRIPTS',
    accent: 'from-red-50 to-red-100/40 dark:from-red-950/30 dark:to-red-900/10',
    intro:
      'Reading the exact wording of these scams is unsettling — but a parent who has read this list will recognize it in real time, and hang up.',
    items: [
      {
        name: 'Kidnapping scam with cloned child voice',
        description:
          'You answer the phone. You hear your child screaming "Mom! Mom, help me!" A man comes on: "We have your daughter. Do not call police. Wire $5,000 now." The voice is real. The kidnapping is not. Call or text your child on their actual phone — they will answer.',
      },
      {
        name: '"Your boss is demanding a wire transfer"',
        description:
          'A voice that sounds like your CEO, or a Zoom video that looks like them, telling you to urgently wire funds to close a deal. Every real company has a wire-verification process — always, always use it, even when the boss seems impatient.',
      },
      {
        name: '"Your spouse was in an accident"',
        description:
          'A tearful voice claiming to be your spouse, a police officer, or an ER doctor asking you to pay a bail or fee before they can "release them." Real hospitals and police never demand payment by phone for release. Hang up. Call your spouse directly.',
      },
      {
        name: 'Fake politician robocalls',
        description:
          '"This is [name] asking you not to vote on Tuesday." Voters in New Hampshire received cloned-voice calls in 2024. If a political call sounds real but the message is strange, it probably is not real.',
      },
      {
        name: '"Grandma, I got arrested"',
        description:
          'The classic. A crying voice that sounds exactly like your grandchild. "Please do not tell Mom. I need bail money. Buy $500 in Google Play cards and read me the numbers." No court, anywhere, takes gift cards.',
      },
    ],
  },
  {
    id: 'stay-ahead',
    title: 'Stay ahead',
    icon: Megaphone,
    badge: 'KEEP CURRENT',
    accent: 'from-teal-50 to-teal-100/40 dark:from-teal-950/30 dark:to-teal-900/10',
    intro:
      'Scams evolve. Following one or two of these voices in your feed is enough to stay a month ahead of what scammers are trying.',
    items: [
      {
        name: '@FTC / Consumer.ftc.gov',
        url: 'https://consumer.ftc.gov',
        description:
          'The FTC\'s consumer alerts blog and @FTC on social. Clear writing, real case studies, no panic.',
      },
      {
        name: 'Mark Cuban\'s warnings',
        description:
          'Cuban has been vocal about deepfake impersonations of himself on social. Following him on X or Instagram gets you concrete examples of what current scams look like.',
      },
      {
        name: 'AARP Fraud Watch Network',
        url: 'https://www.aarp.org/money/scams-fraud/',
        description:
          'Aimed at seniors but useful at any age. Free helpline at 1-877-908-3360 if you think you or a family member is being targeted.',
      },
      {
        name: 'CISA StopRansomware',
        url: 'https://www.cisa.gov',
        description:
          'Cybersecurity and Infrastructure Security Agency — federal alerts on active threats, especially business impersonation.',
      },
    ],
  },
  {
    id: 'action-plan',
    title: 'Your action plan',
    icon: ListChecks,
    badge: 'DO THIS',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'Everything on this page condensed into three things you can actually finish this month.',
    items: [
      {
        name: 'Today: Set up a family password',
        description:
          'Pick a silly, memorable word. Call or video your parents, kids, siblings. Make sure everyone knows it and understands when to use it. Takes 15 minutes. Saves careers and life savings.',
      },
      {
        name: 'This week: Lock down social media',
        description:
          'Go to every account (yours, your kids\', your parents\') and switch personal content to private / friends-only. Remove old public voice clips. Ten minutes per account.',
      },
      {
        name: 'This month: Train your family',
        description:
          'Share this page with parents, grandparents, and anyone over 60 in your life. Walk them through the three threats and the five verification steps. Run a "pretend scam" drill: "What would you do if I called in trouble right now?"',
      },
    ],
  },
];

export default function DeepfakeDefenseHub() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Deepfake Defense — Spot AI-Generated Scams | TekSure"
        description="AI is being used against you in voice-cloning scams, video deepfakes, and romance fraud. Here is how to spot them, verify real from fake, and protect your family — starting with a family password."
        path="/deepfake-defense-hub"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300">
            <ShieldAlert className="w-4 h-4" />
            <span className="text-sm font-medium">Deepfake Defense Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Is Being Used Against You.
            <br />
            <span className="text-red-600 dark:text-red-400">Here's How to Fight Back.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Voice clones. Fake videos. "Your grandchild is in jail" calls that sound exactly like
            her. The scams are already here — and the defense is simpler than you think. Start with
            a family password, today.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-4 py-2 rounded-full border border-border hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <Card
                  className={`overflow-hidden bg-gradient-to-br ${section.accent} border-2 ${
                    section.emphasis ? 'ring-4 ring-amber-400/40 shadow-lg' : ''
                  }`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-background shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge
                          variant={section.emphasis ? 'default' : 'secondary'}
                          className="mb-2"
                        >
                          {section.badge}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 rounded-lg bg-background/80 backdrop-blur border border-border/60"
                        >
                          <div className="flex items-start gap-3">
                            <Eye className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target={item.url.startsWith('http') ? '_blank' : undefined}
                                    rel={
                                      item.url.startsWith('http') ? 'noopener noreferrer' : undefined
                                    }
                                    className="font-semibold hover:underline inline-flex items-center gap-1"
                                  >
                                    {item.name}
                                    {item.url.startsWith('http') && (
                                      <ExternalLink className="w-3 h-3" />
                                    )}
                                  </a>
                                ) : (
                                  <span className="font-semibold">{item.name}</span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Final action CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-red-600 to-rose-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Today. This week. This month.</h2>
              <p className="text-red-50 mb-6 max-w-2xl mx-auto text-lg">
                <strong>Today:</strong> Set up a family password.
                <br />
                <strong>This week:</strong> Lock down social media.
                <br />
                <strong>This month:</strong> Train your family.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="/ai-literacy-hub">
                    <Users className="w-4 h-4 mr-2" />
                    Learn more about AI
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-red-700"
                >
                  <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">
                    <Flag className="w-4 h-4 mr-2" />
                    Report a scam to the FTC
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
