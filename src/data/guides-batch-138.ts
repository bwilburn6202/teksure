// guides-batch-138 — Content cycle 2026-05-19
// Topics: Medicare Wellness Visit scam (FTC 2026 alert); Visual Intelligence on iPhone 16/17;
// Echo Show video call setup for grandparents; iPhone battery 80% Limit + Adaptive Charging;
// Windows 11 Recall AI feature — what seniors should know; Google Lens for plants/products/signs;
// "Toll road unpaid" text scam (2026 surge); OTA antenna setup for cord cutters.

import type { Guide } from './guides';

export const guidesBatch138: Guide[] = [
  {
    slug: 'medicare-wellness-visit-scam-2026',
    title: '2026 Medicare Wellness Visit Scam: How to Spot It and Hang Up',
    excerpt: 'Callers pretending to be from Medicare are offering a "free wellness visit" to steal your number. Here is how to recognize and stop the scam.',
    category: 'safety-guides',
    tags: ['medicare', 'scam', 'phone-scam', 'seniors', 'ftc', '2026', 'fraud'],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `In the first half of 2026, the Federal Trade Commission and the Senior Medicare Patrol have logged a sharp rise in calls offering a "free Medicare Wellness Visit." The caller usually sounds friendly and professional. They will ask you to confirm your Medicare number "to schedule your visit." That confirmation is the entire scam — once they have your number, they bill Medicare for services you never received, and your benefits can be drained or your account flagged for fraud.

The real Annual Wellness Visit is a covered Medicare Part B benefit, and you do not need a phone call to set it up. You schedule it with your own doctor.

This guide walks through how to spot the scam, what to do if you have already shared your number, and how to report the call.

(Sources: FTC consumer alert — "Don't share your Medicare number," consumer.ftc.gov; Senior Medicare Patrol fraud alerts, smpresource.org; Medicare.gov — "Avoid fraud," medicare.gov/basics/reporting-medicare-fraud-and-abuse)

Watch a walkthrough: search YouTube for "Medicare wellness scam 2026" — AARP Fraud Watch Network has a current video.`,
    steps: [
      {
        title: 'Recognize the scam in the first 10 seconds',
        content: 'The caller will use one of three openers: "Hi, I am calling from Medicare about your free wellness visit," "Your Medicare card needs to be updated for 2026," or "We are confirming the address to ship your new Medicare card." None of those things happen by phone. Medicare does not call you to schedule wellness visits. Medicare does not issue new cards by phone. The moment you hear any of these openers, the call is a scam.',
        warning: 'Real Medicare communications come by U.S. Mail or through your secure account at MyMedicare.gov. Never by an unexpected phone call.',
      },
      {
        title: 'Do not say "yes" or confirm any personal information',
        content: 'Scammers record calls. Even a single "yes" can be edited and used as fake authorization. Do not say yes. Do not confirm your name, address, date of birth, or the last four digits of anything. Do not press 1, 2, or any other number to "be removed from the list" — that confirms your number is active and brings more calls. The safest response is silence followed by hanging up.',
      },
      {
        title: 'Hang up immediately — no need to be polite',
        content: 'Politeness gets exploited. Just hang up. If the caller calls back, do not answer. If they leave a voicemail, delete it. You owe a scammer no explanation. If they call from a number that looks local (the area code matches yours), that is called "spoofing" — the actual call could be from anywhere in the world. Local-looking numbers do not mean a local caller.',
        tip: 'Quick Tip: Add the number to your phone\'s block list immediately. On iPhone: tap the (i) next to the call in your Recent Calls list, then Block this Caller. On Android: tap the three-dot menu in Recent Calls, then Block/Report spam.',
      },
      {
        title: 'If you already shared your Medicare number, act fast',
        content: 'Call 1-800-MEDICARE (1-800-633-4227) right away and tell the operator your Medicare number may have been compromised. They will put a note on your file and watch for suspicious claims. Also log into MyMedicare.gov and review your "Claims" tab once a week for the next 90 days — if you see a service you did not receive, report it immediately by clicking "Report fraud" on that claim. Medicare will investigate at no cost to you.',
        warning: 'Do NOT pay anyone who claims they can "get your stolen Medicare number back" or "remove your name from a fraud list." That is a second scam, often run by the same group.',
      },
      {
        title: 'Set up a fraud alert on your credit',
        content: 'Some Medicare scams escalate to broader identity theft. Place a free fraud alert at one of the three credit bureaus — Experian (experian.com), Equifax (equifax.com), or TransUnion (transunion.com). Placing it at one bureau alerts the other two automatically. The alert lasts one year and is free. While you are there, consider a free credit freeze — this stops anyone from opening new credit in your name without your written permission, including criminals using stolen Medicare data.',
      },
      {
        title: 'Report the call to the FTC and Senior Medicare Patrol',
        content: 'Two reports help shut down the operation. (1) FTC: go to reportfraud.ftc.gov and fill out a 5-minute form describing the call. (2) Senior Medicare Patrol: call 1-877-808-2468 or visit smpresource.org/help to find your state office. Both organizations share data with law enforcement. Even one report helps; many reports about the same scammer can lead to arrests and seizures.',
        tip: 'Quick Tip: After reporting, your phone may get fewer of these calls because your carrier flags the number based on FTC data.',
      },
      {
        title: 'Tell one other person today',
        content: 'These scams spread fastest through word of mouth — at the senior center, in church, at the grocery store. If you tell one neighbor or family member about today\'s wellness visit scam, you may save them thousands of dollars. The FTC found in 2025 that adults who hear about a scam from a friend BEFORE getting the call are 60% less likely to fall for it. You are the strongest part of your community\'s defense.',
      },
    ],
  },
  {
    slug: 'visual-intelligence-iphone-2026',
    title: 'How to Use Visual Intelligence on iPhone in 2026 (iPhone 16 and 17)',
    excerpt: 'Point your iPhone camera at anything and get instant answers — restaurants, plants, products, signs. A plain-language guide to Apple Visual Intelligence.',
    category: 'phone-guides',
    tags: ['visual-intelligence', 'iphone', 'ai', 'camera', 'apple-intelligence', 'ios-19', '2026'],
    readTime: '7 min',
    thumbnailEmoji: '👁️',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `Visual Intelligence is Apple's answer to Google Lens. It lets you point your iPhone camera at almost anything in the real world and get instant information about it — restaurant hours and reviews, the name of a plant or dog breed, what kind of bird you just saw, the price of a product you spotted in a store, a translation of a foreign sign. It is built into the Camera Control button on iPhone 16 and iPhone 17 models, and on iPhone 15 Pro and later through the Action Button.

What you need: an iPhone 16, 16 Plus, 16 Pro, 16 Pro Max, 17, 17 Plus, 17 Pro, or 17 Pro Max running iOS 18.2 or later. The feature is available in all 50 U.S. states (it does not work in some European countries due to local rules).

(Sources: Apple Support — "Use Visual Intelligence on iPhone," support.apple.com/en-us/121445; Apple Newsroom — Visual Intelligence release notes; AARP Tech 2026 review of iPhone AI features)

Watch a walkthrough: search YouTube for "Visual Intelligence iPhone 17 tutorial" — Apple Support and MacRumors both have current videos.`,
    steps: [
      {
        title: 'Make sure Apple Intelligence is turned on',
        content: 'Open the Settings app. Tap "Apple Intelligence & Siri." If the toggle at the top is off, tap it on. Your iPhone will download the AI models — this takes 5 to 30 minutes depending on your Wi-Fi. While it downloads, you can keep using your phone normally. Once it finishes, you will see a green checkmark next to "Apple Intelligence is ready."',
        warning: 'Apple Intelligence requires iPhone 15 Pro or any iPhone 16/17 model. If you have an iPhone 14 or older, this feature does not work and there is no workaround.',
      },
      {
        title: 'Press and hold the Camera Control button',
        content: 'On iPhone 16 and 17 models, the Camera Control button is on the lower-right edge of the phone (when you are holding it upright). Press and hold this button for about a second. The screen will dim and a viewfinder will appear. You are now in Visual Intelligence mode. Point your camera at any object. If you have an older iPhone with Apple Intelligence (15 Pro, 15 Pro Max), you can set the Action Button (left side, above the volume buttons) to launch Visual Intelligence in Settings → Action Button → Visual Intelligence.',
        tip: 'Quick Tip: From the Lock Screen, you can also launch Visual Intelligence by holding the Camera Control button — no need to unlock the phone first.',
      },
      {
        title: 'Try it on a restaurant or store front',
        content: 'Point your camera at the front of any business — a restaurant, coffee shop, store. Visual Intelligence automatically identifies the place and shows three buttons at the bottom: hours, menu (for restaurants), and reviews. Tap any button. Tap the address to open it in Apple Maps. Tap the phone number to call. This works for nearly every U.S. business listed in Apple Maps.',
      },
      {
        title: 'Identify plants, animals, and food',
        content: 'Point your camera at any plant, flower, dog, bird, or piece of food. Tap the green "Search" button at the bottom of the screen — this sends the image to Google Search and brings back what the object is, similar items, and care information (for plants) or breed info (for dogs). For unfamiliar food, it shows recipes. Visual Intelligence is especially good with plants — it will tell you a common name, scientific name, watering needs, and whether it is toxic to pets.',
        tip: 'Quick Tip: For wild birds, try to capture a clear side view. Visual Intelligence cross-references the Cornell Lab of Ornithology database and is usually accurate on common North American species.',
      },
      {
        title: 'Translate signs and printed text in real time',
        content: 'Point your camera at any printed text in a language you do not read — a restaurant menu in Spanish, a sign in French. Tap the white "Ask" button (which looks like a chat bubble) and type "Translate this" or "What does this say in English?" The text translates instantly. You can also ask "Summarize this menu" or "What are the gluten-free options?" — Visual Intelligence reads the menu and answers.',
      },
      {
        title: 'Compare prices on a product',
        content: 'See something at a store and wonder if you can get it cheaper online? Point your camera at the product. Tap "Search." Visual Intelligence pulls up the same item on Amazon, Walmart, Target, and Best Buy with current prices. Tap a result to open the store\'s website. This is one of the most useful everyday features — many users have saved 20% to 40% on big purchases by comparing in-store prices to online prices in 5 seconds.',
        warning: 'The price comparison is best for branded products with a clear label. For generic items (a no-name lamp at a thrift store), results are less accurate.',
      },
      {
        title: 'Privacy: what gets sent and what stays on your phone',
        content: 'Apple processes most Visual Intelligence requests on your iPhone itself, so photos do not leave your device. Two specific actions DO send your image to a third-party server: tapping "Search" (sends to Google) or tapping "Ask" (sends to ChatGPT or to Apple\'s Private Cloud Compute servers). In both cases, Apple anonymizes the request — Google and OpenAI do not see your name, location, or Apple ID. If you would rather not send any image off your phone, just close Visual Intelligence without tapping Search or Ask. The free identification (plants, animals, businesses) is done entirely on-device.',
      },
    ],
  },
  {
    slug: 'echo-show-video-call-grandparents-setup-2026',
    title: 'How to Set Up an Echo Show for Easy Video Calls with Grandparents',
    excerpt: 'The Echo Show 8 and 10 make video calling simple enough for any senior — no passwords, no apps. Here is how to set one up start to finish.',
    category: 'smart-home',
    tags: ['echo-show', 'amazon-alexa', 'video-call', 'seniors', 'grandparents', 'family', '2026'],
    readTime: '9 min',
    thumbnailEmoji: '👵',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `An Amazon Echo Show is a smart speaker with a screen. It is one of the best technology gifts for grandparents because video calling on it is dead simple: say "Alexa, call Grandma" and the call starts. No app to open, no password to remember, no PIN to type. The grandparent on the receiving end can just tap a green button or say "Alexa, answer" — they do not even need to know the names of their grandchildren.

This guide assumes you (the family member helping) are setting up an Echo Show for an older parent or grandparent. The cheapest option is the Echo Show 5 ($90 retail, often $50 on sale). The Echo Show 8 ($150) has a bigger screen and is the sweet spot for video calls. The Echo Show 10 ($250) has a motorized base that follows the person around the room during calls — best for someone who moves around a lot.

(Sources: Amazon Help — Echo Show setup, amazon.com/gp/help/customer/display.html; AARP 2026 Best Tech for Seniors guide; Consumer Reports smart display review 2026)

Watch a walkthrough: search YouTube for "Echo Show setup for elderly parents 2026" — Tech With Sandra and Senior Tech Club both have complete walkthroughs.`,
    steps: [
      {
        title: 'Buy the right Echo Show before you visit',
        content: 'Buy the Echo Show 8 (3rd generation or later) if your budget allows — the 8-inch screen is big enough for a senior to see family faces clearly, but small enough to sit on a kitchen counter or bedside table. Order from amazon.com or pick it up at Best Buy. Get the model in your loved one\'s favorite color so it does not look like a "tech gadget" in their home.',
        tip: 'Quick Tip: Amazon often bundles Echo Shows with a free trial of Amazon Music or Audible. The grandparent does not need any of that — just decline at setup.',
      },
      {
        title: 'Create the Amazon account on YOUR phone first',
        content: 'Download the Alexa app on your iPhone or Android phone. Sign in with YOUR Amazon account — not theirs. (You can transfer it later, but doing the setup under your account means you can troubleshoot remotely later.) In the app, tap the "Devices" tab, then the "+" in the top right, then "Add Device" → "Amazon Echo" → "Echo Show." Follow the app\'s prompts to connect the Echo Show to your loved one\'s home Wi-Fi. You will need the Wi-Fi password.',
        warning: 'The Echo Show needs Wi-Fi. If your grandparent does not have Wi-Fi, you cannot use it. The cheapest solution is a Verizon, AT&T, or T-Mobile 5G home internet plan — about $50 a month and no installer needed.',
      },
      {
        title: 'Add family members as contacts',
        content: 'In the Alexa app, tap "More" at the bottom, then "Contacts." Tap the "+" to add a contact. Add yourself and every family member who will call this Echo Show. Each contact needs to have the Alexa app installed on their own phone (or have an Echo device themselves). Without that, Alexa cannot place the call. Help each family member install the free Alexa app on their phone — they can sign in with their own Amazon account.',
      },
      {
        title: 'Turn on "Drop In" for trusted family only',
        content: 'Drop In is a feature that lets a family member start a video call without the Echo Show ringing first — useful if Grandma falls and cannot tap the answer button. To turn it on: in the Alexa app, tap your loved one\'s Echo Show device, tap the settings gear, tap "Communications," tap "Drop In," and choose "On for Contacts." Then go to each contact and toggle "Allow Drop In" only for the closest family (yourself, the primary caregiver, maybe one sibling). Do NOT turn on Drop In for everyone — anyone with it on can pop in unannounced.',
        warning: 'Drop In starts as a one-way audio + video connection. Your loved one will hear a chime and see your face. They can hang up at any time by saying "Alexa, hang up."',
      },
      {
        title: 'Teach the three commands that matter',
        content: 'Once the Echo Show is on your loved one\'s counter, spend 10 minutes teaching them three commands. (1) "Alexa, call [your name]" — places a call. (2) "Alexa, answer" — answers an incoming call. (3) "Alexa, hang up" — ends the call. That is it. Write these three on a Post-It note and stick it to the side of the Echo Show. After a week, most seniors no longer need the note.',
        tip: 'Quick Tip: For grandparents who have trouble hearing, increase the volume by saying "Alexa, set volume to 8." The max is 10.',
      },
      {
        title: 'Set up Photo Frame mode (the killer feature)',
        content: 'Between calls, the Echo Show acts as a digital picture frame showing photos of your family. In the Alexa app: tap the Echo Show device, tap settings, tap "Home & Clock," tap "Personal Photos," and connect your Amazon Photos account or upload a folder of family photos. Each photo rotates every 10 seconds. Most seniors say this is their favorite thing about the Echo Show — they see their grandkids hundreds of times a day even between calls.',
      },
      {
        title: 'Set up a reminder (e.g., "take your morning pills")',
        content: 'In the Alexa app, tap "More," then "Reminders & Alarms," then "+." Pick the Echo Show as the device, set the time (e.g., 8 AM daily), and type the reminder ("Take your blood pressure pill"). The Echo Show will speak the reminder out loud at that time and flash a notification on the screen. Set as many as needed — meals, medications, doctor appointments. This single feature has been shown to reduce missed medication doses by 30% to 50% in older adults.',
      },
      {
        title: 'Show them how to ask for help',
        content: 'Teach one more command: "Alexa, call [your name] now." If they fall, get scared, or are confused, this gets you on the screen in seconds. Echo Show 8 and 10 have a clear, loud speaker — they can talk to you from across the room without holding anything. For families who want a step further, add Alexa Emergency Assist ($6/month) — this lets your loved one say "Alexa, call for help" to dispatch local 911 directly without needing to pick up a phone.',
      },
    ],
  },
  {
    slug: 'iphone-battery-80-percent-limit-2026',
    title: 'iPhone Battery: Should You Use the 80% Charge Limit? (2026 Guide)',
    excerpt: 'Apple\'s 80% Limit and Adaptive Charging can double your iPhone battery life — but they slow daily charging. Here is when to use each.',
    category: 'phone-guides',
    tags: ['iphone-battery', 'battery-health', '80-percent', 'adaptive-charging', 'iphone-16', 'iphone-17', '2026'],
    readTime: '6 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `Every iPhone battery degrades over time — that is physics, not a defect. After about 500 full charge cycles (roughly 18 months for a heavy user, 3 years for a light user), a battery typically holds about 80% of the energy it did when new. To slow this down, Apple added two charging settings on iPhone 15 and later: "80% Limit" and "Adaptive Charging."

Both extend battery lifespan. But they have a downside: your phone will not be fully charged when you grab it in the morning. This guide explains what each setting does, when to use it, and how to switch between them depending on your day.

(Sources: Apple Support — "Charging your iPhone battery for optimal longevity," support.apple.com/guide/iphone/iph0c2c8b8c9/ios; Apple iPhone Battery and Performance, support.apple.com/en-us/HT208387; iFixit battery longevity testing 2026)

Watch a walkthrough: search YouTube for "iPhone 80 percent charge limit explained 2026" — MacRumors and Marques Brownlee both have current videos.`,
    steps: [
      {
        title: 'Check your current battery health first',
        content: 'Open Settings → Battery → Battery Health & Charging. The "Maximum Capacity" percentage tells you how much energy your battery holds compared to new. 100% = new. 90% = good. 80% = nearing replacement (Apple will let you keep using it but you will notice shorter days). Below 80% = consider a battery replacement at an Apple Store (currently $99 for most iPhones in 2026). This screen also shows the current charge limit if one is set.',
      },
      {
        title: 'Find the charging settings',
        content: 'From Battery Health & Charging, tap "Charging." You will see two options: "80% Limit" and "Optimized Battery Charging." On iPhone 15 and later, there is a third option called "Adaptive Charging" (sometimes labeled "Smart Charge"). Each does something different — pick based on how you use your phone.',
        tip: 'Quick Tip: These settings only appear on iPhone 15 and later. Older iPhones (14 and earlier) only have "Optimized Battery Charging," which is on by default.',
      },
      {
        title: 'Understand "80% Limit" — best for heavy chargers',
        content: 'When 80% Limit is on, your iPhone stops charging at 80% — period. It will not go to 100% no matter how long you leave it plugged in. The benefit: battery degradation slows dramatically. Apple\'s own data shows this setting can extend battery lifespan by 30% to 40%. The downside: you have 20% less battery to start the day with. Use 80% Limit if: you charge your phone often (overnight + during the day), you keep your phone for 3+ years, or you spend most of your day near a charger.',
        warning: '80% Limit means your phone goes from "80%" to "0%" faster than people expect. If you usually have 100% at 7 AM and 30% by bedtime, with 80% Limit you will hit 30% by mid-afternoon.',
      },
      {
        title: 'Understand "Optimized Battery Charging" — best for routine users',
        content: 'Optimized Battery Charging is the middle option. It learns your daily routine and charges your phone to 80% quickly, then slowly tops up to 100% right before your usual wake-up time. The benefit: most of the night, your battery sits at 80% (which is best for the chemistry) and only goes to 100% for an hour or two before you unplug. The downside: if your schedule is irregular, the algorithm guesses wrong and you wake up to a half-charged phone. Use this if: you charge overnight every night at roughly the same time and you want a full battery in the morning.',
      },
      {
        title: 'Understand "Adaptive Charging" (iPhone 15+) — the new option',
        content: 'Introduced in iOS 17.4 and expanded in iOS 18, Adaptive Charging combines both settings. It usually limits you to 80% but bumps to 100% on days the iPhone detects you are about to travel (a calendar event in another city, a flight in your inbox, GPS heading to an airport). The benefit: best of both worlds. The downside: it relies on Apple Intelligence to read your calendar and email, which some people prefer not to enable. Use this if: you have an iPhone 15 or later, you use Apple Intelligence, and your charging routine is unpredictable.',
      },
      {
        title: 'Manually override for a big day',
        content: 'Whichever setting you choose, you can manually charge to 100% any time. Go to Settings → Battery → Charging → tap "Charge to 100% now." Your iPhone will skip the limit for this one charging session. This is perfect for travel days, weddings, long flights, or any time you need maximum battery. The setting goes back to your default the next time you plug in.',
      },
      {
        title: 'Watch the battery health curve, not the percent',
        content: 'After 6 months, check Battery Health again. If you started at 100% Maximum Capacity and the 80% Limit kept you at 99% (versus the 95% a non-limited iPhone would show), the setting is working. If you see no difference, switch to Optimized Battery Charging for a few months and compare. Most users will see the slowest degradation on the strict 80% Limit, the fastest on no setting at all, and Optimized falling somewhere in the middle.',
        tip: 'Quick Tip: Heat damages iPhone batteries more than any charging speed. Never leave your iPhone on a hot car dashboard or under a pillow while charging. Aim for a charging spot between 60°F and 80°F.',
      },
    ],
  },
  {
    slug: 'windows-11-recall-feature-seniors-privacy-2026',
    title: 'Windows 11 Recall: What Seniors Should Know Before Turning It On',
    excerpt: 'Microsoft\'s Recall takes a screenshot of your PC every few seconds so AI can find anything later — useful, but think about privacy first.',
    category: 'windows-guides',
    tags: ['windows-11', 'recall', 'ai', 'privacy', 'microsoft', 'copilot-plus-pc', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '🧠',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Intermediate',
    body: `Recall is a new Windows 11 feature that takes a screenshot of your screen every few seconds and saves them all so an AI can search them later. Forgot the name of a website you visited last Tuesday? Ask Recall, "What was that recipe site I looked at last week?" and it finds it. Lost a paragraph you typed two hours ago? Recall has a screenshot.

It is genuinely useful. It is also one of the most privacy-sensitive features Microsoft has ever shipped. After backlash in 2024, Microsoft rebuilt Recall with stronger encryption, made it opt-in (off by default), and required Windows Hello fingerprint or face login before search results are shown. As of 2026, Recall is available only on Copilot+ PCs — newer laptops with a specific AI chip (Qualcomm Snapdragon X, Intel Lunar Lake, or AMD Strix Point).

This guide walks through the privacy questions to think about BEFORE you turn Recall on, plus how to enable, configure, or fully delete it.

(Sources: Microsoft Support — "Recall on Copilot+ PCs," support.microsoft.com/en-us/windows; Microsoft blog — Recall security architecture 2025; Wired and Ars Technica security reviews 2026)

Watch a walkthrough: search YouTube for "Windows 11 Recall privacy guide 2026" — Linus Tech Tips and David Bombal both have current videos.`,
    steps: [
      {
        title: 'Check if your PC even supports Recall',
        content: 'Recall only runs on Copilot+ PCs — a 2024-and-later category of Windows laptops with a dedicated AI chip rated at 40 TOPS or higher (a measure of how fast it can run AI). Examples: Microsoft Surface Pro 11, Dell XPS 13 (2024 Snapdragon model), HP OmniBook X, Lenovo Yoga Slim 7x. If you bought your PC before mid-2024 or it is a desktop, Recall is not available — and you cannot install it later. To check: Settings → System → About → look for "Copilot+ PC" badge.',
      },
      {
        title: 'Think about who else uses or sees your PC',
        content: 'Recall stores screenshots of EVERY screen — including banking, email passwords (if visible), private messages, medical portals, and so on. The screenshots are encrypted on your device, but anyone who knows your Windows password can in theory unlock them. If you share a household PC with grandkids, or if a caregiver helps you with your computer, think carefully before turning Recall on. The risk is not Microsoft — it is anyone in your home who could log in as you.',
        warning: 'Recall does NOT exclude banking sites, medical portals, or financial apps automatically. You must add them to the exclusion list yourself in Settings.',
      },
      {
        title: 'Decide if you actually need it',
        content: 'Be honest: do you regularly forget things you saw on your screen? If you mostly use email, Facebook, and a few news sites, Recall is overkill. If you do research, juggle a dozen browser tabs, or work with documents and PDFs across the day, Recall can genuinely save you time. For most retirees doing light computer use, the privacy tradeoff is not worth it. For active researchers, writers, and family historians, it may be.',
      },
      {
        title: 'Turn Recall on (only if you want to)',
        content: 'Open Settings → Privacy & Security → Recall & Snapshots. Toggle "Save snapshots" to On. Windows will prompt you to enable Windows Hello (fingerprint or face recognition) — this is mandatory. You cannot use Recall with a password alone. Once set up, Recall starts taking screenshots every 5 seconds when your screen is active. The first 50 GB of snapshots are kept; older ones are deleted automatically.',
        tip: 'Quick Tip: You can pause Recall at any time by clicking the Recall icon in the system tray (lower right corner) and clicking "Pause." Useful when you are about to do something sensitive like online banking.',
      },
      {
        title: 'Add exclusions for sensitive sites and apps',
        content: 'In Settings → Privacy & Security → Recall & Snapshots → "Exclude apps & websites." Add (at minimum): your bank\'s website, your credit card site, your patient portal (MyChart, MyMedicare.gov), your email if you receive password reset codes, and any password manager. Recall will not capture screenshots when these are on screen. You can also exclude an entire app — for example, the Outlook desktop app or your Quicken finance app.',
      },
      {
        title: 'Search your snapshots',
        content: 'After a few hours of use, open the Recall app (it has a brain-shaped icon, usually pinned to the taskbar). Click the search box and type what you remember — "blueberry muffin recipe," "Amazon receipt last Tuesday," "the email about Dad\'s appointment." Recall searches all your snapshots and shows matching screens. Click one to jump back to that moment. From there you can click links, copy text, or take action — all without leaving Recall.',
      },
      {
        title: 'Delete all snapshots or turn Recall off',
        content: 'If you change your mind, go back to Settings → Privacy & Security → Recall & Snapshots. Click "Delete all snapshots" — this wipes everything Recall has saved. Then toggle "Save snapshots" to Off. The Recall app stays installed but stops capturing anything new. To remove Recall entirely, follow Microsoft\'s uninstall instructions in the Recall settings page — this fully removes the feature from your PC.',
        warning: 'Once you delete snapshots, they are gone — there is no "undo" and no backup. Make sure that is what you want before clicking Delete.',
      },
      {
        title: 'What to do if you suspect someone accessed Recall',
        content: 'If you think someone got into your Windows account, do four things immediately: (1) Change your Windows password and reset Windows Hello. (2) Delete all Recall snapshots from Settings → Privacy & Security → Recall & Snapshots. (3) Check your bank, credit card, and email for any unfamiliar logins. (4) If sensitive info was in your snapshots, place a fraud alert with the credit bureaus (Experian, Equifax, TransUnion). Then ask yourself whether you want to keep Recall on going forward — for most people, the answer after a scare is no.',
      },
    ],
  },
  {
    slug: 'google-lens-plants-products-translation-2026',
    title: 'How to Use Google Lens to Identify Plants, Products, and Translate Signs',
    excerpt: 'Google Lens turns any Android or iPhone camera into an instant identifier and translator. A plain-language tour of its best uses in 2026.',
    category: 'app-guides',
    tags: ['google-lens', 'android', 'iphone', 'ai', 'translate', 'identify', 'camera', '2026'],
    readTime: '7 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `Google Lens is a free tool from Google that lets your phone camera "see" — it identifies plants, animals, breeds of dogs, flowers, products in stores, books, paintings, landmarks, and translates printed text in over 100 languages in real time. It works on Android (built into the camera) and on iPhone (through the Google app or the Google Photos app). There are no ads, no subscription, and no account required.

This guide covers the most useful everyday tasks: identifying a mystery plant in your yard, looking up a product to find a better price, scanning a foreign menu and translating it, and copying text from a paper document so you can paste it into an email.

(Sources: Google Support — About Google Lens, support.google.com/photos/answer/7539151; Google Lens product page, lens.google; The Verge 2026 Google Lens review)

Watch a walkthrough: search YouTube for "Google Lens beginner tutorial 2026" — Tech Bytes and Senior Tech Club both have current videos.`,
    steps: [
      {
        title: 'Find Google Lens on your phone',
        content: 'On most Android phones (Pixel, Samsung Galaxy, Motorola, OnePlus), Google Lens is built into the Camera app. Open the camera, look for a small Lens icon (a small square with rounded corners and a dot inside), and tap it. On iPhone, you need to download the free Google app from the App Store. Open the Google app, tap the colorful Lens icon in the search bar, and grant camera permission. (You do not need a Google account to use Lens.)',
        tip: 'Quick Tip: You can also access Google Lens from any photo already in Google Photos — open the photo and tap the Lens icon at the bottom of the screen.',
      },
      {
        title: 'Identify a plant or flower',
        content: 'Point your camera at the plant or flower. Make sure the leaves and any flowers are in clear focus. Tap the shutter button. Google Lens highlights the plant and shows the common name, scientific name, care information (water needs, sun needs, hardiness zone for U.S. growing), and similar-looking plants. If you got an "unknown" result, try a different angle — a clear shot of one leaf works better than a full bush. Google Lens uses the iNaturalist database for plant identification, which is the same one botanists use.',
      },
      {
        title: 'Identify a product to compare prices',
        content: 'See something at a store and want to check the price online? Point your camera at the product. Tap the shutter. Google Lens recognizes the product (brand, model number) and shows it on Amazon, Walmart, Target, Best Buy, and other major retailers with current prices. Tap any result to see the listing. This is one of the most popular uses — many shoppers have saved $50 to $200 on appliances and electronics by comparing in-store prices to online before buying.',
        warning: 'Some stores have policies against using phones to compare prices in-aisle. Step outside or use a discreet phone position if you want to avoid attention from staff.',
      },
      {
        title: 'Translate a sign, menu, or label in real time',
        content: 'Open Google Lens and tap "Translate" at the top. Point your camera at any foreign-language text — a restaurant menu in Italian, a sign in Japanese, a prescription label in Spanish. The translation appears live, overlaid on the original text, in your phone\'s language. You do not even have to take a photo — just hold the camera steady and Google translates as you move. It supports 100+ languages including Arabic, Hebrew, Russian, Mandarin, Korean, and most European languages.',
        tip: 'Quick Tip: For long documents, take a photo first. Then in the photo view, you can pinch to zoom and read the translation more comfortably than holding the camera up.',
      },
      {
        title: 'Copy text from a paper document into your phone',
        content: 'Point your camera at any printed page — a recipe in a cookbook, a business card, a receipt, a sticky note. Tap the shutter. Google Lens reads the text and highlights it. Tap "Select text" → tap and drag to select the words you want → tap "Copy." Now you can paste the text into an email, a text message, or a Notes document. This eliminates retyping. It is especially useful for copying a phone number, an address, a recipe, or a long URL from a magazine ad.',
      },
      {
        title: 'Identify a dog breed, bird, or landmark',
        content: 'For animals: point the camera at the animal, take a photo, and Google Lens shows the breed, common health concerns, and lifespan. It is most accurate with dogs and cats but increasingly good with backyard birds. For landmarks: point the camera at any building, monument, or natural feature. Lens identifies it and shows its history, opening hours (for tourist sites), and reviews. Useful when traveling.',
      },
      {
        title: 'Solve a math problem or look up homework',
        content: 'Lens can solve printed math problems. Open Lens, tap "Homework," and point at a math equation in a textbook or worksheet. It will solve the problem step by step, showing each line of work. Useful for grandparents helping grandkids with math homework. It handles arithmetic, algebra, geometry, and basic calculus. It will NOT solve handwritten work as reliably — print or typed problems are best.',
        tip: 'Quick Tip: For tricky multi-part problems, Lens has a "Show me the steps" button that walks through each calculation in plain English.',
      },
    ],
  },
  {
    slug: 'toll-road-unpaid-text-scam-2026',
    title: 'The "Unpaid Toll" Text Scam Is Back in 2026: How to Spot and Stop It',
    excerpt: 'Texts claiming you owe a toll fee are flooding U.S. phones again in 2026. Here is how to recognize the scam and protect yourself.',
    category: 'safety-guides',
    tags: ['toll-scam', 'text-scam', 'phishing', 'smishing', 'ezpass', 'fastrak', '2026', 'fraud'],
    readTime: '6 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `If you received a text in 2026 claiming "You have an unpaid toll" with a link to pay, you are not alone. The FBI Internet Crime Complaint Center (IC3) and the FTC have logged a new surge in these texts since January 2026, after a brief lull in late 2025. The texts are sent in bulk to random U.S. phone numbers — they do not know whether you actually used a toll road. The link goes to a fake website that steals your credit card number and your driver\'s license info.

Real toll agencies — E-ZPass, FasTrak, SunPass, TxTag — never collect unpaid tolls by text. They bill by mail, period.

This guide explains how to spot the scam, what to do if you tapped the link, and how to report it.

(Sources: FBI IC3 public service announcement — "Smishing scam targets road toll collection services," ic3.gov; FTC consumer alert on toll text scams 2026, consumer.ftc.gov; AAA Foundation 2026 toll scam warning)

Watch a walkthrough: search YouTube for "toll road scam text 2026" — AARP Fraud Watch and the FBI public affairs office both have current videos.`,
    steps: [
      {
        title: 'Recognize the scam text in 5 seconds',
        content: 'The text will look like one of these: "FastTrak Notice: Your account has $11.69 in unpaid tolls. Pay now to avoid a $50 late fee. [link]" or "E-ZPass: You have an outstanding balance. Settle within 24 hours to avoid registration suspension. [link]" The dollar amounts are always small ($5 to $15) and the deadline is always urgent (24 to 48 hours). This is psychological pressure — small enough to seem worth paying quickly, urgent enough to skip a careful look. Real toll fees, if owed, give you 30+ days and arrive by mail.',
        warning: 'Scammers spoof toll agency names. The real ones are: E-ZPass (Northeast), SunPass (Florida), FasTrak (California), TxTag (Texas), PeachPass (Georgia), Pikepass (Oklahoma), TollTag (DFW). If you have NEVER used a toll road, any toll text is a scam.',
      },
      {
        title: 'Look at the link domain — it tells you everything',
        content: 'Press and hold the link (do not tap it). On iPhone, a preview will pop up with the full URL. On Android, choose "Copy link address" and paste it into a Notes app to read. Real agencies use simple .gov or short .com domains: e-zpassny.com, fastrak.dot.ca.gov, sunpass.com. Scams use long, suspicious URLs: e-zpass-tolls-billing-2026.xyz, fastrak-secure-paynow.shop, com-tollverify.cn. If the URL has a country code at the end (.cn, .ru, .xyz, .shop), it is fake. If it has "secure," "verify," or "payment" jammed in front of the agency name, it is fake.',
        tip: 'Quick Tip: Real agencies do not send texts about tolls in the first place. If you are not 100% sure, ignore the text and check your actual toll account by typing the agency website yourself.',
      },
      {
        title: 'Do NOT tap the link or call any number in the text',
        content: 'Tapping the link does not just take you to a fake website — it can also install tracking pixels that confirm your phone number is active, leading to more scam texts. Calling the number connects you to a scammer who will ask for your "license plate to verify" and "card on file." Just delete the text. If you genuinely think you might owe a toll, look up the toll agency in your state by typing their website directly into your browser. Never trust a link in an unexpected text.',
      },
      {
        title: 'Report the text to your phone provider (free)',
        content: 'Forward the scam text to 7726 (which spells SPAM on the keypad). This sends the message to your carrier — Verizon, AT&T, T-Mobile — who uses the data to update their spam filters. Your phone provider will respond with a confirmation text. This is the single most effective thing you can do to reduce these texts for yourself and others. AT&T alone has blocked over 4 billion scam texts using 7726 reports.',
      },
      {
        title: 'Report to the FBI and FTC',
        content: 'Two reports help shut down the operation. (1) FBI IC3: go to ic3.gov and fill out a short complaint form. Mention "toll smishing." (2) FTC: go to reportfraud.ftc.gov. Both reports take less than 5 minutes. Reports help law enforcement track which servers and bank accounts the scammers use, leading to seizures and arrests.',
      },
      {
        title: 'If you already tapped the link and entered card info, act fast',
        content: 'Within 30 minutes: (1) Call your credit card company\'s fraud line (the number is on the back of your card) and report the card stolen. They will cancel it and ship a new one. (2) Change your online banking password from a different device (not the phone that tapped the link). (3) If you entered your driver\'s license number, place a fraud alert with the three credit bureaus (Experian, Equifax, TransUnion) — it is free. (4) Watch your card statement for the next 90 days and dispute any unfamiliar charge immediately.',
        warning: 'Do NOT pay anyone who calls or texts you claiming they can "recover your stolen money" or "remove your name from the scam database." That is a follow-up scam, often by the same group.',
      },
      {
        title: 'Turn on "Filter Unknown Senders" to cut future scams 90%',
        content: 'iPhone: Settings → Messages → Filter Unknown Senders (toggle on). Android: open the Messages app, tap the three-dot menu, tap Settings, tap "Spam protection," and turn on "Enable spam protection." This sends all texts from people not in your contacts to a separate folder. You will still get them, but you will not get notifications, and your main inbox stays clean. This single setting blocks about 90% of toll scams, package delivery scams, and political fundraising spam.',
      },
    ],
  },
  {
    slug: 'tv-antenna-setup-cord-cutting-2026',
    title: 'How to Set Up a TV Antenna in 2026: Free Local Channels in 20 Minutes',
    excerpt: 'A modern indoor antenna picks up 30 to 80 free channels in HD — no cable bill. Plain-language setup for any TV in your home.',
    category: 'entertainment',
    tags: ['tv-antenna', 'cord-cutting', 'ota', 'free-tv', 'local-channels', 'hdtv', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-05-19',
    lastVerifiedAt: '2026-05-19',
    difficulty: 'Beginner',
    body: `An over-the-air (OTA) TV antenna picks up free local channels — ABC, CBS, NBC, Fox, PBS, plus a dozen sub-channels with classic TV reruns, weather, and music. Picture quality is full 1080p HD (often better than cable for live sports because there is no compression). The catch: you need to be within 30 to 60 miles of a broadcast tower for a flat indoor antenna to work. Most U.S. metros are well-covered.

Antennas in 2026 are nothing like the rabbit ears from the 1980s. The best ones are flat, paper-thin, and stick to a window like a sticker. The cheapest workable models cost $20; a quality model costs $40 to $80. There is no subscription, ever — you pay once and watch free for as long as the TV lasts.

This guide walks through choosing the right antenna for your address, setting it up in 20 minutes, and tuning your TV to find every channel in your area.

(Sources: FCC DTV Reception Maps, fcc.gov/media/engineering/dtvmaps; AntennaWeb.org; Consumer Reports 2026 indoor antenna ratings; CNET cord cutting guide 2026)

Watch a walkthrough: search YouTube for "TV antenna setup 2026 guide" — Antenna Man and Lon.TV both have current walkthroughs of the most popular models.`,
    steps: [
      {
        title: 'Check what channels are available at your address',
        content: 'Before you spend a dime, find out what you can actually receive. Go to fcc.gov/media/engineering/dtvmaps and type your full address. The FCC website shows every broadcast tower within range, what channels they carry, and the expected signal strength (Strong, Moderate, Weak). Most U.S. addresses get at least 5 major networks and 15-30 sub-channels for free. A second free tool is antennaweb.org, which gives a color-coded antenna recommendation (yellow = cheap indoor antenna is fine; red = you need a roof antenna).',
        tip: 'Quick Tip: Your home address matters more than your city. Two houses on opposite ends of the same town can have very different channel lineups, especially in hilly areas.',
      },
      {
        title: 'Pick the right antenna for your situation',
        content: 'Three categories: (1) FLAT INDOOR (paper-thin, sticks to a window) — for strong signal areas, under 30 miles from a tower. Best buys for 2026: Mohu Leaf 50 ($45), Antop AT-127 ($35), 1byone Flat ($25). (2) AMPLIFIED INDOOR — for moderate signal areas, 30-50 miles. Includes a small power amplifier. Best buys: Clearstream Eclipse ($60), Mohu Leaf 65 ($80). (3) ATTIC OR ROOF ANTENNA — for weak signal areas, 50-70+ miles or hilly terrain. Best buys: Antennas Direct ClearStream 4MAX ($110, installs on roof or attic). For most U.S. homes, an amplified indoor antenna ($60) handles it.',
        warning: 'Skip "ultra long range" antennas that claim 200+ mile reception. The Earth\'s curvature makes those claims physically impossible. Trust the FCC map, not marketing.',
      },
      {
        title: 'Choose the best window or wall',
        content: 'Antennas perform best on a window or exterior wall facing the broadcast towers in your area. The FCC map (step 1) shows you which compass direction the towers are. Most U.S. towers are in or near downtown. Stick the antenna as high in the room as you can reach — higher = better signal. The corner of a window often works best because you get coverage from two sides. Avoid: behind a TV, on the floor, near a microwave, or behind a thick brick wall.',
        tip: 'Quick Tip: For a 2-story house, the second floor almost always gets better reception than the first floor. Run a long coax cable to your downstairs TV if needed.',
      },
      {
        title: 'Connect the antenna to your TV',
        content: 'Every flat antenna comes with a coaxial cable (the round one with a screw-on metal connector). Screw one end into the "ANT IN" or "RF IN" port on the back of your TV. Hand-tight is enough. The other end is already attached to the antenna. If your antenna is amplified, plug the small power adapter into a wall outlet and plug the antenna\'s USB cable into it. Press the power button on the adapter if it has one (most just glow blue when on).',
        warning: 'If your TV is older than 2008, it might not have an ATSC tuner and the antenna will not work. You will need a $25 digital converter box (like the Mediasonic HW-150PVR) between the antenna and the TV. Any 2008-or-later TV has the tuner built in.',
      },
      {
        title: 'Scan for channels on your TV',
        content: 'Press the Menu or Home button on your TV remote. Look for "Channels," "Channel Scan," "Auto Tuning," or "Antenna Setup" (the menu names vary by brand). Choose "Antenna" or "Air" as the input (not Cable). Start the scan. It takes 3 to 10 minutes — the TV cycles through every frequency. When done, you will see how many channels were found. A good result is 30-80 channels in a metro area. Press the up/down arrows on your remote to flip through them.',
      },
      {
        title: 'Reposition the antenna if you got fewer channels than expected',
        content: 'If you scanned and got only 5 to 10 channels but the FCC map promised 40, the antenna is not in the right spot. Move it 3 to 6 feet to a different position on the window. Rotate it 90 degrees. Try a different window facing the same direction. After each move, re-run the channel scan. Sometimes shifting the antenna 1 foot makes the difference between 12 channels and 60 channels — it is finicky. Spend 15 minutes experimenting; it is worth it.',
        tip: 'Quick Tip: The best position is rarely the most convenient. If the perfect spot is awkward, consider a longer coax cable (Amazon sells 25-foot lengths for $15) so the antenna goes where the signal is and the TV stays where you want it.',
      },
      {
        title: 'Add a DVR if you want to record shows',
        content: 'Antenna TV is "live only" — you cannot pause or record without extra equipment. Two options: (1) Tablo Quad ($140, no monthly fee) — connects to your antenna and your Wi-Fi, lets you record up to 4 shows at once and watch on any TV, tablet, or phone. (2) AirTV Anywhere ($180, free DVR included) — similar to Tablo but built by Dish. Both let you skip commercials. Set up takes 20 minutes through their app. This is the closest you can get to "cable DVR with no cable bill."',
      },
      {
        title: 'Combine with a streaming stick for the full free TV setup',
        content: 'For the complete cord-cutter setup: antenna (free local channels) + free streaming apps on a $30 Roku, Fire TV, or Google TV stick (Tubi, Pluto TV, Freevee, Crackle — all 100% free with ads). This gives you live local TV, 200+ free streaming channels, and 10,000+ free movies — for $0 a month after the one-time antenna and streaming stick purchase. The average U.S. household saves $1,400/year by canceling cable and going antenna + free streaming.',
      },
    ],
  },
];
