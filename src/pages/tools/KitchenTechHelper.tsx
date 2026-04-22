import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ChefHat,
  UtensilsCrossed,
  Flame,
  Thermometer,
  Droplets,
  Coffee,
  Microwave,
  Refrigerator,
  Wind,
  Zap,
  Wrench,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Star,
  HelpCircle,
  ExternalLink,
  Printer,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Utensils,
  Cake,
  Soup,
  Lightbulb,
  Wifi,
  DollarSign,
  Volume2,
  Bell,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Kitchen Tech Helper
 * ------------------------------------------------------------
 * A senior-friendly setup and daily-use guide for the 10 most
 * common pieces of kitchen tech — Instant Pot, Air Fryer, Smart
 * Fridge, Sous Vide, Coffee Maker, Induction Cooktop, Microwave,
 * Smart Oven, Stand Mixer, and Bread Maker. For each appliance:
 * unboxing checklist, button decoder, 5 core functions, first
 * recipe, troubleshooting, cleaning, and safety.
 * ────────────────────────────────────────────────────────────── */

type ApplianceId =
  | 'instant-pot'
  | 'air-fryer'
  | 'smart-fridge'
  | 'sous-vide'
  | 'coffee'
  | 'induction'
  | 'microwave'
  | 'smart-oven'
  | 'stand-mixer'
  | 'bread-maker';

interface Button {
  label: string;
  meaning: string;
}

interface Func {
  name: string;
  when: string;
  steps: string[];
}

interface Issue {
  title: string;
  body: string;
}

interface CleaningItem {
  frequency: string;
  body: string;
}

interface Recipe {
  name: string;
  setting: string;
  steps: string[];
  note?: string;
}

interface ApplianceInfo {
  id: ApplianceId;
  name: string;
  tagline: string;
  icon: LucideIcon;
  tint: string; // Tailwind bg tint for icon badge
  text: string; // Tailwind text tint
  popularModels: string;
  priceTier: string;
  bestFor: string;
  unboxing: string[];
  buttons: Button[];
  functions: Func[];
  recipe: Recipe;
  troubleshooting: Issue[];
  cleaning: CleaningItem[];
  safety: string[];
  subscriptionWarning?: string;
  support: { label: string; url: string };
}

/* ── 10 appliances ─────────────────────────────────────────── */

const APPLIANCES: ApplianceInfo[] = [
  {
    id: 'instant-pot',
    name: 'Instant Pot',
    tagline: 'Pressure cooker, slow cooker, rice cooker, and yogurt maker in one.',
    icon: Soup,
    tint: 'bg-orange-500/15',
    text: 'text-orange-700 dark:text-orange-300',
    popularModels: 'Duo · Ultra · Pro · Max · Duo Plus',
    priceTier: '$80 – $250',
    bestFor: 'One-pot dinners in a fraction of the time — stews, beans from dry, whole chicken, yogurt.',
    unboxing: [
      'Wash the inner stainless steel pot, the lid, the sealing ring, and the steam rack with warm soapy water. Air-dry everything before using.',
      'Find the sealing ring (a silicone loop) and snap it into the underside of the lid. It must be fully seated — run a finger around the edge to check.',
      'Do a "water test" first — this proves the pot seals and comes up to pressure correctly. Pour 3 cups of water into the inner pot, close the lid, set the valve to Sealing, pick Steam, 2 minutes. When the timer beeps, quick-release the steam.',
      'The float valve (a small metal pin next to the steam valve) pops UP when the pot is pressurized. Never try to open the lid while the pin is up.',
      'Keep the manual nearby for the first month. The button functions are not intuitive.',
    ],
    buttons: [
      { label: 'Pressure Cook / Manual', meaning: 'Generic high-pressure cooking — used for 90% of recipes. You set the time.' },
      { label: 'Slow Cook', meaning: 'Like a crock pot. Lid should be on Venting (not Sealing) for slow cook mode.' },
      { label: 'Rice', meaning: 'Auto-adjusts for white rice. For brown rice, use Multigrain or Pressure Cook 22 min.' },
      { label: 'Steam', meaning: 'Bring water to a boil and steam veggies, fish, or dumplings. Needs the steam rack.' },
      { label: 'Sauté', meaning: 'Browns meat or onions with the lid OFF. Pre-step for most recipes.' },
      { label: 'Yogurt', meaning: 'Heats milk, then cools and holds at 110°F for 8–10 hours to culture yogurt.' },
      { label: 'Keep Warm', meaning: 'Lights up after cooking — holds food at 140°F until you turn it off.' },
      { label: '+/- or Time', meaning: 'Adjust the cook time up or down. On Ultra/Pro models, there\'s a dial instead.' },
      { label: 'Pressure (Low/High)', meaning: 'Almost every recipe calls for High. Low is for delicate things like custards and seafood.' },
      { label: 'Delay Start', meaning: 'Starts cooking later — useful for beans or stew that can wait. Never use with dairy or raw meat.' },
    ],
    functions: [
      {
        name: 'Pressure Cook (the workhorse)',
        when: 'Stews, beans, whole chicken, beef for tacos, rice, hard-boiled eggs.',
        steps: [
          'Add food and at least 1 cup of liquid (water, broth, or sauce) to the inner pot.',
          'Close the lid and TURN THE STEAM VALVE TO SEALING. This is THE step people miss. Sealing = pressure. Venting = no pressure.',
          'Press Pressure Cook, set time, choose High pressure. Press Start (or wait a moment — it auto-starts).',
          'The pot takes 10–15 minutes to come up to pressure before the timer begins. This is normal.',
          'When the timer beeps, either let pressure release on its own (Natural Release, 10–30 min) or turn the valve to Venting to release quickly (Quick Release — stand back, it\'s hot steam).',
        ],
      },
      {
        name: 'Slow Cook',
        when: 'Pot roast, chili, pulled pork when you have 6–8 hours and want to come home to dinner.',
        steps: [
          'Put food in the inner pot with liquid.',
          'Close the lid and TURN THE VALVE TO VENTING. Slow cooking does not pressurize.',
          'Press Slow Cook, choose Low (8 hr equivalent) or High (4 hr equivalent).',
          'Adjust time with +/- buttons.',
          'Walk away. Unlike pressure cooking, you can lift the lid to check on things.',
        ],
      },
      {
        name: 'Rice',
        when: 'Perfect white rice without watching a pot.',
        steps: [
          'Rinse 1 cup of rice in a fine strainer until water runs clear.',
          'Add rice and 1 cup of water (1:1 ratio) to the inner pot.',
          'Close the lid, set valve to Sealing.',
          'Press Rice — default time of 12 minutes is correct.',
          'When done, let it Natural Release for 10 minutes before opening. Fluff with a fork.',
        ],
      },
      {
        name: 'Steam',
        when: 'Broccoli, green beans, fish fillets, dumplings — keeps nutrients in.',
        steps: [
          'Put the steam rack in the pot. Add 1 cup of water below the rack.',
          'Place food directly on the rack (or in a heat-safe bowl on the rack).',
          'Close the lid, set valve to Sealing.',
          'Press Steam — default 10 min for veggies, 5 min for fish.',
          'Quick-release when the timer beeps. Overcooked broccoli = soggy.',
        ],
      },
      {
        name: 'Yogurt (the hidden gem)',
        when: 'Thick, creamy homemade yogurt for a fraction of the store cost.',
        steps: [
          'Pour half a gallon of whole milk into the pot. Press Yogurt → Boil. Wait until it beeps (about 40 min).',
          'Check the milk temperature — it should be 180°F. If not, press Sauté briefly.',
          'Cool the milk to 110°F (about 30 min — a cold water bath in the sink speeds this up).',
          'Whisk in 2 tablespoons of plain yogurt with live cultures (read the label).',
          'Press Yogurt → set 8 hours. Walk away. In the morning, strain through cheesecloth for thick Greek-style.',
        ],
      },
    ],
    recipe: {
      name: '5-5-5 Hard-Boiled Eggs (foolproof every time)',
      setting: 'Pressure Cook, High pressure, 5 minutes',
      steps: [
        'Pour 1 cup of water into the inner pot and put in the steam rack.',
        'Place up to 12 cold eggs directly on the rack.',
        'Close the lid, set valve to Sealing.',
        'Pressure Cook → High → 5 minutes.',
        'When done, let it Natural Release for 5 minutes.',
        'Open the valve to Quick Release the remaining steam.',
        'Transfer eggs to a bowl of ice water for 5 minutes. Peel under running water — the shells will practically fall off.',
      ],
      note: 'The 5-5-5 rule: 5 minutes pressure + 5 minutes natural release + 5 minutes ice bath. Works on every Instant Pot.',
    },
    troubleshooting: [
      {
        title: 'The "BURN" error message — what it really means',
        body: 'BURN does NOT mean your food burned. It means the sensor on the bottom of the pot is reading above-normal temperatures — usually because something is stuck to the bottom. Common causes: a thick tomato sauce with no water underneath, a sealing ring missing or twisted, or dry rice without enough liquid. Fix: cancel, quick-release, open, and scrape the bottom with a wooden spoon. Add ½ cup more liquid. Make sure the sealing ring is seated. Restart.',
      },
      {
        title: 'The pot won\'t come up to pressure',
        body: 'Four usual suspects: (1) the valve is set to Venting instead of Sealing — check the little knob on top of the lid, (2) the sealing ring is misaligned or dried out — take it out, rinse, reseat, (3) not enough liquid — you need at least 1 cup, (4) the float valve pin (next to the steam release) is stuck — push it from underneath with a chopstick. A normal pot hisses gently then seals silent.',
      },
      {
        title: 'The lid won\'t come off',
        body: 'The float valve (metal pin) is still UP, which means the pot is still pressurized. NEVER force it. Turn the valve to Venting and wait for the pin to drop — can take 2–20 min. Only when the pin drops flush with the lid is it safe to open. If the pin is down and the lid still won\'t turn, the rubber sealing ring may be suctioned — press down on the lid firmly while turning.',
      },
      {
        title: 'My food tastes weird — like the last thing I cooked',
        body: 'The sealing ring absorbs smells like a sponge. Curry + banana bread = sad breakfast. Buy a second sealing ring ($10) — one for savory and one for sweet. To freshen a smelly ring, soak it in 1 cup vinegar + 1 cup water and run Steam mode for 2 minutes.',
      },
      {
        title: 'Food is undercooked',
        body: 'Pressure cooking requires EXACT times — there\'s no "check on it and add 5 minutes". Two fixes: (1) close it back up and add another 5 min of pressure cook, or (2) for the next time, increase the time and size of pieces matter — a whole chicken needs 25 min, chicken breasts only 10.',
      },
      {
        title: 'The sealing ring keeps coming out',
        body: 'Push it in evenly all the way around. It should click into a groove. If it keeps popping out, it may be stretched or damaged — replacement rings are about $10 on Amazon.',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Wash the inner pot, the sealing ring, the lid, and the steam rack with warm soapy water. Wipe the inside of the heating base with a damp cloth — never submerge the base.' },
      { frequency: 'Weekly', body: 'Remove the sealing ring, the anti-block shield (small metal cap under the lid), and the float valve. Rinse all three. Use a small brush (a baby bottle brush works) to clean the steam valve.' },
      { frequency: 'Monthly or when smelly', body: 'Deodorize by pouring 1 cup vinegar + 1 cup water in the pot. Close, seal, and run Steam for 2 min. Quick-release. Rinse.' },
    ],
    safety: [
      'Never fill past the 2/3 "MAX" line (or 1/2 for foods that expand like beans or rice).',
      'Never pressure cook dairy with the lid sealed — milk, cream, and cheese will scorch and burn. Add them after pressure cooking.',
      'Point the steam release AWAY from cabinets or your face. The steam is 212°F and can burn skin instantly.',
      'Don\'t use an old or cracked sealing ring. Replace every 12–18 months, or sooner if it smells sour.',
      'Unplug before cleaning the base. Never submerge the heating element in water.',
    ],
    support: { label: 'Instant Pot Support', url: 'https://instantpot.com/pages/support' },
  },

  {
    id: 'air-fryer',
    name: 'Air Fryer',
    tagline: 'A tiny convection oven that crisps food with almost no oil.',
    icon: Wind,
    tint: 'bg-amber-500/15',
    text: 'text-amber-700 dark:text-amber-300',
    popularModels: 'Ninja Foodi · Cosori Pro · Philips · Instant Vortex',
    priceTier: '$70 – $250',
    bestFor: 'Frozen foods, leftover pizza, chicken wings, salmon, roasted veggies in 10–15 minutes.',
    unboxing: [
      'Unpack and remove ALL the plastic wrap — there are stickers inside the drawer people miss.',
      'Wash the basket and the crisper tray (the metal insert) with warm soapy water. Air-dry.',
      'Run the air fryer empty for 5 minutes at 400°F in a ventilated spot. The "new plastic" smell burns off.',
      'Put the crisper tray INSIDE the basket, then slide the basket back in. Food always goes on the tray, not directly on the bottom.',
      'Know where the safety shut-off is — pulling the basket out stops the cooking automatically.',
    ],
    buttons: [
      { label: 'Temp / Temperature', meaning: 'Set the heat, usually 300–400°F. Higher = crispier but easier to burn.' },
      { label: 'Time', meaning: 'Cook duration. Most frozen foods take 10–20 min.' },
      { label: 'Preheat', meaning: 'Heats the air fryer to temp before adding food. Not always needed, but improves crispness.' },
      { label: 'Reheat', meaning: 'A lower-heat setting (300°F) that warms leftovers without drying them out.' },
      { label: 'Air Fry / Air Crisp', meaning: 'The main mode — full fan, high heat. 90% of what you cook.' },
      { label: 'Bake', meaning: 'Lower fan, more even heat — for muffins, small cakes, quick breads.' },
      { label: 'Roast', meaning: 'Medium fan for whole vegetables, chicken thighs, or a small whole chicken.' },
      { label: 'Dehydrate', meaning: 'Low heat (around 130–150°F) for many hours — for fruit leather or jerky.' },
      { label: 'Start/Stop / Pause', meaning: 'Begins or stops cooking. Most air fryers pause automatically when you open the drawer.' },
      { label: 'Shake Reminder', meaning: 'Beeps halfway through to remind you to shake the basket for even cooking.' },
    ],
    functions: [
      {
        name: 'Air Fry (the classic)',
        when: 'Fries, chicken wings, tater tots, onion rings, anything frozen and breaded.',
        steps: [
          'Add food to the basket in a single layer — don\'t stack or overcrowd.',
          'Light spritz of cooking oil (optional but helps crisp).',
          'Set Air Fry, 400°F, 15 minutes for most frozen foods.',
          'Halfway through (when it beeps), pull the basket out and shake it.',
          'Return to the air fryer until the timer ends. Check for doneness — add 2 min if needed.',
        ],
      },
      {
        name: 'Reheat leftovers',
        when: 'Pizza, fried chicken, fries, egg rolls — anything you want crispy again.',
        steps: [
          'No need to preheat.',
          'Place food on the crisper tray.',
          'Reheat mode, 300°F, 3–5 minutes.',
          'Check halfway — most leftovers are done in 4 min.',
          'Skip the microwave. Pizza reheats crispier here every time.',
        ],
      },
      {
        name: 'Bake a quick dessert',
        when: 'Small cake, muffins, brownies in an 8x8 pan that fits your basket.',
        steps: [
          'Use a heat-safe baking dish that fits inside (check your manual for max size).',
          'Preheat air fryer to 320°F for 3 min.',
          'Pour batter in the dish, place on tray.',
          'Bake mode, 320°F, check at 15 min with a toothpick.',
          'Cool in the dish before removing.',
        ],
      },
      {
        name: 'Roast vegetables',
        when: 'Broccoli, brussels sprouts, sweet potato, cauliflower — crispy outside, tender inside.',
        steps: [
          'Chop vegetables into bite-size pieces.',
          'Toss with 1 tablespoon of oil and salt.',
          'Single layer in the basket. Crowded = steamed, not roasted.',
          'Air Fry or Roast, 400°F, 10–15 min.',
          'Shake halfway through.',
        ],
      },
      {
        name: 'Cook from fresh chicken',
        when: 'Chicken thighs, breasts, or drumsticks — dinner in 20 min.',
        steps: [
          'Pat chicken dry with paper towels. Wet skin won\'t crisp.',
          'Rub with oil and seasoning (salt, pepper, paprika, garlic powder).',
          'Place skin-side down in the basket.',
          'Air Fry, 380°F, 18 min for bone-in thighs. Flip halfway.',
          'Check internal temp — should read 165°F with a meat thermometer.',
        ],
      },
    ],
    recipe: {
      name: 'Frozen French Fries (the perfect gateway recipe)',
      setting: 'Air Fry, 400°F, 15 minutes, shake at 7 minutes',
      steps: [
        'Open the bag and pour about 2 cups of frozen fries into the basket.',
        'Spread them in a single layer. If you can, don\'t stack.',
        'Skip the oil — frozen fries already have enough.',
        'Set Air Fry, 400°F, 15 minutes. Press Start.',
        'When it beeps at 7–8 minutes, pull the basket out and shake it.',
        'Return and let it finish. Check at 13 min — if you like them extra crispy, add 2 more.',
        'Salt immediately while hot.',
      ],
      note: 'Once you nail this, try chicken wings (400°F, 22 min, flip halfway) and salmon (380°F, 10 min).',
    },
    troubleshooting: [
      {
        title: 'My food is smoking',
        body: 'Fat dripping onto the heating element is the usual cause. Pour 2 tablespoons of water into the BOTTOM of the basket (below the crisper tray) when cooking fatty foods like bacon or sausage — catches the drippings. Also clean the element after every fatty cook.',
      },
      {
        title: 'Food is soggy, not crispy',
        body: 'Three fixes: (1) Dry food with paper towels before cooking — wet = steam = soggy. (2) Don\'t overcrowd — single layer, with space between pieces. (3) Shake halfway. If you follow all three and still get soggy food, try cooking 25°F hotter for the last 3 minutes.',
      },
      {
        title: 'The outside is burned, inside is raw',
        body: 'Temperature too high. Most frozen foods want 380–400°F, but raw thick foods (chicken thighs, pork chops) need 360°F so heat has time to reach the center. If it keeps happening, get a cheap meat thermometer ($12) — it tells you when the inside is actually done.',
      },
      {
        title: 'The basket handle feels wobbly or hot',
        body: 'Handles loosen over time — check for a tiny screw under the handle and tighten it. If the handle is hot to touch, the plastic has warped. Contact the manufacturer — most have a 1-year warranty and will replace the basket.',
      },
      {
        title: 'Parchment paper flew up into the heating element',
        body: 'Only use perforated parchment (it has holes), and only place it under food — the weight keeps it down. Never use parchment in an empty preheating basket. If paper touches the element, turn off immediately.',
      },
      {
        title: 'Won\'t turn on after unplugging it',
        body: 'Most air fryers need to be plugged into a grounded outlet (three-prong). Extension cords and power strips don\'t have enough amps. Try a different outlet. Also check the drawer is fully seated — most models won\'t start if the basket isn\'t pushed all the way in.',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Let it cool for 30 min. Pull out the basket and the crisper tray. Wash both with warm soapy water. A soft sponge — no steel wool (it ruins the nonstick).' },
      { frequency: 'Weekly', body: 'Wipe the inside chamber with a damp cloth. Clean the heating element area (on top) by gently wiping with a damp cloth — make sure the unit is unplugged and fully cool.' },
      { frequency: 'When it starts smoking', body: 'Remove the basket and scrub any baked-on grease from the bottom. Use a baking soda paste (3 parts baking soda, 1 part water) for stubborn spots.' },
    ],
    safety: [
      'Never put paper towels or napkins in the basket — they can catch fire from the heating element above.',
      'Always use perforated parchment paper (with holes), not regular parchment.',
      'Give it 4 inches of clearance on all sides and above. A hot air fryer under a cabinet can damage wood finishes.',
      'Don\'t air fry anything with a wet batter (tempura-style) — it drips everywhere and makes a mess.',
      'Unplug before cleaning. The heating element stays hot for 20 min after use.',
    ],
    support: { label: 'Ninja / Cosori / Instant Support', url: 'https://www.ninjakitchen.com/support/' },
  },

  {
    id: 'smart-fridge',
    name: 'Smart Refrigerator',
    tagline: 'A fridge with a touchscreen, Wi-Fi, and cameras — most features are optional.',
    icon: Refrigerator,
    tint: 'bg-sky-500/15',
    text: 'text-sky-700 dark:text-sky-300',
    popularModels: 'Samsung Family Hub · LG InstaView · GE Café',
    priceTier: '$2,500 – $5,000',
    bestFor: 'Households that already live in a smart home. If all you want is cold food, a regular fridge is cheaper and lasts longer.',
    unboxing: [
      'Delivery note: Let the fridge sit upright and unplugged for 4 hours before plugging in. Coolant inside needs to settle.',
      'Set to 37°F (fresh section) and 0°F (freezer) — the classic safe temperatures.',
      'If it has a water dispenser, run 2 gallons through before drinking — flushes out install dust.',
      'Connect to Wi-Fi through the touchscreen or the app (SmartThings for Samsung, LG ThinQ for LG, SmartHQ for GE). This step is optional — the fridge still cools and dispenses water without it.',
      'Register your warranty online within 30 days — most stores give you 30 days then you\'re on your own.',
    ],
    buttons: [
      { label: 'Temperature +/-', meaning: 'Adjusts fridge or freezer temperature. Don\'t go below 0°F in the freezer or below 34°F in the fridge.' },
      { label: 'Power Cool / Power Freeze', meaning: 'Turbo cool — drops temp for 2 hours after adding lots of groceries. Auto turns off.' },
      { label: 'Vacation', meaning: 'Turns off the fridge but keeps the freezer on — saves energy while you\'re away.' },
      { label: 'Ice Type', meaning: 'Cubed, crushed, or nugget. Most models offer two choices.' },
      { label: 'Child Lock', meaning: 'Disables the touchscreen so grandkids can\'t order ice cream from your Amazon account.' },
      { label: 'Filter Reset', meaning: 'Resets the water filter timer after you change it. Does NOT actually reset the filter — it\'s a reminder only.' },
      { label: 'Mic (on screen)', meaning: 'Voice command — "Find my recipe" or "Show inside". Always listening unless you mute it.' },
      { label: 'Apps / Hub (on screen)', meaning: 'Opens the built-in apps like calendar, weather, Spotify. Optional.' },
      { label: 'Camera (on screen)', meaning: 'Shows the inside without opening the door. Photo taken each time the door closes.' },
      { label: 'Mirror Mode', meaning: 'Turns the touchscreen into a mirror when not in use. Off by default.' },
    ],
    functions: [
      {
        name: 'Set the right temperature',
        when: 'Always — especially after a power outage or after adding a big grocery haul.',
        steps: [
          'Fridge should be 37°F. Freezer should be 0°F.',
          'Press the temperature button on the front panel. Use +/- to adjust.',
          'Wait 24 hours for the inside to reach the new temperature — don\'t keep adjusting.',
          'If a section is freezing fresh food, turn the fridge UP 2 degrees (warmer).',
          'If things spoil fast, turn DOWN 2 degrees (colder).',
        ],
      },
      {
        name: 'Connect to Wi-Fi (optional)',
        when: 'Only if you want remote alerts, shopping lists from the door, or camera peeks.',
        steps: [
          'Download the app — SmartThings (Samsung), LG ThinQ (LG), SmartHQ (GE).',
          'Create an account with a real email.',
          'In the app, tap Add Device → pick your model.',
          'Connect to your home 2.4 GHz Wi-Fi (same as most smart appliances).',
          'Turn off features you don\'t want — location tracking, ads, targeted recipes.',
        ],
      },
      {
        name: 'Track what\'s inside (Family Hub / InstaView)',
        when: 'When you shop, you want to see what\'s already at home.',
        steps: [
          'On Samsung Family Hub: internal cameras take a photo each time the door closes. View in SmartThings app.',
          'On LG InstaView: knock twice on the door to turn the panel clear and see inside without opening.',
          'Some models let you tag food items with expiration dates — nice idea, painful in practice.',
          'Skip the inventory app feature — manual typing of every item is not worth the time.',
          'Use the camera + expiration reminders instead.',
        ],
      },
      {
        name: 'Change the water filter',
        when: 'Every 6 months, or when the filter indicator turns red.',
        steps: [
          'Locate the filter — usually behind the top grill or inside the bottom-right corner of the fridge.',
          'Twist the old filter 1/4 turn counterclockwise, pull out.',
          'Insert new filter, twist 1/4 turn clockwise until it clicks.',
          'Run 2 gallons of water through the dispenser to flush air and carbon dust.',
          'On the front panel, hold "Filter Reset" for 3 seconds to restart the timer.',
        ],
      },
      {
        name: 'Set vacation / away mode',
        when: 'Before a trip longer than 3 days.',
        steps: [
          'Eat or toss items that will expire.',
          'On the panel, press Vacation or Away mode.',
          'Fridge runs at minimum while freezer stays normal.',
          'Turn off the ice maker to prevent a giant frozen clump if power blinks.',
          'Empty the ice bin so it doesn\'t freeze solid.',
        ],
      },
    ],
    recipe: {
      name: 'Emergency food safety check (after a power outage)',
      setting: 'No cooking — a temperature check only',
      steps: [
        'If power was out under 4 hours and the door stayed closed, fridge food is safe.',
        'If power was out 4–24 hours, use a thermometer — food above 40°F for more than 2 hours must be tossed.',
        'Freezer food is safe as long as it still has ice crystals or is at 40°F or below.',
        'Keep a cheap fridge thermometer ($8) inside the fridge permanently. Look at it after any outage.',
        'When in doubt, throw it out — especially meat, dairy, and leftovers.',
      ],
      note: 'This saves more lives than any other fridge tip. Food poisoning is 50 times more common than smart-fridge hacks.',
    },
    troubleshooting: [
      {
        title: 'The touchscreen is frozen or unresponsive',
        body: 'First, try a soft reset — on Samsung: hold the Power Cool button for 10 seconds; on LG: unplug for 1 minute, plug back in. The fridge keeps cooling during this. If the screen still won\'t wake up, the fridge still works — it\'s only a computer problem, and the food is fine. Call support for a screen service visit.',
      },
      {
        title: 'Wi-Fi keeps dropping',
        body: 'Smart fridges use 2.4 GHz, not 5 GHz. Check your router — if it\'s dual-band, you may need to force the 2.4 network. Router too far? A $70 Wi-Fi extender in the kitchen usually solves it. The fridge cooling is not affected by Wi-Fi loss.',
      },
      {
        title: 'Ice maker stopped working',
        body: 'Most common cause: the water filter is clogged (change it). Second: the water line is kinked behind the fridge — pull the fridge forward 2 inches and check. Third: the ice bin is jammed with a frozen clump — empty it, let it defrost for 2 hours, restart. Last: the fill tube is frozen solid — turn off ice maker, let thaw 24 hours, restart.',
      },
      {
        title: 'Water tastes weird',
        body: 'Change the water filter. Even if the light isn\'t red, filters get saturated. After changing, run 2 gallons through to flush carbon dust. If it still tastes bad after a new filter, your incoming water is the source — install a whole-house filter or use a Brita pitcher.',
      },
      {
        title: 'The camera won\'t work or shows a black screen',
        body: 'Clean the camera lens — it\'s inside the fridge, usually near the top. Food splatter or condensation blocks it. Restart the SmartThings or ThinQ app. If it\'s stuck black, software update is needed — let the fridge update overnight.',
      },
      {
        title: 'Food in the back is freezing',
        body: 'Two causes: (1) the fridge is too cold — turn up 2 degrees, (2) the air vent at the top or back is blocked by tall food. Items in the back-top corner get hit with the coldest air. Keep the back clear of bottles and tall containers.',
      },
    ],
    cleaning: [
      { frequency: 'Weekly', body: 'Wipe down shelves and drawers with a damp cloth. Check for spoiled food. Rinse the drip tray if your model has one.' },
      { frequency: 'Monthly', body: 'Empty and wipe all shelves and drawers with a mix of 1 tablespoon baking soda + 4 cups water. No bleach — it can stain plastic. Wipe the touchscreen with a microfiber cloth and glass cleaner.' },
      { frequency: 'Every 6 months', body: 'Vacuum the condenser coils on the back or underneath. Dusty coils = fridge works harder and lives shorter. Also change the water filter.' },
    ],
    safety: [
      'Never plug a smart fridge into a power strip or extension cord — only a grounded wall outlet.',
      'Do not run the built-in apps on the touchscreen if you\'re not comfortable — ads, voice logging, and shopping integrations can be off.',
      'The cameras inside are connected to the internet. Treat them like security cameras — strong password + two-factor.',
      'Don\'t defrost a smart fridge with a sharp tool — you can puncture the coolant line (very expensive repair).',
      'If the touchscreen shows an error code you don\'t understand, take a photo of it before pressing buttons. Support asks for the code.',
    ],
    subscriptionWarning: 'Samsung SmartThings Energy, some LG premium features, and manufacturer-branded grocery apps may push a paid tier. The fridge works fully without any subscription. Never subscribe from a pop-up on the fridge screen — research first on a computer.',
    support: { label: 'Samsung / LG / GE Support', url: 'https://www.samsung.com/us/support/' },
  },

  {
    id: 'sous-vide',
    name: 'Sous Vide',
    tagline: 'A wand that heats water to an exact temperature. Steakhouse results at home.',
    icon: Thermometer,
    tint: 'bg-rose-500/15',
    text: 'text-rose-700 dark:text-rose-300',
    popularModels: 'Anova Precision · Breville Joule',
    priceTier: '$100 – $250',
    bestFor: 'Perfect steak, chicken breast, pork chops, salmon — never overcooked.',
    unboxing: [
      'Unbox the wand. Charge or plug into a wall outlet (most are direct plug-in, no battery).',
      'Attach the clip to a tall pot or container. The pot should be at least 6 inches deep.',
      'Download the app — Anova (Anova) or Joule (Breville). App connects via Wi-Fi or Bluetooth.',
      'Fill the pot with water between the MIN and MAX lines on the wand.',
      'Do a test run — set 130°F, wait until it reaches target (5–10 min), then tip the water and call it done.',
    ],
    buttons: [
      { label: 'Temp / °F', meaning: 'Set water temperature — 129°F for medium-rare steak, 140°F for chicken, 122°F for salmon.' },
      { label: 'Time', meaning: 'Cook duration, usually 1–4 hours. Food can\'t overcook at the target temp.' },
      { label: 'Start', meaning: 'Begins heating. The water circulates and holds exactly that temperature.' },
      { label: 'Scroll Wheel (Anova)', meaning: 'Turn to change temp or time. Press to confirm.' },
      { label: 'App-only (Joule)', meaning: 'The Breville Joule has almost no physical buttons — you set everything from your phone.' },
      { label: 'Pause', meaning: 'Most don\'t have this — to stop, you pull the wand out.' },
    ],
    functions: [
      {
        name: 'Cook steak sous vide',
        when: 'When you want perfect medium-rare edge to edge.',
        steps: [
          'Season steak with salt and pepper. Put in a zip-top bag and squeeze out air (or use vacuum-seal bag).',
          'Set water to 129°F (medium-rare) or 135°F (medium).',
          'Drop the sealed bag in. Clip the bag to the pot side so it stays submerged.',
          'Cook 1–4 hours — the long window is a feature. Can\'t overcook.',
          'Remove, pat dry, and sear in a blazing hot pan with oil for 60 seconds per side for the crust.',
        ],
      },
      {
        name: 'Chicken breast',
        when: 'No more dry, rubbery chicken.',
        steps: [
          'Season chicken breast. Seal in a bag.',
          'Set water to 145°F (juicy, still firm) or 140°F (very tender).',
          'Cook 1 to 4 hours.',
          'Remove. Optionally sear in a pan for 30 seconds per side for color.',
          'Slice. It\'ll be perfectly cooked and juicy — no guesswork.',
        ],
      },
      {
        name: 'Salmon',
        when: 'Buttery, never dry salmon.',
        steps: [
          'Season salmon with salt, pepper, dill. Bag it with a pat of butter.',
          'Set water to 122°F (very silky) or 130°F (more flake).',
          'Cook 45 min — 1 hour.',
          'Remove — skin may be rubbery. Optionally crisp in a hot pan.',
          'Best-paired with lemon butter poured over the top.',
        ],
      },
      {
        name: 'Hard-boil eggs',
        when: 'Perfectly set yolk — not chalky, not runny.',
        steps: [
          'Set water to 170°F.',
          'Drop cold eggs directly into the water (no bag).',
          'Cook 45 min.',
          'Transfer to ice water for 2 min.',
          'Peels are clean, yolks are the exact texture you want.',
        ],
      },
      {
        name: 'Yogurt or custard',
        when: 'When you want temperature-precise dairy work.',
        steps: [
          'Pour custard base into small jars. Seal with lids loosely (not airtight).',
          'Set water to 180°F for yogurt, 175°F for custard.',
          'Drop jars in. Cook per recipe (8 hr yogurt, 1 hr custard).',
          'Remove, cool, refrigerate.',
          'No curdling, no watchful stirring.',
        ],
      },
    ],
    recipe: {
      name: 'Medium-rare Steak (the signature sous vide recipe)',
      setting: 'Sous vide at 129°F for 2 hours, then sear',
      steps: [
        'Pat a 1-inch ribeye or NY strip dry with paper towels.',
        'Season generously with salt and pepper.',
        'Place in a zip-top freezer bag. Slowly lower into water (air pushes out the top) and seal at the water line.',
        'Set your sous vide to 129°F and drop in the bag. Set timer for 2 hours.',
        'When done, remove steak from bag and pat completely dry — wet steak won\'t sear.',
        'Heat a cast-iron pan over HIGH heat with 1 tablespoon oil until smoking.',
        'Sear the steak 45 seconds per side, rotating to get crust all around. 10 seconds on each edge.',
        'Rest 2 min, slice against the grain. Edge-to-edge pink, crisp crust.',
      ],
      note: 'The first time you do this, you\'ll understand why people love sous vide.',
    },
    troubleshooting: [
      {
        title: 'The water isn\'t heating / stuck at room temperature',
        body: 'Check that water is ABOVE the MIN line. Most wands won\'t heat with too little water. Also make sure the pump intake (bottom of wand) isn\'t blocked by the pot wall or a lid. Give 1 inch of clearance. If still not heating, unplug and plug back in — it resets.',
      },
      {
        title: 'The app won\'t connect to my wand',
        body: 'Most sous vides use 2.4 GHz Wi-Fi only. Check your phone is on 2.4 GHz (not 5 GHz) during setup. Once paired, your phone can be on any network. If Bluetooth pairing fails, make sure the wand is powered on and within 10 feet.',
      },
      {
        title: 'My bag floated and some food was exposed',
        body: 'Air stuck in the bag. Reseal more carefully — use the water displacement method: lower the bag slowly into the pot until water almost reaches the opening, then seal. If bags keep floating, add a heavy spoon to the bag bottom, or clip with binder clips to the pot.',
      },
      {
        title: 'Food smells off after cooking',
        body: 'The bag wasn\'t sealed properly and water got in. Only use freezer-grade zip-tops (not sandwich) or vacuum bags. Also, never cook bacteria-prone foods at low temps for over 4 hours (the safe-time limit for chicken at 140°F is 2.5 hours).',
      },
      {
        title: 'Water evaporates during long cooks',
        body: 'For cooks over 4 hours, cover the pot with plastic wrap or aluminum foil — leave a slot for the wand. Ping-pong balls floating on the water also work (it looks silly but it\'s a pro trick).',
      },
      {
        title: 'The app\'s "subscription" auto-renewed',
        body: 'Breville Joule had a subscription for the recipe app that auto-renews. Check your phone\'s App Store subscriptions. The wand still cooks without the subscription — you only lose the curated recipes.',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Unplug. Rinse the bottom half of the wand under warm water. Wipe the top with a damp cloth. Don\'t submerge the head.' },
      { frequency: 'Monthly', body: 'Run 50/50 water + distilled white vinegar at 140°F for 20 min — dissolves mineral buildup on the heating coil.' },
      { frequency: 'When the fan is loud', body: 'The impeller at the bottom can get gunk. Unscrew the cap (most have a twist-off bottom), rinse, reassemble.' },
    ],
    safety: [
      'Only use freezer zip-top bags OR vacuum bags. Sandwich bags are too thin and leak.',
      'Don\'t cook chicken below 136°F — bacteria survive. Safe food-temperature charts are worth printing.',
      'Minimum cook times matter for food safety: chicken at 145°F needs at least 30 min; at 140°F needs 2 hours.',
      'Never plug the wand into a power strip — it pulls more amps than most strips handle.',
      'Don\'t leave the wand unattended overnight with young kids around — the water is 140°F+ and the pot is often deep.',
    ],
    subscriptionWarning: 'Breville Joule\'s recipe app has an auto-renewing annual subscription. You don\'t need it to cook — the temperatures and times are free on any blog. Cancel it in the App Store if you don\'t use it.',
    support: { label: 'Anova / Breville Support', url: 'https://anovaculinary.com/support/' },
  },

  {
    id: 'coffee',
    name: 'Coffee Maker',
    tagline: 'Keurig, Nespresso, or a real espresso machine — pick your morning.',
    icon: Coffee,
    tint: 'bg-amber-700/15',
    text: 'text-amber-800 dark:text-amber-200',
    popularModels: 'Keurig K-Slim · Nespresso Vertuo · Breville Barista',
    priceTier: '$80 – $800',
    bestFor: 'Daily coffee without the coffee shop. Keurig for variety, Nespresso for crema, Breville for espresso-shop quality.',
    unboxing: [
      'Fill the reservoir with cold filtered water. Tap is fine but filtered reduces limescale.',
      'Run 2 full cycles with plain water (no pod) to flush out manufacturing dust and plastic taste.',
      'Insert your first pod. Close, choose cup size, press brew.',
      'First few cups may taste bland — water is finding its groove. By day 3 it\'s right.',
      'Register the machine online within 30 days for warranty.',
    ],
    buttons: [
      { label: 'Power', meaning: 'Turns machine on. Most Keurigs take 90 seconds to heat water.' },
      { label: 'Cup size (6/8/10/12 oz)', meaning: 'How much water pumps through. More water = weaker coffee.' },
      { label: 'Strong / Bold', meaning: 'Runs water slightly slower for more extraction. Helpful for light roasts.' },
      { label: 'Iced', meaning: 'On some Keurigs — brews hotter and slower into ice for stronger iced coffee.' },
      { label: 'Descale (flashing)', meaning: 'Not a button — an indicator light. Means time to run the descale cycle.' },
      { label: 'Water Refill (flashing)', meaning: 'Reservoir empty. Fill above the MIN line.' },
      { label: 'Brew', meaning: 'Starts the brew cycle after you insert a pod and pick size.' },
      { label: 'Steam Wand (espresso machines)', meaning: 'Turns the steam wand on for frothing milk.' },
      { label: 'Grind Size (barista)', meaning: 'On grinders — adjusts how fine the beans are ground. Finer = stronger espresso.' },
    ],
    functions: [
      {
        name: 'Brew a Keurig K-Cup',
        when: 'Every morning.',
        steps: [
          'Power on, wait for it to heat (90 sec).',
          'Open the top, drop in a K-Cup, close firmly (this pierces the pod).',
          'Place a mug on the tray.',
          'Pick cup size: 6 oz strong, 8 oz regular, 10–12 oz weaker.',
          'Press Brew. Done in 1 minute.',
        ],
      },
      {
        name: 'Brew a Nespresso Vertuo',
        when: 'Every morning, when you want espresso-style with crema.',
        steps: [
          'Power on, wait for light to stop blinking.',
          'Lift the handle, insert a Vertuo pod (barcode faces the machine — it scans to know size).',
          'Close handle, put cup underneath.',
          'Press the single button on top. Machine auto-brews the right size per the pod.',
          'Lift the handle after brewing to eject the used pod.',
        ],
      },
      {
        name: 'Pull an espresso shot (Breville Barista)',
        when: 'When you want real espresso from beans, not pods.',
        steps: [
          'Fill the bean hopper with whole beans.',
          'Attach the portafilter (metal handle) to the grinder, press the grind button.',
          'Tamp the ground coffee flat with firm pressure.',
          'Lock the portafilter into the machine.',
          'Press 1-shot or 2-shot button. A perfect shot takes 25–30 seconds to pour.',
        ],
      },
      {
        name: 'Steam and froth milk',
        when: 'For lattes, cappuccinos, macchiatos.',
        steps: [
          'Fill a stainless steel pitcher 1/3 with cold milk.',
          'Purge the steam wand — turn on for 2 seconds to clear water.',
          'Put the wand tip just under the milk surface. Turn on steam.',
          'Lower the pitcher as the milk expands. Keep it spinning.',
          'When pitcher is hot to touch (too hot to hold for 2 sec), shut off steam. Wipe the wand immediately.',
        ],
      },
      {
        name: 'Descale (EVERY 3 months)',
        when: 'When the descale light flashes, or every 90 days.',
        steps: [
          'Remove the water filter (if installed).',
          'Fill reservoir with a 50/50 mix of white vinegar and water (or a descaling solution).',
          'Run a full brew cycle into a mug. Dump.',
          'Repeat until reservoir is empty.',
          'Rinse reservoir, refill with clean water, and run 2 full cycles to flush the vinegar taste.',
        ],
      },
    ],
    recipe: {
      name: 'Perfect Latte (if you have a steam wand)',
      setting: 'Double espresso + 6 oz steamed milk',
      steps: [
        'Pull a double shot of espresso into your mug (or mix an espresso pod into 2 oz of hot water).',
        'Fill a small pitcher with 1/3 cold whole milk.',
        'Steam the milk until it\'s glossy and hot to touch (around 150°F).',
        'Tap the pitcher on the counter twice to pop big bubbles.',
        'Swirl gently, then pour into the espresso from 4 inches above the mug, moving lower as you pour.',
        'A good latte should have a thin layer of foam on top — you can draw a heart with practice.',
      ],
      note: 'Getting the milk texture right is 80% of making a great latte.',
    },
    troubleshooting: [
      {
        title: 'Keurig isn\'t pulling water',
        body: 'Almost always a clog or air pocket. Fix #1: Take out the reservoir, dump water, inspect the little hole where the reservoir meets the machine — clear any gunk with a toothpick. Fix #2 (the air bubble trick): fill reservoir, press brew with no cup, then bang the side of the machine firmly to dislodge the bubble. Fix #3: Descale — mineral buildup is the #1 cause.',
      },
      {
        title: 'Nespresso won\'t recognize pods',
        body: 'The Vertuo scans a barcode on the pod. Clean the scanner area (inside the lid where the pod sits) with a damp cotton swab. Also ensure you\'re using Vertuo pods — Original-line pods don\'t fit Vertuo machines.',
      },
      {
        title: 'Espresso shots taste sour or watery',
        body: 'Grind is too coarse. Adjust grind finer by 1 notch. Also check that your tamp is firm and level — a slanted coffee puck channels water through one side. Aim for 25–30 seconds of pour time for a double shot.',
      },
      {
        title: 'Milk won\'t froth properly',
        body: 'Three fixes: (1) Use cold whole milk straight from the fridge — warm milk won\'t foam. (2) Purge the wand before steaming (1-sec blast of steam into a towel). (3) Keep the wand tip barely under the milk surface — too deep = hot milk with no foam.',
      },
      {
        title: 'Coffee tastes like vinegar or "off"',
        body: 'You forgot to flush after descaling. Run 3 cycles of clean water through. Also replace the reservoir filter. If the reservoir smells bad, wash with soap and warm water — drain completely.',
      },
      {
        title: 'The descale light won\'t turn off',
        body: 'Most Keurigs need you to HOLD the button combo after the descale cycle — usually hold 8oz + 12oz + power for 3 seconds. Check your specific model\'s manual — each one is a little different.',
      },
    ],
    cleaning: [
      { frequency: 'Daily', body: 'Empty the drip tray. Wipe the exterior. Rinse the reservoir if water sits more than 24 hours.' },
      { frequency: 'Weekly', body: 'Wash the reservoir, drip tray, and K-Cup holder in warm soapy water. Wipe the pod-puncture needle area with a damp cloth.' },
      { frequency: 'Every 3 months', body: 'Descale with vinegar or descaling solution. Replace the water filter cartridge (if your model has one).' },
    ],
    safety: [
      'Never run the machine empty — damages the pump.',
      'Don\'t use tap water if yours is very hard. Filtered water doubles the life of your machine.',
      'Keep the steam wand away from kids — it\'s 200°F+ and can cause instant burns.',
      'Unplug before any internal cleaning.',
      'Used Nespresso and Keurig pods can be recycled through manufacturer programs — most pods are landfill otherwise.',
    ],
    subscriptionWarning: 'Nespresso and Keurig push auto-delivery subscriptions for pods. It\'s fine if you use a lot — but check cancellation policies. Specialty subscriptions (Atlas Coffee, Trade) auto-renew every 1–4 weeks and rack up fast.',
    support: { label: 'Keurig / Nespresso / Breville Support', url: 'https://www.keurig.com/support' },
  },

  {
    id: 'induction',
    name: 'Induction Cooktop',
    tagline: 'A glass surface that heats only pots, not the stovetop. Fast, precise, safe.',
    icon: Zap,
    tint: 'bg-purple-500/15',
    text: 'text-purple-700 dark:text-purple-300',
    popularModels: 'Duxtop portable · Samsung · GE Profile · Bosch',
    priceTier: '$90 portable – $3,000 built-in',
    bestFor: 'Households that want faster boiling, safer surfaces (no open flame), and precise temperature control.',
    unboxing: [
      'For a portable unit: place on a flat, heat-resistant counter. Plug into a grounded outlet.',
      'For built-in: installation should be done by an electrician — induction needs a 240V line.',
      'Check your pots with a magnet. If a magnet sticks to the BOTTOM of the pot, it works on induction. Aluminum, copper, and most glass cookware does NOT work.',
      'Turn on. Place a pot of water. Set to medium-high. It heats in 60 seconds — faster than gas.',
      'The surface stays cool where no pot is on it — test by putting your hand next to (not under) the pot.',
    ],
    buttons: [
      { label: 'On/Off', meaning: 'Turns on the cooktop. Most have a master button, plus one per burner.' },
      { label: 'Power Level (1–9 or 1–20)', meaning: 'How hot. 1 = keep warm, 9 = ripping boil.' },
      { label: 'Temperature (°F mode)', meaning: 'Sets actual surface temp like an oven — 200°F to 450°F, common on portable models.' },
      { label: 'Timer', meaning: 'Counts down and auto-shuts-off the burner. Great for boiling eggs.' },
      { label: 'Boost / Turbo', meaning: 'Maxes out power for 5 minutes — faster boiling. Auto returns to set level.' },
      { label: 'Lock / Child Lock', meaning: 'Disables the controls. Press and hold for 3 seconds.' },
      { label: 'Keep Warm', meaning: 'Low simmer — holds around 140°F without boiling.' },
      { label: 'Pause', meaning: 'Freezes the burner settings so you can briefly move a pot without losing the settings.' },
      { label: 'Fan / Ventilation', meaning: 'Some built-ins have an integrated ventilation control.' },
    ],
    functions: [
      {
        name: 'Boil water (the speed test)',
        when: 'Pasta, tea, blanching vegetables.',
        steps: [
          'Fill a pot with water.',
          'Place on a burner. The cooktop beeps when it senses the pot.',
          'Press Power Level 9 (or Boost/Turbo).',
          'Water boils in 2–3 minutes — half the time of an electric coil.',
          'Drop to level 6 once boiling to hold a rolling boil.',
        ],
      },
      {
        name: 'Sear a steak',
        when: 'Pan-seared steaks, chops, scallops.',
        steps: [
          'Preheat a cast-iron pan at level 9 (or Boost) for 2 min.',
          'Add 1 tablespoon of high-heat oil (avocado or grapeseed).',
          'Drop steak in — it should sizzle instantly.',
          'Sear 2 min per side for a 1-inch steak. Induction\'s precise heat means no flare-ups.',
          'Remove, rest. The pan cools in 30 seconds because the burner shuts off instantly.',
        ],
      },
      {
        name: 'Slow simmer',
        when: 'Stews, curries, rice pudding — things that burn easily.',
        steps: [
          'Bring to a boil at level 7.',
          'Drop to level 2 or 3 for a bare simmer.',
          'Unlike gas or electric, level 2 is actually a real bare simmer — very accurate.',
          'No hot spots. Rice won\'t scorch on the bottom.',
          'Use the timer to auto-shut-off.',
        ],
      },
      {
        name: 'Melt chocolate / delicate tasks',
        when: 'When you need gentle, precise heat.',
        steps: [
          'Set temperature to 175–200°F (if your model has a temp mode).',
          'Or use level 1–2 and a heavy pan.',
          'Stir frequently. Induction has no residual heat — the second you turn it off, it stops cooking.',
          'No double-boiler needed for most chocolate work.',
          'Same technique works for gentle cheese melting or butter infusions.',
        ],
      },
      {
        name: 'Keep food warm for guests',
        when: 'Holding a meal until everyone\'s at the table.',
        steps: [
          'Finish cooking, then set to Keep Warm (around 140°F).',
          'Cover the pot to prevent drying.',
          'Food can safely hold 2 hours at this temperature.',
          'Don\'t go below 140°F — that\'s the food safety danger line.',
        ],
      },
    ],
    recipe: {
      name: 'The Speed Pasta (proves induction is faster)',
      setting: 'Power Boost to boil, level 7 to cook',
      steps: [
        'Fill a 4-quart pot with water.',
        'Place on the induction burner, press Boost. Time how long it takes to boil — usually 3–4 min.',
        'Salt the water generously (it should taste like the ocean).',
        'Add 1 lb of pasta, drop to level 7.',
        'Cook per package (usually 9–11 min), stirring occasionally.',
        'Drain and serve. Total time start-to-serve under 15 minutes.',
      ],
      note: 'On induction, the pot cools 20 seconds after you turn off. No lingering heat, no wasted energy.',
    },
    troubleshooting: [
      {
        title: 'The burner says "E0" or won\'t recognize my pan',
        body: 'Your pan isn\'t induction-compatible. Put a magnet on the bottom — if it doesn\'t stick firmly, the pan won\'t work. Fixes: buy an induction-compatible pot, or use an induction interface disk ($25), a metal disk that sits between the burner and non-induction cookware.',
      },
      {
        title: 'Buzzing or clicking noise',
        body: 'Normal — induction creates a magnetic field that interacts with metal. A slight buzz on high power is expected. If it\'s loud, try a different pot — thinner or uneven-bottom pans buzz more. Warped pans are the #1 source of loud buzz.',
      },
      {
        title: 'Burner turns off mid-cook',
        body: 'Three causes: (1) the pan wasn\'t centered — cooktops lose contact if the pan shifts, (2) pan boiled dry and auto-shutoff kicked in (a safety feature), (3) something spilled over the touch controls and triggered a pause. Wipe the surface, re-center the pan.',
      },
      {
        title: 'Surface is cracked or chipped',
        body: 'Stop using immediately and call the manufacturer. A cracked glass top can shatter under heat and is a shock hazard. Most have a 1-year warranty.',
      },
      {
        title: 'Food sticks / heats unevenly',
        body: 'Uneven pan. Check the bottom with a ruler — if it wobbles on a flat surface, it\'s warped. Induction also heats only where the pan is magnetic, so extra-wide pans may have cool edges. Switch to a flat-bottom induction pan.',
      },
      {
        title: 'Cleaning seems impossible',
        body: 'Wait for the surface to cool (1 minute after cooking). Wipe with a damp cloth. For stuck-on food, use cooktop cleaner (Weiman\'s works) and a single-edge razor blade at a 30-degree angle. Don\'t use abrasive pads — they scratch glass.',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Wait 1 minute for the surface to cool. Wipe with a damp cloth. Any spills wipe off instantly if you catch them warm.' },
      { frequency: 'Weekly', body: 'Apply cooktop cleaner (cream-type, not powder). Buff with a microfiber cloth. Do NOT use abrasive scrubbers.' },
      { frequency: 'When stuck-on residue appears', body: 'Use a single-edge razor blade at 30 degrees to lift off burned-on bits. Follow with cooktop cleaner.' },
    ],
    safety: [
      'The surface doesn\'t get hot where there\'s no pan — but the pan DOES get hot and transfers heat to the glass. Don\'t touch right after cooking.',
      'Pacemaker warning: induction creates a magnetic field. Keep 2 feet away if you have a pacemaker. Check with your doctor.',
      'Don\'t drop heavy objects on the glass — cast iron cookware can crack the surface.',
      'Don\'t slide pans — lift them. Sliding scratches the glass.',
      'Children should not touch the cooktop until 10 minutes after cooking — glass retains some residual heat from the pan.',
    ],
    support: { label: 'Manufacturer support (varies)', url: 'https://www.duxtop.com/support' },
  },

  {
    id: 'microwave',
    name: 'Microwave',
    tagline: 'The most-used kitchen appliance. Most people use 10% of its features.',
    icon: Microwave,
    tint: 'bg-slate-500/15',
    text: 'text-slate-700 dark:text-slate-300',
    popularModels: 'Countertop · Over-the-range · Built-in · Drawer',
    priceTier: '$70 – $600',
    bestFor: 'Reheating, defrosting, quick steaming, melting butter. Not for crispy food.',
    unboxing: [
      'Remove ALL the packaging — including stickers on the inside and the clear plastic on the control panel.',
      'Remove the turntable and glass tray for washing. Replace after cleaning.',
      'Plug into a dedicated outlet if possible — microwaves pull a lot of amps.',
      'Set the clock — this turns off the flashing "12:00" that drives everyone crazy.',
      'Test with a cup of water for 1 min. Water should be hot. No sparks = no problems.',
    ],
    buttons: [
      { label: 'Power Level (1–10)', meaning: 'Not heat — this is how much of the time the magnetron runs. Level 5 = half-power, not half-temp.' },
      { label: 'Time Cook / Manual', meaning: 'Enter time manually. Most-used button.' },
      { label: 'Sensor Cook / Auto Cook', meaning: 'Detects moisture in the food and stops when done. Works great for potatoes, popcorn, veggies.' },
      { label: 'Defrost (by Weight / Time)', meaning: 'Runs at low power with pauses to thaw without cooking.' },
      { label: 'Popcorn', meaning: 'Preset for one bag. Don\'t trust it — it often burns. Use 2:15 manually.' },
      { label: 'Beverage / Reheat', meaning: 'Preset for reheating a cup of coffee or leftovers. Usually 90 sec at full power.' },
      { label: 'Baked Potato', meaning: 'Sensor preset — one of the best uses of auto-cook.' },
      { label: 'Add 30 Seconds', meaning: 'Adds 30 sec to a running cycle. The most-pressed button of all time.' },
      { label: 'Kitchen Timer', meaning: 'Countdown timer — not a cook cycle. Useful for toaster oven or stovetop.' },
      { label: 'Kids Lock / Control Lock', meaning: 'Disables the panel. Hold Clear/Stop for 3 sec.' },
    ],
    functions: [
      {
        name: 'Reheat leftovers properly',
        when: 'Every day.',
        steps: [
          'Put food on a microwave-safe plate. Add a splash of water for anything drying (rice, pasta).',
          'Cover with a damp paper towel or microwave-safe lid — traps steam, prevents splatter.',
          'Set 1–2 minutes at 70% power (not 100%). Even heating.',
          'Stir halfway through. Cold spots ruin reheat.',
          'Check temp with a finger on top — if warm-but-not-hot, add 30 sec.',
        ],
      },
      {
        name: 'Use Sensor Cook correctly',
        when: 'Potatoes, fresh vegetables, pasta from frozen.',
        steps: [
          'Put food in a microwave-safe dish. NO lid — the sensor needs steam to escape.',
          'Press Sensor Cook → pick food category.',
          'Don\'t press Time. Don\'t press Start again. Sensor figures it out.',
          'It beeps mid-cycle once it detects moisture, then cooks the remaining time automatically.',
          'Best for baked potatoes, frozen dinners, rice.',
        ],
      },
      {
        name: 'Defrost without cooking the edges',
        when: 'Frozen meat, chicken, fish for dinner.',
        steps: [
          'Take meat out of packaging, place on a plate.',
          'Press Defrost → enter weight (in pounds).',
          'Microwave will run at 30% power and pause periodically.',
          'Flip the meat when it beeps halfway through.',
          'Stop early if edges look cooked — finish at room temp in 10 min.',
        ],
      },
      {
        name: 'Steam vegetables',
        when: 'Quick side dish in 4 minutes.',
        steps: [
          'Put cut vegetables in a microwave-safe bowl. Add 2 tablespoons of water.',
          'Cover with a damp paper towel (or microwave-safe lid, slightly vented).',
          'Microwave 3 min at full power.',
          'Check — fork should slide in easily. Add 30 sec increments if needed.',
          'Drain, season, serve.',
        ],
      },
      {
        name: 'Melt butter or chocolate',
        when: 'Baking prep.',
        steps: [
          'Put butter or chocolate in a microwave-safe bowl.',
          'Microwave at 30% power in 20-second bursts.',
          'Stir between each burst — carryover heat does the rest of the melting.',
          'Stop when half-melted — stir to finish.',
          'This prevents the disaster of chocolate seizing or butter exploding.',
        ],
      },
    ],
    recipe: {
      name: 'Perfect Baked Potato in 7 minutes',
      setting: 'Sensor Cook Potato (or Time Cook 6–8 min)',
      steps: [
        'Wash potato. Poke with a fork 6 times all over (this is critical — unvented potatoes explode).',
        'Wrap loosely in a damp paper towel.',
        'Microwave on Sensor Cook > Potato. If you don\'t have Sensor, use 6 min for one potato, add 3 min per extra.',
        'Squeeze gently (through a towel) — if soft, it\'s done. If firm, add 60 sec.',
        'Let rest 2 min before cutting open.',
        'Top with butter, cheese, chili, sour cream — whatever.',
      ],
      note: 'Takes 7 minutes instead of an hour in the oven. Tastes 90% as good.',
    },
    troubleshooting: [
      {
        title: 'Sparks inside — panic or no?',
        body: 'Always stop immediately. Sparks usually come from: (1) metal in the food (a twist-tie, foil, a utensil) — most common, (2) food with a lot of minerals (carrots with dirt still on them, paprika), (3) worn paint inside the microwave (look for chipped black spots). If sparks keep happening after removing metal, call for service — damaged interior can be a fire risk.',
      },
      {
        title: 'Turntable not spinning',
        body: 'Three checks: (1) the glass tray isn\'t seated on the three little rollers — lift and reset, (2) the plastic ring underneath is misaligned — lift tray and ring, reset both, (3) the motor is broken — if nothing underneath turns, a motor replacement is $30 and a 15-min repair. Or run the microwave on short bursts and turn the food by hand.',
      },
      {
        title: 'Cooks unevenly (hot edges, cold center)',
        body: 'Microwaves cook outside-in. Solutions: stir food halfway through; cover to let steam even out temp; cut big pieces smaller; let food rest 1 min after cooking to equalize.',
      },
      {
        title: 'Buttons don\'t work',
        body: 'Likely the Control Lock is on. Look for a lock icon on the display. Hold the Clear or Stop button for 3 seconds — most models unlock this way. If that doesn\'t work, unplug for 5 minutes, plug back in.',
      },
      {
        title: 'Makes strange loud humming or clicking',
        body: 'The magnetron (the part that makes microwaves) may be failing. Still under warranty? Call for service. Over 10 years old? Sometimes it\'s cheaper to replace than repair.',
      },
      {
        title: 'Something caught fire',
        body: 'Keep the door CLOSED — starves the fire of oxygen. Unplug if you can safely reach the cord. Do NOT open the door. Most small fires die in under 30 sec with the door closed. Once it\'s out and cool, inspect for damage. Replace the microwave if the interior is scorched.',
      },
    ],
    cleaning: [
      { frequency: 'After every spill', body: 'Wipe with a damp cloth while the microwave is still warm — splatters come off in seconds. Let cool first.' },
      { frequency: 'Weekly', body: 'Steam-clean: put a bowl with 1 cup water and a sliced lemon. Microwave 4 min. Let sit 2 min. Wipe interior — the steam loosens everything.' },
      { frequency: 'Monthly', body: 'Remove the turntable and the plastic ring. Wash both in soapy water. Wipe the door seal with a damp cloth — food buildup here can stop the door from sealing properly.' },
    ],
    safety: [
      'NEVER put metal in a microwave — no foil, no twist-ties, no metal utensils. Fire risk.',
      'NEVER microwave an egg in its shell. It will explode.',
      'Don\'t microwave Styrofoam unless the label says "microwave safe" — most older cups will melt chemicals into the food.',
      'Leave 1 inch of venting space around the microwave. Over-the-range units need annual filter cleaning above the stove.',
      'A microwave with a damaged door seal leaks radiation — stop using and replace if you see dents, gaps, or damage to the seal.',
    ],
    support: { label: 'Manufacturer support (varies)', url: 'https://www.samsung.com/us/support/' },
  },

  {
    id: 'smart-oven',
    name: 'Smart Oven / Toaster Oven',
    tagline: 'A countertop oven that replaces a toaster, air fryer, and small oven.',
    icon: Flame,
    tint: 'bg-red-500/15',
    text: 'text-red-700 dark:text-red-300',
    popularModels: 'Breville Smart Oven · June · Balmuda · Ninja Foodi',
    priceTier: '$150 – $800',
    bestFor: 'Small households. Reheats pizza better than a microwave. Bakes a small chicken faster than a real oven.',
    unboxing: [
      'Remove the racks and the crumb tray. Wash both with warm soapy water.',
      'Wipe down the inside with a damp cloth — manufacturing oils cause smoke on first heat.',
      'Run the oven empty at 400°F for 15 minutes in a ventilated spot. Expect some smoke and smell.',
      'If Wi-Fi (June, Brava), connect through the app. Optional — the oven works fully without the app.',
      'Register warranty and put the manual in a drawer you can find.',
    ],
    buttons: [
      { label: 'Bake', meaning: 'Classic oven — heat from top and bottom. Good for casseroles, cookies, roasts.' },
      { label: 'Broil', meaning: 'Top heat only, very high. For melting cheese, crisping tops, quick browning.' },
      { label: 'Toast', meaning: 'High heat from both elements — shorter than bake, optimized for bread.' },
      { label: 'Convection / Air Fry', meaning: 'Adds the fan. Cooks faster and crisper. The fan makes convection ovens feel like air fryers.' },
      { label: 'Roast', meaning: 'Medium-high with fan. Great for chicken, vegetables, a small pork loin.' },
      { label: 'Reheat', meaning: 'Medium temp, short time. Better than microwave for pizza, leftovers.' },
      { label: 'Warm', meaning: '150°F hold — keeps finished dishes from cooling while you finish sides.' },
      { label: 'Pizza', meaning: 'Very high heat (450–500°F) with fan — for frozen pizza or reheating.' },
      { label: 'Temperature +/-', meaning: 'Adjust temp. Most go up to 450°F, some to 500°F.' },
      { label: 'Timer', meaning: 'Countdown. Auto-shuts off when done.' },
    ],
    functions: [
      {
        name: 'Reheat pizza',
        when: 'Leftover pizza, every time.',
        steps: [
          'Set to Reheat or Convection at 350°F.',
          'Put pizza slices directly on the rack OR on a piece of foil.',
          'Heat 4–6 minutes.',
          'The crust gets crispy again — unlike in a microwave.',
          'Best hack for leftover pizza, by far.',
        ],
      },
      {
        name: 'Roast a small chicken',
        when: 'Sunday dinner for 2–3.',
        steps: [
          'Pat a 3–4 lb chicken dry. Season with salt, pepper, olive oil.',
          'Place breast-up on the included roasting rack.',
          'Roast at 425°F convection for 45–60 min.',
          'Check internal temp with a meat thermometer — pull at 165°F in the thigh.',
          'Rest 10 min before carving.',
        ],
      },
      {
        name: 'Bake cookies',
        when: 'A dozen cookies fits — no need to heat the whole kitchen oven.',
        steps: [
          'Line a small baking sheet with parchment.',
          'Bake at 350°F for 10–12 min.',
          'Rotate the pan halfway through — smaller ovens have hotter edges.',
          'Check at the minimum time — smaller ovens run hotter.',
          'Cool on the rack.',
        ],
      },
      {
        name: 'Make toast',
        when: 'Every morning.',
        steps: [
          'Place bread directly on the rack or on the crumb tray.',
          'Pick Toast → medium shade (usually 3 or 4 on a scale of 1–7).',
          'Press Start.',
          'Two slices fit most models. Bagels get their own setting (Bagel).',
          'A full-size loaf won\'t fit — standard sliced bread works.',
        ],
      },
      {
        name: 'Air fry',
        when: 'French fries, chicken wings, crispy vegetables.',
        steps: [
          'Use the air fry basket (or the dark metal tray).',
          'Set Air Fry, 400°F, 15 min.',
          'Spread food in a single layer.',
          'Shake or flip halfway through.',
          'Same results as a dedicated air fryer, in a larger space.',
        ],
      },
    ],
    recipe: {
      name: 'Perfect Pizza Reheat (pizza only, no kitchen oven)',
      setting: 'Reheat mode, 350°F convection, 5 min',
      steps: [
        'Place leftover pizza directly on the rack — the crust crisps this way.',
        'Set to Reheat (or Convection Bake) at 350°F.',
        'Time: 5 min for a thin slice, 7 min for a thick one.',
        'Check — the cheese should be bubbling slightly, crust firm to the touch.',
        'Serve immediately. This makes day-old pizza taste same-day.',
      ],
      note: 'Reheating pizza is the #1 reason to own a countertop oven.',
    },
    troubleshooting: [
      {
        title: 'Cooks unevenly',
        body: 'Rotate the pan halfway through — smaller ovens have hot spots. Also use a LIGHT pan (dark pans absorb more heat and burn food on the bottom). For baking, one rack at a time — two racks on a tiny oven doesn\'t work.',
      },
      {
        title: 'Smokes every time I cook',
        body: 'Food splatter on the heating elements. Unplug, let cool, wipe the top and bottom elements with a damp cloth. Also check the crumb tray at the bottom — baked-on crumbs smolder on every bake. Clean it weekly.',
      },
      {
        title: 'The touchscreen is slow or wrong',
        body: 'Unplug for 1 minute. This resets the microprocessor. If the touchscreen has dead zones, call the manufacturer — most have a 1-year warranty.',
      },
      {
        title: 'June / Brava recipes are paywalled',
        body: 'Some smart ovens push recipe subscriptions. You can still use the oven in manual mode (Bake + temp + time). The subscription mainly adds pre-programmed "scan this food and cook it perfectly" recipes.',
      },
      {
        title: 'Bread burns before it toasts',
        body: 'Elements too close to the bread. Use a lower rack setting. Also check if Convection is on — for toast, turn convection OFF so the bread doesn\'t dry out too fast.',
      },
      {
        title: 'Light inside doesn\'t turn on',
        body: 'Bulb may be burnt. Most models take a specific 40W appliance bulb — check the manual. Replace with gloves (skin oil shortens bulb life).',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Let cool. Empty the crumb tray. Wipe the door glass with a damp cloth.' },
      { frequency: 'Weekly', body: 'Remove the racks and crumb tray — wash in soapy water. Wipe the inside walls with a warm soapy cloth.' },
      { frequency: 'Monthly', body: 'Clean the heating elements gently with a damp cloth when cold. Do NOT scrub — the coating protects the elements.' },
    ],
    safety: [
      'Leave 4 inches of clearance on all sides and above — the top gets very hot during use.',
      'Don\'t place under wood cabinets that aren\'t rated heat-safe. Heat damage builds up over months.',
      'Use only oven-safe cookware — check the "°F rating" on the bottom.',
      'Don\'t line the bottom with foil — blocks airflow and can reflect heat unevenly.',
      'Unplug before cleaning the interior or changing the bulb.',
    ],
    subscriptionWarning: 'June, Tovala, and Brava ovens have connected recipe subscriptions. The oven works fully without them. Subscriptions can auto-renew yearly — check your credit card statement.',
    support: { label: 'Breville / June / Ninja Support', url: 'https://www.breville.com/us/en/service/support.html' },
  },

  {
    id: 'stand-mixer',
    name: 'Stand Mixer',
    tagline: 'The kitchen workhorse that makes bread, cookies, and whipped cream effortless.',
    icon: Cake,
    tint: 'bg-pink-500/15',
    text: 'text-pink-700 dark:text-pink-300',
    popularModels: 'KitchenAid Artisan · KitchenAid Pro · Cuisinart',
    priceTier: '$250 – $600',
    bestFor: 'Bakers — cookies, bread, cakes, whipped cream, meringue. Also a pasta-maker with attachments.',
    unboxing: [
      'Wash the bowl, the whisk, the dough hook, and the paddle in warm soapy water. Air-dry.',
      'Slide the head up — there\'s a lock lever on the back. Lift by the head, not the bowl.',
      'Attach the flat beater (paddle) first — line up the notch, push up, twist to lock.',
      'Raise and lower the head once to test — should move smoothly with a firm click.',
      'Place on a stable counter. It weighs 25 lbs and doesn\'t walk much, but give it room.',
    ],
    buttons: [
      { label: 'Speed dial (1–10)', meaning: '1 = stirring, 4 = mixing, 6 = beating, 8 = whipping, 10 = fast whipping. Never use 10 with a full bowl.' },
      { label: 'Pulse', meaning: 'Some models — quick bursts at max speed. Useful for folding.' },
      { label: 'Power switch', meaning: 'On/off. Older models don\'t have this — the dial does it.' },
      { label: 'Tilt-head lock', meaning: 'The lever on the back. Unlock to tilt up, re-lock when the bowl is attached.' },
      { label: 'Bowl lift (on Pro 5)', meaning: 'Lever raises the bowl up to the mixer head. Different from tilt-head models.' },
      { label: 'Attachment hub', meaning: 'Front port for pasta rollers, meat grinders, ice cream makers. Screw cap covers it.' },
    ],
    functions: [
      {
        name: 'Cream butter and sugar',
        when: 'Every cookie and cake recipe starts here.',
        steps: [
          'Use the flat beater (paddle).',
          'Butter must be soft but not melted — 65°F, finger makes a slight indent.',
          'Start on speed 2 to combine, then increase to 6.',
          'Mix 3–5 minutes until pale yellow and fluffy — scrape the bowl halfway.',
          'Proper creaming = proper texture. Don\'t skimp.',
        ],
      },
      {
        name: 'Whip cream or egg whites',
        when: 'Whipped cream, meringues, souffles, frosting.',
        steps: [
          'Use the whisk attachment.',
          'For cream: start on speed 4, work up to 8 over 2 minutes. Stop at soft peaks or stiff peaks — don\'t over-whip.',
          'For egg whites: start slow, work up to 10. Add sugar gradually once soft peaks form.',
          'Don\'t walk away — whipped cream goes from stiff to butter in 20 seconds.',
          'Cold bowl and cold cream = faster, fluffier whip.',
        ],
      },
      {
        name: 'Knead bread dough',
        when: 'Homemade bread, rolls, pizza dough.',
        steps: [
          'Use the dough hook.',
          'Mix ingredients on speed 1 until combined (2 min).',
          'Knead on speed 2 for 6–8 minutes. Don\'t go higher — speed 3 burns out the motor.',
          'Dough should clean the bowl sides and form a smooth ball.',
          'Rest 5 min, knead 1 more min — gluten window test: stretch a small piece, should stretch thin without tearing.',
        ],
      },
      {
        name: 'Mix cake batter',
        when: 'Boxed or homemade cake mixes.',
        steps: [
          'Flat beater (paddle). Mix on speed 2 until combined.',
          'Scrape the bowl with a spatula — the paddle leaves a blind spot.',
          'Finish mixing on speed 4 for 30 seconds. Not longer — over-mixed batter = tough cake.',
          'Pour into pan. Bake per recipe.',
          'Don\'t increase speed to rush — gluten activates and ruins texture.',
        ],
      },
      {
        name: 'Shred cooked chicken (secret trick)',
        when: 'Shredded chicken for tacos, salads, soups.',
        steps: [
          'Put warm, cooked chicken breasts in the bowl.',
          'Flat beater (paddle).',
          'Speed 2 for 30–45 seconds.',
          'Done — perfectly shredded chicken in under a minute.',
          'This saves 15 minutes vs. two forks.',
        ],
      },
    ],
    recipe: {
      name: 'Classic Chocolate Chip Cookies',
      setting: 'Flat beater, speeds 2 → 6 → 2',
      steps: [
        'Cream 1 cup soft butter + 3/4 cup each white and brown sugar on speed 6 for 3 min.',
        'Add 2 eggs and 1 tsp vanilla, mix on speed 4 until smooth.',
        'Drop to speed 2. Add 2 1/4 cups flour + 1 tsp baking soda + 1 tsp salt.',
        'Mix until just combined — 30 seconds max. Don\'t overmix.',
        'Fold in 2 cups chocolate chips by hand with a spatula.',
        'Drop 2 tbsp balls on a parchment-lined sheet. Bake at 375°F for 11 min.',
        'Cool 2 min on the pan. Move to a rack.',
      ],
      note: 'Proper creaming (step 1) is the difference between flat and fluffy cookies.',
    },
    troubleshooting: [
      {
        title: 'Paddle scrapes the bottom of the bowl',
        body: 'Adjustment needed. Flip the mixer over, find the screw on the top of the tilt-head, and turn 1/4 turn counterclockwise to lower the paddle. Test with a dime in the bowl — the paddle should tap the dime but not drag across the bowl.',
      },
      {
        title: 'Motor smells like burning',
        body: 'Stop immediately. Overload — too much dough or too high speed. Unplug. Let cool 1 hour. Next time, knead on speed 2 (not higher), mix dough in smaller batches. The Artisan can\'t knead more than 2 loaves\' worth at a time.',
      },
      {
        title: 'Head won\'t stay down while mixing',
        body: 'The locking lever on the back is loose. Tighten the adjustment screw inside the lever housing. If it still won\'t lock, the lever spring may be broken — $20 part, 15-min repair.',
      },
      {
        title: 'Ingredients splatter out of the bowl',
        body: 'Start on speed 1 or 2 — not higher. Add a splash guard (included or $15) for flour-heavy recipes. Never pour in dry ingredients while running at speed 4+.',
      },
      {
        title: 'Machine walks across the counter',
        body: 'Uneven feet or an unbalanced batter. Check the rubber feet are clean and the counter is flat. A wet paper towel under the feet stops most wandering.',
      },
      {
        title: 'Attachment won\'t lock in',
        body: 'Line up the notch on the attachment with the pin on the mixer shaft. Push up firmly, twist clockwise 1/4 turn — should click. If nothing clicks, the pin may be worn (mostly happens on 20+ year old mixers).',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Wipe the mixer head and the post-arm with a damp cloth. Wash the bowl and attachments in warm soapy water — most are dishwasher safe on the top rack.' },
      { frequency: 'Monthly', body: 'Unplug. Wipe the entire exterior. Check and wipe the gap where the head tilts — crumbs hide there.' },
      { frequency: 'Annually', body: 'KitchenAid mixers have grease inside the head that needs replacement every 3–5 years on heavy-use mixers. Local appliance shops charge $80 for this service.' },
    ],
    safety: [
      'Never reach into the bowl while the mixer is running. The paddle has crushed more than one finger.',
      'Don\'t exceed speed 2 for kneading dough — higher speeds burn out the motor.',
      'Don\'t use the mixer for tasks it wasn\'t designed for: crushing ice, blending smoothies, grinding meat (without the attachment).',
      'Unplug before changing attachments. Accidental starts while your hand is near the paddle are dangerous.',
      'Keep curtains, dish towels, and long hair away from the moving parts.',
    ],
    support: { label: 'KitchenAid Support', url: 'https://www.kitchenaid.com/customer-service.html' },
  },

  {
    id: 'bread-maker',
    name: 'Bread Maker',
    tagline: 'Put in flour, water, yeast. Three hours later — fresh bread.',
    icon: BookOpen,
    tint: 'bg-yellow-500/15',
    text: 'text-yellow-800 dark:text-yellow-200',
    popularModels: 'Zojirushi Virtuoso · Zojirushi Home Bakery · Panasonic · Cuisinart',
    priceTier: '$100 – $500',
    bestFor: 'Fresh bread every morning — delay-timer means loaves are ready when you wake up.',
    unboxing: [
      'Wash the bread pan and the kneading paddle(s) in warm soapy water.',
      'Check the kneading paddle is properly seated on the shaft inside the bread pan — it should spin freely.',
      'Plug in. Set the clock. Most delay-timer errors come from a wrong clock.',
      'Run a dry test — Bake cycle at default, empty pan. No smoke.',
      'First loaf — use a recipe from the manual, not the internet. Your machine\'s cycle times are specific.',
    ],
    buttons: [
      { label: 'Menu / Course', meaning: 'Pick the bread type — Basic, Whole Wheat, Gluten-Free, Sweet, French. Different cycles, different times.' },
      { label: 'Crust Color', meaning: 'Light, Medium, Dark. Affects baking time in the last cycle.' },
      { label: 'Loaf Size', meaning: '1 lb, 1.5 lb, or 2 lb. Matches the recipe quantity.' },
      { label: 'Delay Start', meaning: 'Starts later so bread is fresh at wake-up. Set for AFTER the cycle ends — if you want bread at 7 AM and the cycle is 3 hours, start at 4 AM.' },
      { label: 'Start/Stop', meaning: 'Begins the cycle. Holding Stop for 3 sec cancels.' },
      { label: 'Keep Warm', meaning: 'After baking ends, holds the loaf warm for 1 hour so it doesn\'t get soggy inside.' },
      { label: 'Dough', meaning: 'Mixes and rises dough for shaping by hand (pizza, rolls) — doesn\'t bake.' },
      { label: 'Rapid / Express', meaning: 'Shorter cycle, 1–2 hours. Bread won\'t rise as well.' },
      { label: 'Jam', meaning: 'Some models — cooks fruit into jam. A surprising feature.' },
      { label: 'Custom / Homemade', meaning: 'Program your own timings. For advanced users.' },
    ],
    functions: [
      {
        name: 'Basic white bread',
        when: 'First loaf to make.',
        steps: [
          'Add ingredients in the order the manual says — usually liquid first, then flour on top, yeast last (keeps yeast dry).',
          'Select Basic or White Bread.',
          'Pick loaf size (1.5 lb is standard) and crust color (medium).',
          'Press Start. Walk away. 3 hours later — bread.',
          'Immediately remove from the pan after the beep. Leaving it in the pan makes the bottom soggy.',
        ],
      },
      {
        name: 'Delay-start for morning bread',
        when: 'Fresh bread at breakfast.',
        steps: [
          'Load ingredients — liquid, flour, yeast sealed on top.',
          'Press Delay Start. Enter the TIME YOU WANT IT DONE, not when to start.',
          'Example: it\'s 9 PM, cycle is 3:30 — set for 7:00 AM, 10 hours away. Machine figures out when to start.',
          'Don\'t use delay with milk, eggs, or butter — they sit at room temp too long and spoil.',
          'Perfect for basic bread, whole wheat, 100% flour recipes.',
        ],
      },
      {
        name: 'Make pizza dough',
        when: 'For homemade pizza night.',
        steps: [
          'Add pizza dough ingredients (flour, water, yeast, salt, olive oil).',
          'Select Dough cycle (about 90 min).',
          'When the machine beeps, remove the dough.',
          'Shape, top, and bake in your regular oven at 500°F for 10 min.',
          'Fresher than store-bought, faster than making from scratch.',
        ],
      },
      {
        name: 'Gluten-free loaf',
        when: 'For family members with a gluten intolerance.',
        steps: [
          'Use a tested gluten-free bread flour blend — Bob\'s Red Mill or King Arthur.',
          'Select Gluten-Free cycle — has different knead and rise times.',
          'Use only 1.5 lb size — gluten-free loaves are denser.',
          'Check if your model has xanthan gum in the mix — GF loaves need binder.',
          'Let cool completely before slicing — GF bread crumbs when warm.',
        ],
      },
      {
        name: 'Make jam',
        when: 'If your model has a jam cycle.',
        steps: [
          'Add 2 cups chopped fruit, 1 cup sugar, 2 tbsp lemon juice.',
          'Select Jam cycle (usually 1–1.5 hours).',
          'Machine cooks, stirs, and reduces automatically.',
          'Transfer hot jam to clean jars. Cool, refrigerate.',
          'Best with berries, stone fruits. Not for citrus marmalade.',
        ],
      },
    ],
    recipe: {
      name: 'Classic White Bread (the confidence-builder)',
      setting: 'Basic cycle, 1.5 lb loaf, medium crust',
      steps: [
        'Add to the bread pan in this order: 1 cup warm water (110°F), 2 tbsp oil, 1 1/2 tsp salt, 3 cups bread flour.',
        'Make a small well in the top of the flour. Add 2 1/4 tsp active dry yeast into the well.',
        'Place the pan in the machine. Close the lid.',
        'Select Basic, 1.5 lb, Medium crust.',
        'Press Start.',
        'Wait 3 hours. Remove the loaf within 10 minutes of the beep — let cool on a rack.',
        'Slice with a serrated knife. Toast a slice. Butter it.',
      ],
      note: 'This recipe works on every bread maker. Measure accurately — bread baking is a science, not a feeling.',
    },
    troubleshooting: [
      {
        title: 'Bread didn\'t rise',
        body: 'Three common causes: (1) Yeast was old or killed by hot water — use water at 110°F, not hotter. Check yeast expiration. (2) Salt touched yeast directly — add salt to the flour, not on top of the yeast. (3) Wrong flour — bread flour has more gluten than all-purpose. Use bread flour for basic cycles.',
      },
      {
        title: 'Loaf is dense and heavy',
        body: 'Not enough liquid, or too much flour. Bread flour packs differently — measure by weight if you have a kitchen scale (3 cups = 384 grams). Humid kitchen? Add 1 tbsp less water. Dry kitchen? Add 1 tbsp more.',
      },
      {
        title: 'Paddle is stuck in the loaf',
        body: 'Happens often. After the loaf cools, cut a slit in the bottom and pull the paddle out gently. Next time, lightly grease the paddle shaft before adding ingredients.',
      },
      {
        title: 'Top is collapsed / sunken',
        body: 'Over-risen. Too much yeast, or kitchen too warm. Reduce yeast by 1/4 tsp, or put the machine in a cooler spot. Summer loaves sometimes need less yeast than winter loaves.',
      },
      {
        title: 'Bread tastes yeasty',
        body: 'Too much yeast — reduce by 1/4 tsp. Also, do NOT use Rapid cycle for taste-sensitive breads. Rapid cycles use more yeast and don\'t give flavor time to develop.',
      },
      {
        title: 'Delay timer finished, but bread is raw',
        body: 'Delay timer usually sets when you want it DONE. If you used delay and got raw bread, you may have set it for when you wanted it to START. Check the manual carefully — Zojirushi and Panasonic work opposite from Cuisinart on this.',
      },
    ],
    cleaning: [
      { frequency: 'After every use', body: 'Remove the bread pan and the paddle. Soak paddle in warm water for 10 min — dough dries like cement. Wash both with a soft sponge.' },
      { frequency: 'Weekly', body: 'Wipe the inside of the machine with a damp cloth. Check the heating element is clear of crumbs.' },
      { frequency: 'Every few months', body: 'Remove the paddle shaft gasket (a small rubber ring) and clean. A stuck gasket is the #1 cause of loaves that leak dough during mixing.' },
    ],
    safety: [
      'Never put hands inside during the kneading cycle — the paddle has enough torque to hurt.',
      'The viewing window glass gets hot during baking — don\'t touch.',
      'Don\'t use delay timer with perishables (milk, eggs, butter, fresh fruit). Basic flour-water-yeast-oil-salt recipes only.',
      'Place on a stable counter with 4 inches of clearance — the machine rocks during knead.',
      'Unplug before cleaning. The heating element stays hot for 20 min after a cycle ends.',
    ],
    support: { label: 'Zojirushi / Panasonic Support', url: 'https://www.zojirushi.com/app/Support' },
  },
];

/* ── Smart fridge "do you actually need Wi-Fi?" card ─────── */

const FRIDGE_WIFI_TIPS = [
  { q: 'Do you actually need Wi-Fi?', a: 'Honestly, no. Smart fridges cool food the same whether connected or not. Wi-Fi features — cameras, inventory tracking, recipe videos — are nice extras, not essentials. Connect it if you\'re already comfortable with app-based devices.' },
  { q: 'What if Wi-Fi drops?', a: 'The fridge still cools. The ice maker still works. You lose app notifications and the "look inside from the grocery store" feature. Food safety is not affected by Wi-Fi loss.' },
  { q: 'App features worth using', a: 'Temperature alerts (if the door\'s been open too long), filter change reminders, and remote shopping-list sync. These save time and food.' },
  { q: 'App features to skip', a: 'Built-in shopping lists (your phone is better), social media on the fridge screen, and voice ordering (easy to accidentally charge Amazon while grandkids play).' },
];

/* ── Energy efficiency quick tips ─────────────────────── */

const ENERGY_TIPS = [
  { title: 'Slow cookers beat ovens', body: 'A slow cooker uses about 200W over 8 hours. An oven uses 3,000W for 2 hours. That\'s 1,600 watt-hours vs. 6,000.' },
  { title: 'Air fryers beat ovens for small meals', body: 'Air fryers heat a small cavity in 2 minutes. Ovens take 15 minutes to preheat — before you\'ve cooked anything.' },
  { title: 'Induction beats gas', body: 'Induction delivers 90% of its energy to the pan. Gas delivers about 40%. That\'s both faster and cheaper.' },
  { title: 'Microwaves beat ovens for reheating', body: 'Reheating leftovers in the microwave uses 1/10th the energy of reheating in the oven.' },
  { title: 'Don\'t pre-heat the oven for long roasts', body: 'A pot roast doesn\'t care if the oven is 325°F when it goes in or when it hits 325°F at minute 10. Skip the preheat for roasts over 1 hour.' },
];

/* ── Voice assistant kitchen tie-in ──────────────────── */

const VOICE_TIE_IN = [
  { command: '"Alexa, start the coffee."', explanation: 'Requires a smart plug ($15) connected to your coffee maker. Alexa routines can start coffee on a schedule.' },
  { command: '"Hey Google, set a 12-minute timer for pasta."', explanation: 'No setup needed — works on any Google-enabled speaker or phone. Replace your kitchen timer.' },
  { command: '"Siri, convert 1 cup to milliliters."', explanation: 'Instant conversion without drying your hands. Works offline too.' },
  { command: '"Alexa, add eggs to my shopping list."', explanation: 'When you run out mid-recipe, your hands are a mess. Voice fixes that.' },
  { command: '"Hey Google, how long do I bake chicken at 400?"', explanation: 'Hands-free cooking questions while your hands are raw-chicken dirty.' },
];

/* ── Kitchen scale standalone tip ────────────────────── */

const FOOD_SCALE_TIPS = [
  'Digital food scale + gram mode = most accurate baking. Cups vary by 20%, grams don\'t.',
  'Weigh flour when baking bread — 120g per cup of AP flour, 130g per cup of bread flour.',
  'Portion control: 3 oz meat per serving = 85 grams. Easy to eyeball after weighing for a week.',
  'Tare (zero) the scale with the bowl on top, then add ingredients by weight into one bowl.',
  'Under $20 on Amazon. One of the best kitchen investments for bakers.',
];

/* ── FAQ ─────────────────────────────────────────────── */

const FAQ_ITEMS: Issue[] = [
  {
    title: 'Do I really need all these appliances?',
    body: 'No. Most households use 3 appliances heavily: a microwave, a coffee maker, and either a stovetop or an air fryer. Everything else is optional. If you\'re starting fresh, pick an air fryer first — it replaces a toaster oven, a small oven, and a frying pan for most meals.',
  },
  {
    title: 'What\'s the safest first appliance for a senior?',
    body: 'An air fryer. No open flame, no sharp blades, no pressure, simple two-knob operation (temp + time). It sits on the counter, cleans easily, and makes reheating leftovers safer than using a microwave for crispy foods. Second pick: a simple microwave with a sensor-cook button.',
  },
  {
    title: 'Can I use an Instant Pot if I\'m scared of pressure cookers?',
    body: 'Yes. Modern pressure cookers have 10+ safety features that old stovetop models did not: auto-locking lids, pressure sensors, burn detection. The worst-case scenario is a BURN error (food sticks), not an explosion. Start with the water test — put 3 cups of water in and run Steam for 2 min. That builds confidence before you cook real food.',
  },
  {
    title: 'Are smart appliances worth the extra money?',
    body: 'Usually no. "Smart" typically adds $300–$800 to the price for features most people use once and forget. Exception: a smart oven\'s built-in temperature probe (removes guesswork on meats) and a smart fridge\'s filter-change reminders. Skip the touchscreen on the fridge — a regular fridge with an app-connected thermometer costs less.',
  },
  {
    title: 'What about my kids getting me an Air Fryer?',
    body: 'Accept graciously. Air fryers are one of the best gifts. Start with frozen french fries (400°F, 15 min). Once you\'ve made fries, you\'ll find 10 things a week you want to air-fry. It\'s the rare appliance that actually gets used every day.',
  },
  {
    title: 'My appliance was recalled — what do I do?',
    body: 'First, stop using it. Check cpsc.gov/Recalls to confirm your model. Follow the instructions — usually a refund, replacement, or repair kit. Register ALL new appliances within 30 days so you get recall notices automatically. Old unregistered appliances often go recalled without anyone knowing.',
  },
  {
    title: 'Where do I learn what an unfamiliar button does?',
    body: 'Three places: (1) The sticker or chart on the inside of the lid or the underside of the appliance. (2) YouTube — search "[your model] overview". A 10-minute video explains more than the manual. (3) The manufacturer\'s website — most have PDFs of every manual at every age.',
  },
];

/* ── Scam / privacy warnings specific to smart appliances ── */

const SMART_APPLIANCE_WARNINGS = [
  {
    icon: Wifi,
    title: 'Do you need to connect to Wi-Fi?',
    body: 'Often no. Fridges, ovens, and coffee makers work fully without Wi-Fi. Connecting adds convenience but also adds a new way for hackers to reach your home network. If you\'re not sure, leave it disconnected. You can always connect later.',
  },
  {
    icon: Volume2,
    title: 'Voice purchases — turn them off',
    body: 'Smart fridges with Alexa or Google built in can order groceries by voice. This also means a grandchild saying "order 10 bags of chips" gets 10 bags of chips. Disable voice purchasing in the Alexa or Google app under Settings → Voice Purchasing.',
  },
  {
    icon: ShieldAlert,
    title: 'Data your smart fridge collects',
    body: 'Samsung, LG, and GE smart fridges collect: what you ask voice assistants, app usage patterns, how often you open the door, and sometimes a photo log of contents. You can opt out of most telemetry in the settings, but it\'s enabled by default.',
  },
  {
    icon: DollarSign,
    title: 'Watch for auto-renewing subscriptions',
    body: 'Breville Joule (sous vide), some smart ovens, and certain coffee machines bundle recipe app subscriptions that auto-renew. Cancel in your phone\'s App Store settings if you don\'t actively use them.',
  },
];

/* ── Recalls & safety section ─────────────────────── */

const RECALL_TIPS = [
  { title: 'Check cpsc.gov/Recalls', body: 'The Consumer Product Safety Commission lists every recall. Search by brand name or model number. Do this once a year for all your kitchen appliances.' },
  { title: 'Register every new appliance', body: 'Fill out the warranty card online — it triggers automatic recall notices to your email. Takes 5 minutes.' },
  { title: 'Don\'t use with damaged cords or seals', body: 'Frayed cords, cracked gaskets, melted plastic around the plug — any of these means stop using immediately.' },
  { title: 'Kitchen fire basics', body: 'Never pour water on a grease fire — use a lid to smother it. Keep a Class K or ABC fire extinguisher within 30 feet of the stove. Know where it is before you need it.' },
  { title: 'Unplug when not in use (for small appliances)', body: 'Toaster ovens, coffee makers, air fryers — unplug at the outlet when the trip is long or kitchen will be unattended for days.' },
];

/* ── Related links ────────────────────────────────── */

const RELATED = [
  { to: '/tools/voice-assistant-setup', title: 'Voice Assistant Setup', body: 'Set up Alexa, Google Assistant, or Siri for hands-free kitchen help.' },
  { to: '/guides?category=Home Tech', title: 'Home Tech Guides', body: 'More plain-English tutorials for everyday home devices.' },
  { to: '/tools/home-security-camera-setup', title: 'Home Security Cameras', body: 'Set up a security camera in plain English — Ring, Nest, Arlo, and more.' },
  { to: '/tools/smart-tv-setup', title: 'Smart TV Setup Wizard', body: 'Get your new smart TV on Wi-Fi, signed in, and ready to stream.' },
];

/* ── Print cheat sheet helper ─────────────────────── */

function buildCheatSheet(a: ApplianceInfo): string {
  return [
    `${a.name} — Top 5 Settings Cheat Sheet`,
    '',
    `Most common functions:`,
    ...a.functions.slice(0, 5).map((f, i) => `${i + 1}. ${f.name} — ${f.when}`),
    '',
    `First foolproof recipe:`,
    `• ${a.recipe.name}`,
    `• Setting: ${a.recipe.setting}`,
    '',
    `Top 3 things NEVER to do:`,
    ...a.safety.slice(0, 3).map((s, i) => `${i + 1}. ${s}`),
    '',
    `When something goes wrong:`,
    ...a.troubleshooting.slice(0, 3).map((t) => `• ${t.title}`),
    '',
    `From TekSure.com — Kitchen Tech Helper`,
  ].join('\n');
}

function printCheatSheet(a: ApplianceInfo) {
  if (typeof window === 'undefined') return;
  const content = buildCheatSheet(a);
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(`
    <html>
      <head>
        <title>${a.name} Cheat Sheet</title>
        <style>
          body { font-family: Georgia, serif; padding: 40px; max-width: 700px; margin: auto; font-size: 16px; line-height: 1.7; }
          h1 { font-size: 28px; border-bottom: 2px solid #d97706; padding-bottom: 8px; }
          h2 { font-size: 18px; margin-top: 24px; color: #b45309; }
          pre { white-space: pre-wrap; font-family: Georgia, serif; font-size: 16px; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <pre>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <p style="margin-top:40px;color:#666;font-size:14px;">Printed from TekSure.com</p>
      </body>
    </html>
  `);
  win.document.close();
  setTimeout(() => win.print(), 300);
}

/* ── Main component ──────────────────────────────── */

export default function KitchenTechHelper() {
  const [selectedId, setSelectedId] = useState<ApplianceId | null>(null);

  const appliance = useMemo<ApplianceInfo | null>(
    () => (selectedId ? APPLIANCES.find((a) => a.id === selectedId) ?? null : null),
    [selectedId],
  );

  const pick = (id: ApplianceId) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    setSelectedId(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Appliance detail view ──────────────────── */
  if (appliance) {
    const Icon = appliance.icon;
    return (
      <>
        <SEOHead
          title={`${appliance.name} Setup & Daily Use — TekSure Kitchen Helper`}
          description={`A plain-English guide to setting up and actually using your ${appliance.name} — buttons, functions, first recipe, troubleshooting, cleaning, and safety tips for seniors and first-time users.`}
          path="/tools/kitchen-tech-helper"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <section className="border-b border-border bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-rose-950/40">
            <div className="container py-8 md:py-12">
              <Button variant="ghost" onClick={back} className="mb-4 gap-2 text-base">
                <ArrowLeft className="w-5 h-5" />
                Back to all appliances
              </Button>
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-2xl ${appliance.tint} ${appliance.text} shrink-0`}>
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">{appliance.name}</h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    {appliance.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="text-sm">Models: {appliance.popularModels}</Badge>
                    <Badge variant="outline" className="text-sm"><DollarSign className="w-3 h-3 mr-1" />{appliance.priceTier}</Badge>
                  </div>
                  <p className="text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
                    <strong>Best for:</strong> {appliance.bestFor}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-5">
                    <Button size="lg" onClick={() => printCheatSheet(appliance)} className="gap-2 text-base min-h-14">
                      <Printer className="w-5 h-5" />
                      Print cheat sheet
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                      <a href={appliance.support.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        {appliance.support.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Unboxing */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-primary" />
              Unboxing &amp; first use
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Before your first real recipe — do these steps. Most problems in the first month come from skipping one of them.
            </p>
            <ol className="space-y-4 max-w-3xl">
              {appliance.unboxing.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg">
                    {i + 1}
                  </div>
                  <p className="text-base md:text-lg leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Button decoder */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                What do all these buttons do?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A plain-English explanation of every button, in the order you&apos;ll run into them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                {appliance.buttons.map((b) => (
                  <Card key={b.label}>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-1">{b.label}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{b.meaning}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Functions */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <ChefHat className="w-7 h-7 text-primary" />
              The 5 things you&apos;ll actually do
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              These cover 90% of how the appliance gets used. Walk through each once — after that, it&apos;s muscle memory.
            </p>
            <div className="space-y-5 max-w-4xl">
              {appliance.functions.map((f, i) => (
                <Card key={f.name}>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{f.name}</h3>
                        <p className="text-base text-muted-foreground italic">{f.when}</p>
                      </div>
                    </div>
                    <ol className="space-y-2 pl-12 list-decimal">
                      {f.steps.map((s, j) => (
                        <li key={j} className="text-base md:text-lg leading-relaxed">{s}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* First recipe */}
          <section className="border-t border-border bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Utensils className="w-7 h-7 text-primary" />
                Your first foolproof recipe
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Build confidence with this one recipe. It works every time. Once you nail it, everything else feels less scary.
              </p>
              <Card className="max-w-3xl border-primary/40">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{appliance.recipe.name}</h3>
                    <p className="text-base text-primary font-medium">Setting: {appliance.recipe.setting}</p>
                  </div>
                  <ol className="space-y-3 pl-6 list-decimal">
                    {appliance.recipe.steps.map((s, i) => (
                      <li key={i} className="text-base md:text-lg leading-relaxed">{s}</li>
                    ))}
                  </ol>
                  {appliance.recipe.note && (
                    <div className="mt-4 p-4 bg-amber-100/60 dark:bg-amber-900/20 rounded-lg border border-amber-300/50">
                      <p className="text-base leading-relaxed flex gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span><strong>Quick Tip:</strong> {appliance.recipe.note}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Wrench className="w-7 h-7 text-primary" />
              Troubleshooting — the fixes that work
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Tap any issue to expand. Almost every problem has a 2-minute fix.
            </p>
            <Accordion type="multiple" className="max-w-3xl bg-card rounded-xl border">
              {appliance.troubleshooting.map((item, i) => (
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

          {/* Cleaning */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <Droplets className="w-7 h-7 text-primary" />
                Cleaning routine
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A clean appliance lasts 2–3 times longer. This is the minimum.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
                {appliance.cleaning.map((c) => (
                  <Card key={c.frequency}>
                    <CardContent className="p-5">
                      <Badge className="mb-3" variant="secondary">{c.frequency}</Badge>
                      <p className="text-base leading-relaxed">{c.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Safety */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <ShieldAlert className="w-7 h-7 text-red-600 dark:text-red-400" />
              Safety — what never to do
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Every one of these has sent someone to the ER. Read twice.
            </p>
            <Card className="max-w-3xl bg-red-50 dark:bg-red-950/20 border-red-500/40">
              <CardContent className="p-6 space-y-3">
                <ul className="space-y-3">
                  {appliance.safety.map((s, i) => (
                    <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                      <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Subscription warning */}
          {appliance.subscriptionWarning && (
            <section className="container pb-10 md:pb-14">
              <Card className="max-w-3xl bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                    Watch for auto-renewing subscriptions
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{appliance.subscriptionWarning}</p>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Back link */}
          <section className="container pb-14">
            <Button size="lg" variant="outline" onClick={back} className="gap-2 text-base min-h-14">
              <ArrowLeft className="w-5 h-5" />
              Back to all kitchen appliances
            </Button>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Landing page ──────────────────────────── */
  return (
    <>
      <SEOHead
        title="Kitchen Gadgets — Without the Manual | TekSure"
        description="A plain-English setup and daily-use guide for Instant Pot, Air Fryer, Smart Fridge, Sous Vide, Coffee Maker, Induction Cooktop, Microwave, Smart Oven, Stand Mixer, and Bread Maker. Built for seniors and first-time users."
        path="/tools/kitchen-tech-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero — warm coral gradient */}
        <section className="border-b border-border bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 dark:from-rose-950/50 dark:via-orange-950/40 dark:to-amber-950/40">
          <div className="container py-10 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="kitchen-tech-helper"
                title="Kitchen Tech Helper"
                url="/tools/kitchen-tech-helper"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/20 text-orange-700 dark:text-orange-300">
                <ChefHat className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs">Everyday Tech · Setup &amp; Daily Use</Badge>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <UtensilsCrossed className="w-10 h-10 md:w-14 md:h-14 text-rose-700 dark:text-rose-300 shrink-0" aria-hidden="true" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pr-14">
                Kitchen Gadgets — Without the Manual
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              Unbox, set up, and actually use your kitchen tech — no 60-page manual required.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild size="lg" className="text-base min-h-14">
                <a href="#appliances">Pick your appliance</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                <a href="#voice">Kitchen voice commands</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Appliance picker */}
        <section id="appliances" className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick the appliance you want help with</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Each card opens a full guide — unboxing, button-by-button explanation, 5 core functions, your first foolproof recipe, troubleshooting, cleaning, and safety.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPLIANCES.map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => pick(a.id)}
                  className="text-left p-6 rounded-2xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors min-h-14 flex flex-col gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl ${a.tint} ${a.text} shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{a.name}</h3>
                      <p className="text-base text-muted-foreground leading-snug">{a.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <Badge variant="outline" className="text-xs">{a.priceTier}</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium pt-1">
                    Open the full guide <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Smart fridge "do you need Wi-Fi?" card */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Refrigerator className="w-7 h-7 text-primary" />
              Smart fridge reality check
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The short answer: most people don&apos;t actually need the smart features. Here&apos;s what&apos;s worth it and what isn&apos;t.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {FRIDGE_WIFI_TIPS.map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Food scale tips */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Star className="w-7 h-7 text-primary" />
            The best $20 kitchen purchase — a digital food scale
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Not glamorous, but the one gadget that upgrades every other appliance in your kitchen.
          </p>
          <Card className="max-w-3xl">
            <CardContent className="p-6">
              <ul className="space-y-2.5">
                {FOOD_SCALE_TIPS.map((t, i) => (
                  <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Energy efficiency */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Zap className="w-7 h-7 text-primary" />
              Energy efficiency — pick the right tool
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A quick rule: the smaller the cooking space, the less energy. Big oven = lots of wasted heat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {ENERGY_TIPS.map((e) => (
                <Card key={e.title}>
                  <CardContent className="p-5 flex gap-3 items-start">
                    <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{e.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{e.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Voice assistant tie-in */}
        <section id="voice" className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Volume2 className="w-7 h-7 text-primary" />
            Hands-free cooking — kitchen voice commands
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Sticky-hands, raw-chicken-hands, dough-hands — voice commands are a game-changer during cooking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {VOICE_TIE_IN.map((v) => (
              <Card key={v.command}>
                <CardContent className="p-5 flex gap-3 items-start">
                  <Volume2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-lg md:text-xl font-semibold mb-1 italic">{v.command}</p>
                    <p className="text-base leading-relaxed text-muted-foreground">{v.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild size="lg" variant="outline" className="text-base min-h-14">
              <Link to="/tools/voice-assistant-setup" className="gap-2 inline-flex items-center">
                Set up Alexa, Google, or Siri
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Smart appliance scam / privacy warnings */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <ShieldAlert className="w-7 h-7 text-amber-700 dark:text-amber-400" />
              Smart appliance warnings — the honest truth
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Many new appliances collect data or push subscriptions. Here&apos;s what to watch for before you connect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {SMART_APPLIANCE_WARNINGS.map((w) => {
                const Icon = w.icon;
                return (
                  <Card key={w.title}>
                    <CardContent className="p-5 flex gap-3 items-start">
                      <Icon className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{w.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{w.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recalls & safety */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-primary" />
            Recalls &amp; kitchen safety
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Old appliances quietly get recalled. Register yours, and check once a year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {RECALL_TIPS.map((r) => (
              <Card key={r.title}>
                <CardContent className="p-5 flex gap-3 items-start">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 max-w-3xl">
            <Button asChild size="lg" className="text-base min-h-14">
              <a href="https://www.cpsc.gov/Recalls" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Check recalls at cpsc.gov
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Frequently asked questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The real questions we hear from families and first-time appliance owners.
            </p>
            <Accordion type="single" collapsible className="max-w-3xl bg-card rounded-xl border">
              {FAQ_ITEMS.map((item, i) => (
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
          </div>
        </section>

        {/* Related links */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-primary" />
            Keep going — related TekSure tools
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            More helpers for the everyday tech around your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {RELATED.map((r) => (
              <Card key={r.to}>
                <CardContent className="p-5 flex items-start gap-3">
                  <Bell className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <Link to={r.to} className="hover:underline">{r.title}</Link>
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
