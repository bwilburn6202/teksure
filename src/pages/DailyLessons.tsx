import { useState, useEffect } from 'react';
import { CheckCircle2, Flame, ArrowLeft, BookOpen, Shield, Smartphone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Progress } from '@/components/ui/progress';

/* ── Types ─────────────────────────────────── */

interface QuizOption { text: string; }

interface Lesson {
  id: number;
  track: number;
  trackName: string;
  order: number;
  title: string;
  emoji: string;
  content: string[];
  quiz: { question: string; options: QuizOption[]; correctIndex: number; };
}

interface Track {
  id: number;
  name: string;
  icon: React.ElementType;
  color: string;
}

/* ── Track metadata ────────────────────────── */

const tracks: Track[] = [
  { id: 1, name: 'Getting Started', icon: BookOpen, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  { id: 2, name: 'Staying Safe', icon: Shield, color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
  { id: 3, name: 'Your Phone', icon: Smartphone, color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
  { id: 4, name: 'Staying Connected', icon: MessageCircle, color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
];

/* ── Lesson data ───────────────────────────── */

const lessons: Lesson[] = [
  {
    id: 1, track: 1, trackName: 'Getting Started', order: 1,
    title: 'What Is the Internet?', emoji: '🌐',
    content: [
      'The internet is like a giant highway system for information. Instead of cars, it carries messages, pictures, videos, and websites between computers all over the world.',
      'When you open a website, your computer sends a request through this highway to another computer (called a server) that stores that website. The server sends the website back to you in less than a second.',
      'You connect to the internet through your internet provider — companies like Comcast, AT&T, or Spectrum. They provide the "on-ramp" to the information highway.',
    ],
    quiz: { question: 'What does the internet connect?', options: [{ text: 'Only phones' }, { text: 'Computers all over the world' }, { text: 'Only nearby devices' }], correctIndex: 1 },
  },
  {
    id: 2, track: 1, trackName: 'Getting Started', order: 2,
    title: 'What Is WiFi?', emoji: '📶',
    content: [
      'WiFi is a way for your devices to connect to the internet without using a cable. It uses invisible radio waves — similar to how a radio picks up music stations.',
      'A small box called a router in your home sends out these radio waves. Your phone, tablet, and laptop all pick up the signal and use it to access the internet.',
      'WiFi has a limited range — usually about 100-150 feet indoors. The farther you are from the router, the weaker the signal. Walls and floors also weaken it.',
    ],
    quiz: { question: 'What device sends WiFi signals in your home?', options: [{ text: 'Your phone' }, { text: 'The television' }, { text: 'A router' }], correctIndex: 2 },
  },
  {
    id: 3, track: 1, trackName: 'Getting Started', order: 3,
    title: 'What Is an App?', emoji: '📱',
    content: [
      'An app (short for application) is a program on your phone or tablet that does one specific job. Think of apps like tools in a toolbox — each one has its own purpose.',
      'For example, the Weather app tells you the forecast, the Camera app takes photos, and the Maps app gives you directions. You tap an app icon on your screen to open it.',
      'You can download new apps from the App Store (iPhone) or Google Play Store (Android). Many apps are free, and others cost a few dollars.',
    ],
    quiz: { question: 'Where do you get new apps?', options: [{ text: 'From the App Store or Google Play Store' }, { text: 'From a store at the mall' }, { text: 'They come in the mail' }], correctIndex: 0 },
  },
  {
    id: 4, track: 1, trackName: 'Getting Started', order: 4,
    title: 'What Is a Password?', emoji: '🔑',
    content: [
      'A password is a secret word or phrase that proves you are who you say you are. It is like the key to your house — only you should have it.',
      'Websites and apps use passwords to keep your information private. When you create an account, you choose a password. Every time you come back, you enter that password to get in.',
      'A good password is long (at least 12 characters) and mixes letters, numbers, and symbols. "purple-elephant-dancing-rain" is a strong password because it is long and hard to guess.',
    ],
    quiz: { question: 'What makes a password strong?', options: [{ text: 'Using your birthday' }, { text: 'Making it short and simple' }, { text: 'Making it long with mixed characters' }], correctIndex: 2 },
  },
  {
    id: 5, track: 1, trackName: 'Getting Started', order: 5,
    title: 'What Is the Cloud?', emoji: '☁️',
    content: [
      'The cloud is just a collection of powerful computers (called servers) that store your files on the internet instead of on your device. When people say something is "in the cloud," they mean it is saved online.',
      'Services like Google Photos, iCloud, and Dropbox let you save photos, documents, and other files in the cloud. This means you can access them from any device — your phone, tablet, or computer.',
      'The biggest benefit: if your phone breaks or gets lost, your files are safe in the cloud. You can sign into your account on a new device and everything is still there.',
    ],
    quiz: { question: 'What happens to your cloud files if your phone breaks?', options: [{ text: 'They are lost forever' }, { text: 'They are safe and accessible from another device' }, { text: 'They get sent to you by mail' }], correctIndex: 1 },
  },
  {
    id: 6, track: 2, trackName: 'Staying Safe', order: 1,
    title: 'How to Spot a Scam Email', emoji: '🎣',
    content: [
      'Scam emails (called phishing) try to trick you into giving away personal information like passwords or credit card numbers. They often look like real emails from companies you know.',
      'Three warning signs: (1) The email creates urgency — "Act now or your account will be closed!" (2) It asks you to click a link and enter personal information. (3) The sender address looks wrong — like "support@amaz0n-security.com" instead of "@amazon.com".',
      'If you are not sure whether an email is real, do not click any links. Instead, go directly to the company website by typing the address in your browser, or call them using a number from their official website.',
    ],
    quiz: { question: 'What should you do if an email asks you to click a link urgently?', options: [{ text: 'Click it right away' }, { text: 'Do not click — go to the website directly instead' }, { text: 'Forward it to your friends' }], correctIndex: 1 },
  },
  {
    id: 7, track: 2, trackName: 'Staying Safe', order: 2,
    title: 'Why You Should Never Share Your Password', emoji: '🤫',
    content: [
      'Your password is the key to your digital life — your email, bank accounts, photos, and personal information. Sharing it with anyone puts all of that at risk.',
      'Legitimate companies will never ask for your password. Not by email, not by phone, not by text message. If someone asks for it, that is a scam — even if they say they are from your bank or Apple.',
      'If you need someone to help you with your computer, sit with them and type the password yourself. Never tell it to someone over the phone or write it in an email.',
    ],
    quiz: { question: 'When is it okay to share your password?', options: [{ text: 'When a company emails you asking for it' }, { text: 'When someone calls saying they are from tech support' }, { text: 'Never — no legitimate company will ask for it' }], correctIndex: 2 },
  },
  {
    id: 8, track: 2, trackName: 'Staying Safe', order: 3,
    title: 'What Is Two-Factor Authentication?', emoji: '🔐',
    content: [
      'Two-factor authentication (2FA) adds a second lock to your account. Even if someone steals your password, they still cannot get in without the second factor — usually a code sent to your phone.',
      'Think of it like a bank vault that needs two keys. Your password is the first key. The code sent to your phone is the second key. A thief would need both to get in.',
      'Most major services offer 2FA — Gmail, Facebook, banks, and more. Look for it in your account settings under "Security" or "Two-Step Verification." It takes just a few minutes to set up.',
    ],
    quiz: { question: 'What does two-factor authentication require?', options: [{ text: 'Two different passwords' }, { text: 'Your password plus a code sent to your phone' }, { text: 'Two email addresses' }], correctIndex: 1 },
  },
  {
    id: 9, track: 2, trackName: 'Staying Safe', order: 4,
    title: 'How to Tell if a Website Is Safe', emoji: '🔒',
    content: [
      'Before entering any personal information on a website, check for "https://" at the beginning of the web address. The "s" stands for secure — it means the connection between you and the website is encrypted (scrambled so others cannot read it).',
      'Look for the padlock icon next to the web address in your browser. If there is no padlock or it shows a warning, do not enter any personal information on that page.',
      'Be extra careful with websites that look like ones you know but have slightly different addresses — like "amaz0n.com" (with a zero) instead of "amazon.com." Scammers create lookalike sites to steal your information.',
    ],
    quiz: { question: 'What does "https" at the start of a web address mean?', options: [{ text: 'The site is new' }, { text: 'The connection is secure and encrypted' }, { text: 'The site is free to use' }], correctIndex: 1 },
  },
  {
    id: 10, track: 2, trackName: 'Staying Safe', order: 5,
    title: 'What to Do if You Think You Have Been Scammed', emoji: '🚨',
    content: [
      'If you think you have been scammed, act quickly. First, change your passwords for any accounts that may be affected — especially email and banking. Do this from a different device if possible.',
      'Contact your bank immediately if you shared financial information or sent money. Many banks can reverse transactions if you report them quickly. The number is on the back of your card.',
      'Report the scam to the FTC at ReportFraud.ftc.gov or call 1-877-382-4357. You can also call the AARP Fraud Watch Network Helpline at 877-908-3360 for guidance. Do not feel embarrassed — scammers are professionals who trick millions of people.',
    ],
    quiz: { question: 'What is the first thing to do if you think you have been scammed?', options: [{ text: 'Wait and see what happens' }, { text: 'Change your passwords and contact your bank' }, { text: 'Delete all your emails' }], correctIndex: 1 },
  },
  {
    id: 11, track: 3, trackName: 'Your Phone', order: 1,
    title: 'How to Take a Screenshot', emoji: '📸',
    content: [
      'A screenshot is a picture of whatever is currently showing on your screen. It is useful for saving confirmation numbers, error messages, or anything you want to remember.',
      'On an iPhone: Press the side button and volume up button at the same time. On Android: Press the power button and volume down button at the same time. You will see a flash and hear a click.',
      'Your screenshot is saved in your Photos app. You can share it by text, email, or show it to someone for help with a tech problem.',
    ],
    quiz: { question: 'How do you take a screenshot on most phones?', options: [{ text: 'Shake the phone' }, { text: 'Press two buttons at the same time' }, { text: 'Say "screenshot" out loud' }], correctIndex: 1 },
  },
  {
    id: 12, track: 3, trackName: 'Your Phone', order: 2,
    title: 'How to Copy and Paste Text', emoji: '📋',
    content: [
      'Copying and pasting lets you take text from one place and put it somewhere else — without retyping it. This works for addresses, phone numbers, recipes, or any text on your screen.',
      'To copy text on your phone: Press and hold on a word until it is highlighted. Drag the blue handles to select more text. Then tap "Copy" from the menu that appears.',
      'To paste: Tap and hold where you want to put the text (in a message, email, or note). Tap "Paste" from the menu. The copied text will appear right there.',
    ],
    quiz: { question: 'How do you select text on a phone?', options: [{ text: 'Double-tap the screen' }, { text: 'Press and hold on a word, then drag to select' }, { text: 'Swipe left quickly' }], correctIndex: 1 },
  },
  {
    id: 13, track: 3, trackName: 'Your Phone', order: 3,
    title: 'How to Download an App', emoji: '⬇️',
    content: [
      'Apps are downloaded from the App Store (iPhone) or Google Play Store (Android). These are the official stores — never download apps from other websites.',
      'Open the store app on your phone. Use the search bar at the top to type the name of the app you want. Tap the app in the results, then tap "Get" (iPhone) or "Install" (Android).',
      'You may need to enter your password or use your fingerprint to confirm. The app will download and appear on your home screen. Tap it to open.',
    ],
    quiz: { question: 'Where should you download apps from?', options: [{ text: 'Any website you find' }, { text: 'Only from the App Store or Google Play Store' }, { text: 'From email links' }], correctIndex: 1 },
  },
  {
    id: 14, track: 3, trackName: 'Your Phone', order: 4,
    title: 'How to Adjust Text Size', emoji: '🔤',
    content: [
      'If the text on your phone is too small to read comfortably, you can make it bigger. This changes the text size across all your apps — not just one.',
      'On iPhone: Go to Settings > Display & Brightness > Text Size. Drag the slider to the right to make text larger. You can also turn on Bold Text for even easier reading.',
      'On Android: Go to Settings > Display > Font Size (or Text Size). Move the slider to increase the size. Some Android phones also have a "Display Size" option that makes everything bigger.',
    ],
    quiz: { question: 'Where do you change text size on your phone?', options: [{ text: 'In the Phone app' }, { text: 'In Settings under Display' }, { text: 'You cannot change it' }], correctIndex: 1 },
  },
  {
    id: 15, track: 3, trackName: 'Your Phone', order: 5,
    title: 'How to Connect to WiFi', emoji: '📶',
    content: [
      'Connecting to WiFi saves your cellular data and usually gives you a faster internet connection. You should connect to WiFi whenever you are at home or in a trusted location.',
      'Go to Settings > WiFi (or Wi-Fi). Make sure the WiFi switch is turned on. You will see a list of available networks. Tap your home network name.',
      'Enter your WiFi password when asked. This is usually on a sticker on your router. Once connected, your phone will remember this network and connect automatically in the future.',
    ],
    quiz: { question: 'Where can you find your WiFi password?', options: [{ text: 'In your email' }, { text: 'On a sticker on your router' }, { text: 'On the App Store' }], correctIndex: 1 },
  },
  {
    id: 16, track: 4, trackName: 'Staying Connected', order: 1,
    title: 'How to Send a Text Message', emoji: '💬',
    content: [
      'A text message (also called SMS) lets you send a short written message to another person phone. It is one of the easiest ways to stay in touch.',
      'Open the Messages app on your phone (green icon on iPhone, blue or purple icon on Android). Tap the new message button (usually a pencil or plus icon). Type the person name or phone number.',
      'Type your message in the text box at the bottom and tap the send button (usually an arrow). Your message will be delivered in seconds.',
    ],
    quiz: { question: 'How do you start a new text message?', options: [{ text: 'Open the Camera app' }, { text: 'Open the Messages app and tap the new message button' }, { text: 'Call the person first' }], correctIndex: 1 },
  },
  {
    id: 17, track: 4, trackName: 'Staying Connected', order: 2,
    title: 'How to Make a Video Call', emoji: '📹',
    content: [
      'Video calling lets you see and talk to someone face-to-face, even when you are miles apart. It is a wonderful way to stay close with family and friends.',
      'The easiest options: FaceTime (iPhone to iPhone — tap the FaceTime button in Contacts), Google Duo/Meet (works on any phone — download from the app store), or Zoom (great for group calls).',
      'Make sure you are in a well-lit area and prop your phone up so the camera shows your face. Speak at a normal volume. Tap the red button to end the call when you are done.',
    ],
    quiz: { question: 'What do you need for a video call?', options: [{ text: 'A special video phone' }, { text: 'A smartphone or tablet with a camera and an internet connection' }, { text: 'A subscription service' }], correctIndex: 1 },
  },
  {
    id: 18, track: 4, trackName: 'Staying Connected', order: 3,
    title: 'How to Send a Photo in a Message', emoji: '🖼️',
    content: [
      'Sharing photos by text message is a great way to show family what you are up to. You can send photos you have already taken or take a new one right in the conversation.',
      'In the Messages app, tap the plus (+) or camera icon next to the text box. Choose "Photo Library" to pick a photo you have already taken, or "Camera" to take a new one.',
      'Select the photo you want to send and tap the send button. The photo will appear in the conversation. The person on the other end can save it to their phone too.',
    ],
    quiz: { question: 'How do you attach a photo to a text message?', options: [{ text: 'Tap the camera or plus icon in Messages' }, { text: 'Email the photo first' }, { text: 'You cannot send photos by text' }], correctIndex: 0 },
  },
  {
    id: 19, track: 4, trackName: 'Staying Connected', order: 4,
    title: 'How to Use Voice Assistants', emoji: '🗣️',
    content: [
      'Voice assistants let you control your phone by talking to it. Say "Hey Siri" (iPhone) or "Hey Google" (Android) to wake it up, then ask your question or give a command.',
      'Useful things to try: "What is the weather today?", "Set a timer for 10 minutes", "Call [name]", "Send a text to [name]", "Remind me to take my medicine at 2 PM."',
      'Voice assistants are especially helpful when your hands are busy — cooking, driving, or when you do not want to type. You can also ask general questions like "How far is the nearest pharmacy?"',
    ],
    quiz: { question: 'How do you activate Siri on an iPhone?', options: [{ text: 'Tap the screen three times' }, { text: 'Say "Hey Siri"' }, { text: 'Press the volume button' }], correctIndex: 1 },
  },
  {
    id: 20, track: 4, trackName: 'Staying Connected', order: 5,
    title: 'How to Set a Reminder', emoji: '⏰',
    content: [
      'Your phone can remind you about appointments, medications, birthdays, and tasks. Reminders pop up on your screen at the time you set, even if the phone is locked.',
      'The easiest way: Say "Hey Siri, remind me to call Dr. Smith tomorrow at 10 AM" or "Hey Google, remind me to take my medicine at 8 PM every day."',
      'You can also open the Reminders app (iPhone) or Google Calendar (Android) to add reminders manually. Set the time, add a note, and your phone will alert you when it is time.',
    ],
    quiz: { question: 'What is the easiest way to set a reminder?', options: [{ text: 'Write it on paper' }, { text: 'Ask your voice assistant to set one' }, { text: 'Send yourself an email' }], correctIndex: 1 },
  },
];

/* ── Storage helpers ───────────────────────── */

const COMPLETED_KEY = 'teksure-completed-lessons';
const STREAK_KEY = 'teksure-lesson-streak';
const LAST_DATE_KEY = 'teksure-lesson-last-date';

function getCompleted(): number[] {
  try { return JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]'); } catch { return []; }
}
function markCompleted(id: number) {
  const c = getCompleted();
  if (!c.includes(id)) { c.push(id); localStorage.setItem(COMPLETED_KEY, JSON.stringify(c)); }
  updateStreak();
}
function getStreak(): number {
  try { return parseInt(localStorage.getItem(STREAK_KEY) || '0', 10); } catch { return 0; }
}
function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem(LAST_DATE_KEY);
  if (last === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const streak = last === yesterday ? getStreak() + 1 : 1;
  localStorage.setItem(STREAK_KEY, String(streak));
  localStorage.setItem(LAST_DATE_KEY, today);
}

/* ── Component ─────────────────────────────── */

export default function DailyLessons() {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [completed, setCompleted] = useState<number[]>(getCompleted);
  const [streak, setStreak] = useState(getStreak);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => { setCompleted(getCompleted()); setStreak(getStreak()); }, []);

  function handleAnswer(index: number) {
    setSelectedAnswer(index);
    setShowResult(true);
  }

  function handleComplete() {
    if (!activeLesson) return;
    markCompleted(activeLesson.id);
    setCompleted(getCompleted());
    setStreak(getStreak());
    setActiveLesson(null);
    setSelectedAnswer(null);
    setShowResult(false);
  }

  function openLesson(lesson: Lesson) {
    setActiveLesson(lesson);
    setSelectedAnswer(null);
    setShowResult(false);
  }

  /* ── Active lesson view ────────────── */
  if (activeLesson) {
    const isCorrect = selectedAnswer === activeLesson.quiz.correctIndex;
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="container py-10 max-w-2xl mx-auto">
          <button
            onClick={() => { setActiveLesson(null); setSelectedAnswer(null); setShowResult(false); }}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Lessons
          </button>

          <div className="text-center mb-6">
            <span className="text-4xl mb-2 block">{activeLesson.emoji}</span>
            <h1 className="text-2xl md:text-3xl font-bold">{activeLesson.title}</h1>
            <p className="text-sm text-muted-foreground mt-1">{activeLesson.trackName} — Lesson {activeLesson.order} of 5</p>
          </div>

          <Card className="rounded-2xl border mb-6">
            <CardContent className="p-6">
              {activeLesson.content.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed mb-4 last:mb-0">{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          {/* Quiz */}
          <Card className="rounded-2xl border bg-muted/30">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold mb-4">Quick Quiz</h2>
              <p className="text-lg mb-4">{activeLesson.quiz.question}</p>
              <div className="flex flex-col gap-3">
                {activeLesson.quiz.options.map((opt, i) => {
                  let variant: 'outline' | 'default' | 'destructive' = 'outline';
                  let extra = '';
                  if (showResult && i === activeLesson.quiz.correctIndex) { extra = 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300'; }
                  if (showResult && i === selectedAnswer && !isCorrect) { extra = 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300'; }
                  return (
                    <Button
                      key={i}
                      variant={variant}
                      className={`min-h-[48px] text-left justify-start text-base whitespace-normal h-auto py-3 ${extra}`}
                      onClick={() => !showResult && handleAnswer(i)}
                      disabled={showResult}
                    >
                      {opt.text}
                    </Button>
                  );
                })}
              </div>

              {showResult && (
                <div className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800'}`}>
                  <p className={`font-semibold ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-amber-800 dark:text-amber-300'}`}>
                    {isCorrect ? 'Correct!' : 'Not quite — try again!'}
                  </p>
                  {isCorrect && !completed.includes(activeLesson.id) && (
                    <Button className="mt-3 min-h-[48px] bg-green-600 hover:bg-green-700" onClick={handleComplete}>
                      <CheckCircle2 className="h-5 w-5 mr-2" /> Mark as Complete
                    </Button>
                  )}
                  {isCorrect && completed.includes(activeLesson.id) && (
                    <p className="text-sm mt-2 text-green-700 dark:text-green-400">You already completed this lesson!</p>
                  )}
                  {!isCorrect && (
                    <Button variant="outline" className="mt-3 min-h-[48px]" onClick={() => { setSelectedAnswer(null); setShowResult(false); }}>
                      Try Again
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Footer />
      </div>
    );
  }

  /* ── Track selection view ──────────── */
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Daily 5-Minute Lessons — TekSure"
        description="Learn one small tech concept every day in under 5 minutes. Short lessons designed for beginners."
        path="/daily-lessons"
      />
      <Navbar />
      <section className="container py-12 md:py-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Daily 5-Minute Lessons</h1>
          <p className="text-muted-foreground text-lg mb-4">Learn one small thing every day. Each lesson takes less than 5 minutes.</p>
          {streak > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-semibold">
              <Flame className="h-5 w-5" /> {streak} day streak!
            </div>
          )}
        </div>

        <div className="grid gap-6">
          {tracks.map((track) => {
            const trackLessons = lessons.filter((l) => l.track === track.id);
            const completedCount = trackLessons.filter((l) => completed.includes(l.id)).length;
            const Icon = track.icon;
            return (
              <Card key={track.id} className="rounded-2xl border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${track.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold">{track.name}</h2>
                      <p className="text-sm text-muted-foreground">{completedCount} of {trackLessons.length} complete</p>
                    </div>
                  </div>
                  <Progress value={(completedCount / trackLessons.length) * 100} className="h-2 mb-4" />
                  <div className="grid gap-2">
                    {trackLessons.map((lesson) => {
                      const done = completed.includes(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => openLesson(lesson)}
                          className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl hover:bg-accent transition-colors min-h-[48px]"
                        >
                          <span className="text-xl">{lesson.emoji}</span>
                          <span className="flex-1 text-sm font-medium">{lesson.title}</span>
                          {done && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
