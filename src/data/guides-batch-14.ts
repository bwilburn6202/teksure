// TekSure Guides Batch 14 — 25 guides: smart home, caregiver tech, financial apps,
// dark mode, Ring doorbell, Nest thermostat, CarPlay, Android Auto, Alexa reminders,
// Chromecast, Windows/iPhone screenshots, accessibility tools, GoodRx, Amazon Prime,
// Apple Watch, phishing (new angle), Gmail deep-dive, credit score, health app,
// Cash App, Google Home, notes app, email attachments, Venmo.
import type { Guide } from './guides';

export const guidesBatch14: Guide[] = [
  {
    slug: 'how-to-use-venmo-safely',
    title: 'How to Use Venmo to Pay Friends and Family — Safely',
    excerpt: `Venmo makes splitting bills and paying friends easy — here's how to set it up and stay safe while using it.`,
    category: 'financial-tech',
    tags: ['venmo', 'money transfer', 'payments', 'friends', 'bank', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '💵',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Venmo is a free app that lets you send money to friends and family using just their phone number or Venmo username. It's popular for splitting restaurant bills, paying a neighbor back, or chipping in for a gift. The key to using Venmo well is understanding both how it works and how to avoid the scams that target Venmo users.",
    steps: [
      {
        title: 'Download Venmo and connect your bank account',
        content: `Download the free Venmo app from the App Store (iPhone) or Google Play (Android). Open it and tap "Sign Up." Create an account with your email address and phone number. To send money, you'll need to connect a bank account or debit card: tap the three horizontal lines (menu), tap "Manage Balance," then "Add a bank or card." Add your bank account using your account and routing numbers, or link a debit or credit card.`,
        tip: 'Link a bank account or debit card rather than a credit card if possible — Venmo charges a fee (around 3%) when you use a credit card to send money.',
      },
      {
        title: 'Send money to someone',
        content: 'Tap the blue "Pay or Request" button. Search for the person by their name, username, phone number, or email — make sure you select the correct person before sending. Type the dollar amount. Add a short note explaining what the payment is for (like "Dinner Friday" or "Birthday card"). Choose "Pay" to send money. The money is deducted from your Venmo balance or linked bank account.',
        warning: 'Venmo payments are immediate and difficult to reverse. Always double-check that you have the right person selected before tapping "Pay." Scammers sometimes create accounts with names similar to people you know.',
      },
      {
        title: 'Set your transactions to private',
        content: 'By default, Venmo shows your payment activity (but not amounts) on a public social feed that anyone can see. To protect your privacy: in the Venmo app, tap the three lines → Settings → Privacy → change "Default privacy setting" to "Private." Also go back and change past transactions to private: tap "Past transactions" at the top and change the setting.',
        tip: 'The CFPB recommends not leaving large amounts of money sitting in Venmo. Transfer your Venmo balance to your bank account regularly: tap the three lines → Manage Balance → Transfer to Bank.',
      },
      {
        title: 'Know the scams that target Venmo users',
        content: `The most common Venmo scam: someone sends you money "accidentally" and asks you to send it back. You send the money back, then the original payment is reversed (it was made with a stolen account) and you've lost your own money. Another scam: someone on Facebook Marketplace or Craigslist asks for Venmo payment before you've received the item. Use Venmo only with people you know and trust in real life — not strangers from online listings.`,
      },
    ],
  },

  {
    slug: 'help-elderly-parent-with-technology',
    title: 'How to Help an Elderly Parent or Family Member With Technology',
    excerpt: "Helping a family member learn technology works better with patience and the right approach — here's what actually works and what to avoid.",
    category: 'essential-skills',
    tags: ['caregiver', 'seniors', 'family', 'technology help', 'teaching', 'patience'],
    readTime: '6 min',
    thumbnailEmoji: '👨‍👩‍👧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Helping an older parent or family member learn to use technology is one of the most meaningful things you can do for them — it connects them to family, gives them independence, and helps them stay safer. But it requires a different approach than teaching someone your own age. These techniques actually work.",
    steps: [
      {
        title: 'Slow down and focus on one skill at a time',
        content: 'The biggest mistake when teaching technology to older adults is going too fast and teaching too much at once. Pick one thing to focus on each session — sending a text, or making a FaceTime call, or finding a contact. When that feels natural, move to the next thing. Rushing to cover everything creates confusion that makes the whole experience feel discouraging.',
        tip: 'A good session is 20-30 minutes, focused on one task, ending on a success. More than 45 minutes tends to overwhelm rather than help.',
      },
      {
        title: 'Explain the "why" not just the "how"',
        content: `When showing someone how to do something, explain why each step is necessary. Instead of "tap here," say "we're tapping here because this opens the camera, and we need the camera to start the video call." Understanding the purpose behind each step helps it stick much better than just mimicking steps. If someone asks "why is this step necessary?" — that's a great sign; answer it fully.`,
      },
      {
        title: 'Let them drive — put the device in their hands',
        content: `It's tempting to take the phone and do it yourself when a family member gets stuck. Resist this. Say "I'll describe what to tap and you do the tapping." The physical act of doing it themselves is what builds the muscle memory. Let them make mistakes and recover — that's more valuable than a perfect walkthrough you did for them. After the session, ask them to try the same task without any help while you watch.`,
      },
      {
        title: 'Create a simple written reference card',
        content: `After each session, write down the three to five most important steps on a piece of paper in large, clear text — or print them from a computer. Tape it near the device. Examples: "To FaceTime Sarah: Open FaceTime app → Tap + → Type Sarah → Tap Video." Having physical reference cards means they don't need to remember everything or call you every time. Over time, these cards become less necessary as things become habit.`,
        tip: 'Guides at TekSure are designed to be printed. Every guide at teksure.com has a "Print this guide" button at the top. Print relevant guides and keep them in a folder near the computer or TV.',
      },
      {
        title: 'Connect technology to things they already care about',
        content: 'People learn faster when the purpose matters to them personally. If your parent loves cooking, teach them how to search YouTube for recipes. If they miss their grandchildren, make FaceTime the first skill they learn. If they worry about being scammed, start with the scam recognition guides. Starting with something they genuinely want to do makes every other lesson feel more worthwhile.',
      },
    ],
  },

  {
    slug: 'how-to-enable-dark-mode',
    title: 'How to Turn On Dark Mode on iPhone, Android, and Windows',
    excerpt: 'Dark mode changes bright white screens to dark backgrounds — easier on the eyes at night and helpful for people with light sensitivity.',
    category: 'tips-tricks',
    tags: ['dark mode', 'iphone', 'android', 'windows', 'display', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '🌙',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Dark mode switches your phone or computer's display from bright white backgrounds to dark backgrounds with light text. Many people find it much more comfortable to look at in the evening, in low-light rooms, or for people with light sensitivity or eye conditions. It can also extend battery life on phones with OLED screens.",
    steps: [
      {
        title: 'Turn on dark mode on iPhone',
        content: `Go to Settings → Display & Brightness. Under "Appearance," you'll see two options: Light and Dark. Tap "Dark" to turn on dark mode across your entire iPhone. All of Apple's built-in apps and most third-party apps will switch to dark mode immediately.`,
        tip: 'Scroll down to "Automatic" and turn it on to have your iPhone automatically switch to dark mode at sunset and back to light mode at sunrise. This is a popular option that most people find easy on their eyes.',
      },
      {
        title: 'Turn on dark mode on Android',
        content: 'Go to Settings → Display (the exact location varies by phone model). Look for "Dark mode," "Dark theme," or "Night mode." Tap it to toggle it on. On Samsung Galaxy phones: Settings → Display → Dark mode. On Google Pixel phones: Settings → Display → Dark theme. On most Android phones, you can also quickly toggle dark mode from the quick settings panel by swiping down twice from the top of the screen.',
      },
      {
        title: 'Turn on dark mode on Windows 11',
        content: `Click the Start button → Settings (gear icon) → Personalization → Colors. Under "Choose your mode," click the dropdown and select "Dark." Windows switches to a dark theme for all built-in apps and the taskbar immediately. Note: some third-party apps have their own light/dark settings that you'll need to change within the app itself.`,
      },
      {
        title: 'Turn on dark mode in specific apps',
        content: `Many apps have their own dark mode setting independent of your device's setting. In Gmail: tap the three horizontal lines → Settings → tap your email address → Theme → Dark. In Facebook: tap the three horizontal lines (menu) → Settings & Privacy → Settings → Dark Mode → On. In YouTube: tap your profile picture → Appearance → Dark theme.`,
        tip: 'If white backgrounds cause eye strain or headaches, also try "Night Shift" on iPhone (Settings → Display & Brightness → Night Shift) which reduces blue light in the evenings. Windows has a similar feature called "Night light" in Settings → Display.',
      },
    ],
  },

  {
    slug: 'ring-doorbell-setup',
    title: 'How to Set Up a Ring Video Doorbell',
    excerpt: `A Ring doorbell lets you see and talk to anyone at your door from your phone — even when you're not home. Here's how to install and set it up.`,
    category: 'smart-home',
    tags: ['ring', 'doorbell', 'home security', 'smart home', 'camera', 'setup'],
    readTime: '7 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: "A Ring video doorbell replaces your existing doorbell and adds a small camera and speaker. When someone rings the bell — or when motion is detected — your phone gets an alert. You can see who's there and talk to them through your phone, whether you're in another room or across the country. It's one of the most popular home security tools for people who live alone or travel.",
    steps: [
      {
        title: 'Download the Ring app and create an account',
        content: 'Download the free "Ring" app from the App Store or Google Play. Open it and tap "Create Account." Enter your email address and create a password. Confirm your email with the link Ring sends you. This app is the control center for your Ring device — it shows you live video, lets you talk through the doorbell, and manages all your settings.',
      },
      {
        title: 'Charge the battery (or hardwire the power)',
        content: `Most Ring video doorbells run on a rechargeable battery. Before installing, charge the battery fully using the included USB cable — this takes 5-10 hours. Some Ring models can also be connected to your existing doorbell wiring for continuous power (no battery recharging needed). Check your Ring model's instruction booklet or go to support.ring.com for wiring guides specific to your model.`,
        tip: `Plug your doorbell wiring type into Ring's website search to find installation videos for your specific model. Most battery-powered Rings are installed in under 15 minutes with a screwdriver.`,
      },
      {
        title: 'Mount the Ring doorbell outside your door',
        content: 'Ring comes with a mounting bracket, screws, and a screwdriver bit. Position the bracket next to your existing doorbell button (or wherever you want the camera). Use a pencil to mark the screw holes. Drill or screw the bracket into the door frame, wall, or existing doorbell location. Attach the Ring device to the bracket and secure it with the security screw (Ring provides a special screw to prevent theft). Replace your old doorbell button if the Ring includes a faceplate.',
      },
      {
        title: 'Set up the Ring in the app',
        content: `Open the Ring app and tap the plus (+) button to add a device. Tap "Doorbell." Follow the step-by-step setup guide in the app — it will ask you to scan a QR code on the back of the Ring, then connect it to your home WiFi network. The setup process takes about 5-10 minutes. You'll be able to see live video from the doorbell in the app when setup is complete.`,
      },
      {
        title: 'Adjust motion sensitivity and notification settings',
        content: `After setup, go to the device settings in the Ring app. Under "Motion Settings," adjust the sensitivity slider — start with "Medium" and adjust based on whether you're getting too many alerts from passing cars or not enough from actual visitors. Under "Motion Zones," you can draw a box on the camera view to tell Ring which area to watch. Turn on "Rich Notifications" to see a snapshot of who's at the door directly in your phone's notification.`,
        tip: 'If neighbors or pedestrians keep triggering your motion alerts, reduce the motion distance slider. Most people find keeping it to your driveway and front porch gives the best balance of useful alerts without false alarms.',
      },
    ],
  },

  {
    slug: 'google-nest-thermostat-setup',
    title: 'How to Set Up and Use a Google Nest Thermostat',
    excerpt: `A Nest thermostat learns your preferences and saves energy automatically — here's how to install it and control it from your phone.`,
    category: 'smart-home',
    tags: ['nest', 'thermostat', 'smart home', 'google', 'energy saving', 'heating'],
    readTime: '6 min',
    thumbnailEmoji: '🌡️',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: "A Google Nest thermostat replaces your existing wall thermostat and adds WiFi and learning capabilities. After a week of using it normally, the Nest learns your schedule and temperature preferences and starts adjusting automatically. You can also control the temperature from your phone from anywhere.",
    steps: [
      {
        title: 'Check compatibility and turn off power before installing',
        content: `Before buying a Nest thermostat, check if your heating and cooling system is compatible at nest.com/compatibility. Type in your wiring details and the site will tell you which Nest model works. IMPORTANT: Before touching any wiring, turn off the power to your thermostat at your home's breaker box. Find the breaker labeled "Heating," "HVAC," or "Furnace" and switch it off. Test that the thermostat has no power before proceeding.`,
        warning: 'Always turn off the circuit breaker before removing or touching thermostat wires. This is a 24-volt system — not as dangerous as household current, but touching live wires can damage the thermostat.',
      },
      {
        title: 'Remove your old thermostat and photograph the wiring',
        content: 'Remove the old thermostat from the wall. Before disconnecting any wires, take a clear photo of how the wires are connected — which wire is in which terminal (labeled with letters like R, Y, G, W, C). This photo is your reference when wiring the Nest. Remove each wire one at a time and label them with masking tape if you have it.',
      },
      {
        title: 'Mount the Nest base and connect wires',
        content: `Mount the Nest's metal base plate to the wall using the included screws and anchors. Connect each wire to the matching terminal on the Nest base — use your photo from the previous step. The Nest base has labeled holes that match your old thermostat's labels. Push each wire into the correct hole until it clicks. Snap the Nest display onto the base. Turn the breaker back on.`,
      },
      {
        title: 'Connect to WiFi and create a Google Home account',
        content: 'The Nest display will walk you through setup. Follow the on-screen instructions: choose your language, connect to your home WiFi network, and create or sign in to your Google account. Download the free "Google Home" app on your phone and sign in with the same Google account. Add your Nest thermostat in the Google Home app to control it from your phone.',
      },
      {
        title: 'Use the Nest from your phone or the thermostat display',
        content: `In the Google Home app, tap your Nest thermostat to see and control the temperature. Tap the + or - buttons to adjust. You can also set a schedule under "Schedules" — tell the Nest what temperatures you prefer at different times of day. The "Home/Away Assist" feature uses your phone's location to automatically lower heat or air conditioning when you leave home, saving energy automatically.`,
        tip: 'Most Nest thermostat owners report saving 10-15% on heating and cooling costs. The Nest app shows you energy savings in a monthly "Energy History" report.',
      },
    ],
  },

  {
    slug: 'apple-carplay-setup',
    title: 'How to Use Apple CarPlay in Your Car',
    excerpt: `Apple CarPlay shows your iPhone's maps, music, and messages on your car's screen — safer and easier than looking at your phone while driving.`,
    category: 'tips-tricks',
    tags: ['carplay', 'apple', 'car', 'navigation', 'driving', 'iphone'],
    readTime: '5 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apple CarPlay connects your iPhone to your car's built-in screen, showing your maps, music, and messages in a larger, easier-to-read format. You can use it with your voice or the car's touchscreen, keeping your eyes on the road. CarPlay is available in most cars made after 2016.",
    steps: [
      {
        title: 'Check if your car has CarPlay',
        content: `Most new cars and many cars from 2016 onward include CarPlay. Check your car's owner manual or look for the CarPlay logo on your car's infotainment screen. You can also check apple.com/ios/carplay — there's a searchable list of compatible vehicles. If your car doesn't have CarPlay built in, aftermarket head units (the car's screen unit) from Alpine, Pioneer, and Kenwood add CarPlay for $200-$500 installed.`,
      },
      {
        title: 'Connect your iPhone to CarPlay',
        content: `Wired: Plug your iPhone into the USB port in your car using the Lightning or USB-C cable that came with your iPhone. The CarPlay interface should appear on your car's screen automatically within 30 seconds. Wireless (newer cars and iPhones): Turn on WiFi and Bluetooth on your iPhone. Some cars automatically detect and connect wirelessly — look for a CarPlay option in your car's Bluetooth settings or on the infotainment screen.`,
        tip: `If CarPlay doesn't start automatically when you plug in, look for a CarPlay or Apple icon on your car's infotainment screen and tap it to start the connection.`,
      },
      {
        title: 'Navigate with Apple Maps or Google Maps on CarPlay',
        content: `Once CarPlay is running on your car's screen, tap the Maps icon to get directions. Type your destination using the car's touchscreen keyboard or say "Hey Siri, navigate to [destination]" — this is the hands-free method recommended while driving. Your car's screen will show the map while your iPhone's speaker (or car audio) gives turn-by-turn directions.`,
      },
      {
        title: 'Use CarPlay for calls and messages hands-free',
        content: `To make a phone call, tap the Phone icon on CarPlay and tap a contact, or say "Hey Siri, call Mom." The call plays through your car's speakers with your hands on the wheel. To listen to or reply to text messages, say "Hey Siri, read my messages" — Siri reads them and can send a spoken reply, all without touching your phone.`,
        tip: 'Using your voice through Siri is the safest way to use CarPlay — you keep your eyes on the road and hands on the wheel. CarPlay is designed specifically for this purpose.',
      },
    ],
  },

  {
    slug: 'android-auto-setup',
    title: 'How to Use Android Auto in Your Car',
    excerpt: `Android Auto displays your phone's maps, music, and messages on your car's screen — keeping your eyes on the road while staying connected.`,
    category: 'tips-tricks',
    tags: ['android auto', 'android', 'car', 'navigation', 'driving', 'google maps'],
    readTime: '5 min',
    thumbnailEmoji: '🚘',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Android Auto connects your Android phone to your car's built-in screen. You'll see Google Maps for navigation, Spotify or other music apps, and your messages — displayed larger and easier to use than your phone. Voice commands keep your hands on the wheel.",
    steps: [
      {
        title: 'Check if your car and phone support Android Auto',
        content: `Android Auto is built into the settings of most Android phones running Android 9 or later. Most cars made after 2017 include Android Auto — check your car's manual or look for the Android Auto logo on the infotainment screen. For a list of compatible vehicles, go to android.com/auto.`,
      },
      {
        title: 'Connect your Android phone to your car',
        content: `Wired: Plug your Android phone into the USB port in your car using a USB-A to USB-C cable (or whatever cable your phone uses). Android Auto should launch on the car's screen within 30-60 seconds. On the first connection, you'll need to accept Android Auto's permissions on your phone screen. Wireless: Some newer Android phones and cars connect wirelessly via Bluetooth and WiFi — look for an Android Auto option in your car's Bluetooth settings.`,
      },
      {
        title: 'Navigate with Google Maps on Android Auto',
        content: `Tap the navigation icon on your car's Android Auto screen. Google Maps opens on the car's display. Search for your destination by tapping the search bar or saying "OK Google, navigate to [destination]." Google Maps shows turn-by-turn directions on the car's screen while speaking directions through the car's speakers.`,
      },
      {
        title: 'Use your voice for calls and messages',
        content: 'Say "OK Google" or "Hey Google" to activate the voice assistant while Android Auto is running. "OK Google, call home" — "OK Google, read my messages" — "OK Google, play jazz music." You can also tap the microphone icon on the Android Auto screen at any time to give a voice command. For messages, Google Assistant reads them aloud and can send a voice reply so you never need to look at your phone.',
      },
    ],
  },

  {
    slug: 'alexa-reminders-setup',
    title: 'How to Set Up Alexa Reminders for Medications and Appointments',
    excerpt: `Amazon Alexa can remind you to take medications, attend appointments, and complete tasks — here's how to set up daily and one-time reminders.`,
    category: 'smart-home',
    tags: ['alexa', 'reminders', 'medications', 'echo', 'amazon', 'health'],
    readTime: '4 min',
    thumbnailEmoji: '⏰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "If you have an Amazon Echo device with Alexa, you already have a free, hands-free reminder system. Alexa can remind you to take medications at specific times every day, alert you about upcoming appointments, and prompt you with any custom message — all spoken out loud so you don't have to look at a screen.",
    steps: [
      {
        title: 'Set a daily medication reminder by voice',
        content: `Say "Hey Alexa, remind me to take my morning medication every day at 8 AM." At 8 AM each morning, Alexa will say out loud "It's time to take your morning medication." To set reminders for multiple medications at different times: "Hey Alexa, remind me to take my blood pressure pill every day at 7 AM" and separately "Hey Alexa, remind me to take my evening pill every day at 9 PM."`,
        tip: 'You can be specific in the reminder name: "Hey Alexa, remind me to take my metformin with breakfast every day at 8 AM." Alexa will repeat exactly what you said when the reminder goes off.',
      },
      {
        title: 'Set a one-time reminder for an appointment',
        content: 'For a specific upcoming appointment: "Hey Alexa, remind me about my cardiologist appointment tomorrow at 9 AM." For something further out: "Hey Alexa, remind me about my dentist appointment on May 15th at 10 AM." Alexa confirms the reminder and will alert you at the scheduled time.',
      },
      {
        title: 'Manage reminders in the Alexa app',
        content: `Open the Alexa app on your phone and tap "More" (three horizontal lines) at the bottom right. Tap "Reminders & Alarms." You'll see all your active reminders. Tap any reminder to edit the time, date, or message, or tap the trash icon to delete it. The app gives you a convenient overview of everything scheduled.`,
      },
      {
        title: 'Hear a list of your reminders',
        content: `Ask "Hey Alexa, what are my reminders?" at any time to hear all your scheduled reminders read back to you. Or "Hey Alexa, what are my reminders for today?" for just today's items. If you set a reminder and want to confirm Alexa understood it correctly: "Hey Alexa, what reminders do I have for tomorrow?" Alexa will read them back.`,
        tip: 'Alexa can also help track more than medications. "Hey Alexa, remind me to drink water every hour" — "Hey Alexa, remind me to call my daughter every Sunday at 2 PM." These consistent prompts are especially helpful for people managing health conditions.',
      },
    ],
  },

  {
    slug: 'how-to-use-chromecast',
    title: 'How to Set Up and Use a Google Chromecast',
    excerpt: 'A Chromecast plugs into your TV and lets you play videos from Netflix, YouTube, and other apps on the big screen from your phone.',
    category: 'entertainment',
    tags: ['chromecast', 'google', 'streaming', 'TV', 'setup', 'cast'],
    readTime: '5 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A Google Chromecast is a small device that plugs into your TV's HDMI port. It lets you 'cast' videos, photos, and music from your phone or computer to your TV screen. Chromecast devices start at around $30 and support Netflix, YouTube, Hulu, Disney+, Spotify, and hundreds of other apps.",
    steps: [
      {
        title: 'Plug in your Chromecast',
        content: `Plug the Chromecast into an HDMI port on the back or side of your TV. Plug the power cable into the Chromecast and a wall outlet. Turn your TV on and use your TV remote to switch to the HDMI input you used. You'll see the Chromecast setup screen appear on your TV.`,
      },
      {
        title: 'Download the Google Home app and complete setup',
        content: 'Download the free "Google Home" app on your iPhone or Android phone. Open the app and sign in with your Google account. Tap the plus (+) button → "Set up device" → "New devices." Follow the on-screen instructions — the app will find your Chromecast automatically (make sure your phone is on the same WiFi network). Connect the Chromecast to your home WiFi and give it a name like "Living Room TV."',
      },
      {
        title: 'Cast from a streaming app on your phone',
        content: 'Open Netflix, YouTube, or another streaming app on your phone. Find the Cast icon — it looks like a rectangle with a WiFi symbol in the bottom left corner. Tap it. Your Chromecast will appear in the list — tap it. The video will appear on your TV screen. You can now control the video from your phone (play, pause, fast-forward) while your TV displays it.',
        tip: `Once you've started casting, you can put your phone away or use it for other things. The video continues playing on your TV from the internet — you don't need to keep the app open on your phone.`,
      },
      {
        title: 'Cast photos or music to your TV',
        content: `In Google Photos: tap a photo, tap the Share icon, tap "Cast to TV." Your photos will display as a slideshow on your TV — great for sharing vacation photos with family. For music, open Spotify or Google Play Music, tap the Cast icon, and select your Chromecast. Your music plays through your TV's speakers.`,
      },
    ],
  },

  {
    slug: 'how-to-screenshot-windows-11',
    title: 'How to Take a Screenshot on Your Windows Computer',
    excerpt: "A screenshot captures exactly what's on your screen as an image — useful for saving information, asking for tech help, or sharing what you see.",
    category: 'windows-guides',
    tags: ['screenshot', 'windows 11', 'snipping tool', 'computer', 'how-to'],
    readTime: '4 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A screenshot is a picture of exactly what's currently showing on your computer screen. It's useful for saving a receipt, capturing an error message to ask someone for help, or preserving important information from a website. Windows has several ways to take a screenshot — here are the most useful ones.",
    steps: [
      {
        title: 'Capture the whole screen with Print Screen',
        content: `Press the "PrtSc" (Print Screen) key on your keyboard — it's usually in the top right area of the keyboard, often labeled "PrtSc" or "Print Screen." This copies an image of your entire screen to the clipboard. Open the Photos app or Word, press Ctrl+V to paste it, and save the file. Alternatively, press the Windows key + PrtSc together — this automatically saves a screenshot to your Pictures → Screenshots folder.`,
        tip: 'The Windows key is the key with the Windows logo (four squares) on it, usually at the bottom left of the keyboard.',
      },
      {
        title: 'Use the Snipping Tool to capture just part of the screen',
        content: 'For capturing just a specific section of your screen: press Windows key + Shift + S. Your screen will dim and your cursor changes to a crosshair (+). Click and drag a rectangle around the area you want to capture. When you release, the selected area is copied to your clipboard. A notification will appear — click it to open the Snipping Tool where you can save or edit the image.',
      },
      {
        title: 'Open the Snipping Tool app for more options',
        content: 'Click the Start button and type "Snipping Tool." Open the app. Click "New" and drag to select the area of the screen you want to capture. The Snipping Tool also allows you to take screenshots after a delay (give yourself 5-10 seconds to set up what you want to capture first). Click the floppy disk icon to save your screenshot.',
      },
      {
        title: 'Find your saved screenshots',
        content: 'Screenshots saved automatically (Windows key + PrtSc) go to: Pictures → Screenshots in the Files app. Screenshots captured with Snipping Tool are saved wherever you choose when you click "Save." To quickly find a screenshot you just took, open File Explorer, click "Pictures" in the left column, and look for the "Screenshots" folder.',
      },
    ],
  },

  {
    slug: 'how-to-screenshot-iphone',
    title: 'How to Take a Screenshot on Your iPhone',
    excerpt: "Taking a screenshot on iPhone captures everything on your screen as a photo — here's the button combination for every iPhone model.",
    category: 'tips-tricks',
    tags: ['screenshot', 'iphone', 'capture', 'screen', 'how-to'],
    readTime: '3 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A screenshot on your iPhone saves exactly what's on your screen as a photo in your camera roll. It's great for saving a confirmation number, capturing a map, or showing someone what you're seeing on your phone.",
    steps: [
      {
        title: 'Take a screenshot on iPhones with Face ID (iPhone X and newer)',
        content: `Press the Side button (on the right side of the phone) and the Volume Up button (on the left side) at the same time. Press them simultaneously — not one after the other. Release both buttons. You'll see a white flash and hear a camera shutter sound (if your volume is on). A small thumbnail of the screenshot appears in the bottom left corner.`,
        tip: `Pressing both buttons simultaneously is the tricky part — if the screenshot isn't working, try pressing the Side button first and then quickly adding the Volume Up button.`,
      },
      {
        title: 'Take a screenshot on iPhones with a Home button (iPhone 8 and older)',
        content: `Press the Home button (the round button at the bottom center) and the Side or Sleep/Wake button (on the right side) at the same time. You'll see a white flash and hear the shutter sound. The screenshot thumbnail appears in the bottom left corner.`,
      },
      {
        title: 'View and share your screenshot',
        content: `Tap the thumbnail in the bottom left corner right after taking the screenshot to open the markup editor — you can add arrows or text to highlight something. Tap "Done" to save it, or tap the Share icon to immediately send it by text or email. If you don't tap the thumbnail, it disappears after a few seconds but is automatically saved to your Photos app in the "Recents" album.`,
      },
    ],
  },

  {
    slug: 'goodrx-save-on-prescriptions',
    title: 'How to Use GoodRx to Pay Less for Prescription Medications',
    excerpt: 'GoodRx finds the lowest price for your prescriptions at pharmacies near you — many people save 50-80% off the regular price, even with insurance.',
    category: 'health-tech',
    tags: ['goodrx', 'prescriptions', 'savings', 'pharmacy', 'medication', 'health'],
    readTime: '5 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "GoodRx is a free service that shows you the lowest available price for any prescription medication at pharmacies near you. In many cases, GoodRx prices are lower than what you'd pay with Medicare Part D or other insurance. You don't need to sign up, pay, or show insurance — just show the coupon to the pharmacist.",
    steps: [
      {
        title: 'Go to GoodRx.com or download the free app',
        content: 'You can use GoodRx without an account at goodrx.com, or download the free GoodRx app from the App Store or Google Play. The app makes it easy to find coupons and show them to the pharmacist from your phone.',
      },
      {
        title: 'Search for your medication',
        content: 'Type the name of your medication in the search bar (the brand or generic name both work). Type your zip code so GoodRx can find prices at nearby pharmacies. GoodRx will show you a list of pharmacies with their prices — often ranging from under $5 to over $100 for the same medication. The lowest prices are shown at the top.',
        tip: 'Always search for the generic version of your medication if available — generics contain the same active ingredient as brand-name drugs but often cost a fraction of the price.',
      },
      {
        title: 'Get the coupon and show it to your pharmacist',
        content: `Tap or click the price for the pharmacy you'd like to use. GoodRx shows a coupon with a discount code and your medication details. Save this to your phone or print it. When you pick up your prescription, hand the pharmacist your GoodRx coupon (or show it on your phone screen) and ask them to use the GoodRx price. Say: "I have a GoodRx coupon — can I use this instead of my insurance?"`,
        warning: `You can't use a GoodRx coupon and Medicare/insurance at the same time on the same prescription. Compare the GoodRx price to your insurance copay and choose whichever is lower.`,
      },
      {
        title: 'Compare the GoodRx price to your Medicare Part D copay',
        content: 'Before filling a prescription, do a quick comparison: ask your pharmacist what the price is with your Medicare Part D card, then check the GoodRx price for the same medication and quantity. In many cases — especially for generic medications — GoodRx is cheaper even than Medicare. Use whichever payment method results in a lower cost.',
        tip: 'GoodRx Gold is a $9.99/month membership that gives even lower prices. It may be worth it if you take multiple prescriptions monthly. Compare your total monthly costs before signing up.',
      },
    ],
  },

  {
    slug: 'how-to-use-amazon-prime',
    title: 'How to Get the Most Out of Amazon Prime',
    excerpt: `Amazon Prime is more than free shipping — it includes video streaming, photo storage, prescription savings, and more. Here's what you're already paying for.`,
    category: 'app-guides',
    tags: ['amazon prime', 'amazon', 'streaming', 'prime video', 'shopping', 'benefits'],
    readTime: '5 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Amazon Prime costs $14.99 per month or $139 per year, and most subscribers use it mainly for free shipping. But Prime includes several other benefits that many members don't know about — including a streaming service, free photo storage, prescription savings, and a reading library. Here's what's included and how to use each one.",
    steps: [
      {
        title: 'Use Prime Video for free movies and TV',
        content: 'Open the Amazon app or go to primevideo.com. Prime Video is included in your Prime membership at no extra cost. Browse thousands of movies and TV shows — look for the "Included with Prime" badge. Tap any title and tap "Watch now." Prime Video is available on smart TVs, Roku, Fire TV Stick, iPhone, Android, and most streaming devices.',
        tip: 'Prime Video also has "Prime Video Channels" — add-ons like Paramount+ or Starz for an extra monthly fee. These are optional — the content marked "Included with Prime" is free.',
      },
      {
        title: 'Store unlimited photos for free with Prime Photos',
        content: 'Prime members get unlimited free photo storage in Amazon Photos. Download the "Amazon Photos" app from the App Store or Google Play, sign in with your Amazon account, and turn on "Auto-Save" to automatically back up all your phone photos. Unlike iCloud or Google Photos, this storage for photos is truly unlimited with Prime.',
      },
      {
        title: 'Save on prescriptions at Amazon Pharmacy',
        content: 'Amazon Pharmacy offers significantly discounted prescription prices for Prime members. Go to pharmacy.amazon.com or tap "Prime Rx Benefits" in the Amazon app. You can transfer prescriptions from any pharmacy to Amazon Pharmacy and have them mailed to your home for free in 2 days or less. For same-day needs, Amazon also shows GoodRx-style discount coupons for local pharmacies.',
      },
      {
        title: 'Read free books with Prime Reading',
        content: 'Prime includes "Prime Reading" — a rotating library of over 3,000 books, magazines, and comics available for free. Open the Kindle app (free download) or go to amazon.com/kindle and look for the "Prime Reading" category. Tap any book and tap "Read for Free." Books are delivered to your Kindle app or Kindle device instantly.',
        tip: `The Kindle app is free and works on any iPhone, Android phone, iPad, or tablet — you don't need a physical Kindle device to read Kindle books.`,
      },
    ],
  },

  {
    slug: 'how-to-set-up-apple-watch',
    title: 'How to Set Up and Use an Apple Watch',
    excerpt: "An Apple Watch tracks your health, makes calls, and sends texts from your wrist — here's how to set it up and the most useful features to know.",
    category: 'health-tech',
    tags: ['apple watch', 'wearable', 'health tracking', 'fitness', 'notifications', 'iphone'],
    readTime: '6 min',
    thumbnailEmoji: '⌚',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Apple Watch is a smartwatch that works alongside your iPhone. It tracks your steps, heart rate, and sleep, can detect falls and call for help automatically, sends and receives text messages, and reminds you to move if you've been sitting too long. It's one of the most useful health tools available for older adults living independently.",
    steps: [
      {
        title: 'Charge your Apple Watch and download the Watch app',
        content: 'Place your Apple Watch on its magnetic charging cable before setup — it needs some battery charge to get started. On your iPhone, look for the "Watch" app (gray icon with an Apple Watch face). Open it and tap "Start Pairing." Hold your iPhone camera over the Apple Watch face — the Watch displays a pattern that your iPhone camera scans to begin pairing.',
      },
      {
        title: 'Complete setup through the Watch app',
        content: 'The Watch app on your iPhone guides you through setup: sign in with your Apple ID, set a passcode for the Watch (4-6 digits), choose whether to set up Apple Pay, and decide on health features. When prompted, set up Emergency SOS and Fall Detection (highly recommended — covered in the next step). Setup takes about 10-15 minutes and the watch will restart when complete.',
      },
      {
        title: 'Turn on Fall Detection and Emergency SOS',
        content: `Fall Detection is one of the most important features for older adults. If your Apple Watch detects you've fallen and you don't respond to a check-in within 30 seconds, it automatically calls emergency services and sends your location to your emergency contacts. To enable: open the Watch app on your iPhone → Emergency SOS → turn on "Fall Detection" and "Emergency SOS via Satellite." Add emergency contacts under Health → Medical ID.`,
        tip: `Fall Detection works best when worn on the wrist. It's most accurate on Apple Watch Series 4 and newer. The watch can also detect irregular heart rhythm (atrial fibrillation) and notify you.`,
      },
      {
        title: 'Use the most helpful daily features',
        content: `Activity tracking: your Watch automatically tracks steps, calories burned, and "Move, Exercise, Stand" goals — three colorful rings on the watch face. Close all three rings to meet your daily activity goal. Heart rate: tap the Heart Rate app to see your current heart rate. Messages: when a text arrives, your Watch taps your wrist. Raise your wrist to read it and tap the reply button to send a quick "OK" or "I'll call you."`,
      },
      {
        title: 'Charge your Apple Watch every night',
        content: `Apple Watch batteries last about 18-24 hours depending on the model and usage. Place your Watch on its magnetic charger every night before bed. Most people develop the habit of charging their Watch on their nightstand while they sleep — it's fully charged every morning when they put it on.`,
        tip: `The Sleep Tracking feature requires a different charging habit — charge your Watch during the day (while showering and getting ready) so it's charged by bedtime. You can track sleep by wearing it at night and charging in the morning instead.`,
      },
    ],
  },

  {
    slug: 'how-to-use-cash-app-safely',
    title: 'How to Use Cash App Safely',
    excerpt: 'Cash App is a popular way to send and receive money, but it comes with risks you should know about before sending your first payment.',
    category: 'financial-tech',
    tags: ['cash app', 'money transfer', 'payments', 'scam', 'safety', 'bank'],
    readTime: '5 min',
    thumbnailEmoji: '💚',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Cash App is a mobile payment service from Block (formerly Square) that lets you send and receive money using a phone number or $Cashtag (a unique username like $JohnSmith). It also lets you buy stocks and bitcoin, though those features are optional and come with higher risk. Understanding both how to use Cash App and how to avoid its common scams is essential.",
    steps: [
      {
        title: 'Download Cash App and create an account',
        content: 'Download the free "Cash App" from the App Store or Google Play. Open it and enter your phone number or email address. Create a $Cashtag — this is your unique username (like $YourName) that people use to send you money. Link a debit card or bank account to send and receive money. Cash App is free to receive money; sending money from a credit card has a 3% fee, while debit card and bank account sends are free.',
      },
      {
        title: 'Send money safely',
        content: `Tap the dollar sign ($) icon, type an amount, then tap "Pay." Type the recipient's phone number, email, or $Cashtag. Add a note. Review all details carefully — especially the $Cashtag spelling — and tap "Pay." Cash App payments are instant and difficult to reverse, so accuracy matters.`,
        warning: 'Only send money to people you know. Cash App is not designed for purchases from strangers and does not offer buyer protection like PayPal Goods & Services does.',
      },
      {
        title: 'Transfer your Cash App balance to your bank',
        content: `Don't leave money sitting in Cash App for long. On the home screen, tap the dollar amount showing your balance. Tap "Cash Out" → select "Instant" (free, up to $2,500 per day) or "Standard" (1-3 business days, free). Tap "Confirm Cash Out." Your money moves from Cash App to your linked bank account. The Consumer Financial Protection Bureau (CFPB) recommends not leaving large balances in payment apps.`,
      },
      {
        title: 'Recognize Cash App scams',
        content: `Common Cash App scams: (1) "Cash App Friday" giveaways on social media — Cash App never asks you to send money to receive a larger payout. (2) Fake Cash App support on social media or phone — Cash App has no phone support; real support is only through the app. (3) Accidental payment scam — same as with Venmo. (4) Flipping scams — "send me $50 and I'll flip it to $500." These always result in total loss.`,
        tip: `Enable Cash App's security lock: tap the profile icon → Security → Enable Security Lock. This requires your fingerprint or PIN for every payment.`,
      },
    ],
  },

  {
    slug: 'how-to-set-up-google-home',
    title: 'How to Set Up Google Home (Nest Audio or Mini)',
    excerpt: "Google Home smart speakers let you control smart devices, answer questions, and play music with just your voice — here's how to set one up.",
    category: 'smart-home',
    tags: ['google home', 'nest audio', 'smart speaker', 'google assistant', 'setup'],
    readTime: '5 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Google Home is Google's line of smart speakers — including the Nest Audio and Nest Mini. These devices run Google Assistant (the same assistant you say 'Hey Google' to on your Android phone) and let you control smart lights, play music, check the weather, answer questions, and set reminders, all with your voice. Setup takes about 10 minutes.",
    steps: [
      {
        title: 'Plug in your Google Home device and download the Google Home app',
        content: 'Plug your Nest Audio or Nest Mini into a wall outlet using the included power cable. On your phone, download the free "Google Home" app from the App Store or Google Play. Open the app and sign in with your Google account. The app will scan for nearby Google devices automatically.',
      },
      {
        title: 'Add the device and connect to WiFi',
        content: `In the Google Home app, tap the plus (+) button at the top left → "Set up device" → "New devices." Your Google Home speaker will appear in the list. Tap it. The app will ask you to select which room the device is in (like "Living Room"). Then it will connect the speaker to your home WiFi — you'll need to enter your WiFi password once.`,
      },
      {
        title: 'Try your first voice commands',
        content: `Say "Hey Google, what's the weather?" — your speaker will respond out loud. Other useful starters: "Hey Google, play relaxing music" — "Hey Google, set a timer for 20 minutes" — "Hey Google, how many cups in a quart?" — "Hey Google, tell me a fun fact" — "Hey Google, remind me to take my medication every day at 8 AM." The speaker uses the same Google Assistant as Android phones, so anything you can ask Google Assistant, you can ask it here.`,
        tip: `Google Home devices can hear you from across the room even with some background noise — you don't need to be close to them or raise your voice.`,
      },
      {
        title: 'Link smart devices to control them with your voice',
        content: 'Once your Google Home is set up, you can link compatible smart devices — smart lights (Philips Hue, LIFX), smart plugs, thermostats, and TVs — through the Google Home app. Tap the plus (+) → "Set up device" → "Works with Google" and search for your device brand. After linking, you can say "Hey Google, turn on the living room lights" or "Hey Google, turn the TV to Netflix."',
      },
    ],
  },

  {
    slug: 'how-to-use-iphone-health-app',
    title: 'How to Use the Health App on iPhone to Track Your Wellbeing',
    excerpt: "iPhone's built-in Health app collects data from your phone and Apple Watch in one place — here's what it tracks and how to share it with your doctor.",
    category: 'health-tech',
    tags: ['health app', 'iphone', 'fitness', 'heart rate', 'steps', 'medical'],
    readTime: '5 min',
    thumbnailEmoji: '❤️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Health app is built into every iPhone and automatically tracks steps, sleep, and heart rate (if you have an Apple Watch). It also lets you store your Medical ID — critical information like blood type, medications, and emergency contacts — that first responders can access from your locked phone.",
    steps: [
      {
        title: 'Open the Health app and explore what it tracks',
        content: 'The Health app has a white icon with a red heart. Tap it to open. The "Summary" tab shows your recent health data — steps today, walking minutes, heart rate (if you have an Apple Watch), and sleep. Even without an Apple Watch, your iPhone automatically tracks steps and walking using its built-in sensors. Tap "Browse" at the bottom to see all the categories of health data the app can store.',
      },
      {
        title: 'Set up your Medical ID',
        content: 'Your Medical ID stores critical health information that emergency responders can read from your locked iPhone. Tap your profile picture in the top right → "Medical ID" → "Edit." Fill in: blood type, any medical conditions, allergies, medications, and emergency contacts. Tap "Done" to save. To make it accessible from the lock screen (important!), make sure "Show When Locked" is turned on.',
        tip: 'To view your Medical ID from a locked iPhone: press the Side button to wake the phone, tap "Emergency," then tap "Medical ID." First responders know to look here.',
      },
      {
        title: 'Track your medications in the Health app',
        content: `The Health app has a Medications feature to help you remember your prescriptions. Tap "Browse" → "Medications" → "Add a Medication." Type the medication name, set the dosage, and choose a schedule (daily at a certain time, as needed, etc.). The Health app will send you a reminder notification when it's time to take each medication. Tap to log whether you took it or skipped it.`,
      },
      {
        title: 'Share health data with your doctor',
        content: `If your doctor uses a compatible system (like Epic's Health app integration or Apple Health Records), you can share your health data directly with them digitally. Tap your profile picture → "Health Records" → look for your health system or hospital. If connected, lab results, medications, and visit history will sync automatically into your Health app. You can also export your health data: profile picture → "Export All Health Data" to create a file to email to your doctor.`,
      },
    ],
  },

  {
    slug: 'how-to-use-gmail',
    title: 'How to Set Up and Use Gmail',
    excerpt: `Gmail is a free email service from Google — here's how to create an account, send emails, and stay organized.`,
    category: 'essential-skills',
    tags: ['gmail', 'email', 'google', 'setup', 'send email', 'inbox'],
    readTime: '6 min',
    thumbnailEmoji: '📧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Gmail is Google's free email service used by billions of people worldwide. It's accessible on any phone, tablet, or computer. If you have a Google account (or want one), you have a free Gmail address. Gmail keeps your inbox organized automatically and has powerful search so you can always find any old email.",
    steps: [
      {
        title: 'Create a Gmail account',
        content: 'Go to gmail.com in a browser or open the Gmail app. Tap "Create account." Fill in your first name, last name, and choose an email address — this will be yourname@gmail.com. Choose a password and confirm it. Google will ask for your phone number to verify your identity. Enter the 6-digit code sent to your phone. Your Gmail account is now ready.',
        tip: 'If the username you want is already taken (like "johndoe"), try adding your birth year or a middle initial: "johndoe1955" or "john.m.doe".',
      },
      {
        title: 'Send your first email',
        content: `On computer: Click the "Compose" button (red pencil icon) on the left side. In the "To" field, type the recipient's email address. In "Subject," type a brief description of the email. Click in the large text area and type your message. Click the blue "Send" button when ready. On the app: tap the pencil/compose icon at the bottom right and follow the same steps.`,
      },
      {
        title: 'Read, reply to, and organize emails',
        content: 'Your inbox shows all received emails. Tap or click any email to read it. At the bottom of the email, tap "Reply" to respond to the sender, "Reply all" to respond to everyone on the email, or "Forward" to send the email to someone new. To delete an email, swipe it left (on phone) or check the box and click the trash icon. Deleted emails go to Trash and are automatically deleted after 30 days.',
      },
      {
        title: `Use Gmail's search to find any email`,
        content: `Gmail has powerful search built in. Click or tap the search bar at the top and type any words from the email you're looking for — the sender's name, a subject word, or any text from the message. Gmail searches all your emails instantly. You can also search for "emails from John" or "emails about dentist" in plain language.`,
        tip: `Gmail automatically sorts promotional emails (store ads) and social media notifications into separate "Promotions" and "Social" tabs to keep your main inbox cleaner. Tap these tabs to see what's there.`,
      },
      {
        title: 'Keep your inbox safe from spam',
        content: `If a suspicious email arrives, do not click any links in it. Instead, open the email and click the three-dot menu (or right-click on a computer) and select "Report spam." Gmail will move it to Spam and use it to train its filters. For emails that keep coming that you don't want, scroll to the very bottom of the email and click "Unsubscribe" — this stops legitimate senders from emailing you again.`,
      },
    ],
  },

  {
    slug: 'how-to-check-credit-score-free',
    title: 'How to Check Your Credit Score for Free',
    excerpt: `You can check your credit score for free without hurting it — here's how to use the official free sources and what the numbers mean.`,
    category: 'financial-tech',
    tags: ['credit score', 'credit report', 'free', 'annualcreditreport', 'credit bureaus'],
    readTime: '5 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Your credit score is a number (typically 300-850) that lenders use to judge whether to give you a loan, credit card, or mortgage — and at what interest rate. Checking your own score does NOT hurt your credit. You have the right to view your full credit report from each of the three major credit bureaus once per year for free.",
    steps: [
      {
        title: 'Get your free credit report from AnnualCreditReport.com',
        content: 'Go to annualcreditreport.com — this is the official, federally-mandated free credit report website. Do not confuse it with sites that offer a "free score" but require a credit card. Click "Request your free credit reports." You can request reports from all three bureaus (Equifax, Experian, TransUnion) at once, or space them out throughout the year. Verify your identity with personal information. Download or print your reports.',
        warning: 'Only annualcreditreport.com is the official free credit report site mandated by federal law. Many sites advertise "free credit reports" but require payment or a subscription. Type the web address directly rather than searching for it to avoid look-alike scam sites.',
      },
      {
        title: 'Check your free credit score through your bank or credit card',
        content: 'Many banks and credit card companies now offer free credit score monitoring to their customers. Log in to your bank or credit card app and look for "Credit Score" or "FICO Score" in the app. Popular banks offering this include Chase (Credit Journey), Wells Fargo (Credit Close-Up), Capital One (CreditWise), and many credit unions. This score updates monthly and checking it does not affect your credit.',
        tip: `CreditWise from Capital One is free to anyone — you don't need to be a Capital One customer. Download the app or go to creditwise.capitalone.com.`,
      },
      {
        title: 'Understand what your credit score means',
        content: 'Credit scores run from 300-850. General ranges: Exceptional (800-850) — best rates; Very Good (740-799) — above average rates; Good (670-739) — near or above average; Fair (580-669) — below average; Poor (300-579) — well below average. For most purposes (mortgages, car loans, credit cards), a score above 670 is considered good. Above 740 gets you the best interest rates.',
      },
      {
        title: 'Review your credit report for errors',
        content: `When you get your credit report, scan it for accounts you don't recognize, late payments that weren't actually late, or incorrect personal information. Errors on credit reports are more common than most people realize and can lower your score unfairly. To dispute an error, go directly to the credit bureau's website (equifax.com, transunion.com, or experian.com) and click "Dispute" to submit a correction with your documentation.`,
      },
    ],
  },

  {
    slug: 'email-attachment-send-receive',
    title: 'How to Send and Receive Email Attachments (Photos and Documents)',
    excerpt: `Sending a photo or file by email is easy once you know where the attachment button is — here's how it works on iPhone and computer.`,
    category: 'essential-skills',
    tags: ['email', 'attachment', 'send photo', 'document', 'gmail', 'iphone'],
    readTime: '4 min',
    thumbnailEmoji: '📎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Email attachments let you share photos, documents, and files along with your email message. The paperclip icon (📎) is the universal symbol for attachments across all email services. Here's how to attach a file to an email and how to open attachments you receive.",
    steps: [
      {
        title: 'Attach a photo or file to an email on iPhone',
        content: 'Start composing an email in the Mail app. Tap in the body of the email. Look for a small arrow or toolbar above the keyboard — tap the arrow if you need to scroll it. Tap the attachment icon (looks like a paperclip or camera). Choose "Photo Library" to attach a photo from your camera roll, or "Scan Document" to attach a scan. Select the photo or file, and it will appear in your email.',
        tip: 'In Gmail on iPhone, compose a new email and tap the paperclip icon at the top right of the compose window to add an attachment. Tap "Attach file" or "Insert from Drive."',
      },
      {
        title: 'Attach a file to an email on a Windows computer',
        content: `In Gmail on a computer, click "Compose" to start a new email. At the bottom of the compose window, click the paperclip icon. A file browser opens — navigate to the photo or document you want to attach (photos are often in the "Pictures" folder). Double-click the file to attach it. You'll see it appear at the bottom of your email before you send.`,
      },
      {
        title: 'Open an attachment someone sent you',
        content: `When an email has an attachment, you'll see a paperclip icon on the email in your inbox or a preview of the file inside the email. On iPhone: tap the attachment image or file name to open it. For photos, they open in Photos app. For PDFs, they open in a reading view. Tap the Share icon to save or forward it. On a computer: click the attachment file name or thumbnail to download it to your computer, then open it from your Downloads folder.`,
        warning: 'Only open attachments from people you know and trust. Attachments from strangers — especially .exe files, .zip files, or unexpected documents — can contain viruses or malware. When in doubt, do not open it.',
      },
    ],
  },

  {
    slug: 'how-to-use-notes-app-iphone',
    title: 'How to Use the Notes App on iPhone',
    excerpt: "iPhone's Notes app is perfect for grocery lists, reminders, and saving information — here's how to create notes, add checklists, and find them later.",
    category: 'tips-tricks',
    tags: ['notes', 'iphone', 'lists', 'reminders', 'organize', 'grocery list'],
    readTime: '4 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Notes app on iPhone is one of the most useful built-in apps that many people overlook. It's perfect for grocery lists, important phone numbers, medication instructions, travel information, or anything else you want to quickly jot down and find later. Notes sync automatically to all your Apple devices through iCloud.",
    steps: [
      {
        title: 'Create a new note',
        content: `Open the Notes app (yellow icon with white lines). Tap the compose button — a yellow square with a pencil — in the bottom right corner. A blank note opens with the keyboard ready. Type your note. The first line becomes the title. Tap "Done" when finished. Your note is saved automatically — you don't need to press a Save button.`,
        tip: 'You can also quickly create a note by saying "Hey Siri, create a new note" or "Hey Siri, add milk to my grocery list."',
      },
      {
        title: 'Make a checklist for shopping or tasks',
        content: `To create a checklist inside a note, tap the checklist icon in the toolbar above the keyboard (it looks like a circle with a checkmark). Type the first item and press Return to add the next. When you're in a store or completing tasks, tap the circle next to each item to check it off — the item moves to the bottom with a strikethrough.`,
      },
      {
        title: 'Add a photo to a note',
        content: 'Inside any note, tap the camera icon in the toolbar above the keyboard. Tap "Photo Library" to insert a photo from your iPhone, or "Take Photo" to take a new one. This is useful for keeping a photo of your insurance card, a product manual, or a reference image alongside your typed notes.',
      },
      {
        title: 'Find any note quickly',
        content: `Swipe down while in the Notes app to reveal the search bar at the top. Type any word that appears in the note you're looking for. Notes searches the text of every note you've ever written and shows matching results instantly. You can also organize notes into folders: tap "New Folder" at the bottom left of the main Notes screen.`,
      },
    ],
  },

  {
    slug: 'iphone-magnifier-accessibility',
    title: 'How to Use the Magnifier on iPhone as a Reading Aid',
    excerpt: "iPhone has a built-in magnifier that turns your camera into a powerful magnifying glass — useful for reading small print on menus, labels, and documents.",
    category: 'tips-tricks',
    tags: ['magnifier', 'iphone', 'accessibility', 'reading', 'vision', 'zoom'],
    readTime: '3 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Magnifier app on iPhone uses your phone's camera to magnify text and objects — just like a digital magnifying glass. It's extremely useful for reading tiny restaurant menus, medicine bottle labels, prescription instructions, or any small print. It also has a brightness slider and the option to freeze the image so you can read it more comfortably.",
    steps: [
      {
        title: 'Find and open the Magnifier app',
        content: 'The Magnifier app is built into every iPhone running iOS 14 or later. Swipe down from the middle of your Home Screen to open Search, and type "Magnifier." Tap the app to open it. It shows a live camera view with a zoom slider at the bottom.',
        tip: 'Add Magnifier to your Control Center for even faster access: go to Settings → Control Center → tap the + next to Magnifier. Then swipe down from the top right corner to open Control Center and tap the Magnifier icon any time.',
      },
      {
        title: 'Zoom in on small text',
        content: `Hold your iPhone over the small text you want to read. Use the yellow zoom slider at the bottom of the screen — drag it to the right to zoom in. The camera will magnify the text on your screen. Use both hands if needed to keep the phone steady over the item you're reading.`,
      },
      {
        title: 'Freeze the image to read comfortably',
        content: 'Tap the shutter button (the white circle at the bottom) to freeze the magnified image on screen. Now you can set the phone down and read the frozen image comfortably without holding your arm in position. Tap the shutter button again to unfreeze and return to the live camera view.',
      },
      {
        title: 'Use the filters to improve contrast',
        content: 'If the text is still hard to read even when magnified, tap the three-circle icon on the left side of the Magnifier screen to open filter options. Choose "Yellow on Black" or "White on Black" for high-contrast reading that many people with vision difficulties find much easier to read than standard color.',
      },
    ],
  },
];
