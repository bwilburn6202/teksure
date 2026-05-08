import { useState } from 'react';
import { Eye, Ear, Hand, Brain, Sparkles, ChevronRight, ChevronLeft, RotateCcw, Printer } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type Need = 'vision' | 'hearing' | 'dexterity' | 'cognitive';
type Platform = 'iPhone' | 'Android' | 'Mac' | 'Windows';

interface Setting {
  title: string;
  why: string;
  iphone?: string;
  android?: string;
  mac?: string;
  windows?: string;
  needs: Need[];
}

const SETTINGS: Setting[] = [
  {
    title: 'Make text larger',
    why: 'Reading small text strains your eyes and slows down reading.',
    iphone: 'Settings → Accessibility → Display & Text Size → Larger Text → drag slider toward right',
    android: 'Settings → Display → Font size → drag slider toward Largest',
    mac: 'System Settings → Displays → choose "Larger Text" or use Display Zoom',
    windows: 'Settings → Accessibility → Text size → drag slider up to 150% or 200%',
    needs: ['vision'],
  },
  {
    title: 'Turn on Bold Text',
    why: 'Heavier text strokes are easier to read for many older eyes.',
    iphone: 'Settings → Accessibility → Display & Text Size → Bold Text (toggle on)',
    android: 'Settings → Display → Bold text (on Pixels) or Settings → Accessibility → Visibility enhancements → Bold font',
    needs: ['vision'],
  },
  {
    title: 'Increase display zoom',
    why: 'Makes everything on screen — buttons, icons, text — bigger at once.',
    iphone: 'Settings → Display & Brightness → Display Zoom → Larger Text',
    android: 'Settings → Display → Display size → drag slider toward Large',
    mac: 'System Settings → Accessibility → Zoom → turn on keyboard shortcuts (Option+Cmd+8 to toggle)',
    windows: 'Settings → Accessibility → Magnifier → turn on (Win+Plus to zoom in)',
    needs: ['vision'],
  },
  {
    title: 'Use Dark Mode',
    why: 'White text on a dark background reduces eye strain in low light.',
    iphone: 'Settings → Display & Brightness → Dark',
    android: 'Settings → Display → Dark theme',
    mac: 'System Settings → Appearance → Dark',
    windows: 'Settings → Personalization → Colors → Choose your mode → Dark',
    needs: ['vision'],
  },
  {
    title: 'Turn on screen reader (VoiceOver / TalkBack)',
    why: 'Have your phone or computer read everything on screen aloud.',
    iphone: 'Settings → Accessibility → VoiceOver → On (triple-click side button to toggle)',
    android: 'Settings → Accessibility → TalkBack → On',
    mac: 'System Settings → Accessibility → VoiceOver → On (Cmd+F5 to toggle)',
    windows: 'Settings → Accessibility → Narrator → On (Win+Ctrl+Enter to toggle)',
    needs: ['vision'],
  },
  {
    title: 'Turn on Live Captions',
    why: 'Automatic subtitles for any spoken audio — videos, calls, voice notes.',
    iphone: 'Settings → Accessibility → Live Captions (Beta) → On',
    android: 'Settings → Accessibility → Live Caption (Pixel/Samsung) → On. Or press volume button → Live Caption icon',
    mac: 'System Settings → Accessibility → Live Captions → On',
    windows: 'Settings → Accessibility → Captions → Live captions → On',
    needs: ['hearing'],
  },
  {
    title: 'Hearing aid pairing',
    why: 'Stream phone calls and audio directly to compatible hearing aids.',
    iphone: 'Settings → Accessibility → Hearing Devices → pair your MFi-compatible hearing aids',
    android: 'Settings → Connected devices → Bluetooth → pair your hearing aids (ASHA-compatible)',
    needs: ['hearing'],
  },
  {
    title: 'Mono audio',
    why: 'If you have hearing loss in one ear, this plays both channels through both speakers.',
    iphone: 'Settings → Accessibility → Audio/Visual → Mono Audio (toggle on)',
    android: 'Settings → Accessibility → Audio adjustment → Mono audio (toggle on)',
    mac: 'System Settings → Accessibility → Audio → Play stereo audio as mono',
    windows: 'Settings → Accessibility → Audio → Mono audio (toggle on)',
    needs: ['hearing'],
  },
  {
    title: 'Closed captions on videos',
    why: 'Read along while watching shows — helpful in noisy rooms or with hearing loss.',
    iphone: 'Settings → Accessibility → Subtitles & Captioning → Closed Captions + SDH (toggle on)',
    android: 'Settings → Accessibility → Caption preferences → Show captions',
    mac: 'System Settings → Accessibility → Captions → Use closed captions when available',
    windows: 'Settings → Accessibility → Captions → Caption style',
    needs: ['hearing'],
  },
  {
    title: 'Voice Control / Voice Access',
    why: 'Control your phone or computer entirely with your voice — no tapping or typing.',
    iphone: 'Settings → Accessibility → Voice Control → Set Up Voice Control',
    android: 'Settings → Accessibility → Voice Access → Use Voice Access',
    mac: 'System Settings → Accessibility → Voice Control → On',
    windows: 'Settings → Accessibility → Speech → Voice access → On',
    needs: ['dexterity', 'vision'],
  },
  {
    title: 'AssistiveTouch / Sticky Keys',
    why: 'Avoid difficult button presses or multi-finger gestures.',
    iphone: 'Settings → Accessibility → Touch → AssistiveTouch → On (adds a floating button for shortcuts)',
    android: 'Settings → Accessibility → Interaction controls → Switch Access or Accessibility Menu',
    mac: 'System Settings → Accessibility → Keyboard → Sticky Keys (lets you press one key at a time for shortcuts)',
    windows: 'Settings → Accessibility → Keyboard → Sticky keys (toggle on)',
    needs: ['dexterity'],
  },
  {
    title: 'Larger / slower mouse pointer',
    why: 'Easier to find the cursor on screen and reduces accidental clicks.',
    mac: 'System Settings → Accessibility → Display → Pointer → drag size slider larger',
    windows: 'Settings → Accessibility → Mouse pointer and touch → Size slider, change color to a bright color',
    needs: ['vision', 'dexterity'],
  },
  {
    title: 'Touch accommodations',
    why: 'Ignore accidental brushes — only register firm, intentional taps.',
    iphone: 'Settings → Accessibility → Touch → Touch Accommodations → On',
    android: 'Settings → Accessibility → Interaction controls → Touch & hold delay → Long',
    needs: ['dexterity'],
  },
  {
    title: 'Reduce motion / animations',
    why: 'Some people get dizzy from sliding animations. Reduces them or turns them off.',
    iphone: 'Settings → Accessibility → Motion → Reduce Motion (toggle on)',
    android: 'Settings → Accessibility → Visibility enhancements → Remove animations',
    mac: 'System Settings → Accessibility → Display → Reduce motion',
    windows: 'Settings → Accessibility → Visual effects → Animation effects (toggle off)',
    needs: ['cognitive', 'vision'],
  },
  {
    title: 'Spoken content / Read aloud',
    why: 'Phone or computer reads articles, emails, or selected text aloud — easier than reading.',
    iphone: 'Settings → Accessibility → Spoken Content → Speak Selection + Speak Screen (both on)',
    android: 'Settings → Accessibility → Select to Speak → On',
    mac: 'System Settings → Accessibility → Spoken Content → On',
    windows: 'Microsoft Edge browser → "Read aloud" button on any web page',
    needs: ['vision', 'cognitive'],
  },
  {
    title: 'Simplified home screen / Easy mode',
    why: 'Bigger icons, fewer apps visible, simpler layout.',
    android: 'Samsung: Settings → Display → Easy mode → On. Pixel: customize home screen with fewer apps and a single page.',
    needs: ['cognitive', 'vision'],
  },
];

const NEEDS: { id: Need; label: string; description: string; icon: React.ElementType }[] = [
  { id: 'vision', label: 'Vision', description: 'Trouble reading small text, finding cursor, or seeing clearly', icon: Eye },
  { id: 'hearing', label: 'Hearing', description: 'Trouble hearing audio, dialogue, or notifications', icon: Ear },
  { id: 'dexterity', label: 'Dexterity', description: 'Trouble with fine motor control, taps, or button presses', icon: Hand },
  { id: 'cognitive', label: 'Memory & Focus', description: 'Trouble remembering steps, focusing, or processing fast information', icon: Brain },
];

const PLATFORMS: Platform[] = ['iPhone', 'Android', 'Mac', 'Windows'];

export default function AccessibilitySettingsWizard() {
  const [step, setStep] = useState(0);
  const [selectedNeeds, setSelectedNeeds] = useState<Need[]>([]);
  const [platform, setPlatform] = useState<Platform | null>(null);

  const toggleNeed = (n: Need) => {
    setSelectedNeeds(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  const recommendations = SETTINGS.filter(s => {
    if (!selectedNeeds.some(n => s.needs.includes(n))) return false;
    if (!platform) return false;
    const platformKey = platform.toLowerCase() as 'iphone' | 'android' | 'mac' | 'windows';
    return s[platformKey] !== undefined;
  });

  const restart = () => {
    setStep(0);
    setSelectedNeeds([]);
    setPlatform(null);
  };

  const getInstruction = (s: Setting) => {
    if (!platform) return '';
    return s[platform.toLowerCase() as 'iphone' | 'android' | 'mac' | 'windows'] || '';
  };

  return (
    <>
      <SEOHead
        title="Accessibility Settings Wizard — TekSure"
        description="Tell us your needs and we'll show you exactly which settings to turn on for your iPhone, Android, Mac, or Windows computer."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 print:mb-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 mb-4 print:hidden">
              <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Accessibility Settings Wizard</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              Tell us what you need help with, and we will show you exactly which settings to turn on.
            </p>
          </div>

          {/* Step 1: Needs */}
          {step === 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">
                What would you like help with? (Pick all that apply)
              </p>
              <div className="space-y-3">
                {NEEDS.map(n => {
                  const Icon = n.icon;
                  const selected = selectedNeeds.includes(n.id);
                  return (
                    <button
                      key={n.id}
                      onClick={() => toggleNeed(n.id)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        selected
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className={`w-6 h-6 flex-shrink-0 mt-0.5 ${selected ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500'}`} />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{n.label}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{n.description}</p>
                      </div>
                      {selected && (
                        <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setStep(1)}
                disabled={selectedNeeds.length === 0}
                className="w-full mt-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Platform */}
          {step === 1 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">
                What device do you want to set up?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PLATFORMS.map(p => (
                  <button
                    key={p}
                    onClick={() => { setPlatform(p); setStep(2); }}
                    className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all text-left"
                  >
                    <p className="text-2xl mb-2">{p === 'iPhone' ? '🍎' : p === 'Android' ? '🤖' : p === 'Mac' ? '💻' : '🖥️'}</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{p}</p>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(0)}
                className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          )}

          {/* Step 3: Recommendations */}
          {step === 2 && platform && (
            <>
              <div className="text-center mb-4 print:mb-3">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Personalized for</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {platform} • {selectedNeeds.map(n => NEEDS.find(x => x.id === n)?.label).join(', ')}
                </p>
              </div>

              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {recommendations.length} setting{recommendations.length === 1 ? '' : 's'} we recommend you try:
              </p>

              {recommendations.length === 0 && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center text-gray-500 dark:text-gray-400">
                  <p>No specific settings to recommend for {platform} based on your selections. Try selecting different needs or a different device.</p>
                </div>
              )}

              <div className="space-y-3">
                {recommendations.map((s, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
                    <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{s.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{s.why}</p>
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
                      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 uppercase tracking-wide mb-1">Where to find it on {platform}</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">{getInstruction(s)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3 print:hidden">
                <button
                  onClick={restart}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Recommendations
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
