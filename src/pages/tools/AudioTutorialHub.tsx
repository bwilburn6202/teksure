import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Volume2,
  Play,
  Pause,
  Square,
  SkipForward,
  Headphones,
  Clock,
  BookOpen,
  Printer,
  ShieldCheck,
  Info,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Mic,
  ChevronRight,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Audio Tutorial Hub
 * ------------------------------------------------------------
 * Listen to TekSure's top guides using the browser's built-in
 * SpeechSynthesis API. No audio hosting, no accounts, no cost.
 * Senior-friendly: big controls, plain language, focus-visible
 * keyboard support, and an aria-live region for play state.
 * ────────────────────────────────────────────────────────────── */

// ─────────────────────────────────────────────────────────────
// Audio library — curated TekSure excerpts that read well aloud
// Keep each entry 2–3 short paragraphs of plain-English prose so
// the text-to-speech cadence feels natural (no bullet points).
// ─────────────────────────────────────────────────────────────

type AudioCategory =
  | 'Safety'
  | 'Setup'
  | 'Essentials'
  | 'Health'
  | 'Money'
  | 'Communication'
  | 'Accessibility';

interface AudioPiece {
  id: string;
  title: string;
  category: AudioCategory;
  description: string;
  /** Spoken text — natural prose, no markup. */
  text: string;
  /** Optional deep link to the full written version. */
  fullPage?: string;
}

const LIBRARY: AudioPiece[] = [
  {
    id: 'is-this-real-10-step',
    title: 'Is This Real? — 10-step scam checklist',
    category: 'Safety',
    description: 'Ten questions to ask before you click, reply, or send money.',
    fullPage: '/tools/is-this-real',
    text: `Before you click, reply, or send anyone money, pause and run through these ten questions. One "yes" from the wrong list is usually enough to walk away.

Did a message show up out of nowhere? Did it push you to act in the next few minutes? Does it ask for a gift card, wire transfer, or crypto? Does the sender address look almost right, but not quite? Did they ask you to move to a different app like WhatsApp, Telegram, or a voice call? Did they promise a refund, a package, or prize money you never requested?

Did the grammar feel off, or did they use your name oddly? Did they claim to be Amazon, Apple, Microsoft, your bank, the IRS, or Medicare? Did they scare you with arrest, fraud, or account closure? And finally, is there any reason a real company would ever ask for your password, your two-factor code, or remote access to your computer? The answer to that last one is no. If something feels wrong, hang up, close the window, and ask a real human you trust.`,
  },
  {
    id: 'spot-phishing-email',
    title: 'Spotting a phishing email',
    category: 'Safety',
    description: 'Five tells that almost always give away a fake email.',
    fullPage: '/tools/phishing-scanner',
    text: `Phishing emails are fake messages that try to steal your password, your money, or your identity. They are much easier to spot once you know what to look for.

First, check the full sender address, not only the name. An email that says "Amazon" but is actually from a random address ending in dot X Y Z is not from Amazon. Second, hover over any link, without clicking, to see where it really leads. If the address has strange words, dashes, or numbers, do not click. Third, watch for urgency. Real companies rarely say your account will close in one hour.

Fourth, watch for generic greetings like "Dear customer" or small typos in the company name. Fifth, never open attachments you did not expect, even from people you know. When in doubt, go to the company's website directly in your browser, log in the normal way, and check from there. If there is no alert inside your real account, the email was a fake.`,
  },
  {
    id: 'echo-setup',
    title: 'How to set up an Echo',
    category: 'Setup',
    description: 'Plug it in, open the Alexa app, and start talking.',
    fullPage: '/tools/voice-assistant-setup',
    text: `Setting up an Amazon Echo is a three-step process, and the Echo itself does most of the work. Plug the Echo into a wall outlet. The light ring on top will turn blue, then orange. Orange means the Echo is ready to be paired.

Next, on your phone or tablet, download the Alexa app from the App Store on iPhone or the Play Store on Android. Sign in with your Amazon account. Tap the plus sign, tap "Add Device", and tap "Amazon Echo". The app will find your Echo and walk you through connecting it to your home WiFi. You will enter your WiFi password once, and the Echo will remember it.

After that, try saying "Alexa, what's the weather?" to make sure everything works. You can ask for the time, set a timer, play music, or call a family member who also has an Echo. If the Echo ever gets confused, unplug it for ten seconds and plug it back in. That fixes most problems instantly.`,
  },
  {
    id: 'medicare-enrollment-timeline',
    title: 'Medicare enrollment timeline',
    category: 'Health',
    description: 'When to sign up for Medicare so you do not get hit with a late fee.',
    fullPage: '/tools/medicare-plan-chooser',
    text: `Medicare has a strict timeline, and missing a window can cost you money for the rest of your life. Your Initial Enrollment Period is seven months long. It starts three months before the month you turn sixty-five, includes your birthday month, and continues for three months after.

If you are still working and have health insurance through your employer, you can delay Part B without a penalty as long as you have what Medicare calls creditable coverage. Once you stop working, you have eight months to sign up for Part B without a late fee. This is called the Special Enrollment Period.

If you miss both windows, the General Enrollment Period runs every year from January through March, with coverage starting the month after you enroll. Part D, which is prescription drug coverage, has its own late fee that grows every month you are without it. The Annual Enrollment Period runs each year from October fifteenth through December seventh, and that is when you can switch between Original Medicare and Medicare Advantage, or change your Part D plan.`,
  },
  {
    id: 'password-safety',
    title: 'Password safety basics',
    category: 'Safety',
    description: 'Three rules that stop ninety-nine percent of account break-ins.',
    fullPage: '/tools/password-manager',
    text: `Three rules will protect almost every account you own. Rule one, never use the same password for two different websites. If one site gets hacked, criminals will try that password everywhere else.

Rule two, make your passwords long instead of complicated. A phrase like "purple coffee mug hides truth" is far stronger than a short word with symbols, and you can actually remember it. Better yet, let a password manager like Bitwarden or one built into your phone handle all of this for you. You only need to remember one main password.

Rule three, turn on two-factor authentication for email, banking, and any account with your money. Two-factor means a code is texted or sent to an app on your phone when you log in from a new device. Even if a thief has your password, they cannot log in without that second code. Start with your email, because your email controls password resets for every other account you own.`,
  },
  {
    id: 'zoom-video-call',
    title: 'Making a video call with Zoom',
    category: 'Communication',
    description: 'Join a call, turn your camera on, and mute yourself when needed.',
    fullPage: '/tools/video-call-helper',
    text: `Zoom is one of the easiest video call apps to use, especially when someone else is hosting the call. When you get a Zoom invitation by email or text, it will include a link that starts with a web address and a meeting ID number.

Tap the link a few minutes before the call is supposed to start. If Zoom is not yet on your phone or computer, the link will ask you to install it. After installing, the app opens the meeting for you automatically. You may see a window asking to join with video and join with audio. Say yes to both unless you have a reason not to.

Once you are in, you will see yourself in a small box and the other people in bigger boxes. Along the bottom are two important buttons, one shaped like a microphone and one shaped like a camera. If either has a red line through it, you are muted or your camera is off. Tap the button once to switch it back on. At the end of the call, tap "Leave" in the corner. That is all there is to it.`,
  },
  {
    id: 'fell-for-a-scam',
    title: 'What to do if you fell for a scam',
    category: 'Safety',
    description: 'First steps after you realize a scam took money or information.',
    fullPage: '/tools/is-this-real',
    text: `If you sent money or shared personal information with someone who turned out to be a scammer, take a breath. Embarrassment is the scammer's best weapon, and you are far from alone. Acting in the next twenty-four hours gives you the best chance at getting money back and stopping further damage.

First, call your bank and any card company you gave numbers to. Tell them it was a scam and ask them to reverse any pending charges, freeze your cards, and issue new ones. Next, change the password on your email, then your main bank, then any site you reused that password on. If a scammer got remote access to your computer, power it off, unplug the internet cable, and have it cleaned by someone you trust before turning it back on.

Finally, report what happened at the Federal Trade Commission's website, which is reportfraud dot F T C dot gov, and at I C 3 dot gov for online fraud. If a grandchild, stranger, or official was impersonated, tell the real agency too. Your report helps them build cases that protect other people. None of this makes you a fool. It makes you a person who got back up faster than the scammer expected.`,
  },
  {
    id: 'first-smartphone-tips',
    title: 'Five tech tips for your first smartphone',
    category: 'Essentials',
    description: 'Five quick wins to feel comfortable with a new phone.',
    fullPage: '/tools/my-first-smartphone',
    text: `Your first smartphone can feel like learning to drive a rocket ship. Five small tips will make the whole thing feel smaller.

Tip one, make the text bigger. Open Settings, search for "display" or "text size", and slide the text up until your eyes relax. There is no prize for tiny letters. Tip two, add your three most-called people to your favorites. On iPhone, open the Phone app, tap Favorites, and tap the plus sign. On Android, open Contacts and tap the star next to each name.

Tip three, practice with the home button. On iPhones without a home button, you swipe up from the bottom edge of the screen to leave any app. Tip four, learn the flashlight. Swipe down from the top of the screen on iPhone, or swipe from the top on Android, and you will find a flashlight icon. Tip five, do not rush. You cannot break a modern phone by tapping the wrong thing. Every screen has a back arrow or a home button. You are always three seconds from the main screen, and that is the best feeling of all.`,
  },
  {
    id: 'spot-fake-news',
    title: 'How to spot fake news',
    category: 'Safety',
    description: 'Check who is telling you, where it came from, and whether others are reporting it.',
    fullPage: '/tools/fake-news-checker',
    text: `Fake news is written on purpose to make you angry, scared, or eager to share. Before you pass a story on, do three quick checks.

Check the source. Tap the article and look for the name of the website at the top. If you have never heard of the name, open a new tab and search for it. Real news organizations have been around for decades. Fake ones often pop up weeks before an election and vanish right after.

Check the date. Stories get shared years after they were written, which can make an old event feel like a new one. Scroll to find the publication date before reacting. And check if anyone else is reporting it. If only one website has this huge story, and large outlets like the Associated Press, Reuters, or the BBC are silent, it is probably not true. Fact-check sites like Snopes, PolitiFact, and FactCheck dot org do this work for free every day.`,
  },
  {
    id: 'medicare-vs-advantage',
    title: 'Deciding Original Medicare vs Advantage',
    category: 'Health',
    description: 'Plain-English comparison of the two main Medicare paths.',
    fullPage: '/tools/medicare-plan-chooser',
    text: `When you become eligible for Medicare, you have two main paths. Original Medicare, also called Parts A and B, is run by the federal government. You can see any doctor in the country who accepts Medicare, which is the vast majority of them. To cover the twenty percent that Medicare does not pay, most people add a Medigap plan and a separate Part D drug plan.

Medicare Advantage, sometimes called Part C, is Medicare delivered by a private insurance company. These plans often include drug coverage, dental, vision, and a gym membership, all in one package. The monthly premium is often low or zero. The trade-off is that you are usually limited to doctors and hospitals in the plan's network, and you may need a referral to see a specialist.

The right choice depends on how often you travel, whether your current doctors are in a network, how predictable your medical costs need to be, and whether you value flexibility or a lower monthly cost. Both options are legitimate. Neither is better for everyone. Your State Health Insurance Assistance Program, called SHIP, gives one-on-one guidance for free and is not paid on commission.`,
  },
  {
    id: 'apple-watch-first-day',
    title: 'Your Apple Watch\'s first day',
    category: 'Setup',
    description: 'Pair it, set up your rings, and turn on fall detection.',
    fullPage: '/tools/apple-watch-setup',
    text: `Your Apple Watch pairs to your iPhone by pointing the phone's camera at the watch face. The watch shows a swirling pattern, the phone takes a picture, and the two become partners. This works the first time for almost everyone.

During setup, the Watch app on your phone will ask which wrist you wear on, your height, and your age. This helps the watch track your steps and your heart rate accurately. You will see three rings, one for movement, one for exercise, and one for standing. You do not need to chase all three on day one. Start with a daily step goal you can actually hit, and raise it after a week or two.

If you are sixty-five or older, fall detection turns on by default. If you are younger, you can turn it on in the Watch app under "Emergency SOS". The watch will also call an emergency contact and send your location if you hold the side button for a few seconds. Your children or grandchildren will thank you for setting this up.`,
  },
  {
    id: 'voice-commands-top-20',
    title: 'Every voice command in one list',
    category: 'Essentials',
    description: 'Twenty voice commands that work on Siri, Alexa, and Google.',
    fullPage: '/tools/voice-assistant-setup',
    text: `Voice commands are the fastest way to use your phone or smart speaker, especially if small buttons are hard to tap. Most of these commands work on Siri, Alexa, and Google Assistant with minor differences.

Set a timer for ten minutes. Remind me to take my pills at eight o'clock. What's the weather tomorrow? Play my favorite music. Play the news. Call my son. Read me my last text message. Send a text to my daughter saying I'll be late. What is a tablespoon in teaspoons? Convert twenty dollars to euros. What was the score of yesterday's game?

Turn on the living room lights. Turn off the bedroom lights. Lock the front door. Start my morning routine. What's on my calendar today? Add milk to my shopping list. How far is the nearest pharmacy? Find a recipe for chicken soup. And the one everyone forgets, which is asking, "What can I say?" Your assistant will read you a list of things it can do right now.`,
  },
  {
    id: 'video-call-etiquette',
    title: 'Video calling etiquette',
    category: 'Communication',
    description: 'Eight small habits that make you easier to talk to on video.',
    fullPage: '/tools/video-call-helper',
    text: `Video calls feel harder than phone calls because everyone is watching everyone. A few small habits make calls smoother, whether you are talking to your grandkids or a doctor.

Light your face from the front, not the back. Sit facing a window, or turn on a lamp near your screen. Raise your camera so it is roughly at eye level. A stack of books under your laptop works. If you are on your phone, prop it against something instead of holding it in your lap. Mute yourself when you are not talking, especially if you have a television, dishwasher, or dog in the background.

Look at the camera, not the screen, when you want to feel like you are making eye contact. It feels strange, and it is worth trying. Turn off notifications for the length of the call. And when you join, say your name clearly once so the host can spot you. Closing with a short "Nice to see you, goodbye" feels more finished than silently hanging up.`,
  },
  {
    id: 'check-website-safe',
    title: 'How to check if a website is safe',
    category: 'Safety',
    description: 'A sixty-second check before you type your card number.',
    fullPage: '/tools/safe-link-checker',
    text: `Before you type a credit card number or a password, run this quick check. Look at the address bar at the top of your browser. Check that it starts with H T T P S, with the S, and that the exact name of the company is spelled correctly. Scammers buy look-alike addresses where the letter O is replaced with a zero, or the letter I with a lowercase L.

Next, look at the padlock icon. A padlock means the connection is encrypted, which is good, but it does not promise the site itself is honest. Many scam sites also have padlocks. The real trust signal is the company name.

If you are unsure, open a new tab, search for the company by name, and click the result from the search, not from an email. Bookmarking the sites you shop at most often makes this easier. And if a website offers you a discount so large it feels unreal, it almost always is. Trust your gut and close the tab.`,
  },
  {
    id: 'organize-digital-photos',
    title: 'Organizing your digital photos',
    category: 'Essentials',
    description: 'A weekend plan for turning photo chaos into something you can find.',
    fullPage: '/tools/photo-backup-wizard',
    text: `If the Photos app on your phone has thousands of pictures, a weekend is enough to bring order to them. Do this in three short sessions, not one long one.

On Saturday morning, back everything up before you touch a thing. Turn on iCloud Photos on iPhone, or Google Photos on Android. Both will copy your pictures to the cloud automatically. Nothing is getting deleted in this step. Backup protects you from any mistake you make next.

Saturday afternoon, create four albums, Family, Trips, Documents, and Favorites. Open the Photos app, tap Select, and move pictures into the album where they belong. You do not have to get all of them. You only have to get the ones you want to find again. Sunday, delete the obvious junk, like duplicates, screenshots, and blurry shots. Both iPhone and Android now have a "Duplicates" folder built in. When you are done, you will still have plenty of pictures, but you will be able to find the ones that matter.`,
  },
  {
    id: 'social-security-wont-tell',
    title: "What Social Security won't tell you to ask",
    category: 'Money',
    description: 'Questions to ask before you claim your benefit.',
    fullPage: '/free-resources',
    text: `Social Security agents are friendly and helpful, and they are also not allowed to give advice. That means if you do not ask the right question, you may never hear the answer you needed. Here are three questions most people do not know to ask.

First, ask how much your monthly benefit would change if you waited one more year, or two more years. Every year you delay claiming past age sixty-two, up to age seventy, your benefit grows by roughly seven to eight percent. That is a permanent raise, and no bank will pay you anything close to it. The agent will not volunteer this comparison unless you ask for it directly.

Second, if you are married or were married for at least ten years before a divorce, ask whether you qualify for a spousal or ex-spousal benefit based on the other person's record. Many people leave real money on the table here. Third, ask for your PIA, which stands for Primary Insurance Amount. That is the baseline number every other calculation is built on. Write it down. Put it somewhere safe. And consider a free session with your local SHIP counselor before you file anything.`,
  },
  {
    id: 'time-to-stop-driving',
    title: "When it's time to stop driving",
    category: 'Health',
    description: 'A gentle, honest conversation about signs and options.',
    fullPage: '/tools/rideshare-setup',
    text: `Stopping driving is one of the hardest transitions in later life, because for many people it feels like losing independence itself. The opposite is usually truer. A person who gives up the wheel at the right time keeps their independence for years longer, because they avoid the one crash that would end it.

Watch for these signs. Getting lost on a familiar route. Needing family or friends to pick you up more often than you pick them up. Missing stop signs or traffic lights, even once. Scrapes and dents you cannot remember causing. Slower reaction time when something sudden happens, like a pedestrian stepping off a curb. If two or more of these ring true, ask a trusted person, possibly your doctor, for an honest read.

There are good alternatives. Uber and Lyft are simple to learn, and most cities have senior transport services that pick you up at the door. Your local Area Agency on Aging can help you find rides to medical appointments and grocery stores, often for free. Giving up the keys is not giving up. It is trading one kind of freedom for a safer kind.`,
  },
  {
    id: 'stolen-phone-recovery',
    title: 'Recovering from a stolen phone',
    category: 'Safety',
    description: 'What to do in the first hour after your phone goes missing.',
    fullPage: '/tools/phone-first-aid',
    text: `If your phone was stolen or lost in the last hour or two, act now. From any other device, including a friend's phone, open a browser and go to iCloud dot com slash find for iPhone, or android dot com slash find for Android. Sign in with your Apple ID or Google account. You will see a map.

Mark the phone as lost. This locks the screen with a message and a callback number, and it signs you out of Apple Pay or Google Pay. Do not try to go get the phone yourself. Share the location with the police if you plan to file a report.

Then, call your cell carrier and ask them to suspend the line so no one can make calls or send texts from it. Change the password on your email, then your bank, then any other important account. Finally, if you had the Find My device setting turned on before the phone went missing, you can fully erase it from that same website. When you replace the phone, restoring from a recent backup will get most of your stuff back in fifteen minutes.`,
  },
  {
    id: 'turning-65-medicare-101',
    title: 'Turning 65 — Medicare 101 in 3 minutes',
    category: 'Health',
    description: 'The four parts of Medicare in plain English.',
    fullPage: '/tools/medicare-plan-chooser',
    text: `Medicare is broken into four parts, A, B, C, and D. Part A covers hospital stays and is free for most people who paid Medicare taxes for ten years. Part B covers doctor visits, lab work, and outpatient care, and it has a monthly premium that comes out of your Social Security check for most people.

Part C, also called Medicare Advantage, is an alternative to Original Medicare, run by a private insurance company. These plans bundle A, B, and usually drug coverage, often with a low monthly premium, in exchange for staying inside a network of doctors. Part D is stand-alone drug coverage you buy separately if you stay with Original Medicare.

The most important rule is timing. Your Initial Enrollment Period is seven months long, starting three months before the month you turn sixty-five. Miss it without creditable coverage from an employer, and you could pay a late fee every month for the rest of your life. Two free resources, Medicare dot gov and your local SHIP office, will walk you through every step at no cost and no sales pressure.`,
  },
  {
    id: 'cancel-any-subscription',
    title: 'How to cancel any subscription',
    category: 'Money',
    description: 'A universal recipe that works for nearly every service.',
    fullPage: '/tools/subscription-auditor',
    text: `Canceling a subscription is almost always harder than signing up for it. Companies design it that way on purpose. A universal recipe makes it quick, no matter the service.

Step one, find the email address where the receipts are landing. Search your inbox for the company name. The receipt is proof you are actually a paying customer. Step two, log in to the company's website on a computer, not the app. Apps often hide the cancel button. On desktop, look for Account, then Subscription, then Plan, and scroll to the bottom.

Step three, if there is no obvious cancel link, the keyword that almost always works is the word "manage", followed by "cancel membership". Step four, take a screenshot of the final confirmation page that says you are canceled. If the company charges you again next month anyway, that screenshot is your evidence for a chargeback at your bank. For stubborn services, canceling through the App Store on iPhone, or the Play Store on Android, often works when the company's own page will not let you.`,
  },
];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const LS_SETTINGS_KEY = 'teksure.audioHub.settings';
const LS_REQUESTS_KEY = 'teksure.audioHub.requests';
const WPM = 150;

function estimateMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WPM));
}

function categoriesIn(library: AudioPiece[]): AudioCategory[] {
  const seen = new Set<AudioCategory>();
  for (const p of library) seen.add(p.category);
  return Array.from(seen);
}

interface SavedSettings {
  voiceURI?: string;
  rate: number;
  pitch: number;
  volume: number;
}

function readSavedSettings(): SavedSettings {
  if (typeof window === 'undefined') {
    return { rate: 1, pitch: 1, volume: 1 };
  }
  try {
    const raw = window.localStorage.getItem(LS_SETTINGS_KEY);
    if (!raw) return { rate: 1, pitch: 1, volume: 1 };
    const parsed = JSON.parse(raw);
    return {
      voiceURI: typeof parsed.voiceURI === 'string' ? parsed.voiceURI : undefined,
      rate: typeof parsed.rate === 'number' ? parsed.rate : 1,
      pitch: typeof parsed.pitch === 'number' ? parsed.pitch : 1,
      volume: typeof parsed.volume === 'number' ? parsed.volume : 1,
    };
  } catch {
    return { rate: 1, pitch: 1, volume: 1 };
  }
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function AudioTutorialHub() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string>('');
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);
  const [volume, setVolume] = useState<number>(1);
  const [saved, setSaved] = useState<boolean>(false);

  // Playback state
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0); // 0–1
  const [status, setStatus] = useState<string>('');

  // Request form
  const [requestText, setRequestText] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const startTimeRef = useRef<number>(0);
  const totalMsRef = useRef<number>(0);
  const elapsedBeforePauseRef = useRef<number>(0);
  const progressTimerRef = useRef<number | null>(null);

  // ── Feature detection + voice loading ─────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ok = 'speechSynthesis' in window;
    setSupported(ok);
    if (!ok) return;

    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices();
      if (list.length > 0) setVoices(list);
    };
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      // Stop any speech when leaving the page
      try { window.speechSynthesis.cancel(); } catch { /* noop */ }
    };
  }, []);

  // ── Load saved settings once voices are known ─────────────
  useEffect(() => {
    const s = readSavedSettings();
    setRate(s.rate);
    setPitch(s.pitch);
    setVolume(s.volume);
    if (s.voiceURI && voices.some(v => v.voiceURI === s.voiceURI)) {
      setVoiceURI(s.voiceURI);
    } else if (!voiceURI && voices.length > 0) {
      // Prefer an English voice if one is available
      const english = voices.find(v => v.lang?.toLowerCase().startsWith('en'));
      setVoiceURI((english ?? voices[0])!.voiceURI);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voices.length]);

  // ── Shift+Space to pause/resume ───────────────────────────
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!e.shiftKey || e.code !== 'Space') return;
      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      }
      if (!playingId) return;
      e.preventDefault();
      togglePause();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingId, paused]);

  // ── Persist settings ──────────────────────────────────────
  const saveSettings = useCallback(() => {
    try {
      const data: SavedSettings = { voiceURI, rate, pitch, volume };
      window.localStorage.setItem(LS_SETTINGS_KEY, JSON.stringify(data));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch { /* noop */ }
  }, [voiceURI, rate, pitch, volume]);

  // ── Progress estimator ───────────────────────────────────
  const startProgressTimer = useCallback(() => {
    if (progressTimerRef.current) window.clearInterval(progressTimerRef.current);
    progressTimerRef.current = window.setInterval(() => {
      if (paused) return;
      const elapsed = elapsedBeforePauseRef.current + (Date.now() - startTimeRef.current);
      const pct = totalMsRef.current > 0 ? elapsed / totalMsRef.current : 0;
      setProgress(Math.min(1, pct));
    }, 500);
  }, [paused]);

  const stopProgressTimer = useCallback(() => {
    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  // ── Playback controls ────────────────────────────────────
  const play = useCallback((piece: AudioPiece) => {
    if (!supported) return;
    try { window.speechSynthesis.cancel(); } catch { /* noop */ }

    const u = new SpeechSynthesisUtterance(piece.text);
    const picked = voices.find(v => v.voiceURI === voiceURI);
    if (picked) u.voice = picked;
    u.rate = rate;
    u.pitch = pitch;
    u.volume = volume;

    const wordCount = piece.text.trim().split(/\s+/).length;
    // Rough: at rate 1.0 ≈ 150 wpm. Scale inversely with rate.
    totalMsRef.current = Math.max(2000, (wordCount / (150 * rate)) * 60_000);
    elapsedBeforePauseRef.current = 0;
    startTimeRef.current = Date.now();
    setProgress(0);

    u.onend = () => {
      setPlayingId(null);
      setPaused(false);
      setProgress(1);
      setStatus(`Finished reading: ${piece.title}`);
      stopProgressTimer();
      // Auto-advance to next piece in the same category
      const idx = LIBRARY.findIndex(p => p.id === piece.id);
      const next = LIBRARY.slice(idx + 1).find(p => p.category === piece.category);
      if (next) {
        setTimeout(() => play(next), 800);
      }
    };
    u.onerror = () => {
      setPlayingId(null);
      setPaused(false);
      setStatus('Playback stopped.');
      stopProgressTimer();
    };

    utteranceRef.current = u;
    setPlayingId(piece.id);
    setPaused(false);
    setStatus(`Now reading: ${piece.title}`);
    window.speechSynthesis.speak(u);
    startProgressTimer();
  }, [supported, voices, voiceURI, rate, pitch, volume, startProgressTimer, stopProgressTimer]);

  const togglePause = useCallback(() => {
    if (!playingId) return;
    if (paused) {
      window.speechSynthesis.resume();
      startTimeRef.current = Date.now();
      setPaused(false);
      setStatus('Resumed reading.');
    } else {
      window.speechSynthesis.pause();
      elapsedBeforePauseRef.current += Date.now() - startTimeRef.current;
      setPaused(true);
      setStatus('Paused.');
    }
  }, [playingId, paused]);

  const stop = useCallback(() => {
    try { window.speechSynthesis.cancel(); } catch { /* noop */ }
    setPlayingId(null);
    setPaused(false);
    setProgress(0);
    setStatus('Stopped.');
    stopProgressTimer();
  }, [stopProgressTimer]);

  const skipNext = useCallback(() => {
    if (!playingId) return;
    const idx = LIBRARY.findIndex(p => p.id === playingId);
    const next = LIBRARY[idx + 1];
    if (next) play(next);
    else stop();
  }, [playingId, play, stop]);

  // ── Request form ─────────────────────────────────────────
  const submitRequest = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = requestText.trim();
    if (!trimmed) return;
    try {
      const raw = window.localStorage.getItem(LS_REQUESTS_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      list.push(trimmed);
      window.localStorage.setItem(LS_REQUESTS_KEY, JSON.stringify(list));
    } catch { /* noop */ }
    setRequestSent(true);
    setRequestText('');
    setTimeout(() => setRequestSent(false), 4000);
  }, [requestText]);

  // ── Derived ──────────────────────────────────────────────
  const categories = useMemo(() => categoriesIn(LIBRARY), []);
  const currentPiece = useMemo(
    () => (playingId ? LIBRARY.find(p => p.id === playingId) ?? null : null),
    [playingId],
  );

  // ── Render ───────────────────────────────────────────────
  return (
    <>
      <SEOHead
        title="Listen Instead of Read — Audio Tutorials | TekSure"
        description="Tap play and your device reads TekSure's top guides out loud. 20+ audio tutorials, no download, no account, no cost. Great for tired eyes, while walking, or cooking."
        path="/tools/audio-tutorials"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-indigo-100 via-indigo-50 to-white dark:from-indigo-950/40 dark:via-indigo-950/20 dark:to-background">
          <div className="container py-12 md:py-16 relative max-w-5xl">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="audio-tutorials"
                title="Audio Tutorial Hub"
                url="/tools/audio-tutorials"
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-indigo-200 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200">
                <Volume2 className="w-7 h-7" />
              </div>
              <Badge className="bg-indigo-600 text-white hover:bg-indigo-700 text-xs">New</Badge>
              <Badge variant="outline" className="text-xs">Accessibility · Free</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 tracking-tight">
              Listen Instead of Read
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Tap play. Your device reads TekSure guides out loud. Great for tired eyes, while walking, or cooking.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Headphones className="w-4 h-4 mr-1.5" /> {LIBRARY.length} audio tutorials
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <Mic className="w-4 h-4 mr-1.5" /> Uses your device's voice
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> Private — nothing leaves your device
              </Badge>
            </div>
          </div>
        </section>

        <div className="container py-10 md:py-14 space-y-12 max-w-5xl">
          {/* ── Aria live region ──────────────────────────── */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {status}
          </div>

          {/* ── How it works ──────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                How this works
              </CardTitle>
              <CardDescription className="text-base">
                Uses your device's built-in voice — no download, no account, no cost.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>
                Your phone, tablet, or computer already ships with a voice that can read text aloud. This page hands the text to that built-in voice and plays it back. Works on iPhone, iPad, Android, Mac, and Windows in any modern browser.
              </p>
              <p className="text-muted-foreground">
                If your browser is older and does not support audio playback yet, we will tell you. You can update Chrome, Safari, or Edge for free.
              </p>
            </CardContent>
          </Card>

          {/* ── Browser support alert ─────────────────────── */}
          {supported === false && (
            <Alert variant="destructive">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="text-lg">Your browser doesn't support audio yet</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                Try updating Chrome, Safari, or Edge to the latest version, then come back. You can also read each guide on its written page — links are on every audio entry below.
              </AlertDescription>
            </Alert>
          )}

          {/* ── Voice & playback settings ─────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Mic className="w-5 h-5 text-indigo-600" />
                Voice &amp; playback settings
              </CardTitle>
              <CardDescription className="text-base">
                Pick a voice you like. Adjust speed, pitch, and volume. Save once and your settings stick.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Voice picker */}
              <div>
                <label htmlFor="voice-picker" className="block text-base font-medium mb-2">
                  Voice
                </label>
                <select
                  id="voice-picker"
                  value={voiceURI}
                  onChange={(e) => setVoiceURI(e.target.value)}
                  disabled={!supported || voices.length === 0}
                  className="w-full min-h-14 text-base rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                >
                  {voices.length === 0 && (
                    <option value="">No voices available</option>
                  )}
                  {voices.map(v => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name} — {v.lang}{v.default ? ' (default)' : ''}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {voices.length > 0
                    ? `${voices.length} voice${voices.length === 1 ? '' : 's'} on this device.`
                    : 'Voices load after the page finishes.'}
                </p>
              </div>

              {/* Rate */}
              <div>
                <label htmlFor="rate-slider" className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Speed (rate)</span>
                  <span className="text-muted-foreground tabular-nums">{rate.toFixed(1)}×</span>
                </label>
                <input
                  id="rate-slider"
                  type="range"
                  min={0.5}
                  max={1.5}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                  aria-label="Playback speed"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.5× Slow</span>
                  <span>1.0× Natural</span>
                  <span>1.5× Fast</span>
                </div>
              </div>

              {/* Pitch */}
              <div>
                <label htmlFor="pitch-slider" className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Pitch</span>
                  <span className="text-muted-foreground tabular-nums">{pitch.toFixed(1)}</span>
                </label>
                <input
                  id="pitch-slider"
                  type="range"
                  min={0.5}
                  max={2}
                  step={0.1}
                  value={pitch}
                  onChange={(e) => setPitch(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                  aria-label="Voice pitch"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Low</span>
                  <span>Normal</span>
                  <span>High</span>
                </div>
              </div>

              {/* Volume */}
              <div>
                <label htmlFor="volume-slider" className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Volume</span>
                  <span className="text-muted-foreground tabular-nums">{Math.round(volume * 100)}%</span>
                </label>
                <input
                  id="volume-slider"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                  aria-label="Volume"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button onClick={saveSettings} className="min-h-14 text-base gap-2 bg-indigo-600 hover:bg-indigo-700">
                  <CheckCircle2 className="w-4 h-4" /> Save my settings
                </Button>
                {saved && (
                  <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                    Saved to this device.
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* ── Now reading bar ───────────────────────────── */}
          {currentPiece && (
            <Card className="border-indigo-300 bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-800 sticky top-2 z-10 shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300 font-semibold mb-1">
                      Now reading…
                    </p>
                    <p className="text-lg font-semibold truncate">{currentPiece.title}</p>
                    <div className="mt-3 h-2 bg-indigo-200/70 dark:bg-indigo-900/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 transition-[width] duration-500"
                        style={{ width: `${Math.round(progress * 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      type="button"
                      onClick={togglePause}
                      variant="outline"
                      className="min-h-14 gap-2"
                      aria-label={paused ? 'Resume reading' : 'Pause reading'}
                    >
                      {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                      {paused ? 'Resume' : 'Pause'}
                    </Button>
                    <Button
                      type="button"
                      onClick={skipNext}
                      variant="outline"
                      className="min-h-14 gap-2"
                      aria-label="Skip to next"
                    >
                      <SkipForward className="w-4 h-4" /> Next
                    </Button>
                    <Button
                      type="button"
                      onClick={stop}
                      variant="outline"
                      className="min-h-14 gap-2"
                      aria-label="Stop reading"
                    >
                      <Square className="w-4 h-4" /> Stop
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Tip: press <kbd className="px-1.5 py-0.5 border rounded bg-background text-xs">Shift</kbd> + <kbd className="px-1.5 py-0.5 border rounded bg-background text-xs">Space</kbd> to pause or resume from the keyboard.
                </p>
              </CardContent>
            </Card>
          )}

          {/* ── Library by category ───────────────────────── */}
          <section aria-labelledby="library-heading">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
              <h2 id="library-heading" className="text-2xl font-bold flex items-center gap-2">
                <Headphones className="w-6 h-6 text-indigo-600" />
                Audio library
              </h2>
              <p className="text-sm text-muted-foreground">
                Tap play on any one. The next guide in the same category plays after.
              </p>
            </div>

            <div className="space-y-10">
              {categories.map(cat => {
                const items = LIBRARY.filter(p => p.category === cat);
                return (
                  <section key={cat} aria-labelledby={`cat-${cat}`}>
                    <h3
                      id={`cat-${cat}`}
                      className="text-lg font-semibold mb-3 flex items-center gap-2"
                    >
                      <span aria-hidden="true">•</span>
                      {cat}
                      <Badge variant="secondary" className="text-xs">{items.length}</Badge>
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {items.map(piece => {
                        const mins = estimateMinutes(piece.text);
                        const active = playingId === piece.id;
                        return (
                          <Card
                            key={piece.id}
                            className={active ? 'border-indigo-400 ring-2 ring-indigo-300 dark:ring-indigo-800' : ''}
                          >
                            <CardContent className="p-5">
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4 className="font-semibold text-base md:text-lg leading-snug">
                                  {piece.title}
                                </h4>
                                <Badge variant="outline" className="text-xs shrink-0 gap-1">
                                  <Clock className="w-3 h-3" /> {mins} min
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {piece.description}
                              </p>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Button
                                  type="button"
                                  onClick={() => play(piece)}
                                  disabled={!supported}
                                  className="min-h-14 w-[80px] md:w-auto gap-2 bg-indigo-600 hover:bg-indigo-700"
                                  aria-label={`Play ${piece.title}`}
                                >
                                  <Play className="w-5 h-5" />
                                  {active && !paused ? 'Playing' : 'Play'}
                                </Button>
                                {active && (
                                  <>
                                    <Button
                                      type="button"
                                      onClick={togglePause}
                                      variant="outline"
                                      className="min-h-14 gap-2"
                                    >
                                      {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                                      {paused ? 'Resume' : 'Pause'}
                                    </Button>
                                    <Button
                                      type="button"
                                      onClick={stop}
                                      variant="outline"
                                      className="min-h-14 gap-2"
                                    >
                                      <Square className="w-4 h-4" /> Stop
                                    </Button>
                                  </>
                                )}
                                {piece.fullPage && (
                                  <Link
                                    to={piece.fullPage}
                                    className="inline-flex items-center gap-1 text-sm text-indigo-700 dark:text-indigo-300 hover:underline ml-auto"
                                  >
                                    <BookOpen className="w-4 h-4" /> Read full page
                                  </Link>
                                )}
                                <button
                                  type="button"
                                  onClick={() => window.print()}
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  aria-label={`Print ${piece.title}`}
                                >
                                  <Printer className="w-4 h-4" /> Print
                                </button>
                              </div>
                              {active && (
                                <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden" aria-hidden="true">
                                  <div
                                    className="h-full bg-indigo-600 transition-[width] duration-500"
                                    style={{ width: `${Math.round(progress * 100)}%` }}
                                  />
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          {/* ── Background play card ──────────────────────── */}
          <Card className="border-indigo-200 bg-indigo-50/70 dark:bg-indigo-950/20 dark:border-indigo-900">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Headphones className="w-5 h-5 text-indigo-600" />
                Keep listening while the screen is off
              </CardTitle>
              <CardDescription className="text-base">
                Short answer — it depends on the browser.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>
                Your phone will keep reading even when the screen goes dark if you use Chrome on Android or any desktop browser. On iPhone and iPad, Safari pauses speech when the screen locks.
              </p>
              <p>
                For full-length hands-free listening on iPhone or iPad, open the written guide in Safari, tap the page menu, and choose <strong>Listen to Page</strong> — Safari's native reader keeps going when the screen locks. Our{' '}
                <Link to="/tools/screen-reader-starter" className="text-indigo-700 dark:text-indigo-300 hover:underline inline-flex items-center gap-1">
                  Screen Reader Starter <ExternalLink className="w-3 h-3" />
                </Link>{' '}
                walks through that step by step.
              </p>
            </CardContent>
          </Card>

          {/* ── Why this matters ──────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Why listening helps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>Rest your eyes after a long day of screens. Learn something new while walking the dog. Listen while cooking, folding laundry, or waiting in line. Multitask safely without staring at a phone.</p>
              <p>
                Pair the audio with a Bluetooth hearing aid for clear, direct streaming. If you are new to that setup, our{' '}
                <Link to="/tools/hearing-aid-tech-helper" className="text-indigo-700 dark:text-indigo-300 hover:underline inline-flex items-center gap-1">
                  Hearing Aid Tech Helper <ExternalLink className="w-3 h-3" />
                </Link>{' '}
                shows how to connect hearing aids to iPhone, iPad, or Android.
              </p>
            </CardContent>
          </Card>

          {/* ── Listening tips ────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tips for listening comprehension</CardTitle>
              <CardDescription className="text-base">A few small habits make the voice feel natural fast.</CardDescription>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>Start at 0.8× and work your way up to 1.1× or 1.2× as your ears get used to the voice. Speeding up too early makes things feel choppy.</p>
              <p>Use headphones, wired or wireless, when you are in a noisy place like a coffee shop or a walk near traffic.</p>
              <p>If you wear Bluetooth hearing aids, set them as the audio output so the speech streams directly to your ears at a comfortable volume.</p>
            </CardContent>
          </Card>

          {/* ── Not loving the voice? ─────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Not loving the voice?</CardTitle>
              <CardDescription className="text-base">Your device has more than one — pick a voice you like.</CardDescription>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>
                Scroll the <strong>Voice</strong> list in the settings card above and try several. Some are warm, some are formal, some sound older, some younger. There is no right answer.
              </p>
              <p>
                iPhone and iPad have especially natural-sounding voices like Samantha and the Siri voices. Newer Macs include them too. On Android, look for Google voices that are labeled as "Network" — those sound noticeably smoother than the older on-device ones.
              </p>
            </CardContent>
          </Card>

          {/* ── Native reader alternative ─────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Another option — your device's built-in reader</CardTitle>
              <CardDescription className="text-base">
                Works on any webpage, including ones outside TekSure.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-3">
              <p>
                Every modern operating system has a reader that can speak any text you highlight. On iPhone and iPad, open <strong>Settings</strong>, go to <strong>Accessibility</strong>, then <strong>Spoken Content</strong>, and turn on <strong>Speak Selection</strong>. Then in Safari you can also use <strong>Listen to Page</strong> from the page menu.
              </p>
              <p>
                On a computer, Chrome offers a <strong>Read Aloud</strong> option, and Google has a free read-aloud extension for any page. Our{' '}
                <Link to="/tools/screen-reader-starter" className="text-indigo-700 dark:text-indigo-300 hover:underline inline-flex items-center gap-1">
                  Screen Reader Starter <ExternalLink className="w-3 h-3" />
                </Link>{' '}
                walks you through the setup on each device without jargon.
              </p>
            </CardContent>
          </Card>

          {/* ── Privacy ───────────────────────────────────── */}
          <Card className="border-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/20 dark:border-emerald-900">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Your privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-relaxed space-y-2">
              <p>
                Speech synthesis runs on your device. The text is not sent to any server. No audio is stored, nothing is recorded, and nothing is uploaded. Your settings are saved in your browser only, never to our systems.
              </p>
            </CardContent>
          </Card>

          {/* ── Request form ──────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Want something we haven't recorded?</CardTitle>
              <CardDescription className="text-base">
                Tell us the topic and we will add it to the queue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submitRequest} className="space-y-3">
                <label htmlFor="req-text" className="block text-base font-medium">
                  What topic would you like to hear?
                </label>
                <textarea
                  id="req-text"
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="For example: How to use Apple Pay at the grocery store."
                />
                <div className="flex items-center gap-3 flex-wrap">
                  <Button type="submit" className="min-h-14 gap-2 bg-indigo-600 hover:bg-indigo-700">
                    <CheckCircle2 className="w-4 h-4" /> Send my request
                  </Button>
                  {requestSent && (
                    <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                      Thanks — we'll add it to the queue.
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Saved only in your browser. Nothing is sent to a server.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* ── FAQ ───────────────────────────────────────── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold mb-4">Questions people ask</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-base font-semibold">Is the voice AI-generated?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  It is an on-device speech engine, not a cloud AI service. Some of the newer voices from Apple and Google are trained on real human voices, and they sound very natural. No text is sent to a server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-base font-semibold">Does this work on my flip phone?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  No. You need a modern browser on a smartphone, tablet, or computer. If your phone cannot open the App Store or Play Store, it cannot run this feature. You can still read the written guides on a library computer for free.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-base font-semibold">Can I speed it up?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Yes. The speed slider goes from 0.5× for slow-and-steady up to 1.5× for quick listening. Most people settle in between 1.0× and 1.2× after a day or two of use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-base font-semibold">Will it wake my spouse if I listen at night?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Turn the volume slider way down, and plug in a pair of headphones or earbuds. Bluetooth earbuds and hearing aids also stream directly to your ears without any sound leaking into the room.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left text-base font-semibold">Can I send a link that auto-plays?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Technically yes, but we don't. Most people find surprise audio unsettling, and some browsers block it anyway. A plain link that lets the other person tap play is kinder and still quick.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left text-base font-semibold">Why did the voice stop when I locked the screen?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  On iPhone and iPad, Safari pauses speech when the screen locks. For full-length hands-free listening, use Safari's <strong>Listen to Page</strong> feature on the written guide instead. Chrome on Android and every desktop browser keep playing with the screen off.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* ── Related tools ─────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Related tools</CardTitle>
              <CardDescription className="text-base">More TekSure tools for accessible tech.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { to: '/tools/screen-reader-starter', label: 'Screen Reader Starter', note: 'Turn on built-in readers on iPhone, Android, Mac, and Windows.' },
                  { to: '/tools/low-vision-tech-hub', label: 'Low Vision Tech Hub', note: 'Make screens easier to see on every device.' },
                  { to: '/tools/podcast-directory', label: 'Podcast Directory', note: 'Senior-friendly podcasts worth your time.' },
                  { to: '/tools/hearing-aid-tech-helper', label: 'Hearing Aid Tech Helper', note: 'Pair, stream, and fix common issues.' },
                ].map(r => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base">{r.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{r.note}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
