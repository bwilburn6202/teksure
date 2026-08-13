// guides-batch-333 — Written by the 90-day sprint task on 2026-08-05
// Topics drawn from current FTC consumer alerts (July 2026 VA-benefits impersonation,
// courier/gold-bar cash pickup, paid-search-result scams) plus two evergreen gaps
// found in the slug audit: unpaid-toll text scams and Windows 10 end of support.

import type { Guide } from './guides';

export const guidesBatch333: Guide[] = [
  {
    slug: 'va-benefits-impersonation-scam',
    title: 'Fake "VA Benefits" Calls: How to Tell a Real Veterans Affairs Contact From a Scam',
    excerpt: 'Scammers pose as VA staff and charge veterans for help that is always free. Here is how to recognize the calls and where to get real help.',
    category: 'safety-guides',
    tags: ['veterans', 'va benefits', 'imposter scam', 'fraud', 'government impersonation'],
    readTime: '6 min',
    thumbnailEmoji: '🎖️',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Federal Trade Commission — Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov/consumer-alerts',
    videoUrl: 'https://www.youtube.com/@VeteransAffairs',
    body: `In July 2026 the Federal Trade Commission warned that scammers are contacting veterans and their families while pretending to work for the Department of Veterans Affairs. The calls, texts, and emails usually arrive around the time someone is applying for benefits, changing a claim, or has recently talked to the VA — which is part of what makes them feel believable.

The pitch varies. Some callers offer to "speed up" a pending claim for a fee. Some say a benefit payment is on hold until an "update fee" or "processing charge" is paid. Others ask for a Social Security number, a VA file number, or bank account details to "verify your record." A newer version offers to review your claim and asks for a share of any back pay you receive.

Two facts settle nearly every one of these calls. First, the VA never charges to file or review a benefits claim. Filing is free, and accredited representatives — including Veterans Service Organizations such as the VFW, American Legion, and DAV — help at no cost. Second, anyone who charges a percentage of your back pay for claim help is operating outside VA accreditation rules.

The safe habit is the same one that works for every government-impersonation call: do not act on the number that called you. Hang up and reach the VA directly at 1-800-827-1000, or sign in at VA.gov, where the real status of your claim is always visible. A genuine VA matter will still be there when you call back.

(Sources: Federal Trade Commission consumer alerts — consumer.ftc.gov; U.S. Department of Veterans Affairs — va.gov)`,
    steps: [
      {
        title: 'Hang up and call the VA yourself',
        content: 'End the call, then dial the VA at 1-800-827-1000 or sign in to your account at VA.gov to check your claim status. Never use a phone number, link, or email address supplied by the person who contacted you.',
      },
      {
        title: 'Remember that filing a claim is always free',
        content: 'The VA charges nothing to file, review, or appeal a benefits claim. Accredited Veterans Service Organizations also help for free. Any request for an upfront fee, a "processing charge," or a percentage of your back pay is a red flag.',
        warning: 'Charging a percentage of retroactive benefits for claim help violates VA accreditation rules. Walk away from anyone who proposes it.',
      },
      {
        title: 'Check whether a representative is actually accredited',
        content: 'The VA publishes a searchable list of accredited attorneys, claims agents, and representatives at va.gov/ogc/apps/accreditation. Look up any name before sharing documents or signing anything.',
        tip: 'Quick Tip: Ask for the person\'s full name and accreditation number, then look it up while they wait. A real representative will not object.',
      },
      {
        title: 'Guard your VA file number and Social Security number',
        content: 'The VA already has these numbers on file and will not call you out of the blue to confirm them. Treat any unexpected request for them — by phone, text, or email — as a scam attempt.',
      },
      {
        title: 'Report the contact',
        content: 'Report scam attempts to the FTC at ReportFraud.ftc.gov and to the VA Office of Inspector General hotline at 1-800-488-8244. Reporting helps investigators spot the phone numbers and scripts being used, even when no money was lost.',
      },
    ],
  },

  {
    slug: 'courier-pickup-and-gold-bar-scam',
    title: 'When a Scammer Sends Someone to Your Door: The Courier and Gold Bar Scam',
    excerpt: 'A fast-growing scam ends with a stranger collecting cash or gold from your home. Here is how it starts and how to stop it early.',
    category: 'safety-guides',
    tags: ['courier scam', 'gold bar scam', 'imposter scam', 'fraud', 'life savings'],
    readTime: '7 min',
    thumbnailEmoji: '🚪',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Federal Trade Commission — Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov/features/addressing-scams-affecting-older-adults',
    videoUrl: 'https://www.youtube.com/@FTCvideos',
    body: `The Federal Trade Commission has tracked a sharp rise in a scam that ends in a way most people would never expect: a courier arrives at the victim's home to collect cash, gold bars, or gold coins in person. Between 2020 and 2024, the number of older adults reporting losses of $10,000 or more grew more than fourfold, and this pattern is a large part of why.

It rarely starts with a request for gold. It usually starts with a pop-up warning on a computer, a text about a suspicious charge, or a call from someone claiming to be from a bank, a well-known technology company, or a federal agency. The caller says your accounts have been compromised — sometimes that your identity was used in a crime — and that your money is not safe where it is.

Then comes the instruction that defines this scam: to "protect" your savings, you must move it somewhere else. Withdraw the cash. Buy gold and hold it for the government. Deposit it into a Bitcoin ATM. A courier will come by to take custody of it for safekeeping, and you will be given a receipt or a code word so you know they are legitimate.

No part of that is real. No government agency, bank, or company will ever ask you to withdraw money, buy gold or cryptocurrency, or hand valuables to a courier. There is no federal program that safeguards citizens' savings this way. The code word and the receipt exist only to make the handoff feel official.

Because these scams often run for days or weeks, the victim is usually told to keep it secret — that the investigation is confidential, or that a bank employee may be involved. If anyone tells you not to discuss a money matter with your family or your own bank teller, that instruction is itself the strongest evidence you are being scammed.

(Sources: Federal Trade Commission data spotlight on scams targeting older adults — ftc.gov; FTC consumer advice — consumer.ftc.gov)`,
    steps: [
      {
        title: 'Treat any "move your money to keep it safe" instruction as a scam',
        content: 'No real bank, police department, or federal agency will ever tell you to withdraw cash, buy gold, or use a Bitcoin ATM to protect your savings. There is no such program. This one rule stops the scam before any money moves.',
        warning: 'This applies even if the caller knows your name, your bank, or the last four digits of an account number. That information is often bought or guessed.',
      },
      {
        title: 'Never hand cash or valuables to anyone who comes to your home',
        content: 'Legitimate institutions do not send couriers, rideshare drivers, or "agents" to collect money or gold from private homes. If someone is scheduled to arrive, do not open the door, and call your local police non-emergency line.',
      },
      {
        title: 'Ignore secrecy instructions and tell someone',
        content: 'Scammers insist the matter is confidential so no one can interrupt them. Tell a family member, a friend, or your bank branch what you have been asked to do. Bank tellers are trained to recognize this pattern and have stopped many of these losses at the counter.',
        tip: 'Quick Tip: If a caller becomes angry or threatening when you say you want to talk to family first, that reaction confirms the scam.',
      },
      {
        title: 'Close the pop-up without calling the number on it',
        content: 'If a full-screen warning claims your computer is infected and gives a support number, do not call it. Close the browser, or hold the power button until the machine shuts off, then restart. A real virus warning never asks you to phone anyone.',
      },
      {
        title: 'Verify through a number you find yourself',
        content: 'If you are worried the warning might be real, look up your bank\'s phone number on the back of your debit card or on a past statement, and call that. Do not use any number that appeared on the screen or that a caller gave you.',
      },
      {
        title: 'Act quickly if money has already gone out',
        content: 'Call your bank right away and ask them to try to recall the transfer. Report the loss at ReportFraud.ftc.gov and to local police, and file with the FBI at ic3.gov. Some transfers can be stopped within a short window, so speed matters more than embarrassment.',
      },
    ],
  },

  {
    slug: 'spot-sponsored-search-results',
    title: 'Ad or Real Result? How to Read a Google Search Page Safely',
    excerpt: 'Scammers buy the top spot in search results so their fake number appears first. Here is how to tell paid ads from genuine results.',
    category: 'essential-skills',
    tags: ['search', 'google', 'sponsored ads', 'scam prevention', 'customer service'],
    readTime: '5 min',
    thumbnailEmoji: '🔎',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Federal Trade Commission — Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov/consumer-alerts',
    videoUrl: 'https://www.youtube.com/@Google',
    body: `Searching for a company's customer service number feels like one of the safest things you can do online. It is not, and the reason is worth understanding.

The first few results on a search page are usually advertisements. Anyone can buy them, including a scammer, and the ad can display a real company's name while sending you to a phone number or website that has nothing to do with that company. The FTC issued an alert in July 2026 about exactly this pattern being used against people searching for substance use disorder treatment — but the same technique is used for airline refunds, printer support, antivirus renewals, bank helplines, and gift card balances.

What makes it effective is that the ad looks almost identical to a normal result. The only difference is a small label. On Google it reads "Sponsored" above the listing. On Bing it reads "Ad." Once you know where that word sits, the page becomes much easier to read: sponsored entries at the top, genuine results below them.

The stronger habit, though, is to stop relying on search for this task at all. For any company you already do business with, the correct number is printed somewhere you already have — the back of your card, a monthly statement, the product manual, or the account page inside the company's own app.

(Sources: Federal Trade Commission consumer alerts — consumer.ftc.gov)`,
    steps: [
      {
        title: 'Look for the word "Sponsored" or "Ad"',
        content: 'Before clicking anything on a results page, look just above the listing. Google labels paid placements "Sponsored," and Bing labels them "Ad." These sit at the very top, above the genuine results, and are bought rather than earned.',
        tip: 'Quick Tip: The label is small and grey by design. On a phone, it sits directly above the website name.',
      },
      {
        title: 'Scroll past the ads to the real results',
        content: 'Genuine search results begin below the sponsored block. They show the website address in full, so you can check that it matches the company you expect — for example, chase.com rather than chase-support-help.net.',
      },
      {
        title: 'Read the web address, not the headline',
        content: 'A scam listing can put any company name in its headline. The web address is much harder to fake convincingly. Look for extra words, hyphens, or an unusual ending such as .info or .support attached to a familiar brand name.',
        warning: 'A padlock icon in the address bar only means the connection is encrypted. It does not mean the site is honest — scam sites have padlocks too.',
      },
      {
        title: 'Prefer a number you already have over one you searched for',
        content: 'For a bank, check the back of your debit or credit card. For a utility or insurer, check a paper statement. For a device, check the manual or the manufacturer\'s sticker. These numbers cannot be bought by an advertiser.',
      },
      {
        title: 'Go to the company site directly when you can',
        content: 'Type the company address into the browser bar yourself — for example, delta.com — rather than searching for it. Then find "Contact us" on their own site. This skips the results page entirely.',
      },
    ],
  },

  {
    slug: 'unpaid-toll-text-scam',
    title: 'That "Unpaid Toll" Text Is Almost Certainly Fake — Here Is How to Check',
    excerpt: 'Texts demanding a small toll payment are one of the most common scams in the country. Here is how to verify a toll balance safely.',
    category: 'safety-guides',
    tags: ['smishing', 'text scam', 'tolls', 'phishing', 'fraud'],
    readTime: '5 min',
    thumbnailEmoji: '🛣️',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Federal Trade Commission — Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov/consumer-alerts',
    videoUrl: 'https://www.youtube.com/@FTCvideos',
    body: `A text arrives saying you have an unpaid toll — often a small amount, three or four dollars — and that a late fee will be added unless you pay today. There is a link. The message may name a real toll system such as E-ZPass, SunPass, FasTrak, or a state turnpike authority.

These texts go out by the million to numbers chosen at random, and enough recipients have driven a toll road recently that a share of them assume it is genuine. The small dollar amount is deliberate: it is low enough that paying feels easier than checking.

The payment page is the point of the scam. It captures your card number, and often your name, address, and phone number as well. Some versions also ask for a bank login. The few dollars are not the goal; the card details and personal information are, and they are often resold or used for larger charges weeks later.

Real toll authorities do send notices, but they use the mail and your own online account. None of them chase a first-time toll balance by text message with a payment link. So the check is simple and costs nothing: ignore the link entirely and look up your balance the way you normally would — through the toll agency's own website or app, typed in yourself.

If you have already tapped the link and entered a card number, the immediate step is to call the number on the back of that card and report it, then watch the statement closely.

(Sources: Federal Trade Commission consumer alerts — consumer.ftc.gov; FBI Internet Crime Complaint Center — ic3.gov)`,
    steps: [
      {
        title: 'Do not tap the link',
        content: 'Leave the text alone. Tapping the link is what starts the scam, and on some phones it also confirms to the sender that your number is active and read by a real person.',
      },
      {
        title: 'Check your balance through the real toll agency yourself',
        content: 'Open your browser and type the toll authority\'s address directly — for example, ezpassva.com or sunpass.com — or open the app you already have installed. Sign in and look at your actual balance there.',
        tip: 'Quick Tip: If you have never had a transponder or an account with that agency, and have not driven that road, there is nothing to check. It is a scam.',
      },
      {
        title: 'Look at the sender and the web address',
        content: 'Scam toll texts often come from an ordinary mobile number, an overseas country code, or an email-style address. The link usually ends in something other than .gov or the agency\'s known address — endings like .xin, .top, or .icu are common.',
        warning: 'Do not judge the message by its wording. Many of these texts are now written cleanly, with no spelling errors.',
      },
      {
        title: 'Report and delete the message',
        content: 'Forward the text to 7726 (which spells SPAM), which reports it to your mobile carrier at no charge. Then report it at ReportFraud.ftc.gov and delete the message.',
      },
      {
        title: 'If you already entered card details, call your card issuer now',
        content: 'Use the phone number on the back of the card. Ask them to cancel that card and issue a new number, and review recent charges with them. Do this even if no unauthorized charge has appeared yet — the details are often used weeks later.',
      },
      {
        title: 'Block the number',
        content: 'On an iPhone, open the message, tap the sender at the top, then tap Info and Block this Caller. On an Android phone, press and hold the conversation, then choose Block. New scam texts will come from new numbers, so treat this as tidying rather than a fix.',
      },
    ],
  },

  {
    slug: 'windows-10-end-of-support-what-to-do',
    title: 'Windows 10 Support Has Ended: What It Means and What to Do Now',
    excerpt: 'Microsoft stopped issuing free security updates for Windows 10. Here is how to check what you have and choose your next step.',
    category: 'windows-guides',
    tags: ['windows 10', 'windows 11', 'end of support', 'security updates', 'upgrade'],
    readTime: '7 min',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com/windows',
    videoUrl: 'https://www.youtube.com/@Windows',
    body: `Microsoft ended free support for Windows 10 on October 14, 2025. Your computer did not stop working that day and will not stop working now. What changed is that Microsoft no longer sends free security updates to it, and each month that passes adds newly discovered weaknesses that will never be patched on that version.

That is a real risk, but it is a gradual one, not an emergency. There is time to make a considered decision rather than a rushed purchase — which matters, because scam callers and pop-ups have been using the deadline to pressure people into paying for "Windows support" they do not need.

There are three honest paths. If your computer meets Microsoft's hardware requirements, upgrading to Windows 11 is free and keeps your files and programs in place. If it does not meet the requirements, Microsoft offers Extended Security Updates for consumers, which continue security patches for a limited period; enrollment is done through Windows Update itself. And if the machine is old and slow anyway, replacing it may cost less than the effort of extending a computer that is already struggling.

What you should not do is pay a stranger who calls or a pop-up that appears. Microsoft does not phone people about expiring support, and every legitimate option above is handled inside Windows Update or through a retailer you choose.

(Sources: Microsoft Support — support.microsoft.com; AARP technology resources — aarp.org)`,
    steps: [
      {
        title: 'Find out which version of Windows you have',
        content: 'Click the Start button, type "winver" and press Enter. A small window appears showing your Windows version. If it says Windows 11, you are already receiving updates and nothing here applies to you.',
        tip: 'Quick Tip: Write down what the window says before closing it. You will want it if you call a family member or a repair shop for help.',
      },
      {
        title: 'Check whether your computer can run Windows 11',
        content: 'Open Settings, choose Windows Update, and look for an upgrade message. Windows will tell you directly whether this computer meets the requirements for Windows 11. Microsoft also offers a free PC Health Check app from support.microsoft.com that gives the same answer.',
      },
      {
        title: 'If it qualifies, upgrade to Windows 11 — it is free',
        content: 'In Settings, go to Windows Update and choose Download and install when Windows 11 is offered. Your documents, photos, and installed programs stay where they are. Set aside an hour or two, keep a laptop plugged in, and do not turn the computer off partway through.',
        warning: 'Back up important files to an external drive or cloud storage before any major upgrade. Upgrades usually go smoothly, but a backup is the only thing that makes a failure recoverable.',
      },
      {
        title: 'If it does not qualify, look at Extended Security Updates',
        content: 'Open Settings and go to Windows Update. If your computer is eligible for consumer Extended Security Updates, an enrollment option appears there. This continues security patches for a limited period and buys time to plan a replacement.',
      },
      {
        title: 'Consider whether replacing the computer makes more sense',
        content: 'If the machine is already slow, low on storage, or has a failing battery, the cost of extending it may be better spent on a newer one. A budget laptop bought today will run Windows 11 and receive updates for years.',
      },
      {
        title: 'Ignore anyone who calls or pops up about Windows support',
        content: 'Microsoft does not telephone people about expiring support, and no genuine warning asks you to call a number. Every legitimate option is inside Windows Update. Close the pop-up, hang up the call, and do not give remote access to your computer.',
        warning: 'Giving remote access to a stranger hands them your files, your browser, and any accounts you are signed in to. This is one of the most costly mistakes in this category.',
      },
    ],
  },

  {
    slug: 'medicare-card-replacement-scam',
    title: 'Medicare Card Scams: Nobody Legitimate Will Call You for Your Number',
    excerpt: 'Callers offering new plastic or metal Medicare cards are after your number. Here is how to replace a card the real way, for free.',
    category: 'government-civic',
    tags: ['medicare', 'medicare card', 'imposter scam', 'health fraud', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-08-05',
    lastVerifiedAt: '2026-08-05',
    difficulty: 'Beginner',
    sourceName: 'Medicare.gov',
    sourceUrl: 'https://www.medicare.gov',
    videoUrl: 'https://www.youtube.com/@medicare',
    body: `Every year, callers tell Medicare beneficiaries that a new card is being issued — plastic, metal, chipped, upgraded — and that they need to confirm the current Medicare number before the new one can be mailed. There is no new card. There has been no card redesign since Medicare replaced Social Security numbers with the current Medicare Beneficiary Identifier, and that change was announced by mail, not by phone.

The Medicare number is the target because it functions as a key. With it, a dishonest provider can bill Medicare for equipment, tests, or services you never received. Those false claims can also use up benefits you may genuinely need later, and unwinding them takes months.

Related versions of the call offer a free knee brace, back brace, diabetic supplies, genetic cancer screening, or a COVID or flu test kit — all "covered by Medicare — we only need your number to bill it." The offer of something free is the bait; the number is the point.

Medicare does not call beneficiaries out of the blue to ask for the Medicare number. Medicare already has it. Neither do Social Security or a legitimate insurer. Anyone who calls asking you to confirm it is not who they say they are, no matter how much other information about you they seem to already know.

If you actually need to replace a lost or damaged card, it is free and you do it yourself — through your account at Medicare.gov or by calling 1-800-MEDICARE.

(Sources: Medicare.gov; Federal Trade Commission consumer advice — consumer.ftc.gov; AARP Fraud Watch Network — aarp.org)`,
    steps: [
      {
        title: 'Never give your Medicare number to an incoming caller',
        content: 'Medicare, Social Security, and legitimate insurance plans already have your number and will not phone to confirm it. Treat any unexpected request for it as a scam, including calls that mention a new card, a plan review, or free medical equipment.',
        warning: 'Guard the Medicare number as carefully as a Social Security number. It can be used to bill fraudulent claims in your name.',
      },
      {
        title: 'Replace a lost card yourself, for free, at Medicare.gov',
        content: 'Go to medicare.gov, sign in to your account, and choose the option to print or order a replacement card. A printed copy works for appointments while the mailed card is on its way. There is never a charge for a replacement.',
        tip: 'Quick Tip: If you have not set up a Medicare.gov account, you can create one with your Medicare number, date of birth, and ZIP code.',
      },
      {
        title: 'Or call 1-800-MEDICARE and let them look you up',
        content: 'Dial 1-800-633-4227 yourself. Because you placed the call to a published number, it is safe to confirm your details with the person who answers. This is the difference that matters: who initiated the call.',
      },
      {
        title: 'Turn down offers of free braces, tests, or supplies',
        content: 'Unsolicited offers of knee braces, back braces, diabetic supplies, genetic screening kits, or test kits "covered by Medicare" are one of the most common fraud schemes. If you need medical equipment, ask your own doctor for a referral.',
      },
      {
        title: 'Check your Medicare Summary Notice for claims you do not recognize',
        content: 'Every three months you receive a Medicare Summary Notice, or you can view claims any time at Medicare.gov. Read the list of services billed in your name. Anything you did not receive should be reported.',
      },
      {
        title: 'Report suspected fraud',
        content: 'Call 1-800-MEDICARE to report a suspicious call or an incorrect claim, and contact your state Senior Medicare Patrol, which offers free help with Medicare fraud, at smpresource.org. You can also report at ReportFraud.ftc.gov.',
      },
    ],
  },
];
