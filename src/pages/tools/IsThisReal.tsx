import { useState } from 'react';
import {
  Search,
  Newspaper,
  Mail,
  DollarSign,
  Smartphone,
  Image as ImageIcon,
  Bot,
  UserCircle2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldAlert,
  ShieldCheck,
  Eye,
  ExternalLink,
  RotateCcw,
  ChevronLeft,
  Lightbulb,
  Flag,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ── Types ───────────────────────────────── */
type CategoryId = 'news' | 'email' | 'deal' | 'text' | 'photo' | 'ai' | 'social';

interface ResourceLink {
  label: string;
  url: string;
  note?: string;
}

interface Category {
  id: CategoryId;
  emoji: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  headerBlurb: string;
  checks: string[];
  redFlags: string[];
  greenFlags: string[];
  ifFake: string[];
  resources: ResourceLink[];
}

/* ── Category data ───────────────────────── */
const CATEGORIES: Category[] = [
  /* ── 1. News story ── */
  {
    id: 'news',
    emoji: '📰',
    icon: Newspaper,
    title: 'A news story',
    tagline: 'Went viral, a friend shared it, or the headline looks shocking.',
    headerBlurb:
      "Misleading news stories spread faster than real ones — often because they're designed to get a reaction. Before you share, pass it through these eight checks.",
    checks: [
      'Who is the source? Is it a known outlet (AP, Reuters, your local paper) or a random website you\'ve never heard of?',
      'When was it published? Check the date carefully — old stories often get re-shared as if they\'re new.',
      'Can you find it on Snopes, PolitiFact, or Reuters Fact Check? Copy the headline into their search.',
      'Does the headline match what the article actually says? Click through — sometimes the headline is designed to mislead.',
      'Look for other outlets reporting the same story. If only one obscure site is covering it, be skeptical.',
      'Check the date again, this time inside the article. Has it been edited or updated? When?',
      'Look at the URL carefully. Is it nytimes.com or nytimes.biz-fake.co? Scammers copy real outlet names with small twists.',
      'Do a reverse image search on any photos in the story (Google Lens or TinEye) — stolen or old photos are common.',
    ],
    redFlags: [
      'The headline uses ALL CAPS or too many exclamation points.',
      'The site name is unfamiliar or ends in an unusual domain like ".biz", ".info", or ".news-today".',
      'The article has no author listed, or the author has no other work online.',
      'Photos look stock, heavily edited, or don\'t actually match the story.',
      'It asks you to share urgently "before it gets taken down".',
    ],
    greenFlags: [
      'Multiple established outlets are reporting the same facts.',
      'The article quotes named sources and links to original documents.',
      'The byline is a real reporter with a track record you can look up.',
      'The story has a clear date and has been updated transparently if new info emerged.',
      'Snopes or PolitiFact has already rated it "True" or "Mostly True".',
    ],
    ifFake: [
      "Don't share it — even to debunk it. Sharing spreads it further.",
      'Report the post on Facebook, Instagram, X, or TikTok using their "report false information" option.',
      'Gently let the friend who sent it know, with a link to a fact-check source.',
      'If it\'s impersonating a real outlet, you can report the fake site to Google and to the real outlet directly.',
    ],
    resources: [
      { label: 'Snopes', url: 'https://www.snopes.com', note: 'General fact-checking' },
      { label: 'PolitiFact', url: 'https://www.politifact.com', note: 'Political claims' },
      { label: 'Reuters Fact Check', url: 'https://www.reuters.com/fact-check/', note: 'News verification' },
      { label: 'AP Fact Check', url: 'https://apnews.com/hub/ap-fact-check', note: 'Associated Press' },
      { label: 'Google Reverse Image Search', url: 'https://images.google.com', note: 'Click the camera icon' },
      { label: 'TinEye Reverse Image Search', url: 'https://tineye.com' },
    ],
  },

  /* ── 2. Email ── */
  {
    id: 'email',
    emoji: '📧',
    icon: Mail,
    title: 'An email',
    tagline: 'Claiming to be from a company, bank, or government agency.',
    headerBlurb:
      "Phishing emails are the #1 way accounts get hacked. Real companies rarely ask you to verify your account by email — use these seven checks before you click anything.",
    checks: [
      "Who's the REAL sender address? Hover your mouse over the sender name to see the full email address — look for misspellings or odd domains.",
      'Is the company actually asking you to log in from an email? (Real banks, Amazon, PayPal, etc. almost never do this.)',
      'Are there spelling or grammar errors? Professional companies proofread. Scammers often don\'t.',
      'Is the email using urgent, scary language? ("Act now!", "Your account will be suspended!", "Final notice!")',
      'Instead of clicking the link, open a new browser tab and go to the company\'s official website directly to check your account.',
      'You can forward suspicious phishing emails to reportphishing@apwg.org so they can be added to blocklists.',
      'When in doubt, CALL the company — but use a phone number from their real website or the back of your card, NEVER the number in the email.',
    ],
    redFlags: [
      'The sender email has numbers or odd words in it (e.g. "service@paypa1-support-team.com").',
      'It addresses you as "Dear Customer" or "Dear User" instead of by your name.',
      'Attachments you weren\'t expecting, especially .zip, .exe, or .html files.',
      'Requests for your password, Social Security number, or bank info by email.',
      'Threats about your account being closed or legal action within hours.',
    ],
    greenFlags: [
      'The email comes from the company\'s real domain (e.g. @amazon.com, not @amazon-support.net).',
      'It addresses you by the name you actually use with that company.',
      "It doesn't ask for sensitive information — it just notifies you and points you to their website.",
      'Links in the email, when hovered over, go to the real company domain.',
      "There's no urgency — it gives you time to verify independently.",
    ],
    ifFake: [
      "Don't click any links, don't open attachments, don't reply.",
      'Forward to reportphishing@apwg.org and then to your email provider\'s abuse report (most have a "Report Phishing" button).',
      'If you already clicked a link and entered info, change that password immediately and enable two-factor authentication.',
      'Mark the email as spam/phishing in your inbox, then delete it.',
    ],
    resources: [
      { label: 'Report to APWG', url: 'mailto:reportphishing@apwg.org', note: 'Forward phishing emails here' },
      { label: 'Report to the FTC', url: 'https://reportfraud.ftc.gov', note: 'U.S. Federal Trade Commission' },
      { label: 'Have I Been Pwned', url: 'https://haveibeenpwned.com', note: 'Check if your email is in a leak' },
      { label: 'TekSure Phishing Scanner', url: '/tools/phishing-scanner' },
      { label: 'TekSure Safe Link Checker', url: '/tools/safe-link-checker' },
    ],
  },

  /* ── 3. Deal ── */
  {
    id: 'deal',
    emoji: '💰',
    icon: DollarSign,
    title: 'A too-good-to-be-true deal',
    tagline: 'On Amazon, Facebook, an ad, or in an email.',
    headerBlurb:
      "If a deal seems too good to be true, it almost always is. These eight checks will save you from fake stores, counterfeit products, and ads designed to steal your money.",
    checks: [
      'Does the deal seem impossible? A brand-new iPhone for $50 or designer goods at 90% off is almost always a scam.',
      'Does the seller have real reviews with a history? Look for reviews that mention specific details — not just "great seller!"',
      'Go to the brand\'s real website. Is this deal advertised there? Real discounts from real brands usually are.',
      'Are the product photos stock images copied from the real brand, or real photos with backgrounds, shadows, and slight imperfections?',
      'Does the website look professional, or thrown together? Broken links, odd fonts, and bad English are warning signs.',
      'What payment methods does it accept? Gift cards, cryptocurrency, wire transfers, and Zelle are red flags — these can\'t be reversed.',
      'Is there a clear return policy, shipping address, and customer service phone number? If not, walk away.',
      'Google "[company name] scam" or "[company name] reviews 2026" — people warn each other online.',
    ],
    redFlags: [
      'Prices dramatically lower than the real brand\'s website.',
      'The domain is brand-new (you can check with a whois lookup).',
      'The URL isn\'t the real brand — e.g. "ray-ban-outlet-usa.store" instead of "ray-ban.com".',
      'No physical address, no phone number, or an address that doesn\'t exist on Google Maps.',
      'Pressure to "buy now — only 3 left!" with a ticking countdown.',
      'Pay by gift card, Zelle, wire, or crypto only.',
    ],
    greenFlags: [
      'The deal also appears on the brand\'s official website or an authorized retailer (Amazon, Best Buy, Target).',
      'The seller has a long history of real reviews across multiple sites.',
      'Pays via credit card or PayPal Buyer Protection — both let you dispute charges.',
      'Clear return policy, shipping timeline, and a way to reach a human if something goes wrong.',
      'The business shows up in Google Maps and Better Business Bureau.',
    ],
    ifFake: [
      "Don't buy. If you already did, contact your bank or card issuer immediately to dispute the charge.",
      'Report the ad to the platform (Facebook, Instagram, Google Ads all have scam-reporting).',
      'File a report with the FTC at reportfraud.ftc.gov.',
      'Warn the friend or family member who might have seen the same ad.',
      'If you paid by gift card, call the gift card company — sometimes funds can be frozen if you act fast.',
    ],
    resources: [
      { label: 'Better Business Bureau', url: 'https://www.bbb.org', note: 'Business reputation lookup' },
      { label: 'FTC Report Fraud', url: 'https://reportfraud.ftc.gov' },
      { label: 'Scamadviser', url: 'https://www.scamadviser.com', note: 'Website trust score' },
      { label: 'Whois Lookup', url: 'https://whois.domaintools.com', note: 'Find when a site was registered' },
      { label: 'TekSure Safe Link Checker', url: '/tools/safe-link-checker' },
    ],
  },

  /* ── 4. Text ── */
  {
    id: 'text',
    emoji: '📱',
    icon: Smartphone,
    title: 'A text message',
    tagline: 'From an unknown number or a strange short code.',
    headerBlurb:
      'Scam texts (sometimes called "smishing") pretend to be banks, delivery services, or the IRS. Run through these six quick checks before you tap anything.',
    checks: [
      'Is this number already in your contacts, or completely unknown? Banks and USPS don\'t text from random cell numbers.',
      'Does the text claim to be a bank, delivery service (UPS/USPS/FedEx), or the IRS? These are the most common disguises for scam texts.',
      "Does the message contain a link? Don't tap it — instead, open the company's real app or website yourself.",
      'Is there urgency? "Confirm within 24 hours or your package will be returned" is a classic pressure tactic.',
      'Are there odd typos, spacing, or broken English? Real company texts are proofread.',
      'Forward the text to 7726 (spells "SPAM") — your carrier will investigate and block similar messages.',
    ],
    redFlags: [
      'A link in the message, especially a shortened one (bit.ly, tinyurl.com).',
      'Claims to be your bank but asks you to "verify your account" by clicking.',
      'Says you have an unclaimed refund, tax return, or package.',
      'The phone number is a regular 10-digit cell — not a short code like 26264 that real companies use.',
      'Asks you to reply with a verification code you just received.',
    ],
    greenFlags: [
      'You were already expecting this text (you just placed an order, you asked for a code).',
      'It comes from a short code you\'ve seen before from that company.',
      'It tells you to open the app or visit the site — it doesn\'t link you there.',
      'No request for personal info, passwords, or codes.',
    ],
    ifFake: [
      'Do NOT reply, even "STOP" — this confirms your number is active.',
      "Forward the text to 7726. It's free, and your carrier uses it to block similar scams.",
      'Block the number on your phone.',
      'Delete the message.',
      'If you already clicked a link and entered info, change that password and alert your bank.',
    ],
    resources: [
      { label: 'Forward texts to 7726', url: 'sms:7726', note: 'Report to your carrier (free)' },
      { label: 'FCC Consumer Complaint', url: 'https://consumercomplaints.fcc.gov', note: 'For persistent scam texts' },
      { label: 'TekSure Safe Link Checker', url: '/tools/safe-link-checker' },
      { label: 'TekSure Robocall Blocker', url: '/tools/robocall-blocker' },
    ],
  },

  /* ── 5. Photo/video ── */
  {
    id: 'photo',
    emoji: '📸',
    icon: ImageIcon,
    title: 'A photo or video',
    tagline: 'That looks suspicious, edited, or too dramatic to be real.',
    headerBlurb:
      'Images and videos can be old, staged, edited, or entirely AI-generated. These seven checks help you trace where something actually came from.',
    checks: [
      'Run a reverse image search — drag the photo into Google Lens, TinEye, or Yandex to see where else it\'s appeared.',
      'Zoom in. Look for editing artifacts: cloning patterns, mismatched lighting, blurry edges around inserted objects.',
      "Check the background. Does the weather, language on signs, or architecture match the story being told?",
      'Try to find the original source. The earliest version of an image is usually the most trustworthy.',
      'Look for AI-generated giveaways: weird hands or fingers, garbled text or signs, melted jewelry, mismatched earrings.',
      'For videos: are there watermarks? Can you find the original on a news site, YouTube, or the creator\'s account?',
      "If you suspect a deepfake of a real person, report it to the platform — most now have a dedicated deepfake report option.",
    ],
    redFlags: [
      'The image appears in many other contexts from years ago (it\'s been recycled).',
      'Hands, eyes, teeth, or text in the image look "off" — warped, extra fingers, garbled words.',
      'The video has no original source — only copies posted by random accounts.',
      'Lighting or shadows on a person don\'t match the background.',
      'The story is dramatic but no mainstream news outlet is covering it.',
    ],
    greenFlags: [
      'A reverse image search traces it to a verified news source or official account.',
      'Multiple trustworthy outlets published it with consistent context.',
      'The creator is identifiable and has a posting history.',
      'Metadata, visible watermarks, or EXIF data confirm when and where it was taken.',
    ],
    ifFake: [
      "Don't share it. If you already did, delete your post and add a note explaining it was false.",
      'Report the post to the platform using the "false information" or "deepfake" option.',
      'If it impersonates a real person who didn\'t consent, report it to the platform AND suggest the person file a report with the FTC.',
      'If it\'s a deepfake used in a scam (e.g. a fake voicemail), report to reportfraud.ftc.gov.',
    ],
    resources: [
      { label: 'Google Reverse Image Search', url: 'https://images.google.com', note: 'Click the camera icon' },
      { label: 'TinEye', url: 'https://tineye.com', note: 'Reverse image search' },
      { label: 'Yandex Images', url: 'https://yandex.com/images', note: 'Often finds matches others miss' },
      { label: 'InVID Verification Plugin', url: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/', note: 'Browser extension for video analysis' },
      { label: 'TekSure Reverse Image Search', url: '/tools/reverse-image-search' },
    ],
  },

  /* ── 6. AI-generated content ── */
  {
    id: 'ai',
    emoji: '🤖',
    icon: Bot,
    title: 'AI-generated content',
    tagline: 'Suspected deepfake, voice clone, or AI-written message.',
    headerBlurb:
      "AI voice clones and deepfakes have made scams much more convincing. These six checks — especially the family safe word — are now essential.",
    checks: [
      "Voice clone check: agree on a family safe word with your loved ones. If you get an emergency call, ask for the safe word before believing anything.",
      'Deepfake video: watch for unnatural blinking (too few or too many blinks), lip-sync that\'s slightly off, or skin that doesn\'t move with the face.',
      "AI-written text: unusually smooth prose, no personal details, vague generalities, or no real citations or links to sources.",
      'Reach the person directly on a verified channel — call their usual number, text them separately, or ask a question only they\'d know.',
      'If it\'s a public figure, check their verified official accounts for the same statement. Real news comes from official sources.',
      'Report deepfakes and voice clone scams to reportfraud.ftc.gov and the platform where you saw it.',
    ],
    redFlags: [
      'A family member "calling in trouble" asks for money via gift cards, wire, or crypto.',
      'The call has unusual background noise, robotic undertones, or long pauses.',
      'Video: the mouth doesn\'t quite match the words, or the head moves oddly relative to the body.',
      'Text feels generic, "too perfect," or dodges personal specifics.',
      'The person refuses to video-chat or answer a simple personal question.',
    ],
    greenFlags: [
      'You reached them back on their known number and verified the story.',
      'They know the family safe word.',
      'The video or voice has been published on their official, verified account.',
      'Details match what you already know (kids\' names, inside jokes, your last conversation).',
    ],
    ifFake: [
      'Hang up or stop replying immediately. Do not send money, even if it "really sounds like" them.',
      "Call the real person on their usual number to make sure they're safe.",
      'Report voice-clone scams to reportfraud.ftc.gov and to your local police if money was lost.',
      'Report deepfake videos to the hosting platform — they all have deepfake policies now.',
      'Warn your family — elderly relatives are frequent targets of grandparent-voice-clone scams.',
    ],
    resources: [
      { label: 'FTC Report Fraud', url: 'https://reportfraud.ftc.gov' },
      { label: 'FBI IC3 (cybercrime)', url: 'https://www.ic3.gov' },
      { label: 'TekSure Deepfake Defense Hub', url: '/deepfake-defense-hub' },
      { label: 'TekSure AI Literacy Hub', url: '/ai-literacy-hub' },
    ],
  },

  /* ── 7. Social media ── */
  {
    id: 'social',
    emoji: '👤',
    icon: UserCircle2,
    title: 'A social media post or profile',
    tagline: 'A friend request, DM, or account that feels off.',
    headerBlurb:
      "Fake profiles are used for romance scams, investment pitches, and impersonating real people. These seven checks help you tell who's actually behind the account.",
    checks: [
      "How old is the profile? A brand-new account with few posts is suspicious — especially if it's messaging strangers.",
      "How many friends or followers? And who are they? Fake accounts often have very few, or lots of bots.",
      "Look at the post history. Has this person been posting consistently for years, or did the account go active yesterday?",
      'Is the verified badge real? Some platforms sell "verified" checks now — it no longer guarantees identity.',
      'Does the bio make sense? Matching city, school, job? Or vague phrases like "lover of life, DM for a good time"?',
      "Reverse image search the profile photo. Stolen photos of models or influencers are a hallmark of fake accounts.",
      'Does anything the person says conflict with what you already know? Trust that instinct.',
    ],
    redFlags: [
      'Account created in the last few weeks, with dozens of friend requests already sent.',
      'Photos look like a model or influencer — too polished, only a few, all in different settings.',
      'Messages you out of nowhere with emotional, flirty, or urgent language.',
      'Quickly moves the conversation off the platform to WhatsApp, Telegram, or text.',
      'Eventually asks for money, gift cards, or to invest in something.',
    ],
    greenFlags: [
      'Years of post history with the same name, friends, and photos.',
      'Mutual friends you actually know, who can vouch for the person.',
      'Reverse image search confirms the photos are theirs alone.',
      'Their story checks out — their city, school, and work match what you can independently verify.',
    ],
    ifFake: [
      'Do not send money, gift cards, or crypto — ever — to someone you\'ve only met online.',
      'Block and report the profile on the platform.',
      'If you\'ve already sent money, contact your bank immediately and file with reportfraud.ftc.gov.',
      'Warn your friends so they don\'t accept a request from the same fake account.',
      'If the profile is impersonating a real person you know, let that real person know — they can report it too.',
    ],
    resources: [
      { label: 'Google Reverse Image Search', url: 'https://images.google.com', note: 'Check profile photos' },
      { label: 'TinEye', url: 'https://tineye.com' },
      { label: 'FTC Report Fraud', url: 'https://reportfraud.ftc.gov' },
      { label: 'TekSure Digital Footprint Scanner', url: '/tools/digital-footprint-scanner' },
    ],
  },
];

/* ── Main component ──────────────────────── */
export default function IsThisReal() {
  const [selectedId, setSelectedId] = useState<CategoryId | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});

  const selected = selectedId ? CATEGORIES.find(c => c.id === selectedId) ?? null : null;

  function handleSelect(id: CategoryId) {
    setSelectedId(id);
    setCheckedSteps({});
    // Small delay so the layout is in place before we scroll
    setTimeout(() => {
      const el = document.getElementById('is-this-real-detail');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function handleReset() {
    setSelectedId(null);
    setCheckedSteps({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleStep(key: string) {
    setCheckedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const checkedCount = selected
    ? selected.checks.filter((_, i) => checkedSteps[`${selected.id}-${i}`]).length
    : 0;

  return (
    <>
      <SEOHead
        title="Is This Real? | TekSure"
        description="A verification toolkit for seniors and beginners. Walk through plain-language checks for suspicious news, emails, deals, texts, photos, AI content, and social profiles — before you share, buy, or panic."
        path="/tools/is-this-real"
      />
      <Navbar />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-3xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative text-center mb-10">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="is-this-real"
              title="Is This Real?"
              url="/tools/is-this-real"
            />
          </div>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 mb-5">
            <Search className="h-12 w-12" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Is This Real?
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
            Don't share, buy, or panic until you know for sure.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mt-3">
            Pick what you're looking at and we'll walk you through plain-language checks — no downloads, no accounts.
          </p>
        </div>

        {/* ── Category picker ── */}
        {!selected && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              What are you trying to verify?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className="group text-left w-full rounded-2xl border-2 border-border bg-card hover:border-amber-400 hover:bg-amber-50/50 dark:hover:border-amber-600 dark:hover:bg-amber-950/20 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all p-5 min-h-[7rem]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-3xl leading-none" aria-hidden="true">
                        {cat.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                          <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                          {cat.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Global golden rules card ── */}
            <Card className="mt-8 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-amber-900 dark:text-amber-200">
                  <Lightbulb className="h-6 w-6" aria-hidden="true" />
                  Three rules that save most people
                </h3>
                <ul className="space-y-3 text-base text-amber-900 dark:text-amber-100">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-amber-600 text-white font-bold text-sm">1</span>
                    <span><strong>Slow down.</strong> Urgency is the scammer's best friend. Anything demanding an answer in minutes is almost always fake.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-amber-600 text-white font-bold text-sm">2</span>
                    <span><strong>Verify on a different channel.</strong> Got an email? Call the company. Got a call from a family member? Hang up and call them back on their usual number.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-amber-600 text-white font-bold text-sm">3</span>
                    <span><strong>When in doubt, ask someone you trust.</strong> A quick sanity check from a friend or family member has saved countless people from scams.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ── Detail view ── */}
        {selected && (
          <div id="is-this-real-detail">
            {/* Back button */}
            <Button
              variant="ghost"
              size="lg"
              onClick={handleReset}
              className="mb-4 gap-2 text-base"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              Start over
            </Button>

            {/* Detail header */}
            <Card className="mb-6 border-2 border-amber-300 bg-amber-50/70 dark:border-amber-800 dark:bg-amber-950/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-5xl leading-none" aria-hidden="true">
                    {selected.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-amber-900 dark:text-amber-200">
                      {selected.title}
                    </h2>
                    <p className="text-base text-amber-900/90 dark:text-amber-100/90 mb-2 font-medium">
                      {selected.tagline}
                    </p>
                    <p className="text-base text-amber-900/80 dark:text-amber-100/80 leading-relaxed">
                      {selected.headerBlurb}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist of verification steps */}
            <Card className="mb-6 border-2">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                    Your verification checklist
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {checkedCount} of {selected.checks.length} done
                  </span>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Tick each one off as you go. You don't have to do them all — but the more that come back clean, the safer it is.
                </p>
                <ul className="space-y-3">
                  {selected.checks.map((step, i) => {
                    const key = `${selected.id}-${i}`;
                    const checked = !!checkedSteps[key];
                    return (
                      <li key={key}>
                        <label
                          htmlFor={key}
                          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors min-h-[3.5rem] ${
                            checked
                              ? 'bg-green-50 border-green-300 dark:bg-green-950/30 dark:border-green-800'
                              : 'bg-background border-border hover:bg-muted/40'
                          }`}
                        >
                          <Checkbox
                            id={key}
                            checked={checked}
                            onCheckedChange={() => toggleStep(key)}
                            className="mt-1 h-5 w-5"
                          />
                          <span
                            className={`text-base leading-relaxed ${
                              checked ? 'text-green-900 dark:text-green-100' : 'text-foreground'
                            }`}
                          >
                            {step}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Red flags */}
            <Card className="mb-6 border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-900 dark:text-red-200">
                  <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                  Red flags — if you see these, be skeptical
                </h3>
                <ul className="space-y-3">
                  {selected.redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-base text-red-900 dark:text-red-100 leading-relaxed">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Green flags */}
            <Card className="mb-6 border-2 border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-900 dark:text-green-200">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  Green flags — signs it's probably legit
                </h3>
                <ul className="space-y-3">
                  {selected.greenFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-base text-green-900 dark:text-green-100 leading-relaxed">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* If it's fake */}
            <Card className="mb-6 border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-800">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-900 dark:text-orange-200">
                  <Flag className="h-6 w-6" aria-hidden="true" />
                  If it's fake — what to do next
                </h3>
                <ol className="space-y-3">
                  {selected.ifFake.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-orange-600 text-white font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-base text-orange-900 dark:text-orange-100 leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="mb-6">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  Helpful places to double-check
                </h3>
                <ul className="space-y-3">
                  {selected.resources.map((r, i) => {
                    const isExternal = /^https?:\/\//i.test(r.url) || r.url.startsWith('mailto:') || r.url.startsWith('sms:');
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <a
                            href={r.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer noopener' : undefined}
                            className="text-base font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                          >
                            {r.label}
                            {isExternal && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                          </a>
                          {r.note && (
                            <p className="text-sm text-muted-foreground mt-0.5">{r.note}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Action row */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={handleReset} className="gap-2 min-h-14 text-base">
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                Check something else
              </Button>
            </div>
          </div>
        )}

        {/* ── Golden rule — always shown ── */}
        <Card className="mt-8 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">The golden rule</p>
              <p className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
                No tool — ours or anyone else's — can promise 100% certainty. If something in your gut says "this feels off," listen to it. It's OK to wait, ask someone, or just ignore a message entirely. Real friends, real companies, and real opportunities will still be there tomorrow.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
