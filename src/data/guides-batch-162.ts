// TekSure Guides Batch 162 — 4 guides covering: using your phone as a Wi-Fi
// hotspot; turning on closed captions on Netflix, Hulu, and YouTube; spotting
// phishing emails and texts; and applying for Social Security benefits online.
import type { Guide } from './guides';

export const guidesBatch162: Guide[] = [
  {
    slug: 'how-to-use-your-phone-as-a-wifi-hotspot-2026',
    title: 'How to Use Your Phone as a Wi-Fi Hotspot',
    excerpt:
      'Your smartphone can share its cellular internet connection with a laptop or tablet. Here is how to turn on the hotspot on an iPhone or Android phone.',
    category: 'phone-guides',
    tags: [
      'mobile hotspot',
      'personal hotspot',
      'Wi-Fi hotspot',
      'iPhone hotspot',
      'Android hotspot',
      'share internet',
      'tethering',
      'cellular data',
      'travel internet',
      'hotel Wi-Fi',
    ],
    readTime: '8 min',
    thumbnailEmoji: '📶',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Your smartphone connects to the internet through your cell carrier — the same network that handles your phone calls and text messages. Most modern phones include a feature that lets you share that cellular internet connection with nearby devices, such as a laptop or tablet. When you turn on this feature, your phone acts like a small, portable Wi-Fi router. Other devices can find your phone's Wi-Fi network, enter a password, and get online — all through your phone's data plan.

This feature goes by different names: "Personal Hotspot" on iPhone and "Wi-Fi Hotspot" on most Android phones. You may also hear it called "tethering."

---

**When is a hotspot useful?**

- You are staying at a hotel and the Wi-Fi is slow or unreliable.
- You are traveling and need to get online with your laptop.
- A storm or outage has knocked out your home internet, but your phone still has cell service.
- You are somewhere without Wi-Fi — a park, a waiting room, a family member's home — and need to get your laptop online for a few minutes.

---

**Before you start: check your data plan**

Using a hotspot uses your phone's cellular data — the same data used when you browse the web or watch a video on your phone. If your plan has a data limit (for example, 5 GB per month), streaming video through a hotspot can use up that limit quickly. Check your plan before streaming. A quick phone call to your carrier (the number is on the back of your phone bill) can confirm whether your plan includes hotspot data and how much.

If your plan includes "unlimited data," read the fine print. Many unlimited plans slow down your hotspot speed after a certain amount of usage each month. Regular web browsing and email use very little data, so those tasks are fine on almost any plan.

---

**How to turn on a hotspot on an iPhone**

1. Open the **Settings** app (the gray icon with gears).
2. Tap **Personal Hotspot** — it is near the top of the Settings list, below your name.
3. Tap the green switch next to **Allow Others to Join** to turn it on. The switch turns green when it is on.
4. Look at the line that says **Wi-Fi Password**. This is the password other devices will use to connect to your hotspot. You can tap that line to change the password to something you prefer.
5. Note the name shown at the top — this is the name your phone broadcasts as a Wi-Fi network. It is usually your phone's name (for example, "Bailey's iPhone").

Your phone is now sharing its internet connection. Keep the Personal Hotspot screen open or return to the Home Screen — the hotspot stays on either way.

**Quick Tip:** A blue bar appears at the top of your iPhone screen while the hotspot is active. That bar disappears when you turn the hotspot off.

---

**How to turn on a hotspot on an Android phone**

Android phones vary slightly by brand (Samsung, Google Pixel, Motorola, etc.), but the steps are similar on all of them.

1. Open the **Settings** app (the gear icon).
2. Tap **Network & Internet** (on some Samsung phones this is labeled **Connections**).
3. Tap **Hotspot & tethering**.
4. Tap **Wi-Fi hotspot**.
5. Tap the switch at the top to turn the hotspot on.
6. Tap **Hotspot name** (or **Hotspot name and password**) to see the network name your phone broadcasts and the password devices will need to connect.

Your phone is now sharing its connection.

**Quick Tip:** On newer Samsung phones, you can also swipe down from the top of the screen to open Quick Settings, then tap the **Mobile Hotspot** tile to turn it on or off in one tap.

---

**How to connect your laptop to your phone's hotspot**

Once your phone's hotspot is on, connect your laptop the same way you would connect to any Wi-Fi network.

**On a Windows laptop:**
1. Click the Wi-Fi icon in the lower-right corner of the taskbar (it looks like a series of curved lines).
2. A list of available networks appears. Find your phone's name in the list.
3. Click it, then click **Connect**.
4. Type the hotspot password shown on your phone, then click **Next**.
5. Your laptop should connect within a few seconds.

**On a Mac:**
1. Click the Wi-Fi icon in the upper-right corner of the screen (the menu bar).
2. Look for your phone's name in the list of networks. It may appear under a "Personal Hotspots" heading.
3. Click your phone's name.
4. Type the password shown on your phone, then click **Join**.

---

**How to turn off the hotspot when you are done**

Always turn off the hotspot when you no longer need it. Leaving it on drains your phone's battery faster and continues using cellular data.

- **iPhone:** Go back to Settings → Personal Hotspot and turn off the "Allow Others to Join" switch.
- **Android:** Go back to Settings → Hotspot & tethering → Wi-Fi hotspot and turn off the switch.

---

**Troubleshooting: my laptop cannot find my phone's hotspot**

- Make sure the hotspot is actually turned on — check your phone's screen.
- On iPhone, if the hotspot disappears from the Wi-Fi list on your laptop after a few minutes without a connection, unlock your iPhone and keep the Personal Hotspot screen open.
- Restart your phone and try again.
- If your carrier has not enabled hotspot on your account, it may not work even if your plan is supposed to include it. Call your carrier's customer service to confirm the feature is active.`,
    steps: [
      {
        title: 'Check your data plan',
        content:
          'Before turning on the hotspot, confirm that your cellular plan includes hotspot data. Call your carrier or log in to your carrier\'s app to check. Using a hotspot uses your phone\'s cellular data, and video streaming uses a lot of data quickly.',
        tip: 'Regular web browsing and email use very little data — a hotspot is fine for those tasks on almost any plan.',
      },
      {
        title: 'Turn on the hotspot on an iPhone',
        content:
          'Open Settings, then tap Personal Hotspot. Tap the switch next to "Allow Others to Join" to turn it on. Note the Wi-Fi Password shown on screen — you will need it to connect your laptop.',
        tip: 'A blue bar at the top of your iPhone screen confirms the hotspot is active.',
      },
      {
        title: 'Turn on the hotspot on an Android phone',
        content:
          'Open Settings, then tap Network & Internet (or Connections on Samsung phones), then Hotspot & tethering, then Wi-Fi hotspot. Tap the switch to turn it on. Tap "Hotspot name and password" to see the network name and password your laptop will need.',
      },
      {
        title: 'Connect your laptop to the hotspot',
        content:
          'On a Windows laptop, click the Wi-Fi icon in the lower-right taskbar, find your phone\'s name, click Connect, and enter the password. On a Mac, click the Wi-Fi icon in the menu bar, select your phone\'s name, and enter the password.',
        tip: 'Your phone\'s hotspot name is usually your phone\'s name — for example, "Bailey\'s iPhone" or "Galaxy S24."',
      },
      {
        title: 'Turn off the hotspot when you are done',
        content:
          'Go back to the hotspot settings on your phone and turn the switch off. This saves your battery and stops using your cellular data.',
        warning:
          'Leaving the hotspot on all day can drain your phone battery and use up your monthly data allowance faster than expected.',
      },
    ],
  },

  {
    slug: 'how-to-turn-on-closed-captions-on-netflix-hulu-and-youtube-2026',
    title: 'How to Turn On Closed Captions on Netflix, Hulu, and YouTube',
    excerpt:
      'Closed captions display spoken words as text on screen. Here is how to turn them on for Netflix, Hulu, YouTube, Disney+, and Amazon Prime Video — and how to make the text larger.',
    category: 'entertainment',
    tags: [
      'closed captions',
      'subtitles',
      'Netflix captions',
      'Hulu subtitles',
      'YouTube CC',
      'Disney Plus subtitles',
      'Amazon Prime captions',
      'accessibility',
      'hearing loss',
      'streaming captions',
    ],
    readTime: '9 min',
    thumbnailEmoji: '💬',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Closed captions display the spoken words of a show or movie as text at the bottom of the screen. They were originally designed for people who are deaf or hard of hearing, but captions are useful for everyone. Captions help when a room is noisy, when an actor's accent is difficult to follow, or when a show's dialogue is hard to hear clearly.

Every major streaming service — Netflix, Hulu, YouTube, Disney+, and Amazon Prime Video — includes closed captions, and turning them on takes less than a minute once you know where to look.

---

**Netflix**

**On a phone or tablet:**
1. Start playing a show or movie.
2. Tap anywhere on the screen to bring up the playback controls.
3. Tap the speech bubble icon (it looks like a dialogue box) in the upper-right corner. On some devices it may be labeled "Audio & Subtitles."
4. Under the **Subtitles** section, tap **English** or **English [CC]**.
5. Tap the X or tap anywhere outside the menu to close it. Captions now appear on screen.

**On a computer (web browser):**
1. Start playing a show or movie.
2. Move your mouse over the video to bring up the controls.
3. Click the speech bubble icon or the **Audio & Subtitles** button (usually in the lower-right area of the player).
4. Under Subtitles, click **English** or **English [CC]**.

**On a TV (using the Netflix app):**
1. Start playing a show or movie.
2. Press the down arrow or the center button on your remote to open the playback menu.
3. Look for "Audio & Subtitles" or a subtitle/caption option.
4. Select **English [CC]**.

**Making captions larger on Netflix:**
Log in to Netflix on a web browser → click your profile icon (upper-right) → Account → scroll down to Profile settings → **Subtitle Appearance**. You can change the font size, color, and background there. The changes apply to all Netflix devices linked to your account.

---

**Hulu**

**On a phone or tablet:**
1. Start playing a show or movie.
2. Tap the screen to bring up the controls.
3. Tap the gear icon (Settings) or the speech bubble icon.
4. Tap **Subtitles & Captions**.
5. Select **English Closed Captions** or **English**.

**On a computer:**
1. Start playing a show or movie.
2. Move your mouse over the video.
3. Click the speech bubble or gear icon in the lower-right corner.
4. Click **Subtitles & Captions** → select **English CC**.

**On a TV:**
Use your remote's arrow buttons to navigate to the gear icon while a show is playing, then select Subtitles & Captions.

---

**YouTube**

**On a phone or tablet:**
1. Start playing a video.
2. Tap the three vertical dots (or the "CC" button) in the upper-right corner of the video.
3. Tap **Captions**.
4. Select **English** or **English (auto-generated)**.

**On a computer:**
1. Start playing a video.
2. Click the **CC** button in the lower-right corner of the video player. If you do not see it, click the gear icon (Settings) → **Subtitles/CC** → **English**.

**Quick Tip:** Not every YouTube video has captions. If the CC button is grayed out, the video's uploader has not added them and automatic captions are not available.

---

**Disney+**

1. Start playing a show or movie.
2. Tap or click the screen to bring up the controls.
3. Click or tap the speech bubble icon.
4. Under **Subtitles**, select a language. Choose **English [CC]** if you want captions that also describe sound effects (recommended for hearing assistance).

---

**Amazon Prime Video**

1. Start playing a show or movie.
2. Tap or click the speech bubble icon in the upper-right corner of the player. On some devices it looks like two overlapping squares.
3. Under **Subtitles**, select **English [CC]**.

---

**Turning on captions for all content on your TV**

Most smart TVs have a system-wide accessibility setting that turns on captions for every app, not just one at a time.

- **Samsung TV:** Settings → General → Accessibility → Caption Settings → turn on Captions.
- **LG TV:** Settings → Accessibility → Closed Captions → turn on.
- **Roku:** Settings → Accessibility → Captions Mode → turn on.
- **Apple TV:** Settings → Accessibility → Subtitles & Captioning → turn on Closed Captions + SDH.
- **Fire TV:** Settings → Accessibility → Closed Captions → turn on.

---

**Making captions larger on your iPhone (for all apps)**

1. Open **Settings**.
2. Tap **Accessibility**.
3. Tap **Subtitles & Captioning**.
4. Turn on **Closed Captions + SDH**.
5. Tap **Style** to choose a larger font size, a colored background behind the text, or a different font.

These settings apply to any app on your iPhone that supports Apple's caption system, including Apple TV+ and many others.`,
    steps: [
      {
        title: 'Turn on captions on Netflix',
        content:
          'While watching, tap or click the screen to show the controls. Tap the speech bubble icon or "Audio & Subtitles." Under Subtitles, select English or English [CC]. To make captions larger, go to your Account settings on the Netflix website and choose Subtitle Appearance.',
        tip: 'The "English [CC]" option includes descriptions of sound effects, which is more helpful than plain "English" subtitles.',
      },
      {
        title: 'Turn on captions on Hulu',
        content:
          'While watching, tap or click the gear icon or the speech bubble icon. Tap Subtitles & Captions and select English Closed Captions.',
      },
      {
        title: 'Turn on captions on YouTube',
        content:
          'While watching, click or tap the CC button in the lower-right corner of the video player. If it is not visible, click the gear icon (Settings), then Subtitles/CC, then English.',
        tip: 'Some YouTube videos do not have captions. If the CC button is grayed out, captions are not available for that video.',
      },
      {
        title: 'Turn on captions on Disney+ and Amazon Prime Video',
        content:
          'On Disney+, tap the speech bubble icon while watching and select a subtitle language. On Amazon Prime Video, tap the speech bubble icon and select English [CC] under Subtitles.',
      },
      {
        title: 'Turn on captions for all TV apps at once',
        content:
          'Most smart TVs have an accessibility setting that enables captions across all apps. On Roku: Settings → Accessibility → Captions Mode. On Samsung TV: Settings → General → Accessibility → Caption Settings. On Apple TV: Settings → Accessibility → Subtitles & Captioning.',
        tip: 'Turning on captions at the TV level means you will not have to enable them separately inside each streaming app.',
      },
      {
        title: 'Make caption text larger on an iPhone',
        content:
          'Go to Settings → Accessibility → Subtitles & Captioning. Turn on Closed Captions + SDH, then tap Style to choose a larger font size or a high-contrast background behind the text.',
      },
    ],
  },

  {
    slug: 'how-to-spot-a-phishing-email-or-text-2026',
    title: 'How to Spot a Phishing Email or Text Message',
    excerpt:
      'Phishing messages look like they come from banks, Medicare, or the IRS — but they are fakes designed to steal your information. Learn the 7 warning signs to look for.',
    category: 'safety-guides',
    tags: [
      'phishing',
      'scam email',
      'scam text',
      'fake Medicare email',
      'fake IRS email',
      'email scam',
      'smishing',
      'identity theft',
      'FTC',
      'online safety',
      'report phishing',
    ],
    readTime: '10 min',
    thumbnailEmoji: '🎣',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    verifiedHelpful: true,
    body: `Phishing (pronounced "fishing") is a type of scam where criminals send a fake email or text message designed to look like it comes from a company or organization you trust — your bank, Medicare, the IRS, Amazon, or UPS. The goal is always the same: to trick you into clicking a link, entering your password, or handing over personal information like your Social Security number or credit card number.

The name comes from fishing — scammers cast a wide net, sending millions of fake messages and hoping a few people will take the bait.

Phishing is the most common type of cybercrime reported to the FBI. In 2024, Americans lost more than $2.7 billion to phishing and related scams. The good news: once you know what to look for, these messages are usually not difficult to spot.

---

**The 7 warning signs of a phishing message**

**1. Urgent or threatening language**

Scammers want you to act before you think. Phishing messages often contain phrases like:

- "Your account will be suspended in 24 hours!"
- "Immediate action required — your Social Security number has been compromised."
- "You must confirm your identity today or lose access."
- "Final notice before legal action."

Legitimate companies — banks, the IRS, Medicare, Amazon — do not threaten to close your account or take legal action within hours through an email. If a message sounds alarming and demands you do something right now, pause and treat it as a red flag.

**2. The link address does not match the real company**

Before clicking any link in an email, look at where it actually goes. On a computer, hover your mouse over the link (do not click — just rest the mouse pointer on it) and look at the bottom of your screen. The real web address will appear there.

Scammers create websites with names that look close to the real thing:
- `amazon-helpdesk.net` instead of `amazon.com`
- `paypa1.com` (with a number 1 instead of a letter l) instead of `paypal.com`
- `irs-refund-claims.com` instead of `irs.gov`
- `amaz0n-deals.ru` (ending in .ru, a Russian domain) instead of `amazon.com`

If the address looks unusual or does not end in the company's official domain, do not click.

On a phone, press and hold the link for a moment (do not tap) — on most phones, this shows you the full web address before you open it.

**3. Poor spelling and grammar**

Many phishing messages contain spelling errors, awkward sentences, or phrases that do not sound natural. This is especially true for messages that appear to come from government agencies or large corporations, which have professional communications teams. A message riddled with typos is a warning sign.

**4. The sender's email address looks off**

Look carefully at the email address in the "From" field — not the display name, but the actual email address. Scammers often set the display name to "Medicare" or "Amazon Customer Service" but the actual sending address is a random or suspicious address:

- Display name: Amazon Customer Service
- Actual address: `support@amazon-billing-helpdesk.com` or `no-reply@xvb9284.net`

Amazon's real emails come from addresses ending in `@amazon.com`. Your bank's real emails come from addresses ending in the bank's official domain. When in doubt, look up the company's official email domain on their website.

**5. They ask for a password, credit card number, or Social Security number**

No legitimate company will ever ask for your full password, Social Security number, or credit card number in an email or text message. The IRS does not send emails asking for your Social Security number. Medicare does not text you asking for your card number. Your bank does not email you asking for your PIN.

If a message asks for any of this information, it is a scam. Period.

**6. Unexpected attachments**

Be cautious of any email you were not expecting that includes an attachment — especially files ending in `.zip`, `.exe`, `.doc`, or `.pdf`. Opening a malicious attachment can install software on your computer that records your keystrokes or locks your files.

If you were not expecting a document, do not open the attachment. If you think it might be real, contact the sender by phone using a number you look up yourself — not a number provided in the email.

**7. "You've won a prize!" messages**

If you receive a message saying you have won a lottery, a gift card, a free vacation, or a cash prize — and you did not enter any contest — it is a scam. These messages ask you to click a link or call a number to "claim your prize," which leads to requests for your personal information or a small "processing fee."

---

**Common phishing scenarios targeting seniors**

- **Fake Medicare messages:** A text or email says your Medicare card is expiring or your benefits are being updated. They ask you to confirm your Medicare number. Medicare does not contact beneficiaries by email or unsolicited phone call to update information.
- **Fake IRS refund notices:** An email says you are owed a tax refund and need to click a link to claim it. The IRS only contacts taxpayers by mail — never by email, text, or social media.
- **Fake package delivery texts:** A text from "UPS" or "FedEx" says your package is held and you need to pay a small fee or confirm your address. If you are not expecting a package, ignore it.
- **Fake Social Security suspension notices:** A call or email says your Social Security number has been suspended due to suspicious activity. This is a scam. The Social Security Administration does not suspend Social Security numbers.

---

**What to do if you receive a phishing message**

1. Do not click any links in the message.
2. Do not reply to the message.
3. Do not call any phone number listed in the message.
4. Report the message (see next section).
5. Delete the message.

**How to report phishing:**
- In Gmail: click the three-dot menu (⋮) next to the email → **Report phishing**.
- In Outlook: right-click the email → **Report** → **Phishing**.
- For text messages on an iPhone or Android: forward the text to **7726** (SPAM). This reports it to your carrier.
- Report to the FTC at **reportfraud.ftc.gov**.
- Report to the Anti-Phishing Working Group at **reportphishing@apwg.org**.

---

**If you accidentally clicked a link or entered information**

Do not panic — but act quickly.

1. **If you entered a password:** Change that password immediately, on all accounts where you use the same password. If it was your email password, change it first.
2. **If you entered a credit or debit card number:** Call the number on the back of your card and report it as potentially compromised. Ask your bank to cancel the card and issue a new one.
3. **If you entered your Social Security number:** Place a free credit freeze at all three credit bureaus — Equifax (1-800-685-1111), Experian (1-888-397-3742), and TransUnion (1-888-909-8872). A credit freeze prevents new accounts from being opened in your name.
4. **Run a security scan** on your computer if you downloaded or opened any file from the message. Windows Defender (built into Windows) can do a free scan.`,
    steps: [
      {
        title: 'Look for urgent or threatening language',
        content:
          'Phishing messages almost always create a sense of emergency: "Your account will be closed," "Immediate action required," or "Legal action pending." Legitimate companies do not threaten to close your account within hours over email. Pause before reacting to any alarming message.',
        tip: 'If a message makes you feel panic or urgency, that feeling itself is a warning sign. Take a breath and look more carefully.',
      },
      {
        title: 'Check the link before clicking',
        content:
          'On a computer, hover your mouse over any link in the email — do not click. Look at the web address that appears at the bottom of your screen. On a phone, press and hold the link without tapping to preview the address. If the address does not match the company\'s official website, do not click.',
        warning:
          'Scammers use addresses that look almost right: "paypa1.com" instead of "paypal.com" or "amazon-helpdesk.net" instead of "amazon.com." Look carefully at every character.',
      },
      {
        title: 'Check the sender\'s actual email address',
        content:
          'The display name in your inbox can say anything — "Amazon," "Medicare," "Your Bank." Click or tap on the sender\'s name to reveal the actual email address. If it does not end in the company\'s official domain (like @amazon.com or @irs.gov), the message is fraudulent.',
      },
      {
        title: 'Watch for requests for personal information',
        content:
          'No legitimate company, government agency, or bank will ever ask for your full password, Social Security number, Medicare number, or credit card number in an email or text message. If a message asks for any of this, delete it immediately.',
        warning:
          'The IRS contacts taxpayers only by US mail — never by email, text, or social media. Medicare does not send emails asking you to confirm your card number.',
      },
      {
        title: 'Do not open unexpected attachments',
        content:
          'Be cautious of any email you were not expecting that includes a file attachment, especially .zip, .exe, .doc, or .pdf files. If you think the message might be real, call the sender using a phone number you look up yourself — not one provided in the email.',
      },
      {
        title: 'Report and delete the message',
        content:
          'In Gmail, click the three-dot menu next to the message and select "Report phishing." In Outlook, right-click and choose Report → Phishing. For suspicious texts, forward the message to 7726 (SPAM). Then report to the FTC at reportfraud.ftc.gov and delete the original message.',
      },
      {
        title: 'If you accidentally clicked or entered information',
        content:
          'Change any compromised passwords immediately. If you entered a credit card number, call the number on the back of your card to report it. If you entered your Social Security number, place a free credit freeze at all three credit bureaus: Equifax (1-800-685-1111), Experian (1-888-397-3742), and TransUnion (1-888-909-8872).',
        tip: 'A credit freeze is free and prevents criminals from opening new accounts in your name. It does not affect your existing accounts or credit score.',
      },
    ],
  },

  {
    slug: 'how-to-apply-for-social-security-benefits-online-2026',
    title: 'How to Apply for Social Security Benefits Online',
    excerpt:
      'You can apply for Social Security retirement benefits at ssa.gov without visiting an office. This guide walks through creating an account, checking your estimated payment, and completing the application.',
    category: 'government-civic',
    tags: [
      'Social Security',
      'retirement benefits',
      'ssa.gov',
      'my Social Security',
      'retirement application',
      'Social Security online',
      'SSA',
      'full retirement age',
      'Social Security estimate',
      'direct deposit',
    ],
    readTime: '12 min',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-05-08',
    lastVerifiedAt: '2026-05-08',
    difficulty: 'Beginner',
    body: `Social Security retirement benefits provide a monthly payment to workers who have paid into Social Security through their jobs and have reached the eligible age to claim them. You can apply online at ssa.gov — you do not need to visit a Social Security office, wait on hold, or fill out paper forms.

This guide walks through everything: when to apply, how to create an account, how to check your estimated payment, and how to complete the online application. It also covers where to get help if you run into trouble.

---

**When can you start receiving benefits?**

You can begin receiving Social Security retirement benefits as early as age 62. However, the age you start affects how much you receive each month — for the rest of your life.

- **Age 62:** You can start collecting, but your monthly payment will be permanently reduced — by as much as 30% compared to waiting until your full retirement age.
- **Full retirement age (FRA):** For most people born in 1960 or later, the full retirement age is 67. If you were born between 1943 and 1959, your FRA is between 66 and 67. At your FRA, you receive 100% of your earned benefit.
- **Age 70:** If you delay collecting past your full retirement age, your benefit grows by 8% per year until you turn 70. At 70, it stops growing. There is no benefit to waiting past 70.

There is no single "right" answer for everyone. If you need income now, claiming at 62 makes sense. If you are in good health and have other income to rely on, waiting increases your lifetime payments. The Social Security Administration does not advise you on when to claim — that is a personal decision. A fee-only financial advisor or your local Area Agency on Aging can help you think it through.

---

**What you need before you start**

Whether you are creating a my Social Security account or filling out the application, have these on hand:

- Your **Social Security number**
- A **US mailing address**
- A **US phone number or email address** (for identity verification)
- Your **date of birth**
- Your most recent **W-2 form or self-employment tax return**
- Your **bank account and routing number** for direct deposit (the numbers are printed at the bottom of a check — the routing number is the first 9 digits, your account number follows)
- Your **birth certificate** (you may be asked to mail this separately after applying online)

---

**Step 1: Create a my Social Security account**

A my Social Security account at ssa.gov/myaccount lets you see your full earnings history, view your estimated benefit at different ages, and manage your account after you start receiving benefits. You will need an account before applying online.

1. Go to **ssa.gov/myaccount** in your web browser.
2. Click **Create an Account**.
3. You will be asked to verify your identity. Social Security uses a service called Login.gov or ID.me for this step. Follow the on-screen instructions — you will enter your Social Security number and answer questions based on your financial history (such as the amount of a past mortgage or a car loan you once had).
4. Set up two-step verification using your phone number or email. This adds a second layer of protection to your account — each time you sign in, a code is sent to your phone or email that you enter to confirm it is you.
5. Once your account is created, you can sign in at any time to view your records.

**Quick Tip:** If you run into trouble creating an account online, you can call the Social Security Administration at 1-800-772-1213 (Monday through Friday, 8 AM to 7 PM). They can assist you or schedule an in-person appointment at your local SSA office.

---

**Step 2: Check your estimated benefit amount**

Before applying, it is worth looking at your estimated monthly benefit at different ages. This helps you decide when to apply.

1. Sign in to your my Social Security account at **ssa.gov/myaccount**.
2. Click on **Estimated Benefits** (it may also appear as "Your Estimated Benefits" on the dashboard).
3. The page shows your estimated monthly payment if you claim at age 62, at your full retirement age, and at age 70.
4. The page also shows your full earnings history — every year you worked and paid into Social Security. Review it for accuracy. If you see a year where you worked but your earnings show as zero, you can contact SSA to correct the record.

---

**Step 3: Complete the online application**

When you are ready to apply, the online application takes approximately 30 minutes. You can save your progress and return to finish it another day if needed.

1. Go to **ssa.gov/apply** and click **Apply for Retirement Benefits**.
2. Sign in with your my Social Security account when prompted.
3. The application asks about your work history, your spouse (if applicable), and whether you want to also apply for Medicare Part B if you are not already enrolled.
4. On the direct deposit page, enter your bank's routing number and your account number. Direct deposit is the fastest and most reliable way to receive your monthly payment.
5. Review your answers on the summary page, then click **Submit**.
6. Print or save the confirmation page. It includes a confirmation number you can use to check on your application.

---

**What happens after you apply?**

Social Security will review your application and may contact you by mail if they need additional documents (your birth certificate, for example). Expect to receive a decision letter within 3 to 5 weeks for straightforward applications. If there are complications — such as a name change or questions about your work record — it may take longer.

Your first payment typically arrives the month after your benefits are scheduled to start, on a specific Wednesday of the month based on your birth date:
- Born on the 1st–10th: payment arrives the **second Wednesday** of each month.
- Born on the 11th–20th: payment arrives the **third Wednesday** of each month.
- Born on the 21st–31st: payment arrives the **fourth Wednesday** of each month.

---

**Getting help**

- **Phone:** Call SSA at **1-800-772-1213** (Monday–Friday, 8 AM–7 PM). TTY for the hearing impaired: **1-800-325-0778**.
- **In person:** Find your nearest SSA office at **ssa.gov/agency/contact**.
- **Local assistance:** Your local Area Agency on Aging (eldercare.acl.gov or call 1-800-677-1116) can connect you with free counselors who help seniors with Social Security and Medicare questions.
- **SHIP counselors:** The State Health Insurance Assistance Program (shiphelp.org) provides free, unbiased help with Medicare and related Social Security decisions from trained volunteers.`,
    steps: [
      {
        title: 'Decide when to apply',
        content:
          'You can claim Social Security retirement benefits as early as age 62, but your monthly payment is permanently reduced compared to waiting until your full retirement age (67 for those born in 1960 or later). Waiting until age 70 gives you the maximum monthly payment. Think about your health, your other income sources, and how long you expect to receive benefits.',
        tip: 'Your local Area Agency on Aging (eldercare.acl.gov) can connect you with a free counselor who can help you think through the timing decision.',
      },
      {
        title: 'Gather your documents',
        content:
          'Before you start, have your Social Security number, your date of birth, your most recent W-2 or tax return, and your bank account and routing number for direct deposit. You may also be asked to mail in your birth certificate after submitting the online application.',
      },
      {
        title: 'Create a my Social Security account',
        content:
          'Go to ssa.gov/myaccount and click Create an Account. You will verify your identity using Login.gov or ID.me, which involves answering questions based on your financial history. Set up two-step verification with your phone number or email for security.',
        tip: 'If you have trouble creating an account online, call SSA at 1-800-772-1213 for assistance.',
        warning:
          'Make sure you are on the real SSA website: ssa.gov. The address bar should show a padlock icon and the URL should start with https://www.ssa.gov.',
      },
      {
        title: 'Check your estimated benefit amount',
        content:
          'After signing in, click Estimated Benefits to see your projected monthly payment at age 62, your full retirement age, and age 70. Also review your earnings history on file. If any years where you worked show zero earnings, contact SSA to correct the record before applying.',
      },
      {
        title: 'Complete the online application',
        content:
          'Go to ssa.gov/apply and click Apply for Retirement Benefits. Sign in when prompted. The application takes about 30 minutes and you can save your progress and return later. When asked, enter your bank routing number and account number for direct deposit.',
        tip: 'The routing number is the first 9 digits printed at the bottom of a personal check. Your account number follows it.',
      },
      {
        title: 'Submit and save your confirmation',
        content:
          'Review your answers on the summary page, then click Submit. Print or save the confirmation page — it contains a confirmation number you can use to check on your application status.',
      },
      {
        title: 'Wait for your decision letter',
        content:
          'Social Security will mail a decision letter within 3 to 5 weeks for most applications. If they need additional documents, they will contact you by mail. Your first payment will arrive in the month after your benefits are scheduled to start, on a Wednesday determined by your birth date.',
        tip: 'For questions at any point, call SSA at 1-800-772-1213 (Monday–Friday, 8 AM–7 PM) or find your nearest office at ssa.gov/agency/contact.',
      },
    ],
  },
];
