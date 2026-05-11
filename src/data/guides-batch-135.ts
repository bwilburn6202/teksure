// guides-batch-135 — Dev-loop cycle 11
// Topics: senior cell plan landscape 2026, tax document organization, pocket dialing prevention

import type { Guide } from './guides';

export const guidesBatch135: Guide[] = [
  {
    slug: 'senior-cell-phone-plans-2026-comparison',
    title: 'Senior Cell Phone Plans in 2026: A Plain-English Comparison',
    excerpt: 'T-Mobile 55+, Verizon, AT&T, Consumer Cellular, Mint Mobile, and Spectrum all have plans for older Americans. Here is what each actually costs and includes.',
    category: 'buying-guides',
    tags: ['cell-plans', 'seniors', 'tmobile', 'verizon', 'att', 'consumer-cellular', 'mint-mobile', 'comparison'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `Cell phone plans are confusing on purpose. Carriers advertise prices that exclude taxes, fees, and "first month free" tricks, then ladder you up with add-ons. For seniors paying $100+ a month for a phone they barely use, switching plans is one of the easiest ways to save real money — often $40-$60/month.

This guide compares the actual 2026 prices and what each plan includes, written in plain English. The right plan depends on three questions:

1. Do you travel a lot, or stay close to home? (Affects coverage map needs.)
2. Do you stream video on your phone, or just text and email? (Affects data needs.)
3. Do you want a single line or a couple lines on the same plan? (Affects multi-line pricing.)

(Sources: T-Mobile Senior Plans, t-mobile.com/cell-phone-plans/seniors; Verizon Wireless, verizon.com; AT&T Wireless, att.com; Consumer Cellular, consumercellular.com; Mint Mobile, mintmobile.com)`,
    steps: [
      {
        title: 'T-Mobile 55+ — best for travelers and heavy users',
        content: 'T-Mobile Essentials Saver 55+: $40/month for one line, $55/month for two lines (price after autopay discount). Includes unlimited talk, text, and 4G data. 5G data is unlimited but may slow during congestion. Free roaming in Mexico and Canada.\n\nT-Mobile Magenta 55+: $55/month one line, $70/month two lines. Adds 100 GB of premium 5G (faster), Netflix Basic for free, free in-flight WiFi on most US flights, and 5 GB of high-speed data when traveling internationally.\n\nBest for: Anyone 55+ who travels even occasionally — domestically (good Mexico/Canada inclusion), internationally (built-in roaming), or by air (free WiFi). T-Mobile\'s coverage in 2026 is generally strong in cities and decent in rural areas, though it can be spotty in some western and Appalachian regions. Check coverage at t-mobile.com/coverage before switching.',
        tip: 'Quick Tip: T-Mobile sometimes runs "Switch and Save" promotions where they pay your old carrier\'s early termination fee (up to $650). Ask in store if any current promo applies.',
      },
      {
        title: 'Verizon Senior Unlimited 55+ — best coverage in rural areas',
        content: 'Verizon Unlimited 55+: $62/month one line, $84/month two lines (after autopay and paper-bill discount). Available in Florida only, despite Verizon\'s name recognition. The "55+ plan" is marketed nationwide but only really cheap in Florida.\n\nFor non-Florida residents, Verizon\'s best senior-friendly option is the Unlimited Welcome plan at $65/month (one line) or $90/month (two lines).\n\nIncludes unlimited talk, text, and 5G data. Verizon\'s coverage map is the most extensive in rural America — if you live in or travel through small towns, this is the most reliable network.\n\nBest for: Rural and small-town residents, frequent travelers in less-populated states, anyone who has had T-Mobile coverage problems. The premium price is worth it if T-Mobile or AT&T does not work well in your specific area.',
      },
      {
        title: 'AT&T — strong in suburbs, mid-priced',
        content: 'AT&T Unlimited Starter: $65/month one line, $115/month two lines (no senior discount, but pricing is the same as competitors\' senior plans).\n\nAT&T does not offer a true 55+ plan, but their AARP discount cuts $10/month per line for AARP members. So an AARP-member couple pays effectively $95/month for two lines on Unlimited Starter — competitive but not cheap.\n\nIncludes unlimited talk, text, and 5G data. Coverage is strong in suburbs and most cities, weaker in some rural areas compared to Verizon.\n\nBest for: AARP members already, anyone in AT&T-strong markets (Texas, southern states, much of the Midwest), people who want the major-carrier reliability without paying Verizon prices.',
      },
      {
        title: 'Consumer Cellular — best for low-data users',
        content: 'Consumer Cellular is a "MVNO" — they use AT&T and T-Mobile networks but charge less because they have lower overhead. Plans start at $20/month for one line with unlimited talk and text and 1 GB of data. Mid-tier is $30/month with 10 GB. Unlimited data is $55/month one line.\n\nNo activation fees, no contracts, no termination fees. Customer service is US-based and rated highly by AARP. AARP members get 5% off and 30% extra data.\n\nBest for: Seniors who use their phone mostly for calls and texts, with occasional email and web browsing. Anyone whose monthly bill is over $50 and who does not stream video should switch to Consumer Cellular and save $200-$400/year. Coverage is the same as AT&T and T-Mobile in most areas (they piggyback on those networks).',
        tip: 'Quick Tip: Consumer Cellular has retail kiosks inside Target stores nationwide if you prefer in-person help.',
      },
      {
        title: 'Mint Mobile — cheapest for tech-comfortable seniors',
        content: 'Mint Mobile (now owned by T-Mobile) sells plans in 3, 6, or 12-month bundles paid up front. The 12-month commitment offers the lowest prices.\n\nMint pricing (12-month plans):\n• 5 GB of data: $15/month (paid as $180 once a year)\n• 15 GB: $20/month\n• 20 GB: $25/month\n• Unlimited: $30/month\n\nUses T-Mobile network. SIM card or eSIM. Activation is by app — a senior comfortable with a smartphone can do it in 20 minutes; one less so will need help from a family member.\n\nBest for: Tech-comfortable seniors (or with a tech-comfortable family helper) who want the absolute lowest price. The annual prepayment is unusual but works out to dramatic savings — typically $300-$500 less per year than the major carriers. Coverage is identical to T-Mobile.',
      },
      {
        title: 'Spectrum Mobile — only for Spectrum internet customers',
        content: 'If you already have Spectrum (Charter) home internet, Spectrum Mobile offers $20-$30/month phone plans with no separate billing. Uses Verizon\'s network. Best deal in the industry IF you already pay for Spectrum internet.\n\nSpectrum Mobile Unlimited: $30/month one line, $50/month two lines. By-the-gig: $14/GB on lines that share data.\n\nBest for: Existing Spectrum internet customers. Switching saves $30-$60/month per line versus a major carrier. Not worth signing up for Spectrum internet just to get this — but if you already have it, switch your phone over today.',
      },
      {
        title: 'How to switch without losing your phone number',
        content: 'Switching carriers does NOT require getting a new phone number. The process is called "porting" and is free.\n\n1. Pick the new plan. Sign up online or in store. Do NOT cancel your old service yet.\n2. The new carrier asks for your account number and PIN with the old carrier. Get these by logging into your old carrier\'s website (Account → Profile → Account Number and Transfer PIN).\n3. The new carrier handles the rest. Your phone number transfers within minutes (usually) or up to 24 hours (rarely).\n4. Once your number rings on the new carrier\'s phone, the old account closes automatically. You don\'t need to call to cancel.\n\nWhen done, your old carrier may send a final bill for service used during the transition month. Pay it. Your number is now portable forever.',
        warning: 'Do not turn off your old phone until the port is complete. If you do, you may lose your number permanently.',
      },
      {
        title: 'Two questions that decide which plan you need',
        content: 'Question 1: How much data did you use last month?\n\nLog into your current carrier\'s app and look at "data usage" for the past 3 months. Average that number.\n\n• Under 2 GB/month → Consumer Cellular ($20-$30) or Mint 5 GB ($15)\n• 2-10 GB/month → Consumer Cellular 10 GB ($30) or Mint 15 GB ($20)\n• Over 10 GB/month → T-Mobile 55+ ($40), Mint Unlimited ($30), or Verizon\n\nQuestion 2: Do other people travel with you internationally or on flights?\n\nIf yes, T-Mobile Magenta 55+ pays for itself in WiFi savings on a single flight pair. If no, save the $15/month and pick a cheaper plan.\n\nIf you cannot answer Question 1 because the data usage is "unknown," you almost certainly use very little data — switch to a $20-$30 plan and save the difference. You can always upgrade later if needed.',
      },
    ],
  },

  {
    slug: 'organize-tax-documents-on-phone-2026',
    title: 'Organize Your Tax Documents on Your Phone (Get Ready for Next April)',
    excerpt: 'Right after tax season is the best time to set up a system for next year. Photo, name, file, find — without a single trip to the storage closet.',
    category: 'financial-tech',
    tags: ['taxes', 'documents', 'organization', 'phone', 'irs', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `The tax filing deadline (April 15) just passed. You probably spent hours hunting for receipts, 1099s, and statements that arrived months ago. Right now — while the pain is fresh — is the perfect time to set up a system so next year takes 30 minutes instead of 3 days.

This guide shows the simplest reliable system: scan documents to your phone as they arrive, file them in clear folders, and find any one in seconds at tax time. No special apps. No cloud subscription required.

The IRS recommends keeping tax records for at least 3 years (most situations) or up to 7 years (if you claim certain deductions). A digital system makes long-term storage easy and free.

(Sources: IRS Recordkeeping, irs.gov/businesses/small-businesses-self-employed/recordkeeping; Apple Support Files, support.apple.com/files; Google Drive Help, support.google.com/drive)`,
    steps: [
      {
        title: 'Decide where digital tax docs will live',
        content: 'Pick ONE place and stick to it. Two good options:\n\nOption A — Apple Files / iCloud Drive (iPhone): documents you save are automatically available on your iPad and Mac. Free 5 GB of iCloud storage; tax docs use very little.\n\nOption B — Google Drive (Android or iPhone): free 15 GB of storage. Documents are available on any device with a web browser.\n\nDo NOT scatter documents across email, photos, and various apps. The single-folder rule is what makes this work.',
      },
      {
        title: 'Create your folder structure once',
        content: 'In your chosen storage app, create one parent folder named "Tax Documents." Inside it, create one folder for each tax year:\n\nTax Documents\n  └ 2026 Tax Year\n     ├ 1. Income (W-2, 1099, Social Security)\n     ├ 2. Investments\n     ├ 3. Deductions (charity, medical, etc.)\n     ├ 4. Property (mortgage interest, property tax)\n     ├ 5. Receipts\n     └ 6. Filing (after taxes are filed)\n\nOn iPhone: Files app → tap "iCloud Drive" → tap the three-dot menu → New Folder → name it.\n\nOn Android: Drive app → tap "+" → New Folder.\n\nDuplicate the structure each January for the new year.',
        tip: 'Quick Tip: Add a number prefix (1. Income, 2. Investments) so the folders sort in the order you typically use them at tax time.',
      },
      {
        title: 'Scan a paper document with your phone (the right way)',
        content: 'Modern phones have built-in document scanners that produce clearer, smaller files than a regular photo.\n\niPhone: Open Notes app. Tap the camera icon. Choose "Scan Documents." Hold the phone over the document and it scans automatically. Tap "Save." Then tap the new scan, tap the share icon (square with up arrow), tap "Save to Files," and choose your tax folder.\n\nAndroid (Google Pixel, Samsung): Open Google Drive. Tap "+." Tap "Scan." Hold over the document. Tap the checkmark. Tap "Save" and choose the right folder.\n\nThe phone\'s scanner removes shadows, sharpens text, and flattens the page. Much better than a phone-camera photo.',
      },
      {
        title: 'Name each file with the same simple pattern',
        content: 'Use a consistent naming pattern so you can find any document instantly:\n\n[Year]-[Month]-[Source]-[Type].pdf\n\nExamples:\n• 2026-01-Vanguard-1099-DIV.pdf\n• 2026-03-StateFarm-Property-Tax.pdf\n• 2026-04-AARP-Charity-Receipt.pdf\n\nThis sorts files automatically by date when you view the folder, and the source name lets you find anything by typing in the search box.\n\nIf you have already started saving without a naming pattern, do not panic — rename a few important ones and use this pattern going forward.',
      },
      {
        title: 'Set up a monthly scanning habit',
        content: 'Pick one day per month — say, the first Saturday after the 1st — and scan everything that arrived that month. 15 minutes of scanning each month replaces 3 days of hunting at tax time.\n\nWhat to scan each month:\n\n• 1099s and W-2s (these arrive January and February — top priority)\n• Brokerage statements (monthly or quarterly)\n• Mortgage statements (December or January is the most important)\n• Charity donation receipts (any time during the year)\n• Medical bills (especially if you may itemize medical deductions)\n• Property tax bills (October-November in most states)\n• Receipts for major purchases that may be tax-relevant\n\nSet a recurring calendar reminder titled "Scan tax docs" with notes about what to look for.',
        tip: 'Quick Tip: When checks or refunds arrive, photograph the check (front and back) before depositing it. Saves time later if there is a question about when or where the funds came from.',
      },
      {
        title: 'Back up the folder once a year',
        content: 'In December — before you start the new year\'s folder — save a copy of the year that just ended somewhere outside the cloud. This protects against an account being locked or accidentally deleted.\n\nSimplest approach: get a $15 USB-C flash drive (or Lightning flash drive for older iPhones). Plug it into your phone. Copy the year\'s folder to the drive. Label the drive ("2026 Taxes") and store it with your other important documents.\n\nAlternative: email the most important PDFs (1099s, W-2s, mortgage interest statements) to yourself with subject "2026 TAX BACKUP" — they\'ll be retrievable for years.',
      },
      {
        title: 'When you actually file taxes — share with the preparer',
        content: 'When you get to tax time, you have everything in one folder. To share with a tax preparer:\n\n• Email: open Files (or Drive), tap and hold the folder, tap Share, choose Mail, type the preparer\'s email.\n\n• Drive link: Files → folder → Share → Share Link → copy. Paste into a text or email.\n\n• In-person: bring the phone with you. The preparer can see anything they need, you read off any number they ask for, and they print only what they want.\n\nThis is dramatically faster than digging through paper folders, and you have the same documents accessible from anywhere if questions come up later.',
      },
    ],
  },

  {
    slug: 'prevent-pocket-dialing-iphone-android',
    title: 'How to Stop Pocket Dialing 911, Family, and Random Voicemails',
    excerpt: 'Pocket dials waste minutes, embarrass us, and cost emergency dispatchers real time. Three simple settings make almost all pocket calls impossible.',
    category: 'tips-tricks',
    tags: ['pocket-dial', 'iphone', 'android', 'tips', 'seniors', 'emergency', '911'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `If your phone has ever called your daughter from inside your purse, called 911 by accident from your pocket, or filled a friend\'s voicemail with the sound of muffled fabric — you are far from alone. Modern smartphones, especially with Emergency SOS features that respond to button presses, are easy to trigger by accident.

This guide explains the three settings that fix the problem on iPhone and Android, plus what to do if you do accidentally call 911. Real 911 dispatchers spend significant time fielding accidental calls — your action helps them help others.

(Sources: Apple Support, support.apple.com/iphone/emergency-sos; Google Support, support.google.com/android/safety; APCO 911 Center research, apcointl.org)`,
    steps: [
      {
        title: 'iPhone — turn off "Call with Side Button"',
        content: 'iPhone\'s Emergency SOS feature can be triggered by pressing and holding the side button alongside a volume button — but it can also be set to dial 911 just by pressing the side button rapidly. The latter setting is the leading cause of accidental 911 calls from iPhones.\n\nSettings → Emergency SOS:\n\n• Turn OFF "Call with Hold and Release" (this is the one that triggers when the phone is held in a pocket and a button is pressed accidentally).\n• Leave ON "Call with 5 Button Presses" (this is intentional — 5 rapid presses is hard to do by accident).\n• Leave ON "Call After Severe Crash" (this is for car accident detection — important to keep on).\n\nNow your phone still calls 911 when you really need it (5 button presses, or after a detected crash) but stops calling when the phone is just being jostled in a pocket.',
      },
      {
        title: 'iPhone — set "Lock Screen" to require Face ID for any action',
        content: 'Settings → Face ID & Passcode → scroll to "Allow Access When Locked" → turn OFF:\n\n• Today View\n• Notification Center\n• Control Center\n• Siri\n• Reply with Message\n• Home Control\n• Wallet\n• Return Missed Calls\n• USB Accessories\n\nWith all of these off, the phone in your pocket is a brick. Even if a button is pressed, the screen lights up but nothing else can happen until Face ID or your passcode unlocks it.\n\nKeep ON: Medical ID. This stays accessible from the lock screen so paramedics can see your medical info in an emergency.',
        tip: 'Quick Tip: This also makes the phone much more secure if it is lost or stolen. A thief cannot use Siri to read your texts or unlock smart home devices.',
      },
      {
        title: 'Android — disable Emergency SOS quick-trigger',
        content: 'Most Android phones have an Emergency SOS feature triggered by 5 power-button presses. The exact path differs:\n\nGoogle Pixel: Settings → Safety & emergency → Emergency SOS → toggle off "Use Emergency SOS" if you want to disable entirely. Or leave on but turn off "Play countdown alarm" (the alarm itself can scare or attract attention if it fires accidentally).\n\nSamsung Galaxy: Settings → Safety and emergency → Send SOS messages → toggle off (or set the trigger from 3 power presses to 5 to make accidental triggers nearly impossible).\n\nMost Other Android: Settings → Safety and emergency → Emergency SOS.\n\nAll Androids: turn on "Lock screen" requirement (Settings → Security → Screen lock → PIN, pattern, or fingerprint). With a real lock screen requirement, pocket button presses cannot launch apps or make calls.',
      },
      {
        title: 'Use a case with a flap or a separate pocket',
        content: 'A folio-style case with a magnetic flap (like Apple\'s leather folio cases or generic options on Amazon for $20-$40) prevents the screen from waking when the phone is in a pocket or bag. The flap also protects the screen from scratches.\n\nAlternatively: keep the phone in a dedicated pocket (jacket inner pocket, separate purse pocket) without keys, coins, or anything else that could press buttons. The "everything in one pocket" approach is the most common cause of pocket dials.',
      },
      {
        title: 'For voice assistants — disable lock-screen activation',
        content: 'Siri and Google Assistant can fire when the phone hears its wake word from inside a pocket — and then may interpret muffled fabric noise as a command to call someone or send a text.\n\niPhone: Settings → Siri & Search → "Allow Siri When Locked" → off. Also turn off "Listen for \'Hey Siri\'" if you do not use it.\n\nAndroid: Settings → Google → Settings for Google apps → Search, Assistant & Voice → Voice → Voice Match → turn off "Hey Google" if you do not use it. Or, leave on but disable "Lock screen personal results" so the assistant cannot do anything personal from a locked phone.',
      },
      {
        title: 'If you do accidentally call 911 — stay on the line',
        content: 'If 911 connects from a pocket, do NOT hang up. Hanging up forces the dispatcher to call back to confirm you are safe — and if you do not answer, they may dispatch police to your home for a wellness check.\n\nWhat to do: pull the phone out, take a breath, calmly say: "I\'m sorry, this was an accidental call. I\'m fine. There\'s no emergency." The dispatcher logs the call and you go on with your day. Total time: 30 seconds. Total embarrassment: minor and forgotten.\n\nIf you only realize after hanging up: call 911 yourself a moment later, explain it was a pocket dial, and confirm you are fine. Saves them dispatching police.',
        warning: 'Repeated accidental 911 calls in some jurisdictions can result in nuisance fines or police visits. Setting up the steps above prevents the problem entirely.',
      },
    ],
  },
];
