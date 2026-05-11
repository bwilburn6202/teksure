// guides-batch-132 — Monday content cycle 2026-05-11
// Topics: Windows 10 post-EOL guidance; Google Photos AI search; Gmail Help Me Write; AirPods Hearing Test

import type { Guide } from './guides';

export const guidesBatch132: Guide[] = [
  {
    slug: 'windows-10-after-support-ended-what-to-do',
    title: 'Windows 10 Support Already Ended — Here Is What to Do Now',
    excerpt: 'Windows 10 stopped getting security updates in October 2025. Your PC still works, but here is what that means and how to stay safe.',
    category: 'windows-guides',
    tags: ['windows 10', 'windows 11', 'security updates', 'pc', 'microsoft', 'eol', 'upgrade'],
    readTime: '7 min',
    thumbnailEmoji: '🖥️',
    publishedAt: '2026-05-11',
    lastVerifiedAt: '2026-05-11',
    difficulty: 'Beginner',
    body: `Microsoft stopped releasing security updates for Windows 10 on October 14, 2025. If you are still running Windows 10, your computer has not received a single security patch since that date — and it will not receive any more, ever. That does not mean your computer broke or stopped working. It means the locks on the door are no longer being changed when someone finds a new way in.

This guide explains what that means in plain English and walks through your three real options: upgrade to Windows 11 for free (if your PC supports it), buy a new computer, or take extra precautions if you must keep Windows 10 temporarily.

Millions of Americans are still running Windows 10. If that is you, you are not alone — but you do need to act before the risk becomes real.

(Sources: Microsoft Windows lifecycle, microsoft.com/en-us/windows/end-of-support; Microsoft PC Health Check app, microsoft.com/en-us/windows/windows-11)`,
    steps: [
      {
        title: 'Understand what "end of support" actually means',
        content: 'End of support means Microsoft no longer releases security updates, bug fixes, or technical support for Windows 10. Your computer still turns on, your files are still there, and your programs still run. But every new security weakness discovered after October 2025 will never be patched. Hackers know this and specifically target systems that no longer receive updates.',
        tip: 'Quick Tip: Think of it like a smoke detector with a dead battery. Your home looks the same and nothing is on fire right now — but you are no longer protected if something starts.',
      },
      {
        title: 'Check if your PC can run Windows 11',
        content: 'Windows 11 is a free upgrade for most PCs made in 2017 or later — but your computer must meet specific hardware requirements. The easiest way to check is to download the free Microsoft PC Health Check app at microsoft.com/en-us/windows/windows-11 and run it. It will tell you within 30 seconds whether your PC qualifies for a free upgrade. The main requirements are a processor from 2017 or newer and at least 64 GB of storage.',
        warning: 'Some PCs from 2016 and earlier will not qualify for Windows 11. Microsoft is firm on the hardware requirements — they are not negotiable.',
      },
      {
        title: 'Upgrade to Windows 11 if your PC qualifies (free)',
        content: 'If the PC Health Check app gives your PC a green light, upgrading is free and takes about 30 to 60 minutes. Open Settings > Windows Update > Check for updates. Look for "Windows 11 is available." Click Download and install. Windows will restart a few times during the process. Your files, programs, and settings will carry over — you do not need to do anything to preserve them ahead of time. After upgrading, Windows 11 will receive security updates through 2031.',
        tip: 'Quick Tip: If you do not see the Windows 11 offer in Windows Update, go directly to microsoft.com/software-download/windows11 and click "Download Windows 11 Disk Image." This starts the upgrade manually.',
      },
      {
        title: 'Buy a new computer if your PC does not qualify',
        content: 'If your PC is too old for Windows 11, upgrading is not an option — and continuing to use Windows 10 on an unsupported machine is a real security risk. A new Windows 11 laptop starts around $250 to $350 at Best Buy, Walmart, or Costco. These come with Windows 11 already installed and will be supported through at least 2031. If budget is a concern, refurbished Windows 11 computers from reputable sellers (Dell Refurbished, Amazon Renewed) start around $150 to $200.',
      },
      {
        title: 'If you must stay on Windows 10 temporarily, take extra precautions',
        content: 'If you cannot upgrade or replace your computer right now, take three steps to reduce risk while you plan. First, stop using Windows 10 for banking, email, or any site that involves passwords. Use your phone instead for sensitive tasks. Second, make sure you have a reputable antivirus program installed and running — Windows Defender (built into Windows 10) still works but is no longer updated for new threats. A paid program like Malwarebytes or Bitdefender offers more recent threat definitions. Third, do not click links in emails or text messages at all until you are on a supported system.',
        warning: 'Staying on Windows 10 indefinitely is not a safe long-term choice. Set a deadline — if you cannot upgrade or replace your computer within 90 days, treat every session as high-risk.',
      },
      {
        title: 'Extended Security Updates — one more option for a fee',
        content: 'Microsoft is offering paid Extended Security Updates (ESU) for Windows 10 through October 2028. The cost is $30 for the first year per personal computer. This gives you continued security patches for three more years without upgrading or buying a new computer. You can purchase ESU directly at microsoft.com/en-us/windows/end-of-support. This is a reasonable bridge option if you are on a fixed income and cannot afford a new PC right now, but plan to replace it eventually.',
        tip: 'Quick Tip: ESU is available to individuals for the first time with Windows 10 — previously it was only for businesses. It is a genuine Microsoft product, not a third-party service.',
      },
    ],
  },

  {
    slug: 'google-photos-ai-search-find-any-photo',
    title: 'How to Find Any Photo in Google Photos Using AI Search',
    excerpt: 'Google Photos can find photos by what is in them — type "beach sunset 2022" or "birthday cake" and it finds them instantly. Here is how.',
    category: 'photos-memories',
    tags: ['google photos', 'ai', 'search', 'photos', 'memories', 'android', 'iphone'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    publishedAt: '2026-05-11',
    lastVerifiedAt: '2026-05-11',
    difficulty: 'Beginner',
    body: `If your phone has hundreds or thousands of photos, finding a specific one can feel impossible. Google Photos has a built-in AI search that understands what is actually in your photos — and it works remarkably well for everyday use.

You can type "birthday cake" and see every photo that has a birthday cake in it. You can type "Grandma 2021" and see photos with that person from that year. You can type "beach sunset" and get exactly what you are picturing. You do not have to have done anything special to make this work — Google Photos analyzes every photo you upload automatically, in the background, for free.

This is available on iPhone and Android in the Google Photos app, and on any computer at photos.google.com.

(Source: Google Photos Help, support.google.com/photos)`,
    steps: [
      {
        title: 'Open Google Photos and find the search bar',
        content: 'Open the Google Photos app on your phone. Tap the search icon — it looks like a magnifying glass — at the bottom of the screen. On a computer, go to photos.google.com and click the search bar at the top. You will see suggestions for recent people, places, and categories. Ignore those for now.',
        tip: 'Quick Tip: If you do not have Google Photos installed, search for it in the App Store (iPhone) or Google Play (Android) and install it free. Sign in with your Google account.',
      },
      {
        title: 'Search by what is in the photo',
        content: 'Type a plain description of what you are looking for. Examples that work well: "dog playing," "birthday cake," "Christmas tree," "snow," "graduation," "hospital," "grandchildren." Google Photos analyzes the contents of every photo, so it can find subjects even if you never tagged or labeled the photos.',
      },
      {
        title: 'Search by person',
        content: 'If you have Face Grouping turned on (and you live in the US, where the feature is available), Google Photos automatically groups photos by face. Tap on any face in the search screen to see all photos of that person. You can also type a person\'s name if you have assigned a name to their face group — to do that, tap a face cluster in search, then tap "Add a name."',
        warning: 'Face Grouping is optional and can be turned off at any time in Settings > Group similar faces if you prefer more privacy.',
      },
      {
        title: 'Search by place or year',
        content: 'You can combine search terms: "Paris 2019," "backyard summer," "Florida beach." Google Photos uses both the photo\'s location data (if your phone had GPS on) and what it sees in the image. Searching by city name, landmark name, or state works well for travel photos. Searching by season ("summer" or "winter") also works surprisingly well based on clothing, scenery, and lighting.',
      },
      {
        title: 'Search by document or text in a photo',
        content: 'Google Photos can read text that appears in photos. If you photographed a business card, a receipt, a restaurant menu, or a sign, you can search for the words in those photos. Try typing "receipt" or a company name or a phone number you remember writing down. This feature works in English and several other languages.',
        tip: 'Quick Tip: This is also useful for finding screenshots of emails or messages you saved as images — search by a word or phrase from the message.',
      },
      {
        title: 'Use the Memories tab for browsing without searching',
        content: 'If you are not looking for something specific but want to browse by time or theme, tap the photo grid at the bottom and then the "Memories" tab (or look for the photo book icon). Google Photos automatically creates collections called Memories — things like "This week last year," "5 years ago," "Best of 2023," and album themes like "Road trips" or "Pets." These are generated automatically and update over time.',
      },
    ],
  },

  {
    slug: 'gmail-help-me-write-gemini-ai',
    title: 'How to Use Gmail\'s "Help Me Write" AI to Draft Emails Faster',
    excerpt: 'Gmail has a built-in AI button called "Help Me Write." Type a few words about what you need and it drafts the full email. Here is how to use it.',
    category: 'email',
    tags: ['gmail', 'google', 'ai', 'gemini', 'email', 'help me write', 'writing', 'assistant'],
    readTime: '5 min',
    thumbnailEmoji: '✍️',
    publishedAt: '2026-05-11',
    lastVerifiedAt: '2026-05-11',
    difficulty: 'Beginner',
    body: `Gmail now has a built-in AI writing assistant called "Help Me Write," powered by Google Gemini. When you are composing an email, you can describe what you want to say in a few words, and the AI drafts the entire message for you. You can then read it over, edit anything you want, and send it.

This is especially useful if you find writing emails stressful, do not know how to start, or need to write something formal (like a complaint letter, a request to a doctor's office, or a note to a school). You describe the situation, the AI writes a professional draft, and you make any changes.

"Help Me Write" is available to anyone with a Google account at no extra cost. It works in Gmail on the web (gmail.com) and in the Gmail app on iPhone and Android.

(Source: Gmail Help — Use AI to write emails, support.google.com/mail)`,
    steps: [
      {
        title: 'Open Gmail and start a new email',
        content: 'On your computer, go to gmail.com and click the Compose button in the upper left. On your phone, open the Gmail app and tap the pencil icon at the bottom right. A new email window will open. You do not need to type anything yet — go straight to the compose screen.',
      },
      {
        title: 'Find the Help Me Write button',
        content: 'In the compose window, look for a pencil icon with a small star or sparkle symbol on it — this is the "Help Me Write" button. On the web it appears in the bottom row of the compose window near the formatting buttons. On the phone app, it appears at the top of the keyboard area when you are in the message body field. Tap or click it.',
        tip: 'Quick Tip: If you do not see the button, make sure your Gmail app is updated to the latest version. Open the App Store or Google Play, search for Gmail, and tap Update if one is available.',
      },
      {
        title: 'Type a short description of what you need',
        content: 'A small box will open with the prompt "Describe what you\'d like to write." Type a plain English description of your email. A few words or one sentence is enough. Examples: "Ask my doctor to send me a refill reminder for my blood pressure medication." "Politely ask my neighbor to stop parking in my spot." "Thank my nephew for the birthday gift he sent me." "Request a refund for a delayed order from Amazon." Tap "Create" when done.',
      },
      {
        title: 'Read the draft and decide what to keep',
        content: 'The AI will produce a full email draft in the compose window. Read it through. It may be slightly more formal than you would normally write — that is intentional. If a sentence does not sound right, tap in the draft and change it the same way you would edit any text. You can delete whole paragraphs, add more detail, or change the greeting.',
        warning: 'Always read the full draft before sending. The AI is helpful but not perfect. Check that the facts are correct — if you mentioned a specific order number or date, make sure the AI did not make one up.',
      },
      {
        title: 'Refine it using the Recreate, Formalize, or Shorten options',
        content: 'After the draft appears, look for small option buttons below it: "Recreate" (try again from scratch), "Formalize" (make it more professional), "Shorten" (make it briefer), and "Elaborate" (make it longer and more detailed). Tap the one that fits. If none of them are quite right, tap "Recreate" and try a slightly more specific description.',
      },
      {
        title: 'Add the recipient and subject, then send',
        content: 'Once you are happy with the body text, fill in the To field (the recipient\'s email address) and the Subject line if one was not already there. Double-check the recipient — it is possible to accidentally send to the wrong person. Then click or tap Send.',
        tip: 'Quick Tip: You can also use "Help Me Write" to improve something you already typed. Start writing the email yourself, then tap the Help Me Write button — it will offer to polish what you have written rather than starting from scratch.',
      },
    ],
  },

  {
    slug: 'airpods-pro-hearing-test-ios18',
    title: 'How to Take a Hearing Test with AirPods Pro and iPhone',
    excerpt: 'AirPods Pro 2 and iOS 18 include a clinical-grade hearing test you can take at home in 5 minutes. Here is how to use it and what to do with the results.',
    category: 'health-tech',
    tags: ['airpods', 'hearing', 'health', 'iphone', 'ios 18', 'accessibility', 'audiogram', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '👂',
    publishedAt: '2026-05-11',
    lastVerifiedAt: '2026-05-11',
    difficulty: 'Beginner',
    body: `Apple added a clinically-validated hearing test to AirPods Pro 2 in iOS 18 in late 2024. The test takes about five minutes and produces an audiogram — the same chart a hearing specialist creates in an office. You do the entire test at home, sitting quietly with your AirPods in.

The test is not a replacement for seeing a hearing doctor, but it is a useful first step. Many people who have hearing loss do not realize it, and the test can confirm whether a follow-up with an audiologist makes sense. The results are stored in the iPhone Health app alongside your other health data.

AirPods Pro 2 also include a feature called Hearing Aid mode (added in iOS 18) that uses the AirPods to amplify sounds in real time, similar to an over-the-counter hearing aid — useful if your test results show mild to moderate hearing loss.

Requirements: AirPods Pro 2 (second generation), iPhone with iOS 18 or later, a quiet room.

(Source: Apple Support — Take a Hearing Test with AirPods, support.apple.com)`,
    steps: [
      {
        title: 'Confirm you have the right AirPods',
        content: 'This feature requires AirPods Pro 2 (the second generation). You can check which model you have by opening the AirPods case near your iPhone — a card will appear on screen showing the model name. If it says "AirPods Pro" without a generation number, or if you have regular AirPods (not Pro), the hearing test is not available on your device.',
        tip: 'Quick Tip: AirPods Pro 2 were released in September 2022. If you purchased AirPods Pro on or after that date, you almost certainly have the second generation.',
      },
      {
        title: 'Update to iOS 18 and update your AirPods firmware',
        content: 'The hearing test requires iOS 18 or later. To check, open Settings > General > About and look at "iOS Version." If it says 17 or lower, go to Settings > General > Software Update and install the update. AirPods firmware updates automatically when the AirPods are connected and charging — you do not need to do anything for that.',
      },
      {
        title: 'Find the Hearing Test in Settings',
        content: 'With your AirPods in your ears and connected to your iPhone, open Settings > AirPods (your device name) > Hearing Test. If you do not see this option, make sure both the iPhone and AirPods are updated. Tap Start Hearing Test. You will be asked to confirm you are in a quiet room before beginning.',
        warning: 'Take the test in the quietest room available — a bedroom or bathroom works well. Background noise from a TV, conversation, or air conditioner can affect the accuracy of your results.',
      },
      {
        title: 'Follow the on-screen instructions',
        content: 'The test plays a series of soft tones at different pitches and volumes through each AirPod. Each time you hear a tone, tap your iPhone screen. If you do not hear a tone, do not tap — that is information too. The test runs separately for each ear and takes about two to three minutes per ear. Try not to guess — only tap when you genuinely hear something.',
      },
      {
        title: 'Review your results',
        content: 'When the test finishes, your results appear as a chart with two colored lines — one for each ear. Normal hearing shows lines near the top. Lines that dip lower at certain pitches suggest reduced hearing at those frequencies. The app labels your results as: Normal, Slight, Mild, Moderate, Moderately Severe, Severe, or Profound. Your results are saved automatically in the Health app under Hearing > Audiogram.',
      },
      {
        title: 'Use Hearing Aid mode if results show a loss',
        content: 'If your results show mild or moderate hearing loss, the app will offer to turn on Hearing Aid mode. This is a clinical-grade feature that programs your AirPods Pro to amplify the specific frequencies where you have loss — similar to what an over-the-counter hearing aid does. Turn it on and walk around for a day to see if it helps. You can adjust the level in Settings > AirPods > Hearing Aid. If your results show moderate-severe or worse, see an audiologist — AirPods are not a substitute for professional hearing aids at that level.',
        tip: 'Quick Tip: Share your audiogram with your doctor by opening Health > Hearing > Audiogram and tapping the Share button. You can send it as a PDF to your doctor\'s patient portal or email it directly.',
      },
    ],
  },
];
