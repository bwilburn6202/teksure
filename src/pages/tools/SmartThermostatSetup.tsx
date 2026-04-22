import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Thermometer,
  Home,
  Wifi,
  Zap,
  DollarSign,
  Leaf,
  Clock,
  Calendar,
  MapPin,
  Shield,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Smartphone,
  CircleDot,
  Users,
  Snowflake,
  Sun,
  Flame,
  Wrench,
  Eye,
  Camera,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Smart Thermostat Setup
 * ------------------------------------------------------------
 * A senior-friendly buyer's guide + setup wizard for the most
 * common smart thermostats: Google Nest, ecobee, Honeywell
 * T-series, Sensi, and Amazon Smart Thermostat. Includes a
 * compatibility check (C-wire / HVAC type), per-model wizard,
 * energy savings info, schedule strategies, troubleshooting,
 * privacy notes, and FAQ.
 * ────────────────────────────────────────────────────────────── */

type BrandId = 'nest' | 'ecobee' | 'honeywell' | 'sensi' | 'amazon';

/* ── Brand comparison data ────────────────────────────────────── */

interface BrandCard {
  id: BrandId;
  name: string;
  tagline: string;
  models: string;
  priceTier: string;
  cWireNeeded: string;
  worksWith: string;
  bestFor: string;
  strengths: string[];
  weaknesses: string[];
  companionApp: string;
  support: { label: string; url: string };
}

const BRANDS: BrandCard[] = [
  {
    id: 'nest',
    name: 'Google Nest',
    tagline: 'The thermostat with the round dial that learns your schedule. Runs inside Google Home.',
    models: 'Nest Thermostat (entry) · Nest Learning Thermostat (3rd Gen, premium)',
    priceTier: '$130 – $250',
    cWireNeeded: 'Usually optional (entry model may need the included Power Connector for some systems)',
    worksWith: 'Google Home, Alexa, Samsung SmartThings (no Apple HomeKit)',
    bestFor: 'People who want the thermostat to figure out a schedule on its own and already use Google or Android.',
    strengths: [
      'Learning Thermostat builds its own schedule after about a week of watching you',
      'Beautiful screen — shows weather, time, and the current temperature at a glance',
      'Geofencing through Google Home — turns down when everyone leaves the house',
      'Works with almost every central heating and cooling system in the US',
    ],
    weaknesses: [
      'No Apple HomeKit support',
      'The entry Nest Thermostat needs the Power Connector wire on some systems (free in the box, but an extra step)',
      'Some features require a Google account',
    ],
    companionApp: 'Google Home',
    support: { label: 'Google Nest Help', url: 'https://support.google.com/googlenest/topic/7072994' },
  },
  {
    id: 'ecobee',
    name: 'ecobee',
    tagline: 'The one with the extra room sensors. Great for multi-story homes or rooms that run hot or cold.',
    models: 'ecobee Smart Thermostat Premium · Enhanced · Essential',
    priceTier: '$130 – $250',
    cWireNeeded: 'C-wire needed — Power Extender Kit (PEK) included for homes without one',
    worksWith: 'Alexa, Google Home, Apple HomeKit, SmartThings',
    bestFor: 'People whose upstairs bedroom is always 10 degrees hotter than the thermostat hallway, or anyone with a 2-story home.',
    strengths: [
      'Ships with a remote SmartSensor that you can place in another room — averages the temperature',
      'Premium model has Alexa built in — answers questions without a separate Echo',
      'Works with Apple HomeKit (the only major brand on this list that does, alongside Sensi)',
      'Built-in air-quality sensor on Premium',
    ],
    weaknesses: [
      'Requires a C-wire or the PEK — a little harder to install than Nest',
      'Large touchscreen — a few extra taps to find settings compared to a dial',
      'Premium version is one of the priciest on this list',
    ],
    companionApp: 'ecobee',
    support: { label: 'ecobee Support', url: 'https://support.ecobee.com/' },
  },
  {
    id: 'honeywell',
    name: 'Honeywell T-series',
    tagline: 'The reliable workhorse. Built by the same company that made your old dial thermostat.',
    models: 'T9 (Wi-Fi Smart) · T10 Pro (with RedLINK) · T6 Pro (entry smart) · Home T5',
    priceTier: '$80 – $200',
    cWireNeeded: 'C-wire needed on most models (T9 and T10 Pro)',
    worksWith: 'Alexa, Google Home, IFTTT (limited HomeKit support)',
    bestFor: 'People who want a solid brand name and an app that looks like a calendar — not a spaceship.',
    strengths: [
      'Long, trusted brand history — your HVAC technician probably already installs these',
      'T9 supports up to 20 room sensors — second only to ecobee',
      '7-day scheduling with weekday/weekend modes that are straightforward to set up',
      'Often the cheapest smart thermostat at Home Depot or Lowe\'s',
    ],
    weaknesses: [
      'App (Honeywell Home / Resideo) has been reshuffled a few times — older guides may be out of date',
      'Lower-end models lack geofencing',
      'Apple HomeKit support is limited and requires a separate hub',
    ],
    companionApp: 'Honeywell Home (Resideo)',
    support: { label: 'Honeywell Home Support', url: 'https://www.resideo.com/us/en/support/' },
  },
  {
    id: 'sensi',
    name: 'Sensi (Emerson)',
    tagline: 'Skip the complicated dance. The cheapest name-brand smart thermostat that actually works well.',
    models: 'Sensi Smart Thermostat · Sensi Touch 2 · Sensi Lite',
    priceTier: '$80 – $170',
    cWireNeeded: 'Original Sensi does NOT need a C-wire (rare advantage); Touch 2 does',
    worksWith: 'Alexa, Google Home, Apple HomeKit (on Touch 2)',
    bestFor: 'People on a budget, or anyone whose system does not have a C-wire and they would rather not deal with one.',
    strengths: [
      'Entry model runs on two AA batteries — no C-wire required',
      'Honest pricing — often under $100 at Home Depot',
      'Touch 2 works with Apple HomeKit',
      'Installation steps feel clear and are well-photographed in the app',
    ],
    weaknesses: [
      'No built-in learning — you set the schedule yourself',
      'Screen is plainer than Nest or ecobee',
      'Room sensor support is limited to newer models',
    ],
    companionApp: 'Sensi',
    support: { label: 'Sensi Support', url: 'https://sensi.copeland.com/en-us/support' },
  },
  {
    id: 'amazon',
    name: 'Amazon Smart Thermostat',
    tagline: 'The surprise hit. Built with Honeywell, priced low, and pairs with Alexa out of the box.',
    models: 'Amazon Smart Thermostat (one model, two colors)',
    priceTier: '$60 – $80',
    cWireNeeded: 'C-wire needed — C-wire adapter sold separately (~$15)',
    worksWith: 'Alexa only (no Google Home, no Apple HomeKit)',
    bestFor: 'Alexa households looking for the lowest-price smart thermostat from a name brand.',
    strengths: [
      'Cheapest on this list — often $59 on sale',
      'Uses Amazon\'s Hunches feature to turn down the heat when you leave',
      'Made with Honeywell internals — solid reliability',
      'Some utility companies give a rebate that makes it almost free',
    ],
    weaknesses: [
      'Works with Alexa only — if you do not own an Echo, skip this one',
      'No room sensors, no touchscreen — a simple button layout only',
      'Requires the Alexa app to set up; no standalone app',
    ],
    companionApp: 'Amazon Alexa',
    support: { label: 'Amazon Device Support', url: 'https://www.amazon.com/hz/mycd/digital-console/contactus' },
  },
];

/* ── Compatibility warning data ───────────────────────────────── */

interface CompatIssue {
  id: string;
  icon: LucideIcon;
  label: string;
  summary: string;
  perBrand: string;
}

const COMPATIBILITY_ISSUES: CompatIssue[] = [
  {
    id: 'boiler',
    icon: Flame,
    label: 'Boiler / radiator heat (no forced air)',
    summary:
      'A radiator or baseboard system runs on two wires (R and W) and no C. Many smart thermostats need a C-wire to stay powered, so this can be a trouble spot.',
    perBrand:
      'Best picks: Sensi (original) runs on AA batteries — it is the smoothest match. Nest Learning can work on two wires with the right boiler — check the Nest compatibility tool first. ecobee needs the Power Extender Kit (included). Avoid the Amazon Smart Thermostat on a pure two-wire boiler.',
  },
  {
    id: 'heatpump',
    icon: Snowflake,
    label: 'Heat pump (one system handles heat AND cool)',
    summary:
      'Heat pumps use extra wires (O, B, or O/B) to reverse the system. Most smart thermostats support heat pumps, but you need to pick the right setting during setup.',
    perBrand:
      'Nest, ecobee, Honeywell T9/T10, and Sensi all support heat pumps. The install app asks you to select "heat pump" — answer yes and follow the wire diagram. Turn off "emergency heat" auto-switch if your heat pump has electric aux strips and your utility bill spikes in winter.',
  },
  {
    id: 'millivolt',
    icon: Zap,
    label: 'Millivolt system (old wall furnace, fireplace, or floor furnace)',
    summary:
      'A millivolt system runs on a very low voltage generated by the pilot light itself — not by a separate transformer. Most smart thermostats are NOT compatible with millivolt.',
    perBrand:
      'Most smart thermostats will NOT work with millivolt. If your furnace is a gas wall heater, floor furnace, or a fireplace with a wall switch, check the current thermostat — if it has only two wires and no transformer, you likely need a line-voltage-compatible thermostat. Call an HVAC technician before buying.',
  },
  {
    id: 'highvoltage',
    icon: AlertTriangle,
    label: 'High voltage / line voltage (baseboard electric heat)',
    summary:
      'Baseboard electric heaters run on 120V or 240V at the thermostat itself. None of the thermostats on this page work with line voltage.',
    perBrand:
      'You need a line-voltage smart thermostat (Mysa, Stelpro, Sinopé are common picks). The brands on this page are for low-voltage (24V) forced-air, heat pump, and boiler systems only. Do not wire a low-voltage thermostat to a line-voltage heater — it will destroy the thermostat and could start a fire.',
  },
  {
    id: 'multistage',
    icon: Wrench,
    label: 'Multi-stage heating or cooling (2 heat, 2 cool, or dual fuel)',
    summary:
      'Bigger homes often have a two-stage furnace or two-stage AC. A stage is the first "gentle" level before the system ramps up to full blast. Most smart thermostats handle two stages — a few handle more.',
    perBrand:
      'ecobee Premium handles up to 4 heat / 2 cool stages and is the most flexible. Nest Learning handles 3 heat / 2 cool. Honeywell T10 Pro handles dual-fuel (gas furnace + heat pump). The entry Nest Thermostat, Sensi Lite, and Amazon Smart Thermostat are single-stage friendly only — they will work on a 2-stage system but only run stage 1.',
  },
];

/* ── Setup wizard types ───────────────────────────────────────── */

interface Step {
  title: string;
  instruction: string;
  stumble?: string;
  screenshot: string;
}

interface SetupInfo {
  id: BrandId;
  brandName: string;
  shortName: string;
  appName: string;
  estTime: string;
  steps: Step[];
  support: { label: string; url: string };
}

/* ── Google Nest setup ────────────────────────────────────────── */
const NEST_SETUP: SetupInfo = {
  id: 'nest',
  brandName: 'Google Nest',
  shortName: 'Nest Thermostat',
  appName: 'Google Home',
  estTime: '45 – 75 minutes',
  steps: [
    {
      title: 'Check compatibility and open the Google Home app',
      instruction:
        'Before you touch a screwdriver, open nest.com/compatibility on a phone or computer. Type in the letters printed next to each wire on your current thermostat (R, C, W, Y, G, and so on). The site tells you in 30 seconds whether Nest will work with your system. Then install the Google Home app from the App Store or Play Store if you have not already.',
      stumble:
        'If your old thermostat has only two wires (R and W), it is a boiler or an older gas furnace. Most Nest models can still work, but you may need the Power Connector (included with the entry Nest Thermostat) or a dedicated C-wire.',
      screenshot: 'Old thermostat pulled away from wall showing labeled wires R, W, Y, G',
    },
    {
      title: 'Turn off the breaker that powers your furnace or air handler',
      instruction:
        'Go to the electrical panel. Find the breaker labeled "Furnace", "HVAC", "Air Handler", or "Heat". Flip it off. Back at the thermostat, press the fan button — if nothing happens, power is off. This is non-negotiable. Never work on thermostat wiring with the breaker on.',
      stumble:
        'Some homes have more than one breaker involved (one for the furnace, one for the outdoor AC). Turn off both, or turn off the main breaker if you are unsure. The thermostat itself runs on very low voltage, but the transformer behind it does not — treat it seriously.',
      screenshot: 'Electrical panel with breaker labeled FURNACE being switched off',
    },
    {
      title: 'Photograph the old thermostat wires BEFORE you remove anything',
      instruction:
        'Pull the thermostat face off the wall. Take 3 clear phone photos: one wide shot showing all the wires and where they are plugged in, one close-up of the letter labels (R, C, W, Y, G), and one of the back of the old thermostat. Then peel off the sticker labels that came in the Nest box and wrap one around each wire, matching the letter on the old thermostat. This single step saves most installs when something goes wrong.',
      stumble:
        'Do not trust the color of the wire. A red wire is USUALLY R, a white wire is USUALLY W, but "usually" is not "always". Go by the letter on the terminal, not the color.',
      screenshot: 'Close-up of old thermostat with red, white, yellow, green wires and labeled terminals',
    },
    {
      title: 'Unscrew the old thermostat and remove the backplate',
      instruction:
        'Loosen each tiny screw holding a wire in the old terminal. Pull each wire out gently. Unscrew the old backplate from the wall. Do not let the wires fall back into the hole — wrap them around a pencil or tape them to the wall so they stay accessible.',
      stumble:
        'If the old thermostat used a jumper wire (a short metal clip between R and Rc), remove it — modern smart thermostats do not need jumpers. Write "had a jumper" on your photo so you remember during Nest setup.',
      screenshot: 'Hand unscrewing old thermostat backplate with wires taped to wall',
    },
    {
      title: 'Mount the Nest backplate and connect the wires',
      instruction:
        'Use the included screws to mount the Nest backplate (or the trim plate, if you need to cover old paint marks). The Nest terminals are spring-loaded — press each tab down, slide the wire in, release. A green dot next to each terminal means the wire is seated. Match your labeled wires to the letters on the Nest: R to R, W to W1, Y to Y1, G to G, C to C.',
      stumble:
        'If you have two red wires (Rh and Rc), you probably have a 2-transformer system. Nest has a single R terminal — connect the main R wire and leave the other one capped with a wire nut. The Google Home app will walk you through it.',
      screenshot: 'Nest backplate mounted on wall with wires connected to labeled terminals',
    },
    {
      title: 'Attach the Nest display and turn power back on',
      instruction:
        'Line up the Nest display with the backplate and push gently until it clicks. Go back to the electrical panel and flip the furnace breaker ON. The Nest screen should light up with a welcome message. If it does not, the breaker is still off or a wire is loose — do NOT force anything.',
      stumble:
        'The display will take about 60 seconds to boot the first time. If the screen shows a red "no power" warning, you likely need a C-wire or the Nest Power Connector. Follow the on-screen instructions or pause and watch a YouTube walkthrough of Nest Power Connector installation before continuing.',
      screenshot: 'Nest Learning Thermostat mounted on wall showing welcome screen',
    },
    {
      title: 'Connect to Wi-Fi and set up your home',
      instruction:
        'Turn the dial (or tap the screen on the entry model) to pick your language. The Nest asks for Wi-Fi — pick the 2.4 GHz network (smart thermostats rarely use 5 GHz). Type the password by spinning the dial to each letter. Then open the Google Home app, tap "+", choose "Set up device", then "New device". The app finds the Nest automatically over Bluetooth.',
      stumble:
        'Nest asks where it is (Living Room, Hallway). Pick the closest match — the app uses this label for voice commands like "Hey Google, set the living room to 68".',
      screenshot: 'Google Home app showing Nest Thermostat being added to Home screen',
    },
    {
      title: 'Set a schedule and turn on Eco / Away temperatures',
      instruction:
        'In the Google Home app, tap your Nest → Schedule. Add a "Wake" (6:30 AM, 68°F in winter), "Leave" (8:30 AM, 62°F), "Home" (5:00 PM, 68°F), and "Sleep" (10:00 PM, 62°F). For summer, swap to cooling: 74 awake, 78 away, 72 sleep. Then enable Eco Mode under Settings → Eco Temperatures — this is what kicks in when you leave for vacation.',
      stumble:
        'The Learning Thermostat (premium) can build its own schedule from what you do in the first week. If you want that, skip the manual schedule and adjust the temperature by hand for 7 days — it watches and learns.',
      screenshot: 'Google Home app schedule editor with Wake, Leave, Home, and Sleep blocks',
    },
    {
      title: 'Turn on Home & Away Routines (geofencing)',
      instruction:
        'Still in Google Home, tap Settings → Home & Away Routines. Turn it on. Google Home uses your phone\'s location to know when the house is empty — then the Nest drops to the Eco temperature. When you head home, it bumps back up about 30 minutes before you arrive. All members of the household in the Google Home app count toward "is anyone home".',
      stumble:
        'If multiple family members use phones, make sure each of them is added to the Google Home as a household member. Otherwise Home & Away may turn off the heat while your spouse is still home.',
      screenshot: 'Google Home app Home & Away Routines screen with toggle ON',
    },
  ],
  support: { label: 'Google Nest Help', url: 'https://support.google.com/googlenest/topic/7072994' },
};

/* ── ecobee setup ─────────────────────────────────────────────── */
const ECOBEE_SETUP: SetupInfo = {
  id: 'ecobee',
  brandName: 'ecobee',
  shortName: 'ecobee Smart Thermostat',
  appName: 'ecobee',
  estTime: '45 – 75 minutes',
  steps: [
    {
      title: 'Unbox and check for the Power Extender Kit (PEK)',
      instruction:
        'Open the box and find: the thermostat, the trim plate, the PEK (a small beige box with a wire bundle), the SmartSensor, and the screws. Every ecobee ships with the PEK — you only install it if your system does not have a C-wire. The ecobee app will tell you later whether you need it.',
      stumble:
        'Keep the PEK handy even if you think you have a C-wire. Some older systems have a C-wire that is not actually connected to the transformer — the PEK is the safe backup either way.',
      screenshot: 'ecobee thermostat box open showing PEK, SmartSensor, and trim plate',
    },
    {
      title: 'Turn off the breaker and label the old wires',
      instruction:
        'Go to the electrical panel. Flip the "Furnace" or "Air Handler" breaker OFF. Back at the thermostat, press the fan button to confirm power is out. Pull the old thermostat face off. Peel off the ecobee wire labels and wrap one around each wire, matching the letter on the old thermostat terminal (R, C, W, Y, G).',
      stumble:
        'Photograph everything with your phone before you remove any wire. If something goes wrong, the photos are what save you.',
      screenshot: 'Old thermostat with ecobee-branded wire labels applied',
    },
    {
      title: 'Decide: direct wire OR Power Extender Kit',
      instruction:
        'Look at your old thermostat. If there is a wire connected to a terminal marked C, you can wire ecobee directly. If there is NO C-wire, open the furnace or air handler (the big unit in the basement, attic, or closet). Remove the metal cover (usually one or two screws). You will install the PEK inside the air handler — this adds a virtual C-wire without running new cable.',
      stumble:
        'If you are unsure which box is the "air handler", it is the one the thermostat wires run to. Follow the wire bundle from the wall — it leads to the air handler. On older homes, it is near the furnace.',
      screenshot: 'Air handler panel open showing control board with color-coded wires',
    },
    {
      title: 'Install the PEK inside the air handler (if needed)',
      instruction:
        'The PEK has 5 labeled wires (R, C, W, Y, G). Inside the air handler, unplug the existing thermostat wires from the control board, connect the PEK wires in between: PEK R → board R, PEK Y → board Y, and so on. Then connect the PEK\'s "T" wires to the original thermostat cable. Tuck the PEK into the corner of the air handler. Close the metal cover.',
      stumble:
        'The ecobee app has a video showing exactly how to install the PEK — 8 minutes, worth watching before you start. Search "ecobee PEK install" in YouTube.',
      screenshot: 'PEK mounted inside air handler with wires connected to control board',
    },
    {
      title: 'Mount the ecobee backplate and connect the wires',
      instruction:
        'Screw the ecobee backplate to the wall using the trim plate if you need to cover the old thermostat footprint. Connect each labeled wire to its matching letter terminal on the backplate. Press the lever, insert the wire, release. A soft click means the wire is held.',
      stumble:
        'Do NOT use the jumper wire from your old thermostat. ecobee does not want it. If you had a metal "jumper" between R and Rc on the old unit, remove it.',
      screenshot: 'ecobee backplate mounted with wires neatly connected',
    },
    {
      title: 'Attach the ecobee display and turn the power back on',
      instruction:
        'Push the ecobee display onto the backplate until it snaps. Go back to the electrical panel and turn the furnace breaker ON. The ecobee screen lights up in about 30 seconds and shows a welcome screen.',
      stumble:
        'If the ecobee screen flickers or powers off and on, the PEK or C-wire connection is loose. Turn the breaker off, re-seat the wires, and try again.',
      screenshot: 'ecobee Smart Thermostat Premium on wall showing welcome screen',
    },
    {
      title: 'Connect to Wi-Fi and pair the SmartSensor',
      instruction:
        'Tap through the on-screen setup. Pick your 2.4 GHz Wi-Fi network and type the password. Create an ecobee account (or sign in if you have one). When it asks about SmartSensor, place the sensor in the room that runs hot or cold (an upstairs bedroom is the classic pick). Press the small button on the back of the sensor — the ecobee finds it in 10 seconds.',
      stumble:
        'The SmartSensor runs on a coin battery that lasts about 5 years. Place it at standing head height, away from direct sunlight or a vent — otherwise readings will be skewed.',
      screenshot: 'ecobee SmartSensor being placed on a bedroom shelf',
    },
    {
      title: 'Set a schedule and turn on Follow Me',
      instruction:
        'In the ecobee app, tap Schedule → Comfort Settings. Set three profiles: Home (68°F winter / 74°F summer), Sleep (62°F winter / 72°F summer), Away (58°F winter / 78°F summer). Then tap Sensors → turn on "Follow Me" — this makes ecobee use the average of whichever rooms have people detected, instead of only the hallway where the thermostat lives.',
      stumble:
        'Follow Me needs at least one SmartSensor for the upstairs/bedroom to matter. The thermostat itself also has a motion sensor — it counts as a sensor for the hallway.',
      screenshot: 'ecobee app schedule screen with Home, Sleep, and Away comfort settings',
    },
  ],
  support: { label: 'ecobee Support', url: 'https://support.ecobee.com/' },
};

/* ── Honeywell T-series setup ─────────────────────────────────── */
const HONEYWELL_SETUP: SetupInfo = {
  id: 'honeywell',
  brandName: 'Honeywell T-series',
  shortName: 'Honeywell Smart Thermostat',
  appName: 'Honeywell Home',
  estTime: '40 – 60 minutes',
  steps: [
    {
      title: 'Check compatibility on the Honeywell Home app',
      instruction:
        'Install Honeywell Home from the App Store or Play Store (white icon with a light blue swirl). Open it, tap "Add Device", pick your T-series model (T9, T10 Pro, T6 Pro, or Home T5). The app asks a few questions about your system and tells you whether a C-wire is required.',
      stumble:
        'Some Home Depot and Lowe\'s store boxes ship with a C-wire Power Adapter (a little cube that plugs into an outlet). If your kit has it, you are covered even without a C-wire. Check the box before you return it.',
      screenshot: 'Honeywell Home app welcome screen on phone',
    },
    {
      title: 'Turn off the breaker and photograph the old wires',
      instruction:
        'At the electrical panel, flip the furnace / air handler breaker OFF. Back at the old thermostat, press the fan button — silence means power is off. Pull the old thermostat face off. Take 3 phone photos: wide, close-up on the letter labels, and the back of the old unit. Then peel off the Honeywell wire labels and wrap one around each wire.',
      stumble:
        'Label by the LETTER on the old thermostat (R, C, W, Y, G), not by wire color. The color almost always matches — but almost is not the same as always.',
      screenshot: 'Phone taking photo of thermostat wires with letter labels',
    },
    {
      title: 'Unscrew the old backplate',
      instruction:
        'Use a small flathead or Phillips screwdriver. Loosen each terminal screw, free each wire, and set them aside. Unscrew the old backplate from the wall. Tape the wires to the wall so they do not slip back inside. If the old backplate has a level bubble and the new one does not, no worries — aim for visually level.',
      stumble:
        'If the wall has old paint or plaster behind the thermostat, use the included trim plate to hide it. Otherwise you will have a painted ghost of the old thermostat around the new one.',
      screenshot: 'Old thermostat backplate being removed from wall',
    },
    {
      title: 'Mount the new Honeywell backplate',
      instruction:
        'Feed the thermostat cable through the center hole. Screw the backplate to the wall using the included anchors and screws. Use a level (built into the backplate on T9) to make it straight. Connect each wire to its matching letter terminal: press the tab, insert the wire, release. Repeat for every wire.',
      stumble:
        'On T9 and T10 Pro, there is a separate terminal block for the C-wire. If you do not have a C-wire, this is where the C-Wire Adapter (plug-in cube) connects.',
      screenshot: 'Honeywell T9 backplate mounted on wall with wires connected',
    },
    {
      title: 'Attach the display and power on',
      instruction:
        'Click the display onto the backplate. Go to the electrical panel and flip the furnace breaker ON. The Honeywell screen wakes up in about 30 seconds and shows a setup wizard.',
      stumble:
        'If the screen never lights up, the C-wire connection is the most likely culprit. Turn the breaker off, pull the display off, and check that the C terminal actually has a wire in it.',
      screenshot: 'Honeywell T9 display mounted and showing setup wizard',
    },
    {
      title: 'Answer the "What kind of system is this?" questions',
      instruction:
        'The on-screen wizard asks about your system: Heat pump? Gas/oil/electric furnace? Single-stage or multi-stage? If you do not know, tap "I do not know" — Honeywell picks the most common answer. The defaults work for 90% of US homes.',
      stumble:
        'If your HVAC technician or installer left a sticker inside the air handler listing the system type, that is the most accurate source. Otherwise, "forced air gas furnace with central AC" is the likeliest default in the United States.',
      screenshot: 'Honeywell wizard asking whether system is heat pump or furnace',
    },
    {
      title: 'Connect to Wi-Fi and pair with the Honeywell Home app',
      instruction:
        'The thermostat shows a temporary Wi-Fi network name (like "NewThermostat_xxx"). On your phone, open Wi-Fi settings, connect to that network. Open the Honeywell Home app, and tap "Continue" — the app walks the thermostat through your home Wi-Fi. Back at the thermostat, pick your 2.4 GHz network, type the password.',
      stumble:
        'If the app stops at "Connecting…" for more than 3 minutes, cancel and retry. Move your phone closer to both the thermostat and the router. The temporary network is short-range.',
      screenshot: 'Honeywell Home app connecting thermostat to home Wi-Fi',
    },
    {
      title: 'Set a 7-day schedule and Smart Response',
      instruction:
        'Tap Menu → Scheduling. Set four blocks: Wake, Leave, Return, Sleep. Pick temperatures for each. Weekdays and weekends can be different. Then turn on "Smart Response" — the thermostat figures out how long your system takes to reach a target and starts early so the house is the right temperature exactly at Wake time.',
      stumble:
        'If you have a variable schedule (retirement, work from home), skip the schedule and use Home/Away mode only. Geofencing handles the rest.',
      screenshot: 'Honeywell Home app schedule with Wake, Leave, Return, Sleep blocks',
    },
  ],
  support: { label: 'Honeywell Home Support', url: 'https://www.resideo.com/us/en/support/' },
};

/* ── Sensi setup ──────────────────────────────────────────────── */
const SENSI_SETUP: SetupInfo = {
  id: 'sensi',
  brandName: 'Sensi',
  shortName: 'Sensi Smart Thermostat',
  appName: 'Sensi',
  estTime: '30 – 50 minutes',
  steps: [
    {
      title: 'Download the Sensi app and start "Install Assistant"',
      instruction:
        'Install the Sensi app (white icon with a red check mark) from the App Store or Play Store. Open it, create an account with a real email, set a strong password, then tap "Install a new thermostat". The app asks for your zip code and the model number on the box. Install Assistant then gives you step-by-step photos customized to your exact wiring.',
      stumble:
        'Install Assistant is the reason Sensi is the easiest brand for first-timers. Do NOT skip it — even experienced folks follow along because the photos are tailored to your wire setup.',
      screenshot: 'Sensi app Install Assistant welcome screen',
    },
    {
      title: 'Turn off the breaker and remove the old thermostat',
      instruction:
        'Flip the furnace / HVAC breaker OFF at the electrical panel. Confirm the fan does nothing when pressed. Pull the old thermostat face off the wall. Take a photo of all the wires. Write down (or peel-and-stick the Sensi labels onto) each wire matching its letter on the old terminal.',
      stumble:
        'If the original Sensi (the one that runs on batteries), you do not need a C-wire. Skip past any "C-wire required" messages if you bought the entry model.',
      screenshot: 'Old thermostat wires with Sensi-branded labels applied',
    },
    {
      title: 'Install AA batteries (original Sensi only)',
      instruction:
        'On the back of the original Sensi, pop open the battery door and install 2 AA alkaline batteries (included). The batteries last about 2 years and are the main power source — the thermostat only uses the HVAC wires to signal the furnace, not for power. Touch 2 and other newer Sensi models use the C-wire and do not have batteries.',
      stumble:
        'The app will show a battery level indicator. Swap batteries when it drops below 20% to avoid the thermostat going dark mid-winter.',
      screenshot: 'Back of Sensi thermostat with batteries being inserted',
    },
    {
      title: 'Mount the new Sensi backplate and connect the wires',
      instruction:
        'Screw the Sensi backplate to the wall. Feed the thermostat cable through the center. Connect each labeled wire to the letter terminal on the Sensi — use a small flathead screwdriver to loosen each terminal screw, slide the wire in, tighten.',
      stumble:
        'Sensi terminals use screw-clamps, not spring levers. Tighten each screw firmly but do not strip it. The screw should "bite" into the wire so it cannot pull out.',
      screenshot: 'Sensi backplate mounted with wires clamped into screw terminals',
    },
    {
      title: 'Snap the Sensi face onto the backplate',
      instruction:
        'Line up the face with the backplate and press gently until it clicks. Turn the breaker ON. The Sensi screen shows the current room temperature within a few seconds.',
      stumble:
        'If the screen does not wake up on an original Sensi, the AA batteries are not seated correctly or the battery door is not fully closed.',
      screenshot: 'Sensi thermostat mounted on wall showing current temperature',
    },
    {
      title: 'Connect to Wi-Fi via the app',
      instruction:
        'Back in the Sensi app, tap "Continue". The app connects to the thermostat\'s temporary Wi-Fi. Pick your home 2.4 GHz network and type the password. The thermostat confirms with a chime.',
      stumble:
        'If your phone keeps popping back onto cellular data while connecting to the temporary Sensi network, turn cellular data off for a minute, finish the pairing, then turn it back on.',
      screenshot: 'Sensi app Wi-Fi picker with 2.4 GHz network highlighted',
    },
    {
      title: 'Pick a schedule or use "Flexible Schedule"',
      instruction:
        'Sensi offers a classic 7-day schedule or a "Flexible" mode where you set a single "wake" and "sleep" temperature and the app uses your phone location to handle the rest. For most seniors, the classic schedule (4 blocks: wake, leave, return, sleep) is clearer.',
      stumble:
        'Sensi supports Geofencing on newer models — turn it on under Settings → Geofencing if you want the thermostat to drop to an energy-saver temperature when the last phone leaves the house.',
      screenshot: 'Sensi app schedule editor with Wake, Leave, Return, Sleep blocks',
    },
    {
      title: 'Share with a family member',
      instruction:
        'In the Sensi app, tap Settings (gear) → Users → "Invite User". Enter a family member\'s email. They install the Sensi app, accept the invite, and can adjust the thermostat without knowing your password. You can remove their access any time.',
      stumble:
        'Shared users can change the temperature and schedule. They cannot remove the thermostat from your account — which is what you want.',
      screenshot: 'Sensi app Users settings with Invite User button',
    },
  ],
  support: { label: 'Sensi Support', url: 'https://sensi.copeland.com/en-us/support' },
};

/* ── Amazon Smart Thermostat setup ────────────────────────────── */
const AMAZON_SETUP: SetupInfo = {
  id: 'amazon',
  brandName: 'Amazon Smart Thermostat',
  shortName: 'Amazon Thermostat',
  appName: 'Amazon Alexa',
  estTime: '30 – 60 minutes',
  steps: [
    {
      title: 'Check for a C-wire (or grab the C-wire adapter)',
      instruction:
        'The Amazon Smart Thermostat needs a C-wire. Pull your old thermostat face off and look for a wire plugged into a terminal labeled C. If you see one, you are set. If not, Amazon sells a C-wire adapter for about $15 — or you can use a third-party one. Buy it BEFORE you start the install.',
      stumble:
        'Without a C-wire, the Amazon Smart Thermostat will not run. Unlike the original Sensi, there is no battery option. Double-check before you disconnect anything.',
      screenshot: 'Old thermostat with C-wire terminal circled',
    },
    {
      title: 'Turn off the breaker for the furnace',
      instruction:
        'At the electrical panel, flip the furnace / HVAC breaker OFF. Back at the thermostat, press the fan button. If the fan does nothing, power is off and you can continue.',
      stumble:
        'If you have a two-transformer system (common on homes with both heat and AC from different units), turn off BOTH breakers — furnace and air handler.',
      screenshot: 'Hand flipping HVAC breaker to off position',
    },
    {
      title: 'Label and photograph old wires',
      instruction:
        'Take a clear photo of your old thermostat wires with their terminal labels visible. Use the labels included in the Amazon box — peel each one and wrap it around the matching wire. R, C, W, Y, G are the common letters.',
      stumble:
        'Amazon includes small stickers but not color-coded ones. Hand-write the letter on each sticker with a pen before applying.',
      screenshot: 'Wires with hand-labeled stickers matching old thermostat letters',
    },
    {
      title: 'Remove old thermostat and mount new backplate',
      instruction:
        'Unscrew each wire from the old terminal. Unscrew the old backplate. Mount the Amazon backplate to the wall — the included screws fit most drywall anchors. If the old thermostat left a painted outline, use the Amazon trim plate (included) to cover it.',
      stumble:
        'The Amazon trim plate is thin white plastic — easy to crack if you overtighten the screws. Hand-tighten only.',
      screenshot: 'Amazon Smart Thermostat backplate on wall with trim plate',
    },
    {
      title: 'Connect each labeled wire to the new terminal',
      instruction:
        'Press down on the small lever next to each letter terminal on the Amazon thermostat. Insert the matching wire. Release the lever — the wire is held. Do all 4 or 5 wires. If you have the C-wire adapter, follow Amazon\'s wiring diagram in the box (it has you run a short jumper wire to the Rc terminal).',
      stumble:
        'The Amazon terminals are smaller than other thermostats. Use the tiny included screwdriver and work in good light.',
      screenshot: 'Hand inserting wire into Amazon thermostat terminal lever',
    },
    {
      title: 'Attach the thermostat face and restore power',
      instruction:
        'Snap the Amazon thermostat onto the backplate. Go to the electrical panel and flip the furnace breaker ON. The screen should wake with a blue circle.',
      stumble:
        'If you see a black screen, the C-wire is the most likely issue. Turn the breaker off, pull the thermostat off, verify the C terminal has a solid wire connection.',
      screenshot: 'Amazon Smart Thermostat on wall with blue "waking up" screen',
    },
    {
      title: 'Pair with the Alexa app (this is your only app)',
      instruction:
        'Install the Amazon Alexa app if you do not already have it. Open the app, tap More → Add a Device → Thermostat → Amazon. The app asks for permission to use Bluetooth. It finds the new thermostat within 30 seconds. Pick your 2.4 GHz Wi-Fi, type the password, and wait for the confirmation chime.',
      stumble:
        'There is NO standalone Amazon Smart Thermostat app. Alexa is the only way to set it up — which is why this model only makes sense if you already have an Echo or use Alexa on your phone.',
      screenshot: 'Alexa app Add a Device screen with Thermostat option',
    },
    {
      title: 'Set up Hunches (automatic away mode)',
      instruction:
        'In the Alexa app, tap More → Settings → Hunches → turn it ON. When Alexa notices no one has spoken to any Echo or moved through a compatible sensor for a while, it drops the thermostat to an energy-saver temperature. Bumps back up when you say "good morning" or walk back in.',
      stumble:
        'Hunches works better if you have at least one Echo device in the house. Without an Echo, the thermostat basically runs on the schedule you set manually in the app.',
      screenshot: 'Alexa app Hunches settings with toggle switched ON',
    },
  ],
  support: { label: 'Amazon Device Support', url: 'https://www.amazon.com/hz/mycd/digital-console/contactus' },
};

const SETUPS: Record<BrandId, SetupInfo> = {
  nest: NEST_SETUP,
  ecobee: ECOBEE_SETUP,
  honeywell: HONEYWELL_SETUP,
  sensi: SENSI_SETUP,
  amazon: AMAZON_SETUP,
};

/* ── Pre-install checklist data ───────────────────────────────── */

interface ChecklistItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const PRE_INSTALL_CHECKLIST: ChecklistItem[] = [
  {
    icon: CircleDot,
    title: 'Check for a C-wire',
    body: 'A C-wire (common wire) gives your thermostat steady 24-volt power. Pull your current thermostat face off the wall (no breaker needed for this — you are only looking). Look at the terminals. Is one of them labeled C and does it have a wire plugged into it? If yes, you are set. If no, you need a thermostat that works without one (Sensi original) or a C-wire adapter / Power Extender Kit. Take a photo of the wires with your phone — you will reference it during setup.',
  },
  {
    icon: Home,
    title: 'Confirm your HVAC system type',
    body: 'Smart thermostats work with: gas furnace + central AC (most common US home), heat pump, oil furnace, electric forced-air, and many boilers. They do NOT work with: line-voltage baseboard electric, millivolt (pilot-light-powered gas wall heaters), or proprietary systems like some geothermal. If your house has radiators or baseboard heaters only, check the Compatibility Warnings section below before buying.',
  },
  {
    icon: Zap,
    title: 'Turn off the HVAC breaker before you touch wires',
    body: 'Go to your electrical panel. Find the breaker labeled "Furnace", "HVAC", "Air Handler", or "Heat". Flip it OFF. Go back to the thermostat and press the fan button — if the fan does nothing, power is off. The thermostat itself runs on low voltage, but the transformer behind the wall does not. Never skip this step.',
  },
  {
    icon: Camera,
    title: 'Photograph the old thermostat BEFORE removing it',
    body: 'Take 3 phone photos: one wide shot showing all the wires still attached, one close-up of the letter labels (R, C, W, Y, G), and one of the back of the old thermostat. If anything goes wrong during setup, these photos are what save you. Every smart thermostat box also includes peel-and-stick labels — wrap one around each wire matching its letter BEFORE you disconnect anything.',
  },
  {
    icon: Wrench,
    title: 'Gather the right tools',
    body: 'You need: a Phillips screwdriver, a small flathead screwdriver, a pencil, a level (a phone level app works), a drill with a small drill bit (for drywall anchors), and wall anchors (usually included). Optional but helpful: a short step stool, a flashlight, and painter\'s tape (to hold wires so they do not slip back into the wall).',
  },
];

/* ── Energy savings data ──────────────────────────────────────── */

interface SavingItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const ENERGY_SAVINGS: SavingItem[] = [
  {
    icon: DollarSign,
    title: 'Utility rebates — often $50 to $100 off',
    body: 'Many electric and gas utilities offer a rebate when you install a smart thermostat. Amounts range from $50 to $100. Check your utility\'s website under "rebates" or "energy efficiency" before you buy — some want proof of purchase from an approved retailer, others give you the discount at checkout through their online store. ENERGY STAR keeps a nationwide list at energystar.gov.',
  },
  {
    icon: Leaf,
    title: 'Demand Response (DR) programs — a small credit for peak-hour flexibility',
    body: 'A Demand Response program lets your utility bump your thermostat up or down a couple of degrees during peak-demand hours (hot summer afternoons, usually). In exchange, you get a monthly credit ($5–$25) or a yearly bill reduction. You can always override the adjustment with a tap in the app — the utility cannot lock you out. Google Nest, ecobee, and Honeywell Home all have built-in DR opt-in programs.',
  },
  {
    icon: ShieldCheck,
    title: 'Look for the ENERGY STAR logo',
    body: 'All five thermostats on this page are ENERGY STAR certified. ENERGY STAR requires real-world energy savings and tested compatibility with utility rebate programs. If you see a cheap thermostat online without the logo, it probably does not qualify for rebates.',
  },
  {
    icon: DollarSign,
    title: 'Typical savings: $50 – $180 per year',
    body: 'Most households save 8–15% on heating and cooling bills after a smart thermostat is installed and used with a real schedule. For an average US home spending $1,000–$1,500 per year on HVAC, that is $80–$200 back in your pocket. Savings are higher in extreme climates (Minnesota winter, Phoenix summer) and lower in mild climates (coastal California).',
  },
];

/* ── Buttons glossary per brand ───────────────────────────────── */

interface ButtonGlossaryItem {
  symbol: string;
  meaning: string;
}

const BUTTON_GLOSSARY: Record<BrandId, { title: string; items: ButtonGlossaryItem[] }> = {
  nest: {
    title: 'What the Nest screen shows',
    items: [
      { symbol: 'Round dial', meaning: 'Turn it to set the target temperature. Press to open the menu.' },
      { symbol: 'Green leaf', meaning: 'You are at (or below) the Eco temperature — Nest is saving energy.' },
      { symbol: 'Orange flame', meaning: 'Heating is running right now.' },
      { symbol: 'Blue snowflake', meaning: 'Cooling is running right now.' },
      { symbol: 'Home/Away pill', meaning: 'Shows if the house is in Home mode or Eco Away mode.' },
      { symbol: 'White dot', meaning: 'The current actual room temperature (different from the target).' },
    ],
  },
  ecobee: {
    title: 'What the ecobee touchscreen shows',
    items: [
      { symbol: 'Large number', meaning: 'Current room temperature.' },
      { symbol: 'Small number (top)', meaning: 'The target temperature you (or the schedule) set.' },
      { symbol: 'Flame icon', meaning: 'Heating is on.' },
      { symbol: 'Snowflake icon', meaning: 'Cooling is on.' },
      { symbol: 'House with person', meaning: 'Home mode — normal comfort target.' },
      { symbol: 'Moon icon', meaning: 'Sleep mode — typically a lower heat or higher cool target.' },
      { symbol: 'Leaf badge', meaning: 'You are using energy-saving settings.' },
    ],
  },
  honeywell: {
    title: 'What the Honeywell screen shows',
    items: [
      { symbol: 'Up/down arrows', meaning: 'Raise or lower the target temperature manually.' },
      { symbol: 'MENU button', meaning: 'Opens scheduling, fan, and system (Heat / Cool / Auto / Off) controls.' },
      { symbol: 'Fan icon', meaning: 'Tap to change fan mode — On, Auto, or Circulate.' },
      { symbol: 'Hold label', meaning: 'A temporary hold is active — the schedule is paused.' },
      { symbol: 'Wi-Fi icon', meaning: 'Solid means connected. Blinking means lost connection.' },
    ],
  },
  sensi: {
    title: 'What the Sensi buttons do',
    items: [
      { symbol: 'Up/Down arrows', meaning: 'Raise or lower the target temperature.' },
      { symbol: 'MODE button', meaning: 'Switches between Heat, Cool, Auto, and Off.' },
      { symbol: 'FAN button', meaning: 'Switches fan between Auto (runs with heat/cool) and On (runs always).' },
      { symbol: 'MENU button', meaning: 'Opens system info, Wi-Fi, and battery status.' },
      { symbol: 'Wi-Fi bars', meaning: 'Signal strength. Less than 2 bars means you need a mesh Wi-Fi point or extender nearby.' },
    ],
  },
  amazon: {
    title: 'What the Amazon thermostat shows',
    items: [
      { symbol: 'Plus / Minus buttons', meaning: 'Raise or lower the target temperature.' },
      { symbol: 'MODE button', meaning: 'Switches Heat / Cool / Auto / Off.' },
      { symbol: 'Home icon (on screen)', meaning: 'System is in normal Home mode.' },
      { symbol: 'Zzz icon', meaning: 'Sleep or Away mode — lower energy use.' },
      { symbol: 'Blue ring', meaning: 'Alexa is listening or confirming a command.' },
    ],
  },
};

/* ── Schedule strategies data ─────────────────────────────────── */

interface StrategyItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const SCHEDULE_STRATEGIES: StrategyItem[] = [
  {
    icon: Calendar,
    title: 'Vacation mode — leaving for more than 2 days',
    body: 'Every brand has a vacation mode. Set it to 55°F in winter (protects pipes but does not heat an empty house) or 85°F in summer (keeps humidity down without running the AC constantly). Turn it back off the day before you come home — or let geofencing do it for you.',
  },
  {
    icon: Clock,
    title: 'Fixed schedule vs Auto-Away — which is better?',
    body: 'A fixed schedule works best if your days are predictable (retirement, school schedule, regular work). Auto-Away (geofencing) works best if your schedule changes a lot. You can use both — the thermostat follows the schedule first, then drops to Eco/Away whenever the last phone leaves the house.',
  },
  {
    icon: Users,
    title: 'Grandkids visiting? Pause the schedule',
    body: 'Every smart thermostat has a "Hold" button. Tap it, pick a new temperature, and tell it to hold until you release. This overrides the schedule without erasing it. When the grandkids go home, tap "Resume schedule" and everything is back to normal. Ring, Honeywell, and ecobee all call it "Hold". Nest calls it "Temporary adjustment".',
  },
  {
    icon: Sun,
    title: 'Extreme weather override',
    body: 'When a cold snap or heat wave hits, your normal schedule may not be aggressive enough. Most thermostats now include a "pre-cooling" or "pre-heating" feature — turn it on under Settings. Even simpler: bump your home target up (winter) or down (summer) by 2–3 degrees for the week, then bump back when the weather breaks.',
  },
  {
    icon: Snowflake,
    title: 'Overnight temperatures — a little cool saves a lot',
    body: 'A common pitfall is keeping the house at the same temperature 24/7. Dropping to 62–65°F for the overnight block saves 10–15% on heating bills and most people sleep better in a cool bedroom. Raise it back up 30 minutes before wake time and the house is ready when you are.',
  },
];

/* ── Troubleshooting accordion data ───────────────────────────── */

interface IssueItem {
  title: string;
  body: string;
}

const TROUBLESHOOTING: IssueItem[] = [
  {
    title: 'Wi-Fi keeps dropping — the thermostat goes offline',
    body:
      'Thermostats live on the wall — often in a hallway far from the router. Stand at the thermostat and check the Wi-Fi bars on your phone. Below 2 bars means the signal is too weak. Fixes in order: unplug the router for 30 seconds and plug back in, move the router closer to the center of the house, or add a mesh Wi-Fi point / extender in the hallway where the thermostat lives. Every brand needs 2.4 GHz Wi-Fi — if your router only broadcasts 5 GHz, you need to turn 2.4 GHz on in the router settings.',
  },
  {
    title: 'The schedule is not following (keeps staying at one temperature)',
    body:
      'Check if a "Hold" is active. In Honeywell, the screen says "Hold" next to the target. In Nest, you will see a hand icon in the app. In ecobee, a "Hold" banner appears across the top. Tap "Resume schedule" (or "Clear hold") in the app or on the thermostat and the schedule takes over again. If there is no hold, make sure the schedule is turned ON in the app — some brands pause it automatically when you change the temperature by hand.',
  },
  {
    title: 'House is too hot (or too cold) — thermostat reads a different temperature than your room',
    body:
      'First, check that the thermostat is not in a weird spot — direct sunlight, right next to a kitchen doorway, or above a supply vent will skew the reading by 5 degrees. If the location is fine, most thermostats have a temperature offset setting under Installer Settings or Advanced → Temperature Calibration. Adjust by 1–2 degrees to match the reading on a separate room thermometer. ecobee owners: place a SmartSensor in the room you care about and turn on Follow Me.',
  },
  {
    title: 'Short cycling — the system turns on and off every few minutes',
    body:
      'Short cycling wastes energy and wears out the compressor. First, check the filter — a dirty filter makes the system overheat and shut off early. Replace it. If the filter is clean, look at the thermostat\'s "minimum on time" or "cycles per hour" setting — most brands let you extend it. On Nest: Settings → Equipment → System Matchup. On ecobee: Installation Settings → Thresholds. If the cycling continues after these fixes, call an HVAC technician — your thermostat may be undersized, oversized, or a relay could be bad.',
  },
  {
    title: '"rh / rc jumper" error on the display',
    body:
      'This error means the thermostat thinks you have two transformers (one for heating, one for cooling) but they are not both wired. Either your old thermostat used a jumper wire between Rh and Rc and you removed it, or your system truly has only one R wire and you plugged it into Rh instead of R. Fix: on most smart thermostats, move the single red wire to the R terminal (not Rh or Rc). If the message stays, add a small wire jumper between Rh and Rc inside the thermostat — or follow the exact fix in your brand\'s Help Center.',
  },
  {
    title: 'Batteries die fast (original Sensi or battery-model thermostats)',
    body:
      'A Sensi on AA batteries should last 12–24 months. If yours dies in under 6, the cause is almost always a weak HVAC call — Sensi pulls extra power when the furnace or AC relay struggles to close. Swap in a fresh pair of lithium AA batteries (not alkaline) for the fastest fix. If that does not help, you may need a C-wire adapter — Sensi sells one. Also check for a loose wire in the terminal; a loose wire makes the thermostat send the call signal longer than needed.',
  },
  {
    title: 'Thermostat says "Cool to" or "Heat to" is not working — system does nothing',
    body:
      'First, wait 5 minutes — many systems have a built-in delay so the compressor does not restart immediately. If nothing happens after 10 minutes, check: is the mode set right (Heat in winter, Cool in summer)? Is the target temperature actually different from the current room temperature? Is the outdoor condenser running (for AC) — walk outside and listen. If the outdoor unit is silent, flip the HVAC breaker off for 30 seconds, back on, and try again. Persistent no-response calls for an HVAC technician.',
  },
];

/* ── FAQ data ─────────────────────────────────────────────────── */

const FAQ: IssueItem[] = [
  {
    title: 'Do I need a C-wire? And what is it?',
    body:
      'A C-wire (common wire) is a fifth wire that gives your thermostat steady 24-volt power. Most smart thermostats need it; a few (Sensi original, some Nest Learning setups) can work without one. Before you buy, pull the face off your current thermostat and look for a wire plugged into a terminal labeled C. If there is one: you are set for any brand. If there is not: pick the Sensi original (runs on AA batteries), the Nest Learning Thermostat (works on many 2-wire systems), or a brand that includes a Power Extender Kit or adapter (ecobee, Amazon Smart Thermostat).',
  },
  {
    title: 'Will the thermostat work without internet?',
    body:
      'Yes — but with limits. If your Wi-Fi or internet goes out, the thermostat still runs the schedule you already saved on the device. You lose: remote control from the app, voice commands, geofencing, weather-based adjustments, and software updates. Some features like ecobee\'s SmartSensor-based averaging continue to work. When internet comes back, the thermostat reconnects on its own. A good UPS (battery backup) on your router is a worthwhile add-on if your power flickers often.',
  },
  {
    title: 'Can the utility company override my thermostat?',
    body:
      'Only if you opt in. Utility Demand Response programs are voluntary — you sign up, they send a small monthly credit, and during peak-demand hours (summer heat waves) they bump your setpoint up a couple of degrees. You can override the adjustment at any moment by tapping the app or the thermostat screen. The utility cannot lock you out. If you never enrolled in DR, the utility has no access to your thermostat at all.',
  },
  {
    title: 'Is a smart thermostat worth it on a fixed income?',
    body:
      'For most people, yes — the savings pay back the thermostat within 1–2 years. Typical heating and cooling savings are $50–$180 per year. Add a utility rebate of $50–$100 and many smart thermostats are effectively free after the first year. If your utility bills are already very low (mild climate, small home, rarely home) the savings will be smaller. The Amazon Smart Thermostat at $60–$80, combined with a $50 rebate, is the lowest-risk option if budget is a real concern.',
  },
  {
    title: 'What is geofencing — and is it a privacy concern?',
    body:
      'Geofencing uses your phone\'s location to know whether you are home or away. When the last phone in the household leaves the area, the thermostat drops to the energy-saver temperature. When a phone comes back in range, it warms up (or cools down) to the comfort setting. The location data is kept on your phone and used by the thermostat app — it is not sold to advertisers. You can turn geofencing off if it feels uncomfortable; most thermostats also allow a "time-based" schedule that does not use location at all. If you want more privacy, use a schedule instead.',
  },
  {
    title: 'Can I install this myself or should I call an HVAC technician?',
    body:
      'Most people can self-install in 45–90 minutes on a standard gas furnace + central AC. Skip DIY and call a technician if: your system is a boiler with only 2 wires and you are not sure whether a smart thermostat will work, you have a heat pump with dual-fuel or emergency heat (wiring is trickier), the old thermostat has more than 6 wires, or you smell gas or see water damage at the thermostat location. A technician visit typically runs $100–$200. Many HVAC companies install a thermostat for free if you buy it through them.',
  },
];

/* ── Privacy data ─────────────────────────────────────────────── */

interface PrivacyItem {
  brand: BrandId;
  brandName: string;
  recordings: string;
  voice: string;
  utilitySharing: string;
  deleteHistory: string;
}

const PRIVACY_NOTES: PrivacyItem[] = [
  {
    brand: 'nest',
    brandName: 'Google Nest',
    recordings: 'Nest Thermostat does not record video or audio — it is temperature data only. If you also own a Nest camera, that uses Nest Aware (separate subscription).',
    voice: 'Nest Thermostat itself does not have a microphone. Voice commands go through Google Home / Assistant on a separate Echo or Nest Hub.',
    utilitySharing: 'Only if you opt in to a utility Demand Response program through Google Home. Data shared is setpoint and runtime — not your daily habits.',
    deleteHistory: 'Google Home → Account → My Activity → delete thermostat history. You can also set Google to auto-delete activity after 3 months.',
  },
  {
    brand: 'ecobee',
    brandName: 'ecobee',
    recordings: 'ecobee Premium has a microphone for built-in Alexa voice control. Enhanced and Essential do NOT have a microphone. Sensor data (motion, temperature) is stored in the cloud.',
    voice: 'Premium uses Alexa — same privacy settings as an Echo. Turn off the microphone with a physical switch on the top of the thermostat.',
    utilitySharing: 'ecobee has opt-in DR programs (eco+). You can turn them off any time under Settings → eco+.',
    deleteHistory: 'ecobee app → Settings → My Data → Delete Account Data. Individual schedules can be reset from the schedule screen.',
  },
  {
    brand: 'honeywell',
    brandName: 'Honeywell T-series',
    recordings: 'No audio or video recording. Thermostat data (setpoints, runtime) is stored in the Honeywell Home cloud.',
    voice: 'No built-in microphone on any T-series. Voice commands go through Alexa or Google on a separate device.',
    utilitySharing: 'Opt-in only via Honeywell Home app. The Total Connect Comfort program lets you share data with your utility for rebate credit.',
    deleteHistory: 'Honeywell Home → Settings → Privacy → Delete My Data. Or contact support@resideo.com for a full account wipe.',
  },
  {
    brand: 'sensi',
    brandName: 'Sensi',
    recordings: 'No recording of any kind. Sensi stores schedule and temperature data in Copeland\'s cloud servers.',
    voice: 'No microphone on any Sensi model. Voice is via Alexa / Google on a separate device.',
    utilitySharing: 'Sensi\'s "Flex" program is opt-in only. Data shared is limited to setpoint adjustments during peak hours.',
    deleteHistory: 'Sensi app → Settings → Account → Delete Account. You can also disconnect Wi-Fi at any time and use the thermostat locally.',
  },
  {
    brand: 'amazon',
    brandName: 'Amazon Smart Thermostat',
    recordings: 'No microphone on the thermostat itself. If you use Alexa voice commands, the Echo you speak to records in the usual Alexa way.',
    voice: 'The thermostat has no mic. Alexa handles voice from a nearby Echo or the Alexa app on your phone.',
    utilitySharing: 'Opt-in through Alexa app → Settings → Hunches and Energy. Many US utilities support this — check before you enroll.',
    deleteHistory: 'Alexa app → Privacy Settings → Manage Your Alexa Data → Delete voice recordings and thermostat history. Amazon keeps a rolling log; you can set it to auto-delete after 3 months.',
  },
];

/* ── Wizard "Done" screen ─────────────────────────────────────── */

function DoneScreen({
  setup,
  completedCount,
  totalSteps,
  onRestart,
}: {
  setup: SetupInfo;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  return (
    <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-green-600/10 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Your {setup.brandName} thermostat is ready.</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            What to do in the first week
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>Let the schedule run for 7 days before you tweak it. Most settings only show their value after a full week.</li>
            <li>Check your utility&apos;s rebate program — you may qualify for $50–$100 back.</li>
            <li>Turn on geofencing if your schedule is unpredictable.</li>
            <li>
              Test your Wi-Fi where the thermostat lives with our{' '}
              <Link to="/tools/wifi-speed-doctor" className="text-primary underline font-medium">
                Wi-Fi Speed Doctor
              </Link>
              .
            </li>
            <li>
              For manufacturer help, visit{' '}
              <a
                href={setup.support.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium inline-flex items-center gap-1"
              >
                {setup.support.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base min-h-14">
            <RotateCcw className="w-5 h-5" />
            Compare a different brand
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base min-h-14">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function SmartThermostatSetup() {
  const [selectedId, setSelectedId] = useState<BrandId | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const setup = useMemo<SetupInfo | null>(
    () => (selectedId ? SETUPS[selectedId] : null),
    [selectedId],
  );

  const totalSteps = setup?.steps.length ?? 0;
  const isDone = setup ? stepIndex === totalSteps : false;
  const current: Step | null = setup && !isDone ? setup.steps[stepIndex] ?? null : null;
  const progress = setup ? Math.round((stepIndex / totalSteps) * 100) : 0;

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setSelectedId(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickBrand = (id: BrandId) => {
    setSelectedId(id);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Landing page ─────────────────────────────────────────── */
  if (!setup) {
    return (
      <>
        <SEOHead
          title="Smart Thermostat Setup — Nest, ecobee, Honeywell, Sensi, Amazon"
          description="A plain-English buyer's guide and step-by-step setup wizard for Google Nest, ecobee, Honeywell T-series, Sensi, and Amazon Smart Thermostat. Built for seniors and first-time installers."
          path="/tools/smart-thermostat-setup"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          {/* Hero */}
          <section className="border-b border-border bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-rose-950/40">
            <div className="container py-10 md:py-14 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="smart-thermostat-setup"
                  title="Smart Thermostat Setup — Pick One and Install It"
                  url="/tools/smart-thermostat-setup"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/15 text-orange-700 dark:text-orange-300">
                  <Thermometer className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-xs">Home Setup · Compare &amp; Install</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
                Smart Thermostat Setup — Pick One and Install It
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                A plain-English walkthrough for Nest, ecobee, Honeywell, Sensi, and Amazon. We cover the C-wire question, wiring safely, schedules, and saving money on your bill.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild size="lg" className="text-base min-h-14">
                  <a href="#checklist">Start with the pre-install checklist</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                  <a href="#compare">Compare brands</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Pre-install checklist */}
          <section id="checklist" className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-primary" />
              Pre-install checklist — do these 5 things first
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Almost every failed smart-thermostat install skips one of these steps. Spend 10 minutes here and save yourself an hour on the ladder.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {PRE_INSTALL_CHECKLIST.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <CardContent className="p-5 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:text-orange-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Compatibility warnings */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-amber-700 dark:text-amber-400" />
                Compatibility warnings — read this before you buy
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Not every HVAC system plays well with a smart thermostat. Check whether any of these apply to your home.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
                {COMPATIBILITY_ISSUES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.id} className="bg-amber-50/40 dark:bg-amber-950/20 border-amber-500/40">
                      <CardContent className="p-5 space-y-3">
                        <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                          <Icon className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0" />
                          <span>{item.label}</span>
                        </h3>
                        <p className="text-base leading-relaxed">{item.summary}</p>
                        <p className="text-base leading-relaxed">
                          <strong>Model-specific notes:</strong> {item.perBrand}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Brand comparison */}
          <section id="compare" className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">The five brands worth knowing</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              These are the thermostats you will see at Home Depot, Lowe&apos;s, Best Buy, Costco, and Amazon. Each has clear strengths and trade-offs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {BRANDS.map((b) => (
                <Card key={b.id} className="flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-orange-500/10 text-orange-700 dark:text-orange-300 shrink-0">
                        <Thermometer className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold mb-1">{b.name}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{b.tagline}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-sm">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {b.priceTier}
                      </Badge>
                      <Badge variant="outline" className="text-sm">App: {b.companionApp}</Badge>
                      <Badge variant="outline" className="text-sm">
                        {b.cWireNeeded.startsWith('Original') || b.cWireNeeded.startsWith('Usually optional') ? 'C-wire optional' : 'C-wire needed'}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-2 text-base">
                        <div className="flex gap-2">
                          <Thermometer className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span><strong>Models:</strong> {b.models}</span>
                        </div>
                        <div className="flex gap-2">
                          <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span><strong>C-wire:</strong> {b.cWireNeeded}</span>
                        </div>
                        <div className="flex gap-2">
                          <Smartphone className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span><strong>Works with:</strong> {b.worksWith}</span>
                        </div>
                        <div className="flex gap-2">
                          <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span><strong>Best for:</strong> {b.bestFor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-green-800 dark:text-green-400 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {b.strengths.map((s) => (
                            <li key={s} className="text-base leading-relaxed flex gap-2">
                              <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">+</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4" />
                          Weaknesses
                        </h4>
                        <ul className="space-y-1.5">
                          {b.weaknesses.map((w) => (
                            <li key={w} className="text-base leading-relaxed flex gap-2">
                              <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">−</span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 mt-auto flex flex-wrap gap-2">
                      <Button
                        size="lg"
                        className="flex-1 min-w-[200px] gap-2 text-base min-h-14"
                        onClick={() => pickBrand(b.id)}
                      >
                        Set up a {b.name} thermostat
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                        <a href={b.support.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                          Help <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Button glossary */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Eye className="w-7 h-7 text-primary" />
                What the buttons do — by brand
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                The little icon with the dot, the flame, the leaf — here is what they actually mean.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
                {(Object.keys(BUTTON_GLOSSARY) as BrandId[]).map((id) => {
                  const data = BUTTON_GLOSSARY[id];
                  return (
                    <Card key={id}>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <dl className="space-y-2">
                          {data.items.map((item) => (
                            <div key={item.symbol} className="grid grid-cols-[minmax(110px,auto)_1fr] gap-3 text-base leading-relaxed">
                              <dt className="font-semibold text-orange-700 dark:text-orange-300">{item.symbol}</dt>
                              <dd>{item.meaning}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Energy savings */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Leaf className="w-7 h-7 text-primary" />
              Energy savings — what a smart thermostat actually saves
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The savings are real, but the headline numbers are averages. Here is what to expect and how to claim rebates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {ENERGY_SAVINGS.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <CardContent className="p-5 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:text-green-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Schedule strategies */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-primary" />
                Schedule strategies — getting comfort AND savings
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A good schedule is what makes a smart thermostat worth the money. Here are the five strategies that pay off the most.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                {SCHEDULE_STRATEGIES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title}>
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:text-orange-300 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Troubleshooting — the fixes that work 90% of the time
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Tap any issue to expand. Most thermostat problems have a 5-minute fix.
            </p>

            <Accordion type="multiple" className="max-w-3xl bg-background rounded-xl border">
              {TROUBLESHOOTING.map((item, i) => (
                <AccordionItem key={item.title} value={`trouble-${i}`}>
                  <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-medium">
                    <span className="flex items-start gap-2 text-left">
                      <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                      <span>{item.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Privacy */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Shield className="w-7 h-7 text-primary" />
                Privacy — what each brand knows and how to delete it
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A smart thermostat knows when you are home, when you sleep, and how you use heat and cooling. Here is what each brand does with that and how to clear the data.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
                {PRIVACY_NOTES.map((p) => (
                  <Card key={p.brand}>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Thermometer className="w-6 h-6 text-primary" />
                        {p.brandName}
                      </h3>
                      <p className="text-base leading-relaxed">
                        <strong>Recordings:</strong> {p.recordings}
                      </p>
                      <p className="text-base leading-relaxed">
                        <strong>Voice control:</strong> {p.voice}
                      </p>
                      <p className="text-base leading-relaxed">
                        <strong>Utility data sharing:</strong> {p.utilitySharing}
                      </p>
                      <p className="text-base leading-relaxed">
                        <strong>Delete history:</strong> {p.deleteHistory}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Frequently asked questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The real questions we hear most often from first-time buyers and folks on a fixed income.
            </p>

            <Accordion type="single" collapsible className="max-w-3xl bg-background rounded-xl border">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.title} value={`faq-${i}`}>
                  <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related links */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-primary" />
                Keep going — related TekSure tools
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                These pair nicely with a smart thermostat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                <Card>
                  <CardContent className="p-5 flex items-start gap-3">
                    <Wifi className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        <Link to="/tools/wifi-speed-doctor" className="hover:underline">Wi-Fi Speed Doctor</Link>
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Check that Wi-Fi is strong enough in the hallway where your thermostat lives. Weak Wi-Fi is the #1 cause of a smart thermostat going offline.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 flex items-start gap-3">
                    <Home className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        <Link to="/tools/home-security-camera-setup" className="hover:underline">Home Security Camera Setup</Link>
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Pair your new smart thermostat with a matched security camera for a full Google Home or Alexa setup.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        <Link to="/tools/router-setup-wizard" className="hover:underline">Router Setup Wizard</Link>
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        If your Wi-Fi does not reach the hallway, set up a better router first. This wizard walks through the real fixes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        <Link to="/tools/free-software" className="hover:underline">Free Tech Programs</Link>
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Federal and state programs that help with energy bills, Internet, and home efficiency upgrades.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Wizard view ──────────────────────────────────────────── */
  return (
    <>
      <SEOHead
        title={`${setup.brandName} Thermostat Setup — Step-by-Step for Seniors`}
        description={`Follow a plain-English walkthrough to install your ${setup.brandName} smart thermostat. Designed for seniors and first-time installers.`}
        path="/tools/smart-thermostat-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-rose-950/40">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-orange-700 dark:text-orange-300" />
                <span className="text-base md:text-lg font-medium">
                  Installing · {setup.brandName}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Pick a different brand
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                App: <strong>{setup.appName}</strong>
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                About {setup.estTime}
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <DoneScreen
              setup={setup}
              completedCount={completed.size}
              totalSteps={totalSteps}
              onRestart={restart}
            />
          ) : current ? (
            <article className="space-y-6">
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {setup.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
              </header>

              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Visual coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshot}</div>
              </div>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">What to do</h2>
                  <p className="text-lg leading-relaxed">{current.instruction}</p>
                </CardContent>
              </Card>

              {current.stumble && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Common stumbling block</h3>
                      <p className="text-base leading-relaxed">{current.stumble}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 text-base min-h-14"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base min-h-14">
                  {stepIndex === totalSteps - 1
                    ? 'Finish'
                    : completed.has(stepIndex)
                      ? 'Done — next step'
                      : 'Next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {setup.steps.map((s, i) => {
                    const isStepDone = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStepIndex(i);
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                          active
                            ? 'bg-primary text-primary-foreground border-primary'
                            : isStepDone
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {isStepDone && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setStepIndex(totalSteps);
                      if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                      isDone
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    All done
                  </button>
                </div>
              </div>

              <Card className="mt-6 bg-muted/30">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    While you&apos;re here
                  </h3>
                  <p className="text-sm leading-relaxed">
                    <strong>2.4 GHz Wi-Fi:</strong> Smart thermostats use the 2.4 GHz Wi-Fi band only. If setup keeps failing, check this first.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Turn the breaker off:</strong> Never work on thermostat wiring with the HVAC breaker on.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Official help:</strong>{' '}
                    <a
                      href={setup.support.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline inline-flex items-center gap-1"
                    >
                      {setup.support.label} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </CardContent>
              </Card>
            </article>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}

