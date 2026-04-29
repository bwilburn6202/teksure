// TekSure Guides Batch 18 — 22 guides covering: Zoom virtual backgrounds,
// undo sent email, restore iPhone from backup, Samsung Health, Apple Fitness+,
// pill reminder apps, Paramount+, Apple One, edit/crop photos, annotate
// screenshots, forward texts, set default apps, Android backup restore,
// Apple Shortcuts, iPhone Live Text, organize Android home screen, add apps
// to smart TV, screen recorder, shared family calendar, Mac Split View,
// internet radio, Kindle library.
import type { Guide } from './guides';

export const guidesBatch18: Guide[] = [
  {
    slug: 'zoom-virtual-background-setup',
    title: 'How to Add a Virtual Background to Your Zoom Video Calls',
    excerpt:
      'A Zoom virtual background replaces or blurs what is behind you during video calls — no messy room visible, just you. Here is how to set one up.',
    category: 'essential-skills',
    tags: ['zoom', 'virtual background', 'video call', 'blur background', 'work from home'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you have ever been on a Zoom video call and wished you could hide a cluttered room or laundry pile behind you, Zoom's virtual background feature does exactly that. It replaces your real background with an image of your choice — a simple solid color, a professional-looking office, a scenic outdoor view, or anything you upload. There is also a "Blur" option that softens your background without replacing it entirely.\n\nVirtual backgrounds work best with a solid-colored wall behind you (especially green). They still work on most backgrounds, but solid colors give the cleanest edges. Zoom's virtual backgrounds are free and easy to activate — no green screen required on most modern computers and phones.\n\nThis guide covers setting up virtual backgrounds on both desktop and the Zoom mobile app.`,
    steps: [
      {
        title: 'Set up a virtual background in Zoom on your computer',
        content:
          "Open Zoom. Click your profile picture at the top right → \"Settings\" → click \"Backgrounds & Filters\" in the left menu. You will see a row of background options. Click \"Blur\" to blur your real background, or click one of the preset background images. To use your own photo: click the \"+\" button → \"Add Image\" → choose a photo from your computer. The background applies immediately in the preview. Close settings and start a meeting — your background is active.",
        tip: "Quick Tip: If your computer doesn't meet the minimum specs for virtual backgrounds without a green screen, Zoom will warn you. In that case, use background blur instead — it works on older hardware and still hides a messy room.",
      },
      {
        title: 'Enable virtual backgrounds on the Zoom mobile app',
        content:
          "Open the Zoom app on your phone → start or join a meeting → tap \"More\" (three dots at the bottom) → \"Virtual Background\" (or \"Background and Filters\"). A selection of backgrounds appears. Tap the blur icon or any background image to apply it. Tap \"Close\" when done. The background remains active for the duration of the meeting.",
      },
      {
        title: 'Choose the right background image',
        content:
          "The best virtual background images are: landscape format (wider than tall), at least 1920x1080 pixels for sharpness, not too busy or distracting, appropriate for the context (a beach scene for a family call; a clean bookshelf or plain wall for professional meetings). Avoid backgrounds with lots of fine details (like a forest of leaves) — they can shimmer and distort around the edges of your face and hair.",
        tip: "Quick Tip: Zoom has free professional background packs available at zoom.us/virtual-backgrounds. Many users simply use the blur option, which requires no image and works well in nearly any situation.",
      },
      {
        title: 'Fix problems with your virtual background',
        content:
          "If the background is flickering, green-screening improperly, or cutting off parts of your face: sit against a solid, evenly lit wall; ensure good lighting on your face (a window in front of you is ideal); wear clothing that contrasts with your background. If using a green screen cloth, make sure it is smooth with no wrinkles. If the option is grayed out, check that your graphics drivers are up to date or switch to background blur, which has lower hardware requirements.",
      },
    ],
  },

  {
    slug: 'undo-send-email-guide',
    title: 'How to Unsend an Email You Just Sent by Mistake',
    excerpt:
      'Gmail, Outlook, and Apple Mail all let you undo a sent email within a short window. Here is how to enable the feature and use it before it is too late.',
    category: 'essential-skills',
    tags: ['unsend email', 'undo send', 'gmail', 'outlook', 'email mistake', 'recall email'],
    readTime: '4 min',
    thumbnailEmoji: '↩',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `We have all done it — sent an email too soon, to the wrong person, with a typo, or missing an attachment. Most email services give you a brief window to "undo" or "recall" the send before it truly leaves your outbox.\n\nGmail, Outlook, and Apple Mail all offer this feature, but it works differently in each. Gmail and Apple Mail delay the actual send by a few seconds, giving you time to cancel it. Outlook has a "Recall" feature that tries to delete the message from the recipient's inbox — though this only works in certain conditions.\n\nThis guide shows you how to enable and use "Undo Send" in all three services.`,
    steps: [
      {
        title: 'Enable Undo Send in Gmail (and set the window longer)',
        content:
          "Gmail delays sending for up to 30 seconds — but you have to configure the length. Go to Gmail in your browser → click the gear icon → \"See all settings\" → under the \"General\" tab, find \"Undo Send\" and set the \"Send cancellation period\" to 30 seconds. Click \"Save Changes\" at the bottom. Now, every time you send an email, a \"Message sent\" banner appears at the bottom left of your screen with an \"Undo\" button. Click \"Undo\" within 30 seconds to retrieve the email.",
        tip: "Quick Tip: Set the undo period to 30 seconds immediately — this is the maximum and gives you the most recovery time. The default is often 5 or 10 seconds, which is not enough time to catch mistakes.",
      },
      {
        title: 'Undo Send in Gmail on your phone',
        content:
          "The Gmail app on iPhone and Android also has Undo Send. In the app: tap the three-line menu () → Settings → select your email account → \"Undo Send\" → set the cancellation period to 10 or 20 seconds. After sending an email in the app, a brief \"Sent\" message appears at the bottom of the screen with an \"Undo\" option. Tap it quickly. On iPhone, the window may be shorter than on the desktop — so act fast.",
      },
      {
        title: 'Undo Send in Apple Mail',
        content:
          "On Mac (macOS Ventura and later): go to Mail → Settings → Composing → check \"Undo Send Delay\" and set it to 10 or 20 seconds. After sending, a banner appears at the bottom of the screen with an Undo option. On iPhone and iPad (iOS 16 and later): after sending an email in the Mail app, a brief \"Undo Send\" option appears at the bottom of the screen. Swipe up on it or tap it to cancel the send. The delay setting is in Settings → Mail → Undo Send Delay.",
        tip: "Quick Tip: Apple Mail's Undo Send is only available on iOS 16 and macOS Ventura or later. If you have an older iPhone, update it to access this feature: Settings → General → Software Update.",
      },
      {
        title: 'Recall an email in Outlook',
        content:
          "In Outlook (Microsoft 365): open the Sent Items folder → open the email you want to recall → click the three-dot menu (⋯) or \"Message\" tab → \"Actions\" → \"Recall This Message.\" Choose \"Delete unread copies\" (if the recipient hasn't opened it) or \"Delete unread copies and replace with a new message.\" A recall only works if the recipient uses Outlook and has not yet opened the email — it does not work to Gmail, Apple Mail, or other email services.",
        warning:
          "Email recall is not reliable — it fails if the recipient has already opened the email, uses a non-Outlook email app, or reads email on a mobile device. Think of it as a last resort, not a guarantee.",
      },
    ],
  },

  {
    slug: 'restore-iphone-from-icloud-backup',
    title: 'How to Restore Your iPhone From an iCloud Backup',
    excerpt:
      "If you get a new iPhone or need to reset your current one, restoring from an iCloud backup brings back all your apps, photos, and settings. Here's how.",
    category: 'phone-guides',
    tags: ['restore iphone', 'icloud backup', 'new iphone', 'iphone setup', 'data recovery'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `When you get a new iPhone or need to reset your current one, restoring from an iCloud backup is the best way to get everything back — your apps, photos, messages, contacts, settings, and account logins. Apple designed this process to be straightforward, and most people can complete a full restore in under 30 minutes (plus time for the backup to download, which depends on your internet speed and backup size).\n\nBefore restoring, you should have a recent iCloud backup. To check: go to Settings → your name → iCloud → iCloud Backup — the screen shows the date and time of your most recent backup. If the backup is more than a day old, tap "Back Up Now" before proceeding.`,
    steps: [
      {
        title: 'Start setup on your new or reset iPhone',
        content:
          "Turn on the new (or factory-reset) iPhone. The \"Hello\" setup screen appears. Follow the on-screen steps: choose your language and region, connect to Wi-Fi (required for iCloud restore), and when asked how you want to set up your iPhone, choose \"Restore from iCloud Backup.\" Sign in with your Apple ID and password when prompted.",
        tip: "Quick Tip: Keep your old iPhone nearby during setup if possible. iOS has a \"Quick Start\" feature where your old phone can transfer settings directly to the new one over Bluetooth — often faster than an iCloud restore.",
      },
      {
        title: 'Choose a backup and start the restore',
        content:
          "After signing into iCloud, a list of your recent backups appears, each showing the date and approximate size. Tap the most recent backup to select it. Tap \"Continue.\" The restore begins — your iPhone will show a progress bar and an estimated time remaining. During the download, stay connected to Wi-Fi and keep the phone plugged in to charge.",
        tip: "Quick Tip: If no backups appear, confirm that iCloud Backup was previously enabled on your old phone: Settings → your name → iCloud → iCloud Backup → Back Up Now.",
      },
      {
        title: 'Wait for the restore and then sign in to your accounts',
        content:
          "The download and initial restore may take 15-60 minutes depending on backup size and internet speed. After the iPhone restarts, you will be asked to sign back into a few accounts — your Apple ID password, your email accounts, and any apps that require login. This is normal. Some apps continue downloading in the background for an hour or more after setup completes.",
      },
      {
        title: 'Check that everything transferred correctly',
        content:
          "After restore: check your Photos app to confirm photos are visible. Open a few apps and verify your settings and history are there. Check Messages for your conversation history. Open Contacts to confirm they are present. Your payment methods (credit cards in Apple Pay) will need to be re-added for security reasons — go to Settings → Wallet & Apple Pay to re-enter them.",
        warning:
          "Some apps store data on their own servers and don't include all data in iCloud backups. For example, banking apps typically require you to log in again. Health app data, most settings, and iCloud Photos should all be fully restored.",
      },
    ],
  },

  {
    slug: 'samsung-health-app-guide',
    title: 'How to Use the Samsung Health App to Track Fitness and Health',
    excerpt:
      "Samsung Health is a free app on Samsung phones that tracks steps, heart rate, sleep, and more — no separate device required. Here's how to use it.",
    category: 'health-tech',
    tags: ['samsung health', 'fitness tracking', 'steps', 'heart rate', 'sleep', 'samsung'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Samsung Health is a free app that comes pre-installed on most Samsung Galaxy phones. It uses your phone's built-in sensors to automatically track your daily steps, distance walked, and calories burned — no smartwatch or fitness tracker required. If you have a Samsung Galaxy Watch or fitness band, Samsung Health connects to those devices as well.\n\nBeyond steps, Samsung Health can track: heart rate (on phones with a heart rate sensor), sleep duration and quality (if connected to a Samsung Watch), weight and BMI, water intake, nutrition/food log, stress levels, and workouts. Many people find that simply seeing their daily step count motivates them to move more.\n\nThis guide covers the core features and how to get started.`,
    steps: [
      {
        title: 'Set up your profile in Samsung Health',
        content:
          "Open Samsung Health on your Samsung phone (search for it if you don't see it on your home screen — it is pre-installed on most Galaxy phones). Sign in with your Samsung account or create one for free. Enter your profile information: birth date, height, and weight. This information is used to calculate calorie estimates and personalize your goals. Set your daily step goal — Samsung Health suggests 6,000-10,000 steps per day. You can adjust this based on your current activity level.",
        tip: "Quick Tip: Start with a modest step goal and increase it gradually. Research suggests even 4,000-6,000 steps per day provides significant health benefits for older adults — you don't need to reach 10,000.",
      },
      {
        title: 'Track your daily steps automatically',
        content:
          "Samsung Health begins counting steps as soon as it is set up. Your phone just needs to be in your pocket, purse, or hand — it uses the phone's accelerometer to detect walking motion. The home screen of Samsung Health shows your steps for today, a goal ring showing your progress, and a weekly summary chart. Your steps reset at midnight each day. Steps are also shown as a widget on your home screen if you add it.",
        tip: "Quick Tip: For accurate step counting, carry your phone on your body (not in a bag sitting on a table) while walking. The more the phone moves with your body, the more accurately it counts steps.",
      },
      {
        title: 'Log workouts and exercise',
        content:
          "Tap \"Track\" or \"Workout\" to log exercise. Choose from dozens of activity types: walking, running, cycling, swimming, yoga, strength training, and more. Tap the activity → \"Start.\" Samsung Health records duration, heart rate (if your phone or watch has the sensor), estimated calories burned, and maps your route (for outdoor activities with location enabled). When done, tap \"Stop\" to save the workout to your history.",
      },
      {
        title: 'Connect a Samsung Galaxy Watch for more health data',
        content:
          "If you have a Samsung Galaxy Watch (any model from the Galaxy Watch Active onward), pair it with Samsung Health for automatic heart rate monitoring throughout the day, sleep tracking (the watch detects sleep stages — light, deep, and REM), stress level monitoring via heart rate variability, and blood oxygen (SpO2) on supported models. Connect: open Samsung Health → tap your profile icon → \"Connected devices\" → connect your watch. All watch data syncs to the Samsung Health app automatically.",
      },
    ],
  },

  {
    slug: 'apple-fitness-plus-guide',
    title: "What Is Apple Fitness+ and How Do You Use It?",
    excerpt:
      'Apple Fitness+ is a workout streaming service built for Apple Watch — with classes for all fitness levels, including seniors. Here is what you get and how to start.',
    category: 'health-tech',
    tags: [
      'apple fitness plus',
      'workout streaming',
      'exercise',
      'apple watch',
      'fitness',
      'seniors',
    ],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple Fitness+ is Apple's subscription workout service, available for $9.99/month (included with Apple One subscription). It offers hundreds of guided video workout classes led by professional trainers, streamed on your iPhone, iPad, or Apple TV.\n\nWhat makes Fitness+ unique: it connects directly to your Apple Watch. During a workout, your real-time metrics — heart rate, calories burned, and activity rings — display directly on the workout video screen, keeping you motivated and aware of how hard you are working. You can see your progress alongside the trainer.\n\nFitness+ offers classes for all levels and ages, including categories specifically designed for older adults: Pilates, yoga, strength training, mindful cooldown, and a "Workouts for Older Adults" collection featuring lower-impact exercises. No gym membership or special equipment is needed for many classes.`,
    steps: [
      {
        title: 'Start an Apple Fitness+ subscription',
        content:
          "On your iPhone, open the Fitness app → tap \"Fitness+\" → \"Try Fitness+ Free.\" You get a free trial (typically 1-3 months for new subscribers), then $9.99/month. Alternatively, Apple Fitness+ is included in Apple One, the bundle that combines Apple services (Music, TV+, Arcade, iCloud+, and Fitness+) at a combined price. To check if you already have Fitness+ through Apple One: Settings → your name → Subscriptions.",
        tip: "Quick Tip: You do not need an Apple Watch to browse and watch Fitness+ videos, but you need one to see your real-time metrics on screen. Without a watch, you can still follow along — you just won't see your heart rate and calories overlaid on the video.",
      },
      {
        title: 'Find beginner and senior-friendly classes',
        content:
          "Open the Fitness app → Fitness+ tab. Tap \"Collections\" to browse curated workout programs. Look for \"Workouts for Older Adults,\" \"Starting Strength,\" or \"Beginner\" tagged classes. Workout types good for beginners and older adults: Yoga (flexibility and balance), Pilates (core strength, low impact), Core (gentle abdominal exercises), Dance (fun and low impact), Stretching (flexibility and mobility), and Meditation. Tap any class to see a preview, duration, and difficulty level before starting.",
        tip: 'Quick Tip: Start with 10-minute classes if you are new to exercise. Fitness+ has many short formats specifically for getting started without overexerting yourself.',
      },
      {
        title: 'Start a workout and understand the screen',
        content:
          "Tap any class → \"Let's Go.\" The video begins on your iPhone, iPad, or Apple TV screen. If you have an Apple Watch, your heart rate, active calories, and workout rings appear as a dashboard overlaid on the video. The trainer guides you through the class. Use the pause button if you need a break — the workout saves your progress. After completing a class, it shows your summary statistics and the class is logged to your Apple Health app.",
      },
      {
        title: 'Set up Fitness+ on Apple TV for big-screen workouts',
        content:
          "Working out to a large TV screen is much more motivating than a small phone screen. On your Apple TV: open the App Store → search \"Fitness+\" → download the free app → sign in with your Apple ID. Your subscription automatically works on Apple TV. When you start a Fitness+ workout on the Apple TV app, your Apple Watch still connects wirelessly and your metrics appear on the TV screen — full-screen heart rate and calories while you work out.",
      },
    ],
  },

  {
    slug: 'pill-reminder-medication-app',
    title: 'How to Use a Phone App to Remember to Take Your Medications',
    excerpt:
      'Pill reminder apps send you alerts when it is time to take each medication. Here are the best free options and how to set them up.',
    category: 'health-tech',
    tags: [
      'pill reminder',
      'medication app',
      'medication reminder',
      'health app',
      'seniors',
      'Medisafe',
    ],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Taking the right medications at the right times is one of the most important health habits — and one of the most commonly missed. Studies show that nearly half of people with chronic conditions do not take medications as prescribed, and forgetting is the most common reason.\n\nSmartphone pill reminder apps send you a notification at the exact time you need to take each medication. Unlike a basic alarm, these apps let you enter each medication by name, dosage, and schedule, so the reminder tells you exactly which pill to take. Many apps also track whether you took each dose and can alert a family member if you miss one.\n\nThe most popular free pill reminder apps are Medisafe, MyTherapy, and Round Health. This guide focuses on Medisafe, which is widely recommended and highly rated.`,
    steps: [
      {
        title: 'Download and set up Medisafe',
        content:
          "Open the App Store (iPhone) or Google Play Store (Android) and search \"Medisafe.\" Download the free app. Open it and create a free account (or use a guest account). Enter your basic health information. Medisafe will ask if you have a \"Medfriend\" — a family member who receives alerts if you miss a dose. This is optional but recommended for older adults who live alone.",
        tip: "Quick Tip: You can also use the iPhone's built-in Health app (iOS 16 and later) → Medications section to log and set reminders for medications. It is more basic than Medisafe but requires no separate app.",
      },
      {
        title: 'Add your medications',
        content:
          "Tap the + button to add a new medication. Type the medication name — Medisafe has a database of thousands of medications with dosages pre-filled. Select your medication from the dropdown. Enter the dosage (for example, 10mg), the form (tablet, capsule, liquid), and how many pills per dose. Set the schedule: once daily, twice daily, weekly, or a custom pattern. Set the time you want to be reminded.",
        tip: "Quick Tip: Add all your medications at once during setup. Having everything in one place gives you a clear medication schedule and helps you spot potential interactions — Medisafe will flag if two of your medications have known interactions.",
      },
      {
        title: 'Respond to reminders and track doses',
        content:
          "At the scheduled time, Medisafe sends a notification. Tap the notification to open the app → tap \"Taken\" when you take the medication, or \"Skipped\" if you intentionally miss it. A history log records every dose. At a doctor's appointment, you can show your doctor the history — it helps with conversations about medication adherence and timing.",
      },
      {
        title: 'Set up a Medfriend to help a family member',
        content:
          "Medisafe's Medfriend feature lets you designate a trusted family member or caregiver who gets a notification if you miss a dose. To set it up: tap your profile → \"Medfriend\" → invite by email. The Medfriend doesn't see your medications themselves — only whether you took your dose on time. This is a helpful safety net for anyone managing multiple medications. The Medfriend can be in a different city.",
        tip: "Quick Tip: MyTherapy is another excellent free alternative to Medisafe, with a clean interface and the ability to log symptoms and health measurements alongside medications. Both apps are free and well-maintained.",
      },
    ],
  },

  {
    slug: 'paramount-plus-streaming-guide',
    title: 'How to Use Paramount+ for Movies and TV Streaming',
    excerpt:
      'Paramount+ streams CBS shows, movies from Paramount Pictures, live sports, and news. Here is how to sign up, navigate, and find the best content.',
    category: 'entertainment',
    tags: ['paramount plus', 'streaming', 'CBS', 'movies', 'live tv', 'Showtime'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Paramount+ is the streaming service from Paramount Media Networks, which owns CBS, MTV, Comedy Central, Nickelodeon, BET, and the Paramount Pictures movie studio. It also includes Showtime content on the higher-tier plan.\n\nThe service includes: live CBS news and sports (including NFL games and March Madness on CBS), CBS shows streamed on demand, original series exclusive to Paramount+, thousands of Nickelodeon and classic TV episodes, and a large movie library. Plans start at about $5.99/month with ads or $11.99/month without ads. A Paramount+ with Showtime plan adds all Showtime content for about $11.99/month.\n\nIf you watch CBS regularly or are a sports fan, Paramount+ may be worth the price.`,
    steps: [
      {
        title: 'Sign up for Paramount+',
        content:
          "Go to paramountplus.com or download the Paramount+ app from the App Store or Google Play. Click \"Try It Free\" to start a trial (typically 7 days). Choose a plan: Essential ($5.99/month, includes ads and live CBS), Premium ($11.99/month, no ads, plus Showtime), or Paramount+ with Showtime ($11.99/month). Enter your email and create a password. Add a payment method. You can cancel before the trial ends and pay nothing.",
        tip: "Quick Tip: Paramount+ is sometimes available as part of bundles. Walmart+ members get a free Paramount+ Essential subscription. Some cable providers also offer it at no added cost — check your current provider.",
      },
      {
        title: 'Navigate the Paramount+ app',
        content:
          "The app home screen shows personalized recommendations. Use the top navigation: \"Home,\" \"Shows,\" \"Movies,\" \"Live\" (for live CBS channels and sports), and your profile icon. The \"Live\" tab is where you access live CBS broadcasts — local news, sports, and prime-time CBS shows as they air. For on-demand CBS shows, go to \"Shows\" → \"CBS\" and browse current seasons.",
      },
      {
        title: 'Find sports and live TV',
        content:
          "Tap \"Live\" at the top of the app. You see your local CBS affiliate and any currently live sporting events. During NFL season, some games broadcast on CBS appear here. Major events like Super Bowl on CBS and March Madness games are available live. Regional availability varies — some local affiliates are available everywhere, while some sports may have blackout restrictions in certain areas.",
        tip: "Quick Tip: Paramount+ typically allows you to watch live CBS programming from any device, including your phone and smart TV — useful for watching the news or a CBS show while traveling.",
      },
      {
        title: 'Create profiles and set up on your TV',
        content:
          "Paramount+ allows up to 6 profiles on a plan. Tap your profile icon → \"Add Profile\" to create separate profiles for different family members. Download the Paramount+ app on your smart TV, Roku, Fire TV, Apple TV, or gaming console and sign in with the same account. Your profiles, watch history, and continue-watching list sync across all your devices.",
      },
    ],
  },

  {
    slug: 'apple-one-subscription-guide',
    title: 'What Is Apple One and Is It Worth It?',
    excerpt:
      "Apple One bundles Apple Music, Apple TV+, Apple Arcade, iCloud+, and more into one monthly subscription. Here's what's included and how to decide if it saves you money.",
    category: 'app-guides',
    tags: ['apple one', 'apple subscriptions', 'apple music', 'apple tv', 'icloud', 'bundle'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Apple One is a subscription bundle that combines multiple Apple services at a single discounted monthly price. Instead of subscribing to Apple Music, Apple TV+, iCloud storage, and other Apple services separately, Apple One bundles them together for less than you would pay individually.\n\nThere are three Apple One tiers: Individual ($19.95/month — Apple Music, Apple TV+, Apple Arcade, iCloud+ 50GB), Family ($25.95/month — all Individual services + 200GB iCloud+ shared with up to 5 family members), and Premier ($37.95/month — all services + 2TB iCloud+ + Apple News+ and Apple Fitness+). Apple's pricing changes periodically — check apple.com/apple-one for current rates.\n\nThis guide helps you decide if Apple One makes financial sense for your specific usage.`,
    steps: [
      {
        title: 'Understand what each Apple service does',
        content:
          "Apple Music ($10.99/month alone): streaming music — 100 million songs, ad-free. Apple TV+ ($9.99/month alone): Apple's original shows and movies (Ted Lasso, The Morning Show, etc.). Apple Arcade ($6.99/month alone): over 200 games, no ads or in-app purchases. iCloud+ 50GB ($0.99/month): cloud storage for photos, backup, email. iCloud+ 200GB ($2.99/month). Apple Fitness+ ($9.99/month alone): guided workout videos. Apple News+ ($12.99/month alone): hundreds of magazines and news publications.",
        tip: "Quick Tip: Apple TV+ alone is $9.99/month and Apple One Individual is $19.95/month — for $10 more you get Apple Music and Arcade plus 50GB of iCloud storage. If you use streaming music, Apple One Individual almost always wins.",
      },
      {
        title: 'Calculate whether Apple One saves you money',
        content:
          "Add up what you currently pay for individual Apple services. For most people already paying for iCloud storage and one or two Apple services, Apple One is cheaper than paying separately. The Family plan is especially good value — for a family of 3-5 people sharing Apple Music and iCloud storage together, the Family plan costs less than one individual Apple Music subscription plus adequate iCloud storage for each person.",
      },
      {
        title: 'Subscribe to Apple One',
        content:
          "On iPhone or iPad: go to Settings → your name → Subscriptions → \"Get Apple One.\" Alternatively, go to the App Store → tap your profile icon → \"Apple One.\" Choose the Individual, Family, or Premier plan. Your existing Apple subscriptions are automatically bundled — you will not pay twice for services you already have; those subscriptions end at their current billing date and roll into Apple One.",
        tip: "Quick Tip: If you subscribe to Apple One Family, all family members in your Apple Family Sharing group get access immediately — they do not need to do anything extra to start using the services.",
      },
      {
        title: 'Cancel services you are paying for separately',
        content:
          "After subscribing to Apple One, check that your previous individual subscriptions were canceled to avoid double-billing. Go to Settings → your name → Subscriptions and confirm there are no active individual Apple service subscriptions (Apple Music, Apple TV+, etc.) still running. Apple should handle this automatically, but verify. Cancel any services that Apple One replaced but did not automatically end.",
      },
    ],
  },

  {
    slug: 'edit-crop-photos-phone-guide',
    title: 'How to Edit, Crop, and Brighten Photos on Your Phone',
    excerpt:
      'Your phone has powerful built-in photo editing tools. Here is how to straighten, crop, adjust brightness, and remove red-eye — no special app needed.',
    category: 'phone-guides',
    tags: ['photo editing', 'crop photo', 'adjust brightness', 'iphone photos', 'android photos'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `You do not need a separate photo editing app to make basic improvements to your photos. Both iPhone and Android have capable built-in editing tools in the Photos app that let you crop and straighten images, adjust brightness and contrast, correct color, reduce noise, and apply filters.\n\nBest of all, edits on both iPhone and Android are non-destructive — you can undo any edit at any time, even years later, by tapping "Revert" or "Undo edits." The original photo is always preserved.`,
    steps: [
      {
        title: 'Open the edit tools on iPhone',
        content:
          "Open the Photos app and tap any photo. Tap \"Edit\" in the top right. The editing toolbar appears along the bottom of the screen with three sections: Adjustments (sliders for brightness, exposure, contrast, etc.), Filters (preset looks), and Crop (crop and straighten tools). Tap each icon to switch between sections. Tap \"Done\" to save your edits, or \"Cancel\" → \"Discard Changes\" to undo everything.",
        tip: "Quick Tip: To revert any photo back to its original state after editing: open the photo → tap \"Edit\" → tap \"Revert\" at the bottom right. This works even weeks or months after editing.",
      },
      {
        title: 'Crop and straighten a photo',
        content:
          "Tap the crop icon (a square with arrows) in the editing toolbar. A grid overlay appears on your photo. Drag the corners to crop the photo to a tighter frame. To straighten a crooked photo: use the rotate dial below the photo — drag left or right to tilt the image until the horizon looks level. Tap the flip icon (on iPhone) to mirror the image horizontally. Tap \"Done\" to apply.",
      },
      {
        title: 'Adjust brightness, contrast, and other settings',
        content:
          "Tap the adjustments icon (dial/slider symbol). A row of adjustment tools appears at the bottom: Exposure (overall brightness), Brilliance (auto-enhance), Highlights (bright areas), Shadows (dark areas), Contrast, Brightness, Saturation, and more. Tap any adjustment to select it, then drag the slider below the photo left (less) or right (more). For a quick fix on a dark photo: increase Exposure and Shadows. For a washed-out photo: reduce Highlights and increase Contrast.",
        tip: "Quick Tip: Tap \"Auto\" (the magic wand icon) for a one-tap automatic enhancement. iPhones analyze the photo and apply corrections automatically — it is a good starting point that you can fine-tune afterward.",
      },
      {
        title: 'Basic editing on Android (Google Photos)',
        content:
          "Open Google Photos → tap a photo → tap the three-line Edit icon (or \"Edit\" button). Four editing sections appear at the bottom: Suggestions (auto fixes), Adjust (brightness, contrast, etc.), Filters (preset looks), and Crop. Tap \"Adjust\" to see sliders for Brightness, Contrast, White Point, Highlights, Shadows, and Warmth. Tap \"Crop\" to crop or rotate. When satisfied, tap \"Save copy\" to save the edited version (the original is preserved) or \"Overwrite\" to replace.",
      },
    ],
  },

  {
    slug: 'annotate-screenshot-guide',
    title: 'How to Annotate and Mark Up a Screenshot on Your Phone',
    excerpt:
      'After taking a screenshot, you can draw on it, add text, highlight areas, and crop it before sharing — a useful skill for asking for tech help or sharing information.',
    category: 'tips-tricks',
    tags: ['screenshot', 'annotate', 'markup', 'draw on photo', 'iphone', 'android'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Taking a screenshot is only the first step. What makes screenshots truly useful is the ability to annotate them — circle what you want someone to look at, add a text label, draw an arrow pointing at something, or crop out personal information before sharing.\n\nBoth iPhone and Android have built-in annotation tools that open immediately after taking a screenshot. Once you learn these, you can take a screenshot of a confusing error message, circle the problem area, and send it to family or tech support in seconds.`,
    steps: [
      {
        title: 'Annotate a screenshot on iPhone',
        content:
          "After taking a screenshot (press the side button + volume up simultaneously), a small thumbnail preview appears in the bottom left corner. Tap it immediately before it disappears (or open it from Photos later). The Markup editor opens. At the bottom: a pen for drawing, a highlighter, a pencil, an eraser, and a lasso for selecting. Tap the pen tool and draw directly on the screenshot. Tap the + button for additional tools: text, a signature, magnifier circle, or shapes (arrows, circles, rectangles).",
        tip: "Quick Tip: The arrow shape tool is one of the most useful — draw an arrow pointing to what you want to highlight. Tap the shapes icon → arrow icon → drag to place and resize.",
      },
      {
        title: 'Add text labels to a screenshot on iPhone',
        content:
          "In the Markup editor: tap the + button at the bottom right → tap \"Text.\" A text box appears on the screenshot. Double-tap it to edit and type your label (for example, \"Error is here\" or \"Tap this button\"). Drag the text box to position it. Change font size and color by tapping the A icon at the bottom left. Tap \"Done\" when finished, then share from the Photos app.",
      },
      {
        title: 'Annotate a screenshot on Android (Google Pixel or Samsung)',
        content:
          "On most Android phones, after taking a screenshot, a toolbar appears at the bottom of the screen for a few seconds. Tap the pen/edit icon to open the annotation editor. Draw, add text, or use shape tools. On Samsung Galaxy phones: after a screenshot, tap the pen icon in the screenshot toolbar → Samsung's screenshot editor opens with drawing tools, text, and a crop tool. On Google Pixel: tap the screenshot thumbnail → tap the pencil icon to open the Markup tool.",
        tip: "Quick Tip: If the screenshot toolbar disappears before you tap the edit icon, find the screenshot in your Gallery or Photos app → tap \"Edit\" → look for a Markup or Annotate option.",
      },
      {
        title: 'Crop and share the annotated screenshot',
        content:
          "After marking up your screenshot, use the crop tool to trim any unnecessary parts (especially if the screenshot shows personal information you don't want to share). On iPhone: the crop tool is available in the Markup editor bottom bar. On Android: crop tools are typically available in the same editing interface. After cropping, tap Done or Save. Share directly from the markup editor or from your photo library — tap the share icon and choose Messages, email, or any other app.",
      },
    ],
  },

  {
    slug: 'forward-text-messages-guide',
    title: 'How to Forward a Text Message to Someone Else',
    excerpt:
      "Forwarding a text message shares it with someone who wasn't part of the original conversation. Here's how to do it on iPhone and Android.",
    category: 'essential-skills',
    tags: ['forward text', 'text message', 'sms', 'imessage', 'android messages', 'share message'],
    readTime: '3 min',
    thumbnailEmoji: '↪',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Forwarding a text message works like forwarding an email — you send a copy of an existing message to a new person, who can then read the original message. This is useful when you receive information (like a meeting address, a funny message, or an important alert) and want to share it with someone not on the original thread.\n\nForwarding works for both regular SMS text messages and iMessages on iPhone. The forwarded copy starts a new conversation or message thread with the new recipient.`,
    steps: [
      {
        title: 'Forward a text on iPhone',
        content:
          "Open the Messages app. Find and open the conversation containing the message you want to forward. Press and hold on the specific message bubble (not the entire conversation). A menu appears — tap \"More.\" Small circles appear next to each message — tap the circle next to the message(s) you want to forward to add a checkmark. Tap the forward arrow (curved arrow icon) at the bottom right of the screen. A new message compose window opens with the text pre-filled. Add the recipient's name or phone number → tap Send.",
        tip: "Quick Tip: You can select multiple messages to forward at once using the checkboxes that appear in \"More\" mode.",
      },
      {
        title: 'Forward a text on Android (Google Messages)',
        content:
          "Open Google Messages. Open the conversation containing the message. Long-press (press and hold) on the message bubble you want to forward. Tap the three-dot menu (⋮) at the top right → \"Forward.\" A new compose window opens with the message pre-filled. Enter the contact you want to forward to and tap Send.",
      },
      {
        title: 'Copy and paste text if forwarding is not available',
        content:
          "If you cannot find a forward option, you can copy the message text and paste it into a new message. Press and hold on the message bubble → tap \"Copy.\" Open a new message to the recipient → long-press in the text field → tap \"Paste.\" This method works on all phones and all messaging apps, though it does not include any photos or attachments from the original message.",
        tip: "Quick Tip: When forwarding a message containing a phone number, address, or link, consider that the recipient will see the information but not the original sender's name. Add a note like \"FYI from Sarah:\" so they know the context.",
      },
    ],
  },

  {
    slug: 'set-default-apps-guide',
    title: 'How to Change Default Apps on iPhone and Android',
    excerpt:
      'Default apps determine which app opens when you tap a link, an email address, or a phone number. Here is how to change them to your preferred apps.',
    category: 'tips-tricks',
    tags: ['default apps', 'change browser', 'default email', 'iphone settings', 'android settings'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `When you tap a web link in an email or message, it opens in a web browser. When you tap an email address, it opens in an email app. When you tap a phone number, it dials using the phone app. The app that handles these actions is called the "default" app.\n\nBy default, iPhones use Safari for web links and Apple Mail for email. Android phones typically use Chrome and Gmail. But if you prefer a different browser (like Chrome on iPhone or Firefox on Android) or a different email app, you can change the default so links automatically open in your preferred app.\n\nThis guide explains how to change default apps on both iPhone and Android.`,
    steps: [
      {
        title: 'Change the default web browser on iPhone',
        content:
          "Go to Settings → scroll down to find the browser you want to make default (Chrome, Firefox, DuckDuckGo, etc.) → tap on it → \"Default Browser App\" → select your browser. Now, tapping any web link from any app will open in your chosen browser instead of Safari. Note: Safari still works normally — it's not removed, just no longer the default for links.",
        tip: "Quick Tip: You need to have the alternative browser app installed before you can set it as the default. Download Chrome or Firefox from the App Store first.",
      },
      {
        title: 'Change the default email app on iPhone',
        content:
          "Go to Settings → scroll down to find your preferred email app (Gmail, Outlook, Spark, etc.) → tap on it → \"Default Mail App\" → select your app. Tapping any email address on a webpage or in a document now opens your chosen email app to compose a message instead of Apple Mail.",
      },
      {
        title: 'Change default apps on Android',
        content:
          "Android is more flexible with defaults. Go to Settings → Apps → tap the three-dot menu (⋮) or \"Default apps.\" You see options for: Browser app, Phone app, Messaging app, Digital assistant app, and more. Tap any category and choose from the apps you have installed that can handle that function. You can also change defaults when an app asks \"How do you want to open this?\" — tap the app you want and choose \"Always\" to make it the permanent default.",
        tip: "Quick Tip: On Android, if you tap a link and the wrong app opens, you can reset defaults at any time. Go to Settings → Apps → find the current default app → tap \"Open by default\" → \"Clear defaults.\" The next time you tap that type of link, your phone will ask which app to use.",
      },
      {
        title: 'Set a default navigation app for maps',
        content:
          "When someone texts you an address, tapping it should open your preferred navigation app — Google Maps, Apple Maps, or Waze. On Android: go to Settings → Apps → Default apps → and set your map app. On iPhone: Apple Maps is the default, but you can change it — go to Settings → scroll to find Google Maps or Waze → tap \"Default navigation app\" (available on iOS 18 and later) → select your preferred app.",
      },
    ],
  },

  {
    slug: 'android-backup-restore-guide',
    title: 'How to Back Up and Restore Your Android Phone',
    excerpt:
      "Android phones back up to your Google account automatically — but only if you've turned it on. Here's how to verify, run a manual backup, and restore.",
    category: 'phone-guides',
    tags: ['android backup', 'google backup', 'restore android', 'phone backup', 'data backup'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Android phones back up your data to Google's servers automatically when connected to Wi-Fi — but only if this feature is enabled. The backup includes: app data (your app settings and saved progress), call history, contacts, device settings, SMS text messages, and photos (via Google Photos). When you set up a new Android phone with the same Google account, all this data restores automatically.\n\nChecking that backup is on and running a manual backup before you upgrade or factory-reset your phone can save you from losing everything. This guide shows how to do both.`,
    steps: [
      {
        title: 'Check that backup is enabled',
        content:
          "Go to Settings → Google → Backup (on most Android phones). On Samsung Galaxy: Settings → Accounts and backup → Samsung Cloud (for Samsung-specific data) and Google (for Google backup). Confirm \"Back up to Google Drive\" is turned ON. Also check that Google Photos backup is enabled: open Google Photos → tap your profile picture → \"Photo settings\" → \"Backup\" → turn ON. Photos are stored separately from the main Android backup.",
        tip: "Quick Tip: The path to backup settings varies by Android phone brand and Android version. If you can't find it, search \"backup\" in your Settings search bar.",
      },
      {
        title: 'Run a manual backup now',
        content:
          "To back up immediately rather than waiting for the scheduled automatic backup: go to Settings → Google → Backup → tap \"Back up now.\" The backup runs in the background and usually completes within a few minutes on a fast Wi-Fi connection. A timestamp at the bottom of the Backup screen shows when the last backup completed. Run a manual backup before factory resetting, upgrading, or handing off your phone.",
      },
      {
        title: 'Restore a backup on a new or reset Android phone',
        content:
          "Turn on the new or reset phone and follow the setup wizard. When asked if you want to restore from a backup: tap \"Restore from Google account\" (or \"Copy data from old device\" and choose \"A backup from the cloud\"). Sign in with the Google account you used on your previous phone. A list of backup dates appears — choose the most recent one. The setup wizard restores your apps, contacts, settings, and call history automatically.",
        tip: "Quick Tip: App downloads are restored automatically by Google Play, but may take 30-60 minutes to fully reinstall all apps. Your photos from Google Photos also sync automatically — open the Google Photos app after setup to see your library.",
      },
      {
        title: 'Use Google One to confirm and manage your backups',
        content:
          "Google One (the Google storage management service) shows you all your device backups. Go to one.google.com → \"Storage\" → \"Backups\" to see a list of devices and when each was last backed up. From here you can see the backup size, delete old device backups you no longer need, or confirm your current phone's backup is recent. Old device backups take up storage space — delete backups from phones you no longer own.",
      },
    ],
  },

  {
    slug: 'apple-shortcuts-beginners-guide',
    title: 'How to Use Apple Shortcuts to Automate Tasks on Your iPhone',
    excerpt:
      "Apple Shortcuts lets your iPhone do repetitive tasks automatically — one tap sends a message, starts directions home, or sets your morning routine in motion.",
    category: 'tips-tricks',
    tags: ['apple shortcuts', 'automation', 'iphone', 'siri shortcuts', 'productivity'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Apple Shortcuts is a free app from Apple that lets you create one-tap buttons or voice commands that perform multiple actions at once. Think of it as a personal automation tool: instead of doing five separate steps every morning, one tap can do all five for you.\n\nFor example, a "Heading Home" shortcut might: open Google Maps with your home address, send a text to your family saying you're on the way, and start your favorite playlist — all from a single tap or by saying "Hey Siri, heading home."\n\nShortcuts comes pre-installed on iPhones running iOS 12 or later. The Gallery inside the app offers hundreds of ready-to-use shortcuts — you do not need to build your own from scratch.`,
    steps: [
      {
        title: 'Explore the Shortcuts Gallery',
        content:
          "Open the Shortcuts app on your iPhone (search for it if needed). Tap \"Gallery\" at the bottom. Browse categories: Essentials, Home, Music, Health, and more. Tap any shortcut to see what it does, then tap \"Add Shortcut\" to add it to your Shortcuts library. Try these starter shortcuts: \"Text Last Person\" (texts the last person you messaged), \"Directions Home\" (opens Maps with your home address), \"Sunrise\" (opens Maps to the sunrise time and direction near you), and \"Current Date\" (copies today's date to your clipboard).",
        tip: 'Quick Tip: You can run any shortcut by asking Siri. Once a shortcut is in your library, say "Hey Siri, [Shortcut name]" to run it by voice.',
      },
      {
        title: 'Add a shortcut to your home screen for one-tap access',
        content:
          "After adding a shortcut, you can put it on your iPhone home screen as an icon. In the Shortcuts app, tap the three-dot menu on any shortcut → \"Add to Home Screen.\" Choose an icon and name. Tap \"Add.\" The shortcut appears on your home screen like a regular app — tap it once to run the entire sequence of actions. This is perfect for shortcuts you use daily.",
      },
      {
        title: 'Create a simple custom shortcut',
        content:
          "Tap the \"+\" button to create a new shortcut. Tap \"Add Action.\" The action library opens — search for \"Send Message.\" Tap it. Set the recipient and message text. Tap \"Done.\" Name the shortcut something memorable, like \"Check in with family.\" Now run it by tapping the shortcut or saying \"Hey Siri, check in with family\" — it sends the message automatically without you having to type anything.",
        tip: "Quick Tip: The \"Ask Each Time\" option in action fields means Siri will ask you to fill in the value each time the shortcut runs. Use this for shortcuts where the message text or recipient should vary.",
      },
      {
        title: 'Set up automation shortcuts that run on a schedule',
        content:
          "Tap \"Automation\" at the bottom of the Shortcuts app → tap the \"+\" to create a new automation. Choose a trigger: \"Time of Day,\" \"Location\" (when you arrive/leave home), or \"App\" (when you open a specific app). For example: every morning at 7 AM, your phone automatically turns off Do Not Disturb and opens your news app. Or when you arrive home, your phone connects to your home Wi-Fi and turns off your VPN automatically.",
      },
    ],
  },

  {
    slug: 'live-text-iphone-copy-photo',
    title: 'How to Use Live Text to Copy Text From Photos on iPhone',
    excerpt:
      "iPhone's Live Text feature reads text in any photo or through your camera and lets you copy it, look it up, or call a phone number — no typing required.",
    category: 'tips-tricks',
    tags: ['live text', 'iphone', 'copy text from photo', 'camera text', 'ios 15', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Live Text is an iPhone feature (available on iPhone XS and later, running iOS 15 or later) that can recognize and interact with text in photos and through your camera. This means you can point your camera at a business card, a restaurant menu, a sign, a receipt, or a whiteboard and tap to copy the text, call a phone number, open a website, or translate text — all without typing a single character.\n\nLive Text is also incredibly useful for accessibility — if you receive a photo with a phone number or address in it, you no longer need to manually type it; you just tap it. This guide explains how to use it in the Camera app, Photos app, and other places.`,
    steps: [
      {
        title: 'Enable Live Text (if not already on)',
        content:
          "Go to Settings → General → Language & Region → make sure \"Live Text\" is toggled ON. On most iPhones running iOS 15 or later, this is enabled by default. Live Text works with text in English, French, German, Italian, Portuguese, Spanish, Chinese, Cantonese, Japanese, and Korean.",
        tip: "Quick Tip: Live Text only works on iPhone XS (2018) and later. If your iPhone is older than that, the feature is not available regardless of iOS version.",
      },
      {
        title: 'Use Live Text through your camera',
        content:
          "Open the Camera app and point your camera at any text — a sign, a business card, a menu, a label. A small, framed icon appears in the bottom right corner (it looks like lines of text inside a small box). Tap that icon. The camera pauses and recognized text is highlighted in yellow. Tap the highlighted text to: \"Copy,\" \"Look Up,\" \"Translate,\" \"Search the Web,\" or if it is a phone number, \"Call\" or \"Add to Contacts.\"",
      },
      {
        title: 'Use Live Text on photos in your Photos app',
        content:
          "Open any photo in the Photos app that contains text. Look for the Live Text icon (lines in a box) in the bottom right corner of the photo. Tap it to highlight all recognized text in yellow. Long-press on any highlighted text to select it and copy. Tap any recognized phone number to call it, any web address to open the website, or any email address to compose an email. This works on old photos and new ones alike.",
        tip: "Quick Tip: Live Text also works in screenshots. If someone sends you a screenshot with an address or phone number in it, open it in Photos, tap Live Text, and tap the address to open it in Maps or the number to call it.",
      },
      {
        title: 'Use Live Text to translate signs and menus',
        content:
          "When traveling or reading content in a foreign language, point your camera at foreign text and tap the Live Text icon. After Live Text highlights the text, tap \"Translate\" to translate it into English (or another language). This is built into iOS and does not require a separate translation app. It works for menus, signs, labels, and documents.",
      },
    ],
  },

  {
    slug: 'android-home-screen-organize',
    title: 'How to Organize Your Android Home Screen',
    excerpt:
      "An organized Android home screen puts your most-used apps front and center. Here's how to rearrange apps, create folders, add widgets, and remove clutter.",
    category: 'tips-tricks',
    tags: ['android home screen', 'organize apps', 'widgets', 'folders', 'launcher', 'android'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your Android home screen is the first thing you see when you unlock your phone. An organized home screen with your most-used apps in easy reach can make your phone significantly easier to use. Instead of hunting through pages of apps, you can access everything you need with one or two taps.\n\nAndroid home screens are highly customizable — you can rearrange apps, create folders, add widgets, change icon sizes, and even install alternative launchers for completely different layouts. This guide covers the basics for getting your home screen organized.`,
    steps: [
      {
        title: 'Move and rearrange app icons',
        content:
          "Long-press (press and hold) any app icon on your home screen. After a moment, the icon lifts and you can drag it to a new position. Drag it to another spot on the same page, or drag it to the edge of the screen to move it to a different home screen page. Release your finger to drop the icon in the new position. Long-pressing also reveals an option to remove the app from the home screen (without uninstalling it) — tap \"Remove\" or drag it to the Remove icon at the top.",
        tip: "Quick Tip: Your most-used apps should be at the bottom of the screen — this is easiest to reach with your thumb. Place the phone app, messages, and email in the bottom dock for the most accessible position.",
      },
      {
        title: 'Create folders to group similar apps',
        content:
          "To create a folder: long-press an app icon and drag it on top of another app icon you want to group with it. A folder is created automatically. Drop more apps into the folder by dragging them onto it. Tap the folder once to open it and see all apps inside. Tap the folder name to rename it (for example, \"Health Apps,\" \"Banking,\" \"Family\"). Folders help reduce clutter by grouping related apps together instead of spread across multiple pages.",
      },
      {
        title: 'Add useful widgets to your home screen',
        content:
          "Widgets are live, interactive previews of apps — like a weather forecast, calendar events, or news headlines displayed directly on your home screen without opening an app. To add a widget: long-press an empty area of the home screen → tap \"Widgets\" → scroll through available widgets → long-press the widget you want and drag it to a blank space on your home screen. Adjust the size by dragging the resize handles. Common useful widgets: Weather, Calendar, Clock, Google News feed, and Battery level.",
        tip: "Quick Tip: A clock widget on the home screen lets you see the time and date at a glance without having to tap anything. Many seniors find a large clock widget makes their phone easier to check quickly.",
      },
      {
        title: 'Remove apps from your home screen to reduce clutter',
        content:
          "Long-press any app icon → tap \"Remove from Home Screen\" (this does NOT uninstall the app — it just hides it from the home screen; the app is still in your app drawer). To actually uninstall an app: long-press → \"Uninstall\" or \"Remove App.\" Keep only the apps you use weekly on your home screen. Less visual clutter means faster navigation. All installed apps remain accessible through the app drawer (swipe up from the home screen).",
      },
    ],
  },

  {
    slug: 'add-apps-smart-tv-guide',
    title: 'How to Add New Apps to Your Smart TV',
    excerpt:
      'Smart TVs can download streaming apps, games, and utilities just like a phone. Here is how to find and install new apps on the most popular TV platforms.',
    category: 'entertainment',
    tags: ['smart tv', 'tv apps', 'streaming', 'roku', 'fire tv', 'samsung tv', 'LG tv'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Smart TVs have an app store — similar to the App Store on your phone — where you can download streaming services, games, news apps, and more. When you first set up your TV, it usually comes with a few popular apps pre-installed, but many others are available to add for free.\n\nThe process is slightly different depending on your TV platform (Roku, Amazon Fire TV, Samsung, LG, Android TV/Google TV), but the general idea is the same: find the app store on your TV, search for the app you want, and install it for free.\n\nThis guide covers adding apps on the four most common TV platforms.`,
    steps: [
      {
        title: 'Add apps on Roku TV',
        content:
          "Press the Home button on your Roku remote. Scroll down to \"Streaming Channels\" or \"Channel Store.\" Browse by category (Featured, Movies & TV, Sports, Kids, etc.) or use the Search bar to find a specific app. Click on any app → \"Add Channel\" → \"OK.\" The channel installs and appears on your Roku home screen. Most channels are free to add; some streaming services require a paid subscription to actually watch content.",
        tip: "Quick Tip: On Roku, installed apps are called \"Channels.\" Look for the Channel Store in your main menu if you don't see \"Streaming Channels.\"",
      },
      {
        title: 'Add apps on Amazon Fire TV',
        content:
          "From the Fire TV home screen, scroll right to \"Find\" → select \"Apps\" or \"App Store.\" Browse the categories or type in the search bar at the top. Click any app → \"Get\" (for free apps) or \"Buy\" (for paid apps). The app downloads and installs automatically. It appears in your app library or on the home screen under \"Your Apps & Channels.\"",
      },
      {
        title: 'Add apps on Samsung Smart TV',
        content:
          "Press the Smart Hub button on your Samsung remote (it looks like a house or a grid of squares). Navigate to the Apps section → click the Search icon at the top. Type the app name. Click the app in results → \"Install.\" Installed apps appear in your App Bar at the bottom of the screen. If you don't see a new app on the home bar immediately, go to Apps → \"Recently Added\" to find it.",
        tip: "Quick Tip: Samsung Smart TVs are regularly updated with new apps. If an app you want isn't available in the Samsung App Store, it may only be available on Roku or Fire TV (which are streaming sticks you can plug into your TV as an alternative).",
      },
      {
        title: 'Add apps on LG TV or Android TV (Google TV)',
        content:
          "On LG webOS TVs: press the Home button → open the LG Content Store → browse or search for apps → Install. On Android TV or Google TV (newer TVs from Sony, Hisense, TCL, etc.): navigate to the Google Play Store icon on the home screen → search for the app → Install. Google TV has a much larger app selection since it uses the same Play Store as Android phones.",
      },
    ],
  },

  {
    slug: 'screen-recorder-iphone-guide',
    title: 'How to Record Your iPhone Screen (Screen Recording)',
    excerpt:
      "iPhone has a built-in screen recorder that captures everything happening on your display — perfect for showing someone else a tech problem or saving a video that doesn't have a download option.",
    category: 'tips-tricks',
    tags: ['screen recording', 'iphone', 'record screen', 'screen capture', 'ios'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Screen recording captures everything that happens on your iPhone screen as a video — like a screenshot, but for an entire sequence of actions. This is useful when you need to show someone exactly what is happening on your phone (to get tech help), save a video from an app that doesn't have a download button, record a video call conversation you want to keep, or create a tutorial for family members.\n\nThe recording is saved as a video file in your Photos app and can be shared like any other video. Screen recording is built into iPhones running iOS 11 or later — no additional app required.`,
    steps: [
      {
        title: 'Add Screen Recording to your Control Center',
        content:
          "The Screen Recording button may not appear in your Control Center by default. To add it: go to Settings → Control Center → scroll down to \"More Controls\" → tap the green + next to \"Screen Recording.\" It is now available in your Control Center. To open Control Center: swipe down from the top right corner of your screen (iPhones without a Home button) or swipe up from the bottom (iPhones with a Home button).",
        tip: "Quick Tip: You only need to add Screen Recording to Control Center once. After that, it is always available from any screen by swiping to open Control Center.",
      },
      {
        title: 'Start and stop a screen recording',
        content:
          "Open Control Center (swipe down from the top right). Tap the Screen Recording button — it looks like a filled circle inside a circle. A 3-second countdown appears, then recording begins. The status bar at the top of your screen turns red to indicate recording is active. Use your phone normally — everything you do is being recorded. To stop recording: tap the red indicator at the top of the screen → \"Stop.\" The recording is saved to your Photos app.",
      },
      {
        title: 'Record with audio (microphone)',
        content:
          "By default, screen recording captures system sounds (sounds from the phone) but not your voice. To also record your voice (useful for creating tutorials): press and hold the Screen Recording button in Control Center. A panel expands — tap the microphone icon to turn it on (it will highlight when active). Tap \"Start Recording.\" Your voice is now captured along with the screen.",
        warning:
          "If you record a call or video involving another person, get their consent first. Depending on your state, recording a conversation without consent may not be allowed.",
      },
      {
        title: 'Find, trim, and share the recording',
        content:
          "Open the Photos app and find the new recording in your Recents album (it has a camera/video icon and shows the length). Tap it to play. To trim it: tap \"Edit\" → drag the yellow handles at the start and end of the video timeline to cut out unwanted portions. Tap \"Done\" → \"Save Video.\" To share: tap the share icon and choose Messages, email, or any other app. Screen recordings can be large files — trim to only what you need before sharing.",
      },
    ],
  },

  {
    slug: 'shared-family-calendar-setup',
    title: 'How to Set Up a Shared Family Calendar on iPhone or Google',
    excerpt:
      'A shared calendar lets your whole family see appointments, events, and reminders in one place — everyone stays on the same page without constant phone calls.',
    category: 'essential-skills',
    tags: ['shared calendar', 'family calendar', 'google calendar', 'icloud calendar', 'apple calendar'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `A shared family calendar is a calendar that multiple family members can all see and add events to. When one person adds a doctor's appointment, a grandchild's school play, or a family dinner, everyone in the family sees it on their own calendar automatically — no group text needed to coordinate.\n\nBoth Apple (through iCloud) and Google Calendar offer shared calendars. Apple's works best for families where everyone uses iPhones. Google Calendar works across iPhone and Android (or a mix), making it a better choice for mixed-device families.\n\nThis guide walks through setting up a shared calendar in both services.`,
    steps: [
      {
        title: 'Create a shared calendar in Google Calendar (recommended for all devices)',
        content:
          "Open Google Calendar on your phone or at calendar.google.com. In the left sidebar, tap the + next to \"Other calendars\" → \"Create new calendar.\" Give it a name like \"Family Calendar.\" On the calendar settings page, find \"Share with specific people\" → enter a family member's Gmail address. Choose their permission level: \"See all event details\" (can view) or \"Make changes to events\" (can also add and edit). Click \"Send.\" They receive an email invitation to subscribe.",
        tip: "Quick Tip: Once a family member accepts the invitation, the family calendar appears in their Google Calendar and syncs automatically. Events either of you adds appear for everyone in the group.",
      },
      {
        title: 'Set up a shared iCloud calendar (Apple/iPhone families)',
        content:
          "Open the Calendar app on iPhone → tap \"Calendars\" at the bottom → tap the info icon (ⓘ) next to any calendar → tap \"Add Person\" → enter a family member's iCloud email address → tap \"Add.\" They receive an invitation. Once they accept, events added to that calendar are visible to everyone you shared it with. To add a new event to the shared calendar: when creating an event, tap \"Calendar\" to change which calendar it goes to.",
      },
      {
        title: 'Add events to the shared calendar',
        content:
          "When creating a new event, always confirm it is being added to the shared family calendar (not a personal calendar). In Google Calendar: tap the + to add an event → scroll down to the Calendar field → change it to your family calendar. In iPhone Calendar: tap + for a new event → find the Calendar field → select the shared family calendar by name. Events added to your personal calendar are not visible to others.",
        tip: "Quick Tip: For recurring family events (weekly dinners, regular medication reminders, grandkids' activities), set them as repeating events — they appear on the calendar automatically each week or month without re-entering.",
      },
      {
        title: 'View the shared calendar on any device',
        content:
          "Google Calendar syncs automatically across the Google Calendar app on any device — iPhone, Android, tablet, or computer (calendar.google.com). iCloud Calendar syncs across Apple devices and can be viewed on iCloud.com on a computer. Family members can see events from their own calendar mixed with family calendar events — each calendar shows in a different color so you can tell whose events are whose at a glance.",
      },
    ],
  },

  {
    slug: 'mac-split-view-multitasking',
    title: 'How to Use Split View on Mac to Work With Two Apps Side by Side',
    excerpt:
      "Mac Split View lets you fill your entire screen with two apps side by side — great for comparing documents, following instructions while you work, or multitasking.",
    category: 'mac-guides',
    tags: ['mac split view', 'multitasking', 'side by side', 'macos', 'full screen', 'productivity'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Split View on Mac fills your entire screen with two apps displayed side by side. This is different from simply resizing windows — in Split View, both apps take up exactly half the screen (or any proportion you choose) and there are no overlapping windows or desktop distractions visible. It is ideal for working from a document while writing notes, comparing two spreadsheets, or following instructions in Safari while working in an app.\n\nSplit View has been available on Mac since macOS El Capitan (2015). It works best on a large display but is useful on any Mac screen size.`,
    steps: [
      {
        title: 'Enter Split View from the green button',
        content:
          "Move your cursor to the top left corner of any app window — you will see three colored dots: red, yellow, and green. Hover over (do not click) the green dot. A small menu appears showing: \"Enter Full Screen,\" \"Tile Window to Left of Screen,\" and \"Tile Window to Right of Screen.\" Click \"Tile Window to Left of Screen.\" The window fills the left half of your screen. macOS then shows all your other windows on the right — click any window to fill the right half.",
        tip: "Quick Tip: If the hover menu doesn't appear, click and hold the green dot for a moment — the menu should pop up. Alternatively, you may need to enable Tiled windows in System Settings → Desktop & Dock → \"Windows.\"",
      },
      {
        title: 'Adjust the size of each app in Split View',
        content:
          "In Split View, a thin vertical divider line appears between the two apps. Click and drag that divider left or right to give more space to one app or the other. One app can be wider than the other — useful if one app needs more space to display properly (like a spreadsheet) while the other is just showing reference material.",
      },
      {
        title: 'Switch which apps are in Split View',
        content:
          "To swap one of the Split View apps for a different one: move your cursor to the very top of the screen — the menu bar appears briefly. Click the Mission Control button (two overlapping rectangles at the top right, or press the Mission Control keyboard key) to see all your open windows. Drag any other open window into the Split View space to replace the current app there. Or click the green button on either app to exit Split View and return to regular windows.",
      },
      {
        title: 'Exit Split View',
        content:
          "To exit Split View: move your cursor to the top of the screen → click the green dot on either app → click \"Exit Full Screen\" or \"Move window to desktop.\" Both apps return to regular resizable windows on the desktop. Alternatively, press Escape on the app you want to pull out — though this may depend on the app.",
        tip: "Quick Tip: Stage Manager (available on macOS Ventura and later) is an alternative multitasking approach that shows multiple app groupings in a sidebar. Try both Split View and Stage Manager to see which feels more natural for how you work.",
      },
    ],
  },

  {
    slug: 'listen-to-internet-radio',
    title: 'How to Listen to Free Radio Stations on Your Phone or Smart TV',
    excerpt:
      'Internet radio gives you access to thousands of live radio stations from across the country and around the world — completely free. Here is how to tune in.',
    category: 'entertainment',
    tags: ['internet radio', 'tunein', 'iheartradio', 'radio app', 'free streaming', 'music'],
    readTime: '4 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Internet radio lets you listen to live radio stations over your Wi-Fi or phone data connection — without a traditional radio receiver. You can listen to your hometown station from anywhere in the country, tune into a radio station from a city you love, or discover stations by genre: jazz, classical, country, oldies, talk radio, sports, and more.\n\nMost internet radio apps are free. The most popular options are TuneIn Radio (which carries major news networks like NPR, BBC, and local news radio), iHeartRadio (which has thousands of US stations), and Pandora (a personalized music radio service). This guide covers TuneIn and iHeartRadio, both of which are free to use.`,
    steps: [
      {
        title: 'Download TuneIn Radio for live news and local stations',
        content:
          "TuneIn has the widest selection of live radio, including news stations, sports radio, and international stations. Download the free \"TuneIn Radio\" app from the App Store or Google Play. No account required for basic listening. Open the app and browse: the \"Local Radio\" section shows stations broadcasting from your area. The \"By Location\" tab lets you search for stations from any city in the US or abroad. Tap any station to start listening.",
        tip: "Quick Tip: TuneIn carries many major news networks live: NPR, CNN, MSNBC, Fox News Radio, BBC World Service, and local news/talk stations. For news radio listeners, it is an excellent free option.",
      },
      {
        title: 'Use iHeartRadio for music radio stations',
        content:
          "Download the free \"iHeartRadio\" app. Create a free account (just an email and password). Search for your favorite station by call letters (like WNYC, WXYZ) or search by city and genre. iHeartRadio also offers \"Artist Stations\" — stations that play music similar to a specific artist you like. Tap the play button on any station to start listening. You can \"Favorite\" stations by tapping the heart icon to add them to your collection for fast access.",
      },
      {
        title: 'Listen to internet radio on a smart TV',
        content:
          "TuneIn and iHeartRadio apps are available on most smart TVs, Roku, Amazon Fire TV, and Apple TV. Install the app from your TV's app store (search \"TuneIn\" or \"iHeartRadio\"). You can also ask Alexa on an Echo device: \"Alexa, play WNYC on TuneIn\" or \"Alexa, play NPR\" — Alexa is integrated with TuneIn and knows thousands of station names.",
      },
      {
        title: 'Try Pandora for personalized music radio',
        content:
          "Pandora is a personalized music radio service — you type in an artist or song you like, and Pandora creates a custom station that plays music similar to your taste. Download the free \"Pandora\" app. The free version plays with occasional ads. You can thumbs-up or thumbs-down songs to refine your station over time. Pandora is one of the original internet radio services and has been around since 2000 — it is widely trusted and works well for discovering new music in genres you already enjoy.",
        tip: "Quick Tip: Amazon Echo/Alexa devices work well for internet radio. Try saying \"Alexa, play some jazz\" or \"Alexa, play NPR\" to start listening on a smart speaker without picking up your phone.",
      },
    ],
  },

  {
    slug: 'kindle-library-borrow-books',
    title: 'How to Borrow and Read Free eBooks Using the Kindle App',
    excerpt:
      'You can borrow free eBooks from your public library and read them on your phone or tablet using the Kindle app — no Kindle device needed.',
    category: 'app-guides',
    tags: ['kindle', 'ebooks', 'library', 'free books', 'overdrive', 'libby', 'digital reading'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `You do not need an Amazon Kindle device to read digital books. The free Kindle app on your smartphone or tablet turns your phone into a Kindle — you can read eBooks right on your screen, adjust the text size, change the background color, and read in the dark.\n\nThere are two ways to get eBooks on the Kindle app: purchase books from Amazon (which start at $0.99 and up) or borrow eBooks for free from your public library through an app called Libby (or OverDrive). Library borrowing gives you access to thousands of titles at no cost — the same library card you use for physical books works for digital books too.\n\nThis guide covers both purchasing from Amazon and borrowing from your library.`,
    steps: [
      {
        title: 'Download and set up the Kindle app',
        content:
          "Open the App Store (iPhone) or Google Play (Android) and search \"Kindle.\" Download the free app by Amazon. Open it and sign in with your Amazon account. If you do not have an Amazon account, tap \"Create a new Amazon account\" — it is free and only requires an email address. Once signed in, any Kindle books you have purchased previously appear in your library automatically.",
        tip: "Quick Tip: Amazon offers a Free Kindle Books section — hundreds of books available at no cost. In the Amazon app or amazon.com, search \"Free Kindle Books\" or browse free titles in the Kindle Store.",
      },
      {
        title: 'Purchase a Kindle book from Amazon',
        content:
          "Open the Amazon app or amazon.com. Search for any book title. On the book's page, look for the Kindle edition — there should be a \"Buy with 1-Click\" button or \"Add to Cart\" button with a Kindle price listed. After purchase, the book downloads to your Kindle app within seconds. Open the Kindle app on your phone and the book is in your library, ready to read.",
        tip: "Quick Tip: Before buying, check if the library version is available for free. Many popular books are in the library — if there's a wait list, it is still free and saves the purchase price.",
      },
      {
        title: 'Borrow free eBooks from your public library with Libby',
        content:
          "Download the free \"Libby\" app (by OverDrive) from your app store. Open Libby → tap \"Find My Library\" → search for your public library by city or name. Tap \"Sign In with Library Card\" → enter your library card number (the long number on the back of your card) and PIN. You now have access to your library's entire digital catalog. Search for any book → if available, tap \"Borrow\" → it appears in your Libby loans. Tap \"Read with Kindle\" to send it to your Kindle app, or read directly in Libby.",
      },
      {
        title: 'Adjust reading settings in the Kindle app',
        content:
          "Open any book in the Kindle app. Tap the center of the screen to reveal controls. Tap the \"Aa\" button (or font icon) to adjust: text size (larger for easier reading), font style, line spacing, and background color (white, sepia, or black with white text for night reading). Tap anywhere on the text to resume reading. Your reading position, highlights, and bookmarks sync automatically if you read on multiple devices.",
        tip: "Quick Tip: The Sepia background color (warm tan/beige) is recommended for extended reading — it reduces eye strain compared to bright white, especially in the evening.",
      },
    ],
  },
];
