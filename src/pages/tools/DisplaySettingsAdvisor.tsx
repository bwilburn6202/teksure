import { useState } from 'react';
import { Sun, Moon, Type, ZoomIn, Eye, ChevronDown, ChevronUp, CheckCircle2, Info } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Setting {
  id: string;
  icon: React.ElementType;
  title: string;
  why: string;
  iphone: { heading: string; steps: string[]; tip?: string };
  android: { heading: string; steps: string[]; tip?: string };
}

const settings: Setting[] = [
  {
    id: 'dark-mode',
    icon: Moon,
    title: 'Dark Mode',
    why: 'Dark mode switches your screen from a white background to a dark one. Many people find it easier on their eyes at night or in dim rooms, and it can extend battery life on newer phones.',
    iphone: {
      heading: 'iPhone — Turn on Dark Mode',
      steps: [
        'Open Settings',
        'Tap "Display & Brightness"',
        'Under "Appearance," tap "Dark"',
        'The screen switches immediately — tap "Light" at any time to go back',
        'To switch automatically at sunset: tap "Automatic," then tap "Options" to set your preferred schedule',
      ],
      tip: 'You can also swipe down from the top-right corner to open Control Center and tap the brightness circle — long-press it to see a Dark Mode toggle.',
    },
    android: {
      heading: 'Android — Turn on Dark Mode',
      steps: [
        'Open Settings',
        'Tap "Display" (sometimes called "Display & Brightness" or "Screen")',
        'Tap "Dark mode" or "Dark theme" — toggle it on',
        'On Samsung phones: Settings → Display → Light / Dark — tap "Dark"',
        'Most Android phones also let you schedule Dark Mode: look for "Dark mode schedule" or "Turn on automatically"',
      ],
      tip: 'Pull down from the top of your screen twice to open Quick Settings. Look for a "Dark mode" tile you can tap without opening Settings.',
    },
  },
  {
    id: 'night-shift',
    icon: Sun,
    title: 'Night Shift / Night Light (Blue Light Filter)',
    why: 'Screens emit blue light that can make it harder to fall asleep. Night Shift (iPhone) and Night Light / Eye Comfort Shield (Android) warm the colors on your screen in the evening so your eyes feel less strained before bed.',
    iphone: {
      heading: 'iPhone — Set up Night Shift',
      steps: [
        'Open Settings → Display & Brightness',
        'Tap "Night Shift"',
        'Toggle on "Scheduled" to have it turn on automatically',
        'Set your preferred "From" time (example: 8:00 PM) and "To" time (example: 7:00 AM)',
        'Drag the "Color Temperature" slider toward "More Warm" for a stronger effect',
        'Or toggle "Manually Enable Until Tomorrow" to turn it on right now',
      ],
      tip: 'Night Shift does not affect photos or videos — it only changes how other content looks.',
    },
    android: {
      heading: 'Android — Set up Night Light or Eye Comfort',
      steps: [
        'Open Settings → Display',
        'Look for "Night Light," "Blue light filter," or "Eye Comfort Shield" (name varies by phone brand)',
        'Tap it and toggle it on',
        'Tap "Schedule" or "Turn on automatically" to set a daily time range',
        'Adjust the "Intensity" or "Color temperature" slider — move it toward warmer/amber',
        'Samsung phones: Settings → Display → Eye Comfort Shield',
      ],
      tip: 'On Pixel phones, look for "Night Light" under Settings → Display. On Samsung, it\'s called "Eye Comfort Shield."',
    },
  },
  {
    id: 'font-size',
    icon: Type,
    title: 'Make Text Bigger',
    why: 'If you find yourself squinting to read text on your phone, increasing the font size makes everything easier to read — messages, emails, websites, and apps.',
    iphone: {
      heading: 'iPhone — Increase font size',
      steps: [
        'Open Settings → Accessibility',
        'Tap "Display & Text Size"',
        'Tap "Larger Text" and toggle it on',
        'Drag the "Font Size" slider to the right — the sample text at the top previews your change',
        'For the largest text sizes, move the slider all the way right',
        'Tap the back arrow — the change applies immediately across most apps',
      ],
      tip: 'To also make text bold: go back to "Display & Text Size" and toggle on "Bold Text." This makes all text on the phone heavier and easier to read.',
    },
    android: {
      heading: 'Android — Increase font size',
      steps: [
        'Open Settings → Display',
        'Tap "Font size" or "Font size and style"',
        'Drag the slider to the right to increase the size — a preview shows how text will look',
        'Choose "Large" or "Largest" for the biggest improvement',
        'Tap the back arrow to apply',
        'Samsung phones: Settings → Display → Font size and style → drag the Font size slider',
      ],
      tip: 'If fonts look large enough but icons and buttons still feel small, see the "Display Zoom" section below.',
    },
  },
  {
    id: 'display-zoom',
    icon: ZoomIn,
    title: 'Zoom In — Make Everything Bigger',
    why: 'Font size only affects text. Display Zoom (iPhone) or Display Size (Android) enlarges everything on the screen — icons, buttons, menus, and text all at once. This is the most powerful setting for people who want a more comfortable view.',
    iphone: {
      heading: 'iPhone — Display Zoom',
      steps: [
        'Open Settings → Display & Brightness',
        'Scroll down and tap "Display Zoom"',
        'Tap "Larger Text" (this was called "Zoomed" on older iPhones)',
        'A preview shows how the screen will look — tap "Set" in the top right to confirm',
        'Your phone will restart to apply the change',
        'To go back: repeat the steps and choose "Default"',
      ],
      tip: 'Display Zoom works best on larger iPhones (iPhone Plus, Pro Max, or SE). On smaller models, some content may get cut off.',
    },
    android: {
      heading: 'Android — Display Size',
      steps: [
        'Open Settings → Display',
        'Tap "Display size" or "Screen zoom" (name varies by brand)',
        'Drag the slider to the right to zoom in — a preview shows the change in real time',
        'Choose one or two steps above the default for a noticeable improvement',
        'Tap "Apply" or tap the back arrow to confirm',
        'Samsung phones: Settings → Display → Screen zoom — drag slider toward Large',
      ],
      tip: 'You can combine Display Size with Font Size for maximum readability. Start with Display Size and adjust Font Size afterward.',
    },
  },
  {
    id: 'brightness',
    icon: Eye,
    title: 'Brightness and Auto-Brightness',
    why: 'Keeping your screen at the right brightness reduces eye strain. Auto-Brightness adjusts the brightness based on the light around you — brighter outdoors, dimmer indoors — so you do not have to keep changing it manually.',
    iphone: {
      heading: 'iPhone — Brightness & Auto-Brightness',
      steps: [
        'Swipe down from the top-right corner of your screen to open Control Center',
        'Drag the brightness slider (sun icon on the left side of the panel) up or down',
        'For Auto-Brightness: open Settings → Accessibility → Display & Text Size',
        'Scroll to the bottom and toggle on "Auto-Brightness"',
        'Your phone will now adjust brightness on its own based on your surroundings',
      ],
      tip: 'If Auto-Brightness is on and the screen still seems too dim outdoors, manually slide the brightness up — the phone will remember and calibrate from that point.',
    },
    android: {
      heading: 'Android — Brightness & Adaptive Brightness',
      steps: [
        'Pull down from the top of your screen to open Quick Settings',
        'Drag the brightness bar left (dimmer) or right (brighter)',
        'For auto-adjustment: pull down Quick Settings, then tap the gear icon (Settings) → Display',
        'Toggle on "Adaptive brightness" or "Auto brightness"',
        'Your phone will learn your preferences over a few days and adjust automatically',
      ],
      tip: 'Adaptive Brightness learns from your manual adjustments. If you always find the screen too dim at certain times, manually increase it — the phone will adjust its baseline.',
    },
  },
];

type Platform = 'iPhone' | 'Android';

export default function DisplaySettingsAdvisor() {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [expanded, setExpanded] = useState<string | null>('font-size');

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id));

  return (
    <>
      <SEOHead
        title="Display Settings Advisor — TekSure"
        description="Make your phone screen easier to read. Step-by-step guide to Dark Mode, Night Shift, larger text, display zoom, and brightness on iPhone and Android."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-950/60 mb-4">
              <Eye className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Display Settings Advisor
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Five settings that make your phone screen easier on your eyes. Pick your phone type
              and follow the steps — most take under two minutes.
            </p>
          </div>

          {/* Platform picker */}
          {!platform && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
              <p className="text-center text-gray-700 dark:text-gray-300 font-medium mb-4 text-lg">
                What kind of phone do you have?
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPlatform('iPhone')}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all"
                >
                  <span className="text-4xl">🍎</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">iPhone</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Apple iPhone (any model)</span>
                </button>
                <button
                  onClick={() => setPlatform('Android')}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all"
                >
                  <span className="text-4xl">🤖</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Android</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Samsung, Google Pixel, etc.</span>
                </button>
              </div>
            </div>
          )}

          {/* Selected platform badge */}
          {platform && (
            <div className="flex items-center justify-between bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 rounded-xl px-4 py-3 mb-6">
              <span className="text-violet-800 dark:text-violet-200 font-medium">
                Showing steps for: {platform === 'iPhone' ? '🍎 iPhone' : '🤖 Android'}
              </span>
              <button
                onClick={() => setPlatform(null)}
                className="text-sm text-violet-600 dark:text-violet-400 underline"
              >
                Change
              </button>
            </div>
          )}

          {/* Tip banner */}
          <div className="flex gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Quick Tip:</strong> Start with "Make Text Bigger" — it is the single change that helps most seniors immediately and takes about 30 seconds.
            </p>
          </div>

          {/* Settings sections */}
          <div className="space-y-3">
            {settings.map((setting) => {
              const Icon = setting.icon;
              const isOpen = expanded === setting.id;
              const pd = platform === 'iPhone' ? setting.iphone : platform === 'Android' ? setting.android : null;

              return (
                <div
                  key={setting.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(setting.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{setting.title}</p>
                      {!isOpen && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{setting.why}</p>
                      )}
                    </div>
                    {isOpen
                      ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    }
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">{setting.why}</p>

                      {/* No platform selected — show both */}
                      {!platform && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {[setting.iphone, setting.android].map((p, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">{p.heading}</p>
                              <ol className="space-y-2">
                                {p.steps.map((step, si) => (
                                  <li key={si} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs flex items-center justify-center font-bold mt-0.5">
                                      {si + 1}
                                    </span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                              {p.tip && (
                                <div className="mt-3 flex gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
                                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                  <p className="text-xs text-amber-800 dark:text-amber-200">{p.tip}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Platform selected */}
                      {platform && pd && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{pd.heading}</p>
                          <ol className="space-y-3">
                            {pd.steps.map((step, si) => (
                              <li key={si} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-sm flex items-center justify-center font-bold mt-0.5">
                                  {si + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          {pd.tip && (
                            <div className="mt-4 flex gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
                              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-800 dark:text-amber-200">
                                <strong>Quick Tip:</strong> {pd.tip}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
              All settings are reversible
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Every setting on this page can be undone in seconds. Feel free to try them and turn
              off anything that does not feel right for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
