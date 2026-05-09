// guides-batch-197 — 4 senior-priority guides on personal banking and check safety
// Drafted 2026-05-08 to support financial confidence and fraud awareness for older adults
// Sourced from Consumer Financial Protection Bureau, FDIC, FTC, AARP, and major bank help centers

import type { Guide } from "./guides";

export const guidesBatch197: Guide[] = [
  {
    slug: "how-to-balance-checkbook-monthly",
    title: "How to Balance Your Checkbook Each Month",
    excerpt: "Match your check register against the bank statement step by step so you catch mistakes, missing charges, and possible fraud early.",
    category: "financial-tech",
    tags: ["checkbook", "banking", "budgeting", "money", "personal finance"],
    readTime: "7 min",
    thumbnailEmoji: "📒",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Balancing a checkbook means comparing the running total in your check register (the small booklet that came with your checks) against the statement your bank sends each month. The two numbers should match within a few cents once every check, deposit, debit-card swipe, and fee has been accounted for. When they do not match, the difference points to one of a small number of possible causes: a check that has not cleared yet, a deposit that posted late, a debit-card charge you forgot to write down, a bank fee, an arithmetic mistake, or, in rare cases, a fraudulent charge.\n\nThe Consumer Financial Protection Bureau (CFPB) recommends that every household balance the checkbook at least once a month, and ideally once a week if a debit card sees frequent use. The reason is straightforward — federal banking rules give you only 60 days from the date of a fraudulent charge appearing on your statement to report it for full reimbursement. After 60 days, the bank can legally limit how much they pay back. Catching odd charges early protects your money.\n\nMany people stopped balancing the checkbook once online banking became common. That is a mistake. Online banking shows the bank's records, but the bank's records do not show the checks you wrote that have not cleared yet, and they do not catch the moment when a $20 dinner is charged as $200 by accident. Only your own register holds the full picture. The 30 minutes it takes each month to reconcile the two is one of the highest-value habits in personal finance.\n\nThe process has not changed in 50 years. You compare each line, mark off matching items, list anything outstanding, and do a short piece of arithmetic. A pencil with an eraser, a calculator, the bank statement, and the check register are all you need. Most people who do this regularly finish the whole task in about 20 to 30 minutes. The first time may take an hour while you build the habit.\n\nThis guide walks through balancing the checkbook for one month. Once the routine is in place, the same steps work every month for the rest of your life.",
    steps: [
      {
        title: "Gather your materials at a clear table",
        content: "Sit down with the most recent bank statement (paper or printed from online banking), your check register, a pencil with a good eraser, a calculator, and any debit-card receipts from the past month. Spread them out on a clear table or kitchen counter with good light. Turn off the television. The task takes focus for about 30 minutes — set a timer if that helps you stay with it.",
        tip: "If you bank online and want a paper statement, log in to your bank's website, find Statements or Documents, and print the most recent one. You can also call the bank and ask them to mail paper statements at no charge.",
      },
      {
        title: "Mark off every item that appears on both sides",
        content: "Open the bank statement and your check register side by side. Go down the bank statement line by line. For every check, deposit, or debit-card charge that also appears in your register, place a small checkmark next to the entry in both places. Work slowly. Match by date and amount. When something on the statement is missing from your register, write it into the register now and place a checkmark.",
        warning: "Do not skip charges that look small or unfamiliar. A $1.99 charge from a name you do not recognize may be a sign that your card number was stolen and is being tested before a larger charge. Circle anything you cannot identify and call the bank.",
      },
      {
        title: "List any items still unmarked",
        content: "After going through the whole statement, look back at your register. Any entries without a checkmark are \"outstanding\" — checks you wrote or deposits you made that have not cleared the bank yet. On a separate sheet of paper, write the heading \"Outstanding Checks\" and list the check number and amount of each unchecked check. Below that, write \"Deposits in Transit\" and list any unchecked deposits. Add up each list.",
      },
      {
        title: "Do the reconciliation arithmetic",
        content: "Start with the ending balance shown on the bank statement. Add the total of any deposits in transit. Subtract the total of any outstanding checks. The number you reach should match the current balance in your check register within a few cents. Write the result in the margin and compare it to your register total.",
      },
      {
        title: "If the numbers do not match, hunt for the difference",
        content: "Differences usually come from one of four sources: a transposed number (writing $54 as $45), a forgotten debit-card swipe, a bank fee not recorded in the register, or an arithmetic error in the running total. Check the math first by adding the register column down again with the calculator. Look for any bank fees, ATM fees, or interest entries on the statement that are not in your register. If after 15 minutes the number still does not match, set the work aside, take a break, and come back with fresh eyes.",
        warning: "If a charge appears on your statement that you did not make and cannot explain, call your bank right away. Federal rules give you 60 days to report the charge for full reimbursement. The phone number for fraud reports is on the back of your debit card.",
      },
      {
        title: "File the statement and start fresh next month",
        content: "Once the numbers match, write the date and \"reconciled\" on the top of the statement. File it in a folder labeled \"Bank Statements [Year].\" Keep monthly statements for at least 3 years and year-end statements for 7 years for tax purposes. Your check register is now ready for the next month — the running total is correct, and the only entries that should appear next month are new transactions.",
      },
    ],
  },
  {
    slug: "how-to-deposit-check-with-phone",
    title: "How to Deposit a Check Using Your Phone (Mobile Deposit)",
    excerpt: "Snap two photos of a check with your bank's app and the money lands in your account in 1 to 2 business days — no trip to the bank.",
    category: "financial-tech",
    tags: ["mobile deposit", "banking", "check", "app", "smartphone"],
    readTime: "7 min",
    thumbnailEmoji: "📱",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Mobile check deposit is a feature inside almost every bank and credit union app in the United States. You take a photo of the front of a check, a photo of the back, type in the amount, and tap Submit. The bank reads the photos, posts the deposit to your account, and the money clears in 1 to 2 business days — sometimes the same day for smaller amounts. The whole process takes about 3 minutes and works any time of day, any day of the week, including weekends and holidays.\n\nThe technology has been around since 2009, when USAA introduced the first mobile deposit feature. Today every major bank — Chase, Bank of America, Wells Fargo, Citi, US Bank, PNC, Capital One, Truist, plus thousands of credit unions and community banks — offers mobile deposit at no charge for personal accounts. Most banks have daily and monthly limits (usually $5,000 to $10,000 per day for established customers), so a very large check may still need to be deposited at a branch.\n\nA common worry among older adults is that mobile deposit is less safe than walking into a branch. The opposite is closer to the truth. The check photos travel through the same encrypted connection that protects online banking. The bank's software reads the routing and account numbers automatically, eliminating one common source of teller-error. The biggest safety risk is the paper check itself once the deposit has cleared — see Step 6 below for how to handle the original.\n\nTo use mobile deposit, three things must be in place: the bank's official app downloaded on your phone, online banking set up with a username and password, and the camera on the phone working clearly. If any of these are missing, see the steps below for how to set them up. The first deposit takes about 10 minutes from start to finish. Every deposit after that takes 3 minutes or less.\n\nThis guide walks through depositing one check using mobile deposit. The same steps work for paychecks, Social Security checks (if you still receive paper), refund checks, gift checks from family, and tax refund checks.",
    steps: [
      {
        title: "Download your bank's official app",
        content: "On iPhone, open the App Store. On Android, open the Google Play Store. Tap the search bar and type your bank's name — \"Chase,\" \"Bank of America,\" \"Wells Fargo,\" or whatever bank holds your account. Look for the official app, which shows the bank's logo and lists the bank itself as the publisher. Tap Get or Install. The app downloads in about 30 seconds.",
        warning: "Many fake banking apps exist. Confirm the publisher line shows your bank's full legal name, not a name you do not recognize. If unsure, call the number on the back of your debit card and ask them to confirm the correct app name.",
      },
      {
        title: "Sign in with your online banking username and password",
        content: "Open the app and tap Sign In. Enter the username and password you use for online banking on a computer. If you have never set up online banking, tap \"Enroll\" or \"First time user\" and follow the prompts — you will need your account number, debit card number, and Social Security number on hand. The first sign-in on a new phone may also send a verification code by text message that you type in to confirm your identity.",
      },
      {
        title: "Endorse the back of the check correctly",
        content: "Flip the check over. On the back, in the small endorsement box at the top, sign your name exactly as it appears on the front of the check. Below your signature, write \"For mobile deposit only at [Bank Name]\" — for example, \"For mobile deposit only at Chase.\" This restrictive endorsement is required by most banks for mobile deposit and protects you if the photo is intercepted.",
        tip: "Some banks now require you to also write the date and the last 4 digits of your account number on the endorsement line. Check your bank's mobile deposit instructions inside the app — they appear on the deposit screen.",
      },
      {
        title: "Tap Deposit and pick the account",
        content: "From the app's main screen, look for a button or icon labeled Deposit, Deposit Check, or with a small camera-and-check picture. Tap it. The app asks which account to deposit into — checking or savings. Tap the right one. Then type in the amount of the check exactly. Double-check the amount before moving on.",
      },
      {
        title: "Take photos of the front and back",
        content: "The app prompts \"Photo of front.\" Place the check on a dark, solid-color surface (a wood table works well — avoid patterns). Hold the phone about 8 inches above the check so all four corners show inside the on-screen guide box. The app captures the photo automatically once it sees a clear image. Repeat for the back of the check. If a photo comes out blurry, the app says so — tap Retake and try again with better light.",
        warning: "The check must be lit evenly. A bright kitchen light overhead works. Avoid taking photos with a window directly behind you, which casts a shadow of the phone onto the check.",
      },
      {
        title: "Submit and wait for confirmation",
        content: "Review the photos and amount on the confirmation screen. Tap Submit or Deposit. The app shows a confirmation number — write it down or screenshot it. The deposit usually posts to your account within a few minutes, but the funds may take 1 to 2 business days to be available for withdrawal. You will see the deposit listed as \"Pending\" until it clears.",
      },
      {
        title: "Mark and store the paper check for 14 days",
        content: "After a successful mobile deposit, write \"DEPOSITED on [date] via mobile\" across the front of the check in pen. Place it in a safe drawer or envelope and keep it for 14 days. This delay protects you in case the deposit fails and needs to be redone. After 14 days, shred the check with a cross-cut shredder. Never throw a deposited check in the trash whole — the account and routing numbers on the bottom are all a thief needs.",
      },
    ],
  },
  {
    slug: "how-to-spot-fake-check",
    title: "How to Spot a Fraudulent or Fake Check",
    excerpt: "Learn the warning signs of fake checks scammers send to older adults, and the bank-teller habits that protect your money.",
    category: "safety-guides",
    tags: ["scams", "check fraud", "fraud", "safety", "fake check"],
    readTime: "7 min",
    thumbnailEmoji: "🚨",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Fake check scams are one of the most common forms of fraud aimed at older adults. The Federal Trade Commission (FTC) reports that fake check scams cost Americans more than $300 million in 2025, with people over 60 making up nearly 40 percent of the victims. The scam works like this: a scammer sends you a real-looking check, asks you to deposit it, and then asks you to send part of the money back — by gift cards, wire transfer, money order, or another check. Days or weeks later, the check bounces. The bank pulls the money back out of your account. The money you sent is gone for good, and you owe the bank for the bounced check.\n\nThe heart of the scam is timing. Federal banking rules require banks to make funds from a check available within 1 to 5 business days, even though the check itself can take 2 to 3 weeks to fully clear. So when a teller says \"the funds are available,\" that does not mean the check is good. It means only that the bank has fronted you the money while waiting for the check to actually clear. If the check turns out to be fake, the bank reverses the deposit and you are responsible for every dollar.\n\nFake checks today are extremely convincing. They use real bank routing numbers, real bank logos, watermark patterns, and account numbers stolen from genuine business accounts. Many even pass the magnetic-ink check used by ATM scanners. A fake check can fool a bank teller for the full hold period. The only reliable way to avoid loss is to never send money back from a deposited check, no matter how legitimate the check looks or how good the story sounds.\n\nCommon scam stories include: \"You won a foreign lottery — pay the taxes from this check.\" \"You were hired as a mystery shopper — cash this check, send most of it to the company, and keep the rest as your fee.\" \"You sold an item online and the buyer accidentally sent too much — please refund the difference.\" \"You inherited money from a distant relative — pay the legal fees from this check.\" In all of these, you are asked to send real money in exchange for a fake check.\n\nThis guide shows you the warning signs to look for and the safe-handling habits that keep your money where it belongs.",
    steps: [
      {
        title: "Recognize the universal red flag",
        content: "Anyone who sends you a check and then asks you to send money back is running a scam. Every time. There is no exception. Real winners do not pay taxes upfront. Real employers do not pre-pay you and ask for refunds. Real buyers do not overpay and ask for change by Zelle. If the words \"deposit this check and send the difference\" appear in the conversation, the check is fake. Stop the deposit, save the check as evidence, and report the message.",
        warning: "Scammers create urgency on purpose. \"Send the money today before the offer expires.\" \"Wire it within 24 hours or you lose your job.\" The pressure is meant to keep you from thinking it through. A real opportunity is patient.",
      },
      {
        title: "Examine the physical check carefully",
        content: "Hold the check up to a bright light. A real business check has a watermark — a lighter pattern visible through the paper, often the bank's logo or the word \"VOID\" appearing if you photocopy it. The paper feels firm, not flimsy. The numbers along the bottom (the routing and account numbers) are printed in special magnetic ink that has a slightly raised, dull look — not glossy. Edges of a real check are perforated on at least one side. A fake check often has smooth, machine-cut edges on all four sides.",
      },
      {
        title: "Verify the bank with a separate phone call",
        content: "Look at the bank name printed on the check. Search the bank's name online and find the customer service phone number on the bank's official website — not the number printed on the check, which may be a scammer's number. Call the bank and ask them to verify the check by routing number, account number, and amount. Real banks have a fraud department that can confirm in 5 minutes whether a check is real or fake.",
        tip: "Banks will not always confirm a check by phone for privacy reasons, but they can almost always confirm whether the routing number belongs to them and whether checks of that amount are common from that account. Ask politely and they will help.",
      },
      {
        title: "Wait for the check to fully clear before spending the money",
        content: "Even if your bank says the funds are available after 5 business days, the check may not be fully cleared. For any check from someone you do not know personally, wait at least 14 business days (about 3 weeks) before spending the money or sending any portion of it. Watch your account daily during that period. If the deposit reverses, the words \"Deposited Item Returned\" or \"Returned NSF\" will appear in your transaction list.",
        warning: "If you have already sent money from a check that bounced, call your bank immediately. In some cases, fast action can stop a wire transfer or pending Zelle payment before it leaves your account.",
      },
      {
        title: "Watch for these specific scam stories",
        content: "Be on guard for any of these setups: a job offer where you receive a check before doing any work; a sweepstakes or foreign lottery you do not remember entering; an online buyer who pays more than the price and asks for the difference back; a romantic interest from online dating who needs help cashing a check; a grandchild or relative \"in trouble\" who needs you to deposit a check and forward the money; a check that arrives in the mail with no clear sender. Each of these stories matches a known scam pattern documented by the FTC at consumer.ftc.gov/articles/fake-check-scams.",
      },
      {
        title: "Report a suspected fake check the right way",
        content: "If you receive a suspicious check, do not deposit it. Take photos of the front and back. Then report it to three places: (1) the FTC at reportfraud.ftc.gov; (2) the U.S. Postal Inspection Service at uspis.gov/report if it arrived by mail; and (3) your local police if a financial loss already happened. If you deposited the check and lost money, also call your bank's fraud department right away. Save every email, text, and letter related to the scam — they help investigators and may help recover funds.",
      },
      {
        title: "Talk it over before any large deposit",
        content: "Before depositing any check from someone you do not know personally, talk it over with a trusted family member, a friend, or your banker. Scammers count on people acting alone under pressure. A 10-minute conversation with a second pair of eyes catches most scams before any money is lost. Many banks now train tellers to ask seniors about the source of large checks — answer honestly, and accept the help if it is offered.",
      },
    ],
  },
  {
    slug: "how-to-order-checks-online",
    title: "How to Order New Checks Online",
    excerpt: "Reorder personal checks from your bank or a trusted printer in about 10 minutes, with tips on saving money and protecting your account number.",
    category: "financial-tech",
    tags: ["checks", "banking", "online ordering", "personal finance", "money"],
    readTime: "6 min",
    thumbnailEmoji: "✏️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Ordering new personal checks used to require a trip to the bank and a 30-minute conversation with a teller. Today the same task takes about 10 minutes online and the checks arrive in the mail in 7 to 14 business days. Every major bank in the United States offers online check reordering through their website or mobile app, and several independent printers — Walmart Checks, Costco Checks, Checks Unlimited, and Bradford Exchange — sell the same checks at lower prices.\n\nA box of 100 personal checks ordered through a bank typically costs $20 to $35. The same box from Walmart Checks or Costco Checks costs $7 to $15. The checks themselves are identical in security features — both options use the same MICR magnetic-ink line at the bottom, the same security backgrounds, and meet the same banking standards. The price difference comes from bank markup, not from quality.\n\nA common worry is that ordering through a non-bank printer is risky because they need your routing and account numbers. The risk is small if you stick with the well-known printers listed above, all of which have been in business for decades and use encrypted ordering pages. The bigger risk is ordering from an unknown website found through a random internet search — those sites may be fake fronts that collect your account information and never send the checks. When in doubt, order through your bank's app or website, where the account information is already on file.\n\nWhen the new checks arrive, the starting check number matters. By tradition, personal check numbers start at 101 and run upward. Many merchants are slightly more cautious about checks numbered below 200, on the theory that low-numbered checks come from new accounts that scammers may have recently opened. Most printers let you start the new box at the next number after your current checks (for example, if your last check was 1248, the new box starts at 1249).\n\nThis guide walks you through ordering a new box of checks from your bank's website. The same steps work for the major independent printers, with small differences in where the order button lives.",
    steps: [
      {
        title: "Find your current account and routing numbers",
        content: "If you still have one old check, the numbers are printed across the bottom. The first set (9 digits) is the routing number, identifying your bank. The second set is your account number. The third set is the check number. If you have no checks left, sign in to online banking, find Account Details or Account Information, and the routing and account numbers appear there. Write them down on a slip of paper to have ready.",
        tip: "If you have moved since your last check order, also have your current mailing address and phone number ready. Outdated address information on checks is a common cause of merchant rejection.",
      },
      {
        title: "Sign in to your bank's website or app",
        content: "Open a web browser and go to your bank's website (chase.com, bankofamerica.com, wellsfargo.com, etc.) or open the bank's mobile app. Sign in with your username and password. Look in the menu for Customer Service, Tools, More, or a settings gear icon — the check reorder link is usually filed there under \"Order Checks\" or \"Reorder Checks.\"",
        warning: "Make sure the address bar shows your bank's exact website (chase.com, not chasse.com or chase-bank-online.com). Scammer sites with similar-looking names are designed to capture your sign-in credentials. When in doubt, type the bank's name into a search engine and click the official result rather than following any link in an email.",
      },
      {
        title: "Pick the check style and quantity",
        content: "The bank shows several check designs — plain blue, scenic backgrounds, charity-supporting designs, sports team logos. Pick what you like. The plain designs are the cheapest, often $20 for 100 checks. Decorated checks run $25 to $40. Pick the quantity — most people order 100 checks (one box) or 200 (two boxes) to save on shipping. If you write fewer than 5 checks a month, one box lasts 2 years or more.",
      },
      {
        title: "Confirm the starting check number and address",
        content: "The order screen shows the starting check number, usually filled in based on your last order. Confirm it is one higher than your most recent check. Then verify the name and address that will print on the checks. Many banks let you customize the second-line entry — a spouse's name, a phone number, or a P.O. Box. Once printed, this information cannot be changed without ordering a new box, so review carefully.",
        warning: "Do not print your Social Security number, driver's license number, or full date of birth on a check. The information lands in the hands of every cashier and merchant who handles the check. Name, address, and phone number are enough.",
      },
      {
        title: "Pick a shipping method",
        content: "Standard shipping is free or low-cost ($1 to $4) and takes 7 to 14 business days. Trackable or expedited shipping costs $7 to $20 and arrives in 3 to 5 business days. For most reorders, standard shipping is fine — order before you run out, and the wait is no problem. If you are down to your last few checks already, pay for tracked shipping so the package does not get lost.",
        tip: "Trackable shipping is worth the extra few dollars even when you are not in a rush. Checks left in an unsecured mailbox for several days are a target for mail theft. Tracking lets you watch the package and bring it inside as soon as it arrives.",
      },
      {
        title: "Review the order and confirm",
        content: "Before tapping Submit, double-check every detail: name spelling, address, starting check number, quantity, and shipping method. Tap Submit. The bank shows a confirmation number — write it down or screenshot it. You will receive an email confirmation within a few minutes and a shipping notice when the checks leave the printer.",
      },
      {
        title: "Store the checks safely when they arrive",
        content: "When the box arrives, count the checks against the order to confirm you received the full quantity. Store the unused checks in a locked drawer or a small safe, not in plain sight on a desk. Each check holds your full account and routing numbers — anyone who picks one up can drain the account. Shred any old leftover checks from the previous box with a cross-cut shredder before throwing them away.",
      },
    ],
  },
];
