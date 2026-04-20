// TekSure Guides Batch 12 — 20 full guides from April 2026 trending stubs
// Topics: Apple Intelligence, WhatsApp scams, battery drain, AI voice cloning,
// WiFi passwords, printer setup, photo transfer, fake pop-ups, subscriptions,
// Google Photos, spam texts, 2FA, Windows 11 upgrade, Roku, iPhone accessibility,
// Facebook recovery, password managers, FaceTime, browser speed, iCloud backup.
import type { Guide } from './guides';

export const guidesBatch12: Guide[] = [
  {
    slug: 'how-to-use-apple-intelligence-iphone',
    title: 'How to Use Apple Intelligence on Your iPhone',
    excerpt: "Apple Intelligence is Apple's built-in AI that helps you write, summarize, and find things — here's how to turn it on and try it out.",
    category: 'ai-guides',
    tags: ['apple intelligence', 'iphone', 'AI', 'siri', 'ios 18'],
    readTime: '6 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apple Intelligence is Apple's built-in AI assistant that can summarize emails, rewrite your messages, find old photos by describing them, and help with writing. It's free, already on your iPhone, and you don't need to download anything extra. It works on iPhone 15 Pro and newer, and on iPhone 15 and older models running iOS 18 or later with enough memory.",
    steps: [
      {
        title: 'Check if your iPhone supports Apple Intelligence',
        content: `Apple Intelligence requires an iPhone 15 Pro, iPhone 15 Pro Max, or any iPhone 16 model. It also works on iPad with an M1 chip or newer. To check your model, go to Settings → General → About and look at the "Model Name" line. If you have one of those models, you're good to go.`,
        tip: 'If your iPhone is older than iPhone 15 Pro, Apple Intelligence is not available on your device. The iPhone 16 series is the first where all models support it.',
      },
      {
        title: 'Turn on Apple Intelligence',
        content: `Go to Settings and scroll down to tap "Apple Intelligence & Siri." If you see a button that says "Turn On Apple Intelligence," tap it and follow the prompts. The setup may take a few minutes the first time as your iPhone downloads the AI models. Make sure you're connected to WiFi during setup.`,
        tip: 'If you see a "Join Waitlist" button instead, Apple is still rolling out the feature in your region. Check back after the next iOS update.',
      },
      {
        title: 'Try summarizing a long email',
        content: 'Open the Mail app and find a long email — anything more than a few paragraphs works well. At the top of the email, look for a small "Summary" button or banner. Tap it and Apple Intelligence will give you a short plain-English summary of what the email says. This is a great first feature to try.',
        tip: 'Summaries work best on conversational emails and newsletters. They may not work on emails that are mostly images or attachments.',
      },
      {
        title: 'Use Writing Tools to improve a message',
        content: 'In any text field — Messages, Mail, or Notes — type something, then select your text by pressing and holding on it. In the menu that pops up, look for "Writing Tools" (you may need to tap the arrow to see more options). Tap it to see choices like "Proofread," "Rewrite," or "Make Friendly." Apple Intelligence will rewrite your text and show you the new version before you accept it.',
      },
      {
        title: 'Search your photos with words',
        content: `Open the Photos app and tap the search bar at the bottom. Instead of typing a person's name, try describing a moment: "beach vacation," "birthday cake," or "red car." Apple Intelligence uses on-device AI to understand what's in your photos and find matching pictures — even if you never added a label or keyword.`,
        tip: `This feature keeps all your photos private — Apple Intelligence processes your photos on your iPhone, not on Apple's servers.`,
      },
    ],
  },

  {
    slug: 'how-to-spot-whatsapp-scam-messages',
    title: 'How to Spot Scam Messages on WhatsApp',
    excerpt: 'Scammers are using WhatsApp to steal personal information — learn the warning signs and what to do if you get a suspicious message.',
    category: 'safety-guides',
    tags: ['whatsapp', 'scam', 'phone safety', 'messaging', 'fraud'],
    readTime: '5 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "WhatsApp scams are one of the fastest-growing types of online fraud. Scammers send messages pretending to be a friend, a bank, Amazon, or even the government. Their goal is to trick you into sharing a code, clicking a link, or sending money. Once you know what to look for, these scams become much easier to avoid.",
    steps: [
      {
        title: 'Know the three biggest warning signs',
        content: 'Any message that does one of these three things is almost certainly a scam: (1) asks you to forward a six-digit code you received by text, (2) claims to be a family member in trouble who needs money urgently, or (3) says you won a prize and must click a link to claim it. Real companies and real family members will not ask you to send money through WhatsApp or share codes sent to your phone.',
        warning: 'Scammers often create a fake sense of urgency — "Act now or your account will be closed!" Urgency is a red flag. Slow down and verify before you do anything.',
      },
      {
        title: 'Check the sender before you reply',
        content: `If you receive a message from an unknown number, look at the number carefully. Scammers often use international numbers that start with country codes like +44 (UK), +234 (Nigeria), or +91 (India). Even if the message claims to be from someone in the US, the number may not be local. If the message is from someone in your contacts but something feels off, call that person back on their regular number to confirm it's really them.`,
        tip: 'WhatsApp shows you the country flag next to numbers. A US flag means the number is a US number. A different flag is an extra reason to be cautious.',
      },
      {
        title: 'Do not tap links from unknown senders',
        content: `If a message from an unknown number contains a link, do not tap it. Scam links often look like legitimate sites but with small changes — for example, "arnazon.com" instead of "amazon.com." If you're not sure whether a link is safe, you can type the main website address yourself in your browser rather than tapping the link.`,
      },
      {
        title: 'Report and block the suspicious number',
        content: `If you receive a scam message, press and hold on the message bubble, then tap the three-dot menu and choose "Report." You can also block the contact: tap the sender's name or number at the top of the chat, scroll to the bottom, and tap "Block." This prevents them from contacting you again. Reporting also helps WhatsApp remove scam accounts faster.`,
        tip: 'You can report a scam to the FTC at reportfraud.ftc.gov. Your report helps investigators track and shut down scam operations.',
      },
    ],
  },

  {
    slug: 'fix-iphone-battery-draining-fast',
    title: 'How to Stop Your iPhone Battery From Draining So Fast',
    excerpt: "If your iPhone battery dies before the end of the day, a few simple settings changes can make it last hours longer.",
    category: 'tips-tricks',
    tags: ['iphone', 'battery', 'settings', 'ios', 'performance'],
    readTime: '5 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A fast-draining iPhone battery is one of the most common frustrations people have with their phones. The good news is that a few simple settings changes can often extend how long your battery lasts during the day. You do not need a new phone — you just need to know where to look.",
    steps: [
      {
        title: 'Check your battery health',
        content: `Go to Settings → Battery → Battery Health & Charging. You'll see a percentage that shows how much of the original capacity your battery still has. If it says 80% or below, the battery is worn out and may need to be replaced — Apple does this at the Apple Store for around $89. If the health is above 80%, the steps below will help.`,
        tip: 'A battery at 100% health holds the same charge it did when the iPhone was brand new. Most batteries drop to around 80% after two to three years of regular use.',
      },
      {
        title: 'See which apps are using the most battery',
        content: `Stay in Settings → Battery and scroll down past the battery health section. You'll see a list of apps with percentages showing how much battery each one used in the last 24 hours. Apps that are high on the list but that you rarely use are prime targets for the next steps. Social media apps, streaming apps, and navigation apps typically use the most battery.`,
      },
      {
        title: 'Turn off Background App Refresh',
        content: `Go to Settings → General → Background App Refresh. Tap "Background App Refresh" at the top and select "Off." This prevents apps from downloading new content when you're not actively using them. Apps like Facebook, Instagram, and news apps are especially aggressive about doing this, which drains your battery even when your screen is off.`,
        tip: `After turning this off for all apps, your battery will usually last noticeably longer within a day or two. You can also go app-by-app and only disable it for apps you don't need fresh.`,
      },
      {
        title: 'Lower screen brightness and shorten screen timeout',
        content: `Your screen is the biggest battery drain on any phone. Swipe down from the top-right corner to open Control Center, then drag the brightness slider (the sun icon) down to around 50%. For screen timeout, go to Settings → Display & Brightness → Auto-Lock and set it to 30 seconds or 1 minute — this means the screen turns off sooner when you're not looking at it.`,
      },
      {
        title: 'Enable Low Power Mode when below 50%',
        content: `When your battery reaches 50% or below, turn on Low Power Mode: go to Settings → Battery and tap the toggle next to "Low Power Mode." The battery icon at the top of your screen will turn yellow, showing it's on. Low Power Mode reduces background activity, automatic downloads, and some visual effects to extend battery life by an hour or two. It turns off automatically when your phone charges to 80% or more.`,
        tip: 'You can add Low Power Mode to Control Center for quick access: go to Settings → Control Center and add "Low Power Mode" to the list.',
      },
    ],
  },

  {
    slug: 'ai-voice-cloning-scam-what-to-know',
    title: 'How to Protect Yourself From AI Voice Cloning Scams',
    excerpt: "Scammers can now fake a family member's voice using AI — learn how this scam works and the one question that can stop it.",
    category: 'safety-guides',
    tags: ['AI scam', 'voice cloning', 'phone scam', 'fraud', 'family safety'],
    readTime: '6 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A new type of phone scam uses artificial intelligence to clone a family member's voice. Scammers record just a few seconds of your grandchild or child talking — often from a social media video — and use a computer program to fake their voice on a phone call. You'll hear what sounds exactly like your loved one saying they're in trouble and need money right away.",
    steps: [
      {
        title: 'Understand how the scam works',
        content: `The scammer calls you and you hear what sounds like your son, daughter, or grandchild saying they're in an emergency — a car accident, an arrest, a hospital visit. They say "Don't call anyone else, they'll make it worse." Then a second voice (pretending to be a lawyer, bail bondsman, or police officer) comes on and explains how to send money immediately. The entire "emergency" is fake.`,
        warning: `The fake voice sounds incredibly realistic. AI voice-cloning software can copy someone's voice from just 3-10 seconds of audio, which anyone can find in a social media video or voicemail.`,
      },
      {
        title: 'Set up a family code word right now',
        content: `Before you ever get a suspicious call, agree on a secret word or short phrase with your close family members — your children, grandchildren, or anyone who might call you in an emergency. This could be anything: a childhood nickname, a favorite food, a pet's name. If you ever receive a scary call, ask the person for the family code word. A real family member will know it. A scammer will not.`,
        tip: 'Do not post your code word on social media or share it with anyone outside your immediate family. Keep it private.',
      },
      {
        title: 'Hang up and call back on the real number',
        content: `If you receive a call like this and feel scared, take a breath and hang up. Then look up your family member's real phone number in your contacts and call them directly. In almost every case, they will answer and have no idea what you're talking about — because the "emergency" never happened. Even if it takes five minutes to reach them, that five-minute delay is much better than sending thousands of dollars to a scammer.`,
      },
      {
        title: 'Never send money through gift cards or wire transfer',
        content: 'Scammers always request payment in ways that cannot be reversed: gift cards (they ask you to read the numbers on the back), wire transfer, Zelle, or cryptocurrency. No legitimate emergency ever requires gift cards as payment. No real lawyer, bail bondsman, or government official will ever ask you to pay with iTunes cards or Google Play cards.',
      },
      {
        title: 'Report the call to the FTC',
        content: 'Whether or not you sent any money, report voice cloning scam calls at reportfraud.ftc.gov. Your report helps the Federal Trade Commission track these operations and warn other people. If you did send money, also contact your bank immediately — some wire transfers can be reversed if reported within 24 hours.',
        tip: 'The AARP Fraud Watch Network helpline at 1-877-908-3360 is free and has fraud specialists available to talk through what happened and advise on next steps.',
      },
    ],
  },

  {
    slug: 'how-to-find-your-wifi-password',
    title: 'How to Find Your WiFi Password on Any Device',
    excerpt: "Forgot your WiFi password? Here's how to look it up on your iPhone, Android phone, Windows computer, or directly on your router.",
    category: 'essential-skills',
    tags: ['wifi', 'password', 'network', 'router', 'internet'],
    readTime: '5 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Forgetting your WiFi password happens to everyone. The good news is your password is almost always saved somewhere on a device that's already connected — you just need to know where to look.",
    steps: [
      {
        title: 'Find it on an iPhone (iOS 16 or later)',
        content: `Go to Settings → Wi-Fi. Look for the network you're currently connected to (it will have a checkmark next to it). Tap the small "i" icon in a circle to the right of the network name. On the next screen, look for the "Password" field — it will show dots. Tap on the dots and use Face ID or Touch ID to reveal the full password.`,
        tip: 'This method only works on iPhones running iOS 16 or later. If you have an older iPhone, try the router sticker method in Step 4.',
      },
      {
        title: 'Find it on an Android phone',
        content: `Go to Settings → Wi-Fi (or Connections → Wi-Fi on Samsung phones). Tap the name of the WiFi network you're currently connected to. Look for a "Share" button — it will show a QR code along with the password written out in plain text below the QR code. If you don't see the password, tap the eye icon next to the password field to reveal it.`,
        tip: 'On Samsung Galaxy phones, you may need to tap the three-dot menu in the top right of the Wi-Fi screen and choose "QR code" to find the password.',
      },
      {
        title: 'Find it on a Windows computer',
        content: 'Click the Start button (Windows icon) and type "Network Status" in the search bar. Open the Network Status settings. Click "Properties" next to your current WiFi connection. Scroll down to find the "Network security key" field — the password will appear as dots. Click the eye icon next to it to reveal the actual password.',
      },
      {
        title: 'Check the sticker on your router',
        content: `If none of the above worked, look at the physical router (the box that creates your WiFi). On most routers, there's a sticker on the back or bottom that shows the default WiFi network name (SSID) and password. The password may be labeled "WPA Key," "Wireless Password," "Network Key," or similar. If you've never changed the router password, this sticker password will still work.`,
        tip: `If someone previously changed your router password and you can't find it anywhere, you can reset the router to factory settings by pressing and holding the small Reset button on the back for 30 seconds. This restores the original password from the sticker, but also disconnects all your devices — they'll need to reconnect.`,
      },
    ],
  },

  {
    slug: 'how-to-add-printer-windows-11',
    title: 'How to Add a Printer to Your Windows 11 Computer',
    excerpt: 'Adding a printer to Windows 11 takes just a few minutes — this guide walks you through both wireless and USB connection methods.',
    category: 'windows-guides',
    tags: ['printer', 'windows 11', 'setup', 'wireless printing', 'USB'],
    readTime: '5 min',
    thumbnailEmoji: '🖨️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Getting a printer to work with Windows 11 is much easier than it used to be. Windows 11 can often find your printer automatically. Here's how to get started, whether you're using a wireless printer or one that plugs in with a USB cable.",
    steps: [
      {
        title: 'Open Printers & scanners in Settings',
        content: 'Click the Start button (the Windows icon in the bottom left) and then click the gear icon for Settings. In Settings, click "Bluetooth & devices" in the left column. Then click "Printers & scanners." This is the central place to add and manage all printers on your computer.',
      },
      {
        title: 'Add a wireless printer',
        content: `First, make sure your printer is turned on and connected to the same WiFi network as your computer. On the Printers & scanners page, click "Add device." Windows 11 will automatically scan for nearby printers. When your printer's name appears in the list (usually within 30-60 seconds), click "Add device" next to it. Windows installs the printer driver automatically — no disc needed.`,
        tip: `If your printer doesn't appear, make sure it's connected to the same WiFi network. Many printers have a wireless setup button or menu option — check your printer's screen or the quick start guide that came in the box.`,
      },
      {
        title: 'Add a USB printer',
        content: 'Plug the USB cable from your printer into any open USB port on your computer. Windows 11 will usually detect and install the printer within one to two minutes automatically. To confirm it worked, go to Settings → Bluetooth & devices → Printers & scanners and check if your printer appears in the list.',
      },
      {
        title: 'Print a test page to confirm everything works',
        content: `In Printers & scanners, click on your printer's name in the list. Click "Print a test page." If a page prints correctly, your printer is set up and ready to use. If nothing happens, make sure the printer has paper loaded and is turned on, then try again.`,
        tip: `For advanced printer settings like ink levels or print quality, look for the printer manufacturer's app. HP has "HP Smart," Epson has "Epson Smart Panel," and Canon has "Canon PRINT." These free apps give you more control and let you check ink levels from your computer.`,
      },
    ],
  },

  {
    slug: 'transfer-photos-old-phone-to-new-phone',
    title: 'How to Move Your Photos From an Old Phone to a New One',
    excerpt: "Switching to a new phone doesn't mean losing your photos — here's the safest way to move all your pictures without losing anything.",
    category: 'essential-skills',
    tags: ['photos', 'phone transfer', 'iphone', 'android', 'backup'],
    readTime: '6 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Moving photos from an old phone to a new one sounds scary, but it's one of the safest things you can do — as long as you back them up first. This guide covers the most reliable methods for iPhones and Android phones.",
    steps: [
      {
        title: 'Back up photos from your old iPhone using iCloud',
        content: `On your old iPhone, go to Settings → tap your name at the top (your Apple ID) → iCloud → Photos → turn on "iCloud Photos." Wait for the upload to finish — this can take 30 minutes to a few hours depending on how many photos you have. You'll see a progress bar at the bottom of the Photos app. Make sure you're on WiFi and your phone is plugged in.`,
        tip: 'You get 5 GB of free iCloud storage. If you have many photos, you may need to upgrade to iCloud+ (50 GB for $0.99/month) to fit everything.',
      },
      {
        title: 'Restore photos on your new iPhone',
        content: `On your new iPhone, sign in with the same Apple ID you used on your old phone. Go to Settings → tap your name → iCloud → Photos → turn on "iCloud Photos." All your photos will appear in the Photos app, starting with the most recent. The photos download to your new phone over time as long as you're on WiFi.`,
      },
      {
        title: 'Transfer Android photos using Google Photos',
        content: 'Google Photos works the same way as iCloud but for Android. On your old Android phone, open Google Photos → tap your profile picture → Photos settings → Back up → make sure "Backup" is turned on. Wait for the upload to finish. On your new Android phone, open Google Photos and sign in with the same Google account — all your photos will appear automatically.',
        tip: `Google Photos gives you 15 GB of free storage shared across your Google account. You can check how much you've used at photos.google.com → Settings.`,
      },
      {
        title: 'Move photos between iPhone and Android (or vice versa)',
        content: `If you're switching between iPhone and Android, Google Photos is the best option because it works on both platforms. Install Google Photos on your old phone (search for it in the App Store or Google Play), sign in with a Google account, back up all your photos, then open Google Photos on your new phone with the same account. Everything will be there.`,
      },
    ],
  },

  {
    slug: 'fake-tech-support-popup-what-to-do',
    title: "What to Do When a Scary Pop-Up Says Your Computer Is Infected",
    excerpt: "If a pop-up suddenly says your computer has a virus and tells you to call a number, stop — it's almost always a scam. Here's what to do instead.",
    category: 'safety-guides',
    tags: ['scam', 'pop-up', 'tech support scam', 'computer safety', 'virus'],
    readTime: '5 min',
    thumbnailEmoji: '🛑',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A very common scam involves a scary pop-up that suddenly appears while you're browsing the internet. The pop-up may say 'VIRUS DETECTED,' 'Your computer is infected,' or 'Microsoft Security Alert.' It often includes a phone number and tells you to call immediately. This is almost always a fake.",
    steps: [
      {
        title: 'Recognize that this is a scam',
        content: 'Microsoft, Apple, and legitimate antivirus companies will never contact you through a browser pop-up and ask you to call a phone number. These fake alerts are designed to frighten you into calling scammers who will then ask for payment or request remote access to your computer. Do not call the number shown and do not give anyone remote access to your computer.',
        warning: `If you call the number and someone asks to "remote in" to fix your computer, hang up immediately. This is the scammer's goal — once they have access, they can steal passwords, install malicious software, or charge you hundreds of dollars.`,
      },
      {
        title: 'Close the browser tab',
        content: `Click the X on the browser tab that's showing the pop-up to close just that tab. On a PC, you can also press Ctrl + W on the keyboard to close the current tab. On a Mac, press Command + W. This usually removes the scary message and is all you need to do.`,
      },
      {
        title: `Force-close your browser if the pop-up won't go away`,
        content: 'Some fake pop-ups try to prevent you from closing them. On Windows, press Ctrl + Alt + Delete, click "Task Manager," find your browser (Chrome, Edge, Firefox) in the list, click it once, and then click "End Task." On a Mac, press Command + Option + Escape, find your browser in the list, and click "Force Quit."',
        tip: 'After force-closing, when you reopen your browser, it may ask if you want to "restore" the previous tabs. Do not restore them — this would bring back the fake pop-up page.',
      },
      {
        title: 'Run a free security scan to confirm your computer is fine',
        content: 'Open Windows Security (type "Windows Security" in the Start menu search bar). Click "Virus & threat protection," then click "Quick scan." Windows Defender will scan your computer and report any real threats. In almost every case, the scan will find nothing — because the pop-up was fake and no virus was ever on your computer.',
      },
      {
        title: 'Report the scam to the FTC',
        content: 'Report fake tech support pop-ups at reportfraud.ftc.gov. If you did call the number and gave someone access to your computer, contact your bank immediately to monitor for unusual charges, change your important passwords from a different device, and run a full scan with Windows Security.',
        tip: `AARP's Tech Support Scam hub at aarp.org/money/scams-fraud/tech-support-scams has more information and a helpline.`,
      },
    ],
  },

  {
    slug: 'how-to-cancel-unwanted-subscriptions',
    title: "How to Find and Cancel Subscriptions You Forgot You Had",
    excerpt: "Hidden subscriptions can cost hundreds of dollars a year — here's how to find them all and cancel the ones you don't want.",
    category: 'tips-tricks',
    tags: ['subscriptions', 'cancel', 'money saving', 'Apple', 'Google'],
    readTime: '5 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Many people are paying for subscriptions they signed up for years ago and completely forgot about. Streaming services, app subscriptions, cloud storage plans, and free trial sign-ups that became paid charges can quietly drain your bank account for months or years. A few minutes of checking can often save you hundreds of dollars.",
    steps: [
      {
        title: 'Find subscriptions on your iPhone',
        content: `Go to Settings and tap your name at the very top (your Apple ID). Tap "Subscriptions." You'll see a complete list of everything you're currently paying for through Apple — apps, streaming services, iCloud storage, and more. Each subscription shows the price, renewal date, and what you get. Tap any item to see details and tap "Cancel Subscription" if you want to stop it.`,
        tip: `Tap "Expired" below the active subscriptions to see services you previously cancelled — sometimes useful to remember what you've tried in the past.`,
      },
      {
        title: 'Find subscriptions on an Android phone',
        content: `Open the Google Play Store app. Tap your profile picture in the top right corner. Tap "Payments & subscriptions," then "Subscriptions." You'll see every app subscription you've signed up for through Google. Tap any subscription to see the renewal date and price, and tap "Cancel subscription" to stop it.`,
      },
      {
        title: 'Find subscriptions you pay for directly',
        content: `Not all subscriptions go through Apple or Google. Netflix, Hulu, Disney+, Amazon Prime, and many websites charge your credit or debit card directly. To find these, look at your bank or credit card statement from the past three months. Highlight any recurring charges under $25/month that you don't immediately recognize — those are often forgotten subscriptions.`,
        tip: 'Your bank or credit card app may have a "recurring charges" section that lists these automatically. Look for a filter or search option for "subscriptions" in your banking app.',
      },
      {
        title: 'Cancel subscriptions you no longer want',
        content: `For services billed directly (not through Apple or Google), log in to the service's website, go to Account or Billing Settings, and look for "Cancel subscription" or "Manage plan." Most services make you click through a few screens to confirm cancellation — keep going until you see a confirmation message. Take a screenshot or write down the confirmation number.`,
        warning: 'Some services offer to "pause" your subscription rather than cancel it. This still charges you after the pause ends. Choose "Cancel" not "Pause" unless you genuinely plan to come back.',
      },
    ],
  },

  {
    slug: 'organize-old-photos-google-photos',
    title: 'How to Organize Old Family Photos Using Google Photos',
    excerpt: 'Google Photos can automatically sort your pictures by date, face, and location — this guide shows you how to use it for free.',
    category: 'app-guides',
    tags: ['google photos', 'photos', 'organization', 'family', 'android', 'iphone'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Google Photos is a free app that automatically organizes your family photos by date, face, and location. It can group every photo that contains a specific grandchild in seconds, find pictures from a specific trip by location, or show all your photos from a holiday. You get 15 GB of free storage, which is enough for thousands of photos.",
    steps: [
      {
        title: 'Download Google Photos and sign in',
        content: `Search for "Google Photos" in the App Store (iPhone) or Google Play Store (Android) and install it for free. Open the app and sign in with your Google (Gmail) account. If you don't have a Gmail account yet, go to gmail.com on a computer or phone and tap "Create account" — it's free and takes about five minutes.`,
      },
      {
        title: 'Turn on automatic backup',
        content: 'When you first open Google Photos, it will ask if you want to back up your photos. Tap "Turn on backup." Tap "Confirm" or "Allow" when it asks for permission to access your photos. Your existing photos will begin uploading — this may take some time if you have many photos. Keep the app open, stay on WiFi, and keep your phone plugged in until the backup finishes.',
        tip: 'You get 15 GB of free storage shared across your Google account. If you have thousands of photos, you can pay $2.99/month for 100 GB of storage through the Google One app.',
      },
      {
        title: 'Search for photos by person, place, or thing',
        content: `Once backup is complete, tap the search bar at the bottom of the screen. You can search for a person's name (Google Photos will group photos by face automatically), a place like "beach" or "New York," or even objects like "birthday cake." Google Photos uses AI to understand what's in your photos without you manually labeling anything.`,
        tip: 'To name a face, tap on a face group in the search section, then tap the three dots and "Add name." After you label a few photos, Google Photos will recognize that person throughout all your photos.',
      },
      {
        title: 'Create a shared album for family',
        content: `Tap the Albums tab (the square icon with a plus sign). Tap "New album," give it a name like "Family 2025," and select photos to add. Tap "Share" inside the album and enter a family member's email or phone number. They'll receive a link to view the album — they don't need a Google account to view it, but they do if they want to add their own photos.`,
      },
    ],
  },

  {
    slug: 'how-to-block-spam-text-messages',
    title: 'How to Block Spam Text Messages on iPhone and Android',
    excerpt: "Tired of spam texts about packages, prizes, and fake banks? Here's how to filter them out and stop them from cluttering your phone.",
    category: 'tips-tricks',
    tags: ['spam', 'text messages', 'blocking', 'iphone', 'android', 'scam'],
    readTime: '4 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Spam text messages — fake package delivery alerts, prize scam texts, and pretend bank alerts — are a daily annoyance for millions of people. Both iPhone and Android have built-in tools to filter and block them automatically, and they're free to use.",
    steps: [
      {
        title: 'Turn on spam filtering on iPhone',
        content: 'Go to Settings → Messages. Scroll down and turn on "Filter Unknown Senders." This automatically moves text messages from people who are not in your contacts into a separate folder called "Unknown Senders." Your main Messages inbox stays clean with only messages from people you know.',
        tip: `To read messages from unknown senders, open the Messages app and tap "Filters" in the top left corner. You'll see an "Unknown Senders" section with all the filtered messages.`,
      },
      {
        title: 'Block a specific number on iPhone',
        content: `Open the spam text message. Tap the phone number or name at the very top of the screen. Tap "info" (the circle with a lowercase i). Scroll down and tap "Block this Caller." Tap "Block Contact" to confirm. Blocked numbers can't call or text you — they go directly to voicemail without ringing.`,
      },
      {
        title: 'Enable spam protection on Android',
        content: `Open the Messages app (the standard Google Messages app). Tap the three-dot menu in the top right corner. Tap "Settings" → "Spam protection" → turn on "Enable spam protection." Google's systems will now automatically flag and filter suspected spam texts before they reach your inbox.`,
      },
      {
        title: 'Block a specific number on Android',
        content: 'Open the spam text message in your Messages app. Press and hold on the message bubble to select it. Tap the three-dot menu in the top right and choose "Block & report spam." Tap "OK" to confirm. This blocks the number and also reports it to Google to help protect other users.',
        tip: `You can also report spam texts to your carrier by forwarding them to 7726 (SPAM). This is free and helps your carrier's spam-filtering systems improve.`,
      },
    ],
  },

  {
    slug: 'how-to-set-up-two-factor-authentication',
    title: 'How to Set Up Two-Step Verification to Protect Your Accounts',
    excerpt: "Two-step verification adds a second lock to your accounts so scammers can't get in even if they have your password.",
    category: 'safety-guides',
    tags: ['two-factor authentication', 'account security', 'password', 'gmail', 'facebook'],
    readTime: '6 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Two-step verification (also called two-factor authentication or 2FA) is like having both a deadbolt and a regular lock on your front door. Even if a scammer knows your password, they can't get into your account without also having access to your phone. Security experts say it's the single most effective thing you can do to protect your online accounts.",
    steps: [
      {
        title: 'Understand how it works',
        content: `When two-step verification is on, logging in to your account takes two steps instead of one. Step one: you enter your password as usual. Step two: a text message with a short code (like 847291) is sent to your phone. You type that code in, and only then are you let in. Since a scammer doesn't have your phone, they're locked out even if they know your password.`,
        tip: `The code sent to your phone is different every time and expires in a few minutes. Even if a scammer somehow sees a code, they can't reuse it.`,
      },
      {
        title: 'Turn on two-step verification for Gmail',
        content: `Go to myaccount.google.com on a computer or phone browser. Click "Security" in the left column. Scroll down to "How you sign in to Google" and click "2-Step Verification." Click "Get Started." Google will ask you to enter your password again to confirm it's you. Then follow the steps — you'll enter your phone number and Google will send you a test code to make sure it works.`,
        tip: `Gmail accounts with two-step verification turned on are dramatically less likely to be hacked. Google's own data shows accounts with 2FA block nearly all automated account break-in attempts.`,
      },
      {
        title: 'Turn on two-step verification for Facebook',
        content: 'On Facebook, tap the three horizontal lines (menu icon) → Settings & Privacy → Settings → Security and Login → scroll down to "Two-Factor Authentication" → tap "Use two-factor authentication." Choose "Text message (SMS)" as the method and enter your phone number. Facebook will send a test code to confirm it works.',
      },
      {
        title: `What to do if you don't get the verification code`,
        content: `If you turn on two-step verification and later don't receive the text code, check that your phone has cell service and is not in airplane mode. Some codes can take up to 2-3 minutes to arrive. Most services also offer a backup option — you can request the code be sent to a different phone number or email address, or use a backup code. Save your backup codes when you set up 2FA and keep them somewhere safe.`,
      },
    ],
  },

  {
    slug: 'should-i-upgrade-to-windows-11',
    title: 'Should You Upgrade Your Computer to Windows 11?',
    excerpt: "Wondering if Windows 11 is right for you? This guide explains what's changed, whether your computer can handle it, and how to check for free.",
    category: 'windows-guides',
    tags: ['windows 11', 'upgrade', 'computer', 'microsoft', 'PC'],
    readTime: '5 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Windows 11 is the latest version of Windows from Microsoft. It has a cleaner look, better security, and helpful new features. Microsoft ended support for Windows 10 in October 2025 — this means Windows 10 computers no longer receive security updates, which makes them vulnerable to new threats. Upgrading is now recommended for anyone who can.",
    steps: [
      {
        title: 'Check if your computer can run Windows 11',
        content: `Microsoft provides a free tool called "PC Health Check" that tells you if your computer is ready for Windows 11. Click the Start button, type "PC Health Check" in the search bar, and open the app. If it's not installed, open a browser, go to microsoft.com, and search "PC Health Check download." Once installed, click "Check Now" inside the app.`,
        tip: `PC Health Check takes about 30 seconds to run. It will give you a clear "This PC can run Windows 11" or "This PC can't run Windows 11" result.`,
      },
      {
        title: 'Understand why Windows 10 is now a security risk',
        content: 'Microsoft officially ended support for Windows 10 on October 14, 2025. "End of support" means Microsoft no longer releases security patches for Windows 10. When new security vulnerabilities are discovered (which happens regularly), Microsoft fixes them for Windows 11 but not Windows 10. This leaves Windows 10 computers increasingly exposed to hackers and malicious software over time.',
        warning: 'If you are still on Windows 10 as of 2026, your computer is not receiving security updates. This is especially important if you use your computer for online banking, email, or shopping.',
      },
      {
        title: 'Upgrade for free if your computer is compatible',
        content: 'If PC Health Check says your computer is compatible, you can upgrade for free. Go to Settings → Windows Update. You should see an offer to upgrade to Windows 11. Click "Download and install." The upgrade takes 30 to 60 minutes, keeps all your files, apps, and settings exactly as they are, and requires a restart to complete.',
        tip: `Do the upgrade when you don't need your computer for a few hours — it will restart several times during the process. Make sure your laptop is plugged in or your desktop is not likely to lose power.`,
      },
      {
        title: 'What to do if your computer is not compatible',
        content: `If your computer cannot run Windows 11, it's time to consider a new one. Continuing to use an unsupported Windows 10 machine puts your personal information at risk. A basic Windows 11 laptop that handles everyday tasks (email, web browsing, video calls) starts at around $300-$400 at retailers like Best Buy, Walmart, or Amazon. Look for any laptop with "Windows 11" on the box.`,
        tip: 'Before buying, AARP has a free guide on choosing a new computer at aarp.org — search "buying a new computer." Libraries often have free tech help sessions where a volunteer can advise you in person.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-roku-streaming-device',
    title: 'How to Set Up a Roku and Start Watching TV Without Cable',
    excerpt: `A Roku streaming stick lets you watch Netflix, YouTube, and hundreds of free channels on any TV — here's how to get started in 20 minutes.`,
    category: 'app-guides',
    tags: ['roku', 'streaming', 'cord cutting', 'TV', 'netflix', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A Roku is a small device about the size of a USB stick that plugs into your TV and lets you watch Netflix, Hulu, Amazon Prime Video, YouTube, and hundreds of free channels without paying for cable. Roku devices cost between $30 and $80 at most electronics stores, and there's no monthly fee for the Roku itself.",
    steps: [
      {
        title: 'Plug the Roku into your TV',
        content: `Look at the back or side of your TV for an HDMI port — it's a flat, slightly trapezoidal port about the size of a USB port but wider. Every TV made after 2008 has at least one. Plug the Roku stick into that HDMI port. Then plug the Roku's small power cable into the Roku stick and into a wall outlet or power strip. Roku includes an extender cable in the box if the space behind your TV is tight.`,
        tip: `Remember which HDMI port number you used — for example, "HDMI 2." You'll need to select that input on your TV in the next step.`,
      },
      {
        title: 'Select the correct input on your TV',
        content: `Turn your TV on. Use your TV's remote (not the Roku remote) and look for a button labeled "Input," "Source," or "HDMI." Press it and a menu will appear showing the available inputs. Select the HDMI port you plugged the Roku into (for example, "HDMI 2"). After a few seconds, the Roku setup screen will appear on your TV.`,
      },
      {
        title: 'Connect your Roku to your home WiFi',
        content: `Follow the on-screen instructions using the Roku remote. When prompted, select your WiFi network name from the list (this is the same network name you use on your phone or computer). Use the on-screen keyboard to type your WiFi password — this is slow but only needs to be done once. Press the right button on the Roku remote's directional pad to move between letters.`,
        tip: `If you're not sure what your WiFi password is, see the guide "How to Find Your WiFi Password on Any Device" at teksure.com/guides/how-to-find-your-wifi-password.`,
      },
      {
        title: 'Create a free Roku account',
        content: `Roku will ask you to create a free account at Roku.com. You can do this on the Roku setup screen or on a computer or phone by going to roku.com/link and entering the code shown on your TV screen. You'll need an email address and create a password. A Roku account is free and lets you install apps (called "channels") on your Roku.`,
      },
      {
        title: 'Add your streaming apps and start watching',
        content: `Once setup is complete, you'll see the Roku home screen with popular apps already installed, like Netflix, YouTube, and The Roku Channel (free). Scroll through the tiles to find what you want to watch. To add more apps, scroll to "Streaming Channels" in the main menu and browse or search. Free channels like Pluto TV, Peacock (free tier), and Tubi offer thousands of movies and shows with no subscription needed.`,
        tip: `The Roku Channel is completely free and has a large selection of movies and TV shows — no account or subscription needed. It's a great place to start.`,
      },
    ],
  },

  {
    slug: 'iphone-accessibility-features-for-seniors',
    title: 'Hidden iPhone Features That Make It Much Easier to Use',
    excerpt: 'Your iPhone has built-in tools to make text bigger, the screen easier to read, and controls simpler — most people never know they exist.',
    category: 'tips-tricks',
    tags: ['accessibility', 'iphone', 'seniors', 'settings', 'large text'],
    readTime: '6 min',
    thumbnailEmoji: '👓',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apple builds accessibility features into every iPhone, and they're designed to make the phone easier to use for everyone — especially people with vision, hearing, or dexterity challenges. These features are already on your iPhone right now; you just need to turn them on.",
    steps: [
      {
        title: 'Make text larger across your entire iPhone',
        content: 'Go to Settings → Display & Brightness → Text Size. Drag the slider to the right to make all text larger across every app. For even larger sizes, go to Settings → Accessibility → Display & Text Size → turn on "Larger Accessibility Sizes." This unlocks a bigger range on the text size slider, allowing truly large text.',
        tip: 'You can add a Text Size shortcut to Control Center: go to Settings → Control Center and add "Text Size." Then you can adjust font size from anywhere by swiping down from the top right of your screen.',
      },
      {
        title: 'Make text bolder and increase contrast',
        content: 'Go to Settings → Accessibility → Display & Text Size. Turn on "Bold Text" to make all letters thicker and easier to see on screen. Turn on "Increase Contrast" to make the difference between colors more pronounced — this makes buttons, text, and icons stand out more clearly against backgrounds.',
      },
      {
        title: 'Turn on Zoom to magnify anything on screen',
        content: 'Go to Settings → Accessibility → Zoom and turn it on. Once on, you can double-tap the screen with three fingers to zoom in to any area. Drag with three fingers to move around while zoomed in. Double-tap with three fingers again to zoom back out. This works in every app, every screen, and on the keyboard.',
        tip: 'If the Zoom feature feels disorienting at first, try using it in the Settings app with the slider in "Window Zoom" mode — it creates a floating magnifying window instead of zooming the whole screen.',
      },
      {
        title: 'Enable Reachability for one-handed use',
        content: 'On iPhones with Face ID, the top of the screen can be hard to reach with one hand. Reachability fixes this. Go to Settings → Accessibility → Touch and turn on "Reachability." Then to use it, swipe down on the very bottom edge of the screen (below the home indicator bar). The top half of the screen slides down to within thumb reach. Tap what you need, and it slides back up on its own.',
      },
      {
        title: 'Reduce motion to prevent dizziness',
        content: 'Some people find the animations and parallax effects on iPhone screens cause dizziness or discomfort. To turn these off, go to Settings → Accessibility → Motion and turn on "Reduce Motion." This simplifies or eliminates most animations on the iPhone, replacing the zoom effects with simple fades. Many users find the phone feels more stable and easier to follow with this setting on.',
      },
    ],
  },

  {
    slug: 'how-to-recover-hacked-facebook-account',
    title: 'How to Get Back Into a Facebook Account That Was Hacked',
    excerpt: "If someone has gotten into your Facebook account and changed the password, there is still a way to get back in — here's exactly how.",
    category: 'safety-guides',
    tags: ['facebook', 'hacked', 'account recovery', 'social media', 'password'],
    readTime: '5 min',
    thumbnailEmoji: '🔓',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Having your Facebook account hacked is upsetting and stressful. Scammers sometimes break into accounts and change the password and email address so you can't get back in. Facebook has a dedicated recovery process for exactly this situation, and it doesn't require you to remember your old password.",
    steps: [
      {
        title: 'Use the "Forgot password?" link on Facebook',
        content: 'Go to facebook.com and click "Forgot password?" below the login box. Type in the email address or phone number connected to your account and click "Search." Facebook will find your account and show you options to verify your identity — it may offer to send a code to your phone, email, or let you answer security questions.',
      },
      {
        title: 'Request a recovery code to your phone',
        content: `If Facebook offers to send a code to your phone number, choose that option. A text message with a 6-digit code will arrive within a minute or two. Enter that code on the Facebook page and you'll be able to set a new password. Choose something you haven't used before — at least 12 characters mixing letters and numbers.`,
      },
      {
        title: 'If the hacker changed your email and phone number',
        content: `If you can't receive a code because the hacker changed your contact information, look for a link that says "No longer have access to these?" or "Try another way." Facebook will ask you to go through an identity verification process that may include answering questions about your account, identifying friends from photos, or uploading a photo ID. This process can take 1-3 days.`,
        tip: `Be patient with this process — Facebook reviews these cases manually. Submitting accurate information the first time is important. Don't try to submit multiple recovery requests at once as it can slow things down.`,
      },
      {
        title: 'Secure your account immediately after recovering access',
        content: `Once you're back in, do all of these things right away: (1) Change your password to something new and strong. (2) Go to Settings → Security and Login → turn on two-factor authentication. (3) Go to Settings → Security and Login → scroll to "Where You're Logged In" and log out of all other sessions. (4) Go to Settings → Apps and Websites and remove any apps you don't recognize.`,
        warning: 'After a hack, scammers sometimes leave behind connected apps that let them continue accessing your account even after you change the password. Removing unknown apps is essential.',
      },
    ],
  },

  {
    slug: 'how-to-use-a-password-manager',
    title: 'How to Use a Password Manager to Remember All Your Passwords',
    excerpt: "A password manager remembers every password for you so you only need to remember one — here's how to start with a free option.",
    category: 'essential-skills',
    tags: ['password manager', 'passwords', 'security', 'bitwarden', 'iphone'],
    readTime: '6 min',
    thumbnailEmoji: '🗝️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A password manager is an app that stores all your passwords safely in one place. Instead of trying to remember dozens of passwords or writing them in a notebook, you only need to remember one master password — and the password manager handles the rest. Security experts recommend using one because it lets you have strong, unique passwords for every account without the impossible task of memorizing them all.",
    steps: [
      {
        title: 'Create a free Bitwarden account',
        content: `Bitwarden is a free, trusted password manager recommended by security experts. On your computer or phone, open a browser and go to bitwarden.com. Click "Get Started Free" and create an account with your email address. Then choose a master password — this is the one password you'll need to remember. Make it something you won't forget but that others wouldn't guess, like a phrase from a song with a few numbers added.`,
        warning: 'Write your master password down and keep it somewhere safe at home — a physical notebook works well. Bitwarden cannot recover your master password for you if you forget it.',
      },
      {
        title: 'Download the Bitwarden app on your phone',
        content: 'Search for "Bitwarden" in the App Store (iPhone) or Google Play Store (Android). Install the free app and sign in with the email and master password you just created. The app will ask for permission to fill in passwords automatically — tap "Allow" so it can save and fill passwords in other apps and your browser.',
      },
      {
        title: 'Let Bitwarden save passwords as you log in',
        content: `The next time you log in to any app or website, Bitwarden will notice you're logging in and offer to save the password. Tap "Save" when it asks. After a few days of doing this, Bitwarden will have your most important passwords stored. You can also manually add passwords by tapping the "+" button in the Bitwarden app.`,
        tip: `You don't need to add every password at once. Just let Bitwarden save passwords naturally as you log in over the next few weeks.`,
      },
      {
        title: 'Use Bitwarden to auto-fill passwords',
        content: 'When you open a login screen in an app or browser, look for the Bitwarden icon to appear near the username or password field. Tap it and Bitwarden will fill in your saved username and password automatically — no typing needed. On iPhone, Bitwarden shows up through the built-in password autofill feature: look for a "Passwords" suggestion above the keyboard.',
      },
      {
        title: 'Try the built-in password manager on your device',
        content: `If Bitwarden feels like too many steps, both iPhone and Android have built-in password managers that are simpler. On iPhone, go to Settings → Passwords to see and use saved passwords. On Android, go to Settings → Passwords & accounts. These built-in options work only on your device and don't sync across devices, but they're a great starting point if you're new to password managers.`,
        tip: `Apple's built-in password manager is called "Keychain." If Safari or other Apple apps ask to save a password and you tap "Save," the password goes into Keychain and is automatically filled in next time.`,
      },
    ],
  },

  {
    slug: 'how-to-video-call-on-iphone-facetime',
    title: 'How to Make a FaceTime Video Call on iPhone',
    excerpt: `FaceTime is the free video calling app on every iPhone — here's how to call family and friends face-to-face using your phone.`,
    category: 'essential-skills',
    tags: ['facetime', 'video call', 'iphone', 'family', 'communication'],
    readTime: '4 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "FaceTime is a free video calling app that comes installed on every iPhone and iPad. It lets you see and talk to family and friends face-to-face over WiFi or phone data at no extra cost. All you need is an iPhone and a WiFi connection, and the person you're calling also needs an Apple device.",
    steps: [
      {
        title: 'Open FaceTime and start a call',
        content: `Find the FaceTime app on your iPhone — it has a green background with a white video camera icon. Tap it to open. Tap the plus (+) button in the top right corner. Type in the name of someone in your contacts, or their phone number or Apple ID (their email address). When their name appears, tap it, then tap "Video" to start a video call. Their phone will ring and when they answer, you'll see their face on your screen.`,
        tip: 'You can also start a FaceTime call directly from the Contacts app or Messages: find the person, tap their name, and look for the FaceTime video icon.',
      },
      {
        title: 'Make sure your camera is pointed at your face',
        content: `During a FaceTime call, your phone uses the front camera — the one on the same side as your screen that you use for selfies. Hold the phone at eye level in front of your face, roughly at arm's length. Looking slightly down at the phone is fine. Make sure there's good light in front of you (facing a window works well) rather than behind you, which makes you appear as a dark silhouette.`,
        tip: `If you rest your phone against a cup or book so you don't have to hold it, both you and the person you're calling will have a more comfortable, natural conversation.`,
      },
      {
        title: 'Control your call with the on-screen buttons',
        content: `During a call, tap the screen once to see the control buttons. The red phone button ends the call. The microphone button (with a line through it) mutes you so the other person can't hear you — tap it again to unmute. The camera button flips between your front and back cameras. If the buttons disappear, just tap the screen again to bring them back.`,
      },
      {
        title: 'Add more family members to the call',
        content: `During a FaceTime call, tap the screen to see the controls, then tap the person icon with a plus sign to add more people. Type in another contact's name and tap "Add." Great for holiday calls when family members are in different locations — everyone can see and talk to each other at the same time. FaceTime supports up to 32 people at once.`,
        tip: 'If a FaceTime call is choppy, blurry, or keeps freezing, the most common fix is moving closer to your WiFi router. A weak WiFi signal is the number-one cause of poor video call quality.',
      },
    ],
  },

  {
    slug: 'how-to-speed-up-slow-internet-browser',
    title: 'How to Speed Up a Slow Internet Browser in 5 Minutes',
    excerpt: 'If web pages are loading slowly or your browser feels sluggish, clearing cached files and a few other quick steps can speed things up.',
    category: 'tips-tricks',
    tags: ['browser', 'slow computer', 'chrome', 'cache', 'windows', 'mac'],
    readTime: '4 min',
    thumbnailEmoji: '⚡',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "If your internet browser — Chrome, Edge, Safari, or Firefox — loads pages slowly or freezes up often, a buildup of temporary files called 'cache' is often the cause. Over time, these files pile up and can slow your browser down. Clearing them out takes about two minutes and often makes a noticeable improvement.",
    steps: [
      {
        title: 'Clear cache in Google Chrome',
        content: 'Open Chrome and click the three vertical dots in the top right corner. Hover over "More tools" and click "Clear browsing data." A window will pop up — change the Time Range to "All time." Make sure "Cached images and files" and "Cookies and other site data" are both checked. Click the blue "Clear data" button. Chrome will clear the files and reload the page.',
        tip: `After clearing cookies, you'll need to log back in to websites like your email, Facebook, and banking — so make sure you know your passwords before doing this.`,
      },
      {
        title: 'Clear cache in Microsoft Edge',
        content: 'Open Edge and click the three horizontal dots in the top right corner. Click "Settings" → "Privacy, search, and services." Under "Clear browsing data," click "Choose what to clear." Check "Cached images and files" and "Cookies and other site data." Click "Clear now." Edge will clear the files and you may need to log back in to some websites.',
      },
      {
        title: `Close extra tabs you're not using`,
        content: `Having 15 or 20 tabs open at once uses a significant amount of your computer's memory (RAM) and can slow down the entire browser — and sometimes the whole computer. Close tabs you're not actively using by clicking the small X on each tab. If you need to save a page to come back to, bookmark it: press Ctrl + D (Windows) or Command + D (Mac) to add it to your bookmarks.`,
        tip: `A good rule of thumb: if you haven't looked at a tab in more than 30 minutes, close it. You can always search for the page again in seconds.`,
      },
      {
        title: `Remove browser extensions you don't use`,
        content: `Browser extensions run quietly in the background and can slow things down significantly. In Chrome, click the puzzle piece icon near the top right — this shows your installed extensions. Click the three-dot menu next to any extension you don't recognize or no longer use and click "Remove from Chrome." If you're not sure what an extension does, removing it is usually safe — you can always reinstall it later.`,
      },
    ],
  },

  {
    slug: 'how-to-back-up-iphone-to-icloud',
    title: 'How to Back Up Your iPhone to iCloud (And Why It Matters)',
    excerpt: "Backing up your iPhone means if it's ever lost, stolen, or broken, all your photos and contacts are safe — here's how to set it up.",
    category: 'essential-skills',
    tags: ['icloud', 'backup', 'iphone', 'photos', 'data safety'],
    readTime: '5 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "A backup is a copy of everything on your iPhone — your photos, contacts, messages, and app data — stored safely in Apple's online service called iCloud. If your phone is ever lost, stolen, broken, or replaced, you can restore everything onto a new phone from that backup. Without a backup, that data would be gone forever.",
    steps: [
      {
        title: 'Turn on iCloud Backup',
        content: `Open Settings and tap your name at the very top (this opens your Apple ID settings). Tap "iCloud." Scroll down and tap "iCloud Backup." Tap the toggle next to "Back Up This iPhone" to turn it on — it will turn green. Your iPhone will now back up automatically every time it's connected to WiFi and charging.`,
        tip: `If you don't see "iCloud Backup" listed, tap "See All" under the app list to find it.`,
      },
      {
        title: 'Start your first backup now',
        content: `On the iCloud Backup screen, tap "Back Up Now." Make sure you're connected to WiFi first — iCloud backups use your internet connection, not cellular data. The first backup may take 5-30 minutes depending on how much is on your phone. You'll see a progress indicator while it's running. Keep your phone plugged in and the screen from going dark while the backup runs.`,
      },
      {
        title: 'Check that your backup completed successfully',
        content: `After the backup finishes, the screen will show "Last Backup" with the date and time. This is your confirmation that the backup worked. From now on, your iPhone will back up automatically overnight — as long as it's plugged in and connected to WiFi when you go to sleep. You can check the last backup date any time by going back to Settings → [your name] → iCloud → iCloud Backup.`,
        tip: `A good habit: before any major update or if you're planning to get a new phone, open this screen and tap "Back Up Now" to make sure you have a fresh backup.`,
      },
      {
        title: 'Upgrade storage if you get a "Not enough space" message',
        content: 'Apple gives everyone 5 GB of free iCloud storage. If you have many photos or apps, that may not be enough. If you see a storage warning, go to Settings → [your name] → iCloud → "Manage Account Storage" → "Upgrade to iCloud+." The 50 GB plan costs $0.99 per month and is enough for most people. The 200 GB plan ($2.99/month) works for people with thousands of photos.',
        tip: 'The 50 GB plan ($0.99/month) is less than a dollar a month and gives you peace of mind that all your photos and data are protected.',
      },
    ],
  },
];
