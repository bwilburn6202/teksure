import { useState } from 'react';
import { Printer, RotateCcw, ClipboardList, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type DeviceType = 'iPhone' | 'Android' | 'Windows PC' | 'Mac' | 'iPad' | 'Other';
type ProblemCategory =
  | 'Cannot connect to internet'
  | 'App not working or crashing'
  | 'Device is slow or freezing'
  | 'Forgot password or locked out'
  | 'Screen problem (black, cracked, dim)'
  | 'Sound or speaker issue'
  | 'Camera not working'
  | 'Device won\'t turn on or charge'
  | 'Got a virus or strange pop-ups'
  | 'Lost or deleted files or photos'
  | 'Other problem';

type WhenStarted = 'Today' | 'This week' | 'After a software update' | 'After installing something new' | 'A few weeks ago' | 'Not sure';

const TRIED_OPTIONS = [
  'Turned the device off and back on (restarted)',
  'Checked that Wi-Fi or internet is connected',
  'Updated the app or software',
  'Uninstalled and reinstalled the app',
  'Checked for a system/OS update',
  'Cleared the app cache or browser cookies',
  'Contacted the app\'s own support',
  'Nothing yet — this is my first step',
];

const DEVICE_TIPS: Record<DeviceType, { info: string[]; reminders: string[] }> = {
  iPhone: {
    info: [
      'Device name: Settings → General → About → Name',
      'Model: Settings → General → About → Model Name',
      'iOS version: Settings → General → About → Software Version',
      'Storage used: Settings → General → iPhone Storage',
      'Apple ID email: Settings → tap your name at top',
    ],
    reminders: [
      'Have your Apple ID email and password ready',
      'Note if the problem happens on Wi-Fi, cellular, or both',
      'If it is an app problem, note the app name and version',
      'Write down any error messages word-for-word',
    ],
  },
  Android: {
    info: [
      'Device name: Settings → About phone → Device name',
      'Model number: Settings → About phone → Model',
      'Android version: Settings → About phone → Android version',
      'Storage used: Settings → Storage',
      'Google account email: Settings → Google or Accounts',
    ],
    reminders: [
      'Have your Google account email and password ready',
      'Note your phone carrier (Verizon, AT&T, T-Mobile, etc.)',
      'Note if the problem happens on Wi-Fi, cellular, or both',
      'Write down any error messages word-for-word',
    ],
  },
  'Windows PC': {
    info: [
      'Windows version: Settings → System → About → Windows specifications',
      'Computer name: Settings → System → About → Device name',
      'Processor and RAM: Settings → System → About → Device specifications',
      'Storage: Settings → System → Storage',
      'Microsoft account: Settings → Accounts → Your info',
    ],
    reminders: [
      'Have your Microsoft account email ready',
      'Note the name of any software involved (e.g., Microsoft Edge, Outlook)',
      'Write down the exact error message you see on screen',
      'Note when the problem first appeared',
    ],
  },
  Mac: {
    info: [
      'macOS version: Apple menu  → About This Mac → macOS version',
      'Mac model: Apple menu  → About This Mac → Model',
      'Processor and memory: Apple menu  → About This Mac → Overview',
      'Storage: Apple menu  → About This Mac → Storage',
      'Apple ID: System Settings → Apple ID',
    ],
    reminders: [
      'Have your Apple ID email and password ready',
      'Note any recent macOS updates before the problem started',
      'Write down any error message word-for-word',
      'Note if the problem happens in a specific app or everywhere',
    ],
  },
  iPad: {
    info: [
      'iPad name: Settings → General → About → Name',
      'Model: Settings → General → About → Model Name',
      'iPadOS version: Settings → General → About → Software Version',
      'Storage: Settings → General → iPad Storage',
      'Apple ID: Settings → tap your name at top',
    ],
    reminders: [
      'Have your Apple ID email and password ready',
      'Note if the problem is in a specific app or the whole iPad',
      'Write down any error messages word-for-word',
      'Have your Wi-Fi network name (SSID) ready if it is a connection issue',
    ],
  },
  Other: {
    info: [
      'Device brand and model number (check the back or bottom)',
      'Operating system and version (check Settings or About)',
      'Account email associated with this device',
      'When you purchased the device (approximate year)',
      'Whether the device is under warranty',
    ],
    reminders: [
      'Gather any receipts or warranty information',
      'Write down any error messages exactly as they appear',
      'Note when the problem started',
      'Have your account login information ready',
    ],
  },
};

export default function TechSupportPrepSheet() {
  const [step, setStep] = useState(0);
  const [device, setDevice] = useState<DeviceType | null>(null);
  const [problem, setProblem] = useState<ProblemCategory | null>(null);
  const [problemDetail, setProblemDetail] = useState('');
  const [whenStarted, setWhenStarted] = useState<WhenStarted | null>(null);
  const [tried, setTried] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggleTried = (item: string) => {
    setTried(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]);
  };

  const reset = () => {
    setStep(0);
    setDevice(null);
    setProblem(null);
    setProblemDetail('');
    setWhenStarted(null);
    setTried([]);
    setName('');
    setPhone('');
  };

  const deviceInfo = device ? DEVICE_TIPS[device] : null;

  const DEVICES: DeviceType[] = ['iPhone', 'Android', 'Windows PC', 'Mac', 'iPad', 'Other'];
  const PROBLEMS: ProblemCategory[] = [
    'Cannot connect to internet',
    'App not working or crashing',
    'Device is slow or freezing',
    'Forgot password or locked out',
    'Screen problem (black, cracked, dim)',
    'Sound or speaker issue',
    'Camera not working',
    'Device won\'t turn on or charge',
    'Got a virus or strange pop-ups',
    'Lost or deleted files or photos',
    'Other problem',
  ];
  const WHEN: WhenStarted[] = ['Today', 'This week', 'After a software update', 'After installing something new', 'A few weeks ago', 'Not sure'];

  return (
    <>
      <SEOHead
        title="Tech Support Prep Sheet — TekSure"
        description="Before you call tech support, gather all the info they will need. Fill out this quick form and print or read from your prep sheet during the call."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 print:mb-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/60 mb-4 print:hidden">
              <ClipboardList className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Tech Support Prep Sheet</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              Answer a few quick questions before you call — so you have everything ready.
            </p>
          </div>

          {/* Step 0: Device */}
          {step === 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">What device do you need help with?</p>
              <div className="grid grid-cols-2 gap-3">
                {DEVICES.map(d => (
                  <button
                    key={d}
                    onClick={() => { setDevice(d); setStep(1); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      device === d
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                    }`}
                  >
                    <p className="text-2xl mb-1">
                      {d === 'iPhone' ? '📱' : d === 'Android' ? '🤖' : d === 'Windows PC' ? '🖥️' : d === 'Mac' ? '💻' : d === 'iPad' ? '📲' : '❓'}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{d}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Problem */}
          {step === 1 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">What is the problem?</p>
              <div className="space-y-2">
                {PROBLEMS.map(p => (
                  <button
                    key={p}
                    onClick={() => { setProblem(p); setStep(2); }}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                      problem === p
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200'
                        : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(0)} className="mt-4 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}

          {/* Step 2: When + detail */}
          {step === 2 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm space-y-5">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">When did the problem start?</p>
                <div className="grid grid-cols-2 gap-2">
                  {WHEN.map(w => (
                    <button
                      key={w}
                      onClick={() => setWhenStarted(w)}
                      className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                        whenStarted === w
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200'
                          : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-blue-400'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Describe the problem in your own words <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  value={problemDetail}
                  onChange={e => setProblemDetail(e.target.value)}
                  placeholder="e.g. When I try to open my email, I see a spinning circle and it never loads. Started after I updated the app yesterday."
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!whenStarted}
                  className="flex items-center gap-2 ml-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-sm transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: What have you tried */}
          {step === 3 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-lg">What have you already tried?</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Check everything that applies. It is fine if the answer is "nothing yet."</p>
              <div className="space-y-2">
                {TRIED_OPTIONS.map(item => {
                  const checked = tried.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleTried(item)}
                      className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl border-2 text-left text-sm transition-all ${
                        checked
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <span className={`mt-0.5 flex-shrink-0 ${checked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">{item}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex items-center gap-2 ml-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact info (optional) */}
          {step === 4 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm space-y-4">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Your name and phone number <span className="text-gray-400 font-normal">(optional — for your own printout)</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">This information stays on your device and is never sent anywhere.</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(3)} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="flex items-center gap-2 ml-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
                >
                  Build My Prep Sheet <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Prep Sheet */}
          {step === 5 && device && problem && whenStarted && deviceInfo && (
            <>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-5 shadow-sm print:border-gray-400">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400 print:text-gray-700" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Your Tech Support Prep Sheet</h2>
                </div>

                {(name || phone) && (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    {name && <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Name:</span> {name}</p>}
                    {phone && <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Phone:</span> {phone}</p>}
                  </div>
                )}

                {/* Problem summary */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Problem</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">Device:</span> {device}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">Issue:</span> {problem}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">When it started:</span> {whenStarted}</p>
                  {problemDetail && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1"><span className="font-medium">Details:</span> {problemDetail}</p>
                  )}
                </div>

                {/* What was tried */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What I Have Already Tried</h3>
                  {tried.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Nothing yet — this is my first step.</p>
                  ) : (
                    <ul className="space-y-1">
                      {tried.map(t => (
                        <li key={t} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Device info to gather */}
                <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Device Information to Have Ready</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Look up these details before the call and write them in:</p>
                  <div className="space-y-2">
                    {deviceInfo.info.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-xs text-gray-500 w-4 flex-shrink-0 mt-1">{i + 1}.</span>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                          <div className="mt-1 border-b border-dotted border-gray-300 dark:border-gray-600 h-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reminders */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Reminders for the Call</h3>
                  <ul className="space-y-1">
                    {deviceInfo.reminders.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 flex-shrink-0 mt-0.5">→</span>
                        {r}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">→</span>
                      Ask the support agent for their name and a case number at the start of the call
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">→</span>
                      Keep a pen and paper nearby to write down what they tell you
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scam warning */}
              <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">Watch out for tech support scams</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Legitimate companies (Apple, Microsoft, Google) will <strong>never</strong> call you out of the blue and say your computer has a virus. Do not let anyone you did not contact first take remote control of your device, and never pay for support with gift cards or wire transfer. If something feels off, hang up and call the company directly using a number from their official website.
                </p>
              </div>

              <div className="mt-4 flex gap-3 print:hidden">
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Prep Sheet
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
