// TekSure Content Expansion — 100+ guides across 8 new categories (April 2026)
import type { Guide } from './guides';

// ─── New category types for the expansion ────────────────────────────
export type ExpansionCategory =
  | 'government-civic'
  | 'financial-tech'
  | 'smart-home'
  | 'entertainment'
  | 'communication'
  | 'health-tech'
  | 'life-transitions'
  | 'internet-connectivity';

export const expansionCategoryLabels: Record<ExpansionCategory, string> = {
  'government-civic': 'Government & Civic',
  'financial-tech': 'Financial Technology',
  'smart-home': 'Smart Home',
  'entertainment': 'Entertainment & Media',
  'communication': 'Communication & Social',
  'health-tech': 'Health & Medical Tech',
  'life-transitions': 'Life Transitions',
  'internet-connectivity': 'Internet & Connectivity',
};

export const expansionCategoryDescriptions: Record<ExpansionCategory, string> = {
  'government-civic': 'Access government services, benefits, and civic resources online — Social Security, Medicare, IRS, and more',
  'financial-tech': 'Manage your money safely with mobile banking, payment apps, and fraud protection tools',
  'smart-home': 'Set up and control smart speakers, streaming devices, doorbells, and other connected home gadgets',
  'entertainment': 'Stream music, podcasts, audiobooks, and video — find free and paid options that work for you',
  'communication': 'Stay in touch with video calls, messaging apps, and social media — safely and on your own terms',
  'health-tech': 'Use patient portals, telehealth, medication reminders, and health-tracking devices to manage your wellness',
  'life-transitions': 'Set up a new phone, switch platforms, transfer data, and handle major tech changes with confidence',
  'internet-connectivity': 'Understand your internet service, improve WiFi coverage, manage data usage, and stay connected everywhere',
};

export const guidesExpansion: Guide[] = [

  // ═══════════════════════════════════════════
  // GOVERNMENT & CIVIC (15 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-my-social-security-account',
    title: 'How to Set Up a My Social Security Account Online',
    excerpt: 'Create your free my Social Security account at ssa.gov to view statements, check benefits, and manage your information online.',
    category: 'government-civic' as any,
    tags: ['social security', 'ssa.gov', 'government', 'benefits', 'retirement'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/GiDqYBbpDhk',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your Social Security account is one of the most important government accounts you can have online. It lets you view your Social Security statement, check your estimated future benefits, request a replacement Social Security card, and manage your payments if you are already receiving benefits — all without making a phone call or visiting an office.

The Social Security Administration (SSA) offers a free online account at ssa.gov. Setting it up takes about 10 to 15 minutes, and you will need to verify your identity. Here is what you need before you start: your Social Security number, a valid email address, a U.S. mailing address, and a phone number that can receive text messages or calls.

To get started, open your web browser and go to ssa.gov. Look for the button that says "Sign in / Up" or "my Social Security" near the top of the page. Click "Create an Account." You will be asked to create a Login.gov account first — this is the government's secure login system used across many federal websites. You will enter your email address, create a strong password, and then verify your identity.

The identity verification step is the most involved part. You will be asked to provide your Social Security number, answer security questions based on your credit history, and verify your phone number. In some cases, you may need to upload a photo of your driver's license or state ID. This is all to make sure no one else can access your account.

Once your identity is verified, you can sign in to my Social Security anytime. From your dashboard, you can view your full earnings history (every job that reported wages to Social Security), see your estimated retirement benefits at different ages (62, 67, and 70), check the status of any pending applications, and update your mailing address or direct deposit information if you are already receiving benefits.

If you are age 60 or older and have not created this account yet, do it soon. Scammers sometimes try to create accounts using other people's Social Security numbers. By creating your own account first, you lock out anyone else from doing so.`,
    steps: [
      { title: 'Go to ssa.gov', content: 'Open your web browser and type ssa.gov in the address bar. Look for the "Sign in / Up" or "my Social Security" button near the top of the page and click it.' },
      { title: 'Click Create an Account', content: `You will be directed to create a Login.gov account. This is the federal government's secure login system. Enter your email address and choose a strong password.` },
      { title: 'Verify your email', content: 'Check your email for a message from Login.gov. Click the verification link in the email to confirm your address. If you do not see it, check your spam or junk folder.' },
      { title: 'Set up two-factor authentication', content: 'Login.gov will ask you to set up a second way to verify your identity — choose text message or phone call. Enter your phone number and type in the code they send you.' },
      { title: 'Verify your identity', content: `Enter your Social Security number, answer security questions about your credit history, and if asked, upload a photo of your driver's license or state ID. This step may take a few minutes.` },
      { title: 'Access your Social Security dashboard', content: 'Once verified, you can now sign in to my Social Security anytime. View your earnings history, estimated benefits, and manage your account from the main dashboard.' },
    ],
  },

  {
    slug: 'use-medicare-gov-find-benefits',
    title: 'How to Use Medicare.gov to Find Your Benefits',
    excerpt: 'Log in to Medicare.gov to check your coverage, find doctors, compare plans, and understand what Medicare pays for.',
    category: 'government-civic' as any,
    tags: ['medicare', 'health insurance', 'government', 'benefits', 'seniors'],
    readTime: '7 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Medicare.gov is the official website for Medicare, the federal health insurance program for people 65 and older (and some younger people with certain disabilities). The website lets you check what your Medicare plan covers, find doctors and hospitals that accept Medicare, compare Medicare Advantage and Part D prescription drug plans, and view your claims and costs — all from your computer or phone.

To get started, you need a Medicare.gov account. If you already have a Login.gov or ID.me account (the same ones used for Social Security or VA.gov), you can use that to sign in. If not, you will create one during the process.

Go to medicare.gov and click "Log in" in the top-right corner. You will be asked to sign in with Login.gov or ID.me. If you do not have either, click "Create an account" and follow the steps to set one up. You will need your Medicare number (found on your red, white, and blue Medicare card), your name, date of birth, and a phone number for verification.

Once logged in, you will see your Medicare dashboard. You can check your coverage by clicking "Coverage" to see what Part A (hospital insurance) and Part B (medical insurance) cover. If you have a Medicare Advantage plan (Part C) or a Part D prescription drug plan, those details appear there too. To find a doctor or hospital, click "Find Care" and search by ZIP code, specialty, and ratings. During Open Enrollment (October 15 through December 7), you can compare plans side by side and enter the prescriptions you take to estimate costs.

Click "Claims" to see a history of your medical bills and what Medicare paid. This is helpful for catching billing errors or understanding your out-of-pocket costs.

If you need help navigating the site, call 1-800-MEDICARE (1-800-633-4227) — they have trained counselors who can walk you through the website over the phone.`,
    steps: [
      { title: 'Go to medicare.gov', content: 'Open your web browser and go to medicare.gov. Click the "Log in" button in the top-right corner of the page.' },
      { title: 'Sign in or create an account', content: 'Choose Login.gov or ID.me to sign in. If you do not have an account, click "Create an account" and follow the steps — you will need your Medicare card number.' },
      { title: 'View your coverage details', content: 'Once logged in, click "Coverage" on your dashboard. This shows what Part A, Part B, and any supplemental plans cover, including copays and deductibles.' },
      { title: 'Find doctors who accept Medicare', content: 'Click "Find Care" and enter your ZIP code. Filter by specialty, distance, and patient ratings to find doctors and hospitals near you that accept Medicare.' },
      { title: 'Compare drug plans', content: 'Click "Find a Plan" and enter the medications you take. Medicare.gov will estimate your annual costs under different Part D plans so you can choose the most affordable one.' },
      { title: 'Check your claims history', content: 'Click "Claims" to review what Medicare has been billed for and what they paid. Review these periodically to catch any errors or charges for services you did not receive.' },
    ],
  },

  {
    slug: 'file-taxes-online-irs-free-file',
    title: 'How to File Taxes Online Using Free File (IRS.gov)',
    excerpt: 'File your federal taxes for free through the IRS Free File program — no cost, no catch, and available to most taxpayers.',
    category: 'government-civic' as any,
    tags: ['taxes', 'IRS', 'free file', 'tax return', 'government'],
    readTime: '8 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Every year, millions of Americans pay companies to file their taxes when they could do it for free. The IRS Free File program lets you file your federal tax return at no cost if your adjusted gross income (AGI) is $84,000 or less. Even if you earn more than that, IRS Free File Fillable Forms are available to everyone regardless of income.

The IRS has partnered with several tax preparation companies to offer free versions of their software. When you go through the IRS.gov website, you get the truly free version — not the "free" version that charges you when you try to file. This distinction matters because going directly to a company's website may land you on a paid version.

To get started, go to irs.gov/freefile. You will see two options. "Guided Tax Software" walks you through your return step by step with an interview-style format. This is available if your AGI is $84,000 or less. "Free File Fillable Forms" is the electronic version of paper forms for people comfortable filling them in. This is available to everyone.

You will need: your W-2 forms from each employer, any 1099 forms, your Social Security number, bank routing and account numbers for direct deposit, and last year's AGI (found on line 11 of your previous return).

After completing your return, review every number carefully. Choose direct deposit for your refund — it typically arrives within 21 days versus 6 to 8 weeks for a mailed check. E-file your return and save the confirmation.

File early to get your refund sooner and reduce the risk of tax identity theft, where someone files a fraudulent return using your Social Security number before you do.`,
    steps: [
      { title: 'Go to irs.gov/freefile', content: `Open your web browser and go to irs.gov/freefile. Do not go to a tax company's website directly — always start from the IRS site to ensure you get the truly free version.` },
      { title: 'Choose your filing option', content: 'Select "Guided Tax Software" if your AGI is $84,000 or less. Select "Free File Fillable Forms" if your income is higher or you are comfortable with tax forms.' },
      { title: 'Gather your documents', content: `Have ready: your W-2 forms, any 1099 forms, Social Security numbers for you and dependents, bank routing and account numbers, and last year's AGI.` },
      { title: 'Complete the interview questions', content: 'The software asks about your filing status, income, deductions, and credits step by step. Answer each question and the software handles the math and form selection.' },
      { title: 'Review your return carefully', content: 'Before submitting, check that your name, Social Security number, income amounts, and bank information are all correct.' },
      { title: 'Choose direct deposit and e-file', content: 'Enter your bank routing and account number for the fastest refund. Submit electronically and save the confirmation page and completed return for your records.' },
    ],
  },

  {
    slug: 'track-usps-package-informed-delivery',
    title: 'How to Track a USPS Package with Informed Delivery',
    excerpt: 'Sign up for USPS Informed Delivery to see photos of your incoming mail and track packages — all for free.',
    category: 'government-civic' as any,
    tags: ['USPS', 'mail', 'package tracking', 'informed delivery', 'postal service'],
    readTime: '5 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `USPS Informed Delivery is a free service from the United States Postal Service that lets you see what mail and packages are coming to your address before they arrive. Every morning, you get an email with scanned images of the letters and flats heading to your mailbox that day. You can also track any packages being delivered by USPS.

This service is useful for keeping track of important documents like bills, checks, tax forms, and prescriptions. It also helps you notice if something that should have arrived is missing — an early warning sign of mail theft.

To sign up, go to informeddelivery.usps.com. Click "Sign Up" and create a free USPS.com account. You will need to verify your identity — USPS will ask you to confirm your address and may ask security questions. In some cases, they will mail a verification code to your address.

Once set up, you receive daily email notifications showing grayscale images of each piece of mail heading to you. Package tracking information appears in the same dashboard and email. You can also download the free USPS Informed Delivery app on your phone for push notifications when new mail or package updates are available.

If you are going on vacation, Informed Delivery helps you monitor your mail from anywhere. You can also use the "Hold Mail" feature from the same website to have the post office hold your mail for up to 30 days while you are away.`,
    steps: [
      { title: 'Go to the Informed Delivery website', content: 'Open your web browser and go to informeddelivery.usps.com. Click the "Sign Up" button to create your free account.' },
      { title: 'Create or sign in to your USPS.com account', content: 'If you already have a USPS.com account, sign in. Otherwise, click "Create Account" and enter your name, email, and a password.' },
      { title: 'Verify your identity and address', content: 'USPS will ask you to confirm your mailing address and verify your identity. Answer security questions accurately. In some cases, a verification code will be mailed to you.' },
      { title: 'Enable daily email notifications', content: 'Go to your Informed Delivery preferences and make sure the "Daily Digest" email is turned on. You will receive an email each morning with images of incoming mail.' },
      { title: 'Download the USPS app', content: 'Search for "Informed Delivery" or "USPS" in the App Store or Google Play Store. Download the free app and sign in with your USPS.com account for push notifications.' },
      { title: 'Track packages from your dashboard', content: 'Any USPS package addressed to you automatically appears in your dashboard. Click on a package to see tracking history and estimated delivery date.' },
    ],
  },

  {
    slug: 'sign-up-healthcare-gov',
    title: 'How to Sign Up for Healthcare.gov',
    excerpt: 'Enroll in health insurance through the ACA Marketplace at Healthcare.gov — find plans, check subsidies, and get covered.',
    category: 'government-civic' as any,
    tags: ['healthcare', 'insurance', 'ACA', 'marketplace', 'government'],
    readTime: '8 min',
    thumbnailEmoji: '⚕️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Healthcare.gov is the official website for the Health Insurance Marketplace created under the Affordable Care Act. If you do not get health insurance through your employer, Medicare, or Medicaid, the Marketplace is where you shop for and enroll in a plan. Many people qualify for financial help (subsidies) that significantly lower the monthly cost.

Open Enrollment typically runs from November 1 through January 15 each year. You can enroll at other times if you have a qualifying life event such as losing coverage, getting married, having a baby, or moving.

Go to healthcare.gov and click "Get Coverage." Create an account with your name, email, and password. The application asks about your household size, income, and current insurance status. Based on your income, the system tells you if you qualify for premium tax credits, cost-sharing reductions, Medicaid, or CHIP.

After completing the application, you see a list of available plans organized into metal levels — Bronze, Silver, Gold, and Platinum. Bronze has the lowest monthly premiums but highest costs when you use care. Silver plans often offer the best value because they qualify for extra cost-sharing reductions.

Compare plans carefully: monthly premium, deductible, copays, prescription coverage, and whether your doctors are in the network. Your coverage does not start until you pay your first premium.

If you need help choosing a plan, healthcare.gov has free in-person assistance. Click "Find Local Help" to locate a trained navigator near you.`,
    steps: [
      { title: 'Go to healthcare.gov', content: 'Open your web browser and go to healthcare.gov. Click "Get Coverage" or "Apply Now" to begin enrollment.' },
      { title: 'Create your Marketplace account', content: 'Click "Create Account" and enter your name, email address, and a strong password. Verify your email by clicking the confirmation link.' },
      { title: 'Complete the application', content: 'Answer questions about your household — who needs coverage, your estimated annual income, and current insurance status. This determines what financial help you qualify for.' },
      { title: 'Review your eligibility results', content: 'Healthcare.gov tells you if you qualify for premium tax credits, Medicaid, or CHIP. Note your estimated monthly savings before selecting a plan.' },
      { title: 'Compare and select a plan', content: 'Browse available plans in your area. Compare premiums, deductibles, copays, and provider networks. Use the doctor search tool to check if your current doctors accept the plan.' },
      { title: 'Enroll and pay your first premium', content: 'Click "Enroll" on your chosen plan and confirm. Your coverage does not start until you pay the first monthly premium — follow the instructions from your insurer.' },
    ],
  },

  {
    slug: 'register-to-vote-online',
    title: 'How to Register to Vote Online',
    excerpt: 'Check your voter registration status and register to vote online in most states — it takes less than 5 minutes.',
    category: 'government-civic' as any,
    tags: ['voting', 'voter registration', 'elections', 'government', 'civic'],
    readTime: '5 min',
    thumbnailEmoji: '🗳️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Registering to vote is one of the most important things you can do as a citizen, and in most states you can do it online in under five minutes. You can also check whether you are already registered and update your information if you moved or changed your name.

The official starting point is vote.gov, a federal website that directs you to your state's online registration system. Most states offer online registration; a few still require a paper form.

To register, you typically need: your driver's license or state ID number, the last four digits of your Social Security number, your date of birth, and your current home address.

Go to vote.gov and select your state. You will be directed to your state's official registration portal. Follow the on-screen instructions — the process usually takes 3 to 5 minutes.

If you are already registered, most state portals have a "Check Registration Status" option. Enter your name and date of birth to see if your registration is active, your party affiliation, and your polling place location.

Registration deadlines vary by state — some require you to register 30 days before an election, while others allow same-day registration. Check your state's deadline on vote.gov.

Even if you think you are registered, check before every major election. Voter rolls are occasionally purged, especially if you have not voted recently or if you moved. A two-minute check can save you a problem on Election Day.`,
    steps: [
      { title: 'Go to vote.gov', content: `Open your web browser and go to vote.gov. This is the official federal website that connects you to your state's voter registration system.` },
      { title: 'Select your state', content: `Choose your state from the dropdown menu. You will be directed to your state's official online voter registration portal.` },
      { title: 'Gather your ID information', content: `Have ready: your driver's license or state ID number, the last four digits of your Social Security number, your date of birth, and your current home address.` },
      { title: 'Fill out the registration form', content: 'Enter your personal information as prompted. Double-check your name, address, and date of birth. Select your party affiliation if your state requires it.' },
      { title: 'Submit and save confirmation', content: 'Click "Submit" to complete registration. Save or print the confirmation page. Some states mail a voter registration card within a few weeks.' },
      { title: 'Check your registration before each election', content: 'Visit vote.gov before each election to confirm your registration is active and your polling place has not changed.' },
    ],
  },

  {
    slug: 'renew-passport-online',
    title: 'How to Renew Your Passport Online',
    excerpt: 'Renew your U.S. passport online through the State Department — faster than mailing a paper form.',
    category: 'government-civic' as any,
    tags: ['passport', 'travel', 'State Department', 'government', 'renewal'],
    readTime: '7 min',
    thumbnailEmoji: '🛂',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `The U.S. Department of State now allows eligible Americans to renew their passports entirely online. This is faster than the paper form process and eliminates the need to mail your current passport. Processing times for online renewals are typically 4 to 6 weeks for routine processing.

You are eligible if: your most recent passport was issued when you were 16 or older, was issued within the last 15 years, is not damaged, and you are not changing your name (or changed it less than a year ago with legal documentation).

Go to travel.state.gov and navigate to the passport renewal section. Create a Login.gov account if you do not already have one. Have your current passport nearby, as you will need the information from it.

During the application, you will upload a passport-quality photo taken within the last 6 months — plain white background, full face, good lighting. You can take it with your phone and use the State Department's photo tool to crop and format it.

The renewal fee is paid by credit or debit card. As of 2026, a passport book renewal costs $130 plus a $35 execution fee. You can add a passport card for $30 more. Track your application status online at travel.state.gov.

Renew your passport at least 6 months before it expires. Many countries require your passport to be valid for 6 months beyond your travel dates, and some airlines will not let you board if it expires too soon.`,
    steps: [
      { title: 'Check your eligibility', content: 'You can renew online if your passport was issued when you were 16+, within the last 15 years, is undamaged, and your name has not changed (or changed less than a year ago with documentation).' },
      { title: 'Go to travel.state.gov', content: 'Navigate to "U.S. Passports" then "Renew My Passport" and select the online renewal option.' },
      { title: 'Sign in with Login.gov', content: 'Sign in to your Login.gov account or create one. This is the same secure account used for Social Security and other federal websites.' },
      { title: 'Complete the renewal application', content: 'Enter your personal information and passport details from your current passport — passport number, issue date, expiration date.' },
      { title: 'Upload your passport photo', content: `Take a new photo with plain white background, good lighting, and face centered. Use the State Department's photo tool to verify it meets requirements.` },
      { title: 'Pay the fee and track status', content: 'Pay by credit or debit card ($130 book + $35 fee). Track your application at travel.state.gov. Processing takes 4 to 6 weeks.' },
    ],
  },

  {
    slug: 'apply-snap-benefits-online',
    title: 'How to Apply for SNAP Benefits Online',
    excerpt: 'Apply for SNAP food assistance through your state website — find out if you qualify and get help buying groceries.',
    category: 'government-civic' as any,
    tags: ['SNAP', 'food stamps', 'food assistance', 'government', 'benefits'],
    readTime: '7 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `SNAP (Supplemental Nutrition Assistance Program) helps millions of Americans afford groceries. Benefits are loaded monthly onto an EBT card that works like a debit card at grocery stores, farmers markets, and some online retailers like Amazon and Walmart.

Eligibility is based on household size and income. In 2026, a single person earning up to approximately $1,580 per month may qualify. A household of four can earn up to about $3,250 per month. Even if you are slightly over the limits, you may still qualify based on expenses like rent, utilities, and medical costs.

SNAP is administered by your state, so the application varies. Go to fns.usda.gov/snap and click "SNAP State Directory" to find your online application portal. Many states allow you to apply entirely online.

You will need: proof of income (pay stubs, Social Security award letter), proof of identity, your Social Security number, proof of residency (utility bill, lease), and information about household expenses.

After submitting, your state schedules a phone or in-person interview. A caseworker reviews your information and asks follow-up questions. You receive a decision within 30 days, and if approved, your EBT card arrives by mail.

If your household is in an emergency situation with very low income and almost no food, ask about expedited SNAP benefits — eligible households can receive benefits within 7 days.`,
    steps: [
      { title: 'Check if you may qualify', content: 'Visit fns.usda.gov/snap to review income limits for your household size. Even if you are close to the limit, deductions for rent, utilities, and medical costs may qualify you.' },
      { title: `Find your state's application`, content: 'Go to fns.usda.gov/snap and click "SNAP State Directory." Select your state to find the link to your online application portal.' },
      { title: 'Gather your documents', content: 'Collect: pay stubs or income documentation, a photo ID, your Social Security number, proof of address, and records of monthly expenses.' },
      { title: 'Complete the online application', content: 'Fill out the application with your household information, income, expenses, and personal details. Many states let you upload document photos through the portal.' },
      { title: 'Complete your interview', content: 'Your state will contact you for a phone or in-person interview. A caseworker verifies your information and may request additional documents.' },
      { title: 'Receive your EBT card', content: 'If approved, your EBT card arrives by mail. Activate it by calling the number on the card. Monthly benefits load automatically.' },
    ],
  },

  {
    slug: 'access-va-benefits-online',
    title: 'How to Access VA Benefits Online',
    excerpt: 'Create your VA.gov account to manage healthcare, disability claims, education benefits, and more — all in one place.',
    category: 'government-civic' as any,
    tags: ['VA', 'veterans', 'military', 'benefits', 'government'],
    readTime: '7 min',
    thumbnailEmoji: '🎖️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `VA.gov is the official website for the U.S. Department of Veterans Affairs. If you are a veteran, service member, or dependent, you can manage healthcare, file disability claims, check education benefits, and access a wide range of services online.

The VA uses Login.gov or ID.me for secure sign-in. If you already have either account, you can sign in to VA.gov right away. Go to va.gov and click "Sign In" in the top-right corner. Choose your sign-in method and follow the prompts.

Once signed in, your dashboard gives you access to healthcare (send messages to VA doctors, refill prescriptions, view records, schedule appointments), disability claims (file new claims, check status, upload documents), education benefits (check GI Bill balance, verify enrollment), and records (download your DD-214, request service records, access benefit letters).

The VA also offers "My HealtheVet," a health portal accessible through VA.gov, which provides full medical records, lab results, and prescription history. You can share this information with non-VA doctors.

For help navigating the website, call the VA's helpline at 1-800-827-1000 or use the online chat feature on VA.gov.`,
    steps: [
      { title: 'Go to va.gov', content: 'Open your web browser and go to va.gov. Click "Sign In" in the top-right corner of the page.' },
      { title: 'Create or use your Login.gov / ID.me account', content: 'Choose Login.gov or ID.me as your sign-in method. If you do not have an account, click "Create an account" and verify your identity with your ID and Social Security number.' },
      { title: 'Explore your VA dashboard', content: 'Your dashboard shows links to healthcare, disability, education, and records. Click any section to manage that area of your benefits.' },
      { title: 'Manage your VA healthcare', content: 'Click "Health care" to send messages to doctors, refill prescriptions, view lab results, and schedule appointments.' },
      { title: 'File or check a disability claim', content: 'Click "Disability" to start a new claim, check status of an existing one, or upload supporting medical records.' },
      { title: 'Download your records', content: 'Click "Records" to download your DD-214, request military service records, or generate VA benefit letters.' },
    ],
  },

  {
    slug: 'use-fema-app-emergency-alerts',
    title: 'How to Use the FEMA App for Emergency Alerts',
    excerpt: 'Download the free FEMA app to receive real-time emergency alerts, find shelters, and access disaster preparedness resources.',
    category: 'government-civic' as any,
    tags: ['FEMA', 'emergency', 'disaster', 'alerts', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `The FEMA app is a free mobile application from the Federal Emergency Management Agency that gives you real-time weather alerts, emergency notifications, and safety information for your area. It also helps you prepare for emergencies, find shelters during disasters, and apply for disaster assistance.

The app works on both iPhone and Android and does not require an account. Download it from the App Store or Google Play Store — search for "FEMA" and look for the app published by the Department of Homeland Security.

When you first open the app, allow notifications and location access. Notifications deliver emergency alerts, and your location ensures you get area-specific information. You can set alerts for up to five locations, including your home, workplace, and family members' cities.

The app provides real-time alerts for severe weather, floods, earthquakes, hurricanes, and other emergencies. During a disaster, the shelter finder shows nearby open shelters on a map with addresses and available services. The preparedness section includes checklists for building an emergency kit, making a family communication plan, and preparing for specific types of disasters.

Set up alerts for the locations where your family members live so you know about emergencies affecting your loved ones even if they forget to call.`,
    steps: [
      { title: 'Download the FEMA app', content: 'Open the App Store (iPhone) or Google Play Store (Android). Search for "FEMA" and download the official app published by the Department of Homeland Security.' },
      { title: 'Allow notifications and location', content: 'When the app asks for permissions, tap "Allow" for both notifications and location access. This ensures you receive relevant emergency alerts for your area.' },
      { title: 'Set up alert locations', content: `In the Alerts section, add up to five locations — your home, workplace, and family members' cities.` },
      { title: 'Explore preparedness resources', content: 'Tap the "Prepare" tab for checklists on emergency supplies, family communication plans, and disaster-specific preparation.' },
      { title: 'Know how to find shelters', content: 'During a disaster, open the Shelters tab to see nearby open shelters on a map with addresses, directions, and services.' },
    ],
  },

  {
    slug: 'get-free-credit-report-annually',
    title: 'How to Get Your Credit Report Free from AnnualCreditReport.com',
    excerpt: 'Check your credit report for free from all three bureaus — the only federally authorized source for free reports.',
    category: 'government-civic' as any,
    tags: ['credit report', 'credit score', 'identity theft', 'finances', 'government'],
    readTime: '6 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your credit report is a detailed record of your borrowing and payment history. Lenders, landlords, and even some employers check it to make decisions about you. Reviewing your report regularly helps you catch errors and spot signs of identity theft early.

Federal law guarantees a free credit report from each of the three major bureaus — Equifax, Experian, and TransUnion — and since 2023 you can get free reports every week. The only federally authorized website is annualcreditreport.com. Beware of lookalike sites that charge fees.

Go to annualcreditreport.com and click "Request your free credit reports." Provide your name, address, Social Security number, and date of birth, then answer security questions based on your credit history.

Choose which reports to view — you can request all three at once or stagger them throughout the year for ongoing monitoring. When reviewing, check for accounts you do not recognize, incorrect personal information, late payments that were made on time, and accounts that should be closed.

If you find an error, you have the right to dispute it. Each bureau has an online dispute process and must investigate within 30 days.

Your credit report does NOT include your credit score. The report is free; the score is sometimes sold separately. However, many banks and credit card companies now show your score for free in their app.`,
    steps: [
      { title: 'Go to AnnualCreditReport.com', content: 'This is the only federally authorized website for free credit reports. Do not use other websites that may charge you.' },
      { title: 'Request your reports', content: 'Click "Request your free credit reports" and enter your personal information.' },
      { title: 'Answer security questions', content: 'Provide your name, address, Social Security number, and date of birth. Answer security questions based on your credit history.' },
      { title: 'Choose which bureaus to check', content: 'Select Equifax, Experian, and TransUnion — or stagger checks throughout the year for ongoing monitoring.' },
      { title: 'Review each report carefully', content: 'Look for unrecognized accounts, incorrect details, and inaccurate payment history. Any of these could be errors or identity theft.' },
      { title: 'Dispute any errors', content: `Use each bureau's online dispute process. They must investigate within 30 days and correct verified errors.` },
    ],
  },

  {
    slug: 'set-up-real-id-appointment',
    title: 'How to Set Up a REAL ID Appointment Online',
    excerpt: 'Schedule your REAL ID appointment at your state DMV — learn what documents to bring and how to prepare.',
    category: 'government-civic' as any,
    tags: ['REAL ID', 'DMV', 'identification', 'driver license', 'government'],
    readTime: '6 min',
    thumbnailEmoji: '🪪',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `REAL ID is a federally compliant form of identification needed to board domestic flights and enter certain federal buildings. A REAL ID-compliant license or ID card has a gold or black star in the top-right corner. If your current license does not have this star, you need to visit your state DMV.

Most states let you schedule appointments online. Search "[your state] DMV appointment" in Google, or visit your state's official DMV website (look for a .gov URL). Find "Schedule an Appointment" or "REAL ID" and select the service. Choose a date, time, and location.

You need to bring specific documents: one proof of identity (valid passport, birth certificate, or permanent resident card), one proof of Social Security number (Social Security card, W-2, or SSA-1099), and two proofs of state residency (utility bill, bank statement, mortgage statement, or rental agreement). If you changed your name since your birth certificate, bring legal documentation.

Many state DMV websites have a document checker tool — enter what documents you have and it tells you if they meet the requirements. Use this before your appointment so you do not waste a trip.`,
    steps: [
      { title: `Find your state's DMV website`, content: 'Search "[your state] DMV" in Google and look for the official .gov website.' },
      { title: 'Navigate to the appointment scheduler', content: 'Look for "Schedule an Appointment" or "REAL ID" and select the REAL ID service type.' },
      { title: 'Choose location, date, and time', content: 'Select a DMV office near you and pick an available slot. If booked, try other offices or check back for cancellations.' },
      { title: 'Use the document checker tool', content: 'Most DMV websites offer a tool to verify your documents meet REAL ID requirements before you go.' },
      { title: 'Gather required documents', content: 'Bring: one proof of identity (birth certificate or passport), one proof of Social Security number (SSN card or W-2), and two proofs of residency (utility bills or bank statements).' },
      { title: 'Attend your appointment', content: 'Arrive on time with all documents. The clerk will verify your identity, take your photo, and issue your REAL ID — look for the gold or black star.' },
    ],
  },

  {
    slug: 'apply-unemployment-benefits-online',
    title: 'How to Apply for Unemployment Benefits Online',
    excerpt: 'File for unemployment insurance through your state website after losing a job — learn who qualifies and how to apply.',
    category: 'government-civic' as any,
    tags: ['unemployment', 'job loss', 'benefits', 'government', 'financial assistance'],
    readTime: '7 min',
    thumbnailEmoji: '💼',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If you lost your job through no fault of your own (layoff, company closure, reduction in hours), you may be eligible for unemployment insurance. The program provides temporary financial assistance while you look for new work. It is run by each state, so application processes and benefit amounts vary.

You may qualify if: you lost your job through no fault of your own, you worked for a certain period and earned a minimum amount (your state sets the requirements), and you are able and actively looking for work.

To apply, file a claim through your state's unemployment website. Search "[your state] unemployment benefits" or go to careeronestop.org for links to every state's system.

You will need: your Social Security number, driver's license number, work history for the past 18 months (employer names, addresses, dates, and reason for separation), and bank routing and account numbers for direct deposit.

After filing, your state reviews the claim and may contact your former employer. Approval typically takes 2 to 3 weeks. Most states require you to certify continued eligibility every week or two — confirming you are still looking for work and reporting any income.

File as soon as possible. Most states have a one-week unpaid waiting period, and delays in filing mean delays in payments.`,
    steps: [
      { title: `Find your state's unemployment website`, content: `Search "[your state] unemployment benefits" or go to careeronestop.org for a direct link to your state's portal.` },
      { title: 'Create an account', content: 'Most states require an online account. Enter your personal information, email, and a password.' },
      { title: 'Gather employment information', content: `Collect: Social Security number, driver's license number, employer names and addresses for the past 18 months, employment dates, and reasons for leaving.` },
      { title: 'Complete the application', content: 'Answer all questions about work history, reason for job loss, and current status. Be accurate — your former employer will be contacted.' },
      { title: 'Set up direct deposit', content: 'Enter bank routing and account numbers for faster, safer benefit payments.' },
      { title: 'Certify weekly', content: 'Log in every week or two to certify you are still looking for work, report any income, and confirm you have not turned down a job offer.' },
    ],
  },

  {
    slug: 'find-property-tax-info-online',
    title: 'How to Find Your Property Tax Information Online',
    excerpt: 'Look up your property tax assessment, payment history, and due dates through your county assessor or treasurer website.',
    category: 'government-civic' as any,
    tags: ['property tax', 'real estate', 'county', 'government', 'homeowner'],
    readTime: '5 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Property taxes are collected by your local government to fund schools, roads, and emergency services. You can look up your tax information online — including how much you owe, due dates, assessment value, and payment history.

Property tax information is managed at the county level. Search "[your county name] property tax" or "[your county name] assessor" in Google and use the official .gov website.

Most county websites let you search by property address, parcel number, or your name. Once you find your property, you can view your assessed value, tax rate, current amount due, past-due amounts, payment history, and information about exemptions.

Many counties offer a homestead exemption that reduces your tax if the home is your primary residence. Check your county assessor's website — it could save you hundreds per year. You typically only need to apply once.

If you believe your property is over-assessed, you can appeal. Look for an "Appeal" or "Protest" section on your assessor's website. Appeals are usually due within 30 to 90 days of your assessment notice.`,
    steps: [
      { title: `Search for your county's tax website`, content: 'Google "[your county name] property tax" or "[your county name] assessor." Click the official .gov website.' },
      { title: 'Search for your property', content: 'Enter your home address, parcel number, or name to find your property record.' },
      { title: 'Review your assessed value', content: 'Check the value the county assigned to your property — this is used to calculate your tax and may differ from market value.' },
      { title: 'Check balance and due dates', content: 'Review how much you owe and when payments are due. Note any past-due amounts or penalties.' },
      { title: 'Look into exemptions', content: 'Check if you qualify for homestead, senior, veteran, or disability exemptions that can lower your bill.' },
      { title: 'Appeal if assessment is too high', content: `Look for the "Appeal" section on your assessor's website. Note the deadline — typically 30 to 90 days from your assessment notice.` },
    ],
  },

  {
    slug: 'use-recreation-gov-national-parks',
    title: 'How to Use Recreation.gov for National Park Reservations',
    excerpt: 'Book campgrounds, park passes, and permits at national parks and federal recreation areas through Recreation.gov.',
    category: 'government-civic' as any,
    tags: ['national parks', 'camping', 'recreation', 'government', 'outdoors'],
    readTime: '6 min',
    thumbnailEmoji: '🏕️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Recreation.gov is the official reservation system for campgrounds, cabins, and permits at national parks, forests, and federal recreation areas. If you want to camp at popular parks like Yellowstone or Yosemite, you will need to book through this website.

Many popular campgrounds fill up months in advance. Reservations typically open on a rolling basis, often 6 months before the stay date. Create a free account at recreation.gov so you are ready when sites become available.

Search for your destination using the search bar. Click a campground to see photos, descriptions, amenities, and availability calendar. Select dates, choose a site, add to cart, and pay with a credit or debit card.

Recreation.gov is also where you purchase the America the Beautiful Annual Pass ($80), which covers entrance fees at all national parks and federal recreation areas for one year.

Set a reminder for when reservations open. Most parks release sites at 10:00 AM Eastern time, 6 months before the stay date. Popular sites sell out within minutes. Having your account ready, payment saved, and dates planned helps you secure a spot.`,
    steps: [
      { title: 'Create an account at recreation.gov', content: 'Go to recreation.gov, click "Sign In" then "Create Account." Having your account ready lets you book quickly when sites become available.' },
      { title: 'Search for your destination', content: 'Type the park or recreation area name in the search bar. Click the result to see campgrounds, cabins, and facilities.' },
      { title: 'Check availability', content: 'Click a campground to see the availability calendar. Green dates have openings. Select check-in and check-out dates.' },
      { title: 'Choose a campsite', content: 'Browse available sites with photos, amenities, and nightly rates. Some campgrounds let you pick a specific site from a map.' },
      { title: 'Complete your reservation', content: 'Add your site to the cart and pay with credit or debit card. Save your confirmation email with reservation details.' },
      { title: 'Consider the annual pass', content: 'The $80 America the Beautiful pass covers entrance fees at all national parks for a year — a great value if you visit more than two parks.' },
    ],
  },

  // ═══════════════════════════════════════════
  // FINANCIAL TECHNOLOGY (15 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-mobile-check-deposit',
    title: 'How to Set Up Mobile Check Deposit on Your Phone',
    excerpt: `Deposit checks from your phone using your bank's app — no trip to the branch or ATM required.`,
    category: 'financial-tech' as any,
    tags: ['mobile banking', 'check deposit', 'banking', 'phone', 'finances'],
    readTime: '5 min',
    thumbnailEmoji: '🏦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Mobile check deposit lets you deposit a paper check into your bank account by taking a photo of it with your phone. Nearly every major bank and credit union offers this free feature. Download your bank's app from the App Store or Google Play Store and sign in with your online banking credentials.

Look for "Deposit" or "Mobile Deposit" in the app. The first time, your bank may take a day or two to enable the feature. When ready, endorse the back of the check with your signature and write "For Mobile Deposit Only" below it — this is required by federal regulations.

Tap "Deposit," enter the check amount, select your account, and photograph the front and back of the check. Place the check on a dark, flat surface under good lighting. Hold your phone steady directly above it. Review the images for clarity, then tap "Submit." Funds are typically available within 1 to 2 business days.

Keep the physical check for 30 days after depositing, then shred it. Never deposit the same check at an ATM or branch — double-depositing causes serious account problems.`,
    steps: [
      { title: `Download your bank's app`, content: `Open the App Store or Google Play Store, search for your bank's name, download the official app, and sign in with your online banking credentials.` },
      { title: 'Find Mobile Deposit', content: 'Look for "Deposit" or "Mobile Deposit" on the home screen or navigation menu. Your bank may take a day to activate this feature the first time.' },
      { title: 'Endorse the check', content: 'Sign the back of the check and write "For Mobile Deposit Only" below your signature. This endorsement is required by federal regulations.' },
      { title: 'Enter deposit details', content: 'Tap "Deposit," enter the exact dollar amount on the check, and select which account receives the deposit.' },
      { title: 'Photograph front and back', content: 'Place the check on a dark, flat surface under good lighting. Hold your phone steady above it and let the app capture clear photos of both sides.' },
      { title: 'Submit and keep the check', content: 'Review images for clarity and tap "Submit." Funds arrive in 1 to 2 business days. Keep the paper check for 30 days, then shred it.' },
    ],
  },

  {
    slug: 'send-money-with-zelle',
    title: 'How to Send Money with Zelle',
    excerpt: 'Send money to friends and family in minutes using Zelle — built into most major bank apps, with no fees.',
    category: 'financial-tech' as any,
    tags: ['Zelle', 'money transfer', 'banking', 'payments', 'finances'],
    readTime: '5 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Zelle lets you send money from your bank account to someone else's bank account in minutes. It is built into 2,000+ bank apps including Chase, Bank of America, Wells Fargo, and Capital One. There are no fees, and money moves directly between bank accounts — no separate balance to manage.

Open your bank's app and look for "Zelle" or "Send Money with Zelle" in the transfers section. The first time, you enroll by connecting your email or phone number to your bank account. When someone sends you money using that email or phone, it goes directly to your linked account.

To send: enter the recipient's email or phone number, enter the amount, add an optional note, and tap "Send." If the recipient is enrolled, money arrives in minutes. If not, they get instructions to sign up and claim the payment. You can also request money from someone.

Important safety note: Zelle transfers are instant and cannot be reversed. Only send money to people you know and trust. Scammers pretend to be your bank and ask you to "send money to yourself" to fix a problem — your bank will never ask this. If a stranger asks you to pay with Zelle, that is a red flag.`,
    steps: [
      { title: `Open Zelle in your bank's app`, content: `Open your bank's mobile app and look for "Zelle" or "Send Money with Zelle" in the transfers or payments section.` },
      { title: 'Enroll your email or phone number', content: 'Choose whether to connect your email address or phone number. This is how people will send money to you.' },
      { title: `Enter the recipient's information`, content: `Tap "Send" and enter the recipient's email address or phone number. They need to be enrolled with Zelle or will receive signup instructions.` },
      { title: 'Enter amount and send', content: 'Type the dollar amount, add an optional note, review the details, and tap "Send." Money arrives in minutes.' },
      { title: 'Know the safety rules', content: 'Only send to people you know and trust. Transfers cannot be reversed. Your bank will never ask you to send money through Zelle to fix a problem.' },
    ],
  },

  {
    slug: 'use-venmo-safely',
    title: 'How to Use Venmo Safely',
    excerpt: 'Set up Venmo, send payments to friends, and adjust privacy settings to keep your transactions private.',
    category: 'financial-tech' as any,
    tags: ['Venmo', 'payments', 'money transfer', 'privacy', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Venmo is a mobile payment app owned by PayPal for sending and receiving money from friends and family. It is free for personal payments from your bank account or Venmo balance. Download Venmo from the App Store or Google Play Store, create an account, and link a bank account or debit card.

Critical privacy setting: By default, Venmo makes your transactions visible to friends and sometimes the public. Change this immediately. Go to Settings, then Privacy, and change your default setting to "Private." This hides transactions from everyone except you and the recipient.

To send money, tap "Pay or Request," search for the person by username, phone, or email, enter the amount and a note, and tap "Pay." Use bank account or debit card to avoid fees (credit cards charge 3%).

When you receive money, it goes to your Venmo balance. Transfer it to your bank account — standard transfers (1-3 days) are free, instant transfers cost 1.75%. Enable PIN or biometric login in Settings, then Security for extra protection.

Only use Venmo with people you know. Never use it to pay strangers for online purchases. If someone you do not know sends you money, do not spend it — it may be a scam involving a stolen card.`,
    steps: [
      { title: 'Download and set up Venmo', content: 'Download from App Store or Google Play Store. Create an account and link a bank account or debit card.' },
      { title: 'Change privacy to Private immediately', content: 'Go to Settings → Privacy → change default to "Private" to prevent transactions from being visible to others.' },
      { title: 'Send a payment', content: 'Tap "Pay or Request," search for the person, enter amount and note, then tap "Pay." Use bank account or debit card to avoid fees.' },
      { title: 'Transfer money to your bank', content: 'Tap "Transfer" to move received money to your bank. Standard transfers are free (1-3 days); instant costs 1.75%.' },
      { title: 'Enable biometric security', content: 'Go to Settings → Security and turn on Face ID, Touch ID, or PIN to protect your account if someone else has your phone.' },
    ],
  },

  {
    slug: 'use-cash-app-step-by-step',
    title: 'How to Use Cash App Step by Step',
    excerpt: 'Set up Cash App, link your bank account, and send or receive money — with safety tips to protect your account.',
    category: 'financial-tech' as any,
    tags: ['Cash App', 'money transfer', 'payments', 'mobile banking', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '💵',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Cash App by Block (formerly Square) lets you send and receive money, invest, and buy Bitcoin. For most people, the main use is sending money to friends and family. Download Cash App, enter your phone number or email, verify with a code, and create a unique $cashtag (your Cash App username).

Link a funding source: tap your profile icon, then "Linked Banks." Enter your bank routing and account numbers or a debit card. Bank transfers are free; credit cards charge 3%.

To send money: tap the "$" on the home screen, type the amount, tap "Pay," enter the recipient's $cashtag, phone number, or email, add a note, and confirm. Money comes from your Cash App balance first, then your linked bank.

When you receive money, tap "Cash Out" to transfer to your bank. Standard transfers (1-3 business days) are free; instant costs 0.5% to 1.75%.

Safety is critical. Never send money to someone you do not know. Never share your sign-in code with anyone. Cash App support will never ask for your PIN or sign-in code. If someone promises to "flip" your money, it is always a scam. Turn on Security Lock in settings to require Face ID, Touch ID, or PIN every time you open the app.`,
    steps: [
      { title: 'Download Cash App', content: 'Get Cash App from the App Store or Google Play Store. Open it, enter your phone number or email, and verify with the code sent to you.' },
      { title: 'Create your $cashtag', content: 'Choose a unique $cashtag — your public username for receiving payments (like $JohnSmith).' },
      { title: 'Link your bank account', content: 'Tap your profile → "Linked Banks" → enter routing and account numbers or add a debit card. Bank transfers are free.' },
      { title: 'Send money', content: 'Tap "$," enter amount, tap "Pay," search for recipient by $cashtag, phone, or email. Add a note and confirm.' },
      { title: 'Cash out to your bank', content: 'Tap "Cash Out" to transfer your balance. Standard is free (1-3 days); instant has a small fee.' },
      { title: 'Enable Security Lock', content: 'Go to profile → Privacy & Security → Security Lock. This requires biometric or PIN authentication every time you open Cash App.' },
    ],
  },

  {
    slug: 'set-up-auto-pay-bills',
    title: 'How to Set Up Auto-Pay for Your Bills',
    excerpt: 'Set up automatic payments for recurring bills so you never miss a due date or pay a late fee again.',
    category: 'financial-tech' as any,
    tags: ['auto-pay', 'bills', 'payments', 'banking', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Auto-pay lets you set recurring bills to pay automatically each month from your bank account, debit card, or credit card. It eliminates missed due dates, late fees, and the stress of remembering every bill.

There are two ways to set it up. Through the biller's website: log in to your electric company, phone carrier, or credit card issuer, find "Payment Settings" or "Auto-Pay," choose your payment method and amount (full balance, minimum, or fixed amount), and set when payments occur. Through your bank's bill pay: most banks offer "Bill Pay" where you enter the biller's info, set the amount and frequency, and your bank sends payment each month.

Good candidates for auto-pay: rent or mortgage, utilities, phone and internet, insurance, streaming subscriptions, and credit card minimum payments. Even with auto-pay, review your bills and statements each month for errors, price increases, or fraudulent charges.

Be cautious with free trials requiring a credit card — companies often start charging when the trial ends. Set a calendar reminder to cancel before conversion. If using auto-pay with a bank account, ensure you always have enough to cover the payment. Insufficient funds can result in overdraft fees from your bank and returned-payment fees from the biller.`,
    steps: [
      { title: 'Choose bills for auto-pay', content: 'Start with fixed-amount bills (insurance, subscriptions, phone). Then consider variable bills like utilities where you can auto-pay the full balance or minimum.' },
      { title: `Log in to the biller's website`, content: `Go to the company's website or app, sign in, and find "Payment Settings," "Auto-Pay," or "Automatic Payments."` },
      { title: 'Choose your payment method', content: 'Select bank account (usually free) or card (some billers charge a fee). Enter your payment information.' },
      { title: 'Set amount and timing', content: 'Choose to pay the full balance, minimum, or a fixed amount. Set whether payment happens on the due date or a few days before.' },
      { title: 'Confirm and verify', content: 'Review settings and confirm. You should receive a confirmation email. The next payment processes automatically on schedule.' },
      { title: 'Review statements monthly', content: 'Set a monthly reminder to review bills and statements. Auto-pay does not catch billing errors or unauthorized charges.' },
    ],
  },

  {
    slug: 'check-credit-score-free',
    title: 'How to Check Your Credit Score for Free',
    excerpt: 'Check your credit score without paying — your bank, credit card company, or free apps show your score at no cost.',
    category: 'financial-tech' as any,
    tags: ['credit score', 'credit', 'finances', 'banking', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📈',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your credit score (300-850) represents your creditworthiness. A higher score means better loan rates, easier apartment approvals, and sometimes lower insurance premiums. You can check it for free — no need to pay anyone.

Your bank or credit card company likely shows it for free. Chase, Bank of America, Capital One, Discover, and American Express all offer this. Log in and look for "Credit Score" or "FICO Score" on your dashboard.

Credit Karma is a free app showing TransUnion and Equifax scores, updated weekly, plus factors affecting your score. It makes money by recommending products — you do not have to buy anything. Experian offers a free FICO Score at experian.com with free monitoring.

Your score may vary 20-40 points between sources depending on the scoring model (FICO vs. VantageScore) and bureau. What matters is the range: 670+ is "Good," 740+ is "Very Good," 800+ is "Exceptional."

Checking your own score is a "soft inquiry" and does NOT lower it. Check as often as you want. The biggest factor in your score is payment history — paying on time accounts for 35%. Setting up auto-pay for at least minimum payments is one of the most effective ways to build and maintain a good score.`,
    steps: [
      { title: 'Check your bank or credit card app', content: 'Log in and look for "Credit Score" or "FICO Score" on your dashboard. Most major issuers include this for free.' },
      { title: 'Download Credit Karma', content: 'Get the free app for TransUnion and Equifax scores updated weekly, plus factors affecting your score.' },
      { title: 'Get your Experian score', content: 'Create a free account at experian.com for your Experian FICO Score and free monitoring alerts.' },
      { title: 'Understand the ranges', content: 'Below 580 is "Poor," 580-669 "Fair," 670-739 "Good," 740-799 "Very Good," 800+ "Exceptional."' },
      { title: 'Know what affects your score', content: 'Payment history (35%), amounts owed (30%), credit history length (15%), new inquiries (10%), and credit types (10%). Paying on time matters most.' },
    ],
  },

  {
    slug: 'set-up-fraud-alerts-bank',
    title: 'How to Set Up Fraud Alerts on Your Bank Account',
    excerpt: 'Enable transaction alerts and fraud notifications so your bank contacts you immediately about suspicious activity.',
    category: 'financial-tech' as any,
    tags: ['fraud', 'banking', 'security', 'alerts', 'identity theft'],
    readTime: '5 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Fraud alerts and transaction notifications are your first defense against unauthorized charges. When enabled, your bank sends a text, email, or push notification for every transaction — or when something suspicious is detected. This lets you catch fraud within minutes instead of weeks.

Banks offer transaction alerts (notifications for every transaction over a threshold you set) and fraud monitoring alerts (automated detection of unusual activity like purchases in different states or large transactions).

To set up: log in to your bank's app or website, go to Settings or Alerts, and look for "Transaction Alerts" or "Security Alerts." Choose notification types: purchases over a certain amount, ATM withdrawals, online transactions, international transactions, low balance warnings, and deposits received.

For fraud monitoring, make sure your phone number and email are current in your bank's records. If your bank cannot reach you about suspicious activity, they may freeze your card.

If you receive a text claiming to be from your bank with a link to click — do NOT click it. Scammers send fake alert texts to steal your login. Instead, call your bank directly using the number on the back of your card.`,
    steps: [
      { title: `Open your bank's settings`, content: `Sign in to your bank's app or website. Navigate to Settings, Alerts, Notifications, or Security.` },
      { title: 'Enable transaction alerts', content: 'Turn on notifications for purchases, ATM withdrawals, online transactions, and balance changes. Set threshold to $0 to see every transaction.' },
      { title: 'Choose notification method', content: 'Select push notifications (fastest), text messages, or email. Push notifications offer the most immediate protection.' },
      { title: 'Verify contact information', content: 'Make sure your phone number and email are up to date so your bank can reach you about suspicious transactions.' },
      { title: 'Recognize fake fraud alerts', content: 'If you get a text with a link claiming to be your bank, do not click it. Call the number on the back of your card to verify if the alert is real.' },
    ],
  },

  {
    slug: 'use-paypal-safely',
    title: 'How to Use PayPal Safely',
    excerpt: 'Set up PayPal, link your bank account, and use it for online purchases with extra protection for your financial info.',
    category: 'financial-tech' as any,
    tags: ['PayPal', 'online shopping', 'payments', 'security', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `PayPal lets you pay online without sharing your card or bank details with the seller. You log in to PayPal at checkout, confirm payment, and PayPal handles the rest. The seller never sees your financial details.

Create an account at paypal.com — click "Sign Up," choose "Personal Account," enter your info, and verify your email. Link a bank account in your PayPal Wallet — PayPal verifies it with two small deposits you confirm. Bank payments have no fees for personal transactions.

At checkout online, look for the PayPal button. Click it, sign in, and confirm. PayPal's buyer protection means if an item does not arrive or is significantly different from described, PayPal investigates and may refund your money — protection for eligible purchases within 180 days.

Enable two-factor authentication in Settings → Security → 2-Step Verification. Never send money to strangers outside normal checkout. Never click links in emails claiming to be PayPal — always type paypal.com directly. Do not keep a large balance in PayPal; link a bank account and let PayPal pull when needed to minimize exposure if compromised.`,
    steps: [
      { title: 'Create a PayPal account', content: 'Go to paypal.com, click "Sign Up," choose "Personal Account," enter your details, and verify your email.' },
      { title: 'Link your bank account', content: 'In PayPal Wallet, click "Link a bank account" and enter routing and account numbers. Verify with the two small deposits PayPal makes.' },
      { title: 'Enable two-factor authentication', content: 'Go to Settings → Security → 2-Step Verification. Choose text message or authenticator app for extra login protection.' },
      { title: 'Use PayPal at checkout', content: 'When shopping online, click the PayPal button at checkout, sign in, and confirm. The seller never sees your bank or card details.' },
      { title: 'Understand buyer protection', content: 'If an item does not arrive or is not as described, open a dispute within 180 days. PayPal investigates and may refund you.' },
    ],
  },

  {
    slug: 'set-up-apple-pay-google-pay',
    title: 'How to Set Up Apple Pay or Google Pay',
    excerpt: 'Add your card to Apple Pay or Google Pay for quick, secure contactless payments with your phone.',
    category: 'financial-tech' as any,
    tags: ['Apple Pay', 'Google Pay', 'contactless', 'mobile payments', 'wallet'],
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/embed/IN1370MtoTs',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Apple Pay (iPhone) and Google Pay (Android) let you pay at stores by holding your phone near the card reader. Look for the contactless payment symbol (sideways WiFi icon) at checkout. These are safer than physical cards — your real card number is never transmitted to the merchant.

For iPhone: open the Wallet app, tap "+," scan your card or enter numbers manually. Your bank verifies the card with a code. To pay: double-click the side button (Face ID) or rest your finger on Home button (Touch ID) while holding near the reader.

For Android: download Google Wallet from Play Store, tap "Add to Wallet" → "Payment card," and enter card info. Your bank sends a verification code. To pay: unlock your phone and hold it near the reader.

You can add multiple cards and set a default for everyday purchases. Switch cards at payment time if needed. Contactless payments work at millions of stores, restaurants, and vending machines.`,
    steps: [
      { title: 'iPhone: Open Wallet app', content: 'Find the Wallet app (blue icon) and tap "+" to add a new card.' },
      { title: 'Android: Open Google Wallet', content: 'Download Google Wallet from Play Store, tap "Add to Wallet" → "Payment card."' },
      { title: 'Add your card', content: 'Scan your physical card with the camera or enter the number, expiration, and security code manually.' },
      { title: 'Verify with your bank', content: 'Your bank sends a verification code by text, email, or call. Enter the code in the app.' },
      { title: 'Pay at a store', content: 'Look for the contactless symbol. iPhone: double-click side button, hold near reader. Android: unlock phone, hold near reader. Wait for vibration confirmation.' },
    ],
  },

  {
    slug: 'use-bank-mobile-app',
    title: `How to Use Your Bank's Mobile App`,
    excerpt: `Download and set up your bank's app to check balances, pay bills, transfer money, and deposit checks from your phone.`,
    category: 'financial-tech' as any,
    tags: ['mobile banking', 'bank app', 'finances', 'phone', 'beginners'],
    readTime: '6 min',
    thumbnailEmoji: '🏧',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your bank's mobile app puts your entire banking experience in your pocket — check balances, review transactions, pay bills, transfer money, deposit checks, and lock your debit card. Nearly every bank offers a free app.

Download your bank's official app from the App Store or Google Play Store. Verify the publisher matches your bank's name. Sign in with your online banking credentials. If you have never set up online banking, the app guides you through enrollment.

Enable Face ID, Touch ID, or fingerprint login when prompted — this is faster and adds security. The home screen shows account balances; tap an account for recent transactions and available balance.

Key features: "Transfer" or "Move Money" for moving between accounts, "Bill Pay" for scheduling payments, "Mobile Deposit" for photographing checks, and the ability to lock/unlock your debit card if misplaced.

Turn on push notifications in the app settings for instant alerts about deposits, withdrawals, and suspicious activity. This is one of the best ways to catch unauthorized transactions quickly.`,
    steps: [
      { title: `Download your bank's official app`, content: `Search your bank's name in the App Store or Google Play Store. Verify the publisher is your actual bank before downloading.` },
      { title: 'Sign in or enroll', content: 'Sign in with your online banking username and password. If you have not set up online banking, tap "Enroll" and follow the prompts.' },
      { title: 'Enable biometric login', content: 'When asked to use Face ID, Touch ID, or fingerprint, tap "Yes" for faster, more secure logins.' },
      { title: 'Explore your accounts', content: 'The home screen shows balances. Tap any account to see recent transactions, pending charges, and available balance.' },
      { title: 'Set up bill pay and transfers', content: 'Find "Bill Pay" to set up regular payments and "Transfer" to move money between your accounts.' },
      { title: 'Turn on push notifications', content: 'Enable alerts for deposits, withdrawals, large transactions, and low balance warnings in the app settings.' },
    ],
  },

  {
    slug: 'monitor-bank-suspicious-activity',
    title: 'How to Monitor Your Bank Account for Suspicious Activity',
    excerpt: 'Learn what to watch for in bank statements and how to catch unauthorized charges before they become bigger problems.',
    category: 'financial-tech' as any,
    tags: ['banking', 'fraud', 'security', 'monitoring', 'finances'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Regularly checking your bank account is one of the most effective fraud protections. Thieves often start with small test charges ($1-2) to check if an account is active before making larger purchases. Catching these early can save thousands.

Check your account at least weekly — with your bank's app, this takes under two minutes. Watch for: charges from unfamiliar merchants (especially small amounts), duplicate charges, unauthorized recurring payments, and transactions in places you have not visited.

If you find suspicious activity: contact your bank immediately by calling the number on the back of your card. They will freeze the card, issue a new one, investigate, and reverse confirmed fraud. Federal law limits your liability to $50 for credit cards and $50-$500 for debit cards depending on how quickly you report.

After reporting, change your online banking password and passwords for connected accounts. Monitor closely for the next few weeks as additional unauthorized charges may appear.

Prevention: enable transaction alerts for every charge, use strong unique passwords, avoid banking on public WiFi, and check your credit report annually. Consider using credit cards instead of debit cards for everyday purchases — credit cards have stronger federal fraud protections and the money is not taken directly from your bank account.`,
    steps: [
      { title: 'Check your account weekly', content: 'Open your bank app and review recent transactions — takes under two minutes. Set a weekly reminder.' },
      { title: 'Look for small unfamiliar charges', content: 'Watch for charges as small as $1 from unknown merchants. Also check for duplicates and unfamiliar recurring payments.' },
      { title: 'Report suspicious charges immediately', content: 'Call the number on your bank card right away. They will freeze the card, investigate, and issue a replacement.' },
      { title: 'Change your banking password', content: 'After reporting fraud, change your online banking password and any accounts using the same credentials.' },
      { title: 'Enable transaction notifications', content: 'Turn on push notifications for every transaction so you catch unauthorized charges within minutes.' },
    ],
  },

  {
    slug: 'set-up-direct-deposit',
    title: 'How to Set Up Direct Deposit',
    excerpt: 'Get your paycheck, Social Security, or tax refund deposited straight to your bank account — faster and safer.',
    category: 'financial-tech' as any,
    tags: ['direct deposit', 'paycheck', 'banking', 'employment', 'finances'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Direct deposit sends money from a payer (employer, government, retirement fund) straight into your bank account on payday. No paper check, no bank trip, no waiting for it to clear. Money is available on the payment date, often earlier than a physical check.

You need two numbers from your bank: the routing number (9 digits identifying your bank) and your account number. Find both in your bank's app under "Account Details" or "Direct Deposit," on a check, or on your bank's website.

For your paycheck: ask HR or payroll for a direct deposit form. Fill in routing number, account number, and whether it goes to checking or savings. Many employers let you split deposits between accounts (like 80% checking, 20% savings).

For Social Security: sign in at ssa.gov and update your payment method in account settings. For tax refunds: enter routing and account numbers when filing your return — refunds arrive in about 21 days versus 6-8 weeks by mail.

Double-check every digit before submitting. A wrong number can send money to someone else's account. Most banks display these numbers clearly in their app.`,
    steps: [
      { title: 'Find your routing and account numbers', content: 'Open your bank app and look for "Account Details" or "Direct Deposit Info." The routing number is 9 digits; the account number identifies your specific account.' },
      { title: 'Get the form from your employer', content: 'Ask HR or payroll for a direct deposit authorization form, or look for the option in your employee portal.' },
      { title: 'Fill in bank information', content: 'Enter routing number, account number, and specify checking or savings. Double-check every digit.' },
      { title: 'Choose deposit split (optional)', content: 'Many employers let you split your paycheck — consider sending a percentage directly to savings.' },
      { title: 'Submit and confirm', content: 'Submit the form. It may take one or two pay cycles to start. Confirm with HR when active.' },
    ],
  },

  {
    slug: 'dispute-credit-card-charge',
    title: 'How to Dispute a Charge on Your Credit Card',
    excerpt: 'Found a charge you do not recognize? Learn how to dispute it with your credit card company and get your money back.',
    category: 'financial-tech' as any,
    tags: ['credit card', 'dispute', 'fraud', 'billing', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If you find an unauthorized charge, wrong amount, or charge for something you did not receive on your credit card, you have the right to dispute it under the Fair Credit Billing Act. Your maximum liability for unauthorized charges is $50, and most issuers waive even that.

Reasons to dispute: unauthorized transactions, billing errors (wrong amount, double charges, returned item charges), goods not received, or goods significantly different from advertised.

Try contacting the merchant first for billing errors or undelivered goods — many issues resolve with a phone call. Keep records of communication. If the merchant does not resolve it, or the charge is unauthorized, contact your credit card company through the app, website, or phone number on your card.

When filing: explain specifically why you are disputing ("I did not authorize this transaction" or "I was charged $75.99 but the correct amount was $45.99"). Provide supporting documents — receipts, confirmations, emails, photos.

Your card company must acknowledge within 30 days and resolve within 90 days. During investigation, you do not pay the disputed amount and it cannot be reported as overdue. You must dispute within 60 days of the statement date, so review statements regularly.`,
    steps: [
      { title: 'Identify the suspicious charge', content: `Review your statement in your card company's app or website. Note the date, amount, and merchant name.` },
      { title: 'Try contacting the merchant', content: 'For billing errors or undelivered goods, call or email the merchant first. Keep records of your communication.' },
      { title: 'File a dispute with your card company', content: 'In the app or website, find the charge and tap "Dispute" or "Report a problem." Or call the number on your card.' },
      { title: 'Provide documentation', content: 'Upload evidence: receipts, order confirmations, emails, tracking numbers, or photos of damaged goods.' },
      { title: 'Wait for investigation', content: 'Your card company acknowledges within 30 days and resolves within 90 days. You do not pay the disputed amount during this time.' },
      { title: 'Review the outcome', content: 'If the charge is removed, verify on your statement. If it stands, you can request the evidence used in the decision.' },
    ],
  },

  {
    slug: 'understand-credit-card-statement',
    title: 'How to Understand Your Credit Card Statement',
    excerpt: 'Learn how to read your credit card statement — what each section means, how interest works, and what to watch for.',
    category: 'financial-tech' as any,
    tags: ['credit card', 'statement', 'interest', 'billing', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your credit card statement shows everything that happened on your account during the billing period. Understanding each section helps you manage money, catch errors, and avoid unnecessary interest.

The Account Summary at the top shows: previous balance, payments made, new charges, fees, interest, new balance, credit limit, and available credit. Payment Information shows your minimum payment due, total balance, due date, and a federally required warning about how long it takes to pay off the balance with minimums only.

Transaction Details lists every purchase, payment, return, and fee with dates, merchant names, and amounts. Review these carefully to verify every charge. Fees and Interest shows late fees, annual fees, cash advance fees, interest charged, and your APR. If you pay your full balance by the due date, you pay zero interest.

Key dates: billing cycle end date (when the statement generates), payment due date (when payment must arrive), and grace period (21-25 days between statement date and due date — no interest on new purchases if you paid last month in full).

Pay your full statement balance by the due date to avoid all interest. If you cannot, always pay at least the minimum to avoid late fees and credit score damage. Set up auto-pay for at least the minimum.`,
    steps: [
      { title: 'Find your statement', content: `Log in to your card company's website or app. Look for "Statements" or "Documents" in the menu.` },
      { title: 'Review the Account Summary', content: 'Check previous balance, new charges, payments, and new balance. Compare to your credit limit.' },
      { title: 'Check Payment Information', content: 'Note your due date and minimum payment. Read the payoff warning to understand why paying more than the minimum matters.' },
      { title: 'Review every transaction', content: 'Go through the list carefully. Flag any unfamiliar charges — these could be errors or unauthorized transactions.' },
      { title: 'Understand interest charges', content: 'Check your APR and interest charged. If you paid last statement in full by the due date, interest should be $0.' },
      { title: 'Pay by the due date', content: 'Pay at least the minimum to avoid late fees ($25-41). Pay the full balance to avoid interest. Set up auto-pay for safety.' },
    ],
  },

  // ═══════════════════════════════════════════
  // SMART HOME (15 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-amazon-alexa-echo',
    title: 'How to Set Up Amazon Alexa (Echo) from Scratch',
    excerpt: 'Unbox and set up your Amazon Echo speaker — connect to WiFi, personalize settings, and start using voice commands.',
    category: 'smart-home' as any,
    tags: ['Alexa', 'Amazon Echo', 'smart speaker', 'voice assistant', 'setup'],
    readTime: '7 min',
    videoUrl: 'https://www.youtube.com/embed/UaEQRwaMEQk',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `The Amazon Echo is a smart speaker powered by Alexa. Once set up, you can ask it to play music, set timers, answer questions, control smart home devices, make calls, and more — all by voice. Setup takes about 10 to 15 minutes.

Plug the Echo into a power outlet and wait for the light ring to turn orange (setup mode). Download the Amazon Alexa app from the App Store or Google Play Store and sign in with your Amazon account. The app should detect your Echo automatically — if not, tap Devices → "+" → Add Device → Amazon Echo.

The app walks you through connecting to WiFi (select your network and enter the password). Once connected, personalize by setting your location for weather and news, choosing a default music service, and linking smart home devices if you have any.

Test by saying "Alexa, what time is it?" or "Alexa, play some music." Place the Echo in a central location — kitchen and living room work well. Alexa hears you across the room, but walls and background noise reduce accuracy.`,
    steps: [
      { title: 'Plug in your Echo', content: 'Plug in and wait for the orange light ring indicating setup mode.' },
      { title: 'Download the Alexa app', content: 'Get "Amazon Alexa" from the App Store or Google Play Store. Sign in with your Amazon account.' },
      { title: 'Add your device', content: 'The app detects your Echo automatically. If not, tap Devices → "+" → Add Device → Amazon Echo.' },
      { title: 'Connect to WiFi', content: 'Select your home WiFi network and enter the password. Wait for the connection to complete.' },
      { title: 'Personalize settings', content: 'Set your location, default music service, and news sources. These can be changed later in the app.' },
      { title: 'Test with a voice command', content: 'Say "Alexa, what is the weather today?" If she responds, your Echo is ready to use.' },
    ],
  },

  {
    slug: 'set-up-google-home-nest',
    title: 'How to Set Up Google Home (Nest Hub)',
    excerpt: 'Set up your Google Nest speaker or display — connect to WiFi, link accounts, and start using Google Assistant.',
    category: 'smart-home' as any,
    tags: ['Google Home', 'Nest Hub', 'smart speaker', 'Google Assistant', 'setup'],
    readTime: '7 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Google Home devices (now Google Nest) are smart speakers and displays powered by Google Assistant. They answer questions, play music, control smart devices, make video calls (screen models), and more. Setup takes about 10 minutes.

Plug in your Nest device — speakers chime and lights pulse, displays show a setup message. Download the Google Home app and sign in with your Google account (if you use Gmail, you already have one).

Tap "+" → "Set up device" → "New device." The app finds your Nest device and plays a confirmation sound. Connect to WiFi by selecting your network and entering the password. Personalize: set your address, default music service, link your calendar, and set up Voice Match so Google Assistant recognizes your voice specifically.

Voice Match lets the assistant give personalized calendar, commute, and music for each household member. Set it up for everyone who uses the device.

Test by saying "Hey Google, what is the weather?" or "Hey Google, play jazz music."`,
    steps: [
      { title: 'Plug in your Nest device', content: 'Plug in and wait for the chime (speakers) or setup screen (displays).' },
      { title: 'Download Google Home app', content: 'Get "Google Home" from the App Store or Google Play Store. Sign in with your Google account.' },
      { title: 'Add your device', content: 'Tap "+" → "Set up device" → "New device." The app searches and plays a confirmation sound.' },
      { title: 'Connect to WiFi', content: 'Select your network and enter the password. The device connects and downloads updates.' },
      { title: 'Personalize settings', content: 'Set your address, music service, calendar, and Voice Match so Google recognizes your voice.' },
      { title: 'Test a voice command', content: 'Say "Hey Google, what time is it?" or "Hey Google, tell me a joke."' },
    ],
  },

  {
    slug: 'set-up-amazon-fire-stick',
    title: 'How to Set Up Amazon Fire Stick',
    excerpt: 'Plug in and set up your Fire TV Stick to stream movies, shows, and live TV on any television.',
    category: 'smart-home' as any,
    tags: ['Fire Stick', 'Amazon', 'streaming', 'setup', 'television'],
    readTime: '6 min',
    thumbnailEmoji: '🔥',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `The Amazon Fire TV Stick turns any TV into a smart TV with access to Netflix, Prime Video, Hulu, Disney+, YouTube, and thousands of apps. It also has Alexa built into the remote for voice search.

Plug the Fire Stick into an HDMI port. Connect the USB power cable to the included power adapter (use the wall outlet, not the TV's USB port — the Fire Stick needs more power). Turn on your TV and select the correct HDMI input.

The remote pairs automatically. If it does not, hold the Home button for 10 seconds. Follow the on-screen steps: choose language, connect to WiFi, and sign in with your Amazon account.

The Fire Stick downloads updates and may restart. Browse and install apps from the home screen. The Alexa button on the remote (microphone icon) lets you search by voice — hold it and say "Find comedies on Netflix" or "Open YouTube."

If you have Amazon Prime, you get free access to thousands of titles through Prime Video — look for titles marked "Prime."`,
    steps: [
      { title: 'Connect to your TV', content: 'Plug the Fire Stick into an HDMI port. Connect the power cable to the wall adapter (not TV USB). Note the HDMI port number.' },
      { title: 'Switch to the correct input', content: 'Press "Input" or "Source" on your TV remote. Select the HDMI port where the Fire Stick is plugged in.' },
      { title: 'Pair the remote', content: 'The remote should pair automatically. If not, hold the Home button (house icon) for 10 seconds.' },
      { title: 'Connect to WiFi and sign in', content: 'Select your language, choose your WiFi network, enter the password, and sign in with your Amazon account.' },
      { title: 'Download updates and browse', content: 'Wait for updates to install. Browse the home screen for featured apps or search for specific ones.' },
      { title: 'Try Alexa voice search', content: 'Hold the microphone button and say the name of a show, movie, or app. Alexa finds it across your installed apps.' },
    ],
  },

  {
    slug: 'use-apple-tv-beginners',
    title: 'How to Use Apple TV for Beginners',
    excerpt: 'Set up and navigate your Apple TV to stream shows, movies, music, and more — a complete first-time guide.',
    category: 'smart-home' as any,
    tags: ['Apple TV', 'streaming', 'Apple', 'setup', 'beginners'],
    readTime: '7 min',
    thumbnailEmoji: '🍎',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Apple TV plugs into your TV and provides access to the Apple TV app, Netflix, Hulu, Disney+, YouTube, and thousands of other apps. It integrates with iPhone — you can AirPlay content, use your phone as a remote, and access photos and music.

Connect Apple TV to your TV with HDMI, plug in the power cable, and select the correct input. If you have an iPhone, hold it near the Apple TV to transfer WiFi and Apple ID settings automatically. Otherwise, follow on-screen steps to connect to WiFi and sign in with your Apple ID.

The Siri Remote has a touch surface on top — swipe to navigate, click to select, press the back button to go back, and hold the Siri button for voice search. Download apps from the App Store (blue "A" icon).

Siri searches across all installed apps — hold the microphone button and say "Show me action movies." You can also AirPlay from your iPhone by tapping the AirPlay icon (rectangle with triangle) in any app. If the Siri Remote feels tricky, use your iPhone as a remote through Control Center.`,
    steps: [
      { title: 'Connect Apple TV', content: 'Connect HDMI cable, plug in power, and select the correct HDMI input on your TV.' },
      { title: 'Set up with iPhone or manually', content: 'Hold your iPhone near Apple TV for automatic setup, or select language, connect to WiFi, and sign in manually.' },
      { title: 'Sign in with your Apple ID', content: 'Enter your Apple ID and password. Approve two-factor authentication if prompted.' },
      { title: 'Learn the Siri Remote', content: 'Swipe the touch surface to navigate, click center to select, press back to go to previous screen, hold Siri button for voice search.' },
      { title: 'Download streaming apps', content: 'Open the App Store and search for Netflix, Hulu, Disney+, YouTube, and other services. Sign in to each.' },
      { title: 'Try AirPlay', content: 'On your iPhone, tap the AirPlay icon in any app and select Apple TV to send content to your TV screen.' },
    ],
  },

  {
    slug: 'set-up-ring-doorbell',
    title: 'How to Set Up a Ring Doorbell',
    excerpt: 'Install your Ring Video Doorbell to see who is at your door from your phone — home or away.',
    category: 'smart-home' as any,
    tags: ['Ring', 'doorbell', 'home security', 'smart home', 'camera'],
    readTime: '8 min',
    thumbnailEmoji: '🚪',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `A Ring Video Doorbell lets you see, hear, and talk to whoever is at your door from your phone. It records video and sends motion alerts. Most models can be installed with basic tools.

Download the Ring app, create an account, tap "Set Up a Device" → "Doorbells," and scan the QR code on the back of the Ring. The app guides you through WiFi connection.

For battery-powered models: position the mounting bracket at about 4 feet from the ground, mark and drill screw holes, attach the bracket, and snap the Ring onto it. For wired models: turn off power at the breaker, remove your old doorbell, connect the two wires to the Ring's terminals, mount it, and turn power back on.

Test by pressing the doorbell button — you should receive a notification and see live video. Adjust motion sensitivity in the app to reduce false alerts. Use Motion Zones to focus detection on your porch and walkway only.

Ring Protect subscription plans let you save and review video recordings. Without a plan, you still get live video and motion alerts.`,
    steps: [
      { title: 'Download the Ring app', content: 'Get the Ring app from App Store or Google Play Store. Create an account or sign in.' },
      { title: 'Add your device', content: `Tap "Set Up a Device" → "Doorbells." Scan the QR code on the Ring's back to begin WiFi setup.` },
      { title: 'Choose installation type', content: 'Battery-powered models need no wiring. Wired models connect to existing doorbell wires.' },
      { title: 'Mount the doorbell', content: 'Position the bracket at 4 feet high, drill screw holes, attach the bracket, and snap on the Ring.' },
      { title: 'Test the doorbell', content: 'Press the button to trigger a notification and live video on your phone. Test two-way audio.' },
      { title: 'Adjust motion settings', content: 'In the app, set Motion Zones and sensitivity to reduce false alerts from street traffic and pets.' },
    ],
  },

  {
    slug: 'set-up-smart-light-bulbs',
    title: 'How to Set Up Smart Light Bulbs',
    excerpt: 'Install smart bulbs and control them from your phone or with voice commands through Alexa or Google Assistant.',
    category: 'smart-home' as any,
    tags: ['smart lights', 'Philips Hue', 'smart home', 'lighting', 'automation'],
    readTime: '6 min',
    thumbnailEmoji: '💡',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Smart light bulbs let you control lighting from your phone, set schedules, change colors, and dim — all without getting up. Popular brands include Philips Hue, LIFX, Wyze, and TP-Link Kasa. WiFi bulbs (Wyze, LIFX, Kasa) connect directly to your WiFi — no extra equipment needed. Hub-based bulbs (Philips Hue) require a small hub that plugs into your router.

For WiFi bulbs: screw the bulb in and make sure the wall switch is ON (smart bulbs need constant power). Download the manufacturer's app, create an account, tap "Add Device," and follow the pairing instructions — the bulb usually blinks to confirm pairing mode.

Once connected, you can turn lights on/off, adjust brightness, change color temperature (warm for evenings, cool for working), set schedules, and create "scenes" for different activities.

For voice control, link your smart bulb account in the Alexa or Google Home app. Then say "Alexa, turn off the living room light" or "Hey Google, dim the bedroom to 50%."

Leave wall switches ON at all times with smart bulbs. If the switch is off, the bulb loses power and cannot respond to commands. Consider a smart switch cover to prevent accidental switch-offs.`,
    steps: [
      { title: 'Install the bulb', content: 'Screw in the smart bulb and make sure the wall switch is ON — smart bulbs need constant power.' },
      { title: 'Download the app', content: `Get your bulb brand's app (Wyze, LIFX, Kasa, Philips Hue) and create an account.` },
      { title: 'Add the bulb', content: 'Tap "Add Device" and follow pairing instructions. The bulb blinks to confirm pairing mode. Connect to your WiFi.' },
      { title: 'Test the controls', content: 'Use the app to turn on/off, adjust brightness, and change color. Set a schedule for automatic on/off times.' },
      { title: 'Connect to your smart speaker', content: `In the Alexa or Google Home app, link your bulb's brand account for voice control.` },
      { title: 'Keep the wall switch ON', content: 'Leave the physical switch on. Use the app or voice commands to control the bulb.' },
    ],
  },

  {
    slug: 'use-smart-thermostat',
    title: 'How to Use a Smart Thermostat (Nest/Ecobee)',
    excerpt: 'Set up a smart thermostat to control home temperature from your phone and save on energy bills.',
    category: 'smart-home' as any,
    tags: ['smart thermostat', 'Nest', 'Ecobee', 'energy saving', 'smart home'],
    readTime: '7 min',
    thumbnailEmoji: '🌡️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `A smart thermostat replaces your old thermostat and lets you control heating and cooling from your phone, set schedules, and save money. Nest and Ecobee are the most popular brands. Both learn your preferences and adjust automatically when you leave home.

Before buying, check compatibility with your HVAC system. Both Nest and Ecobee have compatibility checkers on their websites. Turn off your HVAC at the breaker, photograph your current wiring (crucial for correct installation), label each wire with the included stickers, mount the new base plate, connect wires to matching terminals, attach the display, and turn power back on.

Download the Nest or Ecobee app, create an account, and follow the setup wizard for WiFi connection, temperature preferences, and schedule creation. Set comfortable temperatures for home/awake, sleeping, and away. Enable Eco/Away mode to save energy when you leave.

Both Nest and Ecobee typically pay for themselves in 1-2 years through energy savings — the EPA estimates about $180 per year with a properly programmed thermostat.`,
    steps: [
      { title: 'Check compatibility', content: 'Visit nest.com/widget/compatibility or ecobee.com/compatibility. Enter your current wiring details.' },
      { title: 'Photograph and label wiring', content: 'Turn off HVAC at the breaker. Take a clear photo of current wires, then label each with the included stickers.' },
      { title: 'Install the thermostat', content: 'Mount the base plate, connect labeled wires to matching terminals, and attach the display.' },
      { title: 'Turn on and set up in the app', content: 'Turn HVAC back on. Download the app, create an account, connect to WiFi, and configure preferences.' },
      { title: 'Create a schedule', content: 'Set temperatures for home/awake, sleeping, and away. Enable Eco mode for automatic savings when you leave.' },
    ],
  },

  {
    slug: 'set-up-robot-vacuum',
    title: 'How to Set Up a Robot Vacuum (Roomba)',
    excerpt: 'Unbox, charge, and set up your robot vacuum to clean floors automatically on a schedule.',
    category: 'smart-home' as any,
    tags: ['Roomba', 'robot vacuum', 'smart home', 'cleaning', 'automation'],
    readTime: '6 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A robot vacuum cleans floors automatically, navigating around furniture and along baseboards. Popular brands include Roomba (iRobot), Roborock, Shark, and Ecovacs. Once set up, schedule it to clean daily or start it from your phone.

Place the charging dock against a wall on a hard floor with 1.5 feet of clearance on each side and 4 feet in front. Plug it in and place the robot on the dock to charge fully (2-3 hours).

Download the manufacturer's app (iRobot Home for Roomba, Roborock, etc.), create an account, and tap "Add a Robot." The app guides you through WiFi connection — usually hold a button on the robot until it beeps, then enter your WiFi password in the app.

Before the first run, pick up loose items from the floor — charging cables, socks, shoelaces, and small toys can tangle in the brushes. Tuck cords behind furniture.

Tap "Clean" in the app or press the button on top. The robot maps your home during the first few runs and gets more efficient over time. Set a cleaning schedule (like weekdays at 10 AM) so it cleans automatically while you are out.`,
    steps: [
      { title: 'Set up the charging dock', content: 'Place against a wall on hard floor with clearance. Plug in and place the robot on it to charge fully (2-3 hours).' },
      { title: 'Download the app', content: `Get the app for your robot's brand, create an account, and tap "Add a Robot."` },
      { title: 'Connect to WiFi', content: 'Follow app instructions — press a button on the robot, then enter your WiFi password.' },
      { title: 'Prepare your floors', content: 'Pick up loose items — cables, socks, small toys. Tuck cords behind furniture.' },
      { title: 'Run the first cleaning', content: `Tap "Clean" in the app or press the robot's button. It maps your home during the first few runs.` },
      { title: 'Set a schedule', content: 'Create a cleaning schedule in the app. The robot starts automatically, cleans, and returns to dock.' },
    ],
  },

  {
    slug: 'use-voice-commands-alexa',
    title: 'How to Use Voice Commands with Alexa',
    excerpt: 'Learn the most useful Alexa voice commands for music, timers, news, smart home, and everyday tasks.',
    category: 'smart-home' as any,
    tags: ['Alexa', 'voice commands', 'smart speaker', 'Amazon Echo', 'tips'],
    readTime: '6 min',
    thumbnailEmoji: '🗣️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Once your Echo is set up, learn what to ask Alexa. Start every request with "Alexa" followed by your command. Here are the most useful commands:

Timers: "Alexa, set a timer for 10 minutes." "Alexa, set a pasta timer for 12 minutes." You can have multiple named timers running at once. Weather: "Alexa, what is the weather today?" "Alexa, will it rain tomorrow?" Music: "Alexa, play jazz music." "Alexa, play Frank Sinatra." "Alexa, turn up the volume." "Alexa, skip this song."

News: "Alexa, what is the news?" Customize news sources in the app under Flash Briefing. Smart home: "Alexa, turn off the living room lights." "Alexa, set the thermostat to 72." (Requires compatible linked devices.)

Shopping and reminders: "Alexa, add milk to my shopping list." "Alexa, remind me to take my medication at 8 PM." Communication: "Alexa, call Mom." "Alexa, announce that dinner is ready." (Broadcasts to all Echo devices in your home.)

General knowledge: "Alexa, how many cups are in a gallon?" "Alexa, what time does Walgreens close?"

If Alexa misunderstands you, check what she heard in the Alexa app under "Activity."`,
    steps: [
      { title: 'Start with timers and weather', content: 'Try "Alexa, set a timer for 5 minutes" and "Alexa, what is the weather?" These build comfort with voice commands.' },
      { title: 'Play music', content: 'Say "Alexa, play [artist]" or "Alexa, play relaxing music." Control with "Alexa, pause/skip/volume up."' },
      { title: 'Set reminders and alarms', content: '"Alexa, remind me to call the doctor at 2 PM." "Alexa, set an alarm for 7:30 AM every weekday."' },
      { title: 'Manage lists', content: '"Alexa, add eggs to my shopping list." View and manage lists in the Alexa app.' },
      { title: 'Control smart home devices', content: '"Alexa, turn off the lights." "Alexa, set the thermostat to 70." Link devices in the Alexa app first.' },
      { title: 'Use announcements', content: '"Alexa, announce that lunch is ready" broadcasts to all Echo devices in your home.' },
    ],
  },

  {
    slug: 'change-alexa-privacy-settings',
    title: 'How to Change Alexa Privacy Settings',
    excerpt: 'Control what data Alexa collects — delete voice recordings, manage permissions, and protect your privacy.',
    category: 'smart-home' as any,
    tags: ['Alexa', 'privacy', 'Amazon Echo', 'settings', 'data'],
    readTime: '5 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `When you talk to Alexa, Amazon records what you say. You can manage and delete these recordings and control data usage.

Open the Alexa app → More → Settings → Alexa Privacy → Review Voice History. Here you can listen to and delete recordings individually, by date range, or all at once. In "Manage Your Alexa Data," set automatic deletion after 3 or 18 months, or choose "Do not save recordings."

Opt out of human review by toggling off "Help Improve Alexa" and "Use of Messages to Improve Transcriptions" in Manage Your Alexa Data.

Every Echo has a microphone mute button (red, with a microphone icon). When muted, the device physically disconnects the microphone — a red light confirms it is muted. Use this during private conversations or when sleeping.

Review Alexa skills permissions under More → Skills & Games → Your Skills. Tap any skill to manage its access to your location, address, or contacts. Check your privacy settings at least once a year as Amazon occasionally adds new data features.`,
    steps: [
      { title: 'Open Alexa Privacy settings', content: 'Alexa app → More → Settings → Alexa Privacy. This is the hub for all privacy controls.' },
      { title: 'Delete voice history', content: 'Tap "Review Voice History." Delete individual recordings or all of them at once.' },
      { title: 'Set up automatic deletion', content: 'In "Manage Your Alexa Data," choose auto-delete after 3 months, 18 months, or "Do not save recordings."' },
      { title: 'Opt out of human review', content: 'Toggle off "Help Improve Alexa" and "Use of Messages to Improve Transcriptions."' },
      { title: 'Use the mute button', content: 'Press the microphone button (turns red) when you want complete privacy. Press again to unmute.' },
    ],
  },

  {
    slug: 'set-up-smart-plug',
    title: 'How to Set Up a Smart Plug',
    excerpt: 'Turn any lamp or appliance into a smart device with a smart plug — control it by phone or voice.',
    category: 'smart-home' as any,
    tags: ['smart plug', 'smart home', 'automation', 'Alexa', 'Google Home'],
    readTime: '5 min',
    thumbnailEmoji: '🔌',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A smart plug goes between a wall outlet and your lamp, fan, or coffee maker. Once set up, you control that device from your phone, set schedules, and use voice commands. Popular brands include TP-Link Kasa, Wyze, Amazon Smart Plug, and Meross, costing $8-15 each.

Plug it in — the indicator light blinks for pairing mode. Download the brand's app, create an account, tap "Add Device," and follow the instructions to connect to WiFi.

Plug a device with a physical ON/OFF switch (lamp, fan, coffee maker) into the smart plug. The device's switch must be in the ON position so the smart plug can control it. Smart plugs do NOT work with electronic-button devices (modern TVs, computers).

Test on/off from the app. Set schedules — turn the lamp on at sunset and off at 11 PM. For voice control, link the smart plug's account in the Alexa or Google Home app. Then say "Alexa, turn on the living room lamp."

Great uses: scheduling lamps for vacation security, starting a coffee maker in the morning, turning off fans at bedtime, and monitoring energy usage (some models track electricity consumption).`,
    steps: [
      { title: 'Plug it in', content: 'Insert the smart plug into a wall outlet. The indicator light should blink for pairing mode.' },
      { title: 'Download the app and add device', content: `Get the brand's app, create an account, tap "Add Device," and follow instructions to connect to WiFi.` },
      { title: 'Plug in your device', content: 'Plug a lamp or appliance with a physical ON/OFF switch into the smart plug. Leave the switch in the ON position.' },
      { title: 'Test and set schedules', content: 'Use the app to turn on/off. Create schedules for automatic control — sunset to 11 PM for lamps, for example.' },
      { title: 'Link to voice assistant', content: 'In the Alexa or Google Home app, link your smart plug brand for voice control.' },
    ],
  },

  {
    slug: 'set-up-home-security-camera',
    title: 'How to Set Up a Security Camera at Home',
    excerpt: 'Install a security camera to monitor your home from your phone — live video and motion alerts.',
    category: 'smart-home' as any,
    tags: ['security camera', 'home security', 'smart home', 'surveillance', 'safety'],
    readTime: '7 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Home security cameras let you watch live video, receive motion alerts, and review recordings from your phone. Popular brands include Ring, Wyze, Arlo, Nest Cam, and Eufy, starting around $25-40. No professional installation or monitoring contract is required.

Choose indoor vs. outdoor, wired vs. battery-powered, and whether you need cloud storage (subscription) or local storage (microSD card). Place indoor cameras in living rooms, entryways, and hallways. Outdoor cameras go near front door, garage, or back yard.

Download the camera's app, create an account, tap "Add Device," and select your model. Connect to WiFi — usually scan a QR code on the camera and enter your WiFi password. Mount using included hardware (magnetic, adhesive, or screw-in bracket) at a slight downward angle.

Configure motion detection zones in the app to focus on areas that matter (doorways, walkways) and exclude areas that cause false alerts (roads, trees). Check local recording laws — video is generally permitted on your property, but audio rules may differ.

A visible camera also acts as a deterrent. For outdoor use, ensure the camera is weather-rated (IP65 or IP67).`,
    steps: [
      { title: 'Choose type and location', content: 'Decide indoor or outdoor, wired or battery. Choose a spot with a good vantage point and WiFi signal.' },
      { title: 'Download the app', content: `Get the camera brand's app, create an account, tap "Add Device," and select your model.` },
      { title: 'Connect to WiFi', content: 'Scan the QR code on the camera and enter your WiFi password in the app.' },
      { title: 'Mount the camera', content: 'Use included hardware. Position at a slight downward angle aimed at entry points.' },
      { title: 'Configure motion detection', content: 'Set detection zones and sensitivity to focus on important areas and reduce false alerts.' },
      { title: 'Test and review', content: `Walk through the camera's view to trigger an alert. Check video quality and adjust angle if needed.` },
    ],
  },

  {
    slug: 'connect-bluetooth-speakers-tv',
    title: 'How to Connect Bluetooth Speakers to Your TV',
    excerpt: 'Pair wireless Bluetooth speakers or headphones with your TV for better sound or private listening.',
    category: 'smart-home' as any,
    tags: ['Bluetooth', 'speakers', 'television', 'audio', 'wireless'],
    readTime: '5 min',
    thumbnailEmoji: '🔈',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `If your TV speakers sound thin, connect Bluetooth speakers for better audio. Bluetooth headphones are great for private listening at night. Most smart TVs made after 2018 have built-in Bluetooth — check in Settings → Sound for "Bluetooth" options. If your TV lacks Bluetooth, buy a Bluetooth transmitter ($15-40) that plugs into the headphone jack or optical port.

Put your speaker/headphones into pairing mode — usually hold the power or Bluetooth button until a light flashes blue. On your TV, go to Settings → Sound → Bluetooth → "Add Device" or "Pair New Device." Select your device from the list and wait for "Connected."

Audio now plays through the Bluetooth device. To switch back, change the output to "TV Speaker" in Sound settings.

If there is a delay between video and audio (lip sync issue), look for "Audio Delay" or "Lip Sync" in your TV's Sound settings. For the best experience with soundbars, use HDMI ARC instead of Bluetooth — it provides better quality with no delay. Look for an HDMI port labeled "ARC" or "eARC."`,
    steps: [
      { title: 'Check if your TV has Bluetooth', content: 'Go to Settings → Sound. Look for "Bluetooth" or "Bluetooth Speaker List."' },
      { title: 'Put speaker in pairing mode', content: 'Hold the power or Bluetooth button until the light flashes blue or you hear "pairing mode."' },
      { title: 'Search for devices on your TV', content: 'Settings → Sound → Bluetooth → "Add Device." Your TV searches for nearby Bluetooth devices.' },
      { title: 'Connect your speaker', content: 'Select your device from the list. Wait for "Connected" confirmation.' },
      { title: 'Adjust for audio delay', content: 'If sound is out of sync, look for "Audio Delay" or "Lip Sync Adjustment" in Sound settings.' },
    ],
  },

  // ═══════════════════════════════════════════
  // ENTERTAINMENT & MEDIA (12 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-spotify-find-music',
    title: 'How to Set Up Spotify and Find Music',
    excerpt: 'Create a Spotify account, search for your favorite artists, and build playlists — free or premium.',
    category: 'entertainment' as any,
    tags: ['Spotify', 'music', 'streaming', 'playlists', 'entertainment'],
    readTime: '6 min',
    thumbnailEmoji: '🎵',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Spotify is the world's most popular music streaming service with over 100 million songs. You can use it free (with ads between songs) or subscribe to Spotify Premium (no ads, offline downloads, and higher quality audio). The free version still lets you search, browse, and play music — ads play every few songs.

Download Spotify from the App Store or Google Play Store. Create an account with your email or sign up with your Google, Facebook, or Apple account. Once in, you can search for any artist, album, or song using the search bar. Tap the magnifying glass icon, type a name, and tap to play.

To build a playlist: tap "Your Library" at the bottom, then "+" to create a new playlist. Name it and start adding songs. While playing any song, tap the three dots (menu) and "Add to Playlist" to add it to your collection. Spotify also creates personalized playlists for you based on your listening — check "Made For You" on the Home screen.

For listening at home, connect Spotify to your smart speaker. In the Alexa app or Google Home app, link your Spotify account as the default music service. Then say "Alexa, play classic rock on Spotify."

Spotify's "Discover Weekly" playlist updates every Monday with 30 songs it thinks you will like based on your listening habits — a great way to find new music.`,
    steps: [
      { title: 'Download Spotify', content: 'Get the Spotify app from the App Store or Google Play Store. Create an account with your email or sign in with Google/Apple.' },
      { title: 'Search for music', content: 'Tap the search icon, type an artist, album, or song name, and tap to play. Browse by genre or mood on the Search screen.' },
      { title: 'Create a playlist', content: 'Tap "Your Library" → "+" to create a new playlist. While playing a song, tap the three dots → "Add to Playlist."' },
      { title: 'Discover personalized music', content: 'Check "Made For You" on the Home screen. "Discover Weekly" updates every Monday with 30 recommended songs.' },
      { title: 'Connect to smart speakers', content: 'Link Spotify in your Alexa or Google Home app. Say "Alexa, play jazz on Spotify" for hands-free listening.' },
    ],
  },

  {
    slug: 'listen-to-podcasts-phone',
    title: 'How to Listen to Podcasts on Your Phone',
    excerpt: 'Find and listen to podcasts on your phone — free shows on every topic from news and history to comedy and true crime.',
    category: 'entertainment' as any,
    tags: ['podcasts', 'audio', 'phone', 'entertainment', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '🎙️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Podcasts are free audio shows you can listen to anytime — like radio on demand. There are podcasts on every topic: news, history, true crime, comedy, science, health, cooking, and more. New episodes are released on a schedule (daily, weekly, etc.) and you can listen whenever you want.

On iPhone, the Podcasts app comes pre-installed (purple icon). On Android, use Google Podcasts, Spotify, or another podcast app from the Play Store. Open the app and browse or search for a topic that interests you.

When you find a podcast, tap an episode to play it. If you like it, tap "Subscribe" or "Follow" to automatically get new episodes. Subscriptions are free — you are not paying for anything, you are bookmarking the show.

While listening, you can adjust the speed (1.5x is popular for faster listening), set a sleep timer, and download episodes for offline listening during flights or areas without internet.

Great starter podcasts include NPR's "Up First" (daily news in 10 minutes), "Stuff You Should Know" (interesting topics explained), and "SmartLess" (celebrity interviews with humor).`,
    steps: [
      { title: 'Open a podcast app', content: 'iPhone: open the Podcasts app (purple icon). Android: open Spotify, Google Podcasts, or download a podcast app from the Play Store.' },
      { title: 'Search for a topic', content: 'Use the search bar to find podcasts about news, history, true crime, comedy, or any topic that interests you.' },
      { title: 'Play an episode', content: 'Tap any episode to start listening. Use the playback controls to pause, rewind, or fast forward.' },
      { title: 'Follow shows you like', content: 'Tap "Subscribe" or "Follow" to bookmark a show and automatically get new episodes. This is free.' },
      { title: 'Download for offline listening', content: 'Tap the download icon on an episode to save it to your phone for listening without internet.' },
    ],
  },

  {
    slug: 'get-free-audiobooks-libby-app',
    title: 'How to Get Free Audiobooks from Your Library (Libby App)',
    excerpt: 'Borrow audiobooks and ebooks from your local library for free using the Libby app — no late fees.',
    category: 'entertainment' as any,
    tags: ['Libby', 'library', 'audiobooks', 'ebooks', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📖',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Libby is a free app that lets you borrow audiobooks and ebooks from your local public library — right on your phone, with no late fees. Books are automatically returned when the lending period ends (usually 14-21 days). If you have a library card, you can start borrowing today.

Download the Libby app from the App Store or Google Play Store. Open it and search for your library. You will need your library card number (found on the back of your card) and your library PIN (often the last four digits of your phone number — check with your library if you are unsure).

Once signed in, browse your library's digital collection. Search for a specific title or browse by genre, bestsellers, or what is available right now. When you find something, tap "Borrow" to check it out immediately, or "Place Hold" if someone else has it checked out (you will be notified when it is available).

For audiobooks, tap "Open in Libby" to start listening right in the app. For ebooks, you can read in Libby or send to your Kindle. Libby remembers your place across devices — start on your phone and pick up on your tablet.

If you do not have a library card, most libraries let you sign up online for free. Visit your library's website and look for "Get a Card" or "Register."`,
    steps: [
      { title: 'Download Libby', content: 'Get the Libby app from the App Store or Google Play Store. It is free.' },
      { title: 'Find and sign in to your library', content: 'Search for your local library in the app. Enter your library card number and PIN.' },
      { title: 'Browse and borrow', content: 'Search by title, author, or genre. Tap "Borrow" for available titles or "Place Hold" for ones in use.' },
      { title: 'Listen or read', content: 'For audiobooks, tap "Open in Libby" to listen. For ebooks, read in the app or send to your Kindle.' },
      { title: 'Get a library card if needed', content: `Visit your local library's website and look for "Get a Card" or "Register" — most offer free online sign-up.` },
    ],
  },

  {
    slug: 'manage-streaming-subscriptions',
    title: 'How to Manage Your Streaming Subscriptions',
    excerpt: 'Track which streaming services you pay for, how much they cost, and decide which ones to keep or cancel.',
    category: 'entertainment' as any,
    tags: ['streaming', 'subscriptions', 'budgeting', 'Netflix', 'entertainment'],
    readTime: '6 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Streaming subscriptions can quietly add up. If you have Netflix, Hulu, Disney+, Max, Amazon Prime, Apple TV+, Peacock, Paramount+, and Spotify, you could be paying over $100 per month. Reviewing and managing these subscriptions saves real money.

Start by listing everything you pay for. Check your credit card or bank statements for recurring charges. Common streaming services and their approximate 2026 prices: Netflix ($7-23/month), Hulu ($8-18/month), Disney+ ($8-14/month), Max ($10-17/month), Amazon Prime ($15/month includes shipping), Apple TV+ ($10/month), Peacock ($8-14/month), Paramount+ ($6-13/month), and Spotify ($12/month).

On iPhone, check your subscriptions: Settings → your name → Subscriptions. On Android: Google Play Store → your profile → Payments & subscriptions → Subscriptions.

To decide what to keep: check which services you actually used in the past month. If you have not opened an app in 30+ days, consider canceling. You can always re-subscribe later.

Consider rotating services — subscribe to one for a month, watch what you want, cancel, then subscribe to another. This works well for services with shows that release all episodes at once. Some services offer annual plans that save 15-20% over monthly payments.`,
    steps: [
      { title: 'List all your subscriptions', content: 'Check bank/credit card statements for recurring streaming charges. Note each service and monthly cost.' },
      { title: 'Check on your phone', content: 'iPhone: Settings → your name → Subscriptions. Android: Play Store → profile → Payments & subscriptions.' },
      { title: 'Review usage', content: 'For each service, check when you last opened the app. If you have not used it in 30+ days, consider canceling.' },
      { title: 'Consider rotating services', content: 'Subscribe to one service, watch your shows, cancel, then try another. This spreads costs over time.' },
      { title: 'Look for bundles and annual plans', content: 'Some services bundle together (Disney+/Hulu/ESPN+). Annual plans often save 15-20% over monthly.' },
    ],
  },

  {
    slug: 'use-youtube-music',
    title: 'How to Use YouTube Music',
    excerpt: 'Stream music for free with YouTube Music — search for songs, create playlists, and discover new artists.',
    category: 'entertainment' as any,
    tags: ['YouTube Music', 'music', 'streaming', 'free', 'entertainment'],
    readTime: '5 min',
    thumbnailEmoji: '🎶',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `YouTube Music is Google's music streaming service. The free version lets you search and play any song with ads between tracks (but your phone screen must stay on). YouTube Music Premium ($11/month) removes ads, allows background play, and lets you download songs offline.

Download YouTube Music from the App Store or Google Play Store. Sign in with your Google account. The home screen shows personalized recommendations based on your listening history.

Search for any artist, song, or album using the search bar. YouTube Music has official recordings plus live performances, covers, and remixes from YouTube. You can switch between "Song" (audio only) and "Video" (music video) modes.

Create playlists: tap "Library" → "New Playlist." While playing a song, tap the three dots → "Add to playlist." YouTube Music also creates automatic playlists like "Your Likes" and "Discover Mix" (personalized weekly recommendations).

If you have a YouTube Premium subscription, YouTube Music Premium is included at no extra cost.`,
    steps: [
      { title: 'Download YouTube Music', content: 'Get the app from the App Store or Google Play Store. Sign in with your Google account.' },
      { title: 'Search for music', content: 'Use the search bar to find any artist, song, or album. Switch between audio-only and music video modes.' },
      { title: 'Create playlists', content: 'Tap "Library" → "New Playlist." Add songs using the three-dot menu → "Add to playlist."' },
      { title: 'Discover new music', content: 'Check "Discover Mix" and other auto-generated playlists on the Home screen for personalized recommendations.' },
      { title: 'Consider Premium', content: 'YouTube Music Premium ($11/month) removes ads, enables background play, and allows offline downloads.' },
    ],
  },

  {
    slug: 'share-netflix-account-properly',
    title: 'How to Share Your Netflix Account the Right Way',
    excerpt: 'Understand Netflix household rules, add extra members, and manage who has access to your account.',
    category: 'entertainment' as any,
    tags: ['Netflix', 'sharing', 'streaming', 'account', 'household'],
    readTime: '5 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Netflix now requires that accounts be used by people who live in the same household (same home, same WiFi network). If you want to share Netflix with someone outside your home, you need to use Netflix's official "Extra Member" feature.

Extra Members: Netflix Standard and Premium plans allow you to add extra members who live at a different address. Each extra member costs about $8/month and gets their own profile, login, and recommendations. To add one: go to netflix.com → Account → Extra Members → Buy an Extra Member Slot. The person receives an invitation to create their own login.

For people in your household: Netflix plans support 1-4 simultaneous streams depending on your plan. Standard supports 2 screens, and Premium supports 4 screens. Everyone in the same home can have their own profile within the account.

To manage profiles: go to netflix.com → Manage Profiles. You can add, edit, or delete profiles. Set up a Kids profile for children — it limits content to age-appropriate titles and uses a more colorful interface.

To see who is using your account: go to Account → Manage Access and Devices. This shows every device signed into your account and lets you sign out devices you do not recognize.

If you no longer want to share with someone, you can remove their profile and change your password to force them to sign out.`,
    steps: [
      { title: 'Understand household rules', content: 'Netflix accounts are for people in the same household (same home, same WiFi). People outside your home need the Extra Member feature.' },
      { title: 'Add an Extra Member', content: 'Go to netflix.com → Account → Extra Members → Buy a slot. The person receives an invitation to create their own login ($8/month extra).' },
      { title: 'Create profiles for household members', content: 'Go to Manage Profiles. Add a profile for each person so everyone gets personalized recommendations.' },
      { title: 'Set up a Kids profile', content: 'Add a profile and check the "Kids" option. This limits content to age-appropriate titles.' },
      { title: 'Check who has access', content: 'Go to Account → Manage Access and Devices. Sign out devices you do not recognize.' },
    ],
  },

  {
    slug: 'use-apple-music-beginners',
    title: 'How to Use Apple Music for Beginners',
    excerpt: 'Set up Apple Music on your iPhone or iPad — search, play, and build your personal music library.',
    category: 'entertainment' as any,
    tags: ['Apple Music', 'music', 'iPhone', 'streaming', 'Apple'],
    readTime: '5 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Apple Music is Apple's music streaming service with over 100 million songs. It comes pre-installed on iPhone and iPad. Apple Music costs $11/month (individual) or $17/month (family plan for up to 6 people). There is a free 1-month trial for new subscribers.

Open the Music app on your iPhone (pink/red icon with a musical note). Tap "Listen Now" to see personalized recommendations, or tap "Search" to find specific artists, albums, or songs.

When you find a song you like, tap the "+" button to add it to your library. Tap the heart icon to "Love" it — this helps Apple Music learn your taste and improve recommendations. To create a playlist: go to Library → Playlists → New Playlist. Name it and add songs.

Apple Music works with Siri. Say "Hey Siri, play jazz music" or "Hey Siri, play the latest album by Adele." You can also ask Siri to add the current song to a playlist or to your library.

To download music for offline listening (when you do not have internet): add a song to your library, then tap the download icon (arrow pointing down). Downloaded songs are available even in airplane mode.

Apple Music syncs across all your Apple devices — iPhone, iPad, Mac, and Apple Watch.`,
    steps: [
      { title: 'Open the Music app', content: 'Find the Music app on your iPhone (pink/red icon). If prompted, start the free trial or sign up.' },
      { title: 'Search for music', content: 'Tap "Search" and type an artist, album, or song name. Tap any result to play it.' },
      { title: 'Build your library', content: 'Tap "+" to add songs to your library. Tap the heart to "Love" songs and improve recommendations.' },
      { title: 'Create playlists', content: 'Go to Library → Playlists → New Playlist. Add songs from your library or search results.' },
      { title: 'Use Siri for hands-free control', content: 'Say "Hey Siri, play [artist/genre]" for voice-controlled music. Siri also adds songs to playlists.' },
    ],
  },

  {
    slug: 'set-up-music-playlist',
    title: 'How to Set Up a Music Playlist on Any Service',
    excerpt: 'Create your own custom music playlist on Spotify, Apple Music, YouTube Music, or Amazon Music — step by step.',
    category: 'entertainment' as any,
    tags: ['playlist', 'music', 'Spotify', 'Apple Music', 'entertainment'],
    readTime: '5 min',
    thumbnailEmoji: '🎼',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A playlist is a custom collection of songs you group together — workout music, relaxing evening songs, road trip favorites, or a mix of your all-time favorites. Every music service lets you create playlists, and the process is similar across all of them.

On Spotify: tap "Your Library" → "+" → "Playlist." Name it, then search for songs. Tap the three dots next to any song → "Add to Playlist" → select your playlist. You can also tap "Add Songs" from within the playlist view.

On Apple Music: tap "Library" → "Playlists" → "New Playlist." Name it and tap "Add Music." Search and select songs to add. Or while playing any song, tap the three dots → "Add to a Playlist."

On YouTube Music: tap "Library" → "New Playlist." While playing a song, tap the three dots → "Add to playlist."

On Amazon Music: tap "Library" → "+" → "Create new playlist." Search for songs and tap "Add to Playlist."

All services let you reorder songs by dragging them. You can also make playlists collaborative (on Spotify and Apple Music), letting friends add songs too. Playlists can be as long as you want — some people have playlists with hundreds of songs.

Most services also offer "smart" or auto-generated playlists based on a theme or your listening history, which you can save and modify.`,
    steps: [
      { title: 'Open your music app', content: 'Open Spotify, Apple Music, YouTube Music, or Amazon Music on your phone.' },
      { title: 'Create a new playlist', content: 'Navigate to Library → "+" or "New Playlist." Give your playlist a name that describes the mood or purpose.' },
      { title: 'Search for and add songs', content: 'Use the search bar to find songs. Tap the menu (three dots) on a song → "Add to Playlist" → select your playlist.' },
      { title: 'Reorder songs', content: 'Open your playlist and drag songs to rearrange the order. Most apps show a drag handle on the right side of each song.' },
      { title: 'Download for offline listening', content: 'Toggle the download button on your playlist to save all songs for listening without internet (requires a premium subscription).' },
    ],
  },

  {
    slug: 'watch-live-tv-without-cable',
    title: 'How to Watch Live TV Without Cable',
    excerpt: 'Cut the cord and still watch live news, sports, and shows using streaming services and free options.',
    category: 'entertainment' as any,
    tags: ['cord cutting', 'live TV', 'streaming', 'cable alternative', 'entertainment'],
    readTime: '6 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `You do not need cable to watch live TV. Several streaming services offer live channels — local news, sports, and cable networks — at a fraction of cable costs. And some options are completely free.

Paid live TV streaming services: YouTube TV ($73/month) offers 100+ channels including local networks, ESPN, CNN, and more. Hulu + Live TV ($77/month) includes Hulu's on-demand library plus live channels. Sling TV ($40-55/month) is a more affordable option with fewer channels. fuboTV ($80/month) focuses on sports with 200+ channels. All include a cloud DVR for recording shows.

Free options: An indoor digital antenna ($15-30, one-time purchase) picks up local broadcast channels (ABC, CBS, NBC, FOX, PBS) in HD for free. No subscription needed — plug it into your TV's antenna port and scan for channels. Pluto TV, Tubi, and The Roku Channel offer hundreds of free streaming channels with ads — live news, movies, TV shows, and more. Download these apps on any streaming device.

To choose the best option: make a list of the channels and shows you watch most. Check which live TV service carries those channels. Try a free trial before committing. Most services offer 5-7 day trials.

For sports specifically: check which service carries your team's games. Regional sports networks are not available on all services.`,
    steps: [
      { title: 'List the channels you watch', content: 'Write down the channels and shows you cannot live without. This helps you choose the right service.' },
      { title: 'Consider a digital antenna', content: 'A $15-30 indoor antenna picks up local channels (ABC, CBS, NBC, FOX, PBS) in HD for free. One-time purchase, no subscription.' },
      { title: 'Compare live TV streaming services', content: 'YouTube TV ($73/month), Hulu + Live TV ($77/month), Sling TV ($40-55/month), and fuboTV ($80/month) each offer different channel lineups.' },
      { title: 'Try free streaming apps', content: 'Download Pluto TV, Tubi, or The Roku Channel for free live channels and on-demand content with ads.' },
      { title: 'Start a free trial', content: 'Most live TV services offer 5-7 day free trials. Try before committing to see if it meets your needs.' },
    ],
  },

  {
    slug: 'download-movies-offline-viewing',
    title: 'How to Download Movies for Offline Viewing',
    excerpt: 'Download movies and shows to your phone or tablet for watching on planes, road trips, or places without internet.',
    category: 'entertainment' as any,
    tags: ['download', 'offline', 'movies', 'streaming', 'travel'],
    readTime: '5 min',
    thumbnailEmoji: '⬇️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Most streaming services let you download movies and shows to your phone or tablet for watching without internet — perfect for flights, road trips, or areas with poor cell service. You need a paid subscription (downloads are not available on free plans) and enough storage space on your device.

Netflix: open the app, find a movie or show, and tap the download icon (arrow pointing down). Downloaded titles appear in the "Downloads" section of the app. Not all titles are available for download — look for the download icon.

Disney+: tap the download icon on any movie or show page. You can download on up to 10 devices.

Amazon Prime Video: tap the download button on any Prime-eligible title. Choose video quality (higher quality uses more storage).

Hulu: only the No Ads plan supports downloads. Tap the download icon next to eligible episodes.

Apple TV+: tap the download icon on movies and shows in the Apple TV app.

Downloads expire after a set period (usually 30 days if you have not started watching, or 48 hours after you press play). Re-download if needed.

To manage storage: go to your streaming app's settings → Downloads. You can see how much space downloads are using and delete ones you have finished watching. Lower video quality saves storage space.`,
    steps: [
      { title: 'Open your streaming app', content: 'Open Netflix, Disney+, Amazon Prime Video, Hulu (No Ads), or Apple TV+ on your phone or tablet.' },
      { title: 'Find the download icon', content: 'On a movie or episode page, look for the download icon (arrow pointing down). Not all titles are available for download.' },
      { title: 'Download before your trip', content: 'Download movies and shows while connected to WiFi before traveling. Downloads use your storage space.' },
      { title: 'Watch offline', content: 'Go to the Downloads section of the app. Tap any title to watch — no internet needed.' },
      { title: 'Manage storage', content: `In the app's settings, check download storage usage. Delete finished downloads and consider lower quality to save space.` },
    ],
  },

  // ═══════════════════════════════════════════
  // COMMUNICATION & SOCIAL (12 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'make-whatsapp-video-call',
    title: 'How to Make a WhatsApp Video Call',
    excerpt: 'Use WhatsApp to make free video calls to friends and family anywhere in the world — all you need is WiFi.',
    category: 'communication' as any,
    tags: ['WhatsApp', 'video call', 'messaging', 'communication', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `WhatsApp is a free messaging app that lets you make video calls, voice calls, and send messages to anyone in the world who also has WhatsApp — at no cost beyond your internet connection. It is especially popular for staying in touch with family and friends overseas.

Download WhatsApp from the App Store or Google Play Store. Set it up with your phone number — WhatsApp sends a verification code via text to confirm. Once verified, WhatsApp automatically shows contacts from your phone who also use the app.

To make a video call: open WhatsApp, tap the "Calls" tab at the bottom, tap the phone icon with a "+" to start a new call, select a contact, and tap the video camera icon. You can also start a video call from within a chat — tap the video camera icon at the top of the conversation.

For group video calls with up to 8 people: start a call with one person, then tap "Add Participant" to bring others in. Or create a group chat first, then tap the video icon to call all group members.

During a call, you can switch between front and back cameras, mute your microphone, turn off your camera (audio only), and share your screen. WhatsApp video calls are encrypted end-to-end, meaning only you and the people on the call can see and hear the conversation.`,
    steps: [
      { title: 'Download and set up WhatsApp', content: 'Get WhatsApp from App Store or Google Play. Set up with your phone number and verify with the texted code.' },
      { title: 'Find your contact', content: 'WhatsApp shows contacts who already use the app. Tap the "Calls" tab, then "+" to start a new call.' },
      { title: 'Start a video call', content: 'Select a contact and tap the video camera icon. Or from a chat, tap the video icon at the top.' },
      { title: 'Add people for group calls', content: 'During a call, tap "Add Participant" to include up to 8 people total.' },
      { title: 'Use call controls', content: 'Switch cameras, mute microphone, turn camera on/off, or share your screen during the call.' },
    ],
  },

  {
    slug: 'use-facebook-marketplace-safely',
    title: 'How to Use Facebook Marketplace Safely',
    excerpt: 'Buy and sell items locally on Facebook Marketplace — with tips to avoid scams and stay safe meeting strangers.',
    category: 'communication' as any,
    tags: ['Facebook', 'Marketplace', 'buying', 'selling', 'safety'],
    readTime: '6 min',
    thumbnailEmoji: '🏪',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Facebook Marketplace is a free way to buy and sell items locally — furniture, electronics, cars, clothing, and more. It is built into the Facebook app and shows listings from people in your area. You message sellers directly and arrange to meet in person.

To browse: open the Facebook app and tap the Marketplace icon (storefront icon) at the bottom or top of the screen. Browse categories or search for specific items. Filter by location, price range, and condition.

To sell: tap "Create new listing" → choose a category → add photos, a title, price, description, and your location. Your listing appears to people in your area. Respond promptly to messages from potential buyers.

Safety rules for buying: always meet in a public place (police station parking lots are ideal — many have designated "Safe Exchange Zones"). Bring a friend. Never send payment before seeing the item in person. If a deal sounds too good to be true, it probably is. Never share personal financial information.

Safety rules for selling: do not invite strangers to your home. Meet in public. Accept cash or use Facebook's built-in checkout for shipped items. Be wary of anyone who offers more than your asking price or wants to pay with a cashier's check.

Check the buyer or seller's Facebook profile. Established profiles with friends, photos, and posting history are more trustworthy than brand-new profiles with no activity.`,
    steps: [
      { title: 'Open Marketplace', content: 'In the Facebook app, tap the Marketplace icon (storefront). Browse listings or search for specific items.' },
      { title: 'Filter your search', content: 'Use filters for location, price range, condition (new/used), and category to narrow results.' },
      { title: 'Message the seller', content: 'Tap "Message" on a listing to ask questions or arrange a meeting. Be specific about when and where to meet.' },
      { title: 'Meet in a safe public place', content: 'Always meet at a police station parking lot, coffee shop, or other well-lit public location. Bring a friend.' },
      { title: 'Check profiles before dealing', content: `Review the buyer or seller's Facebook profile. Established accounts with history are more trustworthy than brand-new empty profiles.` },
    ],
  },

  {
    slug: 'set-up-group-chat-phone',
    title: 'How to Set Up a Group Chat on iPhone or Android',
    excerpt: 'Create a group text conversation with family or friends so everyone stays in the loop at once.',
    category: 'communication' as any,
    tags: ['group chat', 'texting', 'iPhone', 'Android', 'messaging'],
    readTime: '5 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A group chat lets you text multiple people at once — everyone sees and responds in the same conversation. This is great for family updates, planning events, sharing photos, and staying connected with a group.

On iPhone (Messages): open the Messages app, tap the compose button (pencil icon in the top-right), type the names or phone numbers of everyone you want in the group, type your message, and send. Everyone receives the message and can respond. To name the group: tap the group at the top of the conversation → tap the group icon → "Change Name and Photo."

On Android (Messages or default texting app): open your messaging app, tap the compose button, tap "New Group" or start typing multiple recipients, add everyone, and send your first message. To name the group (varies by app): tap the group name at the top → "Group Details" → edit the name.

Note on iPhone: if everyone in the group has an iPhone, the conversation uses iMessage (blue bubbles) with features like reactions, effects, and typing indicators. If any member has an Android phone, the group uses SMS/MMS (green bubbles) with fewer features. For the best experience across both platforms, consider using WhatsApp, Facebook Messenger, or another cross-platform messaging app.

You can leave a group chat if it becomes too active: on iPhone, tap the group name → "Leave this Conversation" (only works in iMessage groups with 3+ people). On Android, look for "Leave Group" in the group details.`,
    steps: [
      { title: 'Open your messaging app', content: 'Open Messages on iPhone or your default texting app on Android.' },
      { title: 'Start a new message', content: 'Tap the compose button (pencil icon). Add multiple contacts by name or phone number.' },
      { title: 'Send your first message', content: 'Type a greeting and send. Everyone receives it and can respond in the same conversation.' },
      { title: 'Name the group', content: 'iPhone: tap group info at top → "Change Name and Photo." Android: tap group name → "Group Details" → edit name.' },
      { title: 'Manage notifications', content: 'If the group is too active, tap the group name and select "Hide Alerts" (iPhone) or "Mute" (Android) to silence notifications.' },
    ],
  },

  {
    slug: 'block-unwanted-calls-texts',
    title: 'How to Block Unwanted Calls and Texts',
    excerpt: 'Stop spam calls, robocalls, and unwanted text messages on your iPhone or Android phone.',
    category: 'communication' as any,
    tags: ['block', 'spam', 'calls', 'texts', 'phone'],
    readTime: '5 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Unwanted calls and spam texts are frustrating and sometimes dangerous. Both iPhone and Android have built-in tools to block specific numbers and filter spam.

To block a specific number on iPhone: open the Phone app → Recents → find the number → tap the (i) icon → scroll down → "Block this Caller." For texts: open the message → tap the contact/number at the top → "Block this Caller." Blocked contacts cannot call, text, or FaceTime you.

To block on Android: open the Phone app → Recents → long-press the number → "Block" or "Block and report spam." For texts: open the message → tap the three dots → "Block" or "Report spam."

To silence all unknown callers on iPhone: Settings → Phone → Silence Unknown Callers. Calls from numbers not in your contacts go to voicemail. On Android: Phone app → Settings → "Spam and Call Screen" → enable spam filtering.

For spam texts on iPhone: Settings → Messages → "Filter Unknown Senders" moves texts from unknown numbers to a separate list. On Android: Messages → Settings → Spam Protection → turn it on.

Register your number at donotcall.gov to reduce calls from legitimate telemarketers. For extra protection, activate your carrier's free spam blocking: AT&T ActiveArmor, Verizon Call Filter, or T-Mobile Scam Shield.`,
    steps: [
      { title: 'Block a specific number', content: 'iPhone: Phone → Recents → tap (i) → "Block this Caller." Android: Phone → Recents → long-press → "Block."' },
      { title: 'Silence unknown callers', content: 'iPhone: Settings → Phone → Silence Unknown Callers. Android: Phone → Settings → enable spam filtering.' },
      { title: 'Filter spam texts', content: 'iPhone: Settings → Messages → "Filter Unknown Senders." Android: Messages → Settings → Spam Protection.' },
      { title: 'Register on the Do Not Call list', content: 'Go to donotcall.gov and enter your phone number. Reduces legitimate telemarketer calls.' },
      { title: 'Activate carrier spam blocking', content: `Download your carrier's free app: AT&T ActiveArmor, Verizon Call Filter, or T-Mobile Scam Shield.` },
    ],
  },

  {
    slug: 'manage-notification-settings',
    title: 'How to Manage Your Notification Settings',
    excerpt: `Take control of your phone's notifications — silence the noisy apps and keep the ones that matter.`,
    category: 'communication' as any,
    tags: ['notifications', 'settings', 'phone', 'iPhone', 'Android'],
    readTime: '5 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Phone notifications can be overwhelming — constant buzzing from news apps, social media, games, and shopping apps. The good news is you have complete control over which apps can notify you and how.

On iPhone: go to Settings → Notifications. You see a list of every app. Tap any app to control it: turn notifications on or off entirely, choose whether they appear on the lock screen, in the notification center, or as banners, and choose whether they make a sound. For apps that are too noisy, turn off "Sounds" but keep "Banners" so you still see them silently.

On Android: go to Settings → Notifications (or Apps & Notifications). Tap an app to manage its notification channels. Android lets you control different types of notifications within the same app separately.

A good approach: keep notifications on for calls, texts, email, calendar, and banking alerts. Turn off notifications for social media, news, games, and shopping apps — check those on your own schedule instead.

Both iPhone and Android offer "Do Not Disturb" and "Focus" modes that silence all notifications during set times (like bedtime or meetings). iPhone: Control Center → Focus → Do Not Disturb. Android: Settings → Do Not Disturb.

For a quick cleanup, check your notification history: iPhone swipe down from the top; Android swipe down. Notice which apps are sending the most notifications and turn those off.`,
    steps: [
      { title: 'Open notification settings', content: 'iPhone: Settings → Notifications. Android: Settings → Notifications or Apps & Notifications.' },
      { title: 'Review each app', content: 'Go through the list and decide which apps should notify you. Keep essentials (calls, texts, banking) and turn off noisy apps.' },
      { title: 'Customize instead of turning off', content: 'For some apps, turn off "Sounds" but keep "Banners" for silent visual notifications.' },
      { title: 'Set up Do Not Disturb', content: 'Schedule quiet hours for bedtime. iPhone: Focus → Do Not Disturb. Android: Settings → Do Not Disturb.' },
      { title: 'Review periodically', content: 'Check your notification shade weekly. If an app sends too many notifications, go to settings and turn them off.' },
    ],
  },

  {
    slug: 'delete-old-social-media-accounts',
    title: 'How to Delete Old Social Media Accounts',
    excerpt: 'Remove old social media accounts you no longer use to protect your privacy and reduce your digital footprint.',
    category: 'communication' as any,
    tags: ['social media', 'privacy', 'delete account', 'security', 'digital footprint'],
    readTime: '6 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Old social media accounts you no longer use are a privacy and security risk. They may contain personal photos, your birthday, email address, and other information that hackers or scammers can use. If the service gets hacked, your data is exposed. Deleting unused accounts reduces your digital footprint and improves your online safety.

Before deleting, download your data. Most services let you export your photos, posts, and messages. Facebook: Settings → Your Information → Download Your Information. Instagram: Settings → Accounts Center → Your Information and Permissions → Download Your Information. Twitter/X: Settings → Your Account → Download an Archive.

To delete Facebook: Settings → Accounts Center → Personal Details → Account Ownership and Control → Deactivation or Deletion → Delete Account. Facebook gives you a 30-day grace period — if you log in during that time, the deletion is canceled.

To delete Instagram: Settings → Accounts Center → Personal Details → Account Ownership and Control → Deactivation or Deletion → Delete Account. Same 30-day window applies.

To delete Twitter/X: Settings → Your Account → Deactivate Your Account. After 30 days of inactivity, the account is permanently deleted.

To delete LinkedIn: Settings → Account Management → Close Account.

For other services you have forgotten about, try searching your email inbox for "welcome to" or "confirm your email" to find old accounts. The website justdelete.me provides direct links to the deletion pages of hundreds of services.`,
    steps: [
      { title: 'List your old accounts', content: 'Search your email inbox for "welcome to" or "confirm your email" to find accounts you may have forgotten about.' },
      { title: 'Download your data first', content: 'Before deleting, export your photos, posts, and messages. Each service has a data download tool in Settings.' },
      { title: 'Navigate to the delete page', content: `Go to each service's settings and find "Delete Account" or "Close Account." It is often under Privacy, Security, or Account Management.` },
      { title: 'Confirm deletion', content: 'Follow the prompts to confirm. Most services have a 30-day grace period where you can change your mind.' },
      { title: 'Use justdelete.me for other services', content: 'Visit justdelete.me for direct links to deletion pages of hundreds of online services.' },
    ],
  },

  {
    slug: 'use-instagram-beginners',
    title: 'How to Use Instagram for Beginners',
    excerpt: 'Set up Instagram, follow friends and interests, and learn how to post photos and view Stories.',
    category: 'communication' as any,
    tags: ['Instagram', 'social media', 'photos', 'beginners', 'app'],
    readTime: '6 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Instagram is a social media app focused on sharing photos and short videos. You can follow friends, family, celebrities, news accounts, and pages about your interests (gardening, cooking, travel, pets). It is free to use and available on iPhone and Android.

Download Instagram from the App Store or Google Play Store. Create an account with your email, phone number, or sign in with Facebook. Choose a username and add a profile photo. Consider making your account private: Settings → Privacy → "Private Account" — this means only people you approve can see your posts.

The home screen (house icon) shows posts from people you follow. Scroll down to see photos and videos. Tap the heart to "like" a post. Tap the speech bubble to leave a comment.

To follow people: tap the search icon (magnifying glass) and search for friends by name, or browse topics you are interested in. Tap "Follow" on profiles you want to see updates from.

To post a photo: tap the "+" at the bottom center, select a photo from your phone or take a new one, add a filter or caption, and tap "Share." Your followers will see it in their feed.

Stories are short posts (photos or videos) that disappear after 24 hours. They appear as circles at the top of your home screen. Tap someone's circle to view their Story. To post your own Story, tap your profile circle or swipe right from the home screen.`,
    steps: [
      { title: 'Download and create an account', content: 'Get Instagram from App Store or Google Play. Sign up with email or phone number, choose a username, and add a profile photo.' },
      { title: 'Set your account to private', content: 'Go to Settings → Privacy → toggle on "Private Account" so only approved followers can see your posts.' },
      { title: 'Find and follow people', content: 'Tap the search icon, search for friends by name, and tap "Follow." Browse topics that interest you.' },
      { title: 'Post a photo', content: 'Tap "+" at the bottom, select or take a photo, add a caption, and tap "Share."' },
      { title: 'View and post Stories', content: `Tap circles at the top to view others' Stories. Swipe right from the home screen to create your own 24-hour Story.` },
    ],
  },

  {
    slug: 'set-up-zoom-call',
    title: 'How to Set Up a Zoom Call from Scratch',
    excerpt: 'Download Zoom, create an account, and start or join a video call — whether for family, friends, or appointments.',
    category: 'communication' as any,
    tags: ['Zoom', 'video call', 'meetings', 'communication', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Zoom is one of the most popular video calling apps. You can use it on your phone, tablet, or computer for family calls, doctor appointments, classes, and meetings. The free plan allows calls with up to 100 participants for up to 40 minutes (unlimited time for 1-on-1 calls).

Download Zoom from the App Store, Google Play Store, or zoom.us for computers. Create a free account with your email address, or sign in with Google or Apple.

To start a call: open Zoom, tap "New Meeting," and tap "Start a Meeting." Zoom gives you a meeting link or ID you can share with others. Tap "Participants" → "Invite" to send the link via text, email, or any messaging app.

To join someone else's call: tap "Join" in Zoom and enter the Meeting ID (the number the host shared with you). Or tap the link they sent you — it opens Zoom automatically.

During a call: tap the screen to see controls. "Mute" silences your microphone (tap again to unmute). "Stop Video" turns off your camera. "Chat" lets you type messages. "Share Screen" shows your screen to everyone.

If you are hosting a call for family, send the meeting link via text message so everyone can tap it to join directly. For recurring calls (like a weekly family catch-up), use "Schedule" to create a meeting with a fixed time and reusable link.`,
    steps: [
      { title: 'Download Zoom', content: 'Get Zoom from App Store, Google Play, or zoom.us on your computer. Create a free account.' },
      { title: 'Start a meeting', content: 'Tap "New Meeting" → "Start a Meeting." Share the meeting link with participants via text or email.' },
      { title: `Join someone else's meeting`, content: 'Tap "Join" and enter the Meeting ID, or tap the link they shared with you.' },
      { title: 'Learn the controls', content: 'Tap the screen to see Mute, Stop Video, Chat, and Share Screen buttons.' },
      { title: 'Schedule recurring calls', content: 'Use "Schedule" to create meetings with a set time and reusable link — great for weekly family calls.' },
    ],
  },

  {
    slug: 'send-photos-text-message',
    title: 'How to Send Photos Through Text Message',
    excerpt: 'Share photos with friends and family by text — on iPhone or Android, step by step.',
    category: 'communication' as any,
    tags: ['photos', 'texting', 'MMS', 'iPhone', 'Android'],
    readTime: '4 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Sending photos by text message is one of the most common things people do on their phones. Here is how to do it on both iPhone and Android.

On iPhone: open the Messages app and start a new conversation or open an existing one. Tap the "+" or camera icon next to the text field. Choose "Photos" to select from your photo library, or "Camera" to take a new photo. Select the photos you want to send (you can select multiple), tap "Add," then tap the blue send arrow.

On Android: open your messaging app and start or open a conversation. Tap the attachment icon (paperclip or "+") next to the text field. Select "Gallery" or "Photos" to choose from your library, or "Camera" to take a new one. Select photos and tap "Send."

Note about photo quality: when you send photos by regular text message (SMS/MMS), the quality is reduced to fit the file size limit. For full-quality photos, use iMessage (iPhone-to-iPhone, blue bubbles keep full quality), email, or an app like WhatsApp or Google Photos sharing.

To send multiple photos at once, select several before sending. Most messaging apps let you choose multiple photos in one message. For very large batches (like vacation photos), consider creating a shared album in Google Photos or iCloud instead.`,
    steps: [
      { title: 'Open your messaging app', content: 'Open Messages (iPhone) or your default texting app (Android). Start a new conversation or open an existing one.' },
      { title: 'Tap the attachment button', content: 'iPhone: tap "+" or the camera icon. Android: tap the paperclip or "+" icon next to the text field.' },
      { title: 'Select photos', content: 'Choose "Photos" or "Gallery" to pick from your library. Tap to select one or more photos.' },
      { title: 'Send', content: 'Tap "Add" or the checkmark, then tap the send arrow. The photos are sent as part of your text message.' },
      { title: 'For full-quality sharing', content: 'For highest quality, use iMessage (iPhone-to-iPhone), email, or share a Google Photos or iCloud album link.' },
    ],
  },

  {
    slug: 'use-google-meet-video-calls',
    title: 'How to Use Google Meet for Video Calls',
    excerpt: 'Start or join a free Google Meet video call — right from your Gmail, phone, or web browser.',
    category: 'communication' as any,
    tags: ['Google Meet', 'video call', 'Google', 'communication', 'meetings'],
    readTime: '5 min',
    thumbnailEmoji: '🎥',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Google Meet is Google's free video calling service. You can use it from your phone, tablet, or computer. Anyone with a Google account (Gmail) can start a meeting, and participants can join from a web browser without installing anything. Free calls allow up to 100 participants for up to 60 minutes.

To start a meeting on your phone: download the Google Meet app, sign in with your Google account, and tap "New Meeting." You get a meeting link to share via text, email, or any messaging app.

To start from a computer: go to meet.google.com, sign in with your Google account, and click "New Meeting." You can also start a meeting directly from Gmail — look for the "Meet" section in the sidebar.

To join a meeting: click the meeting link someone shared with you, or go to meet.google.com and enter the meeting code. On your phone, tapping the link automatically opens the Google Meet app.

During a call, use the bottom toolbar to mute/unmute your microphone, turn your camera on/off, share your screen, access the chat, and leave the meeting. Tap the three dots for more options like changing your background or adjusting layout.

Google Meet is a great option for families where some members use iPhone and others use Android — it works on every platform through a web browser.`,
    steps: [
      { title: 'Open Google Meet', content: 'On phone: download the Google Meet app. On computer: go to meet.google.com. Sign in with your Google account.' },
      { title: 'Start a new meeting', content: 'Tap "New Meeting" and share the link with participants via text or email.' },
      { title: 'Join a meeting', content: 'Click the meeting link shared with you, or go to meet.google.com and enter the meeting code.' },
      { title: 'Use call controls', content: 'The bottom toolbar has mute, camera, screen share, chat, and leave buttons.' },
      { title: 'Share with anyone', content: 'Google Meet works on any device with a web browser — great for mixed iPhone/Android families.' },
    ],
  },

  {
    slug: 'set-up-microsoft-teams',
    title: 'How to Set Up Microsoft Teams',
    excerpt: 'Install and use Microsoft Teams for video calls, messaging, and file sharing with family, friends, or coworkers.',
    category: 'communication' as any,
    tags: ['Microsoft Teams', 'video call', 'Microsoft', 'communication', 'meetings'],
    readTime: '6 min',
    thumbnailEmoji: '👥',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Microsoft Teams is a communication app for video calls, messaging, and file sharing. While many people use it for work, the free personal version is also great for family and friends. It works on phones, tablets, and computers.

Download Microsoft Teams from the App Store, Google Play Store, or teams.microsoft.com. Sign in with your Microsoft account (the same one you use for Outlook, Hotmail, or Xbox). If you do not have a Microsoft account, create one for free.

For a video call: tap "Chat" → the new chat icon → type the person's name, email, or phone number → send them a message → then tap the video camera icon at the top to start a video call. Or tap "Calendar" → "Meet Now" to create an instant meeting link you can share.

For group conversations: create a group chat by adding multiple people. Everyone in the group can message, share files, and start group video calls.

Teams also lets you share files — tap the paperclip in a chat to send photos, documents, or other files. Shared files are stored in the chat history so anyone in the conversation can access them later.

For scheduling calls: tap "Calendar" → "New Meeting" → set a date and time → add participants by email. They receive an invitation with a link to join.`,
    steps: [
      { title: 'Download Microsoft Teams', content: 'Get Teams from App Store, Google Play, or teams.microsoft.com. Sign in with your Microsoft account.' },
      { title: 'Start a chat', content: 'Tap "Chat" → new chat icon → type a name, email, or phone number → send a message.' },
      { title: 'Make a video call', content: 'From a chat, tap the video camera icon at the top. Or use "Meet Now" in Calendar for an instant meeting link.' },
      { title: 'Create a group', content: 'Add multiple people to a chat for group messaging, file sharing, and group video calls.' },
      { title: 'Schedule a meeting', content: 'Tap "Calendar" → "New Meeting" → set date/time → add participants. They receive an email invitation with a join link.' },
    ],
  },

  {
    slug: 'leave-group-chat-politely',
    title: 'How to Leave a Group Chat Without Being Rude',
    excerpt: 'Leave an overwhelming group chat on iPhone or Android gracefully — with tips for handling it politely.',
    category: 'communication' as any,
    tags: ['group chat', 'texting', 'etiquette', 'messaging', 'social'],
    readTime: '4 min',
    thumbnailEmoji: '👋',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Group chats are great for staying connected, but sometimes they get too active — dozens of notifications an hour, conversations you are not interested in, or a group that has outlived its purpose. Here is how to gracefully reduce the noise or leave.

Option 1: Mute the conversation (recommended first step). This keeps you in the group but stops notifications. iPhone: open the group, tap the group name at the top → "Hide Alerts." Android: open the group → three dots → "Mute" or "Notifications Off." You can still read messages when you open the app, but your phone will not buzz.

Option 2: Leave the group. On iPhone (iMessage groups with 3+ people): tap the group name → "Leave this Conversation." Note: this sends a notification to the group saying you left. On Android: this depends on the app. In Google Messages, you cannot leave a group SMS/MMS — you can only mute it. In apps like WhatsApp, tap the group name → "Exit Group."

If you want to be polite about leaving: send a brief message first. Something like "Thanks for including me! I need to step away from this group for now, but I am always reachable by regular text. Talk soon!" Then leave. Most people understand — and most have wanted to leave a group chat themselves at some point.

Option 3: If you do not want to leave entirely but the notifications are too much, ask the group to be less active. Or suggest moving to a platform with better notification controls, like a group in WhatsApp where you can read at your own pace.`,
    steps: [
      { title: 'Mute the group first', content: 'iPhone: tap group name → "Hide Alerts." Android: three dots → "Mute." This stops notifications without leaving.' },
      { title: 'Consider if leaving is necessary', content: 'Muting may solve the problem. Only leave if you genuinely do not want to be in the group at all.' },
      { title: 'Send a polite exit message', content: 'Say something brief like "Thanks for including me! I need to step away — reach me by regular text anytime."' },
      { title: 'Leave the group', content: 'iPhone: tap group name → "Leave this Conversation." WhatsApp: group name → "Exit Group."' },
      { title: 'Be reachable individually', content: 'After leaving, make sure close contacts know they can still reach you directly by phone or text.' },
    ],
  },

  // ═══════════════════════════════════════════
  // HEALTH & MEDICAL TECH (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-patient-portal-mychart',
    title: 'How to Use a Patient Portal (MyChart)',
    excerpt: `Log in to MyChart or your doctor's patient portal to see test results, message your doctor, and manage appointments.`,
    category: 'health-tech' as any,
    tags: ['MyChart', 'patient portal', 'healthcare', 'doctor', 'medical records'],
    readTime: '6 min',
    thumbnailEmoji: '🩺',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A patient portal is a secure website or app that lets you communicate with your doctor's office online. The most common portal is MyChart, used by hospitals and clinics across the country. Through the portal, you can view test results, message your doctor, schedule appointments, request prescription refills, and see your medical records — all without making a phone call.

To get started, ask your doctor's office for a portal activation code or enrollment instructions. Many offices hand these out at appointments or email them. Go to your provider's portal website (often mychart.yourprovider.org) or download the MyChart app. Create an account using the activation code, your personal information, and a password.

Once logged in, the dashboard shows your upcoming appointments, recent messages, and new test results. Tap "Test Results" to view lab work — results often appear within 1-2 days of your test. Tap "Messages" to send a secure message to your doctor's team about non-emergency questions (they typically respond within 1-2 business days).

To schedule or cancel an appointment, look for "Appointments" → "Schedule an Appointment." Some offices let you book directly; others let you request a time and the office confirms.

For prescription refills, go to "Medications" → "Request Refill." Select the medication and your preferred pharmacy. Your doctor approves and sends it to the pharmacy.

Patient portals are secure — your health information is protected by federal law (HIPAA). Make sure to use a strong, unique password and enable two-factor authentication if offered.`,
    steps: [
      { title: 'Get your activation code', content: `Ask your doctor's office for a patient portal activation code. They may give it to you at your next visit or send it by email.` },
      { title: 'Create your account', content: 'Go to the portal website or download the MyChart app. Use the activation code to create an account with your email and a strong password.' },
      { title: 'View test results', content: 'Tap "Test Results" to see lab work. Results typically appear within 1-2 days of your test.' },
      { title: 'Message your doctor', content: `Tap "Messages" to send secure, non-emergency questions to your doctor's team. Expect a reply within 1-2 business days.` },
      { title: 'Schedule appointments', content: 'Go to "Appointments" to schedule, reschedule, or cancel visits. Some offices allow direct booking; others confirm your request.' },
      { title: 'Request prescription refills', content: 'Go to "Medications" → "Request Refill." Select the medication and pharmacy. Your doctor approves and sends it.' },
    ],
  },

  {
    slug: 'set-up-telehealth-appointment',
    title: 'How to Set Up a Telehealth Appointment',
    excerpt: 'See your doctor by video call from home — how to schedule, prepare for, and connect to a telehealth visit.',
    category: 'health-tech' as any,
    tags: ['telehealth', 'telemedicine', 'video visit', 'doctor', 'healthcare'],
    readTime: '6 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Telehealth lets you see your doctor by video call from the comfort of your home. It is great for follow-up visits, medication reviews, mental health appointments, and non-emergency consultations. Most insurance plans cover telehealth visits the same as in-person visits.

To schedule a telehealth appointment, call your doctor's office and ask for a "virtual visit" or "video visit." Many offices also let you schedule through their patient portal (like MyChart) — look for a "Video Visit" option when booking.

Before your appointment, make sure your device is ready. You need a phone, tablet, or computer with a camera and microphone (all smartphones and most laptops have these built in). Test your internet connection — a stable WiFi connection is important for clear video. Find a quiet, well-lit room for the call.

Your doctor's office will send you a link to join the video visit, usually by email or text. At the scheduled time, click the link. You may be asked to "check in" online and confirm your information. Then wait in a virtual waiting room until your doctor joins.

During the visit, your doctor can see and hear you, ask questions, review your symptoms, look at anything you show on camera (like a skin condition), and prescribe medications. Have your medications, a list of questions, and your pharmacy information ready.

If you have trouble connecting, call your doctor's office. Many have a support line for telehealth technical issues. Check that your browser is up to date, or try a different device if the video is not working.`,
    steps: [
      { title: 'Schedule a video visit', content: `Call your doctor's office or use the patient portal to book a telehealth appointment. Ask for a "video visit."` },
      { title: 'Prepare your device', content: 'Use a phone, tablet, or computer with a camera and microphone. Test your WiFi connection beforehand.' },
      { title: 'Set up your space', content: 'Find a quiet, well-lit room. Sit near a window for natural light on your face. Minimize background noise.' },
      { title: 'Join the video call', content: `Click the link your doctor's office sent by email or text. Check in online if prompted. Wait in the virtual waiting room.` },
      { title: 'Have your information ready', content: 'Keep your medications, list of questions, pharmacy name, and insurance card nearby during the visit.' },
    ],
  },

  {
    slug: 'set-up-medication-reminders-phone',
    title: 'How to Set Up Medication Reminders on Your Phone',
    excerpt: `Never forget to take your medication — use your phone's built-in tools or a free app to set daily reminders.`,
    category: 'health-tech' as any,
    tags: ['medication', 'reminders', 'health', 'phone', 'alarms'],
    readTime: '5 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Taking medication on schedule is important for your health, and your phone can help. There are several ways to set up daily medication reminders — from basic alarms to dedicated apps that track your medications and refill dates.

The most straightforward method is your phone's built-in alarm or reminder. On iPhone: open the Clock app → Alarms → "+" to add a new alarm. Set the time for your medication, label it with the medication name (tap "Label"), and set it to repeat daily. On Android: open the Clock app → Alarm → "+" → set time, label, and repeat schedule.

For more features, use a dedicated medication reminder app. Medisafe (free, iPhone and Android) lets you add all your medications, set multiple daily reminders, track whether you took each dose, and get refill reminders. It also alerts a family member if you miss a dose.

Apple Health (iPhone): open the Health app → Browse → Medications. Add your medications by name. The app sends reminders and logs when you take each dose. It can also check for potential drug interactions.

If you prefer voice reminders, ask your smart speaker: "Alexa, remind me to take my blood pressure medicine at 8 AM every day" or "Hey Google, set a medication reminder for 9 AM daily."

Whatever method you choose, consistency is key. Set your reminders for the same time each day, and keep your medication in a visible place near where you will be when the reminder goes off.`,
    steps: [
      { title: 'Use a basic alarm', content: 'Open Clock → Alarms → "+" → set time, label with medication name, and set to repeat daily. Create separate alarms for each medication.' },
      { title: 'Try the Medisafe app', content: 'Download Medisafe (free). Add medications, set reminder times, and track doses. It alerts a family member if you miss a dose.' },
      { title: 'Use Apple Health (iPhone)', content: 'Open Health → Browse → Medications. Add your medications and enable reminders. The app checks for drug interactions.' },
      { title: 'Use a smart speaker', content: '"Alexa, remind me to take my medicine at 8 AM every day" or "Hey Google, set a medication reminder for 9 AM daily."' },
      { title: 'Keep medication visible', content: 'Place your medication near where you will be when the reminder goes off — by your coffee maker, bedside table, or breakfast spot.' },
    ],
  },

  {
    slug: 'use-apple-health-google-fit',
    title: 'How to Use Apple Health or Google Fit',
    excerpt: 'Track your steps, activity, and health metrics with the free health app already on your phone.',
    category: 'health-tech' as any,
    tags: ['Apple Health', 'Google Fit', 'fitness', 'steps', 'health tracking'],
    readTime: '5 min',
    thumbnailEmoji: '❤️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your phone can track your daily steps, walking distance, and other activity without any extra devices — using its built-in motion sensors. Apple Health (iPhone) and Google Fit (Android) are free apps that collect this data and present it in an easy-to-understand dashboard.

Apple Health comes pre-installed on every iPhone (white icon with a red heart). Open it and you will see a Summary dashboard showing your recent activity. The app automatically tracks your steps and walking distance using your phone's motion sensors — you do not need to turn anything on. You can also manually log other health data like weight, blood pressure, sleep, and medications.

Google Fit is available on Android (download from Play Store if not pre-installed). Open it, sign in with your Google account, and set your activity goals. Like Apple Health, it automatically tracks steps and active minutes using your phone's sensors.

Both apps can connect to third-party health devices. If you have a fitness tracker, smart scale, blood pressure monitor, or sleep tracker, check if it connects to Apple Health or Google Fit. Go to the app's settings and look for "Connected Apps" or "Connected Devices."

Set a daily step goal to stay motivated. Health organizations recommend 7,000-10,000 steps per day, but any increase from your current level is beneficial. The apps show your progress throughout the day.

Your health data is private and stored on your device. You control who can see it and which apps can access it. You can also share specific health data with family members or your doctor if you choose.`,
    steps: [
      { title: 'Open Apple Health or Google Fit', content: 'iPhone: open the Health app (heart icon). Android: download Google Fit from Play Store and sign in with your Google account.' },
      { title: 'Review your dashboard', content: 'The main screen shows your daily steps, distance, and activity. Your phone tracks these automatically.' },
      { title: 'Set a daily goal', content: 'Set a step goal to stay motivated. Start with your current average and increase gradually.' },
      { title: 'Connect health devices', content: 'In settings, look for "Connected Apps" or "Connected Devices" to link fitness trackers, scales, or blood pressure monitors.' },
      { title: 'Log additional health data', content: 'Manually log weight, blood pressure, sleep, or medications. Over time, you build a useful health history to share with your doctor.' },
    ],
  },

  {
    slug: 'set-up-fall-detection-apple-watch',
    title: 'How to Set Up Fall Detection on Apple Watch',
    excerpt: 'Enable Fall Detection on your Apple Watch so it automatically calls emergency services if you fall and cannot respond.',
    category: 'health-tech' as any,
    tags: ['Apple Watch', 'fall detection', 'safety', 'seniors', 'emergency'],
    readTime: '5 min',
    thumbnailEmoji: '⌚',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Apple Watch has a built-in Fall Detection feature that can detect when you take a hard fall. If it detects a fall and you do not respond within about a minute, it automatically calls emergency services (911) and sends your location to your emergency contacts. This feature is available on Apple Watch Series 4 and later.

For users age 55 and older, Fall Detection is turned on automatically when you set up your Apple Watch and enter your age. For younger users, you need to enable it manually.

To turn on Fall Detection: on your iPhone, open the Watch app → My Watch → Emergency SOS → Fall Detection → turn it on. You can also access this directly on the Apple Watch: Settings → SOS → Fall Detection.

When the Apple Watch detects a fall, it taps your wrist, sounds an alarm, and displays an alert asking if you are okay. You can tap "I'm OK" to dismiss it, or tap "Emergency SOS" to call for help. If you do not respond and the watch detects you are not moving for about a minute, it starts a 30-second countdown. If you still do not respond, it automatically calls 911, plays a recorded message about your fall, and sends your location to your emergency contacts.

Set up your emergency contacts in the Health app on your iPhone: open Health → tap your profile picture → Medical ID → Edit → add Emergency Contacts. Also fill out your Medical ID with blood type, allergies, conditions, and medications — first responders can access this from your locked Apple Watch or iPhone.`,
    steps: [
      { title: 'Open the Watch app on your iPhone', content: 'Open the Watch app (black icon with a watch outline) and tap "My Watch" at the bottom.' },
      { title: 'Enable Fall Detection', content: 'Tap Emergency SOS → Fall Detection → turn it on. For users 55+, this may already be enabled.' },
      { title: 'Set up emergency contacts', content: 'Open Health app → profile picture → Medical ID → Edit → add Emergency Contacts. Add at least one trusted person.' },
      { title: 'Fill out your Medical ID', content: 'In the same Medical ID section, add your blood type, allergies, medical conditions, and medications. First responders can see this.' },
      { title: 'Know how it works', content: 'After a fall, the watch taps your wrist and asks if you are OK. If you do not respond for about a minute, it calls 911 and texts your emergency contacts with your location.' },
    ],
  },

  {
    slug: 'use-medical-id-phone',
    title: 'How to Use Medical ID on Your Phone',
    excerpt: 'Set up your Medical ID so first responders can see your allergies, medications, and emergency contacts from your locked phone.',
    category: 'health-tech' as any,
    tags: ['Medical ID', 'emergency', 'health', 'iPhone', 'Android'],
    readTime: '5 min',
    thumbnailEmoji: '🆔',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Medical ID is a feature on your phone that stores critical health information — allergies, medications, medical conditions, blood type, and emergency contacts — that first responders and hospital staff can access even when your phone is locked. This can be life-saving if you are in an accident or medical emergency and cannot communicate.

On iPhone: open the Health app → tap your profile picture (top right) → "Medical ID" → "Edit." Fill in your medical conditions, allergies, medications, blood type, weight, height, and at least one emergency contact. Most importantly, toggle on "Show When Locked" so this information is accessible from the lock screen. Also enable "Share During Emergency Call" to automatically send your Medical ID to emergency services when you call 911.

To access someone's Medical ID in an emergency: on the iPhone lock screen, tap "Emergency" → "Medical ID." This works even if the phone is locked.

On Android: open the Settings app → Safety and Emergency (or "About Phone" → "Emergency Information"). Add medical information and emergency contacts. On newer Android phones, this information is accessible from the lock screen by tapping "Emergency Call" then "Emergency Information."

For both iPhone and Android, make sure your emergency contacts know they are listed. They should have their phone nearby and available, especially for older family members.

Review and update your Medical ID at least once a year or whenever your medications, conditions, or emergency contacts change.`,
    steps: [
      { title: 'Open Medical ID settings', content: 'iPhone: Health app → profile → Medical ID → Edit. Android: Settings → Safety and Emergency or About Phone → Emergency Information.' },
      { title: 'Enter your health information', content: 'Add medical conditions, allergies, current medications, blood type, and any other critical health details.' },
      { title: 'Add emergency contacts', content: 'Add at least one trusted person (family member or close friend) as an emergency contact. Include their relationship to you.' },
      { title: 'Enable lock screen access', content: 'iPhone: toggle on "Show When Locked" and "Share During Emergency Call." Android: verify the information is accessible from the lock screen.' },
      { title: 'Review annually', content: 'Update your Medical ID whenever medications, conditions, or emergency contacts change. Check at least once a year.' },
    ],
  },

  {
    slug: 'connect-hearing-aids-phone-bluetooth',
    title: 'How to Connect Hearing Aids to Your Phone via Bluetooth',
    excerpt: 'Pair your Bluetooth hearing aids with your iPhone or Android phone to stream calls, music, and audio directly.',
    category: 'health-tech' as any,
    tags: ['hearing aids', 'Bluetooth', 'accessibility', 'phone', 'audio'],
    readTime: '6 min',
    thumbnailEmoji: '👂',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Many modern hearing aids connect to your phone via Bluetooth. This lets you stream phone calls, music, podcasts, and other audio directly to your hearing aids — like wireless earbuds designed for your hearing needs. You can also use your phone as a remote control to adjust volume and settings.

First, check if your hearing aids support Bluetooth. Most hearing aids made after 2018 from brands like Phonak, Oticon, ReSound, Signia, Starkey, and Widex include Bluetooth connectivity. Ask your audiologist or check the manufacturer's website.

On iPhone: iPhones have built-in support for "Made for iPhone" hearing aids. Go to Settings → Accessibility → Hearing Devices. Put your hearing aids in pairing mode (usually by opening and closing the battery door, or following the instructions from your hearing aid brand). Your iPhone will detect them — tap to pair.

On Android: go to Settings → Connected Devices → Pair New Device. Put your hearing aids in pairing mode. They should appear in the list. For ASHA (Audio Streaming for Hearing Aids) compatible hearing aids and Android phones, go to Settings → Accessibility → Hearing Devices.

Many hearing aid manufacturers also have companion apps (Phonak myPhonak, Oticon ON, ReSound Smart 3D) that offer additional controls: adjusting bass and treble, creating custom listening programs for different environments, and locating lost hearing aids.

If you have trouble pairing, make sure your hearing aids have fresh batteries (or are charged), your phone's Bluetooth is turned on, and you are within 3 feet of your phone during pairing.`,
    steps: [
      { title: 'Check Bluetooth compatibility', content: `Verify your hearing aids support Bluetooth. Check the manufacturer's website or ask your audiologist.` },
      { title: 'Put hearing aids in pairing mode', content: `Open and close the battery door, or follow your hearing aid's specific pairing instructions. The hearing aids are ready to connect.` },
      { title: 'Pair on iPhone', content: 'Settings → Accessibility → Hearing Devices. Your iPhone detects them. Tap to pair.' },
      { title: 'Pair on Android', content: 'Settings → Connected Devices → Pair New Device. Or Settings → Accessibility → Hearing Devices for ASHA-compatible aids.' },
      { title: 'Download the companion app', content: `Get your hearing aid brand's app for extra controls: volume, programs, equalizer, and lost hearing aid locator.` },
    ],
  },

  {
    slug: 'track-sleep-wearable',
    title: 'How to Track Your Sleep with a Wearable',
    excerpt: 'Use your smartwatch or fitness tracker to understand your sleep patterns and improve your rest.',
    category: 'health-tech' as any,
    tags: ['sleep tracking', 'wearable', 'fitness tracker', 'health', 'Apple Watch'],
    readTime: '5 min',
    thumbnailEmoji: '😴',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Many smartwatches and fitness trackers can monitor your sleep — how long you slept, how often you woke up, and how much time you spent in different sleep stages (light, deep, and REM sleep). This information helps you understand your sleep quality and make changes to improve it.

Apple Watch: open the Watch app on your iPhone → Sleep → enable Sleep Tracking. Wear your Apple Watch to bed. In the morning, open the Health app → Browse → Sleep to see your data. The watch also offers a Wind Down feature that dims your screen and limits notifications before bedtime.

Fitbit: sleep tracking is automatic — wear your Fitbit to bed and check the Fitbit app in the morning. It shows time asleep, sleep stages, and a Sleep Score (0-100).

Samsung Galaxy Watch: wear it to bed and check Samsung Health the next morning for sleep duration and stages.

For accurate tracking, wear your device snugly on your wrist (not too tight, not too loose). Charge your device before bed if the battery is low — most need at least 20-30% charge to track a full night.

What to look for: most adults need 7-9 hours of sleep. If your tracker consistently shows less, or if you spend very little time in deep sleep, consider adjusting your bedtime, reducing caffeine after noon, keeping your bedroom cool and dark, and putting screens away 30 minutes before bed.`,
    steps: [
      { title: 'Enable sleep tracking', content: 'Apple Watch: Watch app → Sleep → enable tracking. Fitbit: automatic. Samsung: automatic. Wear your device to bed.' },
      { title: 'Wear your device overnight', content: 'Make sure the device fits snugly on your wrist and has enough battery (20%+ for a full night).' },
      { title: 'Check your data in the morning', content: `Open your device's health app to see time asleep, wake-ups, and sleep stages (light, deep, REM).` },
      { title: 'Review trends over time', content: 'Look at weekly and monthly sleep trends rather than single nights. Consistent patterns are more meaningful.' },
      { title: 'Make adjustments based on data', content: 'If you consistently get less than 7 hours or little deep sleep, try adjusting bedtime, reducing caffeine, and limiting screens before bed.' },
    ],
  },

  {
    slug: 'share-health-data-with-doctor',
    title: 'How to Share Health Data with Your Doctor',
    excerpt: 'Export and share health information from your phone or wearable with your doctor for better care.',
    category: 'health-tech' as any,
    tags: ['health data', 'doctor', 'Apple Health', 'medical records', 'sharing'],
    readTime: '5 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If you track your health with a phone or wearable device — blood pressure readings, blood glucose levels, heart rate, activity, or sleep — sharing this data with your doctor gives them valuable information they cannot get from a single office visit. Trends over weeks and months can reveal patterns that help with diagnosis and treatment decisions.

Apple Health (iPhone) can share data directly with your healthcare provider if they support it. Open Health → Sharing → "Share with a Healthcare Provider." If your provider uses a compatible system (many MyChart providers support this), your data flows automatically. Otherwise, you can export specific data: Health → Browse → select a category → "Show All Data" → export icon → share via email or AirDrop.

For blood pressure or blood glucose readings: if you log readings in a health app, bring your phone to your appointment and show the history to your doctor. Most doctors find this very helpful. You can also take screenshots of your data trends and print them out.

Fitbit and Samsung Health allow you to export data as CSV files through the app or website, which you can email to your doctor. Fitbit: go to fitbit.com → Settings → Data Export. Samsung Health: Menu → Settings → Download Personal Data.

When sharing, focus on what is relevant to your current health concerns. If you are tracking blood pressure, show the blood pressure trends. If you are working on fitness, show step counts and active minutes. Your doctor does not need to see every piece of data.

Before your appointment, prepare a one-page summary: your recent averages, any concerning readings, and questions about the data. This makes the most of your limited appointment time.`,
    steps: [
      { title: 'Review what you are tracking', content: 'Check what health data your phone or wearable collects — blood pressure, glucose, heart rate, steps, sleep, weight.' },
      { title: 'Connect to your provider (iPhone)', content: 'Apple Health → Sharing → "Share with a Healthcare Provider." If your doctor uses MyChart, data may sync automatically.' },
      { title: 'Export specific data', content: 'In your health app, navigate to the data category → export or share. Save as a file to email, or take screenshots of trends.' },
      { title: 'Bring your phone to appointments', content: 'Show your doctor the health app data directly on your phone. Doctors find visual trend charts very useful.' },
      { title: 'Prepare a summary', content: 'Before your appointment, note your recent averages, concerning readings, and specific questions about the data.' },
    ],
  },

  {
    slug: 'use-blood-pressure-monitor-app',
    title: 'How to Use a Blood Pressure Monitor App',
    excerpt: 'Connect a Bluetooth blood pressure monitor to your phone to track readings over time and share with your doctor.',
    category: 'health-tech' as any,
    tags: ['blood pressure', 'health monitoring', 'Bluetooth', 'medical', 'health app'],
    readTime: '5 min',
    thumbnailEmoji: '🫀',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Tracking your blood pressure at home gives you and your doctor a much more complete picture of your cardiovascular health than occasional office readings. Many blood pressure monitors now connect to your phone via Bluetooth, automatically logging each reading so you can see trends over time.

Popular Bluetooth-connected blood pressure monitors include Omron (connects to the Omron Connect app), Withings BPM (connects to the Withings Health Mate app), and QardioArm (connects to the Qardio app). These monitors cost $50-100 and are available at pharmacies and online retailers.

To set up: take the monitor out of the box and install batteries or charge it. Download the monitor's companion app (Omron Connect, Withings Health Mate, or Qardio) on your phone. Create an account and follow the in-app instructions to pair the monitor via Bluetooth.

To take a reading: sit in a chair with your feet flat on the floor. Rest for 5 minutes before measuring. Place the cuff on your upper arm (follow the instructions that came with the monitor for proper placement). Press start. The monitor inflates, takes your reading, and automatically sends it to the app.

The app stores every reading with the date and time. Over weeks and months, you build a clear picture of your blood pressure trends. Most apps display charts and averages. You can share these with your doctor at your next appointment.

Normal blood pressure is below 120/80. Talk to your doctor about your target if you are on medication. The American Heart Association recommends measuring at the same time each day for consistent results.`,
    steps: [
      { title: 'Get a Bluetooth blood pressure monitor', content: 'Purchase an Omron, Withings, or QardioArm Bluetooth-connected monitor from a pharmacy or online retailer ($50-100).' },
      { title: 'Download the companion app', content: `Get the monitor's app (Omron Connect, Withings Health Mate, or Qardio) from the App Store or Google Play Store.` },
      { title: 'Pair via Bluetooth', content: 'Follow the app instructions to connect the monitor to your phone. Keep Bluetooth turned on during pairing.' },
      { title: 'Take a proper reading', content: 'Sit in a chair, feet flat, rest 5 minutes. Place the cuff on your upper arm correctly. Press start and keep still.' },
      { title: 'Review trends and share', content: 'Check your app for charts and averages over time. Bring your phone to doctor appointments to share the data.' },
    ],
  },

  // ═══════════════════════════════════════════
  // LIFE TRANSITIONS (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-new-iphone-complete',
    title: 'How to Set Up a Brand New iPhone (Complete Guide)',
    excerpt: 'Unbox and set up your new iPhone from scratch — Apple ID, WiFi, apps, and transferring data from your old phone.',
    category: 'life-transitions' as any,
    tags: ['iPhone', 'setup', 'Apple', 'new phone', 'beginners'],
    readTime: '10 min',
    videoUrl: 'https://www.youtube.com/embed/7LcXfRZvdyo',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Getting a new iPhone is exciting, and setting it up correctly from the start will save you headaches later. This guide walks you through the entire process from unboxing to your first apps.

Turn on your new iPhone by holding the side button until the Apple logo appears. Select your language and region. The iPhone asks if you want to set it up as new or transfer from another device.

If you have an old iPhone: place both phones next to each other. A "Quick Start" animation appears on the old phone — hold the new phone's camera over it. Your settings, accounts, and data transfer automatically over WiFi. This can take 30 minutes to several hours depending on how much data you have.

If this is your first iPhone: choose "Set Up Manually." Connect to your WiFi network and sign in with your Apple ID (or create one for free). Set up Face ID or Touch ID by following the on-screen instructions — this lets you unlock your phone with your face or fingerprint.

Choose whether to enable Location Services (recommended for maps, weather, and Find My iPhone). Set up Siri by reading a few phrases aloud. Choose your display preferences (text size, display zoom).

Once at the home screen, open the App Store (blue icon with an "A") and download the apps you need: your bank's app, email, WhatsApp, social media, and anything else you use regularly. Sign in to each with your existing accounts.

Set up your email: Settings → Mail → Accounts → Add Account. Choose your email provider (Gmail, Outlook, Yahoo, etc.) and sign in. Set up your voicemail: open the Phone app → Voicemail → Set Up Now.`,
    steps: [
      { title: 'Turn on and select language', content: 'Hold the side button until the Apple logo appears. Select your language and region.' },
      { title: 'Transfer from old phone (if applicable)', content: 'Place old and new iPhones next to each other. Follow the Quick Start animation to transfer data automatically.' },
      { title: 'Connect to WiFi and sign in', content: 'Select your WiFi network, enter the password, and sign in with your Apple ID. Create one for free if needed.' },
      { title: 'Set up Face ID or Touch ID', content: 'Follow the on-screen instructions to register your face or fingerprint. This unlocks your phone and authorizes purchases.' },
      { title: 'Download your apps', content: 'Open the App Store and download the apps you need — banking, email, messaging, social media. Sign in to each.' },
      { title: 'Set up email and voicemail', content: 'Settings → Mail → Accounts → Add Account for email. Phone app → Voicemail → Set Up Now for voicemail.' },
    ],
  },

  {
    slug: 'set-up-new-android-phone',
    title: 'How to Set Up a Brand New Android Phone',
    excerpt: 'Set up your new Android phone step by step — Google account, WiFi, apps, and transferring data from your old phone.',
    category: 'life-transitions' as any,
    tags: ['Android', 'setup', 'new phone', 'Google', 'beginners'],
    readTime: '10 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Setting up a new Android phone takes about 15-20 minutes. Whether this is your first Android or you are upgrading from an older phone, this guide walks you through every step.

Turn on your phone by holding the power button until the screen lights up. Select your language and connect to your WiFi network by selecting it and entering the password.

The phone asks if you want to copy data from another device. If you have an old Android phone, you can transfer using a cable (if included) or wirelessly. The setup wizard walks you through this. If you are coming from an iPhone, you can use the "Switch to Android" option to transfer contacts, photos, and some data.

Sign in with your Google account (the same one you use for Gmail). If you do not have one, create a free Google account during setup. Your Google account syncs your contacts, calendar, photos, and app purchases across all your devices.

Set up a screen lock for security: choose PIN, pattern, or password, and set up fingerprint unlock if your phone has a reader. Enable Google's "Find My Device" so you can locate your phone if lost.

Once at the home screen, open the Google Play Store and download your essential apps: your bank's app, WhatsApp, social media, and anything else you use. Sign in to each with your existing accounts.

Check for software updates: Settings → System → Software Update. Installing the latest update ensures you have the newest security patches and features.`,
    steps: [
      { title: 'Turn on and connect to WiFi', content: 'Hold the power button to turn on. Select your language and connect to your WiFi network.' },
      { title: 'Transfer data from old phone', content: 'Follow the setup wizard to transfer data from your old phone — wirelessly or with a cable. You can also transfer from iPhone.' },
      { title: 'Sign in with your Google account', content: 'Enter your Gmail address and password. This syncs contacts, calendar, photos, and apps.' },
      { title: 'Set up security', content: 'Choose a PIN, pattern, or password. Set up fingerprint unlock. Enable "Find My Device" in Settings → Security.' },
      { title: 'Download your apps', content: 'Open the Google Play Store and download banking, messaging, social media, and other apps you need.' },
      { title: 'Check for updates', content: 'Go to Settings → System → Software Update. Install any available updates for security and new features.' },
    ],
  },

  {
    slug: 'switch-iphone-to-android',
    title: 'How to Switch from iPhone to Android',
    excerpt: 'Move your contacts, photos, messages, and apps from iPhone to a new Android phone — without losing anything.',
    category: 'life-transitions' as any,
    tags: ['switch', 'iPhone', 'Android', 'data transfer', 'migration'],
    readTime: '8 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Switching from iPhone to Android is a bigger change than upgrading within the same platform, but modern transfer tools make it much smoother than it used to be. Here is what transfers and what you need to handle manually.

What transfers automatically: contacts, photos and videos, calendar events, and free apps that exist on both platforms. What requires manual work: paid apps (you may need to re-purchase), iMessage threads (important to deregister — see below), app-specific data (game progress, etc.), and Apple-exclusive features (FaceTime, iMessage, AirDrop).

Before switching, make sure everything is backed up. Go to iPhone Settings → your name → iCloud → iCloud Backup → Back Up Now. Also make sure your photos are backed up — download Google Photos on your iPhone and let it upload your full photo library before switching.

The most critical step: turn off iMessage before switching. If you do not do this, text messages from iPhone users will continue going to iMessage (which your Android phone cannot receive) instead of SMS. Go to Settings → Messages → toggle off iMessage. Also go to Settings → FaceTime → toggle it off.

During Android setup, use Google's "Switch to Android" tool or Samsung's "Smart Switch" app. These tools transfer contacts, photos, videos, calendar events, and more from your iPhone. Follow the on-screen instructions — the process usually takes 15-30 minutes depending on how much data you have.

After switching, download the Android versions of your apps from the Google Play Store and sign in to each one. Set up your email, bank apps, and messaging apps on the new phone.`,
    steps: [
      { title: 'Back up your iPhone', content: 'Settings → your name → iCloud → iCloud Backup → Back Up Now. Also download Google Photos on iPhone and back up all photos.' },
      { title: 'Turn off iMessage and FaceTime', content: 'This is critical. Settings → Messages → toggle off iMessage. Settings → FaceTime → toggle off. Without this step, you will miss text messages.' },
      { title: 'Use the transfer tool during setup', content: 'During Android setup, use "Switch to Android" or Samsung Smart Switch to transfer contacts, photos, calendar, and more from your iPhone.' },
      { title: 'Download your apps', content: 'Open Google Play Store and download the Android versions of your apps. Sign in to each with your existing accounts.' },
      { title: 'Verify everything transferred', content: 'Check that contacts, photos, and calendar events are on your new phone. If anything is missing, it may still be in your iCloud backup.' },
    ],
  },

  {
    slug: 'switch-android-to-iphone',
    title: 'How to Switch from Android to iPhone',
    excerpt: `Move your contacts, photos, apps, and data from Android to a new iPhone using Apple's Move to iOS tool.`,
    category: 'life-transitions' as any,
    tags: ['switch', 'Android', 'iPhone', 'data transfer', 'migration'],
    readTime: '8 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Switching from Android to iPhone is straightforward with Apple's "Move to iOS" app, which transfers your contacts, message history, photos, videos, web bookmarks, mail accounts, and calendars. Free apps that exist on both platforms are also suggested for download.

Before switching, make sure your Android phone is connected to WiFi and has enough battery (or is plugged in). Download the "Move to iOS" app from the Google Play Store on your Android phone. Do not start this process after you have already set up your iPhone — you need to do it during the initial iPhone setup.

Turn on your new iPhone and begin setup. When you reach the "Apps & Data" screen, select "Move Data from Android." Your iPhone will display a code. Open the Move to iOS app on your Android phone and enter this code. The two devices will connect and you select what to transfer.

The transfer can take anywhere from a few minutes to over an hour depending on how much data you have. Do not use either phone during the transfer. When complete, finish setting up your iPhone.

After setup, open the App Store and download the iPhone versions of your apps. Sign in to each with your existing accounts. Your contacts and photos should already be on the new iPhone.

Note: some Android-specific features do not exist on iPhone, and vice versa. You gain iMessage, FaceTime, AirDrop, and tight integration with other Apple devices. You may need to adjust to differences in how notifications, file management, and customization work.`,
    steps: [
      { title: 'Download Move to iOS on Android', content: 'On your Android phone, download the "Move to iOS" app from the Google Play Store. Make sure both phones are on WiFi and charged.' },
      { title: 'Start iPhone setup', content: 'Turn on your new iPhone and follow the setup steps. At "Apps & Data," select "Move Data from Android."' },
      { title: 'Enter the code', content: 'Your iPhone displays a code. Enter it in the Move to iOS app on your Android phone. The devices connect.' },
      { title: 'Select what to transfer', content: 'Choose contacts, messages, photos, videos, bookmarks, and other data to transfer. Wait for the process to complete.' },
      { title: 'Download your apps', content: 'After setup, open the App Store and download iPhone versions of your apps. Sign in to each with existing accounts.' },
    ],
  },

  {
    slug: 'transfer-data-new-computer',
    title: 'How to Transfer Your Data to a New Computer',
    excerpt: 'Move your files, photos, and settings from an old computer to a new one — Windows or Mac.',
    category: 'life-transitions' as any,
    tags: ['computer', 'data transfer', 'backup', 'Windows', 'Mac'],
    readTime: '8 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Getting a new computer is exciting, but you need to bring your files, photos, and documents along. Here are the most reliable ways to transfer your data.

For Windows to Windows: use an external hard drive or USB flash drive. On your old computer, copy your important folders (Documents, Pictures, Music, Desktop, and Downloads) to the external drive. Plug the drive into your new computer and copy the folders to the same locations. For a more automated approach, use Microsoft's OneDrive — sign in to OneDrive on your old computer, let it sync your files to the cloud, then sign in on your new computer and your files download automatically.

For Mac to Mac: use Apple's Migration Assistant. Connect both Macs to the same WiFi network. On the new Mac, open Migration Assistant (Applications → Utilities). On the old Mac, also open Migration Assistant. Follow the on-screen steps — it transfers your files, apps, settings, and even user accounts. You can also use Time Machine: back up your old Mac to an external drive, then during new Mac setup, choose "Restore from Time Machine Backup."

For Windows to Mac (or vice versa): use an external drive or cloud storage (Google Drive, Dropbox, or OneDrive) to move files. Copy files from your old computer to the cloud or drive, then download them on the new one. Note that Windows programs do not run on Mac and vice versa — you will need to download Mac versions of your software.

Before getting rid of your old computer: make sure everything is transferred, sign out of all accounts, and reset the computer to factory settings. Windows: Settings → System → Recovery → Reset this PC. Mac: System Settings → General → Transfer or Reset → Erase All Content and Settings.`,
    steps: [
      { title: 'Identify your important files', content: 'Check Documents, Pictures, Music, Desktop, and Downloads folders. Also note browser bookmarks and email accounts.' },
      { title: 'Choose a transfer method', content: 'External drive (fastest for large amounts), cloud storage (OneDrive, Google Drive), or built-in tools (Mac Migration Assistant).' },
      { title: 'Copy files to the transfer medium', content: 'Copy your folders to the external drive or upload to cloud storage. Verify the files are there before proceeding.' },
      { title: 'Move files to the new computer', content: 'Connect the external drive or sign in to cloud storage on your new computer. Copy files to the appropriate folders.' },
      { title: 'Download your software', content: 'Install the programs you need on the new computer. Sign in to your accounts (email, browser, banking, etc.).' },
      { title: 'Reset your old computer', content: 'After verifying everything transferred, sign out of all accounts and reset to factory settings before disposing of the old computer.' },
    ],
  },

  {
    slug: 'help-family-set-up-new-device',
    title: 'How to Help a Family Member Set Up Their New Device',
    excerpt: 'A patient, step-by-step approach to helping a parent, grandparent, or other family member with a new phone or tablet.',
    category: 'life-transitions' as any,
    tags: ['family', 'setup', 'helping others', 'seniors', 'patience'],
    readTime: '6 min',
    thumbnailEmoji: '👨‍👩‍👧‍👦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Helping a family member set up a new device is a generous act — and it goes smoother when you approach it with a plan. Whether you are helping in person or over the phone, here is a framework that works.

Before you start, gather what you need: the new device, charger, WiFi password, their Apple ID or Google account credentials (write these down and store safely), and any accounts they use (email, banking, social media).

Set up the essentials first — WiFi connection, Apple ID or Google account, screen lock, and email. Do not overwhelm them with every feature at once. Focus on the 3-5 things they will use most: phone calls, texting, email, photos, and maybe one or two apps (video calling, banking).

As you set things up, explain what you are doing and why. Instead of doing everything silently, narrate: "I am connecting you to WiFi so the phone can access the internet." After setting something up, have them practice it while you are still there.

Increase the text size: iPhone: Settings → Display & Brightness → Text Size. Android: Settings → Display → Font Size. This makes the screen much more comfortable to read.

Write down key information on paper (not in the phone): their Apple ID or Google account email and password, WiFi password, phone PIN, and instructions for the 3-5 things they will use most. Keep this paper in a safe place.

Before you leave, make sure they can: make a phone call, send and receive a text message, check their email, and take and view a photo. Schedule a follow-up check-in for a week later to answer questions that come up with daily use.`,
    steps: [
      { title: 'Gather account information', content: 'Collect WiFi password, Apple ID or Google account credentials, and login info for email and apps they use. Write these down on paper.' },
      { title: 'Set up essentials', content: 'Connect to WiFi, sign in with their account, set a screen lock, and set up email. Focus on what they will use most.' },
      { title: 'Increase text size', content: 'iPhone: Settings → Display & Brightness → Text Size. Android: Settings → Display → Font Size. Make it comfortable for them.' },
      { title: 'Have them practice while you are there', content: 'Walk them through making a call, sending a text, and opening their email. Let them do it themselves with your guidance.' },
      { title: 'Leave written instructions', content: 'Write down steps for their most common tasks on paper. Include account passwords stored in a safe place.' },
      { title: 'Schedule a follow-up', content: 'Check in after a week to answer questions. Be patient — learning new technology takes time and repetition.' },
    ],
  },

  {
    slug: 'close-online-accounts-deceased',
    title: 'How to Close Online Accounts of a Deceased Loved One',
    excerpt: 'A compassionate guide to managing the digital accounts of someone who has passed away.',
    category: 'life-transitions' as any,
    tags: ['deceased', 'accounts', 'digital estate', 'family', 'end of life'],
    readTime: '8 min',
    thumbnailEmoji: '🕊️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `When a loved one passes away, their online accounts do not close automatically. Email, social media, banking, subscriptions, and other accounts remain active — and in some cases, they continue to charge fees. Handling these accounts is an important part of settling their affairs.

Start with the most critical accounts first: financial accounts and recurring charges. Check their bank and credit card statements (online or paper) for recurring subscriptions. Cancel these to stop ongoing charges. Contact their bank to close or freeze accounts — you will typically need a death certificate and proof that you are the executor or next of kin.

For email accounts: gaining access to a deceased person's email is important because it is often the key to finding and closing their other accounts. Google (Gmail) has an "Inactive Account Manager" and a process for requesting access. Apple has a "Digital Legacy" program. In both cases, you need a death certificate and legal documentation.

For social media: Facebook allows you to "memorialize" an account (it stays visible with "Remembering" next to the name) or delete it. Go to facebook.com/help/contact/228813257197480. Instagram and Twitter/X have similar processes. Search for "[platform name] deceased account" to find the request form.

For subscriptions: check their phone for apps with active subscriptions. iPhone: sign in to their Apple ID → Settings → Subscriptions. Cancel each one. For other subscriptions (Netflix, Spotify, gym memberships), contact each company with a death certificate.

Keep a record of every account you close, including confirmation numbers and dates. This helps if there are any disputes later.

If the deceased had a password manager or left a written list of accounts and passwords, this makes the process much more manageable. Consider this as motivation to create your own digital estate plan.`,
    steps: [
      { title: 'Gather documentation', content: 'Obtain certified copies of the death certificate. Locate the will or trust to identify the executor. Gather any account information the deceased may have kept.' },
      { title: 'Address financial accounts first', content: 'Contact banks and credit card companies with the death certificate. Review statements for recurring charges and cancel subscriptions.' },
      { title: 'Request email access', content: `Contact the email provider's deceased account process. Google: Inactive Account Manager or data request. Apple: Digital Legacy program.` },
      { title: 'Handle social media', content: 'For each platform, search "[platform] deceased account" to find the request form. Choose to memorialize or delete.' },
      { title: 'Cancel phone and subscriptions', content: 'Contact the cell phone carrier. Check for app subscriptions on their phone. Cancel streaming services, gym memberships, and other recurring services.' },
      { title: 'Keep records', content: 'Document every account you close with confirmation numbers and dates. Store these with other estate documents.' },
    ],
  },

  {
    slug: 'digitize-old-photos-documents',
    title: 'How to Digitize Old Photos and Documents',
    excerpt: 'Turn printed photos, letters, and important documents into digital files using your phone or a scanner.',
    category: 'life-transitions' as any,
    tags: ['photos', 'scanning', 'documents', 'preservation', 'phone'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Printed photos fade over time, and paper documents can be lost in floods, fires, or moves. Digitizing your most important photos and documents preserves them forever and makes them available for sharing with family.

The fastest free option is Google PhotoScan (free app, iPhone and Android). It is specifically designed for scanning printed photos — it reduces glare, automatically crops, and enhances colors. Open the app, position your phone above the photo, tap the shutter button, then move your phone to capture four corner markers. The app combines these into a single, glare-free digital copy.

For documents (birth certificates, insurance policies, legal papers), use your phone's built-in scanner. iPhone: open the Notes app → create a new note → tap the camera icon → "Scan Documents." Position the document under the camera and it automatically captures and crops it. You can save as PDF. Android: open Google Drive → tap "+" → "Scan." Same process — position the document and it captures and saves it.

For large photo projects (shoe boxes full of old photos), consider a dedicated photo scanner ($50-100) or a scanning service. Companies like ScanCafe and GoPhoto send you a prepaid box — you mail your photos, they scan them at high quality, and mail them back. Prices range from 10 to 40 cents per photo.

After digitizing, back up your files. Upload to Google Photos, iCloud, or a cloud storage service. Also keep a copy on an external hard drive stored in a different location than the originals (a family member's house, a safe deposit box).

Start with the most irreplaceable photos first — the oldest ones, the ones that are fading or damaged, and photos of people who have passed away. These are the ones you cannot replace.`,
    steps: [
      { title: 'Download a scanning app', content: 'For photos: Google PhotoScan (App Store or Google Play). For documents: use iPhone Notes scanner or Google Drive scanner.' },
      { title: 'Set up good lighting', content: 'Use natural daylight or a bright, even lamp. Avoid harsh overhead lighting that creates shadows. Place photos on a flat, dark surface.' },
      { title: 'Scan your photos', content: 'Open PhotoScan, position above the photo, tap the shutter, and move your phone to capture the corner markers. The app removes glare automatically.' },
      { title: 'Scan important documents', content: 'iPhone: Notes → camera → Scan Documents. Android: Google Drive → "+" → Scan. Save important docs as PDFs.' },
      { title: 'Back up your digital files', content: 'Upload scanned files to Google Photos, iCloud, or another cloud service. Keep an extra copy on an external hard drive in a different location.' },
    ],
  },

  {
    slug: 'prepare-old-phone-selling-trading',
    title: 'How to Prepare Your Old Phone Before Selling or Trading It',
    excerpt: 'Erase your personal data and reset your old phone before selling, trading in, or giving it away.',
    category: 'life-transitions' as any,
    tags: ['phone', 'selling', 'trade-in', 'factory reset', 'privacy'],
    readTime: '6 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Before you sell, trade in, or give away your old phone, you need to erase all your personal data. Your phone contains emails, photos, bank apps, passwords, and personal information that you do not want a stranger to have. A factory reset wipes everything and returns the phone to its original state.

Step 1: Back up everything first. iPhone: Settings → your name → iCloud → iCloud Backup → Back Up Now. Android: Settings → System → Backup → Back Up Now. Make sure photos are backed up to Google Photos or iCloud before proceeding.

Step 2: Sign out of all your accounts. This is important — if you skip this step, the new owner may be locked out of the phone, or worse, have access to your accounts.

iPhone: go to Settings → your name → scroll down → "Sign Out." Enter your Apple ID password. This removes your iCloud account and turns off Find My iPhone (which must be off for the new owner to use the phone). Also sign out of iMessage: Settings → Messages → toggle off iMessage.

Android: go to Settings → Accounts → tap each account → "Remove Account." Also go to Settings → Security → Device Admin → disable "Find My Device."

Step 3: Factory reset. iPhone: Settings → General → Transfer or Reset iPhone → Erase All Content and Settings. Android: Settings → System → Reset Options → Erase All Data (Factory Reset).

Step 4: Remove your SIM card and any memory cards. Your SIM card contains your phone number and should go in your new phone. Memory cards may contain personal photos and files.

After the reset, the phone restarts as if it were brand new — ready for the next owner.`,
    steps: [
      { title: 'Back up your data', content: 'iPhone: Settings → your name → iCloud → Back Up Now. Android: Settings → System → Backup. Verify photos are backed up.' },
      { title: 'Sign out of all accounts', content: 'iPhone: Settings → your name → Sign Out (enter Apple ID password). Android: Settings → Accounts → remove each account.' },
      { title: 'Turn off Find My / Find My Device', content: 'Signing out of your account on iPhone turns off Find My iPhone. On Android: Settings → Security → disable Find My Device.' },
      { title: 'Factory reset', content: 'iPhone: Settings → General → Transfer or Reset → Erase All Content and Settings. Android: Settings → System → Reset → Erase All Data.' },
      { title: 'Remove SIM and memory cards', content: 'Use the SIM tool (or a paperclip) to pop out the SIM tray. Remove any microSD memory card. These go with you, not the phone.' },
    ],
  },

  {
    slug: 'set-up-tech-new-home-moving',
    title: 'How to Set Up Tech in a New Home (Moving Checklist)',
    excerpt: 'A moving checklist for getting your internet, WiFi, smart home devices, and streaming services working in a new home.',
    category: 'life-transitions' as any,
    tags: ['moving', 'internet', 'WiFi', 'smart home', 'setup'],
    readTime: '7 min',
    thumbnailEmoji: '🏡',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Moving to a new home means setting up your technology from scratch. Here is a checklist to make sure everything works when you arrive.

Before moving day: schedule your internet installation. Contact an internet service provider (ISP) for your new address at least 2 weeks before your move. If your current provider serves the new address, you can often transfer your service. Otherwise, research providers at your new address — use broadbandnow.com to see what is available.

If you are keeping your current router, unplug it and pack it carefully. If the ISP is providing a new one, confirm the installation appointment.

Moving day tech checklist: bring your router, modem, streaming devices (Roku, Fire Stick, Apple TV), smart speakers, security cameras, and all cables and power adapters. Label cables before unpacking so you know what goes where.

After arrival: set up internet first — everything else depends on it. Plug in your modem and router. If the ISP is installing, they will handle this. Once you have WiFi, reconnect your devices.

All your smart home devices need to be reconnected to the new WiFi network. Smart speakers, smart bulbs, smart plugs, thermostats, and cameras: open each device's app and update the WiFi connection. For some devices (like smart bulbs), you may need to reset them and set them up from scratch.

Update your WiFi-dependent settings: security camera motion zones (different house layout), smart speaker location settings (for local weather and news), and streaming device location (for local channels).

Update your address on important accounts: bank, credit cards, insurance, voter registration, USPS (set up mail forwarding at usps.com), and any subscriptions that ship to your home.`,
    steps: [
      { title: 'Schedule internet 2 weeks early', content: 'Contact an ISP to set up internet at your new address before moving day. Use broadbandnow.com to compare providers.' },
      { title: 'Pack tech carefully', content: 'Bring your router, streaming devices, smart speakers, cameras, and all cables. Label cables before packing.' },
      { title: 'Set up internet first', content: 'Plug in modem and router. Wait for the connection to activate. Everything else depends on WiFi being ready.' },
      { title: 'Reconnect smart home devices', content: `Open each device's app and update the WiFi network. Some devices may need a full reset and re-setup.` },
      { title: 'Update location-based settings', content: 'Update smart speaker location (weather/news), camera motion zones, and streaming device location (local channels).' },
      { title: 'Update your address everywhere', content: 'Bank, credit cards, insurance, voter registration, USPS mail forwarding (usps.com), and subscriptions.' },
    ],
  },

  // ═══════════════════════════════════════════
  // INTERNET & CONNECTIVITY (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'choose-right-internet-plan',
    title: 'How to Choose the Right Internet Plan for Your Home',
    excerpt: 'Understand internet speeds, plan types, and how to pick the best plan for your household without overpaying.',
    category: 'internet-connectivity' as any,
    tags: ['internet', 'ISP', 'broadband', 'WiFi', 'home internet'],
    readTime: '7 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Choosing an internet plan can be confusing with all the speed numbers, plan tiers, and promotional pricing. Here is what you actually need to know to make a good decision without overpaying.

Internet speed is measured in Mbps (megabits per second). Here is what different speeds handle: 25 Mbps is enough for 1-2 people doing basic browsing and email. 50-100 Mbps handles a household of 2-4 people streaming video, browsing, and video calling. 200-300 Mbps supports a larger household with multiple people streaming 4K video simultaneously. 500+ Mbps is typically more than most households need unless you have many devices running simultaneously.

Types of internet connections: cable (widely available, speeds from 25-1,000 Mbps), fiber optic (fastest and most reliable, up to 5,000 Mbps, but not available everywhere), DSL (uses phone lines, slower, 5-100 Mbps), fixed wireless (rural areas, improving rapidly), and satellite (available anywhere, higher latency — noticeable delay).

To find providers at your address, go to broadbandnow.com or the FCC's broadband map at broadbandmap.fcc.gov. Enter your address to see which providers serve your area and what speeds they offer.

Watch out for: promotional pricing that expires after 12 months (ask what the regular price is), data caps (limits on how much data you can use per month — some providers charge overage fees), equipment rental fees ($10-15/month for a router — consider buying your own), and bundling pressure (you may not need TV and phone bundled with internet).

Before signing up, ask: "What is the price after the promotional period?" "Is there a data cap, and how much?" "Can I use my own router instead of renting yours?" "Is there a contract, and what is the early termination fee?"`,
    steps: [
      { title: 'Determine your speed needs', content: '1-2 people basic use: 25 Mbps. 2-4 people with streaming: 50-100 Mbps. Large household or 4K streaming: 200-300 Mbps.' },
      { title: 'Find providers at your address', content: 'Go to broadbandnow.com or broadbandmap.fcc.gov. Enter your address to see available providers and speeds.' },
      { title: 'Compare plans and pricing', content: 'Look at the regular price (not promotional), data caps, equipment fees, and contract terms for each provider.' },
      { title: 'Ask the right questions', content: 'Price after promo period? Data cap? Can I use my own router? Contract length and early termination fee?' },
      { title: 'Choose fiber if available', content: 'Fiber optic is the fastest, most reliable, and often most competitively priced option. Choose it if available at your address.' },
    ],
  },

  {
    slug: 'understand-internet-bill',
    title: 'How to Understand Your Internet Bill',
    excerpt: 'Decode your internet bill — what each charge means, how to spot fees you can remove, and how to lower your bill.',
    category: 'internet-connectivity' as any,
    tags: ['internet', 'billing', 'ISP', 'fees', 'saving money'],
    readTime: '5 min',
    thumbnailEmoji: '📑',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Internet bills can be confusing with multiple line items, fees, and charges that are not clearly explained. Understanding each part helps you spot unnecessary charges and potentially lower your bill.

Common line items: the base internet service fee (what you signed up for), equipment rental (modem and/or router — typically $10-15/month each), WiFi charges (some providers charge extra for WiFi on top of internet), data overage fees (if you exceed your monthly data cap), taxes and regulatory fees, and installation or setup fees (one-time charges).

Charges you may be able to remove: equipment rental fees — if you are paying $10-15/month to rent a modem or router, buying your own can save $120-180/year. Check your provider's list of compatible modems. WiFi service fees — some providers charge a separate fee for WiFi. Using your own router eliminates this. Service protection plans — these are basically insurance on the provider's equipment and often not worth the cost.

If your promotional rate has expired and your bill increased significantly, call your provider and ask for a retention discount. Say that you are considering switching to another provider and ask what deals they can offer. Many providers will extend promotional pricing or offer a discount to keep you as a customer.

Check your bill each month for changes. Providers sometimes add services or change pricing without clear notification. If you see a new charge, call and ask what it is and whether it can be removed.`,
    steps: [
      { title: 'Review each line item', content: 'Look at your bill and identify each charge: base service, equipment rental, taxes, fees, and any extras.' },
      { title: 'Check for equipment rental', content: 'If you are renting a modem or router ($10-15/month), consider buying your own compatible model to save $120+/year.' },
      { title: 'Look for unnecessary add-ons', content: 'WiFi service fees, protection plans, and premium support charges can often be removed. Call and ask.' },
      { title: 'Check if your promo expired', content: 'If your bill jumped recently, your promotional rate may have ended. Call and ask for a retention discount.' },
      { title: 'Monitor monthly for changes', content: 'Check your bill each month for new or increased charges. Call immediately if something unexpected appears.' },
    ],
  },

  {
    slug: 'set-up-new-wifi-router',
    title: 'How to Set Up a New WiFi Router',
    excerpt: 'Install and configure a new WiFi router for your home — connect to your modem, set a password, and get online.',
    category: 'internet-connectivity' as any,
    tags: ['WiFi', 'router', 'internet', 'setup', 'networking'],
    readTime: '7 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `A WiFi router takes the internet connection from your modem (the device from your internet provider) and broadcasts it wirelessly throughout your home. Setting up a new router takes about 15-20 minutes.

Unplug your old router (if you have one). Plug an Ethernet cable from your modem into the router's WAN or Internet port (usually a different color from the other ports). Plug the router into a power outlet and turn it on. Wait 2-3 minutes for it to start up fully.

Most modern routers have a setup app. Check the router's packaging or quick-start guide for the app name (TP-Link Tether, Netgear Nighthawk, ASUS Router, Linksys, etc.). Download the app and follow the setup wizard.

During setup, you will create a WiFi network name (SSID) and password. Choose a name you will recognize (like "SmithFamily-WiFi") and a strong password that is at least 12 characters with a mix of letters, numbers, and symbols. Write these down and keep them somewhere safe — you will need the password to connect every device.

Place your router in a central location in your home, elevated if possible (on a shelf, not on the floor). Avoid placing it near thick walls, metal objects, mirrors, or microwaves, which can interfere with the signal. The more central the location, the more even the coverage throughout your home.

After setup, connect your devices: on each phone, computer, tablet, and smart TV, go to WiFi settings, select your new network name, and enter the password.`,
    steps: [
      { title: 'Connect the router to your modem', content: `Plug an Ethernet cable from your modem into the router's WAN or Internet port. Plug in the power and wait 2-3 minutes.` },
      { title: `Download the router's app`, content: 'Check the packaging for the app name. Download it from the App Store or Google Play Store and follow the setup wizard.' },
      { title: 'Create your WiFi name and password', content: 'Choose a recognizable network name and a strong password (12+ characters). Write them down and store safely.' },
      { title: 'Place the router centrally', content: 'Put the router in a central, elevated location. Avoid placing near thick walls, metal objects, or microwaves.' },
      { title: 'Connect your devices', content: 'On each device, go to WiFi settings, select your new network, and enter the password.' },
    ],
  },

  {
    slug: 'extend-wifi-mesh-system',
    title: 'How to Extend Your WiFi with a Mesh System',
    excerpt: 'Eliminate WiFi dead zones by setting up a mesh WiFi system that blankets your entire home in strong signal.',
    category: 'internet-connectivity' as any,
    tags: ['WiFi', 'mesh', 'extender', 'coverage', 'networking'],
    readTime: '6 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If your WiFi works well near the router but is weak or non-existent in other rooms, a mesh WiFi system can solve the problem. A mesh system uses multiple units placed around your home that work together to create one unified WiFi network with consistent coverage everywhere.

Popular mesh systems include Google Nest WiFi, Amazon Eero, TP-Link Deco, Netgear Orbi, and Linksys Velop. Most come with 2 or 3 units and cost $150-300. For larger homes, you can add more units.

The main difference between a mesh system and a WiFi extender: extenders create a separate network with a different name (like "Home-WiFi-EXT") and often reduce speed. Mesh systems create one unified network — your devices automatically connect to the nearest unit without you doing anything.

Setup: connect the first mesh unit to your modem with an Ethernet cable (this replaces your existing router). Download the manufacturer's app and follow the setup wizard. Place additional units in rooms where you need better coverage — ideally halfway between the main unit and the dead zone.

The app guides you through optimal placement, tests the connection between units, and lets you manage your network settings. Most mesh systems also include parental controls, guest network options, and device prioritization.

For a 2-bedroom apartment, two units are usually sufficient. For a 3-4 bedroom house, three units cover most layouts. For larger or multi-story homes, consider adding a fourth unit.`,
    steps: [
      { title: 'Choose a mesh system', content: 'Google Nest WiFi, Eero, TP-Link Deco, Orbi, or Velop. Get 2-3 units depending on your home size ($150-300).' },
      { title: 'Connect the main unit', content: 'Plug an Ethernet cable from your modem into the first mesh unit. This replaces your existing router.' },
      { title: 'Download the app and set up', content: `Get the manufacturer's app, create an account, and follow the setup wizard. Set your WiFi name and password.` },
      { title: 'Place additional units', content: 'Put extra units halfway between the main unit and areas with poor signal. The app tests connection strength and suggests placement.' },
      { title: 'Connect all devices to the single network', content: 'All mesh units broadcast the same network. Connect each device once — it automatically switches to the nearest unit.' },
    ],
  },

  {
    slug: 'use-phone-wifi-hotspot',
    title: 'How to Use Your Phone as a WiFi Hotspot',
    excerpt: 'Turn your phone into a portable WiFi hotspot to connect your laptop or tablet when there is no WiFi available.',
    category: 'internet-connectivity' as any,
    tags: ['hotspot', 'tethering', 'WiFi', 'mobile data', 'connectivity'],
    readTime: '5 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your phone can act as a portable WiFi hotspot, sharing its cellular data connection with your laptop, tablet, or other devices. This is useful when you are somewhere without WiFi — a hotel without internet, a waiting room, or while traveling.

On iPhone: go to Settings → Personal Hotspot → toggle on "Allow Others to Join." Note the WiFi password shown on the screen. On your laptop or tablet, look for your iPhone's name in the WiFi network list and connect using that password.

On Android: go to Settings → Network & Internet (or Connections) → Hotspot & Tethering → WiFi Hotspot → turn it on. Note the network name and password. Connect your other device to this network.

Important: hotspot uses your cellular data. If you have a limited data plan, streaming video, downloading files, or extended use can consume your data allowance quickly. Check your plan's hotspot data allowance — some carriers include it for free, others charge extra, and some throttle speeds after a certain amount.

Tips for conserving data while using hotspot: avoid streaming video (it uses the most data), turn off automatic app updates and cloud backups on connected devices, and close unnecessary browser tabs and apps.

If you use hotspot frequently, consider an unlimited data plan that includes hotspot, or a separate mobile hotspot device (available from all major carriers). These devices often provide better speeds and battery life than using your phone.`,
    steps: [
      { title: 'Turn on Personal Hotspot', content: 'iPhone: Settings → Personal Hotspot → Allow Others to Join. Android: Settings → Network → Hotspot & Tethering → WiFi Hotspot → on.' },
      { title: 'Note the password', content: 'Your phone displays the hotspot password. You will enter this on the device you want to connect.' },
      { title: 'Connect your other device', content: `On your laptop or tablet, go to WiFi settings, find your phone's network name, and enter the password.` },
      { title: 'Monitor data usage', content: 'Check your cellular data usage in Settings. Avoid video streaming and large downloads to conserve data.' },
      { title: 'Turn off hotspot when done', content: 'Disable the hotspot when you are finished to save battery and prevent unauthorized connections.' },
    ],
  },

  {
    slug: 'check-data-usage',
    title: 'How to Check How Much Data You Are Using',
    excerpt: 'Monitor your mobile data and WiFi usage to avoid overage charges and understand which apps use the most.',
    category: 'internet-connectivity' as any,
    tags: ['data usage', 'mobile data', 'data plan', 'phone', 'monitoring'],
    readTime: '5 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Understanding your data usage helps you avoid overage charges and choose the right plan. Most people use more data than they think — especially from video streaming, social media, and automatic app updates.

On iPhone: go to Settings → Cellular (or Mobile Data). You see your total data used and a breakdown by app. Scroll down to see which apps use the most data. You can toggle off cellular data for specific apps that use too much.

On Android: go to Settings → Network & Internet → Data Usage (or Settings → Connections → Data Usage). You see total usage and a per-app breakdown. Set a data warning or limit: Settings → Data Usage → "Set data warning" or "Set data limit."

What uses the most data: streaming video (Netflix, YouTube, TikTok — 1-3 GB per hour), video calls (Zoom, FaceTime — 1-2 GB per hour), social media (Instagram, Facebook — 100-500 MB per hour of scrolling), music streaming (50-150 MB per hour), and automatic updates and backups.

To reduce data usage: connect to WiFi whenever possible (home, work, coffee shops), set apps to download updates only over WiFi (Settings → App Store → turn off "App Downloads" under cellular), download content for offline viewing before leaving WiFi, and reduce video quality on streaming apps when using cellular data.

Check your carrier's app or website to see your current billing cycle usage and how much of your plan you have used. Most carriers (AT&T, Verizon, T-Mobile) show this in their app.`,
    steps: [
      { title: 'Check usage on your phone', content: 'iPhone: Settings → Cellular. Android: Settings → Data Usage. See total usage and per-app breakdown.' },
      { title: 'Identify your biggest data users', content: 'Look at which apps use the most data. Video streaming and social media are usually the top consumers.' },
      { title: 'Set a data warning', content: `Android: Settings → Data Usage → set a warning at 80% of your plan limit. iPhone: check your carrier's app for usage alerts.` },
      { title: 'Connect to WiFi when available', content: 'Use WiFi at home, work, and public places. WiFi does not count against your mobile data plan.' },
      { title: 'Restrict background data', content: 'Set apps to update and back up only on WiFi. iPhone: Settings → App Store → turn off cellular downloads. Android: similar in app settings.' },
    ],
  },

  {
    slug: 'stay-safe-public-wifi',
    title: 'How to Stay Safe on Public WiFi',
    excerpt: 'Protect your personal information when using WiFi at coffee shops, airports, hotels, and other public places.',
    category: 'internet-connectivity' as any,
    tags: ['public WiFi', 'security', 'privacy', 'VPN', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Public WiFi at coffee shops, airports, hotels, and libraries is convenient but comes with security risks. Unlike your home WiFi, public networks are shared with strangers — and on poorly secured networks, someone nearby could potentially see your internet activity.

Rules for safe public WiFi use: never do online banking or enter credit card numbers on public WiFi. Avoid logging in to sensitive accounts (banking, email, financial accounts). If you must, use your phone's cellular data instead of the public WiFi. Make sure websites use HTTPS (look for the padlock icon in the address bar) before entering any information.

Use a VPN (Virtual Private Network) for the best protection. A VPN encrypts all your internet traffic so no one on the network can see what you are doing. Reputable VPN services include ExpressVPN, NordVPN, and Surfshark ($3-13/month). Download the VPN app, sign in, and tap "Connect" before using public WiFi.

Beware of fake WiFi networks. Scammers set up networks with names like "Free Airport WiFi" or "Coffee Shop Guest" to trick you into connecting. Always confirm the exact network name with the business. If a coffee shop's WiFi is "CafeDowntown" and you also see "CafeDowntown-Free," the second one could be a scammer.

Additional precautions: turn off automatic WiFi connections (so your phone does not connect to unknown networks automatically), turn off file sharing and AirDrop in public, and forget the public network when you are done (Settings → WiFi → tap the network → "Forget This Network").`,
    steps: [
      { title: 'Avoid sensitive activities', content: 'Do not do banking, enter credit card numbers, or log in to financial accounts on public WiFi. Use cellular data for these tasks.' },
      { title: 'Verify the network name', content: 'Ask the business for the exact WiFi network name. Do not connect to similarly named networks that could be scams.' },
      { title: 'Use a VPN', content: 'Subscribe to a VPN service (ExpressVPN, NordVPN, Surfshark). Connect the VPN before using public WiFi.' },
      { title: 'Check for HTTPS', content: 'Only enter information on websites with a padlock icon in the address bar (HTTPS). Avoid HTTP sites on public WiFi.' },
      { title: 'Forget the network when done', content: 'Go to WiFi settings and tap "Forget This Network" after leaving. Turn off auto-connect to prevent reconnecting.' },
    ],
  },

  {
    slug: 'get-better-wifi-signal',
    title: 'How to Get Better WiFi Signal in Every Room',
    excerpt: 'Improve your WiFi coverage and speed with router placement tips, extenders, and settings adjustments.',
    category: 'internet-connectivity' as any,
    tags: ['WiFi', 'signal', 'coverage', 'router', 'tips'],
    readTime: '5 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Weak WiFi in certain rooms is one of the most common tech frustrations. Before spending money on new equipment, try these free fixes that often make a significant difference.

Move your router to a central location. If your router is in a corner of the house, one side gets great coverage and the other gets almost nothing. Move it to the middle of your home if possible. Place it on a shelf or table — not on the floor. WiFi signals travel outward and downward, so elevation helps.

Remove obstructions. WiFi signals are weakened by thick walls (especially concrete and brick), metal objects, mirrors, aquariums, and microwaves. Move your router away from these obstacles. Even moving it a few feet can make a difference.

Reduce interference. Other electronic devices can interfere with WiFi: baby monitors, cordless phones, and Bluetooth devices. If your router is 2.4GHz, try switching to 5GHz (faster but shorter range) or vice versa. Most modern routers broadcast both — they usually have separate names or one combined network.

Update your router's firmware. Log in to your router's admin page (usually 192.168.1.1 or 192.168.0.1 — check the router's label) and check for firmware updates. Updates can improve performance and fix bugs.

If these steps are not enough, consider: a WiFi extender ($20-40, adds coverage to one area), a mesh WiFi system ($150-300, blankets your entire home), or upgrading your router (if it is more than 5 years old, a new router can dramatically improve speeds and coverage).`,
    steps: [
      { title: 'Move your router centrally', content: 'Place the router in the middle of your home, elevated on a shelf. Avoid corners, closets, and the floor.' },
      { title: 'Remove obstructions', content: 'Move the router away from thick walls, metal objects, mirrors, and microwaves. Even a few feet can help.' },
      { title: 'Try different frequencies', content: 'If your router broadcasts both 2.4GHz and 5GHz, connect to the other one. 5GHz is faster but shorter range; 2.4GHz reaches farther.' },
      { title: 'Update router firmware', content: `Log in to your router's admin page and check for updates. Updated firmware improves performance.` },
      { title: 'Consider a mesh system or extender', content: 'For persistent dead zones, a mesh system ($150-300) provides the most comprehensive solution.' },
    ],
  },

  {
    slug: 'set-up-parental-controls-router',
    title: 'How to Set Up Parental Controls on Your Router',
    excerpt: 'Manage internet access for your household — set time limits, filter content, and monitor activity from your router.',
    category: 'internet-connectivity' as any,
    tags: ['parental controls', 'router', 'internet safety', 'kids', 'networking'],
    readTime: '6 min',
    thumbnailEmoji: '👨‍👧',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Parental controls on your router let you manage internet access for your entire household — set bedtime schedules, filter inappropriate content, pause internet for specific devices, and see which websites are being visited. Because these controls are on the router, they apply to every device connected to your WiFi.

Most modern routers include basic parental controls. Log in to your router's admin page or app. The address is usually printed on the router's label (like 192.168.1.1 or 192.168.0.1). Enter the admin username and password (also on the label, unless you changed them).

Look for "Parental Controls," "Access Control," or "Content Filtering" in the settings. Common features include: content filtering (blocks adult content and malicious websites), schedule controls (set times when specific devices can and cannot access the internet — great for bedtime), device pausing (instantly pause internet access for a specific device), and usage monitoring (see how much time devices spend online).

If your router's built-in controls are limited, consider these options: many mesh WiFi systems (Google Nest WiFi, Eero, TP-Link Deco) include robust parental controls in their apps — much easier to use than traditional router settings. Third-party services like OpenDNS Family Shield (free) or Circle ($10/month device) offer more advanced filtering and monitoring.

Set reasonable expectations. Parental controls are a tool, not a complete solution. They work best as part of ongoing conversations about internet safety. Older children may find ways around filters, so open communication is important.`,
    steps: [
      { title: 'Access your router settings', content: `Open a browser and go to your router's admin address (check the label on the router). Sign in with the admin username and password.` },
      { title: 'Find Parental Controls', content: 'Look for "Parental Controls," "Access Control," or "Content Filtering" in the router settings menu.' },
      { title: 'Set up content filtering', content: 'Enable filters to block adult content and known malicious websites. Most routers offer preset filter levels.' },
      { title: 'Create internet schedules', content: 'Set times when specific devices can access the internet. Create a "bedtime" schedule that cuts off access at a set hour.' },
      { title: 'Use your router app for easier control', content: 'If you have a mesh system, use its app for more user-friendly parental controls including device pausing and time limits.' },
    ],
  },

  {
    slug: 'test-improve-internet-speed',
    title: 'How to Test and Improve Your Internet Speed',
    excerpt: 'Run a speed test to see if you are getting the speed you pay for, and learn fixes for slow internet.',
    category: 'internet-connectivity' as any,
    tags: ['speed test', 'internet speed', 'WiFi', 'performance', 'troubleshooting'],
    readTime: '5 min',
    thumbnailEmoji: '⚡',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `If your internet feels slow, the first step is measuring your actual speed to see if you are getting what you pay for. Speed tests take less than a minute and tell you exactly how fast your connection is.

Go to speedtest.net or fast.com on your phone or computer. Tap "Go" or wait for the test to run automatically. It measures your download speed (how fast you receive data — important for streaming and browsing), upload speed (how fast you send data — important for video calls and uploading photos), and ping (response time — important for video calls and online games).

Compare your results to what you pay for. Check your internet plan for the advertised speed. If you are paying for 200 Mbps but only getting 50 Mbps, something is wrong.

Common fixes for slow internet: restart your router (unplug it, wait 30 seconds, plug it back in — this fixes many issues), connect via Ethernet cable instead of WiFi for the fastest speed, close unused apps and browser tabs (they use bandwidth in the background), move closer to your router, and check if other devices on your network are using heavy bandwidth (someone streaming 4K video or downloading large files).

If speeds are consistently well below what you pay for, call your internet provider. They can run diagnostics from their end and may need to send a technician. If you are renting their modem/router, ask if it is outdated and needs replacement.

Run speed tests at different times of day. Internet speeds often slow down during peak hours (evenings) when everyone in your neighborhood is online. If peak speeds are significantly lower, your provider's network may be congested in your area.`,
    steps: [
      { title: 'Run a speed test', content: 'Go to speedtest.net or fast.com on your phone or computer. Wait for the test to complete (less than a minute).' },
      { title: 'Compare to your plan', content: 'Check what speed your internet plan includes. If you are getting significantly less, troubleshooting is needed.' },
      { title: 'Restart your router', content: 'Unplug your router, wait 30 seconds, plug it back in. Wait 2-3 minutes for it to restart fully. This fixes many speed issues.' },
      { title: 'Reduce network load', content: 'Close unused apps and browser tabs. Check if other devices are streaming or downloading. These compete for bandwidth.' },
      { title: 'Contact your provider if needed', content: 'If speeds remain low after troubleshooting, call your ISP. They can run diagnostics and may need to replace equipment or fix a line issue.' },
    ],
  },

  // ═══════════════════════════════════════════
  // ADDITIONAL GUIDES (3 more to reach 101+)
  // ═══════════════════════════════════════════

  {
    slug: 'use-turbotax-free-edition',
    title: 'How to Use TurboTax Free Edition',
    excerpt: 'File your taxes for free with TurboTax Free Edition — who qualifies and how to avoid being upsold to a paid version.',
    category: 'financial-tech' as any,
    tags: ['TurboTax', 'taxes', 'free filing', 'tax return', 'finances'],
    readTime: '6 min',
    thumbnailEmoji: '🧾',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `TurboTax is the most popular tax preparation software in the United States. While many products cost money, TurboTax does offer a free edition for taxpayers with straightforward returns. However, knowing exactly who qualifies and how to stay on the free version requires some awareness.

TurboTax Free Edition covers: W-2 income, limited interest and dividend income (1099-INT, 1099-DIV), the Earned Income Tax Credit, the Child Tax Credit, and student loan interest deduction. It does NOT cover: itemized deductions, freelance or 1099-NEC income, rental property income, stock sales, or HSA contributions. If you have any of these, TurboTax will prompt you to upgrade.

Go to turbotax.com and click "Start for Free." Create an account or sign in. TurboTax walks you through your return with interview-style questions about income, deductions, and credits. Answer each question and TurboTax fills in the correct forms.

Be alert for upselling throughout the process. TurboTax may suggest upgrading to a paid version. If your situation is covered by the free edition, you can decline. Look for "Continue with Free" or "No thanks" options.

After completing your return, review every number. Choose direct deposit for the fastest refund (about 21 days), then e-file. If your income is below $84,000 and you want to ensure a truly free experience, consider using IRS Free File (irs.gov/freefile) instead, which guarantees no upselling.`,
    steps: [
      { title: 'Go to turbotax.com', content: 'Click "Start for Free" and create an account. The free edition covers W-2 income and basic returns.' },
      { title: 'Gather your documents', content: 'Have your W-2, any 1099 forms, Social Security number, and bank routing and account numbers ready.' },
      { title: 'Answer the interview questions', content: 'TurboTax asks about income, deductions, and credits step by step. The software handles forms and calculations.' },
      { title: 'Watch for upgrade prompts', content: 'TurboTax may suggest paid upgrades. Look for "Continue with Free" options if your return is covered by the free edition.' },
      { title: 'Review and e-file', content: 'Check every number before submitting. Choose direct deposit for the fastest refund. Save your confirmation.' },
    ],
  },

  {
    slug: 'set-up-spotify-smart-speaker',
    title: 'How to Set Up Spotify on a Smart Speaker',
    excerpt: 'Link Spotify to your Echo or Google Home so you can play music, playlists, and podcasts with voice commands.',
    category: 'entertainment' as any,
    tags: ['Spotify', 'smart speaker', 'Alexa', 'Google Home', 'music'],
    readTime: '5 min',
    thumbnailEmoji: '🎵',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Connecting Spotify to your smart speaker lets you play any song, album, playlist, or podcast using voice commands. This works with both Amazon Echo and Google Home speakers, and you can set Spotify as your default music service.

For Amazon Echo: open the Alexa app → More → Settings → Music & Podcasts → Link New Service → Spotify. Sign in with your Spotify account. Then tap "Default Services" and set Spotify as the default. Now "Alexa, play jazz" automatically uses Spotify.

For Google Home: open the Google Home app → profile icon → Assistant Settings → Music → tap Spotify and link your account. Set Spotify as default. Now "Hey Google, play my Discover Weekly" plays from Spotify.

Once linked, try: "Play my Liked Songs." "Play the Daily Mix." "Play [artist name]." "Play [playlist name]." "What song is this?" You can also use Spotify Connect — open Spotify on your phone, start playing, tap "Devices Available," and select your speaker for full app-controlled playback.

Both free and premium Spotify accounts work. Free accounts have ads between songs; Premium has no ads and higher quality audio.`,
    steps: [
      { title: `Open your speaker's app`, content: 'Echo: open Alexa app. Google Home: open Google Home app.' },
      { title: 'Link Spotify', content: 'Alexa: More → Settings → Music → Link New Service → Spotify. Google: profile → Assistant Settings → Music → Spotify.' },
      { title: 'Set as default music service', content: 'In music settings, set Spotify as default so every request uses Spotify automatically.' },
      { title: 'Test with voice commands', content: 'Say "Alexa, play my Liked Songs" or "Hey Google, play jazz music."' },
      { title: 'Use Spotify Connect', content: 'Open Spotify on your phone, tap "Devices Available," and select your speaker for full app control.' },
    ],
  },

  {
    slug: 'make-video-calls-smart-display',
    title: 'How to Make Video Calls on a Smart Display (Nest Hub, Echo Show)',
    excerpt: 'Use your Google Nest Hub Max or Amazon Echo Show to make hands-free video calls to family and friends.',
    category: 'communication' as any,
    tags: ['video call', 'Nest Hub', 'Echo Show', 'smart display', 'hands-free'],
    readTime: '5 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Smart displays like the Google Nest Hub Max and Amazon Echo Show have built-in cameras and screens for hands-free video calling. They are especially useful in the kitchen or living room, and for family members who find phones difficult.

Google Nest Hub Max uses Google Meet for calls. Open the Google Home app → tap your Nest Hub Max → set up calling. You can call anyone with Google Meet or Google Contacts. Say "Hey Google, call Mom" or "Hey Google, call [phone number]." The camera and screen activate automatically.

Amazon Echo Show uses Alexa calling. Open the Alexa app → Communication → sync your contacts. Say "Alexa, call Grandma" (she needs an Echo or Alexa app). For video calls, both parties need a device with a camera. You can also make regular phone calls to any U.S. phone number.

Both devices support "Drop In" — authorized family members can connect instantly like an intercom. The display chimes before connecting. This is popular for checking in on elderly family members. Both parties must agree to enable this feature.

For privacy, both devices have a physical camera cover or switch. Slide it closed or press the button to physically disable the camera when you want privacy.`,
    steps: [
      { title: 'Set up calling', content: 'Nest Hub Max: Google Home app → tap device → set up calling. Echo Show: Alexa app → Communication → sync contacts.' },
      { title: 'Make a call by voice', content: '"Hey Google, call [name]" or "Alexa, call [name]." Video starts automatically on the display.' },
      { title: 'Receive calls', content: 'When someone calls, the display rings. Say "Hey Google, answer" or "Alexa, answer" for hands-free pickup.' },
      { title: 'Set up Drop In', content: 'Enable Drop In so family can check in instantly. Both parties must agree. Great for elderly family members.' },
      { title: 'Use the camera privacy cover', content: 'Slide the camera cover closed when you want privacy. A light confirms the camera is off.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE GOVERNMENT & CIVIC (5 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'find-property-tax-information-online',
    title: 'How to Find Your Property Tax Information Online',
    excerpt: 'Look up your property tax bill, assessed value, and payment history using your county assessor or treasurer website.',
    category: 'government-civic' as any,
    tags: ['property tax', 'real estate', 'county', 'government', 'homeowner'],
    readTime: '5 min',
    thumbnailEmoji: '🏠',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `If you own a home, you pay property taxes — and all that information is available online through your county government website. You can look up your current tax bill, see your property's assessed value, check payment due dates, view your payment history, and in many counties, pay your taxes online.

Property taxes are handled at the county level, so the website you need depends on where your home is located. The two offices that handle property taxes are the County Assessor (who determines your property's value) and the County Treasurer or Tax Collector (who sends you the bill and collects payments).

To find your property tax information, search online for "[your county name] property tax lookup" or "[your county name] assessor." Most county websites have a property search tool where you can look up your parcel by address, owner name, or parcel number (also called an APN or PIN — this number is on your previous tax bill).

Once you find your property, you can see the assessed value (what the county says your property is worth for tax purposes), the tax rate, and the amount you owe. Many counties break down the tax into categories: school district, city, county, special districts, and so on.

If your property taxes seem too high, the assessed value is where to look first. If you believe your home is assessed for more than its actual market value, you can file an appeal with your county assessor's office. Most counties have a deadline for appeals, usually within 30 to 90 days of receiving your assessment notice.

You can also check whether you qualify for any property tax exemptions. Many states offer homestead exemptions, senior citizen exemptions, veteran exemptions, or disability exemptions that can reduce your tax bill. These are usually listed on your county assessor's website.`,
    steps: [
      { title: 'Search for your county tax website', content: 'Open your browser and search for "[your county name] property tax" or "[your county name] assessor." Click the official county government result (usually ending in .gov or .us).' },
      { title: 'Use the property search tool', content: 'Look for "Property Search" or "Parcel Lookup." Enter your home address, owner name, or parcel number. Your parcel number is on previous tax bills.' },
      { title: 'Review your assessed value', content: 'The assessed value is what the county says your property is worth for tax purposes. Compare this to recent home sales in your area to check if it seems accurate.' },
      { title: 'Check your tax bill and due dates', content: 'View your current tax bill, which is usually split into two installments. Note the due dates — late payments incur penalties in most counties.' },
      { title: 'Look into exemptions', content: 'Check your county assessor website for property tax exemptions you may qualify for: homestead, senior, veteran, or disability exemptions can reduce your bill.' },
      { title: 'Pay online if available', content: 'Many counties let you pay property taxes online by credit card, debit card, or electronic check. Look for "Pay Taxes" or "Online Payments" on the treasurer website.' },
    ],
  },

  {
    slug: 'use-ssa-retirement-estimator',
    title: 'How to Use the SSA Retirement Estimator',
    excerpt: 'Use the Social Security Administration retirement estimator to see how much you could receive at different retirement ages.',
    category: 'government-civic' as any,
    tags: ['social security', 'retirement', 'benefits', 'estimator', 'planning'],
    readTime: '6 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `The Social Security Administration offers a free retirement estimator tool that shows you approximately how much you will receive in monthly Social Security benefits based on your actual earnings record. This is one of the most useful planning tools available, and it takes less than five minutes to use.

The estimator uses your real work history — every job where Social Security taxes were withheld — to calculate your benefit amount. It shows you estimates at three key ages: 62 (the earliest you can start collecting), your full retirement age (66 or 67, depending on when you were born), and 70 (when your benefit maxes out).

The difference between starting at 62 versus 70 can be significant. Your monthly benefit at 70 can be 70 to 80 percent higher than at 62. The estimator helps you see these numbers clearly so you can plan.

To use the estimator, go to ssa.gov and look for "Estimate My Benefits" or "Retirement Estimator." You can use the quick estimator without logging in — you enter your date of birth, this year's earnings, and the age you plan to stop working. For a more detailed estimate based on your actual earnings history, sign in to your my Social Security account.

Once signed in, the estimator pulls your complete earnings record and gives you personalized estimates. You can adjust the numbers by changing your expected future earnings or your planned retirement age to see how different scenarios affect your monthly payment.

Keep in mind that these are estimates, not guarantees. Your actual benefit will depend on your earnings between now and when you retire. But the estimator gives you a solid ballpark figure for planning your retirement budget.

If you have not created a my Social Security account yet, the estimator is a great reason to set one up. You can also view your full earnings history to make sure all your past jobs and wages are recorded correctly — errors happen, and fixing them now ensures you get the full benefit you have earned.`,
    steps: [
      { title: 'Go to ssa.gov', content: 'Open your browser and go to ssa.gov. Look for "Estimate My Benefits" or "Retirement Estimator" on the homepage.' },
      { title: 'Choose quick or detailed estimate', content: 'The quick estimator does not require logging in — enter your date of birth, current earnings, and planned retirement age. For a detailed estimate, sign in to your my Social Security account.' },
      { title: 'Sign in to my Social Security (recommended)', content: 'Log in with your Login.gov credentials. The estimator will pull your actual earnings history for a more accurate calculation.' },
      { title: 'Review estimates at different ages', content: 'The tool shows your estimated monthly benefit at age 62, your full retirement age (66 or 67), and age 70. Compare the amounts to see the impact of waiting.' },
      { title: 'Adjust your assumptions', content: 'Change your expected future earnings or retirement age to model different scenarios. See how working an extra year or two affects your monthly payment.' },
      { title: 'Check your earnings record', content: 'While logged in, review your earnings history to make sure every job is listed and wages are correct. Report any errors to the SSA to protect your benefit amount.' },
    ],
  },

  {
    slug: 'report-identity-theft-ftc',
    title: 'How to Report Identity Theft to the FTC',
    excerpt: 'Report identity theft at IdentityTheft.gov to create a recovery plan, dispute fraudulent accounts, and protect your credit.',
    category: 'government-civic' as any,
    tags: ['identity theft', 'FTC', 'fraud', 'credit', 'security'],
    readTime: '7 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If someone has used your personal information to open accounts, make purchases, or file taxes in your name, you are a victim of identity theft. The Federal Trade Commission (FTC) runs IdentityTheft.gov — the federal government's one-stop resource for reporting identity theft and creating a personalized recovery plan.

Reporting to the FTC is important for several reasons. First, it creates an official Identity Theft Report that you can use to dispute fraudulent accounts and charges. Second, the FTC generates a step-by-step recovery plan tailored to your specific situation. Third, the report helps law enforcement track identity theft patterns and catch criminals.

Before you start, write down everything you know about the theft: which accounts were affected, when you noticed the problem, any fraudulent charges or accounts you have found, and how you think the thief got your information. You will also need your Social Security number, driver's license number, and contact information.

Go to IdentityTheft.gov and click "Get Started." The site walks you through a series of questions about what happened — did someone open new accounts in your name, use your existing accounts, file taxes using your information, or something else? Based on your answers, the FTC builds a custom recovery plan.

Your recovery plan includes specific letters to send to companies, instructions for placing fraud alerts or credit freezes with the three credit bureaus (Equifax, Experian, and TransUnion), steps to dispute fraudulent charges, and a timeline to follow. You can also print your Identity Theft Report to share with creditors and law enforcement.

The FTC also recommends filing a report with your local police department. While police may not investigate individual cases, having a police report on file adds another layer of documentation that creditors may require.

After filing your FTC report, the site tracks your progress and sends you reminders about next steps. You can log back in anytime to update your case or access your recovery plan.`,
    steps: [
      { title: 'Go to IdentityTheft.gov', content: 'Open your browser and go to IdentityTheft.gov. This is the official FTC website for reporting identity theft. Click "Get Started."' },
      { title: 'Answer the questions about what happened', content: 'The site asks what type of identity theft occurred: unauthorized accounts, misuse of existing accounts, tax fraud, or other types. Select everything that applies.' },
      { title: 'Provide your personal information', content: 'Enter your name, address, Social Security number, and contact information. This is needed to create your Identity Theft Report.' },
      { title: 'Review your personalized recovery plan', content: 'The FTC generates a step-by-step plan with specific actions, pre-written letters, and a timeline. Read through each step carefully.' },
      { title: 'Place a fraud alert or credit freeze', content: 'Follow the plan to contact Equifax (1-800-525-6285), Experian (1-888-397-3742), and TransUnion (1-800-680-7289) to freeze your credit or place a fraud alert.' },
      { title: 'File a police report', content: 'Contact your local police department to file an identity theft report. Bring your FTC Identity Theft Report and any evidence of the fraud.' },
      { title: 'Follow up and monitor', content: 'Log back into IdentityTheft.gov to track your progress. Check your credit reports at annualcreditreport.com for any new suspicious activity over the next year.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE COMMUNICATION (7 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-group-chat-iphone',
    title: 'How to Set Up a Group Chat on iPhone',
    excerpt: 'Create a group text on iPhone using iMessage or SMS so you can message multiple people at once.',
    category: 'communication' as any,
    tags: ['group chat', 'iPhone', 'iMessage', 'texting', 'messaging'],
    readTime: '4 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Group chats on iPhone let you send one message to multiple people at the same time — great for family updates, event planning, or keeping a small circle connected. The Messages app on iPhone makes it straightforward to create one.

There are two types of group messages on iPhone. If everyone in the group has an iPhone (and iMessage is turned on), you get a blue-bubble iMessage group with features like reactions, typing indicators, and the ability to name the group. If anyone in the group has an Android phone, the conversation uses SMS/MMS (green bubbles), which is more limited but still works for basic group texting.

To create a group chat, open the Messages app and tap the compose button (the pencil-and-paper icon in the top-right corner). In the "To:" field, start typing the name or phone number of the first person you want to add. Tap their name when it appears. Then type the next person's name and tap it. Keep adding people until your group is complete.

Once you have added everyone, type your message in the text field at the bottom and tap the blue send arrow. Your group chat is now created, and everyone will see the messages.

If all members are using iMessage, you can name the group by tapping the group icons at the top of the conversation, then tapping "Change Name and Photo." You can also add or remove members from the group here. For SMS/MMS groups, naming and member management are not available.

A few things to keep in mind: group texts can get busy fast. Each member can mute the conversation by tapping the group name and toggling "Hide Alerts." You can also leave an iMessage group (if there are four or more people) by tapping the group name and choosing "Leave this Conversation."

Group chats are saved in your Messages app like any other conversation. You can scroll back through the history, share photos, and use all the same features you would in a one-on-one text.`,
    steps: [
      { title: 'Open the Messages app', content: 'Find the green Messages icon on your iPhone home screen and tap it to open the app.' },
      { title: 'Tap the compose button', content: 'In the top-right corner, tap the pencil-and-paper icon (compose button) to start a new message.' },
      { title: 'Add your contacts', content: 'In the "To:" field, type a name or phone number. Tap the correct contact when it appears. Repeat for each person you want in the group.' },
      { title: 'Type and send your first message', content: 'Tap the text field at the bottom, type your message, and tap the blue send arrow. This creates the group chat.' },
      { title: 'Name your group (iMessage only)', content: 'If everyone has an iPhone: tap the group icons at the top → "Change Name and Photo." Type a group name and choose an icon or emoji.' },
      { title: 'Manage the group', content: 'Tap the group icons at the top to add or remove members, mute notifications with "Hide Alerts," or leave the conversation if needed.' },
    ],
  },

  {
    slug: 'set-up-group-chat-android',
    title: 'How to Set Up a Group Chat on Android',
    excerpt: 'Create a group text on Android using Google Messages or your default messaging app to reach multiple people at once.',
    category: 'communication' as any,
    tags: ['group chat', 'Android', 'Google Messages', 'texting', 'messaging'],
    readTime: '4 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Group chats on Android let you message multiple people in a single conversation. Whether you are coordinating a family dinner, planning a trip with friends, or keeping coworkers in the loop, a group text keeps everyone on the same page.

Most Android phones use Google Messages as the default texting app. If your phone uses a different messaging app (like Samsung Messages), the steps are similar. The basic idea is the same: create a new message, add multiple recipients, and start typing.

To create a group chat in Google Messages, open the app and tap "Start chat" at the bottom-right (or the compose button, which looks like a pencil or plus sign). Then tap "New group." You can search for contacts by name or phone number. Tap each person you want to add — a checkmark appears next to their name. When you have selected everyone, tap "Next."

You will be prompted to give your group a name. This is optional but helpful, especially if you have multiple group chats. Type a name like "Family," "Book Club," or "Weekend Plans," then tap "Next" or "Create." Your group chat is ready.

Type your first message in the text field and tap the send button. All members receive the message and can reply to the group. If anyone in the group uses RCS (Rich Communication Services, which is like iMessage for Android), you will see features like read receipts, typing indicators, and higher-quality photos.

To manage the group later, open the conversation and tap the group name at the top. You can add or remove members, change the group name, or mute notifications. Muting is helpful if the group gets chatty — you will still see messages when you open the conversation, but your phone will not buzz for every new text.

If you are using Samsung Messages instead of Google Messages, the process is almost identical: tap the compose button, add multiple contacts, and send your first message. Samsung Messages also supports group naming and management.`,
    steps: [
      { title: 'Open Google Messages', content: 'Find the Messages app on your home screen (blue chat bubble icon) and tap to open it.' },
      { title: 'Start a new group', content: 'Tap "Start chat" at the bottom-right, then tap "New group." On some phones, tap the pencil or plus icon first.' },
      { title: 'Add contacts to the group', content: 'Search for contacts by name or phone number. Tap each person to add them — a checkmark appears. Add everyone you want, then tap "Next."' },
      { title: 'Name your group', content: 'Type a group name like "Family" or "Weekend Plans." This is optional but makes it easier to find the conversation later. Tap "Next" or "Create."' },
      { title: 'Send your first message', content: 'Type a message in the text field at the bottom and tap the send arrow. All group members receive the message and can reply.' },
      { title: 'Manage the group', content: 'Tap the group name at the top of the conversation to add or remove members, rename the group, or mute notifications.' },
    ],
  },

  {
    slug: 'set-up-microsoft-teams-video-calls',
    title: 'How to Set Up Microsoft Teams for Video Calls',
    excerpt: 'Install Microsoft Teams on your computer or phone and make your first video call — free version included.',
    category: 'communication' as any,
    tags: ['Microsoft Teams', 'video call', 'meetings', 'remote work', 'communication'],
    readTime: '6 min',
    thumbnailEmoji: '🟦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Microsoft Teams is a popular video calling and messaging app used by many workplaces, schools, and families. The good news is there is a free version that anyone can use for personal video calls, group chats, and screen sharing — you do not need a paid Microsoft 365 subscription.

To get started, you need a Microsoft account. If you have ever used Outlook, Hotmail, Xbox, or Skype, you already have one. If not, you can create a free account at account.microsoft.com. You will need an email address and a password.

Next, download Microsoft Teams. On a computer, go to microsoft.com/teams and click "Download Teams." On an iPhone, find it in the App Store. On an Android, find it in the Google Play Store. Install the app and sign in with your Microsoft account.

When you open Teams for the first time, you will see the main screen with options for Chat, Calendar, Calls, and Activity. To start a video call right away, tap or click the "Meet" button (it looks like a video camera). You can start an instant meeting or schedule one for later.

To invite someone to a video call, you have several options. You can share the meeting link by copying it and sending it via text or email. You can also type their name or email address to invite them directly if they are already in your Teams contacts.

During a video call, you will see controls at the bottom of the screen: camera on/off, microphone on/off, screen sharing, chat, and reactions. You can also change your background by clicking the three dots (more options) and selecting "Video Effects" — this lets you blur your background or choose a virtual background.

Teams works well on slower internet connections because it automatically adjusts video quality. If your connection is weak, you can turn off your camera and use audio only to improve the experience.

The free version of Teams supports meetings with up to 100 participants for up to 60 minutes, which is more than enough for most personal and small group calls.`,
    steps: [
      { title: 'Create or sign into a Microsoft account', content: 'If you already use Outlook or Hotmail, use that account. Otherwise, go to account.microsoft.com and create a free account with your email address.' },
      { title: 'Download Microsoft Teams', content: 'Computer: go to microsoft.com/teams and click "Download Teams." iPhone: App Store. Android: Google Play Store. Install and open the app.' },
      { title: 'Sign in to Teams', content: 'Open Teams and sign in with your Microsoft account email and password. The app may ask to send you a verification code — check your email or phone.' },
      { title: 'Start a video call', content: 'Tap the "Meet" button (video camera icon). Choose "Start Meeting" for an instant call or "Schedule Meeting" for a future time.' },
      { title: 'Invite people to the call', content: 'Copy the meeting link and send it by text or email. Or type their name or email address to invite them directly through Teams.' },
      { title: 'Use the call controls', content: 'During the call, use the bottom toolbar to toggle your camera and microphone, share your screen, open the chat, or send reactions. Click the three dots for background effects.' },
    ],
  },

  {
    slug: 'send-photos-through-text-message',
    title: 'How to Send Photos Through Text Message (iPhone and Android)',
    excerpt: 'Share photos from your phone through a text message — step-by-step instructions for both iPhone and Android.',
    category: 'communication' as any,
    tags: ['photos', 'texting', 'MMS', 'iPhone', 'Android', 'messaging'],
    readTime: '4 min',
    thumbnailEmoji: '📸',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Sending a photo through a text message is one of the most common things people do with their phones. Whether it is a picture of the grandkids, a receipt you need to share, or a photo of your garden, the process works the same way on both iPhone and Android.

When you send a photo through a text message, your phone uses MMS (Multimedia Messaging Service) instead of regular SMS. This happens automatically — you do not need to change any settings. The photo gets compressed slightly to fit through the messaging system, but it is still good enough for viewing on a phone screen.

On iPhone: Open the Messages app and tap the conversation with the person you want to send the photo to (or start a new message). Tap the plus sign (+) to the left of the text field. You will see options including "Photos," "Camera," and others. Tap "Photos" to choose a photo from your library, or tap "Camera" to take a new photo right now. Select the photo you want to send — it appears in the message field. Add a text caption if you want, then tap the blue send arrow.

On Android (Google Messages): Open the Messages app and tap the conversation. Tap the plus sign (+) or the camera icon next to the text field. Choose "Gallery" or "Photos" to pick an existing photo, or "Camera" to take a new one. Select your photo, add an optional message, and tap the send arrow.

You can send multiple photos at once by selecting more than one from your photo library before sending. On iPhone, tap multiple photos to select them, then tap "Add" to attach them all. On Android, tap and hold to select the first photo, then tap additional photos.

Keep in mind that MMS has a file size limit (usually 1 to 3 megabytes depending on your carrier). If you are sending a high-resolution photo, your phone automatically compresses it. For full-quality photos, use email, AirDrop (iPhone), Nearby Share (Android), or a cloud service like Google Photos.`,
    steps: [
      { title: 'Open your messaging app', content: 'iPhone: tap the green Messages icon. Android: tap the Messages app (blue chat bubble). Open the conversation with the person you want to send the photo to.' },
      { title: 'Tap the attachment button', content: 'iPhone: tap the plus sign (+) to the left of the text field. Android: tap the plus sign (+) or the camera/paperclip icon next to the text field.' },
      { title: 'Choose a photo or take a new one', content: 'Select "Photos" or "Gallery" to pick an existing photo from your library. Or select "Camera" to take a new photo right now.' },
      { title: 'Select your photo', content: 'Browse your photos and tap the one you want to send. To send multiple photos, tap each one to select them (iPhone: tap, then "Add"; Android: tap and hold the first, then tap others).' },
      { title: 'Add a message and send', content: 'The photo appears in the message field. Type an optional caption in the text box, then tap the blue send arrow to deliver the photo.' },
    ],
  },

  {
    slug: 'manage-notification-settings-phone',
    title: 'How to Manage Notification Settings on Your Phone',
    excerpt: 'Take control of which apps can send you notifications and how they appear on your iPhone or Android phone.',
    category: 'communication' as any,
    tags: ['notifications', 'settings', 'iPhone', 'Android', 'phone management'],
    readTime: '5 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your phone buzzing and dinging all day can be overwhelming. The good news is you have complete control over which apps can send you notifications, how they appear, and whether they make sounds. Taking a few minutes to manage your notification settings can make a big difference in your daily phone experience.

On iPhone, go to Settings then Notifications. You will see a list of every app installed on your phone. Tap any app to control its notification settings. For each app, you can toggle "Allow Notifications" on or off. You can also choose how notifications appear: on the Lock Screen, in Notification Center, or as Banners (pop-up alerts at the top of your screen). You can turn on or off Sounds and Badges (the red number circles on app icons).

A helpful iPhone feature is "Notification Summary." Go to Settings then Notifications then Scheduled Summary. When turned on, this collects non-urgent notifications and delivers them in a bundle at times you choose (like 8 AM and 6 PM), instead of interrupting you throughout the day.

On Android, go to Settings then Notifications (or Settings then Apps and Notifications, depending on your phone). You can see which apps send the most notifications at the top of the screen. Tap any app to control its notification settings. Android gives you fine-grained control — many apps have notification "categories" or "channels" that let you turn off specific types of notifications while keeping others. For example, you might want delivery updates from a shopping app but not promotional offers.

Both iPhone and Android let you quickly silence a notification type by long-pressing (pressing and holding) on a notification when it appears. This opens a quick menu where you can mute that app or change its settings without going into the full Settings app.

A good approach is to go through your notification list once and turn off notifications for apps that do not need your immediate attention — games, shopping apps, news apps, and social media are common culprits. Keep notifications on for calls, texts, calendar reminders, and anything time-sensitive.`,
    steps: [
      { title: 'Open notification settings', content: 'iPhone: Settings then Notifications. Android: Settings then Notifications (or Apps and Notifications). You will see a list of all your apps.' },
      { title: 'Review which apps send notifications', content: 'Scroll through the list. Turn off "Allow Notifications" for apps that do not need your immediate attention — games, shopping apps, and promotional apps are good ones to silence.' },
      { title: 'Customize how notifications appear', content: 'For apps you keep on: choose whether alerts show on the Lock Screen, as banners, or only in the notification center. Turn sounds on or off per app.' },
      { title: 'Set up notification summary (iPhone)', content: 'Go to Settings then Notifications then Scheduled Summary. Turn it on and choose delivery times. Non-urgent notifications get bundled instead of interrupting you.' },
      { title: 'Use long-press for quick changes', content: 'When a notification pops up that you do not want, press and hold on it. A menu appears letting you mute that app or adjust its settings without opening the Settings app.' },
      { title: 'Revisit your settings periodically', content: 'New apps you install default to sending notifications. Every month or so, check your notification settings and silence any new apps that are cluttering your screen.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE ESSENTIAL SKILLS (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'take-screenshot-any-device',
    title: 'How to Take a Screenshot on Any Device',
    excerpt: 'Capture what is on your screen — step-by-step instructions for iPhone, Android, Windows, Mac, and Chromebook.',
    category: 'essential-skills' as any,
    tags: ['screenshot', 'screen capture', 'iPhone', 'Android', 'Windows', 'Mac'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A screenshot is a picture of whatever is currently showing on your screen. Screenshots are useful for saving information, sharing what you see with someone else, documenting an error message, or keeping a record of a confirmation page.

Every device has a built-in way to take screenshots. Here is how to do it on each one.

iPhone (with Face ID — iPhone X and later): Press the Side button and Volume Up button at the same time. You will see a flash and hear a camera click sound (if your phone is not on silent). A small preview appears in the bottom-left corner. Tap it to edit, or swipe it away to save it to your Photos app.

iPhone (with Home button — iPhone 8 and earlier): Press the Home button and Side button at the same time.

Android: Press the Power button and Volume Down button at the same time. Hold both for about one second. The screen flashes and the screenshot saves to your Photos or Gallery app. On some Samsung phones, you can also swipe the edge of your hand across the screen to capture.

Windows: Press the Windows key + Shift + S. A toolbar appears at the top of the screen letting you select what to capture — the whole screen, a rectangle, or a freeform shape. The screenshot copies to your clipboard so you can paste it, and also saves as a notification you can click to edit.

Mac: Press Command + Shift + 3 to capture the entire screen. Press Command + Shift + 4 to select a specific area with your cursor. Press Command + Shift + 5 to open a screenshot toolbar with more options. Screenshots save to your Desktop by default.

Chromebook: Press Ctrl + Show Windows (the rectangle with two lines, above the 6 key). For a partial screenshot, press Ctrl + Shift + Show Windows, then drag to select an area.

All screenshots are saved as image files that you can share by text, email, or any other method you use to send photos.`,
    steps: [
      { title: 'iPhone (Face ID): Side + Volume Up', content: 'Press the Side button and Volume Up button at the same time. A preview appears in the bottom-left corner — tap it to edit or swipe it away to save.' },
      { title: 'iPhone (Home button): Home + Side', content: 'Press the Home button and the Side (or Top) button at the same time. The screenshot saves to your Photos app.' },
      { title: 'Android: Power + Volume Down', content: 'Press the Power button and Volume Down button at the same time and hold for one second. The screenshot saves to your Gallery or Photos app.' },
      { title: 'Windows: Windows + Shift + S', content: 'Press the Windows key + Shift + S. A snipping toolbar appears at the top — select the area to capture. The image copies to your clipboard for pasting.' },
      { title: 'Mac: Command + Shift + 3 or 4', content: 'Command + Shift + 3 captures the full screen. Command + Shift + 4 lets you drag to select an area. Screenshots save to your Desktop.' },
      { title: 'Find your screenshots', content: 'iPhone/Android: open the Photos or Gallery app and look for a "Screenshots" album. Windows: check the notification that appears, or paste from clipboard. Mac: look on your Desktop.' },
    ],
  },

  {
    slug: 'copy-and-paste-phone-computer',
    title: 'How to Copy and Paste on Phone and Computer',
    excerpt: 'Learn the universal skill of copying and pasting text, links, and images on iPhone, Android, Windows, and Mac.',
    category: 'essential-skills' as any,
    tags: ['copy', 'paste', 'clipboard', 'text', 'basics'],
    readTime: '4 min',
    thumbnailEmoji: '📋',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Copy and paste lets you take text, a link, an image, or other content from one place and put it somewhere else — without having to retype it. It is one of the most useful skills you can learn on any device.

The concept works the same everywhere: first, you select what you want to copy. Then you copy it (which stores it temporarily in an invisible "clipboard"). Then you go to where you want to put it and paste it.

On a phone (iPhone or Android), copying text works by pressing and holding on a word. After a moment, the word gets highlighted and two handles appear (small circles or lines) that you can drag to select more or less text. Once the text is selected, a menu appears with options including "Copy." Tap "Copy." The text is now on your clipboard. Go to where you want to paste it (a text message, email, search bar, notes app, etc.), tap and hold in the text field, and tap "Paste" from the menu that appears.

On a Windows computer, select text by clicking and dragging your mouse over it. Press Ctrl + C to copy. Click where you want to paste it, then press Ctrl + V. These keyboard shortcuts work in almost every program — word processors, email, web browsers, and more.

On a Mac, select text by clicking and dragging, then press Command + C to copy and Command + V to paste.

You can copy more than text. To copy a link from your browser, tap the address bar (the URL at the top), select all the text, and copy it. To copy an image on a computer, right-click the image and choose "Copy image." On a phone, press and hold on an image and look for "Copy" in the menu.

One important thing to know: your clipboard holds only one item at a time. When you copy something new, it replaces whatever was there before. If you need to paste the same thing multiple times, you can — it stays on the clipboard until you copy something else.`,
    steps: [
      { title: 'Select text on a phone', content: 'Press and hold on a word until it highlights. Drag the handles to select the text you want. A menu appears above the selection.' },
      { title: 'Copy the selection', content: 'Tap "Copy" from the menu. The text is stored on your clipboard — you will not see anything happen, but it is saved.' },
      { title: 'Paste on a phone', content: 'Go to where you want to put the text (message, email, search bar). Tap and hold in the text field. Tap "Paste" from the menu.' },
      { title: 'Copy on a Windows computer', content: 'Click and drag your mouse to select text. Press Ctrl + C to copy. To paste, click where you want the text and press Ctrl + V.' },
      { title: 'Copy on a Mac', content: 'Click and drag to select text. Press Command + C to copy. Press Command + V to paste. These shortcuts work in nearly every app.' },
      { title: 'Copy a link or image', content: 'For links: tap the address bar and copy the URL. For images: right-click (computer) or press and hold (phone) and choose "Copy" or "Copy image."' },
    ],
  },

  {
    slug: 'scan-qr-code-phone',
    title: 'How to Scan a QR Code with Your Phone',
    excerpt: 'Use your phone camera to scan QR codes for menus, websites, payments, WiFi passwords, and more.',
    category: 'essential-skills' as any,
    tags: ['QR code', 'camera', 'scanning', 'iPhone', 'Android'],
    readTime: '3 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `QR codes are those square black-and-white patterns you see on restaurant menus, event tickets, product packaging, and signs. When you scan one with your phone camera, it takes you to a website, shows information, connects you to WiFi, or completes some other action automatically.

The great news is that most modern phones can scan QR codes using the built-in camera app — no special app needed.

On iPhone (iOS 11 and later): Open the Camera app and point it at the QR code. Hold your phone steady so the QR code is visible in the frame. After a moment, a notification banner appears at the top of the screen showing what the QR code links to (usually a website). Tap the banner to open it.

On Android (most phones running Android 9 and later): Open the Camera app and point it at the QR code. If your camera supports it, a link or popup appears that you can tap. On some Android phones, you may need to tap a small QR code icon that appears, or you may need to use Google Lens instead. To use Google Lens, open the Camera app and look for the Lens icon (a square with a dot), or open the Google app and tap the Lens icon in the search bar.

On Samsung phones: Open the Camera app, and QR code scanning is on by default. If it does not work, go to Camera Settings and make sure "Scan QR codes" is toggled on.

Tips for scanning: hold your phone about 6 to 12 inches from the QR code. Make sure the code is well-lit and not wrinkled, damaged, or partially covered. If the QR code is on a screen (like a TV or another phone), reduce glare by adjusting your angle.

A word of caution: QR codes can link to any website, including malicious ones. Before tapping the link that appears, glance at the URL to make sure it looks legitimate. If a QR code on a random sticker or flyer sends you to an unfamiliar website, it is better to skip it.`,
    steps: [
      { title: 'Open your camera app', content: 'On both iPhone and Android, open the Camera app from your home screen. No special QR scanning app is needed on most modern phones.' },
      { title: 'Point the camera at the QR code', content: 'Hold your phone about 6 to 12 inches away from the QR code. Keep the entire QR code visible in the camera frame and hold steady.' },
      { title: 'Wait for the notification', content: 'After a second or two, a notification banner or link appears on screen showing what the QR code does (usually a website URL).' },
      { title: 'Tap to open', content: 'Tap the notification banner (iPhone) or the popup link (Android) to follow the QR code to its destination.' },
      { title: 'If it does not work', content: 'Samsung: check Camera Settings and make sure "Scan QR codes" is on. Other Android: try Google Lens (open the Google app, tap the Lens icon in the search bar, point at the QR code).' },
      { title: 'Stay safe', content: 'Before tapping the link, glance at the URL. If it looks unfamiliar or suspicious, do not open it. QR codes in trusted locations (restaurants, stores, offices) are generally safe.' },
    ],
  },

  {
    slug: 'update-your-phone',
    title: 'How to Update Your Phone (iPhone and Android)',
    excerpt: 'Keep your phone secure and running well by installing the latest software updates on iPhone or Android.',
    category: 'essential-skills' as any,
    tags: ['software update', 'iPhone', 'Android', 'security', 'phone maintenance'],
    readTime: '5 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Software updates keep your phone secure, fix bugs, and sometimes add new features. Both Apple and Google release regular updates for their phones, and installing them is one of the most important things you can do to protect your device and your personal information.

There are two types of updates: major updates (like going from iOS 18 to iOS 19, or Android 15 to Android 16) that come once a year and add big new features, and smaller updates (like iOS 18.4.1) that come more frequently and fix security issues and bugs. Both types are important.

Before updating, make sure your phone is connected to WiFi (updates are large and can use a lot of mobile data), has at least 50 percent battery (or is plugged in), and has enough storage space (some updates need several gigabytes of free space).

On iPhone: Go to Settings, then General, then Software Update. Your phone checks for available updates. If one is available, you will see a description of what it includes. Tap "Download and Install." You may need to enter your passcode. The download can take several minutes depending on your internet speed, and the installation requires your phone to restart. Do not use your phone during the installation — it will come back on when it is done.

On Android: Go to Settings, then System, then System Update (the exact path varies by phone brand — Samsung uses Settings then Software Update). Tap "Check for updates." If an update is available, tap "Download" or "Download and Install." Your phone downloads the update, then restarts to install it. The whole process can take 10 to 30 minutes.

You can set up automatic updates so your phone installs them overnight. On iPhone: Settings, then General, then Software Update, then Automatic Updates, then turn on both toggles. On Android: Settings, then System, then System Update, then look for an automatic update option (availability varies by manufacturer).

If you are running low on storage and cannot install an update, delete old photos, apps you do not use, or large message attachments to free up space.`,
    steps: [
      { title: 'Prepare your phone', content: 'Connect to WiFi, plug in your charger (or make sure battery is above 50 percent), and close any apps you are working in. Updates need a stable connection and power.' },
      { title: 'Open update settings', content: 'iPhone: Settings then General then Software Update. Android: Settings then System then System Update (Samsung: Settings then Software Update).' },
      { title: 'Check for available updates', content: 'Your phone searches for updates. If one is available, you will see the version number and a description of what it includes.' },
      { title: 'Download and install', content: 'Tap "Download and Install." Enter your passcode if asked. The download may take several minutes. Your phone will restart during installation — this is normal.' },
      { title: 'Wait for installation to complete', content: 'Do not try to use your phone during the restart. It may show a progress bar or Apple/Android logo. The process typically takes 10 to 30 minutes.' },
      { title: 'Turn on automatic updates', content: 'iPhone: Settings then General then Software Update then Automatic Updates then turn on. Android: check System Update settings for an auto-update toggle.' },
    ],
  },

  {
    slug: 'restart-phone-when-it-freezes',
    title: 'How to Restart Your Phone When It Freezes',
    excerpt: 'Force restart a frozen iPhone or Android phone when the screen is unresponsive or the device is stuck.',
    category: 'essential-skills' as any,
    tags: ['restart', 'frozen phone', 'troubleshooting', 'iPhone', 'Android'],
    readTime: '3 min',
    thumbnailEmoji: '🔃',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A frozen phone — where the screen does not respond to taps and nothing seems to work — is frustrating but usually not serious. Most of the time, a force restart fixes the problem. A force restart is different from a normal restart: it forces the phone to power off and back on even when the screen is unresponsive.

A force restart does not delete your data, apps, or settings. Think of it like unplugging a computer and plugging it back in — it clears whatever was causing the freeze and starts fresh.

iPhone (Face ID models — iPhone X and later): Press and quickly release the Volume Up button. Then press and quickly release the Volume Down button. Then press and hold the Side button until you see the Apple logo appear. This takes about 10 seconds. Let go of the Side button and wait for the phone to restart.

iPhone 7: Press and hold both the Volume Down button and the Side button at the same time. Keep holding until you see the Apple logo (about 10 seconds).

iPhone 6s and earlier: Press and hold both the Home button and the Top (or Side) button at the same time until the Apple logo appears.

Android phones: Press and hold the Power button for 10 to 20 seconds. On most Android phones, this forces a restart. If that does not work, try holding the Power button and Volume Down button at the same time for 10 to 20 seconds. Samsung phones: hold Power + Volume Down for about 7 seconds.

After the restart, your phone should work normally. If your phone keeps freezing, it may be running low on storage, have an app that is misbehaving, or need a software update. Try updating your phone, closing apps running in the background, or freeing up storage space.

If force restart does not work and your phone is completely unresponsive, let the battery drain completely. Once it dies, plug it in and turn it back on normally.`,
    steps: [
      { title: 'iPhone (Face ID): Volume Up, Volume Down, then hold Side', content: 'Press and quickly release Volume Up. Press and quickly release Volume Down. Then press and hold the Side button until the Apple logo appears (about 10 seconds).' },
      { title: 'iPhone 7: Volume Down + Side', content: 'Press and hold both the Volume Down button and Side button at the same time. Keep holding until the Apple logo appears.' },
      { title: 'iPhone 6s and earlier: Home + Top/Side', content: 'Press and hold both the Home button and the Top (or Side) button at the same time until the Apple logo appears.' },
      { title: 'Android: Hold Power for 10 to 20 seconds', content: 'Press and hold the Power button for 10 to 20 seconds. The phone should vibrate and restart. If not, try Power + Volume Down together for 10 to 20 seconds.' },
      { title: 'Wait for restart to complete', content: 'Once the logo appears, release the buttons and wait for the phone to boot up. This takes about 30 seconds to a minute.' },
      { title: 'If freezing continues', content: 'Update your phone software, close background apps, and free up storage. If it keeps happening, visit your phone carrier store or the manufacturer support website for help.' },
    ],
  },

  {
    slug: 'free-up-storage-phone',
    title: 'How to Free Up Storage on Your Phone',
    excerpt: 'Reclaim space on your iPhone or Android by clearing out what you do not need — photos, apps, caches, and more.',
    category: 'essential-skills' as any,
    tags: ['storage', 'phone maintenance', 'photos', 'apps', 'iPhone', 'Android'],
    readTime: '6 min',
    thumbnailEmoji: '💾',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `When your phone runs out of storage, things start going wrong: you cannot take photos, apps crash, updates fail, and everything slows down. Fortunately, freeing up space is something you can do yourself, and you do not need to delete everything — a targeted cleanup usually recovers a surprising amount of space.

First, check how much storage you are using. On iPhone: Settings then General then iPhone Storage. This shows a bar chart of what is using your space (Apps, Photos, Messages, System, etc.) and a list of apps sorted by size. On Android: Settings then Storage (or Settings then Battery and Device Care then Storage on Samsung). You will see a breakdown of what is taking up space.

The biggest storage hog for most people is photos and videos. Videos especially take up enormous space — a single one-minute video can be 100 to 200 megabytes. Here are your options: delete photos and videos you no longer want (do not forget to empty the "Recently Deleted" or "Trash" album afterward — they stay there for 30 days). Use a cloud service like iCloud Photos (iPhone) or Google Photos (both platforms) to store originals in the cloud and keep smaller versions on your phone.

Next, look at apps you do not use. On the iPhone Storage screen, you can see when you last used each app. If you have not opened an app in months, consider deleting it. On Android, go to Settings then Apps and sort by size to find the biggest apps. You can delete them or clear their cache (temporary files).

Messages with lots of photos and videos can also eat up storage. On iPhone, go to Settings then General then iPhone Storage then Messages to see how much space messages are using. You can set messages to auto-delete after 30 days or one year instead of keeping them forever.

Clear your browser cache: Safari (Settings then Safari then Clear History and Website Data) or Chrome (open Chrome then three dots then Settings then Privacy then Clear browsing data).

Offline music and podcasts are another hidden storage drain. If you downloaded albums or podcast episodes for offline listening, removing the ones you have already enjoyed frees significant space.`,
    steps: [
      { title: 'Check your storage usage', content: 'iPhone: Settings then General then iPhone Storage. Android: Settings then Storage. See what categories (photos, apps, messages) are using the most space.' },
      { title: 'Clean up photos and videos', content: 'Delete photos and videos you no longer need. Remember to empty the "Recently Deleted" or "Trash" album afterward. Consider using iCloud Photos or Google Photos for cloud storage.' },
      { title: 'Remove unused apps', content: 'iPhone: tap an app in the iPhone Storage list and choose "Delete App." Android: Settings then Apps, select the app, and tap "Uninstall." Start with apps you have not opened in months.' },
      { title: 'Clear app caches', content: 'Android: Settings then Apps, select an app, then Storage, then "Clear Cache." iPhone does not have a manual cache clear for most apps — deleting and reinstalling an app clears its cache.' },
      { title: 'Manage messages and downloads', content: 'iPhone: Settings then General then iPhone Storage then Messages to review and delete old message attachments. Both platforms: check your Downloads folder for files you no longer need.' },
      { title: 'Clear browser data', content: 'Safari: Settings then Safari then Clear History and Website Data. Chrome: three dots then Settings then Privacy then Clear Browsing Data.' },
    ],
  },

  {
    slug: 'change-phone-wallpaper',
    title: 'How to Change Your Phone Wallpaper',
    excerpt: 'Personalize your phone by changing the background image on your Lock Screen and Home Screen.',
    category: 'essential-skills' as any,
    tags: ['wallpaper', 'personalization', 'iPhone', 'Android', 'home screen'],
    readTime: '3 min',
    thumbnailEmoji: '🎨',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your phone wallpaper is the background image you see on your Lock Screen (before you unlock) and your Home Screen (behind your apps). Changing it is a quick way to personalize your phone with a photo of your family, a nature scene, or any image you like.

On iPhone: Go to Settings then Wallpaper then "Add New Wallpaper." You will see options to choose from your Photos library, Apple's built-in wallpapers, colors, and dynamic options. Tap "Photos" to use one of your own pictures. Select the photo, then pinch and drag to adjust how it fits the screen. Tap "Add" when you are happy with it. The phone asks if you want to set it as a pair (both Lock Screen and Home Screen) or customize each separately.

You can also change your wallpaper directly from the Lock Screen. Press and hold on the Lock Screen until the customization view appears. Tap the plus sign (+) to add a new wallpaper, or swipe between wallpapers you have already set up.

On Android: Go to Settings then Wallpaper (or Settings then Display then Wallpaper). You will see options to choose from your Gallery, live wallpapers, or built-in wallpapers. Select "My Photos" or "Gallery" to use your own picture. Choose a photo, crop or adjust it to fit, and tap "Set Wallpaper." You will be asked if you want it on the Home Screen, Lock Screen, or both.

On Samsung phones, you can also press and hold on an empty area of your Home Screen and tap "Wallpaper and style" for quick access.

Tips for choosing a good wallpaper: pick an image that is not too busy, so you can still read your app names and notifications clearly. Darker wallpapers tend to look better and use less battery on phones with OLED screens. Photos of landscapes, sunsets, or solid colors work well.`,
    steps: [
      { title: 'Open wallpaper settings', content: 'iPhone: Settings then Wallpaper then "Add New Wallpaper." Android: Settings then Wallpaper (or Settings then Display then Wallpaper).' },
      { title: 'Choose your image source', content: 'Select "Photos" or "Gallery" to use your own photo. Or browse built-in wallpapers, colors, and other options provided by your phone.' },
      { title: 'Select and adjust your photo', content: 'Tap the photo you want. Pinch to zoom in or out, and drag to position it. Make sure faces or important parts of the photo are centered.' },
      { title: 'Set where it applies', content: 'Choose whether to use the wallpaper on the Lock Screen, Home Screen, or both. iPhone lets you customize each separately.' },
      { title: 'Confirm your choice', content: 'Tap "Set" or "Add" to apply the wallpaper. Press the Home button or swipe up to see your new wallpaper in action.' },
    ],
  },

  {
    slug: 'adjust-screen-brightness-any-device',
    title: 'How to Adjust Screen Brightness on Any Device',
    excerpt: 'Make your screen brighter or dimmer on iPhone, Android, Windows, Mac, or Chromebook for comfort and battery life.',
    category: 'essential-skills' as any,
    tags: ['brightness', 'display', 'screen', 'settings', 'battery'],
    readTime: '3 min',
    thumbnailEmoji: '☀️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Adjusting your screen brightness is something you will do often — brighter outdoors so you can see in sunlight, dimmer at night so it does not strain your eyes, and somewhere in the middle most of the time. Every device gives you a quick way to control brightness.

On iPhone: Swipe down from the top-right corner of the screen (on iPhones with Face ID) or swipe up from the bottom (on older iPhones with a Home button) to open Control Center. You will see a brightness slider — a tall bar with a sun icon. Drag it up to increase brightness or down to decrease it. You can also go to Settings then Display and Brightness and adjust the slider there.

On Android: Swipe down from the top of the screen to open Quick Settings. You will see a brightness slider near the top. Drag it left to dim or right to brighten. Pull down again (or tap the slider) for a larger view. You can also go to Settings then Display then Brightness Level. Most Android phones have an "Adaptive Brightness" toggle that learns your preferred brightness in different lighting conditions.

On Windows: Click the battery icon or the notification area in the bottom-right corner of the taskbar. You will see a brightness slider. Drag it to adjust. You can also go to Settings then System then Display and use the brightness slider. Many laptops also have brightness keys on the keyboard (usually F1/F2 or function keys with sun icons).

On Mac: Use the F1 key (dimmer) and F2 key (brighter) on the keyboard. Or click the Control Center icon in the menu bar and drag the brightness slider. You can also go to System Settings then Displays and adjust brightness there.

Lower brightness saves battery. If you are trying to make your phone or laptop last longer between charges, dimming the screen is one of the most effective things you can do.`,
    steps: [
      { title: 'iPhone: Use Control Center', content: 'Swipe down from the top-right corner (or up from the bottom on older iPhones). Drag the brightness slider (tall bar with sun icon) up or down.' },
      { title: 'Android: Use Quick Settings', content: 'Swipe down from the top of the screen. Find the brightness slider and drag it left (dimmer) or right (brighter).' },
      { title: 'Windows: Use the taskbar', content: 'Click the battery or notification area in the bottom-right corner. Drag the brightness slider. Or use the F-key brightness controls on your laptop keyboard.' },
      { title: 'Mac: Use keyboard or Control Center', content: 'Press F1 to dim or F2 to brighten. Or click the Control Center icon in the menu bar and drag the brightness slider.' },
      { title: 'Enable auto-brightness', content: 'iPhone: Settings then Accessibility then Display and Text Size then Auto-Brightness. Android: Settings then Display then Adaptive Brightness. This adjusts brightness automatically based on your environment.' },
    ],
  },

  {
    slug: 'connect-to-wifi-any-device',
    title: 'How to Connect to WiFi on Any Device',
    excerpt: 'Get online by connecting your iPhone, Android, Windows, Mac, or Chromebook to a WiFi network.',
    category: 'essential-skills' as any,
    tags: ['WiFi', 'internet', 'connectivity', 'network', 'settings'],
    readTime: '4 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Connecting to WiFi is one of the first things you do with any device. WiFi lets you use the internet without using your cellular data, and it is available in homes, coffee shops, libraries, airports, and many other places.

To connect, you need the name of the WiFi network (sometimes called the SSID) and the password. At home, these are usually on a sticker on the back or bottom of your router. In public places, ask staff for the WiFi name and password, or look for a sign.

On iPhone: Go to Settings then Wi-Fi. Make sure the toggle at the top is turned on (green). Your phone scans for nearby networks and lists them. Tap the name of the network you want to join. If it is password-protected (you will see a lock icon), type the password and tap "Join." A checkmark appears next to the network name when you are connected.

On Android: Go to Settings then Network and Internet then Wi-Fi (or Settings then Connections then Wi-Fi on Samsung). Make sure WiFi is toggled on. Tap the network name from the list. Enter the password if required and tap "Connect." A "Connected" label appears under the network name.

On Windows: Click the WiFi icon in the bottom-right corner of the taskbar. A list of nearby networks appears. Click the one you want and click "Connect." Enter the password and click "Next." A connected icon appears.

On Mac: Click the WiFi icon in the menu bar at the top-right of the screen. Select the network from the dropdown list. Enter the password when prompted and click "Join."

Once connected, your device remembers the network and reconnects automatically in the future. If the WiFi is not working, try turning WiFi off and back on, moving closer to the router, or restarting your device.

Public WiFi networks (at cafes, airports, hotels) are convenient but less secure than your home network. Avoid doing banking or entering passwords on public WiFi unless you are using a VPN (Virtual Private Network), which encrypts your connection.`,
    steps: [
      { title: 'Find the WiFi name and password', content: 'At home: check the sticker on your router. In public: ask staff or look for a sign with the WiFi name and password.' },
      { title: 'Open WiFi settings', content: 'iPhone: Settings then Wi-Fi. Android: Settings then Network and Internet then Wi-Fi. Windows: click WiFi icon on taskbar. Mac: click WiFi icon in menu bar.' },
      { title: 'Turn on WiFi if needed', content: 'Make sure the WiFi toggle is turned on. Your device will scan for nearby networks and display a list.' },
      { title: 'Select your network', content: 'Tap or click the name of the WiFi network you want to join. A lock icon means it requires a password.' },
      { title: 'Enter the password', content: 'Type the WiFi password carefully — passwords are case-sensitive. Tap "Join" (iPhone/Mac), "Connect" (Android/Windows), or press Enter.' },
      { title: 'Verify the connection', content: 'A checkmark, "Connected" label, or WiFi icon appears when successful. Open a browser and visit any website to confirm internet access.' },
    ],
  },

  {
    slug: 'use-do-not-disturb-mode',
    title: 'How to Use Do Not Disturb Mode',
    excerpt: 'Silence calls, texts, and notifications on your phone when you need focused time or uninterrupted sleep.',
    category: 'essential-skills' as any,
    tags: ['do not disturb', 'notifications', 'focus', 'sleep', 'phone settings'],
    readTime: '4 min',
    thumbnailEmoji: '🌙',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Do Not Disturb mode silences incoming calls, texts, and app notifications so your phone does not ring, buzz, or light up. It is perfect for sleeping, meetings, meals, or any time you want peace and quiet without turning off your phone entirely.

When Do Not Disturb is on, everything still arrives — you will see the notifications when you check your phone. They are being collected, not deleted. The difference is your phone stays silent and the screen stays dark.

On iPhone: You can turn on Do Not Disturb two ways. The quickest: open Control Center (swipe down from the top-right corner) and tap the Focus button (the crescent moon icon). Select "Do Not Disturb." For more options, go to Settings then Focus then Do Not Disturb. Here you can allow calls from specific people (like family members), allow repeated calls (if someone calls twice within three minutes, the second call comes through — useful for emergencies), and schedule Do Not Disturb to turn on and off automatically at certain times.

On Android: Swipe down from the top of the screen to open Quick Settings. Tap the "Do Not Disturb" tile (it might say "DND" or show a circle with a line through it). For more control, tap and hold the tile or go to Settings then Sound then Do Not Disturb. You can set exceptions for calls from contacts, allow repeat callers, and create automatic schedules. Samsung phones call this "Do not disturb" and it is in Settings then Notifications then Do not disturb.

Both platforms let you schedule Do Not Disturb to turn on automatically at bedtime and turn off in the morning. This is one of the most useful features for better sleep — no more getting woken up by a spam notification at 2 AM.

You can also allow specific contacts to break through Do Not Disturb. This way, if your kids, parents, or spouse calls, the phone rings — but everyone else gets sent to voicemail or silence.

Alarms still work during Do Not Disturb on both iPhone and Android, so you do not need to worry about sleeping through your morning alarm.`,
    steps: [
      { title: 'Turn on Do Not Disturb quickly', content: 'iPhone: swipe down from top-right, tap the moon icon (Focus), then "Do Not Disturb." Android: swipe down from top, tap the Do Not Disturb tile.' },
      { title: 'Allow calls from important contacts', content: 'iPhone: Settings then Focus then Do Not Disturb then People then "Allow Calls From" and choose "Favorites" or specific contacts. Android: Settings then Sound then Do Not Disturb then Exceptions.' },
      { title: 'Enable repeated callers', content: 'Turn on the "Allow Repeated Calls" setting. If someone calls you twice within three minutes, the second call rings through — helpful for emergencies.' },
      { title: 'Set a bedtime schedule', content: 'iPhone: Settings then Focus then Do Not Disturb then "Add Schedule" and set times. Android: Settings then Sound then Do Not Disturb then Schedules then "Sleeping" and set times.' },
      { title: 'Know that alarms still work', content: 'Alarms from the Clock app ring even when Do Not Disturb is on. You will not sleep through your morning alarm.' },
      { title: 'Check missed notifications', content: 'When you turn off Do Not Disturb or pick up your phone, all the notifications that came in while it was on are waiting for you in the notification center.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE APP GUIDES (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-google-maps-navigation',
    title: 'How to Use Google Maps for Navigation',
    excerpt: 'Get turn-by-turn directions to anywhere using Google Maps on your phone — driving, walking, or public transit.',
    category: 'app-guides' as any,
    tags: ['Google Maps', 'navigation', 'directions', 'GPS', 'driving'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Google Maps is a free navigation app that gives you turn-by-turn directions to any address, business, or landmark. It works for driving, walking, biking, and public transit. If you have a smartphone, Google Maps can replace a standalone GPS device.

Google Maps comes pre-installed on most Android phones. On iPhone, download it free from the App Store if it is not already on your phone. The app uses your phone's GPS to know where you are, so make sure Location Services are turned on.

To get directions, open Google Maps and tap the search bar at the top. Type where you want to go — an address, a business name, a city, or a landmark. Tap the result and then tap "Directions." The app shows your route on a map. At the top, you will see icons for different travel modes: car, transit, walking, and biking. Tap the one you want.

For driving directions, tap "Start" to begin navigation. Your phone gives voice instructions ("In 500 feet, turn right on Main Street") and shows a moving map. The app updates in real time based on traffic conditions and can reroute you if there is a traffic jam or accident ahead.

A few helpful features: if you search for a business (like "coffee shop" or "gas station"), Google Maps shows nearby options with ratings, hours, and phone numbers. You can save your Home and Work addresses in the app so getting directions is quicker. You can also share your location with someone in real time by tapping the blue dot (your location) and selecting "Share your location."

To stop navigation, tap the X or the arrow in the bottom-left corner and tap "Exit navigation."

Google Maps also works offline — handy for areas with poor cell service. Before your trip, search for the area, tap your profile icon, tap "Offline maps," and download the region you need.`,
    steps: [
      { title: 'Open Google Maps', content: 'Find the Google Maps icon on your phone (a map pin on a green, yellow, and blue map) and tap to open it.' },
      { title: 'Search for your destination', content: 'Tap the search bar at the top and type an address, business name, or landmark. Tap the correct result from the suggestions.' },
      { title: 'Tap Directions', content: 'On the location card that appears, tap the blue "Directions" button. Choose your travel mode: car, transit, walking, or biking.' },
      { title: 'Review the route', content: 'The map shows your route with the estimated travel time. If there are multiple route options, tap the different paths to compare.' },
      { title: 'Start navigation', content: 'Tap "Start" to begin turn-by-turn directions. Follow the voice instructions. Keep your phone mounted on your dashboard or in a holder for safe driving.' },
      { title: 'End navigation', content: 'When you arrive, navigation ends automatically. To stop early, tap the screen, then tap the X or "Exit" button.' },
    ],
  },

  {
    slug: 'use-uber-lyft-first-time',
    title: 'How to Use Uber or Lyft for the First Time',
    excerpt: 'Request a ride with Uber or Lyft — from downloading the app to getting picked up and arriving safely.',
    category: 'app-guides' as any,
    tags: ['Uber', 'Lyft', 'rideshare', 'transportation', 'ride'],
    readTime: '6 min',
    thumbnailEmoji: '🚗',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Uber and Lyft are ride-hailing apps that let you request a car and driver to take you somewhere — like a taxi, but you request and pay for it through your phone. Both apps work very similarly, so once you know one, you know the other.

To get started, download the Uber or Lyft app from the App Store (iPhone) or Google Play Store (Android). Create an account with your name, phone number, and email address. You will also need to add a payment method: a credit card, debit card, or connect a service like PayPal or Apple Pay. The app charges automatically — you never need cash.

When you open the app, it uses your phone's location to know where you are. Type where you want to go in the "Where to?" field. The app shows you ride options with estimated prices and arrival times. Common options include: standard rides (UberX or Lyft), shared rides (cheaper but you may share with other passengers), and larger vehicles (UberXL or Lyft XL for groups).

Tap the ride type you want and then tap "Request" or "Confirm." The app matches you with a nearby driver and shows their name, photo, car make, model, color, and license plate number. You will see their estimated arrival time on the map.

When the driver is close, go outside to your pickup location. Verify the car matches what the app shows — check the license plate number. Many riders also confirm by asking the driver "Who are you here for?" to make sure they get in the right car.

During the ride, the app shows your route in real time. You can share your trip status with a friend or family member using the "Share trip" feature — they can follow your ride live on a map.

When you arrive, you do not need to do anything — the fare is charged to your payment method automatically. After the trip, the app asks you to rate your driver (1 to 5 stars) and leave an optional tip.`,
    steps: [
      { title: 'Download the app and create an account', content: 'Get Uber or Lyft from the App Store or Google Play. Sign up with your phone number, email, and name. Add a credit card, debit card, or other payment method.' },
      { title: 'Enter your destination', content: 'Open the app and type where you want to go in the "Where to?" field. The app shows ride options with estimated prices and arrival times.' },
      { title: 'Choose your ride type and request', content: 'Select a ride type (standard, shared, or larger vehicle). Review the estimated price, then tap "Request" or "Confirm Ride."' },
      { title: 'Wait for your driver', content: 'The app matches you with a driver and shows their name, photo, car details, and estimated arrival time. Go outside when they are close.' },
      { title: 'Verify the car and get in', content: 'Check that the car make, model, color, and license plate match what the app shows. Ask "Who are you picking up?" to confirm before getting in.' },
      { title: 'Arrive and rate your driver', content: 'The fare charges automatically when you arrive. Rate your driver (1 to 5 stars) and add an optional tip. The receipt is emailed to you.' },
    ],
  },

  {
    slug: 'use-amazon-shop-online-safely',
    title: 'How to Use Amazon to Shop Online Safely',
    excerpt: 'Browse, compare, and purchase products on Amazon with confidence — including how to spot trustworthy sellers.',
    category: 'app-guides' as any,
    tags: ['Amazon', 'online shopping', 'safety', 'delivery', 'retail'],
    readTime: '6 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Amazon is the largest online marketplace in the United States. You can buy almost anything — from household supplies to electronics to clothing — and have it delivered to your door, often within one to two days. Here is how to shop on Amazon safely, whether you are a first-time user or want to improve your shopping habits.

First, create an account at amazon.com or through the Amazon app (free on iPhone and Android). You will need an email address and a password. Once logged in, you can add a payment method (credit card, debit card, or Amazon gift card) and your shipping address.

To find products, use the search bar at the top. Type what you are looking for, like "wireless keyboard" or "running shoes size 10." Results show product images, titles, prices, star ratings, and number of reviews.

When evaluating a product, pay attention to the star rating and the number of reviews. A product with 4.5 stars and 10,000 reviews is more reliable than one with 5 stars and 15 reviews. Read a few of the detailed reviews — especially the 3-star reviews, which tend to be the most balanced and honest.

Check who is selling the product. Items "Sold by Amazon.com" are sold directly by Amazon. Items sold by third-party sellers (other companies using Amazon's marketplace) can still be great, but check the seller's rating. Click the seller name to see their feedback score. Stick with sellers who have 95 percent or higher positive feedback.

Look for "Fulfilled by Amazon" — this means even if a third-party seller lists the product, Amazon handles shipping and returns, giving you the same return policy and customer service as Amazon-sold items.

Before purchasing, check the return policy. Most items sold or fulfilled by Amazon can be returned within 30 days. Review the total price including tax and any shipping fees.`,
    steps: [
      { title: 'Create an Amazon account', content: 'Go to amazon.com or download the Amazon app. Sign up with your email address and a password. Add your shipping address and a payment method.' },
      { title: 'Search for what you need', content: 'Type a product name or description in the search bar. Use filters on the left to narrow by price, rating, brand, or Prime eligibility.' },
      { title: 'Evaluate products carefully', content: 'Check the star rating and number of reviews. Read 3-star reviews for balanced opinions. Look at product photos from other buyers in the reviews section.' },
      { title: 'Check the seller', content: 'Look for "Sold by Amazon.com" or "Fulfilled by Amazon." For third-party sellers, click their name and check their feedback percentage (aim for 95 percent or higher).' },
      { title: 'Review the order before purchasing', content: 'Tap "Add to Cart" then "Proceed to Checkout." Verify your shipping address, payment method, delivery date, and total price including tax.' },
      { title: 'Place your order and track delivery', content: 'Tap "Place your order." A confirmation email arrives immediately. Track your package in the Amazon app under "Your Orders."' },
    ],
  },

  {
    slug: 'set-up-use-gmail',
    title: 'How to Set Up and Use Gmail',
    excerpt: `Create a free Gmail account and learn how to send, receive, and organize email using Google's email service.`,
    category: 'app-guides' as any,
    tags: ['Gmail', 'email', 'Google', 'communication', 'account'],
    readTime: '6 min',
    thumbnailEmoji: '✉️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Gmail is Google's free email service used by over a billion people worldwide. It is reliable, has excellent spam filtering, and works on any device — computer, phone, or tablet. If you do not have an email address yet, Gmail is a great place to start.

To create a Gmail account, go to gmail.com and click "Create account." You will choose your email address (something like yourname@gmail.com), create a password, and enter basic information like your name and date of birth. Choose an email address that is professional and straightforward to remember — your first and last name is a good option. If the address you want is taken, try adding a middle initial or a number.

Once your account is created, you can access Gmail at gmail.com in any web browser, or through the Gmail app on your phone (pre-installed on Android, available free on iPhone).

The Gmail inbox organizes your email into tabs: Primary (important emails), Social (social media notifications), and Promotions (marketing emails and deals). You can switch between tabs by tapping them at the top.

To send an email, tap the "Compose" button (a pencil icon or the word "Compose"). Enter the recipient's email address in the "To" field, type a subject line, write your message, and tap the send button (a paper airplane icon). You can add attachments (photos, documents) by tapping the paperclip icon.

To reply to an email, open the message and tap "Reply" at the bottom. Type your response and tap send. "Reply All" sends your reply to everyone who was included in the original email — use this carefully.

Gmail automatically filters spam (junk email) into a separate folder. Check your Spam folder occasionally — sometimes legitimate emails end up there by mistake. If you find one, tap "Not spam" to move it to your inbox.

You can organize emails by starring important ones (tap the star next to any email), archiving emails you have dealt with (swipe right to archive), or using labels to categorize them. The search bar at the top is powerful — you can search by sender, subject, date, or any word in the email body.`,
    steps: [
      { title: 'Create your Gmail account', content: 'Go to gmail.com and click "Create account." Choose a username (your email address), set a password, and fill in your name and date of birth.' },
      { title: 'Open Gmail on your device', content: 'On a computer: go to gmail.com. On iPhone: download the Gmail app from the App Store. On Android: the Gmail app is pre-installed.' },
      { title: 'Explore your inbox', content: 'Your inbox has tabs: Primary (important mail), Social, and Promotions. Tap each tab to see different types of messages.' },
      { title: 'Send your first email', content: `Tap "Compose" (pencil icon). Enter the recipient's email in "To," type a subject, write your message, and tap the send button (paper airplane icon).` },
      { title: 'Reply to emails', content: 'Open an email and tap "Reply" at the bottom. Type your response and tap send. Use "Reply All" only when everyone needs to see your response.' },
      { title: 'Organize your email', content: 'Star important emails by tapping the star icon. Swipe right to archive emails you have dealt with. Use the search bar to find any email by sender, subject, or keyword.' },
    ],
  },

  {
    slug: 'use-google-drive-store-files',
    title: 'How to Use Google Drive to Store Files',
    excerpt: 'Save documents, photos, and files to Google Drive so you can access them from any device and never lose them.',
    category: 'app-guides' as any,
    tags: ['Google Drive', 'cloud storage', 'files', 'backup', 'Google'],
    readTime: '5 min',
    thumbnailEmoji: '📁',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Google Drive is a free cloud storage service that lets you save files — documents, photos, spreadsheets, presentations, and more — on the internet so you can access them from any device. You get 15 gigabytes of free storage, which is enough for thousands of documents and hundreds of photos.

The biggest benefit of Google Drive is that your files are not trapped on one device. If your computer breaks or your phone gets lost, your files are safe in the cloud. You can access them from any computer, phone, or tablet by signing into your Google account.

If you have a Gmail account, you already have Google Drive. Go to drive.google.com in your web browser, or download the Google Drive app on your phone (free on iPhone and Android).

To upload a file from your computer, go to drive.google.com and click "New" then "File upload." Select the file from your computer and it uploads to Drive. You can also drag and drop files from your computer directly into the Drive window in your browser.

On your phone, open the Google Drive app and tap the plus sign (+) then "Upload." Choose a file from your phone to upload.

Google Drive also includes built-in tools for creating documents. Click "New" then "Google Docs" for a word processor (like Microsoft Word), "Google Sheets" for a spreadsheet (like Excel), or "Google Slides" for a presentation (like PowerPoint). These tools are free and your work saves automatically.

To organize your files, create folders by clicking "New" then "Folder." Name it something descriptive (like "Tax Documents 2026" or "Family Photos") and drag files into it. You can also use the search bar at the top to find any file by name or content.

To share a file with someone, right-click it (or tap the three dots on your phone) and select "Share." Enter their email address and choose whether they can view only or edit. They receive an email with a link to the file.`,
    steps: [
      { title: 'Access Google Drive', content: 'On a computer: go to drive.google.com and sign in with your Google account. On phone: download the Google Drive app from the App Store or Google Play.' },
      { title: 'Upload a file', content: 'Computer: click "New" then "File upload" and select a file, or drag and drop files into the browser window. Phone: tap the (+) then "Upload."' },
      { title: 'Create a document', content: 'Click "New" then choose "Google Docs" (word processor), "Google Sheets" (spreadsheet), or "Google Slides" (presentation). Your work saves automatically.' },
      { title: 'Organize with folders', content: 'Click "New" then "Folder" to create a folder. Give it a descriptive name and drag files into it to keep things organized.' },
      { title: 'Share a file', content: 'Right-click a file (or tap three dots on phone) then choose "Share." Enter the email address of the person you want to share with.' },
      { title: 'Access files from anywhere', content: 'Sign into drive.google.com or the Drive app on any device to access all your files. The search bar helps you find files by name or content.' },
    ],
  },

  {
    slug: 'use-microsoft-word-online-free',
    title: 'How to Use Microsoft Word Online for Free',
    excerpt: 'Create and edit Word documents for free using Microsoft Word Online — no software purchase or installation needed.',
    category: 'app-guides' as any,
    tags: ['Microsoft Word', 'Word Online', 'documents', 'free', 'Office'],
    readTime: '5 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `You do not need to buy Microsoft Office to use Microsoft Word. Microsoft offers a free online version called Word Online that runs in your web browser — no download or installation required. It includes most of the features everyday users need for writing letters, creating resumes, formatting documents, and more.

To use Word Online, you need a free Microsoft account. If you have a Hotmail, Outlook, or Xbox account, you already have one. If not, go to account.microsoft.com and create one with your email address.

Once you have an account, go to office.com (or microsoft365.com) and sign in. You will see icons for Word, Excel, PowerPoint, and other apps. Click the Word icon (the blue W) to get started. You can create a new blank document or choose from templates like resumes, cover letters, flyers, and more.

The Word Online interface looks similar to the desktop version. The toolbar at the top has tabs for Home (fonts, formatting, alignment), Insert (tables, images, links), and more. The most commonly used formatting tools — bold, italic, underline, font size, text color, and alignment — are all on the Home tab.

Your work saves automatically to OneDrive (Microsoft's cloud storage). You never need to press "Save" — it happens continuously as you type. You can access your document later from any computer or phone by going to office.com and signing in.

To download your document as a file, click File then Save As then Download a Copy. You can download it as a Word document (.docx) or PDF. To print, use File then Print or press Ctrl + P (Command + P on Mac).

Word Online also supports collaboration. Click the "Share" button in the top-right corner to invite others to view or edit the document. You can work on the same document at the same time and see each other's changes in real time.

The main limitations of Word Online compared to the paid desktop version: fewer formatting options, no advanced mail merge, and no offline access. But for writing documents, formatting text, creating tables, and basic tasks, Word Online has everything you need.`,
    steps: [
      { title: 'Create a Microsoft account', content: 'Go to account.microsoft.com and sign up for a free account. If you have an Outlook, Hotmail, or Xbox account, use that instead.' },
      { title: 'Go to office.com and sign in', content: 'Open your browser and go to office.com (or microsoft365.com). Sign in with your Microsoft account email and password.' },
      { title: 'Open Word and create a document', content: 'Click the blue Word icon. Choose "Blank document" to start from scratch, or pick a template for resumes, letters, and other common formats.' },
      { title: 'Format your document', content: 'Use the Home tab toolbar to change fonts, make text bold or italic, adjust alignment, add bullet lists, and change text color.' },
      { title: 'Save and download', content: 'Your work saves automatically to OneDrive. To download a copy: File then Save As then Download a Copy. Choose .docx (Word format) or .pdf.' },
      { title: 'Share with others', content: 'Click "Share" in the top-right corner. Enter email addresses to invite collaborators. Choose whether they can view only or edit the document.' },
    ],
  },

  {
    slug: 'set-up-use-zoom',
    title: 'How to Set Up and Use Zoom',
    excerpt: 'Download Zoom, create an account, and start or join video meetings with family, friends, or coworkers.',
    category: 'app-guides' as any,
    tags: ['Zoom', 'video call', 'meetings', 'communication', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '🎥',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Zoom is one of the most widely used video calling apps in the world. Millions of people use it for family calls, doctor appointments, work meetings, classes, and social gatherings. The free version lets you host meetings with up to 100 people for up to 40 minutes — more than enough for most personal use.

To get started, download Zoom. On a computer, go to zoom.us and click "Download" at the bottom of the page. On iPhone, find "Zoom Workplace" in the App Store. On Android, find it in the Google Play Store. Install it and open the app.

You can join a Zoom meeting without an account — if someone sends you a link, you can click it and join as a guest. But to host your own meetings, you need a free account. Go to zoom.us and click "Sign Up, It's Free." Enter your email address, create a password, and verify your email.

To start a meeting, open the Zoom app and click "New Meeting." Your camera turns on and you are in a meeting room. To invite others, click "Participants" then "Invite" then copy the meeting link. Send this link to people by text, email, or messaging app. When they click it, they join your meeting.

To join a meeting someone else is hosting, click the link they sent you. Or open the Zoom app, click "Join," and enter the Meeting ID (a number the host gives you). You may also need a passcode.

During a meeting, the controls at the bottom of the screen include: microphone on/off (Mute/Unmute), camera on/off (Start/Stop Video), Participants (see who is in the call), Chat (send text messages during the call), Share Screen (show your screen to others), and a red "Leave" button to exit.

Zoom tips: position your camera at eye level for the most natural look. Make sure you are well-lit from the front (not backlit by a window). Mute yourself when you are not speaking to reduce background noise. Use the chat feature to share links or messages without interrupting the speaker.`,
    steps: [
      { title: 'Download Zoom', content: 'Computer: go to zoom.us and click "Download." iPhone: search "Zoom Workplace" in App Store. Android: search "Zoom Workplace" in Google Play Store. Install and open.' },
      { title: 'Create a free account', content: `Go to zoom.us and click "Sign Up, It's Free." Enter your email, create a password, and verify your email address.` },
      { title: 'Start a meeting', content: 'Open Zoom and click "New Meeting." Your camera turns on. Click "Participants" then "Invite" to copy the link and send it to others.' },
      { title: 'Join a meeting', content: 'Click the meeting link someone sent you. Or open Zoom, click "Join," and enter the Meeting ID and passcode.' },
      { title: 'Use the meeting controls', content: 'Bottom toolbar: Mute/Unmute (microphone), Start/Stop Video (camera), Participants, Chat, Share Screen. Click "Leave" when the meeting is over.' },
      { title: 'Improve your video call experience', content: 'Position your camera at eye level. Face a light source (not a window behind you). Mute yourself when not speaking. Use a headset for better audio quality.' },
    ],
  },

  {
    slug: 'use-calculator-app-everyday-math',
    title: 'How to Use the Calculator App for Everyday Math',
    excerpt: 'Use the built-in calculator on your phone for tips, discounts, splitting bills, and other everyday calculations.',
    category: 'app-guides' as any,
    tags: ['calculator', 'math', 'tips', 'phone', 'everyday'],
    readTime: '4 min',
    thumbnailEmoji: '🔢',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Your phone has a built-in calculator that is more powerful than you might think. Beyond basic math, it can help you figure out tips at restaurants, calculate discounts while shopping, split bills with friends, and more.

On iPhone, the Calculator app has numbers on the bottom, basic operations on the right (plus, minus, multiply, divide), and clear/percent/plus-minus buttons at the top. Rotate your phone to landscape mode (sideways) to reveal a scientific calculator with advanced functions.

On Android, the Calculator app (or Google Calculator) works the same way. Some Android phones have it in the app drawer; you can also say "OK Google, open calculator" or search for "calculator" to find it.

Here are practical ways to use your calculator every day:

Calculating a tip: Enter the bill total, multiply by the tip percentage as a decimal. For a 20 percent tip on a $45 meal: type 45 x 0.20 = $9. For 15 percent: type 45 x 0.15 = $6.75. Add the tip to the total for your payment amount.

Figuring out a sale discount: If something is 30 percent off, multiply the price by 0.70 (which gives you the discounted price directly). For a $80 item at 30 percent off: type 80 x 0.70 = $56.

Splitting a bill: Add up the total, then divide by the number of people. For a $120 dinner with four people: type 120 / 4 = $30 each.

The calculator keeps your last answer on screen, so you can continue calculating without starting over. Tap "AC" (All Clear) or "C" (Clear) to start fresh. "C" clears the current number, while "AC" clears everything.

You can also ask Siri or Google Assistant to do math for you. Say "Hey Siri, what is 20 percent of 85?" or "OK Google, what is 156 divided by 4?" and get the answer without opening the app.`,
    steps: [
      { title: 'Open the calculator', content: 'iPhone: find the Calculator app icon on your home screen. Android: look in the app drawer or say "OK Google, open calculator."' },
      { title: 'Calculate a tip', content: 'Enter the bill total, tap the multiply button (x), type the tip percentage as a decimal (0.15 for 15 percent, 0.20 for 20 percent), tap equals (=). Add the result to the bill total.' },
      { title: 'Figure out a sale discount', content: 'Enter the original price, tap multiply (x), type the amount you will pay as a decimal (0.70 for 30 percent off, 0.75 for 25 percent off), tap equals (=).' },
      { title: 'Split a bill', content: 'Enter the total bill amount, tap divide (/), enter the number of people, tap equals (=). Each person pays that amount.' },
      { title: 'Use the percent button', content: 'The percent button converts a number to its decimal form. Some calculators let you type "45 + 20 percent" to automatically add 20 percent to 45.' },
      { title: 'Use voice assistant instead', content: 'Say "Hey Siri, what is 20 percent of 85?" or "OK Google, what is 156 divided by 4?" for hands-free calculations — no app needed.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE PHONE GUIDES (8 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-voicemail-iphone',
    title: 'How to Set Up Voicemail on iPhone',
    excerpt: 'Record a voicemail greeting and learn how to check messages using Visual Voicemail on your iPhone.',
    category: 'phone-guides' as any,
    tags: ['voicemail', 'iPhone', 'phone setup', 'greeting', 'messages'],
    readTime: '4 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Voicemail lets people leave you a voice message when you cannot answer the phone. On iPhone, you get Visual Voicemail — a feature that shows all your voicemail messages in a list so you can listen to them in any order, without having to call a number and navigate a phone menu.

To set up voicemail for the first time, open the Phone app (the green phone icon) and tap the "Voicemail" tab at the bottom-right corner. If this is your first time, you will see a "Set Up Now" button. Tap it.

You will be asked to create a voicemail password. Choose a 4 to 6 digit number and enter it twice to confirm. Write this down somewhere safe — you may need it if you ever need to reset your voicemail or access it from a different phone.

Next, you record your greeting. You have two options: "Default" plays a generic carrier greeting that says your phone number. "Custom" lets you record your own message. Most people choose Custom so callers hear their voice and know they reached the right person.

To record a custom greeting, tap "Custom" then "Record." Hold the phone to your ear (or use speakerphone) and say something like: "Hi, you have reached [your name]. I cannot answer the phone right now, but please leave a message and I will call you back as soon as I can." Tap "Stop" when you are done. Tap "Play" to listen to it. If you are happy with it, tap "Save."

Once voicemail is set up, whenever you miss a call and the caller leaves a message, it appears in the Voicemail tab as a list item. Tap any message to play it. You will also see a transcription of the message (this is automatic and may not be perfectly accurate, but it is helpful for quickly scanning messages without listening).

You can delete voicemails by swiping left on them or tapping "Delete." Deleted voicemails go to a "Deleted Messages" folder at the bottom of the list, where they are permanently removed after 30 days.`,
    steps: [
      { title: 'Open the Phone app', content: 'Tap the green Phone icon on your home screen. Tap the "Voicemail" tab at the bottom-right corner of the screen.' },
      { title: 'Tap Set Up Now', content: 'If this is your first time, a "Set Up Now" button appears. Tap it to begin the setup process.' },
      { title: 'Create a voicemail password', content: 'Choose a 4 to 6 digit password and enter it twice. Write this down somewhere safe — you will need it to access voicemail from another phone.' },
      { title: 'Choose and record your greeting', content: 'Choose "Custom" to record your own greeting. Tap "Record," speak your message, and tap "Stop." Tap "Play" to listen, then "Save" when satisfied.' },
      { title: 'Listen to voicemails', content: 'When someone leaves a message, it appears in the Voicemail tab. Tap any message to play it. A text transcription also appears below each message.' },
      { title: 'Manage your voicemails', content: 'Swipe left on a voicemail to delete it. Tap "Speaker" to play through the speaker. Tap "Call Back" to return the call directly.' },
    ],
  },

  {
    slug: 'set-up-voicemail-android',
    title: 'How to Set Up Voicemail on Android',
    excerpt: 'Set up your voicemail greeting on an Android phone and learn how to check your messages.',
    category: 'phone-guides' as any,
    tags: ['voicemail', 'Android', 'phone setup', 'greeting', 'messages'],
    readTime: '4 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Voicemail on Android lets callers leave a voice message when you do not answer. Setting it up takes a few minutes, and the exact steps depend on your phone carrier (Verizon, AT&T, T-Mobile, etc.) and phone brand (Samsung, Google Pixel, etc.).

The most common way to set up voicemail is through the Phone app. Open the Phone app (the phone icon on your home screen) and press and hold the number 1 on the keypad. This is the universal voicemail speed dial on most carriers. The first time you call, you will hear automated prompts walking you through setup.

The setup process typically asks you to create a PIN (4 to 6 digits) and record a greeting. For the PIN, choose something you will remember — you need it to check voicemail from another phone. For the greeting, you can use the default (an automated voice says your number) or record a custom greeting.

For a custom greeting, the system prompts you to record after a beep. Say something like: "Hi, you have reached [your name]. I am not available right now. Please leave your name, number, and a brief message, and I will get back to you." Press the pound key (#) or follow the prompts to save your recording.

On newer Android phones, you may have Visual Voicemail. This shows your voicemails as a list in the Phone app, similar to how iPhone does it. To check if your phone supports it, open the Phone app and look for a "Voicemail" tab at the bottom. If it is there, tap it to see your messages in a list. If not, press and hold 1 to call into your voicemail the traditional way.

Some carriers (T-Mobile, Verizon) also offer their own Visual Voicemail apps that you can download from the Play Store. These apps show your messages in a list, often with transcriptions.

To check voicemail the traditional way: press and hold 1 in the Phone app. Enter your PIN when prompted. Listen to your messages and follow the prompts to save, delete, or repeat them.`,
    steps: [
      { title: 'Open the Phone app', content: 'Tap the Phone icon on your home screen. If you see a "Voicemail" tab at the bottom, you have Visual Voicemail. If not, proceed to the next step.' },
      { title: 'Press and hold 1 to call voicemail', content: 'Open the keypad in the Phone app and press and hold the number 1. This calls your voicemail system. The first time, it walks you through setup.' },
      { title: 'Create a voicemail PIN', content: 'When prompted, choose a 4 to 6 digit PIN. Enter it twice to confirm. Write it down somewhere safe — you need it to access voicemail remotely.' },
      { title: 'Record your greeting', content: 'Choose "Personal" or "Custom" greeting. Record after the beep. Press pound (#) or follow prompts to save.' },
      { title: 'Check your voicemails', content: 'Visual Voicemail: tap the Voicemail tab in the Phone app to see messages in a list. Traditional: press and hold 1, enter your PIN, and listen to messages.' },
      { title: 'Consider a Visual Voicemail app', content: `If your Phone app does not have a Voicemail tab, search the Play Store for your carrier's Visual Voicemail app (T-Mobile, Verizon, AT&T each offer one).` },
    ],
  },

  {
    slug: 'transfer-photos-phone-to-computer',
    title: 'How to Transfer Photos from Phone to Computer',
    excerpt: 'Move photos from your iPhone or Android to a Windows PC or Mac — using a cable, cloud service, or wireless transfer.',
    category: 'phone-guides' as any,
    tags: ['photos', 'transfer', 'backup', 'iPhone', 'Android', 'computer'],
    readTime: '6 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Transferring photos from your phone to your computer is a great way to free up phone storage, create backups, and have your photos available on a larger screen for viewing and editing. There are several methods depending on what devices you have.

Method 1: USB cable (works with any combination). Connect your phone to your computer with a USB cable (the same cable you use to charge your phone). On iPhone to Windows: your phone appears in File Explorer. Open it and navigate to the DCIM folder to find your photos. Copy and paste them to a folder on your computer. On iPhone to Mac: open the Photos app on your Mac — an import screen appears showing your phone's photos. Select the ones you want and click "Import."

On Android to Windows: your phone appears as a device in File Explorer. Open it and navigate to DCIM then Camera. Copy photos to your computer. On Android to Mac: download the "Android File Transfer" app on your Mac, connect your phone, and browse its files.

Method 2: Cloud services (automatic, no cable needed). iCloud Photos (iPhone): go to Settings then [your name] then iCloud then Photos then turn on iCloud Photos. Your photos upload automatically. On a Windows PC, install iCloud for Windows to access them, or go to icloud.com. On Mac, they appear in the Photos app automatically.

Google Photos (iPhone or Android): install the Google Photos app, sign in, and turn on backup. Your photos upload to your Google account. On your computer, go to photos.google.com to view and download them.

Method 3: AirDrop (iPhone to Mac only). On your iPhone, open the Photos app, select photos, tap the share icon, and tap the name of your Mac in the AirDrop section.

Method 4: Email or messaging. For small numbers of photos, you can email them to yourself or send them through a messaging app and download them on your computer. This is the slowest method but requires no setup.`,
    steps: [
      { title: 'USB cable method', content: 'Connect your phone to your computer with a USB cable. Your phone appears as a device. Navigate to the DCIM folder and copy photos to your computer.' },
      { title: 'iPhone to Mac (Photos app)', content: 'Connect iPhone to Mac with a cable. Open the Photos app on Mac. An import screen appears — select photos and click "Import Selected."' },
      { title: 'Use iCloud Photos (iPhone)', content: 'Settings then [your name] then iCloud then Photos then turn on iCloud Photos. Photos upload automatically. Access them at icloud.com on your computer.' },
      { title: 'Use Google Photos (any phone)', content: 'Install Google Photos, sign in, turn on backup. Photos upload automatically. Go to photos.google.com on your computer to view and download them.' },
      { title: 'AirDrop (iPhone to Mac)', content: 'On iPhone: select photos, tap share icon, tap AirDrop, tap your Mac name. Photos transfer wirelessly in seconds.' },
      { title: 'Email for small batches', content: 'Select a few photos, tap share, choose Email or Messages. Send them to yourself and download the attachments on your computer.' },
    ],
  },

  {
    slug: 'use-airdrop-iphone',
    title: 'How to Use AirDrop on iPhone',
    excerpt: 'Share photos, files, links, and more wirelessly between iPhones, iPads, and Macs using AirDrop.',
    category: 'phone-guides' as any,
    tags: ['AirDrop', 'iPhone', 'sharing', 'wireless', 'Apple'],
    readTime: '4 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `AirDrop is Apple's wireless sharing feature that lets you send photos, videos, documents, links, contacts, and more between Apple devices — iPhone, iPad, and Mac. It uses Bluetooth and WiFi to transfer files directly between devices, and it is fast. A photo transfers in about one second.

Both devices need to have WiFi and Bluetooth turned on (they do not need to be connected to the same WiFi network). AirDrop works when devices are within about 30 feet of each other.

Before sending, make sure the receiving device has AirDrop turned on and set to receive. On iPhone: open Control Center (swipe down from the top-right corner). Press and hold the network settings card (the area with WiFi and Bluetooth icons). Tap AirDrop. Choose "Contacts Only" (receive from people in your contacts) or "Everyone for 10 Minutes" (receive from any nearby Apple device).

To send a file via AirDrop, find what you want to share. For a photo: open the Photos app, select the photo (or multiple photos), tap the share button (the square with an upward arrow). In the AirDrop section, you will see icons for nearby Apple devices. Tap the person or device you want to send to.

The receiving device shows a notification asking to accept or decline. Once they tap "Accept," the file transfers immediately. Photos go to the Photos app, documents go to the Files app, links open in Safari, and contacts go to the Contacts app.

AirDrop works with almost anything you can share on your iPhone: photos, videos, websites, map locations, contacts, voice memos, app links, and documents. If you see a share button, you can likely use AirDrop.

Privacy tip: set AirDrop to "Contacts Only" when you are in public places. The "Everyone" setting means strangers nearby can see your device and potentially send you unwanted content.`,
    steps: [
      { title: 'Turn on AirDrop on both devices', content: 'Open Control Center, press and hold the network card, tap AirDrop. Choose "Contacts Only" or "Everyone for 10 Minutes." Both WiFi and Bluetooth must be on.' },
      { title: 'Select what you want to share', content: 'Open the content you want to send (a photo, document, link, etc.). Tap the share button — the square with an upward arrow.' },
      { title: 'Tap the recipient in AirDrop', content: 'In the share sheet, look for the AirDrop section showing nearby devices. Tap the name or device icon of the person you want to send to.' },
      { title: 'Accept on the receiving device', content: 'The receiving device shows a notification with a preview. Tap "Accept" to receive the file. It opens or saves automatically in the right app.' },
      { title: 'Send to a Mac', content: 'Macs appear in the AirDrop section too. Make sure AirDrop is enabled on the Mac: open Finder, click AirDrop in the sidebar, and set to "Contacts Only" or "Everyone."' },
      { title: 'Set privacy for public places', content: 'When in public, set AirDrop to "Contacts Only" to prevent strangers from sending you unsolicited content. You can always switch back when needed.' },
    ],
  },

  {
    slug: 'use-nearby-share-android',
    title: 'How to Use Nearby Share on Android',
    excerpt: 'Share photos, files, and links wirelessly between Android phones and Chromebooks using Nearby Share.',
    category: 'phone-guides' as any,
    tags: ['Nearby Share', 'Android', 'sharing', 'wireless', 'Quick Share'],
    readTime: '4 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Nearby Share (also called Quick Share on Samsung phones) is Android's answer to Apple's AirDrop. It lets you wirelessly share photos, videos, files, links, and more between Android phones, tablets, and Chromebooks. The transfer uses a combination of Bluetooth, WiFi, and your internet connection, so it is fast even for large files.

Both devices need to have Bluetooth and Location turned on. The devices should be within about 15 feet of each other. Nearby Share is built into most Android phones running Android 6 or later — no app installation needed.

To set up Nearby Share, go to Settings then Google then Devices and sharing then Nearby Share (or Settings then Connected devices then Connection preferences then Nearby Share). Turn it on and choose who can see your device: "Your devices" (only your own Google account devices), "Contacts" (people in your contacts list), or "Everyone" (any nearby Android device).

To share something, find the content you want to send — a photo, file, or link. Tap the share button (usually three connected dots or a square with an arrow). In the sharing options, look for "Nearby Share" or "Quick Share." Tap it. Your phone searches for nearby devices. When the other person's device appears, tap their name.

The receiving device shows a notification asking to accept the file. Once they tap "Accept," the transfer begins. Small files transfer in seconds; larger files may take a minute or two.

On Samsung phones, this feature is called "Quick Share." The process is the same — tap the share button on any content and look for "Quick Share" in the options.

Nearby Share also works with Chromebooks. To enable it on a Chromebook: click the clock area then Quick Settings then Nearby Share. Files shared from a phone to a Chromebook appear in the Downloads folder.

For privacy in public places, set your visibility to "Your devices" or "Contacts" so strangers cannot see your device. Switch to "Everyone" temporarily when you need to receive from someone new, then switch back.`,
    steps: [
      { title: 'Turn on Nearby Share', content: 'Go to Settings then Google then Devices and sharing then Nearby Share. Turn it on and choose your visibility: Contacts or Everyone.' },
      { title: 'Prepare the receiving device', content: 'The other person should also have Nearby Share enabled and set to "Everyone" or "Contacts." Bluetooth and Location must be on for both devices.' },
      { title: 'Select content and tap Share', content: 'Open the photo, file, or link you want to send. Tap the share button (three connected dots or a share icon) and select "Nearby Share" or "Quick Share."' },
      { title: 'Choose the recipient', content: 'Your phone scans for nearby devices. When the other device appears in the list, tap their name to start the transfer.' },
      { title: 'Accept on the receiving device', content: 'A notification appears on the receiving device. Tap "Accept" to receive the file. Photos go to the Gallery, other files go to Downloads.' },
      { title: 'Adjust privacy settings after sharing', content: 'If you switched to "Everyone" to receive a file, switch back to "Contacts" or "Your devices" when you are done to protect your privacy in public.' },
    ],
  },

  {
    slug: 'turn-on-do-not-disturb-at-night',
    title: 'How to Turn On Do Not Disturb at Night',
    excerpt: 'Schedule your phone to silence notifications automatically at bedtime so you get uninterrupted sleep.',
    category: 'phone-guides' as any,
    tags: ['do not disturb', 'sleep', 'bedtime', 'iPhone', 'Android', 'schedule'],
    readTime: '4 min',
    thumbnailEmoji: '😴',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Nothing ruins a good night of sleep like your phone buzzing at midnight with a promotional email or a group chat message. Scheduling Do Not Disturb to turn on automatically at bedtime and off in the morning means you never have to think about it — your phone goes quiet when you do.

On iPhone: Apple calls this "Sleep Focus" and it is part of the Focus system. Go to Settings then Focus then Sleep. Tap "Add Schedule" and set the times you want it active (for example, 10:00 PM to 7:00 AM). You can set it for every day or only certain days of the week. While Sleep Focus is on, notifications are silenced, the Lock Screen dims, and only the people you allow can reach you.

To allow important callers through: tap "People" in the Sleep Focus settings and add contacts who can still call you during sleep hours (your spouse, children, or other emergency contacts). You can also enable "Allow Repeated Calls" — if someone calls twice within three minutes, the second call comes through.

On Android: Go to Settings then Sound then Do Not Disturb then Schedules. Tap "Add more" or the plus sign to create a new schedule. Many Android phones have a built-in "Sleeping" schedule you can customize. Set your start time (bedtime) and end time (wake-up time), and choose which days it applies.

Samsung phones: Settings then Notifications then Do not disturb then "Turn on as scheduled." Set your times. You can also use Samsung's "Bedtime" mode in the Clock app, which adds screen dimming and grayscale on top of silencing notifications.

On Android, you can set exceptions for calls from specific contacts: Settings then Sound then Do Not Disturb then People then "Calls from" then choose "Starred contacts" or "Contacts." Add your important people to your Starred contacts by opening their contact card and tapping the star icon.

Your alarm clock still works normally during Do Not Disturb on both iPhone and Android. You will not oversleep because of this setting — alarms always ring regardless.`,
    steps: [
      { title: 'iPhone: Set up Sleep Focus', content: 'Settings then Focus then Sleep then "Add Schedule." Set your bedtime and wake-up time. Choose which days it applies.' },
      { title: 'Android: Create a DND schedule', content: 'Settings then Sound then Do Not Disturb then Schedules, then add a "Sleeping" schedule. Set start and end times.' },
      { title: 'Allow important contacts through', content: 'iPhone: Focus then Sleep then People, then add emergency contacts. Android: Do Not Disturb then People then Calls from then Starred contacts.' },
      { title: 'Enable repeated callers', content: 'Turn on "Allow Repeated Calls" so if someone calls twice within 3 minutes, the second call rings through — useful for real emergencies.' },
      { title: 'Verify alarms still work', content: 'Set a test alarm to confirm it rings during Do Not Disturb. Both iPhone and Android let alarms through — you will not oversleep.' },
      { title: 'Samsung bonus: Use Bedtime mode', content: 'Open the Clock app then Bedtime tab then set your sleep schedule. This adds screen dimming and grayscale on top of Do Not Disturb for better sleep habits.' },
    ],
  },

  {
    slug: 'add-contact-phone',
    title: 'How to Add a Contact on Your Phone',
    excerpt: 'Save a phone number with a name in your contacts list on iPhone or Android so you can call or text them anytime.',
    category: 'phone-guides' as any,
    tags: ['contacts', 'phone number', 'iPhone', 'Android', 'address book'],
    readTime: '3 min',
    thumbnailEmoji: '👤',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Adding contacts to your phone means you do not have to remember phone numbers — you can call or text people by name. It also means when they call you, their name shows up on your screen instead of an unknown number.

On iPhone: Open the Phone app and tap the "Contacts" tab at the bottom. Tap the plus sign (+) in the top-right corner. Enter the person's first name, last name, and phone number. You can also add their email address, home address, birthday, and a note. Tap "Done" in the top-right corner to save.

You can also save a number from a recent call or text. If someone called or texted you and their number is not in your contacts: open the Phone app, go to the Recents tab, tap the (i) icon next to the number, then choose "Create New Contact" or "Add to Existing Contact."

On Android: Open the Phone app or the Contacts app (they work together). Tap the plus sign (+) or "Create contact" button. Enter the person's name and phone number. Add optional details like email, address, and notes. Tap "Save."

On Android, you can also save a contact from a recent call: open the Phone app, go to the Recents tab, tap the phone number, then choose "Add to contacts" or "Create new contact."

When entering a phone number, include the area code (all 10 digits). For international numbers, include the country code with a plus sign (like +44 for the UK or +1 for the US).

Contacts sync with your account (iCloud on iPhone, Google account on Android), so if you get a new phone and sign in with the same account, all your contacts transfer automatically. This also means your contacts are backed up — if your phone is lost or broken, your contacts are safe.

To edit a contact later: find them in your Contacts, tap their name, then tap "Edit." Change any information and tap "Done" or "Save."`,
    steps: [
      { title: 'Open the Contacts app', content: 'iPhone: open the Phone app then tap "Contacts" tab. Android: open the Contacts app or the Phone app then "Contacts."' },
      { title: 'Tap the plus (+) button', content: 'Look for the plus sign (+) or "Create contact" button, usually in the top-right or bottom-right corner. Tap it to start a new contact.' },
      { title: 'Enter the name and phone number', content: `Type the person's first and last name. Enter their phone number including the area code (10 digits). Add email, address, and notes if you want.` },
      { title: 'Save the contact', content: 'Tap "Done" (iPhone) or "Save" (Android) in the top corner. The contact is now saved in your phone.' },
      { title: 'Save from a recent call or text', content: 'If someone called you: open Recents, tap the (i) icon or the phone number, then choose "Create New Contact" or "Add to Existing Contact."' },
      { title: 'Contacts sync automatically', content: 'Your contacts back up to iCloud (iPhone) or your Google account (Android). If you get a new phone and sign in with the same account, all contacts transfer.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE SAFETY GUIDES (8 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'create-strong-password-remember',
    title: 'How to Create a Strong Password You Can Remember',
    excerpt: 'Build passwords that are hard for hackers to crack but possible for you to recall — plus how to manage them all.',
    category: 'safety-guides' as any,
    tags: ['password', 'security', 'accounts', 'password manager', 'login'],
    readTime: '5 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A strong password is your first line of defense against hackers. The problem is that truly strong passwords (long, random, and unique for every account) are hard to remember. Here is how to create passwords that are both secure and memorable, plus how to manage them without going crazy.

What makes a password strong: length is the single most important factor. A 16-character password is exponentially harder to crack than an 8-character one. The password should also include a mix of uppercase and lowercase letters, numbers, and special characters. And it should be unique — never reuse the same password on multiple accounts.

The passphrase method: one of the best approaches is to create a passphrase — a string of random words that create a mental image. For example: "purple-giraffe-eats-tacos-42" is 28 characters long, includes letters, a number, and special characters, and you can picture it in your head. Pick four to five unrelated words, add a number and a special character, and you have a strong password.

Another method: take a sentence you will remember and use the first letter of each word. "My daughter Sarah was born in Portland in 1998!" becomes "MdSwbiPi1998!" — 13 characters with uppercase, lowercase, numbers, and a special character.

What not to do: do not use your name, birthday, pet's name, "123456," "password," or any single dictionary word. Do not use the same password on multiple websites — if one site gets hacked, the attacker tries that password on every other site.

For managing multiple passwords, use a password manager. A password manager is an app that stores all your passwords in an encrypted vault. You remember one master password, and the manager fills in the rest. Recommended options: Apple's built-in password manager (iCloud Keychain), Google Password Manager (built into Chrome and Android), or dedicated apps like 1Password or Bitwarden.

Turn on two-factor authentication (2FA) wherever it is available. This adds a second step to logging in — usually a code sent to your phone — so even if someone gets your password, they cannot get into your account without your phone.`,
    steps: [
      { title: 'Use the passphrase method', content: 'Pick 4 to 5 random, unrelated words and connect them with hyphens or other characters. Example: "purple-giraffe-eats-tacos-42." It is long, complex, and memorable.' },
      { title: 'Or use the first-letter method', content: 'Take a sentence you know well and use the first letter of each word plus a number. "My cat Felix loves tuna every Friday at 5" becomes "McFlteFa5!"' },
      { title: 'Make every password unique', content: 'Never use the same password on two different websites. If one site gets hacked, attackers will try that password on your email, bank, and social media.' },
      { title: 'Use a password manager', content: 'Apple: iCloud Keychain (built into iPhone/Mac). Google: Password Manager (built into Chrome/Android). Or try 1Password or Bitwarden. One master password unlocks all others.' },
      { title: 'Turn on two-factor authentication', content: 'Go to the security settings of your important accounts (email, bank, social media). Turn on 2FA — it sends a code to your phone as an extra login step.' },
      { title: 'Update your weakest passwords first', content: 'Start with your email, bank, and social media accounts. Change any password that is short, uses a common word, or is reused across multiple sites.' },
    ],
  },

  {
    slug: 'recognize-avoid-tech-support-scams',
    title: 'How to Recognize and Avoid Tech Support Scams',
    excerpt: 'Identify fake tech support calls, pop-ups, and emails that try to trick you into paying for unnecessary repairs.',
    category: 'safety-guides' as any,
    tags: ['tech support scam', 'scams', 'fraud', 'security', 'phone scam'],
    readTime: '6 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Tech support scams are one of the most common frauds targeting non-technical users. Scammers pose as technical support from companies like Microsoft, Apple, or your internet provider and claim your computer or phone has a virus or security problem. Their goal is to get you to pay for fake repairs, give them remote access to your device, or hand over personal and financial information.

These scams come in several forms. Phone calls: you receive a call from someone claiming to be from "Microsoft Windows Support" or "Apple Technical Services." They say they have detected a problem with your computer and offer to fix it. Real tech companies do not call you out of the blue about computer problems.

Pop-up warnings: while browsing the internet, a scary full-screen message appears saying your computer is infected and to call a number immediately. The message may include flashing text, warning sounds, and an official-looking logo. These are fake — real virus warnings come from your installed antivirus software, not from websites.

Here is how the scam usually works: the scammer convinces you there is a problem, then asks you to install remote access software so they can "fix" it. Once they have access, they may install actual malware, steal your files, or access your bank accounts. They then charge you $200 to $500 for the "repair."

How to protect yourself: never give remote access to your computer to someone who contacted you first. Never call a phone number from a pop-up warning. Never pay for tech support you did not request. If you get a suspicious call, hang up. If you see a pop-up, close your browser (press Ctrl + W on Windows or Command + W on Mac, or force-quit the browser if needed).

If you have already fallen for a tech support scam: change your passwords immediately (especially email, banking, and social media). Run a legitimate antivirus scan. Check your bank and credit card statements for unauthorized charges. Report the scam to the FTC at reportfraud.ftc.gov.`,
    steps: [
      { title: 'Know the warning signs', content: 'Unsolicited calls from "Microsoft" or "Apple," scary pop-up warnings with phone numbers, and emails about computer problems are almost always scams.' },
      { title: 'Never give remote access to unsolicited callers', content: 'If someone you did not contact asks to remotely connect to your computer, say no and hang up. Legitimate companies do not need remote access to detect problems.' },
      { title: 'Close scary pop-ups without calling', content: 'If a pop-up says "call this number" — do not call. Close the browser tab (Ctrl+W on Windows, Command+W on Mac). If the browser is frozen, force-quit it.' },
      { title: 'Do not pay for unsolicited tech support', content: 'If you did not ask for help, do not pay for it. Scammers pressure you to pay by gift card, wire transfer, or cryptocurrency — these are red flags.' },
      { title: 'Use official support channels', content: `If you think your computer has a real problem, go to the manufacturer's official website (apple.com/support, support.microsoft.com) or visit a reputable local repair shop.` },
      { title: 'If you already fell for the scam', content: 'Change all passwords immediately. Run a real antivirus scan. Check bank statements for unauthorized charges. Report to the FTC at reportfraud.ftc.gov.' },
    ],
  },

  {
    slug: 'keep-social-media-accounts-private',
    title: 'How to Keep Your Social Media Accounts Private',
    excerpt: 'Lock down your Facebook, Instagram, and other social media accounts so only the people you trust can see your content.',
    category: 'safety-guides' as any,
    tags: ['social media', 'privacy', 'Facebook', 'Instagram', 'settings'],
    readTime: '6 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Social media accounts are often set to share more than you realize. Your posts, photos, friends list, location, and personal details may be visible to anyone on the internet — not only your friends and family. Taking a few minutes to adjust your privacy settings can significantly reduce what strangers can see.

Facebook: Go to Settings and Privacy, then Settings, then Privacy. Under "Who can see your future posts?" change it from "Public" to "Friends." Under "Who can send you friend requests?" choose "Friends of friends." Under "Who can look you up by email/phone?" change to "Friends." Also go to your Profile, tap the three dots, then "View As" to see what your profile looks like to the public.

Review your past posts: Settings then Privacy then "Limit Past Posts" applies the "Friends only" setting to all your previous posts that were set to Public or Friends of Friends. This is a powerful one-click change.

Instagram: Go to Settings then Privacy then "Private Account" and turn it on. When your account is private, only people you approve as followers can see your posts, stories, and followers list. Your profile photo and bio are still visible to everyone.

Twitter/X: Go to Settings then Privacy and Safety then "Protect your posts." When turned on, only your followers can see your tweets, and new followers require your approval.

General tips for all platforms: review your friends or followers list periodically and remove people you do not know. Turn off location tagging on posts (this reveals where you are in real time). Be cautious about sharing personal details like your full birth date, home address, phone number, or travel plans.

Check your tagged photos: on most platforms, you can review tags before they appear on your profile. Facebook: Settings then Profile and Tagging then "Review tags people add to your posts before they appear" then turn on. Instagram: Settings then Privacy then Tags then "Manually Approve Tags" then turn on.`,
    steps: [
      { title: 'Lock down Facebook', content: 'Settings then Privacy: change "Who can see your future posts" to "Friends." Use "Limit Past Posts" to apply this to all old posts too.' },
      { title: 'Make Instagram private', content: 'Settings then Privacy, then turn on "Private Account." Only approved followers can see your posts, stories, and followers list.' },
      { title: 'Protect Twitter/X posts', content: 'Settings then Privacy and Safety then "Protect your posts." Only approved followers can see your tweets.' },
      { title: 'Turn off location sharing', content: 'On each platform, avoid adding your location to posts. Check Privacy settings and turn off location access for social media apps.' },
      { title: 'Review tags and mentions', content: 'Turn on tag review: Facebook: Profile and Tagging then "Review tags." Instagram: Privacy then Tags then "Manually Approve Tags."' },
      { title: 'Audit your friends and followers', content: 'Periodically review your connections. Remove people you do not know. Check "View As" on Facebook to see what strangers see on your profile.' },
    ],
  },

  {
    slug: 'shop-online-safely',
    title: 'How to Shop Online Safely',
    excerpt: 'Protect your money and personal information when buying from websites — know what to look for and what to avoid.',
    category: 'safety-guides' as any,
    tags: ['online shopping', 'safety', 'scams', 'credit card', 'security'],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Shopping online is convenient, but it also creates opportunities for scammers. Fake websites, stolen credit card information, and counterfeit products are real risks. By following some straightforward practices, you can shop online with confidence.

Use trusted websites. Stick to well-known retailers like Amazon, Walmart, Target, Best Buy, and the official websites of brands you trust. If you find a deal on a website you have never heard of, be cautious. Search for the company name plus "reviews" or "scam" to see what other people say.

Check for HTTPS. Before entering any payment information, look at the website address in your browser. It should start with "https://" (not "http://") — the "s" means the connection is encrypted. You should also see a padlock icon in the address bar.

Use a credit card, not a debit card. Credit cards offer better fraud protection. If someone makes an unauthorized charge, your credit card company can reverse it while investigating. With a debit card, the money is taken directly from your bank account and can be harder to recover.

Be skeptical of deals that seem too good to be true. A brand-new phone for $99? A designer handbag for $30? These are almost certainly scams or counterfeits. If the price is drastically below what everyone else charges, walk away.

Watch out for fake review sites and social media ads. Scammers create convincing product ads on Facebook, Instagram, and TikTok that lead to fake shopping websites. These sites take your payment but never deliver the product. Check the website's contact information, return policy, and physical address before buying.

Keep records. Save confirmation emails, order numbers, and receipts. Take screenshots of the product listing and price. These are essential if you need to dispute a charge or return an item.

Monitor your statements. After shopping online, check your credit card or bank statement within a few days to make sure only the correct charges appear. Report any unauthorized charges to your bank immediately.`,
    steps: [
      { title: 'Shop on trusted websites', content: 'Stick to well-known retailers and brand websites. If a site is unfamiliar, search for it online along with "reviews" or "scam" before purchasing.' },
      { title: 'Check for HTTPS and the padlock', content: 'Before entering payment info, verify the URL starts with "https://" and shows a padlock icon. No padlock means do not purchase.' },
      { title: 'Use a credit card', content: 'Credit cards offer better fraud protection than debit cards. If there is an unauthorized charge, your credit card company can dispute and reverse it.' },
      { title: 'Be skeptical of extreme deals', content: 'If the price is dramatically lower than everywhere else, it is likely a scam or counterfeit. Compare prices across multiple reputable stores.' },
      { title: 'Avoid clicking social media ads for unfamiliar stores', content: 'Scam ads are common on Facebook, Instagram, and TikTok. If an ad leads to a site you do not recognize, research the company before buying.' },
      { title: 'Save receipts and monitor your bank statement', content: 'Keep confirmation emails and order numbers. Check your credit card or bank statement within a few days to catch unauthorized charges early.' },
    ],
  },

  {
    slug: 'avoid-package-delivery-scams',
    title: 'How to Avoid Package Delivery Scams',
    excerpt: 'Recognize fake delivery notifications from USPS, UPS, FedEx, and Amazon that try to steal your information or money.',
    category: 'safety-guides' as any,
    tags: ['delivery scam', 'USPS', 'UPS', 'FedEx', 'phishing', 'packages'],
    readTime: '5 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Package delivery scams are one of the fastest-growing types of fraud. You receive a text message or email claiming to be from USPS, UPS, FedEx, or Amazon saying there is a problem with your delivery — a missed package, a required fee, or an address confirmation needed. The message includes a link that leads to a fake website designed to steal your personal or financial information.

These scams work because so many people order packages online. At any given time, you might actually be expecting a delivery, which makes the scam message seem plausible.

How to recognize a delivery scam: the message creates urgency ("Your package will be returned if you do not respond within 24 hours"). Real delivery companies leave a note or try again — they do not threaten to return packages by text. The link looks off — the URL might be something like usps-delivery-update.com instead of the real domain (usps.com). It asks for payment — real delivery companies do not charge unexpected fees by text. It asks for personal information — a real delivery notification never asks for your Social Security number or credit card number.

What to do instead: if you get a suspicious delivery message, do not click the link. If you are expecting a package, go directly to the carrier's official website (usps.com, ups.com, fedex.com) and enter your tracking number there. You can also use the official app for each carrier to track packages.

If you already clicked a scam link: do not enter any information. Close the browser. If you entered financial information, call your bank or credit card company immediately. If you entered login credentials, change those passwords right away.

Report delivery scams: forward scam texts to 7726 (SPAM). Report fake USPS messages at uspis.gov. Report phishing to the FTC at reportfraud.ftc.gov.`,
    steps: [
      { title: 'Recognize the signs', content: 'Fake delivery messages create urgency, use suspicious links, ask for payment, or request personal information. Real carriers do not operate this way by text or email.' },
      { title: 'Do not click the link', content: 'If you receive a suspicious delivery text or email, do not tap the link. Delete the message.' },
      { title: 'Track packages through official channels', content: 'If you are expecting a delivery, go directly to usps.com, ups.com, fedex.com, or the Amazon app and enter your tracking number there.' },
      { title: 'Check the sender and URL', content: 'Real USPS texts come from short numbers, not regular phone numbers. Real URLs use the exact domain (usps.com, ups.com). Look for misspellings or extra words in the URL.' },
      { title: 'Never pay unexpected fees by text', content: `If a package truly requires a fee, it is handled at delivery or through the carrier's official website — never through a link in a random text message.` },
      { title: 'Report and block', content: 'Forward scam texts to 7726. Report to the FTC at reportfraud.ftc.gov. Block the sender on your phone.' },
    ],
  },

  {
    slug: 'protect-phone-if-stolen',
    title: 'How to Protect Your Phone If It Gets Stolen',
    excerpt: 'Steps to take immediately after your phone is stolen — lock it, track it, protect your accounts, and report the theft.',
    category: 'safety-guides' as any,
    tags: ['stolen phone', 'security', 'lock', 'remote wipe', 'theft'],
    readTime: '6 min',
    thumbnailEmoji: '🔓',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `If your phone is stolen, time matters. Your phone contains your email, banking apps, social media, photos, and personal information. Acting quickly can prevent a thief from accessing your accounts and data.

Step 1: Lock your phone remotely. This is the most urgent step. iPhone: go to icloud.com/find from any computer or device, sign in with your Apple ID, select your phone, and tap "Lost Mode." This locks the phone with your passcode, disables Apple Pay, and displays a custom message. Android: go to google.com/android/find, sign in with your Google account, and tap "Secure device." This locks the phone and signs out of your Google account.

Step 2: Call your phone carrier. Contact your carrier (Verizon, AT&T, T-Mobile, etc.) and report your phone stolen. They can suspend your line so the thief cannot make calls, send texts, or use your data. Your carrier can also blacklist your phone's IMEI number, which prevents it from being activated on any U.S. carrier network.

Step 3: Change your important passwords. Using another device, change the passwords for your email account first (this is the key to resetting every other password). Then change passwords for your banking and financial apps, social media accounts, and any accounts where you used auto-login or saved passwords.

Step 4: Check for unauthorized activity. Log into your email and check for any messages you did not send. Check your bank and credit card accounts for unauthorized transactions. Review your social media for posts or messages you did not make.

Step 5: File a police report. Contact your local police department and report the theft. Include the phone's make, model, serial number, and last known location from Find My or Find My Device.

Step 6: Consider a remote erase. If you cannot recover your phone and you have a backup of your data, you can erase the phone remotely. iPhone: icloud.com/find then "Erase This Device." Android: google.com/android/find then "Erase Device." This permanently deletes everything on the phone.

If you get a replacement phone, restore your data from your most recent backup (iCloud or Google account). All your apps, contacts, photos, and settings come back.`,
    steps: [
      { title: 'Lock your phone remotely (do this first)', content: 'iPhone: icloud.com/find, select phone, then "Lost Mode." Android: google.com/android/find then "Secure device." This locks the phone immediately.' },
      { title: 'Call your phone carrier', content: `Call Verizon, AT&T, T-Mobile, or your carrier to suspend your line and blacklist the phone's IMEI number.` },
      { title: 'Change your passwords', content: 'Starting with email, then banking, then social media — change passwords for all accounts you accessed on the stolen phone. Use a computer or another device.' },
      { title: 'Check for unauthorized activity', content: 'Review your email sent folder, bank transactions, and social media for anything you did not do. Report unauthorized activity immediately.' },
      { title: 'File a police report', content: `Report the theft to local police with the phone's make, model, serial number, and last known location. Keep a copy of the report for insurance claims.` },
      { title: 'Erase the phone remotely if needed', content: 'If recovery is unlikely and you have backups, erase the phone remotely: icloud.com/find then "Erase" (iPhone) or google.com/android/find then "Erase Device" (Android).' },
    ],
  },

  {
    slug: 'set-up-pin-password-phone',
    title: 'How to Set Up a PIN or Password on Your Phone',
    excerpt: 'Protect your phone with a PIN, password, or biometric lock so no one can access your information without permission.',
    category: 'safety-guides' as any,
    tags: ['PIN', 'password', 'phone lock', 'security', 'biometrics', 'Face ID'],
    readTime: '4 min',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `A locked phone is a protected phone. Setting up a PIN, password, or biometric lock (fingerprint or face recognition) means that if your phone is lost or stolen, no one can access your emails, banking apps, photos, or personal information without your permission.

Your phone offers several lock options. PIN: a 4 to 6 digit number. This is the most straightforward option and works well for most people. Choose something you will remember but that is not obvious — avoid 1234, 0000, your birth year, or the last four digits of your phone number.

Password: a longer combination of letters, numbers, and special characters. More secure than a PIN, but slower to type every time you unlock your phone.

Pattern (Android only): draw a pattern connecting dots on a grid. This is fast but can be guessed by someone watching over your shoulder or by looking at smudge marks on your screen.

Biometrics: Face ID (iPhone X and later), Touch ID (older iPhones), or fingerprint sensors (most Android phones). These are the most convenient — you unlock your phone by looking at it or touching the sensor. You still set a PIN or password as a backup.

On iPhone: Go to Settings then Face ID and Passcode (or Touch ID and Passcode on older models). Tap "Turn Passcode On." Choose a 6-digit passcode (recommended) or tap "Passcode Options" for a 4-digit PIN or a custom password. After setting a passcode, the phone asks if you want to set up Face ID or Touch ID — follow the prompts to register your face or fingerprint.

On Android: Go to Settings then Security then Screen Lock (the path varies slightly by brand). Choose your lock type: PIN, Password, or Pattern. Enter your choice and confirm it. Then look for "Fingerprint" or "Face Unlock" in the Security settings to add biometric unlock.

Set your phone to lock automatically after a short idle period: iPhone: Settings then Display and Brightness then Auto-Lock, then choose 30 seconds or 1 minute. Android: Settings then Display then Screen timeout, then 30 seconds or 1 minute.`,
    steps: [
      { title: 'Open security settings', content: 'iPhone: Settings then Face ID and Passcode. Android: Settings then Security then Screen Lock. This is where you set up your phone lock.' },
      { title: 'Choose a lock type', content: 'A 6-digit PIN is recommended for most people. It balances security and convenience. Avoid obvious numbers like 123456, your birthday, or 000000.' },
      { title: 'Set your PIN or password', content: 'Enter your chosen PIN or password twice to confirm. Write it down and keep it somewhere safe (not on the phone) until you have it memorized.' },
      { title: 'Set up biometric unlock', content: 'iPhone: Settings then Face ID and Passcode then "Set Up Face ID" or "Add a Fingerprint." Android: Settings then Security then "Fingerprint" or "Face Unlock." Follow the prompts.' },
      { title: 'Set auto-lock timing', content: 'iPhone: Settings then Display and Brightness then Auto-Lock, then 30 seconds or 1 minute. Android: Settings then Display then Screen timeout, then 30 seconds or 1 minute.' },
      { title: 'Test your lock', content: 'Press the power button to lock your phone. Wake it up and make sure the lock screen appears and requires your PIN, password, or biometric to unlock.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MORE HOW-TO (7 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'print-from-phone',
    title: 'How to Print from Your Phone',
    excerpt: 'Send documents, photos, and web pages from your iPhone or Android directly to a wireless printer.',
    category: 'how-to' as any,
    tags: ['printing', 'wireless', 'AirPrint', 'iPhone', 'Android'],
    readTime: '5 min',
    thumbnailEmoji: '🖨️',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Printing from your phone is more useful than you might think — boarding passes, shipping labels, recipes, photos, directions, medical forms, and documents can all be printed directly from your iPhone or Android without needing a computer.

The key requirement is a wireless printer. Most printers made in the last 5 to 10 years support wireless printing. Your phone and printer need to be on the same WiFi network.

On iPhone (AirPrint): Apple's built-in printing system is called AirPrint, and it works with most modern wireless printers. Find the document, photo, or web page you want to print. Tap the share button (the square with an upward arrow). Scroll down in the share menu and tap "Print." Your phone searches for printers on your network. Tap "Select Printer" and choose your printer from the list. Adjust options like number of copies and page range if available. Tap "Print."

On Android: Open the document, photo, or web page. Tap the three-dot menu (or the share button) and look for "Print." If you do not see it, tap "Share" and then look for "Print." Your phone searches for printers on your network. Select your printer, adjust settings, and tap the print button. If your printer does not appear, you may need to install your printer manufacturer's app (like HP Smart, Canon PRINT, or Epson iPrint) from the Google Play Store.

For photos: open the Photos or Gallery app, select the photo, tap share, and choose "Print." You can print photos on regular paper or on glossy photo paper if your printer supports it.

For web pages: while viewing the page in your browser, tap the share button or the three-dot menu and look for "Print."

If your printer is not wireless, some printers support USB connections through an adapter. Alternatively, you can use a printer manufacturer's app to print from your phone to a wired printer connected to a computer.`,
    steps: [
      { title: 'Make sure your printer is on the same WiFi', content: 'Your phone and printer must be connected to the same WiFi network. Check your printer settings to verify it is connected to WiFi.' },
      { title: 'iPhone: Use the Share button then Print', content: 'Open the document, photo, or web page. Tap the share button (square with arrow), scroll down to "Print." Select your printer and tap Print.' },
      { title: 'Android: Use the menu then Print', content: `Open the content you want to print. Tap the three-dot menu or share button then "Print." Select your printer. If it does not appear, install your printer's app from the Play Store.` },
      { title: 'Print a photo', content: 'Open the Photos or Gallery app, select a photo, tap share, then "Print." Choose your printer and adjust the number of copies.' },
      { title: 'Print a web page or email', content: 'While viewing a web page or email, tap the share button or three-dot menu and select "Print." The page prints as displayed on your screen.' },
      { title: 'Troubleshooting', content: `If your printer does not appear: make sure both devices are on the same WiFi network, restart the printer, or install the printer manufacturer's app for better compatibility.` },
    ],
  },

  {
    slug: 'connect-phone-bluetooth-speaker',
    title: 'How to Connect Your Phone to a Bluetooth Speaker',
    excerpt: 'Pair your iPhone or Android with a Bluetooth speaker to play music, podcasts, and audiobooks through a bigger speaker.',
    category: 'how-to' as any,
    tags: ['Bluetooth', 'speaker', 'audio', 'pairing', 'wireless'],
    readTime: '4 min',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Bluetooth speakers let you play music, podcasts, and audiobooks from your phone through a speaker that is louder and has better sound quality. Connecting your phone to a Bluetooth speaker (called "pairing") takes less than a minute once you know the steps.

First, put the speaker in pairing mode. Every Bluetooth speaker has a way to enter pairing mode — this makes it visible to your phone. Usually you press and hold the power button or a dedicated Bluetooth button until a light flashes blue (or you hear a tone or voice prompt saying "pairing mode" or "ready to connect"). Check your speaker's instruction manual if you are not sure which button to hold.

On iPhone: Go to Settings then Bluetooth. Make sure Bluetooth is turned on (the toggle should be green). Under "Other Devices," your speaker name should appear. Tap it. After a moment, it will say "Connected" next to the speaker name. You are now paired.

On Android: Go to Settings then Connected devices then "Pair new device" (or Settings then Bluetooth on some phones). Make sure Bluetooth is turned on. Under "Available devices," your speaker should appear. Tap it. A "Connected" label appears when pairing is complete.

Once paired, your phone remembers the speaker. Next time you want to use it, turn on the speaker and turn on Bluetooth on your phone — they will reconnect automatically without going through the pairing process again.

If you have trouble connecting: make sure the speaker is in pairing mode (not connected to another device). Move the phone and speaker closer together. Turn both off and back on. If the speaker was previously connected to a different phone, it may need to be unpaired from that phone first or put back into pairing mode.

You can only connect to one Bluetooth speaker at a time (unless your speaker or phone specifically supports multi-device features). To switch to a different speaker, disconnect from the current one first.`,
    steps: [
      { title: 'Put the speaker in pairing mode', content: 'Press and hold the power button or Bluetooth button on the speaker until a light flashes blue (or you hear "pairing mode"). Check your speaker manual if unsure.' },
      { title: 'Open Bluetooth settings on your phone', content: 'iPhone: Settings then Bluetooth (make sure it is on). Android: Settings then Connected devices then "Pair new device" (or Settings then Bluetooth).' },
      { title: 'Find and tap your speaker', content: 'Your speaker name appears under "Other Devices" (iPhone) or "Available devices" (Android). Tap it to connect.' },
      { title: 'Wait for the "Connected" confirmation', content: 'After a few seconds, the status changes to "Connected." You may also hear a confirmation tone from the speaker.' },
      { title: 'Play audio through the speaker', content: 'Open any music, podcast, or video app and press play. The audio should come through the Bluetooth speaker instead of your phone.' },
      { title: 'Reconnecting next time', content: 'Turn on the speaker and make sure Bluetooth is on your phone. They reconnect automatically. If not, open Bluetooth settings and tap the speaker name.' },
    ],
  },

  {
    slug: 'use-voice-typing',
    title: 'How to Use Voice Typing Instead of the Keyboard',
    excerpt: 'Dictate text messages, emails, notes, and searches using your voice on iPhone, Android, Windows, and Mac.',
    category: 'how-to' as any,
    tags: ['voice typing', 'dictation', 'speech to text', 'accessibility', 'hands-free'],
    readTime: '4 min',
    thumbnailEmoji: '🎤',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Voice typing (also called dictation) lets you talk instead of type. Your phone or computer converts your spoken words into text in real time. It works in text messages, emails, search bars, notes apps, documents — anywhere you would normally type.

Voice typing has gotten remarkably accurate in recent years, and it is built into every modern device. It is faster than typing for many people, and it is a great accessibility feature for anyone with difficulty using a keyboard.

On iPhone: whenever the keyboard is showing, look for the microphone icon at the bottom of the keyboard (near the space bar). Tap it. Start speaking, and your words appear as text. Speak punctuation out loud: say "period," "comma," "question mark," "exclamation point," or "new line" and the phone types those characters. Tap the microphone icon again to stop dictation.

On Android: when the keyboard is showing, tap the microphone icon on the keyboard (usually at the top-right or near the space bar). If you use Gboard (Google's keyboard), you can also press and hold the space bar to activate voice typing. Start speaking. Say punctuation aloud. Tap the microphone again to stop.

On Windows: Press Windows key + H to start voice typing. A toolbar appears. Start speaking. Say punctuation aloud. Press Windows + H again to stop. This works in any text field.

On Mac: Go to System Settings then Keyboard then Dictation and turn it on. Press the fn (function) key twice to start dictation. Start speaking. Press fn twice again to stop.

Tips for better accuracy: speak clearly and at a natural pace. Minimize background noise. If the app gets a word wrong, you can go back and correct it manually. You can mix voice typing and keyboard typing in the same message.

Voice typing also works great for quick searches: tap the search bar, tap the microphone, and say what you are looking for.`,
    steps: [
      { title: 'iPhone: Tap the microphone on the keyboard', content: 'When any keyboard is showing, tap the microphone icon near the space bar. Start speaking. Your words appear as text. Say "period" or "comma" for punctuation.' },
      { title: 'Android: Tap the microphone on the keyboard', content: 'Tap the microphone icon on the keyboard (top-right corner on Gboard). Or press and hold the space bar. Speak naturally and say punctuation aloud.' },
      { title: 'Windows: Press Windows + H', content: 'Press the Windows key and H at the same time. A dictation toolbar appears. Start speaking into your microphone. Press Windows + H again to stop.' },
      { title: 'Mac: Press fn key twice', content: 'First enable: System Settings then Keyboard then Dictation, then turn on. Then press the fn key twice to start dictating. Press fn twice again to stop.' },
      { title: 'Speak punctuation aloud', content: 'Say "period," "comma," "question mark," "exclamation point," "new line," or "new paragraph" and the device types those characters for you.' },
      { title: 'Edit and continue', content: 'If a word is wrong, tap it to select it and type the correction manually. Then tap the microphone again to continue dictating. You can mix typing and voice freely.' },
    ],
  },

  {
    slug: 'set-up-email-on-phone',
    title: 'How to Set Up Email on Your Phone',
    excerpt: 'Add your email account to your iPhone or Android phone so you can read and send email from anywhere.',
    category: 'how-to' as any,
    tags: ['email', 'phone setup', 'Gmail', 'Outlook', 'Yahoo', 'iPhone', 'Android'],
    readTime: '5 min',
    thumbnailEmoji: '📧',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Having email on your phone means you can read and respond to messages wherever you are — no need to sit at a computer. Setting it up takes about two minutes, and your phone handles the technical details automatically.

On iPhone, the built-in Mail app supports all major email providers. Go to Settings then Mail then Accounts then Add Account. You will see options for Microsoft Outlook, Google (Gmail), Yahoo, AOL, and others. Tap your email provider and sign in with your email address and password. The phone configures everything automatically. Once added, open the Mail app to see your inbox.

If your email provider is not listed, tap "Other" and enter your email address, password, and the mail server settings. Your email provider can give you these settings — search for "[your provider name] mail server settings" online.

On Android, the Gmail app handles most email accounts, not only Gmail. Open the Gmail app, tap your profile icon (or menu), then "Add another account." Choose your provider (Google, Outlook, Yahoo, etc.) and enter your email and password. The app handles the configuration automatically.

You can also use the official app for your email provider. Microsoft Outlook has its own app (great for Outlook, Hotmail, and work email). Yahoo Mail has its own app. These are free on both iPhone and Android.

After setting up, you will receive push notifications when new emails arrive (you can turn these off or customize them in your notification settings). Your email syncs automatically — messages you read on your phone are marked as read on your computer too, and messages you send from your phone appear in your Sent folder everywhere.

If you have multiple email accounts, you can add them all to the same app. The Mail app (iPhone) and Gmail app (Android) both support multiple accounts, and you can switch between them by tapping the account selector at the top of the inbox.`,
    steps: [
      { title: 'iPhone: Go to Mail settings', content: 'Settings then Mail then Accounts then Add Account. Tap your email provider (Google, Outlook, Yahoo, AOL) and sign in with your email and password.' },
      { title: 'Android: Use the Gmail app', content: 'Open Gmail, tap your profile icon, then "Add another account." Choose your provider and enter your email address and password.' },
      { title: 'Sign in and authorize', content: 'Enter your email address and password. You may see a permissions screen — tap "Allow" or "Accept" to let the mail app access your email.' },
      { title: 'Wait for sync to complete', content: 'Your phone downloads recent emails. This may take a minute or two. Once complete, your inbox appears in the mail app.' },
      { title: 'Consider the official app', content: `For the best experience, download your provider's official app: Outlook for Microsoft email, Gmail for Google email, Yahoo Mail for Yahoo. Free on both platforms.` },
      { title: 'Add multiple accounts', content: 'Repeat the process to add more email accounts. Both the Mail app (iPhone) and Gmail (Android) support multiple accounts — switch between them from the inbox.' },
    ],
  },

  {
    slug: 'schedule-text-message',
    title: 'How to Schedule a Text Message',
    excerpt: 'Write a text now and have it delivered later — schedule texts for birthdays, reminders, and perfect timing.',
    category: 'how-to' as any,
    tags: ['text message', 'schedule', 'SMS', 'iPhone', 'Android', 'messaging'],
    readTime: '4 min',
    thumbnailEmoji: '⏰',
    publishedAt: '2026-04-15',
    difficulty: 'Beginner',
    body: `Sometimes you want to send a text at a specific time — a birthday message at midnight, a reminder to a friend tomorrow morning, or a follow-up message during business hours. Scheduling a text lets you write it now and have it delivered later, automatically.

On iPhone (iOS 18 and later): Apple added scheduled sending to the Messages app. Open a conversation in Messages, type your message, then press and hold the send button (the blue arrow). A menu appears with options including "Send Later." Tap "Send Later" and choose the date and time you want the message delivered. The message sits in the conversation with a "Scheduled" label until it sends. You can edit or cancel it before the scheduled time by tapping on it.

On iPhone (iOS 17 and earlier): The built-in Messages app does not support scheduling. Use the Shortcuts app as a workaround or a third-party app.

On Android (Google Messages): Open a conversation, type your message, then press and hold the send button. A scheduling menu appears. Choose a suggested time or tap "Pick date and time" to set a custom time. The message shows a clock icon until it sends. Tap the scheduled message to edit or cancel it.

On Samsung Messages: Open a conversation, type your message, tap the plus (+) or the three dots, and look for "Schedule message." Set the date and time and confirm.

Scheduled messages only send if your phone is on and has a cellular or WiFi connection at the scheduled time. If your phone is off or in airplane mode, the message waits until the phone comes back online.

This feature is especially useful for: birthday and holiday messages at the right time, business-appropriate timing for professional texts, reminders for friends or family members, and follow-up messages you do not want to forget.`,
    steps: [
      { title: 'iPhone (iOS 18+): Press and hold the send button', content: 'Type your message in Messages. Press and hold the blue send arrow. Tap "Send Later" and choose the date and time for delivery.' },
      { title: 'Android (Google Messages): Press and hold send', content: 'Type your message. Press and hold the send button. Choose a suggested time or tap "Pick date and time." Confirm your selection.' },
      { title: 'Samsung Messages: Use the schedule option', content: 'Type your message. Tap the plus (+) or three dots menu. Select "Schedule message." Set the date and time, then confirm.' },
      { title: 'Review your scheduled message', content: 'The message appears in the conversation with a "Scheduled" label or clock icon. Tap it to edit the message text or change the delivery time.' },
      { title: 'Cancel if needed', content: 'Tap the scheduled message and choose "Delete" or "Cancel" to prevent it from sending. You can always reschedule or send it manually.' },
      { title: 'Make sure your phone is on', content: 'Scheduled messages only send when your phone is powered on and connected. Leave your phone on and connected to WiFi or cellular at the scheduled time.' },
    ],
  },

  {
    slug: 'turn-off-location-tracking-phone',
    title: 'How to Turn Off Location Tracking on Your Phone',
    excerpt: 'Control which apps can track your location and when — protect your privacy on iPhone and Android.',
    category: 'how-to' as any,
    tags: ['location', 'privacy', 'tracking', 'GPS', 'iPhone', 'Android', 'settings'],
    readTime: '5 min',
    thumbnailEmoji: '📍',
    publishedAt: '2026-04-15',
    difficulty: 'Intermediate',
    body: `Your phone tracks your location throughout the day, and many apps request access to that information. Some apps need your location to work (like maps and weather), but others (like games, shopping apps, and social media) collect it for advertising purposes. Taking control of which apps can see your location is one of the most important privacy steps you can take.

On iPhone: Go to Settings then Privacy and Security then Location Services. At the top, you see the master toggle — turning this off disables all location tracking for all apps. But a better approach is to go app by app. Tap each app in the list and choose: "Never" (the app cannot access your location), "Ask Next Time or When I Share" (the app asks each time), "While Using the App" (only when the app is open), or "Always" (the app can track your location even when it is not open).

For most apps, "While Using the App" or "Never" is the right choice. The only apps that genuinely need "Always" are navigation apps you use for driving, family location-sharing apps, and fitness apps that track outdoor workouts.

Also on iPhone: scroll down in Location Services and tap "System Services." Turn off "Significant Locations" to stop Apple from tracking the places you visit frequently. Turn off "Location-Based Apple Ads" to stop location-targeted advertising.

On Android: Go to Settings then Location. The master toggle at the top turns all location tracking on or off. For per-app control, tap "App location permissions" (or Settings then Apps, select an app, then Permissions then Location). For each app, choose: "Allow all the time," "Allow only while using the app," "Ask every time," or "Don't allow."

Android also lets you see which apps recently accessed your location: Settings then Location then "App location permissions" shows a list with recent usage. This helps you identify apps that are tracking you without your awareness.

Review these settings periodically. When you install new apps, they often ask for location permission during setup. It is fine to deny location access and see if the app works without it — many apps request location but do not actually need it.`,
    steps: [
      { title: 'Open location settings', content: 'iPhone: Settings then Privacy and Security then Location Services. Android: Settings then Location. You will see the master toggle and a list of apps.' },
      { title: 'Review each app individually', content: `Go through the list and change each app's location access. Most apps work fine with "While Using" or "Never." Only maps and navigation truly need "Always."` },
      { title: 'Turn off location for apps that do not need it', content: 'Games, shopping apps, news apps, and social media rarely need your location. Set them to "Never" and see if they still work as expected.' },
      { title: 'iPhone: Disable Significant Locations', content: 'Settings then Privacy and Security then Location Services then System Services: turn off "Significant Locations" and "Location-Based Apple Ads."' },
      { title: 'Android: Check recent location access', content: 'Settings then Location then "App location permissions." See which apps recently accessed your location. Revoke access from any you do not recognize or trust.' },
      { title: 'Revisit after installing new apps', content: 'New apps often request location access during setup. Deny it initially and only grant access if the app genuinely needs it to function.' },
    ],
  },

  // ═══════════════════════════════════════════
  // WINDOWS ADVANCED (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'check-windows-updates',
    title: 'How to Check for Windows Updates',
    excerpt: 'Keep your Windows computer secure and running well by checking for and installing the latest updates from Microsoft.',
    category: 'windows-guides',
    tags: ['windows', 'updates', 'security', 'microsoft', 'maintenance'],
    readTime: '5 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `Windows updates fix security vulnerabilities, patch bugs, and sometimes add new features to your computer. Microsoft releases updates regularly, and keeping your computer updated is one of the most important things you can do to stay safe online. Outdated computers are much more vulnerable to viruses and hackers.

To check for updates, click the Start button (the Windows icon in the bottom-left or bottom-center of your screen) and then click the gear icon to open Settings. In Settings, click "Windows Update" from the left sidebar. On this page, you will see whether your computer is up to date or if updates are available.

Click the "Check for updates" button. Windows will connect to Microsoft's servers and look for any available updates. This process takes a minute or two. If updates are found, they will begin downloading automatically. Some updates are small and install quickly, while others — especially feature updates — can take 30 minutes or more.

After updates download, you may need to restart your computer to complete the installation. Windows will show a "Restart now" button, or you can schedule the restart for a time that works better for you by clicking "Schedule the restart" and picking a time when you will not be using the computer.

You can also check your update history to see what has been installed recently. On the Windows Update page, click "Update history" to see a list of all recent updates, including security updates, driver updates, and feature updates.

If an update fails to install, try checking for updates again — sometimes a second attempt succeeds. If it keeps failing, note the update number (it starts with KB followed by numbers) and search for it on Microsoft's support website for specific troubleshooting steps.

Windows is set to download updates automatically by default. However, it is good practice to manually check at least once a month to make sure nothing was missed, especially if you do not leave your computer on overnight when automatic updates typically run.`,
    steps: [
      { title: 'Open Settings', content: 'Click the Start button (Windows icon) at the bottom of your screen, then click the gear icon to open Settings. You can also press the Windows key + I on your keyboard as a shortcut.' },
      { title: 'Go to Windows Update', content: 'In the Settings window, click "Windows Update" in the left sidebar. This page shows your current update status and when updates were last checked.' },
      { title: 'Click Check for updates', content: 'Click the "Check for updates" button. Windows will search for available updates. Wait a minute or two for the search to complete. Any found updates will begin downloading automatically.' },
      { title: 'Install the updates', content: 'If updates are found, they will download and prepare for installation. Some install in the background while you work. Others require a restart — you will see a "Restart now" button when this is needed.' },
      { title: 'Restart your computer', content: 'When prompted, save your work and click "Restart now." Your computer will restart and install the updates. This can take anywhere from a few minutes to 30 minutes depending on the size of the updates.' },
      { title: 'Verify updates are installed', content: 'After restarting, go back to Settings then Windows Update. It should say "You are up to date." Click "Update history" to confirm the latest updates were installed successfully.' },
    ],
  },

  {
    slug: 'uninstall-programs-windows',
    title: 'How to Uninstall Programs on Windows',
    excerpt: 'Remove programs you no longer use from your Windows computer to free up storage space and keep things running smoothly.',
    category: 'windows-guides',
    tags: ['windows', 'uninstall', 'storage', 'programs', 'cleanup'],
    readTime: '5 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `Over time, your Windows computer accumulates programs you no longer use. These take up storage space and sometimes run background processes that slow down your computer. Uninstalling programs you do not need is one of the best ways to keep your computer running well.

To uninstall a program, click the Start button and open Settings (the gear icon). Then click "Apps" in the left sidebar, and then "Installed apps." You will see a list of every program installed on your computer, along with how much space each one uses and when it was installed.

You can sort this list by size to find the biggest programs, or by install date to find programs you installed recently. To uninstall a program, click the three dots (or the menu icon) next to the program name and select "Uninstall." A confirmation window will appear — click "Uninstall" again to confirm.

Some programs have their own uninstaller that opens when you click uninstall. Follow the prompts in that window to complete the removal. Most will ask if you want to keep your settings or remove everything — if you do not plan to reinstall the program, choose to remove everything.

Be careful about what you uninstall. Do not remove programs from your computer manufacturer (like Dell, HP, or Lenovo system tools) unless you know what they do. Do not remove Microsoft Visual C++ Redistributable packages or .NET Framework — these are required by other programs to function. If you are unsure about a program, search for its name online before removing it.

After uninstalling programs, your computer may need a restart to fully complete the removal. You should also empty your Recycle Bin afterward by right-clicking its icon on the desktop and selecting "Empty Recycle Bin" to reclaim all the freed storage space.

A good practice is to review your installed programs every few months and remove anything you have not used. This keeps your computer lean and helps it start up faster.`,
    steps: [
      { title: 'Open Settings', content: 'Click the Start button and then click the gear icon for Settings. You can also press Windows key + I on your keyboard.' },
      { title: 'Navigate to Installed apps', content: 'Click "Apps" in the left sidebar, then click "Installed apps." A list of all programs on your computer will appear with their sizes and install dates.' },
      { title: 'Find the program to remove', content: 'Scroll through the list or use the search bar at the top to find the program. You can also sort by size or date installed using the "Sort by" dropdown.' },
      { title: 'Uninstall the program', content: `Click the three-dot menu icon next to the program name and select "Uninstall." Click "Uninstall" again when asked to confirm. Follow any additional prompts from the program's own uninstaller.` },
      { title: 'Restart if prompted', content: 'Some programs require a restart to fully remove. Save your work and restart your computer if Windows asks you to.' },
      { title: 'Empty the Recycle Bin', content: 'Right-click the Recycle Bin icon on your desktop and select "Empty Recycle Bin." This permanently deletes the removed program files and frees up the storage space.' },
    ],
  },

  {
    slug: 'change-default-browser-windows',
    title: 'How to Change Your Default Browser on Windows',
    excerpt: 'Set Chrome, Firefox, or another browser as your default so all links and web pages open in the browser you prefer.',
    category: 'windows-guides',
    tags: ['windows', 'browser', 'default apps', 'chrome', 'firefox'],
    readTime: '4 min',
    thumbnailEmoji: '🌐',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `When you click a link in an email or document, Windows opens it in your default browser. Out of the box, that default is Microsoft Edge. If you prefer to use Google Chrome, Mozilla Firefox, or another browser, you can change this setting so all links automatically open in your preferred browser.

First, make sure the browser you want to use is already installed on your computer. If you have not installed it yet, open Edge, go to the browser's website (like google.com/chrome or mozilla.org/firefox), download the installer, and run it.

To change your default browser, open Settings by clicking the Start button and then the gear icon. Click "Apps" in the left sidebar, then click "Default apps." In the search bar at the top of the Default Apps page, type the name of the browser you want to use as your default — for example, "Chrome" or "Firefox."

Click on the browser name when it appears in the search results. You will see a list of file types and link types that this browser can handle. At the top, there should be a "Set default" button — click it. This tells Windows to use this browser for opening web links, HTML files, and other web-related content.

On Windows 11, you may need to change individual file types one by one. Click on each file type (like .htm, .html, .pdf) and select your preferred browser from the list. For the most important setting, make sure "HTTPS" and "HTTP" links are set to your chosen browser — these control what happens when you click web links.

After making these changes, test by clicking a link in an email or document. It should now open in your preferred browser instead of Edge. If any links still open in Edge, go back to Default Apps and make sure all the link types are set correctly.

Some browsers will ask you to set them as the default the first time you open them. You can use that prompt to go directly to the settings page, which saves a few steps.`,
    steps: [
      { title: 'Install your preferred browser', content: `If you have not already, download and install the browser you want to use. Open Edge, go to the browser's website (google.com/chrome or mozilla.org/firefox), and follow the download instructions.` },
      { title: 'Open Settings', content: 'Click the Start button and then click the gear icon for Settings, or press Windows key + I on your keyboard.' },
      { title: 'Go to Default apps', content: 'Click "Apps" in the left sidebar, then click "Default apps." This page lets you choose which apps handle different types of files and links.' },
      { title: 'Search for your browser', content: 'In the search bar at the top of the Default Apps page, type the name of your preferred browser (for example, "Chrome"). Click on the browser when it appears in the results.' },
      { title: 'Set it as default', content: `Click the "Set default" button at the top of the browser's page. On Windows 11, you may also need to click individual file types like .htm, .html, HTTP, and HTTPS and select your browser for each one.` },
      { title: 'Test the change', content: 'Click any link in an email or document. It should now open in your newly selected default browser. If it still opens in Edge, return to Default Apps and verify all link types are assigned correctly.' },
    ],
  },

  {
    slug: 'create-user-account-windows',
    title: 'How to Create a User Account on Windows',
    excerpt: 'Add a new user account on your Windows computer so family members or guests can have their own login and personal settings.',
    category: 'windows-guides',
    tags: ['windows', 'user accounts', 'family', 'security', 'sharing'],
    readTime: '6 min',
    thumbnailEmoji: '👤',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `If multiple people use the same Windows computer, creating separate user accounts is the best way to keep everyone's files, settings, and desktop organized independently. Each person gets their own login, their own desktop background, their own browser bookmarks, and their own documents folder. One person's changes do not affect another person's experience.

There are two types of accounts: Microsoft accounts and local accounts. A Microsoft account connects to an email address (like outlook.com or hotmail.com) and syncs settings across devices. A local account works only on that one computer and does not require an email address. For most family members, a Microsoft account is recommended because it enables features like password recovery and parental controls.

To create a new account, open Settings by clicking the Start button and then the gear icon. Click "Accounts" in the left sidebar, then click "Other users" (or "Family & other users" on some versions). Under "Other users," click the "Add account" button.

If the person has a Microsoft account (an Outlook, Hotmail, or Live email address), enter it and click Next. They will receive an email to verify the account. If they do not have a Microsoft account and you want to create a local account instead, click "I don't have this person's sign-in information," then click "Add a user without a Microsoft account." Enter a username and password for the new local account.

By default, new accounts are created as "Standard Users," which means they can use the computer but cannot install programs or change system settings. This is appropriate for most family members and guests. If you need to give someone full control, you can change their account type to "Administrator" — but be cautious with this, as administrators can make changes that affect the entire computer.

After creating the account, the new user can sign in from the Windows login screen by clicking their name and entering their password. The first time they sign in, Windows will set up their profile, which takes a few minutes. After that, they will have their own clean desktop and personal settings.`,
    steps: [
      { title: 'Open Settings', content: 'Click the Start button and then the gear icon for Settings. You can also press Windows key + I on your keyboard.' },
      { title: 'Go to Accounts', content: 'Click "Accounts" in the left sidebar, then click "Other users" or "Family & other users." This page shows all user accounts on the computer.' },
      { title: 'Click Add account', content: 'Under "Other users," click the "Add account" button. A window will appear asking for a Microsoft account email address.' },
      { title: 'Choose account type', content: `Enter a Microsoft email address if the person has one. For a local account without an email, click "I don't have this person's sign-in information" then "Add a user without a Microsoft account." Enter a username and password.` },
      { title: 'Set the account type', content: 'New accounts default to "Standard User," which is appropriate for most people. To change it, click on the new account name, click "Change account type," and select Administrator if full access is needed.' },
      { title: 'Have the new user sign in', content: 'At the Windows login screen, the new user clicks their name and enters their password. The first sign-in takes a few minutes while Windows sets up their personal profile and desktop.' },
    ],
  },

  {
    slug: 'use-windows-defender',
    title: 'How to Use Windows Defender to Protect Your Computer',
    excerpt: 'Windows Defender is free antivirus software built into Windows. Learn how to run scans and keep your computer protected.',
    category: 'windows-guides',
    tags: ['windows', 'security', 'antivirus', 'windows defender', 'malware'],
    readTime: '6 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `Windows Defender (also called Windows Security or Microsoft Defender) is free antivirus and security software that comes built into every Windows 10 and Windows 11 computer. It runs in the background, protecting you from viruses, malware, spyware, and other threats — and for most people, it provides all the protection you need without purchasing additional antivirus software.

To open Windows Defender, click the Start button and type "Windows Security" in the search bar, then click on the Windows Security app. The main dashboard shows you an overview of your security status. Green check marks mean everything is good. Yellow or red indicators mean something needs your attention.

The most important section is "Virus & threat protection." Click on it to see when your last scan was performed and whether any threats were found. Under "Current threats," you will see if anything suspicious has been detected. Windows Defender runs a quick scan automatically, but you can run a manual scan anytime by clicking "Quick scan." A quick scan checks the most common places where threats hide and takes about 5 to 10 minutes.

For a more thorough check, click "Scan options" and select "Full scan." A full scan checks every file and program on your computer and can take an hour or more depending on how many files you have. Run a full scan if your computer is behaving strangely, if you recently downloaded something suspicious, or as a monthly maintenance step.

Under "Virus & threat protection settings," click "Manage settings" to see your protection options. Make sure "Real-time protection" is turned on — this continuously monitors your computer and blocks threats as they appear. Also ensure "Cloud-delivered protection" and "Automatic sample submission" are turned on for the best detection rates.

The "Firewall & network protection" section controls your Windows Firewall, which monitors internet traffic and blocks unauthorized connections. Make sure the firewall is turned on for all network types (Domain, Private, and Public). Do not turn off the firewall unless specifically instructed to do so by a trusted tech support professional.

Windows Defender updates its virus definitions automatically through Windows Update. You do not need to manually update it, but you can click "Check for updates" in the Virus & threat protection page to ensure you have the latest definitions.`,
    steps: [
      { title: 'Open Windows Security', content: 'Click the Start button and type "Windows Security" in the search bar. Click the Windows Security app when it appears. The dashboard shows your overall protection status with green, yellow, or red indicators.' },
      { title: 'Run a Quick scan', content: 'Click "Virus & threat protection" and then click the "Quick scan" button. The scan checks common threat locations and takes about 5 to 10 minutes. Any detected threats will be shown with options to remove them.' },
      { title: 'Run a Full scan when needed', content: 'Under "Virus & threat protection," click "Scan options" and select "Full scan," then click "Scan now." This checks every file on your computer and takes an hour or more. Do this monthly or if you suspect a problem.' },
      { title: 'Check your protection settings', content: 'In "Virus & threat protection," click "Manage settings." Make sure Real-time protection, Cloud-delivered protection, and Automatic sample submission are all turned on.' },
      { title: 'Verify your firewall is on', content: 'Go back to the main Windows Security dashboard and click "Firewall & network protection." Make sure the firewall is turned on for Domain, Private, and Public networks.' },
      { title: 'Remove any detected threats', content: 'If Windows Defender finds a threat, it will show options to Quarantine, Remove, or Allow. Choose "Remove" for confirmed threats. If unsure, choose "Quarantine" — this isolates the file without deleting it.' },
    ],
  },

  {
    slug: 'set-up-windows-backup',
    title: 'How to Set Up Windows Backup',
    excerpt: 'Protect your important files by setting up automatic backups on your Windows computer using built-in backup tools.',
    category: 'windows-guides',
    tags: ['windows', 'backup', 'file protection', 'onedrive', 'recovery'],
    readTime: '7 min',
    thumbnailEmoji: '💾',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `Backing up your computer means creating copies of your important files so you can recover them if something goes wrong — whether your hard drive fails, your computer gets a virus, or you accidentally delete something important. Windows has built-in backup tools that make this process straightforward once you set them up.

Windows 11 offers two main backup approaches: OneDrive cloud backup and File History (for backing up to an external drive). Using both together gives you the strongest protection.

For cloud backup with OneDrive, open Settings, click "Accounts," then "Windows backup." Here you will see options to back up your folders (Desktop, Documents, and Pictures) to OneDrive. Toggle on the folders you want to back up. Files in these folders will automatically sync to the cloud, meaning they are saved online in your Microsoft account. You get 5 GB of free OneDrive storage. If you need more, Microsoft 365 subscriptions include 1 TB of OneDrive storage.

For local backup with File History, you need an external hard drive or USB drive. Plug in your external drive, then open Settings and go to "System" then "Storage" then "Advanced storage settings" then "Backup options." Under "Back up using File History," click "Add a drive" and select your external drive. Once set up, File History automatically saves copies of your files at regular intervals.

You can customize how often File History runs and how long it keeps old copies. Click "More options" under File History to adjust these settings. Backing up every hour and keeping saved versions for at least 3 months is a good balance between protection and storage use.

To restore files from a File History backup, open File Explorer, navigate to the folder where the file was, click the "Home" tab, and click "History." You can browse through previous versions of your files and restore the one you need.

The most important rule of backups: they only protect you if they are running. Check your backup settings once a month to make sure everything is still working. If you use an external drive for File History, keep it plugged in or plug it in regularly so backups can run.`,
    steps: [
      { title: 'Set up OneDrive cloud backup', content: 'Open Settings, click "Accounts," then "Windows backup." Toggle on Desktop, Documents, and Pictures to back up these folders to OneDrive automatically. You get 5 GB free with your Microsoft account.' },
      { title: 'Connect an external drive', content: 'Plug a USB external hard drive into your computer. This drive will store local backup copies of your files using File History.' },
      { title: 'Enable File History', content: 'Go to Settings then System then Storage then Advanced storage settings then Backup options. Click "Add a drive" and select your external hard drive. File History will begin backing up your files.' },
      { title: 'Customize backup frequency', content: 'Click "More options" under File History settings. Set how often backups run (every hour is recommended) and how long old versions are kept (at least 3 months). You can also choose which folders to include.' },
      { title: 'Test restoring a file', content: 'Open File Explorer, navigate to any folder, click the "Home" tab, and click "History." Browse through saved versions of your files to confirm the backup is working. Select a file and click the green restore button to bring it back.' },
      { title: 'Check backups monthly', content: 'Once a month, open your backup settings and verify that backups are running. If using an external drive, make sure it is still connected and has available storage space.' },
    ],
  },

  {
    slug: 'pin-apps-to-taskbar-windows',
    title: 'How to Pin Apps to the Taskbar on Windows',
    excerpt: 'Keep your most-used programs on the Windows taskbar at the bottom of your screen for quick one-click access anytime.',
    category: 'windows-guides',
    tags: ['windows', 'taskbar', 'shortcuts', 'productivity', 'customization'],
    readTime: '4 min',
    thumbnailEmoji: '📌',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `The taskbar is the bar that runs along the bottom of your Windows screen. It shows the programs that are currently running and can also hold shortcuts to your favorite apps so you can open them with one click — without searching through the Start menu. Pinning your most-used apps to the taskbar is one of the quickest ways to customize your computer and save time.

To pin an app that is currently open and running, right-click its icon in the taskbar. A small menu will appear — click "Pin to taskbar." The app's icon will stay in the taskbar even after you close the program, ready for you to open it again with a single click.

To pin an app from the Start menu, click the Start button and find the app in your list of programs. Right-click the app's name and select "Pin to taskbar." The app's icon will appear in the taskbar. You can do this for any app — your web browser, email, word processor, photo viewer, or anything else you use regularly.

You can rearrange the order of pinned apps by clicking and dragging their icons left or right along the taskbar. Put your most frequently used apps on the left side where they are closest to the Start button and most visible.

To remove a pinned app from the taskbar (without uninstalling it from your computer), right-click its icon in the taskbar and select "Unpin from taskbar." The icon will disappear from the taskbar, but the program remains installed on your computer and available in the Start menu.

A good approach is to pin 5 to 8 of your most-used apps. Common choices include your web browser, email app, File Explorer (for managing files), Settings, and any apps you use daily. Having too many pinned apps can make the taskbar crowded and defeat the purpose of quick access.`,
    steps: [
      { title: 'Pin an open app', content: 'With the app running, look for its icon in the taskbar at the bottom of your screen. Right-click the icon and select "Pin to taskbar." It will stay there even after you close the app.' },
      { title: 'Pin an app from the Start menu', content: 'Click the Start button and find the app in your list of programs. Right-click the app name and select "Pin to taskbar." The icon will appear in the taskbar.' },
      { title: 'Rearrange pinned apps', content: 'Click and hold any pinned app icon in the taskbar, then drag it left or right to change its position. Place your most-used apps toward the left for quick access.' },
      { title: 'Unpin an app you no longer need', content: 'Right-click the app icon in the taskbar and select "Unpin from taskbar." This removes the shortcut but does not uninstall the app from your computer.' },
      { title: 'Choose your essential apps', content: 'Pin 5 to 8 of your most-used apps. Common choices include your web browser, email, File Explorer, and any apps you open daily. Too many pinned apps makes the taskbar cluttered.' },
      { title: 'Find pinned apps quickly', content: 'Your pinned apps are always visible in the taskbar. Click once on any pinned icon to open the app. If the app is already open, clicking its icon brings it to the front of your screen.' },
    ],
  },

  {
    slug: 'customize-start-menu-windows',
    title: 'How to Customize the Start Menu on Windows',
    excerpt: 'Organize your Windows Start menu by pinning your favorite apps, removing clutter, and arranging everything how you want it.',
    category: 'windows-guides',
    tags: ['windows', 'start menu', 'customization', 'organization', 'productivity'],
    readTime: '5 min',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `The Start menu is the gateway to everything on your Windows computer. When you click the Start button (the Windows icon at the bottom of your screen), you see a menu with pinned apps, recommended files, and a list of all your programs. Customizing this menu so it shows what you actually use makes your computer much more pleasant to work with.

In Windows 11, the Start menu has two main sections: "Pinned" at the top (showing app icons you have pinned there) and "Recommended" at the bottom (showing recently opened files and apps). You can pin any app to the Start menu by right-clicking it in the All Apps list and selecting "Pin to Start."

To remove an app from the pinned section, right-click its icon in the Start menu and select "Unpin from Start." This does not uninstall the app — it only removes it from the pinned area. The app remains available in the All Apps list.

You can rearrange pinned apps by clicking and dragging them to different positions. Group related apps together — for example, put all your communication apps (email, video calling, messaging) near each other and all your productivity apps (word processor, spreadsheet, calendar) together.

To change how much space the Start menu gives to pinned apps versus recommendations, go to Settings then Personalization then Start. Here you can choose "More pins" to show more pinned apps, "More recommendations" to show more recent files, or "Default" for a balanced view. If you do not find the Recommended section useful, choose "More pins" to maximize your pinned app space.

You can also control which folders appear next to the power button at the bottom of the Start menu. Go to Settings then Personalization then Start then Folders. Toggle on shortcuts for Settings, File Explorer, Documents, Downloads, and other locations you access frequently. These small icons appear at the bottom of the Start menu and give you one-click access to important folders.

The Start menu also includes a search bar. If you cannot find an app, start typing its name in the search bar and it will appear in the results. This is often faster than scrolling through the All Apps list.`,
    steps: [
      { title: 'Pin apps to the Start menu', content: 'Click the Start button and then click "All apps." Find the app you want to pin, right-click it, and select "Pin to Start." The app icon will appear in the Pinned section of the Start menu.' },
      { title: 'Unpin apps you do not use', content: 'In the Start menu, right-click any pinned app you do not need and select "Unpin from Start." This removes it from the pinned area but does not uninstall it from your computer.' },
      { title: 'Rearrange your pinned apps', content: 'Click and drag pinned app icons to rearrange them. Group related apps together — communication apps in one area, productivity tools in another — so they are organized logically.' },
      { title: 'Adjust the Start menu layout', content: 'Go to Settings then Personalization then Start. Choose "More pins" to see more app icons, "More recommendations" for recent files, or "Default" for a balanced view.' },
      { title: 'Add folder shortcuts', content: 'Go to Settings then Personalization then Start then Folders. Toggle on shortcuts for Settings, File Explorer, Documents, Downloads, and other frequently used locations. These appear as small icons at the bottom of the Start menu.' },
      { title: 'Use search to find anything', content: 'Click the Start button and start typing the name of any app, setting, or file. The search bar shows results instantly, making it the fastest way to find anything on your computer.' },
    ],
  },

  // ═══════════════════════════════════════════
  // MAC ADVANCED (10 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-time-machine-backup-mac',
    title: 'How to Use Time Machine Backup on Mac',
    excerpt: 'Set up Time Machine to automatically back up your Mac so you can restore files or your entire system if something goes wrong.',
    category: 'mac-guides',
    tags: ['mac', 'time machine', 'backup', 'data protection', 'recovery'],
    readTime: '7 min',
    thumbnailEmoji: '⏰',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `Time Machine is Apple's built-in backup tool that automatically saves copies of everything on your Mac — your files, photos, music, apps, and system settings. If you accidentally delete a file, your hard drive fails, or you need to set up a new Mac, Time Machine lets you restore everything exactly as it was.

To use Time Machine, you need an external hard drive or a network-attached storage (NAS) device. An external USB hard drive with at least twice the storage capacity of your Mac's internal drive is recommended. For example, if your Mac has 256 GB of storage, get an external drive with at least 512 GB. External drives designed for Mac backup are widely available and affordable.

To set up Time Machine, plug in your external hard drive. Your Mac may ask if you want to use the drive for Time Machine — click "Use as Backup Disk." If it does not ask, go to System Settings (click the Apple menu in the top-left corner, then System Settings), click "General" in the sidebar, then click "Time Machine." Click the "+" button to add your external drive as a backup disk.

Once set up, Time Machine runs automatically in the background. It creates hourly backups for the past 24 hours, daily backups for the past month, and weekly backups for everything older. When the external drive gets full, Time Machine automatically deletes the oldest backups to make room for new ones.

To restore a deleted or changed file, open the folder where the file was located, then click the Time Machine icon in the menu bar and select "Browse Time Machine Backups." You will see a visual timeline on the right side of the screen. Use the arrows or timeline to go back in time. When you find the file you want, select it and click "Restore."

If you need to restore your entire Mac (for example, after replacing a hard drive or setting up a new Mac), restart your computer and hold down Command + R to enter Recovery Mode. From there, select "Restore from Time Machine Backup" and follow the on-screen instructions.

Keep your Time Machine drive connected whenever possible. If you use a desktop Mac, leave it plugged in all the time. If you use a MacBook, plug it in regularly — at least once a week — so Time Machine can run its backups.`,
    steps: [
      { title: 'Get an external hard drive', content: 'Purchase an external USB hard drive with at least twice the storage of your Mac. If your Mac has 256 GB, get a 512 GB or larger external drive. Plug it into your Mac.' },
      { title: 'Set up Time Machine', content: 'When your Mac asks if you want to use the drive for Time Machine, click "Use as Backup Disk." If it does not ask, go to System Settings then General then Time Machine and click the "+" button to add the drive.' },
      { title: 'Let the first backup complete', content: 'The first backup copies everything on your Mac and may take several hours depending on how much data you have. Let it run to completion without unplugging the drive.' },
      { title: 'Keep the drive connected', content: 'Time Machine backs up automatically every hour when the external drive is connected. For desktop Macs, leave it plugged in. For MacBooks, connect it regularly — at least once a week.' },
      { title: 'Restore individual files', content: 'To recover a deleted file, open the folder where it was, click the Time Machine icon in the menu bar, and select "Browse Time Machine Backups." Navigate back in time, select the file, and click "Restore."' },
      { title: 'Verify backups are running', content: 'Click the Time Machine icon in the menu bar to see when the last backup was completed. If backups have not run recently, check that your external drive is connected and has available space.' },
    ],
  },

  {
    slug: 'install-apps-outside-app-store-mac',
    title: 'How to Install Apps Outside the App Store on Mac',
    excerpt: 'Download and install Mac apps from the internet when they are not available in the App Store, while staying safe.',
    category: 'mac-guides',
    tags: ['mac', 'apps', 'installation', 'gatekeeper', 'security'],
    readTime: '6 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `The Mac App Store has thousands of apps, but many popular programs — like Google Chrome, Zoom, Microsoft Office, and others — need to be downloaded directly from their developer's website. macOS includes a security feature called Gatekeeper that protects you from installing malicious software, but you need to know how to work with it properly when installing legitimate apps from the internet.

To install an app from outside the App Store, first go to the developer's official website using your web browser. For example, to install Google Chrome, go to google.com/chrome. Look for a download button and click it. The file will download to your Downloads folder and will typically be a .dmg file (disk image) or a .pkg file (installer package).

For .dmg files: Double-click the downloaded file to open it. A window will appear showing the app icon and usually an arrow pointing to the Applications folder. Drag the app icon to the Applications folder to install it. Then close the window and eject the disk image by right-clicking it on your desktop and selecting "Eject." The app is now in your Applications folder and ready to use.

For .pkg files: Double-click the downloaded file to run the installer. Follow the on-screen prompts, clicking "Continue" and "Install" when asked. You may need to enter your Mac's password to authorize the installation.

When you open an app downloaded from the internet for the first time, macOS may show a warning saying the app "cannot be opened because it is from an unidentified developer" or that it "was downloaded from the internet." This is Gatekeeper protecting you. To open the app, right-click (or Control-click) the app icon and select "Open" from the menu. A new dialog will appear with an "Open" button — click it. You only need to do this the first time you open the app.

If you get a message that the app "is damaged and can't be opened," this often means the app is from a developer that Apple has not verified. Go to System Settings, click "Privacy & Security," and scroll down to the "Security" section. You may see a message about the blocked app with an "Open Anyway" button. Click it to allow the app.

Stay safe by only downloading apps from official developer websites. Avoid downloading software from unfamiliar third-party sites, as these may include malware or unwanted bundled programs. When in doubt, search for the app's official website and download directly from there.`,
    steps: [
      { title: 'Download from the official website', content: `Open your web browser and go to the app developer's official website. Click the download button. The file will save to your Downloads folder as a .dmg or .pkg file.` },
      { title: 'Open a .dmg file', content: 'Double-click the .dmg file in your Downloads folder. A window will appear with the app icon and an arrow pointing to Applications. Drag the app icon to the Applications folder.' },
      { title: 'Run a .pkg installer', content: 'For .pkg files, double-click the file and follow the on-screen prompts. Click "Continue" and "Install" when asked. Enter your Mac password if prompted.' },
      { title: 'Handle the Gatekeeper warning', content: 'The first time you open the app, macOS may warn you it was downloaded from the internet. Right-click (or Control-click) the app and select "Open." Click "Open" again in the dialog that appears.' },
      { title: 'Eject and clean up', content: 'After installing from a .dmg file, right-click the disk image icon on your desktop and select "Eject." You can also delete the .dmg or .pkg file from your Downloads folder to free up space.' },
      { title: 'Stay safe with downloads', content: 'Only download apps from official developer websites. Avoid third-party download sites that may bundle unwanted software. If an app seems suspicious, do not install it — search online for reviews first.' },
    ],
  },

  {
    slug: 'customize-dock-mac',
    title: 'How to Customize the Dock on Mac',
    excerpt: 'Add, remove, and rearrange apps on your Mac Dock to keep your most-used programs within one-click reach at all times.',
    category: 'mac-guides',
    tags: ['mac', 'dock', 'customization', 'shortcuts', 'productivity'],
    readTime: '5 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `The Dock is the row of app icons that appears at the bottom (or side) of your Mac's screen. It gives you one-click access to your most-used apps and shows which apps are currently running (indicated by a small dot beneath the icon). Customizing your Dock so it contains only the apps you use regularly makes your Mac faster and more pleasant to work with.

To add an app to the Dock, open Finder, click "Applications" in the sidebar, find the app you want, and drag its icon down to the Dock. You can also add a currently running app by right-clicking its icon in the Dock and selecting "Options" then "Keep in Dock."

To remove an app from the Dock, click and drag its icon out of the Dock toward the center of your screen. Hold it there for a moment until you see the word "Remove" appear, then release. The icon will disappear with a small poof animation. This does not delete or uninstall the app — it only removes the shortcut from your Dock. The app is still available in your Applications folder.

You can rearrange apps in the Dock by clicking and dragging them left or right to new positions. The Dock has a divider line (a thin vertical line) that separates apps on the left from folders and files on the right. You can drag folders (like Downloads or Documents) to the right side of this divider for quick access.

To change the Dock's size, go to System Settings (click the Apple menu, then System Settings), click "Desktop & Dock." Use the "Size" slider to make the Dock icons larger or smaller. You can also turn on "Magnification," which makes Dock icons grow larger when you hover your mouse over them — helpful if you prefer a small Dock but want to see icons clearly.

You can also change where the Dock appears on your screen. In the Desktop & Dock settings, find "Position on screen" and choose Bottom, Left, or Right. Most people keep it at the bottom, but placing it on the left or right side gives you more vertical screen space, which is useful on smaller screens.

If you find the Dock distracting, turn on "Automatically hide and show the Dock." When enabled, the Dock hides off-screen until you move your mouse to the edge where it is positioned. This gives you full use of your screen while still having quick access to the Dock when you need it.`,
    steps: [
      { title: 'Add an app to the Dock', content: 'Open Finder and click Applications. Find the app you want and drag its icon to the Dock at the bottom of your screen. You can also right-click a running app in the Dock and select Options then Keep in Dock.' },
      { title: 'Remove an app from the Dock', content: 'Click and drag the app icon out of the Dock toward the center of your screen. Hold it until "Remove" appears, then release. The app is not uninstalled — only the Dock shortcut is removed.' },
      { title: 'Rearrange Dock icons', content: 'Click and drag any app icon left or right to change its position in the Dock. Place your most frequently used apps where they are most accessible to you.' },
      { title: 'Change Dock size', content: 'Go to System Settings then Desktop & Dock. Use the "Size" slider to adjust icon size. Turn on "Magnification" if you want icons to enlarge when you hover over them.' },
      { title: 'Move the Dock position', content: 'In Desktop & Dock settings, find "Position on screen" and choose Bottom, Left, or Right. Placing the Dock on the side gives you more vertical space on your screen.' },
      { title: 'Auto-hide the Dock', content: 'In Desktop & Dock settings, toggle on "Automatically hide and show the Dock." The Dock will hide when not in use and reappear when you move your mouse to the screen edge.' },
    ],
  },

  {
    slug: 'set-up-multiple-desktops-mac',
    title: 'How to Set Up Multiple Desktops on Mac',
    excerpt: 'Create separate desktops (Spaces) on your Mac to organize your work — one for email, one for browsing, one for documents.',
    category: 'mac-guides',
    tags: ['mac', 'spaces', 'desktops', 'multitasking', 'organization'],
    readTime: '5 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `If your Mac screen gets cluttered with too many open windows, multiple desktops (called Spaces on Mac) can help. Spaces let you create separate virtual desktops — for example, one for work with your email and documents, another for web browsing, and a third for personal tasks. You switch between them with a swipe or keyboard shortcut, keeping each workspace clean and focused.

To see your current desktops, swipe up with three fingers on your trackpad (or press Control + Up Arrow on your keyboard). This opens Mission Control, which shows all your open windows and your desktop spaces as thumbnails across the top of the screen.

To create a new desktop, move your mouse to the top-right corner of the Mission Control view. A "+" button will appear. Click it to add a new desktop. You can create as many desktops as you need, though 2 to 4 is typical for most people.

To move a window to a different desktop, open Mission Control (three-finger swipe up or Control + Up Arrow). Then click and drag any window from the center of the screen up to the desktop thumbnail where you want it. Release the window to move it to that desktop.

To switch between desktops, swipe left or right with three fingers on your trackpad. You can also press Control + Left Arrow or Control + Right Arrow on your keyboard. Each swipe takes you to the next desktop, and the transition is smooth enough that it feels like sliding between screens.

You can assign specific apps to always open on a particular desktop. Right-click (or Control-click) an app icon in the Dock, go to "Options," and under "Assign To," choose a specific desktop. For example, you can set Mail to always appear on Desktop 2, so whenever you click its icon, it takes you to that desktop.

To remove a desktop you no longer need, open Mission Control and hover over the desktop thumbnail you want to remove. An "X" button will appear in its corner. Click it to close that desktop. Any windows on that desktop will move to an adjacent desktop — nothing is lost.

Multiple desktops work particularly well when paired with full-screen apps. Open an app in full screen (by clicking the green button in the top-left corner of any window), and it automatically becomes its own separate Space that you can swipe to.`,
    steps: [
      { title: 'Open Mission Control', content: 'Swipe up with three fingers on your trackpad, or press Control + Up Arrow on your keyboard. You will see all open windows and desktop thumbnails across the top of the screen.' },
      { title: 'Create a new desktop', content: 'In Mission Control, move your mouse to the top-right corner of the screen. Click the "+" button that appears to create a new desktop. Repeat to create additional desktops.' },
      { title: 'Move windows between desktops', content: 'In Mission Control, drag any window from the center of the screen up to the desktop thumbnail where you want it. Release the window to place it on that desktop.' },
      { title: 'Switch between desktops', content: 'Swipe left or right with three fingers on your trackpad, or press Control + Left/Right Arrow on your keyboard. Each swipe moves you to the adjacent desktop.' },
      { title: 'Assign apps to specific desktops', content: 'Right-click an app icon in the Dock, go to Options, and choose "Assign To" to select a specific desktop. That app will always open on the chosen desktop.' },
      { title: 'Remove a desktop', content: 'Open Mission Control, hover over the desktop thumbnail you want to remove, and click the "X" button. Windows from that desktop will move to an adjacent one.' },
    ],
  },

  {
    slug: 'force-quit-apps-mac',
    title: 'How to Force Quit Apps on Mac',
    excerpt: 'When an app freezes and stops responding on your Mac, use Force Quit to close it without restarting your entire computer.',
    category: 'mac-guides',
    tags: ['mac', 'force quit', 'frozen apps', 'troubleshooting', 'unresponsive'],
    readTime: '4 min',
    thumbnailEmoji: '🔴',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `Sometimes an app on your Mac stops responding — the spinning rainbow wheel appears, and the app will not react to your clicks or keyboard input. When this happens, you do not need to restart your entire computer. Instead, you can force-quit the unresponsive app and continue using your Mac normally.

The quickest way to force-quit an app is to press Command + Option + Esc on your keyboard. This opens the Force Quit Applications window, which lists all currently running apps. Find the unresponsive app (it may say "Not Responding" next to its name), click on it to select it, and then click the "Force Quit" button. Confirm by clicking "Force Quit" again in the dialog that appears.

You can also force-quit from the Apple menu. Click the Apple icon in the top-left corner of your screen and select "Force Quit." This opens the same Force Quit Applications window.

A third method is to right-click (or Control-click) the app's icon in the Dock while holding down the Option key on your keyboard. The menu option will change from "Quit" to "Force Quit." Click "Force Quit" to close the app immediately.

After force-quitting an app, wait a few seconds and then reopen it. In most cases, the app will work normally after being restarted. If the app was working on an unsaved document, you may lose recent changes — many apps (like Pages, Numbers, and TextEdit) have auto-save features that recover most of your work, but not all apps do.

If an app freezes repeatedly, it may indicate a problem. Try updating the app to the latest version from the App Store or the developer's website. You can also try deleting the app and reinstalling it. If the problem persists, check the app's support website or forums for known issues.

Force-quit should be a last resort — always try closing the app normally first (Command + Q). Give a slow app a minute or two before force-quitting, as it may be processing something that takes time. But if the rainbow wheel spins for more than a couple of minutes and the app is truly frozen, force-quit is the right move.`,
    steps: [
      { title: 'Use the keyboard shortcut', content: 'Press Command + Option + Esc on your keyboard. The Force Quit Applications window will open showing all running apps.' },
      { title: 'Select the unresponsive app', content: 'Find the frozen app in the list — it may say "Not Responding" next to its name. Click on it to select it.' },
      { title: 'Click Force Quit', content: 'Click the "Force Quit" button at the bottom of the window. Confirm by clicking "Force Quit" again in the dialog that appears. The app will close immediately.' },
      { title: 'Alternative: Use the Apple menu', content: 'Click the Apple icon in the top-left corner of your screen and select "Force Quit" to open the same Force Quit Applications window.' },
      { title: 'Alternative: Use the Dock', content: `Hold down the Option key on your keyboard, then right-click (or Control-click) the frozen app's icon in the Dock. Select "Force Quit" from the menu that appears.` },
      { title: 'Reopen the app', content: 'Wait a few seconds after force-quitting, then reopen the app. It should work normally. If it freezes again, try updating or reinstalling the app.' },
    ],
  },

  {
    slug: 'use-airdrop-mac-iphone',
    title: 'How to Share Files Between Mac and iPhone (AirDrop)',
    excerpt: 'Transfer photos, documents, and files wirelessly between your Mac and iPhone using AirDrop — no cables or email needed.',
    category: 'mac-guides',
    tags: ['mac', 'iphone', 'airdrop', 'file sharing', 'wireless transfer'],
    readTime: '5 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner',
    body: `AirDrop is Apple's built-in wireless file transfer feature. It lets you send photos, documents, videos, web links, and other files between your Mac and iPhone (or between any Apple devices) without cables, email, or cloud storage. Files transfer directly between devices using a combination of Wi-Fi and Bluetooth, and the transfer is fast — even large files take only a few seconds.

To use AirDrop, both devices need to have Wi-Fi and Bluetooth turned on (they do not need to be connected to the same Wi-Fi network — AirDrop creates its own direct connection). On your iPhone, open Control Center by swiping down from the top-right corner and make sure both Wi-Fi and Bluetooth icons are blue (turned on). On your Mac, click the Wi-Fi and Bluetooth icons in the menu bar to confirm they are on.

To send a file from your iPhone to your Mac: Open the file you want to share (a photo, document, or web page). Tap the Share button (the square with an upward arrow). Look for AirDrop in the sharing options and tap it. Your Mac should appear as an available device — tap its icon. On your Mac, you will see a notification asking you to accept the file. Click "Accept" and the file will transfer immediately. Photos go to your Downloads folder by default.

To send a file from your Mac to your iPhone: Find the file in Finder, right-click it, and select "Share" then "AirDrop." Your iPhone should appear as an available device in the AirDrop window. Click your iPhone's icon. On your iPhone, you will see a notification asking you to accept the file. Tap "Accept" and the file will open in the appropriate app.

If the other device does not appear in AirDrop, check the receiving device's AirDrop settings. On iPhone, go to Settings then General then AirDrop, and make sure it is set to "Everyone for 10 Minutes" or "Contacts Only" (if the sender is in your contacts). On Mac, open Finder, click "AirDrop" in the sidebar, and set the receiving option to "Everyone" or "Contacts Only."

AirDrop is one of the best reasons to use Apple devices together. It is faster and more convenient than emailing files to yourself, and it works without an internet connection. Use it to transfer vacation photos from your iPhone to your Mac, send documents from your Mac to your iPhone for reading on the go, or share web links between devices.`,
    steps: [
      { title: 'Turn on Wi-Fi and Bluetooth on both devices', content: 'On iPhone, open Control Center and make sure Wi-Fi and Bluetooth are both turned on (blue icons). On Mac, check the menu bar to confirm Wi-Fi and Bluetooth are enabled.' },
      { title: 'Set AirDrop to be discoverable', content: 'On the receiving device, set AirDrop to "Everyone for 10 Minutes" or "Contacts Only." On iPhone: Settings then General then AirDrop. On Mac: open Finder, click AirDrop in the sidebar.' },
      { title: 'Send from iPhone to Mac', content: 'Open the photo or file on your iPhone, tap the Share button (square with arrow), tap AirDrop, and select your Mac. Accept the file on your Mac when the notification appears.' },
      { title: 'Send from Mac to iPhone', content: `In Finder, right-click the file you want to send, select Share then AirDrop. Click your iPhone's icon in the AirDrop window. Accept the file on your iPhone when prompted.` },
      { title: 'Find transferred files', content: 'Files received on Mac go to the Downloads folder by default. Files received on iPhone open in the appropriate app — photos go to the Photos app, documents to Files.' },
      { title: 'Troubleshoot if devices do not appear', content: 'Make sure both devices have Wi-Fi and Bluetooth on. Set AirDrop to "Everyone for 10 Minutes" temporarily. Bring the devices within 30 feet of each other. Restart Wi-Fi and Bluetooth if needed.' },
    ],
  },

  {
    slug: 'use-preview-edit-pdfs-mac',
    title: 'How to Use Preview to Edit PDFs on Mac',
    excerpt: 'Fill out forms, add signatures, highlight text, and annotate PDF documents using the free Preview app on your Mac.',
    category: 'mac-guides',
    tags: ['mac', 'preview', 'pdf', 'annotate', 'signatures'],
    readTime: '6 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `Preview is a free app that comes with every Mac, and it is surprisingly powerful for working with PDF documents. You can use it to fill out PDF forms, add your signature, highlight text, add notes and comments, merge PDFs, and more — all without paying for Adobe Acrobat or other expensive PDF software.

To open a PDF in Preview, double-click the PDF file in Finder. If it does not open in Preview by default, right-click the file, select "Open With," and choose "Preview." Once the PDF is open, you can read through it by scrolling or using the arrow keys.

To fill out a form, click on any form field (text box, checkbox, or dropdown) and type your information. Preview recognizes most PDF form fields automatically. If a form field does not respond to clicking, you may need to use the Text tool instead — click the "Markup" toolbar button (it looks like a pen tip in a circle) and then click the "T" (Text) button to add a text box where you need to type.

To add your signature, click the Markup toolbar button, then click the "Sign" button (it looks like a signature). If this is your first time, you will be asked to create your signature. You can do this by signing on your trackpad with your finger, holding a signed piece of paper up to your Mac's camera, or signing on your iPhone. Once created, your signature is saved and you can reuse it on future documents. Click your saved signature and it will appear on the PDF — drag it to the correct location and resize it by dragging the corners.

To highlight text, click the Markup button and select the Highlight tool (the marker icon). Then click and drag over the text you want to highlight. You can change the highlight color by clicking the dropdown arrow next to the highlight tool.

To add notes and comments, use the "Note" tool in the Markup toolbar. Click anywhere on the page to place a note. You can type your comments inside the note, and it will appear as a small colored square on the page. This is useful for reviewing documents and leaving feedback.

To merge two PDFs, open the first PDF in Preview, then go to View and make sure "Thumbnails" is checked (so you see page thumbnails in the sidebar). Open a Finder window with the second PDF and drag it from Finder into the thumbnail sidebar of Preview. Drop it where you want the pages to be inserted. Then save the file by pressing Command + S.

Remember to save your changes by pressing Command + S or going to File then Save. If you want to keep the original unchanged and save a modified copy, go to File then "Export as PDF" and give it a new name.`,
    steps: [
      { title: 'Open a PDF in Preview', content: 'Double-click any PDF file in Finder. If it does not open in Preview, right-click the file, select "Open With," and choose "Preview." The PDF will open for viewing and editing.' },
      { title: 'Fill out form fields', content: 'Click on any text field, checkbox, or dropdown in the PDF form and type or select your response. Preview recognizes most standard PDF form fields automatically.' },
      { title: 'Add your signature', content: 'Click the Markup toolbar button (pen tip icon), then click "Sign." Create your signature using the trackpad, camera, or iPhone. Click your saved signature to place it on the document, then drag to position and resize it.' },
      { title: 'Highlight text', content: 'Click the Markup button, select the Highlight tool (marker icon), then click and drag over the text you want to highlight. Click the dropdown arrow next to the tool to change the highlight color.' },
      { title: 'Add notes and text', content: 'Use the "Note" tool in the Markup toolbar to add comments. Use the "T" (Text) tool to add text boxes for areas where form fields do not exist. Drag text boxes to position them correctly.' },
      { title: 'Save your changes', content: 'Press Command + S to save. To keep the original file unchanged, go to File then "Export as PDF" and enter a new file name. The original PDF will remain unmodified.' },
    ],
  },

  {
    slug: 'set-up-parental-controls-mac',
    title: 'How to Set Up Parental Controls on Mac',
    excerpt: 'Use Screen Time on Mac to set content restrictions, time limits, and app controls for a child using your Mac.',
    category: 'mac-guides',
    tags: ['mac', 'parental controls', 'screen time', 'child safety', 'content restrictions'],
    readTime: '7 min',
    thumbnailEmoji: '👨‍👧',
    publishedAt: '2026-04-16',
    difficulty: 'Intermediate',
    body: `If a child or grandchild uses your Mac, you can set up parental controls to limit what they can access, how long they can use the computer, and which apps and websites they can visit. Apple's Screen Time feature provides all of these controls and is built into macOS — no additional software needed.

The first step is to create a separate user account for the child. This keeps their settings, files, and restrictions separate from yours. Go to System Settings, click "Users & Groups," and add a new account. Make sure to create a Standard account (not Administrator). Set a password that you know but the child does not — this prevents them from changing the restrictions.

Next, set up Screen Time for the child's account. Go to System Settings and click "Screen Time." If you have Family Sharing set up, you can manage the child's Screen Time from your own account. If not, you will need to log into the child's account to configure Screen Time there.

Under "Content & Privacy," click "Content & Privacy Restrictions" and toggle it on. This gives you control over web content, app access, and more. Under "Content Restrictions," you can choose to limit adult websites, allow only approved websites, or set the content rating for movies, TV shows, and apps. For younger children, setting web content to "Allowed Websites Only" and adding specific approved sites gives you the most control.

Under "App Limits," you can set daily time limits for categories of apps — like games, social media, or entertainment. When the time limit is reached, the app will lock and the child will see a "Time Limit Reached" message. They can request more time, which sends a notification to your device for you to approve or deny.

"Downtime" lets you schedule hours when the Mac can only be used for phone calls and apps you specifically allow. For example, you can set Downtime from 8 PM to 8 AM so the child cannot use the computer at night. During Downtime, only the apps you mark as "Always Allowed" will be accessible.

Under "Communication Limits," you can control who the child can communicate with through Messages, FaceTime, and other Apple communication features. You can restrict communication to contacts only, or allow everyone.

Set a Screen Time passcode that is different from the child's login password. This prevents them from changing the Screen Time settings themselves. Go to Screen Time settings and click "Lock Screen Time Settings" to create this passcode. Keep this passcode private — it is your master key to all the parental control settings.`,
    steps: [
      { title: 'Create a child user account', content: 'Go to System Settings then Users & Groups. Click "Add Account" and create a Standard user account for the child. Set a password that you know. This gives them their own separate space on the Mac.' },
      { title: 'Open Screen Time settings', content: `Go to System Settings then Screen Time. If using Family Sharing, you can manage the child's settings from your account. Otherwise, log into the child's account to set up Screen Time.` },
      { title: 'Set content restrictions', content: 'Click "Content & Privacy" then toggle on "Content & Privacy Restrictions." Under Content Restrictions, choose web filtering (limit adult websites or allow only approved websites) and set age-appropriate content ratings.' },
      { title: 'Set app time limits', content: 'Click "App Limits" and add limits for categories like Games, Social Media, or Entertainment. Set a daily time allowance. When the limit is reached, the app locks and the child can request more time.' },
      { title: 'Schedule Downtime', content: 'Click "Downtime" and set the hours when the Mac should be restricted (for example, 8 PM to 8 AM). During Downtime, only apps you mark as "Always Allowed" will be accessible.' },
      { title: 'Lock the settings with a passcode', content: `In Screen Time settings, click "Lock Screen Time Settings" and create a passcode different from the child's login password. This prevents the child from changing the restrictions themselves.` },
    ],
  },

  // ═══════════════════════════════════════════
  // WORK FROM HOME (8 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-home-office-video-calls',
    title: 'How to Set Up a Home Office for Video Calls',
    excerpt: 'Set up a professional-looking home workspace for video calls with good lighting, sound, and a tidy background.',
    category: 'how-to' as any,
    tags: ['video calls', 'home office', 'zoom', 'webcam', 'lighting'],
    readTime: '6 min',
    thumbnailEmoji: '💻',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A good home office setup for video calls makes you look and sound professional without spending a lot of money. Poor lighting or a cluttered background can be distracting to the people you are meeting with. A few simple adjustments to your space can make a big difference in how you come across on camera.`,
    steps: [
      { title: 'Choose your spot', content: 'Find a quiet area in your home away from noise and foot traffic. A corner of a room with a wall behind you works well. Avoid sitting with a window directly behind you, as it will make you appear as a dark silhouette.' },
      { title: 'Set up your lighting', content: 'Place a lamp or ring light in front of you, at face level. Natural light from a window in front of you is ideal. The goal is to have light hitting your face so you are clearly visible on camera.' },
      { title: 'Check your background', content: 'Look at what appears behind you on camera. Remove clutter, laundry, or anything you would not want others to see. A plain wall or a tidy bookshelf makes a professional impression.' },
      { title: 'Position your camera at eye level', content: 'If you use a laptop, prop it up on books or a stand so the camera is level with your eyes. Looking down into a camera is unflattering and makes it hard to make eye contact with others.' },
      { title: 'Test your audio', content: `Use headphones with a built-in microphone or a USB microphone to improve your sound quality. Before any call, join a test meeting or use your app's audio test feature to confirm others can hear you clearly without echo or background noise.` },
    ],
  },

  {
    slug: 'use-microsoft-word-online',
    title: 'How to Use Microsoft Word Online for Free',
    excerpt: 'Write, edit, and share documents using the free web version of Microsoft Word — no software to install.',
    category: 'how-to' as any,
    tags: ['microsoft word', 'word online', 'office 365', 'documents', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📝',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Microsoft Word Online is a free version of the popular Word program that runs entirely in your web browser. You do not need to buy Office or install anything — just a free Microsoft account. It is great for writing letters, resumes, or any document you want to save and access from any device.`,
    steps: [
      { title: 'Create a free Microsoft account', content: 'Go to account.microsoft.com and click "Create a Microsoft account." Enter your email address (or create a new Outlook address) and follow the prompts to set a password and verify your identity.' },
      { title: 'Go to Word Online', content: 'Go to office.com and sign in with your Microsoft account. You will see a list of free Office apps. Click on "Word" to open the online version.' },
      { title: 'Create or open a document', content: 'Click "New blank document" to start writing, or click "Upload" to open a document from your computer. Your document will save automatically to OneDrive as you type.' },
      { title: 'Use the formatting toolbar', content: 'The toolbar at the top lets you change font, size, bold, italic, and paragraph alignment — the same controls as the desktop version. Click any text and then use the toolbar to format it.' },
      { title: 'Share or download your document', content: 'Click "Share" in the top right corner to send the document to someone else by email or link. Click "File" then "Save As" then "Download a Copy" to save a .docx file to your computer.' },
    ],
  },

  {
    slug: 'use-google-docs-writing',
    title: 'How to Use Google Docs for Writing',
    excerpt: 'Use Google Docs to write, edit, and share documents for free from any device with a web browser.',
    category: 'how-to' as any,
    tags: ['google docs', 'google', 'documents', 'writing', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Google Docs is a free online word processor from Google that works in any web browser. It saves your work automatically as you type, so you never lose a document, and you can access it from any phone, tablet, or computer. It is a popular alternative to Microsoft Word that costs nothing to use.`,
    steps: [
      { title: 'Sign in to Google', content: 'Go to docs.google.com. If you have a Gmail account, sign in with your Gmail email and password. If you do not have a Google account, click "Create account" to set one up for free.' },
      { title: 'Create a new document', content: 'Click the large "+" button or "Blank" template to open a new document. Give it a name by clicking "Untitled document" at the top and typing a title.' },
      { title: 'Type and format your text', content: 'Click anywhere in the document and start typing. Use the toolbar at the top to change the font, make text bold or italic, change the size, or align paragraphs. Google Docs saves automatically every few seconds.' },
      { title: 'Share your document', content: 'Click the blue "Share" button in the top right. Type an email address to share with a specific person, or click "Copy link" to get a link you can send by email or text. You can set whether they can view, comment, or edit.' },
      { title: 'Download or print', content: 'Click "File" at the top left, then "Download" to save a copy in Word (.docx), PDF, or other formats. Click "File" then "Print" to print your document.' },
    ],
  },

  {
    slug: 'scan-documents-phone',
    title: 'How to Scan Documents with Your Phone',
    excerpt: 'Turn your smartphone into a document scanner to create clear PDF copies of papers, receipts, and forms.',
    category: 'phone-guides' as any,
    tags: ['scan', 'pdf', 'documents', 'phone camera', 'paperwork'],
    readTime: '5 min',
    thumbnailEmoji: '📠',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Your phone camera can scan documents and turn them into clean PDF files — no scanner machine needed. This is useful for sending paperwork, saving important records, or keeping digital copies of receipts and letters. Both iPhones and Android phones have this built in or have free apps that do it well.`,
    steps: [
      { title: 'Use the built-in scanner on iPhone', content: 'Open the Notes app and create a new note. Tap the camera icon above the keyboard, then tap "Scan Documents." Hold your phone over the document and it will automatically detect and capture it.' },
      { title: 'Use Google Drive to scan on Android', content: 'Open the Google Drive app and tap the "+" button. Tap "Scan." Hold your phone over the document and tap the shutter button. Google Drive will create a PDF automatically.' },
      { title: 'Position the document well', content: 'Lay the document flat on a dark-colored surface for contrast. Make sure all four corners are visible on screen. Good lighting helps — natural daylight or a bright room lamp gives the best results.' },
      { title: 'Adjust and crop if needed', content: 'After scanning, most apps let you drag the corner handles to straighten or crop the image. Tap "Retake" if the scan came out blurry or crooked.' },
      { title: 'Save and share the PDF', content: 'Tap "Save" or "Done" to save the scan as a PDF. You can then email it, upload it to a website, or share it directly from your phone using the share button.' },
    ],
  },

  {
    slug: 'use-cloud-storage',
    title: 'How to Use Cloud Storage — Google Drive, OneDrive, and iCloud',
    excerpt: 'Store your photos, documents, and files online so you can access them from any device and never lose them.',
    category: 'essential-skills' as any,
    tags: ['cloud storage', 'google drive', 'onedrive', 'icloud', 'backup'],
    readTime: '7 min',
    thumbnailEmoji: '☁️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Cloud storage saves your files on the internet so you can access them from any phone, tablet, or computer — and so you do not lose them if your device is lost or breaks. Google Drive, Microsoft OneDrive, and Apple iCloud each offer free storage. Knowing how to use at least one of these is one of the most useful digital skills you can have.`,
    steps: [
      { title: 'Choose a cloud storage service', content: 'Use Google Drive (drive.google.com) if you have a Gmail account — it gives you 15 GB free. Use OneDrive (onedrive.com) if you use Windows or Microsoft — also 15 GB free. Use iCloud if you have an iPhone or Mac — 5 GB free, with upgrades available.' },
      { title: 'Upload a file', content: 'On Google Drive or OneDrive, go to the website and drag a file from your computer into the browser window, or click "New" then "File upload." On iPhone, files saved in apps like Photos or Notes sync to iCloud automatically.' },
      { title: 'Access your files from another device', content: 'Sign in to the same account on any device and your files will be there. On a phone, download the Google Drive, OneDrive, or Files app (iPhone) to access your cloud files.' },
      { title: 'Organize files into folders', content: 'Right-click (or tap and hold on mobile) to create a new folder. Drag files into folders to keep things organized. Good folder names like "Tax Documents 2025" or "Family Photos" make it easy to find things later.' },
      { title: 'Share a file with someone', content: `Right-click a file and choose "Share." Enter the other person's email address or click "Copy link" to get a shareable link. You can choose whether they can just view it or also edit it.` },
    ],
  },

  {
    slug: 'sign-documents-electronically',
    title: 'How to Sign Documents Electronically',
    excerpt: 'Sign PDF contracts, forms, and agreements electronically on your phone or computer — no printing required.',
    category: 'how-to' as any,
    tags: ['e-signature', 'sign pdf', 'docusign', 'adobe', 'electronic signature'],
    readTime: '6 min',
    thumbnailEmoji: '✍️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Electronic signatures are legally valid in the United States and accepted by banks, landlords, employers, and government agencies. You can sign a document without printing, signing by hand, and scanning it back — saving time and paper. Several free tools make this quick and easy on any device.`,
    steps: [
      { title: 'Use Adobe Acrobat Reader to sign a PDF (free)', content: 'Download Adobe Acrobat Reader for free from adobe.com. Open your PDF, click "Fill & Sign" in the toolbar, then click "Sign" and draw or type your signature. Click where you want to place it on the document.' },
      { title: 'Sign on iPhone using Markup', content: 'Open the PDF in the Files or Mail app on your iPhone. Tap the pen icon (Markup) then tap the "+" button and choose "Signature." Draw your signature with your finger and tap "Done." Drag it to the correct spot.' },
      { title: 'Use DocuSign for documents sent to you', content: 'If someone sends you a DocuSign request by email, click the link in the email. Follow the prompts — you do not need to create an account to sign a document sent to you. Click the signature box and type or draw your name.' },
      { title: 'Use a free online tool', content: 'Go to smallpdf.com/sign-pdf or docusign.com and upload your PDF. These sites let you add a signature, initials, and date without installing anything. Download the signed copy when done.' },
      { title: 'Save and send the signed document', content: 'After signing, always save a copy of the signed document to your files or cloud storage before sending it. Email the signed PDF as an attachment, or use the share option in the app.' },
    ],
  },

  {
    slug: 'organize-digital-files-folders',
    title: 'How to Organize Your Digital Files and Folders',
    excerpt: 'Create a simple folder system on your computer so you can find any document, photo, or file in seconds.',
    category: 'essential-skills' as any,
    tags: ['files', 'folders', 'organization', 'documents', 'computer basics'],
    readTime: '6 min',
    thumbnailEmoji: '🗂️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A well-organized file system saves you from frantically searching for important documents at the worst possible moments. Most people save files wherever is convenient and then struggle to find them later. Spending 30 minutes setting up a simple folder structure will save you hours of searching over time.`,
    steps: [
      { title: 'Start with a few main folders', content: 'Open your Documents folder on your computer. Create a handful of broad folders for the main areas of your life — for example: "Finance," "Health," "Family," "Work," and "Photos." Right-click in any empty space and choose "New Folder" to create one.' },
      { title: 'Create subfolders inside each main folder', content: 'Inside "Finance," create subfolders like "Tax Returns," "Bank Statements," and "Insurance." Inside "Health," create "Medical Records" and "Insurance Cards." Keep it simple — you can always add more later.' },
      { title: 'Name files clearly with dates', content: 'Rename files so you know what they are at a glance. A name like "2025-Tax-Return-Federal.pdf" is much better than "document1.pdf." Including the year at the start of the name helps files sort in order automatically.' },
      { title: 'Move existing files into their folders', content: 'Go through your Downloads folder and Desktop and move files into the right folders. Delete anything you no longer need. A cluttered Desktop makes finding things harder — aim to keep it mostly empty.' },
      { title: 'Keep up the habit', content: 'When you download or save a new file, put it directly in the right folder instead of leaving it in Downloads. At the end of each month, take five minutes to file anything that has piled up. Consistency is the key to staying organized.' },
    ],
  },

  {
    slug: 'use-vpn-for-work',
    title: 'How to Use a VPN for Work and Privacy',
    excerpt: 'Learn what a VPN does, when you need one, and how to set one up on your computer or phone.',
    category: 'safety-guides' as any,
    tags: ['vpn', 'privacy', 'security', 'public wifi', 'remote work'],
    readTime: '7 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A VPN (Virtual Private Network) creates a secure, private tunnel for your internet connection — protecting your data when you are on public WiFi or accessing sensitive accounts. Many employers require employees to use a VPN when working from home. Consumer VPNs also protect your privacy from advertisers and help keep your browsing secure on the go.`,
    steps: [
      { title: 'Understand when you need a VPN', content: 'Use a VPN whenever you are on public WiFi — at a coffee shop, hotel, airport, or library. It is also useful if your employer requires it for accessing company systems remotely. For everyday home internet use, a VPN is optional but adds an extra layer of privacy.' },
      { title: 'Choose a reputable VPN service', content: 'Trusted consumer VPN services include NordVPN, ExpressVPN, and Proton VPN (which has a free tier). Avoid free VPNs from unknown companies — they may sell your data. Many employers provide a VPN app; check with your IT department.' },
      { title: 'Install the VPN app', content: `Download the VPN app from the provider's official website or your phone's app store. Create an account and follow the setup instructions. Most VPN apps require you to allow a VPN configuration on your device — approve this when prompted.` },
      { title: 'Connect to the VPN', content: 'Open the VPN app and tap or click "Connect." The app will choose the best server automatically, or you can choose a specific country. A VPN icon — often a small padlock or key — will appear in your status bar when you are connected.' },
      { title: 'Disconnect when done', content: 'When you are finished working or leave the public location, open the VPN app and tap "Disconnect." Leaving a VPN on continuously can slow your connection. For home use, connect only when needed for extra privacy.' },
    ],
  },

  // ═══════════════════════════════════════════
  // ONLINE SHOPPING & SERVICES (8 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'shop-safely-amazon',
    title: 'How to Shop Safely on Amazon',
    excerpt: 'Shop on Amazon with confidence — check sellers, read reviews, and protect your payment information.',
    category: 'app-guides' as any,
    tags: ['amazon', 'online shopping', 'safety', 'reviews', 'scams'],
    readTime: '6 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Amazon is the world's largest online store, but not every seller on Amazon is equally trustworthy. Knowing how to identify reliable sellers, spot fake reviews, and protect your payment details will help you shop with confidence. A few extra seconds of checking before you buy can save you from scams and low-quality products.`,
    steps: [
      { title: 'Check who is actually selling the item', content: 'On any product page, look for "Sold by" and "Ships from" below the price. "Sold by Amazon.com" is the safest option. If a third-party seller is listed, check their seller rating — look for sellers with 95% or higher positive feedback and at least a few hundred reviews.' },
      { title: 'Read recent reviews carefully', content: 'Sort reviews by "Most recent" and read what buyers say. Look for verified purchase badges. Be cautious if all reviews are 5 stars with no detail, or if many reviews mention completely different products — these are signs of review manipulation.' },
      { title: 'Check the return policy before buying', content: 'Scroll down to "Returns & Orders" or look for the return policy on the product page. Most Amazon items are returnable within 30 days. Third-party sellers may have stricter policies, so read these carefully before purchasing.' },
      { title: 'Use a credit card, not a debit card', content: 'Pay with a credit card whenever possible. Credit cards offer stronger fraud protection than debit cards — if something goes wrong, it is much easier to dispute a charge. Never pay a seller directly outside of Amazon.' },
      { title: 'Enable two-step verification on your account', content: 'Go to Account and Lists, then "Account," then "Login and security." Turn on Two-Step Verification. This means even if someone steals your password, they cannot log into your Amazon account without also having access to your phone.' },
    ],
  },

  {
    slug: 'use-instacart-grocery-delivery',
    title: 'How to Use Instacart for Grocery Delivery',
    excerpt: 'Order groceries from local stores using Instacart and have them delivered to your door in as little as an hour.',
    category: 'app-guides' as any,
    tags: ['instacart', 'grocery delivery', 'online grocery', 'delivery', 'shopping'],
    readTime: '5 min',
    thumbnailEmoji: '🛒',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Instacart lets you order groceries from local stores like Kroger, Costco, Aldi, and many others, with a personal shopper picking and delivering your order. It is a convenient service for anyone who has difficulty getting to the store, has a busy schedule, or prefers to shop from home. Delivery fees vary, and a membership can reduce costs if you order frequently.`,
    steps: [
      { title: 'Download the Instacart app or go to instacart.com', content: 'Download the Instacart app from the App Store or Google Play, or visit instacart.com on your computer. Tap "Get started" and enter your zip code to see which stores deliver to your address.' },
      { title: 'Create an account', content: 'Enter your name, email address, and create a password. You will need to add a delivery address and a payment method (credit or debit card). Instacart also accepts EBT/SNAP benefits at participating stores.' },
      { title: 'Choose a store and add items to your cart', content: 'Tap a store to browse its departments, or use the search bar to find specific items. Tap an item to add it to your cart. You can enter notes for the shopper, such as "ripe bananas preferred" or "any brand is fine."' },
      { title: 'Choose a delivery time and check out', content: 'When your cart is ready, tap "Go to checkout." Choose a delivery window — as fast as one hour, or schedule a future time. Review your order, tip your shopper (recommended: at least 10%), and place your order.' },
      { title: 'Track your order and rate your shopper', content: 'The app shows a live map as your shopper picks and delivers your order. You will get notifications when they start shopping and when they are on their way. After delivery, you can rate your shopper and report any substitutions or missing items for a refund.' },
    ],
  },

  {
    slug: 'order-food-doordash-uber-eats',
    title: 'How to Order Food with DoorDash or Uber Eats',
    excerpt: 'Order meals from local restaurants for delivery or pickup using DoorDash or Uber Eats on your phone.',
    category: 'app-guides' as any,
    tags: ['doordash', 'uber eats', 'food delivery', 'restaurants', 'ordering food'],
    readTime: '5 min',
    thumbnailEmoji: '🍔',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `DoorDash and Uber Eats connect you with hundreds of local restaurants that deliver food directly to your door. Both apps work similarly — you browse menus, place an order, and a driver picks it up and brings it to you. These services are useful when you cannot cook or want to enjoy a restaurant meal at home.`,
    steps: [
      { title: 'Download the app and create an account', content: 'Download DoorDash or Uber Eats from the App Store or Google Play. Open the app, enter your delivery address, and create an account with your email and a password. Both apps also let you sign up with a Google or Apple account.' },
      { title: 'Browse restaurants near you', content: 'The app will show restaurants that deliver to your address. You can filter by cuisine type, rating, delivery time, or price. Tap a restaurant to see its full menu with prices.' },
      { title: 'Add items to your cart', content: 'Tap any menu item to add it to your cart. Many items let you customize them — size, toppings, or special requests. When you are done, tap "View Cart" or the cart icon to review your order.' },
      { title: 'Check out and pay', content: 'Review your order and enter a tip for the driver (15 to 20 percent is standard). Add a promo code if you have one. Tap "Place Order" and confirm your payment. Both apps accept credit cards, debit cards, and PayPal.' },
      { title: 'Track your delivery', content: `After ordering, the app shows a map with your driver's location. You will get a notification when the driver picks up your order and when they are nearby. Check the estimated delivery time on the tracking screen.` },
    ],
  },

  {
    slug: 'use-walmart-pickup-delivery',
    title: 'How to Use Walmart Pickup and Delivery',
    excerpt: 'Order groceries and household items from Walmart online and pick them up curbside or have them delivered.',
    category: 'app-guides' as any,
    tags: ['walmart', 'grocery pickup', 'curbside', 'delivery', 'online shopping'],
    readTime: '5 min',
    thumbnailEmoji: '🏪',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Walmart's pickup and delivery service lets you order groceries and household items from Walmart.com or the Walmart app, then pick them up curbside without entering the store — or have them delivered to your home. Curbside pickup is free with no minimum order at most locations, making it one of the most cost-effective grocery services available.`,
    steps: [
      { title: 'Create a Walmart account', content: 'Go to walmart.com or download the Walmart app. Click "Create an account" and enter your email address and a password. You will need to add your delivery address and a payment method.' },
      { title: 'Shop for items online', content: 'Use the search bar to find items, or browse the Grocery section. Add items to your cart just like any online store. The app shows which items are in stock at your local store.' },
      { title: 'Choose pickup or delivery at checkout', content: 'When you are ready to check out, select "Pickup" for free curbside service or "Delivery" if you prefer items brought to your door. Choose a pickup or delivery time slot that works for you.' },
      { title: 'Check in when you arrive (for pickup)', content: `When you pull into the Walmart parking lot, open the app and tap "I'm here." Tell the app which parking spot you are in. A Walmart associate will bring your order to your car — you do not need to go inside.` },
      { title: 'Review your order after pickup', content: 'If any items were out of stock, the app will show substitutions that were made. You can approve substitutions in advance in your account settings. Report any missing or incorrect items through the app for a quick refund.' },
    ],
  },

  {
    slug: 'return-online-purchase',
    title: 'How to Return an Online Purchase',
    excerpt: 'Return items you bought online easily — get a return label, pack the item, and get your refund.',
    category: 'how-to' as any,
    tags: ['returns', 'refund', 'online shopping', 'amazon', 'return label'],
    readTime: '5 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Returning an online purchase is usually straightforward once you know the steps. Most major retailers make returns easy with prepaid labels or drop-off options. Acting quickly matters — most stores have a return window of 30 days, and keeping your original packaging makes the process much simpler.`,
    steps: [
      { title: 'Find the return policy and window', content: `Log in to your account on the retailer's website or app. Go to "Orders" and find the item you want to return. Check the return deadline — most stores allow 30 days, but it varies. Items must usually be unused and in original packaging.` },
      { title: 'Start the return online', content: 'Click "Return or Replace Items" next to the order. Select the item, choose a reason for the return, and choose your refund method (original payment or store credit). Follow the prompts to generate a return label.' },
      { title: 'Print or save the return label', content: 'Most returns come with a free prepaid shipping label. Print it if you have a printer, or look for the option to show a QR code — UPS, FedEx, and USPS locations can print the label for you when you bring the QR code.' },
      { title: 'Pack and ship the item', content: 'Pack the item securely in its original box if possible. Tape the return label on the outside of the box, covering any old labels. Drop it off at the carrier location specified on the label — UPS Store, FedEx Office, or USPS post office.' },
      { title: 'Track your refund', content: 'Once the package is scanned, you can track the return in your account. Refunds typically appear within 3 to 10 business days after the retailer receives the item. Check your email for a confirmation when the refund is processed.' },
    ],
  },

  {
    slug: 'track-package-any-carrier',
    title: 'How to Track a Package from Any Carrier',
    excerpt: 'Find out exactly where your package is, whether it shipped by UPS, FedEx, USPS, or Amazon.',
    category: 'how-to' as any,
    tags: ['package tracking', 'ups', 'fedex', 'usps', 'shipping'],
    readTime: '4 min',
    thumbnailEmoji: '📬',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `When you order something online, you want to know when it is arriving. Every shipment has a tracking number that lets you see exactly where your package is in real time. Knowing how to track packages from different carriers — UPS, FedEx, USPS, and Amazon — prevents unnecessary worry and helps you plan to be home for a delivery.`,
    steps: [
      { title: 'Find your tracking number', content: 'Check the shipping confirmation email you received from the store. The tracking number is usually a long combination of letters and numbers — for example, "1Z999AA10123456784" for UPS or a 22-digit number for USPS.' },
      { title: 'Track UPS packages', content: 'Go to ups.com, click "Track" at the top, and enter your tracking number. You can also text your tracking number to 69877 to get updates by text message.' },
      { title: 'Track FedEx packages', content: 'Go to fedex.com and click "Track" at the top. Enter your tracking number to see the current location and estimated delivery date. You can sign up for email or text notifications.' },
      { title: 'Track USPS packages', content: 'Go to tools.usps.com and enter your tracking number. You can also sign up for USPS Informed Delivery at informeddelivery.usps.com to see photos of incoming mail and packages each morning before they arrive.' },
      { title: 'Track Amazon packages', content: 'Log into amazon.com and go to "Returns and Orders" in the top right corner. Find your order and click "Track Package" to see the current status, including a map view when the driver is nearby.' },
    ],
  },

  {
    slug: 'spot-fake-online-reviews',
    title: 'How to Spot Fake Online Reviews',
    excerpt: 'Learn the red flags of fake reviews on Amazon, Google, and other sites so you can make smarter buying decisions.',
    category: 'safety-guides' as any,
    tags: ['fake reviews', 'online shopping', 'scams', 'consumer protection', 'amazon'],
    readTime: '5 min',
    thumbnailEmoji: '⭐',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Fake reviews are a growing problem on Amazon, Google, Yelp, and other platforms. Businesses sometimes pay for fake 5-star reviews to boost their products, while competitors may leave fake negative reviews. Learning to spot the warning signs protects you from buying poor-quality products or being misled by dishonest sellers.`,
    steps: [
      { title: 'Check the rating distribution', content: 'Look at the star breakdown on any product or business page. A trustworthy product usually has a mix of ratings — some 5s, some 4s, some 3s, and a few 1s. If almost every review is exactly 5 stars with very few others, that is a red flag.' },
      { title: 'Look for verified purchase badges', content: `On Amazon, look for the "Verified Purchase" label under a reviewer's name. This means Amazon confirmed the reviewer actually bought the item. Reviews without this label should be given less weight.` },
      { title: 'Read the 1 and 2 star reviews', content: 'Low-rated reviews are harder to fake and are often the most honest. Look for patterns — do multiple reviewers mention the same problem? That is likely a real issue with the product.' },
      { title: 'Check reviewer profiles', content: `On Amazon, click a reviewer's name to see their review history. Be suspicious if an account has only reviewed one brand of products, left all 5-star reviews, or wrote all reviews on the same day.` },
      { title: 'Use a fake review checker', content: 'Visit fakespot.com or reviewmeta.com and paste in the URL of an Amazon product page. These free tools analyze the reviews and give you an adjusted rating that filters out suspected fakes.' },
    ],
  },

  {
    slug: 'use-coupon-cashback-apps',
    title: 'How to Use Coupon and Cashback Apps — Honey and Rakuten',
    excerpt: 'Automatically find coupon codes and earn cashback on purchases you already make with Honey and Rakuten.',
    category: 'financial-tech' as any,
    tags: ['coupons', 'cashback', 'honey', 'rakuten', 'saving money'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Honey and Rakuten are free browser extensions that automatically save you money when you shop online. Honey searches for coupon codes and applies the best one at checkout automatically. Rakuten gives you a percentage of your purchase back as cash — essentially paying you to shop at stores you already use. Together they can save a significant amount over the course of a year.`,
    steps: [
      { title: 'Install the Honey browser extension', content: 'Go to joinhoney.com and click "Get Honey for free." It will install as a browser extension in Chrome, Firefox, Safari, or Edge. You will see the Honey logo appear in your browser toolbar.' },
      { title: 'Shop online as normal — Honey works automatically', content: 'When you get to the checkout page of any online store, the Honey button will pop up and offer to search for coupon codes. Click "Apply Coupons" and Honey will try available codes and keep the one that saves you the most.' },
      { title: 'Set up Rakuten for cashback', content: 'Go to rakuten.com and create a free account with your email. Install the Rakuten browser extension. When you visit a store that offers cashback, a Rakuten button will appear — click "Activate" to earn cashback on your purchase.' },
      { title: 'Start shopping through Rakuten', content: 'You can also start shopping from the Rakuten website by clicking a store link there. This activates your cashback automatically. Cashback rates vary by store — typically 1% to 10% back on your purchase total.' },
      { title: 'Collect your cashback payment', content: 'Rakuten sends your accumulated cashback as a check or PayPal payment every quarter (every three months) as long as your balance is at least $5.01. You can track your earnings in your Rakuten account dashboard.' },
    ],
  },

  // ═══════════════════════════════════════════
  // TRAVEL TECH (6 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-google-maps-driving-directions',
    title: 'How to Use Google Maps for Driving Directions',
    excerpt: 'Get turn-by-turn driving directions, check traffic, and find parking using Google Maps on your phone.',
    category: 'app-guides' as any,
    tags: ['google maps', 'directions', 'navigation', 'gps', 'driving'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Google Maps is the most widely used navigation app in the world, and it is free on both iPhone and Android. It gives you turn-by-turn voice directions, real-time traffic updates, and estimated arrival times. Knowing how to use it confidently takes the stress out of driving somewhere new.`,
    steps: [
      { title: 'Open Google Maps and allow location access', content: 'Download the Google Maps app from the App Store or Google Play if you do not already have it. When you open it for the first time, allow it to access your location — this is how it knows where you are starting from.' },
      { title: 'Enter your destination', content: 'Tap the search bar at the top of the screen and type the address, business name, or place you want to go. A list of suggestions will appear as you type — tap the correct one from the list.' },
      { title: 'Choose driving and review the route', content: 'Tap the blue "Directions" button. Make sure the car icon is selected at the top (not walking or transit). Google Maps will show you the fastest route and its estimated travel time, plus alternative routes you can choose.' },
      { title: 'Start navigation', content: `Tap the blue "Start" button at the bottom of the screen. Google Maps will begin giving you voice directions through your phone's speaker. The screen shows your next turn, your current speed, and your estimated arrival time.` },
      { title: 'Use features during the drive', content: 'You can mute or adjust the voice volume using the speaker icon during navigation. If you miss a turn, Google Maps will automatically recalculate your route. When you arrive, tap the X to stop navigation.' },
    ],
  },

  {
    slug: 'book-flights-online-safely',
    title: 'How to Book Flights Online Safely',
    excerpt: 'Book airline tickets online and avoid scam booking sites, hidden fees, and common mistakes.',
    category: 'how-to' as any,
    tags: ['flights', 'booking', 'travel', 'airline', 'expedia'],
    readTime: '7 min',
    thumbnailEmoji: '✈️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Booking flights online can save money compared to calling an airline, but there are pitfalls to avoid — scam booking websites, hidden fees, and confusing fare rules. Using trusted platforms and knowing what to look for will help you find a good deal and complete your booking with confidence.`,
    steps: [
      { title: 'Use trusted booking sites', content: `Stick to well-known sites: the airline's own website (such as delta.com or southwest.com), or major travel sites like Google Flights (flights.google.com), Expedia, Kayak, or Priceline. Avoid clicking ads or booking through unfamiliar sites found in search results.` },
      { title: 'Use Google Flights to compare prices', content: 'Go to flights.google.com, enter your departure city, destination, and travel dates. Google Flights shows prices across all airlines side by side and has a calendar view to find the cheapest days to fly. It does not charge booking fees.' },
      { title: 'Read the fare rules before buying', content: 'Basic economy fares are usually non-refundable and may not include a carry-on bag. Read what is included in your fare before purchasing. If you need flexibility, choose a refundable fare or a standard economy ticket.' },
      { title: 'Book directly with the airline when possible', content: `Once you find a good price on Google Flights or Kayak, consider booking directly on the airline's website. This makes it easier to manage your booking, request changes, or get help if something goes wrong.` },
      { title: 'Save your confirmation and check in online', content: `After booking, save or print your confirmation email. Most airlines allow online check-in 24 hours before departure — check in through the airline's website or app to get your boarding pass and choose your seat in advance.` },
    ],
  },

  {
    slug: 'use-hotel-airbnb-apps',
    title: 'How to Use Hotel and Airbnb Apps',
    excerpt: 'Find and book hotels or Airbnb stays for travel using apps on your phone — and know what to watch out for.',
    category: 'app-guides' as any,
    tags: ['hotel', 'airbnb', 'booking', 'travel', 'accommodation'],
    readTime: '6 min',
    thumbnailEmoji: '🏨',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Booking a place to stay for a trip is straightforward once you know the right apps and what to look for. Hotels.com, Booking.com, and the Hilton or Marriott apps are great for traditional hotels, while Airbnb offers private homes and apartments. Each has its own strengths, and comparing prices between a few options can save you money.`,
    steps: [
      { title: 'Choose your booking platform', content: `For hotels, try Hotels.com, Booking.com, or go directly to the hotel chain's own app (Hilton Honors, Marriott Bonvoy). For private homes and apartments, use the Airbnb app. You can also compare prices using Google Hotels at google.com/travel/hotels.` },
      { title: 'Search for your destination and dates', content: 'Enter the city, your check-in and check-out dates, and the number of guests. The app will show available options sorted by price, rating, or distance from the city center. Use the filters to narrow by price range or amenities.' },
      { title: 'Read the reviews carefully', content: 'Always read recent guest reviews before booking. For hotels, look for mentions of cleanliness, noise, and staff helpfulness. For Airbnb, check that the host has many reviews and a high rating — aim for 4.7 stars or above.' },
      { title: 'Review the cancellation policy before booking', content: 'Check whether the booking is refundable and by what date you must cancel to get your money back. Free cancellation options exist but may cost slightly more. Non-refundable rates are cheaper but carry risk if your plans change.' },
      { title: 'Complete the booking and save your confirmation', content: 'Enter your payment details and complete the booking. Save the confirmation email or number. For Airbnb, the host will send you check-in instructions — read these before you travel.' },
    ],
  },

  {
    slug: 'use-digital-boarding-pass',
    title: 'How to Use a Digital Boarding Pass on Your Phone',
    excerpt: `Add your airline boarding pass to your phone's wallet app and breeze through the airport without printed paper.`,
    category: 'phone-guides' as any,
    tags: ['boarding pass', 'digital wallet', 'airport', 'travel', 'airline'],
    readTime: '5 min',
    thumbnailEmoji: '🎫',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A digital boarding pass on your phone is accepted at nearly every US airport and most international ones. It works at security checkpoints and at the gate, and it eliminates the need to find a printer before a trip. Adding it to your phone's wallet app keeps it readily accessible even if your phone loses internet connection.`,
    steps: [
      { title: 'Check in online 24 hours before your flight', content: `Go to the airline's website or app the day before your flight. Log in with your booking reference number and last name. Tap "Check in" and follow the prompts to confirm your seat.` },
      { title: 'Choose the mobile boarding pass option', content: 'When check-in is complete, the site or app will ask how you want your boarding pass. Choose "Email" or "Add to Apple Wallet" or "Add to Google Wallet." Pick the wallet option if you can — it is the most convenient.' },
      { title: `Add the pass to your phone's wallet`, content: 'On iPhone, tap "Add to Apple Wallet" and then tap "Add." On Android, tap "Add to Google Wallet." The boarding pass will appear in your Wallet app with your flight details, seat number, and barcode.' },
      { title: 'Access the pass at the airport', content: 'Open the Wallet app (iPhone) or Google Wallet (Android) before you reach the TSA checkpoint. Show the barcode to the scanner at security and again at the gate. The pass should work even in Airplane Mode.' },
      { title: 'Keep your phone charged', content: 'Make sure your phone has at least 50% battery before heading to the airport. Bring a charging cable or portable battery pack just in case. As a backup, screenshot your boarding pass so you have it even if the app has trouble loading.' },
    ],
  },

  {
    slug: 'use-phone-abroad',
    title: 'How to Use Your Phone Abroad Without Huge Bills',
    excerpt: 'Avoid surprise international roaming charges and stay connected when traveling outside the United States.',
    category: 'phone-guides' as any,
    tags: ['international travel', 'roaming', 'sim card', 'wifi calling', 'data abroad'],
    readTime: '7 min',
    thumbnailEmoji: '🌍',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Using your US phone abroad without planning ahead can result in shocking bills — international roaming charges can add up to hundreds of dollars quickly. Fortunately, several easy options keep you connected overseas without breaking the bank. The right choice depends on how long you are traveling and which carrier you use.`,
    steps: [
      { title: `Check your carrier's international plan`, content: 'Before traveling, call your carrier or check their app. T-Mobile and Google Fi include free international data in most countries. AT&T and Verizon offer day passes (around $10 per day) that include your existing plan abroad. Adding a plan for the duration of your trip is the simplest option.' },
      { title: 'Turn on WiFi Calling', content: 'On iPhone, go to Settings, then Phone, then WiFi Calling and turn it on. On Android, go to Settings, then Connections, then WiFi Calling. When connected to WiFi, your calls and texts will use WiFi instead of the cellular network, avoiding roaming charges.' },
      { title: 'Buy a local SIM card at your destination', content: 'For trips longer than a week, buying a prepaid SIM card from a local carrier at the airport or a convenience store in your destination country can be much cheaper. Look for prepaid data plans — they are widely available in Europe and most tourist destinations.' },
      { title: 'Use an eSIM for a modern option', content: 'If your phone supports eSIM (most phones made after 2019 do), you can purchase and activate an international data plan before you leave home through apps like Airalo or Holafly. An eSIM is a digital SIM — no physical card needed. Rates start around $5 for 1 GB.' },
      { title: 'Connect to hotel and public WiFi for most tasks', content: 'Use hotel WiFi for emails, maps, messaging apps, and video calls. Download Google Maps offline before you travel by searching your destination, tapping the offline maps icon, and downloading the area. This lets you navigate without using any data at all.' },
    ],
  },

  {
    slug: 'stay-safe-public-wifi',
    title: 'How to Stay Safe on Public WiFi While Traveling',
    excerpt: 'Protect your passwords and personal information when using WiFi at hotels, airports, and coffee shops.',
    category: 'safety-guides' as any,
    tags: ['public wifi', 'security', 'travel', 'vpn', 'password'],
    readTime: '6 min',
    thumbnailEmoji: '📡',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Public WiFi at hotels, airports, and coffee shops is convenient but risky. Anyone on the same network can potentially intercept your data, which is why you should never do online banking or enter passwords on public WiFi without protection. A few simple precautions keep your information safe while traveling.`,
    steps: [
      { title: 'Avoid logging into sensitive accounts on public WiFi', content: `Do not access your bank, investment accounts, or healthcare accounts over public WiFi. Save those tasks for your home network or your phone's cellular data connection, which is encrypted and much safer.` },
      { title: 'Verify the network name before connecting', content: 'Cybercriminals sometimes set up fake WiFi hotspots with names like "Free Hotel WiFi" near hotels. Before connecting, ask hotel staff or check the official network name at the venue. Confirm you are connecting to the real network.' },
      { title: 'Use a VPN', content: 'A VPN encrypts all your internet traffic so it cannot be read even on a compromised network. Install a trusted VPN like NordVPN, ExpressVPN, or Proton VPN before your trip and connect it whenever you use public WiFi.' },
      { title: 'Look for HTTPS on websites', content: 'When browsing on public WiFi, make sure websites show "https://" (with an S) in the address bar and a padlock icon. HTTPS means the connection between your browser and the website is encrypted. Never enter personal information on a site that shows "http://" without the S.' },
      { title: `Use your phone's hotspot instead of public WiFi`, content: `If you have cellular data available, consider turning on your phone's hotspot and connecting your laptop to it instead of using public WiFi. Your cellular connection is far more secure than any public network.` },
    ],
  },

  // ═══════════════════════════════════════════
  // ENTERTAINMENT & STREAMING (6 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-disney-plus',
    title: 'How to Set Up and Use Disney Plus',
    excerpt: 'Set up a Disney Plus subscription and stream Disney, Pixar, Marvel, Star Wars, and National Geographic content.',
    category: 'entertainment' as any,
    tags: ['disney plus', 'streaming', 'disney', 'marvel', 'subscription'],
    readTime: '5 min',
    thumbnailEmoji: '🎬',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Disney Plus is a streaming service with thousands of movies and TV shows from Disney, Pixar, Marvel, Star Wars, and National Geographic — all for a monthly subscription fee. It works on smart TVs, phones, tablets, and computers, with no commercials on most plans. Getting started takes just a few minutes.`,
    steps: [
      { title: 'Create a Disney Plus account', content: 'Go to disneyplus.com and click "Get Disney+" or download the Disney+ app on your device. Click "Agree and Subscribe," enter your email address, create a password, and choose a subscription plan. Plans include an ad-supported option starting around $8 per month.' },
      { title: 'Enter your payment information', content: 'Enter your credit or debit card details to complete your subscription. Disney Plus offers a free trial for new members on some plans — check the current offer when you sign up.' },
      { title: 'Download the app on your TV or device', content: 'On a smart TV, press the Home button on your remote, go to the app store (Samsung, LG, or Roku App Store), and search for "Disney+." Download and install the app. On a Roku, Fire TV, or Apple TV, search for Disney+ in the app store.' },
      { title: 'Sign in and create profiles', content: 'Open the Disney+ app and sign in with your email and password. The app will ask you to set up profiles for each person in your household — up to 7 profiles are allowed. Each profile tracks its own watch history and recommendations.' },
      { title: 'Browse and watch', content: 'Use the search bar to find a specific movie or show, or browse by category — Disney, Pixar, Marvel, Star Wars, or National Geographic. Tap any title to see details and click "Play" to start watching. Use the + icon to add shows to your Watchlist.' },
    ],
  },

  {
    slug: 'use-peacock-streaming',
    title: 'How to Use Peacock Streaming Service',
    excerpt: 'Watch NBC shows, movies, sports, and news on Peacock — including a free tier with thousands of hours of content.',
    category: 'entertainment' as any,
    tags: ['peacock', 'streaming', 'nbc', 'free streaming', 'television'],
    readTime: '5 min',
    thumbnailEmoji: '🦚',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Peacock is NBCUniversal's streaming service with a large free tier, making it one of the best no-cost streaming options available. The free plan includes thousands of hours of TV shows, movies, and news. A premium plan adds more content and removes most ads. Peacock is available on smart TVs, phones, tablets, and computers.`,
    steps: [
      { title: 'Create a free Peacock account', content: 'Go to peacocktv.com and click "Get Free" or download the Peacock app on your device. Enter your email address, create a password, and select the free plan when asked to choose a tier.' },
      { title: 'Download the Peacock app on your TV', content: 'On a Roku, Fire TV, Apple TV, or smart TV, open the app store and search for "Peacock." Download and install the app. Sign in with the email and password you created.' },
      { title: 'Browse the content library', content: 'The home screen shows featured content and categories. Use the navigation at the top to browse TV shows, movies, sports, and news. Popular free content includes The Office, Parks and Recreation, and NBC News programming.' },
      { title: 'Use the search feature', content: 'Tap the magnifying glass icon and type the name of a show or movie. Peacock will show whether it is available on your plan tier. Content with a Peacock logo and lock icon requires a paid plan.' },
      { title: 'Upgrade if you want more content', content: 'If you want to remove ads and access premium content like live sports and Peacock originals, go to your account settings and choose "Upgrade." Premium plans start around $8 per month with ads, or $14 per month ad-free.' },
    ],
  },

  {
    slug: 'set-up-apple-tv-app',
    title: 'How to Set Up the Apple TV App',
    excerpt: 'Use the Apple TV app to watch Apple TV+ originals, rent movies, and access your streaming services in one place.',
    category: 'entertainment' as any,
    tags: ['apple tv', 'apple tv plus', 'streaming', 'iphone', 'smart tv'],
    readTime: '6 min',
    thumbnailEmoji: '📺',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `The Apple TV app is both a streaming service and a hub that brings together content from multiple streaming apps in one place. It comes free on all iPhones and iPads and is available on many smart TVs. Apple TV+ is Apple's subscription service with original shows and movies, while the TV app itself also lets you rent or buy other movies.`,
    steps: [
      { title: 'Find the Apple TV app on your device', content: 'On iPhone or iPad, the Apple TV app comes pre-installed — look for the black and white TV icon. On a Samsung, LG, or Vizio smart TV, go to the app store on your TV and search for "Apple TV." It is also built into Roku, Fire TV, and Apple TV devices.' },
      { title: 'Sign in with your Apple ID', content: 'Open the app and sign in with your Apple ID (the email and password you use for the App Store). If you do not have an Apple ID, you can create one for free at appleid.apple.com.' },
      { title: 'Subscribe to Apple TV+ for original content', content: 'Tap "Apple TV+" in the app to see original shows and movies. Tap "Subscribe" to start a subscription — it costs around $10 per month and includes a free trial for new subscribers. Many Apple devices come with a complimentary trial period as well.' },
      { title: 'Browse and watch', content: 'The "Watch Now" tab shows recommendations and content from your connected streaming apps. The "Apple TV+" tab shows only Apple originals. Tap any title and select "Play" to start watching.' },
      { title: 'Rent or buy movies', content: 'Tap the "Store" tab to browse movies available to rent or buy. Rental prices are typically around $4 to $6 and give you 30 days to start watching and 48 hours to finish once you press play. Purchased movies stay in your library permanently.' },
    ],
  },

  {
    slug: 'use-youtube-on-tv',
    title: 'How to Use YouTube on Your TV',
    excerpt: 'Watch YouTube videos on your television using a smart TV app, Roku, Fire Stick, or Chromecast.',
    category: 'entertainment' as any,
    tags: ['youtube', 'smart tv', 'streaming', 'chromecast', 'roku'],
    readTime: '5 min',
    thumbnailEmoji: '▶️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `YouTube has more free video content than any other platform — news, tutorials, cooking shows, music videos, documentaries, and much more. Watching it on your TV gives you a much better experience than a small phone screen, and it is completely free. Most smart TVs and streaming devices already have the YouTube app installed.`,
    steps: [
      { title: 'Find the YouTube app on your TV', content: 'On most smart TVs (Samsung, LG, Vizio), press the Home button on your remote and look for the YouTube app in the apps row. On Roku, find YouTube in the Streaming Channels section. On Amazon Fire TV, search for YouTube in the search bar.' },
      { title: 'Install YouTube if it is not already there', content: `If YouTube is not installed, go to your TV's app store (Samsung App Store, LG Content Store, Roku Channel Store) and search for "YouTube." Select it and click "Add Channel" or "Install."` },
      { title: 'Sign in to your Google account (optional)', content: 'You can watch YouTube without signing in. To save videos, access your subscriptions, or use your history, press the profile icon and sign in with your Google account. You can link your phone to the TV for easier sign-in — the app will show a code to enter at youtube.com/activate.' },
      { title: 'Search for videos', content: `Use the remote's voice button (if available) or the on-screen keyboard to search for videos. Navigate using the arrow keys on your remote. Press OK or Enter to select a video and play it.` },
      { title: 'Use your phone as a remote', content: 'Open YouTube on your phone and tap the cast icon (a rectangle with WiFi waves) in the top right corner. Select your TV from the list. Now you can use your phone to search, browse, and control playback while the video plays on the TV.' },
    ],
  },

  {
    slug: 'download-shows-offline-viewing',
    title: 'How to Download Movies and Shows for Offline Viewing',
    excerpt: 'Download content from Netflix, Disney+, and Amazon Prime to watch on a plane or anywhere without internet.',
    category: 'entertainment' as any,
    tags: ['download', 'offline viewing', 'netflix', 'disney plus', 'amazon prime'],
    readTime: '5 min',
    thumbnailEmoji: '⬇️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Most major streaming services let you download movies and TV shows to your phone or tablet to watch without an internet connection — perfect for flights, road trips, or areas with poor WiFi. Downloads are only available on mobile apps (not web browsers) and are tied to an active subscription. Here is how to do it on the most popular services.`,
    steps: [
      { title: 'Download content on Netflix', content: 'Open the Netflix app on your phone or tablet. Find a show or movie and tap the download icon (a downward arrow) next to the title or episode. Downloaded content appears in the "Downloads" section accessible from the menu.' },
      { title: 'Download content on Disney+', content: 'Open the Disney+ app and find a movie or episode. Tap the download icon below the title. Go to "Downloads" at the bottom of the screen to see your downloaded content and watch it offline.' },
      { title: 'Download content on Amazon Prime Video', content: 'Open the Prime Video app and find a title. Tap the download icon (arrow pointing down) on the episode or movie. Go to "My Stuff" then "Downloads" to access offline content.' },
      { title: 'Manage your storage', content: `Downloaded videos take up significant storage space on your device — a one-hour show can use 1 to 3 GB. Check your phone's storage regularly (Settings, then General, then Storage on iPhone). Delete watched downloads to free up space.` },
      { title: 'Know the expiration rules', content: 'Downloaded content expires after a set period — typically 30 days from download, or 48 hours after you start watching. The app will warn you before expiration. You must be connected to the internet at least once every 30 days to keep downloads active.' },
    ],
  },

  {
    slug: 'use-spotify-playlists-podcasts',
    title: 'How to Use Spotify Playlists and Podcasts',
    excerpt: 'Stream music playlists and podcasts on Spotify for free or with a premium subscription on any device.',
    category: 'app-guides' as any,
    tags: ['spotify', 'music', 'podcasts', 'streaming', 'playlists'],
    readTime: '5 min',
    thumbnailEmoji: '🎵',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Spotify has over 100 million songs and 5 million podcasts available on demand. The free tier lets you listen with occasional ads, while Spotify Premium removes ads and lets you download music for offline listening. It works on phones, computers, smart speakers, and in your car — and it is easy to get started.`,
    steps: [
      { title: 'Create a free Spotify account', content: 'Go to spotify.com or download the Spotify app on your phone. Click "Sign up for free" and register with your email address or your Google or Facebook account. The free plan gives you access to the full library with ads.' },
      { title: 'Search for music or artists', content: `Tap the magnifying glass icon and type an artist name, song title, or genre. Tap a result to see that artist's top songs and albums. Tap the play button next to any song to start listening.` },
      { title: 'Explore curated playlists', content: 'Tap "Search" and browse genres like Pop, Country, Classical, or Jazz. Spotify creates playlists for every mood and occasion — "Chill Hits," "Workout," "Morning Coffee," and many more. Tap a playlist and hit play to enjoy a curated mix.' },
      { title: 'Listen to podcasts', content: 'Tap "Search" and scroll to the "Browse" section, then tap "Podcasts and Shows." Search for a podcast by name or browse by category. Tap an episode and press play. Episodes download automatically on premium plans.' },
      { title: 'Create your own playlist', content: 'Tap "Your Library" at the bottom, then the "+" icon to create a new playlist. Give it a name. To add songs to it, find a song you like, tap the three dots next to it, and choose "Add to playlist." Build your own personalized music collection.' },
    ],
  },

  // ═══════════════════════════════════════════
  // FINANCIAL TECH (6 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'check-credit-score-free',
    title: 'How to Check Your Credit Score for Free',
    excerpt: 'Check your credit score and full credit report for free — no credit card required — using official tools.',
    category: 'financial-tech' as any,
    tags: ['credit score', 'credit report', 'annualcreditreport', 'free', 'personal finance'],
    readTime: '5 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Your credit score affects your ability to get a loan, rent an apartment, or even get some jobs. Checking it regularly helps you catch errors and signs of identity theft early. You are legally entitled to a free credit report from each of the three major bureaus every year, and many banks and apps now show your score for free with no impact on your credit.`,
    steps: [
      { title: 'Get your free credit report at AnnualCreditReport.com', content: 'Go to annualcreditreport.com — this is the official, government-authorized site. Click "Request your free credit reports" and fill in your name, address, Social Security number, and date of birth. You can request reports from Equifax, Experian, and TransUnion.' },
      { title: 'Check your credit score through your bank or credit card', content: 'Many banks and credit card companies show your FICO score for free in their app or website. Look in your account dashboard for a "Credit Score" section. Capital One, Discover, Chase, and most major banks offer this feature.' },
      { title: 'Use Credit Karma for free monitoring', content: 'Go to creditkarma.com and create a free account. Credit Karma shows your TransUnion and Equifax scores and updates them weekly. It also alerts you to changes in your credit report, which can help you catch identity theft early.' },
      { title: 'Review your credit report for errors', content: 'Look through your credit report for accounts you do not recognize, incorrect balances, or late payments that were not actually late. Errors on your credit report can lower your score and are more common than most people realize.' },
      { title: 'Dispute errors if you find them', content: `If you find an error, go to the bureau's website (equifax.com, experian.com, or transunion.com) and file a dispute online. Provide any documentation you have. The bureau must investigate and respond within 30 days.` },
    ],
  },

  {
    slug: 'set-up-online-banking',
    title: 'How to Set Up Online Banking',
    excerpt: 'Set up online access to your bank account to check balances, pay bills, and transfer money from home.',
    category: 'financial-tech' as any,
    tags: ['online banking', 'bank account', 'mobile banking', 'bill pay', 'transfers'],
    readTime: '6 min',
    thumbnailEmoji: '🏦',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Online banking lets you check your balance, view transactions, pay bills, and transfer money without visiting a branch or calling your bank. Every major US bank offers free online and mobile banking. Setting it up takes about 10 minutes, and the convenience of handling banking tasks from home is well worth it.`,
    steps: [
      { title: `Go to your bank's official website`, content: `Type your bank's name into your browser (for example, bankofamerica.com, chase.com, or wellsfargo.com). Do not click search result ads — type the address directly. Look for the "Sign In" or "Enroll in Online Banking" button.` },
      { title: 'Enroll and verify your identity', content: 'Click "Enroll" and enter your account number or debit card number, Social Security number (last 4 or full), and date of birth. The bank uses this to confirm you are the account holder. You will also verify your identity with a code sent to your phone or email.' },
      { title: 'Create a username and password', content: 'Choose a unique username and a strong password with a mix of letters, numbers, and symbols. Do not use the same password you use for other websites. Write it down and store it in a safe place.' },
      { title: 'Set up two-factor authentication', content: 'Enable two-factor authentication (2FA) in your security settings. This sends a one-time code to your phone every time you log in from a new device, preventing anyone else from accessing your account even if they have your password.' },
      { title: 'Download the mobile app', content: `Search for your bank's official app in the App Store or Google Play. Download it and sign in with your new username and password. The mobile app lets you check your balance, deposit checks by photo, and pay bills on the go.` },
    ],
  },

  {
    slug: 'use-zelle-send-money',
    title: 'How to Use Zelle to Send Money Safely',
    excerpt: 'Send money directly to friends, family, or businesses using Zelle — fast, free, and built into most bank apps.',
    category: 'financial-tech' as any,
    tags: ['zelle', 'send money', 'bank transfer', 'p2p payments', 'digital payments'],
    readTime: '5 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Zelle lets you send money directly from your bank account to another person's bank account in minutes — for free. It is built into the apps of most major US banks including Bank of America, Chase, Wells Fargo, and hundreds of others. Because transfers go directly between bank accounts, the money typically arrives within minutes.`,
    steps: [
      { title: 'Find Zelle in your bank app', content: `Open your bank's mobile app and look for "Zelle" in the menu — usually under "Transfer Money," "Pay and Transfer," or "Send Money." If your bank supports Zelle, it will be listed there. You do not need to download a separate app.` },
      { title: 'Enroll your email or phone number', content: 'The first time you use Zelle, you will need to enroll by entering your email address or US mobile phone number and verifying it with a code. This is a one-time setup.' },
      { title: 'Send money', content: `Tap "Send" and enter the recipient's email address or US phone number. Enter the amount you want to send and add a note if you like (such as "Dinner last night"). Review the details and tap "Send." If the recipient is already enrolled in Zelle, they receive the money in minutes.` },
      { title: 'Know the safety rules', content: 'Only send money to people you know and trust — Zelle transfers are instant and generally cannot be reversed. The FTC warns that scammers often ask for Zelle payments pretending to be utilities, government agencies, or relatives in trouble. No legitimate company asks for Zelle payments for bills or emergencies.' },
      { title: 'Request money from others', content: `You can also use Zelle to request money. Tap "Request" and enter the person's email or phone number, then enter the amount. They will receive a notification and can send you the money through their own bank app.` },
    ],
  },

  {
    slug: 'spot-bank-impersonation-scam',
    title: 'How to Spot a Bank Impersonation Scam',
    excerpt: 'Recognize when a caller or text is pretending to be your bank — and what to do to protect your money.',
    category: 'safety-guides' as any,
    tags: ['bank scam', 'fraud', 'impersonation', 'phone scam', 'financial safety'],
    readTime: '6 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Bank impersonation scams are among the most common and damaging financial frauds in the US. Scammers call, text, or email pretending to be your bank's fraud department, claiming your account has been compromised. Their goal is to trick you into handing over your account credentials or transferring money. Knowing what real banks do and do not do is your best defense.`,
    steps: [
      { title: 'Know what your bank will never do', content: 'Your bank will never call you and ask for your full Social Security number, account password, PIN, or one-time security code. If someone asks for any of these while claiming to be your bank, hang up — it is a scam.' },
      { title: 'Do not trust caller ID', content: `Scammers can fake (spoof) phone numbers to make it look like your real bank is calling. A call that shows your bank's name on caller ID does not mean the caller is actually from your bank.` },
      { title: 'Hang up and call your bank directly', content: `If you receive a call or text that worries you, hang up or ignore it. Call the number on the back of your debit card or on your bank's official website to check whether there is actually a problem with your account.` },
      { title: 'Recognize urgent language as a red flag', content: 'Scammers create panic by saying things like "Your account will be closed in 30 minutes" or "Unusual charges are being made right now." This urgency is designed to make you act without thinking. Take a breath and verify independently before doing anything.' },
      { title: 'Report scam attempts', content: `If you receive a bank impersonation call, report it to the FTC at reportfraud.ftc.gov and to your bank's fraud line. If you shared information or sent money, contact your bank immediately — they may be able to stop or reverse a transfer.` },
    ],
  },

  {
    slug: 'freeze-credit-identity-theft',
    title: 'How to Freeze Your Credit to Prevent Identity Theft',
    excerpt: 'Place a free security freeze on your credit reports to prevent criminals from opening accounts in your name.',
    category: 'financial-tech' as any,
    tags: ['credit freeze', 'identity theft', 'equifax', 'experian', 'transunion'],
    readTime: '7 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A credit freeze (also called a security freeze) blocks anyone from opening new credit accounts in your name, which is the most effective tool to prevent identity theft. It is completely free, does not affect your credit score, and does not stop you from using existing accounts. You must freeze your credit at all three bureaus separately, and you can lift it at any time.`,
    steps: [
      { title: 'Freeze your credit at Equifax', content: 'Go to equifax.com/personal/credit-report-services/credit-freeze. Click "Place a Security Freeze" and follow the steps. You will need to create an account and verify your identity. You will receive a PIN — save this, as you will need it to unfreeze your credit later.' },
      { title: 'Freeze your credit at Experian', content: 'Go to experian.com/freeze/center.html and click "Freeze or Manage Freeze." Create an account or log in and follow the instructions to place the freeze. Experian will give you a PIN or confirmation number to save.' },
      { title: 'Freeze your credit at TransUnion', content: 'Go to transunion.com/credit-help/credit-freeze and click "Get Started." Create an account and follow the steps. TransUnion lets you manage the freeze through their website or app.' },
      { title: 'Unfreeze when you need to apply for credit', content: `If you want to apply for a loan, credit card, or apartment that requires a credit check, you will need to temporarily unfreeze your credit at the relevant bureau. Log in to each bureau's website and select "Temporary Lift" — you can usually do this in minutes.` },
      { title: `Consider freezing a child's credit too`, content: 'Identity thieves sometimes target children because the fraud can go undetected for years. If you have children under 16, you can request a credit freeze on their behalf by contacting each bureau with proof of your identity and their relationship to you.' },
    ],
  },

  {
    slug: 'file-taxes-online-free-file',
    title: 'How to File Your Taxes Online with IRS Free File',
    excerpt: 'File your federal income taxes for free online using the IRS Free File program if your income qualifies.',
    category: 'government-civic' as any,
    tags: ['taxes', 'irs', 'free file', 'tax return', 'government'],
    readTime: '7 min',
    thumbnailEmoji: '🧾',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `The IRS Free File program offers free tax filing software to taxpayers who meet the income requirements. This includes free preparation and e-filing of your federal return — no hidden fees. Several companies participate, including TurboTax Free File and TaxAct. Filing electronically gets you your refund faster, often within 21 days.`,
    steps: [
      { title: 'Gather your tax documents', content: `Before you start, collect your W-2 forms from employers, 1099 forms for freelance or retirement income, Social Security statements (SSA-1099), last year's tax return, and your Social Security number and those of any dependents.` },
      { title: 'Go to IRS Free File at irs.gov/freefile', content: 'Type irs.gov/freefile directly into your browser — do not search for it to avoid lookalike scam sites. Click "Use Free Guided Tax Software" to see the list of participating companies. Each has different income requirements and state filing options.' },
      { title: 'Choose a Free File partner and start your return', content: 'Compare the options and click the link to your chosen provider. You will be taken directly to their Free File version. Create an account with your email address and start a new tax return. The software will ask you questions and fill in the forms for you.' },
      { title: 'Enter your income and deductions', content: 'Follow the step-by-step interview. Enter your wages from your W-2, any other income sources, and answer questions about deductions. The software calculates your refund or amount owed automatically as you go.' },
      { title: 'Review and submit your return', content: 'Review your completed return before submitting. If you are getting a refund, enter your bank account number and routing number for direct deposit — it is faster and safer than a paper check. Click "Submit" to file. You will receive an email confirmation that the IRS accepted your return.' },
    ],
  },

  // ═══════════════════════════════════════════
  // HEALTH TECH (6 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-medicare-website-app',
    title: 'How to Use the Medicare Website and App',
    excerpt: 'Access your Medicare information, check coverage, view claims, and find doctors using Medicare.gov and the app.',
    category: 'health-tech' as any,
    tags: ['medicare', 'medicare.gov', 'health insurance', 'government', 'seniors'],
    readTime: '7 min',
    thumbnailEmoji: '🏥',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Medicare.gov is the official website for your Medicare health insurance, and the free app helps you understand your benefits on the go. Creating a Medicare account online lets you view your coverage, see claims that have been filed, find Medicare-approved doctors and facilities, and compare drug plans — all without calling Medicare's often-busy phone line.`,
    steps: [
      { title: 'Create a Medicare.gov account', content: `Go to medicare.gov and click "Log in / Create account." You will create a Login.gov account (the government's secure login system). Enter your email, create a password, and verify your identity. You will then link it to your Medicare number from your red, white, and blue Medicare card.` },
      { title: 'View your coverage and claims', content: 'Once logged in, click "My Medicare" to see your current coverage — Part A (hospital), Part B (medical), Part C (Medicare Advantage), and Part D (drug coverage). Click "Claims" to see recent Medicare claims filed by your doctors and what was paid.' },
      { title: 'Find Medicare-approved doctors', content: 'Click "Find care" and search for doctors, hospitals, or other providers near you. The tool shows whether they accept Medicare and their quality ratings. You can search by specialty, location, or provider name.' },
      { title: 'Compare drug plans using Plan Finder', content: 'Click "Find health and drug plans" to use the Medicare Plan Finder. Enter your drugs and pharmacy to compare Part D drug plans by cost. This tool can help you find a plan that covers your medications at the lowest price.' },
      { title: 'Download the Medicare app', content: `Search for "What's covered" in the App Store or Google Play and download the free official Medicare app. It lets you quickly check whether a specific service or item is covered by Medicare before your appointment.` },
    ],
  },

  {
    slug: 'use-fitness-tracker-smartwatch',
    title: 'How to Use a Fitness Tracker or Smartwatch',
    excerpt: 'Set up and use a fitness tracker or smartwatch to monitor your steps, heart rate, sleep, and daily activity.',
    category: 'health-tech' as any,
    tags: ['fitness tracker', 'smartwatch', 'fitbit', 'apple watch', 'health tracking'],
    readTime: '6 min',
    thumbnailEmoji: '⌚',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Fitness trackers and smartwatches can motivate you to be more active, monitor your heart rate, track your sleep quality, and remind you to move throughout the day. Popular options include Fitbit, Apple Watch, and Garmin. Most connect to a smartphone app where you can see your health trends over time and share data with your doctor.`,
    steps: [
      { title: 'Charge your device fully before setup', content: 'Before using your new tracker for the first time, charge it fully using the included cable or charging dock. Most devices take 1 to 2 hours for a full charge.' },
      { title: 'Download the companion app', content: 'Every tracker requires a companion app on your phone for setup. Fitbit uses the Fitbit app, Apple Watch uses the built-in Watch app on iPhone, and Garmin uses the Garmin Connect app. Search your app store for the app name and install it.' },
      { title: 'Pair the tracker to your phone', content: 'Open the companion app and follow the setup instructions. You will be asked to turn on Bluetooth on your phone and bring the tracker close to it. The app will find the device and pair them automatically. Enter any code if prompted.' },
      { title: 'Set up your health profile', content: 'Enter your age, height, weight, and daily step goal during setup. This information helps the tracker calculate accurate calorie burns and personalize your activity goals. You can update this information later in the app settings.' },
      { title: 'Wear it and explore the app', content: `Wear the tracker on your non-dominant wrist (the hand you do not write with). The device will automatically track steps, heart rate, and sleep. Open the app each morning to review your previous day's activity, sleep score, and heart rate trends.` },
    ],
  },

  {
    slug: 'use-telehealth-doctor-visits',
    title: 'How to Use Telehealth for Doctor Visits',
    excerpt: 'See a doctor by video call from home for non-emergency health concerns — saving time and a trip to the clinic.',
    category: 'health-tech' as any,
    tags: ['telehealth', 'telemedicine', 'doctor video call', 'virtual visit', 'healthcare'],
    readTime: '6 min',
    thumbnailEmoji: '👨‍⚕️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Telehealth lets you see a doctor, nurse practitioner, or specialist through a video call on your phone or computer without leaving home. It is a good option for non-emergency issues like colds, skin concerns, prescription refills, or mental health appointments. Most insurance plans including Medicare now cover telehealth visits, often at the same cost as an in-person visit.`,
    steps: [
      { title: 'Check if your doctor offers telehealth', content: `Call your primary care doctor's office or check their website to see if they offer video visits. Many practices have a patient portal where you can request a telehealth appointment directly. This is the best first option because your doctor already knows your medical history.` },
      { title: 'Use an on-demand telehealth service', content: 'If your doctor does not offer telehealth or you need to see someone quickly, services like Teladoc (teladoc.com), MDLive (mdlive.com), or Amwell (amwell.com) connect you with a licensed doctor in minutes. Many are available 24 hours a day, 7 days a week.' },
      { title: 'Check your insurance coverage', content: 'Before booking, call the number on your insurance card and ask whether telehealth visits are covered and what your copay will be. Medicare covers most telehealth services. Many plans cover telehealth at the same rate as an in-person visit.' },
      { title: 'Prepare for your appointment', content: `Find a quiet, well-lit private space for your video call. Have your insurance card, a list of your current medications, and your pharmacy's phone number ready. Test your phone or computer camera and microphone a few minutes before the appointment.` },
      { title: 'Join the visit and follow up', content: 'You will receive a link or a code to join the video call — usually through your patient portal, email, or the telehealth app. After the visit, prescriptions can be sent directly to your pharmacy and follow-up notes will appear in your patient portal.' },
    ],
  },

  {
    slug: 'fill-prescriptions-online',
    title: 'How to Fill Prescriptions Online',
    excerpt: 'Order your prescription medications online from your pharmacy for delivery or easy pickup — and save with discount tools.',
    category: 'health-tech' as any,
    tags: ['prescriptions', 'online pharmacy', 'goodrx', 'cvs', 'medication'],
    readTime: '6 min',
    thumbnailEmoji: '💊',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Managing prescriptions online saves trips to the pharmacy, lets you set up automatic refills, and makes it easy to track your medications. Most major pharmacies — CVS, Walgreens, Rite Aid, and Walmart — have apps and websites where you can transfer prescriptions, request refills, and choose delivery or in-store pickup. Free discount tools like GoodRx can also significantly reduce your out-of-pocket costs.`,
    steps: [
      { title: 'Create an account with your pharmacy', content: `Go to your pharmacy's website (cvs.com, walgreens.com, etc.) or download their app. Create an account with your name, date of birth, insurance information, and address. Your prescription history and insurance will be linked to your account.` },
      { title: 'Transfer or add a prescription', content: `To transfer a prescription from another pharmacy, enter the current pharmacy's name and your prescription number in the transfer section. To add a new prescription, your doctor can send it electronically to your chosen pharmacy, or you can bring in a paper prescription.` },
      { title: 'Request a refill', content: 'In the app or website, go to "Prescriptions" or "My Medications" and find the medication you need to refill. Click "Refill" and choose whether to pick up in store or have it delivered to your home. Select a pickup time or delivery date.' },
      { title: 'Set up automatic refills', content: 'Most pharmacies offer automatic refills so you never run out of a medication. In your account settings or on the prescription page, look for "Auto Refill" and turn it on. The pharmacy will contact you when refills are ready.' },
      { title: 'Use GoodRx to save money', content: 'If you do not have prescription drug insurance or your copay is high, go to goodrx.com or download the GoodRx app. Enter your medication name and zip code to see prices at pharmacies near you. Show the GoodRx coupon at the pharmacy counter to get a significant discount — sometimes up to 80% off.' },
    ],
  },

  {
    slug: 'use-apple-health-google-fit',
    title: 'How to Use Apple Health or Google Fit',
    excerpt: `Use your phone's built-in health app to track steps, heart rate, sleep, and other health metrics automatically.`,
    category: 'health-tech' as any,
    tags: ['apple health', 'google fit', 'health tracking', 'steps', 'wellness'],
    readTime: '5 min',
    thumbnailEmoji: '❤️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Your smartphone already has a powerful health-tracking app built in. Apple Health (on iPhone) and Google Fit (on Android) automatically track your steps, estimate calories burned, and can pull in data from apps and wearable devices. The data you collect over time gives you and your doctor a clearer picture of your overall health.`,
    steps: [
      { title: `Open your phone's health app`, content: 'On iPhone, the Health app is pre-installed — look for the red heart icon. On Android, download Google Fit from the Play Store if it is not already installed. Open the app and complete the initial setup, entering your age, height, and weight.' },
      { title: 'Set up your health profile', content: 'In Apple Health, tap "Summary" then your profile photo in the top right to enter your health details. In Google Fit, tap the profile icon. Accurate height and weight help the apps calculate calories and body mass index correctly.' },
      { title: 'Carry your phone to track steps automatically', content: `Carrying your phone in your pocket or bag is enough for both apps to count your steps automatically using the phone's built-in motion sensor. No extra setup is needed.` },
      { title: 'Explore your health data', content: 'In Apple Health, tap "Browse" to see all available health categories — steps, heart rate, sleep, and more. In Google Fit, tap "Journal" to see your daily activity. Tap any category to see trends over days, weeks, or months.' },
      { title: 'Connect other apps and devices', content: 'Many apps can share data with Apple Health or Google Fit — including your pharmacy app, fitness trackers, and nutrition apps. In Apple Health, go to Settings, then Health, then Apps to see what is connected. Connecting more sources gives you a more complete picture of your health.' },
    ],
  },

  {
    slug: 'set-up-medication-reminders',
    title: 'How to Set Up Medication Reminders on Your Phone',
    excerpt: `Never miss a dose by setting up medication reminders using your phone's built-in tools or a free app.`,
    category: 'health-tech' as any,
    tags: ['medication reminders', 'pills', 'health', 'alarms', 'phone reminders'],
    readTime: '5 min',
    thumbnailEmoji: '⏰',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Missing doses of important medications can seriously impact your health. Your smartphone can reliably remind you to take your medications at the right time every day — no pill organizer required. You can use your phone's built-in alarm or a dedicated medication reminder app for more features like tracking whether you took a dose.`,
    steps: [
      { title: 'Use the built-in Clock app for simple reminders', content: 'Open the Clock app on your phone and tap "Alarm." Tap the "+" to add a new alarm. Set the time, choose "Repeat" to make it daily, and give it a label like "Morning Medication." Tap "Save." This works on both iPhone and Android.' },
      { title: 'Use Siri or Google Assistant to set a reminder', content: 'Say "Hey Siri, remind me to take my blood pressure pill every day at 9 AM" or "Hey Google, remind me to take my medication every morning at 8 AM." Your voice assistant will create the recurring reminder automatically.' },
      { title: 'Download a dedicated medication app', content: 'For more features, download a medication management app. Medisafe (free) and MyTherapy (free) are highly rated apps that let you log each medication with its dose and schedule, remind you when doses are due, and track whether you took each one.' },
      { title: 'Set up Medisafe or MyTherapy', content: 'Open the app and tap "Add Medication." Enter the medication name, dosage, and the time(s) you need to take it. The app will send you a push notification at the scheduled time. Tap the notification to confirm you took the dose.' },
      { title: 'Ask a family member to join as a caregiver', content: `Medisafe and MyTherapy let a family member or caregiver receive alerts if you miss a dose. In the app settings, look for "Add Care Partner" or "Caregiver Network" and enter the family member's email. They will get a notification if you miss a dose, providing an extra safety net.` },
    ],
  },

  // ═══════════════════════════════════════════
  // COMMUNICATION (6 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'use-whatsapp-free-calls',
    title: 'How to Use WhatsApp for Free Calls and Messages',
    excerpt: 'Send free texts and make free video or voice calls to anyone in the world using WhatsApp on your phone.',
    category: 'communication' as any,
    tags: ['whatsapp', 'free calls', 'messaging', 'international calls', 'video calls'],
    readTime: '5 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `WhatsApp is the world's most popular messaging app, with over 2 billion users. It lets you send text messages, voice messages, photos, videos, and make free voice or video calls to anyone else who has WhatsApp — including friends and family in other countries. All messages and calls are encrypted for privacy, and it uses your WiFi or data plan rather than your phone minutes.`,
    steps: [
      { title: 'Download and install WhatsApp', content: 'Search for "WhatsApp" in the App Store (iPhone) or Google Play (Android) and download the free app. Open it and tap "Agree and Continue."' },
      { title: 'Verify your phone number', content: 'Enter your country code and phone number. WhatsApp will send a 6-digit verification code by text message. Enter the code to verify your account. WhatsApp uses your phone number as your identity — there is no separate username or password needed.' },
      { title: 'Set up your profile', content: 'Enter your name and optionally add a profile photo. Tap the checkmark when done. WhatsApp will automatically show you which of your existing phone contacts also use WhatsApp.' },
      { title: 'Send a message or make a call', content: 'Tap the chat bubble icon at the bottom (or top right on Android). Tap a contact name to open a conversation and type a message. To make a call, open a conversation and tap the phone icon for a voice call or the video camera icon for a video call. Both are free.' },
      { title: 'Create a group chat', content: 'To chat with multiple people at once — great for family groups — tap the new chat icon, then "New Group." Select the contacts to add, then give the group a name and photo. You can have up to 1,024 people in a WhatsApp group.' },
    ],
  },

  {
    slug: 'use-zoom-video-calls',
    title: 'How to Use Zoom for Video Calls',
    excerpt: 'Join and host video meetings on Zoom — for family calls, doctor appointments, or community group meetings.',
    category: 'communication' as any,
    tags: ['zoom', 'video calls', 'meetings', 'telehealth', 'video conferencing'],
    readTime: '6 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Zoom is one of the most widely used video calling platforms in the world, used for everything from family gatherings to doctor appointments to community meetings. It is free for most personal use, allowing unlimited one-on-one calls and up to 40-minute group meetings. You can join a Zoom meeting without creating an account, but creating a free account lets you host your own meetings.`,
    steps: [
      { title: 'Download the Zoom app', content: 'Go to zoom.us/download on your computer and download the Zoom desktop client, or search for "Zoom" in the App Store or Google Play on your phone. The app is free to download and use.' },
      { title: 'Join a meeting with a link or ID', content: 'When someone sends you a Zoom meeting link, click it to join. If they send you a Meeting ID and passcode instead, open the Zoom app, tap "Join," enter the Meeting ID, and enter the passcode when prompted.' },
      { title: 'Manage your audio and video', content: 'When joining, you will be asked whether to join with video and audio. Click "Join with Video" to be seen, and click "Join with Computer Audio" to use your microphone and speakers. The microphone and camera icons at the bottom of the screen let you mute or turn off video at any time during the call.' },
      { title: 'Host your own free meeting', content: 'Create a free Zoom account at zoom.us. Open the app, click "New Meeting" to start an instant meeting, or click "Schedule" to plan a meeting for a future time. Once in the meeting, click "Participants" then "Invite" to send a link to your contacts.' },
      { title: 'Use the chat and reaction features', content: 'During a call, click "Chat" in the toolbar to type a message visible to all participants. Click "Reactions" to send a thumbs up or clap without interrupting the speaker. Use the "Raise Hand" button to signal that you want to speak.' },
    ],
  },

  {
    slug: 'use-google-meet-free',
    title: 'How to Use Google Meet for Free Video Calls',
    excerpt: 'Start a free video call with Google Meet directly from your browser — no app download required.',
    category: 'communication' as any,
    tags: ['google meet', 'video calls', 'free video call', 'google', 'meetings'],
    readTime: '5 min',
    thumbnailEmoji: '🎥',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Google Meet is a free video calling service from Google that works directly in any web browser — no software to install. It is built into Gmail, so if you have a Gmail account, you already have access. Free calls support up to 100 participants and are unlimited in length for one-on-one calls.`,
    steps: [
      { title: 'Go to meet.google.com', content: 'Open any web browser and go to meet.google.com. Sign in with your Gmail account. If you do not have a Gmail account, you can create one for free at gmail.com.' },
      { title: 'Start a new meeting', content: 'Click "New meeting" and then "Start an instant meeting" to begin a video call right now. Your camera and microphone will activate — allow access when your browser asks.' },
      { title: 'Invite others to join', content: 'Once in the meeting, click the person icon or "Add others" button. You can copy the meeting link and send it by email, text, or any messaging app. Anyone with the link can join from their browser without needing a Google account.' },
      { title: 'Join a meeting you were invited to', content: 'If someone sends you a Google Meet link (it looks like meet.google.com/abc-defg-hij), click the link. If you are signed into your Google account, you can join immediately. If not, you can join as a guest by entering your name.' },
      { title: 'Use Meet from Gmail', content: 'Google Meet is also accessible directly from Gmail. In the left sidebar of Gmail, look for "Meet" with a video camera icon. Click "New meeting" or "Join a meeting" to start or join a call without leaving your email.' },
    ],
  },

  {
    slug: 'share-photos-family-albums',
    title: 'How to Share Photos with Family Using Shared Albums',
    excerpt: 'Create a shared photo album so the whole family can add and view photos from their own devices.',
    category: 'communication' as any,
    tags: ['shared albums', 'photos', 'family', 'icloud', 'google photos'],
    readTime: '5 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Shared photo albums let your whole family add photos to one place so everyone can see them, regardless of whether they use iPhone or Android. This is much easier than texting individual photos and avoids the issue of photos getting lost in chat threads. Both Apple's iCloud Shared Albums and Google Photos shared albums work well and are free to use.`,
    steps: [
      { title: 'Create a shared album in Google Photos (works on any device)', content: 'Open the Google Photos app (free on iPhone and Android). Tap "Library" at the bottom, then "+" to create a new album. Give it a name like "Family 2026." Tap the three dots in the top right corner and choose "Share album" to invite family members by email.' },
      { title: 'Create a shared album in iCloud (for iPhone users)', content: 'Open the Photos app on iPhone. Tap the "+" icon in the Albums tab and choose "New Shared Album." Name it and enter the email addresses of the people you want to invite. Invited people will get a notification to join.' },
      { title: 'Add photos to the shared album', content: 'To add a photo, tap and hold it in your photo library to select it. Tap the share icon and choose the shared album from the list. The photo will appear in the album for all members to see.' },
      { title: 'Let family members contribute their own photos', content: 'When setting up the shared album, make sure "Subscribers can post" is turned on. Family members who accept the invitation can then add their own photos and videos directly to the same album.' },
      { title: 'View and download photos from the album', content: 'Family members can open the shared album at any time to view all photos. They can tap any photo and use the download icon to save it to their own device. This way, everyone has copies of family moments without having to text each photo individually.' },
    ],
  },

  {
    slug: 'use-marco-polo-video-messages',
    title: 'How to Use Marco Polo for Video Messages',
    excerpt: 'Send short video messages to friends and family with Marco Polo — like a walkie-talkie for video.',
    category: 'app-guides' as any,
    tags: ['marco polo', 'video messages', 'family', 'messaging', 'app'],
    readTime: '5 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Marco Polo is a free app that lets you send short video messages to friends and family — like a video walkie-talkie. Unlike a live video call, the other person does not need to be available at the same time. They can watch your video whenever they are ready and reply in their own time. It is popular for staying connected with family across different time zones.`,
    steps: [
      { title: 'Download Marco Polo', content: 'Search for "Marco Polo" in the App Store (iPhone) or Google Play (Android) and download the free app.' },
      { title: 'Create an account', content: 'Open the app and enter your phone number. Marco Polo will send a verification code by text — enter it to confirm your number. Add your first name and a profile photo to help friends recognize you.' },
      { title: 'Add a contact', content: 'Tap the "+" or "New" button to add a contact. You can search by phone number or name from your contacts. If the person already has Marco Polo, they will appear. If not, you can invite them by text message.' },
      { title: 'Record and send a video', content: `Tap a contact's name to open the conversation. Press and hold the large camera button to record your video message — speak naturally as if you were talking to them in person. Release the button when you are done and it sends automatically.` },
      { title: 'Watch and reply to videos', content: 'When a friend sends you a video, you will get a notification. Open the app and tap their name to watch it. Press the camera button to record your reply. Videos stay in the conversation so you can rewatch them, and you can see whether the other person has watched your message.' },
    ],
  },

  {
    slug: 'block-unwanted-calls-texts',
    title: 'How to Block Unwanted Calls and Texts',
    excerpt: 'Block spam callers, robocalls, and unwanted texts on your iPhone or Android phone using built-in settings.',
    category: 'phone-guides' as any,
    tags: ['block calls', 'spam calls', 'robocalls', 'phone safety', 'do not call'],
    readTime: '5 min',
    thumbnailEmoji: '🚫',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Spam calls and unwanted texts are an enormous nuisance, and most people receive several every week. Both iPhone and Android have built-in tools to block specific numbers and silence unknown callers. Carrier-level tools and the National Do Not Call Registry provide additional layers of protection. Knowing how to use these tools gives you much more control over who can reach you.`,
    steps: [
      { title: 'Block a specific number on iPhone', content: 'Go to your recent calls list and tap the "i" (information) icon next to the number you want to block. Scroll down and tap "Block this Caller," then confirm. The number will no longer be able to call, text, or FaceTime you.' },
      { title: 'Block a specific number on Android', content: 'Open your Phone app and go to recent calls. Tap and hold the number you want to block, then tap "Block / report spam" and confirm. You can also block a text by tapping and holding the message, then selecting "Block."' },
      { title: 'Silence unknown callers on iPhone', content: 'Go to Settings, then Phone, then "Silence Unknown Callers" and turn it on. Calls from numbers not in your contacts will go directly to voicemail without ringing. This dramatically reduces spam calls.' },
      { title: `Use your carrier's free spam protection`, content: `All major US carriers offer free robocall blocking tools. AT&T offers Call Protect, T-Mobile offers Scam Shield, and Verizon offers Call Filter. Search your carrier's website for their spam blocking app and enable it — they are free and can block millions of known spam numbers automatically.` },
      { title: 'Register with the Do Not Call Registry', content: 'Go to donotcall.gov and register your phone number with the National Do Not Call Registry. This legally prohibits most telemarketers from calling you. It will not stop scammers, but it reduces legitimate marketing calls within 31 days of registration.' },
    ],
  },

  // ═══════════════════════════════════════════
  // SMART HOME (4 guides)
  // ═══════════════════════════════════════════

  {
    slug: 'set-up-smart-doorbell',
    title: 'How to Set Up a Smart Doorbell — Ring and Nest',
    excerpt: 'Install and set up a Ring or Nest video doorbell to see and talk to visitors from your phone, anywhere.',
    category: 'smart-home' as any,
    tags: ['ring doorbell', 'nest hello', 'video doorbell', 'smart home', 'security'],
    readTime: '7 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A smart video doorbell lets you see who is at your door and speak to them through your phone — whether you are inside your home or miles away. Ring and Nest (Google) are the most popular brands. Both connect to your home WiFi, send motion alerts to your phone, and record video when someone approaches. They are a popular security upgrade for homes of all sizes.`,
    steps: [
      { title: 'Choose your doorbell and gather what you need', content: 'Ring and Nest video doorbells are available at Amazon, Best Buy, Home Depot, and Costco. Before installation, check whether your home has existing doorbell wiring (most US homes do). If not, choose a battery-powered model that does not require wiring.' },
      { title: 'Download the app before installing', content: 'Download the Ring app (for Ring devices) or the Google Home app (for Nest devices) on your smartphone before you start the hardware installation. Create an account with your email address.' },
      { title: 'Install the doorbell hardware', content: 'Follow the installation guide included in the box. For wired models, turn off the power to your doorbell at your circuit breaker before connecting any wires. Attach the mounting bracket, connect the wires, and snap the doorbell display onto the base. Turn the power back on at the breaker.' },
      { title: 'Connect to WiFi through the app', content: 'Open the Ring or Google Home app and tap "Set up a device" or "Add device." The app will guide you through connecting the doorbell to your home WiFi network. Make sure you are on your 2.4 GHz WiFi network, as most doorbells work better on that frequency.' },
      { title: 'Adjust motion zones and alerts', content: 'In the app, go to the device settings and tap "Motion Settings." Set the motion zones to cover your driveway or walkway and exclude busy streets to reduce false alerts. Choose whether you want phone notifications for motion, doorbell presses, or both.' },
    ],
  },

  {
    slug: 'use-smart-plugs-automate-home',
    title: 'How to Use Smart Plugs to Automate Your Home',
    excerpt: 'Control any lamp or appliance with your phone or voice using an inexpensive smart plug — no rewiring needed.',
    category: 'smart-home' as any,
    tags: ['smart plug', 'smart home', 'kasa', 'alexa', 'home automation'],
    readTime: '5 min',
    thumbnailEmoji: '🔌',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Smart plugs are one of the easiest and most affordable ways to start automating your home. You plug one into any standard outlet, then plug any device (a lamp, a fan, a coffee maker) into the smart plug. You can then turn that device on or off using your phone or your voice — and set schedules so things happen automatically. Popular brands include Kasa, Wyze, and Amazon Smart Plug.`,
    steps: [
      { title: 'Buy a smart plug', content: 'Smart plugs are available for $10 to $20 each at Amazon, Walmart, Best Buy, and Target. Popular reliable options include the Kasa Smart Plug (TP-Link), the Amazon Smart Plug (works with Alexa), and the Wyze Plug. Make sure it is compatible with your smart speaker if you have one.' },
      { title: 'Plug it in and download the app', content: 'Plug the smart plug into a standard outlet. Download the companion app — Kasa uses the Kasa app, Wyze uses the Wyze app. Create a free account with your email address.' },
      { title: 'Connect the smart plug to your WiFi', content: 'Open the app and tap "Add device" or "+". Follow the on-screen instructions to connect the smart plug to your home WiFi network. The process takes about 2 to 3 minutes and usually involves pressing a button on the plug while the app sets it up.' },
      { title: 'Control it with the app', content: 'Once set up, you will see the smart plug in your app. Tap the power button icon to turn it on or off from anywhere. Plug a lamp into the smart plug and test it — you should see the light turn on and off when you tap the app.' },
      { title: 'Create a schedule', content: 'In the app, tap your smart plug and find "Schedule" or "Automations." Set it to turn on at sunset and off at 10 PM, for example. You can also add it to Amazon Alexa or Google Home to control it by voice: say "Alexa, turn on the living room lamp."' },
    ],
  },

  {
    slug: 'set-up-smart-thermostat',
    title: 'How to Set Up a Smart Thermostat',
    excerpt: `Install and set up a smart thermostat to control your home's temperature from your phone and save on energy bills.`,
    category: 'smart-home' as any,
    tags: ['smart thermostat', 'nest', 'ecobee', 'energy savings', 'home automation'],
    readTime: '7 min',
    thumbnailEmoji: '🌡️',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `A smart thermostat lets you control your home's heating and cooling from your smartphone and can learn your schedule to automatically save energy when you are away. The Nest Learning Thermostat and ecobee are the most popular options. Studies show smart thermostats save homeowners an average of $140 per year on energy bills, making them one of the best return-on-investment smart home upgrades.`,
    steps: [
      { title: 'Check compatibility before buying', content: 'Most homes with a standard forced-air heating and cooling system are compatible. Use the compatibility checker on the Nest website (nest.com/compatibility) or ecobee website before purchasing. You will need to look at the wires on your current thermostat — check for a wire labeled "C" or "Common" for the best experience.' },
      { title: 'Turn off power and remove your old thermostat', content: 'Turn off the power to your HVAC system at the circuit breaker before starting. Remove your old thermostat from the wall and photograph the wiring configuration before disconnecting anything — you will need to replicate it on the new thermostat.' },
      { title: 'Install the new thermostat', content: `Attach the new thermostat's base plate to the wall, connect the wires to the matching terminals (use the photo you took), and snap the thermostat display onto the base. Turn the power back on at the breaker.` },
      { title: 'Connect to WiFi using the app', content: `Download the Nest app or ecobee app and create a free account. Follow the in-app setup instructions to connect your new thermostat to your home WiFi. The thermostat's screen will also guide you through the process.` },
      { title: 'Set your schedule and preferences', content: 'Use the app to set your preferred temperatures for morning, daytime, evening, and night. Both Nest and ecobee will learn your schedule over time and suggest adjustments. Enable the "Away" mode so temperatures automatically adjust when everyone leaves home.' },
    ],
  },

  {
    slug: 'view-smart-home-cameras-phone',
    title: 'How to View Smart Home Cameras on Your Phone',
    excerpt: 'Check your home security cameras live from anywhere using your phone — with Blink, Arlo, and Ring cameras.',
    category: 'smart-home' as any,
    tags: ['security cameras', 'blink', 'arlo', 'ring', 'home security'],
    readTime: '6 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-16',
    difficulty: 'Beginner' as any,
    body: `Smart home cameras let you check on your home in real time from anywhere in the world using your phone. Whether you want to monitor your front door, back yard, or the inside of your home while you are away, cameras from brands like Blink, Arlo, and Ring are easy to set up and can send you alerts when motion is detected. Most offer free cloud storage for short clips or affordable subscription plans for longer recordings.`,
    steps: [
      { title: 'Choose and install your camera', content: 'Blink cameras are battery-powered and easy to place anywhere — great for renters or locations without easy wiring. Arlo cameras offer strong video quality and weatherproofing. Ring cameras integrate well if you already have a Ring doorbell. Mount the camera in your desired location following the included instructions.' },
      { title: 'Download the companion app', content: 'Download the app for your camera brand: Blink Home Monitor app, Arlo app, or Ring app from the App Store or Google Play. Create a free account with your email address.' },
      { title: 'Add the camera in the app', content: 'Open the app and tap "Add Device" or "+" to add your camera. The app will scan a QR code on the camera or walk you through connecting it to your home WiFi network. This takes about 3 to 5 minutes.' },
      { title: 'View the live feed', content: 'Once connected, tap the camera in the app to see a live video feed. Most apps show a thumbnail of recent motion clips on the main screen. Tap "Live View" to see what the camera sees in real time from wherever you are.' },
      { title: 'Set up motion alerts', content: `In the app's settings for each camera, enable "Motion Alerts." You can adjust the sensitivity to reduce false alerts from passing cars or swaying trees. When motion is detected, you will receive a push notification on your phone with a short video clip of what triggered it.` },
    ],
  },

];
