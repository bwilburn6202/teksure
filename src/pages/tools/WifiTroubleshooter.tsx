import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, ChevronRight, ChevronLeft, RotateCcw, CheckCircle2, HelpCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Node {
  id: string;
  question?: string;
  statement?: string;
  helpText?: string;
  type: 'question' | 'solution';
  solution?: string;
  solutionSteps?: string[];
  yesNext?: string;
  noNext?: string;
  emoji?: string;
}

// Decision tree for WiFi troubleshooting
const TREE: Record<string, Node> = {
  start: {
    id: 'start',
    type: 'question',
    question: 'What best describes your Wi-Fi problem?',
    emoji: '',
  },
  // We use a multi-choice start, so we override this node specially
  no_connection: {
    id: 'no_connection',
    type: 'question',
    question: 'Can your device see your Wi-Fi network name in the list?',
    helpText: 'On iPhone: Settings → Wi-Fi. On Android: Settings → Network → Wi-Fi. On Windows: click the Wi-Fi icon in the taskbar.',
    yesNext: 'sees_network',
    noNext: 'no_network_visible',
  },
  no_network_visible: {
    id: 'no_network_visible',
    type: 'question',
    question: 'Is the router powered on? (Are the lights on the front of the router lit?)',
    yesNext: 'router_on_no_network',
    noNext: 'router_off',
  },
  router_off: {
    id: 'router_off',
    type: 'solution',
    emoji: '',
    statement: 'Turn on your router',
    solution: 'Your router appears to be off.',
    solutionSteps: [
      'Check the power cable is properly plugged into both the router and the wall socket.',
      'Press the power button on the back of the router if there is one.',
      'Wait 2–3 minutes for the router to fully start up.',
      'Check if the Wi-Fi light (usually blue or green) is lit.',
      'Try connecting again on your device.',
    ],
  },
  router_on_no_network: {
    id: 'router_on_no_network',
    type: 'question',
    question: 'Have you recently changed anything? (Moved the router, changed the broadband package, or had an engineer visit?)',
    yesNext: 'changed_recently_no_network',
    noNext: 'restart_router',
  },
  changed_recently_no_network: {
    id: 'changed_recently_no_network',
    type: 'solution',
    emoji: '',
    statement: 'Contact your internet provider',
    solution: 'After changes to your setup, the router may need reconfiguring.',
    solutionSteps: [
      'Call your internet provider (the number is on your bill or their website).',
      'Tell them you can\'t see your Wi-Fi network after recent changes.',
      'They can often reset the router remotely and walk you through reconnecting.',
      'While you\'re waiting, you can use mobile data on your phone as a hotspot if needed.',
    ],
  },
  restart_router: {
    id: 'restart_router',
    type: 'solution',
    emoji: '',
    statement: 'Restart your router',
    solution: 'A restart often fixes network visibility issues.',
    solutionSteps: [
      'Find the router (the box your broadband cable plugs into, usually near the front door or a phone socket).',
      'Either switch it off at the wall socket, or press the power button on the back.',
      'Wait a full 60 seconds.',
      'Switch it back on.',
      'Wait 3–4 minutes for it to fully reconnect to your internet provider.',
      'Check if your Wi-Fi network appears in the list on your device.',
      'If it still doesn\'t appear, try calling your internet provider.',
    ],
  },
  sees_network: {
    id: 'sees_network',
    type: 'question',
    question: 'What happens when you try to connect to your network?',
    emoji: '',
    // Special multi-choice — handled in UI
  },
  wrong_password: {
    id: 'wrong_password',
    type: 'solution',
    emoji: '',
    statement: 'Find your Wi-Fi password',
    solution: 'The password may have changed or was entered incorrectly.',
    solutionSteps: [
      'Find your router (the internet box).',
      'Look for a sticker on the bottom or back — it will show the Wi-Fi name (SSID) and the Wi-Fi password (sometimes called WPA Key or Wireless Key).',
      'The password is usually a random mix of letters and numbers — type it exactly as shown, including capitals.',
      'If you\'ve changed the password in the past and forgotten it, you can reset the router to factory settings using a paperclip in the reset hole (this will erase your custom settings).',
    ],
  },
  connects_but_slow: {
    id: 'connects_but_slow',
    type: 'question',
    question: 'Is the Wi-Fi slow everywhere in your home, or just in certain rooms?',
    yesNext: 'slow_everywhere',
    noNext: 'slow_some_rooms',
  },
  slow_some_rooms: {
    id: 'slow_some_rooms',
    type: 'solution',
    emoji: '',
    statement: 'Improve signal in weak areas',
    solution: 'Wi-Fi signal weakens with distance and through walls.',
    solutionSteps: [
      'Move your router to a more central location in the home if possible — ideally at head height, away from walls and floors.',
      'Keep the router away from microwaves, cordless phones, and baby monitors — these can interfere with Wi-Fi.',
      'In the weak-signal room, consider a Wi-Fi extender (also called a booster) — they cost around $25–$50 and plug into a wall socket.',
      'Alternatively, a powerline adapter sends the internet signal through your house\'s electrical wiring.',
      'If you have a newer router, check if it supports 5GHz — this is faster but shorter range. The 2.4GHz band is slower but reaches further.',
    ],
  },
  slow_everywhere: {
    id: 'slow_everywhere',
    type: 'question',
    question: 'Is the slowness recent (started in the last few days or weeks), or has it always been like this?',
    yesNext: 'slow_recent',
    noNext: 'always_slow',
  },
  slow_recent: {
    id: 'slow_recent',
    type: 'solution',
    emoji: '',
    statement: 'Restart your router and check for issues',
    solution: 'Recent slowdowns are often fixed by a restart or temporary provider issues.',
    solutionSteps: [
      'Restart your router: unplug it from the wall, wait 60 seconds, plug it back in. Wait 3–4 minutes.',
      'Run a speed test at fast.com on your phone or computer.',
      'Check if your internet provider has reported any outages in your area — search for "[your provider] outage checker".',
      'If you have many devices connected (smart TVs, phones, tablets), try disconnecting some and test again.',
      'If the problem persists for more than 24 hours with no outage reported, call your provider.',
    ],
  },
  always_slow: {
    id: 'always_slow',
    type: 'solution',
    emoji: '',
    statement: 'Consider upgrading your package',
    solution: 'Your broadband package may not match your current usage needs.',
    solutionSteps: [
      'Run a speed test at fast.com and note the result in Mbps (megabits per second).',
      'For basic browsing and video calls: 25 Mbps is usually enough for one person.',
      'For streaming HD video or multiple people: 50–100 Mbps recommended.',
      'Call your internet provider and ask about faster packages.',
      'Also check if the router is old (5+ years) — older routers can limit your speed even with a fast package.',
    ],
  },
  keeps_dropping: {
    id: 'keeps_dropping',
    type: 'question',
    question: 'Does it drop for all devices at once, or just one specific device?',
    yesNext: 'all_devices_drop',
    noNext: 'one_device_drops',
  },
  all_devices_drop: {
    id: 'all_devices_drop',
    type: 'solution',
    emoji: '',
    statement: 'Restart your router and check for interference',
    solution: 'Intermittent drops across all devices usually point to the router or provider.',
    solutionSteps: [
      'Restart your router: unplug from the wall, wait 60 seconds, plug back in.',
      'Check if the router is placed near a microwave, cordless phone, or baby monitor — these cause interference. Move the router if so.',
      'Check if the router is overheating — ensure there\'s space around it for airflow.',
      'If your router is more than 5 years old, it may need replacing. Contact your provider.',
      'If drops happen at specific times of day, this could be a provider issue — call and report the pattern.',
    ],
  },
  one_device_drops: {
    id: 'one_device_drops',
    type: 'solution',
    emoji: '',
    statement: 'Fix the individual device\'s Wi-Fi connection',
    solution: 'When only one device drops, the issue is usually with that device\'s network settings.',
    solutionSteps: [
      'On the problem device, go to Wi-Fi settings and tap "Forget" or "Remove" your network.',
      'Then reconnect by tapping your network name and entering the password again.',
      'Restart the device completely (turn off and back on).',
      'On iPhone: Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings (note: this removes all saved Wi-Fi passwords).',
      'On Android: Settings → System → Reset options → Reset Wi-Fi, mobile & Bluetooth.',
      'Check if the device has a software update available — sometimes bugs are fixed in updates.',
    ],
  },
};

// Multi-choice start question options
const START_OPTIONS = [
  { label: 'Can\'t connect at all', emoji: '', next: 'no_connection' },
  { label: 'Connected but wrong password message', emoji: '', next: 'wrong_password' },
  { label: 'Connected but very slow', emoji: '', next: 'connects_but_slow' },
  { label: 'Connection keeps dropping', emoji: '', next: 'keeps_dropping' },
];

// For sees_network multi-choice
const SEES_NETWORK_OPTIONS = [
  { label: 'It says "Wrong password" or "Incorrect password"', emoji: '', next: 'wrong_password' },
  { label: 'It connects but there\'s no internet', emoji: '', next: 'restart_router' },
  { label: 'It just spins / won\'t connect', emoji: '', next: 'one_device_drops' },
];

export default function WifiTroubleshooter() {
  const [path, setPath] = useState<string[]>(['start']);
  const [forwardChoices, setForwardChoices] = useState<Record<string, string>>({});

  const currentId = path[path.length - 1];
  const current = TREE[currentId];

  const goTo = (nodeId: string) => {
    setPath(p => [...p, nodeId]);
  };

  const goBack = () => {
    if (path.length > 1) setPath(p => p.slice(0, -1));
  };

  const restart = () => {
    setPath(['start']);
    setForwardChoices({});
  };

  const isStart = currentId === 'start';
  const isSeesNetwork = currentId === 'sees_network';

  return (
    <>
      <SEOHead
        title="Wi-Fi Troubleshooter — TekSure"
        description="Fix your Wi-Fi problems step by step. Our interactive wizard diagnoses your connection issue and gives you clear instructions to fix it."
      path="/tools/wifi-troubleshooter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Wi-Fi Troubleshooter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Answer a few questions and we'll walk you through exactly how to fix your internet connection.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          {path.length > 1 && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 flex-wrap">
              <button onClick={restart} className="hover:text-foreground transition-colors">Start</button>
              {path.slice(1).map((id, i) => (
                <span key={id} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  <span className={i === path.length - 2 ? 'text-foreground font-medium' : ''}>
                    {TREE[id]?.statement || TREE[id]?.question?.slice(0, 30) + '…' || id}
                  </span>
                </span>
              ))}
            </div>
          )}

          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">
              {/* Start screen */}
              {isStart && (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">What's happening with your Wi-Fi?</h2>
                  </div>
                  <div className="space-y-2">
                    {START_OPTIONS.map(opt => (
                      <button
                        key={opt.next}
                        onClick={() => goTo(opt.next)}
                        className="w-full flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <span className="text-2xl">{opt.emoji}</span>
                        <span className="font-medium text-sm">{opt.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* sees_network multi-choice */}
              {isSeesNetwork && (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">What happens when you try to connect?</h2>
                  </div>
                  <div className="space-y-2">
                    {SEES_NETWORK_OPTIONS.map(opt => (
                      <button
                        key={opt.next}
                        onClick={() => goTo(opt.next)}
                        className="w-full flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <span className="text-2xl">{opt.emoji}</span>
                        <span className="font-medium text-sm">{opt.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Normal question */}
              {!isStart && !isSeesNetwork && current?.type === 'question' && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold leading-snug">{current.question}</h2>
                  </div>
                  {current.helpText && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-4">
                      <Lightbulb className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700 dark:text-blue-300">{current.helpText}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => current.yesNext && goTo(current.yesNext)}
                      className="py-4 rounded-xl border-2 border-green-400/60 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors font-semibold text-green-700 dark:text-green-300 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5" /> Yes
                    </button>
                    <button
                      onClick={() => current.noNext && goTo(current.noNext)}
                      className="py-4 rounded-xl border-2 border-red-300/60 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-semibold text-red-600 dark:text-red-300 flex items-center justify-center gap-2"
                    >
                      No
                    </button>
                  </div>
                </>
              )}

              {/* Solution */}
              {current?.type === 'solution' && (
                <>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{current.emoji}</div>
                    <h2 className="text-xl font-bold">{current.statement}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{current.solution}</p>
                  </div>
                  {current.solutionSteps && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Steps to follow:</p>
                      <ol className="space-y-3">
                        {current.solutionSteps.map((step, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <div className="mt-6 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      <strong>Still not working?</strong> If these steps don't resolve the issue, it's likely a problem with your router or internet provider. Call them directly — most issues can be resolved remotely.
                    </p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" onClick={restart} className="gap-2 flex-1">
                      <RotateCcw className="h-4 w-4" /> Start over
                    </Button>
                    <Button asChild className="gap-2 flex-1">
                      <Link to="/get-help">Get expert help <ChevronRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Back button */}
          {path.length > 1 && current?.type !== 'solution' && (
            <div className="mt-3">
              <Button variant="ghost" size="sm" onClick={goBack} className="gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="h-3 w-3" /> Previous step
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
