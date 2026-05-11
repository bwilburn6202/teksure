// guides-batch-194 — 4 senior-priority guides on personal finance basics
// Drafted 2026-05-08 to help older adults track and manage their money
// Sourced from AARP, Consumer Financial Protection Bureau, IRS, Fidelity, and Vanguard

import type { Guide } from "./guides";

export const guidesBatch194: Guide[] = [
  {
    slug: "how-to-figure-out-your-net-worth",
    title: "How to Figure Out Your Net Worth in 15 Minutes",
    excerpt: "Add up what you own, subtract what you owe, and write down a single number that shows where you stand financially today.",
    category: "financial-tech",
    tags: ["net worth", "personal finance", "retirement", "budgeting", "seniors"],
    readTime: "6 min",
    thumbnailEmoji: "💰",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Net worth is one number that answers a big question: if you sold everything you own and paid off everything you owe, how much money would you have left? It is the cleanest measure of financial health, and most financial advisors recommend checking it once a year. For seniors, knowing your net worth matters because it shapes decisions about Medicare supplements, long-term care insurance, gifts to family, and whether your retirement savings will last.\n\nThe math is straightforward: assets minus liabilities equals net worth. Assets are what you own — your home, car, checking and savings accounts, retirement accounts (IRA, 401k, 403b), pensions with cash value, brokerage accounts, certificates of deposit, savings bonds, and any rental property. Liabilities are what you owe — mortgage, car loan, credit card balances, medical bills you have not paid yet, home equity line of credit, and any personal loans.\n\nMost people are surprised by their number, in both directions. Homeowners who bought their house 30 years ago for $80,000 often discover the home is worth $400,000 today, putting their net worth far higher than they thought. On the other side, people who carry $20,000 in credit card debt see how much that debt is dragging down everything else.\n\nThe number does not have to be perfect. A rough net worth — within a few thousand dollars — is more useful than a precise one you never finish calculating. Use today's market value for the house (check Zillow or Redfin for an estimate), the Kelley Blue Book value for the car, and the current balance on each account.\n\nDo not include Social Security in net worth, even though it is income. Social Security is a monthly payment, not an asset you can sell. The same is true for a traditional pension — count only the cash-out value if your pension offers one.\n\nWrite the number on a sticky note and tuck it into your tax folder. Next year, calculate it again. The change from year to year tells you whether you are building wealth, holding steady, or slowly drawing down. All three are normal in retirement — the goal is to know which one is happening so you can plan ahead.",
    steps: [
      {
        title: "List everything you own with a dollar value",
        content: "Take a piece of paper and write three columns: Item, Where It Is, Value. List your house (use the Zillow estimate), car (Kelley Blue Book), checking and savings balances, every retirement account, any brokerage account, certificates of deposit, savings bonds, and rental property. Include life insurance only if it has a cash surrender value — term life insurance has none.",
        tip: "Pull out last month's statements before you start. Banks, Fidelity, Vanguard, and most brokers mail or email statements on the first of each month, and the totals on those pages are exactly what you need.",
      },
      {
        title: "Add up the asset column",
        content: "Use a calculator or open the calculator app on your phone. Add every number in the Value column. Write the total at the bottom and circle it. This is your total assets — what you own.",
      },
      {
        title: "List everything you owe",
        content: "On a second sheet, write what is left on your mortgage, car loan, credit card balances (the full balance, not the minimum payment), home equity line of credit, medical bills, and any personal loans. Look at the most recent statement for each — the payoff amount is usually printed in the upper right corner.",
        warning: "Do not skip credit card debt because you plan to pay it off this month. Net worth is a snapshot of right now, and a $3,000 balance counts as $3,000 owed even if you intend to clear it.",
      },
      {
        title: "Add up the liability column and subtract",
        content: "Add every number in the Owe column to get total liabilities. Then subtract that total from your total assets. The result is your net worth. If assets are $450,000 and liabilities are $80,000, your net worth is $370,000.",
      },
      {
        title: "Save the number and set a yearly reminder",
        content: "Write the date and the net worth number on an index card. Put it in your tax folder so you find it next April. On your phone, open the Calendar app and add a yearly reminder titled \"Net Worth Check\" for the same week next year. Comparing year to year shows whether your finances are growing, holding, or slowly being spent down.",
      },
    ],
  },
  {
    slug: "how-to-do-end-of-year-financial-snapshot",
    title: "How to Do an End-of-Year Financial Snapshot",
    excerpt: "Run a 30-minute year-end check on your accounts, taxes, and beneficiaries so January starts with no surprises.",
    category: "financial-tech",
    tags: ["year-end", "personal finance", "taxes", "retirement", "checklist"],
    readTime: "8 min",
    thumbnailEmoji: "📊",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Every December, financial advisors run the same checklist for clients: account balances, required minimum distributions, charitable gifts, beneficiary updates, and tax planning. You can do the same thing yourself in about 30 minutes, and it can save you hundreds of dollars in taxes plus a great deal of stress in February when tax forms start arriving.\n\nThe end-of-year snapshot has five parts. First, write down the closing balance of every account on December 31. Second, confirm your required minimum distribution (RMD) was taken if you are 73 or older — missing it means a 25 percent penalty from the IRS. Third, decide whether to donate to charity by December 31 to capture the deduction on this year's taxes. Fourth, check the beneficiary listed on every retirement account and life insurance policy. Fifth, gather the documents your tax preparer will ask for so January is not a scramble.\n\nThe RMD step is the most expensive one to miss. Once you turn 73, the IRS requires you to withdraw a set amount from your traditional IRA and 401k each year. The amount is based on your age and the December 31 balance from the prior year. Most brokerages — Fidelity, Vanguard, Schwab, T. Rowe Price — will calculate the RMD for you and offer to send the money to your checking account. The deadline is December 31. Miss it and the penalty is 25 percent of the amount you should have withdrawn.\n\nCharitable giving has a special rule for seniors. If you are 70 1/2 or older, you can send up to $105,000 directly from your IRA to a charity. This is called a Qualified Charitable Distribution (QCD). The money never shows up as income on your taxes, which can lower your Medicare premium and the taxable share of your Social Security. Tell your IRA custodian \"I want to make a QCD\" and they will mail a check directly to the charity.\n\nDoing the snapshot before December 31 gives you time to act on what you find. Doing it in January is still useful, but most of the tax-saving moves have to happen before the year ends.",
    steps: [
      {
        title: "Write down December 31 balances",
        content: "On a single page, list each account: checking, savings, every CD, each retirement account (IRA, 401k, 403b), brokerage accounts, and savings bonds. Next to each, write the closing balance from your December 31 statement. Statements arrive by mail in early January or are available online by January 5 on most bank and brokerage websites.",
      },
      {
        title: "Confirm your RMD is done if you are 73 or older",
        content: "Log into your IRA or 401k website. Look for a section called \"Required Minimum Distribution,\" \"RMD Center,\" or \"Distributions.\" The page shows the required amount for the year and how much has been withdrawn. If those numbers match, you are done. If not, there is a button to take the rest of the RMD before December 31.",
        warning: "The IRS penalty for missing an RMD is 25 percent of the missed amount. If December 31 falls on a weekend, take the distribution by the prior Friday — many brokerages will not process same-day requests on the 31st.",
      },
      {
        title: "Make any charitable gifts you planned for the year",
        content: "If you give to charity each year, December is the deadline for this year's tax deduction. For donations over $250, ask the charity for a written receipt — the IRS requires it. If you are 70 1/2 or older, ask your IRA custodian about a Qualified Charitable Distribution (QCD), which sends money straight from your IRA to the charity and does not count as taxable income.",
        tip: "Donor-advised funds at Fidelity Charitable, Schwab Charitable, or Vanguard Charitable let you make one large gift, claim the deduction this year, and parcel it out to charities over the next several years.",
      },
      {
        title: "Check beneficiaries on every retirement account",
        content: "Log into each retirement account website. Find the section labeled \"Beneficiaries\" — it is usually under Profile, Account Settings, or My Information. Confirm the names and percentages match your wishes today. Beneficiary forms override what is in your will, so an out-of-date beneficiary can send money to an ex-spouse no matter what your will says.",
      },
      {
        title: "Gather tax documents in one folder",
        content: "Create a folder labeled \"Taxes [year]\" — paper or digital, your choice. As forms arrive in January and February, drop them in: 1099-R from retirement accounts, 1099-INT and 1099-DIV from banks and brokerages, SSA-1099 from Social Security, 1095-B from Medicare, property tax bill, charity receipts, and any medical expense records over $500.",
      },
      {
        title: "Schedule the appointment with your tax preparer",
        content: "Call your CPA or tax preparer the first week of January and book an appointment for late February or early March. Earlier appointments are cheaper at most firms because they are not yet in the rush. If you use TurboTax or H&R Block software, mark March 15 on your calendar as the day to start — that gives a full month before the April 15 filing deadline.",
      },
    ],
  },
  {
    slug: "how-to-use-google-sheets-for-finances",
    title: "How to Use Google Sheets for Tracking Finances",
    excerpt: "Build a free spreadsheet that tracks income, spending, and account balances — auto-saves to the cloud and works on phone or computer.",
    category: "financial-tech",
    tags: ["Google Sheets", "budgeting", "spreadsheets", "personal finance", "free tools"],
    readTime: "9 min",
    thumbnailEmoji: "📈",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Google Sheets is a free spreadsheet program from Google. It does the same things as Microsoft Excel but costs nothing, saves your work to the cloud automatically, and opens on any computer or phone with an internet connection. For tracking personal finances, it is one of the best free tools available — no subscription, no ads, no ads selling your data.\n\nA spreadsheet is a grid of boxes called cells, arranged in rows and columns. Each cell can hold a word, a number, or a formula. The power comes from formulas — type =SUM(B2:B10) into a cell and Sheets adds up the numbers in those nine cells automatically. Change one number and the total updates on its own.\n\nFor finances, three sheets cover most needs: a monthly spending log, an account balance tracker, and an income log. The spending log lists every purchase with the date, description, category, and amount. The balance tracker holds the end-of-month balance for each account. The income log records Social Security deposits, pension payments, and any other money coming in.\n\nGoogle Sheets saves automatically. There is no Save button — every keystroke is stored on Google's servers within two seconds. If your computer dies, you turn on a different computer, sign into your Google account, and the spreadsheet is exactly where you left it. The same is true on your phone — install the Google Sheets app, sign in, and your spreadsheet appears.\n\nThe trade-off is that you need a Google account (free) and an internet connection most of the time. If privacy worries you, remember that Google's terms of service for personal Drive files state that Google does not sell the contents of your files. Two-step verification on your Google account adds a code from your phone every time someone tries to sign in, which keeps the spreadsheet safe even if your password is stolen.\n\nThis guide walks you through making a basic monthly spending tracker. Once you have built it, you can copy the same sheet for next month or expand it into a full budget.",
    steps: [
      {
        title: "Open Google Sheets and start a blank spreadsheet",
        content: "On a computer, open a web browser and go to sheets.google.com. Sign in with your Google account if asked. Click the large plus sign labeled \"Blank\" — a new empty spreadsheet opens. At the top left, click where it says \"Untitled spreadsheet\" and type a name like \"My Finances 2026.\" Press Enter to save the name.",
        tip: "If you do not have a Google account, click \"Create account\" at accounts.google.com. The setup takes about 5 minutes and gives you Gmail, Drive, and Sheets all at once.",
      },
      {
        title: "Build the column headers",
        content: "Click cell A1 (the top-left box). Type \"Date\" and press Tab to move right. Type \"Description\" and press Tab. Type \"Category,\" Tab, \"Amount,\" Tab, \"Notes,\" then press Enter. The five headers run across row 1. To make them stand out, click the row number 1 to highlight the whole row, then click the Bold button (B) at the top of the screen.",
      },
      {
        title: "Enter your first few purchases",
        content: "Click cell A2. Type a date like 5/1/2026 and press Tab. In B2 type the store name (Walmart, Kroger, gas station). In C2 type a category (Groceries, Gas, Medical). In D2 type the amount as a number, like 47.85. Skip the dollar sign — Sheets adds it later. In E2 add notes if you want. Press Enter to start the next row.",
      },
      {
        title: "Format the Amount column as money",
        content: "Click the letter D at the top of the Amount column to highlight the whole column. From the menu at the top, click Format, then Number, then Currency. Every number in column D now shows with a dollar sign and two decimal places. Empty cells stay blank until you type in them.",
      },
      {
        title: "Add a total at the bottom",
        content: "Scroll down to a row well below your data — try row 50. Click cell C50 and type \"Monthly Total.\" Click cell D50 and type =SUM(D2:D49) — the equal sign is what tells Sheets it is a formula. Press Enter. Cell D50 now shows the total of every amount in column D. Each time you add a new purchase above, the total updates on its own.",
        warning: "The formula must start with the equal sign. If you type SUM(D2:D49) without the equal sign, the cell shows the text instead of the total.",
      },
      {
        title: "Install the Sheets app on your phone",
        content: "On iPhone, open the App Store. On Android, open the Play Store. Search for \"Google Sheets\" and tap Install. Open the app and sign in with the same Google account. Your spreadsheet appears in the list. Tap it to open. You can add purchases on your phone right after a store visit, and the changes show up on the computer the next time you open it.",
      },
      {
        title: "Share with a trusted family member if you want",
        content: "On the computer, open the spreadsheet and click the blue Share button at the top right. Type the email address of an adult child or financial helper. Choose \"Viewer\" if you want them to read only, or \"Editor\" if you want them to add entries too. Click Send. They get an email with a link. You can remove their access at any time by returning to the same Share screen.",
      },
    ],
  },
  {
    slug: "how-to-update-retirement-beneficiaries",
    title: "How to Update Beneficiaries on Retirement Accounts",
    excerpt: "Change the person listed to inherit your IRA, 401k, or pension in 20 minutes — and learn why this overrides your will.",
    category: "financial-tech",
    tags: ["beneficiaries", "retirement", "IRA", "401k", "estate planning"],
    readTime: "7 min",
    thumbnailEmoji: "📝",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "A beneficiary is the person who inherits an account when the account holder dies. For retirement accounts — IRAs, 401ks, 403bs, pensions, and annuities — the beneficiary form on file with the brokerage is what controls who gets the money. Not your will. Not what you told your family. The form. If the form lists an ex-spouse and you never updated it, the ex-spouse inherits the account, even if your current will leaves everything to your children.\n\nThis is one of the most common and most expensive estate-planning mistakes. Court records are full of cases where a parent meant to leave a 401k to their three children but left the original beneficiary form blank. When that happens, the account goes through probate — a court process that takes 6 to 18 months and costs 3 to 7 percent of the account in fees.\n\nUpdating beneficiaries is free and takes about 20 minutes per account. Every brokerage and 401k plan has a beneficiary section on its website. You sign in, click Beneficiaries, type in names and Social Security numbers, and click Save. Some plans require a paper form mailed back with a signature; most accept the online version.\n\nThree rules help make smart choices. First, name a primary and a contingent beneficiary. The primary is the first in line; the contingent inherits only if the primary has died too. Naming both protects the account if you and your primary beneficiary die in the same accident. Second, give percentages, not dollar amounts. Write \"50 percent to son, 50 percent to daughter\" rather than dollar figures, because the account balance changes over time. Third, list each person by full legal name, date of birth, and Social Security number — not \"my children,\" which is too vague and can cause delays.\n\nReview beneficiaries every year and after any major life event: marriage, divorce, death of a family member, birth of a grandchild. The annual review takes 15 minutes total across all accounts and prevents the most common probate problem.",
    steps: [
      {
        title: "List every retirement and life insurance account you own",
        content: "On a piece of paper, write down every account that names a beneficiary: traditional IRA, Roth IRA, 401k from current or former jobs, 403b, pension with a survivor benefit, life insurance policies (term and whole life), annuities, and savings bonds. Include the company name and the last four digits of the account number for each.",
        tip: "Old 401k accounts from former employers are the most common one to forget. If you worked somewhere 10 years ago and left a balance behind, that account still has whoever you named at the time as the beneficiary.",
      },
      {
        title: "Sign into the first account's website",
        content: "Open a web browser and type the company's name (fidelity.com, vanguard.com, schwab.com, tiaa.org, principal.com) into the address bar. Click Sign In or Log In at the top right. Type your username and password. If you have not signed in for a long time, the site may ask security questions or send a code to your phone or email to confirm it is you.",
        warning: "Do not search for the login page using Google. Scam websites buy ads that look like the real Fidelity or Vanguard login. Always type the address into the bar yourself.",
      },
      {
        title: "Find the Beneficiaries section",
        content: "Once signed in, look for your name or a Profile link at the top right. Click it. A menu drops down with options like Account Settings, My Profile, Personal Information, or Beneficiaries. Click Beneficiaries. The page shows the people currently listed and the percentage each will inherit.",
      },
      {
        title: "Add or update primary and contingent beneficiaries",
        content: "Click Add Beneficiary or Edit. For each person, type their full legal name, date of birth, Social Security number, and relationship to you (spouse, child, grandchild). Set the percentage — all primary percentages must add to 100. Then add at least one contingent beneficiary the same way, also adding to 100 percent. Click Save.",
      },
      {
        title: "Save or print the confirmation",
        content: "After clicking Save, the website shows a confirmation page or sends a confirmation email. Save the page as a PDF (on a computer, press Ctrl+P or Cmd+P, then choose \"Save as PDF\") or print it. Keep the confirmation in your tax folder so a family member can find proof later.",
      },
      {
        title: "Repeat for every account on your list",
        content: "Move down the list and do the same thing for each account. Most people have 3 to 6 retirement accounts, so the whole job takes 60 to 90 minutes for the first round. After that, the yearly review only takes 15 minutes because nothing has usually changed.",
      },
      {
        title: "Tell your executor or trusted family member where to find this",
        content: "Write a single page titled \"Where My Accounts Are.\" List each company and account type — no passwords, no Social Security numbers. Put the page in a sealed envelope in a safe or fireproof box at home. Tell one trusted person (an adult child, sibling, or executor) that the envelope exists and where it is. They will need it to file claims after your death.",
      },
    ],
  },
];
