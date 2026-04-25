import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  Phone as PhoneIcon,
  Smartphone,
  Tv,
  Speaker,
  Keyboard,
  Thermometer,
  AlertCircle,
  ArrowRight,
  Download,
  Accessibility as AccessibilityIcon,
  HeartHandshake,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* ── Types ───────────────────────────────────────────────── */
type PosterId =
  | 'iphone-home'
  | 'iphone-no-home'
  | 'android-samsung'
  | 'android-pixel'
  | 'flip-phone'
  | 'basic-phone'
  | 'tv-remote'
  | 'echo-alexa'
  | 'computer-keyboard'
  | 'smart-thermostat';

type PaperSize = 'letter' | 'tabloid';
type ColorMode = 'color' | 'grayscale';

interface Callout {
  /** Short plain-English label, e.g., "Power". */
  label: string;
  /** Short explanation for what this button does. */
  hint: string;
  /** Anchor point on the phone (where the arrow points to). */
  anchor: { x: number; y: number };
  /** Label position (where the text box sits). */
  labelPos: { x: number; y: number };
  /** Side the label sits on — determines text anchor. */
  side: 'left' | 'right';
}

interface PosterDef {
  id: PosterId;
  title: string;
  subtitle: string;
  category: 'Phones' | 'TV & Home' | 'Computer';
  icon: React.ComponentType<{ className?: string }>;
  /** Render the device shape inside a 1000×1400 viewBox. */
  renderDevice: (grayscale: boolean) => JSX.Element;
  callouts: Callout[];
}

/* ── Poster catalogue ────────────────────────────────────── */

/** Common screen rectangle on a slab phone. */
function Screen({ grayscale, x, y, w, h, rx = 28 }: { grayscale: boolean; x: number; y: number; w: number; h: number; rx?: number; }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill={grayscale ? '#f4f4f5' : '#e0f2fe'}
      stroke={grayscale ? '#52525b' : '#0369a1'}
      strokeWidth={3}
    />
  );
}

/** Rounded phone outline. */
function PhoneBody({ grayscale, x = 320, y = 120, w = 360, h = 720, rx = 60 }: { grayscale: boolean; x?: number; y?: number; w?: number; h?: number; rx?: number; }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill={grayscale ? '#fafafa' : '#ffffff'}
      stroke={grayscale ? '#18181b' : '#0f172a'}
      strokeWidth={6}
    />
  );
}

const posters: PosterDef[] = [
  {
    id: 'iphone-home',
    title: 'iPhone (with Home button)',
    subtitle: 'iPhone SE (2020/2022) and iPhone 6 through iPhone 8',
    category: 'Phones',
    icon: Smartphone,
    renderDevice: (grayscale) => (
      <g>
        <PhoneBody grayscale={grayscale} />
        <Screen grayscale={grayscale} x={345} y={195} w={310} h={560} />
        {/* Speaker grille */}
        <rect x={460} y={160} width={80} height={8} rx={4} fill={grayscale ? '#a1a1aa' : '#64748b'} />
        {/* Selfie camera */}
        <circle cx={565} cy={164} r={5} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Home button */}
        <circle cx={500} cy={790} r={24} fill={grayscale ? '#e4e4e7' : '#f1f5f9'} stroke={grayscale ? '#52525b' : '#0f172a'} strokeWidth={3} />
        <rect x={488} y={778} width={24} height={24} rx={5} fill="none" stroke={grayscale ? '#71717a' : '#475569'} strokeWidth={2} />
        {/* Side/power button */}
        <rect x={678} y={240} width={8} height={70} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume up */}
        <rect x={314} y={250} width={8} height={44} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume down */}
        <rect x={314} y={310} width={8} height={44} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Ringer switch */}
        <rect x={314} y={200} width={8} height={30} rx={4} fill={grayscale ? '#a1a1aa' : '#f59e0b'} />
        {/* Lightning port */}
        <rect x={486} y={836} width={28} height={6} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Speaker holes */}
        <g fill={grayscale ? '#3f3f46' : '#0f172a'}>
          <circle cx={545} cy={839} r={2.2} />
          <circle cx={555} cy={839} r={2.2} />
          <circle cx={565} cy={839} r={2.2} />
          <circle cx={575} cy={839} r={2.2} />
          <circle cx={585} cy={839} r={2.2} />
        </g>
        {/* Back camera bump outline (hint) */}
      </g>
    ),
    callouts: [
      { label: 'Home button', hint: 'Press once to go home. Press and hold for Siri.', anchor: { x: 500, y: 790 }, labelPos: { x: 760, y: 800 }, side: 'right' },
      { label: 'Side / Power', hint: 'Press once to lock the screen. Hold to turn off or call Siri.', anchor: { x: 686, y: 275 }, labelPos: { x: 760, y: 270 }, side: 'right' },
      { label: 'Volume Up', hint: 'Makes the ringer and music louder.', anchor: { x: 314, y: 272 }, labelPos: { x: 240, y: 260 }, side: 'left' },
      { label: 'Volume Down', hint: 'Makes the ringer and music quieter.', anchor: { x: 314, y: 332 }, labelPos: { x: 240, y: 350 }, side: 'left' },
      { label: 'Ringer switch', hint: 'Flip toward the back to silence the ringer. Orange means silent.', anchor: { x: 314, y: 215 }, labelPos: { x: 240, y: 180 }, side: 'left' },
      { label: 'Lightning port', hint: 'Charging cable goes here.', anchor: { x: 500, y: 839 }, labelPos: { x: 240, y: 840 }, side: 'left' },
      { label: 'Speaker', hint: 'Sound for calls and alerts.', anchor: { x: 565, y: 839 }, labelPos: { x: 760, y: 880 }, side: 'right' },
      { label: 'Selfie camera', hint: 'Faces you — for video calls and selfies.', anchor: { x: 565, y: 164 }, labelPos: { x: 760, y: 160 }, side: 'right' },
      { label: 'Earpiece speaker', hint: 'Hold up to your ear to hear calls.', anchor: { x: 500, y: 164 }, labelPos: { x: 240, y: 120 }, side: 'left' },
      { label: 'Screen', hint: 'Tap, press, or swipe to use.', anchor: { x: 500, y: 475 }, labelPos: { x: 760, y: 470 }, side: 'right' },
    ],
  },

  {
    id: 'iphone-no-home',
    title: 'iPhone (no Home button)',
    subtitle: 'iPhone X and newer — iPhone 11, 12, 13, 14, 15, and later',
    category: 'Phones',
    icon: Smartphone,
    renderDevice: (grayscale) => (
      <g>
        <PhoneBody grayscale={grayscale} />
        <Screen grayscale={grayscale} x={340} y={160} w={320} h={640} />
        {/* Dynamic Island */}
        <rect x={460} y={180} width={80} height={22} rx={11} fill={grayscale ? '#18181b' : '#0f172a'} />
        {/* Side/power */}
        <rect x={678} y={280} width={8} height={90} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Action button */}
        <rect x={314} y={220} width={8} height={28} rx={4} fill={grayscale ? '#71717a' : '#ea580c'} />
        {/* Volume up */}
        <rect x={314} y={290} width={8} height={46} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume down */}
        <rect x={314} y={350} width={8} height={46} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* USB-C port */}
        <rect x={482} y={840} width={36} height={7} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Bottom speaker */}
        <g fill={grayscale ? '#3f3f46' : '#0f172a'}>
          <circle cx={548} cy={842} r={2.4} />
          <circle cx={558} cy={842} r={2.4} />
          <circle cx={568} cy={842} r={2.4} />
          <circle cx={578} cy={842} r={2.4} />
          <circle cx={588} cy={842} r={2.4} />
        </g>
      </g>
    ),
    callouts: [
      { label: 'Side / Power', hint: 'Press once to lock. Hold for Siri. Press and release volume up, then volume down, then hold side to restart.', anchor: { x: 686, y: 320 }, labelPos: { x: 760, y: 310 }, side: 'right' },
      { label: 'Volume Up / Down', hint: 'Adjust ringer and media volume.', anchor: { x: 314, y: 340 }, labelPos: { x: 240, y: 350 }, side: 'left' },
      { label: 'Action button (15 Pro and newer)', hint: 'Customizable. Silent mode by default — set to camera, flashlight, or shortcut in Settings.', anchor: { x: 314, y: 232 }, labelPos: { x: 240, y: 200 }, side: 'left' },
      { label: 'Dynamic Island', hint: 'Shows live activities — timers, music, calls. Tap to expand.', anchor: { x: 500, y: 191 }, labelPos: { x: 760, y: 170 }, side: 'right' },
      { label: 'Face ID camera', hint: 'Looks at you to unlock. Hold the phone up naturally.', anchor: { x: 475, y: 191 }, labelPos: { x: 240, y: 150 }, side: 'left' },
      { label: 'USB-C port (15 and newer) or Lightning', hint: 'Charging cable goes here. Also connects to a computer.', anchor: { x: 500, y: 843 }, labelPos: { x: 240, y: 840 }, side: 'left' },
      { label: 'Speaker', hint: 'Sound for calls on speaker, music, and alerts.', anchor: { x: 570, y: 842 }, labelPos: { x: 760, y: 880 }, side: 'right' },
      { label: 'Screen — tap, swipe, hold', hint: 'Swipe up from the bottom to go home. Swipe down from top-right for Control Center.', anchor: { x: 500, y: 480 }, labelPos: { x: 760, y: 470 }, side: 'right' },
    ],
  },

  {
    id: 'android-samsung',
    title: 'Samsung Galaxy (Android)',
    subtitle: 'Galaxy S, Galaxy A, and Galaxy Note lines',
    category: 'Phones',
    icon: Smartphone,
    renderDevice: (grayscale) => (
      <g>
        <PhoneBody grayscale={grayscale} />
        <Screen grayscale={grayscale} x={340} y={160} w={320} h={640} />
        {/* Front camera hole-punch */}
        <circle cx={500} cy={188} r={8} fill={grayscale ? '#18181b' : '#0f172a'} />
        {/* Power */}
        <rect x={678} y={300} width={8} height={60} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume up */}
        <rect x={678} y={220} width={8} height={42} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume down */}
        <rect x={678} y={270} width={8} height={42} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* SIM tray */}
        <rect x={400} y={114} width={40} height={6} rx={2} fill={grayscale ? '#71717a' : '#334155'} />
        {/* USB-C */}
        <rect x={482} y={840} width={36} height={7} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Back fingerprint hint (under display) */}
        <circle cx={500} cy={700} r={22} fill="none" stroke={grayscale ? '#a1a1aa' : '#94a3b8'} strokeDasharray="4 4" strokeWidth={2} />
      </g>
    ),
    callouts: [
      { label: 'Power', hint: 'Press to lock. Hold for Bixby or power menu (depends on model).', anchor: { x: 686, y: 330 }, labelPos: { x: 760, y: 340 }, side: 'right' },
      { label: 'Volume Up', hint: 'Also takes a photo when the camera app is open.', anchor: { x: 686, y: 240 }, labelPos: { x: 760, y: 220 }, side: 'right' },
      { label: 'Volume Down', hint: 'Lowers ringer and music volume.', anchor: { x: 686, y: 292 }, labelPos: { x: 760, y: 280 }, side: 'right' },
      { label: 'SIM tray', hint: 'Pop it open with a paperclip. Holds the SIM card for your carrier.', anchor: { x: 420, y: 118 }, labelPos: { x: 240, y: 110 }, side: 'left' },
      { label: 'USB-C port', hint: 'Charging cable goes here. Works with any USB-C cable.', anchor: { x: 500, y: 843 }, labelPos: { x: 240, y: 840 }, side: 'left' },
      { label: 'Front camera', hint: 'For selfies and video calls.', anchor: { x: 500, y: 188 }, labelPos: { x: 760, y: 170 }, side: 'right' },
      { label: 'Fingerprint scanner', hint: 'Tap this spot to unlock. Scanner is under the screen.', anchor: { x: 500, y: 700 }, labelPos: { x: 240, y: 700 }, side: 'left' },
      { label: 'Screen', hint: 'Tap and swipe to use. Swipe up from the bottom edge to go home.', anchor: { x: 500, y: 480 }, labelPos: { x: 760, y: 470 }, side: 'right' },
    ],
  },

  {
    id: 'android-pixel',
    title: 'Google Pixel (Android)',
    subtitle: 'Pixel 6 and newer — Pixel 7, 8, 9 series',
    category: 'Phones',
    icon: Smartphone,
    renderDevice: (grayscale) => (
      <g>
        <PhoneBody grayscale={grayscale} />
        <Screen grayscale={grayscale} x={340} y={160} w={320} h={640} />
        {/* Front camera hole-punch */}
        <circle cx={500} cy={188} r={7} fill={grayscale ? '#18181b' : '#0f172a'} />
        {/* Power */}
        <rect x={678} y={240} width={8} height={60} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Volume rocker */}
        <rect x={678} y={320} width={8} height={90} rx={4} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* USB-C */}
        <rect x={482} y={840} width={36} height={7} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
        {/* Under-display fingerprint */}
        <circle cx={500} cy={700} r={22} fill="none" stroke={grayscale ? '#a1a1aa' : '#94a3b8'} strokeDasharray="4 4" strokeWidth={2} />
      </g>
    ),
    callouts: [
      { label: 'Power', hint: 'Press to lock. Hold to call Google Assistant. Press twice quickly to open camera.', anchor: { x: 686, y: 270 }, labelPos: { x: 760, y: 260 }, side: 'right' },
      { label: 'Volume Up / Down', hint: 'Top half is louder, bottom half is quieter.', anchor: { x: 686, y: 365 }, labelPos: { x: 760, y: 370 }, side: 'right' },
      { label: 'USB-C port', hint: 'Charging cable goes here.', anchor: { x: 500, y: 843 }, labelPos: { x: 240, y: 840 }, side: 'left' },
      { label: 'Camera bar (back)', hint: 'The raised strip on the back holds the camera lenses.', anchor: { x: 500, y: 260 }, labelPos: { x: 240, y: 240 }, side: 'left' },
      { label: 'Front camera', hint: 'For video calls and selfies.', anchor: { x: 500, y: 188 }, labelPos: { x: 240, y: 170 }, side: 'left' },
      { label: 'Fingerprint reader', hint: 'Tap this spot on the screen to unlock.', anchor: { x: 500, y: 700 }, labelPos: { x: 760, y: 700 }, side: 'right' },
      { label: 'Speaker grille (bottom)', hint: 'Sound comes out here and from the earpiece.', anchor: { x: 560, y: 843 }, labelPos: { x: 760, y: 880 }, side: 'right' },
      { label: 'Screen', hint: 'Tap and swipe. Swipe up from the bottom edge for Home.', anchor: { x: 500, y: 480 }, labelPos: { x: 760, y: 470 }, side: 'right' },
    ],
  },

  {
    id: 'flip-phone',
    title: 'Flip phone (Jitterbug Flip2)',
    subtitle: 'Lively Jitterbug Flip2 and similar senior-friendly flip phones',
    category: 'Phones',
    icon: PhoneIcon,
    renderDevice: (grayscale) => (
      <g>
        {/* Top half (screen) */}
        <rect x={320} y={120} width={360} height={320} rx={30} fill={grayscale ? '#fafafa' : '#ffffff'} stroke={grayscale ? '#18181b' : '#0f172a'} strokeWidth={6} />
        <rect x={355} y={160} width={290} height={200} rx={12} fill={grayscale ? '#f4f4f5' : '#e0f2fe'} stroke={grayscale ? '#52525b' : '#0369a1'} strokeWidth={3} />
        <rect x={450} y={140} width={100} height={6} rx={3} fill={grayscale ? '#a1a1aa' : '#64748b'} />
        {/* Hinge */}
        <rect x={320} y={440} width={360} height={16} fill={grayscale ? '#d4d4d8' : '#cbd5e1'} />
        {/* Bottom half (keypad) */}
        <rect x={320} y={456} width={360} height={420} rx={30} fill={grayscale ? '#fafafa' : '#ffffff'} stroke={grayscale ? '#18181b' : '#0f172a'} strokeWidth={6} />
        {/* Nav keys */}
        <rect x={420} y={478} width={160} height={60} rx={12} fill={grayscale ? '#e4e4e7' : '#dbeafe'} stroke={grayscale ? '#52525b' : '#1d4ed8'} strokeWidth={2} />
        <circle cx={456} cy={508} r={14} fill={grayscale ? '#22c55e' : '#22c55e'} />
        <circle cx={544} cy={508} r={14} fill={grayscale ? '#ef4444' : '#ef4444'} />
        {/* Keypad grid */}
        {(() => {
          const nums = ['1','2','3','4','5','6','7','8','9','*','0','#'];
          return nums.map((n, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const cx = 380 + col * 120;
            const cy = 580 + row * 60;
            return (
              <g key={n}>
                <rect x={cx - 40} y={cy - 22} width={80} height={44} rx={10} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
                <text x={cx} y={cy + 6} textAnchor="middle" fontSize="22" fontWeight={700} fill={grayscale ? '#18181b' : '#0f172a'}>{n}</text>
              </g>
            );
          });
        })()}
        {/* Charging port bottom */}
        <rect x={482} y={880} width={36} height={6} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
      </g>
    ),
    callouts: [
      { label: 'Speaker', hint: 'Hold up to your ear for calls.', anchor: { x: 500, y: 143 }, labelPos: { x: 760, y: 130 }, side: 'right' },
      { label: 'Screen', hint: 'Shows the time, caller name, and menu.', anchor: { x: 500, y: 260 }, labelPos: { x: 240, y: 260 }, side: 'left' },
      { label: 'Hinge', hint: 'Open the phone to answer. Close to hang up.', anchor: { x: 680, y: 448 }, labelPos: { x: 760, y: 450 }, side: 'right' },
      { label: 'Send / Answer (green)', hint: 'Press to answer a call or to start dialing.', anchor: { x: 456, y: 508 }, labelPos: { x: 240, y: 500 }, side: 'left' },
      { label: 'End / Hang up (red)', hint: 'Press to hang up or cancel.', anchor: { x: 544, y: 508 }, labelPos: { x: 760, y: 500 }, side: 'right' },
      { label: 'Number pad', hint: 'Press digits to dial. Hold 1 for voicemail.', anchor: { x: 500, y: 640 }, labelPos: { x: 760, y: 660 }, side: 'right' },
      { label: 'Charging port', hint: 'Plug the charger in here each night.', anchor: { x: 500, y: 886 }, labelPos: { x: 240, y: 880 }, side: 'left' },
      { label: 'Ringer / volume (side)', hint: 'Side keys make the ringer louder or quieter.', anchor: { x: 320, y: 700 }, labelPos: { x: 240, y: 720 }, side: 'left' },
    ],
  },

  {
    id: 'basic-phone',
    title: 'Basic phone (Nokia 225)',
    subtitle: 'Nokia 225 and other candy-bar basic phones',
    category: 'Phones',
    icon: PhoneIcon,
    renderDevice: (grayscale) => (
      <g>
        <rect x={360} y={120} width={280} height={760} rx={30} fill={grayscale ? '#fafafa' : '#ffffff'} stroke={grayscale ? '#18181b' : '#0f172a'} strokeWidth={6} />
        {/* Screen */}
        <rect x={390} y={170} width={220} height={260} rx={8} fill={grayscale ? '#f4f4f5' : '#e0f2fe'} stroke={grayscale ? '#52525b' : '#0369a1'} strokeWidth={3} />
        <rect x={460} y={145} width={80} height={6} rx={3} fill={grayscale ? '#a1a1aa' : '#64748b'} />
        {/* Nav */}
        <rect x={430} y={460} width={140} height={50} rx={10} fill={grayscale ? '#e4e4e7' : '#dbeafe'} stroke={grayscale ? '#52525b' : '#1d4ed8'} strokeWidth={2} />
        <circle cx={462} cy={485} r={12} fill="#22c55e" />
        <circle cx={538} cy={485} r={12} fill="#ef4444" />
        {/* Keypad */}
        {(() => {
          const nums = ['1','2','3','4','5','6','7','8','9','*','0','#'];
          return nums.map((n, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const cx = 415 + col * 85;
            const cy = 555 + row * 70;
            return (
              <g key={n}>
                <rect x={cx - 32} y={cy - 24} width={64} height={48} rx={10} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
                <text x={cx} y={cy + 7} textAnchor="middle" fontSize="22" fontWeight={700} fill={grayscale ? '#18181b' : '#0f172a'}>{n}</text>
              </g>
            );
          });
        })()}
        {/* Bottom port */}
        <rect x={482} y={884} width={36} height={6} rx={3} fill={grayscale ? '#3f3f46' : '#0f172a'} />
      </g>
    ),
    callouts: [
      { label: 'Speaker', hint: 'Earpiece — hold up to your ear for calls.', anchor: { x: 500, y: 148 }, labelPos: { x: 760, y: 130 }, side: 'right' },
      { label: 'Screen', hint: 'Shows caller name, menu, and text messages.', anchor: { x: 500, y: 300 }, labelPos: { x: 240, y: 300 }, side: 'left' },
      { label: 'Send / Answer (green)', hint: 'Answers calls. Starts dialing a number.', anchor: { x: 462, y: 485 }, labelPos: { x: 240, y: 475 }, side: 'left' },
      { label: 'End / Hang up (red)', hint: 'Ends a call. Also wakes the phone or returns to the home screen.', anchor: { x: 538, y: 485 }, labelPos: { x: 760, y: 475 }, side: 'right' },
      { label: 'Number pad', hint: 'Press numbers to dial. Hold a number for a speed-dial contact.', anchor: { x: 500, y: 660 }, labelPos: { x: 760, y: 700 }, side: 'right' },
      { label: 'Charging port', hint: 'Plug the charger in here each night.', anchor: { x: 500, y: 888 }, labelPos: { x: 240, y: 884 }, side: 'left' },
      { label: 'Ringer / volume (side)', hint: 'Side key makes the ringer louder or quieter.', anchor: { x: 360, y: 500 }, labelPos: { x: 240, y: 560 }, side: 'left' },
    ],
  },

  {
    id: 'tv-remote',
    title: 'TV remote (Roku, Fire TV, Apple TV)',
    subtitle: 'Covers the most common streaming remotes — see the Remote Control Decoder for more detail',
    category: 'TV & Home',
    icon: Tv,
    renderDevice: (grayscale) => (
      <g>
        <rect x={400} y={120} width={200} height={760} rx={40} fill={grayscale ? '#fafafa' : '#ffffff'} stroke={grayscale ? '#18181b' : '#0f172a'} strokeWidth={6} />
        {/* Power */}
        <circle cx={500} cy={170} r={16} fill={grayscale ? '#f4f4f5' : '#fef2f2'} stroke="#b91c1c" strokeWidth={3} />
        <text x={500} y={175} textAnchor="middle" fontSize="14" fontWeight={700} fill="#b91c1c">⏻</text>
        {/* D-pad */}
        <circle cx={500} cy={320} r={60} fill={grayscale ? '#e4e4e7' : '#dbeafe'} stroke={grayscale ? '#52525b' : '#1d4ed8'} strokeWidth={3} />
        <circle cx={500} cy={320} r={22} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={500} y={326} textAnchor="middle" fontSize="14" fontWeight={700}>OK</text>
        <text x={500} y={275} textAnchor="middle" fontSize="18">▲</text>
        <text x={500} y={375} textAnchor="middle" fontSize="18">▼</text>
        <text x={455} y={326} textAnchor="middle" fontSize="18">◀</text>
        <text x={545} y={326} textAnchor="middle" fontSize="18">▶</text>
        {/* Back / Home row */}
        <rect x={420} y={410} width={60} height={40} rx={8} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={450} y={436} textAnchor="middle" fontSize="14" fontWeight={600}>Back</text>
        <rect x={520} y={410} width={60} height={40} rx={8} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={550} y={436} textAnchor="middle" fontSize="14" fontWeight={600}>🏠</text>
        {/* Voice / mic */}
        <circle cx={500} cy={490} r={18} fill={grayscale ? '#f4f4f5' : '#ecfdf5'} stroke="#047857" strokeWidth={2} />
        <text x={500} y={495} textAnchor="middle" fontSize="14">🎤</text>
        {/* Playback */}
        <g>
          <rect x={430} y={545} width={40} height={38} rx={8} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
          <text x={450} y={570} textAnchor="middle" fontSize="18">⏮</text>
          <rect x={480} y={545} width={40} height={38} rx={8} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
          <text x={500} y={570} textAnchor="middle" fontSize="18">⏯</text>
          <rect x={530} y={545} width={40} height={38} rx={8} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
          <text x={550} y={570} textAnchor="middle" fontSize="18">⏭</text>
        </g>
        {/* Volume + Mute */}
        <rect x={420} y={610} width={40} height={100} rx={10} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={440} y={645} textAnchor="middle" fontSize="18">＋</text>
        <text x={440} y={695} textAnchor="middle" fontSize="18">－</text>
        <rect x={480} y={610} width={40} height={40} rx={10} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={500} y={636} textAnchor="middle" fontSize="14">🔇</text>
        <rect x={540} y={610} width={40} height={100} rx={10} fill={grayscale ? '#f4f4f5' : '#f8fafc'} stroke={grayscale ? '#52525b' : '#475569'} strokeWidth={2} />
        <text x={560} y={645} textAnchor="middle" fontSize="14">CH＋</text>
        <text x={560} y={695} textAnchor="middle" fontSize="14">CH－</text>
        {/* App shortcuts */}
        {['Netflix','Prime','Disney+','Hulu'].map((name, i) => (
          <g key={name}>
            <rect x={430} y={740 + i * 30} width={140} height={24} rx={6} fill={grayscale ? '#e4e4e7' : '#fee2e2'} stroke={grayscale ? '#52525b' : '#b91c1c'} strokeWidth={1.5} />
            <text x={500} y={757 + i * 30} textAnchor="middle" fontSize="12" fontWeight={700} fill={grayscale ? '#18181b' : '#991b1b'}>{name}</text>
          </g>
        ))}
      </g>
    ),
    callouts: [
      { label: 'Power', hint: 'Turns the TV on or off.', anchor: { x: 500, y: 170 }, labelPos: { x: 760, y: 160 }, side: 'right' },
      { label: 'Direction pad (up / down / left / right)', hint: 'Moves the highlight on screen. Tap OK to select.', anchor: { x: 500, y: 320 }, labelPos: { x: 760, y: 320 }, side: 'right' },
      { label: 'OK / Select', hint: 'Chooses what is highlighted. Like pressing Enter on a computer.', anchor: { x: 500, y: 326 }, labelPos: { x: 240, y: 320 }, side: 'left' },
      { label: 'Back', hint: 'Goes back one screen. Does not turn things off.', anchor: { x: 450, y: 430 }, labelPos: { x: 240, y: 430 }, side: 'left' },
      { label: 'Home', hint: 'Takes you to the main menu with all your apps.', anchor: { x: 550, y: 430 }, labelPos: { x: 760, y: 430 }, side: 'right' },
      { label: 'Voice / microphone', hint: 'Hold and speak the name of a show or app.', anchor: { x: 500, y: 490 }, labelPos: { x: 240, y: 490 }, side: 'left' },
      { label: 'Play / Pause and skip', hint: 'Pauses what is playing. Arrows skip back or forward.', anchor: { x: 500, y: 564 }, labelPos: { x: 760, y: 564 }, side: 'right' },
      { label: 'Volume + / −', hint: 'Makes the TV louder or quieter.', anchor: { x: 440, y: 660 }, labelPos: { x: 240, y: 660 }, side: 'left' },
      { label: 'Mute', hint: 'Turns the sound off. Press again to bring it back.', anchor: { x: 500, y: 630 }, labelPos: { x: 760, y: 600 }, side: 'right' },
      { label: 'Channel + / −', hint: 'For live TV, moves to the next or previous channel.', anchor: { x: 560, y: 660 }, labelPos: { x: 760, y: 670 }, side: 'right' },
      { label: 'App shortcut buttons', hint: 'Jump straight into Netflix, Prime, Disney+, or Hulu.', anchor: { x: 500, y: 810 }, labelPos: { x: 240, y: 810 }, side: 'left' },
    ],
  },

  {
    id: 'echo-alexa',
    title: 'Echo / Alexa device',
    subtitle: 'Echo Dot, Echo, Echo Show — Amazon Alexa smart speakers',
    category: 'TV & Home',
    icon: Speaker,
    renderDevice: (grayscale) => (
      <g>
        <ellipse cx={500} cy={550} rx={200} ry={220} fill={grayscale ? '#f4f4f5' : '#e0f2fe'} stroke={grayscale ? '#18181b' : '#0369a1'} strokeWidth={6} />
        {/* Top ring (light ring) */}
        <ellipse cx={500} cy={360} rx={160} ry={40} fill="none" stroke={grayscale ? '#71717a' : '#0ea5e9'} strokeWidth={6} />
        <ellipse cx={500} cy={360} rx={160} ry={40} fill={grayscale ? '#fafafa' : '#bae6fd'} />
        {/* Buttons on top */}
        <circle cx={430} cy={360} r={16} fill={grayscale ? '#e4e4e7' : '#f8fafc'} stroke="#475569" strokeWidth={2} />
        <text x={430} y={366} textAnchor="middle" fontSize="14" fontWeight={700}>＋</text>
        <circle cx={485} cy={360} r={16} fill={grayscale ? '#e4e4e7' : '#f8fafc'} stroke="#475569" strokeWidth={2} />
        <text x={485} y={366} textAnchor="middle" fontSize="14" fontWeight={700}>－</text>
        <circle cx={540} cy={360} r={16} fill={grayscale ? '#e4e4e7' : '#f8fafc'} stroke="#b91c1c" strokeWidth={2} />
        <text x={540} y={366} textAnchor="middle" fontSize="12" fontWeight={700} fill="#b91c1c">🎤</text>
        <circle cx={595} cy={360} r={16} fill={grayscale ? '#e4e4e7' : '#f8fafc'} stroke="#475569" strokeWidth={2} />
        <text x={595} y={366} textAnchor="middle" fontSize="12">●</text>
      </g>
    ),
    callouts: [
      { label: 'Light ring', hint: 'Blue means Alexa is listening. Yellow means a message. Red means the mic is off.', anchor: { x: 500, y: 360 }, labelPos: { x: 760, y: 340 }, side: 'right' },
      { label: 'Volume + / −', hint: 'Makes Alexa louder or quieter.', anchor: { x: 455, y: 360 }, labelPos: { x: 240, y: 340 }, side: 'left' },
      { label: 'Microphone off button', hint: 'Turns off the microphone. The ring glows red when mute is on.', anchor: { x: 540, y: 360 }, labelPos: { x: 760, y: 400 }, side: 'right' },
      { label: 'Action button', hint: 'Wakes up Alexa without saying the wake word. Also stops a timer or alarm.', anchor: { x: 595, y: 360 }, labelPos: { x: 760, y: 430 }, side: 'right' },
      { label: 'Say "Alexa…" to start', hint: 'Ask for the time, weather, music, a timer, or to call a contact.', anchor: { x: 500, y: 550 }, labelPos: { x: 240, y: 520 }, side: 'left' },
      { label: 'Power cable (back)', hint: 'Plugs into the wall. Always stays plugged in.', anchor: { x: 500, y: 770 }, labelPos: { x: 240, y: 770 }, side: 'left' },
    ],
  },

  {
    id: 'computer-keyboard',
    title: 'Computer keyboard essentials',
    subtitle: 'The keys and shortcuts worth knowing — Windows and Mac',
    category: 'Computer',
    icon: Keyboard,
    renderDevice: (grayscale) => (
      <g>
        <rect x={120} y={280} width={760} height={440} rx={18} fill={grayscale ? '#fafafa' : '#ffffff'} stroke={grayscale ? '#18181b' : '#0f172a'} strokeWidth={6} />
        {(() => {
          const rows: string[][] = [
            ['Esc','1','2','3','4','5','6','7','8','9','0','⌫'],
            ['Tab','Q','W','E','R','T','Y','U','I','O','P'],
            ['Caps','A','S','D','F','G','H','J','K','L','Enter'],
            ['Shift','Z','X','C','V','B','N','M',',','.','Shift'],
            ['Ctrl','Win/⌘','Alt','Space','Alt','Ctrl','←','↓','→','↑',' '],
          ];
          return rows.map((row, r) =>
            row.map((key, c) => {
              const x = 140 + c * 62;
              const y = 300 + r * 70;
              const w = key === 'Space' ? 180 : 58;
              return (
                <g key={`${r}-${c}-${key}`}>
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={54}
                    rx={8}
                    fill={grayscale ? '#f4f4f5' : '#f8fafc'}
                    stroke={grayscale ? '#52525b' : '#475569'}
                    strokeWidth={2}
                  />
                  <text x={x + w / 2} y={y + 32} textAnchor="middle" fontSize={key.length > 2 ? 11 : 16} fontWeight={600} fill={grayscale ? '#18181b' : '#0f172a'}>
                    {key}
                  </text>
                </g>
              );
            })
          );
        })()}
      </g>
    ),
    callouts: [
      { label: 'Copy — Ctrl+C (Windows) or ⌘+C (Mac)', hint: 'Copies the selected text or file to the clipboard.', anchor: { x: 330, y: 475 }, labelPos: { x: 60, y: 120 }, side: 'left' },
      { label: 'Paste — Ctrl+V or ⌘+V', hint: 'Pastes whatever you copied into the current spot.', anchor: { x: 390, y: 475 }, labelPos: { x: 60, y: 170 }, side: 'left' },
      { label: 'Cut — Ctrl+X or ⌘+X', hint: 'Copies AND removes the selected text.', anchor: { x: 450, y: 475 }, labelPos: { x: 60, y: 220 }, side: 'left' },
      { label: 'Undo — Ctrl+Z or ⌘+Z', hint: 'Takes back the last thing you did. Works in almost every program.', anchor: { x: 330, y: 405 }, labelPos: { x: 60, y: 70 }, side: 'left' },
      { label: 'Save — Ctrl+S or ⌘+S', hint: 'Saves whatever you are working on.', anchor: { x: 390, y: 405 }, labelPos: { x: 940, y: 70 }, side: 'right' },
      { label: 'Find — Ctrl+F or ⌘+F', hint: 'Search for a word on the page or in a document.', anchor: { x: 450, y: 405 }, labelPos: { x: 940, y: 120 }, side: 'right' },
      { label: 'Switch windows — Alt+Tab / ⌘+Tab', hint: 'Jump between open programs without the mouse.', anchor: { x: 180, y: 615 }, labelPos: { x: 940, y: 170 }, side: 'right' },
      { label: 'Lock screen — ⊞+L (Windows) or Ctrl+⌘+Q (Mac)', hint: 'Locks the computer so nobody else can use it.', anchor: { x: 260, y: 615 }, labelPos: { x: 940, y: 220 }, side: 'right' },
      { label: 'Arrow keys', hint: 'Move the cursor one step at a time.', anchor: { x: 600, y: 615 }, labelPos: { x: 940, y: 270 }, side: 'right' },
      { label: 'Backspace — ⌫', hint: 'Deletes the character to the left of the cursor.', anchor: { x: 810, y: 300 }, labelPos: { x: 940, y: 320 }, side: 'right' },
      { label: 'Enter', hint: 'Confirms a choice or starts a new line.', anchor: { x: 810, y: 440 }, labelPos: { x: 940, y: 370 }, side: 'right' },
      { label: 'Shift', hint: 'Hold with a letter for a capital letter.', anchor: { x: 170, y: 545 }, labelPos: { x: 60, y: 320 }, side: 'left' },
    ],
  },

  {
    id: 'smart-thermostat',
    title: 'Smart thermostat (Nest / ecobee)',
    subtitle: 'Google Nest Learning Thermostat and ecobee Smart Thermostat',
    category: 'TV & Home',
    icon: Thermometer,
    renderDevice: (grayscale) => (
      <g>
        <circle cx={500} cy={500} r={240} fill={grayscale ? '#18181b' : '#0f172a'} stroke={grayscale ? '#3f3f46' : '#334155'} strokeWidth={6} />
        <circle cx={500} cy={500} r={180} fill={grayscale ? '#52525b' : '#1e293b'} stroke={grayscale ? '#71717a' : '#475569'} strokeWidth={4} />
        <text x={500} y={480} textAnchor="middle" fontSize="72" fontWeight={700} fill={grayscale ? '#fafafa' : '#f8fafc'}>72°</text>
        <text x={500} y={540} textAnchor="middle" fontSize="22" fontWeight={600} fill={grayscale ? '#e4e4e7' : '#fbbf24'}>HEAT</text>
        <text x={500} y={575} textAnchor="middle" fontSize="18" fill={grayscale ? '#a1a1aa' : '#cbd5e1'}>Set to 70°</text>
      </g>
    ),
    callouts: [
      { label: 'Turn the outer ring', hint: 'Spin left for cooler, right for warmer. The new temperature shows on the screen.', anchor: { x: 500, y: 260 }, labelPos: { x: 760, y: 200 }, side: 'right' },
      { label: 'Press the face to click', hint: 'Pushes in like a button. Opens the menu.', anchor: { x: 500, y: 500 }, labelPos: { x: 240, y: 500 }, side: 'left' },
      { label: 'Big number', hint: 'The current temperature in the room right now.', anchor: { x: 500, y: 470 }, labelPos: { x: 760, y: 440 }, side: 'right' },
      { label: 'Mode — HEAT / COOL / OFF / ECO', hint: 'Heat turns on the furnace. Cool turns on the air conditioner. Eco saves energy when no one is home.', anchor: { x: 500, y: 540 }, labelPos: { x: 760, y: 560 }, side: 'right' },
      { label: 'Target temperature', hint: 'What you told it to aim for. The thermostat heats or cools until it matches.', anchor: { x: 500, y: 575 }, labelPos: { x: 240, y: 580 }, side: 'left' },
      { label: 'Mobile app', hint: 'The Google Home or ecobee app on your phone does everything the dial does — plus schedules.', anchor: { x: 500, y: 740 }, labelPos: { x: 760, y: 740 }, side: 'right' },
    ],
  },
];

/* ── Related printables shown in the picker ──────────────── */
const phonePosterIds: PosterId[] = [
  'iphone-home',
  'iphone-no-home',
  'android-samsung',
  'android-pixel',
  'flip-phone',
  'basic-phone',
];

/* ── Utilities ───────────────────────────────────────────── */
function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

function posterById(id: PosterId): PosterDef {
  const found = posters.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown poster ${id}`);
  return found;
}

function posterCategory(posterId: PosterId): string {
  return posterById(posterId).category;
}

/* ── Callout renderer ────────────────────────────────────── */
function CalloutLine({
  callout,
  grayscale,
  largePrint,
}: {
  callout: Callout;
  grayscale: boolean;
  largePrint: boolean;
}) {
  const stroke = grayscale ? '#27272a' : '#0f172a';
  const textColor = grayscale ? '#09090b' : '#0f172a';
  const hintColor = grayscale ? '#3f3f46' : '#334155';
  const boxFill = grayscale ? '#ffffff' : '#fffbeb';
  const boxStroke = grayscale ? '#52525b' : '#b45309';

  const labelFontSize = largePrint ? 24 : 18;
  const hintFontSize = largePrint ? 16 : 13;
  const boxWidth = largePrint ? 260 : 210;
  const boxHeight = largePrint ? 84 : 68;

  const textX = callout.side === 'left' ? callout.labelPos.x + boxWidth - 14 : callout.labelPos.x + 14;
  const textAnchor = callout.side === 'left' ? 'end' : 'start';

  // Line path: anchor → corner of box (closest short side)
  const boxAnchorX =
    callout.side === 'left' ? callout.labelPos.x + boxWidth : callout.labelPos.x;
  const boxAnchorY = callout.labelPos.y + boxHeight / 2;

  return (
    <g>
      <line
        x1={callout.anchor.x}
        y1={callout.anchor.y}
        x2={boxAnchorX}
        y2={boxAnchorY}
        stroke={stroke}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <circle cx={callout.anchor.x} cy={callout.anchor.y} r={5} fill={stroke} />
      <rect
        x={callout.labelPos.x}
        y={callout.labelPos.y}
        width={boxWidth}
        height={boxHeight}
        rx={10}
        fill={boxFill}
        stroke={boxStroke}
        strokeWidth={2}
      />
      <text
        x={textX}
        y={callout.labelPos.y + (largePrint ? 32 : 24)}
        textAnchor={textAnchor}
        fontSize={labelFontSize}
        fontWeight={700}
        fill={textColor}
      >
        {callout.label}
      </text>
      <text
        x={textX}
        y={callout.labelPos.y + (largePrint ? 60 : 48)}
        textAnchor={textAnchor}
        fontSize={hintFontSize}
        fill={hintColor}
      >
        {truncate(callout.hint, largePrint ? 58 : 70)}
      </text>
    </g>
  );
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

/* ── The printable poster canvas ─────────────────────────── */
function PosterCanvas({
  poster,
  grayscale,
  largePrint,
  showFooter,
  caregiverName,
  emergencyContacts,
  paper,
}: {
  poster: PosterDef;
  grayscale: boolean;
  largePrint: boolean;
  showFooter: boolean;
  caregiverName: string;
  emergencyContacts: string[];
  paper: PaperSize;
}) {
  // Tabloid gives more height relative to width; letter is closer to 1:1.3.
  const viewW = 1000;
  const viewH = paper === 'tabloid' ? 1550 : 1400;
  const titleFontSize = largePrint ? 54 : 42;
  const subtitleFontSize = largePrint ? 24 : 18;

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-full"
      role="img"
      aria-label={`${poster.title} button map poster`}
    >
      <rect
        x={0}
        y={0}
        width={viewW}
        height={viewH}
        fill={grayscale ? '#ffffff' : '#fff7ed'}
      />
      <rect
        x={20}
        y={20}
        width={viewW - 40}
        height={viewH - 40}
        rx={24}
        fill="none"
        stroke={grayscale ? '#a1a1aa' : '#b45309'}
        strokeWidth={4}
      />
      {/* Title area */}
      <text
        x={viewW / 2}
        y={70}
        textAnchor="middle"
        fontSize={titleFontSize}
        fontWeight={800}
        fill={grayscale ? '#09090b' : '#0f172a'}
      >
        {poster.title}
      </text>
      <text
        x={viewW / 2}
        y={105}
        textAnchor="middle"
        fontSize={subtitleFontSize}
        fill={grayscale ? '#3f3f46' : '#334155'}
      >
        {poster.subtitle}
      </text>

      {/* Device + callouts */}
      {poster.renderDevice(grayscale)}
      {poster.callouts.map((c, i) => (
        <CalloutLine key={i} callout={c} grayscale={grayscale} largePrint={largePrint} />
      ))}

      {/* Emergency + caregiver block */}
      {(emergencyContacts.some((c) => c.trim()) || caregiverName.trim()) && (
        <g>
          <rect
            x={60}
            y={viewH - 240}
            width={viewW - 120}
            height={160}
            rx={16}
            fill={grayscale ? '#fafafa' : '#fef3c7'}
            stroke={grayscale ? '#52525b' : '#b45309'}
            strokeWidth={3}
          />
          <text
            x={80}
            y={viewH - 205}
            fontSize={largePrint ? 26 : 22}
            fontWeight={800}
            fill={grayscale ? '#09090b' : '#0f172a'}
          >
            In an emergency or when stuck:
          </text>
          {caregiverName.trim() && (
            <text
              x={80}
              y={viewH - 170}
              fontSize={largePrint ? 22 : 18}
              fill={grayscale ? '#09090b' : '#0f172a'}
            >
              Call {caregiverName} first.
            </text>
          )}
          {emergencyContacts
            .filter((c) => c.trim())
            .slice(0, 3)
            .map((contact, i) => (
              <text
                key={i}
                x={80}
                y={viewH - 140 + i * 26}
                fontSize={largePrint ? 22 : 18}
                fill={grayscale ? '#09090b' : '#0f172a'}
              >
                • {contact}
              </text>
            ))}
        </g>
      )}

      {/* Footer */}
      {showFooter && (
        <text
          x={viewW / 2}
          y={viewH - 40}
          textAnchor="middle"
          fontSize={14}
          fill={grayscale ? '#71717a' : '#a16207'}
        >
          Made by TekSure — teksure.com — free plain-English tech help
        </text>
      )}
    </svg>
  );
}

/* ── Page component ──────────────────────────────────────── */
export default function PhoneButtonPoster() {
  const [posterId, setPosterId] = useState<PosterId>('iphone-home');
  const [paper, setPaper] = useState<PaperSize>('letter');
  const [colorMode, setColorMode] = useState<ColorMode>('color');
  const [largePrint, setLargePrint] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [caregiverName, setCaregiverName] = useState('');
  const [emergencyContact1, setEmergencyContact1] = useState('');
  const [emergencyContact2, setEmergencyContact2] = useState('');
  const [emergencyContact3, setEmergencyContact3] = useState('');

  const poster = useMemo(() => posterById(posterId), [posterId]);
  const grayscale = colorMode === 'grayscale';
  const emergencyContacts = [emergencyContact1, emergencyContact2, emergencyContact3];

  function handlePrint() {
    if (typeof window !== 'undefined') window.print();
  }

  const categoryGroups: Array<{ label: string; ids: PosterId[] }> = [
    { label: 'Phones', ids: phonePosterIds },
    { label: 'TV & Home', ids: posters.filter((p) => p.category === 'TV & Home').map((p) => p.id) },
    { label: 'Computer', ids: posters.filter((p) => p.category === 'Computer').map((p) => p.id) },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50/40 dark:from-slate-950 dark:to-slate-900">
      <SEOHead
        title="Phone Button Wall Poster — Printable"
        description="A printable wall poster that names every button on common phones, remotes, and smart devices. Hang it near the counter. Free from TekSure."
        path="/printables/phone-button-poster"
      />

      {/* Print-specific CSS */}
      <style>{`
        @media print {
          @page { size: ${paper === 'tabloid' ? 'tabloid' : 'letter'} landscape; margin: 0.3in; }
          body { background: #ffffff !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .poster-printable {
            page-break-inside: avoid;
            width: 100%;
            height: auto;
          }
        }
        .print-only { display: none; }
      `}</style>

      <div className="no-print">
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="no-print">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Phone Button Wall Poster' },
            ]}
          />

          {/* ── Hero ───────────────────────────────── */}
          <section className="mt-4 mb-10 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-slate-100 via-amber-50 to-orange-100 dark:from-slate-800 dark:via-slate-800 dark:to-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
            <div className="flex items-start gap-5 flex-wrap">
              <div className="h-16 w-16 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
                <Printer className="h-9 w-9 text-amber-700" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <Badge className="bg-amber-600 hover:bg-amber-700">Printable</Badge>
                  <Badge variant="outline">Accessibility</Badge>
                  <Badge variant="outline">Caregiver friendly</Badge>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                  Phone Button Wall Poster
                </h1>
                <p className="mt-3 text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
                  A printable wall poster that names every button on your phone. Hang it near the counter.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <BookmarkButton
                    type="tool"
                    slug="phone-button-poster"
                    title="Phone Button Wall Poster"
                    url="/printables/phone-button-poster"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Picker ─────────────────────────────── */}
          <section className="mb-8">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                  1. Pick the poster
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base">
                  Choose the device you want to label. Each option becomes a printable page.
                </p>

                {categoryGroups.map((group) => (
                  <div key={group.label} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      {group.label}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {group.ids.map((id) => {
                        const p = posterById(id);
                        const Icon = p.icon;
                        const selected = id === posterId;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setPosterId(id)}
                            aria-pressed={selected}
                            className={cn(
                              'text-left rounded-xl border-2 p-4 transition min-h-14',
                              'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2',
                              selected
                                ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
                                : 'border-slate-200 hover:border-amber-400 dark:border-slate-700 dark:hover:border-amber-600 bg-white dark:bg-slate-900'
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                'h-10 w-10 rounded-lg flex items-center justify-center shrink-0',
                                selected ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                              )}>
                                <Icon className="h-5 w-5" aria-hidden />
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-base text-slate-900 dark:text-slate-50">
                                  {p.title}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                  {p.subtitle}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* ── Print preferences ──────────────────── */}
          <section className="mb-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                  2. Print preferences
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base">
                  Pick paper size, ink, and how big you want the labels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="paper-size" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Paper size
                    </label>
                    <Select value={paper} onValueChange={(v) => setPaper(v as PaperSize)}>
                      <SelectTrigger id="paper-size" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="letter">Letter — 8.5" × 11" (most home printers)</SelectItem>
                        <SelectItem value="tabloid">Tabloid — 11" × 17" (office / copy shop)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="color-mode" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Ink
                    </label>
                    <Select value={colorMode} onValueChange={(v) => setColorMode(v as ColorMode)}>
                      <SelectTrigger id="color-mode" className="min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="color">Color (easier to read)</SelectItem>
                        <SelectItem value="grayscale">Grayscale (saves ink)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="large-print"
                      checked={largePrint}
                      onCheckedChange={(v) => setLargePrint(Boolean(v))}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="large-print" className="text-base font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                        Large print mode
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Makes labels much bigger — best for low vision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="show-footer"
                      checked={showFooter}
                      onCheckedChange={(v) => setShowFooter(Boolean(v))}
                      className="mt-1"
                    />
                    <div>
                      <label htmlFor="show-footer" className="text-base font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                        Show "Made by TekSure" footer
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Turn off for a cleaner print, or leave on to remember where you got it.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ── Customize (emergency contacts) ─────── */}
          <section className="mb-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                  3. Add a name and emergency contacts (optional)
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base">
                  These get printed at the bottom of the poster. Leave blank to skip.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="caregiver" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Call this person first
                    </label>
                    <Input
                      id="caregiver"
                      value={caregiverName}
                      onChange={(e) => setCaregiverName(e.target.value)}
                      placeholder="e.g. Sarah (daughter) — 555-123-4567"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact1" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Other contact 1
                    </label>
                    <Input
                      id="contact1"
                      value={emergencyContact1}
                      onChange={(e) => setEmergencyContact1(e.target.value)}
                      placeholder="e.g. Dr. Kim — 555-222-3333"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact2" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Other contact 2
                    </label>
                    <Input
                      id="contact2"
                      value={emergencyContact2}
                      onChange={(e) => setEmergencyContact2(e.target.value)}
                      placeholder="e.g. Neighbor Bob — 555-444-5555"
                      className="min-h-14 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact3" className="block text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Other contact 3
                    </label>
                    <Input
                      id="contact3"
                      value={emergencyContact3}
                      onChange={(e) => setEmergencyContact3(e.target.value)}
                      placeholder="e.g. 911 — for medical emergencies"
                      className="min-h-14 text-base"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ── Preview + print ────────────────────── */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                4. Preview and print
              </h2>
              <div className="flex items-center gap-3">
                <Button
                  onClick={handlePrint}
                  className="min-h-14 text-base bg-amber-600 hover:bg-amber-700 text-white gap-2"
                >
                  <Printer className="h-5 w-5" aria-hidden />
                  Print poster
                </Button>
              </div>
            </div>

            <Alert className="mb-6 border-sky-200 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/30">
              <Download className="h-4 w-4 text-sky-700 dark:text-sky-300" aria-hidden />
              <AlertTitle className="text-sky-900 dark:text-sky-100">Save as PDF</AlertTitle>
              <AlertDescription className="text-sky-900 dark:text-sky-100 text-base">
                You do not need a PDF app. In the print window:
                <span className="block mt-1"><span className="font-semibold">Windows</span> — pick "Microsoft Print to PDF" as the printer, then click Print.</span>
                <span className="block"><span className="font-semibold">Mac</span> — click the PDF dropdown in the bottom-left, then "Save as PDF".</span>
                <span className="block"><span className="font-semibold">iPhone / iPad</span> — tap Share, then "Print", then pinch to zoom the preview, then Share again to save.</span>
              </AlertDescription>
            </Alert>
          </section>
        </div>

        {/* ── The actual printable poster ─────────── */}
        <section
          id="poster-printable"
          className={cn(
            'poster-printable rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white shadow-sm',
            'no-print:mb-10'
          )}
        >
          <PosterCanvas
            poster={poster}
            grayscale={grayscale}
            largePrint={largePrint}
            showFooter={showFooter}
            caregiverName={caregiverName}
            emergencyContacts={emergencyContacts}
            paper={paper}
          />
        </section>

        <div className="no-print">
          {/* ── Hanging tips ───────────────────────── */}
          <section className="mb-10">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center">
                    <AccessibilityIcon className="h-5 w-5 text-amber-700 dark:text-amber-300" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                    Hanging tips
                  </h2>
                </div>
                <ul className="space-y-3 text-base text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Best spots to hang it:</strong> next to the kitchen phone, on the fridge, beside the recliner, or inside a cabinet door where the phone charger lives.
                  </li>
                  <li>
                    <strong>How big should the print be?</strong> Letter size (8.5" × 11") works for eye level at arm's length. Choose tabloid (11" × 17") if you want to read it from across the room or if you've turned on Large print mode.
                  </li>
                  <li>
                    <strong>Laminate if near the kitchen:</strong> a clear laminating pouch or even a sheet protector keeps the poster clean when grease or water splash.
                  </li>
                  <li>
                    <strong>Hang at seated height:</strong> if the poster is for someone who sits most of the day, hang it at 50 inches from the floor — not standing eye height.
                  </li>
                  <li>
                    <strong>Use removable mounting strips:</strong> Command strips won't tear the paint if the poster moves later.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* ── For caregivers ─────────────────────── */}
          <section className="mb-10">
            <Card className="border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center">
                    <HeartHandshake className="h-5 w-5 text-rose-700 dark:text-rose-300" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                    For caregivers
                  </h2>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 mb-4">
                  Print one for your parent's counter. A labeled poster near the phone cuts confusion and the "what did this button do again?" calls in half. Fill in your name and number in step 3 so they know who to call first when stuck.
                </p>
                <Link
                  to="/toolkits/caregiver"
                  className="inline-flex items-center gap-2 text-rose-700 dark:text-rose-300 font-semibold hover:underline min-h-14 text-base"
                >
                  Open the Caregiver Toolkit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* ── Related ────────────────────────────── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Related tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/tools/remote-control-decoder"
                className="block p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 bg-white dark:bg-slate-900 transition min-h-14"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Tv className="h-5 w-5 text-amber-700" aria-hidden />
                  <div className="font-semibold text-base text-slate-900 dark:text-slate-50">Remote Control Decoder</div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Find out what every button does on your Roku, Fire TV, Apple TV, Samsung, or LG remote.
                </p>
              </Link>
              <Link
                to="/tools/voice-commands"
                className="block p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 bg-white dark:bg-slate-900 transition min-h-14"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Speaker className="h-5 w-5 text-amber-700" aria-hidden />
                  <div className="font-semibold text-base text-slate-900 dark:text-slate-50">Voice Commands</div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Plain-English voice commands for Siri, Google Assistant, and Alexa.
                </p>
              </Link>
              <Link
                to="/tools/low-vision-tech-hub"
                className="block p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 bg-white dark:bg-slate-900 transition min-h-14"
              >
                <div className="flex items-center gap-3 mb-2">
                  <AccessibilityIcon className="h-5 w-5 text-amber-700" aria-hidden />
                  <div className="font-semibold text-base text-slate-900 dark:text-slate-50">Low Vision Tech Hub</div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Bigger text, high contrast, screen readers, and hardware that helps with vision loss.
                </p>
              </Link>
            </div>
            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Poster currently showing: <span className="font-semibold">{poster.title}</span> · Category: {posterCategory(posterId)}
            </div>
          </section>
        </div>
      </main>

      <div className="no-print">
      </div>
    </div>
  );
}
