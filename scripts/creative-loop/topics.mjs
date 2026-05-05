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
];
