// guides-batch-121 — Online Banking & Money Safety (20 guides)
// Published 2026-05-03

import type { Guide } from './guides';

export const guidesBatch121: Guide[] = [
  {
    slug: 'how-to-set-up-online-banking',
    title: 'How to Set Up Online Banking for the First Time',
    excerpt: 'A step-by-step walkthrough for creating your bank\'s online account so you can check your balance and pay bills from home.',
    category: 'online-banking',
    tags: ['online banking', 'bank account', 'setup', 'beginners'],
    readTime: '7 min',
    thumbnailEmoji: '🏦',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Online banking lets you check your account balance, pay bills, review transactions, and transfer money — all from your phone, tablet, or computer, without driving to a branch. The vast majority of US banks offer free online access to every account holder.

Setting it up takes about 15 minutes and only has to be done once. After that, logging in takes seconds.

Before you start, gather two things: your bank account number (found on a check or your last paper statement) and the debit card or ATM card tied to that account. You will also need access to your email address or mobile phone, because your bank will send a verification code to confirm it is really you.

Every bank's website or app looks slightly different, but the process is almost always the same: visit the bank's official website or download the bank's official app, click "Enroll" or "Sign Up," enter your account information, create a username and password, and verify your identity with a code your bank sends you.

A few safety reminders: always go directly to your bank's website by typing the address yourself (for example, chase.com or wellsfargo.com) rather than clicking a link in an email. The real enrollment page will start with https:// — the "s" stands for secure. Never share your password with anyone, including people who claim to be from the bank.

If you get stuck at any point, call the phone number printed on the back of your debit card. A bank representative can walk you through each screen over the phone.

(Source: FDIC, fdic.gov/resources/consumers/money-smart)`,
    steps: [
      {
        title: 'Gather your account information',
        content: 'Find your bank account number and routing number. Both appear on the bottom of a personal check: the routing number is the first 9 digits on the left, and your account number follows it. You can also call your bank or check your last paper statement.',
        tip: 'Quick Tip: If you do not have checks, the last four digits of your debit card are not your full account number — call the bank\'s customer service line to get the full number.',
      },
      {
        title: 'Go to your bank\'s official website',
        content: 'Open a browser and type your bank\'s web address directly into the address bar at the top. For example: bankofamerica.com, chase.com, or usbank.com. Do not search for it in Google and click an ad — go directly to the address you know.',
        warning: 'Watch out for look-alike websites with small typos like "chasse.com" or "bankofamerica-login.com." Your real bank\'s address is printed on your statement or on the back of your card.',
      },
      {
        title: 'Click "Enroll" or "Sign Up for Online Banking"',
        content: 'Look for a button or link that says Enroll, Register, Sign Up, or Set Up Online Banking. It is usually near the login box. Click it and follow the prompts. The bank will ask for your account number, Social Security Number (last 4 digits or full, depending on the bank), and your date of birth to confirm your identity.',
      },
      {
        title: 'Create your username and password',
        content: 'Choose a username that is not your full name or email address — something only you would know. For the password, use at least 12 characters mixing letters, numbers, and a symbol. Write it down and store it somewhere safe at home, not on a sticky note on your computer.',
        tip: 'Quick Tip: A password like "Sunrise!2026BlueSky" is strong and much easier to remember than a string of random characters.',
      },
      {
        title: 'Verify your identity with a code',
        content: 'Your bank will send a 6-digit code to your phone number or email address on file. Check your texts or email, type that code into the website within a few minutes, and click Confirm. This step proves to the bank that you — not a stranger — are setting up the account.',
      },
      {
        title: 'Log in and explore your account',
        content: 'Once enrolled, log in with your new username and password. You should see your account balance, recent transactions, and menu options for paying bills, transferring money, and viewing statements. Take a few minutes to click around and get familiar.',
      },
    ],
  },

  {
    slug: 'understanding-fdic-insurance',
    title: 'What Is FDIC Insurance and How Does It Protect You?',
    excerpt: 'Learn what FDIC insurance covers, how much is protected, and why your money is safe at an FDIC-insured bank.',
    category: 'online-banking',
    tags: ['FDIC', 'bank insurance', 'deposit protection', 'safety'],
    readTime: '5 min',
    thumbnailEmoji: '🛡️',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `FDIC stands for Federal Deposit Insurance Corporation. It is a US government agency that protects the money you deposit in banks. If your bank were ever to fail or go out of business, the FDIC guarantees that you get your money back — up to a specific limit.

The current standard limit is $250,000 per depositor, per bank, per ownership category. That means if you have $100,000 in a checking account and $80,000 in a savings account at the same bank, both are fully protected because the total ($180,000) is under the $250,000 limit.

"Ownership category" matters for larger balances. Joint accounts (accounts held by two people) are insured up to $250,000 per co-owner, so a joint account for a married couple could be protected up to $500,000 at one bank.

FDIC insurance has been in place since 1933 and has protected depositors in every bank failure since. No FDIC-insured depositor has ever lost a single cent of insured deposits.

To check whether your bank is FDIC-insured, look for the FDIC logo on the bank's website or at the teller window, or use the free lookup tool at bankfind.fdic.gov. Credit unions are covered by a similar program called NCUA (National Credit Union Administration), which offers the same $250,000 protection.

What FDIC does NOT cover: investment accounts (stocks, bonds, mutual funds), cryptocurrency, life insurance policies, and safe-deposit box contents. These are kept at banks but are not considered deposits, so they are not insured.

(Source: FDIC, fdic.gov/resources/resolutions/bank-failures/failed-bank-list)`,
    steps: [
      {
        title: 'Confirm your bank is FDIC-insured',
        content: 'Look for the blue and gold FDIC logo on your bank\'s website, at the branch entrance, or on your account statements. You can also visit bankfind.fdic.gov and type your bank\'s name into the search box to confirm.',
      },
      {
        title: 'Understand your coverage limit',
        content: 'The standard limit is $250,000 per depositor per bank. Add up all your accounts at the same bank — checking, savings, CDs (certificates of deposit). As long as the total stays under $250,000, everything is fully protected.',
        tip: 'Quick Tip: If your savings exceed $250,000, spreading money across two or more FDIC-insured banks increases your total coverage.',
      },
      {
        title: 'Know what counts as a deposit',
        content: 'Checking accounts, savings accounts, money market deposit accounts, and CDs are all covered. Investment accounts (like brokerage accounts, stocks, or annuities) sold through a bank are NOT covered by FDIC — they carry separate risks.',
        warning: 'If a bank employee suggests moving money from an FDIC-insured savings account into an investment product, ask specifically whether that product is FDIC-insured. It usually is not.',
      },
      {
        title: 'Understand what happens if a bank fails',
        content: 'The FDIC steps in immediately. In most cases, another bank takes over and you can access your money the next business day as if nothing happened. In rare cases, the FDIC mails you a check within a few days for the full insured amount.',
      },
    ],
  },

  {
    slug: 'mobile-check-deposit-how-to',
    title: 'How to Deposit a Check With Your Phone Camera',
    excerpt: 'Skip the trip to the bank — learn how to take a photo of a check and deposit it safely from home in under 3 minutes.',
    category: 'online-banking',
    tags: ['mobile deposit', 'check', 'bank app', 'phone'],
    readTime: '6 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Mobile check deposit is a feature in your bank's app that lets you take two photos of a paper check — front and back — and deposit it into your account without going to the bank or ATM. The money usually appears in your account within one business day, and for amounts under $225, most banks make at least that portion available the same day.

This feature works for most checks: personal checks, payroll checks, government checks (like tax refunds), and money orders. There are daily and monthly deposit limits — usually $2,500 to $10,000 per day depending on your bank.

Before you begin, download your bank's official mobile app if you haven't already. Find it in the App Store (iPhone) or Play Store (Android) by searching for your bank's exact name. Log in with your online banking username and password.

After depositing, keep the physical check for at least 14 days before destroying it. Many banks ask you to mark the check "VOID — Deposited [date]" on the back after the deposit. This prevents accidental double deposits.

Never deposit a check you did not expect to receive. Scammers sometimes send real-looking checks with a request to deposit them and send back part of the money. These are called "overpayment scams" — the check bounces weeks later and you lose whatever you sent.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov/ask-cfpb/what-is-mobile-check-deposit)`,
    steps: [
      {
        title: 'Sign the back of the check',
        content: 'Before taking any photos, flip the check over and sign your name on the line at the back. Many banks also require you to write "For Mobile Deposit Only" under your signature. Check your bank\'s app for specific instructions — they are usually shown on the deposit screen.',
        warning: 'Do not skip the signature. A check without your endorsement on the back may be rejected or cause a delay.',
      },
      {
        title: 'Open your bank\'s app and find "Deposit Check"',
        content: 'Log into your bank\'s official mobile app. Look in the menu for "Deposit," "Mobile Deposit," or "Deposit a Check." It may be under a "Transactions" or "Move Money" section. Tap it.',
      },
      {
        title: 'Choose the account and enter the amount',
        content: 'Select which account you want the money deposited into (checking or savings). Then type in the exact dollar amount written on the check. Double-check this number — it must match what\'s on the check.',
      },
      {
        title: 'Take photos of the front and back',
        content: 'The app will ask you to photograph the front of the check. Place the check flat on a dark, solid-colored surface (dark countertop or dark tablecloth works well) in good lighting. Hold your phone directly above the check. The app will usually auto-capture when the image is in focus. Then flip the check over and do the same for the back.',
        tip: 'Quick Tip: If auto-capture isn\'t working, look for a camera icon or a "Capture" button to take the photo manually.',
      },
      {
        title: 'Review and submit',
        content: 'The app will show you previews of both photos and the amount you entered. Confirm everything looks clear and correct, then tap Submit or Deposit. You should get a confirmation message within seconds.',
      },
      {
        title: 'Keep the physical check for 14 days',
        content: 'Write "VOID — Deposited [today\'s date]" on the front of the check and store it somewhere safe for at least two weeks. Once your statement confirms the deposit cleared, you can shred it.',
      },
    ],
  },

  {
    slug: 'pay-bills-online-safely',
    title: 'How to Pay Bills Online Safely',
    excerpt: 'Learn the two safest ways to pay bills online — through your bank or the company\'s own website — and how to avoid common mistakes.',
    category: 'online-banking',
    tags: ['pay bills', 'online payments', 'bill pay', 'safety'],
    readTime: '7 min',
    thumbnailEmoji: '💳',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Paying bills online is safe when you use the right method. There are two reliable approaches: paying through your bank's bill-pay system, or logging directly into the company's own website (your electric company, insurance provider, etc.) and paying there.

Both methods are far safer than mailing a paper check because your account number is encrypted during the transaction and never sits in a mailbox.

The safest method overall is your bank's bill pay system. You log into your bank's website or app, add a "payee" (the company you owe money to), enter the amount, and your bank sends the payment — either electronically or as a printed check — directly to the company. Your bank's bill-pay service is usually free with a checking account.

The second method — paying on the company's own website — works well too. Go directly to the company's website (type it yourself, don't click email links), log into your account, and enter your checking account number or debit/credit card to pay.

What to avoid: never pay a bill by clicking a link in an email from a company claiming you owe money. Always go to that company's website yourself. Scammers create fake payment pages that look identical to real ones. Also avoid wire transfers and gift cards for bill payments — no legitimate utility or government agency ever asks for payment via gift card.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov)`,
    steps: [
      {
        title: 'Set up bill pay through your bank',
        content: 'Log into your bank\'s website or app. Look for "Bill Pay," "Pay Bills," or "Payments" in the menu. Click "Add a Payee" or "Add a Company," then enter the company name, your account number with them, and their mailing address (usually on your bill). Save the payee — you only do this setup once per company.',
      },
      {
        title: 'Schedule a payment',
        content: 'Select the payee you set up, enter the payment amount, and choose a payment date. Set the date at least 3-5 business days before the actual due date to allow for processing time. Your bank will show you an estimated delivery date.',
        tip: 'Quick Tip: Schedule payments 5 days early so you never pay a late fee if there is a processing delay.',
      },
      {
        title: 'Pay directly on the company\'s website',
        content: 'For a one-time payment, type the company\'s website address directly in your browser — for example, pge.com for Pacific Gas & Electric or att.com for AT&T. Log in to your account with them, go to "Pay Bill" or "Make a Payment," and enter your bank account or card information.',
        warning: 'Never click "Pay Now" links from emails or text messages. Go directly to the company\'s website yourself.',
      },
      {
        title: 'Always print or save a confirmation',
        content: 'After every payment, look for a confirmation number on the screen. Take a screenshot or write it down with the date and amount. Keep this for at least 60 days in case of a dispute.',
      },
      {
        title: 'Check your account within 3 days',
        content: 'Log into your bank account a few days after the payment to confirm the money was deducted. Compare the amount to your bill. If the payment does not appear, contact your bank before the bill\'s due date.',
      },
    ],
  },

  {
    slug: 'auto-pay-bills-setup-guide',
    title: 'How to Set Up Auto-Pay So You Never Miss a Bill',
    excerpt: 'Auto-pay automatically sends your bill payments on time each month. Here\'s how to set it up safely through your bank or the billing company.',
    category: 'online-banking',
    tags: ['auto-pay', 'automatic payments', 'bills', 'bank'],
    readTime: '6 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Auto-pay is a setting that automatically pays a bill every month without you having to log in each time. You set it up once, and from then on the payment goes out on the same day each month. It eliminates late fees and the stress of remembering due dates.

There are two types of auto-pay. The first is a fixed-amount auto-pay, which works well for loans or subscriptions where the amount is always the same (like a car payment or Netflix). The second type pays your full statement balance or a minimum amount each month — this is common for credit cards.

You can set up auto-pay in two places: through your bank (your bank pulls the money and sends it) or through the billing company directly (the company pulls the money from your account). Either works. The advantage of setting it up through the billing company is that they will always pull the exact correct amount, including any changes to your bill.

Before enabling auto-pay, make sure your checking account always has a buffer of at least $500-$1,000 above what you need. Auto-pay pulls money on a fixed schedule, and if your balance is low on that day, you could overdraft — meaning your account goes negative, which triggers overdraft fees.

Review your auto-pay transactions once a month. Just because it is automatic does not mean you should never look at it. You want to catch errors, unexpected rate increases, or subscriptions you forgot you were paying for.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov/ask-cfpb)`,
    steps: [
      {
        title: 'Choose which bills to automate',
        content: 'Fixed-amount bills are the best candidates: mortgage or rent, car loan, internet service, phone plan, and streaming subscriptions. Bills that vary a lot each month (like credit cards) require more thought — you can auto-pay the minimum or the full balance, depending on your preference.',
      },
      {
        title: 'Set up auto-pay through the billing company',
        content: 'Log into the billing company\'s website (electric company, insurance provider, etc.). Go to "Payment Settings," "Billing," or "Account." Look for "Auto-Pay" or "Automatic Payments" and click Set Up. Enter your bank account routing number and account number (found on the bottom of a check) and choose the payment date.',
        tip: 'Quick Tip: Choose a payment date a few days after you receive income — that way money is already in the account when the auto-pay pulls.',
      },
      {
        title: 'Or set up auto-pay through your bank',
        content: 'In your bank\'s Bill Pay section, add the payee and select the option for "Recurring Payment." Choose the frequency (monthly), the amount, and the send date. For variable bills, you would update the amount manually each month, so this method works best for fixed amounts.',
      },
      {
        title: 'Save a confirmation and verify the first payment',
        content: 'Write down the setup date, amount, and which account it pulls from. When the first scheduled payment arrives (check your bank statement), confirm it went through for the correct amount.',
        warning: 'If you ever change bank accounts, update your auto-pay settings immediately at every billing company. Payments sent to a closed account can result in missed payments and late fees.',
      },
      {
        title: 'Review auto-pay every 3 months',
        content: 'Set a reminder on your calendar to review your auto-pay list every quarter. Cancel auto-pays for services you no longer use. Check that the amounts are still correct, especially for services that have annual price increases.',
      },
    ],
  },

  {
    slug: 'transfer-money-between-accounts',
    title: 'How to Transfer Money Between Bank Accounts Online',
    excerpt: 'Move money between your own bank accounts — or to another bank — safely using your bank\'s website or app.',
    category: 'online-banking',
    tags: ['transfer money', 'bank transfer', 'move funds', 'online banking'],
    readTime: '6 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Transferring money between bank accounts online is one of the most useful features of online banking. Whether you want to move money from your checking to savings, send money to your own account at a different bank, or fund an investment account, this can be done in minutes from your computer or phone.

There are two types of transfers. An internal transfer moves money between two accounts at the same bank — for example, from your checking to your savings at the same institution. This is instant or takes at most a few hours. An external transfer moves money between accounts at two different banks. This typically takes 1-3 business days and uses a system called ACH (Automated Clearing House), which is the standard electronic network banks use to move money in the US.

To set up an external transfer, you need the routing number and account number of the destination account. The routing number identifies the bank (it is a 9-digit number). The account number identifies your specific account there.

ACH transfers are safe and free at most banks. Some banks charge a small fee ($3-$10) for same-day or expedited transfers — the standard 1-3 day transfer is almost always free.

Wire transfers are different from ACH transfers. A wire is faster (same day or next day) but costs $15-$45 and should only be used when someone specifically needs a wire. For most transfers between your own accounts, ACH is preferred.

(Source: Federal Reserve, federalreserve.gov/pubs/feds/2006/200632)`,
    steps: [
      {
        title: 'Log into your bank\'s website or app',
        content: 'Go to your bank\'s website or open the bank\'s mobile app. Log in with your username and password. Look for a section called "Transfer," "Move Money," or "Transfers & Payments" in the main menu.',
      },
      {
        title: 'Select the accounts for the transfer',
        content: 'For an internal transfer (same bank), choose the "From" account (usually checking) and the "To" account (usually savings). For an external transfer, you will first need to add the external account — see the next step.',
      },
      {
        title: 'Add an external account (one-time setup)',
        content: 'If transferring to a different bank, look for "Add External Account" or "Link an Account." Enter the routing number and account number of the other bank. Your bank will send 1-2 small test deposits (under $1 each) to the other account within 1-2 days. You then verify the exact amounts to confirm you own that account.',
        tip: 'Quick Tip: Log into the other bank account after 2 days and look for two small deposits (like $0.12 and $0.37). Enter those amounts back in your first bank\'s app to verify the account.',
      },
      {
        title: 'Enter the amount and choose the date',
        content: 'Type the dollar amount you want to transfer. Choose today\'s date for an immediate transfer, or a future date if you want to schedule it. Review the estimated arrival date shown on screen.',
      },
      {
        title: 'Confirm and save the confirmation number',
        content: 'Review the transfer details carefully — especially the amount and the destination account. Submit the transfer. Write down or screenshot the confirmation number. Check your account the next day to confirm it went through.',
        warning: 'Never transfer money to an account you do not personally own in response to a phone call, text, or email request. This is a common scam technique.',
      },
    ],
  },

  {
    slug: 'freeze-unfreeze-credit-all-three-bureaus',
    title: 'How to Freeze and Unfreeze Your Credit at All 3 Bureaus',
    excerpt: 'A credit freeze stops thieves from opening new accounts in your name. Here\'s how to do it free at Equifax, Experian, and TransUnion.',
    category: 'online-banking',
    tags: ['credit freeze', 'identity theft', 'Equifax', 'Experian', 'TransUnion'],
    readTime: '8 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Intermediate',
    body: `A credit freeze (also called a security freeze) locks your credit report so that no lender can open a new credit account in your name without your permission. This is one of the most powerful tools available to protect yourself from identity theft — and it is completely free by law.

When you freeze your credit, existing accounts (credit cards, loans) still work normally. You can still use your current credit cards and your credit score is not affected. The freeze only prevents new accounts from being opened. If someone steals your Social Security Number and tries to open a credit card or take out a loan using your identity, the lender will run a credit check, hit a wall, and the application will be denied.

There are three major credit reporting bureaus in the US: Equifax, Experian, and TransUnion. You need to freeze your credit at ALL THREE — they are separate companies and do not share freezes with each other.

The federal Fair Credit Reporting Act requires all three bureaus to provide free credit freezes. You can do it online in about 5 minutes per bureau.

When you need to apply for new credit (a car loan, a mortgage, a new credit card), you temporarily "thaw" or lift the freeze at the specific bureau the lender uses. After the application, you freeze it again. You can unfreeze for as few as one day.

(Source: FTC, consumer.ftc.gov/articles/what-know-about-credit-freezes-and-fraud-alerts)`,
    steps: [
      {
        title: 'Freeze at Equifax',
        content: 'Go to equifax.com/personal/credit-report-services/credit-freeze. Click "Place or Manage a Freeze." Create a free myEquifax account if you don\'t have one (you will need your Social Security Number and date of birth). Follow the prompts to activate the freeze. Save or print the confirmation PIN.',
        tip: 'Quick Tip: Write down each confirmation PIN and PIN number in a safe place at home — you will need it to unfreeze later.',
      },
      {
        title: 'Freeze at Experian',
        content: 'Go to experian.com/freeze/center.html. Click "Add a Security Freeze." Enter your personal information. You will receive a PIN by mail within 10 business days, or you can get an instant PIN online. Record your PIN safely.',
      },
      {
        title: 'Freeze at TransUnion',
        content: 'Go to transunion.com/credit-freeze. Click "Add a Freeze." Create a free TransUnion account. Follow the steps to freeze your report. TransUnion provides an online PIN immediately.',
      },
      {
        title: 'Confirm all three are frozen',
        content: 'After completing each freeze, you should receive a confirmation email or letter from each bureau. Keep these records. If you want to double-check, try creating a credit monitoring account at any of the three sites — if the freeze is in place, even that access may require extra verification.',
      },
      {
        title: 'How to unfreeze (lift) your credit',
        content: 'When you need new credit, contact the bureau the lender uses (ask the lender which one). Log back into that bureau\'s website with your PIN and select "Lift Freeze" or "Temporarily Unfreeze." You can choose a specific date range (like 3 days) so it refreezes automatically.',
        warning: 'If you lose your PIN, each bureau has a PIN recovery process that may take several days. Protect your PINs like passwords.',
      },
    ],
  },

  {
    slug: 'understand-your-bank-statement-online',
    title: 'How to Read Your Online Bank Statement',
    excerpt: 'Learn what each section of your online bank statement means, how to spot errors, and how to download a copy for your records.',
    category: 'online-banking',
    tags: ['bank statement', 'transactions', 'account review', 'online banking'],
    readTime: '5 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Your bank statement is a monthly record of everything that happened in your account: money that came in (deposits), money that went out (withdrawals and payments), and any fees. Reviewing it monthly takes about 10 minutes and helps you catch errors, spot fraudulent charges, and stay on top of your finances.

Online statements are identical to paper statements — in digital form. Most banks keep 12-24 months of statements available online for free. You can view them on screen and download or print a copy.

Here is what you will find on a typical statement:
- Account summary: Your starting balance, ending balance, total deposits, and total withdrawals for the month
- Transaction list: Every single transaction in date order — deposits show as credits (money in), payments and purchases show as debits (money out)
- Fees: Any monthly service fees, overdraft fees, or ATM fees

When reviewing your statement, you are looking for three things: transactions you do not recognize, amounts that are different from what you expected, and any fees you were not aware of.

If you find a transaction you do not recognize, do not assume the worst immediately. Sometimes a familiar merchant shows up under a different name (a gas station might show as the parent company name). Search the amount and date in your memory first. If you still do not recognize it after 24 hours, contact your bank.

(Source: FDIC, fdic.gov/resources/consumers/consumer-news)`,
    steps: [
      {
        title: 'Log in and navigate to statements',
        content: 'Log into your bank\'s website or app. Look for "Statements," "Account Activity," or "Documents" in the menu. Statements are usually organized by month and year — click on the current month to view it.',
      },
      {
        title: 'Read the account summary at the top',
        content: 'The summary shows your balance at the start of the month, the total money deposited, the total money spent or withdrawn, and your ending balance. The formula is: Starting Balance + Deposits - Withdrawals = Ending Balance. Verify this matches what you expect.',
      },
      {
        title: 'Review each transaction',
        content: 'Scroll through the transaction list. Each entry shows the date, a description of who received or sent the money, and the amount. Credits (money in) may appear in green or a "+" column. Debits (money out) appear in red or a "-" column. Check each one against your receipts or memory.',
        tip: 'Quick Tip: Keep a small notebook where you write down ATM withdrawals and large purchases during the month. This makes statement review much faster.',
      },
      {
        title: 'Check for unexpected fees',
        content: 'Look for any fees at the bottom of the statement or scattered through transactions. Common fees include monthly service fees, overdraft fees ($25-$35 each), and out-of-network ATM fees ($2-$5). If you see a fee you do not understand, call your bank — some fees can be waived if you ask politely.',
      },
      {
        title: 'Download and save the statement',
        content: 'Look for a "Download" or "Print" button on the statement page. Download the PDF version and save it to a folder on your computer labeled "Bank Statements." Keep at least 3 years of statements for tax purposes.',
      },
    ],
  },

  {
    slug: 'dispute-a-bank-charge',
    title: 'How to Dispute an Incorrect Charge on Your Bank Account',
    excerpt: 'If you see a charge you don\'t recognize or didn\'t authorize, here\'s how to report it to your bank and get your money back.',
    category: 'online-banking',
    tags: ['dispute charge', 'unauthorized charge', 'fraud', 'bank'],
    readTime: '7 min',
    thumbnailEmoji: '⚠️',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Spotting a charge you don't recognize on your bank account can be alarming. The good news is that federal law gives you strong protections, and banks are required to investigate and resolve disputes.

There are two types of incorrect charges. A billing error is a mistake — for example, a merchant charged you twice, or the wrong amount was charged. An unauthorized transaction is fraud — someone used your account without your permission.

For debit card transactions, the Electronic Fund Transfer Act (Regulation E) protects you. If you report an unauthorized transaction within 2 business days of learning about it, your liability is limited to $50. If you report it within 60 days of the statement date showing the error, you are covered for most losses. After 60 days, you may be responsible for the loss — this is why monthly statement review matters.

For credit cards, the Fair Credit Billing Act provides even stronger protection — your liability for unauthorized use is generally capped at $50 regardless of when you report it.

Acting quickly is key. As soon as you notice an incorrect charge, contact your bank right away. Do not wait to see if it resolves itself.

Keep records of every communication with your bank: the date you called, the name of the representative, and the case or reference number they give you. If your initial dispute is denied, you have the right to request a written explanation and to escalate the complaint.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-bank-account-statement)`,
    steps: [
      {
        title: 'Verify the charge is actually incorrect',
        content: 'Before calling the bank, spend a few minutes investigating. Sometimes a legitimate merchant appears under a parent company name. Search the business name on Google if you do not recognize it. Check your receipts. If you have a family member on the account, ask if they made the purchase.',
      },
      {
        title: 'Gather your information',
        content: 'Write down the transaction date, the amount, and the merchant name as it appears on your statement. Note when you first noticed the charge. Have your bank account number and the card number handy.',
      },
      {
        title: 'Call your bank immediately',
        content: 'Call the customer service number on the back of your debit or credit card. Tell them: "I am calling to dispute a charge on my account." Give them the date, amount, and merchant name. Ask for a dispute case number and write it down. Larger banks often resolve simple disputes within 24-72 hours.',
        tip: 'Quick Tip: You can also file a dispute through your bank\'s mobile app or website — look for "Dispute a Transaction" next to the specific charge in your transaction list.',
      },
      {
        title: 'Request a provisional credit',
        content: 'When you dispute a charge, ask the bank representative if they can issue a "provisional credit" — a temporary return of the disputed amount to your account while the investigation is ongoing. Most banks do this automatically for larger disputes.',
        warning: 'Do not spend provisional credits until the dispute is fully resolved in your favor. If the investigation finds the charge was valid, the bank will reverse the provisional credit and you will owe the money.',
      },
      {
        title: 'Follow up in writing',
        content: 'After your phone call, send a brief written follow-up through your bank\'s secure message center (in the app or website) summarizing what you reported. Written records protect you if the dispute is later questioned. Keep copies of all correspondence.',
      },
      {
        title: 'Escalate if needed',
        content: 'If your bank denies the dispute and you believe they are wrong, you can file a complaint with the Consumer Financial Protection Bureau at consumerfinance.gov/complaint or call 1-855-411-2372. You can also contact your state attorney general\'s office.',
      },
    ],
  },

  {
    slug: 'set-up-bank-text-alerts',
    title: 'How to Set Up Text and Email Alerts From Your Bank',
    excerpt: 'Bank alerts send you an instant text or email whenever money moves in or out of your account — the easiest way to catch fraud fast.',
    category: 'online-banking',
    tags: ['bank alerts', 'text alerts', 'fraud detection', 'notifications'],
    readTime: '5 min',
    thumbnailEmoji: '🔔',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Bank alerts are automatic notifications your bank sends to your phone or email whenever specific activity happens on your account. They are free, and they are one of the best tools available to catch fraud early.

With alerts turned on, you get a text message within seconds any time: money is deposited into your account, a debit card purchase is made, your balance drops below a set amount, a large transaction occurs (over a dollar amount you choose), or a bill payment goes out.

If you receive an alert for a transaction you didn't make, you know immediately — not a month later when your statement arrives. Quick reporting dramatically limits how much you could lose to fraud.

Most major banks let you customize alerts in detail. You can choose to be notified by text, email, or push notification (a notification through the bank's app). You can set thresholds — for example, only alert me when a transaction is over $50, or alert me any time my balance drops below $200.

Setting up alerts usually takes about 10 minutes inside your bank's website or app. Once configured, they run automatically forever unless you change them.

(Source: FDIC Consumer News, fdic.gov/resources/consumers/consumer-news)`,
    steps: [
      {
        title: 'Log in and find Alert Settings',
        content: 'Open your bank\'s website or app and log in. Look for "Alerts," "Notifications," or "Account Alerts" in the settings or profile menu. It may also be under "Security" settings.',
      },
      {
        title: 'Confirm your phone number and email on file',
        content: 'Before setting up alerts, verify that your mobile phone number and email address on your bank account are current. If they are outdated, update them first — otherwise alerts will go to the wrong place.',
        warning: 'If you recently changed your phone number and haven\'t updated it with your bank, do that now. Your bank uses this number for both alerts and security verification.',
      },
      {
        title: 'Turn on transaction alerts',
        content: 'Enable alerts for: any debit card purchase (or purchases over $25), any ACH withdrawal or transfer, any deposit received, and any time your balance drops below $100 or another threshold you choose. Set the delivery method to Text (SMS) for the fastest notification.',
      },
      {
        title: 'Set up a low balance alert',
        content: 'Choose a balance threshold that gives you a safety cushion. If your minimum comfortable balance is $500, set the alert for $600 — that way you have warning before things get critical. The bank will text you the moment your balance dips below that number.',
        tip: 'Quick Tip: A low-balance alert can prevent overdraft fees by giving you time to transfer money before you accidentally overdraw.',
      },
      {
        title: 'Test your alerts',
        content: 'After saving your alert settings, make a small purchase with your debit card. You should receive a text message within 30-60 seconds. If you do not, check your spam folder (for email alerts) or verify your phone number is correct in the bank\'s settings.',
      },
    ],
  },

  {
    slug: 'zelle-basics-for-seniors',
    title: 'How to Use Zelle to Send and Receive Money Safely',
    excerpt: 'Zelle lets you send money directly to family and friends from your bank app in minutes — here\'s how it works and how to stay safe.',
    category: 'online-banking',
    tags: ['Zelle', 'send money', 'receive money', 'bank app'],
    readTime: '7 min',
    thumbnailEmoji: '💵',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Zelle is a free service built into most major US bank apps that lets you send or receive money to someone using their phone number or email address. The money moves directly from one bank account to another, usually within minutes.

Zelle is not a separate account or wallet — the money goes straight from your checking account to theirs. There are no fees, and you do not need to download a separate app if your bank already offers Zelle inside its app.

More than 2,000 banks and credit unions offer Zelle, including Bank of America, Chase, Wells Fargo, US Bank, and many regional banks and credit unions. If your bank does not offer Zelle, you can download the standalone Zelle app.

The most important rule about Zelle: only send money to people you know and trust personally. Unlike a credit card or check, Zelle transfers cannot be reversed once the money is sent. There is no "undo" button. If a stranger asks you to send Zelle payments for any reason — prizes, emergencies, utility payments, overpayments — that is a scam.

Zelle is perfect for: splitting a restaurant bill with family, paying back a friend who covered you at dinner, sending birthday money to a grandchild, paying a neighbor for yard work. It is not intended for buying from strangers online.

(Source: Zelle, zellepay.com/pay-it-safe — for safety guidance)`,
    steps: [
      {
        title: 'Find Zelle in your bank\'s app',
        content: 'Open your bank\'s mobile app and log in. Look for "Zelle," "Send Money with Zelle," or "Pay & Transfer" in the menu. Tap it. The first time, you will be asked to enroll your email address or US mobile phone number.',
      },
      {
        title: 'Enroll your email or phone number',
        content: 'Zelle will send a one-time verification code to the email or phone number you provide. Enter the code to complete enrollment. This only needs to be done once.',
        tip: 'Quick Tip: Use your mobile phone number rather than email for enrollment — it tends to result in faster transfers and fewer issues.',
      },
      {
        title: 'Send money to someone',
        content: 'Tap "Send" inside the Zelle section. Enter the recipient\'s US mobile phone number or email address — the one they enrolled with Zelle. Enter the dollar amount and add a brief note (like "Dinner last Tuesday"). Review everything carefully, then tap Send.',
        warning: 'Double-check the phone number or email address before sending. A single digit error can send money to the wrong person. Zelle transfers cannot be cancelled once the recipient is enrolled.',
      },
      {
        title: 'Receive money',
        content: 'When someone sends you money via Zelle to your enrolled phone number or email, you will get a notification. If you are already enrolled, the money deposits directly into your bank account — you do not need to do anything to accept it. If you are not enrolled, the sender\'s bank sends you instructions to enroll and claim the payment within 14 days.',
      },
      {
        title: 'Know when NOT to use Zelle',
        content: 'Never use Zelle to pay someone you have not met in person. Never send Zelle payments to claim a "prize," pay a "security deposit," or help someone in an unexpected emergency who contacted you by text or phone. Legitimate businesses and government agencies do not ask for Zelle payments.',
      },
    ],
  },

  {
    slug: 'avoid-bank-impersonation-scams',
    title: 'How to Spot and Avoid Fake Bank Calls and Texts',
    excerpt: 'Scammers pretend to be your bank to steal your account credentials. Learn exactly what real banks do and don\'t do so you can tell the difference.',
    category: 'online-banking',
    tags: ['bank scam', 'impersonation', 'fraud alert', 'phone scam'],
    readTime: '6 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Bank impersonation scams are one of the most common and convincing frauds targeting Americans today. A caller claims to be from your bank's fraud department. They say suspicious activity was detected on your account. They sound professional and urgent. They may already know your name, part of your account number, or your address — information they bought from a data broker or found online.

Their goal is to get you to confirm or provide your full account credentials, password, or the one-time security code your bank sent you. Once they have that, they drain your account.

Here is the most important thing to understand: your real bank will NEVER ask you for your password, your full Social Security Number, or a one-time security code over the phone. Ever. These codes exist specifically to confirm that you — and not a stranger — are logging in. If you read a code to someone on the phone, you are handing them the keys to your account.

If you receive a suspicious call from someone claiming to be your bank, hang up. Then call the number on the back of your debit card or on your statement — NOT any number the caller gave you. Ask the bank if there is a real fraud alert on your account.

The same rules apply to texts and emails. Your bank may send you a fraud text asking you to confirm a transaction by replying YES or NO — that is legitimate. But clicking a link in a text to "verify your information" is not.

(Source: FTC, consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams)`,
    steps: [
      {
        title: 'Recognize the warning signs of a fake bank call',
        content: 'Be suspicious if: the caller asks for your password, your full Social Security Number, or a one-time code your bank sent you. Also be suspicious if the caller creates urgency ("your account will be closed in 1 hour"), asks you to move money to a "safe account," or tells you not to tell anyone.',
      },
      {
        title: 'Hang up and call your bank directly',
        content: 'If you are unsure whether a call is real, hang up — even if the caller seems upset or insistent. Call the number on the back of your debit card or the official number from your bank\'s website. Ask: "Was there a fraud alert or unusual activity on my account today?"',
        tip: 'Quick Tip: Save your bank\'s real customer service number in your phone contacts right now, so you always have it available.',
      },
      {
        title: 'Never share a one-time security code',
        content: 'Your bank sends one-time codes (6-digit numbers via text or email) to verify that you are logging in. These are meant only for you. If anyone — including someone who claims to be from your bank — asks you to read this code aloud, refuse and hang up.',
        warning: 'Scammers intentionally trigger a real code from your bank to be sent to your phone, then call you pretending to be the bank and ask for the code. The code is real, but the caller is not from your bank.',
      },
      {
        title: 'Do not click links in suspicious texts',
        content: 'Real bank fraud texts usually ask you to reply YES or NO to confirm or deny a transaction. They typically do not include a link asking you to log in. If a text contains a link and asks you to "verify your information," go to your bank\'s official app or website directly instead of clicking.',
      },
      {
        title: 'Report suspicious contacts to your bank',
        content: 'If you receive a suspicious call or text pretending to be your bank, report it. Call your bank, describe what happened, and ask them to note it on your account. You can also report it to the FTC at reportfraud.ftc.gov.',
      },
    ],
  },

  {
    slug: 'find-routing-and-account-number',
    title: 'How to Find Your Bank Routing Number and Account Number',
    excerpt: 'Your routing number and account number are needed for direct deposit, bill pay, and transfers — here\'s where to find them quickly.',
    category: 'online-banking',
    tags: ['routing number', 'account number', 'direct deposit', 'check'],
    readTime: '4 min',
    thumbnailEmoji: '🔢',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Your bank routing number and account number are two sets of numbers that identify your bank and your specific account. You need them when setting up direct deposit, paying a bill by electronic check, wiring money, or linking your bank account to an app.

The routing number (also called an ABA routing number or RTN) is a 9-digit number that identifies the specific bank. Every bank in the US has one or more routing numbers. Think of it like a ZIP code for your bank.

Your account number is the number that identifies your personal account at that bank. Account numbers are typically 8-17 digits long and unique to you.

The easiest place to find both numbers is on a personal check. The numbers printed across the bottom of a check, from left to right, are: the 9-digit routing number, your account number, and the check number. The routing number is always the first group of numbers and is surrounded by special symbols (⑆ or similar).

If you do not have checks, these numbers are also available in your bank's app or website under "Account Details" or "Account Information." You can also find them on your paper bank statement.

Keep these numbers private. While knowing your routing and account number alone is not enough to steal your money, it does give someone the ability to attempt to set up unauthorized ACH withdrawals. Treat these numbers like sensitive personal information.

(Source: Federal Reserve, frbservices.org/financial-services/ach)`,
    steps: [
      {
        title: 'Look at the bottom of a check',
        content: 'On any personal check in your checkbook, look at the row of numbers printed at the very bottom. The first 9 digits (usually between two ⑆ symbols) are your routing number. The numbers after that (before the check number on the right) are your account number.',
        tip: 'Quick Tip: Take a photo of the bottom of one check and save it in a secure note on your phone for easy reference. Black out the check number but keep the routing and account number visible.',
      },
      {
        title: 'Find them in your bank\'s app',
        content: 'Open your bank\'s mobile app, log in, and tap on the account (checking or savings). Look for "Account Details," "Account Information," or a small "i" icon. Your routing number and full account number should be listed there.',
      },
      {
        title: 'Find them on your paper statement',
        content: 'Your monthly bank statement (paper or PDF) lists your account number near the top, usually next to your name and address. The routing number may also be listed, or you can find it on the bank\'s website by searching "[Bank Name] routing number" on a trusted search engine.',
      },
      {
        title: 'Use the correct routing number',
        content: 'Some banks have different routing numbers for different purposes (one for direct deposit, one for wire transfers) or different numbers by state. When you look up your number, confirm you are using the correct one for your purpose. Your bank\'s website or customer service can confirm this.',
      },
    ],
  },

  {
    slug: 'direct-deposit-setup-paycheck-social-security',
    title: 'How to Set Up Direct Deposit for Your Paycheck or Social Security',
    excerpt: 'Direct deposit puts your money in your account faster and more safely than a paper check. Here\'s how to set it up in a few minutes.',
    category: 'online-banking',
    tags: ['direct deposit', 'Social Security', 'paycheck', 'bank setup'],
    readTime: '6 min',
    thumbnailEmoji: '📬',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Direct deposit sends your paycheck, Social Security benefit, pension, or tax refund electronically straight into your bank account — usually on payday before 9 a.m. There is no check to cash, no trip to the bank, and no risk of a check getting lost in the mail.

Setting up direct deposit requires two things: your bank's routing number (a 9-digit number that identifies your bank) and your account number. Both are printed on the bottom of a personal check.

Most employers handle direct deposit through a simple form — either a paper form from HR or an online form in the employee portal. The Social Security Administration (SSA) has its own process through their website or by phone.

The IRS also offers direct deposit for tax refunds. When you file your taxes, you can enter your bank information for direct deposit instead of waiting 4-6 weeks for a paper check. Direct deposit tax refunds typically arrive within 21 days.

One important note: once direct deposit is set up, it usually takes one pay period (one paycheck cycle) to take effect. You may receive one last paper check while the banking system processes the change.

(Source: Social Security Administration, ssa.gov/deposit)`,
    steps: [
      {
        title: 'Get your routing number and account number',
        content: 'Find a personal check (from your checkbook) or log into your bank\'s app and look under "Account Details." Write down your bank\'s 9-digit routing number and your full account number. Double-check that you have the number for the correct account — checking (not savings, unless you prefer it).',
      },
      {
        title: 'For an employer paycheck — fill out a direct deposit form',
        content: 'Ask your HR department or payroll manager for a direct deposit authorization form. On that form, fill in your bank\'s name, routing number, account number, account type (checking or savings), and the amount or percentage to deposit. Return it to HR. They may also ask for a voided check — write "VOID" in large letters across a check and attach it.',
      },
      {
        title: 'For Social Security — set up through your My Social Security account',
        content: 'Go to ssa.gov and sign into (or create) a free "my Social Security" account. Under "Direct Deposit," click "Start or Update Direct Deposit." Enter your bank routing number, account number, and account type. Changes take 30-60 days to take effect. You can also call 1-800-772-1213 to make the change by phone.',
        tip: 'Quick Tip: The SSA strongly encourages direct deposit — it protects your payment from mail theft, and you get access to your money on the payment day even if it falls on a Saturday.',
      },
      {
        title: 'For tax refunds — enter bank info when filing',
        content: 'When filing your federal taxes (whether by yourself or with a tax preparer), choose "Direct Deposit" for your refund and enter your routing number and account number. The IRS will deposit your refund directly — no paper check to wait for.',
      },
      {
        title: 'Verify the first deposit',
        content: 'After setting up direct deposit, wait for the first payment date. Log into your bank account that morning to confirm the deposit arrived. If it does not appear, contact your employer\'s payroll department or the SSA — do not wait more than one business day.',
      },
    ],
  },

  {
    slug: 'understanding-overdraft-fees',
    title: 'How to Avoid Overdraft Fees',
    excerpt: 'Overdraft fees of $25-$35 add up fast. Learn what causes them, how to turn off overdraft coverage, and how to protect your account.',
    category: 'online-banking',
    tags: ['overdraft', 'fees', 'bank fees', 'checking account'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `An overdraft happens when you spend more money than is currently in your checking account. For example, if you have $50 in your account and make a $75 purchase, your account goes $25 negative (overdrawn). Most banks charge an overdraft fee of $25 to $35 per transaction when this happens.

Banks call their overdraft programs "overdraft protection" or "overdraft coverage," but this is somewhat misleading — it means the bank will cover the transaction (rather than declining it) and then charge you a fee for doing so.

The important thing to know is that you can opt out of overdraft coverage for debit card transactions. If you opt out, the bank will decline your debit card if you do not have enough money, and you will pay no fee. While having a card declined is mildly embarrassing, it is far better than a $35 fee.

Federal law requires banks to get your permission before enrolling you in overdraft coverage for debit card and ATM transactions. However, many banks auto-enroll customers. You can call your bank or log into your account settings to check your status and opt out.

A better form of overdraft protection — and one that banks do not always advertise — is linking your checking account to your savings account. If you overdraft, the bank automatically transfers from savings instead of charging a fee (or charges a much smaller transfer fee of $5-$12 instead of the full overdraft fee).

(Source: Consumer Financial Protection Bureau, consumerfinance.gov/ask-cfpb/what-is-overdraft-protection)`,
    steps: [
      {
        title: 'Check whether you are enrolled in overdraft coverage',
        content: 'Log into your bank\'s website or app and look for "Overdraft Settings," "Account Services," or "Overdraft Protection" under your account settings. It may also be in your account\'s terms and conditions. Call the number on the back of your card if you cannot find it online.',
      },
      {
        title: 'Opt out of standard overdraft coverage',
        content: 'If you are enrolled and want to opt out, look for a toggle or checkbox next to "Debit Card Overdraft Coverage" and turn it off. Or call your bank and say: "I would like to opt out of overdraft coverage for debit card transactions." This means your card will be declined if funds are insufficient — no fee.',
        tip: 'Quick Tip: Opting out does not affect checks, ACH payments, or recurring automatic payments — these can still overdraft your account. Focus on keeping a cushion for those.',
      },
      {
        title: 'Link your savings as overdraft protection',
        content: 'Ask your bank about "linked account overdraft protection." They will connect your checking to your savings account. If you ever overdraft, the bank automatically pulls from savings — usually for free or for a small fee of $5-$12, far less than the standard $35.',
      },
      {
        title: 'Set a low-balance alert',
        content: 'Set up a text alert (see our guide on bank alerts) to notify you when your balance drops below $100 or another comfortable threshold. This gives you advance warning before you accidentally overdraft.',
      },
      {
        title: 'Review your account at least weekly',
        content: 'Take 2 minutes each week to open your bank app and glance at your balance and recent transactions. This habit alone prevents most overdrafts because you always know roughly how much is in your account.',
      },
    ],
  },

  {
    slug: 'check-credit-score-for-free',
    title: 'How to Check Your Credit Score for Free (Without a Scam)',
    excerpt: 'Your credit score is free to check — but dozens of fake sites try to charge you for it. Here are the only legitimate free sources.',
    category: 'online-banking',
    tags: ['credit score', 'free credit check', 'AnnualCreditReport', 'credit report'],
    readTime: '5 min',
    thumbnailEmoji: '📊',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `Your credit score is a 3-digit number (typically ranging from 300 to 850) that lenders use to decide whether to approve you for a loan, credit card, or apartment rental, and at what interest rate. A higher number means lower risk in the lender's eyes. Scores above 700 are generally considered good; above 750 is excellent.

Checking your own credit score does not hurt your score — this is called a "soft inquiry" and has no effect. Only hard inquiries (when a lender checks your credit because you applied for something) can temporarily lower your score by a small amount.

By federal law, you are entitled to a free credit report from each of the three major bureaus (Equifax, Experian, TransUnion) once per year. The only official government-authorized site for these free reports is AnnualCreditReport.com — notice there is no "www.free" in front of it and no number in the name. Beware of look-alike names.

Beyond the annual report, several free services provide ongoing credit score monitoring: Credit Karma (creditkarma.com) shows your TransUnion and Equifax scores, and it is genuinely free. Many banks now include a free credit score in their app or website — check under your account dashboard.

The full credit report (which is different from the score) shows every account you have ever had, your payment history, and any derogatory marks like late payments or collections. Reviewing it once a year helps you catch errors and identity theft.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov/ask-cfpb/what-is-a-credit-score)`,
    steps: [
      {
        title: 'Get your free annual credit report',
        content: 'Go to AnnualCreditReport.com (type it exactly). Click "Request your free credit reports." You will need your name, address, date of birth, and Social Security Number. You can request reports from all three bureaus at once, or stagger them (one every 4 months) to monitor your credit year-round.',
        warning: 'AnnualCreditReport.com is the only site federally authorized to provide free reports. Other sites with "free" in the name often require a credit card and sign you up for paid monthly services.',
      },
      {
        title: 'Check your score through your bank',
        content: 'Log into your bank\'s website or app and look for "Credit Score" or "Free Credit Score" in the menu or dashboard. Many banks — including Chase, Bank of America, Capital One, and Wells Fargo — now offer free FICO or VantageScore monitoring to account holders.',
      },
      {
        title: 'Use Credit Karma for ongoing monitoring',
        content: 'Go to creditkarma.com and create a free account. Enter your Social Security Number to allow Credit Karma to pull your credit file. Credit Karma is genuinely free — they make money from credit product offers, not from you. You will see your TransUnion and Equifax scores and a report of your credit accounts.',
      },
      {
        title: 'Review your credit report for errors',
        content: 'Once you have your report, scan each section: personal information, accounts (credit cards, loans, mortgages), and negative marks (late payments, collections). Confirm that every account listed is one you recognize. If you see accounts you did not open, that may indicate identity theft.',
        tip: 'Quick Tip: Common errors include payments incorrectly marked late, accounts that were paid off but still show a balance, and old negative items that should have expired (most negative items fall off after 7 years).',
      },
      {
        title: 'Dispute errors on your credit report',
        content: 'If you find an error, go to the bureau\'s website (equifax.com, experian.com, or transunion.com) and use their online dispute process. Provide your documentation (payment confirmation, account closure letter, etc.). Bureaus are required to investigate and respond within 30 days.',
      },
    ],
  },

  {
    slug: 'open-savings-account-online',
    title: 'How to Open a Savings Account Online',
    excerpt: 'Opening a savings account online takes about 10 minutes and can earn you significantly more interest than a traditional bank account.',
    category: 'online-banking',
    tags: ['savings account', 'open account', 'online bank', 'interest'],
    readTime: '6 min',
    thumbnailEmoji: '💹',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `A savings account is a bank account designed for money you want to keep safe and earn interest on, rather than spending day to day. Unlike your checking account, a savings account typically has limits on how many withdrawals you can make per month, but it earns interest — meaning the bank pays you a small percentage of your balance each month for keeping money there.

Online banks (banks that operate without physical branches) often offer significantly higher interest rates than traditional brick-and-mortar banks. While a traditional bank might pay 0.01% to 0.10% per year, high-yield savings accounts at online banks may pay 4% to 5% annually. On $10,000, that difference is between $10 and $500 per year in interest.

Some well-known and FDIC-insured online banks offering high-yield savings include: Ally Bank (ally.com), Marcus by Goldman Sachs (marcus.com), and Discover Bank (discover.com/online-banking/savings). All are legitimate, FDIC-insured institutions. Before opening at any online bank, verify the FDIC insurance at bankfind.fdic.gov.

You will need your Social Security Number, a government-issued ID (driver's license or passport), your current address, and your existing checking account information to fund the new account. The application takes about 10 minutes. Most require a small opening deposit ($0-$100).

(Source: FDIC, fdic.gov/resources/consumers/consumer-news/2023-winter.html)`,
    steps: [
      {
        title: 'Compare options and choose a bank',
        content: 'Visit bankrate.com or nerdwallet.com — both are reliable comparison sites — and search "best high-yield savings accounts." Look for: FDIC insured, no monthly fees, no minimum balance requirements, and a current APY (Annual Percentage Yield — the interest rate expressed as a yearly percentage) above 4%. As of early 2026, several banks still offer rates in that range.',
      },
      {
        title: 'Go to the bank\'s official website',
        content: 'Once you choose a bank, type its website address directly into your browser. For example: ally.com or marcus.com. Look for "Open an Account" or "Open a Savings Account" on the homepage. Click it.',
      },
      {
        title: 'Fill out the application',
        content: 'You will be asked for: your legal name and address, date of birth, Social Security Number (required by federal law for identity verification), a government-issued ID number, and your email address and phone number. This information is transmitted securely and used only to verify your identity.',
        warning: 'Only provide this information on the bank\'s official website (look for the lock icon and "https://" in the address bar). Never provide your SSN in response to an email or pop-up ad.',
      },
      {
        title: 'Fund the account',
        content: 'After your application is approved (usually instantly or within 1-2 business days), you will be asked to make an initial deposit. You can transfer money electronically from your existing checking account by providing that account\'s routing and account number. The transfer usually takes 1-3 business days.',
      },
      {
        title: 'Set up your online access and track interest',
        content: 'Create a username and password for the new account and log in to verify everything looks right. Check back monthly to see the interest credited to your account. The interest you earn is taxable income — you will receive a 1099-INT form from the bank in January for tax filing.',
        tip: 'Quick Tip: Set up a recurring monthly transfer from your checking account (even $25 or $50) to build your savings automatically.',
      },
    ],
  },

  {
    slug: 'wire-transfer-explained-seniors',
    title: 'Wire Transfers Explained: When to Use Them and When to Refuse',
    excerpt: 'A wire transfer moves money fast — but it\'s irreversible and a favorite tool of scammers. Learn exactly when wire transfers are legitimate.',
    category: 'online-banking',
    tags: ['wire transfer', 'scam', 'fraud', 'money transfer'],
    readTime: '6 min',
    thumbnailEmoji: '⚡',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Intermediate',
    body: `A wire transfer is an electronic method of sending money that is fast (usually same-day or next-day), secure, and — most critically — irreversible once completed. Once you send a wire transfer, the money cannot be recalled. This is what makes them both useful for legitimate large transactions and dangerous in the wrong hands.

Wire transfers are appropriate for: closing on a home purchase (sending your down payment to the title company), large international transactions, or paying a contractor a large sum when other methods are not accepted.

Wire transfers are NOT appropriate for: paying someone you met online, claiming a prize or inheritance, paying bail for a family member you haven't personally confirmed is in trouble, paying for an unexpected debt or emergency involving a stranger, or any situation where you feel pressured to act quickly.

The typical domestic wire transfer fee is $15-$35 to send and $0-$15 to receive. International wire transfers cost $35-$50 to send and take 1-5 business days.

Grandparent scams, IRS impersonation scams, romance scams, and tech support scams all commonly end with a request to wire money. If anyone asks you to wire money unexpectedly, stop and call a trusted family member before proceeding. Your bank may also temporarily delay a wire transfer if it appears suspicious — this is a feature, not an obstacle.

(Source: FTC, consumer.ftc.gov/articles/how-to-wire-money-safely)`,
    steps: [
      {
        title: 'Verify the recipient independently',
        content: 'Before initiating any wire transfer, verify the recipient\'s bank details through a separate channel. If a real estate attorney sends you wire instructions by email, call the attorney\'s known office number (look it up independently, do not call a number in the email) to confirm. Email wire instructions can be intercepted and altered by scammers.',
        warning: 'Wire fraud is a real risk in real estate transactions. Never wire money based solely on emailed instructions — always call to confirm bank details using a phone number you looked up yourself.',
      },
      {
        title: 'Initiate the wire at your bank',
        content: 'Log into your bank\'s website or visit a branch. Look for "Wire Transfer" under transfers or payments. You will need: the recipient\'s full legal name and address, their bank\'s name and address, the recipient bank\'s routing number (for domestic) or SWIFT/BIC code (for international), and the recipient\'s account number.',
      },
      {
        title: 'Expect fees and confirm them before sending',
        content: 'Your bank will show you the wire transfer fee before you confirm. Domestic wires typically cost $20-$35. Review the fee and the full transfer details. Once you click "Confirm" or "Send," the transfer cannot be reversed.',
      },
      {
        title: 'Recognize when a wire request is a scam',
        content: 'Walk away from any wire transfer request that involves: a government agency demanding immediate payment, a prize or lottery claiming you must send money first, an online romantic partner asking for financial help, someone impersonating a family member in an emergency, or a tech support agent who says your computer has a virus and needs payment.',
      },
      {
        title: 'If you sent a wire to a scammer, act immediately',
        content: 'Call your bank the moment you realize you have been scammed. Ask them to recall the wire — sometimes it is possible if you act within hours and the receiving bank cooperates. File a complaint with the FTC at reportfraud.ftc.gov and with your local police. Speed matters.',
      },
    ],
  },

  {
    slug: 'close-old-bank-account-safely',
    title: 'How to Close an Old Bank Account Safely',
    excerpt: 'Closing a bank account the right way prevents lost payments, unexpected fees, and credit complications. Follow these steps before you close.',
    category: 'online-banking',
    tags: ['close bank account', 'switching banks', 'account closure'],
    readTime: '6 min',
    thumbnailEmoji: '🔒',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Intermediate',
    body: `Closing a bank account seems straightforward, but doing it without preparation can cause a chain of problems: automatic payments missing due dates, direct deposits bouncing, overdraft fees from payments that post after you close the account, and potential damage to your banking history.

Taking a few weeks to prepare before closing an account makes the process smooth and stress-free.

The biggest risk is closing an account while automatic payments or direct deposits are still connected to it. A payment that tries to process on a closed account will be returned, which can result in late fees from the payee and possibly a mark on your banking record.

Your banking history (specifically whether accounts were closed in good standing) is tracked by a service called ChexSystems. Banks check ChexSystems when you apply for a new account — an account closed with negative activity can make it harder to open new accounts for up to 7 years. This is another reason to close cleanly and in good standing.

Most accounts can be closed online, by phone, or in person at a branch. Some banks require a written request or a visit to a branch for larger accounts. There is usually no fee to close an account in good standing.

(Source: Consumer Financial Protection Bureau, consumerfinance.gov)`,
    steps: [
      {
        title: 'Make a list of all automatic payments and direct deposits',
        content: 'Review 3 months of statements for recurring transactions: monthly bills on auto-pay, subscription services, direct deposits from your employer or Social Security, and any transfers you set up. Write down every one of them — you must redirect all of these before closing the account.',
      },
      {
        title: 'Open your new account first',
        content: 'Open your new bank account and set it up completely — including online access — before closing the old one. You need a fully functioning replacement account ready to receive incoming payments.',
      },
      {
        title: 'Redirect direct deposits and auto-pays',
        content: 'Update each direct deposit source and each auto-pay company with your new account\'s routing and account number. Do this at least 30 days before planning to close the old account, because some changes (especially Social Security) take one full payment cycle to take effect.',
        warning: 'Never close your old account until you have confirmed that at least one full payroll or Social Security deposit has successfully landed in the new account.',
      },
      {
        title: 'Clear the old account balance',
        content: 'Transfer your remaining balance to your new account, leaving a small buffer (around $50-$100) in the old account in case any final transactions post. After 2-3 weeks with no activity, transfer the last of the funds.',
      },
      {
        title: 'Request account closure',
        content: 'Call the customer service number on the back of your card (or visit a branch) and request account closure. Ask for a written confirmation of the closure by email or mail. Keep this confirmation for your records.',
        tip: 'Quick Tip: Ask the bank representative to confirm the account balance is zero and there are no pending transactions before they close it.',
      },
    ],
  },

  {
    slug: 'social-security-direct-deposit-setup',
    title: 'How to Set Up or Change Your Social Security Direct Deposit',
    excerpt: 'Set up, change, or verify your Social Security direct deposit online or by phone — step-by-step with official SSA instructions.',
    category: 'online-banking',
    tags: ['Social Security', 'direct deposit', 'SSA', 'benefits'],
    readTime: '6 min',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-05-03',
    lastVerifiedAt: '2026-05-03',
    difficulty: 'Beginner',
    body: `If you receive Social Security retirement, disability (SSDI), or Supplemental Security Income (SSI) benefits, the SSA strongly encourages direct deposit. Direct deposit puts your payment in your account on the payment date, even on weekends, and eliminates the risk of a check being lost, stolen, or delayed in the mail.

More than 99% of Social Security payments are already made by direct deposit. If you are still receiving a paper check, switching to direct deposit is a wise move.

You can set up or change your direct deposit in three ways: online through your free "my Social Security" account at ssa.gov, by calling the SSA at 1-800-772-1213 (TTY: 1-800-325-0778), or by visiting your local Social Security office.

To make the change, you will need your bank's routing number and your account number (found on a personal check or in your bank's app).

Changes to your direct deposit information typically take 30-60 days to process. During that transition period, you may still receive a paper check while the SSA updates your records. Do not close your old bank account until the first deposit arrives in your new account.

Be cautious of anyone who contacts you claiming to be from Social Security and asking for your banking information. The real SSA will never call you unsolicited and ask for your bank account numbers. If you receive such a call, hang up and call the SSA directly at 1-800-772-1213.

(Source: Social Security Administration, ssa.gov/deposit)`,
    steps: [
      {
        title: 'Gather your bank information',
        content: 'Before starting, write down your bank\'s 9-digit routing number and your full account number. Both are printed on the bottom of a personal check, or you can find them in your bank\'s app under "Account Details." Know whether you want the deposit in your checking or savings account.',
      },
      {
        title: 'Option 1: Make the change online through my Social Security',
        content: 'Go to ssa.gov and click "Sign In" or "Create an Account." You will need your email address, a phone number for verification, and your Social Security Number. Once logged in, go to "Update Direct Deposit" under the Benefits & Payments section. Enter your bank routing number, account number, and account type.',
        tip: 'Quick Tip: If you create a my Social Security account for the first time, identity verification may ask you to confirm information from your credit file. This is a routine security step.',
      },
      {
        title: 'Option 2: Call the SSA',
        content: 'Call 1-800-772-1213. Phone lines are open Monday through Friday, 8 a.m. to 7 p.m. local time. Tell the representative you want to update your direct deposit information. Have your routing number and account number ready. The representative will also verify your identity before making the change.',
      },
      {
        title: 'Option 3: Visit your local SSA office',
        content: 'Find your nearest office at secure.ssa.gov/ICON/main.jsp. Bring a photo ID (driver\'s license or passport) and a voided check or a letter from your bank showing your routing and account number. A staff member will process the change while you wait.',
      },
      {
        title: 'Confirm the first deposit in your new account',
        content: 'After requesting the change, allow 1-2 payment cycles (up to 60 days) for it to take effect. Log into your bank account on your scheduled payment date (SSA pays on specific Wednesdays based on your birth date) to confirm the deposit arrived. If it does not arrive, call the SSA before assuming anything is wrong.',
        warning: 'Do not close your old bank account until you have confirmed at least one Social Security payment arrived successfully in the new account.',
      },
    ],
  },
];
