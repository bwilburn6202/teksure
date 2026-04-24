import { useState, useEffect } from 'react';
import {
  Smartphone,
  MessageSquare,
  Video,
  Camera,
  Mail,
  Image as ImageIcon,
  Bell,
  Cloud,
  Download,
  ChevronLeft,
  Sparkles,
  Shield,
  RotateCcw,
  Trophy,
  Wifi,
  Battery,
  Signal,
  Phone,
  Mic,
  VideoOff,
  X,
  Send,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────── */
type SimId =
  | 'text-message'
  | 'video-call'
  | 'screenshot'
  | 'download-app'
  | 'send-email'
  | 'share-photo'
  | 'set-reminder'
  | 'check-weather';

interface SimOption {
  id: SimId;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  available: boolean;
  guideLink?: string;
}

const SIM_OPTIONS: SimOption[] = [
  {
    id: 'text-message',
    title: 'Send a text message',
    description: 'Practice typing and sending a text to a friend',
    icon: MessageSquare,
    available: true,
    guideLink: '/guide/text-message',
  },
  {
    id: 'video-call',
    title: 'Make a video call',
    description: 'Practice starting and ending a video call',
    icon: Video,
    available: true,
    guideLink: '/guide/video-call',
  },
  {
    id: 'screenshot',
    title: 'Take a screenshot',
    description: 'Practice capturing what is on your screen',
    icon: Camera,
    available: true,
    guideLink: '/guide/screenshot',
  },
  {
    id: 'send-email',
    title: 'Send an email',
    description: 'Practice composing and sending an email',
    icon: Mail,
    available: false,
  },
  {
    id: 'download-app',
    title: 'Download an app',
    description: 'Practice finding and installing a new app',
    icon: Download,
    available: false,
  },
  {
    id: 'share-photo',
    title: 'Share a photo',
    description: 'Practice sending a photo to someone',
    icon: ImageIcon,
    available: false,
  },
  {
    id: 'set-reminder',
    title: 'Set a reminder',
    description: 'Practice creating a reminder for later',
    icon: Bell,
    available: false,
  },
  {
    id: 'check-weather',
    title: 'Check the weather',
    description: 'Practice looking up today\'s forecast',
    icon: Cloud,
    available: false,
  },
];

/* ────────────────────────────────────────────────
   Phone Frame
   ──────────────────────────────────────────────── */
function PhoneFrame({
  children,
  showStatusBar = true,
}: {
  children: React.ReactNode;
  showStatusBar?: boolean;
}) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false }),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false }));
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      {/* Outer bezel */}
      <div
        className="relative bg-gray-900 dark:bg-black p-3 shadow-2xl ring-4 ring-gray-800 dark:ring-gray-700"
        style={{ borderRadius: '48px' }}
      >
        {/* Screen */}
        <div
          className="relative overflow-hidden bg-white dark:bg-neutral-950 flex flex-col"
          style={{ borderRadius: '36px', height: '620px' }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 dark:bg-black rounded-b-2xl z-20" />

          {/* Status bar */}
          {showStatusBar && (
            <div className="relative flex items-center justify-between px-6 pt-2 pb-1 text-xs font-semibold text-gray-900 dark:text-white z-10">
              <span className="tabular-nums">{time}</span>
              <div className="flex items-center gap-1.5">
                <Signal className="h-3.5 w-3.5" />
                <Wifi className="h-3.5 w-3.5" />
                <Battery className="h-4 w-4" />
              </div>
            </div>
          )}

          {/* Screen content */}
          <div className="flex-1 overflow-hidden relative">{children}</div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-gray-900 dark:bg-white z-30" />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Gentle Hint (shown when user taps wrong thing)
   ──────────────────────────────────────────────── */
function GentleHint({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-end justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 w-full max-w-sm shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-start gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-300" />
          </div>
          <div>
            <p className="font-bold text-base text-gray-900 dark:text-white">That's okay!</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{message}</p>
          </div>
        </div>
        <Button onClick={onDismiss} className="w-full min-h-12 text-base" size="lg">
          Got it, let me try again
        </Button>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Big Prompt Banner (the gentle guide at the top)
   ──────────────────────────────────────────────── */
function PromptBanner({ step, total, text }: { step: number; total: number; text: string }) {
  return (
    <Card className="border-2 border-primary/40 bg-primary/5 mb-4">
      <CardContent className="p-4">
        <p className="text-sm font-semibold text-primary mb-1">
          Step {step} of {total}
        </p>
        <p className="text-lg font-medium text-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

/* ────────────────────────────────────────────────
   Text Message Simulation
   ──────────────────────────────────────────────── */
function TextMessageSim({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [hint, setHint] = useState<string | null>(null);
  const [typedText, setTypedText] = useState('');
  const [sent, setSent] = useState(false);

  const prompts = [
    'Tap the green Messages app to open it.',
    'Tap on Mom\'s conversation to open it.',
    'Tap the message area and type a short hello (the keyboard has a "Type for me" button).',
    'Tap the blue Send button to send your message.',
  ];

  const handleWrong = (msg: string) => setHint(msg);

  return (
    <PhoneFrame>
      {/* Step 0 - Home screen */}
      {step === 0 && (
        <div className="h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4 pt-6">
          <div className="grid grid-cols-4 gap-4 mt-6">
            {/* Messages (target) */}
            <button
              onClick={() => setStep(1)}
              className="flex flex-col items-center gap-1 active:scale-95 transition-transform"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg ring-2 ring-white/40 animate-pulse">
                <MessageSquare className="h-7 w-7 text-white" fill="white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Messages</span>
            </button>
            {/* Wrong icons */}
            <button
              onClick={() => handleWrong('That\'s the Camera app, used for taking photos. We want to send a message, so look for the green Messages app.')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-gray-800 flex items-center justify-center shadow-lg">
                <Camera className="h-7 w-7 text-white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Camera</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s the Phone app, for voice calls. We want to send a text message — look for the green Messages app.')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-600 flex items-center justify-center shadow-lg">
                <Phone className="h-7 w-7 text-white" fill="white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Phone</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s the Mail app, for email. To send a quick text, tap the green Messages app instead.')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Mail</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 1 - Messages list */}
      {step === 1 && (
        <div className="h-full bg-white dark:bg-neutral-950 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Messages</h2>
          </div>
          <div className="flex-1 overflow-auto">
            {/* Mom (target) */}
            <button
              onClick={() => setStep(2)}
              className="w-full flex items-center gap-3 p-4 active:bg-gray-100 dark:active:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-left"
            >
              <div className="h-12 w-12 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                M
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">Mom</p>
                <p className="text-sm text-gray-500 truncate">Can't wait to see you!</p>
              </div>
              <span className="text-xs text-gray-400">Now</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s a conversation with "Spam Caller." We want to message Mom — tap her row instead.')}
              className="w-full flex items-center gap-3 p-4 active:bg-gray-100 dark:active:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-left"
            >
              <div className="h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                ?
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">Unknown number</p>
                <p className="text-sm text-gray-500 truncate">You've won a prize!</p>
              </div>
              <span className="text-xs text-gray-400">2h</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s a conversation with your friend Tom. Practice by messaging Mom — tap her row at the top.')}
              className="w-full flex items-center gap-3 p-4 active:bg-gray-100 dark:active:bg-gray-800 text-left"
            >
              <div className="h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                T
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">Tom</p>
                <p className="text-sm text-gray-500 truncate">See you Saturday</p>
              </div>
              <span className="text-xs text-gray-400">Yesterday</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2 - Conversation */}
      {step === 2 && (
        <div className="h-full bg-gray-50 dark:bg-neutral-900 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-blue-500" />
            <div className="h-8 w-8 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">Mom</p>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-auto">
            <div className="flex justify-start">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl rounded-bl-md px-4 py-2 max-w-[75%]">
                <p className="text-base text-gray-900 dark:text-white">Can't wait to see you!</p>
              </div>
            </div>
            {typedText && (
              <div className="flex justify-end">
                <div className="bg-blue-500 rounded-2xl rounded-br-md px-4 py-2 max-w-[75%]">
                  <p className="text-base text-white">{typedText}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-white dark:bg-neutral-950">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-3 min-h-12 flex items-center">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {typedText || 'iMessage'}
                </p>
              </div>
              <button
                onClick={() => {
                  if (!typedText) {
                    handleWrong('Nothing to send yet! First tap "Type for me" to add your message.');
                    return;
                  }
                  setSent(true);
                  setTimeout(() => {
                    setStep(3);
                  }, 400);
                }}
                className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                  typedText
                    ? 'bg-blue-500 active:scale-95'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label="Send"
              >
                <Send className="h-5 w-5 text-white" fill={typedText ? 'white' : 'none'} />
              </button>
            </div>

            {!typedText && (
              <Button
                className="w-full mt-3 min-h-12 text-base"
                size="lg"
                onClick={() => setTypedText('Hi Mom! Can\'t wait to see you too. Love you!')}
              >
                Type for me
              </Button>
            )}
            {typedText && !sent && (
              <p className="text-center text-xs text-gray-500 mt-2">
                Now tap the blue Send button
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 3 - Done */}
      {step === 3 && (
        <div className="h-full bg-gradient-to-br from-green-400 to-emerald-500 flex flex-col items-center justify-center p-8 text-center">
          <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur flex items-center justify-center mb-4">
            <Send className="h-10 w-10 text-white" fill="white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
          <p className="text-white/90 text-base mb-6">
            Mom got your message. That's all there is to it.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onComplete}
            className="min-h-12 text-base font-semibold"
          >
            Finish practice
          </Button>
        </div>
      )}

      {hint && <GentleHint message={hint} onDismiss={() => setHint(null)} />}

      {/* Hidden-accessible step prompt overlay at bottom */}
      {step < 3 && !hint && (
        <div className="absolute top-10 inset-x-3 z-30">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-4 py-2">
            <p className="text-white text-sm font-medium text-center">
              {prompts[step]}
            </p>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

/* ────────────────────────────────────────────────
   Video Call Simulation
   ──────────────────────────────────────────────── */
function VideoCallSim({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [hint, setHint] = useState<string | null>(null);

  const prompts = [
    'Tap the blue FaceTime app to open it.',
    'Tap on "Grandkids" to start a video call with them.',
    'Wait for them to answer, then tap the red button to end the call.',
  ];

  const handleWrong = (msg: string) => setHint(msg);

  return (
    <PhoneFrame>
      {/* Step 0 - Home screen */}
      {step === 0 && (
        <div className="h-full bg-gradient-to-br from-indigo-500 via-blue-400 to-sky-400 p-4 pt-6">
          <div className="grid grid-cols-4 gap-4 mt-6">
            <button
              onClick={() => setStep(1)}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-400 flex items-center justify-center shadow-lg ring-2 ring-white/40 animate-pulse">
                <Video className="h-7 w-7 text-white" fill="white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">FaceTime</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s the regular Phone app — it only does voice calls. For video, we want FaceTime (the green camera icon).')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-600 flex items-center justify-center shadow-lg">
                <Phone className="h-7 w-7 text-white" fill="white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Phone</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s Photos, where your pictures live. For a video call, tap FaceTime instead.')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <ImageIcon className="h-7 w-7 text-pink-500" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Photos</span>
            </button>
            <button
              onClick={() => handleWrong('That\'s Messages, for texts. For a video call, tap FaceTime — the green camera icon.')}
              className="flex flex-col items-center gap-1 active:scale-95"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg">
                <MessageSquare className="h-7 w-7 text-white" fill="white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">Messages</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 1 - Contacts list */}
      {step === 1 && (
        <div className="h-full bg-white dark:bg-neutral-950 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">FaceTime</h2>
            <p className="text-sm text-gray-500">Tap a contact to call</p>
          </div>
          <div className="flex-1 overflow-auto">
            <button
              onClick={() => setStep(2)}
              className="w-full flex items-center gap-3 p-4 active:bg-gray-100 dark:active:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-left"
            >
              <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl shrink-0">
                G
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-gray-900 dark:text-white">Grandkids</p>
                <p className="text-sm text-gray-500">Tap to video call</p>
              </div>
              <Video className="h-6 w-6 text-green-500" />
            </button>
            <button
              onClick={() => handleWrong('This would call your dentist — probably not who you meant! Tap "Grandkids" instead.')}
              className="w-full flex items-center gap-3 p-4 active:bg-gray-100 dark:active:bg-gray-800 border-b border-gray-100 dark:border-gray-800 text-left"
            >
              <div className="h-14 w-14 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl shrink-0">
                D
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-gray-900 dark:text-white">Dr. Smith</p>
                <p className="text-sm text-gray-500">Dentist</p>
              </div>
              <Video className="h-6 w-6 text-green-500" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2 - Calling screen */}
      {step === 2 && (
        <div className="h-full relative bg-gradient-to-br from-slate-800 to-slate-900">
          {/* Fake video feed */}
          <div className="h-full w-full bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 flex items-center justify-center">
            <div className="text-center">
              <div className="h-28 w-28 rounded-full bg-yellow-400 mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-lg mb-3">
                G
              </div>
              <p className="text-2xl font-bold text-gray-800">Grandkids</p>
              <p className="text-base text-gray-700 mt-1">Connecting...</p>
            </div>
          </div>

          {/* Self-preview */}
          <div className="absolute top-4 right-4 w-20 h-28 rounded-xl bg-gray-700 border-2 border-white/40 shadow-lg flex items-center justify-center">
            <p className="text-white text-xs">You</p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 inset-x-0 flex justify-center gap-4 z-20">
            <button
              onClick={() => handleWrong('That button turns your microphone off (mute). The call would still be going. To end the call, tap the big red button.')}
              className="h-14 w-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center active:scale-95"
              aria-label="Mute"
            >
              <Mic className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => setStep(3)}
              className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center active:scale-95 shadow-lg ring-4 ring-red-500/30 animate-pulse"
              aria-label="End call"
            >
              <Phone className="h-7 w-7 text-white" style={{ transform: 'rotate(135deg)' }} fill="white" />
            </button>
            <button
              onClick={() => handleWrong('That button turns your camera off (they see a black screen but you\'re still connected). To end the call, tap the big red button in the middle.')}
              className="h-14 w-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center active:scale-95"
              aria-label="Camera off"
            >
              <VideoOff className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3 - Done */}
      {step === 3 && (
        <div className="h-full bg-gradient-to-br from-green-400 to-teal-500 flex flex-col items-center justify-center p-8 text-center">
          <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur flex items-center justify-center mb-4">
            <Video className="h-10 w-10 text-white" fill="white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Call ended</h3>
          <p className="text-white/90 text-base mb-6">
            You started and ended a video call. Easy, right?
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onComplete}
            className="min-h-12 text-base font-semibold"
          >
            Finish practice
          </Button>
        </div>
      )}

      {hint && <GentleHint message={hint} onDismiss={() => setHint(null)} />}

      {step < 3 && !hint && (
        <div className="absolute top-10 inset-x-3 z-30">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-4 py-2">
            <p className="text-white text-sm font-medium text-center">{prompts[step]}</p>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

/* ────────────────────────────────────────────────
   Screenshot Simulation
   ──────────────────────────────────────────────── */
function ScreenshotSim({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [hint, setHint] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);

  const prompts = [
    'We\'re on a webpage with something you want to save. To take a screenshot, press the Side button and Volume Up button at the same time.',
    'Great — your screenshot was taken! Tap the small preview in the corner.',
    'Tap "Done" to save it to Photos.',
  ];

  const handleWrong = (msg: string) => setHint(msg);

  const takeScreenshot = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    setStep(1);
  };

  return (
    <div className="mx-auto w-full max-w-[360px] relative">
      <div
        className="relative bg-gray-900 dark:bg-black p-3 shadow-2xl ring-4 ring-gray-800 dark:ring-gray-700"
        style={{ borderRadius: '48px' }}
      >
        {/* Side buttons on phone bezel */}
        {step === 0 && (
          <>
            {/* Volume Up */}
            <button
              onClick={takeScreenshot}
              className="absolute -left-1 top-24 w-2 h-14 bg-gray-700 rounded-l active:bg-gray-500 z-40"
              aria-label="Volume Up"
            />
            {/* Decoy: Volume Down */}
            <button
              onClick={() => handleWrong('That\'s Volume Down. For a screenshot, press the SIDE button (right) and Volume UP (top left) at the same time.')}
              className="absolute -left-1 top-44 w-2 h-14 bg-gray-700 rounded-l active:bg-gray-500 z-40"
              aria-label="Volume Down"
            />
            {/* Side button */}
            <button
              onClick={takeScreenshot}
              className="absolute -right-1 top-32 w-2 h-20 bg-gray-700 rounded-r active:bg-gray-500 z-40"
              aria-label="Side Button"
            />
            {/* Hint labels */}
            <div className="absolute left-4 top-24 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full z-50 animate-pulse">
              Tap Vol Up
            </div>
            <div className="absolute right-4 top-32 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full z-50 animate-pulse">
              Tap Side
            </div>
          </>
        )}

        <div
          className="relative overflow-hidden bg-white dark:bg-neutral-950 flex flex-col"
          style={{ borderRadius: '36px', height: '620px' }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 dark:bg-black rounded-b-2xl z-20" />

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-6 pt-2 pb-1 text-xs font-semibold text-gray-900 dark:text-white z-10">
            <span className="tabular-nums">9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="h-3.5 w-3.5" />
              <Wifi className="h-3.5 w-3.5" />
              <Battery className="h-4 w-4" />
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative">
            {/* Step 0 - Fake webpage to screenshot */}
            {step === 0 && (
              <div className="h-full bg-white dark:bg-neutral-950 p-4 overflow-auto">
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <p className="text-xs text-gray-500 font-mono">teksure.com/recipe</p>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Grandma's Famous Cookies
                </h2>
                <div className="h-32 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 mb-3 flex items-center justify-center text-white text-4xl">
                  
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ingredients</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• 2 cups flour</li>
                  <li>• 1 cup butter (softened)</li>
                  <li>• 3/4 cup sugar</li>
                  <li>• 1 tsp vanilla extract</li>
                  <li>• 2 eggs</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Tip: Take a screenshot so you have the recipe even without internet!
                </p>
              </div>
            )}

            {/* Step 1 - Preview thumbnail */}
            {step === 1 && (
              <div className="h-full relative bg-white dark:bg-neutral-950">
                <div className="p-4">
                  <div className="border-b border-gray-200 pb-3 mb-3">
                    <p className="text-xs text-gray-500 font-mono">teksure.com/recipe</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Grandma's Famous Cookies
                  </h2>
                  <div className="h-32 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 mb-3 flex items-center justify-center text-white text-4xl">
                    
                  </div>
                </div>

                {/* Thumbnail in corner */}
                <button
                  onClick={() => setStep(2)}
                  className="absolute bottom-8 left-3 w-24 h-36 rounded-lg bg-white border-2 border-gray-300 shadow-2xl active:scale-95 overflow-hidden ring-4 ring-primary/50 animate-pulse"
                  aria-label="Screenshot preview"
                >
                  <div className="h-full w-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-2xl">
                    
                  </div>
                </button>
              </div>
            )}

            {/* Step 2 - Full screenshot editor */}
            {step === 2 && (
              <div className="h-full bg-gray-100 dark:bg-neutral-900 flex flex-col">
                <div className="flex items-center justify-between px-4 py-3">
                  <button
                    onClick={() => handleWrong('That would delete your screenshot. Tap "Done" instead to keep it.')}
                    className="text-base text-blue-500 font-medium active:opacity-60"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="text-base text-blue-500 font-bold active:opacity-60 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500/40 animate-pulse"
                  >
                    Done
                  </button>
                </div>
                <div className="flex-1 p-6 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-xl w-48 h-72 overflow-hidden">
                    <div className="p-2">
                      <p className="text-[6px] text-gray-400 font-mono">teksure.com/recipe</p>
                      <p className="text-xs font-bold mt-1">Grandma's Cookies</p>
                    </div>
                    <div className="h-20 mx-2 rounded bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-xl">
                      
                    </div>
                    <div className="p-2 space-y-0.5">
                      <p className="text-[8px] font-bold">Ingredients</p>
                      <p className="text-[6px] text-gray-600">• 2 cups flour</p>
                      <p className="text-[6px] text-gray-600">• 1 cup butter</p>
                      <p className="text-[6px] text-gray-600">• 3/4 cup sugar</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 - Done */}
            {step === 3 && (
              <div className="h-full bg-gradient-to-br from-purple-400 to-pink-500 flex flex-col items-center justify-center p-8 text-center">
                <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur flex items-center justify-center mb-4">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Saved to Photos!</h3>
                <p className="text-white/90 text-base mb-6">
                  Your screenshot is safe in your photo library. You can view it any time.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={onComplete}
                  className="min-h-12 text-base font-semibold"
                >
                  Finish practice
                </Button>
              </div>
            )}

            {/* Flash animation */}
            {flash && <div className="absolute inset-0 bg-white z-50 animate-pulse" />}

            {hint && <GentleHint message={hint} onDismiss={() => setHint(null)} />}

            {step < 3 && !hint && (
              <div className="absolute top-10 inset-x-3 z-30">
                <div className="bg-black/70 backdrop-blur-md rounded-2xl px-4 py-2">
                  <p className="text-white text-sm font-medium text-center">{prompts[step]}</p>
                </div>
              </div>
            )}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-gray-900 dark:bg-white z-30" />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Completion Screen
   ──────────────────────────────────────────────── */
function CompletionScreen({
  sim,
  onPracticeAgain,
  onPickAnother,
}: {
  sim: SimOption;
  onPracticeAgain: () => void;
  onPickAnother: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-2 border-green-400 dark:border-green-700 bg-green-50 dark:bg-green-950/30 mb-6">
        <CardContent className="p-8 text-center">
          <Trophy className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-3">
            You did it!
          </h2>
          <p className="text-lg text-green-800/90 dark:text-green-200/90 mb-6">
            You just completed the <strong>{sim.title.toLowerCase()}</strong> practice. No real phones were harmed — and now you know exactly what to do.
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Ready to do this on your real phone?
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-3 md:grid-cols-2 mb-6">
        {sim.guideLink && (
          <Button asChild size="lg" className="min-h-14 text-base font-semibold gap-2">
            <Link to={sim.guideLink}>
              Open the real guide
            </Link>
          </Button>
        )}
        <Button
          variant="outline"
          size="lg"
          onClick={onPracticeAgain}
          className="min-h-14 text-base font-semibold gap-2"
        >
          <RotateCcw className="h-5 w-5" /> Practice this again
        </Button>
      </div>

      <Button
        variant="ghost"
        size="lg"
        onClick={onPickAnother}
        className="w-full min-h-12 text-base"
      >
        <ChevronLeft className="h-5 w-5 mr-1" /> Choose a different thing to practice
      </Button>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Main
   ──────────────────────────────────────────────── */
export default function PracticeMode() {
  const [selected, setSelected] = useState<SimId | null>(null);
  const [completed, setCompleted] = useState(false);

  const selectedSim = SIM_OPTIONS.find(s => s.id === selected) ?? null;

  function handleComplete() {
    setCompleted(true);
  }

  function handlePracticeAgain() {
    setCompleted(false);
  }

  function handlePickAnother() {
    setSelected(null);
    setCompleted(false);
  }

  return (
    <>
      <SEOHead
        title="Practice Mode — Try Anything, Break Nothing | TekSure"
        description="A safe, simulated phone interface where you can practice texting, video calls, screenshots, and more — without worrying about messing up your real phone."
        path="/tools/practice-mode"
      />
      <Navbar />
      <main className="container py-8 md:py-12 min-h-[80vh] max-w-5xl mx-auto px-4">
        {/* Choose screen */}
        {!selected && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Fearless practice
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                Practice Without Worry
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nothing you do here will affect your real phone. Try everything. Make mistakes. Learn.
              </p>
            </div>

            <Card className="border-2 border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20 mb-8 max-w-3xl mx-auto">
              <CardContent className="p-5 flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400 shrink-0" />
                <div>
                  <p className="font-bold text-lg text-green-800 dark:text-green-200 mb-1">
                    This is a safe practice space
                  </p>
                  <p className="text-base text-green-900/80 dark:text-green-100/80">
                    Everything you tap is simulated. You cannot send a real text, make a real call, or change anything on your actual device. Tap anywhere — even the "wrong" button. We'll gently show you what it does.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-4 text-center">What do you want to practice?</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {SIM_OPTIONS.map(sim => {
                const Icon = sim.icon;
                return (
                  <button
                    key={sim.id}
                    onClick={() => sim.available && setSelected(sim.id)}
                    disabled={!sim.available}
                    className={`group relative text-left p-5 rounded-2xl border-2 transition-all ${
                      sim.available
                        ? 'border-border hover:border-primary hover:bg-primary/5 active:scale-[0.98] cursor-pointer'
                        : 'border-dashed border-border/60 bg-muted/30 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center mb-3 ${
                        sim.available
                          ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{sim.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {sim.description}
                    </p>
                    {!sim.available && (
                      <Badge
                        variant="secondary"
                        className="absolute top-3 right-3 text-xs"
                      >
                        Coming soon
                      </Badge>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 text-center text-sm text-muted-foreground">
              <Smartphone className="h-5 w-5 inline mr-1" />
              Simulations are designed to look like an iPhone. Android works the same way — just with different-colored icons.
            </div>
          </>
        )}

        {/* Active simulation */}
        {selected && selectedSim && !completed && (
          <div>
            <Button
              variant="ghost"
              size="lg"
              onClick={handlePickAnother}
              className="mb-4 gap-2"
            >
              <ChevronLeft className="h-5 w-5" /> Choose something else to practice
            </Button>

            <div className="grid gap-8 lg:grid-cols-5 items-start">
              {/* Left: explanation */}
              <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedSim.title}</h1>
                  <p className="text-lg text-muted-foreground">
                    Follow the prompts on the phone. Tap anywhere — mistakes are safe here.
                  </p>
                </div>
                <Card className="border-2 border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0" />
                    <p className="text-base text-green-900 dark:text-green-100">
                      This is a simulation. Your real phone is not affected.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-sm space-y-2">
                    <p className="font-semibold text-base">How it works</p>
                    <p className="text-muted-foreground leading-relaxed">
                      A small banner at the top of the phone tells you what to do next. Tap the button that matches. If you tap the wrong one, no problem — we'll explain what that button would do and let you try again.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right: phone */}
              <div className="lg:col-span-3">
                {selectedSim.id === 'text-message' && <TextMessageSim onComplete={handleComplete} />}
                {selectedSim.id === 'video-call' && <VideoCallSim onComplete={handleComplete} />}
                {selectedSim.id === 'screenshot' && <ScreenshotSim onComplete={handleComplete} />}
              </div>
            </div>
          </div>
        )}

        {/* Completion */}
        {selected && selectedSim && completed && (
          <CompletionScreen
            sim={selectedSim}
            onPracticeAgain={handlePracticeAgain}
            onPickAnother={handlePickAnother}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
