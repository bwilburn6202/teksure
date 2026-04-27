import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  Plug,
  AlertCircle,
  Droplets,
  Palette,
  FileText,
  Scan,
  Layers,
  Wrench,
  Lightbulb,
  MessageCircle,
  BookOpen,
  Home,
  ExternalLink,
  Power,
  ShoppingCart,
  Search,
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
 * Same pattern as PhoneFirstAid.tsx — the tool is a state machine of nodes.
 * Each node is either a "question" (branching options) or a "fix" (end state
 * with concrete steps). The current node is the last item in a history stack
 * so users can always press Back to recover from a wrong choice.
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
  /** When to repair vs buy a new printer — printers age out fast. */
  replaceOrRepair?: string;
  /** Brand-agnostic guidance on buying ink / toner / supplies. */
  buying?: string;
  /** Optional related TekSure guide link. */
  guide?: { label: string; to: string };
  /** Bright-red urgency banner (safety warnings — hot fuser, spilled toner). */
  urgent?: string;
}

type Node = QuestionNode | FixNode;

/* ─────────────────────────────────────────────────────────────────────────
 * The tree
 * ───────────────────────────────────────────────────────────────────────── */

const tree: Record<string, Node> = {
  /* ── Root ────────────────────────────────────────────────── */
  start: {
    id: 'start',
    type: 'question',
    question: 'What best describes your printer problem?',
    emoji: '',
  },

  // ── Printer offline flow ──────────────────────────────────────
  offline_q1: {
    id: 'offline_q1',
    type: 'question',
    question: 'Is your printer turned on? Look for a power light on the front or top.',
    helpText: 'The power light is usually a small green, blue, or white light. Some printers also have a small screen that shows information.',
    yesNext: 'offline_q2',
    noNext: 'offline_turn_on',
  },
  offline_turn_on: {
    id: 'offline_turn_on',
    type: 'solution',
    emoji: '',
    statement: 'Turn on your printer',
    solution: 'Your printer may be off or not getting power.',
    solutionSteps: [
      'Check that the power cable is plugged firmly into the back of the printer and into the wall outlet.',
      'Press the power button on the printer. It is usually on the front or top.',
      'Wait about 30 seconds for the printer to start up. You may hear it making sounds — this is normal.',
      'Once the light is on and steady (not blinking), try printing a test page from your computer.',
      'If the printer still will not turn on, try a different wall outlet. The outlet may be the problem.',
    ],
  },
  offline_q2: {
    id: 'offline_q2',
    type: 'question',
    question: 'Is your printer connected by a USB cable (plugged directly into your computer) or by WiFi (wirelessly)?',
    // Multi-choice — handled in UI
  },
  offline_usb: {
    id: 'offline_usb',
    type: 'question',
    question: 'Is the USB cable firmly plugged into both the printer and your computer?',
    helpText: 'Check both ends of the cable. The printer end is usually a square-shaped plug. The computer end is the flat rectangular USB plug.',
    yesNext: 'offline_usb_restart',
    noNext: 'offline_usb_replug',
  },
  offline_usb_replug: {
    id: 'offline_usb_replug',
    type: 'solution',
    emoji: '',
    statement: 'Reconnect the USB cable',
    solution: 'A loose cable is one of the most common printer problems.',
    solutionSteps: [
      'Unplug the USB cable from both ends — the printer and the computer.',
      'Wait 10 seconds.',
      'Plug the cable back into the printer first, then into the computer.',
      'Make sure each end clicks in firmly and does not wiggle.',
      'Try printing again. If it still does not work, try a different USB port on your computer (the other rectangular slots).',
    ],
  },
  offline_usb_restart: {
    id: 'offline_usb_restart',
    type: 'solution',
    emoji: '',
    statement: 'Restart your printer and computer',
    solution: 'A restart often fixes communication issues between your computer and printer.',
    solutionSteps: [
      'Turn off your printer using the power button.',
      'On your computer, click Start (Windows) or the Apple menu (Mac) and choose Restart.',
      'Once your computer has fully restarted, turn the printer back on.',
      'Wait about a minute for the printer to be ready.',
      'Try printing a test page. On Windows: Settings > Printers & Scanners > your printer > Print a test page. On Mac: System Settings > Printers & Scanners > your printer > Print Test Page.',
      'If it still shows "Offline," try unplugging the USB cable and plugging it into a different USB port on your computer.',
    ],
  },
  offline_wifi: {
    id: 'offline_wifi',
    type: 'question',
    question: 'Is the WiFi light on your printer lit or blinking?',
    helpText: 'The WiFi light is usually a small icon that looks like radio waves. It may be on the front panel or next to the screen.',
    yesNext: 'offline_wifi_same_network',
    noNext: 'offline_wifi_reconnect',
  },
  offline_wifi_reconnect: {
    id: 'offline_wifi_reconnect',
    type: 'solution',
    emoji: '',
    statement: 'Reconnect your printer to WiFi',
    solution: 'Your printer has lost its WiFi connection.',
    solutionSteps: [
      'On your printer, find the WiFi setup option. This is usually in the Settings or Network menu on the printer screen. If there is no screen, look for a WiFi button.',
      'Select your home WiFi network name from the list.',
      'Enter your WiFi password using the printer buttons or touchscreen. The password is the same one you use on your phone or computer.',
      'Wait for the WiFi light to become solid (not blinking). This means it is connected.',
      'Try printing again from your computer.',
      'If you cannot find the WiFi setup, check the printer manual or search online for your printer model plus "WiFi setup."',
    ],
  },
  offline_wifi_same_network: {
    id: 'offline_wifi_same_network',
    type: 'question',
    question: 'Are your computer and printer connected to the same WiFi network?',
    helpText: 'Check your computer\'s WiFi settings to see which network it is on. Then check your printer\'s network settings (usually in Settings > Network on the printer screen). They must match.',
    yesNext: 'offline_wifi_restart_all',
    noNext: 'offline_wifi_fix_network',
  },
  offline_wifi_fix_network: {
    id: 'offline_wifi_fix_network',
    type: 'solution',
    emoji: '',
    statement: 'Connect both devices to the same network',
    solution: 'Your printer and computer must be on the same WiFi network to communicate.',
    solutionSteps: [
      'Check which WiFi network your computer is connected to. On Windows: click the WiFi icon in the taskbar. On Mac: click the WiFi icon in the menu bar.',
      'On your printer, go to Settings > Network and check which network it is connected to.',
      'If they are different, reconnect one of them to match the other. It is usually easier to change the printer.',
      'On the printer, go to WiFi Setup, select your home network, and enter the password.',
      'Once both are on the same network, try printing again.',
    ],
  },
  offline_wifi_restart_all: {
    id: 'offline_wifi_restart_all',
    type: 'solution',
    emoji: '',
    statement: 'Restart everything',
    solution: 'When the printer shows "offline" but everything looks connected, a full restart usually fixes it.',
    solutionSteps: [
      'Turn off your printer.',
      'Restart your WiFi router: unplug it from the wall, wait 30 seconds, and plug it back in. Wait 2-3 minutes for it to fully restart.',
      'Restart your computer.',
      'Turn your printer back on and wait a minute for it to reconnect to WiFi.',
      'Try printing again.',
      'If it still shows offline, try removing the printer from your computer and adding it again. On Windows: Settings > Printers & Scanners > Remove device, then Add a printer. On Mac: System Settings > Printers & Scanners > minus button to remove, then plus button to add.',
    ],
  },

  // ── Paper jam flow ────────────────────────────────────────────
  jam_q1: {
    id: 'jam_q1',
    type: 'question',
    question: 'Can you see the jammed paper inside the printer?',
    helpText: 'Open the front cover or top lid of the printer and look inside. You may also need to check the back panel — some printers have a door on the back.',
    yesNext: 'jam_remove',
    noNext: 'jam_hidden',
  },
  jam_remove: {
    id: 'jam_remove',
    type: 'solution',
    emoji: '',
    statement: 'Carefully remove the jammed paper',
    solution: 'Gently pull the paper out to avoid tearing it or damaging the printer.',
    solutionSteps: [
      'Turn off the printer first. This prevents the paper from being pulled further in.',
      'Open the printer cover or lid. Check the front, top, and back access panels.',
      'Grip the jammed paper with both hands and pull it slowly and evenly in the direction the paper normally travels. Do not yank — pull gently.',
      'If the paper tears, look for any remaining pieces inside. Even a small piece left behind can cause more jams.',
      'Once all paper is removed, close all covers and doors.',
      'Turn the printer back on and try printing again.',
    ],
  },
  jam_hidden: {
    id: 'jam_hidden',
    type: 'solution',
    emoji: '',
    statement: 'Check all access points for hidden paper',
    solution: 'Paper can get stuck in places that are hard to see at first.',
    solutionSteps: [
      'Turn off the printer.',
      'Open the front cover. Remove the ink or toner cartridge — look for paper behind it.',
      'Open the TOP cover if there is one — scanner beds lift on many all-in-ones.',
      'Go to the BACK of the printer. Most have a rear access panel that pops off or swings open. Check inside.',
      'Pull the PAPER TRAY fully out. Look up into the slot with a flashlight — paper often gets caught at the feed roller.',
      'If your printer has a DUPLEX (two-sided) unit on the back, open it and check inside.',
      'Remove everything you find, put it all back together, and turn on.',
    ],
    ifFails: 'If the printer still shows "jam" with no paper anywhere, the jam sensor may be stuck or dirty. Gently blow out the sensor with canned air — it\'s a small plastic flag or optical eye inside the paper path.',
    proHelp: 'A jam sensor that reads jam with no paper present is a repair-shop problem. On older printers, it\'s rarely worth repairing.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_repeatJam: {
    kind: 'fix',
    icon: AlertCircle,
    title: 'Paper jams every time — here\'s the checklist',
    why: 'Repeat jams mean a physical cause: damp paper, wrong paper type, worn rollers, or a foreign object stuck inside. Fixing the cause stops the cycle.',
    steps: [
      'Replace the paper stack with a fresh ream. Paper that\'s been in a humid room (bathroom, basement) gets wavy and jams more.',
      'Check the paper weight. Most printers want 20 lb / 75 gsm copier paper. Photo paper, card stock, or old onion-skin paper can jam in a printer not rated for them.',
      'Fan the stack — hold one edge, flex the sheets, they should slide easily.',
      'Check the paper guides — slide them snugly against the stack without bending it. Too loose = skew; too tight = jams.',
      'Clean the pickup roller with a lint-free cloth and distilled water. Rotate the roller as you wipe. Dry 10 minutes before trying.',
      'If jams still repeat, order a roller replacement kit for your model — usually $15–$30 and a 10-minute job.',
    ],
    ifFails: 'If rollers are new and paper is fresh but jams continue, something inside the paper path is bent or broken. Take it to a shop for an assessment.',
    proHelp: 'If the printer is 5+ years old and jamming constantly, replace it. A new entry-level printer ($80–$150) costs less than a repair visit.',
    replaceOrRepair: 'Repair rollers ($15–$30) if the printer is newer than 3 years and the main problem is misfeeds. Replace the printer if it\'s older and having multiple issues.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  /* ── 6. WiFi connect ────────────────────────────────────── */
  wifiConnect: {
    kind: 'question',
    title: 'What happens when you try to connect to WiFi?',
    icon: Wifi,
    options: [
      { label: 'Printer doesn\'t see my network',       emoji: '',  next: 'fix_wifiNotVisible' },
      { label: 'Says my password is wrong',              emoji: '',  next: 'fix_wifiPassword' },
      { label: 'Connects but won\'t print',              emoji: '',  next: 'fix_wifiSameNetwork' },
      { label: 'I don\'t know how to set it up',         emoji: '🆕',  next: 'fix_wifiFirstTime' },
    ],
  },

  // ── Print quality flow ────────────────────────────────────────
  quality_q1: {
    id: 'quality_q1',
    type: 'question',
    question: 'What does the printed page look like?',
    // Multi-choice — handled in UI
  },
  quality_faded: {
    id: 'quality_faded',
    type: 'question',
    question: 'Have you checked the ink or toner levels?',
    helpText: 'On most printers, you can check ink levels on the printer screen by going to Settings > Ink Levels. You can also check from your computer: on Windows search for your printer name, on Mac go to System Settings > Printers & Scanners.',
    yesNext: 'quality_faded_low',
    noNext: 'quality_check_ink',
  },
  quality_check_ink: {
    id: 'quality_check_ink',
    type: 'solution',
    emoji: '',
    statement: 'Check and replace ink or toner',
    solution: 'Faded printing is usually caused by low ink or toner.',
    solutionSteps: [
      'Check your ink or toner levels. On the printer screen: look in Settings or Setup > Ink Levels. On your computer: search for your printer name in Settings.',
      'If any color is low or empty, you need to replace that cartridge.',
      'Find your printer model number (usually on a sticker on the front or inside the lid).',
      'Search online for "[your printer model] ink cartridge" or visit your printer brand\'s website to find the right replacement.',
      'You can buy cartridges at office supply stores (Staples, Office Depot), Amazon, or Walmart.',
      'Follow the instructions in your printer to replace the cartridge. Usually: open the lid, wait for the cartridge holder to move to the center, press the old one to release it, and snap the new one in.',
    ],
    ifFails: 'If your router has only 5 GHz WiFi (some mesh systems), you\'ll need to enable 2.4 GHz specifically for the printer, or connect the printer by USB cable instead.',
    proHelp: 'If your WiFi router is managed by your internet provider and you can\'t access its settings, call them to enable 2.4 GHz.',
    guide: { label: 'WiFi troubleshooter', to: '/tools/wifi-troubleshooter' },
  },
  quality_faded_low: {
    id: 'quality_faded_low',
    type: 'solution',
    emoji: '',
    statement: 'Run a cleaning cycle',
    solution: 'If ink levels are fine but prints are faded, the print heads may be clogged.',
    solutionSteps: [
      'On your printer screen, go to Settings or Setup > Maintenance or Tools.',
      'Select "Clean Print Heads" or "Print Head Cleaning." The printer will run a cleaning cycle.',
      'After cleaning, print a test page to see if the quality improved.',
      'If it is still faded, run the cleaning cycle one more time. Sometimes it takes two cleanings.',
      'If printing is still faded after two cleanings, try "Deep Clean" if your printer has that option.',
      'For laser printers: open the printer, remove the toner cartridge, and gently rock it side to side to redistribute the toner inside. Then put it back.',
    ],
    ifFails: 'If the password is definitely right but the printer still rejects it, the password may have special characters (& $ # !) that the printer\'s keypad handles poorly. Temporarily change the router password to letters and numbers only, connect the printer, then change it back.',
    proHelp: 'Using the manufacturer\'s phone/tablet setup app is much easier than typing on the printer — HP Smart, Canon PRINT, Epson Smart Panel, etc. Download your brand\'s app.',
    guide: { label: 'WiFi password finder', to: '/tools/wifi-password-finder' },
  },
  quality_streaky: {
    id: 'quality_streaky',
    type: 'solution',
    emoji: '',
    statement: 'Clean the print heads and check alignment',
    solution: 'Streaks or lines on printed pages are usually caused by dirty print heads or misalignment.',
    solutionSteps: [
      'On your printer screen, go to Settings > Maintenance or Tools.',
      'Run "Clean Print Heads" first. Wait for it to finish.',
      'Then run "Align Print Heads" or "Print Head Alignment." Follow the on-screen instructions — you may need to select the best-looking alignment pattern.',
      'Print a test page to check the results.',
      'If streaks continue, the paper type setting might be wrong. Make sure it matches the paper you are using (plain paper, photo paper, etc.).',
      'For laser printers: streaks often mean the drum unit needs cleaning or replacing. Check your printer manual for "drum replacement."',
    ],
    ifFails: 'If both are on the same network and it still won\'t print, remove and re-add the printer in your computer\'s settings. Windows: Settings → Printers & scanners → remove → Add device. Mac: System Settings → Printers & Scanners → minus → plus.',
    proHelp: 'If you use a mesh system (Eero, Google WiFi, Orbi) and keep losing the printer, enable "IoT" mode or turn off "Device Isolation" in the router settings — mesh routers sometimes quarantine older devices.',
    guide: { label: 'Home network map', to: '/tools/home-network-map' },
  },
  quality_blurry: {
    id: 'quality_blurry',
    type: 'solution',
    emoji: '',
    statement: 'Fix blurry or smudged prints',
    solution: 'Blurry prints are usually caused by paper settings, damp paper, or dirty rollers.',
    solutionSteps: [
      'Check that the paper type setting on your computer matches the actual paper. When you click Print, look for "Paper Type" or "Media Type" in the settings.',
      'Make sure the paper is dry. Damp or humid paper causes smudging. Store paper in a dry place and fan the sheets before loading.',
      'Check print quality setting. When you click Print, look for "Quality" and set it to "Normal" or "High" instead of "Draft."',
      'Clean the inside of the printer. Open the cover and gently wipe any ink or toner residue with a dry, lint-free cloth.',
      'For inkjet printers: wait 30 seconds after printing before touching the page to let the ink dry.',
      'For laser printers: check if the fuser unit needs replacing (usually after 50,000-100,000 pages). Consult your printer manual.',
    ],
  },

  fix_findWindows: {
    kind: 'fix',
    icon: Search,
    title: 'Add your printer on Windows',
    why: 'Windows usually finds printers automatically when they\'re on the same WiFi — but sometimes it needs a nudge, or the printer was set up on a previous version of Windows.',
    steps: [
      'Make sure the printer is on and connected to WiFi (solid WiFi light).',
      'On Windows: click Start → Settings → Bluetooth & devices → Printers & scanners.',
      'Click "Add device." Windows scans for 30 seconds. Your printer should appear by name.',
      'Click the printer\'s name → "Add device." Windows will download a driver if needed.',
      'When it finishes, you\'ll see the printer listed as "Ready."',
      'If it still doesn\'t appear: click "The printer that I want isn\'t listed" → "Add a printer using a TCP/IP address" → enter the printer\'s IP address (find it on the printer\'s Settings → Network menu).',
    ],
    ifFails: 'If Windows can\'t install the driver, download the full driver package from the manufacturer\'s website (hp.com, canon.com, epson.com, brother.com). Search for your model → "Downloads" → "Drivers."',
    proHelp: 'If your computer and printer are both on WiFi but can\'t find each other, the router\'s "AP Isolation" may be on. Log into the router and turn it off.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_findMac: {
    kind: 'fix',
    icon: Search,
    title: 'Add your printer on Mac',
    why: 'Mac uses AirPrint to find printers automatically on WiFi. If it\'s not showing up, either the printer isn\'t AirPrint-capable, or there\'s a WiFi routing issue.',
    steps: [
      'Make sure the printer is on and connected to the same WiFi as the Mac.',
      'On Mac: Apple menu → System Settings → Printers & Scanners.',
      'Click the "+" (plus) button at the bottom. Your printer should appear after a few seconds.',
      'Select it → click "Add." macOS will download any needed driver.',
      'If the printer doesn\'t appear: enable sharing on the printer (Settings → Network → AirPrint → On), then try again.',
      'For older non-AirPrint printers, download and install the driver from the manufacturer\'s website BEFORE trying to add it.',
    ],
    ifFails: 'If the printer still won\'t add, try the IP address method. Click the "+" → IP tab → type the printer\'s IP address (from the printer\'s Settings → Network screen) → pick "Line Printer Daemon – LPD" as the protocol.',
    proHelp: 'Very old printers (10+ years) have no Mac driver and no AirPrint. Time to replace the printer.',
    replaceOrRepair: 'If your printer was released before 2012, there\'s often no Mac support at all. A $80 new printer beats days of troubleshooting.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },
  ink_replace: {
    id: 'ink_replace',
    type: 'solution',
    emoji: '',
    statement: 'Replace the ink or toner cartridge',
    solution: 'When ink or toner is empty, you need a new cartridge.',
    solutionSteps: [
      'Find your printer model number. It is usually printed on the front of the printer or on a sticker inside the lid.',
      'Write it down. It will look something like "HP DeskJet 2755e" or "Brother HL-L2350DW."',
      'Search online for "[your printer model] replacement ink" or "[your printer model] replacement toner."',
      'Buy the correct cartridge from Amazon, Walmart, Staples, Office Depot, or your printer brand\'s website.',
      'To install: open the printer cover, wait for the cartridge holder to move to the center, push down on the old cartridge to release it, and snap in the new one.',
      'Close the cover and print a test page. The printer may run an alignment process automatically.',
    ],
  },
  ink_not_recognized: {
    id: 'ink_not_recognized',
    type: 'solution',
    emoji: '',
    statement: 'Fix "cartridge not recognized" errors',
    solution: 'Sometimes a printer does not recognize a cartridge even when it is installed correctly.',
    solutionSteps: [
      'Turn off the printer and unplug it from the wall. Wait 60 seconds.',
      'Open the cartridge cover and remove the cartridge that is not being recognized.',
      'Check the gold or copper contacts on the bottom of the cartridge. Gently wipe them with a dry, lint-free cloth. Do not use water.',
      'Also wipe the contacts inside the printer where the cartridge sits.',
      'Reinstall the cartridge and make sure it clicks firmly into place.',
      'Plug the printer back in and turn it on.',
      'If the error continues, the cartridge may be defective. Try a different cartridge if you have one, or return it to the store for a replacement.',
    ],
    ifFails: 'If USB still reports offline, update the printer driver. Uninstall the current one (Windows: Settings → Apps → find your printer brand → Uninstall) then reinstall from the manufacturer\'s site.',
    proHelp: 'If the USB cable is old (5+ years) and it\'s been bent at the connector, the wires inside may have broken. A new $8 cable may be the fastest fix.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_offlineWifi: {
    kind: 'fix',
    icon: Wifi,
    title: 'WiFi printer showing offline',
    why: 'WiFi printers go offline when they lose their connection — after a router restart, a sleep cycle, or a Windows update. Reconnecting to the same network fixes most cases.',
    steps: [
      'On the printer, check the WiFi light — solid = connected, blinking = disconnected.',
      'If blinking, redo WiFi setup (Settings → Wireless → WiFi Setup → pick your network → password).',
      'Check your computer\'s WiFi — you and the printer must be on the SAME network.',
      'On Windows: Settings → Printers & scanners → click the printer → Printer properties → uncheck "Use printer offline."',
      'Right-click in the print queue → clear any stuck jobs.',
      'Restart: printer OFF, router unplug 30 sec and replug, computer restart. Once all come back, try printing.',
    ],
    ifFails: 'If the printer loses its WiFi constantly, the router may be assigning it a new IP address each time. In the printer\'s Network settings, set a "static IP" or "reserve" the IP in your router.',
    proHelp: 'If you\'ve restarted everything twice and it still goes offline, remove and re-add the printer on your computer (System Settings → Printers → remove → Add).',
    guide: { label: 'WiFi troubleshooter', to: '/tools/wifi-troubleshooter' },
  },

  fix_offlineAny: {
    kind: 'fix',
    icon: RotateCcw,
    title: 'Offline fix — try this sequence',
    why: 'The "offline" message is a catch-all. This restart sequence fixes the vast majority of cases without you needing to dig into settings.',
    steps: [
      'Turn OFF the printer. Unplug it for 30 seconds. Plug back in. Power on.',
      'If WiFi: unplug the router for 30 seconds, plug back in. Wait 2 minutes.',
      'Restart your computer (not Shut Down — Restart).',
      'Once everything is back up, open the document and try to print.',
      'If still offline: on the computer, Settings → Printers → click your printer → Printer properties → uncheck "Use printer offline" / set "Printer Online."',
      'Clear the print queue — right-click the printer → See what\'s printing → Cancel All Documents.',
    ],
    ifFails: 'If the restart doesn\'t fix it, remove and re-add the printer. Remove first, then add — don\'t just install over the top.',
    proHelp: 'Offline that persists after full reset = driver issue. Reinstall the latest driver from the manufacturer.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 9. Weird colours ───────────────────────────────────── */
  weirdColors: {
    kind: 'question',
    title: 'What\'s wrong with the colours?',
    icon: Palette,
    options: [
      { label: 'Everything has a colour tint (yellow / blue / pink)', emoji: '',  next: 'fix_colorCalibrate' },
      { label: 'One colour is totally missing',                       emoji: '',  next: 'fix_clogHead' },
      { label: 'Only printing in black and white',                    emoji: '',  next: 'fix_colorMode' },
      { label: 'Colours swapped — reds where greens should be',       emoji: '',  next: 'fix_driverColor' },
    ],
  },

  fix_colorCalibrate: {
    kind: 'fix',
    icon: Palette,
    title: 'Run a colour calibration',
    why: 'Over time, ink flow gets slightly out of balance — one colour is delivered stronger, giving every print a tint. Calibration evens it out.',
    steps: [
      'On the printer screen: Settings → Maintenance → Calibrate Colour (may also be "Color Calibration" or "Colour Register").',
      'The printer prints a test pattern and reads it back automatically, or asks you to scan it back.',
      'Also run "Clean Print Heads" — sometimes the tint is from ONE clogged nozzle, not all.',
      'Check that ALL colour cartridges are above 25% — a nearly-empty cartridge throws off the colour mix.',
      'In the Print dialog, check Quality = Normal or High, and Paper Type matches your paper.',
      'Print a colour test page to confirm.',
    ],
    ifFails: 'If the tint persists after calibration, replace all colour cartridges — one may be old or leaking. Original cartridges give far more consistent colour than refills or generics.',
    proHelp: 'If calibration won\'t run, your printer may not have a built-in colour sensor. Buy a replacement colour cartridge set instead.',
    buying: 'For photo-accurate colour, stick with genuine cartridges. Third-party brands save money for text documents but can shift colour by 10–20% on photos.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_colorMode: {
    kind: 'fix',
    icon: Palette,
    title: 'Only printing in black and white',
    why: 'Every printer has a setting for "Color" vs "Grayscale / Black Only." If grayscale is on (or colour cartridges are empty), everything comes out black and white.',
    steps: [
      'In the Print dialog, click Properties or Preferences (the button near the printer name).',
      'Look for "Color" / "Grayscale" / "Print in Black & White" — make sure Color is selected.',
      'Check colour cartridge levels. If any colour is empty, many printers refuse to use colour at all. Replace any that are low.',
      'On the printer screen: Settings → check for a "Black Only" or "Economy Mode" — turn it off.',
      'Restart the printer after changing settings.',
      'Print a colour test page from the printer\'s own menu.',
    ],
    ifFails: 'If the printer only prints grayscale even with fresh colour cartridges and Color selected, the colour print head may be broken — see the "one colour missing" path.',
    proHelp: 'Some printers refuse to print colour when ANY cartridge is low — even if it\'s unrelated. Replace whichever cartridge is lowest and try again.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_driverColor: {
    kind: 'fix',
    icon: Wrench,
    title: 'Swapped colours — usually a driver issue',
    why: 'When reds come out as greens or blues as yellows, the printer driver is sending the wrong colour data. A driver reinstall almost always fixes it.',
    steps: [
      'Download the latest driver for your printer from the manufacturer\'s website.',
      'Uninstall the current driver. Windows: Settings → Apps → find your printer brand → Uninstall. Mac: System Settings → Printers & Scanners → remove the printer.',
      'Restart the computer.',
      'Install the new driver. Follow the installer\'s steps to connect the printer.',
      'Print a colour test page.',
      'If colours are still wrong, run the printer\'s built-in colour calibration (Settings → Maintenance → Calibrate Colour).',
    ],
    ifFails: 'If swapped colours survive a driver reinstall, try installing an older driver version from the manufacturer\'s archive. Some recent driver updates have colour bugs.',
    proHelp: 'If one cartridge was installed in the wrong slot, the printer will swap those colours. Open the printer and check each cartridge matches its label (C-M-Y-K).',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 10. Error lights ───────────────────────────────────── */
  errorLights: {
    kind: 'question',
    title: 'What do the error lights look like?',
    icon: AlertTriangle,
    options: [
      { label: 'Blinking orange / amber',                emoji: '',  next: 'fix_blinkingAmber' },
      { label: 'Solid red',                               emoji: '',  next: 'fix_solidRed' },
      { label: 'Blinking red',                            emoji: '',  next: 'fix_blinkingRed' },
      { label: 'Error code on the screen',                emoji: '',  next: 'fix_errorCode' },
    ],
  },

  fix_blinkingAmber: {
    kind: 'fix',
    icon: AlertTriangle,
    title: 'Blinking amber — usually a warning, not a failure',
    why: 'Amber blinking means "attention needed but not broken." Almost always: low ink, paper out, or a tray not closed fully.',
    steps: [
      'Open the front cover, then close it firmly. A half-latched door is the #1 false alarm.',
      'Check the paper tray — pull it out and push it back in until it clicks.',
      'Check for a paper jam — open all covers and look for any stuck sheets.',
      'Check ink / toner levels. Replace any that show low or empty.',
      'Look at the printer\'s screen for a specific message — it usually tells you exactly what\'s wrong.',
      'Turn the printer off, wait 30 seconds, turn back on. Minor glitches clear on restart.',
    ],
    ifFails: 'If amber keeps blinking after all checks, the printer may need a firmware update. Install the manufacturer\'s software on your computer and run it with the printer connected — it will update automatically.',
    proHelp: 'Persistent amber without a clear cause means a hardware sensor is glitching. An older printer isn\'t usually worth the repair.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_solidRed: {
    kind: 'fix',
    icon: AlertTriangle,
    title: 'Solid red — printer is stopped',
    why: 'Solid red means the printer has stopped and won\'t work until you clear the condition. Usually: paper jam, cartridge problem, or covers not fully closed.',
    steps: [
      'Check the printer\'s screen for an error message. Write it down exactly.',
      'Open every cover — front, top, back — and close each firmly. If any aren\'t latched, red will stay on.',
      'Check for paper jams. Even a small torn corner will trigger red.',
      'Check each cartridge is fully clicked into place — sometimes they sit loose after a paper jam removal.',
      'Turn the printer off, unplug for 60 seconds, plug back in. Many "stuck red" states clear with a full power cycle.',
      'If red persists, search "[your printer model] solid red light" for model-specific fixes.',
    ],
    ifFails: 'If everything looks fine but red stays solid, the printer\'s control board or internal sensor has failed. On home printers, this is a replace-not-repair situation.',
    proHelp: 'Note the light pattern when you contact support — the exact blink pattern is a code that technicians can decode.',
    replaceOrRepair: 'Solid red that survives a full reset on a 4+ year-old home printer = replace. New entry-level printers start at $80.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_blinkingRed: {
    kind: 'fix',
    icon: AlertTriangle,
    title: 'Blinking red — serious error, but often fixable',
    why: 'Blinking red usually means a more serious problem than amber — a head clog, a sensor error, or a firmware glitch. Most of the time a full reset and cartridge check will clear it.',
    steps: [
      'Turn the printer OFF and unplug it for 60 seconds. This matters — a quick off/on isn\'t a full reset.',
      'While unplugged, open all covers and check for jams, loose cartridges, or anything clearly wrong.',
      'Plug back in and turn on. Note what message or code appears.',
      'Search "[your printer model] blinking red [error code]" to find a model-specific fix.',
      'If no error code, try running the "restore factory defaults" option from the printer\'s menu — it clears sticky settings.',
      'Install the latest firmware by running the manufacturer\'s software on your computer while the printer is connected.',
    ],
    ifFails: 'If blinking red persists after reset and firmware update, the printer may be reporting a component failure (print head, sensor, or fuser). Repair quotes for major components often exceed the price of a new printer.',
    proHelp: 'For business-grade printers (Brother MFC, HP OfficeJet Pro, etc.) repair is often worth it. For under-$200 home printers, replacing is usually cheaper.',
    replaceOrRepair: 'Under-$200 printer with a major error after 3+ years = replace. Business printer ($500+) with the same error = get a repair quote.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 11. Out of ink ─────────────────────────────────────── */
  outOfInk: {
    kind: 'fix',
    icon: ShoppingCart,
    title: 'Replace the ink or toner cartridge',
    why: 'When a cartridge is truly empty, the only fix is a new one. Shaking or refilling rarely works well on modern printers. Get the right model, install it correctly, and you\'re back in business.',
    steps: [
      'Find your printer\'s EXACT model number. Look on the front, inside the lid, or on a sticker on the back. Example: "HP DeskJet 2755e" or "Brother HL-L2350DW."',
      'Find the cartridge number. It\'s printed on the current cartridge — e.g. "HP 67XL" or "Canon PG-245."',
      'Shop online: Amazon, Staples, Office Depot, Walmart, or the manufacturer\'s site. Search "[model number] ink cartridge."',
      'GENUINE cartridges (made by the printer brand) always work. Third-party ("compatible") cartridges are 40–60% cheaper but quality varies — stick with highly-rated brands if you go that route.',
      'Install: open the printer, remove the old cartridge (press the tab to release), unwrap the new one, REMOVE ALL PROTECTIVE TAPE, push in until it clicks.',
      'Close the printer and let it run its automatic alignment routine. Print a test page.',
    ],
    ifFails: 'If the printer doesn\'t recognise the new cartridge, wipe the gold contacts with a dry lint-free cloth, reseat it, and power-cycle the printer.',
    proHelp: 'If you print very rarely (less than once a month), consider switching to a laser printer or ink-tank printer (Epson EcoTank, HP Smart Tank). Inkjet cartridges dry out between uses; laser toner doesn\'t.',
    buying: 'XL or high-yield cartridges print 2–3× more pages than standard — usually the better value. A genuine HP 67XL prints ~240 pages; the standard HP 67 prints ~120 pages for 70% of the price. The XL wins every time. Keep receipts — faulty cartridges can be returned.',
    replaceOrRepair: 'If a full set of genuine cartridges costs more than half the price of a new printer, buy a new printer. The new one comes with starter cartridges too.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  /* ── 12. Duplex ─────────────────────────────────────────── */
  duplex: {
    kind: 'question',
    title: 'What\'s happening with two-sided printing?',
    icon: Layers,
    options: [
      { label: 'Paper jams on the second side',          emoji: '',  next: 'fix_duplexJam' },
      { label: 'Second side comes out blank',             emoji: '',  next: 'fix_duplexBlank' },
      { label: 'Pages print upside-down / wrong order',   emoji: '',  next: 'fix_duplexOrientation' },
      { label: 'My printer doesn\'t do two-sided',        emoji: '',  next: 'fix_manualDuplex' },
    ],
  },

  fix_duplexJam: {
    kind: 'fix',
    icon: Layers,
    title: 'Duplex jams — usually the paper is too light or damp',
    why: 'Duplex printing flips the page through a tight internal path. Thin paper curls, damp paper sticks, and heavy paper gets wedged. A middle-weight dry sheet goes through fine.',
    steps: [
      'Use 20 lb / 75 gsm copier paper. Photo paper, card stock, and onion-skin all jam in duplex mode.',
      'Make sure paper is fresh — humid paper curls during the flip and jams.',
      'Clean the duplex unit. Most printers have a removable duplex module on the BACK — pull the lever, pop the unit out, look for stuck paper or torn scraps, put it back.',
      'Reduce the amount of paper in the tray. Duplex works best with less paper loaded, not a fully stuffed tray.',
      'If the jam happens every time, switch to manual duplex (print odd pages, flip the stack, print even pages) — see next fix.',
      'Update printer firmware — duplex bugs are often patched.',
    ],
    ifFails: 'If duplex jams every time even with fresh paper, the duplex unit has worn rollers. Some printers let you swap the duplex module ($25–$50).',
    proHelp: 'On business-class printers, duplex is usually reliable. If yours jams constantly, the duplex was an add-on accessory and may not be well-matched.',
    replaceOrRepair: 'If duplex jams force you to baby every print, and the printer is 3+ years old, upgrade. Modern duplex units are much more reliable.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_duplexBlank: {
    kind: 'fix',
    icon: Layers,
    title: 'Second side blank — check the driver setting',
    why: 'If the back of each sheet comes out blank, the printer isn\'t actually running duplex — it\'s single-sided but using duplex paper timing. Usually a driver checkbox.',
    steps: [
      'In the Print dialog, click Properties or Preferences.',
      'Look for "Two-Sided," "Duplex," or "Print on Both Sides." Make sure it\'s set to "Long Edge" (normal book) or "Short Edge" (flip top).',
      'Confirm the printer model supports duplex. Check the spec sheet or press Settings → About on the printer.',
      'If your printer model doesn\'t do auto-duplex, use manual duplex (print pages 1, 3, 5…, flip, print 2, 4, 6…).',
      'Some drivers show a "manual duplex" option that prompts you to flip the stack halfway through.',
      'Update the printer driver if options look missing.',
    ],
    ifFails: 'If duplex is enabled but the back is still blank, the ink / toner for one side isn\'t reaching the paper — this is rare but points to an internal mechanical issue. See a pro.',
    proHelp: 'If duplex was ever working and just stopped, update the firmware. A recent update sometimes breaks the duplex function.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_duplexOrientation: {
    kind: 'fix',
    icon: Layers,
    title: 'Upside-down or wrong-order pages',
    why: 'Duplex has two binding options: long edge (like a book) and short edge (like a calendar flip). Picking the wrong one makes every other page upside-down.',
    steps: [
      'In the Print dialog, look for the "Two-Sided" option with two choices: "Long Edge" and "Short Edge."',
      'For book-style documents (normal reading), pick LONG EDGE.',
      'For calendar or notepad style (flip top), pick SHORT EDGE.',
      'Try printing a 2-page test with each option to see which you want.',
      'If pages are coming out in reverse order (last page first), look for "Reverse order printing" and turn it OFF.',
      'Save the chosen setting as your default if the driver offers that option.',
    ],
    ifFails: 'If the orientation stays wrong no matter what, the printer driver may be outdated. Reinstall the latest driver from the manufacturer.',
    proHelp: 'Some programs (especially older Office versions) override the printer driver. Print as PDF first, then print the PDF — that bypasses program quirks.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_manualDuplex: {
    kind: 'fix',
    icon: Layers,
    title: 'Manual duplex — print two-sided on any printer',
    why: 'Most printers can do two-sided manually even without auto-duplex. It takes an extra step but works fine for occasional double-sided printing.',
    steps: [
      'In the Print dialog, find "Print" dropdown or "Pages to Print." Pick "Odd Pages Only."',
      'Click Print. Pages 1, 3, 5… print.',
      'Take the printed stack. DO NOT shuffle or flip it end-to-end. Just turn it over top-to-bottom (so the printed side faces down and the top edge stays the same).',
      'Load the flipped stack back into the paper tray.',
      'In the Print dialog, choose "Even Pages Only" → Print.',
      'Watch which way the first sheet feeds and learn the rhythm. Once you\'ve done it twice it\'s easy.',
    ],
    ifFails: 'If pages come out in the wrong order, your printer stacks face-up. Try flipping the stack in the OTHER direction — side-to-side instead of top-to-bottom.',
    proHelp: 'Print one test page first with "Print page 1." Note which side is up when it comes out. That tells you how to flip for the second pass.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 13. Scanner ────────────────────────────────────────── */
  scanner: {
    kind: 'question',
    title: 'What happens when you try to scan?',
    icon: Scan,
    options: [
      { label: 'Computer doesn\'t find the scanner',      emoji: '',  next: 'fix_scannerFind' },
      { label: 'Scanner error message',                    emoji: '',  next: 'fix_scannerError' },
      { label: 'Scans come out blank or black',            emoji: '',  next: 'fix_scannerBlank' },
      { label: 'Scans to email aren\'t sending',           emoji: '',  next: 'fix_scanEmail' },
    ],
  },

  fix_scannerFind: {
    kind: 'fix',
    icon: Scan,
    title: 'Computer doesn\'t see the scanner',
    why: 'Most all-in-ones use the same driver for printing and scanning. If the computer can print but not scan, the scanner part of the driver didn\'t install, or the scanner software isn\'t launched.',
    steps: [
      'Install the FULL driver package (not just "print driver") from the manufacturer\'s website. Search "[model] full driver" or "[model] software suite."',
      'Open the manufacturer\'s scanner app — HP Smart, Canon IJ Scan Utility, Epson Scan, Brother iPrint&Scan.',
      'On Windows: open "Windows Fax and Scan" (search for it in Start). Click "New Scan" and see if your printer appears.',
      'On Mac: open Image Capture (Applications → Image Capture). Your printer should be in the left panel.',
      'Make sure the printer is on, connected, and not paused.',
      'Some printers have a "Scan To Computer" option that has to be enabled from the printer\'s menu or the manufacturer\'s app.',
    ],
    ifFails: 'If the scanner still doesn\'t appear, uninstall and reinstall the full printer software. Use the manufacturer\'s "removal tool" if they offer one — a normal uninstall often leaves scanner bits behind.',
    proHelp: 'On older macOS versions with newer printers (or vice versa), the scanner may not be supported. Check the manufacturer\'s "compatible OS versions" page.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_scannerError: {
    kind: 'fix',
    icon: Scan,
    title: 'Scanner error — common fixes',
    why: 'Scanner errors usually mean the mechanism is stuck (transport lock on), the lid is open, or the scanner is trying to talk to the computer but losing the signal.',
    steps: [
      'Check the "transport lock" — some printers have a tiny switch next to the scanner glass that locks the scanner during shipping. Make sure it\'s UNLOCKED (in the print position, not shipping position).',
      'Close the scanner lid fully.',
      'Turn the printer off, unplug for 60 seconds, plug back in, turn on. A full reset clears most stuck scanner states.',
      'Make sure nothing is on the scanner bed — a tiny scrap or eraser crumb can jam the sensor.',
      'Update the printer firmware and driver.',
      'Try scanning again after the reset.',
    ],
    ifFails: 'If the scanner still errors, the scan head may be stuck. Gently lift the scanner lid and look for any obstruction. Never force the scanner mechanism with your hands.',
    proHelp: 'A scanner that errors with nothing on the bed and no lock engaged needs professional attention — the scan head motor or sensor has failed.',
    replaceOrRepair: 'On an all-in-one that\'s 4+ years old, a failed scanner is rarely worth repairing. Replacement AIO printers start at $120.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_scannerBlank: {
    kind: 'fix',
    icon: Scan,
    title: 'Scans come out blank or black',
    why: 'Blank or black scans usually mean the document is face-up when it should be face-down, the scanner glass is dirty, or the resolution is set absurdly low.',
    steps: [
      'Place the document FACE DOWN on the scanner glass. Line the top-left corner of the document with the corner arrow on the glass.',
      'Close the lid gently.',
      'Clean the scanner glass with a soft microfibre cloth and a tiny bit of glass cleaner — NOT sprayed directly. Spray the cloth, then wipe.',
      'Check scan settings in the scanner software: Resolution should be at least 300 DPI, Color Mode "Color" or "Grayscale" (not monochrome).',
      'Preview the scan before saving to catch problems early.',
      'Try scanning a clearly-printed test page — like a magazine cover — to rule out faint-original issues.',
    ],
    ifFails: 'If scans are still black, the scanner lamp (the bright bar under the glass) may have failed. Open the lid, press Start Scan, and look for the moving light — if you see no light, the lamp is dead.',
    proHelp: 'A dead scanner lamp is usually not economical to repair on home printers. Time to replace.',
    replaceOrRepair: 'Dead scanner lamp on a 3+ year-old home AIO = replace. Lamps cost $40–$80 plus labour to install.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_scanEmail: {
    kind: 'fix',
    icon: Scan,
    title: 'Scan to email not sending',
    why: 'Scan-to-email works by the printer logging into your email account and sending from there. Most providers (Gmail, Outlook, Yahoo) now require "app passwords" or special settings that printers need configured.',
    steps: [
      'Go to the printer\'s embedded web page: open a web browser on your computer and type the printer\'s IP address (find it on the printer\'s Network Settings screen).',
      'Find "Scan to Email" → "Setup" or "SMTP settings."',
      'Enter your email provider\'s SMTP info. Gmail: smtp.gmail.com, port 587 or 465. Outlook: smtp-mail.outlook.com, port 587.',
      'Enter your email address AND an "app password" (NOT your regular email password). Gmail: myaccount.google.com/apppasswords. Outlook has a similar page.',
      'Test by sending a scan to your own email address. Check the spam folder too.',
      'If your email provider doesn\'t support SMTP, use "Scan to Folder" or "Scan to Computer" instead — then email from your computer.',
    ],
    ifFails: 'If scan-to-email refuses to work after correct app-password setup, your email provider may have blocked "less secure apps" — check your account security settings.',
    proHelp: 'Scan to Email is the flakiest printer feature. The reliable alternative is Scan to Folder (to a shared network folder) or use the HP Smart / Canon PRINT / Epson Smart Panel app on your phone — scan then send as an email from the app.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },
};

// Multi-choice start question options
const START_OPTIONS = [
  { label: 'Printer says "Offline"', emoji: '', next: 'offline_q1' },
  { label: 'Paper jam', emoji: '', next: 'jam_q1' },
  { label: 'Print quality is poor (faded, streaky, blurry)', emoji: '', next: 'quality_q1' },
  { label: 'Ink or toner problem', emoji: '', next: 'ink_q1' },
];

// Multi-choice for USB vs WiFi connection type
const CONNECTION_OPTIONS = [
  { label: 'USB cable (plugged in)', emoji: '', next: 'offline_usb' },
  { label: 'WiFi (wireless)', emoji: '', next: 'offline_wifi' },
  { label: 'I\'m not sure', emoji: '', next: 'offline_usb' },
];

// Multi-choice for print quality issue type
const QUALITY_OPTIONS = [
  { label: 'Faded or light printing', emoji: '', next: 'quality_faded' },
  { label: 'Streaks or lines on the page', emoji: '', next: 'quality_streaky' },
  { label: 'Blurry or smudged', emoji: '', next: 'quality_blurry' },
];

export default function PrinterTroubleshooter() {
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
        title="Printer Troubleshooter | TekSure"
        description="Printer acting up? Answer a couple of simple questions and get clear, step-by-step fixes — won't print, paper jams, WiFi, offline, blank pages, error lights, ink and more. Senior-friendly and 100% plain language."
        path="/tools/printer-troubleshooter"
      />
      <Navbar />
      <main id="main-content" className="container py-12 min-h-[80vh] max-w-2xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="absolute right-0 top-0">
            <BookmarkButton
              type="tool"
              slug="printer-troubleshooter"
              title="Printer Troubleshooter"
              url="/tools/printer-troubleshooter"
            />
          </div>
          <div className="flex items-center gap-3 mb-2 pr-14">
            <div className="rounded-xl bg-primary/10 p-2">
              <Printer className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Printer Troubleshooter</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Printer acting up? Pick the symptom, answer a couple of simple questions, and we'll
            walk you through the fix in plain English. You can go back any time — nothing breaks by
            trying.
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
            {/* Urgent banner — for hot fuser, toner spills, anything safety-critical */}
            {current.urgent && (
              <div className="mb-4 rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-950/40 dark:border-red-700 p-4">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="h-6 w-6 text-red-700 dark:text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-red-900 dark:text-red-200 mb-1 uppercase tracking-wide">
                      Safety first
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

            {/* Why this fix works — BLUE info callout */}
            <Card className="mb-5 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 flex gap-3">
                <Lightbulb className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">Why this works</p>
                  <p className="text-base text-blue-900/95 dark:text-blue-100/95 leading-relaxed">{current.why}</p>
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

            {/* If this didn't work — AMBER callout */}
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

            {/* Pro help — ORANGE callout */}
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

            {/* Replace vs repair — PURPLE callout */}
            {current.replaceOrRepair && (
              <Card className="mb-5 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                <CardContent className="p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-purple-700 dark:text-purple-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-1">
                      Repair or replace?
                    </p>
                    <p className="text-base text-purple-900/95 dark:text-purple-100/95 leading-relaxed">
                      {current.replaceOrRepair}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Buying guidance — SKY-BLUE callout */}
            {current.buying && (
              <Card className="mb-5 bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800">
                <CardContent className="p-4 flex gap-3">
                  <ShoppingCart className="h-5 w-5 text-sky-700 dark:text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-sky-900 dark:text-sky-300 mb-1">
                      Buying ink &amp; supplies
                    </p>
                    <p className="text-base text-sky-900/95 dark:text-sky-100/95 leading-relaxed">
                      {current.buying}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related guide + Ask TekBrain fallback */}
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

            {/* Reassurance */}
            <Card className="mb-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
              <CardContent className="p-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-1">
                    You're doing great.
                  </p>
                  <p className="text-base text-green-900/95 dark:text-green-100/95 leading-relaxed">
                    Printer problems feel harder than they are — nearly all of them come down to
                    cables, cartridges, paper, or a restart. Go back any time if the fix doesn't
                    match what you see.
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
