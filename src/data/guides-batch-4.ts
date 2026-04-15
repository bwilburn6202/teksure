// Batch 4: Trending Senior & Beginner Topics (20 guides — April 2026)
import type { Guide } from './guides';

export const guidesBatch4: Guide[] = [
  {
    slug: 'how-to-update-your-iphone-to-ios-18',
    title: 'How to Update Your iPhone to the Latest iOS Version',
    excerpt: 'Keep your iPhone safe and running its best by updating to the latest iOS version — step-by-step with no tech knowledge needed.',
    category: 'essential-skills',
    tags: ['iPhone', 'iOS', 'updates', 'Apple', 'beginners'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/2Dk-DnXUeq4',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Keeping your iPhone updated is one of the most important things you can do to keep it safe and working well. Apple releases updates that fix security holes (ways hackers can get into your phone), fix small bugs, and sometimes add helpful new features. Many people put off updates because they worry something will go wrong — but skipping updates actually makes your phone less safe.

The current iPhone operating system as of April 2026 is iOS 18.7.7, which Apple released as an emergency security update. If you have not installed it yet, doing so is strongly recommended.

Before you start, make sure your iPhone is plugged into a charger and connected to Wi-Fi. Updates can use a lot of data and battery, so you want both. You will also need about 15–30 minutes where you can leave your phone alone. Here is how to do it: Go to the Settings app (the gray gear icon on your home screen). Scroll down and tap "General." Tap "Software Update." Your iPhone will check for the latest update. If one is available, tap "Download and Install." You may be asked to enter your passcode. Tap "Install Now" and your phone will restart on its own — that is completely normal.

If it says "Your software is up to date," that means your phone already has the newest version and you are all set. Apple makes updates available over several weeks, so if you do not see an update that others are talking about, it may not be ready for your specific phone model yet. Updates are free and only take a few minutes of your attention. Setting a reminder to check for updates once a month is a good habit that keeps your phone protected.`,
    steps: [
      { title: 'Plug in and connect to Wi-Fi', content: 'Before updating, plug your iPhone into its charger and make sure you are connected to your home Wi-Fi. Updates can be several gigabytes and need a stable connection.' },
      { title: 'Open Settings and tap General', content: 'Tap the gray gear icon on your home screen to open the Settings app. Scroll down and tap "General."' },
      { title: 'Tap Software Update', content: 'Tap "Software Update." Your iPhone will check for the latest available update.' },
      { title: 'Download and Install', content: 'If an update is available, tap "Download and Install." Enter your passcode when asked, then tap "Install Now." Your phone will restart — that is normal.' },
      { title: 'Wait for the restart', content: 'Your iPhone may show an Apple logo and a progress bar for a few minutes. When it finishes, it will go back to the lock screen. You are done.' },
    ],
  },
  {
    slug: 'how-to-block-spam-and-robocalls-on-iphone-android',
    title: 'How to Block Spam Calls and Robocalls on Your Phone',
    excerpt: 'Stop unwanted calls from scammers and telemarketers with free built-in tools on iPhone and Android — no app purchase required.',
    category: 'safety-guides',
    tags: ['spam calls', 'robocalls', 'iPhone', 'Android', 'scams', 'phone'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/POo9oUF6WC8',
    thumbnailEmoji: '📵',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Robocalls and spam calls are one of the biggest annoyances — and dangers — for phone users today. The FTC receives millions of complaints about these calls every year. Many are from scammers pretending to be the IRS, Medicare, Social Security, or even your own bank. The good news is that both iPhone and Android phones have free, built-in tools to block many of these calls automatically.

On an iPhone: Open the Settings app, scroll down and tap "Phone," then tap "Silence Unknown Callers." When this is turned on, calls from numbers not in your contacts will be sent straight to voicemail. You will still see a missed call notification and can check the voicemail. On an Android phone (the steps are very similar on most brands): Open the Phone app, tap the three dots or "More" in the top right corner, tap "Settings," then "Blocked Numbers" or "Spam and Call Screen." Turn on "Filter Spam Calls." Google's built-in feature called Call Screen can even answer the call for you and tell the caller to state their name — real callers will say who they are, scammers usually hang up.

You can also register your phone number at donotcall.gov for free, which is the official national registry run by the FTC. While this does not stop illegal scam calls (scammers ignore the list), it does reduce calls from legitimate telemarketers. For an extra layer of protection, your phone carrier likely offers a free spam-blocking service — AT&T has "ActiveArmor," Verizon has "Call Filter," and T-Mobile has "Scam Shield." Search your carrier's name plus "free spam call blocking" to find and activate yours.`,
    steps: [
      { title: 'iPhone: Silence Unknown Callers', content: 'Open Settings → Phone → Silence Unknown Callers and turn it on. Calls from numbers not in your contacts go straight to voicemail.' },
      { title: 'Android: Filter Spam Calls', content: 'Open the Phone app → three dots → Settings → Spam and Call Screen → turn on "Filter Spam Calls."' },
      { title: 'Register with the Do Not Call list', content: 'Visit donotcall.gov and enter your phone number. This reduces calls from legitimate telemarketers (though scammers ignore it).' },
      { title: 'Activate your carrier\'s free spam blocking', content: 'AT&T: activate "ActiveArmor" in the myAT&T app. Verizon: activate "Call Filter" in the My Verizon app. T-Mobile: activate "Scam Shield" in the T-Mobile app. All are free.', tip: 'Carrier spam blocking catches many scam calls before they even ring your phone.' },
    ],
  },
  {
    slug: 'what-are-passkeys-and-how-to-use-them',
    title: 'What Are Passkeys and How to Use Them Instead of Passwords',
    excerpt: 'Passkeys are a safer, easier way to log in to websites and apps without typing a password — here is how they work in plain English.',
    category: 'safety-guides',
    tags: ['passkeys', 'passwords', 'security', 'iPhone', 'Google', 'Apple'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/FTweNDAc9Fs',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `A passkey is a new way to log in to websites and apps that does not require you to type a password. Instead of remembering a password, your phone or computer does the work for you. When you want to log in, your device asks you to use your fingerprint, Face ID, or PIN — the same way you already unlock your phone. That is it. No password to remember, no password to forget, and no password for a hacker to steal.

Here is why passkeys are safer than passwords: hackers cannot "steal" a passkey the way they steal passwords, because no password is ever sent across the internet. Your phone holds a special digital "key" that only works on the exact website it was created for. This means that even if a scammer sends you a fake login page, your passkey will not work on the fake site — giving you an automatic layer of protection against phishing scams.

More and more major websites now offer passkeys: Google, Apple, Microsoft, PayPal, eBay, and many others. When you log in and a website says "Do you want to save a passkey for next time?" — tap Yes. Your phone will save it automatically. Next time you visit that site, just tap "Sign in with passkey" and use your fingerprint or Face ID. If you use an iPhone, your passkeys are stored in iCloud Keychain and work across all your Apple devices. If you use Android, Google Password Manager keeps your passkeys safe and ready. Think of passkeys as a high-tech key that only your device can use — and it is free, already built into your phone.`,
    steps: [
      { title: 'What a passkey looks like', content: 'When you log in to a website, it may offer "Sign in with passkey." Tapping it prompts your phone to verify it is you — using your fingerprint, Face ID, or PIN.' },
      { title: 'Create a passkey on a website that offers it', content: 'Log in to a supported site (Google, Apple, PayPal, etc.) and look in Account Settings for "Passkeys" or "Security Keys." Tap "Create a passkey" and follow the on-screen steps.' },
      { title: 'Your phone saves the passkey automatically', content: 'On iPhone, passkeys are saved in iCloud Keychain. On Android, they are saved in Google Password Manager. You do not have to do anything extra.' },
      { title: 'Using your passkey next time', content: 'Visit the site and tap "Sign in with passkey." Your phone will ask for your fingerprint or Face ID. That is the entire login — no typing required.', tip: 'If you get a new phone, your passkeys transfer automatically with your iCloud or Google account backup.' },
    ],
  },
  {
    slug: 'how-to-spot-ai-voice-cloning-scam-calls',
    title: 'How to Spot AI Voice Cloning Scam Calls (The Grandparent Scam)',
    excerpt: 'Scammers now use AI to fake the voice of a family member in distress — learn the warning signs and what to do if you get one of these calls.',
    category: 'safety-guides',
    tags: ['scams', 'AI scams', 'grandparent scam', 'voice cloning', 'phone', 'safety'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/r2hcq5NNQe8',
    thumbnailEmoji: '🎭',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `One of the most alarming scams of 2026 is the AI voice cloning call. Here is how it works: a scammer uses artificial intelligence software to clone the voice of your grandchild, son, daughter, or another loved one. They only need a few seconds of that person's voice — which scammers often get from social media videos. Then they call you, and the voice on the other end sounds exactly like your family member, saying they are in trouble: arrested, in a car accident, sick abroad, or in danger. They beg you not to call anyone else and ask you to wire money or buy gift cards immediately.

The FTC warns this scam has grown by over 300% in the past year, and the losses can be devastating — sometimes tens of thousands of dollars. The voice sounds genuinely real, even to careful people. Here is how to protect yourself: First, always hang up and call your family member directly on a number you already have saved. Do not call back the number that called you. Second, set up a family "safe word" — a secret word only your family knows. If the "emergency" is real, they can say the word to confirm it is really them. Third, never send gift cards, wire transfers, or cash to anyone who calls you saying a family member is in trouble.

If you receive one of these calls, report it to the FTC at reportfraud.ftc.gov and warn your friends and family. Sharing this information with people you know is one of the most valuable things you can do to protect your community.`,
    steps: [
      { title: 'Recognize the pattern', content: 'You get a call from a "family member" saying they are in trouble — arrested, in an accident, or stranded. They beg you not to call anyone else and ask for immediate money.', warning: 'This is almost always a scam. Hang up before you do anything else.' },
      { title: 'Hang up and call the family member directly', content: 'Do not call back the number that called you. Call your family member on the number you already have saved in your contacts. In almost every case, they will answer and tell you they are fine.' },
      { title: 'Set up a family safe word', content: 'Choose a secret word with your family that only you all know. In any real emergency, they can say the safe word to confirm it is really them.' },
      { title: 'Never send gift cards or wire transfers', content: 'Legitimate emergencies — even real ones — are never resolved by buying gift cards or wiring money. A real lawyer, hospital, or bail bondsman will never ask for payment this way.', warning: 'Once money is sent by wire transfer or gift card, it cannot be recovered.' },
      { title: 'Report the call', content: 'File a report at reportfraud.ftc.gov. This helps law enforcement track and shut down these operations. Also warn family and friends about this scam.' },
    ],
  },
  {
    slug: 'how-to-use-windows-11-start-menu',
    title: 'How to Use the Windows 11 Start Menu (If You Are Used to Windows 10)',
    excerpt: 'Windows 11 moved everything around — here is a simple guide to finding your programs, files, and settings in the new layout.',
    category: 'windows-guides',
    tags: ['Windows 11', 'Start Menu', 'Windows 10', 'beginners', 'desktop'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/5kt4t2gzt9g',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `If your computer recently updated to Windows 11 — or if you bought a new PC that came with it — you may have noticed that things look quite different from Windows 10. The biggest change is the Start button and Start Menu, which moved from the lower-left corner of the screen to the center. This trips up a lot of people who have been clicking the bottom-left corner for years. The good news: everything still works the same way, it is just in a different spot.

To open the Start Menu, click the Windows logo (the four-square icon) in the middle-bottom of your screen. A panel pops up showing your pinned apps at the top and recently used files below. To find an app that is not shown, click the "All apps" button in the top right of the Start Menu — this gives you a full list, just like the old Windows 10 Start Menu. You can also type any program's name directly after opening Start — the search bar is automatic. If you miss having the Start button on the left, you can move it back: right-click an empty spot on the taskbar, click "Taskbar settings," scroll to "Taskbar behaviors," and change "Taskbar alignment" from "Center" to "Left."

Another helpful tip: the Settings app (where you control things like Wi-Fi, display brightness, and printers) is now a gear icon inside the Start Menu or can be reached by pressing the Windows key and the letter "I" at the same time. Windows 11 also has a new search bar built into the taskbar — just click it and type whatever you are looking for, whether it is a file, a website, or a program.`,
    steps: [
      { title: 'Find the Start button', content: 'The Windows logo is now in the center of the taskbar at the bottom of your screen (not the left corner). Click it to open the Start Menu.' },
      { title: 'Find any app', content: 'Click "All apps" in the top right of the Start Menu to see every program installed, listed alphabetically.' },
      { title: 'Move Start back to the left (optional)', content: 'Right-click an empty area on the taskbar → Taskbar settings → Taskbar behaviors → change "Taskbar alignment" to "Left."' },
      { title: 'Open Settings', content: 'Click the Start button and click the gear icon, or press the Windows key + I on your keyboard.' },
      { title: 'Use the search bar', content: 'Click the search bar on the taskbar (or press the Windows key and start typing). Type any app name, file, or question to find it instantly.' },
    ],
  },
  {
    slug: 'how-to-free-up-google-photos-storage',
    title: 'How to Free Up Space in Google Photos When Storage Is Full',
    excerpt: 'When your Google account storage fills up, photos stop backing up and email slows down — here is how to fix it without losing your pictures.',
    category: 'essential-skills',
    tags: ['Google Photos', 'storage', 'Android', 'Google account', 'photos'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/xu1agsXYdqc',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Google gives every account 15 gigabytes of free storage — but that storage is shared between Google Photos, Gmail, and Google Drive. If you use Google Photos to back up your pictures and videos automatically, that 15 GB can fill up faster than you expect, especially if you have had the same Google account for several years. When your storage is full, new photos stop backing up, and you may even stop receiving emails.

To check how much storage you have left, open Google Photos on your phone, tap your profile picture in the top right corner, and tap "Manage storage." This shows you how full your storage is and offers suggestions for freeing up space. The easiest fix is to let Google "clean up" your photos by converting full-quality pictures to "Storage Saver" quality — this slightly reduces image size in a way that is almost invisible to the eye but frees up a lot of space. Google will offer this option in the storage manager.

You can also delete items you do not need: videos take up the most space, so look through any old videos you do not want to keep. Duplicate photos and blurry shots are also good candidates for deletion. Deleted photos go to a Trash folder and are permanently removed after 60 days, so you have time to change your mind. If you find you need more storage, Google offers affordable plans starting at a few dollars per month through Google One. But for most people, cleaning up old videos and switching to Storage Saver quality will free up enough space to keep going for years.`,
    steps: [
      { title: 'Check your storage level', content: 'Open Google Photos → tap your profile picture → tap "Manage storage." You will see how much space is used and what is using it.' },
      { title: 'Switch to Storage Saver quality', content: 'In the storage manager, look for "Compress existing photos & videos." Tap it to convert your existing photos to Storage Saver quality — slightly smaller but nearly identical to the eye.' },
      { title: 'Delete large videos you no longer need', content: 'In Google Photos, tap the search bar and search "Videos." Sort by size and delete any videos you do not need. Each video can free up several hundred megabytes.', tip: 'Deleted photos stay in Trash for 60 days before being permanently removed, so you can undo a mistake.' },
      { title: 'Upgrade storage if needed', content: 'If you still need more space, go to one.google.com to see Google One storage plans. 100 GB costs about $3 per month — enough for most people for years.' },
    ],
  },
  {
    slug: 'how-to-share-netflix-with-family-under-new-rules',
    title: 'How to Share Netflix With Family Under the New Password Sharing Rules',
    excerpt: 'Netflix changed its sharing rules — learn the right way to add a household member or set up a new account without paying more than you need to.',
    category: 'app-guides',
    tags: ['Netflix', 'streaming', 'password sharing', 'account', 'TV'],
    readTime: '5 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Netflix updated its rules about sharing accounts with people outside your home. If you used to share your password with a grown child in another city or a close friend, you may have received notices saying that is no longer allowed. This has confused a lot of people, and it is worth understanding exactly what changed so you are not paying for something you do not need — or accidentally locked out of your own account.

Here is how Netflix now defines a "household": everyone who watches Netflix at your primary home address. Your partner, children living with you, and roommates all count as your household. If someone in another home wants their own access, Netflix offers an "Extra Member" add-on on some plans that lets you add one person outside your home for a small monthly fee. To check your plan and see if this option is available to you, go to Netflix.com on a computer, click your profile picture in the top right, click "Account," and look under your plan details.

If you have children or grandchildren in college or living on their own who need Netflix, the most cost-effective solution is usually for them to start their own Netflix account. Netflix often has promotions for new subscribers. If you are the one whose access was cut off, you can set up your own account quickly at Netflix.com — just choose a plan (the Standard with Ads plan is the most affordable) and enter a payment method. Your watch history and preferences can also be transferred to a new account using the Netflix data transfer feature found in your account settings.`,
    steps: [
      { title: 'Understand what changed', content: 'Netflix now allows sharing only with people in your household (same home address). Sharing with family or friends at other addresses requires an "Extra Member" add-on or a separate account.' },
      { title: 'Check your current plan', content: 'Go to Netflix.com → click your profile picture → Account. Under your plan name, you can see if your plan supports an Extra Member slot.' },
      { title: 'Add an Extra Member (if available)', content: 'In Account settings, look for "Add an Extra Member." This costs a small monthly fee and gives someone at a different address their own profile on your account.' },
      { title: 'Set up a separate account for family', content: 'For children or family members who need their own account, visit Netflix.com and sign up. The Standard with Ads plan is the most affordable option.' },
      { title: 'Transfer your watch history', content: 'If you need to start a fresh account, go to Account → Privacy → "Download your personal information" to get a copy of your viewing history before leaving the old account.' },
    ],
  },
  {
    slug: 'how-to-make-phone-battery-last-longer',
    title: 'How to Make Your Phone Battery Last Longer Throughout the Day',
    excerpt: 'If your phone dies before dinner, these simple settings changes can give you hours of extra battery life without buying anything new.',
    category: 'tips-tricks',
    tags: ['battery', 'iPhone', 'Android', 'settings', 'beginners'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/KUWuKDTYRAQ',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `A phone that runs out of battery before the end of the day is one of the most common frustrations for smartphone users. The cause is usually a combination of screen brightness, apps running in the background, and features that are always on even when you are not using them. The good news is that a few simple changes in your phone's settings can make a noticeable difference — often adding two to three hours of battery life.

The biggest battery drain on most phones is the screen. Lowering your screen brightness even slightly (from full brightness down to about 50–60%) makes a significant difference. You can also let your phone do this automatically by turning on "Auto-Brightness." On an iPhone, go to Settings, tap "Accessibility," then "Display & Text Size," and turn on "Auto-Brightness." On Android, pull down from the top of your screen to find the brightness slider and look for an "Adaptive Brightness" toggle.

Other things that drain battery quickly: Wi-Fi scanning when you are away from home (your phone is constantly looking for networks), Bluetooth when you are not using wireless earbuds or speakers, and "Background App Refresh," which lets apps update themselves even when you are not using them. To turn off Background App Refresh on iPhone: Settings → General → Background App Refresh → turn it Off. On Android: Settings → Apps → choose an app → Battery → select "Restricted." Also, turning on "Low Power Mode" (iPhone) or "Battery Saver" (Android) when you are down to 30% is a fast way to stretch what is left until you can plug in.`,
    steps: [
      { title: 'Lower screen brightness', content: 'Swipe down from the top of your screen to find the brightness slider. Lower it to about 50–60%. Also turn on Auto-Brightness: iPhone → Settings → Accessibility → Display & Text Size → Auto-Brightness.' },
      { title: 'Turn off Background App Refresh (iPhone)', content: 'Settings → General → Background App Refresh → Off. This stops apps from updating themselves when you are not using them.' },
      { title: 'Turn off Bluetooth and Wi-Fi when not in use', content: 'Swipe down from the top of your screen to find the quick settings panel. Tap the Bluetooth icon and Wi-Fi icon to turn them off when you are out and not using them.' },
      { title: 'Enable Low Power Mode or Battery Saver', content: 'iPhone: Settings → Battery → Low Power Mode. Android: Settings → Battery → Battery Saver. Turn this on when your battery reaches 30% to stretch it further.', tip: 'Low Power Mode automatically turns off when you plug in and charge past 80%.' },
    ],
  },
  {
    slug: 'how-to-turn-off-read-receipts-in-whatsapp',
    title: 'How to Turn Off Read Receipts in WhatsApp (The Blue Check Marks)',
    excerpt: 'Stop letting people know when you have read their messages — here is how to turn off the blue check marks in WhatsApp in two taps.',
    category: 'app-guides',
    tags: ['WhatsApp', 'privacy', 'read receipts', 'blue ticks', 'messaging'],
    readTime: '3 min',
    videoUrl: 'https://www.youtube.com/embed/DLK4f_L6v-Q',
    thumbnailEmoji: '✅',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `In WhatsApp, messages show a gray check mark when sent, two gray check marks when delivered to the other person's phone, and two blue check marks when that person has read the message. Those blue check marks — sometimes called "blue ticks" — let the sender know you have seen their message. Some people find this creates pressure to reply immediately. Fortunately, WhatsApp lets you turn off read receipts so that your blue ticks are never shown.

To turn off read receipts on an iPhone or Android: Open WhatsApp, tap the three dots in the top right corner (Android) or tap "Settings" at the bottom right (iPhone). Tap "Privacy." Find "Read Receipts" and tap the toggle to turn it off. Once this is off, your check marks will stay gray even after you have read a message, and others will not know when you have read theirs.

There is one important thing to know: if you are in a group chat, read receipts cannot be turned off for groups — everyone in the group can always see who has read messages, regardless of your settings. The turn-off option only applies to one-on-one private messages. Also, when you turn off read receipts, you will also stop being able to see when other people have read your messages — it works both ways.`,
    steps: [
      { title: 'Open WhatsApp Settings', content: 'iPhone: tap "Settings" at the bottom right. Android: tap the three dots in the top right corner, then tap "Settings."' },
      { title: 'Tap Privacy', content: 'In Settings, tap "Privacy."' },
      { title: 'Turn off Read Receipts', content: 'Find "Read Receipts" and tap the toggle to turn it off. The toggle will turn gray when it is off.', tip: 'You will also stop seeing when others have read your messages — it works both ways.' },
      { title: 'Note about group chats', content: 'Read receipts cannot be turned off in group chats. Other group members can always see who has read each message, regardless of your setting.', warning: 'This only applies to one-on-one private messages.' },
    ],
  },
  {
    slug: 'how-to-fix-icloud-storage-is-full',
    title: 'How to Fix "iCloud Storage Is Full" on Your iPhone',
    excerpt: 'When iCloud runs out of space, your photos and backups stop saving — learn how to free up room or upgrade your storage for a few dollars a month.',
    category: 'essential-skills',
    tags: ['iCloud', 'iPhone', 'storage', 'Apple', 'backup', 'photos'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/Tzo3BLYgj3U',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `If your iPhone has been showing a message that says "iCloud Storage Is Full," it means the free 5 gigabytes Apple gives every account has been used up. When this happens, your phone stops backing itself up to iCloud, your photos may stop syncing, and you might not receive new iMessages on other Apple devices. It sounds alarming, but it is a common and easy problem to fix.

First, check what is using up your storage: Open the Settings app, tap your name at the top, then tap "iCloud." You will see a colorful bar showing what is taking up space — usually backups, photos, and apps are the biggest users. Tap "Manage Account Storage" to see a detailed breakdown. From here you can delete old phone backups (especially from phones you no longer own), turn off iCloud backup for apps you do not care about, and see if there are large files you no longer need.

If you want to add more storage, Apple's iCloud+ plans are affordable: 50 GB costs about $1 per month, and 200 GB costs about $3 per month. To upgrade, go to Settings → your name → iCloud → Manage Account Storage → Change Storage Plan. You can also choose to keep photos on your phone and computer instead of iCloud by turning off "iCloud Photos" and backing up photos manually. However, for most people, upgrading to 50 GB for $1 per month is the easiest solution — it typically lasts for years before needing to increase again.`,
    steps: [
      { title: 'Check what is using your storage', content: 'Settings → tap your name → iCloud → Manage Account Storage. You will see a breakdown of what is taking up space.' },
      { title: 'Delete backups from old phones', content: 'In Manage Account Storage, tap "Backups." If you see a backup for an old iPhone you no longer own, tap it and tap "Delete Backup." This can free several gigabytes.' },
      { title: 'Turn off iCloud backup for large apps', content: 'In Manage Account Storage, tap your current iPhone backup → scroll through the app list → turn off backup for any apps with large data that you do not need backed up (games, for example).' },
      { title: 'Upgrade your iCloud storage plan', content: 'Settings → your name → iCloud → Manage Account Storage → Change Storage Plan. 50 GB is about $1/month and is enough for most people for years.', tip: 'If you share storage with family via Family Sharing, you can split the cost of a 200 GB plan.' },
    ],
  },
  {
    slug: 'how-to-avoid-facebook-marketplace-scams',
    title: 'How to Avoid Scams When Buying or Selling on Facebook Marketplace',
    excerpt: 'Facebook Marketplace is useful but full of scammers — learn the red flags that signal a fake buyer or seller before you lose any money.',
    category: 'safety-guides',
    tags: ['Facebook', 'Marketplace', 'scams', 'online shopping', 'safety'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/UhdW6ZgqbyQ',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Facebook Marketplace is a popular place to buy and sell used items locally, but the Better Business Bureau and FTC both report that scams on Marketplace have increased significantly. Whether you are selling a piece of furniture or trying to find a deal on a phone, knowing the warning signs can save you from losing money or having your personal information stolen.

If you are selling something, watch out for these red flags: A buyer offers to pay more than your asking price (this is a setup for a fake check or overpayment scam). A buyer says they cannot meet in person and asks you to ship the item. A buyer sends a payment through Zelle, Cash App, or Venmo before you ship — and then tries to "reverse" the payment and get the item for free. The safest way to sell on Marketplace is to meet the buyer in person, in a public place (many police stations offer a "Safe Exchange Zone" in their parking lot), and accept cash or payment through Facebook's own checkout system only.

If you are buying something, watch out for: Prices that seem far too low compared to similar items (if a new-looking iPhone is listed for $100, something is wrong). Sellers who want you to pay through wire transfer, gift cards, or cryptocurrency — this is always a scam, no matter the reason they give. Sellers who ask for your home address to "send you a receipt." Always inspect the item in person before handing over money, and trust your instincts — if something feels off, walk away.`,
    steps: [
      { title: 'Sellers: never accept more than your asking price', content: 'If a buyer offers to pay more than your price and asks you to send back the difference, stop — this is always an overpayment scam with a fake check or payment.' },
      { title: 'Always meet in person in a public place', content: 'Meet at a coffee shop, library, or bank parking lot. Many local police stations have a designated "Safe Exchange Zone" for exactly this purpose.', tip: 'Bring a friend when meeting strangers, and tell someone where you are going.' },
      { title: 'Buyers: be skeptical of prices that are too low', content: 'If a $1,200 item is listed for $150, it is probably fake, stolen, or does not exist. Search completed eBay listings to see what the item really sells for.' },
      { title: 'Never pay by gift card, wire transfer, or cryptocurrency', content: 'These payment methods cannot be reversed or traced. Any seller who insists on these methods is running a scam.', warning: 'Even if the reason sounds believable, there is no legitimate reason a Marketplace seller needs gift card payment.' },
      { title: 'Report suspicious listings', content: 'Tap the three dots on any listing → Report. This flags the listing for Facebook to review and helps protect other buyers.' },
    ],
  },
  {
    slug: 'how-to-connect-wireless-printer-to-wifi',
    title: 'How to Connect Your Wireless Printer to Your Wi-Fi Network',
    excerpt: 'Connecting a printer to Wi-Fi sounds complicated but takes about 5 minutes — here is a step-by-step walkthrough that works for most printers.',
    category: 'how-to',
    tags: ['printer', 'Wi-Fi', 'wireless', 'Windows', 'setup'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/ANzU4p8xKG8',
    thumbnailEmoji: '🖨️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Setting up a wireless printer so it can print from any device on your home Wi-Fi network can feel confusing at first, but it usually only takes a few minutes once you know what to do. The goal is to get your printer and your computer on the same Wi-Fi network so they can "talk" to each other without a cable.

Step 1: Connect the printer to your Wi-Fi. Most modern printers have a small screen on the front panel. Look for a menu item called "Wireless Setup," "Wi-Fi Setup," or "Network Settings." When you select it, the printer will search for nearby Wi-Fi networks. Find your home network name in the list (this is the same name you use to connect your phone), tap it, and enter your Wi-Fi password. The printer should display a confirmation message when it connects successfully.

Step 2: Add the printer to your Windows computer. Click the Start button, open Settings (the gear icon), click "Bluetooth & devices," then click "Printers & scanners," and click "Add device." Windows will search for printers on your network. When your printer appears in the list, click it and follow the prompts. For a Mac: go to Apple menu → System Settings → Printers & Scanners → click the plus (+) button. If the printer does not appear automatically, download the printer's setup app from the manufacturer's website (HP has "HP Smart," Canon has "Canon Print," Epson has "Epson Smart Panel") — these apps guide you through the process step by step and are free to download.`,
    steps: [
      { title: 'Connect the printer to Wi-Fi', content: 'Use the printer\'s front panel screen. Look for "Wireless Setup" or "Wi-Fi Setup" in the menu. Select your home Wi-Fi network name and enter your password.' },
      { title: 'Add the printer on Windows', content: 'Start → Settings → Bluetooth & devices → Printers & scanners → Add device. Wait for your printer to appear and click it.' },
      { title: 'Add the printer on Mac', content: 'Apple menu → System Settings → Printers & Scanners → click the + button. Your printer should appear in the list.' },
      { title: 'Use the manufacturer\'s app if needed', content: 'HP: download "HP Smart." Canon: download "Canon Print." Epson: download "Epson Smart Panel." These free apps walk you through setup step by step.', tip: 'Make sure your computer is on the same Wi-Fi network as the printer — not a guest network.' },
      { title: 'Print a test page', content: 'In Printers & scanners (Windows) or Printers & Scanners (Mac), click your printer → Manage → Print a test page to confirm everything is working.' },
    ],
  },
  {
    slug: 'how-to-recover-forgotten-google-account',
    title: 'How to Get Back Into Your Google Account If You Forgot Your Password',
    excerpt: 'Locked out of Gmail or your Google account? Follow these steps to recover access using your phone number, recovery email, or identity questions.',
    category: 'essential-skills',
    tags: ['Google', 'Gmail', 'password', 'account recovery', 'Android'],
    readTime: '6 min',
    thumbnailEmoji: '🔓',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Forgetting your Google account password is one of the most stressful tech problems because your Google account often holds your Gmail, photos, contacts, and access to your Android phone's apps. The good news is that Google has a recovery process that can help you get back in — as long as you have access to the phone number or recovery email address you set up on the account.

Start at accounts.google.com/signin/recovery on any web browser. Enter your Gmail address and click "Next." Click "Forgot password?" Google will offer you several ways to verify your identity: it may send a text message with a code to your phone number, send a link to a backup email address you set up previously, or ask you security questions. Choose whichever option you have access to. If you receive a code by text, enter it on the screen and you will be given the option to create a new password.

If none of those options work — for example, if you no longer have access to your old recovery phone number — Google may ask you questions to verify your identity, such as when you created the account or the last password you remember. Answer as accurately as you can. If you still cannot get in, the last resort is Google's account recovery form, which you can find by searching "Google account recovery form" — this is a manual review process that can take a few days. After you regain access, immediately add a current phone number as a recovery option so this does not happen again.`,
    steps: [
      { title: 'Go to the Google recovery page', content: 'Open a web browser and go to accounts.google.com. Enter your Gmail address, click Next, then click "Forgot password?"' },
      { title: 'Verify your identity by text or email', content: 'Google will offer to send a code to your recovery phone number or recovery email. Choose whichever you have access to, enter the code, and create a new password.' },
      { title: 'Answer identity questions', content: 'If you do not have access to your recovery contact, Google may ask when you created the account or a previous password. Answer as accurately as you can.' },
      { title: 'Use the Google account recovery form', content: 'If nothing else works, search "Google account recovery form" and submit a request. Google will review it manually — this can take a few days.' },
      { title: 'Add a recovery phone number after regaining access', content: 'Once you are back in, go to myaccount.google.com → Security → Recovery phone and add a current phone number so this does not happen again.', tip: 'Also add a recovery email address as a backup.' },
    ],
  },
  {
    slug: 'how-to-cancel-youtube-premium',
    title: 'How to Cancel Your YouTube Premium Subscription',
    excerpt: 'Accidentally signed up for YouTube Premium or no longer want it? Here is how to cancel before your next billing date and stop being charged.',
    category: 'app-guides',
    tags: ['YouTube', 'subscription', 'cancel', 'billing', 'streaming'],
    readTime: '4 min',
    videoUrl: 'https://www.youtube.com/embed/NNMZ8FnuqVs',
    thumbnailEmoji: '▶️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `YouTube Premium is a paid subscription that removes ads and lets you play videos in the background. Some people sign up for a free trial and then forget to cancel, while others tap "Start Trial" by accident when a promotional pop-up appears. Either way, canceling is straightforward once you know where to look — and you have until the end of your current billing period to keep access after you cancel.

To cancel on a computer: Go to YouTube.com and sign in. Click your profile picture in the top right corner, then click "Paid Memberships." Find YouTube Premium in the list and click "Manage." Then click "Deactivate" or "Cancel membership" and confirm. On an iPhone: Go to the Settings app (the gray gear icon), tap your name at the top, then tap "Subscriptions." Find YouTube Premium in the list and tap it, then tap "Cancel Subscription."

On an Android phone purchased through Google: Open the Google Play Store app, tap your profile picture in the top right, tap "Payments & subscriptions," then tap "Subscriptions." Find YouTube Premium and tap it, then tap "Cancel subscription." If you signed up through a different service (like your TV provider or Amazon), you will need to cancel through that service instead — look for a charge on your bill to find where it was set up. After canceling, you will still have Premium access until the end of the month you already paid for, and you will not be charged again.`,
    steps: [
      { title: 'Cancel on a computer', content: 'Go to YouTube.com → click your profile picture → Paid Memberships → find YouTube Premium → Manage → Deactivate or Cancel membership.' },
      { title: 'Cancel on iPhone', content: 'Settings → tap your name at the top → Subscriptions → YouTube Premium → Cancel Subscription.' },
      { title: 'Cancel on Android', content: 'Google Play Store → tap your profile picture → Payments & subscriptions → Subscriptions → YouTube Premium → Cancel subscription.' },
      { title: 'Check if you signed up through another service', content: 'If none of the above find the subscription, look at your monthly bank or credit card statement to see who is charging you. Cancel through that company\'s website or app.', tip: 'After canceling you keep Premium access until the end of the current billing period. You will not receive a partial refund.' },
    ],
  },
  {
    slug: 'how-to-send-photos-from-iphone-to-windows-pc',
    title: 'How to Send Photos From Your iPhone to a Windows Computer',
    excerpt: 'No cord needed — transfer your iPhone photos to a Windows PC using iCloud, email, or a USB cable with these simple step-by-step methods.',
    category: 'how-to',
    tags: ['iPhone', 'Windows', 'photos', 'transfer', 'iCloud', 'USB'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Apple iPhones and Windows computers do not always work together naturally, which leads to a common question: how do I get photos off my iPhone and onto my PC? The good news is there are several easy ways to do this, and you can choose whichever one feels most comfortable.

Method 1 — USB Cable (fastest, no internet needed): Plug your iPhone into your Windows computer using your charging cable. Your iPhone will ask "Trust This Computer?" — tap "Trust." On your PC, open File Explorer (the folder icon on the taskbar), look for your iPhone listed under "This PC" or "Devices and drives," open it, navigate to "Internal Storage" → "DCIM," and then copy and paste the photos you want to your computer's Pictures folder.

Method 2 — iCloud for Windows (automatic, wireless): Download the free "iCloud for Windows" app from the Microsoft Store on your PC. Sign in with your Apple ID. Once set up, your iPhone photos automatically appear in a special iCloud Photos folder on your PC whenever both devices are on Wi-Fi. This is the most hands-off option if you want photos to transfer automatically going forward. Method 3 — Email yourself (works for a few photos at a time): In the Photos app on your iPhone, select the photos you want, tap the share button (the square with an arrow pointing up), and tap "Mail." Enter your own email address and send. Then open that email on your computer and save the photos.`,
    steps: [
      { title: 'Method 1: USB cable', content: 'Plug your iPhone into the PC with a charging cable. Tap "Trust" on the iPhone when asked. Open File Explorer → This PC → your iPhone → Internal Storage → DCIM → copy photos to your Pictures folder.' },
      { title: 'Method 2: iCloud for Windows', content: 'On your PC, open the Microsoft Store and download "iCloud for Windows" (free). Sign in with your Apple ID. Your iPhone photos will automatically sync to a folder on your PC when both are on Wi-Fi.' },
      { title: 'Method 3: Email yourself', content: 'In the iPhone Photos app, select photos → tap the share button (square with arrow) → Mail → enter your own email address → Send. Open the email on your computer and save the photos.', tip: 'Email works best for a few photos. For large numbers, use USB or iCloud.' },
    ],
  },
  {
    slug: 'how-to-use-medicare-gov-online-portal',
    title: 'How to Log In to Medicare.gov and Check Your Benefits Online',
    excerpt: 'The Medicare website lets you check your coverage, view claims, and compare plans — here is how to create an account and navigate the portal.',
    category: 'health-tech',
    tags: ['Medicare', 'government', 'health', 'online portal', 'seniors'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/9s8B1jvDI68',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Medicare.gov is the official website of the US Medicare program, and having an online account gives you access to a lot of useful tools: you can check what your Medicare covers, view your claims history, see when your coverage started, compare Medicare plans during Open Enrollment, and even print a replacement Medicare card if yours was lost or damaged. Setting up an account is free and only takes about 10 minutes.

Go to Medicare.gov on any web browser and click "Log in" in the top right corner. You will be directed to create a "Login.gov" account — this is the secure sign-in service used by many US government websites. Click "Create an account," enter your email address, create a strong password, and then verify your identity. The site will send a confirmation code to your email address. You will also need to verify your identity using your Social Security Number, your Medicare number (from your red, white, and blue Medicare card), and your date of birth.

Once logged in, the main "My Medicare" dashboard shows your current coverage at a glance. Click "My claims" to see a list of recent medical and prescription claims — this is useful for checking that charges are accurate and spotting billing errors. During Medicare Open Enrollment (October 15 to December 7 each year), you can use the "Find health & drug plans" tool to compare available Medicare Advantage and Part D drug plans in your ZIP code and see estimated annual costs. If you need help at any step, you can call 1-800-MEDICARE (1-800-633-4227) and a representative will walk you through it for free.`,
    steps: [
      { title: 'Go to Medicare.gov and click Log in', content: 'Open Medicare.gov in any web browser. Click "Log in" in the top right corner.' },
      { title: 'Create a Login.gov account', content: 'Click "Create an account." Enter your email, create a password, and enter the confirmation code sent to your email.' },
      { title: 'Verify your identity', content: 'You will need your Social Security Number, your Medicare card number (red, white, and blue card), and your date of birth.' },
      { title: 'Check your coverage and claims', content: 'After logging in, the "My Medicare" dashboard shows your coverage. Click "My claims" to see recent doctor and prescription charges and verify they are correct.' },
      { title: 'Compare plans during Open Enrollment', content: 'Between October 15 and December 7 each year, use "Find health & drug plans" to compare Medicare Advantage and Part D plans available in your ZIP code.', tip: 'Call 1-800-MEDICARE (1-800-633-4227) for free help any time.' },
    ],
  },
  {
    slug: 'how-to-use-phone-as-tv-remote',
    title: 'How to Use Your Phone as a TV Remote When You Lose the Remote',
    excerpt: 'Your smartphone can control most smart TVs — learn how to set it up for Samsung, LG, Roku, Fire TV, and Apple TV in just a few taps.',
    category: 'tips-tricks',
    tags: ['TV', 'remote', 'Samsung', 'Roku', 'Fire TV', 'Apple TV', 'LG'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Losing the TV remote is one of the most universal frustrations. The good news is that most smart TVs can be controlled by a free app on your smartphone — and in many cases, the phone app is actually more convenient than the original remote because it has a full keyboard for searching.

First, your phone and TV must be connected to the same home Wi-Fi network. Then download the right app for your TV: Samsung TVs use the "SmartThings" app (available free on iPhone and Android). LG TVs use the "LG ThinQ" app. Roku TVs and Roku streaming sticks use the "Roku" app. Amazon Fire TV and Fire Stick use the "Amazon Fire TV" app. Apple TV uses the "Apple TV Remote" app (built into the iPhone Control Center — swipe down from the top right and tap the remote icon). For older TVs that are not "smart," you can buy a small universal remote for about $10 at any pharmacy or electronics store.

Open the app, make sure your phone's Wi-Fi is on, and tap the "Devices" tab or the TV icon. The app will automatically search for your TV on the same network. When your TV appears, tap it. You may need to enter a code that appears on the TV screen to confirm the connection. Once connected, the app gives you a virtual remote control — you can change channels, adjust volume, and type search terms using your phone's keyboard.`,
    steps: [
      { title: 'Make sure phone and TV are on the same Wi-Fi', content: 'Check that your phone is connected to your home Wi-Fi (not cellular data) and that it is the same network your TV is on — not a guest network.' },
      { title: 'Download the right app', content: 'Samsung: SmartThings. LG: LG ThinQ. Roku: Roku app. Amazon Fire TV: Amazon Fire TV app. Apple TV: built into iPhone (swipe down from top right → tap remote icon). All are free.' },
      { title: 'Connect the app to your TV', content: 'Open the app and tap "Devices" or the TV icon. When your TV appears in the list, tap it. Enter the code shown on your TV screen if prompted.' },
      { title: 'Use the on-screen remote', content: 'The app shows a virtual remote. You can control volume, change channels, and use your phone keyboard to type searches — much easier than the physical remote for entering text.', tip: 'Save the app to your home screen so it is quick to find next time the remote goes missing.' },
    ],
  },
  {
    slug: 'how-to-safely-unsubscribe-from-unwanted-emails',
    title: 'How to Safely Unsubscribe From Unwanted Emails (Without Getting Scammed)',
    excerpt: 'Most unsubscribe links are safe to click — but some are traps. Here is how to tell the difference and clean up your inbox for good.',
    category: 'safety-guides',
    tags: ['email', 'spam', 'unsubscribe', 'Gmail', 'inbox', 'safety'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/6m28s2GSpN0',
    thumbnailEmoji: '📧',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Many people are afraid to click the "Unsubscribe" link at the bottom of emails, worried it will confirm their email address to scammers or open a virus. This is actually a smart instinct — but it applies only to a small category of emails. Understanding when it is safe to unsubscribe versus when you should delete and report the email is a useful skill that will help you keep a cleaner inbox.

It is safe to click "Unsubscribe" when the email is from a company you recognize and have done business with — a store you shop at, a newsletter you signed up for, a bank or insurance company, or a website you use. Legitimate companies are required by the CAN-SPAM Act to include a working unsubscribe link, and clicking it will actually remove you from their list within 10 business days. Gmail also has its own unsubscribe button that appears at the top of many promotional emails — clicking the "Unsubscribe" link right next to the sender's name in Gmail is very safe and works through Google's own systems.

Do NOT click the unsubscribe link if the email: claims to be from a government agency (IRS, Social Security, Medicare — they do not send mass promotional emails), comes from a sender name or address you do not recognize at all, contains spelling errors or asks you to "confirm your email to unsubscribe," or was already in your Spam folder. For those emails, mark them as spam and delete them.`,
    steps: [
      { title: 'Safe to unsubscribe: emails from companies you know', content: 'If the email is from a store, bank, or website you actually use, click the Unsubscribe link at the bottom. They are legally required to remove you within 10 days.' },
      { title: 'Use Gmail\'s built-in Unsubscribe button', content: 'In Gmail, many emails show an "Unsubscribe" link right next to the sender\'s name at the top of the email. This is Google\'s own system — it is very safe to click.' },
      { title: 'Do NOT unsubscribe from emails you do not recognize', content: 'If you do not know the company at all, or the email was already in your Spam folder, do not click any links. Just delete it.', warning: 'Clicking unsubscribe in a scam email can confirm to the scammer that your address is active, leading to more spam.' },
      { title: 'Mark suspicious emails as spam', content: 'In Gmail, right-click the email → "Report spam." On iPhone Mail, swipe left on the email → More → Move to Junk. This trains your inbox to catch similar emails in the future.' },
    ],
  },
  {
    slug: 'how-to-use-google-maps-offline',
    title: 'How to Use Google Maps Without an Internet Connection (Download Offline Maps)',
    excerpt: 'Download maps before you leave home so you can navigate even in areas with no cell signal — works on both iPhone and Android.',
    category: 'tips-tricks',
    tags: ['Google Maps', 'offline', 'navigation', 'travel', 'iPhone', 'Android'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/D5ZE7U_zAsA',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `If you have ever been driving through a rural area and had your navigation cut out because you lost cell signal, you know how frustrating that is. Google Maps has a feature that lets you download a section of the map to your phone while you are still at home on Wi-Fi, so you can navigate even when there is no internet connection. This is especially helpful when traveling to rural areas, national parks, or international locations where you do not have a data plan.

To download a map on an iPhone or Android: Open Google Maps and make sure you are signed into your Google account. Tap your profile picture in the top right corner. Tap "Offline maps." Tap "Select your own map." A box will appear over the map — drag and resize it to cover the area you want to save (for example, the city and surrounding area where you are traveling). Tap "Download." The app will show you how much phone storage the map will use, and then download it. This usually takes a few minutes on Wi-Fi.

Once downloaded, the map works just like the regular Google Maps when you are offline — you can search for addresses, get turn-by-turn directions, and see where you are on the map. The only thing that does not work offline is live traffic updates and business reviews. Offline maps are stored for 30 days and then need to be re-downloaded (Google will remind you).`,
    steps: [
      { title: 'Open Google Maps and sign in', content: 'Make sure you are signed into a Google account in the app. Tap your profile picture in the top right corner.' },
      { title: 'Tap Offline maps', content: 'In the menu that opens, tap "Offline maps."' },
      { title: 'Select your own map area', content: 'Tap "Select your own map." A blue box appears on the map. Drag and pinch to resize the box to cover the area you will be traveling.' },
      { title: 'Download the map', content: 'Tap "Download." Google will show how much storage it needs and begin downloading. Do this at home on Wi-Fi to avoid using cellular data.', tip: 'Offline maps expire after 30 days. Google will send a reminder to update them.' },
      { title: 'Navigate offline', content: 'When you are in an area with no signal, open Google Maps normally and search your destination. It will use the downloaded map for directions.' },
    ],
  },
  {
    slug: 'how-to-set-screen-time-limits-on-iphone',
    title: 'How to Set Screen Time Limits on an iPhone for a Child or Grandchild',
    excerpt: 'Use the built-in Screen Time feature to limit how long kids can use apps or browse the web — and protect them with a passcode they cannot change.',
    category: 'essential-skills',
    tags: ['Screen Time', 'iPhone', 'parental controls', 'children', 'Apple'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/_cmQvea7JII',
    thumbnailEmoji: '⏱️',
    publishedAt: '2026-04-08',
    difficulty: 'Beginner',
    body: `Apple's Screen Time feature lets you set daily limits on how long a child can use specific apps, block adult websites, and prevent them from downloading new apps without your permission. You can set this up on the child's iPhone or iPad, protected by a separate passcode that only you know, so they cannot change the settings themselves. This is built into all iPhones and iPads running iOS 12 or later — no extra app or purchase required.

To set up Screen Time: On the child's device, go to Settings and tap "Screen Time." Tap "Turn On Screen Time," then tap "This is My Child's iPhone." You will be prompted to set up "Downtime" (hours when the phone is locked, like bedtime) and "App Limits" (how many hours per day they can spend in categories like Social Networking, Games, or Entertainment). After setting these up, you will be asked to create a four-digit Screen Time passcode — this is different from the regular phone passcode, and it is the one only you should know.

Once Screen Time is on, you can also tap "Content & Privacy Restrictions" to turn it on and block inappropriate websites, prevent purchases, and restrict certain apps. Under "Web Content," choose "Limit Adult Websites" to filter out explicit material automatically. If the child's iPhone is linked to your Apple Family Sharing group, you can manage all these settings remotely from your own phone: go to your Settings → Screen Time → your child's name, and you will see their usage reports and can adjust limits from your own device without needing to touch theirs.`,
    steps: [
      { title: 'Open Screen Time on the child\'s iPhone', content: 'Settings → Screen Time → Turn On Screen Time → This is My Child\'s iPhone.' },
      { title: 'Set Downtime (off hours)', content: 'Choose the hours when the phone is locked — for example, 9 PM to 7 AM on school nights. During Downtime, only apps you allow are accessible.' },
      { title: 'Set App Limits', content: 'Tap "App Limits" → Add Limit → choose categories like Social Networking or Games → set a daily time limit (e.g., 1 hour). The app shows a warning when they are close to the limit.' },
      { title: 'Create a Screen Time passcode', content: 'When prompted, create a 4-digit Screen Time passcode — different from the regular phone passcode. Only you should know this, so the child cannot change the settings.', warning: 'Do not use a passcode the child might guess. This is the key to the whole system.' },
      { title: 'Enable Content & Privacy Restrictions', content: 'Settings → Screen Time → Content & Privacy Restrictions → turn it on → Web Content → Limit Adult Websites. You can also block the ability to install new apps or make purchases.' },
      { title: 'Manage remotely via Family Sharing', content: 'If your Apple ID and the child\'s are in the same Family group, go to your own Settings → Screen Time → your child\'s name to see usage and adjust limits from your own phone.', tip: 'Set up Family Sharing at Settings → your name → Family Sharing if you have not already.' },
    ],
  },

  // ═══════════════════════════════════════════
  // WEEKLY CONTENT — April 14, 2026
  // ═══════════════════════════════════════════

  // Social: "Got a text saying you owe money for a traffic ticket or toll? Don't click anything. The FTC just flagged this scam as one of the fastest-growing in the US. Here's what to do instead."
  // Newsletter: "A brand-new FTC scam alert (April 14, 2026): millions of Americans are getting fake traffic violation texts that look like they come from a real DMV or toll authority. The link takes you to a page that steals your card number. We wrote a step-by-step guide showing you how to spot them and what to do — including how to verify a real fine without clicking a single link."
  {
    slug: 'traffic-violation-text-scam',
    title: 'How to Spot the Fake Traffic Violation Text Scam',
    excerpt: 'Got a text about an unpaid ticket or toll? It\'s probably a scam. Here\'s how to tell the difference and what to do.',
    category: 'safety-guides',
    tags: ['scams', 'text scams', 'smishing', 'traffic', 'FTC', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-14',
    difficulty: 'Beginner',
    body: `The Federal Trade Commission issued a fresh warning on April 14, 2026: millions of Americans are receiving fake text messages claiming they owe money for an unpaid traffic ticket, a toll violation, or a moving violation — and that they must pay immediately or face serious penalties like license suspension. These texts look convincing. They may include a fake case number, legal-sounding language, and a link to what appears to be an official government website.

If you click the link, it takes you to a realistic-looking fake payment page. The moment you enter your credit card number, the scammers steal it. Some pages also install software on your phone that can steal passwords and banking information.

The scam is spreading rapidly in every state. Scammers are targeting people because traffic violations are common, so many people who receive the text assume it might be real. Here is everything you need to know to protect yourself.`,
    steps: [
      {
        title: 'Recognize what these scam texts look like',
        content: 'The text usually claims you have an unpaid fine — often for a toll, a parking ticket, or a moving violation. It uses urgent language: "Pay within 24 hours to avoid a 35% penalty," "Your license is at risk of suspension," or "This is your final notice." It includes a link to pay. The link often has a name that looks official, like "dmv-payments.com" or "toll-notice-us.com" — but these are fake sites.',
        warning: 'Real government agencies never send payment links via text message. If you receive a text asking you to click a link and pay a fine, it is almost certainly a scam.',
      },
      {
        title: 'Do not click the link — delete the text',
        content: 'The safest thing to do is delete the text immediately without clicking anything. If you are worried the fine might be real, you can verify it — but not through the link in the text. See the next step for how to check safely.',
      },
      {
        title: 'Verify a real fine the safe way',
        content: 'If you think you might genuinely have an unpaid ticket or toll, check it without using the text link. Open your phone\'s browser and search for your state\'s official DMV website (for example, "California DMV official site") or your toll authority\'s official site. You can also call the phone number listed on your state\'s government website. Real fines show up in your official driving record.',
        tip: 'The FTC\'s official traffic scam alert is at consumer.ftc.gov — search "traffic violation text scam" to read the full advisory.',
      },
      {
        title: 'Report the scam text',
        content: 'Forward the scam text to 7726 (SPAM) — this is a free service that reports the number to your phone carrier. You can also report it to the FTC at ReportFraud.ftc.gov. Reporting helps authorities track and shut down scam operations.',
      },
      {
        title: 'Turn on spam text filtering',
        content: 'Your phone has built-in tools to catch more scam texts before they reach you. On iPhone: Settings → Messages → scroll down to "Filter Unknown Senders" and turn it on. On Android: open the Messages app → three dots → Settings → Spam protection → turn on "Enable spam protection." Your carrier also offers free spam filtering: AT&T ActiveArmor, T-Mobile Scam Shield, and Verizon Call Filter.',
        tip: 'If you already clicked the link, contact your bank or credit card company immediately to report a potential compromise, and consider placing a fraud alert on your credit at AnnualCreditReport.com.',
      },
    ],
  },

  // Social: "Got scammed? Don't panic. Here are the exact steps the FTC says you should take — in order — to protect your money and your identity."
  // Newsletter: "If you or someone you know has fallen for a scam — a fake tech support call, a gift card demand, a romance scammer — this new TekSure guide walks you through every recovery step: who to call first, how to freeze your credit for free, and how to report it so it can't happen to someone else."
  {
    slug: 'what-to-do-after-being-scammed',
    title: 'What to Do If You\'ve Been Scammed: A Step-by-Step Recovery Guide',
    excerpt: 'Fell for a scam? Don\'t panic. Take these steps right away to protect your money, your accounts, and your identity.',
    category: 'safety-guides',
    tags: ['scams', 'recovery', 'identity theft', 'FTC', 'credit freeze', 'safety'],
    readTime: '8 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-14',
    difficulty: 'Beginner',
    body: `Being scammed is one of the most distressing things that can happen — and it happens to millions of people every year, including smart, experienced adults. If you have recently realized you may have been scammed, the most important thing is to stay calm and take action quickly. Acting within the first 24 hours gives you the best chance of limiting the damage.

Scams take many forms: a fake tech support call where you gave someone remote access to your computer, a phishing email where you entered your bank login, a gift card demand where you sent money, or a romance scammer who convinced you to wire funds. Each situation is a little different, but the core steps to protect yourself are the same. Go through this guide step by step — you do not need to do everything at once, but start with Step 1 immediately.`,
    steps: [
      {
        title: 'Stop all contact with the scammer right now',
        content: 'If you are still in contact with the scammer — on the phone, in email, or in a chat app — end all communication immediately. Block the phone number or email address. Do not respond to any further messages, even if they threaten you or claim to be from law enforcement. Real police and government agencies do not ask for payment via phone or email.',
        warning: 'Scammers often call back after you hang up, pretending to be from a different agency that can "help" you recover your money. This is a second scam. Do not answer calls from numbers you do not recognize.',
      },
      {
        title: 'Contact your bank or credit card company right away',
        content: 'If you sent money or shared your bank or card details, call the fraud department of your bank or credit card company as soon as possible. Look for the phone number on the back of your card or on your bank\'s official website. Explain what happened and ask them to reverse the transaction or freeze the account if needed. The sooner you call, the better your chances of recovering funds. For wire transfers, ask about a recall. For gift cards, call the gift card company directly — each has a fraud line.',
        tip: 'For credit card charges, request a chargeback. For debit card fraud, federal law gives you better protection if you report within two business days.',
      },
      {
        title: 'Change your passwords on important accounts',
        content: 'If you gave your password to anyone, or if you clicked a phishing link and logged in somewhere, change your passwords immediately for: your email account (this is the most important one), your bank and financial accounts, and any account you use the same password for. Use a different strong password for each account. A strong password is at least 12 characters long and includes uppercase letters, lowercase letters, numbers, and symbols.',
        tip: 'If you need help managing multiple passwords, a free password manager like Bitwarden (bitwarden.com) stores all your passwords securely so you only need to remember one.',
      },
      {
        title: 'Remove remote access software if someone installed it',
        content: 'If a scammer talked you into installing software so they could "fix your computer" — common programs include AnyDesk, TeamViewer, and UltraViewer — you need to remove it immediately. On Windows: click Start → Settings → Apps → search for the program name → click Uninstall. On Mac: open Finder → Applications → drag the program to the Trash → empty the Trash. After removing the software, run a full scan using Windows Defender (built into Windows) or Malwarebytes (free at malwarebytes.com). Change all your passwords after doing this.',
        warning: 'Even after removing remote access software, assume the scammer may have copied your files or saved your passwords. Change every important password as a precaution.',
      },
      {
        title: 'Place a free fraud alert or credit freeze',
        content: 'If you gave the scammer your Social Security number, date of birth, or other personal details, they may try to open accounts or take out loans in your name. Protect yourself by placing a free credit freeze with all three major credit bureaus: Equifax (equifax.com), Experian (experian.com), and TransUnion (transunion.com). A credit freeze stops anyone from opening new credit in your name — including you — until you unfreeze it. It is free and does not hurt your credit score. You can also place a free one-year fraud alert, which warns lenders to verify your identity before opening new accounts.',
        tip: 'You must contact all three bureaus separately to freeze your credit. It takes about 5 minutes per bureau at their official websites.',
      },
      {
        title: 'Report the scam',
        content: 'Reporting helps authorities catch scammers and warn others. Report to the FTC at ReportFraud.ftc.gov — this takes about 5 minutes and the FTC uses reports to build cases against scammers. For investment fraud, report to the SEC at sec.gov/tcr. For internet-based fraud, file a complaint with the FBI\'s Internet Crime Complaint Center at ic3.gov. For gift card scams, contact the gift card issuer and report to the FTC.',
        tip: 'The FTC\'s website at consumer.ftc.gov/articles/what-do-if-you-were-scammed has detailed guidance for every type of scam. Bookmark it.',
      },
      {
        title: 'Monitor your accounts for unusual activity',
        content: 'Check your bank and credit card statements daily for the next few weeks. Look for any charges you do not recognize — even small ones (scammers often test with a small charge before making larger ones). Sign up for transaction alerts through your bank\'s app so you get a text every time money moves. Check your credit report for free at AnnualCreditReport.com — you can now check it weekly for free.',
      },
      {
        title: 'Talk to someone — you are not alone',
        content: 'Being scammed can feel embarrassing or shameful, but it is not your fault. Scammers are professionals who do this full-time. Millions of people fall for scams every year, including lawyers, doctors, and security experts. If you need to talk to someone, the AARP Fraud Watch Network helpline (877-908-3360) is free and staffed by trained volunteers Monday through Friday, 8 AM to 8 PM Eastern. They can walk you through next steps and provide emotional support.',
      },
    ],
  },

  // Social: "WhatsApp messages can disappear forever when you switch phones — unless you back them up first. Here's the simple 3-step process that most people skip."
  // Newsletter: "Switching to a new phone? Don't lose years of WhatsApp conversations and photos. This guide shows you exactly how to back up and transfer your WhatsApp messages to any new iPhone or Android — before you hand your old phone in."
  {
    slug: 'whatsapp-transfer-new-phone',
    title: 'How to Transfer WhatsApp to a New Phone Without Losing Messages',
    excerpt: 'Moving to a new iPhone or Android? Back up your WhatsApp chats and photos first so nothing gets lost when you switch.',
    category: 'app-guides',
    tags: ['WhatsApp', 'new phone', 'backup', 'transfer', 'messages', 'phone'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/C6YEPLFVwHs',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-14',
    difficulty: 'Beginner',
    body: `When you get a new phone, your WhatsApp messages do not transfer automatically — they live on your old phone and will disappear unless you back them up first. The good news is that WhatsApp has a free built-in backup feature that saves all your chats, photos, and videos to either iCloud (for iPhone) or Google Drive (for Android). Once backed up, you can restore everything on your new phone in a few minutes.

The key is to do the backup before you set up your new phone or hand in your old one. This guide covers both iPhone-to-iPhone and Android-to-Android transfers. If you are switching between iPhone and Android (for example, moving from an Android to an iPhone), the process is slightly different — WhatsApp has a special transfer tool for that which is covered in Step 5.`,
    steps: [
      {
        title: 'Back up WhatsApp on your old phone (iPhone)',
        content: 'On your old iPhone, open WhatsApp → tap the Settings icon (bottom right) → tap Chats → tap Chat Backup → tap "Back Up Now." You will see a progress bar as it uploads to iCloud. Wait for it to say "Last backup: just now" before moving on. Make sure you are connected to Wi-Fi — backups can be large.',
        tip: 'For step-by-step help from WhatsApp, visit faq.whatsapp.com and search "back up on iPhone." This is WhatsApp\'s official support page.',
        warning: 'Make sure iCloud has enough free storage. Go to Settings → your name → iCloud → Manage Storage to check. A free iCloud account includes 5 GB.',
      },
      {
        title: 'Back up WhatsApp on your old phone (Android)',
        content: 'On your old Android phone, open WhatsApp → tap the three dots in the top-right corner → tap Settings → tap Chats → tap Chat Backup → tap "Back Up." The backup saves to your Google Drive. Make sure you are signed in to a Google account and connected to Wi-Fi.',
        tip: 'For official Android backup instructions, visit faq.whatsapp.com and search "back up on Android."',
      },
      {
        title: 'Set up WhatsApp on your new iPhone using the same phone number',
        content: 'On your new iPhone, download WhatsApp from the App Store (it is free). Open WhatsApp and enter your phone number — it must be the same number you used on your old phone. WhatsApp will send a verification code by text. Enter the code. WhatsApp will detect your backup on iCloud and ask "Restore Chat History?" — tap Restore. Your messages, photos, and videos will download. This may take a few minutes.',
      },
      {
        title: 'Set up WhatsApp on your new Android phone',
        content: 'Download WhatsApp from the Google Play Store (free). Open it and enter your same phone number. Enter the verification code sent by text. WhatsApp will find your Google Drive backup and ask you to restore it — tap Restore. All your chats and media will transfer over.',
      },
      {
        title: 'Switching from Android to iPhone (or iPhone to Android)',
        content: 'WhatsApp has a special built-in tool for cross-platform transfers called "Move to iOS" (when moving to iPhone) or using the Android companion app. On your new iPhone, during initial setup, use the "Move to iOS" app on your Android phone — it will prompt you to transfer WhatsApp data directly over a local wireless connection. For the iPhone-to-Android direction, open WhatsApp on your old iPhone → Settings → Chats → Move Chats to Android and follow the prompts. Both phones need to be near each other and connected to the same Wi-Fi.',
        tip: 'WhatsApp\'s official cross-platform transfer guide is at faq.whatsapp.com — search "move WhatsApp from Android to iPhone" or vice versa.',
      },
      {
        title: 'Verify everything transferred correctly',
        content: 'Once set up, open a few important conversations to make sure your messages, photos, and videos are there. Check your profile photo and name in Settings. If anything is missing, the backup may not have been complete — try backing up your old phone again (if you still have access) and repeating the restore.',
        warning: 'Do not delete WhatsApp from your old phone until you have confirmed everything transferred to your new phone. You may need to go back.',
      },
    ],
  },

  // Social: "Wi-Fi dropping every 10 minutes? You don't need to call a tech. Try these 5 free fixes first — most people are back online in under 5 minutes."
  // Newsletter: "Unstable Wi-Fi is one of the most common tech complaints we hear. Before you call your internet company, try these 5 free steps — restarting your router correctly, forgetting and reconnecting to the network, and checking if the issue is your router's age. Most Wi-Fi problems are fixed in under 5 minutes with no tech knowledge needed."
  {
    slug: 'fix-wifi-keeps-dropping',
    title: 'How to Fix Wi-Fi That Keeps Dropping or Disconnecting',
    excerpt: 'Wi-Fi cutting out every few minutes? Try these free fixes in order — most people are back online within 5 minutes.',
    category: 'essential-skills',
    tags: ['Wi-Fi', 'internet', 'troubleshooting', 'router', 'connection', 'beginner'],
    readTime: '6 min',
    videoUrl: 'https://www.youtube.com/embed/6vMoVz_HxYE',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-14',
    difficulty: 'Beginner',
    body: `A Wi-Fi connection that keeps dropping is one of the most frustrating tech problems — especially during a video call, while streaming a show, or when you are trying to get something done. The good news: most Wi-Fi problems are caused by straightforward things that you can fix yourself for free in a few minutes.

The most common cause is a router that needs a restart. The second most common is your device getting confused about which Wi-Fi network to connect to. Follow these steps in order — start with Step 1 and only move to the next step if the problem continues.`,
    steps: [
      {
        title: 'Restart your router — not only your device',
        content: 'This fixes the majority of Wi-Fi problems. Find your router — the box provided by your internet company, usually with blinking lights. Unplug the power cord from the back of the router. Wait a full 60 seconds (count to 60). Plug it back in. Wait another 2 minutes for it to fully restart. The lights will blink and then stabilize. Try your Wi-Fi again.',
        tip: 'Restarting a router clears its memory and resets its connection to your internet provider. Most internet providers also recommend doing this once a month.',
        warning: 'Do not press the small "Reset" button on the router — that erases all your settings and requires starting over. Just unplug the power cord.',
      },
      {
        title: 'Forget and rejoin the Wi-Fi network on your device',
        content: 'Sometimes your device\'s memory of the Wi-Fi network gets corrupted. On iPhone: Settings → Wi-Fi → tap the (i) next to your network name → Forget This Network → then reconnect by tapping the network name and entering your password. On Android: Settings → Wi-Fi → tap your network name → tap Forget → then reconnect. On Windows: click the Wi-Fi icon in the taskbar → right-click your network → Forget → then reconnect.',
      },
      {
        title: 'Move closer to the router',
        content: 'Wi-Fi signal gets weaker the farther you are from the router, and thick walls, floors, and appliances can block it significantly. Try using your device in the same room as the router and see if the drops stop. If they do, distance or obstacles are the problem. A Wi-Fi extender (available for $20–$50 at any electronics store) can help extend coverage to farther rooms.',
        tip: 'Microwaves, cordless phones, and baby monitors all use the same radio frequency as Wi-Fi and can cause interference when they are on. Try moving your router away from these devices.',
      },
      {
        title: 'Check if too many devices are connected',
        content: 'Every device connected to your Wi-Fi shares the same bandwidth. If many family members are streaming video, video calling, and downloading at the same time, the connection can get congested and appear to drop. Try temporarily disconnecting some devices and see if stability improves. You can manage connected devices through your router\'s admin panel — type 192.168.1.1 into your browser\'s address bar to access it (username and password are often on a sticker on the router).',
      },
      {
        title: 'Check your router\'s age',
        content: 'Routers more than 5 years old may no longer receive software updates from the manufacturer, which can make them unstable and cause frequent drops. If your router is old and the problem persists after trying the steps above, contact your internet provider. Many providers will replace an old router for free, or you can purchase a new one for $50–$150. Ask your provider if they offer a modem/router combo rental — it includes automatic updates.',
        tip: 'For more detailed Wi-Fi troubleshooting, Microsoft\'s free guide is at support.microsoft.com — search "fix Wi-Fi connection issues." Apple\'s guide is at support.apple.com — search "use wireless diagnostics."',
      },
      {
        title: 'Run your internet provider\'s speed test',
        content: 'Visit fast.com (free, no sign-up) or speedtest.net to check your actual internet speed. If the speed shown is much lower than what you pay for, the problem is with your internet service, not your home Wi-Fi. In that case, call your internet provider\'s support line and tell them your speed test result — they can often diagnose and fix connection issues remotely.',
      },
    ],
  },
];
