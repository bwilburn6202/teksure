// guides-batch-259 — First 90 days of retirement guides
// Topics: first week emotionally and practically, Medicare timing before 65,
// 401(k) rollover decisions, Social Security filing timing, weekly schedule
// after work ends, redoing beneficiaries on every account.

import type { Guide } from "./guides";

export const guidesBatch259: Guide[] = [
  {
    slug: "first-90-days-retirement-week-one-what-to-expect",
    title: "The First Week of Retirement: What to Expect Emotionally and Practically",
    excerpt: "The first seven days after you stop working can feel disorienting. Here is what really happens in week one and how to soften the landing.",
    category: "tips-tricks",
    tags: ["retirement", "first-week", "newly-retired", "transition", "mental-health"],
    readTime: "7 min",
    thumbnailEmoji: "🌄",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Beginner",
    body: "The first week of retirement is rarely what people picture. Most newly retired Americans describe a strange mix of relief, restlessness, and a quiet sense that something is missing. After 30 or 40 years of an alarm clock, a commute, deadlines, and coworkers, the brain does not switch off in a single weekend. Researchers at Cornell and the National Institute on Aging call this the honeymoon phase followed by a disenchantment phase, and it can land hard if you have not planned for it.\n\nThe practical changes show up fast. Your work email stops mattering. The morning chats with coworkers disappear. Your spouse, if they are home, may not be ready for a full-time housemate. Friends are still working. The house gets very quiet around 10 a.m. Some retirees feel a thrill of freedom. Others feel a thud of purposelessness by Wednesday.\n\nNone of this means retirement is wrong for you. It means your old structure has been removed and a new one has not been built yet. The fix is not to fight the feeling, but to give yourself one or two anchors per day in week one: a walk at 8 a.m., a coffee on the porch, a phone call to a friend at lunch, a project after dinner. These small rhythms tell your brain that the day still has shape.\n\nThe emotional side is real and well documented. The American Psychological Association reports that about one in three retirees feels a meaningful drop in mood in the first months. Most recover within a year, especially those who maintain social contact, physical activity, and a sense of contribution. The first week is when you set the tone for that recovery.\n\n(Sources: National Institute on Aging — Retirement and Health; American Psychological Association — The Transition Into Retirement; Cornell Retirement and Well-Being Study)",
    steps: [
      {
        title: "Give yourself permission to do nothing for two or three days",
        content: "Resist the urge to fill every hour right away. Sleep in if you want. Read a book. Linger over coffee. Many retirement coaches call this decompression, and it has a real purpose. Your nervous system has been running on workplace cortisol for decades, and a short period of rest signals to your body that the race is over. Two or three days is plenty for most people. After that, the rest starts to feel hollow.",
      },
      {
        title: "Build one daily anchor by the end of week one",
        content: "Pick one small recurring thing and lock it into the calendar by Friday. A morning walk at the same park, a coffee shop visit at 9 a.m., a daily phone call with a sibling, an hour at the library, a stretching routine. The anchor does not have to be ambitious. It only has to repeat. Once you have one daily anchor, you have the skeleton of a new weekly rhythm to build on in weeks two and three.",
        tip: "Quick Tip: Pair the anchor with something you would do anyway, like making the bed or eating breakfast. That habit stack makes it stick faster.",
      },
      {
        title: "Tell your spouse or housemate what you need from the week",
        content: "If you live with someone, the first week is harder on them too. A spouse who has had the house to themselves all day suddenly has company. Have a short, calm conversation in the first 48 hours: Here is what I am looking forward to. Here is what I am worried about. Here is what I need from you. Couples therapists call this the renegotiation conversation, and it heads off a surprising amount of friction in months two and three.",
      },
      {
        title: "Notice the urge to start a big project — and wait a week",
        content: "Many newly retired people try to fill the vacuum with a giant project: redo the garage, start a business, take a 30-day trip. The instinct is understandable, but week one is a poor time to commit. Give yourself seven days of rest and observation before saying yes to anything that will eat 20 hours a week. After day seven, you will see more clearly what you actually want, not what you are using to escape the discomfort of stillness.",
        warning: "If feelings of loss, sadness, or worthlessness last more than two weeks and interfere with sleep or appetite, talk to your doctor. Retirement depression is treatable, and it is more common than most people think.",
      },
    ],
  },
  {
    slug: "first-90-days-retirement-medicare-timing-before-65-gap-coverage",
    title: "Medicare Timing and Gap Coverage When You Retire Before 65",
    excerpt: "If you retire before 65, you are on your own for health insurance. Here are the three real options: COBRA, the ACA marketplace, or a spouse plan.",
    category: "tips-tricks",
    tags: ["medicare", "retirement", "cobra", "aca", "health-insurance", "newly-retired"],
    readTime: "9 min",
    thumbnailEmoji: "🩺",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Intermediate",
    body: "Medicare does not start until the month you turn 65, full stop. If you retire even one day before then, you need a plan to cover the gap. About 40 percent of Americans retire before 65, and many of them are caught off guard by what private health insurance costs without an employer paying most of the premium.\n\nThree paths cover almost everyone who retires early. The first is COBRA, which lets you keep your former employer plan for up to 18 months. The second is the ACA marketplace at healthcare.gov, where federal subsidies can lower premiums sharply based on income. The third is a spouse plan, if your husband or wife is still working and their employer covers dependents. Each path has trade-offs in cost, doctor network, and timing.\n\nCOBRA is the simplest because the plan and doctors stay the same. The catch is the price. You now pay the full premium that your employer used to subsidize, plus a 2 percent administrative fee. A family plan that cost you $300 a month at work might cost $1,800 a month on COBRA. For most retirees this is a short bridge of a few months, not a long-term answer.\n\nThe ACA marketplace is where most early retirees end up. A 62-year-old couple with $60,000 of retirement income may pay less than $500 a month total, because subsidies are generous between ages 60 and 65. Healthcare.gov has a special enrollment window of 60 days starting the day your work coverage ends, so do not miss that window. After 60 days, you wait until the next open enrollment period in November.\n\nA spouse plan is often the cheapest path if available. Switching to your spouse's coverage usually qualifies as a life event, so you do not have to wait for open enrollment. Ask the working spouse's HR department for the family premium and the deductible before assuming it is the best choice.\n\nSign up for Medicare three months before your 65th birthday, even if you have other coverage. The initial enrollment window is seven months wide (three months before your birthday month, the month itself, and three months after), and missing it can mean lifetime late penalties.\n\n(Sources: Medicare.gov — When to Sign Up; healthcare.gov — Coverage After Job Loss; Department of Labor — COBRA Continuation Coverage)",
    steps: [
      {
        title: "Figure out your exact gap in months",
        content: "Count the months from your last day of work to the first day of the month you turn 65. That is your gap. If you retire at 63 and 4 months, your gap is 20 months. If your gap is under 18 months, COBRA can cover the whole thing. If it is longer, you will need the ACA marketplace or a spouse plan for the back end. Knowing the exact number of months shapes which path makes sense.",
      },
      {
        title: "Compare COBRA cost to ACA cost before deciding",
        content: "Get the COBRA quote from your HR department in writing. Then go to healthcare.gov and put in your projected retirement income (not your work income), your zip code, and the number of people on the plan. The site shows you subsidized premiums for plans in your area. Compare apples to apples. Many retirees find ACA is half the cost of COBRA. A few prefer COBRA because the doctor network is identical to what they had.",
        tip: "Quick Tip: Your ACA subsidy is based on your projected income, not last year. Pull out the income you actually expect, including any IRA withdrawals, pensions, and Social Security if you have started it.",
      },
      {
        title: "Use the 60-day special enrollment window on healthcare.gov",
        content: "Losing job-based coverage triggers a Special Enrollment Period of 60 days. You can apply on healthcare.gov as soon as you know your retirement date — you do not have to wait until coverage ends. Have on hand your projected income, your last day of coverage from HR, and your social security number. The application takes about 45 minutes. If you miss the 60 days, you have to wait for open enrollment in November.",
        warning: "If you skip coverage even for one month, a single hospital trip can wipe out a retirement savings account. Do not gamble on going uninsured between work and Medicare.",
      },
      {
        title: "Mark Medicare enrollment three months before your 65th birthday",
        content: "Put a reminder on your calendar the day you turn 64 and 9 months. That is when Medicare initial enrollment opens. You can sign up online at ssa.gov or by calling 1-800-772-1213. Medicare Part A is free for most people. Part B costs about $185 a month in 2026. Most retirees also add a Medigap supplement and a Part D drug plan. If you delay Part B past your enrollment window without other qualifying coverage, you pay a 10 percent penalty for every full year of delay — for life.",
      },
    ],
  },
  {
    slug: "first-90-days-retirement-401k-rollover-vs-keep-employer-plan",
    title: "Rolling Over Your 401(k) or Staying With the Employer Plan: Pros and Cons",
    excerpt: "After you retire, you can move your 401(k) to an IRA, keep it where it is, or cash it out. Here is what each choice really costs and saves.",
    category: "tips-tricks",
    tags: ["401k", "rollover", "ira", "retirement", "newly-retired", "investing"],
    readTime: "9 min",
    thumbnailEmoji: "📊",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Intermediate",
    body: "When you leave your job for retirement, your 401(k) does not have to go with you. The money belongs to you, but the account stays at your old employer until you make a choice. You have three real options: roll it into an IRA, keep it in the old 401(k), or take a lump sum cash distribution. The third option triggers immediate taxes and an early-withdrawal penalty if you are under 59 and a half, so very few retirees should pick it.\n\nThe rollover-to-IRA path is the most common. You move the balance from the 401(k) into an Individual Retirement Account at a brokerage like Fidelity, Vanguard, Schwab, or T. Rowe Price. The big advantages are wider investment choices, lower fees in many cases, and the ability to combine multiple old accounts in one place. The disadvantages are losing some employer-plan protections and giving up access to certain low-cost institutional funds you may have had in the 401(k).\n\nKeeping the money in the old 401(k) is allowed at almost every employer if the balance is over $5,000. The main reason to do this is when the 401(k) has unusually low fees or excellent funds you cannot find elsewhere. Some federal Thrift Savings Plan and large-employer 401(k) accounts charge fund fees below 0.05 percent, which is hard to beat in any IRA.\n\nThere is also a halfway path called direct rollover, where the money moves trustee to trustee without ever being mailed to you. This is the safest version because the IRS counts an indirect rollover (where you get a check) as a taxable event if you do not redeposit within 60 days. Always pick direct.\n\nTaxes matter at every step. A traditional 401(k) rolled to a traditional IRA stays tax-deferred and triggers no taxes today. A traditional 401(k) rolled to a Roth IRA is a Roth conversion and triggers full income tax on the converted amount. Many retirees do small Roth conversions over several years in the low-income window between retirement and the start of Required Minimum Distributions at age 73.\n\n(Sources: IRS — Rollover Chart; Department of Labor — Your 401(k) After Leaving Your Job; FINRA — IRA Rollovers)",
    steps: [
      {
        title: "Pull the fee disclosure from your current 401(k)",
        content: "Log into your 401(k) account or call the plan administrator and ask for the most recent Annual Fee Disclosure (often labeled Form 404(a)(5)). It shows the expense ratio of every fund you own and any administrative fee. Add them up. If your total fees are below 0.50 percent and you are happy with the funds, leaving the money in place may be the best move. If fees are above 1 percent, an IRA rollover almost always saves money.",
      },
      {
        title: "Open the IRA before you start the rollover",
        content: "Pick a brokerage (Fidelity, Vanguard, Schwab, T. Rowe Price are the most common for retirees) and open a Rollover IRA online. The application takes about 20 minutes. You will need your social security number, an existing bank account, and a beneficiary name. Do not close your 401(k) until the IRA is open and ready to receive the funds — otherwise the money may sit in limbo.",
        tip: "Quick Tip: Call the receiving brokerage before you start. Most have a free rollover concierge team that contacts your old 401(k) provider, fills out the forms, and handles the whole transfer for you at no cost.",
      },
      {
        title: "Always pick direct rollover, not indirect",
        content: "On the rollover form there are two boxes: direct rollover and indirect rollover. Direct rollover means the check is made out to the new IRA custodian and mailed straight to them (or sent electronically). Indirect means the check is mailed to you, you deposit it, and you redeposit into the IRA within 60 days. Indirect rollovers cause more tax problems than almost any other retirement mistake. The IRS withholds 20 percent for taxes on indirect rollovers, and many retirees forget to make that up.",
        warning: "If a financial advisor pressures you to do an indirect rollover or to roll into a high-commission product like an annuity, get a second opinion. Some advisors earn a one-time commission of 5 to 7 percent on an annuity rollover — that is your money paying for their sale.",
      },
      {
        title: "Update the beneficiary on the new IRA the same day",
        content: "When you open a Rollover IRA, the brokerage asks for a primary beneficiary and contingent beneficiary. Fill these in immediately. An IRA passes to beneficiaries outside of probate, which saves your family weeks or months of court delay. Most retirees name their spouse as primary and their children as contingent. If you change your mind later, the beneficiary form is updated online in 5 minutes.",
      },
    ],
  },
  {
    slug: "newly-retired-social-security-filing-now-vs-delaying",
    title: "Filing for Social Security in Your First 90 Days: Start Now or Wait?",
    excerpt: "The choice to file for Social Security at retirement or wait can swing your lifetime benefits by tens of thousands of dollars. Here is how to decide.",
    category: "tips-tricks",
    tags: ["social-security", "retirement", "filing", "newly-retired", "benefits"],
    readTime: "10 min",
    thumbnailEmoji: "🏛️",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Intermediate",
    body: "Within your first 90 days of retirement, one decision sits in front of every newly retired American: file for Social Security now or delay. The Social Security Administration lets you start benefits as early as age 62, the year of your Full Retirement Age (66 or 67 for most current retirees), or as late as age 70. The amount changes dramatically depending on when you file.\n\nThe core math is straightforward. If your Full Retirement Age is 67 and your benefit at that age would be $2,000 a month, then filing at 62 cuts it permanently to about $1,400 a month. Waiting until 70 raises it to about $2,480. The difference between filing at 62 and waiting until 70 is roughly 77 percent more per month — for the rest of your life. For a married couple, the decision also affects spousal and survivor benefits.\n\nThere are good reasons to file early. If you have health concerns and a family history of shorter lifespans, taking the smaller check now may add up to more total dollars over your life. If you need the income to pay the bills and avoid drawing down savings during a market downturn, filing early is a defensible move. If you are single, your decision affects only you.\n\nThere are equally good reasons to delay. Each year you wait between Full Retirement Age and 70 adds about 8 percent to your monthly check, every year, for life. That is a guaranteed return that very few investments match. If you are married and the higher earner, waiting also raises the survivor benefit your spouse will receive after you pass, which can mean tens of thousands of dollars for them over their remaining years.\n\nThe in-between strategy that many retirement planners now recommend is delay if you can afford to. Pull from your IRA or 401(k) in the years between retirement and your Social Security start date. This burns down some retirement savings, but it locks in a larger Social Security check every month for the rest of your life and your surviving spouse's life. The break-even point usually lands around age 80 to 83. If you expect to live past that, delaying wins.\n\n(Sources: Social Security Administration — When to Start Receiving Retirement Benefits; SSA Quick Calculator at ssa.gov/oact; Center for Retirement Research at Boston College)",
    steps: [
      {
        title: "Pull your personalized benefit estimate from ssa.gov",
        content: "Go to ssa.gov and create a my Social Security account if you do not have one. Inside the account, find your Statement. It shows your projected monthly benefit at 62, at Full Retirement Age, and at 70. Print this page. Every conversation about whether to file now or later starts with these three numbers. Without them, you are guessing.",
      },
      {
        title: "Estimate your break-even age",
        content: "If filing at 62 gives you $1,400 a month and Full Retirement Age at 67 gives you $2,000, the gap is $600 a month, or $7,200 a year. The early filer has 5 years of head start at $1,400, or $84,000 banked. Divide $84,000 by the $7,200 annual gap: about 11.7 years. That means the later filer catches up around age 78 to 79. Past that, the later filer pulls ahead for life. Your break-even depends on your numbers — but most people land in their late 70s.",
        tip: "Quick Tip: The Center for Retirement Research at Boston College has a free Social Security Claiming Calculator (crr.bc.edu) that runs this math for you in 10 minutes.",
      },
      {
        title: "Look at your spouse's earning record and survivor needs",
        content: "If you are married, your filing decision affects your spouse. Whichever of you earned more during your career — that is the higher benefit, and that is the one that becomes the survivor benefit when the first spouse passes. If you are the higher earner, delaying your benefit to 70 maximizes what your spouse will live on after you are gone. Many couples have the higher earner delay and the lower earner file earlier, getting the best of both worlds.",
      },
      {
        title: "File three months before you want benefits to start",
        content: "Social Security recommends applying three months before the month you want benefits to begin. You can file online at ssa.gov, by phone at 1-800-772-1213, or in person at a local Social Security office. The application takes about 30 minutes online. You will need your birth certificate, marriage certificate if applicable, last year's W-2 or tax return, and your bank account information for direct deposit.",
        warning: "If you file and then change your mind within the first 12 months, you can withdraw your application once in a lifetime by paying back what you have received. After 12 months, the decision is locked in. Take your time before filing.",
      },
    ],
  },
  {
    slug: "newly-retired-weekly-schedule-building-structure-no-workday",
    title: "Redoing Your Weekly Schedule: Building Structure When There Is No Workday",
    excerpt: "The first month of retirement can feel shapeless. Here is how to design a weekly rhythm that includes exercise, social time, learning, and rest.",
    category: "tips-tricks",
    tags: ["retirement", "weekly-schedule", "routine", "newly-retired", "purpose"],
    readTime: "8 min",
    thumbnailEmoji: "📅",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Beginner",
    body: "One of the biggest shocks of retirement is the wall of unstructured time. For decades the workweek shaped almost every hour — when you woke up, when you ate, who you talked to, what you did all day. Now Monday morning looks exactly like Saturday morning. Most newly retired Americans drift through the first few weeks before discovering that a flexible but reliable weekly rhythm is the secret to a happy retirement.\n\nResearchers at the National Institute on Aging have studied what separates retirees who thrive from those who decline. The thriving group has four things in common: regular physical activity, at least three social contacts per week, ongoing learning, and a sense of contribution. The decline group skips one or more of those four. Building those four into your week, week after week, is the single most powerful thing you can do for the next decade of your life.\n\nThe trick is to schedule by category, not by exact activity. Instead of saying you will play pickleball every Tuesday at 9 a.m. (which will fall apart the first time it rains), say you will get one hour of physical activity every Tuesday, Thursday, and Saturday morning. The category is fixed. The exact activity is flexible. Pickleball if the weather cooperates, an indoor walk at the mall if not, a yoga video at home as the last fallback.\n\nThe four-category template works for most retirees: 1) Move (walking, swimming, yoga, gardening, dancing, pickleball, tennis, cycling), 2) Connect (coffee with a friend, lunch with family, a club, volunteer shift, video call with a grandchild), 3) Learn (reading, podcast, online class, library lecture, museum visit, language app), 4) Contribute (volunteering, mentoring, helping at a grandchild's school, neighborhood watch, religious community, caring for a family member).\n\nAim for at least one activity from each category every week. You do not need to fill every hour — large blocks of free time are part of the joy of retirement. But the four anchors keep loneliness, deconditioning, and listlessness from creeping in.\n\n(Sources: National Institute on Aging — Aging Well; AARP — Reinventing Retirement; Harvard Study of Adult Development)",
    steps: [
      {
        title: "Pull out a blank weekly calendar and the four categories",
        content: "Print or sketch a weekly grid with 7 columns (one per day) and rough time slots: morning, afternoon, evening. Write the four categories at the top of the page: Move, Connect, Learn, Contribute. The goal is to have at least three Move slots, three Connect slots, two Learn slots, and one Contribute slot every week. That is nine activities across seven days — busy but manageable.",
      },
      {
        title: "Lock in the Move slots first because they are the hardest to maintain",
        content: "Physical activity is the foundation. The CDC recommends 150 minutes of moderate exercise per week for adults 65 and older, plus two strength-training sessions. Block three mornings (Tuesday, Thursday, Saturday is a common pattern). Pick what you will actually do: walking is the most reliable, swimming is easiest on joints, group fitness classes add a social bonus. Senior centers, YMCAs, and most community pools have low-cost programs designed for retirees.",
        tip: "Quick Tip: Mornings are the best time for exercise in retirement. Your day is free, the weather is cooler, and finishing exercise before lunch makes the rest of the day easier to enjoy.",
      },
      {
        title: "Fill in Connect slots before you fill in Learn or Contribute",
        content: "Social isolation is the most dangerous risk in retirement, and the easiest one to ignore until it has set in. Aim for three meaningful contacts per week minimum: coffee with a friend, lunch with a family member, a club meeting, a phone call with someone who matters. Put names on the calendar. A vague slot called Social Time often becomes another empty afternoon. A slot called Coffee with Linda gets honored.",
      },
      {
        title: "Add one Contribute commitment and protect it",
        content: "Contribution is the category most retirees underestimate. Volunteering one shift per week at a food pantry, a hospital information desk, a school reading program, or your religious community gives the week a non-negotiable anchor. People are counting on you, which gets you out of the house on the gray days. Find a fit through VolunteerMatch.org, AARP's Create the Good, or by asking your local senior center.",
        warning: "Do not over-commit in month one. A single weekly contribution beats four that you burn out on by month three. Add more only after the first one feels comfortable.",
      },
    ],
  },
  {
    slug: "newly-retired-redo-beneficiaries-every-account",
    title: "Redoing Beneficiaries on Every Account Now That Work Life Is Over",
    excerpt: "Retirement is the perfect time to update beneficiaries on every account. Here is the full list and how to do it in one afternoon.",
    category: "tips-tricks",
    tags: ["beneficiaries", "estate-planning", "retirement", "newly-retired", "accounts"],
    readTime: "8 min",
    thumbnailEmoji: "📋",
    publishedAt: "2026-05-09",
    lastVerifiedAt: "2026-05-09",
    difficulty: "Beginner",
    body: "When you walk out of work for the last time, one piece of estate planning work falls into view that most people have not thought about in years: the beneficiary forms on every account. Beneficiary designations are how money passes to your heirs without going through probate court. They override your will. If the form says your money goes to a particular person, that is where it goes — no matter what the will says.\n\nFor most newly retired Americans, beneficiary forms have not been touched in 10, 20, or even 30 years. The forms may still list an ex-spouse, a deceased parent, or a sibling you no longer speak to. They may list a child who is now an adult, with no contingent (backup) beneficiary if that child predeceases you. They may list one person on the 401(k) and a different person on the IRA. Cleaning all this up is one of the highest-value uses of an afternoon in your first 90 days of retirement.\n\nThe full list of accounts that use beneficiary designations is longer than most people realize. Retirement accounts: 401(k), 403(b), IRA, Roth IRA, pension, Thrift Savings Plan. Life insurance: every term and permanent policy. Annuities. Bank accounts can use a Payable on Death (POD) designation. Brokerage accounts can use Transfer on Death (TOD) designation. Health Savings Accounts. 529 college savings plans. Even some safe deposit boxes have a successor designation.\n\nThe two slots that matter most on each form are primary beneficiary and contingent beneficiary. Primary is who gets the money if you pass. Contingent is who gets it if the primary also passes before you. Many forms have been filled out for years with only the primary, leaving the contingent blank. If the primary dies in a car accident the same week as you, the money falls back into probate — exactly the mess the beneficiary form was supposed to prevent.\n\nThe rule of thumb most estate planners suggest: spouse as primary on retirement accounts, children equally as contingents, with a per stirpes designation (which sends each deceased child's share down to that child's own children). Run your specific choices past an estate attorney if you have a blended family, a child with special needs, or significant wealth.\n\n(Sources: AARP — Beneficiary Designations; FINRA — Beneficiary Designations on Retirement Accounts; American Bar Association — Estate Planning Basics)",
    steps: [
      {
        title: "Make the full list of every account you own",
        content: "Sit down at the kitchen table with a notebook. Write down every retirement account (401(k), 403(b), IRA, Roth IRA, pension, TSP), every life insurance policy, every annuity, every bank account, every brokerage account, every HSA, every 529. For each account, write the company name, account number, and current login. Many retirees discover three or four old 401(k) accounts from past jobs that they had half-forgotten.",
        tip: "Quick Tip: The Department of Labor runs a free unclaimed retirement account search at unclaimedretirementbenefits.com. It can surface old 401(k) plans you do not remember.",
      },
      {
        title: "Log into each account and find the current beneficiary",
        content: "On most modern financial websites, the beneficiary form is under Profile, Settings, or Account Details. On a 401(k) it is often called Beneficiary Designations. On life insurance, the company may require a paper form mailed in. Write down the current primary and contingent beneficiaries next to each account on your list. This is where the surprises happen — ex-spouses, deceased parents, missing contingents.",
      },
      {
        title: "Update primary and contingent for every account in one sitting",
        content: "Now make the changes. For most retirees: primary beneficiary is the spouse (if married), contingent beneficiaries are children divided equally. If a child has died, add the per stirpes box so that child's share flows to their kids (your grandchildren). If you are not married, primary is usually adult children divided equally, with grandchildren or a sibling as contingent. Save and confirm each change. Most online forms send a confirmation email — keep them in a folder.",
        warning: "Never name your estate as a beneficiary on a retirement account. It forces the money through probate and can accelerate income taxes. Always name a person or a properly structured trust.",
      },
      {
        title: "Tell your spouse and adult children where the list is",
        content: "Print your complete account list with the updated beneficiaries. Put it in a fireproof safe, a safe deposit box, or a sealed envelope marked In Case of Emergency. Tell your spouse and at least one adult child where it lives. This single document, kept current, saves grieving families weeks of detective work. Update it every two years, and any time you have a major life event like a marriage, divorce, birth, or death in the family.",
      },
    ],
  },
];
