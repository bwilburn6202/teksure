import type { UserTier } from '@/contexts/TierContext';

/**
 * TekSure Courses — structured multi-lesson curricula.
 *
 * A course groups 5–15 existing guides into a coherent learning path and
 * adds a 3-question mini-quiz per lesson. Finishing every lesson (with
 * at least 2/3 on each quiz) earns a named certificate.
 *
 * Lessons do not duplicate guide content — they reference a guide slug
 * so the guide stays the source of truth.
 */

export type CourseLevel = 1 | 2 | 3 | 4; // matches the 4 tier system: 1=just-starting, 4=power-user

export interface QuizQuestion {
  q: string;
  choices: string[];
  /** 0-based index of the correct answer. */
  correct: number;
  /** Short explanation shown after answering. */
  why: string;
}

export interface CourseLesson {
  /** Stable lesson id, used in URLs and localStorage keys. */
  id: string;
  title: string;
  /** One-line description of what the learner will know after this lesson. */
  outcome: string;
  /** Slug of the guide that backs this lesson (source of truth for content). */
  guideSlug: string;
  /** Optional sandbox or tool the lesson sends them to after the quiz. */
  practice?: {
    label: string;
    path: string;
  };
  quiz: [QuizQuestion, QuizQuestion, QuizQuestion];
}

export interface Course {
  slug: string;
  title: string;
  /** One-sentence promise used in course cards and social preview. */
  tagline: string;
  /** 1-paragraph welcome shown at the top of the course detail page. */
  intro: string;
  /** Numeric tier this course is built for. Users at higher tiers still see it. */
  level: CourseLevel;
  /** Allow a range — e.g. a 1–2 course is offered to tiers 1 and 2. */
  maxLevel?: CourseLevel;
  emoji: string;
  /** Certificate title when completed, e.g. "Scam Defense — Level 1". */
  certificateTitle: string;
  /** Rough time commitment across all lessons. */
  totalMinutes: number;
  lessons: CourseLesson[];
}

// ---------------------------------------------------------------------------
// Helpers for lesson authors — concise quiz templates stay readable.
// ---------------------------------------------------------------------------

const q = (question: string, choices: string[], correct: number, why: string): QuizQuestion => ({
  q: question,
  choices,
  correct,
  why,
});

// ---------------------------------------------------------------------------
// Course 1 — Your First Week With a Smartphone (Tier 1, 10 lessons)
// ---------------------------------------------------------------------------

const courseSmartphoneFirstWeek: Course = {
  slug: 'smartphone-first-week',
  title: 'Your First Week With a Smartphone',
  tagline: 'Go from "what does this button do?" to confident on day seven.',
  intro:
    'A lesson a day for a week. By the end, you will set up your phone, know the basic gestures, make calls and send messages, take photos, and stay safe online. No prior experience assumed.',
  level: 1,
  emoji: '',
  certificateTitle: 'First Week With a Smartphone',
  totalMinutes: 90,
  lessons: [
    {
      id: 'turn-on-and-basics',
      title: 'Day 1 — Turn it on and learn the basic gestures',
      outcome: 'You can unlock, tap, swipe, and return home without hesitating.',
      guideSlug: 'set-up-new-iphone-beginners',
      quiz: [
        q(
          'What does "swipe up from the bottom of the screen" usually do?',
          ['Takes a photo', 'Goes back to the home screen', 'Calls a contact', 'Turns off the phone'],
          1,
          'On modern smartphones without a home button, swiping up from the bottom returns you to the home screen.',
        ),
        q(
          'You accidentally tap the wrong app. What is the safest thing to do?',
          ['Hold down the power button', 'Remove the battery', 'Swipe back to home and try again', 'Restart the phone'],
          2,
          'The home screen is your safe base. You can always go back and start over — opening the wrong app won\'t break anything.',
        ),
        q(
          'Your screen went dark while you were reading. Why?',
          [
            'The phone is broken',
            'The phone locked itself to save battery — tap to wake it',
            'Somebody called you',
            'An app closed',
          ],
          1,
          'Phones automatically dim and lock the screen after a short time to save battery. A quick tap (or pressing the side button) wakes it up again.',
        ),
      ],
    },
    {
      id: 'home-screen',
      title: 'Day 2 — Organize your home screen',
      outcome: 'You can arrange your favorite apps and hide the ones you don\'t use.',
      guideSlug: 'iphone-home-screen-organize',
      quiz: [
        q(
          'How do you move an app icon?',
          ['Press and hold until it wiggles, then drag', 'Tap it twice', 'Tilt the phone', 'Shake the phone'],
          0,
          'Press-and-hold puts your phone into edit mode so you can drag icons to new spots or into folders.',
        ),
        q(
          'What\'s a "folder" on your home screen?',
          ['A type of email', 'A group of apps you can open together', 'A place to store photos', 'A password'],
          1,
          'Folders group related apps (for example, all your banking apps) so the home screen stays tidy.',
        ),
        q(
          'You deleted an app by mistake. What can you do?',
          [
            'Nothing, the app is gone forever',
            'Reinstall it for free from the app store',
            'Buy a new phone',
            'Restart the phone',
          ],
          1,
          'Apps you remove can be redownloaded from the App Store (iPhone) or Play Store (Android), usually for free if you paid before.',
        ),
      ],
    },
    {
      id: 'calls-and-contacts',
      title: 'Day 3 — Calls, contacts, and blocking nuisances',
      outcome: 'You can call, save a contact, and block unwanted numbers.',
      guideSlug: 'block-phone-number-guide',
      practice: { label: 'Practice spotting scam calls', path: '/practice/phone' },
      quiz: [
        q(
          'An unknown number keeps calling you. Best move?',
          ['Answer and yell at them', 'Let it go to voicemail and block if it repeats', 'Call it back', 'Press 1 to speak to a representative'],
          1,
          'Answering or pressing buttons tells scammers the line is active. Voicemail + block is the safest path.',
        ),
        q(
          'You want to save "Grandma" with her number. Where does that live?',
          ['The Contacts app', 'The Calculator', 'The Settings app', 'The Photos app'],
          0,
          'Your Contacts app is your phone book. Once saved, Grandma\'s name shows up on incoming calls instead of a number.',
        ),
        q(
          'True or false: "POTENTIAL SPAM" on your caller ID is usually fine to answer.',
          ['True', 'False — let those go to voicemail'],
          1,
          'Phone carriers now flag likely spam automatically. If something is legitimate, they will leave a message.',
        ),
      ],
    },
    {
      id: 'messages',
      title: 'Day 4 — Texts, photos, and emoji',
      outcome: 'You can send and receive text messages and a photo.',
      guideSlug: 'spot-fake-text-smishing',
      practice: { label: 'Spot fake texts in the Practice Phone', path: '/practice/phone' },
      quiz: [
        q(
          'A text says "Your USPS package is on hold, click here to pay a small fee." What is it?',
          ['Normal delivery text', 'A phishing scam (smishing)', 'Your phone company', 'A friend'],
          1,
          'USPS does not text payment links. Any "package held" text with a link is almost always a scam.',
        ),
        q(
          'You want to send a photo of your dog to a friend. Where do you start?',
          ['Settings app', 'Camera roll / Photos, then tap Share', 'Calculator', 'App Store'],
          1,
          'Open Photos, find the picture, tap the share icon (square with an arrow), and pick Messages.',
        ),
        q(
          'Your friend sends a link you weren\'t expecting, even though you know them. Best move?',
          [
            'Click it right away',
            'Reply to ask if they actually sent it',
            'Forward it to everyone',
            'Pay the fee the link mentions',
          ],
          1,
          'Scammers often hack accounts and send links to everyone in the contacts. A quick "hey, did you send this?" confirms it\'s real.',
        ),
      ],
    },
    {
      id: 'camera-and-photos',
      title: 'Day 5 — Take photos and share them',
      outcome: 'You can shoot, review, and share a photo without help.',
      guideSlug: 'how-to-move-contacts-to-a-new-phone',
      quiz: [
        q(
          'How do you see a photo you took a moment ago?',
          ['Open Settings', 'Tap the small thumbnail in the corner of the camera, or open Photos', 'Restart', 'Call someone'],
          1,
          'Every recent photo lands in the Photos app. You can also tap the thumbnail in your camera to preview it.',
        ),
        q(
          'You have 500 old photos and your phone says "storage full". Options?',
          [
            'Delete the phone',
            'Turn on iCloud or Google Photos backup, then clear old ones',
            'Throw the phone away',
            'Nothing',
          ],
          1,
          'Cloud backup keeps originals online and lets you clear space on the device while still seeing everything.',
        ),
        q(
          'Why shouldn\'t you share a photo of your boarding pass on social media?',
          ['It might not look nice', 'The barcode can leak your travel and personal info', 'Airlines will ban you', 'It costs money'],
          1,
          'Airline barcodes contain your booking reference and sometimes more. Share the destination, not the boarding pass.',
        ),
      ],
    },
    {
      id: 'wifi-and-internet',
      title: 'Day 6 — Connect to Wi-Fi safely',
      outcome: 'You can join your home Wi-Fi and recognize risky networks.',
      guideSlug: 'connect-public-wifi-safely',
      quiz: [
        q(
          'A coffee shop has a network called "Free_Airport_Wifi_FREE". You\'re in a coffee shop. What\'s likely?',
          ['That\'s the shop\'s network', 'A fake network trying to snoop on you', 'The airport is nearby', 'A scam call'],
          1,
          'Real shops name their networks after the shop. Generic or weirdly-named networks in the wrong place are often traps.',
        ),
        q(
          'On public Wi-Fi, what should you avoid doing?',
          ['Reading the news', 'Logging into your bank', 'Checking the weather', 'Looking at a map'],
          1,
          'Public Wi-Fi can be watched. Save logins to accounts that hold money for your home network or your phone\'s own data.',
        ),
        q(
          'What does "forget this network" do?',
          ['Deletes the network from the internet', 'Tells your phone to stop auto-joining it', 'Resets your phone', 'Calls tech support'],
          1,
          '"Forget" removes the saved password on your device, so your phone won\'t auto-join it again.',
        ),
      ],
    },
    {
      id: 'app-store-basics',
      title: 'Day 7 — Install apps the safe way',
      outcome: 'You can find and install an app without downloading malware.',
      guideSlug: 'getting-started-with-chatgpt',
      quiz: [
        q(
          'Where should you get apps for your phone?',
          ['Any website with a download button', 'Only the App Store (iPhone) or Play Store (Android)', 'Texts from unknown numbers', 'An email attachment'],
          1,
          'Official stores review apps for malware. Sideloaded apps from random websites are the most common way phones get hacked.',
        ),
        q(
          'A free app wants access to your contacts, camera, microphone, and location. Yellow flag?',
          [
            'No, tap Allow on everything',
            'Yes — only allow what the app actually needs (a flashlight doesn\'t need contacts)',
            'No, apps can\'t misuse this',
            'Only if it costs money',
          ],
          1,
          'If a free app wants permissions that don\'t match what it does, it\'s probably selling your data. Deny or pick a different app.',
        ),
        q(
          'You installed an app you don\'t like. How do you remove it?',
          ['Wait for it to disappear', 'Press-and-hold the icon, then tap Delete or Uninstall', 'Buy a new phone', 'Break the phone'],
          1,
          'Press-and-hold lets you delete any app. On Android you can also drag to a "Remove" area at the top of the screen.',
        ),
      ],
    },
    {
      id: 'passwords-basics',
      title: 'Bonus — A first good password',
      outcome: 'You have one strong passphrase you can remember.',
      guideSlug: 'create-strong-password',
      quiz: [
        q(
          'Which is the strongest password?',
          ['password123', 'sunny-desk-river-7', 'mydogsname', 'Your birthday'],
          1,
          'Three unrelated words plus a number is both strong and rememberable. Birthdays and pet names are too easy to guess.',
        ),
        q(
          'Using the same password on many sites — is it safe?',
          ['Yes, saves time', 'No — one leak gives scammers access to everything'],
          1,
          'Password reuse is how most account takeovers happen. One breach elsewhere unlocks your email, bank, everything.',
        ),
        q(
          'A website asks for your password for "verification purposes" via email. What do you do?',
          ['Send it over', 'Ignore — real companies never ask for your password by email', 'Call their listed number', 'Post it publicly'],
          1,
          'No legitimate company asks for your password by email, text, or phone. It\'s always a scam.',
        ),
      ],
      practice: { label: 'Try the Password Health Checker', path: '/tools/password-health' },
    },
    {
      id: 'emergency-basics',
      title: 'Bonus — Emergency and medical ID',
      outcome: 'Your phone can help rescuers help you, even when locked.',
      guideSlug: 'find-my-iphone-setup',
      quiz: [
        q(
          'What does Emergency SOS do?',
          ['Plays a loud sound', 'Calls 911 quickly from your phone, even locked', 'Posts to Facebook', 'Takes a picture'],
          1,
          'Holding the side button (iPhone) or pressing the power button 5 times (Android) calls emergency services and can text your chosen contacts.',
        ),
        q(
          'A Medical ID shows on your lock screen. What\'s its main purpose?',
          [
            'Show off your photo',
            'Let paramedics see allergies, meds, and your emergency contact when you can\'t speak',
            'Unlock the phone',
            'Call your doctor',
          ],
          1,
          'The Medical ID is readable without the passcode, so first responders get vital info even if you are unconscious.',
        ),
        q(
          'True or false: it\'s worth telling one family member where your phone passcode is written down.',
          ['True — for emergencies only', 'False — never'],
          0,
          'One trusted person with your passcode can get into your phone if something happens to you. Store it somewhere physical, not in the phone itself.',
        ),
      ],
    },
    {
      id: 'week-wrap',
      title: 'Wrap-up — You\'re no longer new',
      outcome: 'Celebrate, bookmark your favorites, and know where to go next.',
      guideSlug: 'organize-digital-life-beginners',
      practice: { label: 'Visit your Skill Tree', path: '/my-path' },
      quiz: [
        q(
          'Which of these is the biggest thing you\'ve gained this week?',
          ['Nothing', 'Confidence — you know how to try things safely', 'A new phone', 'A lot of stress'],
          1,
          'Confidence. Everything else is a tool — you now know you can\'t break your phone by pressing buttons.',
        ),
        q(
          'You still get stuck sometimes. Where do you look first?',
          [
            'Throw the phone',
            'TekSure guides or ask TekBot',
            'Give up',
            'Buy a new phone',
          ],
          1,
          'TekSure\'s guides are written for exactly your stage. TekBot can walk you through the steps live.',
        ),
        q(
          'What next?',
          [
            'Stop learning',
            'Start the Staying Safe Online course',
            'Throw the phone away',
            'Never touch it again',
          ],
          1,
          'The Staying Safe Online course builds directly on this one. You\'re ready.',
        ),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Course 2 — Staying Safe Online: The Essentials (Tier 1–2, 12 lessons)
// ---------------------------------------------------------------------------

const courseStayingSafe: Course = {
  slug: 'staying-safe-online',
  title: 'Staying Safe Online — The Essentials',
  tagline: 'The 12 things every online human needs to know about scams, privacy, and locking down accounts.',
  intro:
    'This is the course TekSure exists for. By the end you will recognize the five most common scam patterns, lock down your email and bank with two-step verification, and know what to do if you slip up.',
  level: 1,
  maxLevel: 2,
  emoji: '',
  certificateTitle: 'Scam Defense — Essentials',
  totalMinutes: 120,
  lessons: [
    {
      id: 'what-is-phishing',
      title: 'Lesson 1 — What is phishing?',
      outcome: 'You can spot a phishing email in under 10 seconds.',
      guideSlug: 'how-to-recognize-phishing-emails',
      practice: { label: 'Practice in the fake inbox', path: '/practice/inbox' },
      quiz: [
        q(
          'Which of these is a classic phishing sign?',
          ['A personalized greeting', 'Generic "Dear Customer"', 'The company\'s logo', 'A long subject line'],
          1,
          'Real companies address you by name. Generic openings are the #1 tell.',
        ),
        q(
          'An email\'s sender shows as "support@amaz0n-billing.support". Red flag?',
          ['No, looks fine', 'Yes — misspelled brand + suspicious domain suffix', 'Yes, because of the dash', 'No, any domain ending counts'],
          1,
          'Scammers register look-alike domains: "amaz0n" with a zero, extra words like "-billing", unusual endings like .support.',
        ),
        q(
          'The safest response to a suspicious "urgent" email from your bank?',
          ['Click the link right away', 'Open your bank\'s app or website yourself and check', 'Reply with your password', 'Forward it to friends'],
          1,
          'Never follow links in urgent emails. Navigate to the bank yourself — if the alert is real, you\'ll see it there.',
        ),
      ],
    },
    {
      id: 'smishing',
      title: 'Lesson 2 — Scam texts (smishing)',
      outcome: 'You can spot smishing texts about packages, taxes, and banks.',
      guideSlug: 'spot-fake-text-smishing',
      practice: { label: 'Practice in the fake phone', path: '/practice/phone' },
      quiz: [
        q(
          'A "USPS" text says your package is held and links to pay $1.99. What is it?',
          ['Real', 'Smishing scam', 'Fine — it is only $1.99', 'A gift'],
          1,
          'USPS does not text payment links. The tiny fee is bait to harvest your card for bigger fraud.',
        ),
        q(
          'Your bank texts about fraud with a link. Best move?',
          ['Tap it right away', 'Call your bank on the number on your card', 'Reply with account number', 'Ignore everything forever'],
          1,
          'Call your bank directly. Real fraud alerts will match what they see; fake ones won\'t.',
        ),
        q(
          '"Click here to win a $500 gift card" from an unknown number. Your move?',
          ['Click', 'Delete and block', 'Reply STOP', 'Forward to friends'],
          1,
          'Delete first, then block. Even "STOP" confirms your number is active to a scammer.',
        ),
      ],
    },
    {
      id: 'url-safety',
      title: 'Lesson 3 — Safe vs unsafe links',
      outcome: 'You can read a URL and spot look-alikes.',
      guideSlug: 'identify-phishing-emails',
      practice: { label: 'Check a link in the URL Safety tool', path: '/tools/url-safety-check' },
      quiz: [
        q(
          'Which URL is really Apple\'s?',
          ['apple-support-login.com', 'appleid.apple.com', 'apple.login-secure.net', 'myapple-id.com'],
          1,
          'The real site always ends in apple.com. Extra words or different endings are the classic look-alike trick.',
        ),
        q(
          'An https:// link guarantees the site is safe.',
          ['True', 'False — it only means the connection is encrypted, not that the site is trustworthy'],
          1,
          'Plenty of scam sites use https now. The padlock means private connection, not honest owner.',
        ),
        q(
          'A bit.ly / tinyurl link in an unexpected email — what do you do?',
          ['Click to see where it goes', 'Treat as suspicious — shorteners hide the real destination', 'Forward to friends', 'Nothing — always safe'],
          1,
          'Shorteners can hide any destination. Never click one you weren\'t expecting; paste it into the URL Safety tool if unsure.',
        ),
      ],
    },
    {
      id: 'strong-passwords',
      title: 'Lesson 4 — Strong, unique passwords',
      outcome: 'You have a method for making passwords you can actually remember.',
      guideSlug: 'create-strong-password',
      quiz: [
        q(
          'What makes a password hard to crack?',
          ['Length + unpredictability', 'A single capital letter', 'Your birthday', 'A favorite word'],
          0,
          'Length is the single biggest factor. Three random words + a number beats "P@ssword1".',
        ),
        q(
          'Using the same password on 10 sites?',
          ['Fine', 'Dangerous — a single breach unlocks all 10'],
          1,
          'Credential stuffing: criminals try leaked passwords on every major site. Unique per site stops it.',
        ),
        q(
          'Should you write passwords down on paper?',
          ['Never', 'Yes, if kept physically safe — better than reusing weak ones'],
          1,
          'A paper list at home is safer than reusing weak passwords online. A password manager is better still.',
        ),
      ],
    },
    {
      id: 'password-manager',
      title: 'Lesson 5 — Let a password manager do the work',
      outcome: 'You understand what a password manager does and whether to use one.',
      guideSlug: 'how-to-use-a-password-manager',
      practice: { label: 'Set one up with our guide', path: '/tools/password-health' },
      quiz: [
        q(
          'What does a password manager do?',
          ['Remembers and fills passwords for you', 'Breaks passwords', 'Sends them to Facebook', 'Mines crypto'],
          0,
          'It stores encrypted passwords and fills them automatically, so you only remember one master password.',
        ),
        q(
          'Your master password should be…',
          ['Short', 'A long unique passphrase you\'ve never used elsewhere'],
          1,
          'Since it unlocks everything, your master password deserves the most effort: long, unique, memorable.',
        ),
        q(
          'If the password-manager company gets hacked, are your passwords exposed?',
          ['Always', 'Not if the company uses zero-knowledge encryption — encrypted data is useless without your master password'],
          1,
          'Reputable managers (Bitwarden, 1Password) encrypt on your device before sending to their servers. Even they can\'t read your vault.',
        ),
      ],
    },
    {
      id: 'two-factor',
      title: 'Lesson 6 — Two-step verification',
      outcome: 'You\'ve added 2FA to your email and one other important account.',
      guideSlug: 'how-to-set-up-two-factor-authentication',
      quiz: [
        q(
          'Two-step verification means…',
          [
            'You need a password twice',
            'After your password, you also prove you have a trusted device',
            'You use two browsers',
            'You sign in twice',
          ],
          1,
          'Even if a scammer steals your password, they still need your phone/authenticator app to get in.',
        ),
        q(
          'Which 2FA is strongest?',
          ['SMS code', 'Authenticator app or hardware key', 'No 2FA', 'Email code'],
          1,
          'SMS can be hijacked via SIM swap. Authenticator apps (Authy, Google Authenticator) or hardware keys are safer.',
        ),
        q(
          'Backup codes — what are they for?',
          [
            'Decoration',
            'To sign in if you lose your phone. Store them somewhere physical.',
            'Sharing with friends',
            'Changing your password',
          ],
          1,
          'If your phone is lost/dead, backup codes let you still sign in. Print them and store somewhere physically safe.',
        ),
      ],
    },
    {
      id: 'data-leaks',
      title: 'Lesson 7 — Check if you\'ve been in a data leak',
      outcome: 'You know what to do when your email appears in a breach.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Run a Digital Footprint Scan', path: '/tools/digital-footprint' },
      quiz: [
        q(
          'Your email shows up in a data breach. First step?',
          ['Buy a new email', 'Change that site\'s password + anywhere you reused it', 'Ignore it', 'Post about it'],
          1,
          'Change the breached site\'s password first, then every other site that reused the same one. Turn on 2FA while you\'re at it.',
        ),
        q(
          'Data breaches usually become public…',
          [
            'Instantly',
            'Months or years after the hack — that\'s why checking periodically matters',
            'Never',
            'Only for famous people',
          ],
          1,
          'Breaches often surface on the dark web years later. Running a check every few months catches exposures you didn\'t know about.',
        ),
        q(
          'After a breach, watch for…',
          [
            'Nothing special',
            'Phishing emails using details from the breach to seem legit',
            'Parade balloons',
            'Mail-in discounts',
          ],
          1,
          'Scammers buy breach lists and craft "Hi [real name], about your account on [real site]" emails. Stay skeptical for a month or two.',
        ),
      ],
    },
    {
      id: 'phone-scams',
      title: 'Lesson 8 — Phone and voicemail scams',
      outcome: 'You can recognize IRS, Medicare, and grandparent scam calls.',
      guideSlug: 'how-to-spot-ai-voice-cloning-scam-calls',
      practice: { label: 'Practice in the Practice Phone', path: '/practice/phone' },
      quiz: [
        q(
          '"IRS agent" calls threatening arrest if you don\'t pay today. Real?',
          ['Real', 'Scam — IRS contacts by mail'],
          1,
          'IRS never calls to threaten arrest. Same goes for Social Security and Medicare.',
        ),
        q(
          'A caller says they are your grandchild in trouble and need money fast. Move?',
          [
            'Send money immediately',
            'Hang up and call the grandchild on their known number',
            'Wire via gift cards',
            'Post on Facebook',
          ],
          1,
          'Grandparent scams prey on panic. A 30-second call to the real person kills the scam.',
        ),
        q(
          'AI voice cloning can copy a loved one\'s voice with…',
          ['Hours of recordings', 'A few seconds of social-media audio', 'A photograph', 'Nothing'],
          1,
          'Modern voice cloning works from seconds of audio. Have a family "code word" to verify real emergencies.',
        ),
      ],
    },
    {
      id: 'social-media-privacy',
      title: 'Lesson 9 — Lock down social media',
      outcome: 'Your Facebook, Instagram, or TikTok leaks less about you.',
      guideSlug: 'hacked-social-media-recovery',
      quiz: [
        q(
          'Should your Facebook profile be public or friends-only?',
          ['Public is fine', 'Friends-only is safer', 'Whatever, doesn\'t matter', 'Public with your phone number'],
          1,
          'Friends-only dramatically reduces how much data scammers, stalkers, and data brokers can harvest.',
        ),
        q(
          'You post "Off to Hawaii for 2 weeks!" from the airport. Risk?',
          ['None', 'Tells thieves your house is empty', 'Saves storage', 'Nothing'],
          1,
          'Burglars read public feeds. Post after you\'re home instead — the photos still land well.',
        ),
        q(
          'Friend requests from strangers with few friends —',
          ['Accept all', 'Decline — usually scammers or fake profiles'],
          1,
          'Empty profiles with only profile pics are almost always fake. They want access to your friends list for scams.',
        ),
      ],
    },
    {
      id: 'fake-reviews-news',
      title: 'Lesson 10 — Fake reviews, fake news',
      outcome: 'You can spot AI-written reviews and misleading news.',
      guideSlug: 'how-to-spot-fake-online-reviews',
      quiz: [
        q(
          'A product has 500 five-star reviews, all posted in one week. Sign?',
          ['Great product', 'Paid or fake reviews'],
          1,
          'Real reviews trickle in over months. A sudden flood from new accounts is a paid-review scheme.',
        ),
        q(
          'An article about a shocking event with no author, no other outlets reporting it, and urgent share buttons —',
          ['Real breaking news', 'Likely misinformation or clickbait'],
          1,
          'Real news is reported by multiple outlets within hours. Unique urgent stories with no bylines are designed to go viral, not to be true.',
        ),
        q(
          'You see a viral post on social media. Should you share it?',
          ['Yes, that\'s what sharing is for', 'Only after checking a second source confirms it'],
          1,
          'A 10-second check (does Reuters or AP have this?) prevents you from amplifying misinformation.',
        ),
      ],
    },
    {
      id: 'backups',
      title: 'Lesson 11 — Back up your life',
      outcome: 'Your photos and key files survive if your phone is lost or broken.',
      guideSlug: 'backup-your-data-guide',
      quiz: [
        q(
          'The "3-2-1 rule" of backup is…',
          [
            '3 copies, 2 different types, 1 off-site',
            '3 phones, 2 chargers, 1 wire',
            '3 passwords, 2 emails, 1 account',
            'Unrelated to backup',
          ],
          0,
          'Three copies total, on two different media (e.g. phone + cloud), with one physically off-site — survives most disasters.',
        ),
        q(
          'Automatic cloud backup (iCloud, Google Photos) is worth turning on because…',
          [
            'It does the backup for you — the most reliable kind',
            'It slows your phone down',
            'It costs thousands',
            'It doesn\'t work',
          ],
          0,
          'Manual backups get forgotten. Automatic backups happen every night whether you remember or not.',
        ),
        q(
          'Ransomware deletes your files unless you pay. The cure?',
          [
            'Pay immediately',
            'Restore from a backup you made before the attack',
            'Buy a new laptop',
            'Throw it away',
          ],
          1,
          'Paying rarely works and funds more attacks. Regular backups make ransomware a nuisance instead of a disaster.',
        ),
      ],
    },
    {
      id: 'if-it-happens',
      title: 'Lesson 12 — If it already happened',
      outcome: 'You have a clear 5-step playbook if you\'ve been scammed.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Run URL Safety on any link you clicked', path: '/tools/url-safety-check' },
      quiz: [
        q(
          'You gave your bank details to a scammer. First call?',
          ['Your bank, on the number on your card', 'The FBI', 'Your neighbor', 'Nobody'],
          0,
          'Banks can freeze the card and reverse charges if you call fast. Minutes matter.',
        ),
        q(
          'Scammer installed "support software" on your computer. Next?',
          [
            'Unplug it from the internet and take it to a local tech',
            'Keep using it',
            'Sell it',
            'Paint it',
          ],
          0,
          'Disconnect first so the scammer can\'t keep working. Then get it cleaned by a trusted tech — or ask TekSure.',
        ),
        q(
          'Report a scam to…',
          ['reportfraud.ftc.gov + local police if money was taken', 'Facebook', 'Nobody', 'Your phone company only'],
          0,
          'The FTC collects scam reports to build cases against scam rings. Always file — even small ones help protect others.',
        ),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Course 3 — Becoming Confident With Video Calls (Tier 1, 6 lessons)
// ---------------------------------------------------------------------------

const courseVideoCalls: Course = {
  slug: 'video-calls-confidence',
  title: 'Becoming Confident With Video Calls',
  tagline: 'From "which button do I press?" to hosting a family call without help.',
  intro:
    'Six short lessons covering FaceTime, Zoom, Google Meet, and Messenger. By the end you will join a call, mute yourself, share photos, and handle the most common problems (no sound, camera black).',
  level: 1,
  emoji: '',
  certificateTitle: 'Video Calls Confidence',
  totalMinutes: 60,
  lessons: [
    {
      id: 'facetime-basics',
      title: 'Lesson 1 — FaceTime basics',
      outcome: 'You can call another iPhone or Mac with one tap.',
      guideSlug: 'facetime-on-ipad',
      quiz: [
        q(
          'FaceTime works with…',
          ['Any phone', 'Apple devices + a FaceTime link for others', 'Only landlines', 'Only Androids'],
          1,
          'Built-in FaceTime works Apple-to-Apple. You can also send a FaceTime link that anyone — Android, Windows — can join.',
        ),
        q(
          'You want to mute yourself. Where is the button?',
          ['Microphone icon on the call screen', 'Power button', 'Home button', 'Volume down'],
          0,
          'The microphone icon (with a slash when muted) lives at the bottom of every video-call app.',
        ),
        q(
          'Your camera is black during a call. Most likely cause?',
          ['Camera is off — tap the camera icon to turn it back on', 'Phone is broken', 'Wi-Fi is off', 'Nothing works'],
          0,
          'Nine times out of ten, the camera button was tapped. Tap again to re-enable.',
        ),
      ],
    },
    {
      id: 'zoom-basics',
      title: 'Lesson 2 — Zoom basics',
      outcome: 'You can join a Zoom call from a link, mute, and leave cleanly.',
      guideSlug: 'free-video-calling-options',
      quiz: [
        q(
          'The doctor sent a Zoom link by email. What do you do?',
          ['Tap the link, install Zoom if asked, and join', 'Forward to friends', 'Call them', 'Delete it'],
          0,
          'Tapping the link opens Zoom (or installs it if needed). "Join with Video" and "Join with Audio" once you\'re in.',
        ),
        q(
          'You don\'t want to be seen while you get dressed. Before joining, tap…',
          ['Stop Video', 'End Meeting', 'Record', 'Chat'],
          0,
          'Stop Video = camera off. You can still hear and be heard. Tap again when you\'re ready to be seen.',
        ),
        q(
          '"Leave Meeting" vs "End Meeting" — which do you use as a guest?',
          ['Leave', 'End', 'Neither', 'Both'],
          0,
          'Leave keeps the call going for everyone else. End closes it for all (only hosts see this).',
        ),
      ],
    },
    {
      id: 'google-meet',
      title: 'Lesson 3 — Google Meet basics',
      outcome: 'You can join a Google Meet link from any device.',
      guideSlug: 'free-video-calling-options',
      quiz: [
        q(
          'Google Meet works best in which browser?',
          ['Any modern one — Chrome, Safari, Edge, Firefox', 'Only Internet Explorer', 'Only Chrome', 'None'],
          0,
          'Google Meet runs in any modern browser. No install needed.',
        ),
        q(
          'You\'re hearing echo on a Meet call. Cause?',
          ['Two devices in the same room with mics open', 'Bad Wi-Fi', 'Broken phone', 'Too many people'],
          0,
          'Two mics in one room cause feedback. Mute one device, or use headphones on both.',
        ),
        q(
          'You need to hand off the link to Grandpa over the phone. It usually looks like…',
          ['meet.google.com/xxx-xxxx-xxx', 'a password', 'a barcode', 'an emoji'],
          0,
          'Google Meet links always start with meet.google.com followed by three word-like codes.',
        ),
      ],
    },
    {
      id: 'messenger-video',
      title: 'Lesson 4 — Messenger & WhatsApp video',
      outcome: 'You can video-call a friend on Messenger or WhatsApp.',
      guideSlug: 'facebook-messenger-video-call',
      quiz: [
        q(
          'Messenger video calls are free because…',
          ['They run over your internet, not phone minutes', 'Facebook pays', 'They aren\'t free', 'They\'re simulated'],
          0,
          'All modern video-call apps use internet data. On Wi-Fi, they cost nothing.',
        ),
        q(
          'WhatsApp video calls are end-to-end encrypted, which means…',
          ['Only you and the other person can see/hear the call', 'Everyone can see', 'Only WhatsApp', 'Nobody'],
          0,
          'End-to-end encryption means the video is unreadable even to WhatsApp itself.',
        ),
        q(
          'A stranger tries to video call you on Messenger. Best response?',
          ['Answer', 'Decline and block if it continues', 'Ignore forever', 'Post about it'],
          1,
          'Decline + block. Sextortion scammers try to video-call, record you, then threaten to share footage.',
        ),
      ],
    },
    {
      id: 'troubleshoot-audio',
      title: 'Lesson 5 — "I can\'t hear anyone"',
      outcome: 'You can fix the three most common audio problems.',
      guideSlug: 'free-video-calling-options',
      quiz: [
        q(
          'Others can\'t hear you. First check:',
          ['Is the mic muted? (Tap the mic icon)', 'Buy a new phone', 'Restart computer', 'Give up'],
          0,
          'Muted mic is the #1 cause. Look for a crossed-out microphone on your call screen.',
        ),
        q(
          'You can\'t hear them. Try:',
          [
            'Turn up volume; check speaker isn\'t on Bluetooth headphones far away',
            'Yell louder',
            'Close the app',
            'Nothing',
          ],
          0,
          'Volume is often turned down, or audio is routed to Bluetooth headphones that aren\'t paired. Check both.',
        ),
        q(
          'Call sounds scratchy / freezing. Usual cause?',
          ['Poor Wi-Fi signal — move closer to router', 'Phone possessed', 'Day of the week', 'Weather always'],
          0,
          'Video calls need steady internet. Move closer to your router or switch to phone data briefly.',
        ),
      ],
    },
    {
      id: 'host-a-call',
      title: 'Lesson 6 — Host your own call',
      outcome: 'You can send a call link to the whole family.',
      guideSlug: 'free-video-calling-options',
      practice: { label: 'Try a test call with TekBot', path: '/ask' },
      quiz: [
        q(
          'Easiest free tool to host up to 100 people for under an hour?',
          ['Zoom free tier or Google Meet', 'Landline', 'Fax', 'Snail mail'],
          0,
          'Both Zoom (40 min limit) and Google Meet (1-hour limit) handle 100 people on the free plan. Perfect for family calls.',
        ),
        q(
          'How do you invite Grandma once the call is created?',
          ['Copy the link and text or email it to her', 'Shout', 'Mail a CD', 'Tell a stranger'],
          0,
          'Every video-call app has a "Copy link" button. Paste it into a text or email.',
        ),
        q(
          'You want a recurring weekly family call. Which tool supports that easily?',
          ['Zoom or Google Calendar with Meet attached', 'Nothing', 'Landline', 'Fax'],
          0,
          'Both can create a weekly recurring link — everyone joins at the same URL each week.',
        ),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Course 4 — Password & Account Mastery (Tier 2, 8 lessons)
// ---------------------------------------------------------------------------

const coursePasswordMastery: Course = {
  slug: 'password-account-mastery',
  title: 'Password & Account Mastery',
  tagline: 'Get off sticky notes, onto a password manager, and turn every important account into a fortress.',
  intro:
    'For people who\'ve been online a while and know they should clean up their passwords. Eight lessons, maybe two weekends of work, and you never forget a password or get breached again.',
  level: 2,
  emoji: '',
  certificateTitle: 'Password & Account Mastery',
  totalMinutes: 80,
  lessons: [
    {
      id: 'inventory',
      title: 'Lesson 1 — Inventory your accounts',
      outcome: 'You have a written list of every account you still use.',
      guideSlug: 'organize-digital-life-beginners',
      quiz: [
        q('The average person has how many online accounts?', ['Under 10', 'Between 80 and 150', 'Exactly 5', 'None'], 1, 'Most adults have 80–150 accounts. Inventory surfaces the forgotten ones that still hold personal data.'),
        q('How do you find forgotten accounts?', ['Search "welcome to" in your email', 'Guess', 'Give up', 'Ask a stranger'], 0, 'Searching "welcome to" or "verify your email" in your inbox uncovers years of account signups.'),
        q('Accounts you don\'t use anymore —', ['Leave them', 'Close them — fewer accounts = fewer breach risks'], 1, 'Every dormant account is a liability. Close the ones you don\'t need.'),
      ],
    },
    {
      id: 'pick-a-manager',
      title: 'Lesson 2 — Pick a password manager',
      outcome: 'You\'ve chosen and installed one.',
      guideSlug: 'how-to-use-a-password-manager',
      quiz: [
        q('Free, open-source, recommended?', ['Bitwarden', 'sticky notes', 'Internet Explorer', 'The trash'], 0, 'Bitwarden is free, open-source, and audited. Great starting point.'),
        q('Apple keychain / Google password manager —', ['Useless', 'Good for one ecosystem, less flexible across devices'], 1, 'Built-in managers are fine if you stay in one ecosystem, but a third-party manager works everywhere.'),
        q('Master password rule:', ['Something you\'ve never typed anywhere else', 'Your first pet\'s name'], 0, 'The master password must be unique — if it\'s leaked elsewhere, everything is exposed.'),
      ],
    },
    {
      id: 'import-existing',
      title: 'Lesson 3 — Import your existing passwords',
      outcome: 'Every saved password is now in your manager.',
      guideSlug: 'google-password-manager-guide',
      quiz: [
        q('Most password managers can import from:', ['Browsers, other managers, CSV', 'Nothing', 'Only Chrome', 'Only Firefox'], 0, 'Every major manager imports from Chrome, Safari, Firefox, other managers, and CSV files.'),
        q('After importing, your browser should…', ['Stop saving passwords — let the manager do it', 'Keep saving duplicates'], 0, 'Turn off browser password-save so the manager is the single source of truth.'),
        q('Old duplicate or leaked passwords in the vault —', ['Replace with fresh unique ones', 'Leave forever'], 0, 'The audit feature flags reused / weak / leaked passwords. Fix them one batch at a time.'),
      ],
    },
    {
      id: 'strong-uniqueness',
      title: 'Lesson 4 — Rotate the weak ones',
      outcome: 'Your top 10 accounts have unique, strong passwords.',
      guideSlug: 'create-strong-password',
      practice: { label: 'Check your email against leaks', path: '/tools/digital-footprint' },
      quiz: [
        q('Priority order for rotating passwords:', ['Email → Bank → Shopping → Social', 'Random order', 'Shopping first', 'Nothing'], 0, 'Email first — it resets everything else. Then money, then anything that touches personal info.'),
        q('A "good" generated password is…', ['20+ random characters', 'Your birthday', 'password123'], 0, 'Password managers generate 20-char strings. You never type them, so length is free.'),
        q('After rotating, consider turning on…', ['Two-step verification', 'Pop-up ads'], 0, 'With a strong unique password PLUS 2FA, even a breach barely matters — attackers can\'t log in.'),
      ],
    },
    {
      id: 'add-2fa',
      title: 'Lesson 5 — Turn on two-step verification everywhere',
      outcome: 'Email, bank, and 3 social accounts have 2FA enabled.',
      guideSlug: 'setup-two-factor-any-account',
      quiz: [
        q('Best form of 2FA for everyday accounts:', ['Authenticator app', 'No 2FA', 'Handwritten letter'], 0, 'Authenticator apps (Authy, Google Authenticator) are free and dodge SMS hijacking.'),
        q('Hardware security keys are worth it for…', ['Email + bank + anything that unlocks money', 'Nothing'], 0, 'Hardware keys like YubiKey are gold-standard for your most critical accounts.'),
        q('Backup codes belong…', ['Printed and stored in a safe', 'In your email', 'On sticky notes on the laptop'], 0, 'Printed + offline. Storing them in the same email they protect defeats the purpose.'),
      ],
    },
    {
      id: 'recovery-plan',
      title: 'Lesson 6 — Recovery plan',
      outcome: 'If your phone is lost, you can still recover every account.',
      guideSlug: 'apple-id-recovery-guide',
      quiz: [
        q('Account recovery email should be…', ['A different, secure email you control', 'Your work email that expires when you leave', 'A stranger\'s email'], 0, 'Recovery should be to a separate secure email that won\'t disappear if you change jobs.'),
        q('Recovery phone should be…', ['Your current mobile, with carrier PIN set', 'An old landline', 'A random number'], 0, 'Set a carrier PIN to prevent SIM-swap attacks that would hijack SMS recovery.'),
        q('Write down master password on paper?', ['Yes, stored somewhere safe and known to one trusted person', 'Never'], 0, 'If you die or are incapacitated, a trusted person needs access. Paper in a safe is better than only-in-your-head.'),
      ],
    },
    {
      id: 'family-sharing',
      title: 'Lesson 7 — Sharing with family safely',
      outcome: 'Household members can share streaming logins without texting passwords.',
      guideSlug: 'how-to-use-a-password-manager',
      quiz: [
        q('Sharing Netflix with your spouse — best way?', ['Password manager shared folder', 'Text it', 'Sticky note on fridge'], 0, 'Password manager sharing updates everyone when you rotate the password. Texting is a one-time leak.'),
        q('Sharing banking logins — OK?', ['Only in a joint account scenario, with 2FA covered', 'Never share'], 0, 'Joint accounts are fine, but make sure both users have 2FA on their own devices.'),
        q('When a family member leaves (divorce, etc.) —', ['Rotate every shared password', 'Leave them unchanged'], 0, 'Rotate everything they had access to. Password manager makes this one-click per password.'),
      ],
    },
    {
      id: 'audit-and-maintenance',
      title: 'Lesson 8 — Quarterly audit',
      outcome: 'You have a 15-minute routine every three months to stay secure.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Run a full Digital Footprint Scan', path: '/tools/digital-footprint' },
      quiz: [
        q('Quarterly audit checklist:', ['Run leak check + rotate flagged passwords + review connected apps', 'Nothing', 'Change all passwords'], 0, 'Check breaches, rotate any flagged passwords, and review which third-party apps have access to your email/social.'),
        q('Connected apps list on Google/Apple shows…', ['Every app that can read your email/calendar/photos', 'Ads only', 'Passwords'], 0, 'Over years, you grant access to dozens of apps. Most go unused. Revoke the ones you don\'t recognize.'),
        q('After this course —', ['You\'re done forever', 'You have a maintenance routine that keeps you ahead of new threats'], 1, 'Security isn\'t a one-time project. Fifteen minutes every quarter beats a 12-hour cleanup after a breach.'),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Course 5 — AI for Everyday Life (Tier 2–3, 10 lessons)
// ---------------------------------------------------------------------------

const courseAiEveryday: Course = {
  slug: 'ai-for-everyday-life',
  title: 'AI for Everyday Life',
  tagline: 'Get real work out of ChatGPT, Copilot, and Gemini without the hype or the pitfalls.',
  intro:
    'A practical tour for people who\'ve heard about AI but never really used it. You\'ll write emails, plan trips, analyze photos, and know exactly where AI is useful and where it lies.',
  level: 2,
  maxLevel: 3,
  emoji: '',
  certificateTitle: 'AI for Everyday Life',
  totalMinutes: 100,
  lessons: [
    {
      id: 'what-is-ai',
      title: 'Lesson 1 — What is ChatGPT actually doing?',
      outcome: 'You can explain AI chat to a friend in one sentence.',
      guideSlug: 'getting-started-with-chatgpt',
      quiz: [
        q('ChatGPT is best described as…', ['A predictive text engine that learned from huge amounts of text', 'A human', 'A calculator', 'A search engine only'], 0, 'It predicts the next word given what you wrote, trained on vast text. Not conscious, not always right.'),
        q('ChatGPT can be confidently wrong. This is called…', ['A hallucination', 'An error', 'A feature', 'A crash'], 0, 'The polite term. Always verify facts that matter — dates, names, quotes, medical claims.'),
        q('Your data in ChatGPT:', ['Treat it as if employees might see it — don\'t paste passwords, SSNs, or confidential work', 'Totally private'], 0, 'Even with privacy settings, don\'t paste anything truly sensitive. Treat it like you\'re talking to a stranger.'),
      ],
    },
    {
      id: 'prompting',
      title: 'Lesson 2 — Good prompts get good answers',
      outcome: 'You know the 5-part prompt recipe.',
      guideSlug: 'chatgpt-everyday-guide',
      quiz: [
        q('A better prompt includes…', ['Role + task + context + format + constraints', 'Just a question', 'Only emojis', 'Nothing'], 0, '"Act as [role], help me [task], here\'s context: [...], output as [format], avoid [...]."'),
        q('"Give me a list of 5 items, each ≤ 10 words" is an example of…', ['Format constraint — makes output predictable', 'Magic', 'Nothing'], 0, 'Constraints stop it from writing a novel when you wanted a list.'),
        q('If the answer is off, the best next step is…', ['Refine the prompt with what was wrong', 'Close the app', 'Swear at it'], 0, 'AI chat is iterative. "That was too formal, try again shorter" works.'),
      ],
    },
    {
      id: 'email-writing',
      title: 'Lesson 3 — Drafting emails',
      outcome: 'You use AI to draft emails faster than from scratch.',
      guideSlug: 'ai-for-email-writing',
      quiz: [
        q('Best email use case:', ['Polite rewrites of messy first drafts', 'Writing your wedding vows'], 0, 'Hand it the raw thought, ask for a polished version. You keep the intent, it fixes the tone.'),
        q('Before sending an AI-drafted email,', ['Read the whole thing — AI can insert weird facts', 'Send instantly'], 0, 'Always read before sending. AI will occasionally add details you didn\'t authorize.'),
        q('Don\'t share by email via AI:', ['Passwords, bank account numbers, legal strategy', 'Hello, how are you'], 0, 'Treat the chat box like a public forum for anything truly private.'),
      ],
    },
    {
      id: 'research-and-summary',
      title: 'Lesson 4 — Summarize and research',
      outcome: 'You can paste articles or documents and get honest summaries.',
      guideSlug: 'ai-meeting-notes',
      quiz: [
        q('AI summaries of long articles are…', ['Usually accurate for structure, sometimes wrong on specific facts — verify numbers', 'Always perfect', 'Always wrong'], 0, 'Great for the shape of a document, less reliable for specific numbers or quotes.'),
        q('For research, always…', ['Ask for sources and verify them', 'Trust blindly'], 0, 'AI can fabricate citations. If sources matter, verify each link yourself.'),
        q('Bigger question: is "ChatGPT said so" a citation?', ['No — it\'s a starting point, not a source', 'Yes'], 0, 'Use AI as a research assistant, not an authority. Cite the source behind the AI answer.'),
      ],
    },
    {
      id: 'image-generation',
      title: 'Lesson 5 — Generate and understand images',
      outcome: 'You can create a reasonable image and explain what AI images can\'t do.',
      guideSlug: 'ai-image-generation-basics',
      quiz: [
        q('Best image prompt format:', ['Subject + style + lighting + mood + composition', 'One word', 'Nothing'], 0, 'Specificity beats vague. "A golden retriever puppy in a sunny kitchen, soft morning light" >> "a dog."'),
        q('AI images often get wrong:', ['Hands, text, and faces of real people', 'Colors'], 0, 'Hands, readable text, and specific people are notorious AI weak spots.'),
        q('Using an AI image of a real person to create a fake —', ['Always unethical and often illegal', 'Fine'], 0, 'Deepfakes of real people are harmful and increasingly illegal (non-consensual intimate imagery, fraud).'),
      ],
    },
    {
      id: 'photos-and-documents',
      title: 'Lesson 6 — AI with your own photos and docs',
      outcome: 'You can analyze a photo or summarize a PDF with AI.',
      guideSlug: 'chatgpt-image-analysis-guide',
      quiz: [
        q('Upload a photo of a plant — ChatGPT will…', ['Try to identify it (check against a real plant ID app if it matters)', 'Refuse'], 0, 'AI can identify common plants, but iNaturalist or PlantNet are specialists — cross-check.'),
        q('Upload a PDF and ask "Summarize in 5 bullets" —', ['Works well for normal docs; verify key numbers', 'Doesn\'t work'], 0, 'Great for academic papers, contracts, manuals — but re-check any specific number or clause.'),
        q('Don\'t upload…', ['Medical records, SSN cards, unredacted contracts', 'Random photos'], 0, 'Even with strong privacy, don\'t upload truly confidential material to consumer AI tools.'),
      ],
    },
    {
      id: 'voice-mode',
      title: 'Lesson 7 — Voice mode and hands-free AI',
      outcome: 'You can have a conversation with ChatGPT while cooking.',
      guideSlug: 'chatgpt-voice-mode-guide',
      quiz: [
        q('Voice mode is great for…', ['Hands-free help cooking, driving, exercising', 'Everything'], 0, 'Voice shines when your hands are busy. Worse for anything that needs precise output.'),
        q('For accuracy, voice mode is…', ['Similar to text — still makes mistakes', 'Perfect'], 0, 'Voice input doesn\'t change the underlying AI. Still verify anything that matters.'),
        q('Privacy concern with voice mode:', ['Background audio may be recorded — be aware of others\' voices', 'None'], 0, 'Voice mode captures whatever your mic hears. Use headphones in public spaces.'),
      ],
    },
    {
      id: 'travel-planning',
      title: 'Lesson 8 — AI for travel planning',
      outcome: 'You can plan a 3-day trip with AI in 15 minutes.',
      guideSlug: 'ai-for-travel-planning',
      quiz: [
        q('Best travel-prompt structure:', ['"Plan [days] in [place] for [traveler type] with [budget]. Prefer [style]. Avoid [things]."', 'Plan a trip'], 0, 'Specifics drive useful output. Budget, pace, interests, accessibility — all matter.'),
        q('Verify AI recommendations by…', ['Cross-checking each restaurant/hotel on Google Maps', 'Trusting entirely'], 0, 'AI will recommend places that don\'t exist or closed years ago. Google Maps is the reality check.'),
        q('For visa/entry rules, use…', ['Official embassy or government sites — not AI', 'AI only'], 0, 'Entry requirements change constantly. Only official sources are current.'),
      ],
    },
    {
      id: 'ai-scams',
      title: 'Lesson 9 — AI-powered scams to watch for',
      outcome: 'You can recognize AI voice clones, deepfakes, and AI-written phishing.',
      guideSlug: 'how-to-spot-ai-voice-cloning-scam-calls',
      practice: { label: 'Practice in the Practice Phone', path: '/practice/phone' },
      quiz: [
        q('AI voice clone of a loved one asking for money — defense?', ['Family safe word known only to you', 'Send the money'], 0, 'A pre-agreed safe word cuts through any voice clone. "What\'s our word?" stops the scam cold.'),
        q('AI-written phishing emails are getting better because…', ['Grammar and tone are now flawless — look at the sender domain instead', 'They\'re worse'], 0, 'You can no longer spot phishing by bad grammar. Check sender domain and links.'),
        q('Deepfake video of a politician saying outrageous things —', ['Assume fake until confirmed by reliable news', 'Share immediately'], 0, 'Video can be fabricated now. Major outlets verify before reporting — wait for them.'),
      ],
    },
    {
      id: 'ai-ethics',
      title: 'Lesson 10 — Using AI thoughtfully',
      outcome: 'You have your own sense of when AI helps and when to stay human.',
      guideSlug: 'ai-ethics-bias',
      quiz: [
        q('AI is at its best when…', ['It augments human judgment, not replaces it', 'It replaces all human work'], 0, 'AI is a tool. The best uses are ones where you stay in charge and use AI to do the tedious parts.'),
        q('Using AI for…', ['Drafts you\'ll review and edit', 'Final medical advice'], 0, 'Drafting: yes. High-stakes final decisions (medical, legal, financial): human professionals only.'),
        q('Be transparent about AI use when…', ['Submitting work where authorship matters (school, journalism, contracts)', 'Drafting your grocery list'], 0, 'Disclose when authorship is part of the deal. Nobody cares about your grocery list.'),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Course 6 — Cybersecurity 101 for Regular People (Tier 3, 15 lessons)
// ---------------------------------------------------------------------------

const courseCyber101: Course = {
  slug: 'cybersecurity-101',
  title: 'Cybersecurity 101 for Regular People',
  tagline: 'Everything a non-technical but motivated person needs to be genuinely hard to hack.',
  intro:
    '15 lessons covering threat models, the full OSINT toolkit, home network hardening, and a personal incident-response plan. No CompTIA certification at the end — only the practical skills that matter.',
  level: 3,
  emoji: '',
  certificateTitle: 'Cybersecurity 101',
  totalMinutes: 180,
  lessons: [
    {
      id: 'threat-model',
      title: 'Lesson 1 — Your threat model',
      outcome: 'You know what you\'re protecting and from whom.',
      guideSlug: 'hacked-social-media-recovery',
      quiz: [
        q('A threat model is…', ['What you\'re protecting, from whom, and what you\'re willing to do about it', 'A password'], 0, 'Good security always starts with "who would attack me, and why?" Answers vary widely.'),
        q('A journalist\'s threat model vs a retiree\'s —', ['Different — journalists face targeted attacks, retirees face broad scams', 'Same'], 0, 'Different threats need different defenses. Broad-spectrum scams vs nation-state attackers are very different problems.'),
        q('Over-engineered security can…', ['Make life worse without real benefit — match defenses to actual threats', 'Always help'], 0, 'A Faraday cage helps no one if the real threat is phishing. Proportional matters.'),
      ],
    },
    {
      id: 'osint-self',
      title: 'Lesson 2 — OSINT yourself',
      outcome: 'You know what a stranger can find about you in 15 minutes.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Run a Digital Footprint Scan', path: '/tools/digital-footprint' },
      quiz: [
        q('OSINT stands for…', ['Open-source intelligence — info gathered from public sources', 'A program'], 0, 'Not a tool — a method. It\'s how stalkers, scammers, and recruiters research you.'),
        q('Main sources of exposed personal info:', ['Data broker sites, social media, breach dumps', 'Only the dark web'], 0, 'Data brokers (Spokeo, WhitePages) and breach databases are the biggest leaks for most people.'),
        q('Goal of self-OSINT:', ['Find what\'s exposed and close it down before someone else uses it', 'Be famous'], 0, 'Opt out of brokers, tighten social privacy, rotate leaked passwords — in that order.'),
      ],
    },
    {
      id: 'data-broker-removal',
      title: 'Lesson 3 — Removing yourself from data brokers',
      outcome: 'You have filed opt-outs with the top 10 brokers.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Use the Data Broker Removal hub', path: '/data-broker-removal' },
      quiz: [
        q('Data brokers sell…', ['Your address, phone, relatives, sometimes more', 'Just your name'], 0, 'The data package is extensive — home address, family members, approximate income, purchase history.'),
        q('Opt-out process is…', ['Manual per broker, sometimes requires ID — takes time', 'Instant'], 0, 'Each broker has their own opt-out URL. Paid services can automate it, but free manual opt-out works.'),
        q('After opt-out, brokers…', ['Often re-populate over months — recheck annually', 'Never come back'], 0, 'New data rolls in from other sources. Annual recheck is the real maintenance.'),
      ],
    },
    {
      id: 'email-hygiene',
      title: 'Lesson 4 — Email hygiene',
      outcome: 'Your email account is hardened and compartmentalized.',
      guideSlug: 'setup-two-factor-any-account',
      quiz: [
        q('Email is your most critical account because…', ['It can reset every other account', 'It\'s fun'], 0, 'Whoever owns your email can reset your bank, your social, your shopping — everything.'),
        q('Separate email addresses for…', ['Banking/financial, newsletters/shopping, friends/family', 'Everything in one'], 0, 'Compartmentalization limits damage. A breach of your shopping inbox doesn\'t expose your bank.'),
        q('Email aliases (+tagging or services like SimpleLogin):', ['Let you give each site a unique address you can disable', 'Are useless'], 0, 'Aliases turn a breach into a single disposable address. Disable it when that site leaks.'),
      ],
    },
    {
      id: 'device-hardening',
      title: 'Lesson 5 — Device hardening',
      outcome: 'Your phone and laptop have the big switches flipped the right way.',
      guideSlug: 'android-system-update-guide',
      quiz: [
        q('Single most important device setting:', ['Automatic OS and app updates on', 'Bluetooth'], 0, 'Unpatched systems are the #1 compromise vector. Auto-update closes them.'),
        q('Disk encryption on your laptop —', ['Should be on (FileVault / BitLocker)', 'Unnecessary'], 0, 'If your laptop is stolen, encryption is the difference between inconvenience and identity theft.'),
        q('Removing unused browser extensions —', ['Shrinks the attack surface', 'Useless'], 0, 'Extensions can read every page you visit. Audit yearly and remove what you don\'t actually use.'),
      ],
    },
    {
      id: 'home-network',
      title: 'Lesson 6 — Harden your home network',
      outcome: 'Your router is on the latest firmware with strong Wi-Fi.',
      guideSlug: 'change-wifi-password-guide',
      quiz: [
        q('Default router admin password —', ['Change immediately', 'Keep it'], 0, 'Default creds are the first thing an attacker tries. Change them, use a password manager to remember.'),
        q('WPA2 vs WPA3 —', ['WPA3 is stronger — use if your router supports it', 'Same thing'], 0, 'WPA3 fixes known weaknesses in WPA2. If available, use it.'),
        q('Router firmware updates —', ['Apply them — most modern routers do this automatically', 'Never needed'], 0, 'Router bugs get patched the same way phone OSes do. Keep auto-updates on.'),
      ],
    },
    {
      id: 'browser-privacy',
      title: 'Lesson 7 — Browser privacy',
      outcome: 'Your browser leaks less to trackers and ad networks.',
      guideSlug: 'hacked-social-media-recovery',
      quiz: [
        q('Browser most focused on privacy out of the box:', ['Firefox or Brave', 'Internet Explorer', 'Bing Browser'], 0, 'Firefox has strong defaults; Brave blocks more ads/trackers by default than anything.'),
        q('Essential browser extension:', ['uBlock Origin', 'A toolbar with lots of features'], 0, 'uBlock Origin blocks most ads, trackers, and a lot of malicious content. Must-have.'),
        q('Private / incognito mode —', ['Hides from your device, not from the internet', 'Total anonymity'], 0, 'Incognito stops local history. Your ISP, employer, and the sites themselves still see you.'),
      ],
    },
    {
      id: 'vpn',
      title: 'Lesson 8 — When a VPN actually helps',
      outcome: 'You know when a VPN is useful and when it\'s marketing.',
      guideSlug: 'connect-public-wifi-safely',
      quiz: [
        q('VPN main real use case:', ['Protecting your traffic on untrusted Wi-Fi', 'Making you anonymous'], 0, 'VPN protects against local network snooping. It moves trust from your coffee shop to your VPN provider.'),
        q('Paid vs free VPN:', ['Paid with audited no-logs policy; most free VPNs sell your data', 'All the same'], 0, 'If you aren\'t the customer, you\'re the product. Free VPNs often log and sell.'),
        q('A VPN makes you anonymous on the internet.', ['False — websites still fingerprint you', 'True'], 0, 'Browser fingerprinting works whether or not a VPN is on. VPN is a privacy tool, not an anonymity one.'),
      ],
    },
    {
      id: 'url-analysis',
      title: 'Lesson 9 — Analyze a suspicious URL',
      outcome: 'Given any link, you can tell if it\'s safe before clicking.',
      guideSlug: 'identify-phishing-emails',
      practice: { label: 'Check any link in the URL Safety tool', path: '/tools/url-safety-check' },
      quiz: [
        q('The true domain is always…', ['Immediately before the first single slash after https://', 'Anywhere'], 0, 'https://apple.com.login-secure.net/x — the real domain is login-secure.net, not apple.com.'),
        q('Red flags in a URL:', ['IP address instead of name, unusual TLD (.xyz, .support), random subdomains', 'All fine'], 0, 'IP-only addresses, unusual TLDs, and long random subdomains are classic phishing signatures.'),
        q('Safe way to preview a shortened URL:', ['unshorten.it or paste into URL Safety tool — never click directly', 'Click to see'], 0, 'Shorteners hide destinations. Preview tools expand them without visiting.'),
      ],
    },
    {
      id: 'phishing-drill',
      title: 'Lesson 10 — Phishing drill',
      outcome: 'You can sort 10 messages correctly in under 2 minutes.',
      guideSlug: 'how-to-recognize-phishing-emails',
      practice: { label: 'Run a full round in the Practice Inbox', path: '/practice/inbox' },
      quiz: [
        q('Most common phishing lure right now:', ['Fake package delivery texts', 'Nigerian prince emails'], 0, 'USPS / FedEx / UPS smishing is currently the highest-volume scam in the US.'),
        q('Spear-phishing vs regular phishing:', ['Spear-phishing is personalized — name, employer, recent activity — harder to spot', 'Same thing'], 0, 'Spear-phishing uses research about you specifically. Defense requires extra care with unusual requests, even from "known" senders.'),
        q('Best response to a suspicious email at work:', ['Report to IT/security team — don\'t delete', 'Delete and forget'], 0, 'Your IT team needs the sample to protect everyone. Use the "Report phishing" button instead of deleting.'),
      ],
    },
    {
      id: 'account-recovery',
      title: 'Lesson 11 — Account recovery preparation',
      outcome: 'You can recover every critical account if your phone is stolen.',
      guideSlug: 'apple-id-recovery-guide',
      quiz: [
        q('Most important thing to set up:', ['Trusted recovery contacts / codes + physical backup of those', 'Just a password'], 0, 'Recovery codes printed and stored physically, plus trusted contacts on Apple/Google, survive device loss.'),
        q('SIM swap defense:', ['Carrier account PIN that\'s not your birthday', 'Nothing'], 0, 'Set a carrier-side PIN so nobody can port your number by social-engineering the phone shop.'),
        q('Yearly test:', ['Try a password reset on one account to make sure your recovery info works', 'Skip'], 0, 'Untested backups fail when you need them. Run a controlled test on one account yearly.'),
      ],
    },
    {
      id: 'payment-security',
      title: 'Lesson 12 — Payment security',
      outcome: 'Your cards, bank, and online payments are locked down.',
      guideSlug: 'hacked-social-media-recovery',
      quiz: [
        q('Virtual card numbers from your bank:', ['Great for online shopping — one-time or merchant-locked', 'Useless'], 0, 'Virtual cards limit damage from merchant breaches. Many banks offer them free.'),
        q('Zelle / Cash App transactions —', ['Treat as cash — rarely reversible', 'Always reversible'], 0, 'Peer-to-peer payment fraud is usually unrecoverable. Only send to people you\'d hand cash to.'),
        q('Credit card vs debit card online:', ['Credit — fraud protection is stronger, debit pulls directly from your bank', 'Debit'], 0, 'Credit-card fraud gets fixed before you pay. Debit fraud is money gone from your account while you fight.'),
      ],
    },
    {
      id: 'privacy-layers',
      title: 'Lesson 13 — Privacy layers',
      outcome: 'You\'ve hidden your phone number and address from the open web.',
      guideSlug: 'hacked-social-media-recovery',
      practice: { label: 'Visit the Privacy Hub', path: '/privacy-hub' },
      quiz: [
        q('Tier 1 privacy (easy):', ['Opt out of data brokers, set social to private, use aliases', 'Disappear entirely'], 0, 'Start with the biggest, easiest wins. Don\'t try to vanish on day one.'),
        q('Tier 2 privacy:', ['Separate phone numbers for sensitive accounts (Google Voice, MySudo)', 'Nothing'], 0, 'A secondary number for banking / social media reduces SIM-swap impact.'),
        q('Tier 3 privacy (paranoid):', ['Separate identity for financial vs public, dedicated devices', 'Not a real thing'], 0, 'At the extreme end, activists and high-profile people split their digital lives entirely.'),
      ],
    },
    {
      id: 'incident-response',
      title: 'Lesson 14 — Personal incident response',
      outcome: 'You have a written plan for what to do when something goes wrong.',
      guideSlug: 'hacked-social-media-recovery',
      quiz: [
        q('First 30 minutes after a breach:', ['Contain: change passwords on affected + dependent accounts, freeze cards', 'Cry'], 0, 'Containment first — stop the bleed. Investigation and reporting come after.'),
        q('Where to report financial fraud:', ['Your bank + reportfraud.ftc.gov + local police report', 'Facebook'], 0, 'Banks can reverse charges; FTC tracks patterns; police report is needed for credit bureaus.'),
        q('After containment, rebuild by…', ['Rotating every credential that touched the compromised account', 'Ignoring it'], 0, 'Assume one compromised credential = many touched. Rotate everything adjacent.'),
      ],
    },
    {
      id: 'staying-current',
      title: 'Lesson 15 — Staying current',
      outcome: 'You have 3 sources that keep you informed without being noisy.',
      guideSlug: 'organize-digital-life-beginners',
      quiz: [
        q('Great single source for breaking security news:', ['Krebs on Security', 'Random Facebook page'], 0, 'Krebs on Security (krebsonsecurity.com) has decades of credibility and plain-language writing.'),
        q('To keep yourself motivated:', ['Set a quarterly calendar reminder to recheck leaks + update devices', 'Hope'], 0, 'Security is maintenance. A 30-minute quarterly check keeps you ahead of almost everything.'),
        q('Community to help others:', ['TekSure forum has people like you asking and answering', 'Alone'], 0, 'Teaching is the best way to consolidate. Help one person a month in the forum.'),
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const COURSES: Course[] = [
  courseSmartphoneFirstWeek,
  courseStayingSafe,
  courseVideoCalls,
  coursePasswordMastery,
  courseAiEveryday,
  courseCyber101,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find(c => c.slug === slug);
}

export function getLessonInCourse(
  courseSlug: string,
  lessonId: string,
): { course: Course; lesson: CourseLesson; index: number; next: CourseLesson | null } | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  const index = course.lessons.findIndex(l => l.id === lessonId);
  if (index < 0) return undefined;
  return {
    course,
    lesson: course.lessons[index],
    index,
    next: course.lessons[index + 1] ?? null,
  };
}

/** Map a UserTier to a numeric course level so we can compare. */
export function tierToLevel(tier: UserTier | null): CourseLevel {
  switch (tier) {
    case 'just-starting':
      return 1;
    case 'getting-comfortable':
      return 2;
    case 'confident':
      return 3;
    case 'power-user':
      return 4;
    default:
      return 1;
  }
}

/**
 * Returns courses ordered so recommended ones (matching the user's tier) come
 * first, followed by easier courses, then harder ones.
 */
export function coursesForTier(tier: UserTier | null): Course[] {
  const level = tierToLevel(tier);
  const inRange = (c: Course) => level >= c.level && level <= (c.maxLevel ?? c.level);
  const primary = COURSES.filter(inRange);
  const rest = COURSES.filter(c => !inRange(c)).sort((a, b) => a.level - b.level);
  return [...primary, ...rest];
}
