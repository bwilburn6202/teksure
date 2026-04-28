import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone, ChevronRight, ArrowUp, Search, MousePointer2, Hand, Undo2,
  Camera, Calculator, Flashlight, Timer, Phone, Type, Volume2, Image as ImageIcon,
  Bell, Battery, Wifi, Bookmark, Eye, AlertTriangle, type LucideIcon,
} from 'lucide-react';

interface Trick {
  id: string;
  icon: LucideIcon;
  title: string;
  whatItDoes: string;
  how: string[];
}

const TRICKS: Trick[] = [
  {
    id: 'tap-status-bar',
    icon: ArrowUp,
    title: 'Tap the top of the screen to scroll up fast',
    whatItDoes: 'Jumps you back to the top of any long page, list, or message thread without all the swiping.',
    how: [
      'Open any app with a long page (Safari, Mail, Messages, Settings).',
      'Tap once on the very top edge of the screen — the area showing the time and battery. The page snaps to the top.',
    ],
  },
  {
    id: 'home-search',
    icon: Search,
    title: 'Swipe down on the home screen to search anything',
    whatItDoes: 'Finds apps, contacts, emails, photos, and answers from the web — all from one search box.',
    how: [
      'On any home screen page, place your finger in the middle and swipe straight down (not from the very top — that opens notifications).',
      'Type what you want: an app name, a person, a word from an email, even a math question.',
    ],
  },
  {
    id: 'back-tap',
    icon: Hand,
    title: 'Double-tap the back of the phone for any action',
    whatItDoes: 'Turns the back of your iPhone into a hidden button. Two taps can take a screenshot, open Camera, mute, or run a Shortcut.',
    how: [
      'Open Settings → Accessibility → Touch → Back Tap.',
      'Pick Double Tap or Triple Tap, then choose what it should do (Screenshot is a popular pick).',
    ],
  },
  {
    id: 'long-press-app',
    icon: Bookmark,
    title: 'Hold an app icon to delete, move, or get quick options',
    whatItDoes: 'Gives you a menu of the most-used actions for that app, plus the option to remove it or rearrange your screen.',
    how: [
      'Press and hold any app icon on the home screen for about a second.',
      'A small menu pops up. Tap Remove App, Edit Home Screen (to move it), or any quick action shown.',
    ],
  },
  {
    id: 'spacebar-cursor',
    icon: MousePointer2,
    title: 'Hold the spacebar to move the cursor like a trackpad',
    whatItDoes: 'Lets you slide the typing cursor to exactly where you want it, instead of poking the screen and missing.',
    how: [
      'Tap into any text — a message, an email, a note — so the keyboard shows.',
      'Press and hold the spacebar. The keys go blank and your finger now drags the cursor anywhere in the text.',
    ],
  },
  {
    id: 'three-finger-undo',
    icon: Undo2,
    title: 'Three-finger swipe left to undo typing',
    whatItDoes: 'Takes back the last thing you typed or deleted, without hunting for an undo button.',
    how: [
      'In any text box, place three fingers on the screen and swipe to the left.',
      'To redo, swipe three fingers to the right. A small Undo bar also appears at the top.',
    ],
  },
  {
    id: 'shake-undo',
    icon: Undo2,
    title: 'Shake the phone to undo',
    whatItDoes: 'A faster undo for people who would rather shake than swipe. Works in most typing screens.',
    how: [
      'After typing or deleting something you did not mean to, give the phone a small shake.',
      'A pop-up asks "Undo Typing?" — tap Undo.',
    ],
  },
  {
    id: 'screenshot-markup',
    icon: ImageIcon,
    title: 'Mark up a screenshot the second you take it',
    whatItDoes: 'Lets you draw on, crop, or write notes on a screenshot before sharing it — great for pointing things out to family.',
    how: [
      'Take a screenshot (Side button + Volume Up on Face ID phones, or Side + Home on older ones).',
      'Tap the small thumbnail in the bottom-left corner before it fades. Use the pen tools, then tap Done → Save or Share.',
    ],
  },
  {
    id: 'flashlight-control',
    icon: Flashlight,
    title: 'Adjust the flashlight brightness',
    whatItDoes: 'The flashlight has four brightness levels — most people only ever use one.',
    how: [
      'Open Control Center (swipe down from the top-right corner on Face ID phones, or up from the bottom on older ones).',
      'Press and hold the flashlight icon. A slider appears — drag it up or down for the brightness you want.',
    ],
  },
  {
    id: 'calculator-swipe',
    icon: Calculator,
    title: 'Swipe across a wrong number to delete it',
    whatItDoes: 'Saves you from clearing the whole calculation when you mistype one digit.',
    how: [
      'Open the Calculator app and type a number.',
      'Swipe left or right across the number at the top. Each swipe deletes one digit instead of starting over.',
    ],
  },
  {
    id: 'timer-quick',
    icon: Timer,
    title: 'Start a timer without opening the Clock app',
    whatItDoes: 'A quick way to set a kitchen timer, a nap timer, or a "leave in 10 minutes" reminder.',
    how: [
      'Hold down the Side button and say, "Hey Siri, set a timer for 10 minutes."',
      'Or open Control Center → press and hold the Timer icon → drag the slider to the time you want → tap Start.',
    ],
  },
  {
    id: 'reachability',
    icon: ArrowUp,
    title: 'Pull the top of the screen down with one hand',
    whatItDoes: 'Slides the whole screen halfway down so your thumb can reach the top corners. Helpful on bigger phones.',
    how: [
      'Make sure Reachability is on: Settings → Accessibility → Touch → turn on Reachability.',
      'On Face ID phones, swipe down once on the very bottom edge. On Home button phones, lightly double-touch the Home button (do not press it).',
    ],
  },
  {
    id: 'text-size',
    icon: Type,
    title: 'Make text bigger in any app instantly',
    whatItDoes: 'Boosts text size system-wide or in only the apps that strain your eyes.',
    how: [
      'Open Control Center → tap the Text Size icon (looks like aA). If you do not see it, add it: Settings → Control Center → add Text Size.',
      'Drag the slider up. Tap the toggle at the bottom to change only the current app, or All Apps for everywhere.',
    ],
  },
  {
    id: 'volume-photo',
    icon: Camera,
    title: 'Use the volume button to take a photo',
    whatItDoes: 'Snapping a photo with a real button is steadier than tapping the on-screen shutter.',
    how: [
      'Open the Camera app.',
      'Press either Volume button to take a photo. Hold it down to record a quick video or burst.',
    ],
  },
  {
    id: 'silence-call',
    icon: Phone,
    title: 'Silence a call without rejecting it',
    whatItDoes: 'Stops the ringing right away but still lets the call go to voicemail — better than hitting Decline (which can tip the caller off).',
    how: [
      'When the phone rings, press the Side button once to silence it.',
      'Press it twice to send the call straight to voicemail.',
    ],
  },
  {
    id: 'live-text',
    icon: Eye,
    title: 'Copy text out of a photo or sign',
    whatItDoes: 'Pulls phone numbers, addresses, recipes, or Wi-Fi passwords out of any photo so you do not have to retype them.',
    how: [
      'Open a photo in the Photos app or aim the Camera at any printed text.',
      'Press and hold on the words. A handle appears — drag it to select, then tap Copy, Call, or Translate.',
    ],
  },
  {
    id: 'flashlight-quick',
    icon: Flashlight,
    title: 'Turn on the flashlight from the lock screen',
    whatItDoes: 'No need to swipe to Control Center in the dark — there is a button right there.',
    how: [
      'Wake the phone (do not unlock it).',
      'Press and hold the flashlight icon in the bottom-left corner of the lock screen. A small click confirms it is on.',
    ],
  },
  {
    id: 'notification-clear',
    icon: Bell,
    title: 'Clear all notifications at once',
    whatItDoes: 'Wipes a screen full of old alerts in one move instead of swiping each one away.',
    how: [
      'Open the lock screen or swipe down to see notifications.',
      'Press and hold the X button at the top of the list, then tap Clear All Notifications.',
    ],
  },
  {
    id: 'battery-percent',
    icon: Battery,
    title: 'See the exact battery percentage',
    whatItDoes: 'Shows the precise percent inside the battery icon, not only a rough bar.',
    how: [
      'Open Settings → Battery.',
      'Turn on Battery Percentage. The number now shows inside the battery icon at the top of the screen.',
    ],
  },
  {
    id: 'wifi-share',
    icon: Wifi,
    title: 'Share your Wi-Fi password without saying it out loud',
    whatItDoes: 'When a friend visits, your iPhone can hand over the Wi-Fi password to their iPhone with no typing.',
    how: [
      'Have your friend pick your Wi-Fi network on their iPhone. The password screen will sit there waiting.',
      'Hold your unlocked iPhone near theirs. A "Share Password" pop-up appears on yours — tap Share Password.',
    ],
  },
];

export default function IphoneShortcuts() {
  return (
    <>
      <SEOHead
        title="20 iPhone Shortcuts Most Seniors Don't Know"
        description="Hidden iPhone gestures that save time every day. Tap the top to scroll up, hold the spacebar as a trackpad, double-tap the back for any action, shake to undo, and more — in plain English."
        path="/tools/iphone-shortcuts"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">20 iPhone Shortcuts Most Seniors Don't Know</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Quiet little gestures that make your iPhone a lot faster — once somebody shows you.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'iPhone Shortcuts' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 mb-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Worth knowing about Back Tap and accessibility shortcuts</p>
                  <p className="text-xs text-muted-foreground">
                    Double-tap and triple-tap accessibility shortcuts can be set to do almost anything on your iPhone — open Camera, run a Siri Shortcut, mute the phone, take a screenshot, or trigger an Emergency SOS. Spend a few minutes in Settings → Accessibility → Touch and explore. You can also set up the Side button (Settings → Accessibility → Accessibility Shortcut) to toggle features with three quick presses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {TRICKS.map((t, i) => {
              const Icon = t.icon;
              return (
                <Card key={t.id} className="border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1 text-xs">Trick {i + 1}</Badge>
                        <p className="font-semibold text-base">{t.title}</p>
                      </div>
                    </div>
                    <div className="ml-12 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What it does</p>
                        <p className="text-sm text-muted-foreground">{t.whatItDoes}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">How</p>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          {t.how.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-border bg-muted/30 mt-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <Volume2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-2">A small piece of advice</p>
                  <p className="text-xs text-muted-foreground">
                    Pick three of these to try this week — not all twenty at once. The ones most people end up loving are spacebar-as-trackpad (#5), Back Tap for screenshots (#3), and copy-text-from-a-photo (#16). After a week they will feel like second nature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk to type instead of pecking the keyboard.</p>
              </Link>
              <Link to="/tools/voicemail-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Voicemail Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Record a greeting and read voicemails as text.</p>
              </Link>
              <Link to="/tools/tech-cheatsheet-generator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Cheatsheet Generator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Print a one-page guide for your phone.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: every iPhone update brings new gestures. Once a year, scroll through Settings → Accessibility for ten minutes — you almost always find something useful.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
