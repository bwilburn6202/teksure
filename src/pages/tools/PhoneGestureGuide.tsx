import { useState } from 'react';
import { Hand, Search, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Gesture {
  id: string;
  name: string;
  motion: string;
  emoji: string;
  iphone: { what: string; how: string };
  android: { what: string; how: string };
  category: string;
}

const GESTURES: Gesture[] = [
  {
    id: 'tap',
    name: 'Tap',
    motion: 'A quick touch',
    emoji: '👆',
    iphone: {
      what: 'Selects an item, opens an app, or activates a button.',
      how: 'Touch the screen briefly with one finger and lift it away. Do not press hard — the screen reads even a light tap.',
    },
    android: {
      what: 'Selects an item, opens an app, or activates a button.',
      how: 'Same as iPhone — a quick light touch with one finger.',
    },
    category: 'Basics',
  },
  {
    id: 'double-tap',
    name: 'Double-tap',
    motion: 'Two quick taps in a row',
    emoji: '👆👆',
    iphone: {
      what: 'Often zooms in or out on a webpage, photo, or map. In Photos, double-tap zooms toward where you tapped.',
      how: 'Tap twice in the same spot, quickly — within about half a second.',
    },
    android: {
      what: 'Same — zooms in/out, or "wakes" the screen on some Android phones (Pixel, Samsung).',
      how: 'Same as iPhone — two quick taps in the same spot.',
    },
    category: 'Basics',
  },
  {
    id: 'long-press',
    name: 'Long-press (or "press and hold")',
    motion: 'Touch and hold for about 1 second',
    emoji: '👆⏱️',
    iphone: {
      what: 'Opens a menu of actions for the item you are holding. On the home screen, it brings up "Edit Home Screen" or app actions.',
      how: 'Touch and hold for about 1 second without lifting your finger. A menu or shortcut card appears.',
    },
    android: {
      what: 'Same purpose — opens action menus, lets you move or uninstall apps from the home screen.',
      how: 'Touch and hold for about 1 second.',
    },
    category: 'Basics',
  },
  {
    id: 'swipe-up-close',
    name: 'Swipe up to close apps',
    motion: 'Slide finger up the screen',
    emoji: '⬆️',
    iphone: {
      what: 'On iPhones without a Home button, this exits an app and returns to the home screen.',
      how: 'Place your finger at the very bottom edge of the screen and slide upward in one smooth motion.',
    },
    android: {
      what: 'Same — returns to the home screen on most modern Android phones.',
      how: 'Slide upward from the bottom edge, especially if your phone uses gesture navigation.',
    },
    category: 'Navigation',
  },
  {
    id: 'swipe-up-pause',
    name: 'Swipe up and pause (App Switcher)',
    motion: 'Slide up partway and hold',
    emoji: '⬆️⏸️',
    iphone: {
      what: 'Shows all your recently-used apps so you can quickly switch between them.',
      how: 'Slide up from the bottom edge, and pause your finger in the middle of the screen for a moment before lifting.',
    },
    android: {
      what: 'Same — shows recent apps view, also called Overview.',
      how: 'Slide up from bottom and pause briefly, or tap the square button (older phones).',
    },
    category: 'Navigation',
  },
  {
    id: 'swipe-down-top',
    name: 'Swipe down from the top',
    motion: 'Slide finger down from the top',
    emoji: '⬇️',
    iphone: {
      what: 'Opens the Notification Center showing missed alerts. From the top-right corner, opens Control Center (Wi-Fi, brightness, flashlight).',
      how: 'Touch the very top of the screen and pull down. From left side = notifications. From top-right = Control Center.',
    },
    android: {
      what: 'Opens the notification shade. Pull down twice to see Quick Settings (Wi-Fi, Bluetooth, etc.).',
      how: 'Touch the top of the screen and pull down. Pull down again with two fingers for full Quick Settings.',
    },
    category: 'Navigation',
  },
  {
    id: 'swipe-down-middle',
    name: 'Swipe down on home screen',
    motion: 'Slide down in the middle',
    emoji: '🔍',
    iphone: {
      what: 'Opens Search — type to search for apps, contacts, files, settings, or anything on your phone.',
      how: 'On any home screen page, place your finger in the middle of the screen and pull down briefly.',
    },
    android: {
      what: 'Some Android phones open notifications instead. Search is usually a separate icon or a swipe up.',
      how: 'Try it on your phone to see what it does. To search, tap the search bar at the top of the home screen.',
    },
    category: 'Navigation',
  },
  {
    id: 'swipe-back',
    name: 'Swipe from the edge to go back',
    motion: 'Slide from the left edge inward',
    emoji: '↩️',
    iphone: {
      what: 'In most apps, swiping right from the left edge takes you back to the previous screen.',
      how: 'Place your finger on the very left edge of the screen and pull right.',
    },
    android: {
      what: 'Same on phones using gesture navigation — works from either edge (left or right) on Pixel and most Samsung phones.',
      how: 'Swipe inward from either side edge.',
    },
    category: 'Navigation',
  },
  {
    id: 'pinch-zoom',
    name: 'Pinch to zoom',
    motion: 'Two fingers spread apart or together',
    emoji: '🤏',
    iphone: {
      what: 'Zooms photos, maps, and webpages in (spread) or out (pinch).',
      how: 'Place your thumb and index finger on the screen close together, then spread them apart to zoom in. Move them together to zoom out.',
    },
    android: {
      what: 'Same — works in Photos, Maps, browsers, and most apps.',
      how: 'Same motion — two fingers, spread or pinch.',
    },
    category: 'Basics',
  },
  {
    id: 'two-finger-scroll',
    name: 'Scroll with one finger',
    motion: 'Slide finger up or down',
    emoji: '📜',
    iphone: {
      what: 'Moves the page up or down. Used for reading articles, scrolling photos, browsing menus.',
      how: 'Place finger on screen and drag it up to scroll down through content; drag down to scroll up.',
    },
    android: {
      what: 'Same as iPhone.',
      how: 'Same — finger drag up or down.',
    },
    category: 'Basics',
  },
  {
    id: 'three-finger-tap',
    name: 'Two-finger tap (read aloud)',
    motion: 'Tap with two fingers',
    emoji: '✌️',
    iphone: {
      what: 'If "Speak Selection" is on, two fingers swiping down from the top of the screen reads the page aloud.',
      how: 'Settings → Accessibility → Spoken Content → turn on Speak Screen. Then swipe down from the top with two fingers.',
    },
    android: {
      what: 'Select-to-Speak works similarly. Most phones use a button on the side or a special accessibility shortcut.',
      how: 'Settings → Accessibility → Select to Speak → turn it on. Then tap the floating button or use the gesture.',
    },
    category: 'Accessibility',
  },
  {
    id: 'side-button-press',
    name: 'Press the side button',
    motion: 'Press once',
    emoji: '🔘',
    iphone: {
      what: 'Locks the screen. Press it again to wake the phone. Press and hold to use Siri (or volume + side button on newer iPhones).',
      how: 'Press the button on the right side of the iPhone briefly.',
    },
    android: {
      what: 'Same — single press locks the screen. Hold to power off or activate Google Assistant (depending on phone).',
      how: 'Press the button on the right side briefly.',
    },
    category: 'Buttons',
  },
  {
    id: 'volume-up-down',
    name: 'Volume buttons',
    motion: 'Press up or down',
    emoji: '🔊',
    iphone: {
      what: 'Adjusts ringer volume on the home screen, or media volume during a call/song. Pressing both at once with the side button makes a screenshot.',
      how: 'Two buttons on the left side of the iPhone. Press the top one for louder, the bottom for quieter.',
    },
    android: {
      what: 'Same — adjusts ringer or media volume. Volume Up + Power often takes a screenshot.',
      how: 'Volume buttons are on the side, depending on the phone model.',
    },
    category: 'Buttons',
  },
  {
    id: 'screenshot',
    name: 'Take a screenshot',
    motion: 'Press two buttons together',
    emoji: '📸',
    iphone: {
      what: 'Saves a picture of whatever is on your screen.',
      how: 'iPhone with Face ID: press the side button + volume up at the same time. iPhone with Home button: press Home + side button. The screen will flash and a thumbnail appears in the corner.',
    },
    android: {
      what: 'Same purpose — saves the current screen as an image to your Photos.',
      how: 'Press Power + Volume Down at the same time. (On some Samsungs you can also swipe the edge of your hand across the screen.)',
    },
    category: 'Buttons',
  },
];

const CATEGORIES = ['All', 'Basics', 'Navigation', 'Accessibility', 'Buttons'];

export default function PhoneGestureGuide() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [platform, setPlatform] = useState<'iPhone' | 'Android' | 'both'>('both');

  const filtered = GESTURES.filter(g => {
    if (category !== 'All' && g.category !== category) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return g.name.toLowerCase().includes(q) || g.motion.toLowerCase().includes(q);
    }
    return true;
  });

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id));

  return (
    <>
      <SEOHead
        title="Phone Gesture Guide — TekSure"
        description="Tap, double-tap, swipe up, pinch — what every gesture on your iPhone or Android phone does. Plain-English reference for seniors."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-950/60 mb-4">
              <Hand className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Phone Gesture Guide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tap, swipe, pinch — what every gesture on your phone does, explained in plain English.
            </p>
          </div>

          {/* Search + filters */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm mb-4">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search gestures (e.g. 'swipe', 'screenshot')"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:border-teal-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                    category === c
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Platform picker */}
          <div className="flex gap-2 mb-4">
            {(['both', 'iPhone', 'Android'] as const).map(p => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                  platform === p
                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {p === 'both' ? 'Both Phones' : p === 'iPhone' ? '🍎 iPhone' : '🤖 Android'}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {filtered.length} gesture{filtered.length === 1 ? '' : 's'}
          </p>

          {/* Gesture list */}
          <div className="space-y-3">
            {filtered.map(g => {
              const isOpen = expanded === g.id;
              return (
                <div key={g.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggle(g.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-3xl flex-shrink-0">{g.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{g.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{g.motion}</p>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-3">
                      {(platform === 'both' || platform === 'iPhone') && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">🍎 On iPhone</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>What it does:</strong> {g.iphone.what}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><strong>How:</strong> {g.iphone.how}</p>
                        </div>
                      )}
                      {(platform === 'both' || platform === 'Android') && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">🤖 On Android</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>What it does:</strong> {g.android.what}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400"><strong>How:</strong> {g.android.how}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-4 text-center">
            <p className="text-sm text-teal-800 dark:text-teal-200">
              <strong>Quick Tip:</strong> Practice each gesture a few times when you have a quiet moment — they become automatic with repetition.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
