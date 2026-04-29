// guides-batch-99 — 25 senior-priority guides drafted 2026-04-21
// Fills Tier-1 content gaps from TEKSURE-MASTER-ROADMAP-2026-04-19.md
// Sourced from Wave 1 (Apple/Google/Microsoft/FTC/SSA) + Wave 2 (AARP/Senior Planet) authoritative references.

import type { Guide } from './guides';

export const guidesBatch99: Guide[] = [
  {
    slug: `telehealth-video-visit-guide`,
    title: 'How to Do a Telehealth Appointment With Your Doctor',
    excerpt: 'A plain-English walkthrough of your first video visit with a doctor, from getting the link to ending the call.',
    category: 'health-tech',
    tags: ['telehealth', 'video call', 'doctor', 'medicare'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A telehealth appointment is a regular doctor visit that happens on a video call instead of in person. You sit in your own living room, your doctor appears on the screen, and you talk the same way you would in an exam room. Medicare, Medicaid, and most private insurance now cover these visits, and many clinics offer them for routine check-ins, medication questions, and follow-ups after a procedure.

The biggest worry people have is the technology. The good news is that the clinic usually does most of the work for you. A staff member sends you a link by email or text, and when you tap that link at the right time, a little app opens and puts you on the call. You do not need to install anything complicated or create an account with a stranger.

Before the day of your visit, plan to do a short test run. Find a quiet spot with good lighting, make sure your phone or tablet is plugged in, and write down any questions you want to ask. Have your medicine bottles nearby so you can read the names and dosages to your doctor if they ask. If you use a walker or have trouble moving around, set everything up within arm's reach before you start.

Costs are usually the same as a regular office visit: whatever your normal copay is, you will pay that. Telehealth visits are billed through your insurance just like in-person care. If you are on Medicare, most video visits are covered through at least 2026 under the extended rules passed by Congress.

One common hiccup: people click the link too early and land on a blank page, or too late and the doctor is already waiting. Join about 5 minutes before your scheduled time. If something goes wrong, call the clinic's regular phone number — they will usually switch you to a phone appointment instead so you do not lose your slot.`,
    steps: [
      {
        title: 'Confirm the appointment and write down the details',
        content: 'When your clinic calls or texts to confirm, write down the date, time, and which platform they use (for example, Doxy.me, MyChart, or Zoom). Ask them to send both an email and a text with the link, so you have two ways to find it.',
      },
      {
        title: 'Do a practice run the day before',
        content: 'About a day early, tap the link they sent. Most telehealth systems have a "test" button that checks your camera and microphone. If you see yourself on screen and hear a test tone, you are ready. This takes about 5 minutes.',
      },
      {
        title: 'Set up a quiet, well-lit spot',
        content: 'Pick a chair near a window or lamp, with the light facing you (not behind you). Have your phone or tablet propped up at eye level — a stack of books works fine. Keep a glass of water, your medicine bottles, and a pen and paper within reach.',
      },
      {
        title: 'Join the call 5 minutes early',
        content: 'Tap the link in your email or text message about 5 minutes before your appointment time. You will usually land in a "virtual waiting room" — a screen that says the doctor will be with you shortly. Stay on that screen. Do not close it.',
      },
      {
        title: 'Allow camera and microphone when asked',
        content: 'A small box may pop up asking for permission to use your camera and microphone. Tap Allow or Yes. Without this, your doctor will not be able to see or hear you.',
      },
      {
        title: 'Talk the way you would in person',
        content: 'Speak at a normal volume. If the picture freezes, wait 10 seconds — it usually comes back. If you lose the connection completely, call the clinic\'s regular phone number and they will finish the visit by phone.',
      },
      {
        title: 'Ask about follow-up and prescriptions before hanging up',
        content: 'Before the call ends, ask: "Are there any prescriptions you are sending?" and "When do you want to see me again?" Write the answers down. Most clinics send a visit summary to your patient portal within a day or two.',
      },
    ],
    sourceName: 'HHS.gov — Telehealth for Patients',
    sourceUrl: 'https://telehealth.hhs.gov/patients/getting-started',
  },

  {
    slug: `zoom-video-calls-guide`,
    title: 'How to Use Zoom for Video Calls With Family and Doctors',
    excerpt: 'A friendly introduction to joining and hosting Zoom video calls, with tips for clear audio and fewer surprises.',
    category: 'essential-skills',
    tags: ['zoom', 'video call', 'family'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Zoom is one of the most common ways to have a video call in the United States. Grandchildren use it to stay in touch, book clubs use it to meet, and many doctors use it for telehealth visits. Once you have joined a few times, it will feel as familiar as answering your phone.

You do not need a Zoom account to join a call somebody else set up — you only need the link or the nine-digit meeting ID they share with you. Zoom is free for these kinds of calls. If you want to host your own meeting longer than 40 minutes, that needs a paid plan, but most family calls are well under that.

Zoom works on almost any device: iPhone, iPad, Android phone, Android tablet, Windows computer, or Mac. The first time you join, your device will ask to download the Zoom app. Say yes — it is safe and free, and it comes from the official Zoom company.

Two small things cause most of the trouble. First, muting. There is a microphone button at the bottom of the screen. If there is a red line through it, the other people cannot hear you. Tap once to fix it. Second, the camera. Next to the microphone is a camera button. If it has a red line, people can hear you but not see you. These two buttons solve about 90% of "they can't hear me!" moments.

If you are invited to a call, the best thing to do is plan to join 5 minutes early. That gives you time to test your microphone and camera without anyone waiting on you.`,
    steps: [
      {
        title: 'Install the Zoom app ahead of time',
        content: 'On your phone or tablet, open the App Store (iPhone/iPad) or Play Store (Android) and search for "Zoom Workplace." Tap Get or Install. On a computer, go to zoom.us/download and click the blue Download button. The app is free.',
      },
      {
        title: 'Open the invitation you were sent',
        content: 'Your host will send you an email or text with a link that looks like "zoom.us/j/..." followed by numbers. Tap that link. Your device will open the Zoom app automatically.',
      },
      {
        title: 'Type your name and join',
        content: 'Zoom may ask you to type your name so other people in the call know who you are. Type your first name (or "Grandma Ruth," whatever you go by) and tap the blue Join button.',
      },
      {
        title: 'Allow camera and microphone access',
        content: 'A box will pop up asking if Zoom can use your camera and microphone. Tap Allow for both. If you only tap Allow for one, you will be missing either video or sound.',
      },
      {
        title: 'Unmute yourself once you are in',
        content: 'Look at the bottom-left corner of the Zoom screen. If the microphone icon has a red slash through it, tap it once to unmute. Do the same with the camera icon next to it.',
      },
      {
        title: 'Use Gallery View to see everyone',
        content: 'In the top-right corner, tap View (or Switch to Gallery). This shows everyone in little boxes at the same time, like the opening of The Brady Bunch. Speaker View zooms in on whoever is talking.',
      },
      {
        title: 'Leave the call when you are done',
        content: 'When the call ends, tap the red Leave or End button in the bottom-right. If you are the host, you will be asked to end for everyone or just leave yourself. Tap Leave Meeting.',
      },
    ],
    sourceName: 'Zoom Support — Joining a Meeting',
    sourceUrl: 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060401',
  },

  {
    slug: 'set-up-new-iphone',
    title: 'How to Set Up a New iPhone Step by Step',
    excerpt: 'A patient walkthrough of unboxing and setting up your new iPhone, including transferring your stuff from an old phone.',
    category: 'phone-guides',
    tags: ['iphone', 'setup', 'new phone', 'apple'],
    readTime: '12 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Unboxing a brand-new iPhone is exciting, but the first-time setup can feel like a lot. The phone asks you a dozen questions in a row — Wi-Fi password, Apple ID, Face ID, passcodes — and each question has its own screen. Plan for about 30 to 45 minutes of uninterrupted time, sitting near your Wi-Fi router with both your old phone (if you have one) and your new one nearby.

Before you start, make sure your old phone is charged up to at least 50%. If you are switching from another iPhone, the new one can copy almost everything over using a feature called Quick Start — just hold the two phones next to each other and the new one pulls over your contacts, photos, apps, and settings. This is by far the easiest way to switch.

You will also need your Apple ID and password handy. That is the email address you use for the App Store and iCloud. If you cannot remember the password, take a moment to reset it at appleid.apple.com before you start the setup — trying to reset it in the middle of setup is frustrating.

Your carrier (Verizon, AT&T, or T-Mobile) may have already put the SIM card in the phone, or they may have activated it as an "eSIM" that transfers over automatically. If the new phone shows "No Service" after setup, call your carrier's customer service line — they can usually fix it in a few minutes.

One tip that saves heartache: when the phone asks about Face ID, iCloud Backup, and Find My iPhone, say yes to all three. Face ID unlocks the phone with your face so you do not have to type a passcode every time. iCloud Backup makes a copy of your photos and contacts in case the phone is lost. Find My iPhone helps you locate the phone if you misplace it.`,
    steps: [
      {
        title: 'Charge the phone and find your Wi-Fi password',
        content: 'Plug the new iPhone into its charger for 15 minutes before you start. Write down your home Wi-Fi network name and password on a piece of paper — you will need to type it in during setup.',
      },
      {
        title: 'Turn on the phone and pick your language',
        content: 'Hold the side button on the right edge until the Apple logo appears. After a moment, a "Hello" screen will appear. Swipe up from the bottom or press the side button. Tap English (or your language) and the United States.',
      },
      {
        title: 'Use Quick Start if you have an old iPhone',
        content: 'Place your old iPhone next to the new one. A blue screen on the old phone will say "Set Up New iPhone." Tap Continue. A swirl pattern appears on the new phone — point your old phone\'s camera at it to link them. This takes about 2 minutes.',
      },
      {
        title: 'Connect to Wi-Fi',
        content: 'Tap the name of your home Wi-Fi network and type the password carefully (passwords are case-sensitive). Tap Join. If you do not see your network, make sure your router is on.',
      },
      {
        title: 'Set up Face ID and a 6-digit passcode',
        content: 'When it asks to set up Face ID, tap Continue and slowly move your head in a circle as shown. Then create a 6-digit passcode — pick something you will remember but others will not guess. Write it down and keep it somewhere safe.',
      },
      {
        title: 'Sign in with your Apple ID',
        content: 'Type the email address and password for your Apple ID. If you do not have one, tap "Forgot password or don\'t have an Apple ID?" and follow the steps. Your Apple ID gives you access to the App Store and iCloud.',
      },
      {
        title: 'Say yes to backup and Find My iPhone',
        content: 'When asked about iCloud Backup and Find My iPhone, tap Continue or Enable on both. These protect your photos, contacts, and the phone itself if something goes wrong. Setup finishes with "Welcome to iPhone."',
      },
    ],
    sourceName: 'Apple Support — Set up your iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/set-up-iphone-iph3c7a00e00/ios',
  },

  {
    slug: `set-up-new-android-phone-2`,
    title: 'How to Set Up a New Android Phone Step by Step',
    excerpt: 'A calm, step-by-step guide to setting up a new Samsung, Google Pixel, or other Android phone for the first time.',
    category: 'phone-guides',
    tags: ['android', 'samsung', 'pixel', 'setup'],
    readTime: '12 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Setting up a new Android phone takes about 30 to 45 minutes the first time. "Android" is the software that runs on phones made by Samsung, Google, Motorola, and many others — so the exact look of the screens depends on who made your phone, but the questions are almost the same on every brand.

Before you begin, have your home Wi-Fi password nearby and know your Google account email and password (the one you use for Gmail or the Play Store). If you do not have a Google account yet, the phone will offer to make you a free one during setup. Your Google account is what holds onto your contacts, photos, and apps, so it is important to pick a password you will remember.

If you are moving from another Android phone or an iPhone, the new phone can copy your stuff over using a feature Google calls "Copy your data." You can use a cable that comes in the box, or do it over Wi-Fi. Photos, contacts, text messages, and most apps transfer. Plan on 20 to 40 minutes for the transfer itself — keep both phones plugged in the whole time.

One thing to watch for: during setup, the phone will ask a lot of yes-or-no questions about things like location, personalized ads, and sending usage data to Google. It is fine to say "no" or "skip" to any of these you are not sure about. None of them are required to use the phone.

If your carrier (Verizon, AT&T, or T-Mobile) already transferred your phone number, you should see signal bars within a few minutes of finishing setup. If not, call the carrier's customer service — they can usually fix it over the phone in under 10 minutes.`,
    steps: [
      {
        title: 'Plug in and power on',
        content: 'Plug the phone into its charger for 15 minutes before starting. Press and hold the power button on the right edge until you feel a small buzz and the screen lights up with a welcome message.',
      },
      {
        title: 'Pick your language and region',
        content: 'Tap your language (usually English) and country (United States), then tap the blue Start or Next button at the bottom.',
      },
      {
        title: 'Connect to home Wi-Fi',
        content: 'Tap the name of your Wi-Fi network from the list and type the password. Passwords are case-sensitive, so capital letters matter. Tap Connect.',
      },
      {
        title: 'Copy from your old phone, or start fresh',
        content: 'When it asks "Copy apps & data?", tap Next if you want to transfer from another phone. Follow the on-screen pictures to connect the two phones. If you are starting fresh, tap "Don\'t copy" at the bottom.',
      },
      {
        title: 'Sign in to your Google account',
        content: 'Type your Gmail address, tap Next, then type your password. If two-step verification is on, check your old phone or email for a code. If you do not have a Google account, tap "Create account" at the bottom.',
      },
      {
        title: 'Set a screen lock',
        content: 'Choose a PIN (4 to 6 numbers), pattern, or password. Write the PIN down in a safe place. If your phone has a fingerprint sensor or face unlock, set that up too — it makes daily use much easier.',
      },
      {
        title: 'Finish the privacy choices',
        content: 'The phone will ask about location, usage data, and personalized ads. It is safe to tap Skip or No on any of these. You can always change them later under Settings > Privacy.',
      },
    ],
    sourceName: 'Google Support — Set up a new Android device',
    sourceUrl: 'https://support.google.com/android/answer/2840815',
  },

  {
    slug: 'how-to-screenshot-mac',
    title: 'How to Take a Screenshot on a Mac',
    excerpt: 'Three reliable keyboard shortcuts for capturing what is on your Mac screen, with tips on where the picture is saved.',
    category: 'mac-guides',
    tags: ['mac', 'screenshot', 'keyboard shortcut'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Taking a screenshot means making a picture of whatever is on your screen right now. It is one of the most useful skills on a computer — it lets you show a grandchild exactly what error message you are seeing, save a confirmation number from a purchase, or keep a copy of a recipe that might disappear from a website later.

On a Mac, screenshots are built in. You do not need to download anything. There are three main shortcuts to remember, and they all start by holding down Shift and the Command key together (Command is the key with the little looped square symbol, right next to the space bar).

The Mac saves screenshots straight to your desktop by default. If you take a few in a row, the desktop gets cluttered — that is normal. The file names look like "Screenshot 2026-04-21 at 3.15.47 PM.png." You can drag these into emails, attach them to messages, or drop them into a folder for safekeeping.

In the bottom-right corner of the screen, right after you take a screenshot, a little thumbnail preview floats for a few seconds. If you click it, a small editor opens where you can draw arrows, circle things, and crop the picture before saving. If you ignore the preview, it saves on its own.

One thing that trips people up: the shortcuts use numbers across the top of the keyboard — the 3, 4, and 5 keys. Not the number pad on the right side of a full-sized keyboard. If nothing happens when you press the shortcut, check that you are using the top row of numbers.`,
    steps: [
      {
        title: 'Capture the whole screen',
        content: 'Hold Shift + Command + 3 at the same time. You will hear a camera shutter sound. The picture appears as a thumbnail in the bottom-right corner and saves to your desktop a few seconds later.',
      },
      {
        title: 'Capture just part of the screen',
        content: 'Hold Shift + Command + 4. The mouse pointer turns into a small cross. Click and drag across the part of the screen you want to capture, then let go. Only that rectangle is saved.',
      },
      {
        title: 'Capture one window only',
        content: 'Hold Shift + Command + 4, then tap the spacebar once. The pointer turns into a camera icon. Move it over any window on your screen — that window highlights in blue — and click. The window is captured without any clutter around it.',
      },
      {
        title: 'Open the screenshot toolbar',
        content: 'Hold Shift + Command + 5 for the full screenshot toolbar. This gives you buttons for full screen, window, selection, and even screen recording (a video of what you do on screen). Click Options to change where screenshots save.',
      },
      {
        title: 'Edit or share right from the thumbnail',
        content: 'As soon as you take a screenshot, a small preview appears in the bottom-right corner for about 5 seconds. Click it to open a quick editor where you can draw, crop, or tap the share button to email it.',
      },
    ],
    sourceName: 'Apple Support — Take a screenshot on your Mac',
    sourceUrl: 'https://support.apple.com/en-us/102646',
  },

  {
    slug: `amazon-alexa-setup-guide`,
    title: 'How to Use Amazon Alexa on an Echo Speaker',
    excerpt: 'A gentle introduction to talking to Alexa, with voice commands seniors use most often — from the weather to setting timers.',
    category: 'smart-home',
    tags: ['alexa', 'echo', 'voice assistant', 'amazon'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Alexa is the voice that lives inside Amazon Echo speakers. You say her name out loud, ask a question, and she answers back in a calm voice. People use her to check the weather, set cooking timers, turn on lights, play music, and make hands-free phone calls — all without ever touching a screen.

The Echo speaker is always listening for the word "Alexa" (or "Amazon" or "Computer" if you changed the wake word). She does not record what you say until she hears her name. Then a blue light ring on top of the speaker turns on, which means she is paying attention. When the blue light goes off, she is done listening.

To set up a new Echo, you plug it into the wall and use the free Alexa app on your phone to connect it to your Wi-Fi. That takes about 10 minutes. After that, most of what you do with Alexa is spoken out loud — you rarely need to open the app again.

Alexa is free to use after you buy the speaker. Some features like Amazon Music and certain audiobooks need a subscription, but the basics — weather, timers, news, calls to other Echo owners — cost nothing extra. A standard Echo Dot speaker costs about $50 and often goes on sale for around $25.

A common worry is privacy. You can review and delete everything Alexa has ever heard by opening the Alexa app, tapping More, then Settings, then Alexa Privacy. You can also say "Alexa, delete what I just said" to remove a single recording right away.`,
    steps: [
      {
        title: 'Plug in the Echo and open the Alexa app',
        content: 'Plug the Echo speaker into a wall outlet. The light ring turns orange, which means it is ready to set up. On your phone, open the App Store or Play Store, search for Amazon Alexa, and install the free app.',
      },
      {
        title: 'Sign in with your Amazon account',
        content: 'Open the Alexa app and sign in with the same email and password you use for Amazon shopping. If you do not have an Amazon account, tap Create Account — it is free.',
      },
      {
        title: 'Connect the Echo to your Wi-Fi',
        content: 'In the app, tap Devices at the bottom, then the plus sign in the top-right, then Add Device. Pick Amazon Echo from the list and follow the steps. Have your Wi-Fi password ready.',
      },
      {
        title: 'Try your first questions',
        content: 'Say "Alexa, what\'s the weather today?" Wait for the blue light to turn on, then speak clearly. Try "Alexa, set a timer for 10 minutes" or "Alexa, what time is it?" — these are the most-used commands.',
      },
      {
        title: 'Set up drop-in calls with family',
        content: 'In the Alexa app, tap Communicate at the bottom, then Contacts. Give permission to access your phone contacts. Now you can say "Alexa, call Dad" and it will ring his phone or his Echo — hands-free.',
      },
      {
        title: 'Adjust the volume and stop her',
        content: 'Say "Alexa, volume 5" to make her louder or quieter (1 is quiet, 10 is loud). To stop her mid-sentence, say "Alexa, stop" or tap the top of the speaker. To mute her microphone, press the small microphone-with-a-line button on top.',
      },
      {
        title: 'Review and delete your voice history',
        content: 'Open the Alexa app, tap More, Settings, Alexa Privacy, then Review Voice History. You can listen to anything Alexa has recorded and delete it. You can also set recordings to auto-delete every 3 months.',
      },
    ],
    sourceName: 'Amazon Help — Get Started with Alexa',
    sourceUrl: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GRCCA2PHCBQS8HLG',
  },

  {
    slug: `apple-maps-navigation-guide`,
    title: 'How to Use Apple Maps for Directions and Places',
    excerpt: 'A patient guide to Apple Maps on your iPhone — from searching addresses to getting turn-by-turn driving directions.',
    category: 'app-guides',
    tags: ['apple maps', 'directions', 'iphone'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Apple Maps is the free map and directions app that comes pre-installed on every iPhone and iPad. You do not need to download anything or sign up for an account — it is already there, with the colorful folded-map icon on your home screen.

Apple Maps can do three main things: find a place (like "Walgreens near me"), give you directions from where you are to somewhere else, and show you what a place looks like before you go. It works for driving, walking, public transit, and cycling. A friendly voice reads each turn out loud so you do not have to look at the screen while driving.

Before you rely on Apple Maps for an important trip, do a small test drive around your neighborhood. Ask it to take you somewhere you already know how to get to. That way you can learn how it sounds, how big the fonts are, and where to mount your phone for easy viewing — before you really need it.

Apple Maps uses your phone's location to know where you are. The first time you open it, your phone will ask "Allow Maps to use your location?" — tap Allow. If you tap Don't Allow by accident, directions will not work. You can fix this by going to Settings > Privacy & Security > Location Services > Maps, and tapping "While Using the App."

One small difference between Apple Maps and Google Maps: Apple Maps does not ask you to sign in. Google Maps asks for a Google account. If that feels easier, Apple Maps is a good default for iPhone users.`,
    steps: [
      {
        title: 'Open Apple Maps',
        content: 'On your iPhone home screen, tap the white icon with a small folded map and a red 280 freeway symbol on it. The app opens to a map centered on where you are.',
      },
      {
        title: 'Search for a place',
        content: 'Tap the search bar at the bottom that says "Search Maps." Type a business name, address, or general term like "pharmacy near me" or "gas station." Tap the blue Search key on the keyboard.',
      },
      {
        title: 'Pick your destination',
        content: 'Apple Maps shows results as red dots on the map and a list at the bottom. Tap the one you want. A card slides up with the address, phone number, and a blue Directions button.',
      },
      {
        title: 'Start driving directions',
        content: 'Tap the blue Directions button, then pick Drive, Walk, Transit, or Cycle. Tap the green Go button to start. Apple Maps reads each turn out loud as you approach it.',
      },
      {
        title: 'Adjust the volume of the voice',
        content: 'While driving, if the voice is too quiet, press the volume-up button on the side of the phone during a spoken instruction. The voice volume is separate from ring volume and only adjusts during a direction.',
      },
      {
        title: 'Save favorite places',
        content: 'On the card for a place, scroll down and tap "Add to Favorites." Your home, your doctor\'s office, and your church will then appear as big buttons when you open the app — one tap to start directions.',
      },
      {
        title: 'End or change the route',
        content: 'To stop directions, tap the red "End Route" button at the bottom. To change destinations, tap the X in the search bar and start a new search. Maps will stop speaking and return to the main view.',
      },
    ],
    sourceName: 'Apple Support — Get directions in Maps on iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/get-directions-iph0043d1bac/ios',
  },

  {
    slug: `google-maps-navigation-guide`,
    title: 'How to Use Google Maps for Directions and Places',
    excerpt: 'A clear, senior-friendly guide to using Google Maps on your phone to find places and get turn-by-turn directions.',
    category: 'app-guides',
    tags: ['google maps', 'directions', 'navigation'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Google Maps is the most-used navigation app in the United States. It is free, works on both iPhone and Android, and can show you maps, give turn-by-turn driving directions, and even let you peek at what the front of a building looks like before you go.

You probably already have Google Maps on your phone — on Android, it is pre-installed, and on iPhone, most people download it from the App Store. The icon is a small diamond-shaped pin in red, yellow, green, and blue on a white background. If you do not see it, search for "Google Maps" in your app store and tap Get or Install.

Using Google Maps costs nothing. It does need an internet connection, either through Wi-Fi at home or cellular data while you are out. Driving directions use about as much data as listening to music. If you are worried about data, you can download an offline map of your area under your account menu — then directions work even with no signal.

The first time you open Google Maps, it will ask to use your location. Tap "Allow While Using App." Without this, the app cannot know where you are, so directions will not work. You may also be asked to sign in with a Google account (the same one you use for Gmail). Signing in is optional, but it lets you save favorite places and your home address.

One everyday tip: you can pinch the screen with two fingers to zoom in and out. Two fingers spreading apart zooms in; two fingers pinching together zooms out. This helps when the map feels too crowded or too far away.`,
    steps: [
      {
        title: 'Open Google Maps',
        content: 'Tap the white icon with a red-and-yellow map pin on your home screen. The map opens centered on where you are, shown by a blue dot.',
      },
      {
        title: 'Search for a place',
        content: 'Tap the search bar at the top that says "Search here." Type what you are looking for — a store name, an address, or something like "coffee near me." Tap the blue Search key.',
      },
      {
        title: 'Pick your destination',
        content: 'Results appear as red pins on the map and in a list at the bottom. Tap the place you want. A card shows the name, hours, phone number, and reviews from other customers.',
      },
      {
        title: 'Tap the Directions button',
        content: 'On the place\'s card, tap the blue Directions button. Google Maps calculates the best route. Pick your travel type at the top: car, transit, walking, or bicycle.',
      },
      {
        title: 'Start the turn-by-turn voice',
        content: 'Tap the blue Start button at the bottom. A voice reads each turn out loud. The map follows you as you drive. The estimated arrival time shows in the bottom-left.',
      },
      {
        title: 'Pull over to a gas station or rest stop',
        content: 'While driving, tap the magnifying-glass icon on the right side of the screen. Pick from Gas stations, Restaurants, Rest stops, or Coffee. Google Maps shows what is along your route.',
      },
      {
        title: 'End the trip or recenter the map',
        content: 'To stop directions, tap the red X Close button at the bottom. If the map scrolls away from your location, tap the compass arrow in the bottom-right to snap back to your current position.',
      },
    ],
    sourceName: 'Google Maps Help — Get directions',
    sourceUrl: 'https://support.google.com/maps/answer/144339',
  },

  {
    slug: `my-social-security-account-guide`,
    title: 'How to Set Up and Use a my Social Security Account',
    excerpt: 'A careful walkthrough of creating your my Social Security online account at SSA.gov — what you can do there and what to watch out for.',
    category: 'government-civic',
    tags: ['social security', 'ssa', 'retirement', 'government'],
    readTime: '10 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A "my Social Security" account is your personal, secure connection to the Social Security Administration at ssa.gov. Once you have one, you can check your benefit amount, get a letter showing what you receive each month (called a benefit verification letter), update your direct deposit bank information, and see your earnings record from every job you have ever had.

Creating the account is free and takes about 15 minutes, but it does require some care. You will need your Social Security number, a US mailing address, a phone number, and an email address you check regularly. You will also be asked a series of identity-verification questions based on your credit history — things like "which of these addresses have you lived at?" — to make sure it is really you.

In recent years, the Social Security Administration moved to a partner called Login.gov (or ID.me for some people) to handle the sign-in. If you already have a Login.gov account for other federal services, you can use that same account. If not, you will create one during setup. This is the same login system used by the IRS and the USPS, so it is worth setting up well.

Only go to ssa.gov directly. Type the address yourself — do not click a link from an email or text message, even one that looks official. The SSA will never call you and demand payment in gift cards, threaten arrest, or ask for your full Social Security number by phone. Those are scams.

If you have trouble setting up the account online, you can still go to your local Social Security office in person or call 1-800-772-1213 (TTY 1-800-325-0778) Monday through Friday, 8 AM to 7 PM. An in-person visit takes longer (and usually needs an appointment) but a real human will help you through every step.`,
    steps: [
      {
        title: 'Go directly to ssa.gov',
        content: 'Open your web browser and type ssa.gov into the address bar at the top (not the search bar). Press Enter. Make sure the address is exactly ssa.gov — not a lookalike like ssa-gov.net or social-security.org.',
      },
      {
        title: 'Click "Sign In or Create an Account"',
        content: 'On the SSA homepage, look for the blue "Sign In" button in the top-right corner. Click it. On the next page, choose "Create an Account" if this is your first time.',
      },
      {
        title: 'Pick Login.gov or ID.me',
        content: 'You will see two options: Login.gov and ID.me. Login.gov is the government-run choice and is what most new users should pick. Click the blue "Sign in with Login.gov" button.',
      },
      {
        title: 'Create a Login.gov account',
        content: 'Enter your email, create a strong password (at least 12 characters, with letters and numbers), and agree to the terms. Login.gov sends a verification email — open it and click the blue link to confirm.',
      },
      {
        title: 'Set up two-step verification',
        content: 'Login.gov requires a backup method in case you forget your password. The easiest option for most people is "Text or voice message" to your phone. Enter your phone number and type in the 6-digit code they text you.',
      },
      {
        title: 'Verify your identity',
        content: 'Answer questions about your past — addresses you have lived at, car loans you have had — based on credit records. This takes about 5 minutes. If you cannot answer them, you can verify by mail instead (takes 7 to 10 days).',
      },
      {
        title: 'Explore your dashboard',
        content: 'Once signed in, you will see your benefit amount, your earnings history, and options to download a benefit verification letter or change direct deposit. Take your time clicking around — nothing will break.',
      },
      {
        title: 'Ask someone you trust if something feels off',
        content: 'Any time a website, phone call, or email about Social Security asks for money, gift cards, or your full SSN out of the blue — stop. Call the official SSA number at 1-800-772-1213 or ask a family member before doing anything.',
      },
    ],
    sourceName: 'SSA.gov — Create an Account',
    sourceUrl: 'https://www.ssa.gov/myaccount/',
  },

  {
    slug: `investment-scams-social-media-2`,
    title: 'How to Spot Investment Scams on Social Media',
    excerpt: 'Learn the warning signs of fake investment schemes on Facebook, Instagram, and messaging apps — and how to report them.',
    category: 'safety-guides',
    tags: ['scam', 'investment', 'social media', 'fraud'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Investment scams on social media have become one of the most common ways Americans lose money. The Federal Trade Commission reported that in 2024 alone, people lost over $5 billion to investment scams, many of which started on Facebook, Instagram, WhatsApp, or Telegram. These are not rare — they are run by organized groups who contact hundreds of people a day.

The scam almost always follows the same pattern. A friendly stranger or someone pretending to be a celebrity sends you a message. They chat with you for days or weeks about normal things — the weather, your family, your health. Then they casually mention how they made a lot of money on a special investment, often in cryptocurrency, gold, or foreign stocks. They offer to help you do the same. The website looks professional. Your first small "deposit" appears to grow quickly. When you try to take the money out, there is always a fee — a tax, an upgrade, a withdrawal charge. You send the fee. Then another. Eventually the website disappears with all of it.

Warning signs are consistent. Real investment advisors do not message strangers on Facebook. They do not promise high returns with no risk. They do not pressure you to act fast. They do not ask to be paid in cryptocurrency, gift cards, or wire transfers. Anyone who does any of these things is running a scam, even if they have a nice photo and a big smile.

Another red flag is being asked to download a special app to "see your portfolio grow." These apps are fake — they show made-up numbers to convince you the investment is real. Once the scammers have your money, the app stops working or they block you.

If you think you have been scammed or someone is trying, do not feel embarrassed — this happens to smart people every day. Report it to the FTC at ReportFraud.ftc.gov, to the FBI at IC3.gov, and to your state attorney general's office. If money was sent from your bank, call the bank's fraud line immediately — some transfers can be reversed if caught fast enough.`,
    steps: [
      {
        title: 'Be suspicious of unsolicited messages about money',
        content: 'If a stranger, old classmate you barely remember, or someone claiming to be a celebrity sends you a message that eventually mentions an investment opportunity, treat it as a scam. Do not reply. Do not click their links. Block and delete.',
      },
      {
        title: 'Never trust guaranteed or quick returns',
        content: 'Promises like "10% a week," "double your money in 30 days," or "no risk" are always lies. Real investments go up and down. Anyone guaranteeing profit is either breaking the law or stealing.',
      },
      {
        title: 'Do not send crypto, gift cards, or wire transfers',
        content: 'Scammers always want payment methods that cannot be undone. A real US investment firm will accept a check or bank transfer from a licensed broker. If they only accept Bitcoin or Zelle or gift cards, it is a scam — full stop.',
      },
      {
        title: 'Verify any "advisor" on BrokerCheck',
        content: 'Before sending any money anywhere, go to brokercheck.finra.org and type the advisor\'s name. Real US-licensed advisors appear here. If they are not listed, they cannot legally give investment advice in the United States.',
      },
      {
        title: 'Talk to a trusted family member or banker',
        content: 'Before sending any money based on a new online friend\'s advice, tell one other person you trust — a grown child, a pastor, your own bank\'s branch manager. Scammers pressure people not to tell anyone. That pressure itself is a warning sign.',
      },
      {
        title: 'Report it — even if you did not lose money',
        content: 'File reports at ReportFraud.ftc.gov (FTC), IC3.gov (FBI Internet Crime Complaint Center), and your state attorney general\'s office. These reports help investigators shut scams down and warn other victims.',
      },
    ],
    sourceName: 'FTC Consumer Advice — Investment Scams',
    sourceUrl: 'https://consumer.ftc.gov/articles/what-know-about-investment-scams',
  },

  {
    slug: `smart-tv-first-setup-guide`,
    title: 'How to Set Up a Smart TV Step by Step',
    excerpt: 'From unboxing to streaming your first show, here is how to connect a new smart TV to Wi-Fi and your apps.',
    category: 'entertainment',
    tags: ['smart tv', 'setup', 'streaming'],
    readTime: '10 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A smart TV is a television that can connect to the internet so you can watch Netflix, Hulu, YouTube, and other streaming apps without a separate box. You buy the TV, plug it in, connect it to your home Wi-Fi, sign in to the apps you want, and that is it. No cable box needed.

The most popular brands in the US are Samsung, LG, Sony, TCL, Hisense, Vizio, and Amazon Fire TVs. They all set up in about the same way, and the setup takes 30 to 45 minutes if you have your Wi-Fi password and your streaming service passwords handy.

Before you start, put the TV where you want it permanently and make sure the power cord reaches the outlet. Open the box carefully — the TV is heavy and the screen is fragile, so have someone else help you lift it. Do not touch the screen with your fingers; a soft dry cloth is the only thing that should touch it.

You will need a few things: your Wi-Fi network name and password, the passwords for any streaming services you subscribe to (like Netflix or Prime Video), and the remote that came with the TV. Make sure the remote has fresh batteries — they usually come in the box separately.

Most smart TVs also want you to create or sign in to a free account with the TV maker (Samsung, LG, etc.) during setup. This is optional for most features. If you want to skip it, look for a "Skip" or "Maybe later" button. You can always add the account later under Settings.`,
    steps: [
      {
        title: 'Plug in the TV and turn it on',
        content: 'Plug the power cord into the wall. Put batteries in the remote. Press the red Power button on the remote or the small button on the back or bottom of the TV. A welcome screen appears in about 10 seconds.',
      },
      {
        title: 'Pick your language and country',
        content: 'Use the up, down, and OK buttons on the remote to highlight English and United States. Press OK to confirm each one.',
      },
      {
        title: 'Connect to your home Wi-Fi',
        content: 'The TV scans for Wi-Fi networks and shows a list. Use the arrow buttons to highlight your home network, press OK, then type your Wi-Fi password using the on-screen keyboard. Passwords are case-sensitive.',
      },
      {
        title: 'Accept the terms and sign in (or skip)',
        content: 'The TV asks you to agree to the manufacturer\'s terms. Scroll down and select Agree. If asked to create or sign in to a Samsung, LG, or Google account, pick Skip if you want to come back to this later.',
      },
      {
        title: 'Let the TV update itself',
        content: 'Most new TVs install a software update as soon as they get online. This takes 10 to 20 minutes. The screen may go black a couple of times — that is normal. Do not unplug the TV during the update.',
      },
      {
        title: 'Install your streaming apps',
        content: 'After setup finishes, press the Home button on the remote. Look for an App Store (or "Apps," "Smart Hub," or "Play Store"). Search for Netflix, YouTube, Amazon Prime Video, Hulu, or whatever you use. Tap Install for each.',
      },
      {
        title: 'Sign in to your streaming accounts',
        content: 'Open each app for the first time. It will show a code on screen and ask you to visit a website (like netflix.com/tv8) on your phone or computer to type the code. This avoids having to type a long email and password with the TV remote.',
      },
      {
        title: 'Set a simple home screen',
        content: 'On the Home screen, most TVs let you rearrange the app icons so your most-used app (say, Netflix or YouTube) sits first. This makes everyday use much easier — one click to the app you watch most.',
      },
    ],
    sourceName: 'How-To Geek — How to Set Up a Smart TV',
    sourceUrl: 'https://www.howtogeek.com/how-to-set-up-your-new-smart-tv/',
  },

  {
    slug: 'manage-prescriptions-app',
    title: 'How to Manage Prescriptions With a Pharmacy App',
    excerpt: 'How the CVS, Walgreens, and Walmart pharmacy apps help you refill medications, see your history, and get reminders.',
    category: 'health-tech',
    tags: ['prescriptions', 'pharmacy', 'medications', 'health'],
    readTime: '9 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A pharmacy app is a free program on your phone that connects to your pharmacy account so you can refill prescriptions, see your medication list, get reminders when it is time to take a pill, and ask the pharmacist a question — all without driving to the store or waiting on hold.

The three most common pharmacy apps in the US are CVS Pharmacy, Walgreens, and Walmart. They work the same way: you download the app, sign in with the account you already have (or create a new one using your phone number and date of birth), and the app pulls up your prescription history. If you do not have an online account yet, most pharmacies can set it up in a few minutes by phone or at the counter.

Refilling a prescription through the app is the most popular feature. Instead of calling the pharmacy, you tap Refill, pick which medicine, choose whether to pick it up or have it mailed, and confirm. The app texts you when it is ready — usually within a few hours. Most insurance works the same way it does at the counter.

Another helpful feature is the medication reminder. You can set the app to buzz or chime at 8 AM and 8 PM (or whenever) to remind you to take a pill. This is especially useful if you take several medications at different times of day. The app can also show you a photo of each pill so you know you have the right one.

Be careful about giving the app permission to access your location and notifications. These permissions are useful (for store hours and refill alerts), but always look at what you are agreeing to. Never type your full Social Security number into a pharmacy app — they do not need it. Your account is tied to your name, date of birth, and the phone number on file at the pharmacy.`,
    steps: [
      {
        title: 'Download the right app for your pharmacy',
        content: 'Open the App Store (iPhone) or Play Store (Android). Search for your pharmacy: "CVS Pharmacy," "Walgreens," or "Walmart." Tap Get or Install on the official app (made by the company itself, not a third party).',
      },
      {
        title: 'Sign in or create an account',
        content: 'Open the app and tap Sign In if you already have an account. Otherwise tap Create Account and enter your name, date of birth, phone number, and email. The app may text you a code to confirm the phone number.',
      },
      {
        title: 'Link your prescriptions',
        content: 'The app asks for your pharmacy account number, the phone number on file, or a recent prescription number from a label. Enter what you have. The app pulls up every prescription tied to your account.',
      },
      {
        title: 'Set up refill reminders',
        content: 'Tap on any medication in your list, then tap "Set up Auto Refill" or "Remind Me." The app will alert you a few days before you run out and offer a one-tap refill.',
      },
      {
        title: 'Refill a prescription',
        content: 'From the home screen, tap Refill Prescription. Select the medicine, choose Pickup or Mail Delivery, confirm your insurance, and tap Submit. You get a text or notification when it is ready.',
      },
      {
        title: 'Talk to the pharmacist inside the app',
        content: 'Most pharmacy apps have a Chat with Pharmacist or Ask a Pharmacist button. This is a text message to a real pharmacist. Questions like "Can I take this with ibuprofen?" usually get an answer within an hour during store hours.',
      },
      {
        title: 'Ask someone you trust to review it with you',
        content: 'Medication is serious business. After setting up the app, ask a grown child, a caregiver, or your pharmacist to look at your medication list on the app together with you — to make sure everything you take is listed correctly.',
      },
    ],
    sourceName: 'MedlinePlus — Managing Your Medications',
    sourceUrl: 'https://medlineplus.gov/managingyourmedications.html',
  },

  {
    slug: `mychart-patient-portal-guide`,
    title: 'How to Use MyChart to Talk to Your Doctor Online',
    excerpt: 'How to sign up for MyChart, message your doctor, see test results, and request prescription refills from home.',
    category: 'health-tech',
    tags: ['mychart', 'patient portal', 'medical records'],
    readTime: '10 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `MyChart is the online patient portal used by many hospitals and doctors' offices in the United States. It is where you can message your doctor with a question, see the results of blood tests, request a prescription refill, book appointments, and read your after-visit summary — all from your phone or computer.

MyChart is made by a company called Epic, but you do not sign up at Epic's website. Instead, your specific clinic or hospital system (like UCLA Health, Cleveland Clinic, or your local hospital) has its own version of MyChart. You sign up through their website. The app on your phone, however, is the same for every system — you search for "MyChart" in the app store, install it, and then pick your healthcare organization from a list.

The first time you sign up, you will need either an activation code from your doctor's office (printed on a recent visit summary or at the front desk) or a way to prove your identity by matching personal information already on file. Once you are in, you can link multiple providers — so if you see a cardiologist at one hospital and a family doctor at another, both may appear in the same MyChart app.

Sending a message to your doctor is one of the most useful features. Instead of waiting on hold, you type your question — "Can I stop taking the aspirin now?" — and the office gets back to you, usually within 1 to 2 business days. For urgent questions, always call the office directly — MyChart messages are not for emergencies.

Lab results show up as soon as they are ready, often before your doctor calls you. Numbers in red mean "out of normal range." That does not always mean something is wrong — some things are flagged that your doctor does not care about. If you see a red number that worries you, send a MyChart message asking what it means rather than searching Google, which can be scary and often wrong.`,
    steps: [
      {
        title: 'Ask your doctor\'s office for a MyChart activation code',
        content: 'At your next visit, or by phone, tell the front desk: "I\'d like to sign up for MyChart." They will give you an activation code on paper or by email. Write it down — it usually expires in 30 to 60 days.',
      },
      {
        title: 'Download the MyChart app',
        content: 'In the App Store or Play Store, search for "MyChart" (published by Epic Systems). Tap Get or Install. Open the app and it will ask for the name of your healthcare organization — type your clinic or hospital\'s name.',
      },
      {
        title: 'Create your account with the activation code',
        content: 'Tap Sign Up Now. Type in the activation code, your date of birth, and the last 4 digits of your Social Security number (which matches what is on file). Create a username and password. Write the password down somewhere safe.',
      },
      {
        title: 'Set up the security questions',
        content: 'MyChart asks for a security question, like the name of your first pet, in case you forget your password. Pick answers you will remember. The app may also ask if you want to use Face ID or fingerprint for faster sign-in — say yes if you are comfortable with that.',
      },
      {
        title: 'Send your first message',
        content: 'From the home screen, tap the Messages icon, then Ask a Question, then Medical Question. Pick your doctor from the list, type your question in plain language, and tap Send. Expect a reply in 1 to 2 business days.',
      },
      {
        title: 'View your test results',
        content: 'From the home screen, tap Test Results. Results are listed with the most recent on top. Tap any test to see the numbers. Red numbers are outside the normal range — send a message if you want your doctor to explain.',
      },
      {
        title: 'Request a prescription refill',
        content: 'Tap Medications on the home screen. Find the medicine you need refilled and tap Request Refill. Confirm which pharmacy to send it to. Your doctor reviews the request and approves it, usually within 1 to 3 business days.',
      },
      {
        title: 'Ask someone you trust for help the first time',
        content: 'The first time you sign into MyChart, sit with a trusted family member or caregiver and walk through it together. They can help make sure your contact info, pharmacy, and emergency contacts are all right.',
      },
    ],
    sourceName: 'MyChart by Epic — Help & Support',
    sourceUrl: 'https://www.mychart.com/',
  },

  {
    slug: `bluetooth-headphones-connection-guide`,
    title: 'How to Connect Bluetooth Headphones to Your Phone',
    excerpt: 'A simple walkthrough of pairing wireless headphones or earbuds with your iPhone or Android phone the first time.',
    category: 'essential-skills',
    tags: ['bluetooth', 'headphones', 'earbuds', 'pairing'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Bluetooth is a way for two devices — like your phone and a pair of headphones — to talk to each other through the air, without any cable. Once you set up (or "pair") the headphones with your phone the first time, they will reconnect on their own every time you turn them on after that. You only do the pairing dance once.

Any pair of wireless headphones or earbuds works the same way: Apple AirPods, Bose, Sony, Beats, the little no-name earbuds from Amazon — all of them use Bluetooth. They each have a button or a specific way of turning on "pairing mode," which tells the headphones "be ready for a new phone to find me."

The steps are almost the same on every phone. You turn on Bluetooth in the phone's settings, put the headphones into pairing mode, and tap the name of the headphones when it pops up in the list on your phone. A confirmation beeps in your ear and you are connected.

Pairing mode is where people get stuck. On most earbuds, you open the charging case and hold down a small button on the case for about 5 seconds until a light flashes. On over-the-ear headphones, you usually hold the power button for 5 to 10 seconds past when they turn on — until you hear "pairing" or see a rapid blinking light. Check the little paper card that came in the box for the exact move.

Common pitfall: if your headphones were already paired to another phone or tablet (say, an old iPad), they will try to reconnect to that old device instead of your new phone. Solve this by either turning off Bluetooth on the old device or by doing a full reset on the headphones (the manual explains how).`,
    steps: [
      {
        title: 'Charge your headphones first',
        content: 'Plug in the charging case or the headphones themselves and let them charge for at least 15 minutes before pairing. Low-battery headphones are a common reason pairing fails.',
      },
      {
        title: 'On iPhone: open Settings > Bluetooth',
        content: 'Tap the gray Settings icon on your home screen. Tap Bluetooth near the top. Make sure the green switch is on (slid to the right). Leave this screen open — the headphones will appear here in a moment.',
      },
      {
        title: 'On Android: pull down and long-press Bluetooth',
        content: 'Swipe down from the top of the screen to open Quick Settings. Find the Bluetooth icon (a squiggly letter B). Press and hold it for 2 seconds until the Bluetooth settings page opens with a list of devices.',
      },
      {
        title: 'Put the headphones into pairing mode',
        content: 'Open the charging case (for earbuds) or turn the headphones on (for over-ear). Hold down the pairing button — on AirPods, the small round button on the back of the case — for about 5 seconds. A light should blink white or blue.',
      },
      {
        title: 'Tap the headphones in your phone\'s list',
        content: 'On the Bluetooth screen, wait a few seconds. Your headphones will appear in the list by name (like "AirPods Pro" or "Bose QC45"). Tap that name. The phone will confirm "Connected" after a moment.',
      },
      {
        title: 'Test with a song or video',
        content: 'Play any music or a YouTube video. Sound should come from the headphones instead of the phone speaker. If sound is still from the speaker, tap the AirPlay icon on the music player and pick your headphones.',
      },
      {
        title: 'Reconnect next time with no effort',
        content: 'To use them again later, put the headphones on (or open the earbud case) while near your phone. They reconnect automatically within a few seconds. You only pair once — after that, it is automatic.',
      },
    ],
    sourceName: 'Apple Support — Pair Bluetooth accessories with iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/pair-a-bluetooth-accessory-iph3c50f191e/ios',
  },

  {
    slug: `better-phone-photos-guide`,
    title: 'How to Take Better Photos With Your Phone',
    excerpt: 'Simple, senior-friendly photo tips — lighting, framing, and a few built-in features that make every picture look nicer.',
    category: 'tips-tricks',
    tags: ['photos', 'camera', 'iphone', 'android'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `You do not need an expensive camera to take nice photos. The phone in your pocket can take pictures that look as good as what a professional camera took ten years ago — if you pay attention to a few simple things. The biggest differences between a snapshot and a picture your grandkids will want printed are light, steadiness, and taking a moment to frame the shot.

Light is the single most important thing. A face lit by a window in the morning looks soft and flattering. A face lit by a bright overhead light looks harsh. Try to put the sun or window behind you as the photographer — not behind the person you are photographing, which makes them a dark silhouette. Outdoors on a cloudy day is the best light of all because clouds spread the sun into a giant softbox.

Steadiness is the second biggest thing. When you press the shutter, the phone is still recording for a split second. If you move, everything blurs. Hold the phone with both hands, brace your elbows against your body, breathe out, then press. Better yet, rest the phone on a table, a railing, or use a small tripod.

Framing is about what is in the picture. Before pressing the button, look at all four edges of the screen. Is there a trash can in the corner? A telephone pole growing out of your grandson's head? Move a step left or right to clean it up. The "rule of thirds" also helps: imagine a tic-tac-toe grid on the screen and put the important thing where two lines cross, not dead center.

A few built-in features make a huge difference. Portrait Mode (on newer iPhones and Androids) blurs the background behind a person, making them look like a professional portrait. Night Mode brightens dark rooms automatically. Live Photos (iPhone) and Motion Photos (Android) record a second or two of video, which you can later choose a better still frame from.`,
    steps: [
      {
        title: 'Clean the camera lens',
        content: 'Use a soft cloth — a T-shirt works — to wipe the small glass circle on the back of your phone. Oil from your fingers lives there and makes every picture look foggy. This 5-second step is the single biggest quick improvement.',
      },
      {
        title: 'Put the light behind you, not the subject',
        content: 'Stand so the window or sun is at your back, shining on the face of whoever you are photographing. If the sun is behind them, their face comes out dark. Outdoors on an overcast day is the most flattering light.',
      },
      {
        title: 'Tap the screen where you want to focus',
        content: 'Before taking the picture, tap on the person\'s face on the screen. A yellow square appears and the phone adjusts focus and brightness for that spot. The picture comes out much sharper.',
      },
      {
        title: 'Hold the phone with both hands and brace',
        content: 'Use both hands on the phone. Tuck your elbows against your ribs. Take a breath and let it out before pressing the shutter. If you can, lean against a wall or rest the phone on a table.',
      },
      {
        title: 'Try Portrait Mode for people and pets',
        content: 'In the Camera app, swipe across the bottom row of modes until you see Portrait. Point at a person or pet about 3 to 8 feet away. The background turns softly blurry — a professional look. Press the shutter.',
      },
      {
        title: 'Use the grid to frame your shot',
        content: 'Turn on the gridlines in your Camera settings (iPhone: Settings > Camera > Grid; Android: inside the Camera app\'s gear icon). Put your subject where the grid lines cross. Pictures look balanced instead of dead-center.',
      },
      {
        title: 'Take a few shots and pick the best later',
        content: 'Take 3 to 5 of the same scene, not just one. Little differences — a blink, a smile, a head turn — make a big difference in which picture you will love. Delete the rest in your Photos app.',
      },
    ],
    sourceName: 'Apple Support — Take photos with your iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/take-photos-iph3b0a3e8e7/ios',
  },

  {
    slug: `share-photos-text-email-guide`,
    title: 'How to Share Photos by Text Message or Email',
    excerpt: 'Send photos from your phone to family in a text, an email, or a shared album without headaches.',
    category: 'essential-skills',
    tags: ['photos', 'sharing', 'text message', 'email'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Sharing a photo from your phone is something you will do all the time — birthday pictures to the grandkids, a shot of a rash for your doctor, a photo of a broken appliance to a repair person. There are three main ways to send a photo: in a text message, as an email attachment, or by creating a shared album everyone in the family can add to and see.

On an iPhone or an Android phone, the sharing system is almost the same. You open the Photos app, tap the picture you want to share, then tap the Share button (a square with an arrow pointing up out of it). A menu of choices slides up: Messages, Mail, WhatsApp, Facebook, and so on. Pick where you want to send it, type the recipient, and tap Send.

Text messages are the fastest way for a single photo. You can attach up to about 10 photos per text, but if you send a giant batch, some phone carriers compress them, meaning the person receiving them sees smaller or fuzzier versions. For a single clear photo, text works great. For a family album, use a shared album instead.

Email is good for sending to someone whose phone number you do not have, or for sending many photos at once. Most email services have a limit of about 25 MB per message, which means around 10 to 20 photos depending on their size. If you try to send more, the email may fail or the service will offer to send a link to the pictures instead.

A shared album (Apple's iCloud Shared Album, or a Google Photos album) is the best option for ongoing family sharing. You set it up once and invite family members. Every time you add a picture, everyone sees it. Your daughter in Florida can also add her kids' photos. Nobody has to remember to forward anything.`,
    steps: [
      {
        title: 'Open the Photos app and find the picture',
        content: 'Tap the colorful Photos icon on your home screen (a white flower icon on iPhone, a colorful pinwheel on Android). Scroll through Recents or Library until you find the photo you want to share. Tap it to open it full-screen.',
      },
      {
        title: 'Tap the Share button',
        content: 'Look for the square icon with an arrow pointing up out of it. On iPhone it is in the bottom-left corner; on Android it is usually at the bottom or top-right. Tap it to open the sharing menu.',
      },
      {
        title: 'Select more than one photo if needed',
        content: 'Back on the main Photos screen, tap Select (top-right), then tap each photo you want to share. A blue checkmark appears on each. Then tap the Share button to send them all together.',
      },
      {
        title: 'Send as a text message',
        content: 'In the share menu, tap Messages (or the green speech-bubble icon). Type the person\'s name or phone number at the top. Add a short note like "Birthday!" in the text box. Tap the blue arrow to send.',
      },
      {
        title: 'Send as an email',
        content: 'In the share menu, tap Mail. Type the recipient\'s email address in the To line. Add a subject like "Trip photos." If asked what size to send, pick Medium or Large (Actual Size may be too big). Tap Send.',
      },
      {
        title: 'Create an iCloud or Google shared album',
        content: 'In Photos, tap the + button, then New Shared Album (iPhone) or Create Album then the person icon (Android). Name it something clear like "Family 2026." Invite family members by email or phone number. They tap the invite and join.',
      },
      {
        title: 'Add photos to the shared album anytime',
        content: 'Once the album exists, open any photo, tap Share, pick the shared album, and tap Post. Everyone you invited sees it right away. You only create the album once — after that, sharing is one or two taps.',
      },
    ],
    sourceName: 'Apple Support — Share photos and videos on iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/share-photos-and-videos-iph8d50c7050/ios',
  },

  {
    slug: `government-impersonation-scam-guide`,
    title: 'How to Spot a Government Imposter Scam',
    excerpt: 'Learn how scammers pretend to be from the IRS, Social Security, or Medicare — and exactly what to do when they call.',
    category: 'safety-guides',
    tags: ['scam', 'imposter', 'irs', 'social security', 'medicare'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A government imposter scam is when a stranger calls, emails, or texts pretending to be from the IRS, Social Security Administration, Medicare, the FBI, or another government agency. They try to scare or pressure you into sending money, paying a fine, or giving up personal information. These scams cost Americans more than $500 million in 2024 alone, according to the FTC.

The script almost always sounds the same. There is a problem — your Social Security number has been "suspended," you owe the IRS money, your Medicare card is about to be canceled. You are told to act fast. You are told not to hang up. You are told to pay with gift cards, cryptocurrency, or a wire transfer. The voice may sound official and even know some of your personal information, which feels convincing but is not.

Here is the truth that makes every one of these scams fall apart: the real US government will not do any of this. The IRS does not call demanding immediate payment. Social Security does not suspend numbers (Social Security numbers cannot be suspended). Medicare does not call to offer "free back braces" or ask you to confirm your number over the phone. These agencies mail you letters. If there is a real issue, you get paper in your mailbox first.

What scammers want most is money and your personal information. If they can get you to read the numbers off a gift card, they drain it in minutes. If they get your Social Security number and date of birth, they can open credit cards in your name. If they get remote access to your computer, they can empty your bank account while you watch.

The best defense is a simple rule: if a call demands urgency, money, or secrecy — it is a scam. Hang up. Do not press any buttons. Do not call them back at the number they gave you. If you are worried the call might actually be real, look up the agency's real phone number yourself (on the back of your Medicare card, or at ssa.gov, irs.gov, or medicare.gov) and call them directly.`,
    steps: [
      {
        title: 'Hang up right away',
        content: 'As soon as you realize the call is claiming to be from the government and asking for money or personal information, hang up. You do not have to be polite. Government scammers count on politeness.',
      },
      {
        title: 'Do not press 1 or any other number',
        content: 'If a robocall says "Press 1 to speak to an agent," do not press anything. Pressing a key tells the scammer your line is active and leads to more calls. Just hang up.',
      },
      {
        title: 'Never pay in gift cards, crypto, or wire transfer',
        content: 'No real US government agency will ever ask you to pay with Apple, Google Play, Amazon, or Target gift cards. No agency takes Bitcoin. No agency demands a wire transfer. If any of these are asked for — stop.',
      },
      {
        title: 'Verify by calling the real number yourself',
        content: 'If you are unsure a call was fake, look up the agency\'s real number: IRS at 1-800-829-1040, SSA at 1-800-772-1213, Medicare at 1-800-MEDICARE. Call that number and ask if there is a real issue. There almost never is.',
      },
      {
        title: 'Do not give out your Social Security or Medicare number',
        content: 'Never confirm, read aloud, or type in your Social Security number, Medicare number, bank account, or credit card based on an unexpected call. Treat your SSN like your house key — only people you already trust get it.',
      },
      {
        title: 'Tell a family member what happened',
        content: 'Even if you did not fall for it, call a grown child or trusted friend and describe the call. Scams come in waves — if one person in the family got called, others might too. Sharing the story warns everyone.',
      },
      {
        title: 'Report the scam to the FTC and IC3',
        content: 'File a report at ReportFraud.ftc.gov. If you lost money or sent anything, also file at IC3.gov (FBI Internet Crime Complaint Center). Reports help investigators shut down scam operations — they truly do make a difference.',
      },
    ],
    sourceName: 'FTC Consumer Advice — Government Imposter Scams',
    sourceUrl: 'https://consumer.ftc.gov/articles/government-imposter-scams',
  },

  {
    slug: `recovery-scam-warning-guide`,
    title: 'Recovery Scams: What to Know If You Were Scammed Before',
    excerpt: 'If you already lost money to a scam, beware the "recovery" scam — criminals who target past victims and promise to get the money back.',
    category: 'safety-guides',
    tags: ['scam', 'recovery scam', 'fraud'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `A recovery scam — sometimes called a "refund scam" or "asset recovery scam" — is a cruel trick where criminals contact people who have already lost money to a different scam and promise to get that money back. For a fee. Or for your bank account number. Or for help filling out paperwork they will then use to steal your identity.

Scammers keep lists of past victims and share them with each other. If you were scammed once, your name and number are often sold to other groups, who then call claiming to be from a "fraud recovery" firm, the FBI, a lawyer specializing in wire fraud, or even a "special government task force." They sound sympathetic. They tell you the scammers have been caught. They say you are owed a refund but there are fees to process it.

This is always a scam. There is no legitimate private company that can reliably recover money that was wired, sent in cryptocurrency, or put on gift cards. Law enforcement does not charge victims for returning recovered funds. The FTC, FBI, and state attorneys general never call demanding fees to release a refund. If anyone asks you to pay anything — even a small "processing fee" — to get scammed money back, they are trying to scam you a second time.

Real recovery, when it happens, is handled by banks and payment providers working with law enforcement, and it is free. Your own bank's fraud department is where to start. They know their own reversal windows (how long they have to claw back a transfer), and they will work directly with the other bank. If you sent a wire, you usually have a short window — sometimes just a few hours — to reverse it, which is why calling your bank quickly matters so much.

The emotional side of this is the hardest part. People who have been scammed often feel embarrassed and want to make it right. Scammers know this and use it. If you catch yourself thinking, "I just need to get my money back and nobody has to know," please talk to a family member, your bank, and law enforcement before doing anything else. Those are the people who can actually help — at no cost.`,
    steps: [
      {
        title: 'Recognize the recovery scam script',
        content: 'If someone contacts you and says, "We can get back the money you lost," especially if they mention a scam you already fell for, assume it is another scam. Real authorities do not cold-call victims with offers to recover funds for a fee.',
      },
      {
        title: 'Never pay a fee to "release" recovered money',
        content: 'Anyone asking for an upfront payment, tax, "unlocking fee," or membership charge to return money to you is a scammer. No exceptions. Real refunds are free of fees.',
      },
      {
        title: 'Call your own bank first if you were recently scammed',
        content: 'If you sent money in the last few days — wire, Zelle, or bank transfer — call the number on the back of your debit card right away. Ask for the fraud department. They may be able to reverse the transfer if caught quickly enough.',
      },
      {
        title: 'File a report at IC3.gov and ReportFraud.ftc.gov',
        content: 'Report the original scam at IC3.gov (FBI) and ReportFraud.ftc.gov (FTC). These are the only places a recovery would come from, and it would be through official channels — never a phone call demanding payment.',
      },
      {
        title: 'Check lawyers and services at your state bar',
        content: 'If you want to consult a real lawyer about recovery, find one through your state bar\'s lawyer referral service (search "[your state] bar referral"). Legitimate lawyers charge consultation fees but never promise guaranteed recovery.',
      },
      {
        title: 'Talk to a trusted family member before any payment',
        content: 'Scammers count on shame. Telling one family member — a grown child, a sibling, a close friend — before sending any money is the single best defense against a second scam. They see things clearly that you may not right now.',
      },
      {
        title: 'Report the recovery attempt too',
        content: 'Even if you did not pay, report the recovery scam call or email to ReportFraud.ftc.gov and IC3.gov. Every report helps investigators identify and shut down these operations.',
      },
    ],
    sourceName: 'FTC Consumer Advice — Lost money to a scam? Beware of "recovery" scams',
    sourceUrl: 'https://consumer.ftc.gov/articles/lost-money-scam-watch-out-refund-and-recovery-scams',
  },

  {
    slug: `google-meet-video-calls-guide`,
    title: 'How to Use Google Meet for Video Calls',
    excerpt: 'A straightforward guide to joining and starting video calls on Google Meet from your phone, tablet, or computer.',
    category: 'essential-skills',
    tags: ['google meet', 'video call', 'gmail'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Google Meet is Google's video call service. If you have a Gmail account, you already have Google Meet — there is nothing extra to sign up for. It works much like Zoom: someone sends you a link, you tap it, and you land in a video call with everyone else who was invited.

Google Meet is free for calls up to 60 minutes with up to 100 people. That covers almost every family call, book club, or small meeting you would ever have. Longer meetings or larger groups are possible with a paid Google Workspace plan, but the free version is more than enough for regular use.

You can use Google Meet from a web browser on a computer (no install needed) or from the Google Meet app on a phone or tablet. On an iPhone or Android phone, install the Google Meet app from the App Store or Play Store. On a computer, just go to meet.google.com in your browser.

The single most common question: "Do I need a Google account?" On a computer, you can usually join a meeting without signing in — the host may need to admit you. On a phone, you do need to be signed into a Google account (Gmail) to join a Meet. If you do not already have one, creating a free Gmail account takes about 5 minutes.

The controls look the same on every device. A microphone icon at the bottom to mute and unmute. A camera icon to turn your video on and off. A red "leave call" phone icon to hang up. The chat box on the side lets you type messages during the call if you do not want to interrupt.`,
    steps: [
      {
        title: 'Install Google Meet on your phone (if needed)',
        content: 'Open the App Store (iPhone) or Play Store (Android). Search for "Google Meet." Tap Get or Install. The icon is a green video camera on a white background. Computer users can skip this step — browser works fine.',
      },
      {
        title: 'Tap the meeting link you were sent',
        content: 'In your email or text, look for a link that starts with "meet.google.com/" followed by random letters. Tap the link. The Meet app opens on your phone, or the meeting opens in your browser on a computer.',
      },
      {
        title: 'Sign in with your Google account',
        content: 'On a phone, you may be asked to pick which Google account to use. Tap your Gmail address. If you have no Google account, tap Create account and follow the steps — it takes about 5 minutes and is free.',
      },
      {
        title: 'Allow camera and microphone access',
        content: 'A small box will ask if Google Meet can use your camera and microphone. Tap Allow on both. Without these, nobody can see or hear you.',
      },
      {
        title: 'Tap the blue Join button',
        content: 'You will see a preview of yourself before joining. If you look good, tap the blue "Join now" button. Some meetings require the host to let you in — you will wait a few seconds until they tap Admit.',
      },
      {
        title: 'Mute and unmute as needed',
        content: 'At the bottom of the screen, the microphone icon turns white when you are unmuted and red when muted. Tap once to toggle. It is polite to mute yourself when not speaking, especially in large groups.',
      },
      {
        title: 'Leave the call when done',
        content: 'Tap the red phone icon in the middle of the bottom toolbar. The call ends for you only — the host and other attendees keep going. No one is notified in a dramatic way; you just disappear from their screens.',
      },
    ],
    sourceName: 'Google Meet Help — Start or join a video meeting',
    sourceUrl: 'https://support.google.com/meet/answer/9302870',
  },

  {
    slug: `siri-iphone-guide`,
    title: 'How to Use Siri on Your iPhone',
    excerpt: 'Ask Siri to call, text, set reminders, and answer questions hands-free — here is how to get started and what to say.',
    category: 'tips-tricks',
    tags: ['siri', 'iphone', 'voice assistant', 'apple'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Siri is Apple's voice assistant, built into every iPhone and iPad. You can ask Siri to call people, send text messages, set alarms and timers, check the weather, play music, find directions, and answer questions — all without tapping anything on the screen. This is especially helpful when your hands are full or when fine motor control is tricky.

You can wake Siri up two ways. The hands-free way is to say "Hey Siri" or (on newer iPhones) just "Siri" out loud, and wait for the little animated swirl to appear at the bottom of the screen. The hands-on way is to press and hold the side button on the right edge of the iPhone until Siri appears.

The first time you set up your iPhone, you are asked to train Siri by saying a few phrases so she recognizes your voice. If you skipped this, you can turn it on later in Settings > Siri & Search > Listen for "Hey Siri." Training takes about 2 minutes.

Siri works best with simple, direct commands. "Call Mary." "Set a timer for 10 minutes." "What's the weather tomorrow?" "Remind me to take my pills at 8 PM." Longer, complicated sentences sometimes confuse her. If Siri does not understand, the screen shows what she thought you said — you can correct it by tapping and fixing the text.

Siri can also read your text messages and emails out loud when you have a Bluetooth headset in or are connected to your car. This makes catching up on messages while driving safer and easier. Ask "Read my latest messages" and she reads them to you, then asks if you want to reply.`,
    steps: [
      {
        title: 'Turn on "Hey Siri" if it is off',
        content: 'Open the Settings app. Scroll down to Siri & Search. Tap "Listen for" and pick "Hey Siri" or "Siri." Go through the short training (say a few phrases when asked). This takes about 2 minutes.',
      },
      {
        title: 'Wake Siri up by voice',
        content: 'Say "Hey Siri" out loud. A glowing swirl appears at the bottom of the screen. When you see it, speak your request. Siri listens, processes, and responds with a spoken answer.',
      },
      {
        title: 'Wake Siri with the side button',
        content: 'If your room is noisy or you do not want to speak the wake word, press and hold the side button on the right edge of the iPhone for about 1 second. Siri appears the same way.',
      },
      {
        title: 'Make a hands-free call',
        content: 'Say "Hey Siri, call Bob." If you have more than one Bob in contacts, Siri asks which. Say "Mobile" or "Home." The call starts immediately. Say "Hey Siri, hang up" at the end.',
      },
      {
        title: 'Send a text message',
        content: 'Say "Hey Siri, text Sarah I\'m running 10 minutes late." Siri shows the message, reads it back, and asks "Ready to send it?" Say Yes. If something is wrong, say "Change it" and she re-listens.',
      },
      {
        title: 'Set timers, alarms, and reminders',
        content: 'Say "Hey Siri, set a timer for 25 minutes" or "Set an alarm for 7 AM tomorrow" or "Remind me to take my heart pills at 8 PM every day." All three work without ever unlocking the phone.',
      },
      {
        title: 'Ask questions',
        content: 'Siri can answer "What\'s the weather today?" "What time does the pharmacy open?" "How many tablespoons in a cup?" and "Who was president in 1965?" She reads the answer out loud and shows details on screen.',
      },
    ],
    sourceName: 'Apple Support — Use Siri on your iPhone',
    sourceUrl: 'https://support.apple.com/guide/iphone/use-siri-iph3d3eb845c/ios',
  },

  {
    slug: `google-assistant-basics-guide`,
    title: 'How to Use Google Assistant on Your Phone',
    excerpt: 'Ask Google Assistant questions, set timers, make calls, and get directions hands-free on any Android or iPhone.',
    category: 'tips-tricks',
    tags: ['google assistant', 'android', 'voice assistant'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Google Assistant is Google's voice helper, the counterpart to Apple's Siri and Amazon's Alexa. It comes built into most Android phones, and you can also install it on an iPhone from the App Store. You wake it up by saying "Hey Google" or "OK Google" or by pressing and holding the home button on older Android phones.

Google Assistant is especially good at answering questions, because it is tied directly into Google's search. Ask "How tall is Mount Everest?" and you get an instant answer read aloud. Ask "What's the traffic like to Costco?" and it tells you how long the drive will take right now. Ask "What movies are playing near me?" and it reads the list for you.

To use Google Assistant hands-free, you need to train it to recognize your voice. This takes about 2 minutes. You open the Google app, tap your picture in the top-right corner, go to Settings > Google Assistant > Hey Google & Voice Match, and say a few phrases when prompted. After that, just saying "Hey Google" wakes it up.

Like Siri, Google Assistant works best with simple, direct commands. "Call Jim." "Navigate to Walmart." "Set a timer for 20 minutes." "What's the weather this weekend?" You can string two things together — "Set a timer for 10 minutes and remind me to check the laundry" — but it is more reliable to give one command at a time.

One extra thing Google Assistant does particularly well: it can read your screen out loud. If you are on a news article and say "Hey Google, read it" — Google Assistant reads the whole page out loud. This is great for rest or for people with low vision.`,
    steps: [
      {
        title: 'Install Google Assistant on iPhone (skip on Android)',
        content: 'If you are on Android, Google Assistant is already there — move on. On iPhone, open the App Store, search for "Google Assistant," and tap Get to install.',
      },
      {
        title: 'Set up Voice Match',
        content: 'Open the Google app. Tap your profile picture in the top-right. Tap Settings > Google Assistant > Hey Google & Voice Match. Turn on Hey Google and follow the prompts to say a few training phrases.',
      },
      {
        title: 'Wake the Assistant',
        content: 'Say "Hey Google" or "OK Google" out loud. A row of colorful dots appears at the bottom of your screen. Speak your request once you see them.',
      },
      {
        title: 'Wake it by pressing a button',
        content: 'If your voice is hoarse or the room is loud, press and hold the home button (on older Androids) or swipe from the bottom-left corner of the screen (on newer Androids). On iPhone, tap the Assistant app icon.',
      },
      {
        title: 'Make a hands-free call',
        content: 'Say "Hey Google, call Mom." If you have multiple people named Mom, the Assistant will ask which. Say the correct one. The call starts. Say "Hang up" at the end.',
      },
      {
        title: 'Set reminders that actually remind you',
        content: 'Say "Hey Google, remind me to take my blood pressure medicine at 7 AM every day." The Assistant confirms it and sets a recurring notification. You can review and edit reminders in the Google app under You > Reminders.',
      },
      {
        title: 'Ask it to read a webpage',
        content: 'While on a news article or email, say "Hey Google, read it." The Assistant reads the full page out loud in a natural voice. You can also say "Read faster," "Pause," or "Stop" anytime.',
      },
    ],
    sourceName: 'Google Assistant Help — Get started',
    sourceUrl: 'https://support.google.com/assistant/answer/7172657',
  },

  {
    slug: `iphone-to-tv-connection-guide`,
    title: 'How to Connect Your iPhone to a TV',
    excerpt: 'Show photos, videos, or FaceTime calls from your iPhone on a big TV screen using AirPlay or a simple cable.',
    category: 'tips-tricks',
    tags: ['iphone', 'airplay', 'tv', 'screen mirroring'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Putting whatever is on your iPhone onto a big TV is one of the nicest ways to share photos with family, watch a video with grandkids from the couch, or show off vacation pictures without passing the phone around. There are two ways to do it: wirelessly with AirPlay, or physically with a cable.

AirPlay is Apple's wireless system. Most smart TVs sold in the last few years — including many Samsung, LG, Sony, Vizio, and Roku models — have AirPlay built in. If you have an Apple TV box, it has AirPlay too. Your iPhone and the TV just need to be on the same Wi-Fi network. Then you swipe down from the top-right corner of your iPhone, tap Screen Mirroring, pick the TV from the list, and your iPhone appears on the big screen.

If your TV does not have AirPlay, a cable is the most reliable backup. Apple sells an adapter called the Lightning Digital AV Adapter (about $50) or, for newer iPhones with USB-C ports, a USB-C to HDMI adapter. You plug the adapter into the iPhone, plug an HDMI cable from the adapter into the TV, switch the TV to that HDMI input, and you are up and running.

AirPlay is better for showing a few things and walking around the room. A cable is better for a long movie or when the Wi-Fi is spotty. The picture quality is the same either way.

One common hiccup with AirPlay: if your iPhone cannot see the TV, make sure both devices are on the same Wi-Fi network (some homes have two networks — a main one and a guest one — and they cannot talk to each other). Also make sure the TV is turned on and on the Home screen (some TVs only appear for AirPlay when on the main screen, not when watching cable).`,
    steps: [
      {
        title: 'Check that your TV supports AirPlay',
        content: 'Turn on the TV and press the Home or Settings button on the remote. Look for a menu called "AirPlay," "Apple AirPlay," or "AirPlay & HomeKit." If you find it, you are good. If not, you will need a cable — see step 5.',
      },
      {
        title: 'Put both iPhone and TV on the same Wi-Fi',
        content: 'On the iPhone, open Settings > Wi-Fi and note the network name. On the TV, go to its Network settings and confirm it is on the same network. If they are on different networks, AirPlay will not work.',
      },
      {
        title: 'Open Control Center on the iPhone',
        content: 'Swipe down from the top-right corner of the iPhone screen (on iPhones without a home button) or swipe up from the bottom of the screen (on iPhones with a home button). This is Control Center.',
      },
      {
        title: 'Tap Screen Mirroring and pick the TV',
        content: 'In Control Center, find the icon of two overlapping rectangles labeled Screen Mirroring. Tap it. A list of available devices appears. Tap your TV\'s name. After a few seconds, the TV shows your iPhone screen.',
      },
      {
        title: 'Use a cable if AirPlay is not available',
        content: 'Buy an Apple Lightning Digital AV Adapter (for older iPhones) or a USB-C to HDMI adapter (for iPhone 15 and newer). Plug the adapter into the iPhone. Plug an HDMI cable from the adapter to any HDMI port on the TV.',
      },
      {
        title: 'Switch TV inputs',
        content: 'On the TV remote, press the Input or Source button. A list appears. Pick the HDMI number you plugged into (like HDMI 2). The iPhone screen should now show on the TV. The cable method does not need Wi-Fi.',
      },
      {
        title: 'Stop mirroring when done',
        content: 'When finished, open Control Center on the iPhone again, tap Screen Mirroring, and tap Stop Mirroring. If using a cable, simply unplug the adapter from the iPhone.',
      },
    ],
    sourceName: 'Apple Support — Use AirPlay to stream to an Apple TV or AirPlay-compatible smart TV',
    sourceUrl: 'https://support.apple.com/guide/iphone/use-airplay-to-stream-video-or-mirror-iph3e2e91a1/ios',
  },

  {
    slug: `apple-pay-setup-guide`,
    title: 'How to Set Up and Use Apple Pay',
    excerpt: 'Pay safely with your iPhone or Apple Watch by holding it near a card reader — here is how to set up Apple Pay and use it.',
    category: 'financial-tech',
    tags: ['apple pay', 'payment', 'iphone', 'wallet'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Apple Pay is a way to pay at the store or online by holding your iPhone (or Apple Watch) near the card reader instead of pulling out a plastic card. It works anywhere you see the contactless-payment symbol — four curved lines, like a Wi-Fi icon turned on its side — which is now at nearly every US grocery store, pharmacy, gas pump, and restaurant.

Apple Pay is more secure than your physical credit card. When you pay, Apple sends a one-time code to the store instead of your real card number. Even if the store is hacked later, your actual card number is not exposed. You also confirm each payment by looking at your iPhone (Face ID) or double-tapping the side button (Apple Watch), so a thief cannot just tap your phone to pay.

Setting up takes about 5 minutes and is free — Apple Pay does not charge you to use it, and your normal credit card rewards and cashback still apply exactly the same. You add your existing cards from your wallet to an app called Wallet on the iPhone. You can add multiple cards and pick which one to use each time.

Paying is where Apple Pay really shines. At the register, when the cashier says "total is $24.17," you hold your iPhone near the card reader and glance at it to confirm with Face ID (or double-click the side button on an Apple Watch). You hear a little chime and see a green checkmark. That is it — the whole transaction takes about 2 seconds.

Apple Pay is accepted almost everywhere in the US. If you walk up to a register and do not see the contactless symbol, just use your regular card that time. You can tell the cashier "I was going to use Apple Pay" and they will usually point out the right reader. Target, Walmart (finally), Costco, CVS, Walgreens, McDonald's — all accept it.`,
    steps: [
      {
        title: 'Open the Wallet app',
        content: 'Find the Wallet app on your iPhone — the icon is a white rectangle with several colored cards peeking out. It is built in; no download needed. Tap to open.',
      },
      {
        title: 'Tap the plus sign to add a card',
        content: 'In the top-right corner of Wallet, tap the + (plus) button. Pick Debit or Credit Card. Tap Continue.',
      },
      {
        title: 'Scan or type your card',
        content: 'Hold your physical credit or debit card in front of the camera so the numbers fill the frame — the iPhone reads them automatically. Or tap Enter Card Details Manually and type the card number, expiration, and security code.',
      },
      {
        title: 'Verify the card with your bank',
        content: 'Your bank sends a verification code — usually by text message, sometimes by email or phone call. Type the code into the iPhone. After a few seconds, the card is added and ready to use.',
      },
      {
        title: 'Add multiple cards and pick a default',
        content: 'Repeat for any other cards you want to use. In Settings > Wallet & Apple Pay, tap Default Card and pick which one to use automatically when you double-click the side button.',
      },
      {
        title: 'Pay at a store',
        content: 'Look for the contactless symbol on the card reader. Double-click the side button on your iPhone (or single-click on home-button iPhones). Look at the iPhone for Face ID, then hold the top of the phone near the reader for about 1 second. A chime and a checkmark mean it worked.',
      },
      {
        title: 'Pay online or in apps',
        content: 'On many websites and apps, a black Apple Pay button appears at checkout. Tap it, confirm with Face ID or your passcode, and the order is complete. You never type your card number, billing address, or phone number.',
      },
      {
        title: 'Check your receipt',
        content: 'In Wallet, tap any card to see the last few transactions. This is a nice way to confirm charges are right. If something looks wrong, tap the transaction and then "Report an Issue" to start a dispute with the card issuer.',
      },
    ],
    sourceName: 'Apple Support — Set up Apple Pay',
    sourceUrl: 'https://support.apple.com/en-us/108398',
  },

  {
    slug: `zelle-safe-use-guide`,
    title: 'How to Use Zelle Safely to Send Money',
    excerpt: 'Zelle lets you send money from your bank to another US bank in minutes. Here is how to use it — and the one big rule for staying safe.',
    category: 'financial-tech',
    tags: ['zelle', 'money transfer', 'banking'],
    readTime: '9 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Zelle is a free service built into most US bank apps that lets you send money from your bank account to someone else's US bank account in about a minute. You only need their email address or mobile phone number. The money goes directly — no waiting days for a check to clear, no paying a fee.

Because Zelle is built right into your existing bank app (Bank of America, Chase, Wells Fargo, Capital One, and nearly 2,000 more), there is usually no extra app to download. You open your regular bank app, find the Zelle option (often under "Transfer" or "Send Money"), and follow the prompts. If your bank is small enough that it does not include Zelle, you can use the standalone Zelle app.

Here is the single most important rule about Zelle, and it is the rule that the federal Consumer Financial Protection Bureau (CFPB) warns every American about: only send Zelle money to people you personally know and trust. Unlike a credit card, Zelle transactions cannot be reversed. If you send $500 to a stranger expecting them to ship you something, and they never do, Zelle and your bank are usually not required to give the money back. It is like cash — gone once sent.

Zelle scams almost always come through two channels: someone pretending to sell you something on Facebook Marketplace or Craigslist asks for Zelle (never do this), or someone pretending to be your bank calls and tells you there is a fraud on your account and you need to "send yourself money through Zelle to a safe account" (also always a scam — real banks will never ask you to do this).

Used between people you know — your son for rent, your grandchild for a birthday, your contractor you have worked with before — Zelle is fast, free, and convenient. Treat it exactly like handing someone cash: once it is out of your hand, you cannot get it back without their cooperation.`,
    steps: [
      {
        title: 'Open your bank\'s app and find Zelle',
        content: 'Open the regular app for your bank. Look for a section called Transfers, Send Money, or Zelle. Tap it. If you do not see it, your bank may call it "Send Money with Zelle" or it may be under Pay & Transfer.',
      },
      {
        title: 'Enroll your email or phone number',
        content: 'The first time, Zelle asks which email or phone number you want attached. Your bank sends a code to verify it is really you. Type the code in. Only one email or phone can be registered per Zelle at a time.',
      },
      {
        title: 'Add the person you want to send to',
        content: 'Tap "Add Contact" or "Send." Type their name, then their email address or mobile phone number. The app confirms if they are already enrolled in Zelle. Double-check the spelling before continuing.',
      },
      {
        title: 'Enter the amount and a note',
        content: 'Type the dollar amount (for example, 50.00). Add a short memo like "rent April" or "Happy birthday!" so both of you remember what it was for. Tap Continue or Next.',
      },
      {
        title: 'Confirm — the payment cannot be undone',
        content: 'The app shows a final review screen. Check the name and amount very carefully. Once you tap Send, the money moves within a minute and cannot be reversed if you sent it to the wrong person.',
      },
      {
        title: 'Only send to people you already know',
        content: 'Never use Zelle to pay a stranger on Facebook Marketplace, Craigslist, OfferUp, or an online classified ad. Use a credit card or PayPal\'s "Goods and Services" option instead — those have fraud protection. Zelle does not.',
      },
      {
        title: 'Watch for the "fraud department" scam',
        content: 'If someone calls claiming to be from your bank and tells you to "send yourself money through Zelle to a safe account" to "protect" your money from fraud — hang up. Your bank will never ask you to do this. It is always a scam.',
      },
      {
        title: 'Check in with someone you trust before big transfers',
        content: 'For any Zelle payment over $500, or any time you feel rushed or confused, call a trusted family member or walk into your local bank branch first. A five-minute conversation can prevent a permanent loss.',
      },
    ],
    sourceName: 'CFPB — What is Zelle?',
    sourceUrl: 'https://www.consumerfinance.gov/ask-cfpb/what-is-zelle-en-2035/',
  },

  {
    slug: `delete-apps-iphone-android-guide`,
    title: 'How to Delete Apps on iPhone and Android',
    excerpt: 'Clean up your phone by removing apps you do not use — here is how to do it on iPhone and Android, safely.',
    category: 'tips-tricks',
    tags: ['apps', 'delete', 'iphone', 'android', 'storage'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-21',
    difficulty: 'Beginner',
    body: `Over time, most phones collect a lot of apps — some you opened once, some you forgot you had, some that came pre-installed. Deleting the ones you do not use has three benefits: your home screen gets tidier, your phone speeds up slightly, and you free up storage space for photos and things you actually care about.

The good news is that deleting an app does not lose your data permanently, in most cases. If the app stored information with your account (like Facebook posts, Gmail messages, or your Amazon order history), that stays safe on the company's servers. If you ever change your mind and install the app again, signing back in brings everything back. Only apps that stored things only on your phone — like certain notes apps or offline games — actually lose content when deleted.

There are a few apps you cannot delete because they are built into the phone: on iPhone, apps like Camera, Messages, and Phone cannot be removed. You can hide them in a folder, but not delete them. On Android, the pre-installed apps vary by phone maker; some can be disabled (hidden and stopped from running) even if not fully deleted.

Before deleting, if an app is tied to a subscription (like Netflix, a newspaper, or gym app), deleting the app does not cancel your subscription. You will keep getting charged. To stop the subscription, go to Settings > [your name] > Subscriptions on iPhone, or Play Store > your profile > Payments & subscriptions on Android, and cancel it there first.

If you ever delete an app by accident, do not worry. Go to the App Store or Play Store, search for the app, and tap a cloud icon (iPhone) or Install (Android). It comes back, usually with your login and data in place.`,
    steps: [
      {
        title: 'On iPhone: press and hold the app icon',
        content: 'On your home screen, put your finger on the icon of the app you want to remove and keep holding for about 1 second. A small menu pops up. Tap "Remove App" at the bottom.',
      },
      {
        title: 'On iPhone: tap Delete App to confirm',
        content: 'A second box appears asking whether to move to Library or Delete App. Tap Delete App. Then tap Delete one more time to confirm. The app is gone.',
      },
      {
        title: 'On Android: press and hold the app icon',
        content: 'Put your finger on the app icon and hold for 1 second. A small menu or a drag bar appears at the top. Drag the app up to the word Uninstall (or a trash can icon), or tap "Uninstall" in the menu.',
      },
      {
        title: 'On Android: confirm with OK',
        content: 'A box asks if you are sure. Tap OK or Uninstall. The app disappears from your home screen and is removed from your phone.',
      },
      {
        title: 'Cancel the subscription first if needed',
        content: 'Before deleting an app like Netflix, Apple Music, or a news app, cancel the subscription. On iPhone, go to Settings > your name > Subscriptions. On Android, open the Play Store, tap your photo, tap Payments & subscriptions > Subscriptions.',
      },
      {
        title: 'Reinstall anytime if you miss it',
        content: 'Open the App Store (iPhone) or Play Store (Android). Search for the app name. Tap the cloud icon with a downward arrow (iPhone) or the green Install button (Android). The app returns — usually already signed in.',
      },
    ],
    sourceName: 'Apple Support — Delete apps on your iPhone',
    sourceUrl: 'https://support.apple.com/en-us/108733',
  },
];
