import { useState } from 'react';
import { Smartphone, Clock, Sun, Moon, CheckCircle2, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface PlatformStep {
  title: string;
  steps: string[];
  tip?: string;
}

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  iphone: PlatformStep;
  android: PlatformStep;
}

const sections: Section[] = [
  {
    id: 'see-usage',
    icon: Clock,
    title: 'See How Much Time You Spend on Your Phone',
    description: 'Before making changes, check your current usage. Your phone keeps a weekly report.',
    iphone: {
      title: 'iPhone — Screen Time report',
      steps: [
        'Open Settings (the gray gear icon)',
        'Tap "Screen Time" near the top',
        'Tap "See All Activity" to view your full weekly breakdown',
        'The chart at the top shows average daily use in hours and minutes',
        'Scroll down to see which apps you used most and for how long',
      ],
      tip: 'If Screen Time is turned off, tap "Turn On Screen Time" and tap "This is My iPhone" when asked.',
    },
    android: {
      title: 'Android — Digital Wellbeing report',
      steps: [
        'Open Settings',
        'Scroll down and tap "Digital Wellbeing & Parental Controls" (or just "Digital Wellbeing" on some phones)',
        'The circular chart shows today\'s screen time broken into app categories',
        'Tap any app name in the list to see exactly how long you used it today',
        'Tap "Dashboard" for a full breakdown by day',
      ],
      tip: 'On Samsung phones, look for "Screen Time" inside the "Digital Wellbeing" menu — the name changes slightly by model.',
    },
  },
  {
    id: 'set-limits',
    icon: AlertCircle,
    title: 'Set Time Limits on Apps You Use Too Much',
    description: 'You can put a soft daily limit on any app. When you hit the limit, a reminder appears — you can always choose to ignore it.',
    iphone: {
      title: 'iPhone — App Limits',
      steps: [
        'Open Settings → Screen Time',
        'Tap "App Limits," then tap "Add Limit"',
        'Choose a category (like "Social Networking" or "Entertainment") or scroll down to pick individual apps',
        'Tap "Next" in the top-right corner',
        'Use the time wheel to pick your daily limit (example: 30 minutes)',
        'Tap "Add" to save',
      ],
      tip: 'A gentle limit is better than a strict one to start. Try 45 minutes on a category before going lower.',
    },
    android: {
      title: 'Android — App Timers',
      steps: [
        'Open Settings → Digital Wellbeing & Parental Controls',
        'Tap the app you want to limit in the dashboard list',
        'Tap "App timer"',
        'Set your daily time limit using the hour/minute pickers',
        'Tap "OK" to save',
        'Repeat for other apps you want to limit',
      ],
      tip: 'The app\'s icon will turn gray when your timer runs out, reminding you that time is up.',
    },
  },
  {
    id: 'downtime',
    icon: Moon,
    title: 'Schedule Phone-Free Hours (Downtime)',
    description: 'Set a window each day — like bedtime — when most apps go quiet. This helps with sleep and gives your brain a break.',
    iphone: {
      title: 'iPhone — Downtime',
      steps: [
        'Open Settings → Screen Time',
        'Tap "Downtime"',
        'Toggle "Downtime" on',
        'Set a "From" time (example: 9:00 PM) and a "To" time (example: 7:00 AM)',
        'During Downtime, only phone calls and apps you mark as "Always Allowed" will work',
        'To add apps that can always be used, go back and tap "Always Allowed"',
      ],
      tip: 'Phone calls, Messages, and Maps are allowed by default during Downtime. You won\'t miss an emergency.',
    },
    android: {
      title: 'Android — Bedtime Mode / Wind Down',
      steps: [
        'Open Settings → Digital Wellbeing & Parental Controls',
        'Tap "Bedtime mode" (some phones call it "Wind Down")',
        'Tap "Based on a schedule" and set your bedtime and wake-up times',
        'You can choose to make the screen black-and-white (grayscale) during bedtime to make it less inviting',
        'Tap the back arrow to save',
      ],
      tip: 'Grayscale mode is surprisingly effective — a black-and-white screen is much less tempting to scroll.',
    },
  },
  {
    id: 'morning-routine',
    icon: Sun,
    title: 'Start the Morning Without Your Phone',
    description: 'Many people reach for their phone the moment they wake up. Delaying that first check by even 30 minutes can improve your mood.',
    iphone: {
      title: 'iPhone — Communication Limits',
      steps: [
        'Keep your phone charging in another room overnight so it is not the first thing you see',
        'Use a separate alarm clock so you don\'t need the phone on your nightstand',
        'In Screen Time, tap "Always Allowed" and make sure only essential apps like Phone and Messages are listed',
        'Use the Downtime schedule (above) to keep social media quiet until after breakfast',
      ],
    },
    android: {
      title: 'Android — Focus Mode',
      steps: [
        'Open Settings → Digital Wellbeing & Parental Controls',
        'Tap "Focus mode"',
        'Check the apps you want to pause during your morning routine (example: Facebook, YouTube)',
        'Tap "Set a schedule" to automatically enable Focus Mode each morning',
        'Tap "Turn on now" if you want to start it manually right away',
      ],
      tip: 'Focus Mode pauses distracting apps but keeps phone calls, maps, and camera working normally.',
    },
  },
];

const platforms = ['iPhone', 'Android'] as const;
type Platform = (typeof platforms)[number];

export default function ScreenTimeAdvisor() {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [expanded, setExpanded] = useState<string | null>('see-usage');

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id));

  return (
    <>
      <SEOHead
        title="Screen Time Advisor — TekSure"
        description="Learn how to check your daily phone usage, set app limits, and schedule phone-free hours on iPhone and Android. Plain-English steps for seniors."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 mb-4">
              <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Screen Time Advisor
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find out how much time you spend on your phone — and how to cut back if you want to.
              No judgment, no complicated settings.
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
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all"
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

          {/* Platform selected badge */}
          {platform && (
            <div className="flex items-center justify-between bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl px-4 py-3 mb-6">
              <span className="text-indigo-800 dark:text-indigo-200 font-medium">
                Showing steps for: {platform === 'iPhone' ? '🍎 iPhone' : '🤖 Android'}
              </span>
              <button
                onClick={() => setPlatform(null)}
                className="text-sm text-indigo-600 dark:text-indigo-400 underline"
              >
                Change
              </button>
            </div>
          )}

          {/* Tip banner */}
          <div className="flex gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Quick Tip:</strong> The average American spends over 4 hours a day on their phone.
              Even cutting back by 30 minutes a day frees up 3.5 hours a week.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;
              const isOpen = expanded === section.id;
              const platformData = platform
                ? platform === 'iPhone'
                  ? section.iphone
                  : section.android
                : null;

              return (
                <div
                  key={section.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(section.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{section.title}</p>
                      {!isOpen && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{section.description}</p>
                      )}
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{section.description}</p>

                      {/* No platform selected — show both */}
                      {!platform && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {[section.iphone, section.android].map((pd, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">{pd.title}</p>
                              <ol className="space-y-2">
                                {pd.steps.map((step, si) => (
                                  <li key={si} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs flex items-center justify-center font-bold mt-0.5">
                                      {si + 1}
                                    </span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                              {pd.tip && (
                                <div className="mt-3 flex gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
                                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                  <p className="text-xs text-amber-800 dark:text-amber-200">{pd.tip}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Platform selected — show one */}
                      {platform && platformData && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{platformData.title}</p>
                          <ol className="space-y-3">
                            {platformData.steps.map((step, si) => (
                              <li key={si} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm flex items-center justify-center font-bold mt-0.5">
                                  {si + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          {platformData.tip && (
                            <div className="mt-4 flex gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
                              <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-800 dark:text-amber-200">
                                <strong>Quick Tip:</strong> {platformData.tip}
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

          {/* Bottom reminder */}
          <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="font-semibold text-green-800 dark:text-green-200 mb-1">
              Small changes add up
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              You do not need to overhaul your phone habits overnight. Pick one section above, try it
              for a week, and see how you feel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
