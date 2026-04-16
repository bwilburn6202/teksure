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
      { title: 'Click Create an Account', content: 'You will be directed to create a Login.gov account. This is the federal government\'s secure login system. Enter your email address and choose a strong password.' },
      { title: 'Verify your email', content: 'Check your email for a message from Login.gov. Click the verification link in the email to confirm your address. If you do not see it, check your spam or junk folder.' },
      { title: 'Set up two-factor authentication', content: 'Login.gov will ask you to set up a second way to verify your identity — choose text message or phone call. Enter your phone number and type in the code they send you.' },
      { title: 'Verify your identity', content: 'Enter your Social Security number, answer security questions about your credit history, and if asked, upload a photo of your driver\'s license or state ID. This step may take a few minutes.' },
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
      { title: 'Go to irs.gov/freefile', content: 'Open your web browser and go to irs.gov/freefile. Do not go to a tax company\'s website directly — always start from the IRS site to ensure you get the truly free version.' },
      { title: 'Choose your filing option', content: 'Select "Guided Tax Software" if your AGI is $84,000 or less. Select "Free File Fillable Forms" if your income is higher or you are comfortable with tax forms.' },
      { title: 'Gather your documents', content: 'Have ready: your W-2 forms, any 1099 forms, Social Security numbers for you and dependents, bank routing and account numbers, and last year\'s AGI.' },
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
      { title: 'Go to vote.gov', content: 'Open your web browser and go to vote.gov. This is the official federal website that connects you to your state\'s voter registration system.' },
      { title: 'Select your state', content: 'Choose your state from the dropdown menu. You will be directed to your state\'s official online voter registration portal.' },
      { title: 'Gather your ID information', content: 'Have ready: your driver\'s license or state ID number, the last four digits of your Social Security number, your date of birth, and your current home address.' },
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
      { title: 'Upload your passport photo', content: 'Take a new photo with plain white background, good lighting, and face centered. Use the State Department\'s photo tool to verify it meets requirements.' },
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
      { title: 'Find your state\'s application', content: 'Go to fns.usda.gov/snap and click "SNAP State Directory." Select your state to find the link to your online application portal.' },
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
      { title: 'Set up alert locations', content: 'In the Alerts section, add up to five locations — your home, workplace, and family members\' cities.' },
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
      { title: 'Dispute any errors', content: 'Use each bureau\'s online dispute process. They must investigate within 30 days and correct verified errors.' },
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
      { title: 'Find your state\'s DMV website', content: 'Search "[your state] DMV" in Google and look for the official .gov website.' },
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
      { title: 'Find your state\'s unemployment website', content: 'Search "[your state] unemployment benefits" or go to careeronestop.org for a direct link to your state\'s portal.' },
      { title: 'Create an account', content: 'Most states require an online account. Enter your personal information, email, and a password.' },
      { title: 'Gather employment information', content: 'Collect: Social Security number, driver\'s license number, employer names and addresses for the past 18 months, employment dates, and reasons for leaving.' },
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
      { title: 'Search for your county\'s tax website', content: 'Google "[your county name] property tax" or "[your county name] assessor." Click the official .gov website.' },
      { title: 'Search for your property', content: 'Enter your home address, parcel number, or name to find your property record.' },
      { title: 'Review your assessed value', content: 'Check the value the county assigned to your property — this is used to calculate your tax and may differ from market value.' },
      { title: 'Check balance and due dates', content: 'Review how much you owe and when payments are due. Note any past-due amounts or penalties.' },
      { title: 'Look into exemptions', content: 'Check if you qualify for homestead, senior, veteran, or disability exemptions that can lower your bill.' },
      { title: 'Appeal if assessment is too high', content: 'Look for the "Appeal" section on your assessor\'s website. Note the deadline — typically 30 to 90 days from your assessment notice.' },
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
];
