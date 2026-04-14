import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, ChevronRight, ChevronLeft, RotateCcw, CheckCircle2, HelpCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Node {
  id: string;
  question?: string;
  statement?: string;
  helpText?: string;
  type: 'question' | 'solution';
  solution?: string;
  solutionSteps?: string[];
  yesNext?: string;
  noNext?: string;
  emoji?: string;
}

// Decision tree for printer troubleshooting
const TREE: Record<string, Node> = {
  start: {
    id: 'start',
    type: 'question',
    question: 'What best describes your printer problem?',
    emoji: '🖨️',
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
    emoji: '🔌',
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
    emoji: '🔗',
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
    emoji: '🔄',
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
    emoji: '📶',
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
    emoji: '🌐',
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
    emoji: '🔄',
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
    emoji: '📄',
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
    emoji: '🔍',
    statement: 'Check all access points for hidden paper',
    solution: 'Paper can get stuck in places that are hard to see at first.',
    solutionSteps: [
      'Turn off the printer.',
      'Open the front cover and remove the ink or toner cartridge (it usually lifts out). Look for paper behind where the cartridge sits.',
      'Check the back of the printer. Many printers have a rear access panel that pops off or swings open.',
      'Check the paper tray at the bottom. Remove the tray and look up inside the slot where paper feeds in.',
      'If your printer has a duplexer (a piece on the back for two-sided printing), open it and check inside.',
      'Remove any paper you find, put everything back together, and try printing again.',
      'If the printer still says "paper jam" with no paper visible, the sensor may need cleaning. Contact the manufacturer or try our Get Help page.',
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
    emoji: '🔋',
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
  },
  quality_faded_low: {
    id: 'quality_faded_low',
    type: 'solution',
    emoji: '🖨️',
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
  },
  quality_streaky: {
    id: 'quality_streaky',
    type: 'solution',
    emoji: '🧹',
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
  },
  quality_blurry: {
    id: 'quality_blurry',
    type: 'solution',
    emoji: '👓',
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

  // ── Ink/toner flow ────────────────────────────────────────────
  ink_q1: {
    id: 'ink_q1',
    type: 'question',
    question: 'Is your printer showing an ink or toner warning message?',
    yesNext: 'ink_warning',
    noNext: 'ink_not_recognized',
  },
  ink_warning: {
    id: 'ink_warning',
    type: 'question',
    question: 'Does the message say "low" or "empty"?',
    helpText: '"Low" means you can usually keep printing for a while. "Empty" means you need to replace the cartridge soon.',
    yesNext: 'ink_replace',
    noNext: 'ink_not_recognized',
  },
  ink_replace: {
    id: 'ink_replace',
    type: 'solution',
    emoji: '🛒',
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
    emoji: '⚠️',
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
  },
};

// Multi-choice start question options
const START_OPTIONS = [
  { label: 'Printer says "Offline"', emoji: '🚫', next: 'offline_q1' },
  { label: 'Paper jam', emoji: '📄', next: 'jam_q1' },
  { label: 'Print quality is poor (faded, streaky, blurry)', emoji: '👓', next: 'quality_q1' },
  { label: 'Ink or toner problem', emoji: '🖋️', next: 'ink_q1' },
];

// Multi-choice for USB vs WiFi connection type
const CONNECTION_OPTIONS = [
  { label: 'USB cable (plugged in)', emoji: '🔗', next: 'offline_usb' },
  { label: 'WiFi (wireless)', emoji: '📶', next: 'offline_wifi' },
  { label: 'I\'m not sure', emoji: '❓', next: 'offline_usb' },
];

// Multi-choice for print quality issue type
const QUALITY_OPTIONS = [
  { label: 'Faded or light printing', emoji: '🔅', next: 'quality_faded' },
  { label: 'Streaks or lines on the page', emoji: '📏', next: 'quality_streaky' },
  { label: 'Blurry or smudged', emoji: '💧', next: 'quality_blurry' },
];

export default function PrinterTroubleshooter() {
  const [path, setPath] = useState<string[]>(['start']);

  const currentId = path[path.length - 1];
  const current = TREE[currentId];

  const goTo = (nodeId: string) => {
    setPath(p => [...p, nodeId]);
  };

  const goBack = () => {
    if (path.length > 1) setPath(p => p.slice(0, -1));
  };

  const restart = () => {
    setPath(['start']);
  };

  const isStart = currentId === 'start';
  const isConnectionChoice = currentId === 'offline_q2';
  const isQualityChoice = currentId === 'quality_q1';

  const renderMultiChoice = (title: string, options: { label: string; emoji: string; next: string }[]) => (
    <>
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="space-y-2">
        {options.map(opt => (
          <button
            key={opt.next}
            onClick={() => goTo(opt.next)}
            className="w-full flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <span className="text-2xl">{opt.emoji}</span>
            <span className="font-medium text-sm">{opt.label}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
          </button>
        ))}
      </div>
    </>
  );

  return (
    <>
      <SEOHead
        title="Printer Troubleshooter — TekSure"
        description="Fix your printer problems step by step. Our interactive wizard diagnoses offline printers, paper jams, print quality issues, and ink problems with clear instructions."
        path="/tools/printer-troubleshooter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Printer className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Printer Troubleshooter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Answer a few questions and we'll walk you through exactly how to fix your printer.
            </p>
          </div>
        </section>

        <div className="container max-w-2xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          {path.length > 1 && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 flex-wrap">
              <button onClick={restart} className="hover:text-foreground transition-colors">Start</button>
              {path.slice(1).map((id, i) => (
                <span key={id} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  <span className={i === path.length - 2 ? 'text-foreground font-medium' : ''}>
                    {TREE[id]?.statement || TREE[id]?.question?.slice(0, 30) + '…' || id}
                  </span>
                </span>
              ))}
            </div>
          )}

          <Card className="border-border shadow-sm">
            <CardContent className="p-6 md:p-8">
              {/* Start screen */}
              {isStart && renderMultiChoice('What\'s happening with your printer?', START_OPTIONS)}

              {/* Connection type multi-choice */}
              {isConnectionChoice && renderMultiChoice('How is your printer connected?', CONNECTION_OPTIONS)}

              {/* Quality issue type multi-choice */}
              {isQualityChoice && renderMultiChoice('What does the printed page look like?', QUALITY_OPTIONS)}

              {/* Normal question */}
              {!isStart && !isConnectionChoice && !isQualityChoice && current?.type === 'question' && (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold leading-snug">{current.question}</h2>
                  </div>
                  {current.helpText && (
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-4">
                      <Lightbulb className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700 dark:text-blue-300">{current.helpText}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => current.yesNext && goTo(current.yesNext)}
                      className="py-4 rounded-xl border-2 border-green-400/60 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors font-semibold text-green-700 dark:text-green-300 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5" /> Yes
                    </button>
                    <button
                      onClick={() => current.noNext && goTo(current.noNext)}
                      className="py-4 rounded-xl border-2 border-red-300/60 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-semibold text-red-600 dark:text-red-300 flex items-center justify-center gap-2"
                    >
                      No
                    </button>
                  </div>
                </>
              )}

              {/* Solution */}
              {current?.type === 'solution' && (
                <>
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{current.emoji}</div>
                    <h2 className="text-xl font-bold">{current.statement}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{current.solution}</p>
                  </div>
                  {current.solutionSteps && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Steps to follow:</p>
                      <ol className="space-y-3">
                        {current.solutionSteps.map((step, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  <div className="mt-6 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                      <strong>Still not working?</strong> Printer problems can sometimes need hands-on help. Try searching for your specific printer model and error message online, or contact us for personalized support.
                    </p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" onClick={restart} className="gap-2 flex-1">
                      <RotateCcw className="h-4 w-4" /> Start over
                    </Button>
                    <Button asChild className="gap-2 flex-1">
                      <Link to="/get-help">Get expert help <ChevronRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Back button */}
          {path.length > 1 && current?.type !== 'solution' && (
            <div className="mt-3">
              <Button variant="ghost" size="sm" onClick={goBack} className="gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="h-3 w-3" /> Previous step
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
