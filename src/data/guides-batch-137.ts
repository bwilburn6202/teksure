// guides-batch-137 — Content cycle 2026-05-17
// Topics: AirDrop troubleshooting in iOS 18/19; Roku vs Google TV 2026 buyer guide;
// T-Mobile Essentials 65+ versus Verizon 55+ Unlimited; Nest vs Ecobee thermostat;
// Walgreens prescription refill app; iPhone tap-to-pay with Apple Pay;
// Instacart first-order walkthrough; blocking political text messages on iPhone.

import type { Guide } from './guides';

export const guidesBatch137: Guide[] = [
  {
    slug: 'how-to-fix-airdrop-not-working-iphone-2026',
    title: 'AirDrop Not Working on Your iPhone? Here Is How to Fix It in 2026',
    excerpt: 'A plain-English checklist for the most common AirDrop problems on iPhone in 2026 — most fixes take less than a minute.',
    category: 'phone-guides',
    tags: ['airdrop', 'iphone', 'troubleshooting', 'apple', 'ios-19', '2026'],
    readTime: '7 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `AirDrop is the wireless feature that lets two Apple devices send photos, contacts, and files to each other across the room — no email, no text message, no cable. When it works, it feels like magic. When it does not, it usually fails for one of about six reasons. This guide walks through each one in the order most likely to fix the problem.

Before you start: AirDrop only works between Apple devices (iPhone, iPad, Mac). It will not send to an Android phone or a Windows computer. If you are trying to send to a non-Apple device, you need a different tool — like a text message or Google Photos.

(Sources: Apple Support — "If you can't send or receive content with AirDrop," support.apple.com/en-us/102603; Apple Support — "Use AirDrop on your iPhone," support.apple.com/guide/iphone/use-airdrop-iph2d40b18d6/ios)

Watch a walkthrough: on YouTube, search for "AirDrop not working fix iOS 19" — Apple Support's official channel has a recent walkthrough.`,
    steps: [
      {
        title: 'Make sure both devices are unlocked and awake',
        content: 'AirDrop will not show your friend\'s iPhone in the list of nearby devices if their phone is locked, in your pocket, or asleep. Ask the person you are sending to wake their phone up and tap the screen so it is on the home screen or an open app. Do the same on your phone. Both devices need to be within about 30 feet of each other — Bluetooth and Wi-Fi range.',
        tip: 'Quick Tip: If you are sending to yourself (iPhone to Mac, for example), both devices need to be signed into the same Apple ID and unlocked.',
      },
      {
        title: 'Turn Wi-Fi and Bluetooth on for both devices',
        content: 'AirDrop uses Wi-Fi to send the actual file and Bluetooth to find the other device. If either is off, AirDrop will not work. Swipe down from the top-right corner of your iPhone screen to open Control Center. Look at the Wi-Fi icon (the curved bars) and the Bluetooth icon (the angled rune shape). Both should be solid blue, not gray. If either is gray, tap it once to turn it on. Ask the person you are sending to do the same.',
        warning: 'Airplane Mode turns both Wi-Fi and Bluetooth off. If you see the orange airplane icon in Control Center, tap it once to turn Airplane Mode off.',
      },
      {
        title: 'Check your AirDrop visibility setting',
        content: 'Apple makes iPhones invisible to AirDrop by default to protect you from strangers sending unsolicited photos. Open the Settings app, tap "General," then tap "AirDrop." You will see three options: "Receiving Off" (no one can send to you), "Contacts Only" (only people in your contacts can send to you), and "Everyone for 10 Minutes" (anyone nearby can send to you for the next 10 minutes, then it goes back to Contacts Only). For most people, "Contacts Only" is the right setting — but if the person sending to you is not in your contacts, choose "Everyone for 10 Minutes," do the transfer, and the setting will reset itself.',
      },
      {
        title: 'Confirm both phones have each other in Contacts',
        content: 'If you are stuck on "Contacts Only" mode, AirDrop only works if each device has the other\'s Apple ID email or phone number saved. Open the Phone app, tap "Contacts," and check that the person\'s contact card has the email address they use for their Apple ID. If you only have their phone number and they use a different email for their Apple ID, AirDrop will treat them as a stranger and you will not see their device. The fix: ask them what email is on their Apple ID and add it to their contact card.',
        tip: 'Quick Tip: If you cannot remember which email someone uses for Apple ID, the fastest workaround is to switch both devices to "Everyone for 10 Minutes" temporarily.',
      },
      {
        title: 'Turn off Personal Hotspot',
        content: 'If your Personal Hotspot is on (the feature that lets your phone share its cellular internet with a laptop), AirDrop will not work because it uses the same Wi-Fi hardware. Open Settings, tap "Personal Hotspot," and tap the "Allow Others to Join" toggle so it is gray (off). Try AirDrop again. You can turn the hotspot back on after you are done.',
      },
      {
        title: 'Restart both iPhones',
        content: 'The classic fix that solves about a third of stubborn AirDrop problems. Hold the side button and either volume button at the same time until the "slide to power off" slider appears at the top of the screen. Slide the white circle right to turn the phone off. Wait 10 seconds. Hold the side button again until the Apple logo appears. After the phone restarts and you unlock it, try AirDrop again.',
      },
      {
        title: 'Sign out and back into iCloud (last resort)',
        content: 'If nothing else works, the connection between your phone and your Apple ID may be confused. Open Settings, tap your name at the top, scroll all the way to the bottom, and tap "Sign Out." Enter your Apple ID password to confirm. Wait a minute, then tap "Sign In" at the top of Settings and re-enter your Apple ID. This re-registers your device with Apple\'s servers and almost always fixes AirDrop. Heads up: you may need to re-enable iCloud Photos and other syncing features after signing back in — they will catch up automatically over an hour or two.',
        warning: 'Do not do this step if you do not remember your Apple ID password. Recover the password first at appleid.apple.com.',
      },
    ],
  },
  {
    slug: 'roku-vs-google-tv-which-streaming-box-2026',
    title: 'Roku vs Google TV in 2026 — Which Streaming Box Is Right for You?',
    excerpt: 'A side-by-side look at Roku and Google TV in 2026 — what each does well, what each costs, and which one is easiest for a non-techy person.',
    category: 'buying-guides',
    tags: ['streaming', 'roku', 'google-tv', 'smart-tv', 'buying-guide', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `If you want to watch Netflix, Disney+, YouTube, or Max on a regular TV that does not have those apps built in, you need a streaming box. The two most popular options in the U.S. in 2026 are Roku and Google TV (formerly called Chromecast). Both are small, both plug into the back of your TV with an HDMI cable, and both cost between $30 and $100. This guide compares them honestly so you can pick the right one for your situation.

The short answer: Roku is simpler and stays out of your way. Google TV does more but takes a little learning. If you only watch a few channels and want the most reliable, easy-to-use experience, get a Roku. If you have a Gmail account, use a Google Home or Nest speaker, or want personalized recommendations across apps, get a Google TV.

(Sources: Roku.com official lineup, roku.com; Google Store TV streamer page, store.google.com; Wirecutter and CNET 2026 streaming device guides for current pricing and reviews)

Watch a comparison: on YouTube, search for "Roku vs Google TV 2026 comparison" — Tech With Brett and Crosstalk Solutions both have current side-by-side reviews.`,
    steps: [
      {
        title: 'Roku — what it does well',
        content: 'Roku makes the simplest streaming device on the market. The home screen is a grid of app icons — Netflix, Hulu, YouTube, Disney+. You click an app, you watch. There are no recommendations from Roku trying to steer you to other content, no algorithm, no Google account required. The remote is small and has a real "Home" button that always brings you back to the grid. Roku also has the best free channel selection in 2026 — The Roku Channel (free with ads), Pluto TV, Tubi, and Freevee are all built in. For someone who wants to watch their shows without learning new technology, Roku is the right answer.',
        tip: 'Quick Tip: The Roku Streaming Stick 4K is the best buy at around $50 — it does everything most people need.',
      },
      {
        title: 'Roku — what is not great',
        content: 'Roku does not work as well with smart home devices. If you have a Google Home or Nest speaker and want to say "Hey Google, play Yellowstone on the TV," Roku will not respond. (You need Google TV for that.) Roku\'s voice search works only through the Roku remote\'s microphone button, not a smart speaker. Roku also runs ads in its home screen sidebar, and the higher-end Roku Ultra ($100) is not noticeably faster than the cheaper Streaming Stick 4K, so do not pay more.',
        warning: 'The cheapest Roku (Roku Express, $30) only does HD, not 4K. If your TV is 4K and you have fast internet, spend the extra $20 for the Streaming Stick 4K.',
      },
      {
        title: 'Google TV — what it does well',
        content: 'Google TV (the brand name for the Chromecast with Google TV and the new Google TV Streamer) puts personalized recommendations on the home screen. It pulls trailers and "Continue Watching" from every app you use — Netflix, Hulu, Max, Disney+ — so you do not have to remember which app a show is on. You can use the remote\'s microphone button to say "Show me Pixar movies" and it will search across all your apps. It works perfectly with Google Home and Nest speakers — you can say "Hey Google, play Ted Lasso on the living room TV" from any room. And it supports Google Photos as a screensaver, so your TV becomes a digital picture frame when you are not watching.',
      },
      {
        title: 'Google TV — what is not great',
        content: 'Google TV is busier than Roku. The home screen pushes content at you, sometimes content you have no interest in. And you cannot fully turn it off. It requires a Google account (which means a Gmail address), which Roku does not. Some users find the interface overwhelming if they only watch a few channels. Setup is slightly longer — you have to sign in with Google during initial setup. And the Google TV Streamer (released 2024, $100) is overkill for most people. The older Chromecast with Google TV 4K is around $50 and does the same job.',
        warning: 'If you do not already have a Gmail/Google account, you have to create one to set up Google TV. There is no way around this.',
      },
      {
        title: 'How they compare on apps (almost identical in 2026)',
        content: 'Every major U.S. streaming app is available on both: Netflix, Hulu, Disney+, Max, Prime Video, Apple TV+, Paramount+, Peacock, YouTube, YouTube TV, Sling, FuboTV, ESPN, and all the free ad-supported channels (Pluto, Tubi, The Roku Channel, Freevee). The one tiny difference: Roku has a slightly better free channel lineup with The Roku Channel built in. Google TV has YouTube TV deeply integrated if you are a subscriber. For everything else, they are the same.',
      },
      {
        title: 'How they compare on price (May 2026)',
        content: 'Entry-level: Roku Express ($30, HD only) vs Chromecast with Google TV HD ($30). Sweet spot: Roku Streaming Stick 4K ($50) vs Chromecast with Google TV 4K ($50). Premium: Roku Ultra ($100, Ethernet port) vs Google TV Streamer ($100, more memory). For 95% of people, the sweet-spot $50 model from either brand is the right buy. Both work with any TV that has an HDMI port — even a 10-year-old TV.',
        tip: 'Quick Tip: Walmart, Best Buy, Target, and Amazon all carry both brands. Wait for Black Friday or Memorial Day sales — both drop to $30 or less.',
      },
      {
        title: 'How to decide',
        content: 'Pick Roku if: you mostly watch a handful of apps, you find new technology confusing, you do not use Google Home speakers. And you want a remote with a real Home button. Pick Google TV if: you already use Gmail and Google services, you have a Google Home or Nest speaker, you want recommendations across all your apps, or you watch a lot of different content and want help discovering what to watch next. Both are excellent — there is no wrong choice. The free trial of either is built into the box: plug it in, set it up, and if you do not like it, return it within the store\'s return window (usually 14 or 30 days).',
      },
    ],
  },
  {
    slug: 't-mobile-essentials-65-versus-verizon-55-unlimited-2026',
    title: 'T-Mobile 55+ vs Verizon 55+ Unlimited in 2026 — Which Senior Plan Wins?',
    excerpt: 'A clear comparison of the two best senior cell phone plans in May 2026 — price, coverage, perks, and who each is best for.',
    category: 'buying-guides',
    tags: ['cell-phone', 'seniors', 't-mobile', 'verizon', 'wireless', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `If you are 55 or older and looking to save money on your cell phone bill, two major carriers offer discounted unlimited plans: T-Mobile and Verizon. AT&T does not currently offer a discounted senior plan in 2026, so this comparison focuses on the two that do. Both plans require you (the account holder) to be 55 or older, and both let you add a second line for a partner or spouse at a similar discount.

The short answer: T-Mobile 55+ is cheaper. Verizon 55+ has better coverage in rural areas. If you live in or travel through small towns and country roads, Verizon is worth the extra money. If you live in a city or suburb, T-Mobile saves you $20 to $30 a month.

(Sources: T-Mobile official plans, t-mobile.com/cell-phone-plans/age-55-plus; Verizon Wireless 55+ Unlimited, verizon.com; AARP cell phone plan comparisons, aarp.org/money/budgeting-saving; Whistleout 2026 senior plan rankings)

Watch a comparison: on YouTube, search for "T-Mobile vs Verizon senior plan 2026" — Michael Saves and Senior Tech Club have current breakdowns.`,
    steps: [
      {
        title: 'T-Mobile Essentials 55+ — what you get for $55/month (one line)',
        content: 'T-Mobile\'s 55+ Essentials plan is the cheapest unlimited senior plan from a major carrier in May 2026. One line costs $55/month including taxes and fees. Two lines cost $70/month total (so $35/line). You get unlimited talk, text, and 5G data — but data may slow down after 50 GB if the network is busy (most people never hit this). Hotspot data is included at 3G speeds. There are no contract requirements. The big perk: T-Mobile\'s Tuesdays loyalty program gives free or cheap deals every week (free MLB.TV in season, $0.25 gas discounts, free Subway sandwiches).',
        tip: 'Quick Tip: The price includes taxes and fees — T-Mobile is one of the few carriers that does this. The advertised price is what you actually pay.',
      },
      {
        title: 'T-Mobile Magenta 55+ — the upgrade for $70/month (one line)',
        content: 'If you want extras, T-Mobile Magenta 55+ adds Netflix Basic (one stream, ad-free for $7.99 value), free in-flight Wi-Fi on most U.S. airlines, free texting in 215+ countries, and faster hotspot data (5 GB at 4G/5G speeds, then unlimited at 3G). One line is $70/month with taxes. Two lines are $90/month total. For travelers, the international texting and in-flight Wi-Fi alone are worth the upgrade.',
        warning: 'Netflix Basic does NOT include 4K or multiple screens. If you want full Netflix, you pay the difference.',
      },
      {
        title: 'Verizon 55+ Unlimited — what you get for $62/month (one line)',
        content: 'Verizon\'s 55+ Unlimited plan is $62/month for one line plus about $10 in taxes and fees, so closer to $72 all-in. Two lines are $84/month total (about $94 with taxes). You get unlimited talk, text, and 5G data on Verizon\'s network. The big draw: Verizon has the best rural coverage of any U.S. carrier. If you drive country roads, visit national parks, or live outside a metro area, Verizon almost always has better signal than T-Mobile. Verizon also throws in 6 months of Disney+ free for new customers.',
        warning: 'Verizon\'s 55+ plan is only available if your billing address is in Florida. Outside Florida, the closest equivalent is the regular Unlimited Welcome plan, which is more expensive.',
      },
      {
        title: 'Verizon Unlimited Welcome (the non-Florida option) — $75/month (one line)',
        content: 'If you live outside Florida, the cheapest Verizon unlimited plan is Unlimited Welcome at $75/month plus taxes (about $85 all-in). Two lines together drop to $130 total. You still get the strong Verizon network. But you do not get the 55+ discount or some perks. AARP members get $10 off per month (so $65/month with AARP).',
        tip: 'Quick Tip: AARP membership is $20/year for the first year, $16/year after. The Verizon discount alone pays for it more than five times over.',
      },
      {
        title: 'Coverage — the most important factor',
        content: 'Use both carriers\' free coverage maps to check signal at your home, your kids\' or grandkids\' homes, your church, and any places you travel. Go to t-mobile.com/coverage and verizon.com/coverage-map and type in your zip code. Look at the color: dark = strong, light = weak, white = no coverage. In 2026, Verizon still has the most rural coverage. T-Mobile dominates urban and suburban areas and has the fastest 5G in most cities. If both carriers are strong at your home, go with T-Mobile (cheaper). If T-Mobile is weak at your home, choose Verizon.',
      },
      {
        title: 'How to switch carriers without losing your phone number',
        content: 'Both carriers let you keep your existing phone number — this is called "porting" your number. Step 1: Get your current account number and PIN from your old carrier (this is on their website under Account Settings, or call customer service). Step 2: Order a new SIM card or eSIM from the new carrier — they will mail you a SIM, or activate an eSIM (a digital SIM your phone can download instantly). Step 3: When the new SIM is activated, your number transfers within a few hours and your old service shuts off automatically. You do not need to cancel the old plan separately. Step 4: Pay any final bill from the old carrier — they will send it within a month.',
        warning: 'Do not cancel your old carrier before the new one is active. If you do, you lose the right to port your number.',
      },
      {
        title: 'How to decide',
        content: 'Pick T-Mobile 55+ if: you live in or near a city/suburb, you want the lowest monthly bill, you travel internationally or fly often (Magenta plan), or you like loyalty perks (T-Mobile Tuesdays). Pick Verizon if: you live in a small town or rural area, signal at your home is weak on T-Mobile, you spend time in national parks or country roads, or you already have Verizon and the signal works well. The savings of switching to T-Mobile are real ($20–$30/month, or $240–$360/year), but only if your coverage holds up. Test the network with a free trial or prepaid SIM before fully switching.',
      },
    ],
  },
  {
    slug: 'nest-vs-ecobee-smart-thermostat-2026',
    title: 'Google Nest vs Ecobee in 2026 — Which Smart Thermostat Saves You More?',
    excerpt: 'Plain-English comparison of the two best smart thermostats in 2026 — installation difficulty, energy savings, and which works with your phone.',
    category: 'smart-home',
    tags: ['smart-thermostat', 'nest', 'ecobee', 'energy-savings', 'smart-home', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '🌡️',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `A smart thermostat replaces your old wall thermostat with one that connects to your phone, learns your schedule, and adjusts the temperature when you are not home. The two best in 2026 are the Google Nest Learning Thermostat (4th generation, released late 2024) and the Ecobee Smart Thermostat Premium. Both will save you 10–20% on your heating and cooling bill — that is real money.

The short answer: Nest is prettier and easier to install. Ecobee comes with a remote room sensor and built-in Amazon Alexa, which Nest does not have. If you have a multi-story home where one room is always too hot or too cold, Ecobee\'s sensor solves that. If you live in a small home and care about looks, get the Nest.

(Sources: Google Store Nest Thermostat page, store.google.com/us/product/nest_learning_thermostat_4th_gen; Ecobee Premium thermostat, ecobee.com/en-us/smart-thermostats/smart-wifi-thermostat-with-voice-control; Energy.gov on smart thermostats, energy.gov/energysaver/thermostats; Wirecutter and CNET 2026 reviews)

Watch a comparison: search YouTube for "Nest vs Ecobee 2026" — Tech With Brett and HomeKit Authority have current side-by-sides.`,
    steps: [
      {
        title: 'Before you buy — check your wiring',
        content: 'Both thermostats need a "C-wire" (common wire) — a thin wire that gives the thermostat constant low-voltage power. About 75% of U.S. homes have one; 25% do not. To check: turn off the power to your furnace at the breaker, then pop the cover off your existing thermostat. If you see wires labeled C, R, W, Y, G (and maybe others), you have a C-wire. If there is no C-wire, both Nest and Ecobee include adapters in the box that work in most cases — but installation is harder. If you live in an older home and are not handy, hire an HVAC technician for $100–$200 to do the install.',
        warning: 'Always turn off the power at the breaker before touching your thermostat wiring. Furnace circuits run 24 volts but the connected furnace runs on 120/240 volts — a short can damage your furnace board, which is a $400+ repair.',
      },
      {
        title: 'Nest Learning Thermostat (4th gen) — what you get for $280',
        content: 'The Nest is the prettier of the two — a round dial with a glass face that shows the temperature in big numbers. It learns your schedule: for the first week, you adjust the temperature manually whenever you feel too hot or cold, and the Nest watches and builds a schedule that matches. After about 7 days, it runs itself. It uses your phone\'s location to detect when you leave the house and automatically sets the temperature to "Eco" mode to save energy. The included Nest app (on iPhone and Android) shows monthly energy reports and tells you which days you used the most heat or A/C. It works with Google Home speakers and Alexa speakers (with a small extra setup step).',
        tip: 'Quick Tip: Many utility companies offer $50–$100 rebates when you buy a smart thermostat. Search "[your utility company] thermostat rebate" before buying.',
      },
      {
        title: 'Nest — what is not great',
        content: 'The Nest has no built-in speaker — you cannot talk to it directly. To use voice control, you need a Google Home or Nest speaker in the same room. Nest also does not include a remote room sensor in the box (you can buy them separately for $40 each, or a 3-pack for $100). And the 4th generation Nest dropped support for some older HVAC systems — check Nest\'s compatibility checker at nest.com/compatibility before buying. The cheaper Nest Thermostat ($130, the non-Learning version) does not have learning or a temperature sensor in the box — pick the Learning Thermostat for full features.',
      },
      {
        title: 'Ecobee Premium — what you get for $250',
        content: 'The Ecobee has a square color touchscreen — less elegant than the Nest, but easier to read. Big bonus: it comes with one SmartSensor in the box (a small puck you place in another room). The thermostat reads the temperature from both itself AND the sensor, then averages them — so if your bedroom is always 5 degrees colder than your hallway, the Ecobee accounts for it. You can buy more sensors ($80 for a 2-pack) and put one in every important room. The Ecobee also has Amazon Alexa built into the thermostat itself — you can talk to it like an Echo speaker without buying one. It works with Google Home, Apple HomeKit, and SmartThings too.',
        tip: 'Quick Tip: The included sensor is a big deal — it is the single feature most homeowners use to fix "this room is always too hot" complaints.',
      },
      {
        title: 'Ecobee — what is not great',
        content: 'The Ecobee\'s screen is busier than the Nest\'s — there is more information on display, which some people like and some find cluttered. Its scheduling is not as smart as the Nest — you have to set the schedule yourself in the app, though Ecobee will suggest one based on usage. The built-in Alexa is fine but not as good as a dedicated Echo speaker. Battery on the included sensor lasts about 18 months, then you replace a CR2477 coin cell ($3 on Amazon).',
      },
      {
        title: 'Energy savings — what to expect',
        content: 'Both Nest and Ecobee publish savings data: Nest claims 10–12% off heating and 15% off cooling. Ecobee claims up to 26% off both. Independent studies (Energy.gov, NEEA) put real-world savings closer to 8–13% for either brand — about $130–$200/year for an average U.S. home. The biggest savings come from "geofencing" (the thermostat turning down the temperature when your phone leaves the house) and proper scheduling (cooler at night for heating, warmer at night for A/C). Both brands do this well.',
        warning: 'Smart thermostats do not save money on their own — you still need to use them correctly. If you keep the house at 72°F all day and night, neither brand will save much.',
      },
      {
        title: 'How to decide',
        content: 'Pick Nest Learning ($280) if: you live in a small home or apartment, you care about how the thermostat looks on the wall, you already have a Google Home or Nest speaker, or you want a thermostat that programs itself. Pick Ecobee Premium ($250) if: you have a two-story home or any room that is always too hot/cold, you want voice control without buying a separate speaker, you use Apple HomeKit, or you want to add more room sensors over time. Both are excellent. Buy from Best Buy, Home Depot, Lowes, or Amazon — return windows are usually 14 or 30 days, plenty of time to decide.',
      },
    ],
  },
  {
    slug: 'walgreens-app-prescription-refill-step-by-step-2026',
    title: 'How to Refill Prescriptions Using the Walgreens App — Step by Step in 2026',
    excerpt: 'Refill prescriptions from your phone, set up automatic refills, and skip the pharmacy line — everything in plain English.',
    category: 'health-tech',
    tags: ['walgreens', 'prescriptions', 'pharmacy', 'health-app', 'seniors', '2026'],
    readTime: '7 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `If you fill prescriptions at Walgreens, the Walgreens app on your phone lets you refill them, see when they are ready, set up automatic refills, and even chat with a pharmacist — all without standing in line. This guide walks through everything from downloading the app to picking up your first refill.

You need: a smartphone (iPhone or Android), the Walgreens phone number or email you gave the pharmacy, and one prescription bottle from a recent fill (the bottle has your prescription number on the label).

(Sources: Walgreens official help center, walgreens.com/topic/help; Walgreens app on the Apple App Store and Google Play Store)

Watch a walkthrough: search YouTube for "Walgreens app prescription refill 2026" — Walgreens posts official tutorials on their channel.`,
    steps: [
      {
        title: 'Download the Walgreens app',
        content: 'On an iPhone: open the App Store (the blue icon with a white "A"), tap "Search" at the bottom, type "Walgreens" and tap Search. The first result with the red "W" logo is the official app. Tap "Get," then use Face ID or your password to install. On an Android phone: open the Google Play Store, tap the search bar at the top, type "Walgreens," and tap "Install" on the official red "W" app. The app is free.',
        tip: 'Quick Tip: Make sure the developer is listed as "Walgreens Boots Alliance, Inc." to avoid copycat apps.',
      },
      {
        title: 'Sign in or create an account',
        content: 'When you open the app the first time, it asks you to sign in or create an account. If you already have a Walgreens.com account (for online orders or photo prints), tap "Sign In" and use that email and password. If not, tap "Create Account," enter your email, create a password (write it down), and verify your email when Walgreens sends you a code. The whole process takes about 3 minutes.',
        warning: 'Use a password you can remember. If you forget it, you can reset it through the app. But you have to know which email you used.',
      },
      {
        title: 'Connect your prescriptions to the app',
        content: 'After signing in, the app asks for your "Pharmacy Account Number" — this is on the side label of any prescription bottle you have filled at Walgreens. The number is usually 7–10 digits and labeled "RX#" or "Prescription Number." Type it in, then enter the date of birth of the person the prescription is for. The app pulls all of that person\'s active prescriptions. If you fill prescriptions for a spouse or family member, you can add them too by tapping "Add Family Member" in the settings.',
        tip: 'Quick Tip: If you cannot find a recent bottle, call the Walgreens pharmacy where you fill prescriptions and ask for your Pharmacy Account Number. They will give it to you over the phone.',
      },
      {
        title: 'Refill a prescription',
        content: 'On the app home screen, tap "Pharmacy." You will see a list of your prescriptions with a "Refill" button next to any that are eligible. Tap "Refill" on the one you want, then confirm which pharmacy location should fill it (it defaults to your usual store). Tap "Submit." That is it. The app shows you an estimated ready time — usually 2 to 4 hours. You will get a text or app notification when it is ready to pick up.',
      },
      {
        title: 'Set up automatic refills (Auto-Refill)',
        content: 'If you take the same medication every month, Auto-Refill is a huge time saver. On the prescription detail page, tap "Auto-Refill" and switch it on. Walgreens will refill the prescription automatically about a week before you run out, and text you when it is ready. You only need to confirm with your doctor when the prescription expires (usually once a year). You can turn Auto-Refill off any time from the same screen — useful if your doctor changes your medication.',
        warning: 'Auto-Refill does NOT work for controlled substances (anxiety medications, sleep aids, ADHD medications) — federal law requires you to confirm each refill yourself.',
      },
      {
        title: 'Pay through the app and skip the line',
        content: 'When your prescription is ready, the app lets you pay in advance and pick up without waiting at the counter. Tap the ready prescription, then "Pay & Pick Up." Add a credit card or use Apple Pay/Google Pay. The app generates a barcode. At the store, go to the pharmacy counter, show the barcode on your phone screen, and the technician hands you the bag. Total time at the store: about 90 seconds. Some Walgreens have a drive-thru — same process, show the barcode at the window.',
        tip: 'Quick Tip: If you have insurance, the app shows your copay before you pay — no surprises at the counter.',
      },
      {
        title: 'Use the app to chat with a pharmacist',
        content: 'You can ask a Walgreens pharmacist a question without calling. In the app, tap "Pharmacy" then "Chat with a Pharmacist." A real pharmacist answers within a few minutes. Common questions: "Can I take this medication with my blood pressure pills?", "What if I miss a dose?", "Is this safe to take with alcohol?". This is a free service, included with your prescriptions. It is faster than calling, especially during busy hours.',
      },
    ],
  },
  {
    slug: 'how-to-tap-to-pay-with-iphone-apple-pay-2026',
    title: 'How to Tap to Pay With Your iPhone Using Apple Pay — Step by Step in 2026',
    excerpt: 'Set up Apple Pay on your iPhone, add a credit or debit card, and pay at any store that takes contactless payments — safer than swiping your card.',
    category: 'financial-tech',
    tags: ['apple-pay', 'iphone', 'contactless-payment', 'tap-to-pay', 'security', '2026'],
    readTime: '6 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `Apple Pay lets you pay for things at a store by holding your iPhone near the credit card reader — no swiping, no inserting your card, no touching the keypad. It is safer than using a physical card because the store never sees your actual card number. And you confirm each payment with Face ID or your passcode. By 2026, about 90% of U.S. stores that take credit cards also take Apple Pay, including Walmart, Target, every grocery chain, gas stations, fast food, and most small businesses.

You need: an iPhone (iPhone 6 or newer, but Face ID iPhones — iPhone X and later — are easiest), a credit or debit card from a U.S. bank, and a Wi-Fi or cellular connection (only needed for setup, not for the actual payment).

(Sources: Apple Support — "Set up Apple Pay," support.apple.com/en-us/108144; Apple Support — "Use Apple Pay in stores," support.apple.com/en-us/118828)

Watch a walkthrough: search YouTube for "How to use Apple Pay 2026" — Apple Support has an official short tutorial.`,
    steps: [
      {
        title: 'Open the Wallet app',
        content: 'Find the Wallet app on your iPhone — it has a black icon with colorful card shapes on it. It came pre-installed; you cannot delete it. If you cannot find it, swipe down on the middle of your home screen to open Search, type "Wallet," and tap the app icon. Inside Wallet, tap the plus sign (+) in the top-right corner.',
      },
      {
        title: 'Add a debit or credit card',
        content: 'After tapping the plus sign, tap "Debit or Credit Card." The iPhone camera turns on — point it at the front of your card and the app will read the card number, expiration date, and name automatically. (You can also tap "Enter Card Details Manually" if the camera struggles, which happens with some textured cards.) Type in the 3-digit security code from the back of the card. Tap "Next." Apple sends the card info to your bank, which verifies you own the card.',
        warning: 'Some prepaid cards and store-brand cards (like store-only credit cards) do not work with Apple Pay. Major bank cards from Chase, Bank of America, Wells Fargo, Capital One, Citi, and credit unions almost always work.',
      },
      {
        title: 'Verify the card with your bank',
        content: 'Your bank confirms it is really you adding the card. Most banks send a 6-digit code by text message to the phone number they have on file. Type the code into the app and tap "Next." Some banks call you instead, and some use the bank\'s own app to confirm. If you do not get a code within 2 minutes, tap "Resend" or call your bank — the number is on the back of your card. After verification, the card appears in your Wallet.',
        tip: 'Quick Tip: Make sure your bank has your current phone number before doing this — if they text the old number, the code goes nowhere.',
      },
      {
        title: 'Set a default card (if you add more than one)',
        content: 'If you add multiple cards, pick one as the default — that is the one Apple Pay uses unless you change it. Open the Wallet app, press and hold the card you want to be default, and drag it to the front of the stack. Or go to Settings > Wallet & Apple Pay > Default Card and tap the card you want. Most people set their everyday debit or rewards credit card as default.',
      },
      {
        title: 'How to pay in a store',
        content: 'At the checkout counter, when the cashier says the total, double-press the side button on your iPhone (the button on the right side). Wallet opens automatically and shows your default card. Look at the screen so Face ID can confirm it is you (you will hear a chime and see a checkmark). Then hold the top of your phone within an inch of the card reader. You will feel a quick vibration and see "Done" on the screen. The cashier may give you a receipt or text it to you. Total time: about 4 seconds.',
        tip: 'Quick Tip: If you want to use a different card than your default, double-press the side button, then tap the card stack at the bottom of the screen and pick a different card before holding the phone to the reader.',
      },
      {
        title: 'How to know if a store accepts Apple Pay',
        content: 'Look for one of these symbols at the checkout: the Apple Pay logo (a black Apple silhouette with "Pay" next to it), the contactless payment symbol (a sideways Wi-Fi symbol with four curved lines), or a sticker that says "Tap to Pay." If you see any of these, Apple Pay works there. If the store has a chip reader for credit cards but no contactless symbol, Apple Pay does not work there — you have to use a physical card. In 2026, most chip readers also accept tap, even if they do not have a sticker.',
      },
      {
        title: 'Why Apple Pay is safer than a physical card',
        content: 'When you tap your iPhone, the store does not get your real card number. Instead, your iPhone creates a one-time "token" — a fake card number that only works for that one transaction. If hackers later steal data from the store (this happens often), your real card number is not in the stolen data, so you do not need to cancel your card. You also do not type your PIN on a keypad that could have a hidden camera. And every purchase requires Face ID or your passcode, so a thief who steals your phone cannot use Apple Pay.',
        warning: 'If you lose your phone, right away go to icloud.com/find on another device or computer and click "Mark As Lost." This disables Apple Pay on the missing phone instantly.',
      },
    ],
  },
  {
    slug: 'instacart-first-order-step-by-step-2026',
    title: 'Your First Instacart Order — Step-by-Step Guide in 2026',
    excerpt: 'Order groceries online and have them delivered to your door. A plain-English walkthrough for first-time Instacart users.',
    category: 'app-guides',
    tags: ['instacart', 'grocery-delivery', 'apps', 'seniors', 'shopping', '2026'],
    readTime: '8 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `Instacart is a service that sends a real person — called a "shopper" — to a store near you to pick out your groceries, then deliver them to your door. You pay through the app, you tip the shopper. And you never leave the house. It is especially useful if you have trouble carrying heavy bags, do not drive, or live far from a good grocery store.

The basics: Instacart works with most major U.S. grocery chains — Aldi, Costco, Kroger, Publix, Safeway, Wegmans, Whole Foods, ShopRite, H-E-B, Sam\'s Club, BJ\'s, CVS, Walgreens, Sprouts, and many regional chains. Delivery usually arrives within 1–2 hours of placing the order. The first order is usually free delivery for new customers. After that, expect a $4–$8 delivery fee plus an optional tip ($5–$10 is typical).

(Sources: Instacart help center, instacart.com/help; Consumer Reports 2026 grocery delivery comparison; AARP article on grocery delivery for seniors)

Watch a walkthrough: search YouTube for "Instacart for beginners 2026" — Senior Tech Club and Tech With Sandra both have current step-by-step videos.`,
    steps: [
      {
        title: 'Download the Instacart app',
        content: 'On iPhone: open the App Store, tap Search, type "Instacart," and tap Get on the green carrot logo (the official one is by "Instacart"). On Android: open the Google Play Store, search "Instacart," and tap Install on the same green carrot logo. The app is free. You can also use Instacart in a web browser at instacart.com, which is easier for some people because the screen is bigger.',
        tip: 'Quick Tip: If you do not have a smartphone, use Instacart on a computer or tablet — it works exactly the same way.',
      },
      {
        title: 'Create an account',
        content: 'Open the app, tap "Sign Up," and enter your email, a password (write it down), and your zip code. Instacart asks for your zip code first because it determines which stores deliver to you. It then asks for your name and phone number — the phone number is so the shopper can text you if they have a question. Verify your phone number with the 6-digit code Instacart texts you.',
      },
      {
        title: 'Pick a store',
        content: 'After signing up, the app shows you every grocery store that delivers to your address. They are sorted by distance and delivery time. Tap a store to start shopping. The big ones (Costco, Aldi, Kroger, Publix, Safeway, Whole Foods) usually have the best selection and prices. Costco and Sam\'s Club require a membership for delivery — if you do not have one, pick a different store. Aldi is often the cheapest. Whole Foods is owned by Amazon and shows up if you live in their delivery zone.',
        warning: 'Prices on Instacart are often higher than in the store — sometimes 10–20% higher. The convenience costs extra.',
      },
      {
        title: 'Build your cart',
        content: 'Browse by aisle (Produce, Dairy, Meat, Pantry, etc.) or use the search bar at the top to find specific items. Tap the green plus sign on any item to add it to your cart. To change the quantity, tap the plus or minus signs. For weighed items like bananas or chicken, you order by amount (1 lb, 2 lb) or by item count (a bunch, 4 pieces). The cart icon at the bottom right shows your running total. Most stores have a $10 minimum order.',
        tip: 'Quick Tip: When ordering produce, write a note in the "Special Instructions" box like "Please pick ripe avocados, ready to eat in 2 days." The shopper reads it and picks accordingly.',
      },
      {
        title: 'Set replacements for out-of-stock items',
        content: 'This is the most important step new users skip. For every item in your cart, tap "Replacement preference" and tell the shopper what to do if the store is out of that item. You have three choices: (1) "Pick the best replacement" — the shopper substitutes a similar item; (2) "Don\'t replace, refund this item" — you get your money back if it is out of stock; (3) "Choose a specific replacement" — you pick a second option in advance. Setting these now prevents 90% of frustrating substitutions.',
      },
      {
        title: 'Schedule delivery and check out',
        content: 'Tap the cart icon, then "Go to checkout." Confirm your delivery address (apartment number matters!). Pick a delivery window — the soonest is usually 1 hour from now, or you can schedule up to 2 weeks ahead. Add your credit or debit card if you have not already. Tap the tip line and choose a tip — 5% is the default but $5–$10 in dollars is the polite norm. Tap "Place Order" to send your order to the store.',
        warning: 'Instacart adds a "service fee" of 5% on top of your order — this is NOT the tip. Always add a separate tip for the shopper, who depends on tips for income.',
      },
      {
        title: 'What to expect during delivery',
        content: 'Within a few minutes, Instacart assigns a shopper. You will get a text or notification with the shopper\'s name and photo. They start shopping in the store. If an item is unavailable, they will message you through the app — respond within 60 seconds or they will make the call themselves based on your replacement preferences. When they check out and start driving, the app shows you a map with their location. They will text you when they arrive. Most shoppers leave bags at your door and ring the bell, then drive away — unless you tell them to hand it directly to you.',
        tip: 'Quick Tip: If the delivery is wrong (missing item, damaged, expired), report it in the app under "Your Orders" within 7 days. Instacart refunds you with no questions asked.',
      },
    ],
  },
  {
    slug: 'block-political-text-messages-iphone-2026',
    title: 'How to Block Political Text Messages on Your iPhone in 2026',
    excerpt: 'Stop the flood of political fundraising and campaign texts on your iPhone — three settings that cut 95% of them out.',
    category: 'safety-guides',
    tags: ['political-texts', 'spam', 'iphone', 'privacy', 'block', 'election', '2026'],
    readTime: '6 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-05-17',
    lastVerifiedAt: '2026-05-17',
    difficulty: 'Beginner',
    body: `In 2026, U.S. midterm election campaigns are sending more political fundraising texts than ever — and they are mostly legal. Federal Do-Not-Call rules do not apply to political text messages because the Supreme Court ruled they are protected free speech. That means there is no single "stop all political texts" button. But you can cut them down by 95% with three iPhone settings and a few habits.

This guide focuses on iPhone (iOS 18 and 19). The Android version of this guide is separate.

(Sources: FCC consumer guide on political text messages, fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts; FTC on political and campaign calls, ftc.gov; Apple Support — Filter unknown senders, support.apple.com/en-us/102568)

Watch a walkthrough: search YouTube for "block political texts iPhone 2026" — Payette Forward and AARP both have current videos.`,
    steps: [
      {
        title: 'Reply STOP to known senders (your legal right)',
        content: 'Federal law (Telephone Consumer Protection Act, or TCPA) requires political campaigns to honor opt-out requests when YOU initiate the relationship — for example, if you donated to a candidate or signed a petition. Reply with just the word "STOP" (no other words) to those texts. The campaign is legally required to remove you within 30 days. This will not stop campaigns you have never interacted with — they did not have to ask permission to text you in the first place. Replying STOP to a campaign you have NEVER engaged with may actually confirm your number is active and bring more texts.',
        warning: 'Do NOT reply STOP to unknown or suspicious numbers — only to campaigns you have donated to or signed up with. Replying to a scam text confirms your number works and brings more spam.',
      },
      {
        title: 'Turn on "Filter Unknown Senders" in Messages',
        content: 'This is the single most effective setting. It splits your Messages app into two folders: people in your contacts, and unknown senders. Open Settings, scroll down and tap "Messages," then scroll down and turn on "Filter Unknown Senders." Now any text from a number not in your contacts goes to a separate "Unknown Senders" folder in the Messages app. Your main inbox only shows messages from people you know. You can still check the Unknown folder once a day for legitimate messages (a delivery notification, a one-time code). But you will not be notified for every spam text.',
        tip: 'Quick Tip: This setting also filters out delivery scam texts ("Your USPS package is on hold"), gift card scams, and most political solicitations.',
      },
      {
        title: 'Block specific numbers as they come in',
        content: 'For each political text from a number not in your contacts: open the message, tap the phone number at the top of the conversation, tap "Info," then scroll down and tap "Block this Caller." Confirm "Block Contact." You will never get another call or text from that exact number. Campaigns rotate through dozens of numbers, so you will need to block many — but each blocked number is one less interruption. There is no limit to how many numbers you can block on iPhone.',
      },
      {
        title: 'Report political spam as Junk',
        content: 'Below every text from an unknown sender, you will see a "Report Junk" link. Tap it and confirm. This does two things: it deletes the message. And it sends the sender\'s phone number to Apple and to your carrier (Verizon, AT&T, T-Mobile). Carriers use these reports to update their spam filters, which protects everyone. It does not stop the specific campaign from texting you, but over time, carrier-level filtering improves and you see fewer of them.',
      },
      {
        title: 'Stop political emails too (since campaigns use both)',
        content: 'Most campaigns text and email — and political emails are not subject to CAN-SPAM rules either. In Apple Mail or Gmail, scroll to the very bottom of any political email and look for an "Unsubscribe" link. Click it and confirm. Then in your email app, mark any remaining political emails as spam — over time, your spam filter learns. If you have ActBlue or WinRed contributions on file, log into those accounts and remove your phone number and email preferences from your profile. These two platforms power most U.S. political fundraising and your contact info gets shared widely across campaigns.',
        warning: 'Unsubscribing from a campaign on ActBlue or WinRed only stops that specific campaign — not every campaign that has your contact info. You may need to unsubscribe from dozens.',
      },
      {
        title: 'Register on the FTC Do Not Call list (limited help)',
        content: 'Go to donotcall.gov and register your cell phone number. This is free. It does NOT block political texts — but it DOES block telemarketing calls and texts from for-profit companies. After 31 days, illegal telemarketers can be reported and fined. Political campaigns are still exempt, but cutting out commercial spam reduces your overall spam volume a lot.',
      },
      {
        title: 'Use a spam-blocking app for extra coverage',
        content: 'For an extra layer, install a free spam-blocking app like Hiya, Truecaller, or RoboKiller. These apps maintain a database of known spam senders (including known political spam numbers) and silence them automatically. On iPhone: open Settings, tap "Phone," tap "Call Blocking & Identification," and turn on the toggle for the app you installed. They work for both calls and texts. Most are free with optional paid tiers. Hiya is the lightest on your battery.',
        tip: 'Quick Tip: AT&T ActiveArmor, Verizon Call Filter, and T-Mobile Scam Shield are free carrier apps that do similar work — start with those before paying for a third-party app.',
      },
    ],
  },
];
