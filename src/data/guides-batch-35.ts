import { Guide } from './guides';

export const guidesBatch35: Guide[] = [
  {
    slug: 'android-live-transcribe-guide',
    title: 'How to Use Live Transcribe on Android',
    excerpt: 'Live Transcribe converts speech to text in real time on your Android phone — helpful for anyone who is hard of hearing or wants to follow conversations more easily.',
    body: `Live Transcribe is a free Google app for Android that listens to spoken words and converts them to text on your screen in real time. It works for one-on-one conversations, group discussions, TV audio, phone calls on speaker, and any situation where hearing speech clearly is difficult.\n\nThe app was developed by Google in partnership with Gallaudet University, the world's leading university for deaf and hard-of-hearing students. It is available free on Android phones running Android 5.0 or later.\n\n**What Live Transcribe does**:\n- Transcribes speech to text with low latency (under one second delay)\n- Supports over 70 languages and dialects\n- Shows non-speech sounds in brackets: [music playing], [applause], [dog barking]\n- Saves the last three hours of conversation so you can scroll back\n- Works offline for several supported languages after downloading them\n- Can be added to your Quick Settings panel for one-tap access\n\nFor family members, caregivers, or anyone accompanying someone who is hard of hearing, Live Transcribe effectively makes the phone into a captioning device. Place the phone face-up on a table during a conversation and the words appear on screen for both parties to read.\n\nLive Transcribe does not save or transmit conversations to Google by default — audio is processed locally on the device for privacy.`,
    category: 'health-tech',
    tags: ['live transcribe', 'android', 'hearing', 'speech to text', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download Live Transcribe',
        content: 'Search "Live Transcribe" in the Google Play Store. Download the free app from Google LLC. It may already be installed on Pixel phones.',
      },
      {
        title: 'Open the app and grant microphone permission',
        content: 'Open Live Transcribe. It asks for microphone permission — tap "Allow." The app begins listening and transcribing immediately.',
      },
      {
        title: 'Start a conversation',
        content: 'Place your phone face-up on a table between you and another person, or hold it near the person speaking. Words appear on screen within a second of being spoken.',
        tip: 'The app shows a sound level indicator at the top. The microphone works best when the phone is within 2-3 feet of the speaker and the room is relatively quiet.',
      },
      {
        title: 'Add it to Quick Settings for fast access',
        content: 'Swipe down from the top of your screen twice to open Quick Settings. Tap the pencil icon to edit tiles. Find "Live Transcribe" and drag it to your active tiles area. Now you can launch it with one tap.',
      },
      {
        title: 'Scroll back through recent transcription',
        content: 'Live Transcribe keeps the last three hours of transcript. Scroll up in the app to see what was said earlier in the conversation. Tap the save icon (cloud with down arrow) to export text if you want a permanent record.',
      },
    ],
  },

  {
    slug: 'iphone-guided-access-guide',
    title: 'How to Use Guided Access to Lock iPhone to One App',
    excerpt: 'Guided Access locks your iPhone to a single app and can disable the Home button — great for handing your phone to a grandchild, someone with cognitive disabilities, or for focused use.',
    body: `Guided Access is a feature built into every iPhone that restricts the device to a single app and optionally disables certain screen areas, buttons, or gestures. While the feature was originally designed as an accessibility tool, it has become popular for a variety of everyday uses.\n\n**Common uses**:\n- Hand your phone to a grandchild to watch a video — they cannot navigate to other apps or make purchases\n- Set up a phone for someone with dementia or cognitive disabilities — they see only one app\n- Use your phone as a single-purpose device at an event or presentation\n- Prevent accidental calls or app switches when someone is using the phone for a specific task\n\nOnce Guided Access is active, the side button (or Home button on older phones) is disabled. The only way to exit is to triple-click the side button and enter the Guided Access passcode (or use Face/Touch ID if configured).\n\nYou can also draw circles on the screen to disable specific areas — for example, the back arrow in a video app, or advertising banners in a news app.\n\nGuided Access also has a time limit option — you can allow it for a set number of minutes before it automatically ends, useful for controlled screen time with a child.`,
    category: 'phone-guides',
    tags: ['guided access', 'iphone', 'accessibility', 'single app mode', 'kids'],
    readTime: '4 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Enable Guided Access in Settings',
        content: 'Go to Settings → Accessibility → Guided Access → toggle it on. Set a passcode (the code to exit Guided Access). You can also enable Face ID or Touch ID as an exit method.',
      },
      {
        title: 'Open the app you want to lock to',
        content: 'Open the specific app you want to restrict the phone to — a video app, a game, a photo album, or whatever is appropriate for the situation.',
      },
      {
        title: 'Start Guided Access',
        content: 'Triple-click the side button (or Home button on older iPhones). The Guided Access setup screen appears. Tap "Start" in the top right corner to activate it.',
        tip: 'Before tapping Start, you can draw circles on the screen to disable specific areas. This is optional — most people skip straight to tapping Start.',
      },
      {
        title: 'The phone is now locked to that app',
        content: 'The person using the phone can only use the one open app. Pressing the Home button or side button has no effect. Swiping does not exit the app.',
      },
      {
        title: 'Exit Guided Access when done',
        content: 'Triple-click the side button → enter your Guided Access passcode (or use Face ID/Touch ID if enabled) → tap "End" to exit Guided Access. The phone returns to normal operation.',
      },
    ],
  },

  {
    slug: 'android-guest-mode-guide',
    title: 'How to Use Android Guest Mode When Sharing Your Phone',
    excerpt: 'Android Guest Mode lets someone else use your phone without seeing your apps, messages, or personal data — hand it over with confidence.',
    body: `Android's Guest Mode creates a temporary, blank slate on your phone that anyone can use without accessing your personal information. When you hand your phone to a guest, they see a fresh Android experience with only basic apps — no access to your Gmail, photos, messages, call history, or other apps.\n\nThis is useful when:\n- A grandchild wants to play a game on your phone\n- A friend needs to make a quick call but you do not want them seeing your contacts or messages\n- A repair technician needs to test the phone\n- You want to demonstrate how to use a feature without exposing your personal content\n\nWhen Guest Mode ends, all activity from the guest session is wiped. Any apps the guest downloaded, sites they visited, and accounts they added are deleted. Your data remains untouched.\n\nGuest Mode is available on most Android phones running Android 5.0 or later, though some manufacturers (particularly Samsung) call it something different or place it in a different location in the interface.\n\n**Note**: On Samsung Galaxy phones, the equivalent feature is "Separate" (formerly called Secure Folder for personal use) or a second user profile. The fastest option on Samsung is to set up a second User profile in Settings → Accounts → Users.`,
    category: 'phone-guides',
    tags: ['android', 'guest mode', 'privacy', 'share phone', 'user accounts'],
    readTime: '4 min',
    thumbnailEmoji: '👤',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Access Guest Mode from Quick Settings',
        content: 'Swipe down from the top of the screen twice to open Quick Settings fully. Tap your user profile icon (circle, usually top right) → tap "Add guest" or "Guest."',
        tip: 'On Pixel phones, the user/profile icon appears in the top-right corner of the Quick Settings panel. On other brands, look for a person silhouette icon.',
      },
      {
        title: 'The phone switches to Guest Mode',
        content: 'The phone briefly transitions to a clean environment. The guest sees a basic Home screen with only essential apps — no access to your personal data.',
      },
      {
        title: 'Hand the phone to the guest',
        content: 'The guest can use the phone normally within the guest environment. They can download apps, add accounts, and use the internet. None of this touches your data.',
      },
      {
        title: 'End the guest session',
        content: 'When the guest is done, swipe down → tap the user icon → tap your name or "Remove guest." Confirm when asked. All guest activity is deleted.',
        warning: 'End the guest session yourself rather than handing the phone back still in Guest Mode. This ensures the guest data is wiped and you are back to your own account.',
      },
      {
        title: 'On Samsung: use a second user profile',
        content: 'On Samsung phones: Settings → Accounts and Backup → Users → Add user. Set up a secondary user account instead of guest mode. This works the same way — switch to the other user, hand over the phone, switch back when done.',
      },
    ],
  },

  {
    slug: 'android-data-limit-guide',
    title: 'How to Set a Mobile Data Limit on Android',
    excerpt: 'Android can warn you when you\'re approaching your data limit and automatically turn off mobile data when you hit your cap — preventing surprise overage charges.',
    body: `If you have a limited mobile data plan, Android can monitor how much data you use and automatically turn it off when you hit a set limit. This prevents unexpected overage charges from your carrier.\n\nThe data usage settings in Android track data over a month-long cycle that you set to match your billing period. At the end of the cycle, the counter resets.\n\n**Two key features**:\n1. **Data warning**: The phone sends you a notification when you reach a specified amount — say 3 GB — so you know to be careful the rest of the month\n2. **Data limit**: The phone automatically disables mobile data when you reach the cap, preventing any further cellular data use until you manually re-enable it or the cycle resets\n\nNote that these are tracked by Android, not your carrier. Your carrier's data tracking may differ slightly. The Android counter serves as a practical early warning system, but carrier billing is the official record.\n\nData-heavy activities to watch: streaming video (Netflix, YouTube) uses 1-3 GB per hour. Video calls use 500 MB to 1 GB per hour. Music streaming uses about 50-150 MB per hour. Web browsing and email use much less.\n\nYou can also see which specific apps are using the most data and restrict background data use for individual apps.`,
    category: 'phone-guides',
    tags: ['android', 'data limit', 'mobile data', 'data usage', 'overage'],
    readTime: '4 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Mobile Network settings',
        content: 'Go to Settings → Network & Internet → Data Usage → Mobile Data Usage. On Samsung: Settings → Connections → Data Usage → Mobile Data Usage.',
      },
      {
        title: 'Set your billing cycle start date',
        content: 'Tap "Billing cycle" or the gear/settings icon. Set the cycle start date to match when your carrier resets your data — usually the 1st of the month or your service activation anniversary date.',
      },
      {
        title: 'Set a data warning',
        content: 'Tap "Data warning" and enter a number — for example, 4 GB if you have a 5 GB plan. Android will notify you when you reach this amount.',
        tip: 'Set the warning at 80% of your plan limit — this gives you time to slow down data use before hitting the cap.',
      },
      {
        title: 'Set a data limit (optional)',
        content: 'Toggle "Set data limit" on. Enter your plan\'s data cap. When you reach this amount, Android turns off mobile data automatically. Tap "OK" to confirm.',
      },
      {
        title: 'Review which apps use the most data',
        content: 'On the data usage page, scroll down to see a list of apps ordered by data use. Tap any app to see its usage and optionally restrict background data for that specific app.',
      },
    ],
  },

  {
    slug: 'iphone-cellular-data-guide',
    title: 'How to Monitor and Limit Cellular Data Use on iPhone',
    excerpt: 'See exactly which apps are using your iPhone\'s cellular data, turn off data for specific apps, and avoid hitting your monthly data cap.',
    body: `iPhones give you granular control over which apps can use cellular data (your carrier's mobile network). If you have a limited data plan, turning off cellular data for data-hungry apps like streaming video can make your monthly allowance last much longer.\n\n**Checking data usage**: Go to Settings → Cellular and scroll down. Every app installed on your phone appears with its cellular data usage since the last time you reset the counter. The counter does not reset automatically — you need to scroll to the bottom of the list and tap "Reset Statistics" at the start of each billing cycle for accurate tracking.\n\n**Turning off cellular data for specific apps**: Next to each app in the Cellular settings is a toggle. If you turn off Netflix's cellular data, it will only stream over Wi-Fi. Same for YouTube, social media apps, or any other data-heavy service. The app still works — it just does not use your cellular plan.\n\n**Low Data Mode**: iOS 13 and later has a Low Data Mode toggle in Settings → Cellular → Cellular Data Options. When enabled, iPhone reduces background data activity — pausing automatic downloads, reducing streaming quality, and limiting updates — to conserve your data plan.\n\nFor people with limited data plans (under 5 GB/month), turning off cellular data for video and music streaming apps and only using them on Wi-Fi can make a dramatic difference in monthly data consumption.`,
    category: 'phone-guides',
    tags: ['iphone', 'cellular data', 'data limit', 'low data mode', 'data usage'],
    readTime: '4 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Cellular settings',
        content: 'Go to Settings → Cellular. The top section shows your current period data usage. Scroll down to see a list of every app with its cellular data usage.',
      },
      {
        title: 'Turn off cellular data for specific apps',
        content: 'Find any app using more data than you want — video streaming apps are usually the biggest. Tap the toggle next to that app to turn off its cellular data. It will only work on Wi-Fi.',
        tip: 'Turn off cellular data for Netflix, YouTube, Hulu, and music apps. These account for the majority of data use for most people.',
      },
      {
        title: 'Enable Low Data Mode',
        content: 'Go to Settings → Cellular → Cellular Data Options → Low Data Mode → turn it on. This tells apps to use less data in the background.',
      },
      {
        title: 'Reset statistics at the start of your billing cycle',
        content: 'Scroll to the very bottom of the Cellular settings page and tap "Reset Statistics." Confirm. This resets all per-app data counters so you can track this billing cycle accurately.',
        warning: 'iPhone does not automatically reset data counters monthly. If you never reset, the numbers shown reflect all-time usage since you last reset, not just this month.',
      },
      {
        title: 'Check your carrier\'s own usage tool',
        content: 'Your carrier\'s app (My AT&T, T-Mobile, My Verizon) shows your official data usage and remaining balance. iPhone\'s counter is a helpful guide, but the carrier\'s data is what determines your bill.',
      },
    ],
  },

  {
    slug: 'iphone-face-id-app-lock',
    title: 'How to Lock Specific Apps with Face ID on iPhone',
    excerpt: 'iOS 18 lets you require Face ID or your passcode to open any app — even if your phone is already unlocked. Keep banking and health apps private.',
    body: `Starting with iOS 18, iPhone lets you require Face ID (or Touch ID, or your passcode) to open individual apps — even after you have already unlocked your phone. Before this feature, once your iPhone was unlocked, anyone holding it could open any app.\n\nThis is useful for:\n- Keeping banking, financial, or health apps private from anyone who borrows your phone\n- Protecting sensitive notes, photos, or messaging apps\n- Preventing a grandchild who borrows your phone from accessing apps you do not want them to see\n\n**How it works**: When you lock an app, opening it triggers a Face ID scan (or passcode entry). If the scan does not match, the app does not open. If Face ID is not available at that moment (bright sun, sunglasses), it falls back to your passcode.\n\nYou can lock as many apps as you want. Locked apps look normal on your Home screen — they just require authentication to open.\n\n**What about hiding apps?** iOS 18 also lets you fully hide apps — moving them out of your Home screen and into a hidden section of the App Library. Hidden apps still require Face ID to access. This goes a step further than locking by making the app invisible to casual browsing.`,
    category: 'phone-guides',
    tags: ['iphone', 'face id', 'app lock', 'ios 18', 'privacy'],
    readTime: '4 min',
    thumbnailEmoji: '👁️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Find the app you want to lock on your Home screen',
        content: 'Locate the app on your iPhone Home screen. This feature requires iOS 18 or later. If you have an older iOS version, go to Settings → General → Software Update to update first.',
      },
      {
        title: 'Long-press the app icon',
        content: 'Press and hold the app icon until a context menu appears with options like "Remove App," "Share App," and "Require Face ID."',
      },
      {
        title: 'Tap "Require Face ID"',
        content: 'Select "Require Face ID" (or "Require Touch ID" on phones with Touch ID). Confirm with your Face ID scan to activate the lock.',
        tip: 'If you do not see "Require Face ID" in the menu, make sure you have updated to iOS 18 or later.',
      },
      {
        title: 'Test the lock',
        content: 'Tap the app to open it. You will see a Face ID prompt (the phone scans your face). Once confirmed, the app opens normally. If you look away or another face tries to open it, it will fail.',
      },
      {
        title: 'Remove the lock if needed',
        content: 'To remove Face ID from an app: long-press the app icon → "Don\'t Require Face ID." Confirm with Face ID. The app opens normally without authentication from that point.',
      },
    ],
  },

  {
    slug: 'android-app-lock-guide',
    title: 'How to Lock Individual Apps on Android',
    excerpt: 'Many Android phones can lock specific apps with a fingerprint or PIN — keep banking, health, and private apps secure even if someone else picks up your phone.',
    body: `Most Android phones (particularly Samsung Galaxy, Pixel, and Xiaomi devices) include a way to lock individual apps so they require fingerprint, face scan, or PIN to open — even if the phone itself is already unlocked.\n\nThis feature is built directly into the phone's settings on Samsung and some other brands. On stock Android (like Pixel phones), it requires using the Google Play Protect or the built-in app pinning feature, or a third-party app.\n\n**Samsung Galaxy**: The built-in Secure Folder feature lets you move copies of apps (or their shortcuts) into a protected, encrypted space that requires fingerprint or PIN to access. You can also use the App Lock feature in Privacy settings.\n\n**Stock Android (Pixel)**: Android 15 and later added an app lock feature. On older Pixel phones, use App Pinning (Settings → Security → Advanced → App Pinning) to lock the phone to one app temporarily, or use screen lock settings.\n\n**Google Play Protect app lock**: Google Play Protect now offers Health Connect and sensitive app protection in Android 12+, requiring biometric to open health and finance apps.\n\nFor the most reliable app locking on Android, Samsung Galaxy phones have the best built-in tools. Users of other Android phones may find app locking most reliable through the Secure Folder approach or third-party app lock apps (with varying quality and privacy practices).`,
    category: 'phone-guides',
    tags: ['android', 'app lock', 'fingerprint', 'privacy', 'samsung'],
    readTime: '5 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-19',
    difficulty: 'Intermediate',
    steps: [
      {
        title: 'On Samsung Galaxy: use App Lock in Privacy settings',
        content: 'Go to Settings → Privacy → App Lock. Tap "Turn on App Lock" and set a PIN or use your fingerprint. A list of apps appears — toggle on any app you want to require authentication to open.',
      },
      {
        title: 'On Samsung: set up Secure Folder for full app protection',
        content: 'Go to Settings → Biometrics and Security → Secure Folder. Set it up with your Samsung account. Move sensitive apps into Secure Folder — these require your fingerprint or PIN to access and are completely hidden from the main screen.',
      },
      {
        title: 'On Pixel / stock Android: use App Pinning for temporary locking',
        content: 'Go to Settings → Security → More Security Settings → App Pinning → turn on. Open the app you want to lock. Tap the square (Recent Apps) button → tap the app\'s icon at the top of the card → Pin. The phone is locked to that app.',
        tip: 'App Pinning is a session lock — it locks the phone to one app until you enter your PIN. Useful for handing your phone to someone for a specific task.',
      },
      {
        title: 'On Android 15+: use the built-in Private Space',
        content: 'Android 15 added a Private Space feature — a separate locked area for sensitive apps. Go to Settings → Security & Privacy → Private Space. Set up a separate lock (PIN or fingerprint) and move apps you want protected into this space.',
      },
      {
        title: 'Test your app lock',
        content: 'Lock your screen, unlock your phone normally, then tap a locked app. You should see a biometric/PIN prompt before the app opens.',
      },
    ],
  },

  {
    slug: 'iphone-reachability-guide',
    title: 'How to Use Reachability on iPhone for One-Handed Use',
    excerpt: 'Reachability drops the top of the screen down to within thumb reach — making it possible to use a large iPhone with one hand.',
    body: `Modern iPhones are large, making it difficult to tap the top of the screen with one hand. Apple's solution is Reachability — a gesture that temporarily brings the top half of the screen down to the bottom half, putting everything within easier reach of your thumb.\n\nReachability works on iPhone 6 and later, including all Plus, Pro Max, and standard-size models. It is especially useful on iPhones 6.1 inches and larger, where the top of the screen can feel far away.\n\nTo activate Reachability, you swipe down on the Home Bar (the thin horizontal bar at the bottom of the screen, just below the main content area). This is a light, gentle swipe downward on the bar itself — not a full swipe from the edge. The screen content slides down about halfway, giving you access to the top portion.\n\nThe screen stays down until you tap something or wait a few seconds. Whatever you tap executes normally (the actual tap position adjusts to where the content would normally be).\n\nReachability is off by default on newer iPhones. You turn it on in Settings → Accessibility → Touch → Reachability. This is a one-time setup.`,
    category: 'phone-guides',
    tags: ['iphone', 'reachability', 'one-handed', 'accessibility', 'large iphone'],
    readTime: '3 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Enable Reachability in Settings',
        content: 'Go to Settings → Accessibility → Touch → Reachability. Toggle it on. You only need to do this once.',
      },
      {
        title: 'Activate Reachability with a swipe',
        content: 'While using your phone one-handed, lightly swipe downward on the Home Bar (the thin line at the bottom of the screen). The screen content slides down about halfway.',
        tip: 'The gesture is a gentle, short downward swipe right on the Home Bar — not a hard push or a long swipe. Think of it as a quick nudge downward.',
      },
      {
        title: 'Tap what you need',
        content: 'The content from the top of the screen is now within thumb reach at the bottom. Tap whatever you needed — a button, the back arrow, a notification. The screen snaps back up automatically after you tap.',
      },
      {
        title: 'Dismiss Reachability without tapping',
        content: 'If you activated Reachability but do not need to tap anything, tap the grayed-out area at the top (where the screen appears blank) or wait a few seconds. The screen returns to its normal position.',
      },
    ],
  },

  {
    slug: 'iphone-shake-to-undo',
    title: 'Hidden iPhone Tricks: Shake to Undo and Other Gestures',
    excerpt: 'Shaking your iPhone undoes the last action you typed or deleted. Plus a collection of other iPhone gestures most users never discover.',
    body: `iPhones have several built-in gestures and shortcuts that are not labeled anywhere on the screen. These hidden behaviors exist but go undiscovered by most users because there is no tutorial for them.\n\n**Shake to Undo**: Shake your iPhone gently and a dialog box appears asking "Undo Typing." Tap "Undo" to reverse the last text you typed or deleted. This works in any text field — messages, notes, emails, search bars. It also works in reverse: after undoing, shake again to "Redo."\n\n**Triple-tap text to select all**: Tap three times quickly on a word to select the entire paragraph. Very useful for selecting a block of text without dragging the selection handles.\n\n**Long-press space bar to move cursor**: When typing, press and hold the space bar. The keyboard becomes a touchpad — drag your finger to move the cursor precisely to any position in your text without trying to tap the exact spot.\n\n**Swipe to delete in Mail**: In the Mail app (and many others), swipe left on an item to reveal delete and archive options. Swipe all the way left to delete instantly.\n\n**Swipe back**: In Safari and many apps, swipe from the left edge of the screen toward the center to go back — equivalent to tapping the back arrow button.\n\n**Pinch to close keyboard**: In apps where a keyboard pops up, pinch inward on the keyboard to dismiss it quickly.`,
    category: 'tips-tricks',
    tags: ['iphone', 'gestures', 'undo', 'shake to undo', 'hidden features'],
    readTime: '4 min',
    thumbnailEmoji: '🤫',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Try Shake to Undo',
        content: 'Type something in a message or note. Then give your iPhone a gentle shake — not hard, just a deliberate little shake. A dialog appears: "Undo Typing." Tap "Undo." The text disappears.',
        tip: 'Shake to Undo works for deleting too. If you accidentally deleted a whole paragraph, shake to get it back.',
      },
      {
        title: 'Move the cursor with the space bar',
        content: 'While typing, press and hold the space bar for about one second. The keyboard keys fade and become a gray pad. Drag your finger anywhere on the keyboard to move the cursor in the text above.',
      },
      {
        title: 'Triple-tap to select a paragraph',
        content: 'Tap three times quickly on any text in a paragraph to select the entire paragraph at once. Then tap "Copy" or "Cut" without having to drag selection handles.',
      },
      {
        title: 'Swipe from the left edge to go back',
        content: 'In Safari or most apps, put your thumb on the very left edge of the screen and swipe toward the center. This navigates back to the previous page or screen without needing to reach the back button.',
      },
      {
        title: 'Long-press keyboard letters for alternate characters',
        content: 'Long-press any letter on the iPhone keyboard. For many letters, a popup appears showing accent variations — è, é, ê, ë for the letter e. Slide your finger to the one you want and release.',
      },
    ],
  },

  {
    slug: 'memoji-guide',
    title: 'How to Create and Use Your Memoji on iPhone',
    excerpt: 'Memoji are personalized animated avatars that look like you — use them as your contact photo, in Messages, on FaceTime, and in reaction stickers.',
    body: `Memoji are animated cartoon characters you create to look like yourself. They were introduced by Apple in 2018 and have become a popular way to express yourself in messages and video calls.\n\nYou can customize your Memoji's skin tone, hair color and style, eye color, glasses, freckles, jewelry, and more. Once created, your Memoji can animate in sync with your facial expressions using the front-facing camera.\n\n**Where Memoji appear**:\n- iMessage stickers: Use your Memoji as reaction stickers in message conversations\n- FaceTime camera view: Your Memoji can replace your real face during video calls, animated by your facial movements\n- Contact photo: Set your Memoji as the photo associated with your Apple ID or your contact card\n- Reactions and effects: Add Memoji reactions to messages and photos\n\nCreating a Memoji takes about five minutes. You do not need an iPhone Pro or a recent model — Memoji creation works on iPhone 6s and later. However, the live animated face (where your Memoji mirrors your expressions) requires iPhone X or later (with Face ID).\n\nMemoji stickers — static or animated stickers of your avatar — work in Messages on older iPhones and even through Android's MMS, though the animation only works in iMessage.`,
    category: 'communication',
    tags: ['memoji', 'iphone', 'imessage', 'avatar', 'facetime'],
    readTime: '4 min',
    thumbnailEmoji: '😊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Messages and find the Memoji button',
        content: 'Open the Messages app and start or open a conversation. Tap the Apps icon (looks like an A or a grid) next to the text box. Find the Memoji icon (smiley face with a plus sign).',
      },
      {
        title: 'Tap the three dots and choose "New Memoji"',
        content: 'Tap the three-dot menu (⋯) in the Memoji panel → "New Memoji." The Memoji editor opens with a blank character.',
      },
      {
        title: 'Customize your Memoji',
        content: 'Use the category tabs at the top (Skin, Hairstyle, Eyes, Brows, Nose, Lips, Ears, Facial Hair, Glasses, Headwear) to customize each feature. Swipe through each category to find options that match your appearance.',
        tip: 'You do not have to make your Memoji look exactly like you — many people create fun or fantastical versions with unusual hair colors, accessories, or expressions.',
      },
      {
        title: 'Save your Memoji',
        content: 'Tap "Done" when you are happy with how it looks. Your Memoji is saved and available whenever you open the Memoji panel in Messages.',
      },
      {
        title: 'Send a Memoji sticker',
        content: 'Open the Memoji panel in Messages. Tap your Memoji to see a grid of sticker poses. Tap any pose to send it as a sticker in the conversation. You can also use them as reaction replies by long-pressing a received message → selecting a Memoji reaction.',
      },
    ],
  },

  {
    slug: 'iphone-keyboard-tips',
    title: 'Tips for Typing Faster on Your iPhone Keyboard',
    excerpt: 'From autocorrect fixes to one-handed keyboard mode, these iPhone keyboard settings and shortcuts make typing easier and faster.',
    body: `The iPhone keyboard is full of features most people never find. These tips can make typing significantly faster and more comfortable.\n\n**Swipe typing (QuickPath)**: Instead of tapping individual letters, slide your finger from letter to letter without lifting it — the keyboard figures out the word. Available on iPhone since iOS 13. Enable it in Settings → General → Keyboard → Slide to Type.\n\n**One-handed keyboard**: For phones that feel too wide to type with one thumb, activate the one-handed keyboard: long-press the globe or emoji key at the bottom left → tap the left or right hand icon. The entire keyboard shifts to one side, bringing all keys within thumb reach.\n\n**Text replacement shortcuts**: Create shortcuts for phrases you type frequently. Go to Settings → General → Keyboard → Text Replacement. Add shortcuts like "omw" → "On my way!" or "addr" → your home address. Type the shortcut and it expands automatically.\n\n**Smart punctuation**: Double-tap the space bar to insert a period followed by a space — no need to switch to the punctuation keyboard to end sentences.\n\n**Uppercase shortcut**: Double-tap the Shift key to activate Caps Lock. Tap once to turn it off.\n\n**Emoji search**: When in the emoji keyboard, there is a search bar at the top. Type "heart" to find all heart emojis instead of scrolling through thousands.`,
    category: 'tips-tricks',
    tags: ['iphone', 'keyboard', 'typing tips', 'text replacement', 'one-handed keyboard'],
    readTime: '5 min',
    thumbnailEmoji: '⌨️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Enable Swipe Typing',
        content: 'Go to Settings → General → Keyboard → turn on "Slide to Type." Now instead of tapping each letter, slide your finger from letter to letter and lift when done. The keyboard predicts the word.',
        tip: 'Start with short common words like "the," "and," "for," to get comfortable with the motion before trying longer words.',
      },
      {
        title: 'Switch to one-handed keyboard mode',
        content: 'Long-press the emoji or globe icon at the bottom-left of the keyboard. A popup shows three keyboard layout options. Tap the left-hand or right-hand icon to shift the keyboard. Tap the center icon to return to normal.',
      },
      {
        title: 'Create text shortcuts for common phrases',
        content: 'Go to Settings → General → Keyboard → Text Replacement → tap the "+" button. In "Phrase" enter what you want to type, in "Shortcut" enter the abbreviation. For example: Phrase = "Best regards, [Your Name]", Shortcut = "brn".',
      },
      {
        title: 'End sentences quickly with double-space',
        content: 'When typing, tap the space bar twice quickly at the end of a sentence. iPhone inserts a period automatically and gives you a space to start the next sentence. This saves switching to the punctuation keyboard.',
      },
      {
        title: 'Find emoji faster with search',
        content: 'Open the emoji keyboard (tap the smiley face icon). At the top is a search bar. Type a word — "dog," "food," "heart" — to jump directly to relevant emojis rather than scrolling.',
      },
    ],
  },

  {
    slug: 'android-gboard-guide',
    title: 'How to Get More Out of Gboard on Android',
    excerpt: 'Gboard is Google\'s free keyboard for Android with swipe typing, voice input, GIF search, translation, and more — all without leaving the keyboard.',
    body: `Gboard is the default keyboard on Pixel phones and available on all Android devices. It goes far beyond basic typing with a collection of features built directly into the keyboard so you never have to switch apps.\n\n**Swipe/Glide typing**: Slide your finger from letter to letter without lifting to form words. Google's Gboard pioneered this feature and it remains one of the most accurate implementations. Enable it in Gboard settings → Glide Typing.\n\n**Voice input**: Tap the microphone icon to speak instead of type. Gboard transcribes speech in real time with high accuracy. Useful when typing is impractical — in a car, for long messages, or when your hands are occupied.\n\n**GIF and sticker search**: Tap the GIF or sticker icon to search for animated images by keyword. Search "congratulations" or "thank you" to find relevant GIFs to send in messages.\n\n**Built-in Google Search**: Tap the Google icon (colored G) on the keyboard to search Google without leaving the conversation. Paste the link or information directly into your message.\n\n**Translation**: Tap the three-dot menu → Translate. Type in any language and Gboard translates to your chosen language in real time. Send the translated text with one tap.\n\n**Clipboard**: Gboard has a clipboard that saves copied text for one hour. Tap the clipboard icon to see recently copied items and paste from history.`,
    category: 'essential-skills',
    tags: ['gboard', 'android', 'keyboard', 'swipe typing', 'voice input'],
    readTime: '5 min',
    thumbnailEmoji: '⌨️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Make sure Gboard is your default keyboard',
        content: 'Go to Settings → General Management → Keyboard list and default → Default keyboard → select Gboard. If Gboard is not installed, search "Gboard" in the Play Store and download it.',
      },
      {
        title: 'Enable Glide (swipe) typing',
        content: 'While Gboard is open, tap and hold the comma (,) key → tap the Settings gear → Glide Typing → Enable Glide Typing. Now you can slide from letter to letter to form words.',
      },
      {
        title: 'Use voice typing',
        content: 'While in any text field, tap the microphone icon on the Gboard keyboard. Speak your message. Gboard transcribes as you talk. Tap the microphone again to stop. Review and send.',
        tip: 'Speak punctuation by saying "comma," "period," "question mark" — Gboard inserts the symbols when you say their names.',
      },
      {
        title: 'Search for GIFs from the keyboard',
        content: 'Tap the emoji or sticker icon on Gboard → tap "GIF." Type a word to search for animated GIFs. Tap a GIF to insert it directly into your message without opening any other app.',
      },
      {
        title: 'Use the clipboard for recent copied items',
        content: 'Tap and hold the comma (,) key → tap the clipboard icon. Recently copied text appears (saved for one hour). Tap any item to paste it. This is helpful when copying multiple pieces of information from one source.',
      },
    ],
  },

  {
    slug: 'gmail-smart-compose-guide',
    title: 'How to Use Gmail Smart Compose to Write Emails Faster',
    excerpt: 'Gmail\'s Smart Compose suggests words and phrases as you type — just press Tab to accept a suggestion and finish sentences in seconds.',
    body: `Gmail's Smart Compose feature shows text suggestions as you type an email. When Smart Compose predicts what you are going to write next, it shows the suggested text in light gray after your cursor. Press Tab on a keyboard (or tap the suggestion on mobile) to accept it and continue.\n\nFor example, if you start typing "Looking forward to," Gmail might suggest "hearing from you." Press Tab and that phrase is inserted. This speeds up writing repetitive phrases significantly.\n\nSmart Compose learns from your writing patterns over time. The more you use it and accept (or reject) suggestions, the more accurately it reflects how you personally write.\n\n**Smart Reply** is a companion feature that suggests short responses at the bottom of emails you receive. For common responses like "Thank you, see you then" or "Sounds great!" tapping a Smart Reply suggestion creates and sends the response in seconds.\n\nBoth features work on Gmail for iPhone, Android, and the Gmail website on a computer.\n\nSome people find Smart Compose helpful for formal emails but distracting for casual ones. You can turn it off for specific accounts while keeping it on for others, or disable it entirely in Gmail Settings → General → Smart Compose.`,
    category: 'app-guides',
    tags: ['gmail', 'smart compose', 'email tips', 'productivity', 'writing'],
    readTime: '4 min',
    thumbnailEmoji: '✉️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Check that Smart Compose is on',
        content: 'Open the Gmail app or website. Tap the three-line menu → Settings → tap your Gmail address → Smart Compose → toggle on. Also turn on "Smart Compose Personalization" so it learns your style.',
      },
      {
        title: 'Start typing an email',
        content: 'Tap "Compose" to write a new email. Begin typing the subject line or body. As you type, Gmail may show a suggestion in lighter gray text after your cursor.',
      },
      {
        title: 'Accept a suggestion',
        content: 'When you see a gray suggestion you like: on a computer, press the Tab key to accept it. On mobile (iPhone or Android), tap the suggested text that appears above the keyboard.',
        tip: 'You can accept just part of a suggestion by pressing Tab and then continuing to type — you are not committed to accepting the entire suggested phrase.',
      },
      {
        title: 'Ignore suggestions you do not want',
        content: 'Simply keep typing if you do not want the suggestion. The gray suggestion disappears and your typed text replaces it. There is no need to dismiss it.',
      },
      {
        title: 'Try Smart Reply for quick responses',
        content: 'When reading an email, scroll to the bottom. Gmail suggests two or three short replies. Tap one to create a quick response you can send immediately or edit before sending.',
      },
    ],
  },

  {
    slug: 'mac-dictation-guide',
    title: 'How to Use Dictation on Mac to Type with Your Voice',
    excerpt: 'Mac has built-in dictation that lets you speak to type anywhere on your computer — emails, documents, search boxes — without any special software.',
    body: `Mac's built-in Dictation feature lets you speak and have your words typed wherever your cursor is. Press a keyboard shortcut, speak, and the words appear in any text field — email composing, Word documents, Google Docs, search bars, notes.\n\nDictation uses your Mac's microphone. For Macs introduced in 2021 or later (with Apple Silicon), dictation works entirely on the device without sending audio to Apple's servers. Older Macs with Intel processors send audio to Apple for processing, which requires internet.\n\n**Enhanced Dictation** on Apple Silicon Macs adds:\n- Automatic punctuation based on your pauses and speech patterns\n- Real-time transcription that appears word by word as you speak\n- Emoji dictation — say "thumbs up emoji" to insert 👍\n- Formatting commands like "new paragraph," "all caps," "bold that"\n\nDictation is helpful for:\n- Writing long emails or messages without typing\n- People with arthritis, carpal tunnel, or hand pain who find typing uncomfortable\n- Drafting documents faster than you can type\n- Anyone who thinks better when speaking than typing\n\nTo use Dictation, place your cursor where you want text to appear, then press the microphone key (F5 on some Macs) or the keyboard shortcut you configure.`,
    category: 'mac-guides',
    tags: ['mac', 'dictation', 'voice typing', 'accessibility', 'macos'],
    readTime: '4 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Enable Dictation on your Mac',
        content: 'Go to System Settings → Keyboard → Dictation → toggle it on. Choose a shortcut to activate dictation — the default is pressing Fn (Function) key twice. Also enable "Enhanced Dictation" if available.',
      },
      {
        title: 'Place your cursor where you want to type',
        content: 'Click inside any text field — an email, a Word document, a search bar, a notes app. Make sure the cursor is blinking in the right place before activating Dictation.',
      },
      {
        title: 'Activate Dictation and speak',
        content: 'Press Fn twice (or your configured shortcut). A microphone icon appears near the text field. Speak clearly at a normal pace. Your words appear as you speak.',
        tip: 'Speak in complete phrases rather than individual words — Dictation understands context better in longer phrases. "My doctor appointment is on Thursday at three PM" works better than "my... doctor... appointment..."',
      },
      {
        title: 'Add punctuation by saying it',
        content: 'Say "period," "comma," "question mark," "exclamation point," or "new line" to insert those characters. On Apple Silicon Macs with Enhanced Dictation, punctuation is often inserted automatically based on your speech pattern.',
      },
      {
        title: 'Stop dictating',
        content: 'Press Fn once (or your shortcut) to stop dictation. Or click somewhere else on the screen. Review and edit what was transcribed — make corrections by typing or dictating again.',
      },
    ],
  },

  {
    slug: 'google-docs-voice-typing-guide',
    title: 'How to Type with Your Voice in Google Docs',
    excerpt: 'Google Docs has a free built-in voice typing tool — open a document, speak your content, and Google transcribes it in real time for editing and sharing.',
    body: `Google Docs includes voice typing built directly into the free web version (docs.google.com). You speak and Google transcribes your words into the document in real time. This works in any Chrome browser on a Windows or Mac computer — no downloads or special software required.\n\nVoice typing in Google Docs is among the most accurate free transcription tools available. It handles long paragraphs, punctuation commands, and multiple languages.\n\n**Supported commands**:\n- "Period," "comma," "exclamation point," "question mark" — inserts punctuation\n- "New line" or "new paragraph" — starts a new paragraph\n- "Select all" — selects all text\n- "Bold," "italics," "underline" — applies formatting to what you just said\n- "Undo" — undoes the last action\n\nVoice typing requires Chrome browser (free download) and a microphone. It does not work in Firefox, Safari, or Edge — only Chrome.\n\nThis is ideal for writing longer documents — letters to family members, memoir pages, newsletters, or any long-form text. Many people can speak faster than they type, making voice typing significantly more productive for longer content.`,
    category: 'essential-skills',
    tags: ['google docs', 'voice typing', 'dictation', 'speech to text', 'productivity'],
    readTime: '4 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Open Google Docs in Chrome',
        content: 'Open the Chrome browser. Go to docs.google.com and sign in with your Google account. Open an existing document or click "+" to create a new one.',
        warning: 'Voice typing only works in the Google Chrome browser. If you use Firefox, Safari, or Edge, you will not see the voice typing option.',
      },
      {
        title: 'Open Voice Typing',
        content: 'Click "Tools" in the menu bar at the top → "Voice typing." A microphone icon appears on the left side of the document.',
      },
      {
        title: 'Click the microphone and start speaking',
        content: 'Click the microphone icon — it turns red when active and listening. Start speaking. Your words appear in the document as you talk.',
        tip: 'Speak at a natural, conversational pace. Pausing at the end of sentences helps Google recognize punctuation boundaries.',
      },
      {
        title: 'Use voice commands for formatting',
        content: 'Say "period" or "new paragraph" to control formatting. After writing a sentence you want to bold, say "bold that" and Google applies bold to what you just said.',
      },
      {
        title: 'Click the microphone again to stop',
        content: 'Click the red microphone icon to pause dictation. Click it again to resume. When finished, close the microphone panel with the X and edit your document normally.',
      },
    ],
  },

  {
    slug: 'merlin-bird-app-guide',
    title: 'How to Use the Merlin Bird ID App to Identify Birds',
    excerpt: 'Merlin can identify any bird by photo or song — point your phone at a bird or hold it up to birdsong, and the free app identifies the species instantly.',
    body: `Merlin Bird ID is a free app from the Cornell Lab of Ornithology that identifies birds in three ways: from a photo you take, by listening to birdsong in real time, and from answers to five simple questions (What size? What color? Where did you see it?).\n\nSound ID is the most remarkable feature — hold your phone toward birdsong and Merlin identifies multiple birds simultaneously in real time, showing their names and photos as they sing. It works even when you cannot see the birds at all, just hear them.\n\nMerlin includes detailed information about every bird it identifies: a description, photos from multiple angles, range maps showing where they live year-round vs. seasonally, and recordings of their calls.\n\n**For beginners**: The app is excellent for learning. Each identified bird shows which features to look for — the red breast of a robin, the black cap of a chickadee — helping you learn to identify birds yourself over time.\n\nMerlin covers birds of North America, Europe, South America, Asia, Africa, and Australia. It downloads regional bird packs (free) so it works without internet in the field.\n\nThe app was developed by professional ornithologists at Cornell and uses AI trained on millions of bird photos and sounds. It is trusted by both beginners and experienced birders as one of the most accurate free bird identification tools available.`,
    category: 'app-guides',
    tags: ['merlin', 'birds', 'nature', 'bird identification', 'cornell lab'],
    readTime: '4 min',
    thumbnailEmoji: '🐦',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download Merlin Bird ID',
        content: 'Search "Merlin Bird ID" in the App Store or Google Play. Download the free app from Cornell Lab of Ornithology. Open the app and allow microphone and camera access.',
      },
      {
        title: 'Download a bird pack for your region',
        content: 'Tap "Explore" → "Bird Packs" → download the pack for your region (for example, "North America"). This downloads bird data for offline use so the app works without internet.',
      },
      {
        title: 'Try Sound ID in your backyard or a park',
        content: 'Tap "Sound ID" on the main screen. Hold your phone toward where birds are singing. Merlin listens and shows birds in real time as it identifies their songs — multiple birds simultaneously.',
        tip: 'Early morning is the best time for Sound ID when birds are most active. Try it just after sunrise for the most impressive experience.',
      },
      {
        title: 'Identify a bird from a photo',
        content: 'Tap "Photo ID" → take a photo of the bird or upload one from your gallery. Merlin analyzes the image and suggests the most likely species with confidence percentages.',
      },
      {
        title: 'Answer 5 questions to identify a bird you already saw',
        content: 'Tap "Start Bird ID" and answer five questions: Date, Location, Bird size, Color, and What was it doing. Merlin narrows it down to the most likely species. Tap any suggestion to see full details.',
      },
    ],
  },

  {
    slug: 'strava-guide',
    title: 'How to Use Strava to Track Your Walks and Exercise',
    excerpt: 'Strava tracks your walks, runs, and bike rides using GPS — log every activity, see your route on a map, and watch your distance and pace improve over time.',
    body: `Strava is a free fitness tracking app that uses your phone's GPS to record walks, runs, bike rides, hikes, and other outdoor activities. When you start a Strava activity, the app tracks your route, distance, time, elevation change, and pace.\n\nAfter each activity, Strava shows your route on a map, splits (your pace for each mile or kilometer), and a summary of key stats. Over time, your Activity feed builds a history showing how your fitness has progressed.\n\n**Why Strava is popular for seniors and everyday walkers**:\n- No gym required — tracks any outdoor movement\n- Daily and weekly stats motivate consistent activity\n- Compares your performance on the same route over time\n- Free version covers all basic tracking needs\n- Social features let you share activities with friends or family who also use Strava\n\n**Segments**: Strava has mapped millions of running and biking routes called segments. When you pass through a segment, Strava compares your performance to everyone else who has done that same stretch — showing where you rank and how you compare to your personal best.\n\nStrava Premium (about $7.99/month) adds training plans, heart rate analysis, and advanced insights. The free version is completely adequate for casual fitness tracking.\n\nFor Apple Watch or Wear OS users, Strava pairs with your smartwatch to use the watch's built-in GPS for more accurate tracking without draining your phone's battery.`,
    category: 'health-tech',
    tags: ['strava', 'fitness tracking', 'walking', 'exercise', 'gps tracker'],
    readTime: '5 min',
    thumbnailEmoji: '🚶',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Download Strava and create a free account',
        content: 'Search "Strava" in the App Store or Google Play. Download the app. Create a free account with your email address. Allow Strava to access your location (GPS) for tracking.',
      },
      {
        title: 'Start your first activity',
        content: 'Tap the orange "+" button → "Record an Activity." Select your activity type (Walk, Run, Ride, Hike). Tap "Start." Put your phone in your pocket and go — Strava tracks your route in the background.',
      },
      {
        title: 'Stop and save your activity',
        content: 'When done, open Strava → tap the orange record button → tap "Finish." Review the summary screen showing your route on a map, distance, time, and pace. Tap "Save" to add it to your profile.',
        tip: 'GPS takes 10-30 seconds to lock on when you first step outside. Stay still for a moment after tapping Start to let the GPS position itself accurately.',
      },
      {
        title: 'Review your stats after the activity',
        content: 'Tap the activity in your feed to see a detailed breakdown: splits per mile/km, elevation profile, map of your route, and heart rate if you have a connected watch.',
      },
      {
        title: 'Follow friends or family on Strava',
        content: 'Tap "Find Friends" → search by name or email. Follow people to see their activities in your feed and give them "Kudos" (Strava\'s equivalent of a like). Sharing fitness progress with others adds accountability and encouragement.',
      },
    ],
  },

  {
    slug: 'android-personal-safety-app',
    title: 'How to Set Up the Android Personal Safety App',
    excerpt: 'The Personal Safety app on Android (Pixel phones) includes crash detection, emergency SOS, and a crisis contact list — key safety features worth configuring.',
    body: `The Personal Safety app is a built-in safety app on Google Pixel phones (running Android 8.1 and later). It consolidates multiple safety features into one place.\n\n**Features of the Personal Safety app**:\n\n**Car Crash Detection**: The Pixel detects sudden deceleration patterns that indicate a car crash. If a crash is detected and you are unresponsive, the phone plays a loud alarm, notifies your emergency contacts, and calls 911 automatically after 60 seconds.\n\n**Emergency SOS**: Press the power button rapidly five times to trigger Emergency SOS. This calls 911, sounds an alarm, and sends your location to emergency contacts with a text message.\n\n**Emergency contacts**: Add the people who should be notified in an emergency. They receive your GPS location and a message when Emergency SOS is triggered.\n\n**Medical information**: Enter your blood type, allergies, current medications, and conditions. This information shows on your lock screen and is accessible to first responders without unlocking your phone.\n\n**Crisis alerts**: Shows county-level emergency alerts for natural disasters, Amber alerts, and extreme weather.\n\nThis app is built in on Pixel phones. Samsung and other Android brands have similar features (Samsung calls it "Emergency SOS" and includes it in Safety & Emergency settings). Check your phone's settings for "Emergency" or "Safety" to find your device's equivalent.`,
    category: 'safety-guides',
    tags: ['android', 'personal safety', 'emergency sos', 'crash detection', 'pixel'],
    readTime: '5 min',
    thumbnailEmoji: '🆘',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    steps: [
      {
        title: 'Find the Personal Safety app',
        content: 'On Pixel phones, search "Personal Safety" in your app list. On Samsung Galaxy: go to Settings → Safety & Emergency. On other Android phones: Settings → Emergency SOS.',
      },
      {
        title: 'Set up emergency contacts',
        content: 'Open the app → tap "Emergency Contacts" → "Add contact." Choose contacts from your phone book who should be notified in an emergency. They receive your location and a safety alert automatically when you trigger Emergency SOS.',
      },
      {
        title: 'Fill in your medical information',
        content: 'Tap "Medical Info" and enter your name, blood type, known allergies, current medications, and any medical conditions. This appears on your lock screen so first responders can see it without unlocking your phone.',
        tip: 'Keep this information current. An outdated medication list can be as dangerous as no list at all.',
      },
      {
        title: 'Enable Car Crash Detection (Pixel phones)',
        content: 'In the Personal Safety app → Car Crash Detection → toggle on. The phone uses sensors to detect crash patterns. If triggered and you do not respond within 60 seconds, it calls 911 automatically.',
      },
      {
        title: 'Learn the Emergency SOS gesture',
        content: 'Press the power button rapidly five times in a row to trigger Emergency SOS. The phone sounds an alarm, calls 911, and texts your emergency contacts with your location. Practice the gesture — five quick presses — so you remember it in an emergency.',
        warning: 'Be careful with Emergency SOS — false triggers do happen. If you accidentally trigger it, you have a brief window to cancel before the call connects.',
      },
    ],
  },
];
