import { useState, useMemo } from 'react';
import { Search, Smartphone, Wifi, Battery, Bluetooth, Plane, Moon, Bell, Lock, Phone, MapPin, AlertCircle, Signal, BatteryCharging } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface IconEntry {
  emoji?: string;
  iconType: 'lucide' | 'emoji' | 'text';
  iconName?: string;
  text?: string;
  name: string;
  meaning: string;
  whatToDo: string;
  category: string;
  platforms: ('iPhone' | 'Android')[];
}

const ICONS: IconEntry[] = [
  {
    iconType: 'lucide',
    iconName: 'Wifi',
    name: 'Wi-Fi',
    meaning: 'Your phone is connected to a Wi-Fi network. The more curved lines you see filled in, the stronger the signal.',
    whatToDo: 'Nothing — this is a good sign. Means you are not using your cell data plan for internet.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Signal',
    name: 'Cell signal bars',
    meaning: 'Shows how strong your cell phone signal is. More bars (or dots) means better signal. No bars means you have no signal.',
    whatToDo: 'If you only have 1-2 bars and calls drop, try moving outside or to a window. If you regularly have weak signal at home, contact your carrier about a signal booster.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Battery',
    name: 'Battery percentage',
    meaning: 'Shows how much power is left in your phone. When the icon turns red or yellow, your battery is low.',
    whatToDo: 'Plug in your phone when the battery drops below 20%. Letting it die completely shortens battery life over time.',
    category: 'Power',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'BatteryCharging',
    name: 'Lightning bolt on battery',
    meaning: 'Your phone is plugged in and charging.',
    whatToDo: 'Nothing. The bolt disappears once you unplug. Some phones also show a lightning bolt for "low power mode."',
    category: 'Power',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Bluetooth',
    name: 'Bluetooth (the "B" symbol)',
    meaning: 'Bluetooth is turned on. Your phone can connect to wireless earbuds, hearing aids, smart watches, or your car.',
    whatToDo: 'Nothing — leave it on if you use wireless devices. Some seniors turn it off to save a tiny bit of battery, but the savings are minimal.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Plane',
    name: 'Airplane mode (airplane icon)',
    meaning: 'Your phone has shut off all wireless signals — no calls, no texts, no internet.',
    whatToDo: 'If you accidentally turned this on, calls and messages will not come through. Open Control Center (iPhone: swipe down from top-right; Android: pull down from top) and tap the airplane icon to turn it off.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Moon',
    name: 'Crescent moon',
    meaning: 'Do Not Disturb is on. Calls, texts, and notifications will be silenced.',
    whatToDo: 'If you are not getting calls when you should be, this is the most likely cause. Swipe to open Control Center (iPhone) or Quick Settings (Android) and tap the moon icon to turn it off.',
    category: 'Notifications',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Bell',
    name: 'Bell with line through it',
    meaning: 'Notifications are silenced (similar to Do Not Disturb but milder). You may see this on Android phones.',
    whatToDo: 'Pull down notifications and tap the silenced bell to turn sounds back on.',
    category: 'Notifications',
    platforms: ['Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Lock',
    name: 'Padlock',
    meaning: 'Your phone is locked. Some phones also show a lock when screen rotation is locked.',
    whatToDo: 'Press the side button or front button (Home button on older iPhones) and use Face ID, fingerprint, or your passcode to unlock.',
    category: 'Status',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'MapPin',
    name: 'Arrow / location pin',
    meaning: 'An app is using your location right now (GPS). Common with Maps, Uber, weather apps.',
    whatToDo: 'If you are not using a navigation or maps app and see this constantly, check Settings → Privacy → Location Services to see which apps have location access.',
    category: 'Privacy',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'lucide',
    iconName: 'Phone',
    name: 'Phone with handset',
    meaning: 'A call is in progress (in your status bar at the top of the screen).',
    whatToDo: 'Tap the green bar at the top to return to your call. Tap the red end-call button to hang up.',
    category: 'Phone',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'text',
    text: '5G',
    name: '5G',
    meaning: 'Your phone is connected to a fast 5G cellular network.',
    whatToDo: 'Nothing — 5G is faster than 4G LTE. Some phones automatically switch between 5G and LTE based on signal strength.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'text',
    text: 'LTE / 4G',
    name: 'LTE or 4G',
    meaning: 'Your phone is connected to a 4G cellular network — slower than 5G but still fast for most things.',
    whatToDo: 'Nothing — most everyday phone use works fine on LTE. Streaming videos and downloads may be slightly slower than 5G.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'text',
    text: 'E / 3G / GPRS',
    name: 'E, 3G, or GPRS',
    meaning: 'Your phone has fallen back to a slower, older cellular network. Apps and websites may load slowly.',
    whatToDo: 'You probably have weak signal. Try moving to a different location or restarting your phone. If it persists at home, contact your cell carrier.',
    category: 'Connection',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'emoji',
    emoji: '🎤',
    name: 'Orange / yellow dot (iPhone)',
    meaning: 'An app is using your microphone right now. Yellow/orange dot appears at the top right of your iPhone screen.',
    whatToDo: 'If you are not using a voice app, swipe down to see which app is using your mic. You can deny mic access in Settings → Privacy → Microphone.',
    category: 'Privacy',
    platforms: ['iPhone'],
  },
  {
    iconType: 'emoji',
    emoji: '🟢',
    name: 'Green dot (iPhone)',
    meaning: 'An app is using your camera right now. Green dot appears at the top right of your iPhone screen.',
    whatToDo: 'If you are not using the Camera app, FaceTime, or another video app, this is suspicious. Swipe down to see which app is using your camera.',
    category: 'Privacy',
    platforms: ['iPhone'],
  },
  {
    iconType: 'emoji',
    emoji: '🔇',
    name: 'Bell with slash / speaker with slash',
    meaning: 'Your phone\'s ringer is on silent or vibrate only.',
    whatToDo: 'iPhone: flip the small switch on the left side of your phone — orange dot showing means silent. Android: turn up the ringer volume with the volume buttons.',
    category: 'Sound',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'text',
    text: 'VPN',
    name: 'VPN',
    meaning: 'Your phone is using a Virtual Private Network — your internet traffic is being routed through a different server for privacy.',
    whatToDo: 'If you set up a VPN intentionally, this is good. If you do not remember setting one up, check Settings → General → VPN (iPhone) or Settings → Connections → VPN (Android) and remove anything you do not recognize.',
    category: 'Privacy',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'emoji',
    emoji: '🎧',
    name: 'Headphones',
    meaning: 'Headphones, AirPods, or wireless earbuds are connected to your phone.',
    whatToDo: 'Nothing. If you do not have anything connected and see this icon, your phone may think the headphone jack is being used. Try cleaning the headphone port or restarting.',
    category: 'Status',
    platforms: ['iPhone', 'Android'],
  },
  {
    iconType: 'emoji',
    emoji: '🔋',
    name: 'Yellow battery (iPhone)',
    meaning: 'Low Power Mode is on. Your iPhone is conserving battery by reducing some background activity.',
    whatToDo: 'Plug in your phone to charge. Once it reaches 80%, Low Power Mode turns off automatically.',
    category: 'Power',
    platforms: ['iPhone'],
  },
];

const CATEGORIES = ['All', 'Connection', 'Power', 'Notifications', 'Privacy', 'Phone', 'Sound', 'Status'];

export default function PhoneIconGuide() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [platform, setPlatform] = useState<'all' | 'iPhone' | 'Android'>('all');

  const filtered = useMemo(() => {
    return ICONS.filter(icon => {
      if (category !== 'All' && icon.category !== category) return false;
      if (platform !== 'all' && !icon.platforms.includes(platform as 'iPhone' | 'Android')) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          icon.name.toLowerCase().includes(q) ||
          icon.meaning.toLowerCase().includes(q) ||
          (icon.text && icon.text.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [search, category, platform]);

  const getLucideIcon = (name: string) => {
    const map: Record<string, React.ElementType> = {
      Wifi, Signal, Battery, BatteryCharging, Bluetooth, Plane, Moon, Bell, Lock, MapPin, Phone, AlertCircle,
    };
    return map[name] || AlertCircle;
  };

  return (
    <>
      <SEOHead
        title="Phone Icon Guide — TekSure"
        description="Wondering what those tiny symbols at the top of your phone screen mean? Plain-English explanations of every common phone icon, for iPhone and Android."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 mb-4">
              <Smartphone className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Phone Icon Guide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Wondering what those tiny symbols at the top of your phone mean? Look them up here.
            </p>
          </div>

          {/* Search */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search icons (e.g. 'moon', 'wifi', 'battery')"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(['all', 'iPhone', 'Android'] as const).map(p => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
                  platform === p
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {p === 'all' ? 'Both Phones' : p === 'iPhone' ? '🍎 iPhone' : '🤖 Android'}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  category === c
                    ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Showing {filtered.length} of {ICONS.length} icons
          </p>

          {/* Icon list */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-gray-600 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <Search className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p>No icons match your search. Try a different keyword.</p>
              </div>
            )}
            {filtered.map((icon, i) => {
              const LucideIcon = icon.iconType === 'lucide' && icon.iconName ? getLucideIcon(icon.iconName) : null;
              return (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    {/* Icon display */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {icon.iconType === 'lucide' && LucideIcon && (
                        <LucideIcon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                      )}
                      {icon.iconType === 'emoji' && (
                        <span className="text-2xl">{icon.emoji}</span>
                      )}
                      {icon.iconType === 'text' && (
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{icon.text}</span>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{icon.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {icon.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>What it means:</strong> {icon.meaning}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>What to do:</strong> {icon.whatToDo}
                      </p>
                      <div className="mt-2 flex gap-1.5">
                        {icon.platforms.map(p => (
                          <span key={p} className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4 text-center">
            <p className="text-sm text-cyan-800 dark:text-cyan-200">
              <strong>Quick Tip:</strong> Pull down from the top of your screen at any time to see your phone\'s status icons up close, plus a label for each one.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
