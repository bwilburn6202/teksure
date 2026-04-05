import { useState, useCallback } from 'react';
import {
  Wifi, Smartphone, Printer, KeyRound, Monitor,
  ArrowLeft, RotateCcw, CheckCircle2, ArrowRight, HelpCircle,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/* ── Types ──────────────────────────────────────────── */

type NodeType = 'question' | 'action' | 'solution';

interface FlowNode {
  id: string;
  text: string;
  type: NodeType;
  /** For questions: where "Yes" goes */
  yesNext?: string;
  /** For questions: where "No" goes */
  noNext?: string;
  /** For actions/solutions: default next step */
  next?: string;
  /** Guide slug to link when solved */
  guideSlug?: string;
}

interface Flow {
  id: string;
  title: string;
  emoji: string;
  icon: typeof Wifi;
  description: string;
  startNode: string;
  nodes: Record<string, FlowNode>;
}

/* ── Flow Data ──────────────────────────────────────── */

const flows: Flow[] = [
  {
    id: 'internet',
    title: 'My Internet Is Not Working',
    emoji: '📶',
    icon: Wifi,
    description: 'Get back online step by step — no tech knowledge needed.',
    startNode: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        type: 'question',
        text: 'Is your WiFi turned on?',
        yesNext: 'q2',
        noNext: 'a1',
      },
      a1: {
        id: 'a1',
        type: 'action',
        text: 'Turn on WiFi in your Settings app. On most phones, swipe down from the top and tap the WiFi icon.',
        next: 'q1b',
      },
      q1b: {
        id: 'q1b',
        type: 'question',
        text: 'Did turning on WiFi fix the problem?',
        yesNext: 'done',
        noNext: 'q2',
      },
      q2: {
        id: 'q2',
        type: 'question',
        text: 'Can you see your network name in the WiFi list?',
        yesNext: 'q3',
        noNext: 'a2',
      },
      a2: {
        id: 'a2',
        type: 'action',
        text: 'Restart your router: unplug it from the wall, wait 30 seconds, then plug it back in. Wait 2 minutes for it to fully start up.',
        next: 'q2b',
      },
      q2b: {
        id: 'q2b',
        type: 'question',
        text: 'Can you see your network name now?',
        yesNext: 'q3',
        noNext: 'call',
      },
      q3: {
        id: 'q3',
        type: 'question',
        text: 'Did you enter the correct WiFi password?',
        yesNext: 'a4',
        noNext: 'a3',
      },
      a3: {
        id: 'a3',
        type: 'action',
        text: 'Try re-entering your WiFi password. You can usually find it on a sticker on the back or bottom of your router.',
        next: 'q3b',
      },
      q3b: {
        id: 'q3b',
        type: 'question',
        text: 'Are you connected now?',
        yesNext: 'done',
        noNext: 'a4',
      },
      a4: {
        id: 'a4',
        type: 'action',
        text: 'Restart your device (phone, tablet, or computer). Turn it completely off, wait 10 seconds, then turn it back on.',
        next: 'q4',
      },
      q4: {
        id: 'q4',
        type: 'question',
        text: 'Is your internet working now?',
        yesNext: 'done',
        noNext: 'call',
      },
      done: {
        id: 'done',
        type: 'solution',
        text: 'Your internet is working again! If it stops working frequently, you may want to contact your internet provider about upgrading your router.',
        guideSlug: 'how-to-connect-to-wifi',
      },
      call: {
        id: 'call',
        type: 'solution',
        text: 'Call your internet provider. Their number is usually on your monthly bill or on the router itself. Tell them you have tried restarting the router and your device.',
        guideSlug: 'how-to-connect-to-wifi',
      },
    },
  },
  {
    id: 'slow-phone',
    title: 'My Phone Is Running Slow',
    emoji: '🐌',
    icon: Smartphone,
    description: 'Speed up your phone with these step-by-step checks.',
    startNode: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        type: 'question',
        text: 'Have you restarted your phone in the last few days?',
        yesNext: 'q2',
        noNext: 'a1',
      },
      a1: {
        id: 'a1',
        type: 'action',
        text: 'Restart your phone now. Hold the power button, tap "Restart" or "Power Off," then turn it back on after a few seconds.',
        next: 'q1b',
      },
      q1b: {
        id: 'q1b',
        type: 'question',
        text: 'Is your phone faster now?',
        yesNext: 'done',
        noNext: 'q2',
      },
      q2: {
        id: 'q2',
        type: 'question',
        text: 'Is your storage almost full? (Check in Settings > Storage)',
        yesNext: 'a2',
        noNext: 'q3',
      },
      a2: {
        id: 'a2',
        type: 'action',
        text: 'Free up space: delete apps you do not use, remove old photos and videos, or move them to cloud storage like Google Photos or iCloud.',
        next: 'q2b',
      },
      q2b: {
        id: 'q2b',
        type: 'question',
        text: 'Is your phone faster now?',
        yesNext: 'done',
        noNext: 'q3',
      },
      q3: {
        id: 'q3',
        type: 'question',
        text: 'Do you have many apps open in the background?',
        yesNext: 'a3',
        noNext: 'q4',
      },
      a3: {
        id: 'a3',
        type: 'action',
        text: 'Close all background apps. On iPhone: swipe up from the bottom and swipe each app away. On Android: tap the square button and tap "Close All."',
        next: 'q3b',
      },
      q3b: {
        id: 'q3b',
        type: 'question',
        text: 'Is your phone faster now?',
        yesNext: 'done',
        noNext: 'q4',
      },
      q4: {
        id: 'q4',
        type: 'question',
        text: 'Is your phone software up to date? (Check in Settings > Software Update)',
        yesNext: 'repair',
        noNext: 'a4',
      },
      a4: {
        id: 'a4',
        type: 'action',
        text: 'Update your phone to the latest software version. Go to Settings > Software Update (or System Update on Android) and follow the prompts.',
        next: 'q4b',
      },
      q4b: {
        id: 'q4b',
        type: 'question',
        text: 'Is your phone faster after the update?',
        yesNext: 'done',
        noNext: 'repair',
      },
      done: {
        id: 'done',
        type: 'solution',
        text: 'Great, your phone is running well again! To keep it fast, restart it once a week, keep apps updated, and avoid downloading apps you do not need.',
      },
      repair: {
        id: 'repair',
        type: 'solution',
        text: 'If your phone is still slow, consider a factory reset (make sure to back up your photos and contacts first!) or visit a phone repair shop for a checkup.',
      },
    },
  },
  {
    id: 'printer',
    title: 'I Cannot Print',
    emoji: '🖨️',
    icon: Printer,
    description: 'Get your printer working again in a few steps.',
    startNode: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        type: 'question',
        text: 'Is your printer turned on? Check for a power light.',
        yesNext: 'q2',
        noNext: 'a1',
      },
      a1: {
        id: 'a1',
        type: 'action',
        text: 'Turn on your printer. Press the power button (usually on the front or top). Wait for it to finish starting up — the lights should stop blinking.',
        next: 'q2',
      },
      q2: {
        id: 'q2',
        type: 'question',
        text: 'Is the printer connected to your WiFi or plugged into your computer with a USB cable?',
        yesNext: 'q3',
        noNext: 'a2',
      },
      a2: {
        id: 'a2',
        type: 'action',
        text: 'Connect your printer. For WiFi: use the printer screen to find your network and enter the password. For USB: plug the cable into both the printer and your computer.',
        next: 'q2b',
      },
      q2b: {
        id: 'q2b',
        type: 'question',
        text: 'Is the printer connected now?',
        yesNext: 'q3',
        noNext: 'readd',
      },
      q3: {
        id: 'q3',
        type: 'question',
        text: 'Is there paper in the paper tray?',
        yesNext: 'a4',
        noNext: 'a3',
      },
      a3: {
        id: 'a3',
        type: 'action',
        text: 'Add paper to the paper tray. Make sure the paper is flat and lined up with the guides on the sides of the tray.',
        next: 'a4',
      },
      a4: {
        id: 'a4',
        type: 'action',
        text: 'Try printing a test page. On Windows: Settings > Printers > your printer > Print Test Page. On Mac: System Settings > Printers > your printer > Print Test Page.',
        next: 'q4',
      },
      q4: {
        id: 'q4',
        type: 'question',
        text: 'Did the test page print?',
        yesNext: 'done',
        noNext: 'a5',
      },
      a5: {
        id: 'a5',
        type: 'action',
        text: 'Cancel all stuck print jobs. On Windows: Settings > Printers > your printer > Open Queue > Cancel All. On Mac: System Settings > Printers > your printer > Open Queue > select each job and delete it.',
        next: 'q5',
      },
      q5: {
        id: 'q5',
        type: 'question',
        text: 'Try printing again. Did it work this time?',
        yesNext: 'done',
        noNext: 'readd',
      },
      done: {
        id: 'done',
        type: 'solution',
        text: 'Your printer is working! If it stops working again, try restarting both the printer and your computer first — that fixes most problems.',
      },
      readd: {
        id: 'readd',
        type: 'solution',
        text: 'Remove your printer from your computer and add it again. On Windows: Settings > Printers > Remove, then Add Printer. On Mac: System Settings > Printers > minus button, then plus button. If that does not work, contact the printer manufacturer for support.',
      },
    },
  },
  {
    id: 'password',
    title: 'I Forgot My Password',
    emoji: '🔑',
    icon: KeyRound,
    description: 'Reset your password and get back into your account.',
    startNode: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        type: 'question',
        text: 'Do you know which account you need to get into (for example: email, Facebook, bank)?',
        yesNext: 'a1',
        noNext: 'a0',
      },
      a0: {
        id: 'a0',
        type: 'action',
        text: 'Take a moment to figure out exactly which account you need. Common accounts: email (Gmail, Yahoo, Outlook), social media (Facebook), or banking. Write down the name of the website or app.',
        next: 'a1',
      },
      a1: {
        id: 'a1',
        type: 'action',
        text: 'Go to the login page of that website or app. Look for a link that says "Forgot Password" or "Reset Password." It is usually below the password box. Tap or click it.',
        next: 'a2',
      },
      a2: {
        id: 'a2',
        type: 'action',
        text: 'Enter your email address or phone number when asked, then tap "Send" or "Submit." The company will send you a password reset link.',
        next: 'q2',
      },
      q2: {
        id: 'q2',
        type: 'question',
        text: 'Did you receive a password reset email or text message?',
        yesNext: 'a3',
        noNext: 'a4',
      },
      a3: {
        id: 'a3',
        type: 'action',
        text: 'Open the reset email or text and tap the link inside. Choose a new password. Make it at least 12 characters with a mix of letters, numbers, and symbols. Write it down and keep it somewhere safe.',
        next: 'done',
      },
      a4: {
        id: 'a4',
        type: 'action',
        text: 'Check your spam or junk folder — the reset email sometimes lands there. Also try using a different email address if you have more than one.',
        next: 'q3',
      },
      q3: {
        id: 'q3',
        type: 'question',
        text: 'Did you find the reset email in spam, or did another email address work?',
        yesNext: 'a3',
        noNext: 'support',
      },
      done: {
        id: 'done',
        type: 'solution',
        text: 'You are back in your account! To avoid this in the future, consider writing your passwords in a notebook kept in a safe place, or ask a trusted person to help you set up a password manager.',
        guideSlug: 'how-to-create-strong-passwords',
      },
      support: {
        id: 'support',
        type: 'solution',
        text: 'Call the company\'s customer support line. You can find the phone number by searching "[company name] customer support phone number" on Google. Have your account name and email ready when you call.',
        guideSlug: 'how-to-create-strong-passwords',
      },
    },
  },
  {
    id: 'frozen-screen',
    title: 'My Screen Is Frozen',
    emoji: '🥶',
    icon: Monitor,
    description: 'Unfreeze your device when it stops responding.',
    startNode: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        type: 'question',
        text: 'Can you move the mouse or touch the screen at all?',
        yesNext: 'a2',
        noNext: 'a1',
      },
      a1: {
        id: 'a1',
        type: 'action',
        text: 'Wait 30 seconds. Sometimes the device is thinking and needs a moment to catch up. Do not press anything while you wait.',
        next: 'q1b',
      },
      q1b: {
        id: 'q1b',
        type: 'question',
        text: 'Can you move the mouse or touch the screen now?',
        yesNext: 'a2',
        noNext: 'a3',
      },
      a2: {
        id: 'a2',
        type: 'action',
        text: 'Try pressing the Escape key (top-left corner of your keyboard, labeled "Esc"). This can close pop-ups or menus that might be causing the freeze.',
        next: 'q2',
      },
      q2: {
        id: 'q2',
        type: 'question',
        text: 'Did pressing Escape help? Is the screen responding normally?',
        yesNext: 'done',
        noNext: 'a3',
      },
      a3: {
        id: 'a3',
        type: 'action',
        text: 'Force close the frozen app. On Windows: press Ctrl + Alt + Delete at the same time, then click "Task Manager," find the frozen app, and click "End Task." On Mac: press Command + Option + Escape at the same time, find the frozen app, and click "Force Quit."',
        next: 'q3',
      },
      q3: {
        id: 'q3',
        type: 'question',
        text: 'Is your screen working again?',
        yesNext: 'done',
        noNext: 'a4',
      },
      a4: {
        id: 'a4',
        type: 'action',
        text: 'Force restart your device: press and hold the power button for about 10 seconds until the screen goes dark. Wait a few seconds, then press the power button again to turn it back on.',
        next: 'q4',
      },
      q4: {
        id: 'q4',
        type: 'question',
        text: 'Did your device restart and is it working now?',
        yesNext: 'done',
        noNext: 'techsupport',
      },
      done: {
        id: 'done',
        type: 'solution',
        text: 'Your screen is unfrozen! If this happens often, it may be a sign your device is running low on memory or needs a software update. Try keeping fewer apps open at once.',
      },
      techsupport: {
        id: 'techsupport',
        type: 'solution',
        text: 'If your device will not restart, it may have a hardware problem. Contact tech support or visit a repair shop. Unplug the device and let it sit for a few minutes before trying the power button again.',
      },
    },
  },
];

/* ── Component ──────────────────────────────────────── */

export default function TroubleshootingFlows() {
  const [activeFlowId, setActiveFlowId] = useState<string | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const activeFlow = flows.find((f) => f.id === activeFlowId) ?? null;
  const currentNode = activeFlow ? activeFlow.nodes[currentNodeId] : null;

  const startFlow = useCallback((flowId: string) => {
    const flow = flows.find((f) => f.id === flowId);
    if (!flow) return;
    setActiveFlowId(flowId);
    setCurrentNodeId(flow.startNode);
    setHistory([]);
  }, []);

  const goToNode = useCallback((nodeId: string) => {
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(nodeId);
  }, [currentNodeId]);

  const goBack = useCallback(() => {
    setHistory((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      if (last) setCurrentNodeId(last);
      return copy;
    });
  }, []);

  const resetFlow = useCallback(() => {
    if (!activeFlow) return;
    setCurrentNodeId(activeFlow.startNode);
    setHistory([]);
  }, [activeFlow]);

  const exitFlow = useCallback(() => {
    setActiveFlowId(null);
    setCurrentNodeId('');
    setHistory([]);
  }, []);

  /* ── Render: Flow Selection ─────────────────────── */

  if (!activeFlow) {
    return (
      <>
        <SEOHead
          title="Fix Common Problems — TekSure"
          description="Interactive troubleshooting flowcharts that walk you through fixing common tech problems step by step. No tech knowledge needed."
          path="/tools/troubleshooting-flows"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Interactive Troubleshooting</span>
              </div>
              <h1 className="mb-3 text-4xl font-bold tracking-tight">Fix Common Problems</h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Follow the steps below to fix your problem. No tech knowledge needed
                &mdash; answer the questions and we will guide you to a fix.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {flows.map((flow) => {
                const Icon = flow.icon;
                return (
                  <Card
                    key={flow.id}
                    className="cursor-pointer transition-shadow hover:shadow-lg"
                    onClick={() => startFlow(flow.id)}
                  >
                    <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                      <span className="text-5xl" role="img" aria-label={flow.title}>
                        {flow.emoji}
                      </span>
                      <div>
                        <h2 className="mb-1 text-xl font-semibold">{flow.title}</h2>
                        <p className="text-muted-foreground">{flow.description}</p>
                      </div>
                      <Button size="lg" className="mt-2 min-h-[56px] w-full text-lg">
                        <Icon className="mr-2 h-5 w-5" />
                        Start
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Render: Active Flow ────────────────────────── */

  const stepNumber = history.length + 1;

  // Determine card accent based on node type
  const accentClasses: Record<NodeType, string> = {
    question: 'border-blue-400 bg-blue-50 dark:bg-blue-950/40',
    action: 'border-amber-400 bg-amber-50 dark:bg-amber-950/40',
    solution: 'border-green-400 bg-green-50 dark:bg-green-950/40',
  };

  const labelColors: Record<NodeType, string> = {
    question: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    action: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    solution: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  const nodeTypeLabels: Record<NodeType, string> = {
    question: 'Question',
    action: 'Action',
    solution: currentNode?.text.toLowerCase().includes('call') ||
              currentNode?.text.toLowerCase().includes('repair') ||
              currentNode?.text.toLowerCase().includes('contact') ||
              currentNode?.text.toLowerCase().includes('remove')
      ? 'Next Step'
      : 'Fixed!',
  };

  return (
    <>
      <SEOHead
        title={`${activeFlow.title} — TekSure`}
        description={activeFlow.description}
        path="/tools/troubleshooting-flows"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-2xl px-4 py-12">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={exitFlow} className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              All Problems
            </Button>
            <Button variant="ghost" size="sm" onClick={resetFlow} className="gap-1">
              <RotateCcw className="h-4 w-4" />
              Start Over
            </Button>
          </div>

          {/* Flow title */}
          <div className="mb-6 text-center">
            <span className="mb-2 text-4xl" role="img" aria-label={activeFlow.title}>
              {activeFlow.emoji}
            </span>
            <h1 className="text-2xl font-bold">{activeFlow.title}</h1>
          </div>

          {/* Progress breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-1.5 flex-wrap">
            {history.map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full bg-blue-400"
                aria-label={`Step ${i + 1} completed`}
              />
            ))}
            <div
              className="h-4 w-4 rounded-full border-2 border-blue-600 bg-blue-100 dark:bg-blue-900"
              aria-label={`Step ${stepNumber} current`}
            />
          </div>

          {/* Current Step Card */}
          {currentNode && (
            <Card className={`border-2 ${accentClasses[currentNode.type]}`}>
              <CardContent className="p-8">
                {/* Type badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${labelColors[currentNode.type]}`}
                  >
                    {nodeTypeLabels[currentNode.type]}
                  </span>
                  <span className="text-sm text-muted-foreground">Step {stepNumber}</span>
                </div>

                {/* Text */}
                <p className="mb-8 text-xl font-medium leading-relaxed">{currentNode.text}</p>

                {/* Buttons based on type */}
                {currentNode.type === 'question' && (
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="min-h-[56px] flex-1 text-lg"
                      onClick={() => currentNode.yesNext && goToNode(currentNode.yesNext)}
                    >
                      Yes
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-h-[56px] flex-1 text-lg"
                      onClick={() => currentNode.noNext && goToNode(currentNode.noNext)}
                    >
                      No
                    </Button>
                  </div>
                )}

                {currentNode.type === 'action' && (
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="min-h-[56px] flex-1 text-lg"
                      onClick={() => currentNode.next && goToNode(currentNode.next)}
                    >
                      I Did This
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    {currentNode.next && (
                      <Button
                        size="lg"
                        variant="outline"
                        className="min-h-[56px] flex-1 text-lg"
                        onClick={() => currentNode.next && goToNode(currentNode.next)}
                      >
                        Skip
                      </Button>
                    )}
                  </div>
                )}

                {currentNode.type === 'solution' && (
                  <div className="space-y-4">
                    {/* Celebration or next-step depending on content */}
                    {!currentNode.text.toLowerCase().includes('call') &&
                     !currentNode.text.toLowerCase().includes('repair') &&
                     !currentNode.text.toLowerCase().includes('contact') &&
                     !currentNode.text.toLowerCase().includes('remove') && (
                      <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-300">
                        <CheckCircle2 className="h-8 w-8" />
                        <span className="text-xl font-semibold">Problem Solved!</span>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {currentNode.guideSlug && (
                        <Button
                          size="lg"
                          variant="outline"
                          className="min-h-[56px] flex-1 text-lg"
                          asChild
                        >
                          <a href={`/guides/${currentNode.guideSlug}`}>
                            Read Related Guide
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      <Button
                        size="lg"
                        className="min-h-[56px] flex-1 text-lg"
                        onClick={exitFlow}
                      >
                        Back to All Problems
                      </Button>
                    </div>
                  </div>
                )}

                {/* Go back button */}
                {history.length > 0 && currentNode.type !== 'solution' && (
                  <div className="mt-6 text-center">
                    <Button variant="ghost" size="sm" onClick={goBack} className="gap-1 text-muted-foreground">
                      <ArrowLeft className="h-4 w-4" />
                      Go Back One Step
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
