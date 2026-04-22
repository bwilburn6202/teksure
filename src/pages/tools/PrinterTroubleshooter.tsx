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
    kind: 'question',
    title: 'What\'s going wrong with your printer?',
    subtitle: 'Pick the problem that sounds most like yours. You can always go back.',
    options: [
      { label: 'It won\'t print at all',                emoji: '',  desc: 'I click Print and nothing happens',       next: 'wontPrint' },
      { label: 'It prints completely blank pages',       emoji: '',  desc: 'Paper comes out but nothing is on it',    next: 'blankPages' },
      { label: 'Ink spots or smudges on the paper',      emoji: '',  desc: 'Smears, blotches, or wet-looking marks',  next: 'smudges' },
      { label: 'Prints look faded or streaky',           emoji: '',  desc: 'Pale, missing lines, uneven colour',      next: 'faded' },
      { label: 'Paper is jammed',                        emoji: '',  desc: 'Paper stuck inside, "jam" message',       next: 'paperJam' },
      { label: 'Can\'t connect to WiFi',                 emoji: '',  desc: 'Printer won\'t join my home network',     next: 'wifiConnect' },
      { label: 'My computer can\'t find the printer',    emoji: '',  desc: 'Printer isn\'t in the list of printers',  next: 'computerFind' },
      { label: 'Printer says "Offline"',                 emoji: '',  desc: 'Shows offline even though it\'s on',      next: 'offline' },
      { label: 'Weird colours — wrong or missing',       emoji: '',  desc: 'Greens look blue, reds are pink, etc.',   next: 'weirdColors' },
      { label: 'Error lights or messages flashing',      emoji: '',  desc: 'Orange / red light or an error code',     next: 'errorLights' },
      { label: 'Out of ink or toner',                    emoji: '',  desc: 'Cartridge is empty or almost empty',      next: 'outOfInk' },
      { label: 'Two-sided (duplex) printing trouble',    emoji: '',  desc: 'Jamming or one side is blank',            next: 'duplex' },
      { label: 'Scanner isn\'t working',                 emoji: '',  desc: 'Can\'t scan to email or computer',        next: 'scanner' },
    ],
  },

  /* ── 1. Won't print at all ───────────────────────────────── */
  wontPrint: {
    kind: 'question',
    title: 'Is the printer turned on?',
    subtitle: 'Look for a green, blue, or white power light on the front.',
    icon: Power,
    options: [
      { label: 'No — no lights at all',           emoji: '',  desc: 'Display is dark, nothing happens',   next: 'fix_powerOn' },
      { label: 'Yes — power light is on',         emoji: '',  desc: 'Ready / idle light is showing',      next: 'wontPrint_error' },
      { label: 'Light is blinking',               emoji: '',  desc: 'Amber or red blinking',              next: 'errorLights' },
    ],
  },
  wontPrint_error: {
    kind: 'question',
    title: 'Is there an error message or warning light?',
    subtitle: 'Check the small screen on the front of the printer.',
    options: [
      { label: 'Yes — a message I can read',      emoji: '',  desc: 'Something like "out of paper" or "jam"', next: 'wontPrint_errorType' },
      { label: 'No — looks ready to print',       emoji: '',  desc: 'Display says Ready / Idle / nothing',    next: 'wontPrint_basics' },
    ],
  },
  wontPrint_errorType: {
    kind: 'question',
    title: 'What does the error say?',
    options: [
      { label: 'Paper jam',                       emoji: '',  next: 'paperJam' },
      { label: 'Out of ink / toner',              emoji: '',  next: 'outOfInk' },
      { label: 'Offline',                         emoji: '',  next: 'offline' },
      { label: 'Something else — just a code',    emoji: '',  next: 'fix_errorCode' },
    ],
  },
  wontPrint_basics: {
    kind: 'question',
    title: 'Let\'s check the basics — which of these are you sure about?',
    subtitle: 'One of these is the cause 95% of the time.',
    options: [
      { label: 'Paper is in the tray',            emoji: '',  desc: '...and not low',                      next: 'wontPrint_cartridge' },
      { label: 'Not sure — I\'ll add paper',      emoji: '',  next: 'fix_loadPaper' },
    ],
  },
  wontPrint_cartridge: {
    kind: 'question',
    title: 'Is the ink or toner cartridge installed?',
    subtitle: 'Open the front or top cover and check — the cartridge should click firmly into place.',
    options: [
      { label: 'Yes — it\'s in there',            emoji: '',  next: 'wontPrint_cables' },
      { label: 'No, or I\'m not sure',            emoji: '',  next: 'fix_insertCartridge' },
    ],
  },
  wontPrint_cables: {
    kind: 'question',
    title: 'Is the printer connected to your computer or WiFi?',
    options: [
      { label: 'USB cable — plugged in',          emoji: '',  next: 'fix_restartAll' },
      { label: 'WiFi — solid signal light',       emoji: '',  next: 'fix_restartAll' },
      { label: 'Not sure / cable looks loose',    emoji: '',  next: 'fix_cables' },
    ],
  },

  fix_powerOn: {
    kind: 'fix',
    icon: Power,
    title: 'Plug it in and power it up',
    why: 'Most "dead" printers aren\'t broken — the power cable has wiggled loose, the power strip is off, or the power button needs a firm press. Power is the #1 no-print cause.',
    steps: [
      'Check that the power cable is pushed FIRMLY into the back of the printer. It should not wiggle. Many printer cables look plugged in but are loose.',
      'Check the other end of the cable — is it in a working wall outlet? If it\'s a power strip, make sure the strip\'s switch is ON.',
      'Plug a lamp or phone charger into the same outlet to confirm it has power.',
      'Press the power button on the printer. Hold it for 2 full seconds — some printers don\'t respond to a quick tap.',
      'Wait 30 seconds. The printer may make warm-up noises and cycle through a start-up screen. That\'s normal.',
      'Once the power light is on and steady (not blinking), try printing a test page.',
    ],
    ifFails: 'If nothing happens with a confirmed-good outlet and a firm button press, try a different power cable — many printers use a standard "kettle lead" that any electronics store sells for $5–$10.',
    proHelp: 'If the printer was recently moved, dropped, or spilled on — or if it clicks then dies — the power supply inside is likely blown. On cheap printers this repair costs more than a new one.',
    replaceOrRepair: 'If your printer is 5+ years old and the power supply is dead, replace rather than repair. A new entry-level printer costs $80–$150 — usually less than most repairs.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_loadPaper: {
    kind: 'fix',
    icon: FileText,
    title: 'Load paper the right way',
    why: 'Printers often say "out of paper" when paper IS there — usually because it\'s loaded wrong, the stack is too tall, or the side guides aren\'t snug against the sheets.',
    steps: [
      'Pull the paper tray all the way out (or open the back tray flap).',
      'Fan the paper stack — hold one edge and let the sheets flutter. This stops them from sticking together.',
      'Put the paper in flat — don\'t overfill. Most trays have a "max" line printed inside.',
      'Slide the paper guides (little plastic arms on the sides) so they lightly touch the edges of the stack. Too tight = jams; too loose = misfeeds.',
      'Push the tray back in firmly until it clicks.',
      'Try printing again. If the printer still says "out of paper," take the stack out and put it back with the other side up — one side may be curled from the packaging.',
    ],
    ifFails: 'If the printer keeps saying out of paper, the pickup roller (the little rubber wheel that grabs paper) may be worn out. Clean it with a damp lint-free cloth. If still no luck, rollers wear out every few years — replacement kits run $20–$40.',
    proHelp: 'If the printer makes a grinding or clacking sound when trying to pull paper, stop printing and see a pro — the pickup gear may be stripped.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_insertCartridge: {
    kind: 'fix',
    icon: Wrench,
    title: 'Install the ink or toner cartridge',
    why: 'Printers refuse to print without a recognised cartridge — even a tiny misalignment, or the protective tape left on, makes it act empty.',
    steps: [
      'Open the front or top cover. On most printers the cartridge carrier will slide to the middle so you can reach it.',
      'Take the new cartridge out of the foil wrapper. Pull off ALL protective tape — usually a bright orange, blue, or clear plastic strip on the bottom.',
      'Don\'t touch the gold contacts or the print nozzle underneath. Oil from your fingers can stop it from working.',
      'Slide the cartridge in the same way the old one came out. Push down gently until you hear a firm click.',
      'Close the cover. The printer will run a short alignment cycle — let it finish.',
      'Print a test page from the printer\'s menu to confirm.',
    ],
    ifFails: 'If the printer still shows "cartridge missing" after a firm install, remove the cartridge, wipe the gold contacts with a dry lint-free cloth, wipe the matching contacts inside the printer, then reinsert.',
    proHelp: 'If you bought a "compatible" third-party cartridge and the printer refuses it, some brands block non-original cartridges. You may need a genuine one.',
    buying: 'Write down your printer\'s exact model (e.g. "HP DeskJet 2755e"). Staples, Office Depot, Amazon, and Walmart all carry the major brands. Genuine cartridges cost more but always work. Third-party cartridges are cheaper but quality varies — stick with highly rated brands if you go that route.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_cables: {
    kind: 'fix',
    icon: Plug,
    title: 'Reseat every cable and restart everything',
    why: 'A cable that looks plugged in can still be loose. The most common "won\'t print" cause is a USB cable half-seated in the back — reseat it and most printers spring back to life.',
    steps: [
      'Turn off the printer and your computer.',
      'Unplug the USB cable (or network cable) from BOTH ends. Wait 10 seconds.',
      'Plug the cable back in firmly — printer end first, computer end second. You should feel a click.',
      'If it\'s a WiFi printer, check that the WiFi light on the front is solid (not blinking). If it\'s blinking, your printer has lost WiFi — go back and pick the WiFi path.',
      'Power the printer back on. Wait a full minute for it to finish warming up.',
      'Start the computer. Try printing a test page.',
    ],
    ifFails: 'If reseating didn\'t help, try a different USB port on your computer and a different USB cable. USB cables fail silently — the wires inside can break where you can\'t see.',
    proHelp: 'If you\'ve tried two cables and two ports and still no connection, the printer\'s USB port may have failed. Most printers have a WiFi option — set that up instead, or see a pro.',
    guide: { label: 'Home network map', to: '/tools/home-network-map' },
  },

  fix_restartAll: {
    kind: 'fix',
    icon: RotateCcw,
    title: 'Restart the printer AND the computer',
    why: 'When everything looks fine but nothing prints, the computer\'s print queue has usually gotten stuck. A restart clears it — this fixes most "won\'t print" cases with zero other changes.',
    steps: [
      'Turn off the printer completely using the power button. Unplug it for 30 seconds, then plug back in.',
      'On your computer, Restart (not just Shut Down — a Restart clears memory more thoroughly). Windows: Start → Power → Restart. Mac: Apple menu → Restart.',
      'Once the computer is back up, turn the printer back on and wait a minute for it to finish warming up.',
      'Open the document you want to print. Click File → Print → choose your printer → Print.',
      'If nothing prints, click the tiny printer icon in the taskbar (Windows) or Dock (Mac) to open the print queue. Delete any stuck jobs you see.',
      'Try printing one more time.',
    ],
    ifFails: 'If restarts don\'t help, remove and re-add the printer on your computer. Windows: Settings → Bluetooth & devices → Printers & scanners → click the printer → Remove, then Add device. Mac: System Settings → Printers & Scanners → select printer → minus, then plus.',
    proHelp: 'If the printer is recognised but never prints, the print driver is out of date. Go to the manufacturer\'s website, search for your model, and download the latest driver.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_errorCode: {
    kind: 'fix',
    icon: AlertCircle,
    title: 'Look up the specific error code',
    why: 'Printer error codes are specific to your model — the fix for "E-04" on a Brother is different from "E-04" on a Canon. The quickest path is to look up YOUR exact error.',
    steps: [
      'Write down the EXACT error code or message. "E-04," "B200," "50.2," etc. Include any words that appear.',
      'Find your printer\'s model number. It\'s on a sticker on the front, inside the lid, or on the back.',
      'In your web browser, search for "[model number] [error code]." For example: "HP Envy 6055 E-04 error."',
      'Open the manufacturer\'s official support page — usually the top result. Avoid shady third-party "fix it" sites.',
      'Follow the steps exactly. Most error codes map to: paper jam, cartridge issue, connection problem, or firmware update needed.',
      'If you can\'t find your specific code, try turning the printer OFF for 60 seconds, then back on — many errors clear themselves.',
    ],
    ifFails: 'If the manufacturer\'s steps don\'t work, the printer may need a firmware update. Install the printer\'s software on your computer (from the manufacturer\'s website) and let it update automatically.',
    proHelp: 'Error codes that mention "service," "hardware failure," or "contact support" on the printer\'s own screen mean it\'s a repair-shop problem.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 2. Blank pages ─────────────────────────────────────── */
  blankPages: {
    kind: 'question',
    title: 'Did you recently install a new ink or toner cartridge?',
    icon: FileText,
    options: [
      { label: 'Yes — blank pages started right after', emoji: '🆕',  next: 'fix_cartridgeTape' },
      { label: 'No — cartridge has been in a while',    emoji: '',  next: 'blankPages_head' },
    ],
  },
  blankPages_head: {
    kind: 'question',
    title: 'Does the printer\'s own test page come out blank too?',
    subtitle: 'On the printer\'s screen: Menu → Reports → Print Test Page (or similar).',
    options: [
      { label: 'Yes — test page is also blank',         emoji: '',  next: 'fix_cleanHeads' },
      { label: 'No — test page prints fine',            emoji: '',  next: 'fix_computerSide' },
      { label: 'Not sure how to print a test page',     emoji: '',  next: 'fix_cleanHeads' },
    ],
  },

  fix_cartridgeTape: {
    kind: 'fix',
    icon: Wrench,
    title: 'Remove the protective tape from the new cartridge',
    why: 'Every new ink or toner cartridge ships with a protective strip over the nozzle or drum — usually bright orange, blue, or clear. If you don\'t peel it off, the ink physically can\'t get out. Blank pages follow.',
    steps: [
      'Open the printer and take the new cartridge back out.',
      'Look on the bottom and back of the cartridge for a plastic tape or film strip. It usually has a coloured tab labelled "Pull" or a little arrow.',
      'Pull the tape off smoothly. On toner cartridges, it comes out as one long strip — keep pulling until it\'s fully out.',
      'Check for a second piece — some inkjet cartridges have TWO tapes (nozzle seal + vent seal).',
      'Reinsert the cartridge, close the printer, and let it run its automatic alignment.',
      'Print a test page.',
    ],
    ifFails: 'If all the tape is definitely off and the printer still prints blank, the cartridge may be defective. Take it back to where you bought it — most stores will exchange a bad cartridge.',
    proHelp: 'If your NEW original cartridge is faulty, the manufacturer will almost always send a free replacement. Call their support with the cartridge serial number ready.',
    buying: 'Genuine cartridges list a "yield" in pages (e.g. 220 pages). "XL" or "high-yield" versions print 2–3× as many pages for roughly 1.5× the price — better value for heavy users.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_cleanHeads: {
    kind: 'fix',
    icon: Droplets,
    title: 'Run a print-head cleaning cycle',
    why: 'Ink dries inside the tiny nozzles when you don\'t print for a week or two. Dried ink = no ink reaching the paper. Cleaning cycles flush them with a small amount of ink and usually clear the clog.',
    steps: [
      'On the printer\'s screen: Settings → Maintenance (or Tools → Service).',
      'Tap "Clean Print Heads" or "Print Head Cleaning." The printer will run for 1–2 minutes and use a small amount of ink.',
      'When it finishes, print a test page or nozzle-check pattern.',
      'If the pattern is still missing sections, run the clean cycle again. Sometimes two or three rounds are needed.',
      'For stubborn clogs, look for "Deep Clean" in the same menu — it uses more ink but clears worse clogs.',
      'For laser printers: there\'s no print head. Open the front and gently rock the toner cartridge side-to-side to redistribute the powder, then reinstall.',
    ],
    ifFails: 'If three clean cycles don\'t restore printing, the print head is truly clogged dry. Some Epson and Canon printers let you replace the print head yourself ($30–$80). On other brands it\'s sealed — time to replace the printer.',
    proHelp: 'If cleaning cycles don\'t help and the test pattern is completely blank, the cartridge is empty of ink even if the printer says otherwise — try a fresh cartridge.',
    replaceOrRepair: 'If your printer is 3+ years old and the print head is dead, replace it. A new print head plus labour often costs more than a new printer.',
    buying: 'If you don\'t print often, switch to a laser printer or an ink-tank printer (Epson EcoTank, HP Smart Tank). Inkjet cartridges dry out between uses; laser toner doesn\'t.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_computerSide: {
    kind: 'fix',
    icon: FileText,
    title: 'The printer is fine — the document or software is the problem',
    why: 'When the printer\'s own test page prints but your document comes out blank, the trouble is on the computer side. Usually an empty page, a font issue, or the wrong part of the document got selected.',
    steps: [
      'Check if the document has white text on a white background, or is just blank. Scroll through it.',
      'In the Print dialog, check the "Pages" setting — make sure it\'s not set to a page range that\'s empty.',
      'Try printing a DIFFERENT document. Open Notepad or TextEdit, type "Hello," and print. If that prints, the first document had the blank issue.',
      'On Windows: update your printer driver. Settings → Bluetooth & devices → Printers & scanners → click your printer → Printer properties → look for updates.',
      'On Mac: System Settings → Printers & Scanners → remove the printer, then re-add it using the latest driver.',
      'If a specific program prints blank but others don\'t, try "Print as PDF" first, then open and print the PDF.',
    ],
    ifFails: 'If only one app prints blank, try updating that app. Adobe Reader, Word, and browsers all get printing bugs periodically.',
    proHelp: 'If every program prints blank but the printer\'s own test is fine, uninstall and reinstall the printer driver from the manufacturer\'s site.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 3. Smudges / ink spots ─────────────────────────────── */
  smudges: {
    kind: 'question',
    title: 'Where do the smudges or spots appear?',
    icon: Droplets,
    options: [
      { label: 'All over — wet, blotchy ink',        emoji: '',  desc: 'Looks wet right after it prints',      next: 'fix_wetInk' },
      { label: 'Lines or streaks on one side',       emoji: '',  desc: 'Recurring smears in the same spot',    next: 'fix_dirtyRollers' },
      { label: 'Ink smears when I touch the page',   emoji: '',  desc: 'Ink hasn\'t set',                      next: 'fix_wetInk' },
      { label: 'Black dots or random specks',        emoji: '',  desc: 'Tiny spots on otherwise clean pages',  next: 'fix_dirtyInside' },
    ],
  },

  fix_wetInk: {
    kind: 'fix',
    icon: Droplets,
    title: 'Wet ink and smudges — give it time and adjust settings',
    why: 'Inkjet ink takes a few seconds to dry. If it\'s pooling on the page or smearing when touched, the printer is putting down too much ink for the paper, or the paper is wrong for the setting.',
    steps: [
      'Wait 60 seconds before handling a freshly printed page. Impatience causes most "smudge" complaints.',
      'In the Print dialog, find "Paper Type" (or "Media Type") and make sure it matches what\'s in the tray — "Plain paper" for copier paper, "Photo paper" for glossy.',
      'Turn the print quality DOWN. Click Print → Properties → Quality → choose "Normal" or "Draft" instead of "Best." Best uses more ink, which needs more time to dry.',
      'If you\'re printing on both sides, wait for each side to dry completely before running it through again.',
      'Check if the paper is damp. Paper stored near a humidifier, in a basement, or in a humid garage gets soggy. Store it in a dry sealed bag.',
      'Clean the rollers if smudges persist — see the "lines on one side" fix.',
    ],
    ifFails: 'If smudges continue with good paper and normal quality, the ink cartridge may be over-delivering ink — a sign of a defective cartridge.',
    proHelp: 'If fresh prints look fine but brush off easily, the fuser (laser) or drying system may be underperforming. Laser printers have a maintenance kit roughly every 50,000 pages.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_dirtyRollers: {
    kind: 'fix',
    icon: Wrench,
    title: 'Clean the paper rollers',
    why: 'The rubber rollers that pull paper through pick up ink residue, dust, and paper fibres over time. A dirty roller transfers a streak to every page in the same spot.',
    steps: [
      'Turn off the printer and unplug it.',
      'Open all covers and find the rollers — small grey or black rubber wheels on the inside. Often visible when the paper tray is removed.',
      'Dampen a lint-free cloth (not a paper towel) with distilled water — NOT alcohol, which dries rubber.',
      'Wipe each roller gently, rotating it with your finger as you go. The cloth will come away grey or black — that\'s normal.',
      'Let everything dry for 15 minutes. Plug back in and turn on.',
      'Print 2–3 test pages. The first page may still have a streak, but subsequent ones should be clean.',
    ],
    ifFails: 'If streaks continue in the exact same spot, the roller may be cracked or hardened with age. Replacement roller kits run $15–$30 for most printer models.',
    proHelp: 'If the streak is a colour (not grey/black) and appears in a thin vertical line, the print head is clogged on one nozzle — see the "faded or streaky" path instead.',
    replaceOrRepair: 'If the printer is 6+ years old and rollers are worn, replace the printer. Most home printers aren\'t worth deep servicing.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_dirtyInside: {
    kind: 'fix',
    icon: Wrench,
    title: 'Clean inside the printer',
    why: 'Random black dots are spilled toner or stray ink drops sitting inside the paper path. Every page that passes picks some up. A simple wipe-out fixes it.',
    urgent: 'Never spray liquid or water directly inside the printer. Only dampen a cloth for rollers, and never get water on electronic parts.',
    steps: [
      'Turn off and unplug the printer. Let it cool for 10 minutes — parts can be warm, especially in a laser printer.',
      'Open the front cover and remove the cartridges (wrap them in a paper towel so they don\'t drip).',
      'With a dry lint-free cloth, gently wipe the inside of the printer — especially the area around where the cartridges sit and the rollers.',
      'For laser printers: use a small soft brush to gently brush out any loose toner powder. Do NOT use a standard vacuum — it blows toner dust everywhere. A toner-safe vacuum is a special product.',
      'Put the cartridges back in, close the cover, plug back in.',
      'Print 3–5 blank test pages to flush out any remaining debris.',
    ],
    ifFails: 'If black specks continue after cleaning, toner is leaking from the cartridge. Replace the cartridge — leaks don\'t fix themselves.',
    proHelp: 'A cracked toner cartridge can make a big mess. If you see loose toner powder pooling inside the printer, take it outside and tip it gently to pour out loose toner before cleaning.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 4. Faded / streaky ─────────────────────────────────── */
  faded: {
    kind: 'question',
    title: 'What does the fading look like?',
    icon: Palette,
    options: [
      { label: 'Light all over — whole page is pale',    emoji: '',  next: 'fix_lowInk' },
      { label: 'One colour is missing or wrong',          emoji: '',  next: 'fix_clogHead' },
      { label: 'Thin white lines across the page',        emoji: '',  next: 'fix_alignHeads' },
      { label: 'Text is fine but photos look grainy',     emoji: '',  next: 'fix_photoSettings' },
    ],
  },

  fix_lowInk: {
    kind: 'fix',
    icon: Wrench,
    title: 'Check ink levels — low ink is the usual culprit',
    why: 'Faded prints almost always mean low ink. The printer keeps going as ink runs out, but the prints get paler and paler. Even "half full" cartridges can be too low for crisp pages.',
    steps: [
      'On the printer\'s screen: Settings → Ink Levels (or Toner Levels). Note any that are below 25%.',
      'On your computer: Windows — Settings → Printers → your printer → Preferences → Services. Mac — System Settings → Printers & Scanners → select printer → Options & Supplies.',
      'If a colour is below 25%, replace it. If the black cartridge is low, text prints faded even if colours look fine.',
      'After replacing, let the printer run its automatic alignment.',
      'Print a test page to check.',
      'If ALL cartridges show full but prints are still faded, run a print-head cleaning cycle (Settings → Maintenance → Clean Print Heads).',
    ],
    ifFails: 'If new cartridges and clean cycles don\'t fix it, the print head is dying. It\'s rarely worth repairing — replacement printers start at $80.',
    proHelp: 'For laser printers: if the toner percentage reads full but prints are pale, the drum unit is worn. Drums last 3–4 toner cartridges before needing replacement ($60–$120).',
    buying: 'When buying replacement ink, write down your EXACT model number. Many printers have very similar names ("HP 2755" vs "HP 2755e") but use different cartridges. Bring the old cartridge to the store if you\'re unsure.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_clogHead: {
    kind: 'fix',
    icon: Droplets,
    title: 'One colour missing — clogged print-head nozzle',
    why: 'When only ONE colour is missing or wrong (reds come out pink, or greens look blue), that colour\'s nozzle is clogged with dried ink. Cleaning usually clears it.',
    steps: [
      'On the printer screen: Settings → Maintenance → Clean Print Heads. Let it run.',
      'When finished, print a nozzle-check pattern (same menu, "Nozzle Check"). Each colour should show a clean solid block.',
      'If a colour is still missing lines, run Clean Print Heads a second time.',
      'After TWO cleanings, if still missing, try "Deep Clean" (same menu) — uses more ink but clears stubborn clogs.',
      'If the cartridge is 6+ months old, replace it. Ink dries inside cartridges just like it dries in nozzles.',
      'Consider printing at least one colour page per week — regular use prevents re-clogs.',
    ],
    ifFails: 'If three deep cleans don\'t clear a colour, the print head itself is the problem. On Canon and Epson, it\'s a replaceable part ($30–$80). On HP and Brother, the print head is built into the cartridge — a new cartridge is the fix.',
    proHelp: 'If deep cleaning drains a lot of ink, don\'t keep running it — you\'ll empty the cartridges. Two or three rounds maximum, then replace the cartridge or head.',
    replaceOrRepair: 'If your printer is 4+ years old, the cartridge is full, and cleaning does nothing — replace the printer. Modern inkjets are cheap and newer models waste far less ink.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  fix_alignHeads: {
    kind: 'fix',
    icon: Wrench,
    title: 'Thin white streaks — run alignment and nozzle-check',
    why: 'Thin white lines across printed pages mean the print head\'s spray is slightly out of alignment. Printers self-correct with a quick alignment routine that prints and reads a pattern.',
    steps: [
      'On the printer screen: Settings → Maintenance → Align Print Heads (or "Printhead Alignment").',
      'The printer will print a test sheet with patterns. Place it back on the scanner glass when asked.',
      'Close the lid and tap "Scan" or "OK." The printer reads the pattern and adjusts itself.',
      'After alignment, print a test page to see if streaks are gone.',
      'If streaks continue, also run Clean Print Heads (same menu).',
      'Check paper quality — old, low-grade copier paper causes pale streaks too. Try fresh paper from a sealed ream.',
    ],
    ifFails: 'If alignment and cleaning don\'t remove the streaks, the print head has mechanical wear. See "one colour missing" for replacement options.',
    proHelp: 'For laser printers, thin white lines mean the drum unit has a scratch — replace the drum cartridge.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_photoSettings: {
    kind: 'fix',
    icon: Palette,
    title: 'Grainy photos — it\'s settings, paper, and quality',
    why: 'Photos look grainy when the printer is set to "draft" quality, using plain copier paper instead of photo paper, or the image itself is low-resolution.',
    steps: [
      'Use real photo paper — glossy or matte, designed for inkjet photos. Plain paper will always look grainy.',
      'In the Print dialog, click Properties (or Preferences) and set Paper Type to "Photo Paper" (match what you loaded).',
      'Set Quality to "Best" or "High" — not "Normal" or "Draft."',
      'Check the source image resolution. A phone photo is fine; a screenshot or small web image is too low-res and will always look grainy.',
      'Load photo paper the right way up — there\'s a shiny "print side" and a matte "back side." Print side goes down in most trays.',
      'Print one photo. Let it dry for 5 minutes before touching — photo ink smears easily while wet.',
    ],
    ifFails: 'If photos are still grainy with the right paper and settings, your printer may not be a photo-capable model. Basic home printers rarely match photo-lab quality — for prints you\'ll frame, consider sending to a service like Walgreens, Costco, or Shutterfly ($0.20–$0.50 per photo).',
    proHelp: 'If a photo-specialist printer (Canon PIXMA, Epson EcoTank Photo) is grainy, run a nozzle check and alignment — usually fixes it.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  /* ── 5. Paper jam ───────────────────────────────────────── */
  paperJam: {
    kind: 'question',
    title: 'Can you see the jammed paper?',
    icon: FileText,
    subtitle: 'Open the front cover and look inside. Also check the back of the printer.',
    options: [
      { label: 'Yes — I can see and reach it',         emoji: '',  next: 'fix_removeJam' },
      { label: 'No — but the printer says "jam"',      emoji: '',  next: 'fix_hiddenJam' },
      { label: 'Paper keeps jamming every time',       emoji: '',  next: 'fix_repeatJam' },
    ],
  },

  fix_removeJam: {
    kind: 'fix',
    icon: FileText,
    title: 'Remove the jam safely — don\'t rip the paper',
    why: 'Most jam damage happens when people yank the paper and leave little torn bits behind. A bit of patience keeps the printer alive for years more.',
    urgent: 'For laser printers, wait 5 minutes before reaching inside — the fuser can be 400°F / 200°C. It\'s marked with a red warning sticker.',
    steps: [
      'Turn OFF the printer first. Never pull paper while it\'s running — you can strip gears.',
      'Open every cover: front cover, top lid, back door, and pull the paper tray out. Jams can hide anywhere in the path.',
      'Grip the jammed paper with BOTH hands, evenly. Pull slowly in the direction paper normally moves through — usually towards the output tray.',
      'If the paper is stuck at one end, try pulling from the other end. Don\'t use force.',
      'Check for small torn pieces. Shine a flashlight inside — even a half-inch scrap causes the next jam.',
      'Close all covers and doors firmly, reload the tray, turn the printer back on. Try printing.',
    ],
    ifFails: 'If after removal the printer still says "jam," there\'s likely a scrap hiding. Open everything again and inspect the rollers, the cartridge area, and the duplexer (if present) with a flashlight.',
    proHelp: 'If you hear a clicking sound but the printer won\'t pick up paper at all after a jam, a gear may have stripped. That\'s a repair-shop job.',
    guide: { label: 'Ask TekBrain', to: '/tekbrain' },
  },

  fix_hiddenJam: {
    kind: 'fix',
    icon: Search,
    title: 'Hidden paper — check every access point',
    why: 'Hidden jams are almost always a tiny scrap of paper or a single sheet wedged where you can\'t see without opening multiple panels. Checking every door finds 95% of hidden jams.',
    steps: [
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

  fix_wifiNotVisible: {
    kind: 'fix',
    icon: Wifi,
    title: 'Printer can\'t see your WiFi network',
    why: 'Home printers use 2.4 GHz WiFi — most routers broadcast both 2.4 GHz and 5 GHz, and many printers can\'t see the 5 GHz network. Also, being too far from the router makes networks disappear.',
    steps: [
      'Move the printer closer to the WiFi router — within 15 feet is ideal during setup.',
      'On the printer\'s screen, go to Settings → Wireless / Network → WiFi Setup. Wait 30 seconds for it to scan.',
      'If your network name still doesn\'t appear, your router is likely broadcasting only 5 GHz, or has a separate 2.4 GHz name.',
      'Check your router settings (log into its setup page using a web browser). Make sure 2.4 GHz is turned ON. On some routers, 2.4 and 5 GHz have different names — pick the 2.4 one on the printer.',
      'Try WPS if your router has a WPS button. On the printer, pick "WPS Push Button." Press WPS on the router within 2 minutes. They pair automatically.',
      'If still invisible, restart the router (unplug 30 seconds, replug, wait 2 minutes) and try printer setup again.',
    ],
    ifFails: 'If your router has only 5 GHz WiFi (some mesh systems), you\'ll need to enable 2.4 GHz specifically for the printer, or connect the printer by USB cable instead.',
    proHelp: 'If your WiFi router is managed by your internet provider and you can\'t access its settings, call them to enable 2.4 GHz.',
    guide: { label: 'WiFi troubleshooter', to: '/tools/wifi-troubleshooter' },
  },

  fix_wifiPassword: {
    kind: 'fix',
    icon: AlertCircle,
    title: 'Wrong password — let\'s get it right',
    why: 'WiFi passwords are case-sensitive and easy to mistype on a printer\'s small keypad. One wrong character = no connection.',
    steps: [
      'Find the real WiFi password. It\'s usually on a sticker on the back or bottom of the router — look for "Password," "Key," or "PSK."',
      'Write the password down EXACTLY. Watch for: O (letter) vs 0 (zero), l (lowercase L) vs 1 (one) vs I (capital i), uppercase vs lowercase.',
      'On the printer, redo WiFi setup: Settings → Wireless → WiFi Setup → select your network.',
      'Type the password slowly. Use the printer\'s "show password" option if available to catch typos.',
      'Submit and wait 30–60 seconds. The printer\'s WiFi light should go from blinking to solid.',
      'If the password is also wrong on your phone or laptop, someone has changed it — ask whoever manages the router.',
    ],
    ifFails: 'If the password is definitely right but the printer still rejects it, the password may have special characters (& $ # !) that the printer\'s keypad handles poorly. Temporarily change the router password to letters and numbers only, connect the printer, then change it back.',
    proHelp: 'Using the manufacturer\'s phone/tablet setup app is much easier than typing on the printer — HP Smart, Canon PRINT, Epson Smart Panel, etc. Download your brand\'s app.',
    guide: { label: 'WiFi password finder', to: '/tools/wifi-password-finder' },
  },

  fix_wifiSameNetwork: {
    kind: 'fix',
    icon: Wifi,
    title: 'Connected to WiFi but computer can\'t reach the printer',
    why: 'Your printer has WiFi, but your computer is on a DIFFERENT network — a guest WiFi, a different band, or a neighbour\'s leftover connection. Both devices have to be on the same network name.',
    steps: [
      'On your computer, click the WiFi icon (bottom right on Windows, top right on Mac) and note the exact WiFi name it\'s on.',
      'On the printer, go to Settings → Wireless / Network → check the WiFi name. Both should match EXACTLY.',
      'If they don\'t match, reconnect the printer to the network the computer is on.',
      'Many routers broadcast separate "Home" and "Guest" networks. Make sure both devices are on the main Home network, not Guest.',
      'Restart the printer, the router, and the computer in that order. Wait for each to fully come up before the next.',
      'Try printing a test page from the computer.',
    ],
    ifFails: 'If both are on the same network and it still won\'t print, remove and re-add the printer in your computer\'s settings. Windows: Settings → Printers & scanners → remove → Add device. Mac: System Settings → Printers & Scanners → minus → plus.',
    proHelp: 'If you use a mesh system (Eero, Google WiFi, Orbi) and keep losing the printer, enable "IoT" mode or turn off "Device Isolation" in the router settings — mesh routers sometimes quarantine older devices.',
    guide: { label: 'Home network map', to: '/tools/home-network-map' },
  },

  fix_wifiFirstTime: {
    kind: 'fix',
    icon: Wifi,
    title: 'First-time WiFi setup — the easy way',
    why: 'Setting up WiFi on a printer\'s tiny screen is painful. Every major brand has a free phone/tablet app that walks you through it in 5 minutes instead.',
    steps: [
      'Download your brand\'s setup app: HP → "HP Smart." Canon → "Canon PRINT." Epson → "Epson Smart Panel." Brother → "Brother Mobile Connect."',
      'Plug in the printer and turn it on. Leave it in factory-new state (if you\'ve fiddled with it, pick "Restore Defaults" from the printer menu to start fresh).',
      'Make sure your phone is connected to your HOME WiFi (not guest, not 5 GHz-only).',
      'Open the app → tap "Add Printer" or "Set Up a New Printer." Grant Bluetooth and WiFi permissions when asked.',
      'The app will find the printer, ask for your WiFi password once, and handle the rest.',
      'Print a test page from the app to confirm it worked.',
    ],
    ifFails: 'If the app can\'t find the printer, make sure the printer is showing "Ready to Connect" or a flashing WiFi light. On some printers you have to hold the WiFi button for 5 seconds to enter setup mode.',
    proHelp: 'If phone setup fails, fall back to the printer\'s own menu: Settings → Wireless → WiFi Setup → pick network → type password. Slower, but always works.',
    guide: { label: 'Router setup wizard', to: '/tools/router-setup-wizard' },
  },

  /* ── 7. Computer can't find printer ─────────────────────── */
  computerFind: {
    kind: 'question',
    title: 'Which computer are you trying to use?',
    icon: Search,
    options: [
      { label: 'Windows PC or laptop',                   emoji: '',  next: 'fix_findWindows' },
      { label: 'Mac',                                     emoji: '',  next: 'fix_findMac' },
      { label: 'Chromebook',                              emoji: '',  next: 'fix_findChromebook' },
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

  fix_findChromebook: {
    kind: 'fix',
    icon: Search,
    title: 'Add your printer on Chromebook',
    why: 'Chromebooks need a printer that supports "IPP" or AirPrint-like WiFi printing — most modern printers do. Older printers without that support can\'t work with a Chromebook directly.',
    steps: [
      'Make sure the printer is on the same WiFi network as the Chromebook.',
      'On the Chromebook: click the clock → gear icon (Settings) → Advanced → Printing → Printers.',
      'Click "Add Printer." Nearby printers will show up automatically.',
      'Pick your printer and click "Add."',
      'If it doesn\'t appear, click "Add manually" and enter the printer\'s IP address (from the printer\'s Network menu). Set protocol to "IPP" and queue to "ipp/print."',
      'Print a test page.',
    ],
    ifFails: 'If your printer is older and never appears, it probably doesn\'t support the protocols Chromebooks need. You can either print from a different computer that shares the printer, or replace the printer.',
    proHelp: 'Most printers made since 2017 support Chromebook printing via WiFi. If yours doesn\'t, it\'s a good sign to upgrade.',
    guide: { label: 'Find the right printer', to: '/tools/device-chooser' },
  },

  /* ── 8. Offline ─────────────────────────────────────────── */
  offline: {
    kind: 'question',
    title: 'How is the printer connected?',
    icon: Wifi,
    options: [
      { label: 'USB cable to computer',                  emoji: '',  next: 'fix_offlineUsb' },
      { label: 'WiFi / wireless',                         emoji: '',  next: 'fix_offlineWifi' },
      { label: 'Not sure',                                emoji: '',  next: 'fix_offlineAny' },
    ],
  },

  fix_offlineUsb: {
    kind: 'fix',
    icon: Plug,
    title: 'USB printer showing offline',
    why: 'When a USB printer says offline, the computer has lost track of it — usually because the cable was unplugged briefly, or Windows decided to "pause" the printer.',
    steps: [
      'Check that the USB cable is firmly plugged into both the printer and the computer. Unplug and replug both ends.',
      'Try a different USB port on the computer. Ports fail over time.',
      'On Windows: Settings → Printers & scanners → click your printer → Printer properties → uncheck "Use printer offline" if it\'s ticked.',
      'Right-click the printer → "See what\'s printing" → clear any stuck print jobs (Printer menu → Cancel All Documents).',
      'Restart both the printer and the computer.',
      'Try printing a test page.',
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

/* ─────────────────────────────────────────────────────────────────────────
 * Component
 * ───────────────────────────────────────────────────────────────────────── */

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
