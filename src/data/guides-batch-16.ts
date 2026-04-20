// TekSure Guides Batch 16 — 22 guides covering: pig-butchering scam,
// eBay safety, photo backup strategy, device charging, Netflix parental
// controls, Skype, Wi-Fi security, YouTube to TV, wet phone, carrier
// switching, contact backup, phone bill, Max/HBO, YouTube TV, family
// location sharing, smart locks, Google Photos albums, Amazon Photos,
// AI voice call scams, senior phone plan savings, Windows 11 Start Menu,
// Mac accessibility overview.
import type { Guide } from './guides';

export const guidesBatch16: Guide[] = [
  {
    slug: 'pig-butchering-investment-scam',
    title: 'Pig-Butchering Scams: How Fake Friends Steal Your Savings',
    excerpt:
      'Pig-butchering is a long-con investment fraud that starts with a friendly text from a stranger. Learn how it works and how to protect yourself.',
    category: 'safety-guides',
    tags: [
      'pig butchering',
      'investment scam',
      'crypto fraud',
      'romance scam',
      'financial fraud',
      'seniors',
    ],
    readTime: '7 min',
    thumbnailEmoji: '🐷',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Pig-butchering scams are one of the fastest-growing fraud types in the United States, costing Americans billions of dollars every year. The name comes from the idea of "fattening a pig before slaughter" — scammers build a relationship with you over weeks or months, gaining your trust, before convincing you to invest money in a fake platform and then stealing everything.\n\nThese scams often begin with what appears to be a wrong number or a random friendly message. Someone reaches out on WhatsApp, Facebook Messenger, or by text. They claim they messaged you by accident, but then strike up a warm, friendly conversation. Over time they become a "friend" or even a romantic interest. They share photos, talk about their life, ask about yours, and seem genuinely interested in you.\n\nAt some point they mention how well they're doing financially — often thanks to cryptocurrency or foreign currency trading. They show you screenshots of huge profits. They offer to teach you or let you use "their platform." When you put money in, you can watch it seem to grow. But the platform is entirely fake. The gains are fake. The person you've been talking to — often an overseas criminal operation — vanishes the moment you try to withdraw, or demands more "taxes and fees" before releasing your money.\n\nOlder adults are heavily targeted because they may have retirement savings, may live alone, and respond to genuine connection. The FTC estimates older Americans lose more money to investment fraud than any other scam type. Knowing the warning signs can protect you and your family.`,
    steps: [
      {
        title: 'Recognize the setup: a stranger who stays friendly',
        content:
          "Be cautious of any unexpected message from someone you don't know — especially if they claim to have messaged the wrong number but keep talking to you anyway. Scammers are trained to be warm, patient, and attentive. They remember your birthday. They ask follow-up questions. They seem like the kind of caring person you'd want as a friend. This is not an accident — it's a deliberate tactic to build trust before introducing 'the investment opportunity.'",
        warning:
          "If someone you've never met contacts you out of nowhere and the conversation quickly feels unusually close or personal, pause. Real strangers rarely form deep bonds within days.",
      },
      {
        title: 'Watch for the investment pitch',
        content:
          "After building trust — which may take weeks — the scammer mentions making money through cryptocurrency, forex (foreign currency) trading, or a specialized financial app. They show screenshots of large profits. They offer to teach you or share access. They might say they have a connection at an investment firm, or that a family member built the platform. The goal is to get you to deposit money — often starting small so it feels low-risk.",
        tip: 'Quick Tip: Any investment platform recommended by someone you only know online — no matter how much you like them — should be independently verified. Search the platform name plus the word "scam" before you ever deposit anything.',
      },
      {
        title: "Understand why you can't get your money out",
        content:
          "Pig-butchering platforms are designed to show growing account balances that feel real. When you try to withdraw, the platform claims you must pay taxes, fees, insurance, or a minimum balance before releasing funds. No matter how much you pay, another fee appears. Your 'friend' urges you to pay because your profits are waiting. In reality there are no profits — every dollar you send is gone immediately.",
        warning:
          "Legitimate investment platforms never require you to pay fees upfront before withdrawing your own money. That requirement is the hallmark of a scam — stop all payments immediately.",
      },
      {
        title: 'Report it and do not send more money',
        content:
          "If you think you've been targeted: stop all contact with the person, stop sending money, and report it. Report to the FTC at ReportFraud.ftc.gov, the FBI's Internet Crime Complaint Center at ic3.gov, and your bank or financial institution right away. If you sent cryptocurrency, contact the exchange. Speed matters — the sooner you report, the better the chance of recovery.",
        tip: 'Quick Tip: If a family member or friend has been targeted, approach them with compassion, not criticism. These scammers are professionals. The shame and embarrassment victims feel is exactly what the criminals count on to stop people from reporting.',
      },
    ],
  },

  {
    slug: 'ebay-buying-selling-safely',
    title: 'How to Use eBay Safely for Buying and Selling',
    excerpt:
      'eBay lets you buy used items at low prices and sell things you no longer need. Here is how to use it confidently without getting scammed.',
    category: 'app-guides',
    tags: ['ebay', 'online shopping', 'selling online', 'buying used', 'marketplace', 'paypal'],
    readTime: '6 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `eBay is one of the largest online shopping sites in the world, and it has been around since 1995. It is used to buy and sell all kinds of items — from electronics and clothing to collectibles, books, and household goods. Many items on eBay are used or refurbished, which means you can find great deals on things that would cost much more in a store.\n\nBuyers can either bid on items in an auction format or choose "Buy It Now" to purchase at a fixed price. Sellers list their items with photos, a description, and a starting price. eBay acts as the marketplace, and payments go through eBay's payment system (formerly PayPal, now integrated directly).\n\neBay is generally safe for buyers because most purchases are covered by eBay's Money Back Guarantee — if an item doesn't arrive, arrives broken, or isn't as described, eBay will typically refund you. However, there are scams on every marketplace, so knowing what to watch for keeps you protected. This guide covers both buying and selling basics so you can use eBay with confidence.`,
    steps: [
      {
        title: 'Create an eBay account and understand seller ratings',
        content:
          `Go to ebay.com and click "Register" to create a free account. Use a strong, unique password and add a phone number for security. When shopping, always check the seller's feedback score before buying. The score appears next to the seller's username as a percentage. Sellers with 98% or higher positive feedback and hundreds of reviews are reliable. New sellers with 0 or very few reviews carry more risk — consider whether the deal is worth it.`,
        tip: 'Quick Tip: Read the most recent feedback comments, not just the overall score. If someone recently left negative reviews mentioning slow shipping or items not as described, that is more relevant than a high overall score built up years ago.',
      },
      {
        title: 'Understand "Buy It Now" vs. auction listings',
        content:
          '"Buy It Now" listings let you purchase immediately at the listed price — these work like a normal online store. Auction listings let you place a bid, and the highest bidder at the end of the auction (usually 7 days) wins. For auctions, set a maximum bid amount and eBay will bid for you automatically up to that amount. You only pay what was needed to win, not necessarily your maximum.',
        tip: "Quick Tip: If you're new to eBay, start with \"Buy It Now\" listings. Auctions can be exciting but it's possible to get caught up in the bidding and overpay for something.",
      },
      {
        title: 'Pay safely and check the listing carefully before buying',
        content:
          `Always pay through eBay's official checkout page — never send money by wire transfer, gift cards, or Zelle to a seller. These payment methods offer no buyer protection. Read the full item description carefully, look at all the photos, and note the item's condition (New, Used, Refurbished, Parts Only). Check the return policy. If a listing has very few photos, a vague description, or a price that seems impossibly low, proceed with caution.`,
        warning:
          "If a seller asks you to take the transaction 'off eBay' and pay them directly — even with a story about saving on fees — this is a scam attempt and voids all buyer protection. Report the seller and do not pay outside eBay.",
      },
      {
        title: 'Sell items you no longer need',
        content:
          'To list something for sale, click "Sell" at the top of eBay.com. Take clear, well-lit photos of your item from multiple angles. Write an honest, specific description including any flaws or wear. Research what similar items sold for by clicking "Sold listings" in the left sidebar when searching. Ship items promptly — within 1-2 business days is the eBay standard. Use USPS, UPS, or FedEx with a tracking number, and keep the receipt.',
        tip: 'Quick Tip: eBay automatically deposits your earnings to your bank account. Make sure your banking information is up to date in your eBay account under My eBay → Account.',
      },
    ],
  },

  {
    slug: 'back-up-photos-multiple-places',
    title: 'How to Back Up Your Photos in More Than One Place',
    excerpt:
      'Photos are irreplaceable. Backing them up to two or more locations means you will never lose them — not even if your phone breaks or gets stolen.',
    category: 'essential-skills',
    tags: [
      'photo backup',
      'icloud',
      'google photos',
      'amazon photos',
      'photos',
      'backup strategy',
    ],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your phone's photos may be the only copies of important memories — family gatherings, grandchildren, vacations, life events. If your phone breaks, gets lost, or is stolen, those photos could be gone forever without a backup. A single backup is good. Two backups in different locations is much safer.\n\nThe approach professionals use is called the "3-2-1 rule": keep 3 copies of important files, on 2 different types of storage, with 1 copy stored off-site (like the cloud). For most people, a practical version is: photos automatically backed up to the cloud (like iCloud or Google Photos) PLUS a second backup to another cloud service or an external hard drive.\n\nThe good news is that most modern phones can back up photos automatically in the background, so you don't have to do anything manually after the initial setup. This guide walks through the most common backup options and how to set them up, so your photos are always protected.`,
    steps: [
      {
        title: 'Turn on automatic cloud backup (first line of defense)',
        content:
          'On iPhone: go to Settings → tap your name at the top → iCloud → Photos → turn on "Sync this iPhone." This sends all photos to iCloud automatically whenever you are on Wi-Fi. On Android: open the Google Photos app → tap your profile picture → "Photo settings" → "Backup" → turn on "Backup." Both services give you free storage up to a limit (5GB for iCloud, 15GB for Google Photos) and charge a small monthly fee if you need more.',
        tip: 'Quick Tip: iCloud 50GB costs $0.99/month and holds thousands of photos. Google One 100GB costs $2.99/month. Either option is worth it compared to losing your photos.',
      },
      {
        title: 'Add a second cloud backup with Amazon Photos',
        content:
          'If you have an Amazon Prime membership, Amazon Photos gives you unlimited full-resolution photo storage at no extra cost. Download the Amazon Photos app (free on iPhone and Android), sign in with your Amazon account, and turn on automatic backup. Amazon Photos works alongside iCloud or Google Photos — photos back up to both services at the same time. This gives you two cloud backups.',
        tip: "Quick Tip: Amazon Photos also lets you share albums with family members, so everyone can see and add to a shared family photo library. It's included with your Prime membership — there's no reason not to use it.",
      },
      {
        title: 'Create a physical backup with a flash drive or external drive',
        content:
          'For a completely offline backup (not dependent on any internet service), periodically copy photos to a USB flash drive or external hard drive. On iPhone, connect to a computer and iTunes will let you copy photos. On Android, connect via USB cable and copy the DCIM folder. Alternatively, download photos from iCloud.com or Google Photos to your computer and then copy to the drive. Store the drive in a different location than your phone — a desk drawer or safe works well.',
        warning:
          "Flash drives and hard drives can also fail over time. Refresh your physical backup every 2-3 years by transferring to a new drive. Don't rely on a single old drive as your only backup.",
      },
      {
        title: 'Verify your backup is actually working',
        content:
          "Every few months, spot-check your backup. Open iCloud.com or Google Photos on a computer or tablet and confirm your recent photos are there. Delete a test photo from your phone and see if you can retrieve it from the cloud. Knowing your backup works before you need it gives you confidence. Also check the backup app for warning messages — sometimes backups pause if your phone is low on storage or hasn't connected to Wi-Fi.",
      },
    ],
  },

  {
    slug: 'charge-devices-safely',
    title: 'How to Charge Your Phone and Devices Safely',
    excerpt:
      'Learn the right way to charge your phone, tablet, and laptop to keep the battery healthy, prevent overheating, and avoid fire hazards.',
    category: 'tips-tricks',
    tags: [
      'phone charging',
      'battery health',
      'charger safety',
      'overnight charging',
      'fire safety',
    ],
    readTime: '4 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Nearly everyone charges their phone overnight or leaves it plugged in for hours at a time. Most of the time this is fine, but there are some charging habits that can shorten your battery life, damage your device, or in rare cases, cause a fire or overheating problem.\n\nModern smartphones have built-in battery management software that's designed to prevent overcharging — the phone stops actively charging once it reaches 100%. However, there are still habits that can degrade your battery faster than normal, and a few genuine safety concerns worth knowing about.\n\nThis guide covers the most common charging questions and how to keep your devices, and your home, safe.`,
    steps: [
      {
        title: 'Use the right charger for your device',
        content:
          "Always use the charger that came with your device, or a certified replacement from the device's manufacturer. Cheap third-party chargers — especially from unknown brands on discount sites — can lack proper voltage regulation and cause damage or, rarely, fires. Look for chargers that are UL listed or have a USB-IF certification mark. Reputable brands like Anker, Belkin, and Apple-certified accessories are safe choices.",
        warning:
          "Counterfeit chargers look identical to genuine ones but lack the safety components. If a charger gets unusually hot during use, produces a burning smell, or sparks when plugged in, stop using it immediately.",
      },
      {
        title: 'Keep your phone in a safe place while charging',
        content:
          "Charge your phone on a hard, flat surface — a nightstand, table, or desk. Avoid charging on soft surfaces like pillows, blankets, or your bed. Soft surfaces block airflow and trap heat, which shortens battery life and, in rare cases, can cause overheating. Do not cover a charging phone with blankets. Also avoid leaving a phone charging in direct sunlight or in a hot car.",
        tip: 'Quick Tip: Phones naturally get warm while charging — that is normal. But if your phone gets hot enough that it is uncomfortable to hold, unplug it and let it cool before continuing.',
      },
      {
        title: 'Know the truth about overnight charging',
        content:
          "Modern iPhones, Android phones, and iPads have Optimized Battery Charging that learns your schedule and slows down the final charge so the battery stays at 80% most of the night and only reaches 100% near your wake time. This reduces battery wear. Overnight charging is generally fine with modern devices, but the ideal range for battery health is keeping your phone between 20% and 80% if you want the battery to last as long as possible over years of use.",
        tip: "Quick Tip: On iPhone, go to Settings → Battery → Battery Health & Charging to see your battery's current health percentage and turn on Optimized Charging. On Android, the setting varies by manufacturer — check Settings → Battery for options.",
      },
      {
        title: 'Check for recalls on chargers and batteries',
        content:
          "Occasionally, chargers and device batteries are recalled due to safety issues. The Consumer Product Safety Commission (CPSC) maintains a recall database at cpsc.gov/recalls. If you hear about a recall on the news or from a manufacturer, take it seriously — stop using the affected product and follow the recall instructions for a replacement. Also, if your phone battery has become swollen or puffed up (making the back of your phone bulge), stop using it and take it to a repair shop — a swollen battery is a fire risk.",
      },
    ],
  },

  {
    slug: 'netflix-parental-controls-guide',
    title: 'How to Set Parental Controls on Netflix for Grandkids',
    excerpt:
      "Netflix's parental controls let you create a kid-friendly profile, set maturity ratings, and use a PIN to block adult content.",
    category: 'entertainment',
    tags: [
      'netflix',
      'parental controls',
      'kids',
      'grandchildren',
      'streaming',
      'content filters',
    ],
    readTime: '5 min',
    thumbnailEmoji: '👨‍👩‍👧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Netflix is one of the most popular streaming services in the world, and if your grandchildren or great-grandchildren visit your home, they may want to watch shows and movies on your account. Netflix offers two main ways to keep younger viewers safe: a dedicated Kids Profile and a Profile Lock (PIN) that controls what each account can access.\n\nA Kids Profile automatically limits what can be watched to content rated TV-Y, TV-Y7, TV-G, and TV-PG — age-appropriate shows and movies. It also hides the browsing of adult content entirely. A Profile Lock lets you add a PIN to any profile so that children can't switch from their profile to yours and watch content intended for adults.\n\nThis guide walks you through setting both up in just a few minutes.`,
    steps: [
      {
        title: 'Create a Kids Profile on Netflix',
        content:
          `Open Netflix and click or tap on the profile icon at the top right. Click "Manage Profiles" → "Add Profile." Enter a name like "Kids" or a grandchild's name. Turn on the "Kids" toggle — this automatically applies the strictest content filters. Click Save. This profile now appears on the account select screen whenever anyone opens Netflix. Grandchildren can use this profile and will only see age-appropriate content.`,
        tip: 'Quick Tip: A Kids Profile cannot be changed without logging into the main Netflix account. Children cannot turn off the content filters from within a Kids Profile.',
      },
      {
        title: 'Add a PIN to your adult profiles',
        content:
          "To prevent kids from switching to your profile: go to Netflix.com in a web browser (this doesn't work from the app). Click your profile icon at the top right → Account → scroll down to \"Profile & Parental Controls\" → click on your profile → \"Profile Lock\" → enter your Netflix password → turn on \"Require a PIN to access [your profile] on all devices\" → set a 4-digit PIN → Save. Now your profile requires a PIN to open.",
        tip: 'Quick Tip: Choose a PIN that is different from your phone PIN or other common numbers. Write it down somewhere safe in case you forget it.',
      },
      {
        title: 'Set maturity rating limits on any profile',
        content:
          "You can also set a maximum content rating on any profile (not just Kids). Go to Netflix.com → Account → Profile & Parental Controls → click any profile → \"Viewing Restrictions\" → set the highest maturity level allowed (Little Kids, Older Kids, Teens, Adults). Set it to \"Older Kids\" or \"Teens\" for a pre-teen. Any content above that rating will be hidden from that profile.",
      },
      {
        title: 'Review watch history to see what was viewed',
        content:
          "If you want to check what has been watched on any profile: go to Netflix.com → Account → Profile & Parental Controls → click a profile → \"Viewing Activity.\" This shows every title watched with dates and times. You can also delete individual items from the viewing history if you want to remove something from the algorithm's recommendations.",
      },
    ],
  },

  {
    slug: 'skype-video-calls-guide',
    title: 'How to Use Skype for Free Video Calls',
    excerpt:
      "Skype lets you make free video and voice calls to family and friends anywhere in the world. Here's how to get started from scratch.",
    category: 'communication',
    tags: ['skype', 'video call', 'free calls', 'international calls', 'microsoft', 'seniors'],
    readTime: '5 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Skype has been one of the most popular free video and voice calling apps for over two decades. It lets you call other Skype users anywhere in the world — from the United States to Europe, Asia, or anywhere else — completely free of charge. You can also use Skype to call regular phone numbers at low per-minute rates, which is useful for calling landlines abroad.\n\nSkype is owned by Microsoft and is available on Windows computers, Mac computers, iPhones, Android phones, and tablets. Many families use Skype to stay in touch across long distances. If you have family members living in another country who you want to call regularly without expensive phone bills, Skype is a reliable option.\n\nThis guide covers setting up Skype and making your first call.`,
    steps: [
      {
        title: 'Download and install Skype',
        content:
          "On a computer: go to skype.com and click \"Get Skype for Windows\" or \"Get Skype for Mac.\" Download and run the installer. On iPhone: open the App Store and search \"Skype\" — it's the blue app with a white \"S\" by Microsoft. On Android: open the Google Play Store and search \"Skype.\" Download and install the free app. Open Skype after installing.",
        tip: "Quick Tip: Skype is also built into Windows 11 computers — you may already have it. Look for the Skype icon in the Start menu before downloading a new copy.",
      },
      {
        title: 'Create a Skype account or sign in with Microsoft',
        content:
          "When Skype opens, click \"Sign in or create.\" If you have a Microsoft account (the same email you use for Outlook, Hotmail, or Windows), you can sign in with that. If not, click \"Create account\" to make a new free Microsoft account — you'll just need an email address and password. Once signed in, Skype may ask permission to use your camera and microphone — click Allow. This is needed for video calls.",
      },
      {
        title: 'Find a contact and make your first call',
        content:
          "Click the search bar at the top of Skype and type the name or email address of the person you want to call. They need to have a Skype account too. Click their name in the search results and click \"Add to contacts.\" Once they accept your request, their name appears in your contact list. Click their name → click the video camera icon to start a video call, or the phone icon for a voice-only call.",
        tip: "Quick Tip: The person you're calling needs to have Skype open on their device to receive your call. Let them know you're about to call so they're ready.",
      },
      {
        title: 'Use Skype during a call',
        content:
          "During a call, you'll see buttons at the bottom of the screen. The camera icon turns your video on or off. The microphone icon mutes or unmutes your voice. The red phone icon ends the call. If the other person's picture is small or you want to fill the screen, hover over their video and look for a full-screen option. You can also type in the chat box on the right side of the screen during a call — useful if someone can't hear you clearly.",
        tip: 'Quick Tip: Skype calls work best on a stable Wi-Fi connection. If the video keeps freezing or dropping, try moving closer to your Wi-Fi router, or turn off your video (audio-only calls use much less bandwidth).',
      },
    ],
  },

  {
    slug: 'secure-home-wifi-network',
    title: 'How to Make Your Home Wi-Fi Network More Secure',
    excerpt:
      'A few simple changes to your router settings can stop strangers from using your Wi-Fi and help protect your devices from hackers.',
    category: 'internet-connectivity',
    tags: ['wifi security', 'router', 'network password', 'home network', 'cybersecurity'],
    readTime: '6 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Your home Wi-Fi network connects every device in your house to the internet — your phone, computer, smart TV, tablets, and even smart home devices. If your network is not properly secured, neighbors or strangers could connect to it and use your internet without your permission. More seriously, an unsecured network makes it easier for cybercriminals to intercept information you send and receive.\n\nThe good news is that securing your home network is not complicated. The most important steps are: changing the default router password, using a strong Wi-Fi password, and making sure your router uses modern security. Most people can complete all of these in about 15 minutes.\n\nYou do not need to be technical to follow these steps. The most important thing is knowing where to find your router's settings, which this guide explains.`,
    steps: [
      {
        title: 'Access your router settings',
        content:
          "Your router's settings are accessed through a web browser. Open any web browser (Chrome, Safari, Edge) and type your router's IP address into the address bar. For most home routers, this is 192.168.1.1 or 192.168.0.1. Press Enter. A login page appears. The default username and password are often printed on a sticker on the back or bottom of your router — common defaults are admin/admin or admin/password. Look for a label that says \"Admin Password\" or \"Router Password.\"",
        tip: 'Quick Tip: If neither 192.168.1.1 nor 192.168.0.1 works, check the sticker on your router for the web address to use.',
      },
      {
        title: 'Change the default router admin password',
        content:
          "Once logged in, look for a section called \"Administration,\" \"System,\" or \"Router Settings.\" Find \"Admin Password\" or \"Router Login Password\" and change it from the default to something strong and unique (mix of letters, numbers, and symbols). Write it down and keep it somewhere safe — you rarely need this password but it is important to have it when you do. This prevents anyone else who connects to your network from being able to change your router's settings.",
        warning:
          'This admin password is different from your Wi-Fi password. Changing one does not change the other.',
      },
      {
        title: 'Set a strong Wi-Fi password and use WPA3 or WPA2 security',
        content:
          "In your router settings, find \"Wireless Settings\" or \"Wi-Fi Settings.\" Look for the \"Security Mode\" or \"Encryption\" setting. Choose WPA3 if available; if not, WPA2-AES. Avoid WEP and WPA (older, insecure options). Change your Wi-Fi password to something at least 12 characters long — a phrase with spaces works well (example: PurpleSunset2026!). After saving, all your devices will need to re-enter the new password once.",
        tip: `Quick Tip: After changing your Wi-Fi password, go to each device and reconnect with the new password. Start with the device you're most likely to use, then work through the others.`,
      },
      {
        title: 'Create a guest network for visitors',
        content:
          "Most modern routers let you create a separate \"Guest Network\" — a second Wi-Fi network for visitors. When neighbors or guests ask for your Wi-Fi, give them the guest network password instead of your main one. This keeps your main network (and all your personal devices) separate from visitor devices. Look for \"Guest Network\" or \"Guest Wi-Fi\" in your router settings. Give it a different name and password than your main network.",
        tip: "Quick Tip: A guest network is also great for smart home devices (smart TVs, bulbs, thermostats) which often have weaker security than phones and computers. Putting them on the guest network separates them from your sensitive devices.",
      },
    ],
  },

  {
    slug: 'cast-youtube-to-tv',
    title: 'How to Watch YouTube on Your TV From Your Phone',
    excerpt:
      'You can send YouTube videos from your phone to your TV screen in seconds using Chromecast, AirPlay, or the YouTube app built into smart TVs.',
    category: 'entertainment',
    tags: ['youtube', 'cast to tv', 'chromecast', 'airplay', 'smart tv', 'streaming'],
    readTime: '5 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `YouTube has billions of videos — tutorials, music, news, cooking shows, travel videos, and much more. While watching on a phone or tablet is fine for short clips, bigger-screen viewing on your TV makes the experience much more enjoyable for cooking guides, exercise videos, or anything you want to share with family.\n\nThere are three main ways to get YouTube onto your TV: using the YouTube app if your TV is a smart TV, casting from your phone using Google Chromecast or Amazon Fire TV, or using AirPlay if you have an Apple TV or AirPlay 2-compatible TV and an iPhone. All three methods are wireless — no cables needed once set up.\n\nThis guide covers the most common options so you can choose the one that matches your setup.`,
    steps: [
      {
        title: 'Check if your TV has YouTube built in',
        content:
          "Most smart TVs made in the last 5 years have a YouTube app pre-installed. Use your TV remote to find the app launcher — usually a home button or apps button. Look for the red YouTube icon. If you see it, open it and sign into your Google account to access your subscriptions and watch history. If you don't have a YouTube app, your TV may have a built-in web browser you can use instead — look in the smart TV menu.",
        tip: "Quick Tip: Signing into YouTube on your TV with the same Google account you use on your phone means your watch history and subscriptions are the same on both devices.",
      },
      {
        title: 'Cast from your Android phone using the YouTube app',
        content:
          "On Android: open the YouTube app, start any video, and tap the cast icon — a small rectangle with a Wi-Fi signal in the corner. It appears at the top right of the video player. Your phone and TV must be on the same Wi-Fi network. A list of available devices appears — tap your TV or Chromecast. The video begins playing on the TV. You can still control playback (play, pause, volume) from your phone even after it locks.",
        tip: 'Quick Tip: You can keep using your phone for other things while the video plays on TV — it works like a remote control.',
      },
      {
        title: 'Cast from iPhone using AirPlay',
        content:
          "On iPhone: open YouTube and start a video. Tap the AirPlay icon (looks like a rectangle with a triangle at the bottom) — or tap the video to see controls and look for the AirPlay/Cast icon. Select your Apple TV or AirPlay 2-compatible TV from the list. Your iPhone and TV must be on the same Wi-Fi network. The video plays on the big screen.",
        tip: "Quick Tip: If you don't see an AirPlay option, try opening Control Center (swipe down from the top right of your iPhone screen), tap \"Screen Mirroring,\" and select your TV. This mirrors your entire phone screen — not just YouTube.",
      },
      {
        title: 'Use a YouTube code to link your phone and TV',
        content:
          "Another option: open YouTube on your smart TV and go to Settings → Sign in or Link TV. The TV shows a code. On your phone, open youtube.com/activate and enter that code. Now your phone becomes a remote for YouTube on TV — you can search and browse on your phone and the video plays on the big screen. This works on any YouTube-capable TV without needing Chromecast or AirPlay.",
      },
    ],
  },

  {
    slug: 'what-to-do-if-phone-gets-wet',
    title: 'What to Do If Your Phone Gets Wet or Falls in Water',
    excerpt:
      'Act fast but calmly. Here is exactly what to do — and what not to do — in the first hour after your phone gets wet, to give it the best chance of survival.',
    category: 'phone-guides',
    tags: ['wet phone', 'water damage', 'phone repair', 'emergency', 'rice myth', 'phone tips'],
    readTime: '4 min',
    thumbnailEmoji: '💧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Dropping your phone in water — whether in the sink, the toilet, or a puddle — triggers instant panic. But in most cases, there is a good chance your phone will survive if you act quickly and correctly.\n\nMany modern smartphones (iPhone 12 and later, Samsung Galaxy S series, Google Pixel) are water-resistant, rated IP67 or IP68. This means they can survive being submerged in up to 1-2 meters of fresh water for 30 minutes in a lab setting. But water resistance degrades over time, and saltwater, pool water, or drops from height reduce protection. Even "water-resistant" phones can be damaged by water.\n\nThe most important thing to know right now: do NOT put your phone in rice. This is a popular myth. Rice does not absorb moisture from inside the phone, and the rice dust can cause new problems. Here is what actually works.`,
    steps: [
      {
        title: 'Get the phone out of water immediately and turn it off',
        content:
          "Remove the phone from water as fast as possible. Hold it upright (screen up, charging port down) and shake it gently to dislodge water from the charging port, headphone jack, and speaker grills. If the phone is still on and responsive, turn it off immediately — press and hold the power button and select \"Power off.\" Keeping electronics powered with water inside causes short circuits. Do not plug it in to charge.",
        warning:
          "Do not press any buttons repeatedly, shake the phone hard, or use a hair dryer or heat gun on it. Heat and excess motion push water further into the device.",
      },
      {
        title: 'Dry the outside gently and remove any case',
        content:
          'Remove the phone from its case. Use a soft cloth or paper towels to gently pat the outside dry — especially around the charging port, speaker, and buttons. Hold the phone vertically with the charging port facing down and tap it gently against your hand to help water drain out. Do not rub the ports or grills — gentle pressure only.',
        tip: 'Quick Tip: A can of compressed air (like Dust-Off, used for keyboards) can gently push water out of ports. Hold it about 2 inches away and spray in short bursts. Do not use a vacuum — static electricity can damage the phone.',
      },
      {
        title: 'Leave it in a dry place for at least 24-48 hours',
        content:
          "Place the phone in a dry, room-temperature location with good airflow — not a drawer, not next to a heater. Some people place it near (not in) a fan. Leave it off for at least 24 hours, ideally 48 hours before trying to power it on. The longer you wait, the more moisture evaporates. Resist the urge to check if it works after just a few hours.",
        tip: 'Quick Tip: Silica gel packets (the small packets that say "Do Not Eat" found in shoe boxes and packaging) actually do absorb moisture. If you have any, place the phone and several packets in a sealed bag together. This is more effective than rice.',
      },
      {
        title: 'Test the phone and know when to visit a repair shop',
        content:
          "After 24-48 hours, try turning the phone on. Test calls, speakers, the camera, and the charging port. If anything doesn't work, the phone may need professional service. Take it to an Apple Store (Genius Bar), a Samsung Experience Store, or a reputable phone repair shop. Ask about water damage repair. Water damage may not be covered by a standard warranty, but many repairs are affordable. Mention how long it was submerged and in what type of water.",
      },
    ],
  },

  {
    slug: 'switch-cell-phone-carriers-guide',
    title: 'How to Switch Cell Phone Carriers Without Losing Your Number',
    excerpt:
      "Switching phone carriers can save you $50-$100 or more per month. Here's how to compare plans, keep your phone number, and make the change smoothly.",
    category: 'phone-guides',
    tags: [
      'switch carriers',
      'phone plan',
      'transfer number',
      'port number',
      'Verizon',
      'AT&T',
      'T-Mobile',
      'MVNO',
    ],
    readTime: '6 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Phone plans have changed dramatically in recent years. Many carriers now offer plans specifically designed for people 55 and older, and smaller "virtual" carriers (called MVNOs) often use the same towers as Verizon, AT&T, or T-Mobile but charge 40-70% less per month.\n\nSwitching your cell phone carrier sounds intimidating, but it is a routine process that happens thousands of times a day. Your phone number is yours — it belongs to you, not the carrier — and you have the legal right to take it with you when you switch. This is called "porting" your number.\n\nBefore switching, make sure your phone is unlocked (not tied to your current carrier). Most phones are automatically unlocked after they are paid off, or after 12 months of service. You can call your current carrier to confirm.`,
    steps: [
      {
        title: 'Compare plans before you switch',
        content:
          `Common options worth comparing: T-Mobile Essentials 55+ (two lines, special senior pricing), AT&T Value Plus 55+, Consumer Cellular (AARP partner, no contracts, widely recommended for seniors), Mint Mobile (T-Mobile network, very low cost, pay monthly or upfront), Visible (Verizon network, $25-$30/month unlimited). For the best deals, search AARP Wireless Partners or compare plans on the AARP cell phone plan comparison tool. Check coverage in your area by entering your zip code on each carrier's website before switching.`,
        tip: "Quick Tip: If you don't use much data (only check email, browse Facebook, and occasionally use maps), a 5GB or 10GB plan may be all you need and will cost significantly less than unlimited.",
      },
      {
        title: 'Do NOT cancel your old service before switching',
        content:
          'This is the most important rule of switching carriers. Do not cancel your current plan until your new carrier has activated your service and ported your number. Canceling first causes your number to be released, which makes it much harder to transfer. Instead, start the switch with the new carrier — they will handle contacting your old carrier and initiating the number transfer.',
        warning:
          'If you have a contract with your current carrier, check if an early termination fee applies. Many carriers now offer no-contract plans, so this is less common, but worth confirming before you switch.',
      },
      {
        title: 'Gather what you need to switch',
        content:
          "To port your number you'll need: your current account number (found on your phone bill or in your carrier's account page), your account PIN or password (set when you created your account), your current billing address, and your phone's IMEI number (a unique device ID — dial *#06# to see it). Have these ready when signing up with the new carrier.",
        tip: "Quick Tip: The number transfer (porting) usually takes 1-2 hours but can take up to 24 hours. During that window, calls and texts may be disrupted briefly. Plan your switch for a day when you don't have critical calls expected.",
      },
      {
        title: "Activate your new SIM and confirm everything works",
        content:
          "The new carrier will send you a SIM card (or an eSIM activation code). Insert the SIM or follow eSIM activation steps. Your new carrier's app or website will walk you through activation. Once active, test making a call and sending a text. After 24 hours, confirm your old service has been canceled automatically (it should be — the port process cancels it). Contact your old carrier to confirm no more charges will appear.",
      },
    ],
  },

  {
    slug: 'backup-phone-contacts',
    title: 'How to Back Up Your Phone Contacts So You Never Lose Them',
    excerpt:
      "Losing all your contacts when a phone breaks is avoidable. Here's how to back them up to Google or iCloud so they sync to any new phone automatically.",
    category: 'essential-skills',
    tags: [
      'contacts backup',
      'google contacts',
      'icloud contacts',
      'phone contacts',
      'sync',
      'backup',
    ],
    readTime: '4 min',
    thumbnailEmoji: '📇',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your phone contacts represent years of accumulated phone numbers, addresses, and email addresses — family, doctors, neighbors, businesses, everyone. If your phone breaks, gets lost, or needs to be replaced, losing all those contacts can be a significant problem.\n\nThe good news: modern smartphones back up contacts automatically to Google (on Android) or iCloud (on iPhone) when the feature is turned on. Once synced to the cloud, your contacts are restored automatically whenever you set up a new phone with the same account. This guide shows you how to confirm the feature is active and what to do if it isn't.`,
    steps: [
      {
        title: 'Turn on contact sync on iPhone (iCloud)',
        content:
          "Go to Settings → tap your name at the top → iCloud → scroll down to \"Contacts\" and make sure the toggle is turned ON (green). If it was off, tap it and choose to \"Merge\" your existing contacts with iCloud. Your contacts now sync to iCloud and can be restored on any iPhone you log into with the same Apple ID.",
        tip: 'Quick Tip: You can view, add, or edit contacts from any computer by going to iCloud.com and signing in. This also confirms your contacts backed up successfully.',
      },
      {
        title: 'Turn on contact sync on Android (Google)',
        content:
          "Go to Settings → tap your Google account (or Accounts → Google) → tap your Gmail address → make sure \"Contacts\" has a checkmark or toggle turned ON. On newer Android phones, go to Settings → Google → Backup and confirm \"Back up to Google Drive\" is on. Your contacts now sync to your Google account. You can view them at contacts.google.com on any computer.",
        tip: 'Quick Tip: All your backed-up contacts appear at contacts.google.com. Sign in with your Google account to see them, edit them, or check that they were saved.',
      },
      {
        title: 'Export a manual backup as extra insurance',
        content:
          "For an extra copy, you can export all contacts to a file (.vcf format) and save it to your computer or email it to yourself. On iPhone: go to iCloud.com → Contacts → select all (Ctrl+A or Command+A) → click the gear icon → Export vCard. On Android: open the Contacts app → Settings (three dots) → Export → save to your phone's storage → then copy that file to a computer or email it to yourself.",
        tip: "Quick Tip: Save the exported .vcf file in Google Drive or your email so it's accessible from anywhere if you ever need to restore.",
      },
      {
        title: 'Restore contacts on a new phone',
        content:
          "If you get a new phone: on iPhone, sign in with your Apple ID during setup and your contacts restore automatically. On Android, sign in with your Google account and your contacts restore automatically. If contacts don't appear right away, go to Settings → Google → and manually sync. Contacts from your Google or Apple account should appear within a few minutes.",
      },
    ],
  },

  {
    slug: 'read-phone-bill-guide',
    title: 'How to Read and Understand Your Cell Phone Bill',
    excerpt:
      'Cell phone bills are full of confusing charges and fees. Learn what each section means so you can catch billing errors and avoid paying for services you never wanted.',
    category: 'essential-skills',
    tags: ['phone bill', 'cell phone charges', 'billing', 'fees', 'understanding bill'],
    readTime: '5 min',
    thumbnailEmoji: '📃',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Cell phone bills are notoriously confusing. The advertised plan price is rarely what you actually pay — taxes, government fees, carrier surcharges, and add-on services inflate the total. Many people pay for features or services they didn't know were on their account, sometimes added through a practice called "cramming" — where a third-party company charges small amounts on your bill for services you never signed up for.\n\nKnowing how to read your bill helps you catch mistakes, identify unnecessary charges, and confirm that what you're paying for is what you actually use. Most major carriers (Verizon, AT&T, T-Mobile) send digital bills you can view in the carrier's app or website, and you can also request paper bills.`,
    steps: [
      {
        title: 'Find your bill in the carrier app or website',
        content:
          "Download your carrier's app or log in at their website (verizon.com, att.com, t-mobile.com, etc.). Look for a section called \"Billing,\" \"My Bill,\" or \"Statements.\" You can usually view up to 12 months of past bills. Your current statement shows charges for the upcoming month (phone bills are usually billed a month in advance for plan charges).",
        tip: "Quick Tip: Set up paperless billing and auto-pay in the carrier app. Many carriers offer a $5-10/month discount for autopay. You'll still receive an email notification when your bill is ready.",
      },
      {
        title: 'Understand the main sections of your bill',
        content:
          "A typical phone bill has these sections: Monthly Plan Charges (your base plan cost for data, calls, and texts), Device Payment (if you are paying off a phone in installments — separate from your plan), Add-On Services (insurance, premium features, international calling, streaming service bundles), Taxes and Government Fees (mandatory — you cannot avoid these), Carrier Surcharges (optional but listed as if required — these are carrier profit, not government fees), and any One-Time Charges (overage fees, activation fees, international usage).",
        warning:
          "Carrier surcharges — sometimes labeled as \"Administrative and Telco Recovery Fee\" or similar — are NOT government-mandated taxes. They are carrier fees charged by the company. They are legal but they inflate the base price. If your bill seems higher than expected, look for these.",
      },
      {
        title: 'Check for third-party charges you did not authorize',
        content:
          "Scroll through your bill looking for any service charges from unfamiliar companies — names like \"Premium SMS,\" \"Digital Media Plus,\" \"Club Subscriptions,\" or similar. These are signs of cramming — unauthorized charges added by third parties. If you see anything you don't recognize, call your carrier's customer service and ask them to explain every charge and remove any you didn't authorize. Ask them to block third-party charges going forward.",
        tip: "Quick Tip: You can call your carrier and ask them to \"block all third-party charges\" on your account. This prevents unauthorized services from being added to your bill in the future and costs nothing to do.",
      },
      {
        title: 'Review your plan and cut unused features',
        content:
          "While reviewing your bill, check whether you actually use all the features you're paying for. International calling plans, device protection/insurance, premium voicemail, and streaming service add-ons (like Apple TV+, Netflix, or Disney+ bundled with the plan) all add cost. If you don't use them, call customer service or log into your account to remove them. Ask specifically: \"What am I paying for that I haven't used in 6 months?\"",
      },
    ],
  },

  {
    slug: 'max-hbo-streaming-guide',
    title: 'How to Use Max (Formerly HBO Max) for Movies and TV Shows',
    excerpt:
      'Max is the streaming service from Warner Bros. with HBO, DC movies, CNN, and more. Here is how to sign up, navigate, and find the best content.',
    category: 'entertainment',
    tags: ['max', 'hbo max', 'streaming', 'movies', 'tv shows', 'warner bros'],
    readTime: '4 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Max (formerly known as HBO Max, before that as HBO Go and HBO Now) is Warner Bros. Discovery's streaming service. It includes the full HBO library — including popular drama series and prestige films — plus Warner Bros. movies, DC superhero films, CNN documentaries, and the Cartoon Network and Adult Swim libraries.\n\nMax competes with Netflix, Disney+, and Amazon Prime Video as one of the major US streaming services. A standard subscription currently costs around $9.99/month with ads or $15.99/month without ads. If you already pay for HBO through your cable company, you may already have access to Max at no extra charge — ask your cable provider.\n\nThis guide helps you navigate Max and get the most out of it.`,
    steps: [
      {
        title: 'Sign up for Max',
        content:
          "Go to max.com on any device or download the Max app from the App Store (iPhone/iPad) or Google Play Store (Android). Click \"Sign Up\" and choose a plan. The ad-supported plan at ~$9.99/month is a good starting point. Enter your email address and create a password. Add a payment method. If you have HBO through cable or satellite, click \"Sign in with TV Provider\" and choose your provider — you can log in without paying extra.",
        tip: 'Quick Tip: Max offers a bundle with Disney+ and Hulu at a reduced combined price through Disney. If you use multiple streaming services, the bundle can save money.',
      },
      {
        title: 'Navigate Max to find shows and movies',
        content:
          'The Max home screen shows personalized recommendations based on what you watch. Use the top navigation bar: "Home" for recommendations, "Series" for TV shows, "Movies" for films, "Max Originals" for Max-exclusive content, and "News" for CNN documentaries. Use the search icon (magnifying glass) to search for a specific show or movie. Click any title to see a description, cast, and episodes or related titles.',
      },
      {
        title: 'Create profiles for different household members',
        content:
          "Max allows up to 3 or 5 profiles (depending on plan). Each profile has its own watch history and recommendations. To add a profile: click your profile picture at the top right → \"Add Profile\" → enter a name. You can also set a Kids Mode on a profile, which restricts content to child-appropriate titles. Different people in your household can have their own viewing experience without affecting each other's recommendations.",
      },
      {
        title: 'Download shows for offline viewing',
        content:
          "On the Max app (phone or tablet), you can download select shows and movies to watch later without an internet connection — useful for travel or areas with weak signal. Look for a download icon (arrow pointing down) on eligible titles. Downloads are stored on your device and available in the \"Downloads\" section of the app. This feature is available on the ad-free plan only.",
        tip: "Quick Tip: Max's most popular content includes HBO dramas, classic film libraries, and DC superhero movies. If you loved any HBO shows over the years — The Sopranos, Game of Thrones, Succession — they're all on Max.",
      },
    ],
  },

  {
    slug: 'youtube-tv-streaming-guide',
    title: 'What Is YouTube TV and How Does It Work?',
    excerpt:
      'YouTube TV is a live TV streaming service — no cable box needed. Watch local channels, sports, and cable networks over the internet for a flat monthly fee.',
    category: 'entertainment',
    tags: ['youtube tv', 'live tv', 'streaming', 'cord cutting', 'cable alternative', 'channels'],
    readTime: '5 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `YouTube TV is not the same as YouTube. While regular YouTube is a free video platform where anyone can post videos, YouTube TV is a paid live television service that streams the same channels you would normally get through cable or satellite — ABC, CBS, NBC, Fox, CNN, MSNBC, ESPN, HGTV, Food Network, and more.\n\nYouTube TV costs around $72.99 per month and includes over 100 channels, unlimited cloud DVR recording (no storage limit), and up to 3 simultaneous streams so multiple people can watch different channels at the same time. Unlike cable, there is no equipment to rent and no installation appointment — you watch on any TV, phone, tablet, or computer.\n\nMany people switch to YouTube TV (or a similar service like Hulu + Live TV, DirecTV Stream, or FuboTV) to cut their cable bill. This guide explains what YouTube TV is and whether it might be right for you.`,
    steps: [
      {
        title: 'Check which channels are available in your area',
        content:
          "Local channel availability on YouTube TV depends on your location — specifically your zip code. Go to tv.youtube.com and click \"Check availability\" before subscribing. Enter your zip code to confirm your local ABC, CBS, NBC, and Fox affiliates are included. Most major US cities have full local channel coverage. Sports coverage also varies — some regional sports networks (RSNs) are not included.",
        tip: "Quick Tip: YouTube TV offers a trial period for new subscribers. Use that time to verify all the channels you watch regularly are available in your area before committing to a paid subscription.",
      },
      {
        title: 'Set up YouTube TV on your devices',
        content:
          "Sign up at tv.youtube.com using a Google account. Then download the YouTube TV app on your TV (most smart TVs, Roku, Fire TV, Apple TV, and Chromecast support it), phone, or tablet. Sign in with the same Google account. You can watch live TV immediately after sign-up. Use the guide (a channel listing like a traditional TV guide) to browse what is on right now, or search for specific shows.",
        tip: "Quick Tip: The YouTube TV app looks different from the regular YouTube app. Make sure you're opening YouTube TV specifically — it has a blue \"TV\" logo.",
      },
      {
        title: 'Use the unlimited DVR to record shows',
        content:
          "One of YouTube TV's best features is its unlimited cloud DVR — you can record as many shows as you want and they are saved for 9 months. To record: find any show in the guide or search for it, click the \"Add to Library\" button (a + icon). YouTube TV will record every episode of that show going forward. To watch recordings, click \"Library\" in the navigation bar.",
        tip: "Quick Tip: Unlike a traditional DVR box, YouTube TV's recordings are saved online — so you can watch them from any device anywhere, not just from your home TV.",
      },
      {
        title: 'Compare costs with your current cable or satellite bill',
        content:
          "YouTube TV at $72.99/month can be more or less expensive than cable depending on your current plan and what you actually watch. Calculate: your current cable bill minus any equipment rental, DVR fees, and service charges. If cable costs $120+/month and you mostly watch the channels YouTube TV includes, switching can save $40-60/month. However, some cable packages include internet service — if you switch from cable TV, confirm you still have internet service from a separate provider.",
      },
    ],
  },

  {
    slug: 'family-location-sharing',
    title: 'How to Share Your Location With Family Members',
    excerpt:
      'Sharing your location with family gives loved ones peace of mind and helps you find each other quickly. Here is how to set it up on iPhone and Android.',
    category: 'safety-guides',
    tags: ['location sharing', 'find my', 'google maps', 'family safety', 'senior safety', 'gps'],
    readTime: '5 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Sharing your location with family members — a spouse, adult child, or sibling — can provide real comfort for everyone involved. If you go out and are later than expected, a family member can check where you are without a phone call. If you are in an unfamiliar area, someone else can see you arrived safely. Many older adults share their location with adult children as a way to maintain independence while providing reassurance.\n\nLocation sharing is optional, private, and controlled entirely by you — you choose who sees your location, and you can stop sharing at any time. The location is only shared with the specific people you approve. No one else can see it.\n\nThis guide covers the two most common ways to share your location: using Apple's Find My (for iPhones) and Google Maps (available on both iPhone and Android).`,
    steps: [
      {
        title: 'Share location on iPhone using Find My',
        content:
          `Open the Find My app on your iPhone (it comes pre-installed — search for it if you don't see it). Tap "People" at the bottom. Tap "Share My Location" or the "+" button. Type in the name or phone number of the family member you want to share with — they need to have an iPhone and an Apple ID. Choose whether to share "For One Hour," "Until End of Day," or "Share Indefinitely." They will receive a notification and can accept your location sharing request.`,
        tip: 'Quick Tip: Both people can share with each other — so you can also see where your family member is, not just the other way around. Each person has to agree to sharing.',
      },
      {
        title: 'Share location on iPhone or Android using Google Maps',
        content:
          "Open Google Maps on your phone. Tap your profile picture at the top right → \"Location sharing\" → \"Share location.\" Choose how long to share (1 hour, until you turn it off, etc.). Select the contact you want to share with — they can see your location in Google Maps or receive a link by text or email. Your location shows as a dot on their map. To stop sharing, go back to Location sharing and tap your name → Stop.",
        tip: 'Quick Tip: Google Maps location sharing works across iPhone and Android — great for mixed-device families where some members have iPhones and others have Android phones.',
      },
      {
        title: 'Understand what the other person sees',
        content:
          "When you share your location, the other person sees: a dot on a map showing where you are, updated in real time approximately every few minutes. They can see your battery percentage (so they know if your phone is about to die). They do NOT see your call history, messages, photos, or any other data — only your location. You can turn off location sharing at any time and the other person will see \"Location unavailable.\"",
        tip: "Quick Tip: Some families use location sharing for practical reasons: coordinating meeting at a busy location, checking a family member arrived home after a drive in bad weather, or verifying a delivery person's arrival. It doesn't have to be about safety alone.",
      },
      {
        title: 'Adjust location privacy settings if you change your mind',
        content:
          "To stop sharing your location: in Find My, go to \"People,\" tap the person's name, and tap \"Stop Sharing My Location.\" In Google Maps, tap your profile picture → Location sharing → tap your active share → \"Stop.\" You can also pause location sharing temporarily: on iPhone, go to Settings → Privacy & Security → Location Services and toggle Location Services off (this stops all location features including Maps navigation, so turn it back on when done).",
      },
    ],
  },

  {
    slug: 'smart-door-lock-setup',
    title: 'How to Set Up and Use a Smart Door Lock',
    excerpt:
      'Smart door locks let you lock and unlock your door from your phone, create codes for family members, and never worry about lost keys again.',
    category: 'smart-home',
    tags: [
      'smart lock',
      'door lock',
      'home security',
      'keyless entry',
      'Schlage',
      'August',
      'Yale',
    ],
    readTime: '6 min',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    body: `Smart door locks replace or upgrade your traditional deadbolt to give you keyless entry using a PIN code or your phone. You can still use a physical key if you prefer, but smart locks also let you: unlock the door remotely from your phone, create temporary codes for visitors or caregivers, get notified when the door locks or unlocks, and set the door to lock automatically after a set time.\n\nFor older adults, smart locks offer real convenience: no fumbling with keys when carrying groceries, easy access for trusted family members, and the ability to let in a caregiver or repair person without being home. Popular brands include August, Schlage, Yale, and Kwikset. Most install on your existing deadbolt in about 15-30 minutes with a screwdriver.\n\nThis guide covers what to expect and how to set up the most common type — a smart lock with a keypad and phone app control.`,
    steps: [
      {
        title: 'Choose the right smart lock for your door',
        content:
          "Most smart locks fit standard deadbolts. Measure your door thickness (usually 1-3/4 inches) and check that your deadbolt is a standard single-cylinder type. Smart locks come in two main types: retrofit locks that attach to the inside of your existing deadbolt (like August), leaving your exterior lock and keys unchanged — and full deadbolt replacements that swap out the whole lock (like Schlage Encode). Retrofit locks are easier to install; full replacements give more options for exterior keypads.",
        tip: `Quick Tip: If you rent your home, a retrofit lock (interior-only attachment) is ideal because it doesn't modify the exterior and you can take it when you move.`,
      },
      {
        title: 'Install the lock hardware',
        content:
          "Most smart locks include step-by-step instructions and come with all needed hardware. In general: remove the interior part of your deadbolt (usually 2 screws), attach the smart lock mount plate, click the lock onto the mount, reconnect the deadbolt thumb turn to the lock mechanism, and install batteries (most use 4 AA batteries). The exterior of your door usually stays unchanged. Test that locking and unlocking manually still works before moving to app setup.",
        tip: "Quick Tip: Watch the manufacturer's installation video on YouTube before you start — most major brands have a 3-5 minute video specific to their model that makes installation much clearer.",
      },
      {
        title: 'Set up the app and connect to Wi-Fi or Bluetooth',
        content:
          "Download the manufacturer's app (August, Schlage Home, Yale Access, etc.) from the App Store or Google Play. Create an account. Follow the in-app setup to connect the lock to your phone via Bluetooth. Many smart locks also connect to your home Wi-Fi through a small hub (often included) — this lets you control the lock from anywhere, not just when you're home. Follow the app prompts to add the lock and test remote locking and unlocking.",
      },
      {
        title: 'Create access codes for family and caregivers',
        content:
          "In the app, look for \"Access\" or \"Codes\" or \"Guest Access.\" Create a unique 4-8 digit PIN for each person who needs access. Name the code (\"Daughter Sarah,\" \"Tuesday Caregiver\") and optionally set time restrictions — for example, a caregiver code that only works Monday-Friday between 9 AM and 6 PM. The door logs every time each code is used, so you always know who came and went.",
        tip: "Quick Tip: Never share your master PIN widely. Create separate codes for each person so you can revoke individual access without changing everyone's codes.",
      },
    ],
  },

  {
    slug: 'google-photos-shared-album',
    title: 'How to Share a Photo Album With Family on Google Photos',
    excerpt:
      'Google Photos shared albums let family members add, view, and comment on photos together — perfect for family events, grandkids, and holiday memories.',
    category: 'app-guides',
    tags: [
      'google photos',
      'shared album',
      'photo sharing',
      'family photos',
      'google',
      'android',
    ],
    readTime: '4 min',
    thumbnailEmoji: '👨‍👩‍👦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Photos makes it possible to create shared albums where multiple family members can view and add photos. Once you set up a shared album for, say, a grandchild's birthday party or a family reunion, you can invite everyone who attended to add their photos — so the album automatically grows with everyone's pictures from the same event. Family members can also comment on photos within the album.\n\nGoogle Photos is free (up to 15GB of storage, shared with your Google account), and shared albums are part of the free service. Anyone you invite can view the album from their own Google account — including family members on iPhones, since Google Photos works on both iPhone and Android.`,
    steps: [
      {
        title: 'Create a new shared album',
        content:
          `Open Google Photos on your phone or at photos.google.com on a computer. Tap the "+" or "Create" button → choose "Shared album." Give the album a title (example: "Thanksgiving 2026" or "Emma's Birthday"). Select photos you want to include from your library — tap each photo to select it, then tap "Add." Tap "Share" or "Next" to continue to the sharing step.`,
      },
      {
        title: 'Invite family members to the album',
        content:
          "After creating the album, tap \"Invite people\" or the share icon. Type in the email addresses of family members you want to invite (they need a Google account). Optionally, turn on \"Collaborate\" so the people you invite can also add their own photos to the album (recommended for family events). Tap \"Send.\" Each person receives an email invitation with a link to view the album.",
        tip: "Quick Tip: You can also tap \"Get link\" to copy a shareable link. Anyone with that link can view the album — useful if some family members don't have Google accounts or you want to share via text message.",
      },
      {
        title: 'Add photos and view contributions',
        content:
          "Open the shared album and tap the \"Add photos\" button (camera or + icon) to add more of your own photos. When other family members add photos to the album, you'll see a notification. The album shows who added each photo. Tap any photo to see it full-size, swipe through the album, or download photos you want to keep. You can also \"like\" photos (a heart icon) and leave comments.",
      },
      {
        title: 'Manage or stop sharing the album',
        content:
          "To remove someone from the album: open the album → tap the three-dot menu (⋮) → \"Options\" or \"Sharing settings\" → tap the person's name → \"Remove.\" To stop sharing with everyone: tap the three-dot menu → \"Sharing options\" → turn off sharing. The album remains in your Google Photos library — it just becomes private again. You can also delete the album entirely from the same menu.",
        tip: "Quick Tip: You can print photos directly from Google Photos through its partner services. Open any photo → tap the three-dot menu → \"Order photo.\" Printed photos make wonderful gifts for family members who prefer physical pictures.",
      },
    ],
  },

  {
    slug: 'amazon-photos-backup',
    title: 'How to Use Amazon Photos to Back Up and Store Your Pictures',
    excerpt:
      "Amazon Prime members get unlimited photo storage at no extra cost. Here's how to set up Amazon Photos and automatically back up every picture from your phone.",
    category: 'app-guides',
    tags: ['amazon photos', 'photo backup', 'amazon prime', 'cloud storage', 'photo storage'],
    readTime: '4 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Amazon Photos is one of the best-kept secrets for Amazon Prime members. Your Prime membership includes unlimited full-resolution photo storage — not just a limited amount, but genuinely unlimited. You can upload every photo you have ever taken, at full quality, for no additional charge.\n\nCompare this to iCloud or Google Photos, which both give limited free storage (5GB for iCloud, 15GB for Google) and charge monthly fees for more. If you have a large photo library and already pay for Amazon Prime, Amazon Photos is a powerful option for backup or as an additional copy of your photos.\n\nAmazon Photos also works as a family album that up to 5 family members can share and add to together.`,
    steps: [
      {
        title: 'Download the Amazon Photos app',
        content:
          "Open the App Store (iPhone) or Google Play Store (Android) and search \"Amazon Photos.\" The app is free to download. Open it and sign in with your Amazon account — the same email and password you use to shop on Amazon. You're automatically connected to your Prime subscription's unlimited photo storage.",
        tip: 'Quick Tip: Amazon Photos is also accessible at photos.amazon.com on any computer or browser. You can upload photos directly from your computer there.',
      },
      {
        title: 'Turn on automatic phone backup',
        content:
          "After signing in, the Amazon Photos app will ask if you want to enable Auto-Save. Tap \"Turn on\" or \"Enable.\" This automatically backs up all photos on your phone to Amazon Photos whenever you're connected to Wi-Fi. You can adjust backup settings by tapping the three-line menu → Settings → Auto-Save. Optionally enable \"Auto-Save over mobile data\" if you want photos to back up even without Wi-Fi (this uses your phone's data plan).",
        tip: "Quick Tip: The first backup may take several hours if you have thousands of photos. Leave the app open and plugged in to charge overnight for the initial upload.",
      },
      {
        title: 'Create a Family Vault to share photos with relatives',
        content:
          "Amazon Photos includes a \"Family Vault\" — a shared photo library that up to 5 family members can contribute to. Each member still has their own private storage, but the Family Vault is shared. To set it up: open Amazon Photos → tap the three-line menu → \"Family Vault\" → \"Get started\" → invite family members by entering their email addresses. Family members receive an invitation and can accept with their Amazon accounts. Once joined, they can view and add photos to the shared vault.",
      },
      {
        title: 'Order prints and photo gifts directly from the app',
        content:
          "Amazon Photos connects directly to Amazon's print services. You can order printed photos, photo books, canvases, and personalized gifts right from the app. Tap any photo → tap the shopping cart or print icon → choose a product type and size → add to your Amazon cart. Prints typically arrive in 5-7 days with Prime. This is a convenient way to turn digital photos into physical memories to display or give as gifts.",
        tip: "Quick Tip: Amazon Photos is also available on Amazon Fire tablets and Fire TV — you can view your entire photo library as a screensaver or slideshow on your TV, which makes a lovely digital picture frame.",
      },
    ],
  },

  {
    slug: 'ai-voice-call-scam-prevention',
    title: 'How Scammers Use AI to Clone Voices on Phone Calls',
    excerpt:
      "AI can now copy someone's voice from a short clip and make phone calls that sound exactly like a family member in distress. Here's how to protect yourself.",
    category: 'safety-guides',
    tags: [
      'ai voice scam',
      'voice cloning',
      'deepfake phone call',
      'grandparent scam',
      'AI fraud',
      'phone scam',
    ],
    readTime: '5 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `One of the most disturbing emerging scams uses artificial intelligence to clone a loved one's voice and make a fake emergency phone call. Using just a short clip of someone's voice — from a social media video, a YouTube video, or a voicemail — AI can generate a convincing imitation of that person speaking any words the scammer wants.\n\nThe typical scenario: you receive a call that sounds exactly like your grandchild, child, or close friend. They say they are in trouble — arrested, in a car accident, stranded abroad, in the hospital. They beg you not to tell anyone and to wire money immediately. The voice is convincing enough that many people send thousands of dollars before realizing the call was fake.\n\nThis is an evolution of the long-running "grandparent scam," now supercharged with AI voice technology. The FBI issued warnings in 2024 and 2025 about dramatic increases in these calls. Knowing what to do when you get one can save you from devastating financial loss.`,
    steps: [
      {
        title: 'Recognize the warning signs during the call',
        content:
          "Signs that a distress call may be an AI voice scam: unexpected urgency and panic with no time to think, a request to keep the call secret from other family members, a demand for money via wire transfer, gift cards, or cryptocurrency, a follow-up call from someone claiming to be a lawyer or police officer asking you to pay bail or fees. Real emergencies don't typically require secrecy or immediate cash payments through untraceable methods.",
        warning:
          "The voice may sound completely convincing — even if it sounds exactly like your grandchild or family member, do not assume the call is real. AI voice cloning is advanced enough to fool close relatives.",
      },
      {
        title: 'Hang up and call the person back directly',
        content:
          "If you receive any call that sounds like a family member in distress asking for money or secrecy: hang up. Then immediately call that person on the number you have saved for them in your phone — not any number the caller provides. Text them, try another family member, or call the place they supposedly are (hospital, police station, embassy). In almost every case, you will quickly find out the person is safe and had no idea you were called.",
        tip: "Quick Tip: Set up a family code word with your close family members. If someone calls claiming to be in distress, ask for the code word. A real family member will know it. A scammer using AI won't.",
      },
      {
        title: 'Do not send money before verifying independently',
        content:
          "Never wire money, buy gift cards, or send cryptocurrency based on a phone call alone — no matter how real the voice sounds or how urgent the situation seems. Real emergencies have verifiable details. A real arrest has a booking number you can confirm with the jail. A real hospital has a phone number you can call to confirm a patient. Take 10 minutes to verify through independent channels before taking any financial action.",
        tip: "Quick Tip: Ask the caller a specific question only the real person would know — a shared memory, an inside reference, the name of a childhood pet. AI-assisted scammers won't know those details.",
      },
      {
        title: 'Report the attempt and reduce your digital voice footprint',
        content:
          "If you receive an AI voice scam call: report it to the FTC at ReportFraud.ftc.gov and the FBI at ic3.gov. Your report helps track and stop these operations. To make it harder for scammers to clone voices from your family: review the privacy settings on social media accounts of family members. Videos posted publicly give scammers raw audio to work with. Setting TikTok, YouTube, Instagram, and Facebook videos to \"Friends only\" or \"Private\" reduces the available voice samples.",
      },
    ],
  },

  {
    slug: 'senior-phone-plan-savings',
    title: 'How to Find a Cheaper Cell Phone Plan as a Senior',
    excerpt:
      'Many seniors pay twice what they need to for cell service. Here are the best low-cost plans, government programs, and senior discounts available in 2026.',
    category: 'phone-guides',
    tags: [
      'senior phone plan',
      'cheap phone plan',
      'Lifeline',
      'ACP',
      'MVNO',
      'Consumer Cellular',
      'phone discounts',
    ],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Many older adults are paying $60-$100+ per month for a cell phone plan they may not fully use. If you spend most of your time at home on Wi-Fi, don't stream a lot of video on your phone, and primarily use your phone for calls, texts, and light internet browsing, you may be paying for a plan with far more data than you need.\n\nThere are several categories of savings to explore: senior-specific discounts from the major carriers, smaller "virtual" carriers (MVNOs) that use the same towers at a fraction of the cost, and government assistance programs for those who qualify. This guide covers all three.\n\nYou do not need a new phone to switch carriers — most unlocked phones work on any network, and many budget plans support all major phone brands.`,
    steps: [
      {
        title: 'Check if you qualify for the Lifeline program',
        content:
          "The Lifeline program is a federal benefit that provides eligible low-income households with a monthly discount on phone or internet service — up to $9.25/month toward a phone plan, or more through enhanced state programs. You may qualify if you receive Medicaid, SNAP, SSI, Federal Public Housing Assistance, or Veterans Pension/Survivors Benefit. Apply at lifelinesupport.org or through participating carriers. Lifeline is administered by the FCC.",
        tip: 'Quick Tip: Some states offer additional Lifeline benefits on top of the federal amount. Search your state name plus "Lifeline phone program" to find state-specific benefits.',
      },
      {
        title: 'Compare senior-specific discounts from major carriers',
        content:
          "Major carriers offer senior pricing for people 55 and older (varies by carrier and state): T-Mobile Essentials 55+ plan offers two lines at a discounted combined rate for customers 55+ in Florida, plus a nationwide 55+ discount — check current pricing at t-mobile.com. AT&T offers a Senior Nation plan in some markets. Verizon offers a senior rate plan in some states — call and ask directly. AARP members get additional discounts through AARP Wireless Partners at aarp.org/phones.",
        tip: "Quick Tip: Always call and ask for the best available senior or loyalty discount when renewing or reviewing your plan. Carriers don't always advertise their lowest prices — sometimes you have to ask.",
      },
      {
        title: 'Consider a low-cost MVNO carrier',
        content:
          "MVNOs (Mobile Virtual Network Operators) rent tower access from Verizon, AT&T, or T-Mobile and resell service at much lower prices — often $15-$35/month for unlimited calls, texts, and several gigabytes of data. Recommended MVNOs with strong reputations for seniors: Consumer Cellular (AARP partner, US-based customer service, no contracts, plans from $20/month), Mint Mobile (T-Mobile network, $15-$30/month), Visible (Verizon network, $25/month unlimited). Coverage is generally identical to the parent carrier.",
        warning:
          `MVNO plans are usually "deprioritized" — during peak network congestion in busy areas, your data may slow down compared to customers on the parent carrier's premium plans. For most daily use, this is not noticeable.`,
      },
      {
        title: 'Know how much data you actually use',
        content:
          "Before switching, check how much data you currently use. On iPhone: go to Settings → Cellular → scroll down to see data usage. On Android: go to Settings → Network & Internet → Data usage. If your monthly usage is consistently under 5GB, a 5GB or 10GB plan at $20-$35/month may be all you need. If you're paying for unlimited but using only 2GB, you're overpaying significantly. Unlimited plans make sense if you watch video, stream music, or use your phone as a hotspot frequently.",
      },
    ],
  },

  {
    slug: 'windows-11-start-menu-guide',
    title: 'How to Use the Windows 11 Start Menu and Taskbar',
    excerpt:
      "Windows 11 moved the Start button to the center and changed how programs are pinned and launched. Here's how to find everything and customize it to your liking.",
    category: 'windows-guides',
    tags: ['windows 11', 'start menu', 'taskbar', 'customize', 'pinned apps', 'windows basics'],
    readTime: '5 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `If you recently upgraded to Windows 11 or got a new computer with Windows 11, you may have noticed the Start button has moved from the bottom-left corner to the center of the Taskbar. This change catches many Windows 10 users off guard. The Start menu itself also looks different — instead of tiles, you see a grid of pinned apps and a recommended section below it.\n\nThis guide explains how the Windows 11 Start menu and Taskbar work, how to find programs you use, how to pin your favorites, and how to move the Start button back to the left if you prefer that layout.`,
    steps: [
      {
        title: 'Open and navigate the Start menu',
        content:
          "Click the Start button (the Windows logo, now centered on the Taskbar) or press the Windows key on your keyboard. The Start menu opens with two sections: \"Pinned\" apps at the top (apps you've chosen to keep there for quick access) and \"Recommended\" at the bottom (recently opened files and apps that Windows suggests). Click any pinned app to open it. Click \"All apps\" in the upper-right corner of the Start menu to see a full alphabetical list of everything installed on your computer.",
        tip: 'Quick Tip: To search for any program, file, or setting, start typing immediately after opening the Start menu. A search bar appears automatically and shows matching results.',
      },
      {
        title: 'Pin your most-used apps to the Start menu',
        content:
          "To add an app to your Start menu pinned section: click Start → All apps → right-click on any app → \"Pin to Start.\" It will appear in the Pinned section. To remove an app from the Pinned section: right-click it → \"Unpin from Start.\" You can drag pinned apps to rearrange them. To pin an app to the Taskbar (the bar at the bottom where you want one-click access): right-click the app in the Start menu → \"Pin to Taskbar.\"",
        tip: 'Quick Tip: The Taskbar is the most convenient place for apps you use every single day — your browser, email, and any key programs. Keep the Taskbar to 5-7 apps for best organization.',
      },
      {
        title: 'Move the Start button back to the left',
        content:
          "If you prefer the traditional left-corner Start button: right-click any empty space on the Taskbar → \"Taskbar settings\" → scroll down to \"Taskbar behaviors\" → click to expand → find \"Taskbar alignment\" → change it from \"Center\" to \"Left.\" The Start button and all Taskbar icons immediately shift to the left side — just like Windows 10. You can change it back at any time.",
      },
      {
        title: 'Use the right-click Start menu for power user options',
        content:
          "Right-clicking the Start button (instead of left-clicking) opens a separate power menu with quick access to: File Explorer, Settings, Control Panel, Task Manager, Device Manager, Disk Management, Event Viewer, Command Prompt, and Power options (Restart, Shut down, Sleep). This hidden menu is very useful for troubleshooting or accessing system settings quickly.",
        tip: "Quick Tip: You can also access this power menu by pressing Windows key + X on your keyboard. It's sometimes called the \"WinX menu\" or \"Power User menu.\"",
      },
    ],
  },

  {
    slug: 'mac-accessibility-features-guide',
    title: "How to Use Mac's Built-In Accessibility Features",
    excerpt:
      "macOS includes powerful built-in tools to help with vision, hearing, and mobility — no extra software needed. Here's where to find them and how to use them.",
    category: 'mac-guides',
    tags: [
      'mac accessibility',
      'zoom',
      'display settings',
      'hearing',
      'cursor size',
      'macos',
      'seniors',
    ],
    readTime: '6 min',
    thumbnailEmoji: '♿',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Macs come with a comprehensive set of accessibility features built directly into the operating system — no additional software or subscriptions required. These tools are designed to help people with vision differences, hearing differences, or motor challenges, but many of them are genuinely useful for anyone who wants larger text, reduced eye strain, or easier navigation.\n\nYou can find all accessibility features in one place: System Settings → Accessibility (or System Preferences → Accessibility on older Macs). This guide covers the most practical features for everyday users, particularly those who want to make text bigger, reduce screen glare, or use the Mac more comfortably.`,
    steps: [
      {
        title: 'Make text and everything on screen larger',
        content:
          'Go to the Apple menu (top left) → System Settings → Displays → look for \"Resolution\" and click \"More Space\" vs. \"Larger Text\" — Larger Text makes everything bigger. Alternatively, go to System Settings → Accessibility → Zoom → turn on "Use keyboard shortcuts to zoom" and press Control + Option + = to zoom in anywhere on screen. You can also increase the cursor size: System Settings → Accessibility → Display → Cursor Size — drag the slider to make the mouse pointer larger and easier to see.',
        tip: "Quick Tip: Increasing cursor size is one of the most appreciated adjustments for Mac users. A larger cursor is much easier to track on screen, especially on large displays.",
      },
      {
        title: 'Reduce eye strain with Display and Night Shift settings',
        content:
          "Go to System Settings → Accessibility → Display. Turn on \"Reduce Motion\" to minimize animated transitions. Turn on \"Reduce Transparency\" to make windows easier to read. For evening use: go to System Settings → Displays → Night Shift. Set a schedule (Sunset to Sunrise is recommended) to automatically shift the display to warmer colors at night, which reduces eye strain and helps with sleep.",
        tip: "Quick Tip: If bright white backgrounds are tiring on your eyes, turn on \"Color Filters\" in System Settings → Accessibility → Display → Color Filters. Try the \"Grayscale\" or \"Color Tint\" options to find a display that's more comfortable for long reading sessions.",
      },
      {
        title: 'Use VoiceOver or Spoken Content to hear text read aloud',
        content:
          "If you want your Mac to read text aloud to you: go to System Settings → Accessibility → Spoken Content. Turn on \"Speak selection\" — now you can highlight any text anywhere on your Mac, press Option + Escape, and the Mac reads it aloud. Choose a voice and speaking rate that is comfortable. For full screen reading of webpages and documents, you can also enable VoiceOver: System Settings → Accessibility → VoiceOver → Enable VoiceOver.",
        tip: "Quick Tip: Spoken Content is great for reading long emails, news articles, or documents without straining your eyes. Many people use it while doing other tasks around the house.",
      },
      {
        title: 'Adjust keyboard and mouse settings for easier control',
        content:
          "If you find clicking and tracking difficult: System Settings → Accessibility → Pointer Control lets you adjust tracking speed (how fast the cursor moves with mouse movement) and enable options like \"Shake mouse pointer to locate\" (moving the cursor fast temporarily makes it larger — great for finding a lost cursor on screen). For keyboard: System Settings → Accessibility → Keyboard → turn on \"Sticky Keys\" if holding multiple keys at once is difficult, or \"Slow Keys\" if you accidentally press keys twice.",
      },
    ],
  },
];
