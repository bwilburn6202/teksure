import { useState } from 'react';
import { Wifi, WifiOff, RotateCcw, ChevronRight, ChevronLeft, PhoneCall, CheckCircle2, AlertTriangle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type Step =
  | 'start'
  | 'phone-works'
  | 'all-devices'
  | 'router-lights'
  | 'unplug'
  | 'wait'
  | 'test-again'
  | 'fixed'
  | 'call-isp'
  | 'check-cables'
  | 'outage';

interface StepContent {
  title: string;
  body: string;
  icon?: React.ElementType;
  color?: string;
  choices?: { label: string; next: Step }[];
  tip?: string;
  warning?: string;
}

const STEPS: Record<Step, StepContent> = {
  start: {
    title: 'Is your internet not working?',
    body: 'Let\'s figure out the problem together. Answer a few questions and we\'ll walk you through what to do.',
    icon: WifiOff,
    color: 'text-blue-500',
    choices: [
      { label: 'Yes — nothing is loading', next: 'phone-works' },
      { label: 'It\'s working, but very slow', next: 'unplug' },
    ],
  },
  'phone-works': {
    title: 'Can your phone browse the internet using cellular (not Wi-Fi)?',
    body: 'Turn off Wi-Fi on your phone for a moment (Settings → Wi-Fi → Off). Then try opening a website. If it loads, your phone\'s cellular is working — the problem is with your home internet, not your phone.',
    tip: 'On iPhone: swipe down from the top-right corner, tap the Wi-Fi icon to turn it off. On Android: swipe down from the top, tap the Wi-Fi icon.',
    choices: [
      { label: 'Yes — phone works with Wi-Fi off', next: 'all-devices' },
      { label: 'No — phone can\'t connect either', next: 'outage' },
    ],
  },
  'all-devices': {
    title: 'Is the internet out on all your devices, or just one?',
    body: 'Check another device — a tablet, laptop, or a different phone. Try to load any website on that second device while it is connected to your home Wi-Fi.',
    choices: [
      { label: 'All devices — nothing works', next: 'router-lights' },
      { label: 'Just one device has the problem', next: 'check-cables' },
    ],
  },
  'router-lights': {
    title: 'Check the lights on your router and modem',
    body: 'Find your router — it\'s the box that creates your Wi-Fi signal. Some homes have two boxes: a modem (connects to the wall) and a router (broadcasts Wi-Fi). Look at the lights on the front.\n\n• A solid white or green light usually means it\'s working.\n• A blinking orange, red, or no light on the "Internet" or "WAN" port usually means the connection to your ISP is lost.',
    tip: 'If all the lights are completely off, skip to "Check the power cable."',
    choices: [
      { label: 'I see a red or orange light', next: 'unplug' },
      { label: 'The lights look normal (white or green)', next: 'unplug' },
      { label: 'All the lights are off', next: 'check-cables' },
    ],
  },
  'unplug': {
    title: 'Restart your router and modem',
    body: 'This fixes most internet problems. Here is how:\n\n1. Find the power cable on the back of your router (and modem, if you have a separate one). It usually plugs into the wall or a power strip.\n2. Unplug the power cable. If you have two boxes, unplug both — the modem first, then the router.\n3. Wait a full 60 seconds. This gives everything time to fully reset.\n4. Plug the modem back in first. Wait 30 seconds for it to connect.\n5. Then plug the router back in. Wait another 2 minutes.\n6. Try loading a webpage.',
    warning: 'Do not press the small "Reset" button (if your router has one) — that erases all your Wi-Fi settings. Only unplug and replug the power cable.',
    choices: [
      { label: 'Done — waiting for it to restart', next: 'wait' },
    ],
  },
  'wait': {
    title: 'Give it 2 full minutes',
    body: 'Routers and modems can take 1–3 minutes to fully reconnect after being restarted. It\'s normal for the lights to blink or change colors during this time.\n\nWait until the lights settle — ideally all white or green — then try loading a website.',
    tip: 'Open your phone or computer\'s Wi-Fi settings and make sure you\'re connected to your home network (not a neighbor\'s).',
    choices: [
      { label: 'I waited — now testing', next: 'test-again' },
    ],
  },
  'test-again': {
    title: 'Does the internet work now?',
    body: 'Open a web browser and try loading a site you visit often — like google.com or weather.com.',
    choices: [
      { label: 'Yes! It\'s working now', next: 'fixed' },
      { label: 'Still not working', next: 'call-isp' },
    ],
  },
  'fixed': {
    title: 'Great — your internet is back!',
    body: 'Restarting the router solved the problem. This is the most common fix for internet outages at home.\n\nIf this keeps happening more than once a week, your router may be getting old, or your ISP may be having network issues in your area. You can call your ISP\'s customer support and ask them to run a remote test on your connection.',
    icon: CheckCircle2,
    color: 'text-green-500',
    choices: [
      { label: 'Start over', next: 'start' },
    ],
  },
  'check-cables': {
    title: 'Check the cables',
    body: 'If the problem is on just one device, or if the router lights are completely off:\n\n• **For one device:** Make sure the device is connected to the right Wi-Fi network. Go to Settings → Wi-Fi and confirm it shows your home network name. If it shows "Connected" but still won\'t load pages, try turning Wi-Fi off and back on.\n\n• **For all lights off:** Check that the power cable is firmly plugged into both the router and the wall. Check the power strip or surge protector — is it on? Try a different outlet.\n\n• **For cable internet:** Check the coaxial cable (the thick round cable that screws into the back of the modem). Make sure it\'s screwed in firmly.',
    tip: 'Sometimes a loose cable is all it takes. Firmly press each cable into its port on the back of the router.',
    choices: [
      { label: 'Checked cables — try restarting now', next: 'unplug' },
      { label: 'Still not working', next: 'call-isp' },
    ],
  },
  'outage': {
    title: 'There may be an area-wide outage',
    body: 'If your phone also can\'t connect using cellular, there may be a wider network problem. Here\'s what to check:\n\n1. **Check your carrier\'s website** — search "[your carrier name] outage map" (e.g., "Verizon outage map"). Most carriers have a real-time map.\n2. **Check Downdetector** — go to downdetector.com and search for your internet or phone provider to see if others in your area are reporting problems.\n3. **Ask a neighbor** — if they have a different provider, see if their internet works. If only yours is down, the problem is with your equipment or your provider.\n\nIf there is a confirmed outage, all you can do is wait. Most ISP outages are resolved within a few hours.',
    icon: AlertTriangle,
    color: 'text-amber-500',
    choices: [
      { label: 'No outage found — try restarting', next: 'unplug' },
      { label: 'There is an outage — I\'ll wait', next: 'call-isp' },
    ],
  },
  'call-isp': {
    title: 'Time to call your internet provider',
    body: 'If restarting did not help, your ISP\'s support team can run a remote test on your connection and usually tell you whether the problem is inside your home or on their network.\n\nBefore you call, have this information ready:\n• Your account number (on your bill)\n• Your service address\n• A description of the lights on your modem/router\n• When the problem started\n• What you have already tried (restarting the router)\n\n**Common ISP support numbers:**\n• Xfinity (Comcast): 1-800-934-6489\n• AT&T: 1-800-288-2020\n• Spectrum: 1-833-267-6094\n• Verizon Fios: 1-800-837-4966\n• CenturyLink/Lumen: 1-877-803-8414\n\nYou can also find the number on your monthly bill.',
    icon: PhoneCall,
    color: 'text-blue-500',
    tip: 'Ask the agent for a case number at the start of the call so you can follow up if the problem persists.',
    choices: [
      { label: 'Start over', next: 'start' },
    ],
  },
};

export default function InternetFixGuide() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [history, setHistory] = useState<Step[]>([]);

  const step = STEPS[currentStep];
  const Icon = step.icon;

  const go = (next: Step) => {
    setHistory(prev => [...prev, currentStep]);
    setCurrentStep(next);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setCurrentStep(prev);
  };

  const reset = () => {
    setHistory([]);
    setCurrentStep('start');
  };

  const isFinal = currentStep === 'fixed' || currentStep === 'call-isp';

  return (
    <>
      <SEOHead
        title="Internet & Router Fix Guide — TekSure"
        description="Answer a few questions and we'll walk you through exactly what to do when your home internet isn't working — step by step."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/60 mb-4">
              <Wifi className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Internet & Router Fix Guide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Answer a few questions — we'll walk you through what to do.
            </p>
          </div>

          {/* Progress breadcrumb */}
          {history.length > 0 && (
            <div className="flex items-center gap-1 mb-3 flex-wrap">
              {history.map((h, i) => (
                <span key={i} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <span className="truncate max-w-[120px]">{STEPS[h].title.split('?')[0].split(':')[0]}</span>
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                </span>
              ))}
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 truncate max-w-[120px]">
                {step.title.split('?')[0].split(':')[0]}
              </span>
            </div>
          )}

          <div className={`bg-white dark:bg-gray-900 rounded-2xl border ${isFinal && currentStep === 'fixed' ? 'border-green-200 dark:border-green-800' : isFinal ? 'border-blue-200 dark:border-blue-800' : 'border-gray-200 dark:border-gray-800'} p-5 shadow-sm`}>
            {Icon && (
              <div className={`mb-3 ${step.color || 'text-blue-500'}`}>
                <Icon className="w-7 h-7" />
              </div>
            )}

            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{step.title}</h2>

            {step.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed whitespace-pre-line">{para}</p>
            ))}

            {step.tip && (
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-blue-800 dark:text-blue-200"><span className="font-semibold">Quick Tip:</span> {step.tip}</p>
              </div>
            )}

            {step.warning && (
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-amber-800 dark:text-amber-200"><span className="font-semibold">Important:</span> {step.warning}</p>
              </div>
            )}

            {step.choices && (
              <div className="space-y-2 mt-4">
                {step.choices.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => go(c.next)}
                    className="w-full text-left px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center justify-between gap-2"
                  >
                    <span>{c.label}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-4 flex items-center gap-3">
            {history.length > 0 && (
              <button
                onClick={goBack}
                className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start Over
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
