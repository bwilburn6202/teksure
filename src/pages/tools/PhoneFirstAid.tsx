import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Battery,
  Thermometer,
  Smartphone,
  Volume2,
  Camera,
  Zap,
  HardDrive,
  Droplets,
  MapPin,
  Wrench,
  Lightbulb,
  MessageCircle,
  BookOpen,
  Home,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ─────────────────────────────────────────────────────────────────────────
 * Decision-tree data model
 *
 * The tool is a state machine of nodes. Each node is either a "question"
 * (branching options) or a "fix" (end state with concrete steps). The current
 * node is the last item in a history stack so users can always press Back to
 * recover from a wrong choice.
 * ───────────────────────────────────────────────────────────────────────── */

interface QuestionOption {
  label: string;
  desc?: string;
  emoji?: string;
  next: string;
}

interface QuestionNode {
  kind: 'question';
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  options: QuestionOption[];
}

interface FixNode {
  kind: 'fix';
  title: string;
  icon?: LucideIcon;
  /** A short plain-language explanation of *why* this fix works. */
  why: string;
  /** Concrete, numbered steps the user can follow. */
  steps: string[];
  /** What to try next if this didn't work. */
  ifFails?: string;
  /** Specific signs that it's time to call in a human. */
  proHelp?: string;
  /** Optional related TekSure guide link. */
  guide?: { label: string; to: string };
  /** For water / drop / lost — the bright-red urgency banner. */
  urgent?: string;
}

type Node = QuestionNode | FixNode;

/* ─────────────────────────────────────────────────────────────────────────
 * The tree
 * ───────────────────────────────────────────────────────────────────────── */

const tree: Record<string, Node> = {
  /* ── Root ────────────────────────────────────────────────── */
  start: {
    kind: 'question',
    title: 'What\'s wrong with your phone?',
    subtitle: 'Pick the symptom that sounds most like your problem. You can always go back.',
    options: [
      { label: 'My phone won\'t turn on',           emoji: '⚫',  desc: 'Screen is dark, nothing happens',         next: 'wontTurnOn' },
      { label: 'My phone is hot',                   emoji: '🔥',  desc: 'It feels warm or uncomfortably hot',      next: 'hot' },
      { label: 'Battery drains too fast',           emoji: '🔋',  desc: 'Dies quickly even when you don\'t use it', next: 'batteryDrain' },
      { label: 'Screen is broken or touch not working', emoji: '📱', desc: 'Cracked, black, lines, or unresponsive', next: 'screen' },
      { label: 'Phone is slow or frozen',           emoji: '🐢',  desc: 'Taking forever, stuck, or won\'t respond', next: 'slow' },
      { label: 'Can\'t make or receive calls',      emoji: '📞',  desc: 'No signal, calls drop, or silence',       next: 'calls' },
      { label: 'No sound or audio issues',          emoji: '🔇',  desc: 'Can\'t hear ringer, music, or the caller', next: 'sound' },
      { label: 'Camera isn\'t working',             emoji: '📷',  desc: 'Black screen, blurry, or error message',  next: 'camera' },
      { label: 'Phone keeps restarting',            emoji: '🔄',  desc: 'It turns itself off and back on',         next: 'restart' },
      { label: 'Ran out of storage',                emoji: '💾',  desc: '"Storage full" warning, can\'t take photos', next: 'storage' },
      { label: 'Phone is wet or dropped in water',  emoji: '💧',  desc: 'Water damage — act fast!',                next: 'water' },
      { label: 'Lost my phone',                     emoji: '🔍',  desc: 'Can\'t find it — let\'s locate it',       next: 'lost' },
    ],
  },

  /* ── 1. Won't turn on ────────────────────────────────────── */
  wontTurnOn: {
    kind: 'question',
    title: 'Is the screen completely black, or does it show something?',
    icon: Zap,
    options: [
      { label: 'Completely black — nothing at all',  emoji: '⚫',  desc: 'No light, no image, no logo',          next: 'wontTurnOn_black' },
      { label: 'I see a battery icon',               emoji: '🪫',  desc: 'A little battery symbol appears',       next: 'fix_chargeIt' },
      { label: 'It shows the logo but freezes',      emoji: '⏸️',  desc: 'Apple / Samsung / brand logo stuck',   next: 'fix_forceRestart' },
    ],
  },
  wontTurnOn_black: {
    kind: 'question',
    title: 'Does it vibrate or make any sound when you press the power button?',
    subtitle: 'Hold the power button for a full 5 seconds and listen carefully.',
    options: [
      { label: 'Yes — it buzzes or makes a sound',   emoji: '📳',  desc: 'Tiny vibration, chime, or click',       next: 'fix_forceRestart' },
      { label: 'No — completely silent',             emoji: '🤐',  desc: 'Nothing at all happens',                next: 'wontTurnOn_charger' },
    ],
  },
  wontTurnOn_charger: {
    kind: 'question',
    title: 'Have you tried a different charger and cable?',
    subtitle: 'A dead phone often looks broken when the charger is actually the problem.',
    options: [
      { label: 'No, I\'ve only tried one',           emoji: '🔌',  desc: 'Let\'s try swapping it',                next: 'fix_tryCharger' },
      { label: 'Yes — different charger, still nothing', emoji: '🛠️', desc: 'Time for repair options',           next: 'fix_repairNeeded' },
    ],
  },

  fix_chargeIt: {
    kind: 'fix',
    icon: Battery,
    title: 'Your battery is completely empty — charge it for 30 minutes',
    why: 'When a battery drains to zero, the phone can\'t even show its normal screen. The battery icon is the phone telling you "I need power — I\'ll be back soon." It\'s not broken.',
    steps: [
      'Plug the phone into a wall outlet with the original charger if you have it.',
      'Leave it alone for at least 30 minutes. Resist the urge to poke at it — it truly is charging, even if the screen is mostly black.',
      'After 30 minutes, try pressing the power button. You should see the normal startup screen.',
      'Let it keep charging until it\'s at least at 50% before you use it heavily.',
    ],
    ifFails: 'If after 30 minutes of charging nothing changes, try a different charger and cable. Then treat it as "won\'t turn on, completely black" — go back and pick that path.',
    proHelp: 'If swapping chargers doesn\'t help and the phone still won\'t show any life after an hour plugged in, the charging port or battery may be damaged — time for a repair shop.',
    guide: { label: 'Full battery care guide', to: '/tools/battery-optimizer' },
  },

  fix_forceRestart: {
    kind: 'fix',
    icon: RotateCcw,
    title: 'Force-restart your phone',
    why: 'Phones sometimes get stuck on a bad instruction — like a person freezing mid-sentence. A force-restart is a safe, harmless way to "wake them up." Nothing on your phone gets erased.',
    steps: [
      'iPhone 8 or newer: Press and release Volume Up. Press and release Volume Down. Then hold the Side (power) button until you see the Apple logo. Keep holding — it takes about 10 seconds.',
      'iPhone 7: Hold Volume Down and the Sleep/Wake button together for about 10 seconds.',
      'iPhone 6s or older: Hold the Home button and the top (or side) button together for about 10 seconds.',
      'Android (most): Hold Power + Volume Down together for 10–20 seconds until the screen goes off and the logo appears.',
      'Samsung Galaxy: Same as above — Power + Volume Down for 10 seconds.',
      'After the logo appears, let go and wait a minute for the phone to finish starting up.',
    ],
    ifFails: 'If holding the buttons does nothing, plug the phone into a charger for 15 minutes and try again. If it still won\'t force-restart, the battery may be fully dead — charge for 30 minutes first.',
    proHelp: 'If you\'ve tried force-restart several times and the phone still freezes on the logo, a professional repair is likely needed. It could be a failed update that needs recovery mode.',
    guide: { label: 'When to call a TekSure guide', to: '/find-a-guide' },
  },

  fix_tryCharger: {
    kind: 'fix',
    icon: Zap,
    title: 'Swap the charger, cable, and outlet',
    why: 'Cables and chargers fail quietly all the time — the wire breaks inside where you can\'t see it. It\'s the most common "dead phone" cause and the cheapest to fix.',
    steps: [
      'Borrow a charger and cable from a friend, family member, or neighbour — one that you KNOW is working.',
      'Try a different wall outlet — plug a lamp in first to confirm the outlet has power.',
      'Clean the charging port on the phone. Turn it off, and use a wooden toothpick to gently clear any pocket lint out. Never use metal.',
      'Plug in with the known-good charger and wait a full 5 minutes before expecting anything.',
      'If it\'s an iPhone with a Lightning port or USB-C, and you see a question mark or "accessory not supported" message, the port is fine but that specific cable is bad.',
    ],
    ifFails: 'If a confirmed-good charger still doesn\'t bring the phone to life, the charging port or battery has failed. Move on to the repair option.',
    proHelp: 'A bent or melted charging port, a burnt smell, or visible damage around the port means stop trying to charge it and take it to a repair shop.',
    guide: { label: 'Find a TekSure tech near you', to: '/tech-help-near-me' },
  },

  fix_repairNeeded: {
    kind: 'fix',
    icon: Wrench,
    title: 'Your phone likely needs a professional repair',
    why: 'You\'ve ruled out the two easy causes — dead battery and bad charger. What\'s left is usually a hardware issue: the battery, the power button, or the charging port. These need a shop.',
    steps: [
      'Before giving up: try one more charge, with a different charger, for a full 2 hours. Some deeply-drained batteries take that long to wake.',
      'Make a list of anything important on the phone: photos, contacts, notes. If you have iCloud or Google backup turned on, you likely already have them saved.',
      'Check if your phone is still under warranty — iPhones have a 1-year Apple warranty; many Samsungs have similar. Check the purchase date.',
      'Visit the manufacturer first (Apple Store, Samsung, Google) — they use original parts. Third-party shops are cheaper but quality varies.',
      'Ask for a price estimate before they start. Battery replacements are usually $60–$100. A charging port is often $80–$130. Full logic-board repairs can be $300+.',
    ],
    ifFails: 'If the repair cost is more than half the price of a new phone, it\'s usually smarter to replace. Check TekSure\'s Device Trade-In Estimator to see what your old phone is worth as-is.',
    proHelp: 'Always go pro for anything involving the battery or the phone\'s insides. DIY repair kits exist but lithium batteries are dangerous if punctured.',
    guide: { label: 'Device trade-in estimator', to: '/tools/trade-in-estimator' },
  },

  /* ── 2. Hot phone ────────────────────────────────────────── */
  hot: {
    kind: 'question',
    title: 'When is your phone hot?',
    subtitle: 'The answer points to very different causes.',
    icon: Thermometer,
    options: [
      { label: 'Only when it\'s charging',          emoji: '🔌',  desc: 'Cool when unplugged, hot while charging', next: 'fix_hotCharging' },
      { label: 'Only when I\'m using it',           emoji: '🎮',  desc: 'Videos, games, camera — then it heats',  next: 'fix_hotUsing' },
      { label: 'All the time — even sitting still', emoji: '😰',  desc: 'Warm even when I\'m not touching it',    next: 'fix_hotAlways' },
    ],
  },

  fix_hotCharging: {
    kind: 'fix',
    icon: Thermometer,
    title: 'Phone hot while charging — here\'s how to cool it down',
    why: 'All phones warm up while charging — it\'s normal. Hot (uncomfortable to hold) means the phone can\'t shed heat fast enough, usually because of the spot it\'s in, the charger, or using it while charging.',
    steps: [
      'Move it off the bed, couch, rug, or any soft fabric — those trap heat. A hard surface like a table or counter is best.',
      'Take the case off while it\'s charging. Many cases are little ovens.',
      'Don\'t use the phone while it\'s charging, especially not for video, navigation, or games.',
      'Stop using wireless chargers for now — they run hotter than cable chargers.',
      'Use the original charger that came with your phone. Cheap third-party chargers are a common heat culprit.',
      'If the room is hot (direct sun, car dashboard), move the phone somewhere cooler.',
    ],
    ifFails: 'If it\'s still uncomfortable after trying the above, the battery may be swelling or failing. Feel the back — if it\'s bulging even slightly, stop charging and see a pro today.',
    proHelp: 'Smoke, burning smell, or the phone getting TOO hot to touch = unplug it immediately and set it on a non-flammable surface. This is a battery safety issue.',
    guide: { label: 'Battery optimizer', to: '/tools/battery-optimizer' },
  },

  fix_hotUsing: {
    kind: 'fix',
    icon: Thermometer,
    title: 'Phone heats up during use — these apps are the usual suspects',
    why: 'Heavy apps (video streaming, games, GPS navigation, video calls) make the phone\'s brain work hard, and a hard-working brain gives off heat. Background apps pile on to make it worse.',
    steps: [
      'Close all apps you\'re not using. iPhone: swipe up from the bottom and flick away each app card. Android: tap the square/recent-apps button and swipe them away.',
      'Lower the screen brightness — a bright screen is a big heat source.',
      'Turn off Location Services for apps that don\'t need it. iPhone: Settings → Privacy → Location Services. Android: Settings → Location.',
      'Update your apps — old versions often use more battery and run hotter. App Store or Play Store → your profile → Updates.',
      'If it\'s hot during GPS navigation, clip it to an air-conditioning vent while you drive. Direct sun on the phone is a killer.',
      'Give it a 5-minute break if it\'s really hot — sit it on a cool counter, screen-down.',
    ],
    ifFails: 'If closing apps doesn\'t help and one specific app keeps making it hot, that app likely has a bug — check for an update, or uninstall and reinstall it.',
    proHelp: 'If the phone gets hot in under 5 minutes of light use (texting, email), the battery is wearing out. Battery replacement is usually the fix.',
    guide: { label: 'App cleanup & battery guide', to: '/tools/app-cleanup' },
  },

  fix_hotAlways: {
    kind: 'fix',
    icon: Thermometer,
    title: 'Phone is warm even when you\'re not using it — something is running in the background',
    why: 'A phone at rest should feel room-temperature. Always-warm usually means a rogue app (or malware) is working nonstop, or the phone is stuck in a loop after a bad update.',
    steps: [
      'Restart the phone. Hold the power button, slide to power off, wait 30 seconds, turn it back on.',
      'Check for iOS / Android updates. iPhone: Settings → General → Software Update. Android: Settings → System → System Update. Install anything waiting.',
      'Check which app is using the most battery. iPhone: Settings → Battery. Android: Settings → Battery → Battery Usage. If one app is at 30%+, that\'s your culprit.',
      'Force-quit that app, then uninstall and reinstall it.',
      'Look for any apps you don\'t recognize. If you spot one, uninstall it — it may have been installed accidentally or by malware.',
      'Run a safety scan if you\'re on Android: Play Store → profile → Play Protect → Scan.',
    ],
    ifFails: 'If restart, updates, and a battery check don\'t reveal a culprit, back up your phone and do a factory reset — that clears any background glitch. It\'s nuclear but effective.',
    proHelp: 'A warm phone combined with random pop-ups, a drained battery by noon, or strange apps installing themselves = likely malware. Get professional help.',
    guide: { label: 'Scan for phone malware', to: '/tools/cyber-scorecard' },
  },

  /* ── 3. Battery drain ────────────────────────────────────── */
  batteryDrain: {
    kind: 'question',
    title: 'When did the battery start draining fast?',
    icon: Battery,
    options: [
      { label: 'Right after a software update',       emoji: '🆕',  desc: 'It was fine before the update',        next: 'fix_drainAfterUpdate' },
      { label: 'Gradually over the past year or two', emoji: '📉',  desc: 'It\'s been getting worse for a while', next: 'fix_drainAging' },
      { label: 'Just started in the last few days',   emoji: '⚡',  desc: 'Sudden change — something is new',     next: 'batteryDrain_newApps' },
    ],
  },
  batteryDrain_newApps: {
    kind: 'question',
    title: 'Did you install any new apps recently?',
    options: [
      { label: 'Yes, a new app or two',               emoji: '📲',  desc: 'One of them may be the culprit',       next: 'fix_drainNewApp' },
      { label: 'No — nothing new',                    emoji: '🤷',  desc: 'Then it\'s likely a background issue', next: 'fix_drainBackground' },
    ],
  },

  fix_drainAfterUpdate: {
    kind: 'fix',
    icon: Battery,
    title: 'Post-update battery drain — give it 48 hours, then tune',
    why: 'After any iOS or Android update, your phone re-indexes photos, re-checks apps, and rebuilds internal files. For the first day or two this is heavy work — battery drops faster than normal and then recovers.',
    steps: [
      'Plug in overnight for two nights. Let the phone finish its background housekeeping.',
      'Check Settings → Battery. Look at what\'s using the most battery. If it says "Home & Lock Screen" or "Photos" at the top, re-indexing is still happening — be patient.',
      'After 48 hours, if it\'s still bad, update all your apps. Old apps may be incompatible with the new phone software.',
      'Turn Background App Refresh off for apps that don\'t need it. iPhone: Settings → General → Background App Refresh.',
      'Reduce screen brightness or enable Auto-Brightness. iPhone: Settings → Accessibility → Display. Android: Settings → Display.',
      'Turn off "Raise to Wake" and "Always-On Display" temporarily to compare.',
    ],
    ifFails: 'If drain is still awful after a week, back up the phone and try a reset: Settings → General → Transfer or Reset → Reset → Reset All Settings (this does NOT erase your data, just preferences).',
    proHelp: 'If the battery percentage jumps around — like 60% then 15% in seconds — the battery itself is failing and needs replacement. Apple and Samsung do this for $60–$100.',
    guide: { label: 'Battery optimizer', to: '/tools/battery-optimizer' },
  },

  fix_drainAging: {
    kind: 'fix',
    icon: Battery,
    title: 'Your battery is wearing out — here\'s how to confirm and what to do',
    why: 'Phone batteries are good for roughly 500 full charges (about 2 years of daily use). After that they hold less and less — it\'s physics, not your fault. The fix is a cheap new battery, not a new phone.',
    steps: [
      'On iPhone: Settings → Battery → Battery Health. If "Maximum Capacity" is below 80%, your battery is officially worn out.',
      'On Android (Samsung): Settings → Battery → More → Battery information. Look for "Battery life" or use the code *#*#4636#*#* in the phone dialler to see battery health.',
      'If replacement is justified (below 80%), book an appointment with Apple, Samsung, or a trusted repair shop.',
      'Meanwhile: turn on Low Power Mode (iPhone) or Battery Saver (Android) all the time.',
      'Lower screen brightness and reduce screen timeout (Settings → Display).',
      'Get a portable battery pack to carry in your bag — $20–$40 and a life-saver until replacement.',
    ],
    ifFails: 'If the battery test shows healthy (above 85%) but drain is still bad, the problem is software not hardware — treat it as "drain just started" and check background apps.',
    proHelp: 'If the battery is bulging (back panel or screen lifting), stop using the phone. A swollen battery can catch fire. Take it to a pro today.',
    guide: { label: 'Device trade-in vs. repair', to: '/tools/trade-in-estimator' },
  },

  fix_drainNewApp: {
    kind: 'fix',
    icon: Battery,
    title: 'A new app is the likely culprit — here\'s how to catch it',
    why: 'New apps often run background location, sync, or notifications the minute you install them. Even "small" apps can chew through a battery if they\'re poorly made or overly aggressive.',
    steps: [
      'Settings → Battery. Look at the list of apps — the worst offender is at the top.',
      'If a new app is high on the list, tap it and see what it\'s doing. Turn off "Background App Refresh" for it.',
      'Check its location permission. Settings → Privacy → Location Services (iPhone) or Settings → Location (Android). Change from "Always" to "While Using" or "Never" for apps that don\'t need location.',
      'Check notifications. Settings → Notifications. Turn off alerts for apps that don\'t matter — every notification wakes the phone.',
      'If one app stands out as using 40%+ of your battery, uninstall it. Try a different app for the same purpose.',
      'Restart the phone after making these changes.',
    ],
    ifFails: 'If no app stands out but drain is still bad, the app may be syncing in the background. Turn on Airplane Mode for an hour — if drain stops, an app is pinging the internet too often.',
    proHelp: 'If uninstalling suspicious apps doesn\'t fix it and you see pop-up ads or new apps installed you didn\'t add, you may have malware — get a professional to scan.',
    guide: { label: 'App cleanup wizard', to: '/tools/app-cleanup' },
  },

  fix_drainBackground: {
    kind: 'fix',
    icon: Battery,
    title: 'Hunt the silent background battery eater',
    why: 'Something is running even when your phone looks idle. The most common causes are push email, constant location updates, and notifications bombardment.',
    steps: [
      'Settings → Battery. Note which 3 apps are using the most power. Those are your suspects.',
      'Turn off Background App Refresh for everything except truly essential apps (your email, maybe WhatsApp). iPhone: Settings → General → Background App Refresh.',
      'Turn off Location Services for apps that don\'t need it. Weather, social media, games rarely need your exact location.',
      'Set email to "Fetch every 30 minutes" instead of "Push." Settings → Mail → Accounts → Fetch New Data.',
      'Turn off Wi-Fi Assist / Smart Network Switch — it ping-pongs between WiFi and cellular and burns battery.',
      'Restart the phone after changing settings.',
    ],
    ifFails: 'If those changes help a little but not enough, back up and do a "Reset All Settings" (not a full erase). This clears lingering background glitches.',
    proHelp: 'If the phone is still draining fast after a settings reset, have a pro check for malware or a failing battery.',
    guide: { label: 'Battery optimizer', to: '/tools/battery-optimizer' },
  },

  /* ── 4. Screen broken / touch ────────────────────────────── */
  screen: {
    kind: 'question',
    title: 'What\'s happening with the screen?',
    icon: Smartphone,
    options: [
      { label: 'Glass is cracked',                  emoji: '💥',  desc: 'Visible cracks or shattered surface',    next: 'fix_crackedGlass' },
      { label: 'Touch doesn\'t work',               emoji: '👆',  desc: 'I tap but nothing responds',              next: 'screen_touch' },
      { label: 'Screen is black but I hear sounds', emoji: '🔈',  desc: 'It rings but the screen stays dark',      next: 'fix_displayDead' },
      { label: 'Weird lines, spots, or colours',    emoji: '🌈',  desc: 'Coloured lines or dead pixels',           next: 'fix_displayDead' },
    ],
  },
  screen_touch: {
    kind: 'question',
    title: 'Does touch work in some places but not others?',
    options: [
      { label: 'Yes — some spots respond, others don\'t', emoji: '📍',  desc: 'Partial touch failure',           next: 'fix_touchPartial' },
      { label: 'No — nothing responds anywhere',          emoji: '❌',  desc: 'Whole screen is dead to touch',   next: 'fix_touchDead' },
    ],
  },

  fix_crackedGlass: {
    kind: 'fix',
    icon: Smartphone,
    title: 'Your glass is cracked — here\'s how to handle it safely',
    why: 'A cracked screen is the #1 repair on the planet. As long as the phone still works, you have time to decide whether to fix or replace. But cracks only get worse — and exposed glass can cut your finger.',
    urgent: 'Put a screen protector or clear packing tape over the cracks right now to keep glass shards from cutting you or getting in your eye.',
    steps: [
      'Put a piece of clear packing tape or a cheap screen protector over the crack immediately to stop shards coming loose.',
      'Back up your phone tonight in case the screen fails. iPhone: Settings → your name → iCloud → iCloud Backup. Android: Settings → System → Backup.',
      'Get a price from the manufacturer first (Apple Store, Samsung). Screens are typically $150–$330.',
      'Compare to a local repair shop — $80–$200 depending on the model. Quality varies; read reviews.',
      'Decide: if the phone is more than 3 years old and repair is $200+, trade-in money toward a new phone may be better.',
      'Avoid DIY kits — the screens are fragile, the tools are specific, and cracking the new one ruins the fix.',
    ],
    ifFails: 'If the phone is also not responding to touch after the crack, the digitizer (touch layer) is damaged too — that\'s still fixable but slightly pricier.',
    proHelp: 'Always go pro for a screen repair. A bad replacement can damage the camera, Face ID, or the waterproof seal.',
    guide: { label: 'Should I repair or replace?', to: '/tools/trade-in-estimator' },
  },

  fix_touchPartial: {
    kind: 'fix',
    icon: Smartphone,
    title: 'Touch works in some places but not others — try these before paying',
    why: 'Partial touch failure usually means: dirty screen, bad screen protector, a buggy app, or a digitizer on its way out. The first three are free fixes.',
    steps: [
      'Turn the phone off, clean the screen thoroughly with a soft dry cloth (no liquids). Fingerprints and grime cause dead zones.',
      'If you have a screen protector, peel it off carefully. Cheap ones frequently create dead zones in the middle.',
      'Take the phone case off — a warped case can press on the screen and cause phantom touches or dead spots.',
      'Restart the phone. Hold power, slide to power off, wait 30 seconds, power back on.',
      'Try the touch test: open the Calculator and tap every single number in order. Note which areas fail.',
      'If only one app has touch issues, that app has a bug — update or reinstall it.',
    ],
    ifFails: 'If touch is still patchy after cleaning, restart, and removing the protector/case, the digitizer is wearing out — same fix as a cracked screen (full screen replacement).',
    proHelp: 'If a big stripe of the screen doesn\'t respond or the phone registers ghost touches (opens things by itself), the digitizer is failing — see a pro.',
    guide: { label: 'Find a trusted repair shop', to: '/tech-help-near-me' },
  },

  fix_touchDead: {
    kind: 'fix',
    icon: Smartphone,
    title: 'Entire screen is dead to touch — force restart first',
    why: 'When the whole screen stops responding, it\'s usually a frozen phone, not a broken one. A force-restart fixes it about 7 times out of 10.',
    steps: [
      'Force-restart the phone — since touch doesn\'t work, you\'ll need the button combo.',
      'iPhone 8+: Press and release Volume Up, then Volume Down, then hold the Side button about 10 seconds until the logo appears.',
      'Samsung / Android: Hold Power + Volume Down together for 10–20 seconds.',
      'Once it restarts, open an app and test touch across the whole screen.',
      'If touch is back: update iOS / Android. The freeze may have been caused by a bug that updates fix.',
      'If you have a screen protector, peel it off and retest — a poorly-stuck protector can block touch entirely.',
    ],
    ifFails: 'If force-restart doesn\'t bring touch back, this is a digitizer (touch layer) hardware failure. It\'s the same fix as a cracked screen — full screen replacement.',
    proHelp: 'Confirm it\'s a hardware issue by trying to use Siri / Google Assistant with voice — if the phone responds to voice but not touch, the touch layer is dead.',
    guide: { label: 'Find help near you', to: '/tech-help-near-me' },
  },

  fix_displayDead: {
    kind: 'fix',
    icon: Smartphone,
    title: 'Screen display is failing — likely a hardware fix',
    why: 'If you hear sounds but see nothing, or the screen has weird lines and spots, the display itself (not the glass) is damaged. This often happens after a drop, sometimes after water, sometimes from age.',
    steps: [
      'Force-restart first — it rules out a software freeze. iPhone 8+: Volume Up + Volume Down + hold Side button. Android: Power + Volume Down, 15 seconds.',
      'Plug the phone into a charger for 10 minutes and try again.',
      'If you have a spare Lightning-to-HDMI or USB-C-to-HDMI adapter, hook it to a TV — if the TV shows your phone screen, the internal display is the problem, not the phone\'s brain.',
      'Back up the phone before repair. iPhone: Finder or iTunes on a computer. Android: Google Drive / Samsung Cloud.',
      'Get a repair quote from the manufacturer first — LCD/OLED replacement is $150–$330.',
    ],
    ifFails: 'If the phone fell into water and the screen developed lines or spots a day or two later, that\'s water damage spreading — the sooner to a shop, the better.',
    proHelp: 'Screen display repairs are not DIY unless you\'re experienced. Take it to a professional — manufacturer first, then a reputable third-party shop.',
    guide: { label: 'Find a trusted tech', to: '/find-a-guide' },
  },

  /* ── 5. Slow / frozen ────────────────────────────────────── */
  slow: {
    kind: 'question',
    title: 'Is it always slow, or frozen right this second?',
    icon: Zap,
    options: [
      { label: 'Frozen right now — won\'t respond',  emoji: '🧊',  desc: 'Apps won\'t open, screen stuck',        next: 'fix_forceRestart' },
      { label: 'Slow all the time',                  emoji: '🐌',  desc: 'Everything takes forever',              next: 'slow_age' },
    ],
  },
  slow_age: {
    kind: 'question',
    title: 'How old is the phone?',
    subtitle: 'Phone age is the biggest clue here.',
    options: [
      { label: 'Less than 2 years',                 emoji: '🆕',  desc: 'Shouldn\'t be this slow yet',           next: 'fix_slowNewPhone' },
      { label: '2 to 4 years old',                  emoji: '📅',  desc: 'Middle-aged — still fixable',           next: 'fix_slowMedium' },
      { label: 'More than 4 years old',             emoji: '👴',  desc: 'Showing its age',                       next: 'fix_slowOld' },
    ],
  },

  fix_slowNewPhone: {
    kind: 'fix',
    icon: Zap,
    title: 'Your phone is young — slowness is usually software, not the phone',
    why: 'A phone under 2 years old has plenty of brain power. Slowness comes from clogged storage, a rogue app, or a software update that needs to finish its background work.',
    steps: [
      'Restart the phone first. Hold power, slide to power off, wait 30 seconds, power on. Many "slow" phones snap back after a restart.',
      'Check storage. iPhone: Settings → General → iPhone Storage. Android: Settings → Storage. If free space is under 2 GB, that\'s making it slow.',
      'Delete big stuff: old videos, unused apps, downloaded podcasts. TekSure has a storage tool that walks you through it.',
      'Update iOS / Android — Settings → General → Software Update. Bug-fix updates often solve slowness.',
      'Close all apps. iPhone: swipe up from bottom, flick cards away. Android: tap recent-apps button, swipe away.',
      'Check which app is slowing you down. Settings → Battery. The app at the top of "Battery Usage" is often also the slow-down culprit.',
    ],
    ifFails: 'If it\'s still slow, back up and do a factory reset — that returns it to new-phone speed. It\'s drastic but works in about 20 minutes.',
    proHelp: 'If resetting the phone doesn\'t help, the storage (flash memory) may be failing — rare on young phones, but it happens. Warranty should cover it.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  fix_slowMedium: {
    kind: 'fix',
    icon: Zap,
    title: 'Middle-aged phone — a clean-up will give it 6–12 more good months',
    why: 'Between 2 and 4 years old, phones slow down because storage fills up, apps have grown heavier, and the battery can\'t push enough power for fast speeds. All fixable without buying new.',
    steps: [
      'Storage cleanup first. Settings → Storage (Android) or Settings → General → iPhone Storage. Aim for at least 5 GB free.',
      'Uninstall apps you haven\'t used in 3 months — they still take up space and often run in the background.',
      'Clear the cache for your top 5 apps. Android: Settings → Apps → pick the app → Storage → Clear Cache. iPhone: uninstall and reinstall the app to clear its cache.',
      'Check battery health — iPhone: Settings → Battery → Battery Health. Below 80% means the battery is slowing down the processor to protect itself. A $60 battery replacement feels like a new phone.',
      'Update to the latest iOS / Android — unless the update is specifically flagged as slow on your model (a quick Google search for "iOS 18 on iPhone X slow" tells you).',
      'Turn off visual effects. iPhone: Settings → Accessibility → Motion → Reduce Motion. Android: Settings → Developer Options → Animation scales (0.5x).',
    ],
    ifFails: 'If a cleanup and battery replacement don\'t give it new life, the phone is simply ready to retire. Trade-in value is still reasonable at this age.',
    proHelp: 'A battery replacement at this age is almost always worthwhile — $60–$100 for what feels like a brand-new phone.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  fix_slowOld: {
    kind: 'fix',
    icon: Zap,
    title: 'A 4+ year old phone — cleanup helps, but upgrade is near',
    why: 'At this age, slowdown is the phone\'s natural end. Manufacturers stop supporting old models with security updates, new apps won\'t install, and the battery is tired. A good cleanup buys time, but plan ahead.',
    steps: [
      'Free up storage to at least 5 GB. Delete photos and videos you\'ve already backed up, old apps, and downloaded music.',
      'Uninstall the 5 heaviest apps you rarely use. Social media apps are usually the worst — Facebook, Instagram, TikTok.',
      'Turn off every animation and visual effect. Settings → Accessibility → Motion → Reduce Motion (iPhone).',
      'Update iOS / Android ONLY if your phone is still supported. If it says "your device is no longer supported," don\'t update — but know you won\'t get security fixes any more.',
      'Book a battery replacement if it\'s been more than 3 years — usually $60–$100, often the single biggest speed boost.',
      'Start thinking about replacement. Budget, research, and trade-in value. TekSure\'s Device Chooser can help you pick a new phone.',
    ],
    ifFails: 'If the phone is no longer getting security updates AND cleanup hasn\'t helped, it\'s time. Using an unsupported phone for banking or email is a genuine risk.',
    proHelp: 'If your phone won\'t install basic security updates and you rely on it for banking, email, or 2-factor codes, get help picking a replacement.',
    guide: { label: 'Device chooser — find your next phone', to: '/tools/device-chooser' },
  },

  /* ── 6. Calls ────────────────────────────────────────────── */
  calls: {
    kind: 'question',
    title: 'What\'s happening when you try to call?',
    icon: Phone,
    options: [
      { label: 'No signal bars at all',              emoji: '📶',  desc: '"No Service" or empty bars',             next: 'fix_noSignal' },
      { label: 'Have bars, but calls drop',          emoji: '📞',  desc: 'Connects then cuts out',                 next: 'fix_callsDrop' },
      { label: 'Can\'t hear or they can\'t hear me', emoji: '🔇',  desc: 'The call connects but audio fails',      next: 'fix_callAudio' },
      { label: 'One specific person can\'t reach me', emoji: '🚫',  desc: 'Could be a blocked number or spam filter', next: 'fix_blockedNumber' },
    ],
  },

  fix_noSignal: {
    kind: 'fix',
    icon: Phone,
    title: 'No signal bars — try these in order',
    why: 'Most "no service" cases are a momentary glitch between the phone and the tower. A quick toggle fixes it 80% of the time; the rest point to a carrier or hardware issue.',
    steps: [
      'Turn Airplane Mode on, wait 30 seconds, turn it off. This forces the phone to reconnect to the nearest tower.',
      'Restart the phone — power off fully, wait 30 seconds, power back on.',
      'Check if you\'re in a dead zone — step outside, walk away from thick walls, or drive a minute. Basements and steel buildings block signal.',
      'Ask someone near you with the same carrier if they have signal. If nobody does, it\'s a carrier outage — check your carrier\'s Twitter / X feed.',
      'Check your SIM card. Settings → General → About (iPhone) or Settings → About phone → Status (Android). If it says "No SIM," the card has popped loose — power off, remove, reinsert.',
      'If you have a Dual SIM or eSIM, make sure the right line is enabled. Settings → Cellular / Mobile Data.',
    ],
    ifFails: 'If still no signal after a restart and a SIM reseat, call your carrier from another phone. They can check tower status and re-provision your line.',
    proHelp: 'If the phone says "SOS only" or "Emergency only" even with a valid account, your SIM may be damaged — the carrier will send a free replacement.',
    guide: { label: 'Phone plan comparator', to: '/tools/phone-plan-comparator' },
  },

  fix_callsDrop: {
    kind: 'fix',
    icon: Phone,
    title: 'Calls drop mid-conversation — here\'s what to try',
    why: 'Dropping calls usually means your phone is jumping between towers (or WiFi calling) without a clean handoff, or the signal where you are is too weak to hold the line.',
    steps: [
      'Notice WHERE calls drop — same room every time? Move a few feet from windows or thick walls and test again.',
      'Turn off WiFi Calling temporarily. Settings → Phone → WiFi Calling. If your home WiFi is weak, WiFi calling actually makes things worse.',
      'Turn off "VoLTE / HD Voice" and turn it back on after 10 seconds. Settings → Cellular → Voice & Data.',
      'Update the phone. Settings → General → Software Update. Carriers push "carrier settings updates" separately too — accept any that appear.',
      'Remove your SIM card, wait 30 seconds, put it back. Power off first.',
      'If calls drop only in your home, a signal booster (femtocell) from your carrier is often free — ask them.',
    ],
    ifFails: 'If dropped calls are everywhere, not just at home, the phone\'s cellular antenna may be failing — a repair or warranty claim fixes it.',
    proHelp: 'If your carrier confirms their network is fine but your phone keeps dropping, it\'s the phone — book a pro look.',
    guide: { label: 'Is a cheaper plan right for you?', to: '/tools/phone-plan-comparator' },
  },

  fix_callAudio: {
    kind: 'fix',
    icon: Volume2,
    title: 'You can\'t hear, or they can\'t hear you',
    why: 'The call connects so the signal is fine — it\'s the microphone, speaker, or Bluetooth hijacking the audio. These fixes work in a minute.',
    steps: [
      'On the call, tap "Speaker" and see if audio works that way. If speaker works but earpiece doesn\'t, the earpiece is blocked by lint — use a soft brush to clean it.',
      'Check if Bluetooth is stealing the audio. Settings → Bluetooth. Disconnect your car, earbuds, or speaker if they\'re still connected from earlier.',
      'Test your microphone — open Voice Memos or the Recorder app and record yourself. If you hear your voice back, the mic works.',
      'Clean the mic holes with a soft-bristle toothbrush or a burst of canned air. Lint in the mic hole is the #1 cause.',
      'Remove the phone case — some cases cover the mic or speaker by mistake.',
      'Restart the phone after cleaning.',
    ],
    ifFails: 'If the mic test fails (can\'t hear yourself in Voice Memos), the mic is dead. That\'s a cheap repair — usually $40–$70.',
    proHelp: 'If speaker + earpiece + mic all work but people still can\'t hear you, it\'s a network/VoLTE issue — the carrier can usually fix it from their end.',
    guide: { label: 'Find a trusted tech', to: '/find-a-guide' },
  },

  fix_blockedNumber: {
    kind: 'fix',
    icon: Phone,
    title: 'One person can\'t reach you — likely a block or spam filter',
    why: 'If just ONE specific number can\'t reach you, the problem is on your phone, not the network. Usually a silent-mode setting, an accidental block, or your spam filter being over-zealous.',
    steps: [
      'Check your blocked list. iPhone: Settings → Phone → Blocked Contacts. Android: Phone app → Settings → Blocked numbers. Remove the number if it\'s there.',
      'Check if "Silence Unknown Callers" is on — it sends anyone not in your contacts straight to voicemail. iPhone: Settings → Phone → Silence Unknown Callers.',
      'On Android, check your call-screening or spam filter. Phone app → Settings → Spam and Call Screen.',
      'Add the person to your contacts. Once saved, the spam filter will ignore them.',
      'Ask them to send a text first instead of calling — texts bypass most spam filters.',
      'If you recently had them blocked (even briefly) and unblocked, restart the phone to fully clear the block.',
    ],
    ifFails: 'If none of the above works, have the person try calling someone else with the same carrier as you. If THOSE calls also fail, the problem is their carrier → yours at the network level.',
    proHelp: 'Call your carrier and say "one specific number can\'t reach me — can you check if it\'s being blocked at the network level?" They can see and fix this.',
    guide: { label: 'Robocall blocker', to: '/tools/robocall-blocker' },
  },

  /* ── 7. Sound / audio ────────────────────────────────────── */
  sound: {
    kind: 'question',
    title: 'When do you have no sound?',
    icon: Volume2,
    options: [
      { label: 'On phone calls',                     emoji: '📞',  desc: 'Can\'t hear the caller',                next: 'fix_soundCalls' },
      { label: 'Playing music or videos',            emoji: '🎵',  desc: 'YouTube, Spotify, Apple Music silent',  next: 'sound_playback' },
      { label: 'Ringer — I don\'t hear calls or texts', emoji: '🔕',  desc: 'Silent when people call or text',    next: 'fix_ringerSilent' },
    ],
  },
  sound_playback: {
    kind: 'question',
    title: 'Are you using headphones, earbuds, or a Bluetooth speaker?',
    options: [
      { label: 'Yes — but audio is silent or bad',  emoji: '🎧',  desc: 'Bluetooth or wired accessory issue',    next: 'fix_soundBluetooth' },
      { label: 'No — just the phone\'s speaker',    emoji: '📱',  desc: 'Phone speaker itself is silent',        next: 'fix_soundSpeaker' },
    ],
  },

  fix_soundCalls: {
    kind: 'fix',
    icon: Volume2,
    title: 'No sound on calls — clean the earpiece and check audio routing',
    why: 'The earpiece speaker is tiny and gets clogged with pocket lint, skin oil, and dust. Also: audio may be routed to a Bluetooth device you forgot was paired.',
    steps: [
      'While on a call (try calling a family member), tap the "Speaker" button. If speaker works, the earpiece is clogged or blown.',
      'Clean the earpiece grille with a soft-bristle toothbrush — gentle strokes, screen up. A burst of canned air helps.',
      'Check Bluetooth. Settings → Bluetooth. Disconnect anything not in use — your car, old earbuds, a speaker across the room.',
      'Check call volume. Press volume-up during a call, not from the home screen. The phone has separate volumes for ringer and call audio.',
      'Restart the phone — clears a frozen audio driver.',
      'If nothing works, test with headphones. If you hear fine through headphones, the earpiece is dead and needs replacement.',
    ],
    ifFails: 'If speaker-on-call also sounds quiet or muffled, the issue is software (an audio bug) not hardware. Update iOS / Android and try again.',
    proHelp: 'A dead earpiece is a cheap repair ($40–$70) — cheaper than most screens and worth doing.',
    guide: { label: 'Accessibility — volume and sound help', to: '/tools/accessibility-check' },
  },

  fix_soundBluetooth: {
    kind: 'fix',
    icon: Volume2,
    title: 'Bluetooth or headphone audio issue — reset the connection',
    why: 'Bluetooth gets confused when the phone thinks it\'s connected but the other device isn\'t listening, or when two devices fight over the audio. Forget-and-reconnect fixes most of it.',
    steps: [
      'Unplug or turn off the accessory. Toggle Bluetooth off then on. Settings → Bluetooth.',
      '"Forget" the device on your phone and re-pair. Settings → Bluetooth → tap the "i" next to the device name → Forget This Device.',
      'Check the other device\'s volume. Some Bluetooth speakers have their own volume separate from the phone.',
      'For wired headphones: push the plug in firmly — sometimes it looks seated but isn\'t. Clean the headphone port / Lightning port with a wooden toothpick.',
      'Try the headphones on a different device. If they\'re silent there too, the headphones are broken, not the phone.',
      'Restart the phone and try the pairing again from scratch.',
    ],
    ifFails: 'If no Bluetooth device works, reset all network settings. iPhone: Settings → General → Transfer or Reset → Reset → Reset Network Settings. You\'ll need to re-enter WiFi passwords.',
    proHelp: 'If even a wired 3.5mm headphone doesn\'t play audio (where available), the headphone jack is blown — a cheap repair.',
    guide: { label: 'Bluetooth troubleshooter', to: '/tools/bluetooth-troubleshooter' },
  },

  fix_soundSpeaker: {
    kind: 'fix',
    icon: Volume2,
    title: 'Speaker is silent — here\'s the checklist',
    why: 'Silent speaker is usually one of three things: Do Not Disturb on, Bluetooth still connected to something, or the speaker is physically blocked by a case or lint.',
    steps: [
      'Swipe down from the top right (iPhone) or top (Android) and check Do Not Disturb / Focus. Turn it off.',
      'Flip the ringer switch on the side of the iPhone — make sure it\'s not showing orange (silent).',
      'Check Bluetooth. Settings → Bluetooth. Disconnect anything not actively in use.',
      'Take off any case. Some cases block the speaker grille at the bottom.',
      'Clean the speaker grille gently with a soft toothbrush. Lint loves that spot.',
      'Test with a video or song — press volume up while it\'s playing.',
      'Restart the phone if sound is still silent.',
    ],
    ifFails: 'If music plays through headphones but not through the speaker, the speaker is dead. It\'s a common, cheap repair.',
    proHelp: 'If the speaker works but crackles or distorts, the speaker membrane is torn — same repair, also cheap.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  fix_ringerSilent: {
    kind: 'fix',
    icon: Volume2,
    title: 'Ringer is silent — it\'s almost always a settings switch',
    why: 'Missed-calls-because-ringer-silent is the #1 "broken phone" that isn\'t broken. A tiny switch, a Do Not Disturb schedule, or a Focus mode turned everything quiet.',
    steps: [
      'iPhone: Flip the little switch on the upper-left side. Orange = silent, flush = ring. If orange shows, flip it.',
      'Check volume. Press volume up a few times from the home screen (not in an app). "Ringer Volume" should appear.',
      'Check Do Not Disturb / Focus. iPhone: Control Center → the moon / Focus icon. Turn it off. Android: Settings → Sound → Do Not Disturb.',
      'Check "Change with Buttons" is on. iPhone: Settings → Sounds & Haptics → "Change with Buttons" toggled ON.',
      'Pick a ringtone that you can actually hear. Some default tones are too quiet. Settings → Sounds & Haptics → Ringtone.',
      'Test by calling your phone from another number.',
    ],
    ifFails: 'If the ringer is still silent after all that, but music plays fine, the issue is software. Restart the phone and try once more.',
    proHelp: 'If ringer is silent AND music is silent, skip to "phone speaker is silent" path.',
    guide: { label: 'Notification decoder', to: '/tools/notification-decoder' },
  },

  /* ── 8. Camera ───────────────────────────────────────────── */
  camera: {
    kind: 'question',
    title: 'What\'s happening with the camera?',
    icon: Camera,
    options: [
      { label: 'Black screen when I open the camera',  emoji: '⚫',  desc: 'Camera app opens but the view is dark', next: 'fix_cameraBlack' },
      { label: 'Photos come out blurry',               emoji: '🌫️',  desc: 'Can\'t focus, fuzzy, smudged look',   next: 'fix_cameraBlur' },
      { label: 'Camera app crashes or closes',         emoji: '💥',  desc: 'App kicks me out every time',          next: 'fix_cameraCrash' },
      { label: '"Cannot connect to camera" error',     emoji: '⚠️',  desc: 'Error message when I open it',         next: 'fix_cameraError' },
    ],
  },

  fix_cameraBlack: {
    kind: 'fix',
    icon: Camera,
    title: 'Black camera screen — usually a frozen app or a blocking app',
    why: 'When the camera view is black but the app is open, another app is holding the camera (Zoom, FaceTime, etc.), or the camera app itself is frozen.',
    steps: [
      'Close the camera app fully. iPhone: swipe up from the bottom and flick the camera card away. Android: tap recent-apps and swipe it away.',
      'Close any video-call app — Zoom, FaceTime, Google Meet, WhatsApp. They hold the camera even when backgrounded.',
      'Tap the flip-camera icon (little arrow with a circle) to switch from rear to front or vice versa. Sometimes only one is black — that tells you which lens.',
      'Restart the phone.',
      'Check if a screen protector or case is covering the camera lens — sounds silly, happens daily.',
      'Update iOS / Android. Camera bugs get patched often.',
    ],
    ifFails: 'If the rear camera is black but the front works fine (or vice versa), the camera itself has failed. It\'s a warranty or pro repair.',
    proHelp: 'If both cameras are black even after restart and app updates, the camera module or its cable is damaged — see a pro.',
    guide: { label: 'Find a trusted tech', to: '/find-a-guide' },
  },

  fix_cameraBlur: {
    kind: 'fix',
    icon: Camera,
    title: 'Blurry photos — clean the lens first (seriously)',
    why: 'Fingerprints, skin oil, and lint are the single biggest cause of blurry photos. Phone lenses touch your face, pocket, table, pocket again, all day long.',
    steps: [
      'Wipe the lens with a soft clean cloth. Not your shirt — a microfibre cloth or the corner of a clean T-shirt works.',
      'Look at the lens in bright light. If you see a smear or haze, it\'s still dirty — wipe again.',
      'Remove any case with a lens cutout — it may be sitting just slightly over the lens.',
      'In the camera app, tap the subject you want sharp. A yellow or white box appears — that tells the phone to focus there.',
      'Wait a second before pressing the shutter — if you\'re moving, photos blur.',
      'If the rear camera with wide/ultra-wide lenses has one blurry lens, try tapping between "1x" and "0.5x" or "3x" — only one lens may be the issue.',
    ],
    ifFails: 'If only one zoom level is blurry (usually the tele / zoom lens), that specific lens is damaged. The camera still works — just avoid zooming.',
    proHelp: 'If ALL photos are blurry no matter the lens or how still you hold the phone, the sensor itself has failed — a pro repair.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  fix_cameraCrash: {
    kind: 'fix',
    icon: Camera,
    title: 'Camera app keeps crashing — let\'s isolate the cause',
    why: 'A crashing camera usually means: not enough storage for new photos, a bad update, or a third-party camera app misbehaving.',
    steps: [
      'Check storage. If less than 500 MB free, the camera can\'t save a new photo and it quits. Free up space first.',
      'Close every other app. iPhone: swipe up and flick all cards away. Android: tap recents and "Close all."',
      'Open the built-in Camera app (not a third-party one like Halide or ProCam). If it works, the third-party app has the bug — update it or stop using it.',
      'Restart the phone.',
      'Update iOS / Android — camera crashes are frequently fixed in point releases.',
      'If the camera still crashes: reset all settings. iPhone: Settings → General → Transfer or Reset → Reset → Reset All Settings. This DOES NOT erase photos or apps.',
    ],
    ifFails: 'If the camera crashes even after a settings reset, back up and do a full factory reset. Extreme but effective.',
    proHelp: 'A consistently crashing camera after a factory reset points to hardware — camera module, cable, or logic board. Needs a pro.',
    guide: { label: 'Storage cleanup', to: '/tools/storage-cleanup' },
  },

  fix_cameraError: {
    kind: 'fix',
    icon: Camera,
    title: '"Cannot connect to camera" — try the restart ladder',
    why: 'That error usually means the camera software didn\'t wake up when you opened the app. A restart of the app (then the phone) fixes it most times.',
    steps: [
      'Force-close the camera app and reopen it.',
      'If that doesn\'t work, restart the phone. Hold power, slide to power off, wait 30 seconds, power on.',
      'Check for iOS / Android updates.',
      'Make sure the app (or the system) has camera permission. iPhone: Settings → Privacy → Camera. Android: Settings → Apps → [app] → Permissions.',
      'Test with a different camera app to rule out a single bad app.',
      'If you recently dropped the phone, a loose internal cable may be the cause — see a pro.',
    ],
    ifFails: 'If the error persists after all those, back up and do a factory reset. It\'s the last DIY step before professional help.',
    proHelp: 'Error after reset = hardware issue with the camera module or its ribbon cable. Repair cost is usually $80–$150.',
    guide: { label: 'Find a trusted tech', to: '/find-a-guide' },
  },

  /* ── 9. Restarts ─────────────────────────────────────────── */
  restart: {
    kind: 'question',
    title: 'When does your phone restart itself?',
    icon: RotateCcw,
    options: [
      { label: 'When I open a specific app',         emoji: '🎯',  desc: 'Same app every time',                   next: 'fix_restartApp' },
      { label: 'Randomly — no pattern',              emoji: '🎲',  desc: 'Could be any moment',                   next: 'restart_heat' },
    ],
  },
  restart_heat: {
    kind: 'question',
    title: 'Is the phone hot when it restarts?',
    options: [
      { label: 'Yes — hot to the touch',             emoji: '🔥',  desc: 'It\'s getting too warm',                next: 'fix_hotAlways' },
      { label: 'No — it\'s cool',                    emoji: '❄️',  desc: 'No heat, just random restarts',        next: 'fix_restartHardware' },
    ],
  },

  fix_restartApp: {
    kind: 'fix',
    icon: RotateCcw,
    title: 'One app is crashing the phone — uninstall and reinstall',
    why: 'If ONE app reliably causes a restart, that app has a bug or is incompatible with your phone. The fix is usually to get a fresh copy.',
    steps: [
      'Note which app does it. Close that app.',
      'Open App Store / Play Store and check for an update for that app. Install any that\'s waiting.',
      'If no update is available, uninstall and reinstall the app. Hold the icon → Remove App → Delete → reinstall from the store.',
      'Restart the phone BEFORE opening the app again.',
      'Open the app. If it still crashes the phone, it\'s incompatible with your iOS / Android version — wait for a patch or look for an alternative app.',
      'Check if the app needs an account login or permission grant — sometimes it crashes trying to access a blocked feature.',
    ],
    ifFails: 'If uninstall-and-reinstall doesn\'t help, the app is simply broken on your phone. Contact the app developer (their support email is in the App Store / Play Store listing) and use an alternative in the meantime.',
    proHelp: 'If multiple apps start crashing the phone after one specific update, the update itself is buggy — wait for the next iOS / Android point release.',
    guide: { label: 'App cleanup wizard', to: '/tools/app-cleanup' },
  },

  fix_restartHardware: {
    kind: 'fix',
    icon: RotateCcw,
    title: 'Random cool-phone restarts — usually a battery or system file',
    why: 'When a phone restarts at rest, without heat, it\'s often a battery that can\'t provide steady voltage, or a corrupted system file from a bad update.',
    steps: [
      'Update iOS / Android right away — most random-restart bugs are fixed in the next release.',
      'Check battery health. iPhone: Settings → Battery → Battery Health. If "Service" is listed or capacity is under 80%, the battery is the cause.',
      'Update all your apps. One incompatible app can trigger a system crash.',
      'Back up the phone, then: Reset All Settings (not erase). iPhone: Settings → General → Transfer or Reset → Reset → Reset All Settings.',
      'If restarts continue, back up and do a clean factory reset. That\'s the nuclear DIY option.',
      'If even a clean install has the same issue, it\'s hardware — likely the battery.',
    ],
    ifFails: 'A pattern of restart-while-charging or restart-when-moved suggests a loose battery connector inside. Needs a pro to reseat it.',
    proHelp: 'Random restarts that survive a factory reset = always a hardware repair. Usually battery replacement ($60–$100).',
    guide: { label: 'Device trade-in estimator', to: '/tools/trade-in-estimator' },
  },

  /* ── 10. Storage ─────────────────────────────────────────── */
  storage: {
    kind: 'question',
    title: 'What\'s hogging your storage?',
    icon: HardDrive,
    subtitle: 'The biggest space-eaters usually are photos, videos, or old apps.',
    options: [
      { label: 'Not sure — I just need more space',  emoji: '💾',  desc: 'Quick cleanup walkthrough',             next: 'fix_storageFree' },
      { label: 'Photos and videos',                   emoji: '📸',  desc: 'Too many pictures to count',            next: 'fix_storagePhotos' },
      { label: 'Apps are taking lots of room',       emoji: '📱',  desc: 'Long list of apps',                     next: 'fix_storageApps' },
      { label: 'Can\'t install an update or new app', emoji: '🚫',  desc: '"Not enough storage" blocking me',      next: 'fix_storageUpdates' },
    ],
  },

  fix_storageFree: {
    kind: 'fix',
    icon: HardDrive,
    title: 'Free up space in 10 minutes — start here',
    why: 'Phones save a TON of invisible stuff: app caches, old iMessage attachments, downloaded podcasts, Offloaded apps\' leftover data. A guided cleanup usually frees 3–10 GB fast.',
    steps: [
      'iPhone: Settings → General → iPhone Storage. Wait for the chart to load — the top-of-list apps are your targets.',
      'Android: Settings → Storage → look at what\'s using what.',
      'Enable "Offload Unused Apps" (iPhone) — removes the app but keeps your data. Settings → App Store → Offload Unused Apps.',
      'Delete old Downloads. iPhone: Files app → Browse → Downloads. Android: Files → Downloads.',
      'Clear Messages attachments. iPhone: Settings → General → iPhone Storage → Messages → Review Large Attachments.',
      'Use the TekSure Phone Cleanup Wizard — it walks you through each category in order.',
    ],
    ifFails: 'If you\'re still tight on space, move photos and videos to iCloud or Google Photos — it frees 80% of most people\'s storage.',
    proHelp: 'If your phone has less than 32 GB and you\'re always out of space, it\'s physically undersized for modern use — a trade-in may be better than fighting it every week.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  fix_storagePhotos: {
    kind: 'fix',
    icon: HardDrive,
    title: 'Photos and videos are eating your phone — here\'s the safe cleanup',
    why: 'A 1-minute 4K video can take 400 MB. A holiday can add 5 GB of photos. The fix is to back them up to the cloud, then delete from the phone — but carefully, so you don\'t lose anything.',
    steps: [
      'Turn on iCloud Photos OR Google Photos backup first. Don\'t delete anything until backup is complete.',
      'iCloud Photos: Settings → your name → iCloud → Photos → Sync this iPhone ON.',
      'Google Photos: open the app → tap profile → Photos settings → Backup ON.',
      'Wait for the first backup to finish. Large libraries take hours — leave it plugged in overnight on WiFi.',
      'Enable "Optimize iPhone Storage" (iPhone) — keeps small previews on the phone, full quality in the cloud.',
      'Once backup is complete, delete big videos you\'ve already watched. Videos take 100x more space than photos.',
    ],
    ifFails: 'If you can\'t set up cloud backup, connect the phone to a computer with a cable and copy photos over — then delete from the phone.',
    proHelp: 'A TekSure guide can help you set up cloud backup in 30 minutes and teach you how it works for life. Worth it if you\'ve got decades of photos.',
    guide: { label: 'Backup wizard', to: '/tools/backup-wizard' },
    urgent: 'Never delete photos BEFORE you\'ve confirmed they\'re backed up. Open Photos in iCloud or on photos.google.com in a web browser and scroll through to confirm they\'re there.',
  },

  fix_storageApps: {
    kind: 'fix',
    icon: HardDrive,
    title: 'Trim your apps — keep what you use, dump what you don\'t',
    why: 'The average phone has 60+ apps but uses fewer than 20. Old apps not only take space — they run in the background, drain battery, and sometimes leak your data.',
    steps: [
      'List your apps by size. iPhone: Settings → General → iPhone Storage. Android: Settings → Apps → sort by size.',
      'The biggest offenders are usually: Facebook, Instagram, TikTok, YouTube, Netflix (downloaded shows), and Spotify (downloaded music).',
      'For social apps: use the web version instead (Safari / Chrome). Facebook web works fine and is tiny.',
      'For streaming apps: delete downloaded movies and shows you\'ve watched. Netflix → Downloads → tap the pencil → delete.',
      'Uninstall anything you haven\'t opened in 3 months. You can always reinstall from the store if you miss it.',
      'Turn on "Offload Unused Apps" (iPhone) so the phone auto-cleans apps you stop using.',
    ],
    ifFails: 'If you\'re still tight on space after trimming, the issue is photos/videos — go through that cleanup too.',
    proHelp: 'If you\'re nervous about what\'s safe to delete, TekSure has a guided App Cleanup Wizard — it flags essentials to keep and suggests what to remove.',
    guide: { label: 'App cleanup wizard', to: '/tools/app-cleanup' },
  },

  fix_storageUpdates: {
    kind: 'fix',
    icon: HardDrive,
    title: 'Can\'t install an update — free 5 GB fast',
    why: 'iOS / Android updates need 3–5 GB of temporary space to install, even if the final update is smaller. No free space = no update. Security updates are important, so let\'s clear room.',
    steps: [
      'Check what you need. Settings → General → Software Update (iPhone). It tells you how much space the update needs.',
      'Fastest wins: delete 2 or 3 large videos you\'ve already watched.',
      'Empty "Recently Deleted" in Photos — deleted photos stay for 30 days and still count against storage.',
      'Delete offline downloads in Netflix, Spotify, YouTube, Apple Music, and podcasts.',
      'Uninstall 3 apps you haven\'t touched in months.',
      'Once free space is above the update size, try Settings → General → Software Update → Download and Install.',
    ],
    ifFails: 'If the update still won\'t install with plenty of space, plug the phone into a computer and update via Finder / iTunes (iPhone) — it doesn\'t need free phone space that way.',
    proHelp: 'If your phone refuses the update after all that, something is corrupt — back up and try a clean restore from a computer.',
    guide: { label: 'Phone cleanup wizard', to: '/tools/phone-cleanup' },
  },

  /* ── 11. Water / dropped ─────────────────────────────────── */
  water: {
    kind: 'question',
    title: 'What happened?',
    icon: Droplets,
    subtitle: 'Speed matters — pick carefully and follow the steps right now.',
    options: [
      { label: 'Just dropped in water — this minute', emoji: '💦',  desc: 'Seconds ago, phone still wet',          next: 'fix_waterImmediate' },
      { label: 'Splashed or wet from rain',           emoji: '🌧️',  desc: 'Damp, not soaked',                     next: 'fix_waterSplash' },
      { label: 'Got wet hours or days ago',           emoji: '⏰',  desc: 'It seems fine now',                    next: 'fix_waterOld' },
      { label: 'Dropped on hard surface (not water)', emoji: '📉',  desc: 'Fell on floor, road, etc.',            next: 'fix_dropped' },
    ],
  },

  fix_waterImmediate: {
    kind: 'fix',
    icon: Droplets,
    title: 'DO THIS NOW — water damage response',
    why: 'The first 10 minutes after water exposure decide whether your phone survives. Water causes short circuits when combined with power. Cut the power and dry it before anything else.',
    urgent: 'TURN IT OFF IMMEDIATELY. Do NOT press buttons, charge it, or try to dry with heat. Every minute the phone is on in water = permanent damage.',
    steps: [
      'Power off the phone right now. Hold the power button (and volume if needed) until it shuts down.',
      'Remove the case and the SIM tray. Wipe the outside with a soft cloth — pay attention to the ports at the bottom.',
      'Gently shake the phone port-side-down to let water drip out. Do NOT shake hard.',
      'Do NOT put it in rice. The rice-and-phone myth has been debunked. Rice does almost nothing and starch dust can enter the ports.',
      'Do NOT use a hairdryer or oven. Heat warps the battery and the seals.',
      'Leave the phone OFF on a dry towel, upright, in a warm (not hot) dry place for AT LEAST 48 hours. A sunny windowsill indoors works.',
      'After 48 hours, try turning it on. If it doesn\'t work, go straight to a repair shop — DON\'T charge it first.',
    ],
    ifFails: 'If after 48 hours the phone doesn\'t turn on, or turns on but behaves oddly (screen lines, weird sounds, speaker crackles), take it to a pro WITHOUT charging. Charging a wet phone can cause a fire.',
    proHelp: 'If the phone was in salt water or any dirty water (pool, ocean, lake), see a pro immediately — those corrode far faster than clean water. A $60 ultrasonic clean can save the phone.',
    guide: { label: 'Find a trusted tech', to: '/tech-help-near-me' },
  },

  fix_waterSplash: {
    kind: 'fix',
    icon: Droplets,
    title: 'A splash — you\'re probably fine, but dry it carefully',
    why: 'Modern phones (iPhone 7+, most recent Androids) are splash-resistant — not waterproof. A light splash or rain is usually survivable IF you dry it before charging.',
    steps: [
      'Wipe the outside with a soft cloth — edges, ports, buttons.',
      'Turn the phone off as a precaution for an hour, even if it seems fine.',
      'Do NOT charge it for 24 hours. That\'s the critical rule — even if it LOOKS dry, moisture inside the port can cause a short.',
      'Leave it on a dry towel in a warm dry room for 24 hours.',
      'After 24 hours, if you see the "liquid detected in Lightning / USB-C port" warning when plugging in, disconnect and wait another 12 hours.',
      'If the phone is working normally and the port is dry, you\'re good.',
    ],
    ifFails: 'If anything starts acting odd after the splash — screen lines, muffled speaker, Touch ID / Face ID failing — take it to a pro. It may mean water got past the seal.',
    proHelp: 'If the phone\'s speaker sounds muffled after drying, it\'s water still in the speaker grille. An ultrasonic clean at a repair shop is $40–$80.',
    guide: { label: 'Device health dashboard', to: '/tools/device-health' },
  },

  fix_waterOld: {
    kind: 'fix',
    icon: Droplets,
    title: 'Water exposure from a while ago — watch for slow-developing damage',
    why: 'Water damage doesn\'t always show up right away. Corrosion develops over days or weeks — first signs are usually dim screen areas, muffled speaker, or battery drain.',
    steps: [
      'Back up the phone TONIGHT. If damage spreads, you want your data safe.',
      'iPhone: Settings → your name → iCloud → iCloud Backup → Back Up Now.',
      'Android: Settings → System → Backup → Back up now.',
      'Keep an eye out for these warning signs: screen spots or lines, speaker crackle, Touch ID / fingerprint sensor failing, battery draining faster, WiFi or Bluetooth getting worse.',
      'Clean the charging port with a wooden toothpick — gentle sweeps to loosen any mineral deposits.',
      'If any warning signs show up, see a pro quickly — an ultrasonic clean can still save it if caught early.',
    ],
    ifFails: 'If symptoms are already showing (dim spots, crackly speaker), time is critical. Don\'t delay the repair — corrosion is progressive.',
    proHelp: 'Water damage repairs are almost always professional. An ultrasonic cleaning ($60–$100) is much cheaper than a new logic board ($300+).',
    guide: { label: 'Backup wizard — protect your data', to: '/tools/backup-wizard' },
  },

  fix_dropped: {
    kind: 'fix',
    icon: Droplets,
    title: 'Dropped on a hard surface — check for hidden damage',
    why: 'A drop can leave the phone looking perfect but damage internal parts — especially the battery connector, camera lens, or screen digitizer. A quick 3-minute check catches most issues.',
    steps: [
      'Check the screen and glass back for cracks, even hairline ones — good light helps.',
      'Open the camera app and take a photo of a blank wall. Check for new blurry spots or dust-like specs — that\'s a cracked lens.',
      'Tap every corner of the screen in the Calculator app. Dead spots after a drop mean the digitizer is damaged.',
      'Test Face ID / Touch ID. If either fails after a drop, a sensor cable may be loose.',
      'Check battery behaviour over the next day. Sudden drain or random restarts can indicate a loose battery connector.',
      'If there\'s no visible or functional damage, you\'re lucky — keep an eye on it for a week.',
    ],
    ifFails: 'If you notice any new issue in the 24–48 hours after the drop — take it in for an assessment before things get worse.',
    proHelp: 'Hidden drop damage is sneaky. If Face ID / Touch ID started failing or the phone randomly restarts after a fall, book a pro inspection.',
    guide: { label: 'Device health check', to: '/tools/device-health' },
  },

  /* ── 12. Lost phone ──────────────────────────────────────── */
  lost: {
    kind: 'question',
    title: 'Where did you last have your phone?',
    icon: MapPin,
    options: [
      { label: 'Somewhere around the house / close by', emoji: '🏠',  desc: 'I just can\'t remember where I put it', next: 'fix_findLocal' },
      { label: 'Out and about — might actually be lost', emoji: '🗺️',  desc: 'At a shop, restaurant, or in transit', next: 'fix_findRemote' },
      { label: 'I think it was stolen',                 emoji: '🚨',  desc: 'Someone took it',                     next: 'fix_stolen' },
    ],
  },

  fix_findLocal: {
    kind: 'fix',
    icon: MapPin,
    title: 'Phone is nearby — ring it and use Find My',
    why: 'When you can\'t find the phone around the house, ringing it is faster than searching. Even if it\'s on silent, "Find My" can force it to play a loud sound for 2 minutes.',
    steps: [
      'From any other phone, tablet, or computer: go to iCloud.com/find (iPhone) or android.com/find (Android). Sign in.',
      'See your phone on the map — if it\'s green and close, you\'re warm.',
      'Tap "Play Sound" — it plays a loud tone even if on silent. Follow the sound.',
      'If it\'s between couch cushions or under a pillow, the sound gives it away in 30 seconds.',
      'If the battery is low or dead, use a family member\'s phone to dial your number — listen for the ring.',
      'Once you find it, plug it in and thank your lucky stars.',
    ],
    ifFails: 'If the phone isn\'t showing on the map, or Find My says "offline," the battery is dead or it\'s somewhere without signal. Retrace your steps — car, coat pockets, bags.',
    proHelp: 'If you truly can\'t find it after an hour, treat it as lost-out-and-about and follow those steps.',
    guide: { label: 'Set up Find My before it happens again', to: '/guides' },
  },

  fix_findRemote: {
    kind: 'fix',
    icon: MapPin,
    title: 'Phone is out of the house — use Find My and secure it',
    why: 'A phone that\'s lost somewhere public can often be found by the last location Find My recorded. Acting quickly protects your data in case someone finds it first.',
    urgent: 'Lock it remotely right now — this prevents anyone from using your banking apps, email, or payment cards.',
    steps: [
      'Go to iCloud.com/find or android.com/find from another device. Sign in with your Apple ID or Google account.',
      'Note the last location on the map. Even if the battery is dead, the last reported spot is saved.',
      'Put the phone in "Lost Mode" (iPhone) or "Secure Device" (Android). This locks the screen and shows a message like "Lost — please call 555-1234."',
      'If you\'re at the same location (restaurant, shop), go back and ask — stores keep lost phones at the counter for at least a day.',
      'Call your number from another phone — if a good person found it, they may answer.',
      'If the phone is definitely gone, use "Erase iPhone" / "Erase Device" as a last resort. This wipes it so no one can access your info — but you can\'t track it after.',
    ],
    ifFails: 'If the phone is offline and hasn\'t reported a location in hours, call your carrier and ask them to suspend the line. Change your email, banking, and cloud account passwords from another device immediately.',
    proHelp: 'Report it stolen to police and file a claim with your insurance / carrier. Keep the police report number — you\'ll need it for insurance.',
    guide: { label: 'Safe call scam prevention', to: '/tools/safe-call' },
  },

  fix_stolen: {
    kind: 'fix',
    icon: MapPin,
    title: 'Stolen phone — act in this exact order',
    why: 'With a stolen phone, speed matters. Thieves try to wipe and resell within hours. The longer you wait, the more likely they drain your bank accounts and the phone is unrecoverable.',
    urgent: 'Do NOT confront the thief yourself, even if you see them on the map. Tell the police.',
    steps: [
      'FIRST: Go to iCloud.com/find or android.com/find on another device. Lock the phone and put a message on the screen.',
      'Change your Apple ID / Google password right now — before they can change it.',
      'Change your email password and turn on 2-factor authentication if you haven\'t already.',
      'Call your bank and credit card issuers. Freeze any cards linked to Apple Pay or Google Pay.',
      'Call your phone carrier (from another phone) — suspend the line. They\'ll also flag the phone\'s IMEI as stolen, making it harder to sell.',
      'File a police report. You\'ll need it for insurance. Get the report number.',
      'After all that: use "Erase iPhone" / "Erase Device" as the final step. You can\'t track it after erasing, but your data is safe.',
    ],
    ifFails: 'If you can\'t access your accounts from another device, go to a friend\'s or family member\'s computer and reset your passwords there.',
    proHelp: 'TekSure guides have walked dozens of people through the "my phone was stolen" panic. If you need a calm voice to help you through it step by step, book one.',
    guide: { label: 'Find a TekSure guide', to: '/find-a-guide' },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
 * Component
 * ───────────────────────────────────────────────────────────────────────── */

export default function PhoneFirstAid() {
  // History stack — current node is always the last entry. Enables reliable "Back" navigation.
  const [history, setHistory] = useState<string[]>(['start']);
  const currentId = history[history.length - 1];
  const current = tree[currentId];
  // JSX requires a capitalised local identifier for a component reference.
  const NodeIcon = current.icon;

  const goTo = (id: string) => setHistory(h => [...h, id]);
  const back = () => setHistory(h => (h.length > 1 ? h.slice(0, -1) : h));
  const reset = () => setHistory(['start']);

  const isRoot = history.length === 1;
  const crumbCount = history.length;

  return (
    <>
      <SEOHead
        title="First Aid for Your Phone | TekSure"
        description="Phone acting up? Answer a few simple questions and get clear step-by-step fixes — from won't-turn-on to water damage. Senior-friendly and 100% plain language."
        path="/tools/phone-first-aid"
      />
      <Navbar />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="phone-first-aid"
              title="First Aid for Your Phone"
              url="/tools/phone-first-aid"
            />
          </div>
          <div className="flex items-center gap-3 mb-2 pr-14">
            <div className="rounded-xl bg-primary/10 p-2">
              <Stethoscope className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">First Aid for Your Phone</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Something wrong with your phone? Pick the symptom, answer a couple of questions, and
            we'll walk you through the fix in plain language. You can go back any time.
          </p>
        </div>

        {/* Progress / breadcrumb */}
        {!isRoot && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <Button variant="outline" size="sm" onClick={back} className="gap-2">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
            </Button>
            <Button variant="ghost" size="sm" onClick={reset} className="gap-2">
              <Home className="h-4 w-4" aria-hidden="true" /> Start over
            </Button>
            <span className="text-sm text-muted-foreground ml-auto">
              Step {crumbCount}
            </span>
          </div>
        )}

        {/* ─── Question node ─── */}
        {current.kind === 'question' && (
          <div>
            <div className="flex items-start gap-3 mb-2">
              {NodeIcon && (
                <div className="shrink-0 rounded-xl bg-primary/10 p-3 mt-1">
                  <NodeIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                {current.title}
              </h2>
            </div>
            {current.subtitle && (
              <p className="text-base md:text-lg text-muted-foreground mb-5">
                {current.subtitle}
              </p>
            )}

            <div className="grid gap-3" role="list">
              {current.options.map(opt => (
                <button
                  key={opt.next + opt.label}
                  onClick={() => goTo(opt.next)}
                  role="listitem"
                  className="flex items-center gap-4 p-5 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-primary/60 hover:bg-primary/5 focus:border-primary focus:bg-primary/5 focus:outline-none min-h-[72px]"
                >
                  {opt.emoji && <span className="text-4xl shrink-0" aria-hidden="true">{opt.emoji}</span>}
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{opt.label}</div>
                    {opt.desc && (
                      <div className="text-sm text-muted-foreground mt-0.5">{opt.desc}</div>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── Fix (end state) node ─── */}
        {current.kind === 'fix' && (
          <div>
            {/* Urgent banner — for water, lost/stolen, anything time-critical */}
            {current.urgent && (
              <div className="mb-4 rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-950/40 dark:border-red-700 p-4">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="h-6 w-6 text-red-700 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-red-900 dark:text-red-200 mb-1 uppercase tracking-wide">
                      Act now
                    </p>
                    <p className="text-base text-red-900/95 dark:text-red-100/95 leading-relaxed">
                      {current.urgent}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Title card */}
            <div className="flex items-start gap-3 mb-3">
              {NodeIcon && (
                <div className="shrink-0 rounded-xl bg-primary/10 p-3 mt-1">
                  <NodeIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {current.title}
              </h2>
            </div>

            {/* Why this fix works */}
            <Card className="mb-5 bg-primary/5 border-primary/30">
              <CardContent className="p-4 flex gap-3">
                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Why this works</p>
                  <p className="text-base leading-relaxed">{current.why}</p>
                </div>
              </CardContent>
            </Card>

            {/* Steps */}
            <Card className="mb-5">
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  Follow these steps
                </h3>
                <ol className="space-y-3">
                  {current.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed">
                      <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground font-bold text-sm mt-0.5">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* If this doesn't work */}
            {current.ifFails && (
              <Card className="mb-5 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                <CardContent className="p-4 flex gap-3">
                  <RotateCcw className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-1">
                      If this didn't work
                    </p>
                    <p className="text-base text-amber-900/95 dark:text-amber-100/95 leading-relaxed">
                      {current.ifFails}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pro help */}
            {current.proHelp && (
              <Card className="mb-5 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4 flex gap-3">
                  <Wrench className="h-5 w-5 text-orange-700 dark:text-orange-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-orange-900 dark:text-orange-300 mb-1">
                      When to call a professional
                    </p>
                    <p className="text-base text-orange-900/95 dark:text-orange-100/95 leading-relaxed">
                      {current.proHelp}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related guide + Ask TekBrain + Start over */}
            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              {current.guide && (
                <Button variant="outline" size="lg" asChild className="h-auto py-4 justify-start gap-3 text-left">
                  <Link to={current.guide.to}>
                    <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-xs text-muted-foreground">Related guide</span>
                      <span className="block font-semibold">{current.guide.label}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                  </Link>
                </Button>
              )}
              <Button size="lg" asChild className="h-auto py-4 justify-start gap-3 text-left">
                <Link to="/tekbrain">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="flex-1">
                    <span className="block text-xs opacity-80">Still stuck?</span>
                    <span className="block font-semibold">Ask TekBrain</span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Reassurance & actions */}
            <Card className="mb-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <CardContent className="p-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-1">
                    You're doing great.
                  </p>
                  <p className="text-base text-green-900/95 dark:text-green-100/95 leading-relaxed">
                    Most phone problems turn out to be smaller than they feel. Take the steps one at
                    a time, and if the fix doesn't match your situation exactly, go back and
                    pick a different answer — nothing's broken by trying.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={back} className="gap-2">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
              </Button>
              <Button variant="outline" onClick={reset} className="gap-2">
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start over
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
