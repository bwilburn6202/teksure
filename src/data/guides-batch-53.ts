// TekSure Guides Batch 53 — OneDrive freeze fix, investment scams, Google Gemini, contact backup (April 2026)
import type { Guide } from './guides';

export const guidesBatch53: Guide[] = [
  // Social: "Windows 11 freezing when you save a file? Microsoft quietly released a free fix — here's how to get it in under 5 minutes."
  // Newsletter: "After the January–April 2026 Windows 11 updates, Outlook, Word, and File Explorer started freezing whenever users tried to open or save files stored in OneDrive or Dropbox. Microsoft has released an emergency patch. Here's how to install it and stop the freeze for good."
  {
    slug: 'windows-11-app-freeze-onedrive-fix',
    title: "Windows 11 Apps Freeze When Saving Files — Here's the Free Fix",
    excerpt: "A Windows 11 update bug causes Outlook, Word, and other apps to freeze when saving to OneDrive or Dropbox. Microsoft's free patch takes 5 minutes.",
    category: 'windows-guides',
    tags: ['Windows 11', 'OneDrive', 'Outlook', 'freeze', 'update', 'fix'],
    readTime: '5 min',
    thumbnailEmoji: '🪟',
    publishedAt: '2026-04-19',
    lastVerifiedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `After installing Windows 11 security updates from January through April 2026, many users started noticing that apps like Outlook, Word, and File Explorer would freeze or become unresponsive whenever they tried to open a file from OneDrive, save to OneDrive, or access files stored in Dropbox.\n\nThis is a genuine Microsoft bug — not a virus or hardware problem. The issue affects Windows 11 versions 24H2 and 25H2. Microsoft confirmed the problem and released emergency out-of-band patches to fix it. The fix is free and takes about 5 minutes to install.\n\nYou may also notice that some previously downloaded emails re-download in Outlook, or that sent items temporarily disappear. These are side effects of the same bug and will clear up once you install the patch.`,
    steps: [
      {
        title: 'Check if your PC has the bug',
        content: 'The freeze happens when you try to open, save, or move files stored in cloud folders like OneDrive or Dropbox. If Outlook hangs when you open it, or Word freezes at the save dialog, or File Explorer stops responding when you navigate to your OneDrive folder — you are likely affected. If everything runs normally, you may have already received the fix automatically.',
        tip: 'To check which version of Windows 11 you have: click the Start button → Settings → System → About. Look for "Windows 11" followed by a version number near the bottom.',
      },
      {
        title: 'Open Windows Update',
        content: 'Click the Start button (the Windows logo) at the bottom of your screen. Click the gear icon to open Settings. Click "Windows Update" on the left side of the Settings window.',
      },
      {
        title: 'Check for and install the patch',
        content: 'Click the "Check for updates" button. Windows will search for available updates. Look for a patch labeled KB5078127 (for version 25H2) or KB5082052 (for version 24H2) — these are the emergency fixes. If you see them listed, click "Download and Install." If you do not see those specific patches, install whatever updates are offered — Microsoft may have rolled the fix into a newer cumulative update.',
        tip: "Microsoft's official support page for this issue is at support.microsoft.com — search for \"Windows 11 OneDrive freeze\" to find the exact KB article for your version.",
        warning: 'Do not pay anyone offering to fix this issue remotely. The real fix is free, comes from Windows Update, and takes under 10 minutes. Scammers are using this bug to call people and offer "Windows recovery services" — hang up if you get one of those calls.',
      },
      {
        title: 'Restart your computer to apply the patch',
        content: 'After the download finishes, you will see a button to "Restart now" or a prompt that your PC will restart at a scheduled time. Click "Restart now" to apply the fix immediately. The restart takes about 3–5 minutes and your files are not affected.',
      },
      {
        title: 'Test that the fix worked',
        content: 'After restarting, try opening a file from your OneDrive folder or saving a document to OneDrive. The app should respond normally without freezing. If you use Outlook, open it and send a test email — it should load and save without hanging.',
        tip: 'Going forward, keep Windows Update set to "Automatic" so patches like this install automatically. Go to Settings → Windows Update → Advanced Options and make sure "Receive updates for other Microsoft products" is turned on — this covers Office app patches too.',
      },
    ],
  },

  // Social: "The FTC says investment scams are now the #1 way Americans lose money to fraud. Here are the exact warning signs — and what real investing looks like."
  // Newsletter: "The FTC issued a fresh warning in April 2026: investment scams have reached record levels, with people losing an average of $20,000 each. AI-generated celebrity endorsements and fake trading platforms are the two biggest tricks. Here's what to look for and who to call if you're targeted."
  {
    slug: 'how-to-spot-avoid-investment-scams',
    title: 'How to Spot and Avoid Investment Scams',
    excerpt: "Investment scams are now the #1 fraud category. The FTC says losses average $20,000 per victim. Here are the warning signs and what real investing looks like.",
    category: 'safety-guides',
    tags: ['investment scam', 'fraud', 'FTC', 'seniors', 'money', 'safety'],
    readTime: '7 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    lastVerifiedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `The Federal Trade Commission issued a new warning in April 2026: investment scams are now the number one way Americans lose money to fraud. The average loss per victim is around $20,000 — and many people lose far more. Scammers have gotten much better at appearing legitimate, using AI-generated celebrity videos, convincing fake trading platforms, and professional-looking websites.\n\nThe key thing to understand is that scammers target everyone, not just inexperienced investors. Intelligent, cautious people get caught too — because the scams are designed to look exactly like the real thing.\n\nThe most important rule: if someone contacts you out of nowhere about an investment, that alone is a red flag. Legitimate investment opportunities do not come through cold calls, social media messages, or unsolicited emails.`,
    steps: [
      {
        title: 'Know the warning signs before you invest anything',
        content: 'The FTC says these are the biggest red flags: a promise of guaranteed high returns with little or no risk (no real investment works this way — all investments carry some risk); pressure to invest quickly before you "miss out"; contact from someone you did not seek out — especially through social media, WhatsApp, or a text message; requests to invest using cryptocurrency, wire transfer, or gift cards (these cannot be reversed if you are scammed); an online platform that shows spectacular returns but will not let you withdraw your money without paying a fee first.',
        tip: 'If someone promises guaranteed returns of 10%, 20%, or more with no risk — it is always a scam. Safe investments like savings accounts and treasury bonds currently pay around 4–5% per year, not 10–20% per month.',
      },
      {
        title: 'Watch out for AI-generated celebrity endorsements',
        content: 'In 2026, scammers commonly use AI-generated videos showing celebrities like Elon Musk, Warren Buffett, or local politicians "endorsing" their investment platform. These videos look and sound real but are completely fake. Before trusting any celebrity endorsement, search for the celebrity\'s name plus "investment scam" on Google. Real investment opportunities from real companies are not promoted through celebrity videos on social media.',
        warning: "Scammers also use photos of real financial advisors from legitimate companies — they steal LinkedIn profile pictures and create fake websites. Always verify through the company's official website, found by typing the address yourself — never using a link from a message.",
      },
      {
        title: 'Verify any investment opportunity before giving money',
        content: "Before sending a single dollar, do these three checks: (1) Search the company's name on the SEC's investor.gov website — legitimate investment firms registered in the US are listed there. (2) Search the person's name plus \"FINRA BrokerCheck\" at brokercheck.finra.org — this tells you if a stockbroker or financial advisor is licensed. (3) Google the company's name plus the word \"scam\" or \"complaint\" — if others have been defrauded, you will likely find reports.",
        tip: "The SEC's investor education website at investor.gov has a free tool called \"Check Out Your Investment Professional\" that shows whether an adviser is registered and if they have any disciplinary history.",
      },
      {
        title: 'Never pay a fee to withdraw your own money',
        content: 'One of the most common tricks in investment scams is the "withdrawal fee." Your fake account shows a large profit, but when you try to take out the money, the platform says you owe taxes, a withdrawal fee, or a "compliance deposit" first. This is always a second theft. Legitimate investment platforms never require you to pay a fee before you can access your own money. If this happens, stop immediately and do not pay anything.',
      },
      {
        title: 'Report it and get help if you are targeted',
        content: 'If you think you have encountered an investment scam — or already lost money — report it to the FTC at ReportFraud.ftc.gov and to the SEC at sec.gov/tcr. You can also call the AARP Fraud Watch Network helpline free at 877-908-3360 (Monday–Friday, 8 AM–8 PM Eastern) — trained fraud specialists can walk you through next steps and help you understand your options for recovering money.',
        tip: "The FBI's Internet Crime Complaint Center at ic3.gov also accepts reports of investment fraud. Filing a report creates a record and helps investigators track patterns — even if you cannot immediately recover your money.",
      },
    ],
  },

  // Social: "Google Gemini is free, already on your phone, and genuinely helpful for everyday tasks — most people just don't know it's there. Here's a 5-minute intro."
  // Newsletter: "Google's AI assistant Gemini is now built into Android phones and available as a free app for iPhone and Mac. It can write emails, answer questions, explain confusing documents, and more — all in plain English. This beginner's guide shows you exactly how to use it, including a privacy setting most people miss."
  {
    slug: 'how-to-use-google-gemini-ai',
    title: "How to Use Google Gemini AI — A Beginner's Guide",
    excerpt: "Gemini is Google's free AI assistant, built into Android phones and available on iPhone. It can write emails, answer questions, and explain confusing documents.",
    category: 'ai-guides',
    tags: ['Google', 'Gemini', 'AI', 'beginners', 'Android', 'iPhone'],
    readTime: '8 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-19',
    lastVerifiedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Google Gemini is a free AI assistant made by Google. Think of it as a very knowledgeable helper you can have a conversation with — you ask it questions or give it a task in plain English, and it responds in plain English.\n\nIf you have an Android phone, Gemini is most likely already installed. On Samsung, Google Pixel, and most other Android phones, you can reach it by pressing and holding the home button or the power button. On iPhone, you can download the free Gemini app from the App Store. Google also released a standalone Gemini desktop app for Mac in April 2026.\n\nGemini is different from a regular search engine. Instead of showing you a list of links, it gives you a direct, conversational answer. You can ask follow-up questions, ask it to rewrite something, or have it help you draft a message.`,
    steps: [
      {
        title: 'Open Gemini on your device',
        content: 'On Android: press and hold the Home button at the bottom of your screen. A panel will slide up — this is Gemini. You can also open it from your app drawer by searching for "Gemini." On iPhone: download the free Google Gemini app from the App Store. Search for "Google Gemini" (not just "Gemini" — there are other apps with similar names). Sign in with a Google account. On computer: go to gemini.google.com in any browser and sign in with your Google account.',
        tip: 'Google\'s official overview of Gemini is at support.google.com — search "Get started with Gemini" for the most up-to-date setup instructions.',
      },
      {
        title: 'Ask your first question',
        content: 'Type anything you want to know in the text box at the bottom, then tap the arrow to send it. You can also tap the microphone icon to speak your question instead of typing. Try a question like: "What is the weather going to be like this week?" or "What foods are high in potassium?" or "Explain what Medicare Part D covers in plain English." Gemini will give you a clear, direct answer.',
      },
      {
        title: 'Use Gemini to help you write emails and messages',
        content: 'Gemini is especially useful for writing. If you need to write a message but are not sure how to word it, type something like: "Help me write a polite email to my doctor\'s office asking to reschedule my appointment." Or: "Write a short thank-you note to my neighbor for watching my cat." Gemini will give you a draft you can copy, adjust, and send. You do not have to use the exact wording — you can ask it to "make it shorter" or "make it sound less formal" and it will try again.',
        tip: 'YouTube\'s official Google channel has a video titled "How to Use Google Gemini" that walks through the main features with a live demo. Search "Google Gemini beginner tutorial" on YouTube to find it.',
      },
      {
        title: 'Ask Gemini to explain something confusing',
        content: 'If you receive a letter, bill, or legal document that is hard to understand, you can type or paste the confusing text and ask Gemini to explain it. For example: "Can you explain this paragraph from my insurance letter in plain English?" Or if you get a weird error message on your computer, type or copy the error and ask: "What does this error mean and how do I fix it?" Gemini will translate the technical language into something understandable.',
        warning: 'Do not share your full Social Security number, passwords, credit card numbers, or other sensitive personal details with Gemini. For general questions about bills, documents, or procedures, it is fine to share the relevant text — but keep sensitive identifiers out of it.',
      },
      {
        title: 'Adjust your privacy settings',
        content: 'By default, Google may use your Gemini conversations to improve its AI. To turn this off: in the Gemini app, tap your profile picture in the top-right corner → tap "Gemini Apps Activity" → turn off "Gemini Apps Activity." This stops your conversations from being used for training. Your conversations are still stored for a period of time by default — you can also delete them from that same settings page.',
        tip: 'Google\'s privacy settings for Gemini are at myaccount.google.com — look for "Data & Privacy" to see and control all your activity settings in one place.',
      },
    ],
  },

  // Social: "Most people think their contacts are backed up — but many aren't. Here's the 2-minute check that could save years of phone numbers."
  // Newsletter: "Losing your phone contacts is one of those tech disasters that feels minor until it happens — and then it's devastating. Most modern phones back up contacts automatically, but only if the right setting is turned on. This guide shows you exactly how to check, and what to do before you switch to a new phone."
  {
    slug: 'back-up-phone-contacts',
    title: 'How to Back Up Your Phone Contacts So You Never Lose Them',
    excerpt: "Most phones back up contacts automatically — but only if the right setting is on. Here's how to check and protect years of phone numbers in 2 minutes.",
    category: 'essential-skills',
    tags: ['contacts', 'backup', 'iPhone', 'Android', 'iCloud', 'Google'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    lastVerifiedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: `Your phone contacts hold years of important information — family phone numbers, doctors, businesses, old friends. If your phone is lost, stolen, damaged, or you switch to a new phone without preparing first, all of those contacts can disappear permanently.\n\nThe good news is that both iPhone and Android are designed to back up your contacts to the cloud automatically. The bad news is that the backup only works if the right settings are turned on — and many people have never checked.\n\nThis guide takes about 2 minutes to verify on your phone. You will also learn how to export a copy of your contacts as a safety net, and what to do when switching to a new phone.`,
    steps: [
      {
        title: 'Check that iCloud Contacts backup is on (iPhone)',
        content: 'On iPhone, go to Settings → tap your name at the top → iCloud. Look for "Contacts" in the list and make sure the switch next to it is green (on). If it was off, turn it on — your contacts will start syncing to iCloud within a few minutes. As long as iCloud backup is on, your contacts are backed up whenever your phone is connected to Wi-Fi and charging.',
        tip: 'Apple\'s support page for iCloud Contacts is at support.apple.com — search "Back up contacts on iPhone" for step-by-step photos of every screen.',
      },
      {
        title: 'Check that Google Contacts sync is on (Android)',
        content: 'On Android, go to Settings → tap "Accounts" or "Accounts and backup" (the name varies by phone brand) → tap your Google account → make sure "Contacts" has a checkmark or is toggled on. On Samsung phones, go to Settings → Accounts and Backup → Manage Accounts → tap your Google account → Account Sync → toggle Contacts on. Your contacts are now automatically synced to your Google account and will transfer to any new Android phone you sign in to.',
        tip: 'Google\'s support page for contact sync is at support.google.com — search "Back up and sync contacts on Android" for the most current instructions.',
      },
      {
        title: 'Export a backup copy of your contacts (both iPhone and Android)',
        content: 'Cloud backup is convenient, but having a saved copy is extra insurance. On iPhone: open the Contacts app → tap your account at the top (or go to icloud.com on a computer, click Contacts, select all, then export as a .vcf file). On Android: open the Google Contacts app (or contacts.google.com on a computer) → tap the three lines in the top left → Export → choose vCard (.vcf) → Save. You can email this file to yourself or save it to a USB drive.',
      },
      {
        title: 'What to do before switching to a new phone',
        content: 'Before handing in your old phone or wiping it: (1) Make sure iCloud or Google sync is on and has finished syncing — you will see a "Last synced" timestamp in your account settings. (2) If switching between iPhone and Android (or vice versa), export your contacts as a .vcf file first and import it into the new platform. (3) Sign in to your Apple ID or Google account on the new phone — your contacts should appear automatically within a few minutes.',
        tip: 'When you sign in to your Apple ID or Google account on a new phone, contacts, calendar, and photos all restore automatically over Wi-Fi. Make sure you are on Wi-Fi before setting up a new phone — the initial download can be large.',
      },
      {
        title: 'Verify your contacts are backed up',
        content: 'The final check: on another device (a tablet, a family member\'s phone, or a computer), sign in to icloud.com or contacts.google.com with the same account. You should see all your contacts there. If they show up on the web, they are backed up and safe — no matter what happens to your physical phone.',
        warning: 'If you see zero contacts on the web version, your backup is not working. Go back to Step 1 or 2 and make sure sync is turned on. Wait 10 minutes and check again.',
      },
    ],
  },
];
