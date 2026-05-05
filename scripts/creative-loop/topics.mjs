/**
 * topics.mjs — Curated content library for the creative loop.
 *
 * Each entry is a self-contained guide with US-audience, plain-language content
 * targeting non-technical users and seniors. The creative loop picks the next
 * un-used topic each cycle, generates a batch file, wires it up, and commits.
 *
 * Slugs must be unique across the entire repo — the loop validates this before
 * writing. If a slug already exists, the topic is skipped.
 *
 * To add more topics, append to the array. The loop will pick them up on the
 * next cycle.
 */

export const CREATIVE_TOPICS = [
  {
    slug: 'spot-fake-tech-support-popup-ads',
    title: 'How to Spot a Fake Tech Support Pop-Up (and What to Do)',
    excerpt: 'Pop-ups claiming your computer is infected and asking you to call a phone number are almost always scams. Here is how to recognize and dismiss them safely.',
    category: 'safety-guides',
    tags: ['scam', 'tech-support-scam', 'pop-up', 'safety', 'seniors', 'browser', 'malware'],
    emoji: 'shield',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `If a pop-up appears on your computer claiming your device is infected with a virus, displaying a Microsoft or Apple logo, and asking you to call a phone number — close it immediately. Real Microsoft, Apple, and Google support never display pop-ups with phone numbers. These are scams designed to convince you to call a fake "support" line where someone will ask for remote access to your computer or payment for fake services.

The pop-ups can look very convincing. Some make alarm sounds. Some say "Your computer has been locked." Some claim the FBI is involved. None of these are real. Closing the browser tab or window is the correct response in every case.

If you have already called a number from one of these pop-ups, do not panic. The next steps depend on what you shared. If you only spoke briefly and shared no information or payment, you are likely safe. If you allowed remote access to your computer, you should disconnect the internet, run a malware scan, and change your important passwords from a different device.

(Sources: FTC Consumer Information, consumer.ftc.gov; Microsoft Support, support.microsoft.com; AARP Fraud Watch Network, aarp.org/money/scams-fraud)`,
    steps: [
      {
        title: 'Recognize the warning signs',
        content: 'Real warnings from your computer never include a phone number to call. They never make alarm sounds or block your entire screen. They never claim law enforcement is involved. If a pop-up has any of these features — phone number, urgent countdown, alarm sound, claim of being from the FBI or Microsoft — it is a scam.',
        tip: 'Quick Tip: Microsoft Defender warnings appear in the small Windows Security app, not as full-screen browser pop-ups with phone numbers.',
      },
      {
        title: 'Close the browser without clicking anything in the pop-up',
        content: 'Do not click any button inside the pop-up — not "Close," not "OK," not "X." Some scam pop-ups have buttons that trigger more pop-ups when clicked. Instead, close the entire browser window. On Windows, press Alt + F4. On Mac, press Cmd + Q. On a phone, swipe up from the bottom of the screen and swipe the browser app away.',
        warning: 'If the browser will not close normally, force-quit it. On Windows, press Ctrl + Shift + Esc to open Task Manager, find your browser in the list, and click End Task. On Mac, press Cmd + Option + Esc to open Force Quit, select the browser, and click Force Quit.',
      },
      {
        title: 'Clear your browser cache after the pop-up is gone',
        content: 'Reopen your browser and clear the cache to remove any stored copies of the scam page. In Chrome, click the three-dot menu, then Settings, then Privacy and Security, then Clear browsing data. In Safari, click Safari in the menu bar, then Clear History. In Edge, click the three-dot menu, then Settings, then Privacy.',
      },
      {
        title: 'Run a free malware scan',
        content: 'On Windows, open Windows Security (search for it from the Start menu), click Virus and threat protection, then Quick Scan. On Mac, malware is rare but you can use the free version of Malwarebytes from malwarebytes.com if you are concerned. Both scanners are free and trusted.',
        tip: 'Quick Tip: Avoid downloading unknown "antivirus" tools from search results — many are themselves malware. Stick to Windows Security on Windows, and the official Malwarebytes site on Mac.',
      },
      {
        title: 'Report the scam to the FTC',
        content: 'Reporting helps the Federal Trade Commission build cases against the criminals running these scams. Go to reportfraud.ftc.gov and fill out the short form. You do not need any personal information about the scammer — only a brief description of what happened. This is free and takes about 5 minutes.',
      },
    ],
  },

  {
    slug: 'understand-medicare-online-account',
    title: 'How to Set Up and Use Your Medicare Online Account',
    excerpt: 'Your free Medicare.gov account lets you check claims, order replacement cards, and manage your benefits without phone calls. Here is the step-by-step setup.',
    category: 'government-civic',
    tags: ['medicare', 'health', 'government', 'account', 'seniors', 'benefits'],
    emoji: 'medical',
    difficulty: 'Beginner',
    readTime: '7 min',
    body: `Medicare.gov is the official US government website for Medicare beneficiaries. Setting up a free online account lets you check the status of your claims, order a replacement Medicare card, manage your prescriptions and providers, and keep an eye on your benefits without sitting on hold for an hour.

There is no cost. There are no paid features. The only Medicare website you need is medicare.gov — any site charging fees for Medicare services is unofficial and likely a scam.

Setting up the account takes about 10 minutes. You will need your red, white, and blue Medicare card, your Social Security number, and an email address. If you do not have an email address yet, you can create a free Gmail account at gmail.com first.

(Sources: Medicare.gov, medicare.gov; Social Security Administration, ssa.gov; AARP Medicare Resource Center, aarp.org/health/medicare-insurance)`,
    steps: [
      {
        title: 'Go to medicare.gov and start the account creation',
        content: 'Type medicare.gov directly into your browser address bar. Do not click on Medicare links from emails or search ads, as some of these lead to scam sites. On the official site, click the "Log in or create account" button at the top right of the page, then click "Create an account."',
        warning: 'Real Medicare websites end in .gov. If a site claims to be Medicare but ends in .com or .net, it is not the official site.',
      },
      {
        title: 'Verify your identity with Login.gov or ID.me',
        content: 'Medicare uses two trusted federal identity verification services — Login.gov and ID.me. Either works. You will need to provide your name, address, Social Security number, and Medicare number (from your card). The site may ask you to take a photo of your driver license or state ID with your phone for verification.',
        tip: 'Quick Tip: If you already have a Login.gov account from filing taxes online or another government service, you can sign in with the same email and password.',
      },
      {
        title: 'Create a strong password',
        content: 'Use a password you do not use anywhere else. A good Medicare password is at least 12 characters and uses a mix of words, numbers, and a symbol. Write it down somewhere safe — a notebook in a drawer is fine, as long as no strangers have access to it. Do not share it with anyone, including family members claiming to call from Medicare.',
      },
      {
        title: 'Tour the dashboard and find your claims',
        content: 'After signing in, you land on the My Medicare dashboard. Click "Claims and care" to see every doctor visit and procedure billed to Medicare in the past two years. Each claim shows the date, the provider, what was billed, what Medicare paid, and what you owe. Compare these to the bills you receive from doctors to catch billing errors.',
        tip: 'Quick Tip: Medicare claims appear within 30 to 90 days of the visit. If a claim does not appear after 90 days, contact the doctor office to confirm they billed correctly.',
      },
      {
        title: 'Order a replacement Medicare card if needed',
        content: 'If your card is lost, damaged, or stolen, you can order a replacement online at no cost. From the dashboard, click "Cards and certificates," then "Order a Medicare card." The replacement arrives by mail in about 30 days. While you wait, you can print a temporary version from the same page.',
      },
      {
        title: 'Set up Medicare email alerts',
        content: 'In the Settings menu of your account, you can turn on email alerts for new claims, plan changes, and important Medicare deadlines. This is optional but useful — if you see a claim alert email for a doctor visit you do not remember, that is an early warning sign of medical identity theft.',
      },
    ],
  },

  {
    slug: 'use-iphone-magnifier-as-reading-aid',
    title: 'Use Your iPhone as a Reading Magnifier (Built-In, No App Needed)',
    excerpt: 'Every iPhone has a free, built-in magnifier with a flashlight and contrast modes. Here is how to find it and use it as an everyday reading aid.',
    category: 'health-tech',
    tags: ['iphone', 'accessibility', 'magnifier', 'reading', 'seniors', 'low-vision'],
    emoji: 'magnifier',
    difficulty: 'Beginner',
    readTime: '4 min',
    body: `If you ever struggle to read fine print on a medication bottle, restaurant menu, or product label, your iPhone already has a built-in magnifier that can help. It uses your camera to enlarge what you point at, and it includes a flashlight, freeze-frame, and high-contrast modes designed for low vision.

The Magnifier app comes pre-installed on every iPhone running iOS 14 or later. It does not need to be downloaded. There are no fees, no advertisements, and nothing to learn that you do not already know — if you can take a photo, you can use the magnifier.

This guide also covers how to add a Magnifier shortcut to the back of your phone, so you can launch it instantly by triple-tapping the power button (the side button) — useful if your hands are full and you need to read something quickly.

(Sources: Apple Support — Magnifier accessibility, support.apple.com/en-us/HT211417)`,
    steps: [
      {
        title: 'Find the Magnifier app on your iPhone',
        content: 'The Magnifier app may already be on one of your home screens. Swipe left until you reach the App Library, type "Magnifier" in the search bar at the top, and tap the result. If it is not in the App Library, you can download it free from the App Store — search for "Magnifier" and look for the one made by Apple.',
        tip: 'Quick Tip: Drag the Magnifier icon from the App Library onto your home screen for easy access — touch and hold the icon, then drag it to the position you want.',
      },
      {
        title: 'Open Magnifier and adjust the zoom',
        content: 'Tap the Magnifier icon to open it. Point your iPhone camera at whatever you want to read. Use the zoom slider at the bottom of the screen to make text larger or smaller. The app uses your iPhone\'s real camera, so you can hold it about 6 inches away from a label and zoom in significantly without the image getting blurry.',
      },
      {
        title: 'Turn on the flashlight for dim lighting',
        content: 'In dim restaurants or pharmacies, tap the flashlight icon at the top of the Magnifier screen. This turns on the iPhone\'s LED light to illuminate whatever you are reading. Tap it again to turn it off.',
      },
      {
        title: 'Use the freeze button to hold still images',
        content: 'If your hand shakes or you want to share what you are looking at with a family member, tap the large round button (similar to the camera shutter). This freezes the current frame so you can read it without keeping the iPhone perfectly steady. Tap again to return to live view.',
        tip: 'Quick Tip: Pinch the frozen image to zoom in further — useful for very fine print on prescription labels.',
      },
      {
        title: 'Set up triple-tap shortcut for instant access',
        content: 'For the fastest access, turn on the Magnifier as an Accessibility Shortcut. Open the Settings app, tap Accessibility, scroll to the bottom, and tap Accessibility Shortcut. Tap Magnifier so a checkmark appears. Now triple-tap the side button (or Home button on older iPhones) and the Magnifier opens immediately, even when your phone is locked.',
      },
    ],
  },

  {
    slug: 'safe-online-bill-pay-bank-account',
    title: 'How to Pay Your Bills Online Through Your Bank (Safer Than Mailing Checks)',
    excerpt: 'Your bank\'s free Bill Pay service mails checks for you or pays electronically. Safer than mailing your own checks and free at every major US bank.',
    category: 'online-banking',
    tags: ['bills', 'bank', 'bill-pay', 'safety', 'seniors', 'banking'],
    emoji: 'bank',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Every major US bank — Chase, Bank of America, Wells Fargo, Citi, Capital One, US Bank, and most credit unions — offers a free Bill Pay service through their website and mobile app. You enter the name of the company you want to pay and the amount, and your bank handles the rest. Either they send a paper check on your behalf (free) or they send an electronic payment instantly.

This is significantly safer than writing and mailing checks yourself. Your bank account number does not appear on the check the bank mails — only an internal account reference. And if a Bill Pay check is lost, the bank tracks it and reissues a replacement at no cost to you.

You can pay one-time bills (like an electrician or plumber) or set up recurring monthly payments (like rent, mortgage, utilities, or insurance). For recurring bills, the bank pays automatically each month on the date you choose, so you never miss a payment.

Setting up Bill Pay takes about 10 minutes for the first bill. After that, paying any bill takes about 30 seconds.

(Sources: Federal Reserve — How online bill pay works, federalreserve.gov; FDIC Consumer Resource, fdic.gov; AARP — Online banking safety, aarp.org/money/banking)`,
    steps: [
      {
        title: 'Sign in to your bank\'s website or app',
        content: 'Go to your bank\'s official website (typed directly into the address bar — not from a search result, which can be a fake site) or open your bank\'s mobile app. Sign in with your username and password. If you have not set up online banking yet, your bank can walk you through it by phone — call the number on the back of your debit card.',
        warning: 'Always type your bank\'s web address directly. Searching for "Chase login" can return ad results that lead to phishing sites that look identical to the real bank.',
      },
      {
        title: 'Find the Bill Pay section',
        content: 'Look for "Pay Bills," "Bill Pay," "Payments," or a similar option in the main menu. Most banks group it under Transfers and Payments. Click or tap it to enter Bill Pay.',
      },
      {
        title: 'Add a new payee (the company you want to pay)',
        content: 'Click "Add Payee" or "Add Company." Type the name of the company, like "Comcast" or "PG and E." The bank will usually find the company in its directory and fill in the address automatically. If not, you will need the address from your most recent paper bill. Enter your account number with that company (also on your bill) so the company can match the payment to your account.',
        tip: 'Quick Tip: For payees not in the bank\'s directory (like an individual contractor or your landlord), you can still set them up — the bank will mail them a paper check.',
      },
      {
        title: 'Schedule your payment',
        content: 'Select the payee, enter the amount you want to pay, and pick the date you want it to arrive. Pick a date a few days before the actual due date — paper check payments take 5 to 7 business days, and electronic payments arrive in 1 to 2 business days. Click "Pay" or "Schedule" to confirm.',
      },
      {
        title: 'Set up recurring payments for monthly bills',
        content: 'For bills you pay every month for the same amount — rent, gym membership, life insurance — set them up as recurring. After picking the payee and amount, look for a "Make this recurring" or "Pay every month" option. The bank pays automatically on the same date each month so you never have to remember.',
        tip: 'Quick Tip: Always keep a small buffer in your checking account in case a recurring bill runs unexpectedly. Most banks let you set up email alerts when a Bill Pay payment is sent.',
      },
      {
        title: 'Track your payments',
        content: 'Bill Pay keeps a history of every payment you have sent. From the Bill Pay home page, click "Payment Activity" or "History" to see what was paid, when, and to whom. Match these against your monthly bank statement to confirm everything went through. If a payment shows as sent but the company says they did not receive it, contact your bank — they will trace it for you at no cost.',
      },
    ],
  },

  {
    slug: 'use-find-my-iphone-find-lost-phone',
    title: 'How to Find a Lost iPhone with Find My (Even if it is Off)',
    excerpt: 'Apple\'s free Find My service can locate a lost iPhone even when it is turned off or out of battery. Here is how to use it from any device.',
    category: 'phone-guides',
    tags: ['iphone', 'find-my', 'lost-phone', 'safety', 'apple', 'seniors'],
    emoji: 'iphone',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `If your iPhone is missing — left at a restaurant, dropped on a walk, or stolen — Apple\'s free Find My service can locate it on a map within seconds. It works from any other Apple device or from any web browser at icloud.com.

If your iPhone is recent (iPhone 11 or newer running iOS 15 or later), Find My works even when the iPhone is turned off or has run out of battery. The phone broadcasts a low-power Bluetooth signal that nearby Apple devices pick up and report back to you anonymously.

Find My is on by default on every iPhone sold since 2019, but it never hurts to confirm. This guide walks through finding a lost iPhone, marking it as lost, and erasing it remotely if you cannot recover it.

(Sources: Apple Support — Find My, support.apple.com/find-my)`,
    steps: [
      {
        title: 'Confirm Find My is turned on (do this before you lose your phone)',
        content: 'On your iPhone, open the Settings app, tap your name at the top, then tap Find My. Tap "Find My iPhone" and make sure all three switches — Find My iPhone, Find My network, and Send Last Location — are turned on (green). The "Find My network" switch is the one that lets you find your phone when it is offline.',
      },
      {
        title: 'Open Find My from another device',
        content: 'If you have an iPad or another iPhone, open the Find My app on it. If you do not have another Apple device handy, go to icloud.com on any computer or phone (even an Android phone) and sign in with your Apple ID. Click the Find My icon to open the map.',
      },
      {
        title: 'Locate your iPhone on the map',
        content: 'Your iPhone will appear as a dot on the map at its last known location. The location updates as long as the phone has a network connection. Tap or click the dot to see the address and how recently the location was updated. If the phone is offline or off, the dot shows the last reported location with a small clock icon.',
        tip: 'Quick Tip: If your iPhone is at home but you cannot find it, click "Play Sound" in Find My. The phone makes a loud pinging sound for about a minute even if it is on silent — perfect for finding a phone lost between couch cushions.',
      },
      {
        title: 'Mark your iPhone as Lost',
        content: 'If your iPhone is somewhere outside your home, click "Mark As Lost" in Find My. This locks the phone with your passcode, suspends Apple Pay, and lets you display a custom message on the lock screen — for example, "If found, please call 555-1212." Anyone who finds the phone can see your message and call you, but they cannot use the phone, access your data, or sell it.',
      },
      {
        title: 'Get directions to your iPhone',
        content: 'If the location looks safe to retrieve (a friend\'s house, a restaurant, your car), click "Directions" in Find My to open Apple Maps with directions to the phone. If the location looks unsafe — a stranger\'s home, a part of town you do not visit — do not go yourself. Contact your local police and provide them the location.',
        warning: 'Never confront a thief directly. Police regularly recover stolen phones using the Find My location. Apple Support can verify the police request and assist with recovery.',
      },
      {
        title: 'Erase your iPhone if you cannot recover it',
        content: 'If you are sure your iPhone is gone for good, click "Erase This Device" in Find My. This wipes all your data so a thief cannot access your photos, messages, or accounts. The phone remains locked to your Apple ID even after the erase, so it is useless to anyone else. After erasing, contact your cellular carrier to suspend the line.',
        tip: 'Quick Tip: Even after erasing, Find My continues working — you can still see if the phone comes back online later, which is useful if police later try to recover it.',
      },
    ],
  },

  {
    slug: 'organize-photos-google-photos-albums',
    title: 'Organize a Lifetime of Photos with Free Google Photos Albums',
    excerpt: 'Google Photos can sort your photos by year, person, place, and event automatically. Here is how to use albums to organize a lifetime of memories.',
    category: 'app-guides',
    tags: ['photos', 'google-photos', 'organize', 'albums', 'family', 'seniors'],
    emoji: 'photo',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Google Photos is a free app and website that automatically sorts your photos by date, location, and even the people in them. If you have thousands of photos — from a phone, a digital camera, or scanned old photos — Google Photos can organize them faster than you can imagine.

The free tier includes 15 GB of storage, which is enough for roughly 5,000 high-quality photos. Beyond that, Google offers paid storage starting at $1.99 per month for 100 GB. There is no commitment — you can cancel any time without losing your photos.

Albums in Google Photos are folders you create to group photos by topic — like "Grandkids 2026," "Trip to Yellowstone," or "Mom\'s 80th Birthday." Albums can be shared with family members so everyone can add photos and view them together.

This guide walks through creating an album, adding photos, sharing it with family, and using Google\'s automatic memory features to find old photos by year and place.

(Sources: Google Photos Help — Albums, support.google.com/photos)`,
    steps: [
      {
        title: 'Install Google Photos and back up your phone photos',
        content: 'Download Google Photos from the App Store (iPhone) or Google Play (Android). Open the app and sign in with your Google account — if you do not have one, the app helps you create a free account. The app asks if you want to back up your photos. Tap "Back up & sync" to upload them to your free Google account so they are safe even if your phone is lost.',
        tip: 'Quick Tip: If you mostly take photos with an iPhone, you can use both Apple Photos and Google Photos at the same time. Many people back up to both for extra safety.',
      },
      {
        title: 'Create your first album',
        content: 'In the Google Photos app, tap the Library tab at the bottom (or the menu on a computer). Tap "New album" or the "+" button. Give the album a name like "Family 2026." Tap "Add photos" and select the photos you want in the album by tapping each one. Tap the checkmark when done.',
      },
      {
        title: 'Let Google Photos add photos automatically',
        content: 'In any album, tap the three-dot menu, then "Options," then turn on "Automatically add." Google Photos will add new photos to the album whenever it recognizes a face you choose, a place you specify, or photos within a date range you set. This works well for ongoing albums like "The Grandkids" — every new photo of them gets added automatically.',
      },
      {
        title: 'Share an album with family',
        content: 'Open the album, tap the share icon (an arrow or three connected dots), and choose how to share. You can email a link, share through Messages, or copy a link to paste anywhere. Anyone with the link can view the album, and if you turn on "Collaborate," they can add their own photos too — so a Christmas album can have photos from every family member, all in one place.',
        tip: 'Quick Tip: Shared albums are private by default — only people with the exact link can see them. The link is unguessable and not searchable on Google.',
      },
      {
        title: 'Find old photos with Memories and Search',
        content: 'On the home screen of Google Photos, you will see "Memories" cards — a slideshow of "5 Years Ago Today" or "Best of 2024." Tap any memory to see and share it. To find specific photos, use the search bar at the top — type "beach," "Mom," "Christmas," or any place or event, and Google finds matching photos using AI. It works remarkably well, even on old scanned photos.',
      },
      {
        title: 'Print photos from Google Photos',
        content: 'In the album, tap the three-dot menu, then "Order photos." You can print a photo book of the entire album (starting at about $10), order photo prints to be mailed to your home, or have prints delivered to a CVS, Walmart, or Target near you for same-day pickup. This is a meaningful gift for family members who do not use phones or computers.',
      },
    ],
  },

  {
    slug: 'recognize-grandparent-scam-2026',
    title: 'How to Recognize the Grandparent Scam (and What to Say if You Get the Call)',
    excerpt: 'A frantic call from someone claiming to be your grandchild in trouble is almost always a scam. Here is exactly how to tell — and what to say.',
    category: 'safety-guides',
    tags: ['scam', 'grandparent-scam', 'phone-scam', 'safety', 'seniors', 'family', 'fraud'],
    emoji: 'shield',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `The grandparent scam is one of the most common and emotionally damaging scams targeting seniors in the United States. The Federal Trade Commission tracks tens of thousands of these calls every year, and average losses are now over $9,000 per victim.

The scam usually goes like this: An elderly person receives a phone call. A young voice (sometimes synthesized to sound like their grandchild) cries "Grandma, it\'s me — I\'m in trouble!" An "officer" or "lawyer" then takes the phone and explains that the grandchild has been arrested, in a car accident, or kidnapped, and needs immediate bail or hospital payment. The caller asks for cash, gift cards, wire transfers, or cryptocurrency, and insists the grandparent not call other family members.

Every part of this script is engineered to bypass critical thinking. The crying voice triggers protective instincts. The urgency prevents you from pausing to verify. The instruction not to call others isolates you. AI voice cloning has made these calls dramatically more convincing in 2025 and 2026 — scammers can pull a few seconds of audio from a grandchild\'s social media and produce a near-perfect voice clone.

The good news: a single phrase will reveal the scam every time. This guide walks through how the scam works, what to say to confirm it, and what to do if you have already sent money.

(Sources: FTC Consumer Information — Family emergency scams, consumer.ftc.gov; AARP Fraud Watch Network, aarp.org/money/scams-fraud; FBI Internet Crime Complaint Center, ic3.gov)`,
    steps: [
      {
        title: 'Pause before reacting to the emotion',
        content: 'When someone calls in tears claiming to be a family member, the natural reaction is to help immediately. Scammers count on this. Take a breath. Tell the caller "Wait one moment, please" — and put the phone down for ten seconds. A real grandchild in real trouble can wait ten seconds. A scammer often hangs up.',
      },
      {
        title: 'Ask a question only your real grandchild could answer',
        content: 'Pick something a stranger could not look up online. Not "what is your dog\'s name" (often on Facebook). Try things like "what was the name of the camp you went to in fourth grade" or "what did Grandpa always call you." If the caller hesitates, makes excuses about being too upset to remember, or tries to change the subject — it is a scam. Hang up.',
        tip: 'Quick Tip: Set up a family password word in advance — a word only your immediate family knows. If anyone calls claiming to be a family member in trouble, ask for the family password.',
      },
      {
        title: 'Hang up and call the grandchild back directly',
        content: 'Real or not, hang up. Then call your grandchild directly using the number you already have for them. If they pick up calmly, you know the call was a scam. If they do not answer, call your child (their parent) to verify. This step alone defeats the grandparent scam in nearly every case — scammers cannot fake a real phone number.',
        warning: 'Do NOT use the callback number the scammer gives you. They will route you to an accomplice posing as a hospital, jail, or police department.',
      },
      {
        title: 'Recognize the payment requests that signal a scam',
        content: 'Real bail bondsmen, hospitals, and police departments never ask for payment by gift cards, cryptocurrency, wire transfers (Western Union or MoneyGram), or cash sent by courier. If anyone on a phone call asks for any of these, it is a scam. No exceptions. Hospitals send bills by mail. Police do not collect bail by phone.',
      },
      {
        title: 'If you already sent money, act fast',
        content: 'Wire transfers can sometimes be reversed if reported within hours — call your bank or wire service immediately. Gift card balances can occasionally be frozen if the codes have not been redeemed — call the card issuer (Apple, Google Play, Amazon, etc.) right away. Cryptocurrency transactions are usually unrecoverable, but reporting helps law enforcement track patterns. File a report at reportfraud.ftc.gov and at ic3.gov.',
      },
      {
        title: 'Share what you learned with friends',
        content: 'Talking about scams openly is the best protection. Many seniors feel ashamed to discuss being targeted, which lets scammers operate freely. Tell your friends what to listen for — and let them know if they ever get one of these calls, you will not judge them for asking your advice. Communities that talk about scams have lower victimization rates.',
      },
    ],
  },

  {
    slug: 'set-up-amazon-prime-delivery-prescriptions',
    title: 'Use Amazon Pharmacy to Get Prescriptions Delivered (Often Cheaper than Walgreens)',
    excerpt: 'Amazon Pharmacy offers prescription delivery, often at lower prices than CVS or Walgreens — even without insurance. Here is how to get started.',
    category: 'health-tech',
    tags: ['amazon-pharmacy', 'prescriptions', 'medications', 'delivery', 'seniors', 'health'],
    emoji: 'medical',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Amazon Pharmacy is a fully licensed online pharmacy that delivers prescription medications to your door, often at prices significantly lower than CVS, Walgreens, or Walmart. It accepts most insurance plans (including Medicare Part D) and offers a separate discount program called RxPass for Prime members that includes many common generics for $5 per month total.

Switching to Amazon Pharmacy does not mean giving up your current pharmacy — you can keep one prescription at Walgreens and have another at Amazon. There is no commitment. If a delivery does not arrive on time, Amazon\'s customer service handles it like any other Amazon order.

The main considerations: delivery takes 3 to 5 days, so this works for ongoing medications you take daily, not for urgent prescriptions like antibiotics. And while Amazon\'s prices are often lower, comparing prices on GoodRx is still worthwhile for some medications.

This guide walks through setting up Amazon Pharmacy, transferring an existing prescription, and using insurance or the RxPass program.

(Sources: Amazon Pharmacy, pharmacy.amazon.com; RxPass details, amazon.com/rxpass; GoodRx price comparison, goodrx.com)`,
    steps: [
      {
        title: 'Sign in at pharmacy.amazon.com',
        content: 'You can use Amazon Pharmacy with any Amazon account — Prime membership is not required for the main pharmacy (only for the RxPass discount program). Go to pharmacy.amazon.com and sign in with the same email and password you use for amazon.com.',
      },
      {
        title: 'Add your insurance information',
        content: 'Click "Add insurance" and enter the details from your insurance card — Member ID, Group Number, BIN, and PCN. All four are printed on the card. If you have Medicare Part D, the card from your Part D plan (not the red, white, and blue Medicare card) is the right one to enter.',
        tip: 'Quick Tip: If you do not have insurance, skip this step. Amazon Pharmacy will show you cash prices and let you compare them to discount programs like SingleCare or GoodRx coupons, which Amazon often accepts.',
      },
      {
        title: 'Transfer a prescription from your current pharmacy',
        content: 'On the Amazon Pharmacy home page, click "Transfer a prescription." Type the medication name. Amazon walks you through providing your current pharmacy\'s name, your prescription number (from the bottle label), and your prescriber\'s name. Amazon contacts your old pharmacy and pulls the prescription over — usually within 1 business day. You can keep filling at your old pharmacy until the transfer is complete.',
      },
      {
        title: 'Compare prices across plans',
        content: 'Amazon Pharmacy automatically shows you three prices side-by-side: your insurance price, the cash price (no insurance), and the Prime member price. Pick whichever is cheapest. For some medications, paying cash is actually less than the insurance copay — Amazon shows you both so you can choose.',
      },
      {
        title: 'Schedule delivery',
        content: 'Standard shipping is free for Amazon Pharmacy. For Prime members, free 2-day shipping is included. Pick a delivery date and address. The package arrives in plain packaging without anything visible from outside about the contents. Refrigerated medications arrive in insulated boxes with cold packs.',
        warning: 'For controlled medications (like ADHD or pain medications), an adult must sign for the package. Plan to be home or have someone available.',
      },
      {
        title: 'Consider RxPass if you take multiple generics',
        content: 'If you take 2 or more generic medications regularly, Prime members can subscribe to RxPass for $5 per month. RxPass covers about 60 common generic medications — including blood pressure, cholesterol, diabetes, and depression medications. There is no per-prescription copay; the $5 is your only cost. Check the RxPass medication list at amazon.com/rxpass to see if your prescriptions are covered.',
      },
    ],
  },

  {
    slug: 'use-google-maps-favorite-saved-places',
    title: 'Save Your Favorite Places in Google Maps (and Share the List with Family)',
    excerpt: 'Google Maps can save your doctor, pharmacy, favorite restaurant, and more in one tap — and share the list with family. Here is how.',
    category: 'app-guides',
    tags: ['google-maps', 'navigation', 'saved-places', 'seniors', 'family'],
    emoji: 'map',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `Google Maps lets you save addresses for places you visit often — your doctor\'s office, the pharmacy, your favorite restaurant, your daughter\'s house — so you can navigate to them with one tap instead of typing the address each time.

Saved places sync across your phone, tablet, and computer (anywhere you sign in to your Google account). You can also share a list of places with family members — useful for handing off "the list of places I drive to" if you ever stop driving and need someone else to know where things are.

There are no fees for any Google Maps feature. The app comes pre-installed on most Android phones and is a free download on iPhone.

This guide covers saving a place, organizing places into lists, sharing a list, and using "Home" and "Work" shortcuts that show up at the top of every search.

(Sources: Google Maps Help, support.google.com/maps)`,
    steps: [
      {
        title: 'Open Google Maps and search for a place',
        content: 'On your phone, open Google Maps. In the search bar, type the name or address of the place you want to save — for example, "Memorial Hospital" or "1234 Oak Street." Tap the result that matches.',
      },
      {
        title: 'Tap Save and pick a list',
        content: 'On the place detail page, look for the "Save" button (a bookmark icon). Tap it. Google offers a few default lists — Favorites, Want to go, Starred places — and you can create new lists by tapping "+ New list." Pick a list and the place is saved.',
        tip: 'Quick Tip: Create lists like "Doctors," "Pharmacies," and "Restaurants" to keep things organized. You can save the same place to multiple lists.',
      },
      {
        title: 'Set Home and Work for one-tap directions',
        content: 'In Google Maps, tap your profile icon (top right), then "Settings," then "Edit home or work." Type your home address and your work address (or your most common destination, like a senior center). After this, when you open Google Maps, "Home" and "Work" appear at the top of the screen — tap either for instant directions.',
      },
      {
        title: 'Share a list with family',
        content: 'Open the Saved tab (bottom of the screen on iPhone, or in the menu on Android). Tap a list. Tap the three-dot menu in the upper right and pick "Share list." You can copy a link, send by Messages, email, or any other app. Anyone with the link can view the list. They can also save it to their own Google Maps if they have an account.',
      },
      {
        title: 'View your saved places anytime',
        content: 'In Google Maps, tap the "Saved" tab. You see all your lists. Tap any list to see the places. Tap any place to get directions, see hours, or call the business. This is a fast way to find phone numbers for your doctor or pharmacy without searching the internet.',
      },
      {
        title: 'Print or export your list for offline reference',
        content: 'On a computer, sign in to Google Maps at maps.google.com. Click the menu (three lines) in the upper left, then "Your places," then the list you want. Click the three-dot menu and choose "Export list to KML." The downloaded file works in many other map apps. You can also print the page from your browser for a paper backup.',
      },
    ],
  },

  {
    slug: 'use-iphone-emergency-sos-feature',
    title: 'How Emergency SOS Works on iPhone (and How to Test It Safely)',
    excerpt: 'iPhones have built-in Emergency SOS that calls 911, alerts your family, and shares your location — even if you cannot speak. Here is how it works.',
    category: 'safety-guides',
    tags: ['iphone', 'emergency', 'sos', '911', 'safety', 'seniors', 'medical'],
    emoji: 'sos',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Every iPhone sold since 2017 has Emergency SOS — a built-in safety feature that can call 911, share your location, and notify emergency contacts you have set up, all without you needing to dial. It works in two ways: a button shortcut you press, and an automatic crash and fall detection that triggers when sensors detect an impact.

If you have an iPhone 14 or newer, Emergency SOS also works via satellite when you have no cellular signal — useful in remote areas or during cellular outages.

This guide explains how Emergency SOS works, how to set up your medical ID and emergency contacts, and how to test the feature without accidentally calling 911 (a common worry for new users).

(Sources: Apple Support — Emergency SOS, support.apple.com/HT208076; American Red Cross emergency preparedness, redcross.org)`,
    steps: [
      {
        title: 'Set up your Medical ID first',
        content: 'Medical ID is a profile that emergency responders can view from your locked iPhone — including your medical conditions, medications, blood type, and allergies. To set it up, open the Health app on your iPhone. Tap your profile icon at the top, then Medical ID, then Edit. Fill in the relevant fields. Make sure "Show When Locked" is turned on so paramedics can see it without your passcode.',
      },
      {
        title: 'Add Emergency Contacts',
        content: 'Still in the Medical ID screen, scroll down to "Emergency Contacts." Tap "Add Emergency Contact" and select someone from your address book. Pick the relationship (Spouse, Daughter, Son, etc.). When Emergency SOS is triggered, your iPhone sends a text message to these contacts with your location and a note that an emergency call has been placed.',
        tip: 'Quick Tip: Add at least two emergency contacts — your spouse and an adult child, for example — so if one is unreachable, the other gets the alert.',
      },
      {
        title: 'Learn the SOS button shortcut',
        content: 'On any iPhone, press and hold the side button (right side, the long button) plus either volume button at the same time. After a moment, the Emergency SOS slider appears. Slide it to call 911. If you keep holding the buttons instead of releasing, the iPhone calls 911 automatically after a countdown.',
        warning: 'Do NOT actually slide to call 911 unless you are in a real emergency. Releasing the buttons before the countdown ends cancels the call.',
      },
      {
        title: 'Practice safely without calling 911',
        content: 'To practice, press and hold side button + volume up briefly — only until the SOS slider appears — then release the buttons immediately. The slider disappears and no call is placed. Do this a few times so the motion is muscle memory. You will not accidentally call 911 by releasing early — the call only goes through after the slider is dragged or after a several-second auto-call countdown.',
      },
      {
        title: 'Turn on Crash Detection (if available)',
        content: 'iPhone 14 and later have Crash Detection — they automatically call 911 if sensors detect a severe car crash. To check, open Settings, tap Emergency SOS, and confirm "Call After Severe Crash" is on. False alarms are rare but possible, especially during certain amusement park rides — the iPhone gives you 10 seconds to cancel before the call goes through.',
      },
      {
        title: 'Know how to use Satellite SOS (iPhone 14 and newer)',
        content: 'If you are out of cellular range during an emergency, the iPhone 14, 15, and 16 can connect via satellite to send a text-based emergency message. To use it, dial 911. If your iPhone cannot reach a cell tower, it offers "Emergency Text via Satellite." Tap it and follow the on-screen prompts to point your phone at the satellite. This service is free for the first two years of iPhone ownership.',
      },
    ],
  },

  {
    slug: 'free-tax-preparation-aarp-irs',
    title: 'Free Tax Preparation for Seniors: AARP, IRS, and Online Options',
    excerpt: 'Several free tax prep services help seniors file taxes — AARP Tax-Aide, IRS VITA, and free online software. Here is how to choose and use them.',
    category: 'government-civic',
    tags: ['taxes', 'aarp', 'irs', 'free', 'seniors', 'tax-aide', 'volunteer'],
    emoji: 'document',
    difficulty: 'Beginner',
    readTime: '7 min',
    body: `Filing taxes is free for most seniors if you know where to look. The AARP Foundation runs Tax-Aide, the largest free tax prep service in the United States, with 5,000 locations. The IRS funds Volunteer Income Tax Assistance (VITA) sites at libraries, senior centers, and community organizations. And major tax software companies offer free filing for simple returns through the IRS Free File program.

You do not need to be wealthy to qualify. Most of these programs serve everyone with under $79,000 in income (the IRS Free File limit), and AARP Tax-Aide has no income or age limit at all — though they prioritize taxpayers age 50 and older.

The volunteers who staff these programs are IRS-certified each year. They cannot answer every tax question — complex situations like rental property income, self-employment, or estate income usually require a paid preparer — but for the typical retiree with Social Security, pension, and a simple investment account, these services handle the entire return.

This guide walks through the three best options and how to choose between them.

(Sources: AARP Foundation Tax-Aide, aarpfoundation.org/taxaide; IRS Free File, irs.gov/freefile; IRS VITA Locator, irs.gov/vita)`,
    steps: [
      {
        title: 'Choose AARP Tax-Aide for in-person help',
        content: 'AARP Tax-Aide is the most popular free tax prep program for seniors. Volunteers meet with you in person (or virtually) and prepare your return start to finish. There is no income limit and you do not need to be an AARP member. Find a Tax-Aide location at aarpfoundation.org/taxaide or call 888-227-7669. Sites run from late January through April 15, and many require appointments — book early.',
        tip: 'Quick Tip: Bring a photo ID, your Social Security card (or a reliable record of the number), all 1099 and W-2 forms, last year\'s tax return, and any letters from the IRS. The volunteer cannot start without these.',
      },
      {
        title: 'Use IRS VITA for community-based help',
        content: 'Volunteer Income Tax Assistance (VITA) sites are run by community organizations with IRS funding. The income limit is around $64,000 (2026). VITA sites are often at libraries, churches, and community centers, and many have evening or weekend hours. Find one at irs.gov/vita or call 800-906-9887. Most VITA sites also have Spanish-speaking volunteers.',
      },
      {
        title: 'Try IRS Free File if you prefer to do it yourself',
        content: 'IRS Free File is a partnership between the IRS and major tax software companies (TaxAct, TaxSlayer, FreeTaxUSA, and others). If your income is $79,000 or less, you can use the full version of major tax software for free — including direct e-file with the IRS. Go to irs.gov/freefile and click "Choose an IRS Free File Trusted Partner." Each partner has slightly different age and state rules.',
      },
      {
        title: 'Use the IRS Direct File pilot if eligible',
        content: 'Starting in 2026, the IRS offers Direct File — free filing directly through the IRS website, no third-party software needed. It is available in 25 states (check at directfile.irs.gov). It supports W-2 income, Social Security, retirement income, and standard deductions. It does NOT support self-employment, rental income, or itemized deductions yet — those need a different option.',
      },
      {
        title: 'Avoid paid services that pretend to be free',
        content: 'Some tax software companies advertise "free" filing but charge for state returns, "audit protection," or "premium" features that are usually unnecessary. If a screen ever asks for credit card information during a tax return that should be free, stop and review what you are being charged for. Real free programs (AARP Tax-Aide, VITA, IRS Free File partners, IRS Direct File) never ask for payment.',
        warning: 'Companies like H&R Block and TurboTax advertise free filing but often upgrade you to paid versions automatically when you have anything beyond a simple return. The IRS Free File program is the safest "free" path because the IRS audits the partners.',
      },
      {
        title: 'Keep a copy of everything for at least 3 years',
        content: 'After filing, save your return and supporting documents for at least 3 years. Save them on paper in a folder, and as a PDF on your computer if you can. Tax-Aide and VITA volunteers will give you a printed copy at the end of your appointment. Most software lets you download a PDF after filing.',
      },
    ],
  },

  {
    slug: 'use-spotify-pandora-free-music-streaming',
    title: 'Listen to Free Music with Spotify or Pandora (No Subscription Needed)',
    excerpt: 'Both Spotify and Pandora offer free music streaming with ads. Here is how to set up either one and listen to thousands of songs at no cost.',
    category: 'entertainment',
    tags: ['music', 'spotify', 'pandora', 'streaming', 'free', 'seniors', 'entertainment'],
    emoji: 'music',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `If you have ever wanted to listen to your favorite music without buying CDs or paying for a satellite radio subscription, both Spotify and Pandora offer completely free music streaming on phones, tablets, and computers. The only cost is short audio commercials between songs — similar to AM/FM radio.

Spotify\'s free tier lets you listen to any artist or playlist on a computer, and gives you "shuffle play" of an artist on a phone — meaning you cannot pick a specific song on your phone, but you can listen to a continuous stream of an artist\'s music. Pandora\'s free tier is similar, with ads between songs.

Both services have paid options ($10 to $12 per month) that remove ads and add features. But the free tiers work fine for most people.

This guide covers Spotify, the most popular service, with notes on Pandora at the end.

(Sources: Spotify Help, support.spotify.com; Pandora Help, help.pandora.com)`,
    steps: [
      {
        title: 'Download Spotify on your phone or computer',
        content: 'On your phone, open the App Store (iPhone) or Google Play (Android), search for "Spotify," and install the official Spotify app — look for the green logo. On a computer, go to spotify.com and click "Download." The app and the desktop player are both free.',
      },
      {
        title: 'Create a free Spotify account',
        content: 'Open Spotify and tap "Sign up free." You can use your email address, your Facebook account, or your Apple ID. Pick whichever is easiest. There is no credit card required for the free account — only the paid Premium plan asks for payment.',
        warning: 'If a screen ever asks for credit card information, you are signing up for Premium ($10.99/month), not Free. Look for "Get Spotify Free" or "Continue with the free version."',
      },
      {
        title: 'Search for music',
        content: 'Tap the Search button (magnifying glass at the bottom). Type an artist (like "Frank Sinatra" or "Willie Nelson"), an album, or a specific song. Tap any result to start listening. On a computer, you can play any song you choose. On a phone, the free version plays songs in shuffled order from that artist or playlist.',
      },
      {
        title: 'Save artists and playlists you like',
        content: 'When you find an artist you enjoy, tap "Follow" to save them. When you find a playlist (Spotify makes thousands of curated playlists like "Classic Country" or "60s Rock"), tap the heart icon to save it. Saved items appear in "Your Library" at the bottom of the app, so you can find them again later.',
      },
      {
        title: 'Try Daily Mix and Discover Weekly',
        content: 'Spotify\'s computer-generated playlists are surprisingly good. "Daily Mix" learns from what you listen to and creates a personalized playlist that updates each day. "Discover Weekly" updates every Monday with 30 new songs Spotify thinks you might like based on your listening history. Find both in the "Made For You" section.',
      },
      {
        title: 'Connect Spotify to a smart speaker',
        content: 'If you have an Amazon Echo, Google Nest, or Apple HomePod, you can play Spotify hands-free. Open the smart speaker app on your phone (Alexa, Google Home, or Apple Home), find Spotify in the list of available services, and link your Spotify account. After that, you can say "Alexa, play Frank Sinatra on Spotify" or "Hey Google, play Willie Nelson."',
        tip: 'Quick Tip: Pandora works on most smart speakers in exactly the same way. Pandora is great for people who prefer to set a "radio station" based on a single song or artist, rather than browsing a music library.',
      },
    ],
  },

  {
    slug: 'use-walmart-grocery-pickup-delivery',
    title: 'Walmart Grocery Pickup and Delivery for Seniors: Step-by-Step',
    excerpt: 'Walmart Grocery lets you order groceries online and pick them up at the store or have them delivered. Here is how to use it on a phone.',
    category: 'app-guides',
    tags: ['walmart', 'groceries', 'shopping', 'pickup', 'delivery', 'seniors'],
    emoji: 'cart',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Walmart Grocery is a free service that lets you order groceries online and either pick them up at the store (drive-up service) or have them delivered to your home. Pickup is free with no minimum order. Delivery has a delivery fee that varies but is often around $7 to $10, with no minimum order.

For seniors who have difficulty walking through a large store or pushing a heavy cart, this service can be life-changing. You browse from your phone or computer, build your cart, pay online, and either drive to the store and have an employee load it into your trunk, or have a driver bring it to your door.

The same prices apply as in-store. There is no markup for using the online service.

This guide walks through ordering groceries with the Walmart app on a smartphone, the easiest method for most seniors. The same process works on a computer at walmart.com.

(Sources: Walmart Grocery Help, walmart.com/help)`,
    steps: [
      {
        title: 'Download the Walmart app',
        content: 'Open the App Store (iPhone) or Google Play (Android) and search for "Walmart." Install the official Walmart app — look for the yellow Walmart logo with the spark/sun symbol. Open the app and sign in with an existing Walmart.com account, or tap "Create Account" to make one. You will need an email address and a phone number.',
      },
      {
        title: 'Set your store and pickup or delivery preference',
        content: 'When you first open the app, it asks for your ZIP code or location. It then shows your nearest Walmart store. Tap to confirm. At the top of the screen, look for a "Pickup" or "Delivery" toggle — pick whichever you prefer. Pickup means you drive to the store; delivery means a driver brings it to you.',
      },
      {
        title: 'Browse and add groceries to your cart',
        content: 'Tap the search bar and type the name of a product, like "milk" or "bread." Or tap "Departments" to browse categories like Dairy, Produce, Meat, Frozen, Pantry. Tap any item to see details and tap "Add" to put it in your cart. The cart icon at the bottom of the screen shows how many items you have.',
        tip: 'Quick Tip: Use "Reorder" to quickly buy items you bought before. After your first few orders, the app remembers your usual groceries and you can rebuild a typical week\'s shopping in 5 minutes.',
      },
      {
        title: 'Pick a pickup time or delivery window',
        content: 'When your cart is ready, tap "Checkout." The app asks you to choose a time slot. Pickup slots are usually 1-hour windows; delivery slots are 1 to 2 hours. The earliest pickup is often 1 to 2 hours after you place the order. Pick whatever works best for you.',
      },
      {
        title: 'Pay with a saved card or EBT',
        content: 'Tap "Add a payment method." Walmart Grocery accepts credit and debit cards, Walmart gift cards, and EBT (food assistance) cards for eligible items. Enter your card information once and the app saves it for future orders. Tap "Place Order" to confirm.',
        warning: 'For EBT, only food items are covered — you cannot use EBT for the delivery fee or for non-food items. The app shows you which items in your cart are EBT-eligible during checkout.',
      },
      {
        title: 'Pick up or receive your groceries',
        content: 'For pickup: when your order is ready, the app sends a notification. Drive to the store, park in any spot marked "Pickup," and tap "I\'m Here" in the app. An employee brings out your groceries and loads them in your trunk — you do not need to leave your car. For delivery: a driver brings the groceries to your door at the time you scheduled. You do not need to be home, but you may need to sign for items requiring an ID like medications.',
      },
    ],
  },

  {
    slug: 'set-up-amazon-echo-alexa-seniors',
    title: 'Set Up an Amazon Echo (Alexa) for the First Time',
    excerpt: 'An Amazon Echo lets you ask questions, set reminders, play music, and call family with your voice. Here is how to set one up the first time.',
    category: 'smart-home',
    tags: ['alexa', 'echo', 'amazon', 'voice', 'smart-home', 'seniors'],
    emoji: 'cart',
    difficulty: 'Beginner',
    readTime: '7 min',
    body: `An Amazon Echo is a small speaker that listens for the wake word "Alexa" and responds to your voice. You can ask it the weather, set timers in the kitchen, play music, hear the news, get a reminder to take medication, or even call family members hands-free. The smaller models cost about $50, and Amazon often runs sales bringing them to $25.

Setting up an Echo for the first time can feel intimidating, but the steps are short. The hardest part is the Wi-Fi connection, and the Alexa app on your phone walks you through it step by step.

Privacy considerations: The Echo only sends recordings to Amazon when it hears the wake word "Alexa." You can review and delete these recordings any time in the Alexa app. You can also turn off the microphone with a physical button on top of the Echo if you want privacy during a conversation.

(Sources: Amazon Echo Setup Guide, amazon.com/alexa-help; AARP — Smart speakers for seniors, aarp.org/home-family/personal-technology)`,
    steps: [
      {
        title: 'Plug in the Echo and download the Alexa app',
        content: 'Plug the Echo into a wall outlet using the included power cord. The light ring will turn orange after a few seconds — this means it is ready to set up. On your phone, open the App Store (iPhone) or Google Play (Android), search for "Amazon Alexa" (the official app, not a third-party copycat), and install it.',
        tip: 'Quick Tip: Place the Echo somewhere central in your home — a kitchen counter, living room end table, or hallway. It needs to hear you from across the room, so a closet or behind a TV is not ideal.',
      },
      {
        title: 'Sign in with your Amazon account',
        content: 'Open the Alexa app and sign in with the same Amazon account you use to shop on amazon.com. If you do not have an Amazon account, the app helps you create a free one. You do not need Amazon Prime to use most Echo features.',
      },
      {
        title: 'Add the Echo as a new device',
        content: 'In the Alexa app, tap "Devices" at the bottom of the screen, then the "+" button at the top right, then "Add Device," then "Amazon Echo," then pick the model you have (Echo Dot, Echo Show, etc.). The app guides you through connecting the Echo to your home Wi-Fi.',
      },
      {
        title: 'Connect to your home Wi-Fi',
        content: 'When prompted, type your Wi-Fi password. The Echo connects to your network. You can find your Wi-Fi password printed on a sticker on the bottom or back of your home internet router if you do not remember it. The setup also asks if you want to use Bluetooth or hands-free calling — turn both on for the full experience.',
        warning: 'Wi-Fi passwords are case-sensitive. If setup fails, double-check capitalization and that you have not mistaken a "1" for an "l" or "0" for an "O."',
      },
      {
        title: 'Try your first commands',
        content: 'Once the light ring turns blue and Alexa speaks a welcome message, try a few commands: "Alexa, what time is it?" "Alexa, what is the weather today?" "Alexa, set a 10-minute timer." "Alexa, play classical music." Speak naturally — Alexa understands full sentences, not only keywords.',
      },
      {
        title: 'Set up Drop In to call family',
        content: 'Drop In lets you call family members\' Echos hands-free, like an intercom. Each family member needs the Alexa app installed. In the app, tap Communicate, then Contacts, then turn on Allow Drop In. Then you can say "Alexa, drop in on Mom" to instantly start a voice call. Useful for checking on family members daily without making them pick up a phone.',
      },
    ],
  },

  {
    slug: 'connect-iphone-to-bluetooth-hearing-aids',
    title: 'How to Pair Bluetooth Hearing Aids to Your iPhone',
    excerpt: 'Made for iPhone hearing aids stream phone calls, music, and FaceTime audio directly to your ears. Here is how to pair them with your iPhone.',
    category: 'health-tech',
    tags: ['hearing-aids', 'bluetooth', 'iphone', 'accessibility', 'seniors', 'mfi'],
    emoji: 'iphone',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `Modern Bluetooth hearing aids — including most models from Phonak, Oticon, ReSound, Starkey, and Widex — pair directly to an iPhone. When paired, phone calls, music, FaceTime audio, and even iPhone notifications stream straight into your hearing aids without an extra accessory. The audio quality is significantly better than holding the phone to your ear, and there is no echo or feedback.

This works only with hearing aids that are labeled "Made for iPhone" (sometimes shown as MFi). Most premium hearing aids sold since 2018 support it. Older or basic hearing aids may need a separate streaming accessory from the manufacturer.

Pairing takes about 5 minutes the first time. After that, the hearing aids reconnect automatically every time you turn them on within range of your iPhone.

(Sources: Apple Support — Hearing aids, support.apple.com/HT201466; Hearing Loss Association of America, hearingloss.org)`,
    steps: [
      {
        title: 'Make sure your hearing aids are charged or have fresh batteries',
        content: 'Pairing requires both hearing aids to be on and have a strong battery. If one battery dies during pairing, you may need to start over. Charge rechargeable hearing aids fully or insert fresh batteries.',
      },
      {
        title: 'Open Settings → Accessibility → Hearing Devices',
        content: 'On your iPhone, open the Settings app. Scroll down and tap Accessibility. Under the Hearing section, tap Hearing Devices. Make sure Bluetooth is turned on (you can also enable it in the main Settings menu under Bluetooth).',
      },
      {
        title: 'Open the battery doors of both hearing aids briefly',
        content: 'Open and close the battery door (or turn the hearing aids off and on) on both hearing aids. This puts them into pairing mode for about 60 seconds. The iPhone scans for them and they should appear under "MFi Hearing Devices" on the iPhone screen.',
        tip: 'Quick Tip: If they do not appear, try moving the hearing aids closer to the iPhone and repeating the battery door step. Some older models require a button press instead — check your hearing aid manual.',
      },
      {
        title: 'Tap the hearing aids to pair them',
        content: 'When your hearing aids appear (showing your name + Left and Right), tap them. The iPhone may show a pairing request — tap Pair on each one. After a moment, both hearing aids show as connected.',
      },
      {
        title: 'Test by playing audio or making a call',
        content: 'Play a short song or call a friend. The audio should come through your hearing aids automatically. You can adjust volume using the volume buttons on the iPhone, or by pressing buttons on the hearing aids themselves. The iPhone\'s Control Center also has a Hearing Devices control where you can adjust each ear independently.',
      },
      {
        title: 'Set up a triple-click shortcut for hearing controls',
        content: 'In Settings → Accessibility → Accessibility Shortcut, turn on "Hearing Devices." Now triple-click the side button to instantly access volume and program controls for your hearing aids — useful in restaurants or other noisy places when you want to switch quickly.',
      },
    ],
  },

  {
    slug: 'use-zoom-doctor-telehealth-visit',
    title: 'How to Join a Telehealth Doctor Visit on Zoom or Phone',
    excerpt: 'Most doctors now offer video appointments. Here is how to join one on Zoom, or use a phone call instead if video is not working.',
    category: 'health-tech',
    tags: ['telehealth', 'zoom', 'doctor', 'video-visit', 'medicare', 'seniors'],
    emoji: 'medical',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `A telehealth visit is a doctor appointment by video instead of in person. The doctor sees you on a screen, you see the doctor on yours, and you have the same kind of conversation you would have in their office — without the drive or the waiting room.

Most major insurance plans, including Medicare, cover telehealth visits the same as in-person appointments. The most common platform doctors use is Zoom (or a hospital-branded version of it like Zoom for Healthcare).

If you are intimidated by video, do not be — most telehealth platforms also let you join by phone call only, with no video at all. The doctor still gets the visit, your insurance still covers it, and you do not need any technology you do not already have.

This guide walks through joining a Zoom video visit step by step, with notes on phone-only fallback.

(Sources: Medicare.gov — Telehealth, medicare.gov/coverage/telehealth; Zoom Help Center, support.zoom.us; Health and Human Services telehealth resources, telehealth.hhs.gov)`,
    steps: [
      {
        title: 'Find the link or phone number from the doctor office',
        content: 'A few days before the appointment, you should receive an email or text message from the doctor office with a meeting link (like zoom.us/j/123456) or a phone number to call. If you have not received this 24 hours before the visit, call the office and ask for the link or phone number to be re-sent.',
        warning: 'Verify the email is from the doctor office (real domain like @stanfordhealth.org or @kaiserpermanente.org). Phishing emails sometimes pretend to be telehealth invitations to steal information.',
      },
      {
        title: 'Test your camera and microphone the day before',
        content: 'Visit zoom.us/test in any browser to run a free test meeting. Zoom checks your camera, microphone, and speaker. This takes about 2 minutes and confirms everything works before the actual appointment. If something is not working, you have time to fix it without delaying your visit.',
        tip: 'Quick Tip: A laptop with a built-in camera works best because it props up and shows your face from the right angle. A phone or tablet works too — set it on a stable surface so you do not have to hold it.',
      },
      {
        title: 'Click the Zoom link 5 minutes early',
        content: 'About 5 minutes before your appointment time, click the Zoom link in your email or text. Your browser may prompt you to download Zoom — say Yes. The first time you join Zoom, it installs in the background and takes a minute. After that, joining is instant.',
      },
      {
        title: 'Allow camera and microphone access',
        content: 'Zoom asks permission to use your camera and microphone. Click Allow on both. You may also see a button to "Join with computer audio" — click it. You will see yourself on screen and hear a tone when the doctor joins.',
      },
      {
        title: 'Wait in the virtual waiting room until the doctor arrives',
        content: 'Most doctor offices use a Zoom feature called Waiting Room. You see a screen that says "The host will let you in soon." When the doctor is ready, you will be admitted to the meeting and the doctor appears. The visit proceeds like a normal appointment — describe your symptoms, ask questions, take notes.',
      },
      {
        title: 'Join by phone if video does not work',
        content: 'Every Zoom invitation also includes a phone number you can call to join by audio only. Look in the email for "Or by Phone" — it lists a phone number and a meeting ID. Call the number, type the meeting ID followed by # when prompted, and you join the visit by voice. Your insurance covers this the same as a video visit.',
        tip: 'Quick Tip: Save the office\'s telehealth phone number in your phone contacts. The same number usually works for any future telehealth visit.',
      },
    ],
  },

  {
    slug: 'cancel-subscriptions-iphone-android',
    title: 'How to Find and Cancel Hidden Subscriptions on Your Phone',
    excerpt: 'Apple and Google make subscriptions easy to start and surprisingly hard to find. Here is how to see every active subscription and cancel any of them.',
    category: 'phone-guides',
    tags: ['subscriptions', 'iphone', 'android', 'apple', 'google', 'money', 'seniors'],
    emoji: 'document',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `Apple and Google bill many app subscriptions through your Apple ID or Google Play account. This is convenient — you do not have to enter a credit card for each app — but it also means subscriptions can pile up where you cannot easily see them. Many people are surprised to find $5 here, $10 there, all charged to a card they barely remember signing up for.

Both Apple and Google have a single screen that lists every active subscription. From that screen, you can cancel any of them with two taps. The cancellation always takes effect at the end of the current billing period, so you keep access to anything you already paid for.

This guide shows where to look on iPhone and Android, and what to do about lifetime subscriptions or "free trials" that auto-renew.

(Sources: Apple Support — Subscriptions, support.apple.com/HT202039; Google Play Help — Subscriptions, support.google.com/googleplay; FTC consumer information on auto-renewal, consumer.ftc.gov)`,
    steps: [
      {
        title: 'On iPhone: open Settings → your name → Subscriptions',
        content: 'On your iPhone, open the Settings app. Tap your name at the very top of the screen. On the next screen, tap Subscriptions. This shows every active subscription billed through Apple, the price, and the next charge date.',
      },
      {
        title: 'On Android: open Google Play → menu → Payments and subscriptions',
        content: 'On Android, open the Google Play Store app. Tap your profile icon at the top right. Tap Payments and subscriptions, then Subscriptions. This shows every active subscription billed through Google.',
      },
      {
        title: 'Review what is active and how much it costs',
        content: 'Look through the list carefully. Common surprises: trial subscriptions that turned into paid ones (Apple TV+, HBO Max, Peacock), apps you tried once and forgot about, dating apps, weather apps, and photo apps. The screen shows the price for each.',
        tip: 'Quick Tip: Add up everything you see. Many people are paying $50 or more per month in subscriptions they do not actively use. Cancelling unused ones is one of the fastest ways to lower your monthly expenses.',
      },
      {
        title: 'Tap any subscription to cancel it',
        content: 'Tap a subscription to see details. Scroll down and tap "Cancel Subscription" (Apple) or "Cancel subscription" (Google). Confirm. You will keep access until the end of the current billing period, then the app stops charging.',
      },
      {
        title: 'Watch for "free trial" auto-renewals',
        content: 'Many apps offer a free trial that requires a credit card and auto-renews into a paid subscription unless you cancel before the trial ends. To prevent surprise charges, the moment you start a trial, immediately go to Subscriptions and tap Cancel. You keep access for the full trial period, but the auto-renewal is turned off.',
        warning: 'Some companies (notably gym apps and dating apps) make cancellation deliberately confusing inside the app itself. The Apple/Google subscription screens always work, regardless of what the app shows you.',
      },
      {
        title: 'Check your bank statement for direct subscriptions',
        content: 'Some subscriptions are not billed through Apple or Google — instead, you give your credit card directly to the company (like Netflix, Spotify Family, or many magazine subscriptions). Review your monthly credit card statement for any recurring charges. Cancel directly with the company by calling their support number.',
      },
    ],
  },

  {
    slug: 'set-up-iphone-passwords-app',
    title: 'How to Use the Built-In Passwords App on iPhone',
    excerpt: 'iPhone now includes a free Passwords app that saves and auto-fills your passwords across all your devices. Here is how to set it up.',
    category: 'safety-guides',
    tags: ['passwords', 'iphone', 'apple', 'security', 'seniors', 'icloud'],
    emoji: 'shield',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Starting with iOS 18, every iPhone includes a free Passwords app that saves your passwords, fills them in automatically when you sign into websites and apps, warns you about reused or compromised passwords, and syncs everything to your other Apple devices through iCloud.

This means you do not need to remember every password. You only need to remember your iPhone passcode (or use Face ID/Touch ID), and the Passwords app handles the rest. It is also a free alternative to paid password managers like 1Password or LastPass — for many people, it covers everything they need.

Passwords saved here are encrypted with end-to-end encryption, meaning even Apple cannot read them. Only you, signed into your Apple ID with Face ID or your passcode, can unlock the vault.

(Sources: Apple Support — Passwords app, support.apple.com/passwords)`,
    steps: [
      {
        title: 'Find the Passwords app on your iPhone',
        content: 'On any iPhone running iOS 18 or later, the Passwords app is pre-installed. Swipe left until you reach the App Library, search for "Passwords," and tap it. The first time you open it, the iPhone asks for Face ID, Touch ID, or your passcode to unlock the vault.',
      },
      {
        title: 'Let Passwords import what you already have',
        content: 'If you have ever asked Safari to save a password, those passwords are already in the Passwords app. Look at the list — you may be surprised how many are there. The app organizes them alphabetically by website name.',
      },
      {
        title: 'Add a password manually',
        content: 'Tap the "+" button to add a password. Enter the website (like "chase.com"), your username, and the password. Save. Next time you visit that website on your iPhone or Mac, the iPhone offers to fill in your saved password automatically.',
        tip: 'Quick Tip: Use a unique password for every website. The Passwords app suggests a strong unique password every time you sign up for a new site — tap "Use Strong Password" when offered. The app remembers it for you.',
      },
      {
        title: 'Turn on Sign in with Apple where possible',
        content: 'Many websites offer "Sign in with Apple" as a sign-in option. This skips passwords entirely — Apple verifies your identity and the website never sees your real email address. Where available, use this option to reduce your password list.',
      },
      {
        title: 'Set up sharing with a spouse or family member',
        content: 'For shared accounts (like a streaming service or shared utilities), tap a password, then "Share with Family." Family members you have added in your iCloud Family Sharing group can view and use the shared password. Useful when one spouse manages most accounts but the other needs occasional access.',
      },
      {
        title: 'Review security warnings',
        content: 'Tap "Security" inside the app. The Passwords app shows you any passwords that have been part of known data breaches (when companies accidentally leak passwords), reused across sites, or weak. Update these one by one — the app provides a link directly to each website\'s password change page.',
      },
    ],
  },

  {
    slug: 'use-iphone-voice-typing-dictation',
    title: 'Use Voice Typing on iPhone to Send Text Messages and Emails Faster',
    excerpt: 'Speak instead of type — iPhone\'s built-in voice typing is fast, accurate, and works in any app where you can type. Here is how.',
    category: 'phone-guides',
    tags: ['dictation', 'voice-typing', 'iphone', 'accessibility', 'seniors', 'speech'],
    emoji: 'iphone',
    difficulty: 'Beginner',
    readTime: '4 min',
    body: `Typing on a phone keyboard can be slow and frustrating, especially with arthritis or stiff fingers. iPhone has built-in voice typing that lets you speak whatever you want to write, and the iPhone types it for you in real time. It works in text messages, emails, Notes, search bars — anywhere you can type.

The voice recognition is excellent (much better than it was a few years ago) and works without an internet connection on iPhone 12 and newer. Punctuation is added automatically, and you can also speak punctuation marks aloud ("comma," "period," "question mark") for full control.

You do not need to download anything or set up an account. Voice typing is free and built in.

(Sources: Apple Support — Dictation, support.apple.com/HT207525)`,
    steps: [
      {
        title: 'Turn on Dictation in Settings',
        content: 'Open Settings → General → Keyboard. Make sure "Enable Dictation" is turned on (green). This is on by default on most iPhones, but worth checking.',
      },
      {
        title: 'Tap any text field and look for the microphone icon',
        content: 'In any app where you can type — Messages, Mail, Notes, Safari search — tap to start typing. On the on-screen keyboard, look for a small microphone icon in the bottom right corner. Tap it. The microphone fills the keyboard area and starts listening.',
      },
      {
        title: 'Speak your message naturally',
        content: 'Speak as you would talk to a friend. The iPhone types what you say in real time. You can pause, think, and continue — voice typing waits up to 60 seconds before stopping. Tap anywhere to stop early.',
        tip: 'Quick Tip: Voice typing now adds punctuation automatically based on the rhythm of your speech. You do not have to say "period" or "comma" — but you can if you prefer more control.',
      },
      {
        title: 'Speak special characters when needed',
        content: 'For things voice typing cannot guess, speak them. Examples: "new line" creates a line break; "smiley face" inserts a 🙂; "exclamation point" inserts !; "ellipsis" inserts ...; "all caps" before a word makes it ALL CAPS. These are useful in emails or longer messages.',
      },
      {
        title: 'Edit with your finger after dictating',
        content: 'After voice typing, your usual keyboard returns. You can correct any word the iPhone misheard by tapping it and selecting an alternate from the suggestions, or tapping and editing manually. Most short messages need no edits.',
      },
      {
        title: 'Use voice typing in any language you speak',
        content: 'iPhone can dictate in over 30 languages including Spanish, French, Italian, German, Mandarin, and Japanese. Add a language in Settings → General → Keyboard → Keyboards → Add New Keyboard. After adding, the microphone icon respects whichever keyboard is currently active.',
      },
    ],
  },

  {
    slug: 'print-from-iphone-android-airprint',
    title: 'How to Print from Your Phone (No Computer Needed)',
    excerpt: 'You can print directly from any modern iPhone or Android phone to most Wi-Fi printers — no computer required. Here is how.',
    category: 'how-to',
    tags: ['print', 'airprint', 'iphone', 'android', 'wifi', 'seniors', 'printer'],
    emoji: 'document',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `Most home printers sold in the past several years can print directly from a phone over Wi-Fi — no computer needed. iPhones use a feature called AirPrint. Android phones use Google Cloud Print or a manufacturer app (HP Smart, Epson iPrint, Canon Print, Brother iPrint).

The setup is usually simple: as long as your phone and printer are on the same home Wi-Fi network, your phone can find the printer automatically. After the first time, printing takes about three taps.

If your printer is older than ~2018, it may not support AirPrint. In that case, the manufacturer app or a free service like Printer Pro can usually still get you printing. This guide focuses on the AirPrint and HP Smart paths since they cover the majority of home printers.

(Sources: Apple Support — AirPrint, support.apple.com/HT201311; HP Smart app, hp.com/go/mobileprinting)`,
    steps: [
      {
        title: 'Make sure your printer is on and connected to Wi-Fi',
        content: 'Turn on your printer. Look at its small screen or status lights — it should show that it is connected to your home Wi-Fi network. If not, follow the printer\'s setup card or call your printer manufacturer\'s support line. The printer must be on the same Wi-Fi network as your phone.',
      },
      {
        title: 'On iPhone: open the document, photo, or page you want to print',
        content: 'Open whatever you want to print — a photo in Photos, an email in Mail, a recipe in Safari. Tap the Share button (a square with an arrow pointing up). Scroll down through the menu and tap Print.',
      },
      {
        title: 'iPhone: pick your printer and settings',
        content: 'On the Print Options screen, tap "Select Printer." Your iPhone scans the Wi-Fi network and shows all available printers. Tap your printer. You can choose how many copies, page range, color or black-and-white, and paper size. Tap Print at the top right.',
        tip: 'Quick Tip: After you print to a printer once, the iPhone remembers it. Future prints default to the same printer automatically.',
      },
      {
        title: 'On Android: install the manufacturer app',
        content: 'Most Android phones can print without an app, but the manufacturer app gives you more options. For HP printers, install HP Smart from Google Play. For Epson, install Epson iPrint. For Canon, install Canon Print. For Brother, install Brother iPrint&Scan. Open the app and follow the setup — it finds your printer automatically.',
      },
      {
        title: 'Android: print from any app',
        content: 'In any app, tap the share or menu button and choose Print. If you do not see Print, tap "Print" inside the manufacturer app instead — most have a "Print Anything" or "Documents" section where you can browse to the file you want.',
      },
      {
        title: 'Troubleshoot if the printer does not appear',
        content: 'If your phone cannot find the printer, check that both are on the same Wi-Fi network (look at your phone\'s Wi-Fi settings — they should show the same network name). Restart the printer (turn off, wait 30 seconds, turn on). Restart your phone. If it still fails, call your printer manufacturer support — most offer free phone help.',
      },
    ],
  },

  {
    slug: 'reduce-spam-calls-iphone-android',
    title: 'How to Block and Silence Spam Calls on iPhone and Android',
    excerpt: 'Spam calls are exhausting. iPhone and Android have free, built-in tools that filter most of them out. Here is how to turn them on.',
    category: 'safety-guides',
    tags: ['spam', 'phone-calls', 'iphone', 'android', 'block', 'safety', 'seniors'],
    emoji: 'shield',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `Most Americans now receive several spam calls per day — fake car warranty offers, fake Medicare offers, fake IRS calls, and worse. Both iPhone and Android have built-in features that send unknown callers to voicemail automatically, label suspected spam in red, and let you block specific numbers. Used together, these tools can cut spam call volume by 80 to 90 percent.

This guide covers the four free tools that work for nearly everyone: Silence Unknown Callers (iPhone), Caller ID warnings (both phones), Do Not Disturb / Focus Mode, and your carrier\'s free spam-blocking service (which works for both iPhone and Android).

You do not need a paid app. Apps like RoboKiller and Hiya have free tiers, but the built-in tools are usually enough.

(Sources: FTC — Stop unwanted calls, consumer.ftc.gov/articles/how-stop-unwanted-calls; AT&T ActiveArmor, att.com/activearmor; Verizon Call Filter, verizon.com/solutions-and-services/call-filter)`,
    steps: [
      {
        title: 'On iPhone: turn on Silence Unknown Callers',
        content: 'On your iPhone, open Settings → Phone → Silence Unknown Callers. Turn the switch on (green). Now any caller whose number is not in your contacts, recent outgoing calls, or Siri suggestions goes straight to voicemail. Real callers can still leave a message; spam callers usually do not.',
        tip: 'Quick Tip: This may also silence legitimate calls from doctors, pharmacies, or delivery drivers. Either add their numbers to your contacts in advance, or check your voicemail regularly for any messages.',
      },
      {
        title: 'On Android: turn on Caller ID and Spam Protection',
        content: 'On most Android phones with the Google Phone app, open the Phone app → tap the three-dot menu → Settings → Caller ID and spam → turn on "See caller and spam ID" and "Filter spam calls." Suspected spam calls now appear in red and are sent to voicemail automatically.',
      },
      {
        title: 'Sign up for your carrier\'s free spam blocking',
        content: 'AT&T offers ActiveArmor (free at att.com/activearmor). Verizon offers Call Filter (free at verizon.com/call-filter). T-Mobile offers Scam Shield (free at t-mobile.com/scamshield). Each is free at the basic tier and uses carrier network-level data to block known scam numbers before they ring your phone. Sign up through the carrier\'s app or website.',
      },
      {
        title: 'Block specific recurring callers',
        content: 'When a spam call gets through, you can block that exact number so it never rings again. On iPhone, tap the red "i" next to the call in your Recents list, scroll to the bottom, and tap "Block this Caller." On Android, long-press the number in the call log and tap Block.',
      },
      {
        title: 'Add yourself to the National Do Not Call Registry',
        content: 'Visit donotcall.gov and enter your phone number. Legitimate telemarketers are required to stop calling within 31 days. This does not stop scammers — they ignore the law — but it cuts the volume from real telemarketers significantly. The registration is permanent and free.',
      },
      {
        title: 'Never call back or press buttons during a spam call',
        content: 'If a spam call gets through and you answer, hang up immediately. Do not press buttons even if the message says "press 9 to be removed." Pressing anything confirms your number is active and triggers more calls. Hang up. Likewise, never call back a missed call from an unfamiliar number — many spam scams rely on call-back charges.',
        warning: 'Some scams imitate familiar local area codes ("neighbor spoofing"). If you do not recognize the number, let it go to voicemail.',
      },
    ],
  },

  {
    slug: 'fix-slow-windows-pc-2026',
    title: 'Make a Slow Windows PC Faster (No Cost, No Risky Tools)',
    excerpt: 'A slow Windows PC is usually fixed in 30 minutes with three free, built-in steps. Skip the "PC Cleaner" ads — these tools come with Windows.',
    category: 'windows-guides',
    tags: ['windows', 'slow-pc', 'speed', 'cleanup', 'seniors', 'free'],
    emoji: 'document',
    difficulty: 'Beginner',
    readTime: '7 min',
    body: `If your Windows PC has gotten slower over time, you do not need to buy a new computer or pay for "PC Optimizer" software. Most slowness comes from three things: too many programs starting automatically when Windows boots, too little free disk space, and too many old temporary files cluttering the system. Each is fixable in a few minutes with tools built into Windows.

Avoid downloading "PC Cleaner" or "Speed Booster" tools advertised online. Many of them are bundled with adware or actively make problems worse. The Windows tools described in this guide are safe, free, and made by Microsoft.

This guide is written for Windows 10 and 11. The exact menus look slightly different in each version, but the steps are similar.

(Sources: Microsoft Support — Improve PC performance, support.microsoft.com/help/4577042; Windows 11 maintenance tips, microsoft.com/windows)`,
    steps: [
      {
        title: 'Restart your computer (do not skip this)',
        content: 'It sounds basic, but most people leave their Windows PC running for weeks at a time. Each program you open uses memory; some never fully release it. Restarting clears everything. Click the Start menu → Power button → Restart. Wait for the PC to fully boot up before testing again.',
      },
      {
        title: 'Disable programs that auto-start with Windows',
        content: 'Many apps install themselves to launch when Windows boots, slowing the boot process. Press Ctrl + Shift + Esc to open Task Manager. Click the "Startup apps" tab. You see a list of programs that run automatically. For each one you do not need (Spotify, Adobe, manufacturer "helpers" — leave Microsoft items alone), right-click and choose Disable. They still work when you launch them manually; they no longer slow boot.',
        warning: 'Do not disable anything labeled "Microsoft," "Windows Defender," or anything you do not recognize. When in doubt, leave it on. Disabling system items can break Windows.',
      },
      {
        title: 'Free up disk space with Storage Sense',
        content: 'A nearly-full hard drive slows Windows dramatically. Open Settings → System → Storage. Turn on "Storage Sense" — this automatically deletes temporary files and old downloads. Then click "Cleanup recommendations" to see what is using space. Common big offenders: old Windows update files, recycle bin, downloads folder.',
      },
      {
        title: 'Run Windows Defender to scan for malware',
        content: 'Windows comes with a free, excellent antivirus called Microsoft Defender. Open the Start menu, search for "Windows Security," and click it. Click "Virus and threat protection," then "Quick scan." Let it finish — about 2 to 5 minutes. If anything is found, follow the prompts to remove it.',
        tip: 'Quick Tip: For deeper checks, click "Scan options" and run a Microsoft Defender Offline scan once a year. This restarts the PC and scans before Windows fully loads, catching things that hide while Windows is running.',
      },
      {
        title: 'Turn off animations to feel snappier',
        content: 'Windows animations look nice but slow things down on older PCs. Open Settings → Accessibility → Visual effects. Turn off "Animation effects." The PC instantly feels faster, especially when opening menus and switching apps.',
      },
      {
        title: 'Update Windows fully',
        content: 'Open Settings → Windows Update → Check for updates. Install everything available, including optional driver updates. Microsoft regularly fixes performance issues in updates. After installing, restart and test again.',
      },
    ],
  },

  {
    slug: 'use-airpods-with-iphone-mac-and-tv',
    title: 'How to Use AirPods with iPhone, Mac, Apple TV, and Even Some Hearing Aids',
    excerpt: 'AirPods do more than music. They work as hearing assistants, take phone calls hands-free, and stream TV audio privately. Here is how.',
    category: 'app-guides',
    tags: ['airpods', 'apple', 'bluetooth', 'hearing', 'iphone', 'mac', 'apple-tv', 'seniors'],
    emoji: 'iphone',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `AirPods are Apple\'s wireless earbuds. They pair instantly with any Apple device signed into your Apple ID, switch automatically between devices, and include features that go beyond music. Recent models can amplify quiet conversations like a hearing aid (a feature called Conversation Boost), let you hear announcements at a museum, and stream Apple TV audio privately so you can watch a late-night show without disturbing anyone.

AirPods 4 with active noise cancellation cost about $179. Older AirPods 3 are around $129. AirPods Pro 2 are $249. All three work the same with iPhones — the differences are mostly in noise cancelling and how they fit (in-ear vs. open-style).

This guide covers the most useful AirPods features beyond music alone — pairing, switching devices, hearing assistance, and TV audio.

(Sources: Apple Support — AirPods, support.apple.com/airpods)`,
    steps: [
      {
        title: 'Pair AirPods with your iPhone (10 seconds)',
        content: 'Open the AirPods case lid near your iPhone (the case must be charged). Within seconds, an animation appears on the iPhone screen showing the AirPods. Tap "Connect." Pairing is done. The AirPods now appear on every Apple device signed into the same Apple ID — you do not need to pair them again to your Mac, iPad, or Apple TV.',
      },
      {
        title: 'Switch between devices automatically',
        content: 'AirPods know which Apple device is most active. If you take a call on your iPhone while watching Apple TV, AirPods switch to the iPhone automatically. When the call ends, they switch back to the TV. You can also force a switch — open Control Center on any device and tap the audio source button.',
        tip: 'Quick Tip: AirPods Pro 2 have automatic switching. Older AirPods may require manually selecting them in Bluetooth settings on each device.',
      },
      {
        title: 'Use Conversation Boost to amplify nearby voices',
        content: 'AirPods Pro have a feature called Conversation Boost that amplifies the voices of people near you in noisy environments — like a restaurant or family gathering. Open Settings → Accessibility → Audio/Visual → Headphone Accommodations → Transparency Mode → Conversation Boost. Toggle on. Now your AirPods focus on speech in front of you while reducing background noise.',
      },
      {
        title: 'Stream Apple TV audio privately to AirPods',
        content: 'Late-night TV without disturbing your spouse: open the Apple TV app on the TV. While a show is playing, open Control Center on your iPhone (swipe from top right corner). Tap the audio source icon and select your AirPods. Now the TV audio plays in your AirPods only.',
      },
      {
        title: 'Listen to a friend across a room with Live Listen',
        content: 'Live Listen turns your iPhone into a microphone that streams to your AirPods. Useful for hearing someone speaking softly or hearing a TV from a distance. Open Settings → Control Center and add "Hearing." Then in Control Center, tap Hearing → Live Listen → place your iPhone near the speaker. Their voice plays clearly through your AirPods.',
      },
      {
        title: 'Take phone calls hands-free',
        content: 'When the iPhone rings while AirPods are in your ears, double-tap an AirPod (or pinch the stem on AirPods Pro) to answer. The microphone is built into the AirPods, so you can talk without holding the phone. Double-tap again to hang up.',
      },
    ],
  },

  {
    slug: 'use-uber-lyft-first-time-seniors',
    title: 'How to Use Uber or Lyft for the First Time',
    excerpt: 'Uber and Lyft let you hail a ride from your phone — no cash, no waving down a taxi. Here is the step-by-step for first-time riders.',
    category: 'app-guides',
    tags: ['uber', 'lyft', 'rideshare', 'seniors', 'transportation'],
    emoji: 'cart',
    difficulty: 'Beginner',
    readTime: '6 min',
    body: `Uber and Lyft are smartphone apps that let you call for a ride from any address to any address. A driver in a regular car (not a taxi) picks you up, drives you to your destination, and the fare is automatically charged to a credit card you saved in the app. There is no cash and no tip pressure (tips are optional and easy to leave through the app).

Both services are popular with seniors who no longer drive, or who want a ride home from a medical appointment, dinner with friends, or a place where parking is hard to find. Many cities have specific senior programs — including discounted rides through Lyft\'s Lyft Up partnership and Uber Health for medical appointments.

The first ride is the most intimidating. After the first one, every subsequent ride takes about 30 seconds to book. This guide focuses on Uber but Lyft works almost identically.

(Sources: Uber Help, help.uber.com; Lyft Help, help.lyft.com; AARP — Rideshare for seniors, aarp.org/ride-share)`,
    steps: [
      {
        title: 'Download the Uber app and create an account',
        content: 'Open the App Store (iPhone) or Google Play (Android) and search for "Uber." Install the official app — look for the black square with white "Uber" text. Open it and tap "Sign up" or "Create an account." Enter your phone number; Uber sends a 6-digit code to confirm. Then add your name, email, and a credit or debit card.',
        warning: 'Use the official Uber app only. Several scam apps with similar names exist on the app store. The real Uber has tens of millions of reviews.',
      },
      {
        title: 'Set your home address',
        content: 'Tap the menu icon (three lines) → Settings → Saved Places. Add your home address as "Home." Add common destinations like your doctor or grocery store. Saved places make booking faster — you can tap "Home" to set it as the destination instead of typing every time.',
      },
      {
        title: 'Book your first ride',
        content: 'Open the app. The home screen has a "Where to?" search bar. Tap it. Type or select a saved destination. Uber shows you ride options (UberX is the basic, cheapest one — pick that). It also shows the fare estimate and how long until a driver arrives. Tap "Choose UberX" then "Confirm UberX."',
      },
      {
        title: 'Wait for the driver and verify the car',
        content: 'After booking, the app shows the driver\'s name, photo, license plate, and car color. When they arrive, verify all three before getting in: license plate, car color, and driver name. The driver should also confirm your name. If anything does not match, do not get in — call another ride.',
        tip: 'Quick Tip: Wait inside or in a well-lit area until you see the actual car arrive. The app shows a live map of the driver approaching.',
      },
      {
        title: 'During and after the ride',
        content: 'You do not need to give the driver directions — they have GPS and your destination already. You can sit anywhere in the car (front or back). When you arrive, get out — there is no need to pay or sign anything. The fare is automatically charged. The app then asks you to rate the driver (5 stars is normal for a fine ride) and lets you add an optional tip.',
      },
      {
        title: 'Save the support number in case of issues',
        content: 'For any problem during a ride, tap the shield icon in the app for safety options including Emergency Assistance (which calls 911 with your live location). For non-emergency issues like being charged the wrong amount, go to Help in the app and tap "Report Issue." Both Uber and Lyft refund mistakes promptly when reported through the app.',
      },
    ],
  },

  {
    slug: 'set-up-iphone-medication-reminders',
    title: 'Set Up Medication Reminders on iPhone (Built-In, Free)',
    excerpt: 'iPhone\'s Health app has a free Medications feature that reminds you to take pills, tracks your history, and warns about interactions.',
    category: 'health-tech',
    tags: ['medications', 'iphone', 'health', 'reminders', 'apple', 'seniors'],
    emoji: 'medical',
    difficulty: 'Beginner',
    readTime: '5 min',
    body: `iPhone\'s Health app includes a free Medications feature that reminds you when to take each pill, lets you log doses you have taken, tracks your history over time, and warns you about possible interactions between medications. It is private — Apple does not see your data — and works without a subscription or extra app.

You enter each medication once (name, dosage, schedule, and what it looks like). The iPhone sends a notification at each dose time. You tap to confirm you took it. The Health app then saves the history, which you can show your doctor at your next appointment.

The Medications feature works on iPhone running iOS 16 or later. Older iPhones can use the Reminders app for a simpler version.

(Sources: Apple Support — Medications in Health, support.apple.com/HT213355; FDA Drug Information, fda.gov/drugs)`,
    steps: [
      {
        title: 'Open the Health app and find Medications',
        content: 'On any iPhone, the Health app is pre-installed (white icon with a red heart). Open it. Tap "Browse" at the bottom. Scroll down and tap "Medications." Tap "Add Medication."',
      },
      {
        title: 'Enter each medication',
        content: 'Type the medication name (the iPhone offers a list as you type). Pick the form (tablet, capsule, liquid, inhaler), strength (like 10 mg), and the dosage you take (one pill, two pills). Set the schedule — daily at 8 AM, twice a day, or "as needed." You can add a photo of what the pill looks like.',
        tip: 'Quick Tip: Add medications one at a time. Even over-the-counter ones like aspirin or vitamin D are worth adding — the Health app warns of interactions across the whole list.',
      },
      {
        title: 'Turn on reminders',
        content: 'After adding a medication, tap "Add Reminders" to schedule notifications. The iPhone reminds you at each dose time. You can mark the reminder as "Taken" to log it, or "Skip" if you missed a dose. Either way, the Health app records what happened.',
      },
      {
        title: 'Check for interactions',
        content: 'After adding two or more medications, tap "Interactions" in the Medications screen. The iPhone shows any known interactions or warnings. This is a starting point — always discuss interactions with your doctor or pharmacist — but it can highlight issues to ask about.',
      },
      {
        title: 'Share your medication list with family or doctor',
        content: 'In Health → Sharing, you can share medication info with a family member who also has an iPhone. They see your list, your schedule, and whether you have been taking your medications on time. For doctors, tap a medication, then "Share Medication" to email or print a summary.',
      },
      {
        title: 'For older iPhones: use the Reminders app instead',
        content: 'If your iPhone is too old for the Medications feature, the built-in Reminders app works as an alternative. Open Reminders, tap +, type "Take morning pills" or any medication name, tap the (i) icon, and set a daily repeating time. The reminder appears on your lock screen at that time every day. Less rich than the Health app, but free and reliable.',
      },
    ],
  },

  {
    slug: 'use-google-translate-camera-real-time',
    title: 'Use Google Translate to Translate Anything with Your Phone Camera',
    excerpt: 'Point your phone at a foreign menu, sign, or label and Google Translate shows you the English translation in real time. Here is how.',
    category: 'app-guides',
    tags: ['translate', 'google-translate', 'travel', 'camera', 'language', 'seniors'],
    emoji: 'document',
    difficulty: 'Beginner',
    readTime: '4 min',
    body: `Google Translate is a free app that translates between over 100 languages. The most useful feature for travelers and people who deal with foreign-language documents is the camera — point your phone at any text, and Google Translate replaces the words on screen with English in real time.

You can also speak into the app and have it translate aloud (useful for conversations with someone who speaks a different language), translate handwritten notes by drawing on the screen, or download languages for offline use (so it works without internet, perfect for international travel).

The camera translation works for menus in restaurants, signs in airports, prescription labels in foreign pharmacies, ingredient lists, road signs, and product packaging. It is one of the most genuinely useful free apps available.

(Sources: Google Translate Help, support.google.com/translate)`,
    steps: [
      {
        title: 'Install Google Translate',
        content: 'Open the App Store (iPhone) or Google Play (Android) and search for "Google Translate." Install the app — look for the official Google logo. Open it and pick your two languages (one you speak, one you want to translate to or from).',
      },
      {
        title: 'Tap the camera icon',
        content: 'On the Google Translate home screen, tap the Camera icon. Allow Google Translate to use your camera when prompted. Point the camera at any text — a foreign menu, a road sign, a label.',
      },
      {
        title: 'Watch the text translate live',
        content: 'The app overlays the English translation directly on top of the foreign text in real time. Hold the camera steady and the words appear right where the original text was. This works for menus, signs, ingredients, prescription labels, instruction sheets — anything with printed text.',
        tip: 'Quick Tip: For a clearer image, tap the shutter button to take a picture. Then tap and drag your finger across the words you want translated more carefully. You can copy the translated text or have the iPhone read it aloud.',
      },
      {
        title: 'Use Conversation mode for two-way talking',
        content: 'Tap "Conversation" on the home screen. Tap the microphone for your language and speak. Google Translate shows the translation in the other language, then plays it aloud through the speaker. The other person can speak back into the same app and you hear the English. Useful for talking to a non-English-speaking neighbor, doctor visit interpreter, or shopkeeper while traveling.',
      },
      {
        title: 'Download languages for offline use',
        content: 'Before traveling internationally, download your destination\'s language so the app works without Wi-Fi or data. On the home screen, tap your profile icon → "Downloaded languages." Tap the download arrow next to languages you want offline. Each takes about 50 MB of phone storage.',
      },
      {
        title: 'Save translations you use often',
        content: 'After translating something, tap the star icon to save it. Saved translations appear under "Phrasebook" — useful for common medical phrases, food allergies, or directions you might need repeatedly while traveling.',
      },
    ],
  },

  {
    slug: 'organize-icloud-storage-iphone-backup',
    title: 'Make Sense of iCloud Storage (and Stop Getting "Storage Full" Warnings)',
    excerpt: 'Apple\'s "iCloud Storage Full" warning is one of the most confusing notifications. Here is what it actually means and how to fix it.',
    category: 'phone-guides',
    tags: ['icloud', 'storage', 'backup', 'iphone', 'apple', 'seniors'],
    emoji: 'iphone',
    difficulty: 'Beginner',
    readTime: '7 min',
    body: `Apple gives every Apple ID 5 GB of free iCloud storage. iCloud is where your iPhone backs up — photos, messages, app data — so you can restore everything if you lose your phone. 5 GB is small. Most people fill it within a year and start receiving "iCloud Storage Full" warnings, which then prevent backups, prevent new photos from syncing, and clutter the screen with reminders.

You have three options: free up space by deleting old backups or photos, ignore the warnings (not recommended — your phone is no longer being backed up), or upgrade to iCloud+ for $0.99 per month for 50 GB or $2.99 per month for 200 GB. The 50 GB plan is enough for most people.

This guide explains what is using your iCloud space, how to clean it up, and whether to upgrade.

(Sources: Apple Support — iCloud storage, support.apple.com/HT201318; iCloud+ pricing, apple.com/icloud)`,
    steps: [
      {
        title: 'Check what is taking up space',
        content: 'Open Settings on your iPhone. Tap your name at the top. Tap iCloud. You see a colored bar showing what is using your iCloud space — usually Photos and Backups are the biggest. Below the bar is a "Manage Storage" or "Manage Account Storage" link. Tap it.',
      },
      {
        title: 'Delete old device backups',
        content: 'In Manage Storage, tap "Backups." You see backups of every Apple device you have ever used with your Apple ID — including old iPads or iPhones you no longer have. Tap any backup for an old device, scroll down, and tap "Delete Backup." This often frees several GB instantly.',
        tip: 'Quick Tip: Do NOT delete the backup of your current iPhone. Always look at the device name carefully. The current iPhone is at the top of the list.',
      },
      {
        title: 'Move photos to Google Photos for free unlimited backup',
        content: 'Photos are usually the biggest user of iCloud space. A free alternative: install Google Photos (15 GB free) or use both. Once Google Photos has copies of your photos, you can safely delete them from iCloud. Many people use both — Apple Photos for instant access, Google Photos as a free unlimited backup.',
      },
      {
        title: 'Turn off iCloud backups for apps you do not need',
        content: 'In Manage Storage, scroll through the list of apps. Each shows how much iCloud space it uses for backups. For apps you do not care about restoring (like a casual game), tap the app, then "Turn Off and Delete from iCloud." This removes that app\'s data from iCloud and frees space.',
        warning: 'Do not turn off backup for important apps like Mail, Calendar, Contacts, or anything you would miss if your phone broke. The whole point of iCloud is to restore those.',
      },
      {
        title: 'Decide whether to upgrade',
        content: 'If your iCloud is full and you would rather not delete things, the 50 GB iCloud+ plan is $0.99/month and is plenty for most people. The 200 GB plan ($2.99/month) is enough to share storage across a whole family and includes Apple\'s privacy features. To upgrade, in Manage Storage, tap "Upgrade" or "Change Storage Plan." Cancel any time.',
      },
      {
        title: 'Confirm your phone is being backed up',
        content: 'After cleaning up or upgrading, confirm backups are working. Settings → your name → iCloud → iCloud Backup. The "Last successful backup" date should be within the past few days. If not, tap "Back Up Now" to manually trigger one. From now on, the iPhone backs up automatically when on Wi-Fi and charging overnight.',
      },
    ],
  },

  {
    slug: 'use-shazam-iphone-name-that-song',
    title: 'Find the Name of Any Song You Hear with Shazam (Built Into iPhone)',
    excerpt: 'Hear a song on the radio or in a store and want to know what it is? Shazam identifies any song in seconds — and is built into iPhone.',
    category: 'entertainment',
    tags: ['shazam', 'music', 'iphone', 'song-id', 'apple', 'seniors'],
    emoji: 'music',
    difficulty: 'Beginner',
    readTime: '3 min',
    body: `Shazam is a free service that identifies songs by listening to them. You hear a song on the car radio, in a restaurant, or in a store, and Shazam tells you the name of the song, the artist, and where to find it. It works in seconds.

Apple owns Shazam, and starting with iOS 15, Shazam is built directly into iPhone — you do not need to download an app. You can ask Siri "What song is this?" or add a Shazam button to Control Center for one-tap identification.

There is also a free Shazam app available on iPhone and Android with extra features like saved history of every song you have identified.

(Sources: Apple Support — Identify music with Shazam, support.apple.com/HT212725)`,
    steps: [
      {
        title: 'Ask Siri "What song is this?"',
        content: 'When you hear a song, hold down the side button on your iPhone (or say "Hey Siri") and ask "What song is this?" Siri listens for a few seconds and answers with the song name and artist. You can then tap "Open in Music" or "Open in Spotify" to play the full song or save it.',
      },
      {
        title: 'Add Shazam to Control Center for one-tap identification',
        content: 'For faster access, add a Shazam button to Control Center. Open Settings → Control Center. Scroll down to "Music Recognition" and tap the green + to add it. Now swipe down from the top right corner of any screen to access Control Center, and tap the Shazam icon to identify any song playing nearby.',
        tip: 'Quick Tip: This works even when your iPhone is connected to Bluetooth headphones or playing music itself — Shazam can pick up sounds from the room while music plays in your ears.',
      },
      {
        title: 'See your Shazam history',
        content: 'Every song you identify is saved automatically to a list. To see it, swipe down from Control Center and tap-and-hold the Shazam icon. A list of every song you have ever Shazam\'d appears, with dates. Tap any song to play it or save it to a playlist.',
      },
      {
        title: 'Install the Shazam app for more features',
        content: 'For features like a desktop widget, watch app, and offline mode, install the free Shazam app from the App Store. The app version also lets you Shazam songs that are saved as videos in your photo library — useful when you forgot to identify a song that was playing in a video clip.',
      },
      {
        title: 'Use Shazam to find live music or shows',
        content: 'After identifying a song, tap the artist name in the result. The Shazam app shows you upcoming concerts in your area, music videos, and similar songs. This makes Shazam a small but powerful tool for discovering new music based on what you actually like, not what an algorithm guesses.',
      },
    ],
  },
];
