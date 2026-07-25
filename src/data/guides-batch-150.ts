// TekSure Guides Batch 150 — 4 guides covering: tap-to-pay at stores,
// text-to-speech / phone read aloud, Medical ID setup, and dealing with
// pop-up ads and browser spam.
import type { Guide } from './guides';

export const guidesBatch150: Guide[] = [
  {
    slug: 'how-to-use-tap-to-pay-iphone-android-2026',
    title: 'How to Use Tap-to-Pay at Stores With Your Phone',
    excerpt:
      'Tap-to-pay lets you pay at checkout by holding your phone near the card reader — no wallet needed. Here is how it works on iPhone and Android.',
    category: 'tips-tricks',
    tags: [
      'tap to pay',
      'apple pay',
      'google pay',
      'contactless payment',
      'nfc payment',
      'mobile wallet',
    ],
    readTime: '7 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=AHnJFHFSNe4',
    body: `Tap-to-pay is a way to pay for things at a store without taking out your physical wallet. You hold your phone near the payment terminal at the checkout counter, and the payment goes through in seconds. No card to swipe, no PIN to punch in (for most purchases under $100), and no fumbling for exact change.

This works using a technology called NFC — short for Near Field Communication. Think of it as a very short-range radio signal that your phone and the payment terminal exchange when they are held close together (usually within an inch or two). The signal is encrypted, which means the store never sees your real card number.

On iPhones, this feature is called Apple Pay. On Android phones, it is called Google Pay (also sometimes called Google Wallet). Both work the same way at the store — you hold your phone near the terminal and it pays.

**Why tap-to-pay is safer than swiping your physical card**

When you tap-to-pay, the payment terminal receives a one-time code that is only good for that single purchase. Even if a criminal somehow intercepted the signal, the code would be worthless on any other transaction. By contrast, when you swipe a physical card, the terminal reads your actual card number — which can be copied by a device called a skimmer secretly installed by criminals. Tap-to-pay removes that risk entirely.

Your card number is also never stored on your phone in a way that could be read. It is held in a secure chip inside the phone dedicated to payment security.

**Where to look at checkout**

Look for a small wireless symbol on the payment terminal. It looks like a sideways Wi-Fi symbol — four curved lines fanning out from a dot. Sometimes it also shows a hand holding a card or phone. Many modern terminals at grocery stores, pharmacies, coffee shops, and fast-food restaurants have this symbol. If you do not see it, ask the cashier whether contactless payments are accepted.

**How to add a card before your first tap**

On iPhone: open the Wallet app (it looks like a folded card holder). Tap the + button in the top right. Follow the prompts to photograph your card or type the number. Your bank may send a verification code to confirm it is really you.

On Android: open the Google Wallet app (download it free from the Play Store if it is not already on your phone). Tap "Add to Wallet," then "Payment card." Follow the same photograph or type-in steps. Your bank will verify your identity.

Most Visa, Mastercard, Discover, and American Express credit and debit cards from major US banks are supported. If your card is not accepted, contact your bank — some smaller banks or credit unions take longer to enable mobile wallet support.

**After you pay**

Your phone shows a checkmark or confirmation message. You may hear a sound. The terminal shows "Approved." That is it — the transaction is complete. You will see the charge on your bank or credit card statement the same as any other purchase.

Sources: Apple Support (https://support.apple.com/en-us/111900), Google Help (https://support.google.com/wallet), AARP (https://www.aarp.org/money/credit-loans-debt/info-2021/mobile-payment-apps.html).`,
    steps: [
      {
        title: 'Add your card to Apple Pay or Google Wallet',
        content:
          'iPhone: open the built-in Wallet app and tap the + button in the top-right corner. Tap "Debit or Credit Card," then follow the prompts — you can photograph the card or type the number manually. Your bank will send a short verification code to confirm it is you. Android: open the Google Wallet app (install it free from the Play Store if needed). Tap "Add to Wallet," then "Payment card." Follow the same steps. Most major US bank cards are supported.',
        tip: 'Quick Tip: You can add more than one card and set a default. Your default card is the one that charges when you tap without selecting another.',
      },
      {
        title: 'Look for the contactless symbol at checkout',
        content:
          'At the payment terminal, look for a symbol that resembles a sideways Wi-Fi icon — four curved lines fanning out from a dot. It may also show a small hand holding a card or phone. This symbol tells you the terminal accepts tap-to-pay. It appears on the terminal screen or printed on its surface. Grocery stores, pharmacies, coffee shops, and most fast-food counters commonly have it.',
        warning:
          'If you do not see the symbol, ask the cashier. Some terminals have the feature turned off even when the hardware supports it.',
      },
      {
        title: 'Hold your phone near the terminal to pay',
        content:
          'iPhone: double-click the side button (the power button on the right side of the phone). Your default card appears on screen. Hold the top of your phone (not the bottom) within about an inch of the terminal\'s contactless symbol. You will feel a slight vibration and see a checkmark — payment is done. Android: wake your phone screen (you do not need to unlock it). Hold the back of the phone near the terminal\'s contactless symbol. Google Wallet activates automatically and the payment goes through.',
        tip: 'Quick Tip: Hold steady for one to two seconds rather than waving the phone back and forth. The two devices need a moment to communicate.',
      },
      {
        title: 'What to do if the terminal does not recognize your phone',
        content:
          'Move your phone closer — within half an inch — and hold it still for two full seconds. Try the top half of the phone instead of the bottom (the NFC chip is usually near the top on iPhones and near the center or top on most Androids). Make sure your phone screen is on and not locked. If it still does not work, check that your phone\'s NFC is enabled: Android users can find this in Settings → Connected devices → Connection preferences → NFC. If the feature remains unavailable, pay with your physical card and troubleshoot later.',
        warning:
          'Thick metal phone cases can block the NFC signal. If you use one, try removing the case temporarily to test.',
      },
      {
        title: 'Understand how tap-to-pay protects your money',
        content:
          'Every tap-to-pay transaction uses a unique one-time code. The store never receives your real card number — only that temporary code, which is useless after the purchase. This is more secure than swiping or inserting a physical card, which transmits your actual card number. If your phone is lost or stolen, you can lock Apple Pay from iCloud.com or Google Pay from myaccount.google.com to prevent anyone from using your cards. Neither service charges a fee to use.',
        tip: 'Quick Tip: Tap-to-pay transactions show on your bank statement exactly like any card purchase — same merchant name, same amount. You can dispute them the same way.',
      },
      {
        title: 'Use tap-to-pay at self-checkout and transit',
        content:
          'Most self-checkout lanes at major grocery and retail chains accept tap-to-pay on their card readers. Look for the contactless symbol on the terminal screen or keypad. Many public transit systems across the US — including New York MTA, Chicago CTA, and Washington DC Metro — also accept tap-to-pay directly at the turnstile or bus reader. No app or transit card required at those locations. Hold your phone to the reader the same way you would at a store.',
      },
    ],
  },

  {
    slug: 'how-to-use-text-to-speech-have-phone-read-aloud-2026',
    title: 'How to Have Your Phone Read Text Aloud to You',
    excerpt:
      'Your phone can read emails, articles, and books out loud. This guide covers iPhone Speak Screen and Android Select-to-Speak — great for tired eyes.',
    category: 'health-tech',
    tags: [
      'text to speech',
      'speak screen',
      'select to speak',
      'accessibility',
      'vision assistance',
      'read aloud',
      'iphone accessibility',
      'android accessibility',
    ],
    readTime: '8 min',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=kvs6OtTVCdI',
    body: `Your phone comes with a built-in feature that can read almost anything on screen out loud to you — articles, emails, text messages, recipe pages, news stories, and e-books. You do not need to install anything extra. The feature is already there, waiting to be turned on.

This is particularly helpful when your eyes are tired, when you want to listen while doing something else (cooking, walking, folding laundry), or when you find small phone text straining to read. Many people also find listening to long articles easier than reading them on a small screen.

On iPhones, the feature is called **Speak Screen** and **Speak Selection**. On Android phones, it is called **Select to Speak** and **TalkBack** (though TalkBack is for users who are fully blind — Speak Screen and Select to Speak are lighter options that read specific content on request).

Neither feature changes how your phone looks or works for other people who use it. You turn them on, use them when you want, and they stay quietly in the background otherwise.

**Adjusting the voice and speed**

Both iPhone and Android let you change the reading voice and how fast it speaks. The default speed is often a bit fast for new users. Slowing it down to 60–70% of the default speed makes it much easier to follow along. You can also choose from several different voices — some people prefer a male voice, others prefer female, and regional accents are available too.

**Which apps does this work in?**

Speak Screen on iPhone works in Safari, Mail, Messages, Notes, Apple Books, and most other apps that display text. It does not work on video content (obviously nothing to read there) and may not work in some apps that use non-standard text display.

Android Select to Speak works in Chrome, Gmail, Messages, and most apps. You tap the Select to Speak icon and then tap or highlight any text on screen.

**Using this for e-books and audiobooks**

If you use the Kindle app, Apple Books, or the Libby library app, these have their own built-in read-aloud features that work even better than the system text-to-speech. In Apple Books, tap the page, then tap the reading menu (the AA button) → "Listen." In the Kindle app on iPhone, tap anywhere → tap the headphones icon. In Libby, the audiobook section streams narrated books directly.

Sources: Apple Support (https://support.apple.com/en-us/111797), Google Android Accessibility Help (https://support.google.com/accessibility/android/answer/6151848), AARP (https://www.aarp.org/home-family/personal-technology/info-2020/smartphone-accessibility-features.html).`,
    steps: [
      {
        title: 'Turn on Speak Screen on iPhone',
        content:
          'Open the Settings app. Scroll down and tap "Accessibility." Tap "Spoken Content." You will see two main options: "Speak Selection" reads text you highlight, and "Speak Screen" reads the entire screen when you swipe down with two fingers from the top. Turn on both. While you are here, tap "Speaking Rate" and drag the slider to roughly the middle or slightly below — slower is easier to follow when you are getting started.',
        tip: 'Quick Tip: The Speak Screen gesture (two-finger swipe down from the very top of the screen) can take a little practice. Start your fingers at the very top edge of the screen and swipe downward together.',
      },
      {
        title: 'Use Speak Screen on iPhone',
        content:
          'Navigate to the article, email, or page you want to hear. Place two fingers at the very top of the screen and swipe down together. Your phone will start reading from the top of the page. A small controller bar appears on screen with pause, stop, forward, and speed buttons. Tap the pause button (two vertical bars) to pause at any time. Tap the forward arrow to skip to the next paragraph. Tap the tortoise/hare speed icon to make the voice faster or slower on the fly.',
        tip: 'Quick Tip: To read only a highlighted section rather than the whole page, press and hold on a word until it is selected, expand the selection to cover what you want, then tap "Speak" in the menu that appears (you may need to tap the arrow to find it).',
      },
      {
        title: 'Turn on Select to Speak on Android',
        content:
          'Open the Settings app. Tap "Accessibility." Look for "Select to Speak" — on Samsung phones it may be under "Visibility enhancements" or "Interaction and dexterity." Tap it and toggle it on. A small accessibility icon (circle with a person) will appear at the bottom edge of your screen. On some Android phones running Android 14 or later, you may find this under Settings → Accessibility → Downloaded apps or Text-to-speech output.',
        warning:
          'Android menus vary by phone brand. If you cannot find Select to Speak, search "Select to Speak" in the Settings search bar at the top of the Settings app.',
      },
      {
        title: 'Use Select to Speak on Android',
        content:
          'Navigate to the article, email, or page you want to hear. Tap the accessibility icon at the bottom of the screen (the circle with a person inside). The screen dims slightly to show Select to Speak is active. Now tap any word and your phone will start reading from that point forward. Or drag your finger to highlight a specific section and it will read only that. A small media controller appears at the bottom — tap pause, stop, or the speed control (1x) to adjust.',
        tip: 'Quick Tip: Tap the speed control labeled "1x" to change reading speed. Try 0.75x when starting out — it is noticeably easier to follow than the default.',
      },
      {
        title: 'Adjust the reading voice',
        content:
          'iPhone: go to Settings → Accessibility → Spoken Content → Voices. Tap "English" to see available voices. Tap any voice name to download a preview, then tap the play button to hear it. Tap the voice you prefer to select it. Higher-quality voices are labeled "Enhanced" or "Premium" and require a one-time download (free, takes about a minute on Wi-Fi). Android: go to Settings → Accessibility → Text-to-speech output. Tap "Preferred engine" then the settings gear icon to manage voices. Tap your language to see and download additional voice options.',
      },
      {
        title: 'Have your phone read emails and messages',
        content:
          'On iPhone: open an email in the Mail app. Press and hold on the first word until it highlights, then tap "Select All" from the menu. With the text highlighted, tap the arrow in the toolbar until you see "Speak," then tap it. On Android in Gmail: open an email, tap the three-dot menu in the top right, and look for "Read aloud" — this built-in option reads the full email message. For text messages on either platform, use the same Speak Selection (iPhone) or Select to Speak (Android) method.',
        tip: 'Quick Tip: The Google Assistant on Android and Siri on iPhone can also read your latest emails and messages aloud. Say "Hey Siri, read my latest emails" or "Hey Google, read my messages" to hear them without touching the screen.',
      },
    ],
  },

  {
    slug: 'how-to-set-up-medical-id-on-your-phone-2026',
    title: 'How to Set Up a Medical ID on Your Phone',
    excerpt:
      'Your phone can show first responders your allergies, medications, and emergency contacts — even when the screen is locked. Here is how to set it up.',
    category: 'safety-guides',
    tags: [
      'medical id',
      'emergency contact',
      'health app',
      'first responders',
      'emergency sos',
      'iphone health',
      'android emergency info',
      'senior safety',
    ],
    readTime: '8 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=oWdAo0gxqOk',
    body: `Your smartphone has a feature that could save your life in an emergency. It stores your medical information — allergies, medications, blood type, conditions, and emergency contacts — and makes it available to paramedics or emergency room staff even when your phone is locked with a password or fingerprint.

First responders are trained to look for Medical ID on smartphones when they arrive at a scene. It takes them only seconds to access. They do not need your password. The information appears on the locked screen automatically.

This feature is called **Medical ID** on iPhones and **Emergency Information** (sometimes listed as "Medical info") on Android phones. Setting it up takes about five to ten minutes and you only need to do it once. Keeping it up to date — especially when medications change — is the main ongoing step.

**Who should set this up**

Anyone can benefit, but it is especially valuable for people who:
- Take multiple prescription medications
- Have known allergies (especially to medications or latex)
- Have conditions that affect treatment decisions (diabetes, heart conditions, seizure disorders, bleeding disorders, kidney disease)
- Are organ donors
- Have a blood type that is rare or important to know before a transfusion

Even if you are in good health, the emergency contact portion alone makes this worth setting up. If you are ever in an accident and cannot speak, paramedics can call your listed contact immediately.

**What to include**

- Full legal name
- Date of birth
- Blood type (check your blood donor card, a past medical record, or ask your doctor if you do not know)
- Allergies and reactions (be specific: "Penicillin — severe rash and throat swelling")
- Current medications with doses (for example: "Metoprolol 25mg, Lisinopril 10mg, Metformin 500mg")
- Medical conditions relevant to emergency treatment (diabetes, pacemaker, COPD, seizure disorder)
- Organ donor status
- Emergency contacts (name and phone number — include a family member and a close friend)
- Your primary doctor's name and phone number

**A note on privacy**

The Medical ID on iPhone is visible from the lock screen only when someone taps "Emergency" and then "Medical ID." It is not visible to anyone who just picks up your phone. On Android, it is accessed through the emergency calling screen. You control exactly what information to include — leave any field blank if you prefer not to share it.

Sources: Apple Support (https://support.apple.com/en-us/111799), Google Android Help (https://support.google.com/android/answer/6141631), American Red Cross (https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html).`,
    steps: [
      {
        title: 'Open the Health app on iPhone and find Medical ID',
        content:
          'On your iPhone, find and open the Health app — it has a white background with a red heart icon. Tap your profile picture or initials in the top-right corner. On the next screen, tap "Medical ID." If you have never filled it in, you will see a prompt to create one. Tap "Edit" in the top-right corner to begin entering your information. You can also reach Medical ID directly by going to Health → Browse → Medical ID.',
      },
      {
        title: 'Fill in your medical information on iPhone',
        content:
          'Work through each section. Enter your name and date of birth. For "Blood Type," tap the field and select from the list — if you are unsure, leave it blank rather than guessing. Under "Medical Conditions," type any diagnoses relevant to emergency care (heart disease, diabetes, seizure disorder, COPD, etc.). Under "Medical Notes," add your current medications with doses — your pharmacy printout or medication bottles have this information. Under "Allergies and Reactions," list drug allergies specifically and what reaction they cause. Tap "Add emergency contact" to add a family member or trusted person.',
        tip: 'Quick Tip: Your pharmacy can print a current medication list for you at no charge. Ask the pharmacist — they usually hand you a printed sheet. This makes filling in the medications section much easier.',
      },
      {
        title: 'Turn on "Show When Locked" on iPhone',
        content:
          'This is the most important step. At the bottom of the Medical ID edit screen, find the toggle labeled "Show When Locked" and turn it on (it should turn green). This is what allows paramedics and emergency room staff to see your information without your password. Without this step turned on, your Medical ID is only accessible when the phone is already unlocked — and that defeats much of the purpose. Tap "Done" in the top-right corner to save everything.',
        warning:
          'Double-check that "Show When Locked" is toggled ON (green) before you leave the Medical ID screen. This is the step most people accidentally skip.',
      },
      {
        title: 'Set up Emergency Information on Android',
        content:
          'Open the Settings app. The location of this feature varies by phone brand. On most Android phones: go to Settings → Safety & Emergency → Medical info (or "Emergency information"). On Samsung Galaxy phones: Settings → Advanced features → Send SOS messages (the Medical ID equivalent is under Settings → Safety & Emergency). On Google Pixel phones: Settings → Emergency information. Tap the field and begin entering your details — name, blood type, allergies, medications, conditions, and emergency contacts.',
        tip: 'Quick Tip: If you cannot find Emergency information in your Android Settings, type "emergency" or "medical" in the Settings search bar at the top of the screen.',
      },
      {
        title: 'How first responders access your Medical ID',
        content:
          'On iPhone: from the locked screen, a responder presses the side button five times quickly (this also works by pressing the side button and a volume button together, then dragging "Emergency SOS"). From the resulting screen they tap "Medical ID" to see your information. They do not need your password. On Android: from the locked screen they tap "Emergency call" at the bottom, then look for "Emergency information" or a small info icon on the emergency dialer screen. Make sure to test this yourself to confirm it works on your specific phone.',
      },
      {
        title: 'Keep your Medical ID up to date',
        content:
          'Set a reminder to review your Medical ID every six months, or any time a medication changes. A Medical ID with outdated medications or missing allergies can mislead emergency personnel. On iPhone, you can also update the information from the Health app → your profile → Medical ID → Edit. Check after any new prescription is added, after any surgery, or after a new diagnosis. Ask your doctor\'s office to review the list at your next annual visit — they can confirm accuracy.',
        tip: 'Quick Tip: Print your Medical ID information and keep a paper copy in your wallet as a backup. Many hospitals provide a wallet card for this purpose, or you can write it on an index card.',
      },
    ],
  },

  {
    slug: 'how-to-deal-with-pop-up-ads-and-spam-2026',
    title: 'How to Handle Pop-Up Ads and Spam on Your Phone or Computer',
    excerpt:
      'Pop-up ads and browser spam are annoying and sometimes dangerous. Here is how to close them safely, block future ones, and remove unwanted notifications.',
    category: 'troubleshooting',
    tags: [
      'pop-up ads',
      'ad blocker',
      'browser spam',
      'ublock origin',
      'adguard',
      'scam pop-ups',
      'browser notifications',
      'malware',
      'online safety',
    ],
    readTime: '9 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-07',
    lastVerifiedAt: '2026-05-07',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=KxaOnZxqFXs',
    body: `Pop-up ads are windows or boxes that appear over a webpage, sometimes blocking what you are trying to read. They are among the most common and frustrating things people encounter online. Some are merely annoying advertisements. Others are designed to scare you into calling a fake phone number or downloading harmful software.

This guide teaches you how to close pop-ups safely, how to tell the dangerous ones from the merely annoying ones, how to install an ad blocker to stop most of them from appearing in the first place, and how to remove those browser notification alerts that some websites have tricked you into enabling.

**The most important rule: never call a phone number in a pop-up**

Some pop-ups are designed to look like urgent warnings from Microsoft, Apple, or your internet provider. They may say things like "Your computer is infected," "Your account has been suspended," or "Call 1-800-XXX-XXXX immediately." These are scams. They are called "tech support scams" and the FTC has documented thousands of them.

No legitimate company sends you a pop-up telling you to call a phone number. Microsoft does not contact you through your browser. Apple does not call you via a web page. If you see a pop-up with a phone number, the correct response is to close your browser entirely — not to call. If you have any doubt whether the warning is real, call a family member or the company directly using a number from their official website.

**Why pop-ups appear**

Pop-ups come from a few different sources:
1. Websites that display advertising pop-ups (normal, annoying but mostly harmless)
2. Websites you accidentally allowed to send you notifications (you may have clicked "Allow" on a permission request without realizing what it was)
3. Malicious websites that display fake virus alerts (scams — close and ignore)
4. Software you installed that added a browser extension without your knowledge

An ad blocker handles the first category. Revoking notification permission handles the second. Careful closing handles the third. And knowing what to look for handles the fourth.

**What an ad blocker does**

An ad blocker is a free browser extension (a small add-on program) that runs quietly in your browser and prevents most ads and pop-ups from loading at all. The most widely trusted free ad blocker is called uBlock Origin — it works in Chrome, Edge, and Firefox on computers. For Safari on iPhone and Mac, the equivalent is called AdGuard. Both are free, maintained by reputable developers, and do not collect your data.

An ad blocker does not block everything — some websites ask you to turn it off to access their content, and you can choose to do so. You can also add websites to a whitelist (an exceptions list) if you want to support a site by letting its ads show.

Sources: FTC.gov Tech Support Scams (https://consumer.ftc.gov/articles/tech-support-scams), CISA Phishing Guidance (https://www.cisa.gov/phishing), How-To Geek on uBlock Origin (https://www.howtogeek.com/675095/use-ublock-origin-to-browse-safer/), Apple Support Safari Extensions (https://support.apple.com/en-us/105118).`,
    steps: [
      {
        title: 'Close a pop-up safely without clicking anything inside it',
        content:
          'If a pop-up appears on your computer, look for the X button in the corner of the pop-up box itself (not your browser). Click it. Do not click anything inside the pop-up — not even a button that says "Close" or "No Thanks" — because some of those are designed to install things or redirect you. On a phone, tap outside the pop-up box if there is a dark area around it, or tap the browser\'s back button. If the pop-up will not close and is playing an alarm sound or showing a scary warning, force-quit your browser entirely (instructions in the next step).',
        warning:
          'Never call a phone number shown in a pop-up. Never download anything a pop-up tells you to download. These are almost always scams targeting seniors specifically.',
      },
      {
        title: 'Force-quit your browser if a pop-up will not close',
        content:
          'Windows computer: press the Ctrl, Alt, and Delete keys together. Click "Task Manager." Find your browser in the list (Chrome, Edge, or Firefox), click it, then click "End Task" at the bottom. Mac: press Command + Option + Escape together. A window appears showing running apps. Click your browser name, then click "Force Quit." iPhone: swipe up from the bottom of the screen and pause in the middle — this shows your open apps. Swipe the browser card upward to close it. Android: tap the square button at the bottom of the screen (the recent apps button). Swipe the browser card left or right to close it.',
        tip: 'Quick Tip: After force-quitting, reopen your browser. If it offers to "Restore" your previous tabs, click "No" or "Start fresh" — restoring would reopen the problem page.',
      },
      {
        title: 'Install uBlock Origin on Chrome, Edge, or Firefox (computer)',
        content:
          'Open Chrome or Edge. Go to the Chrome Web Store (https://chromewebstore.google.com) and search "uBlock Origin." Look for the extension by developer "Raymond Hill" — it has millions of users and five-star ratings. Click "Add to Chrome" (or "Add to Edge"). Click "Add extension" when the confirmation box appears. A small red shield icon appears in your browser toolbar. That is it — uBlock Origin is now active and blocking ads automatically. For Firefox: go to the Firefox Add-ons site (https://addons.mozilla.org) and search "uBlock Origin" to install it the same way.',
        tip: 'Quick Tip: uBlock Origin is free and open source — meaning volunteers and security researchers can inspect its code. It does not sell your browsing data. Avoid paid or unfamiliar ad blockers; some are themselves adware in disguise.',
      },
      {
        title: 'Install AdGuard on Safari (iPhone or Mac)',
        content:
          'uBlock Origin does not work in Safari. For Safari on iPhone: open the App Store and search "AdGuard — Ad Blocker & Privacy." Install the free version (there is a paid Pro version, but the free version blocks ads well). After installing, go to Settings → Safari → Extensions → AdGuard. Toggle it on and tap "Allow" for all websites. On Mac with Safari: go to System Settings → Privacy & Security → Extensions, or open Safari → Settings → Extensions. Search for AdGuard in the App Store and install it there, then enable it in Safari settings.',
      },
      {
        title: 'Remove unwanted browser notification permissions',
        content:
          'If a website is sending pop-up notifications to your screen (alerts that appear even when your browser is closed), that means you accidentally granted it notification permission. To remove it: Chrome on computer: click the three-dot menu in the top right → Settings → Privacy and security → Site Settings → Notifications. You will see a list of sites that have permission to send notifications. Click the three dots next to any you do not recognize and click "Remove." Edge: same path — Settings → Cookies and site permissions → Notifications. Firefox: three-bar menu → Settings → Privacy & Security → scroll to Permissions → Notifications → Settings.',
        tip: 'Quick Tip: A general rule: when any website asks "Allow notifications?" the safe answer is to click "Block" or "No thanks." Legitimate news sites and services do not require notification permission to work.',
      },
      {
        title: 'Remove unwanted notification permissions on iPhone and Android',
        content:
          'iPhone (Safari notifications): go to Settings → Safari → Advanced → Website Data. Or go to Settings → Notifications and scroll down to find "Safari" — tap it to see which websites can send alerts. Android (Chrome notifications): open Chrome → tap the three-dot menu → Settings → Site Settings → Notifications. Tap any site name you do not recognize and tap "Delete" to remove its permission. You can also block all future notification requests by tapping "Notifications" and switching to "Don\'t allow." This stops any new website from asking permission to send notifications.',
        warning:
          'If pop-ups continue appearing on your Android phone even when no browser is open, a downloaded app may be causing them. Go to Settings → Apps, look for recently installed apps you do not recognize, and uninstall them. The FTC recommends reporting such apps at ReportFraud.ftc.gov.',
      },
    ],
  },
];
