// guides-batch-334 — Written by the 90-day sprint task on 2026-08-06
// Topics: two timely items (the FTC's Youville tool announced 2026-08-05, and the
// Medicare Annual Notice of Change that plans must mail by 2026-09-30) plus four
// gaps confirmed against the 4,043-slug audit: Libby library borrowing, Windows
// voice typing, phone Medical ID, and Windows color filters.

import type { Guide } from './guides';

export const guidesBatch334: Guide[] = [
  {
    slug: 'teach-grandkids-online-choices-youville',
    title: 'Youville: A Free FTC Game That Teaches Grandkids Smart Online Choices',
    excerpt: 'The FTC released a free online game for ages 8 to 12 about making good choices on the internet. Here is how to find it and play it with a grandchild.',
    category: 'safety-guides',
    tags: ['grandchildren', 'online safety', 'ftc', 'kids', 'free resources'],
    readTime: '5 min',
    thumbnailEmoji: '🎮',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Federal Trade Commission — Consumer Advice',
    sourceUrl: 'https://consumer.ftc.gov/consumer-alerts',
    videoUrl: 'https://www.youtube.com/@FTCvideos',
    body: `On August 5, 2026, the Federal Trade Commission announced a free tool called Youville. It is aimed at children ages 8 to 12. The point is to give them practice making decisions online before those decisions cost them anything.

Why this belongs on a site for older adults: grandparents are often the ones handing a tablet to a grandchild. You may also be the person that child asks when something online feels wrong. Playing a short game together gives you both the same words for the same problems.

The topics are the ones that show up in real life. What to share and what to keep private. How to tell an ad from a real recommendation. What to do when a stranger sends a message. How a "free" prize offer works. These are the same patterns behind the scams that target adults, in a smaller form.

The tool is free. There is nothing to buy and no membership. It lives on the FTC's own website, which is a government site, so you are not handing a child's information to an advertiser to use it.

A short session works better than a long one. Fifteen minutes, one topic, and a conversation afterward will stick longer than an hour of clicking. Ask the child what they would do before the game tells them. Their answer is the useful part.

(Source: Federal Trade Commission consumer alerts — consumer.ftc.gov)`,
    steps: [
      {
        title: 'Go to the FTC website',
        content: 'Open your web browser and type ftc.gov into the address bar. Then use the search box at the top of the page and search for Youville. Government websites end in .gov, so check for that before you click a result.',
        tip: 'Bookmark the page once you find it. That saves searching again next time a grandchild visits.',
      },
      {
        title: 'Sit next to the child rather than handing the device over',
        content: 'Put the tablet or laptop where you can both see it. You are not supervising a test. You are two people looking at the same screen, which makes it easier for the child to ask you something.',
      },
      {
        title: 'Pause and ask before each answer',
        content: 'When the game presents a choice, ask the child what they would pick and why. Listen to the reason, not the answer. The reason tells you what they already understand and what they do not.',
      },
      {
        title: 'Connect one lesson to something real',
        content: 'After you finish, name a real example. A pop-up that says you won a gift card. A message from someone claiming to know you. Say what you personally do about it. Children copy what they watch adults do.',
      },
      {
        title: 'Agree on one rule to keep',
        content: 'Pick a single rule the child can repeat, such as "I ask before I type my name anywhere." One remembered rule beats a list of ten. Write it down and put it where the tablet is charged.',
        tip: 'Quick Tip: Agree that the child will never be in trouble for reporting something scary online. Fear of punishment is the main reason children hide problems.',
      },
    ],
  },
  {
    slug: 'medicare-annual-notice-of-change-what-to-check',
    title: 'Your Medicare Plan Mails an "Annual Notice of Change" — What to Check in It',
    excerpt: 'Medicare Advantage and Part D plans must mail your 2027 Annual Notice of Change by September 30, 2026. Here are the five items worth reading closely.',
    category: 'government-civic',
    tags: ['medicare', 'annual notice of change', 'part d', 'medicare advantage', 'open enrollment'],
    readTime: '7 min',
    thumbnailEmoji: '📬',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Medicare.gov — Open Enrollment',
    sourceUrl: 'https://www.medicare.gov/health-drug-plans/open-enrollment',
    videoUrl: 'https://www.youtube.com/@CMSHHSgov',
    body: `If you have a Medicare Advantage plan or a Part D drug plan, an envelope arrives every fall. Inside is the Annual Notice of Change, often shortened to ANOC. Plans must mail it by September 30, 2026, covering the plan year that starts January 1, 2027.

The ANOC is a plain list of what your plan is changing. It is easy to set aside because it looks like paperwork. It is worth twenty minutes, because the changes take effect whether you read it or not.

Reading it early matters for one reason: Medicare Open Enrollment runs October 15 through December 7, 2026. That window is when you can switch plans. If you find a change you cannot live with, you have somewhere to go with that information. After December 7, most people are held to the plan they have.

Five things carry the most weight. First, the monthly premium. Second, the deductible and copays, including what you pay to see a specialist. Third, the drug list, called the formulary, which is where your prescriptions either stay covered or do not. Fourth, the pharmacy network, since a plan can drop a pharmacy you walk to. Fifth, the doctor and hospital network on a Medicare Advantage plan.

You do not have to decide anything alone. Every state has a State Health Insurance Assistance Program, or SHIP, that gives free one-on-one Medicare counseling with no sales involved. Medicare's own comparison tool at medicare.gov/plan-compare will show you what else is offered in your ZIP code, and 1-800-MEDICARE (1-800-633-4227) is staffed around the clock.

(Sources: Medicare.gov open enrollment page; Centers for Medicare & Medicaid Services — cms.gov)`,
    steps: [
      {
        title: 'Set the envelope aside in one place',
        content: 'When the notice arrives in September, put it somewhere you will find it, such as the drawer where you keep your Medicare card. Plans must mail it by September 30, 2026. If nothing arrives by early October, call the plan number on your member card and ask for it.',
      },
      {
        title: 'Write down your prescriptions first',
        content: 'Before you read the notice, list every medicine you take, with the dose. You cannot check a drug list against your memory. Keep this list. You will use it again if you compare plans.',
      },
      {
        title: 'Find your drugs on the 2027 formulary',
        content: 'Look up each medicine in the plan’s drug list for 2027. Check whether it is still covered and what tier it sits on. A drug that moves to a higher tier still counts as covered, but you pay more for it.',
        warning: 'A drug dropped from the formulary is the change that surprises people most often at the pharmacy counter in January. Check every prescription, not only the expensive ones.',
      },
      {
        title: 'Check the premium, deductible, and copays',
        content: 'Compare this year’s numbers with next year’s, which the notice prints side by side. Add up what you actually used this year at the new prices. A lower premium with higher copays can cost more overall.',
      },
      {
        title: 'Confirm your doctors and pharmacy are still in network',
        content: 'On a Medicare Advantage plan, check that your primary doctor, any specialist you see, and your preferred hospital are still listed for 2027. Also check your pharmacy. Then call the doctor’s office to confirm, because printed directories go out of date.',
      },
      {
        title: 'Compare plans during Open Enrollment if something no longer fits',
        content: 'Open Enrollment runs October 15 to December 7, 2026, and changes begin January 1, 2027. Use medicare.gov/plan-compare with your drug list in hand, or call 1-800-MEDICARE. For free counseling with no sales pitch, ask for your state’s SHIP program.',
        tip: 'Quick Tip: Anyone who phones you offering to "review your Medicare" and asks for your Medicare number is not from Medicare. Medicare does not cold-call. Hang up and use the number on your own card.',
      },
    ],
  },
  {
    slug: 'borrow-library-ebooks-audiobooks-libby',
    title: 'Borrow Free eBooks and Audiobooks From Your Library With Libby',
    excerpt: 'Your library card gives you free eBooks and audiobooks through the Libby app. Here is how to set it up and borrow your first book on a phone or tablet.',
    category: 'app-guides',
    tags: ['libby', 'library', 'ebooks', 'audiobooks', 'reading', 'free resources'],
    readTime: '7 min',
    thumbnailEmoji: '📚',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Libby — OverDrive Help',
    sourceUrl: 'https://help.libbyapp.com/',
    videoUrl: 'https://www.youtube.com/@libbyapp',
    body: `Most public libraries in the United States lend eBooks and audiobooks the same way they lend printed books. The app that handles it is called Libby, made by a company called OverDrive. If you have a library card, you already have access. There is no charge and no subscription.

An eBook is a book you read on a screen. An audiobook is a book read aloud to you. Libby handles both in one place. You borrow a title, it stays on your device for two or three weeks depending on your library, and then it returns itself. Nothing is ever overdue and there are no late fees.

Two features matter for anyone whose eyes get tired. In an eBook you can make the text as large as you want, which no printed book allows. In an audiobook you can slow the narrator down or speed them up. Libby also remembers where you stopped, in both formats, even if you switch between them.

Popular titles have waiting lists, exactly like the physical shelf. When you place a hold, Libby emails you when your turn comes. A useful habit is to keep three or four holds going at once so something is usually arriving.

If you do not have a library card yet, many libraries let you sign up online with proof of address, and some let you start borrowing the same day. Your library's website will say. This is one of the few genuinely free things left in tech, and it is paid for by taxes you already pay.

(Sources: Libby help — help.libbyapp.com; your local public library)`,
    steps: [
      {
        title: 'Install the Libby app',
        content: 'On an iPhone or iPad, open the App Store. On an Android phone or tablet, open the Google Play Store. Search for Libby and install the app with the orange icon and the white letter L. The app is free.',
        tip: 'You can also use it in a web browser at libbyapp.com if you would rather not install anything.',
      },
      {
        title: 'Find your library',
        content: 'Open Libby and answer yes when it asks whether you have a library card. Let it find libraries near you, or type your ZIP code or library name. Pick your library from the list.',
      },
      {
        title: 'Sign in with your library card number',
        content: 'Type the number printed on the back of your card, then the PIN or password your library gave you. If you do not know the PIN, call the library front desk. They reset it in a minute and this is a common question.',
        warning: 'Libby asks for a library card number and PIN only. It never needs a Social Security number or a payment method. Any screen asking for those is not Libby.',
      },
      {
        title: 'Search for a book and borrow it',
        content: 'Use the magnifying glass to search by title, author, or subject. On the result, tap Borrow and confirm. If the button says Place Hold instead, the copies are all out. Tap it anyway and Libby will notify you when your turn arrives.',
      },
      {
        title: 'Open the book and set the text size',
        content: 'Tap Shelf at the bottom, then Open Book. While reading, tap once in the middle of the page to bring up the controls, then choose the letter A to change text size, brightness, and background color. Cream or black backgrounds are easier on the eyes at night.',
        tip: 'Quick Tip: In an audiobook, tap the speed control and try 0.9 if the narrator talks too fast. Small changes are more comfortable than large ones.',
      },
      {
        title: 'Let books return themselves',
        content: 'A borrowed title returns automatically at the end of the loan, so you cannot owe anything. If you finish early and want to free up a slot, go to Shelf, tap Manage Loans, and choose Return Early.',
      },
    ],
  },
  {
    slug: 'windows-11-voice-typing-dictation',
    title: 'Type by Speaking on Windows 11 With Voice Typing',
    excerpt: 'Windows 11 can type what you say, in any text box, with one keyboard shortcut. Useful for sore hands, and for anyone who talks faster than they type.',
    category: 'windows-guides',
    tags: ['windows 11', 'voice typing', 'dictation', 'accessibility', 'arthritis'],
    readTime: '6 min',
    thumbnailEmoji: '🎤',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com/windows',
    videoUrl: 'https://www.youtube.com/@MicrosoftHelps',
    body: `Windows 11 includes a feature called voice typing. You press two keys, speak, and your words appear wherever the cursor is. It works in email, in a Word document, in a search box, and in most places you can type.

This helps two groups in particular. If your hands hurt or your fingers are stiff, speaking removes the part that hurts. If you type slowly with two fingers, speaking is several times faster, and a long email stops feeling like a chore.

The shortcut is the Windows key and the letter H pressed together. The Windows key is the one with the four-pane window picture, usually near the bottom left of the keyboard. A small microphone panel appears on screen. Speak normally, in a regular voice, at a regular pace. Shouting makes it worse, not better.

Punctuation is spoken out loud. Say "period" for a full stop, "comma" for a comma, and "question mark" for a question mark. Say "new line" to start a new line. Those four cover almost everything most people write.

Voice typing needs an internet connection and a microphone. Nearly every laptop has a built-in microphone already. If you use a desktop computer with no microphone, a basic USB headset works and usually gives cleaner results than a built-in one, because it sits closer to your mouth.

Expect to correct a few words at first. Names and unusual spellings are the common misses. Accuracy improves as you learn to pause slightly between sentences rather than trailing off.

(Source: Microsoft Support — support.microsoft.com/windows)`,
    steps: [
      {
        title: 'Click where you want the words to go',
        content: 'Open the email, document, or box you want to fill in, and click inside it so the blinking cursor is there. Voice typing puts words at the cursor. With no cursor, it has nowhere to type.',
      },
      {
        title: 'Press the Windows key and H together',
        content: 'Hold down the Windows key, tap the letter H, then let go. A small panel with a microphone appears near the bottom of the screen. If Windows asks permission to use the microphone, choose Yes.',
        tip: 'The first time, Windows may take a few seconds to get ready. Wait for the microphone icon to turn blue before you speak.',
      },
      {
        title: 'Speak at a normal pace',
        content: 'Talk the way you would to a person across a table. Full sentences work better than single words, because the software uses surrounding words to pick the right spelling. Do not lean toward the screen or raise your voice.',
      },
      {
        title: 'Say your punctuation out loud',
        content: 'Say "period" to end a sentence, "comma" for a pause, "question mark" for a question, and "new line" to move down a line. For example: "Dear Susan comma new line thank you for the photographs period"',
      },
      {
        title: 'Stop when you are finished',
        content: 'Press the Windows key and H again to close the panel, or click the microphone button. Then read your text once and fix any wrong words by hand. Names are the most common thing to correct.',
        warning: 'Voice typing listens while the panel is open. Close it before a private phone call happens in the same room.',
      },
      {
        title: 'Turn on automatic punctuation if you prefer',
        content: 'Open the settings gear on the voice typing panel and turn on automatic punctuation. Windows then adds periods and commas by guessing from your pauses. Some people find this easier. Others find it guesses wrong. Try both for a day.',
        tip: 'Quick Tip: If nothing appears when you speak, check that the correct microphone is selected in Settings, then System, then Sound, under Input.',
      },
    ],
  },
  {
    slug: 'set-up-medical-id-phone-emergency',
    title: 'Set Up a Medical ID on Your Phone So Help Knows What to Do',
    excerpt: 'A Medical ID shows your conditions, medicines, allergies, and emergency contacts on a locked phone. Paramedics look for it. Here is how to fill yours in.',
    category: 'health-tech',
    tags: ['medical id', 'emergency', 'iphone', 'android', 'health', 'safety'],
    readTime: '6 min',
    thumbnailEmoji: '🚑',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Apple Support',
    sourceUrl: 'https://support.apple.com/en-us/HT207021',
    videoUrl: 'https://www.youtube.com/@AppleSupport',
    body: `Both iPhone and Android phones can hold a short medical summary that shows on the lock screen. Emergency responders are trained to look for it. It costs nothing and takes about ten minutes to fill in.

The reason to bother is simple. In an emergency, the person who can explain your heart condition, your blood thinner, and your penicillin allergy may not be awake. A Medical ID answers those questions without your passcode. That is the point of it: readable while the phone stays locked.

Keep it short. Conditions, medicines with doses, allergies, blood type if you know it, and one or two emergency contacts. A paramedic reads it in seconds, so a long history is less useful than four clear lines.

On an iPhone it lives in the Health app under Medical ID. On most Android phones it is in Settings, under Safety and emergency, then Medical information. Samsung and Pixel phones word it slightly differently, but the path is close enough to find.

One caution about emergency contacts. Whoever you list can be called from your locked phone. Choose someone who answers unknown numbers and who knows your medical history. A spouse who never picks up an unfamiliar caller is a poor first contact.

Review it twice a year. Medicines change more often than people expect, and an out-of-date list is worse than none, because it is trusted.

(Sources: Apple Support — support.apple.com; Google Help — support.google.com/android)`,
    steps: [
      {
        title: 'On iPhone, open the Health app',
        content: 'Find the white icon with a red heart, named Health. Tap your picture or initials in the top right corner, then tap Medical ID, then Edit. Fill in conditions, medicines, allergies, and blood type.',
      },
      {
        title: 'On iPhone, turn on "Show When Locked"',
        content: 'Scroll down inside Medical ID and switch on Show When Locked. Without this, nobody can read it while the phone is locked, which defeats the purpose. Also turn on Share During Emergency Call, then tap Done.',
        warning: 'Anyone holding your phone can read a Medical ID. Put in what a paramedic needs and nothing more. Leave out your address, insurance numbers, and Social Security number.',
      },
      {
        title: 'On Android, open Settings and find Safety and emergency',
        content: 'Open Settings, then tap Safety and emergency, then Medical information. On some Samsung phones the path is Settings, then Safety and emergency, then Medical info. Fill in the same details and save.',
        tip: 'If you cannot find it, type "medical" into the search box at the top of Settings.',
      },
      {
        title: 'Add one or two emergency contacts',
        content: 'Add contacts in the same screen. Pick people who answer calls from numbers they do not recognize and who know your medical history. List a relationship, such as Daughter or Neighbor, so a responder knows who they reached.',
      },
      {
        title: 'Test it from the lock screen',
        content: 'Lock the phone. On iPhone, swipe up or press the side button, tap Emergency at the bottom, then tap Medical ID. On Android, tap Emergency, then Emergency information, often tapping twice. Read what a stranger would see.',
      },
      {
        title: 'Put a reminder in your calendar to review it',
        content: 'Set a repeating reminder for every six months to check the medicine list. Do it the same week you refill prescriptions, so the details are already in front of you.',
        tip: 'Quick Tip: Tell the people you listed as emergency contacts that you listed them. A call from a paramedic goes better when the person expects to be that call.',
      },
    ],
  },
  {
    slug: 'windows-color-filters-easier-reading',
    title: 'Make Windows Easier on Your Eyes With Color Filters and Contrast',
    excerpt: 'Windows can shift colors, raise contrast, and turn the screen grayscale for easier reading. Useful for color blindness, glare, and tired eyes.',
    category: 'windows-guides',
    tags: ['windows 11', 'accessibility', 'color blindness', 'contrast', 'eye strain', 'vision'],
    readTime: '6 min',
    thumbnailEmoji: '🌈',
    publishedAt: '2026-08-06',
    lastVerifiedAt: '2026-08-06',
    difficulty: 'Beginner',
    sourceName: 'Microsoft Support',
    sourceUrl: 'https://support.microsoft.com/windows',
    videoUrl: 'https://www.youtube.com/@MicrosoftHelps',
    body: `Windows has a group of display settings built for eyes that struggle with the standard screen. They are grouped under Accessibility, and none of them cost anything or change your files.

Color filters adjust the colors the screen sends out. Windows includes filters for the three common types of color blindness: red-green, another form of red-green, and blue-yellow. If charts and colored buttons have always been hard to read, one of these can make them separate clearly for the first time.

Two filters help people with no color vision problem at all. Grayscale removes color entirely, which reduces glare and can make text steadier if your eyes tire in the evening. Inverted turns light backgrounds dark, which some people find calmer in a dim room.

Contrast themes are a separate setting. They are stronger than filters, replacing the colors of buttons, menus, and text with high-contrast combinations across all of Windows. Black text on white, or yellow on black, are the common choices for low vision.

You can turn color filters on and off with one shortcut: hold the Windows key and the Ctrl key, then press C. Being able to flip it back quickly is what makes it worth trying. Nothing here is permanent, so there is no risk in testing each option for a minute.

If text is the real problem rather than color, the separate Text size slider in the same Accessibility area may serve you better. Try that first, then add a filter if it is still hard.

(Source: Microsoft Support — support.microsoft.com/windows)`,
    steps: [
      {
        title: 'Open Accessibility settings',
        content: 'Click the Start button, then the gear icon for Settings. In the list on the left, click Accessibility. This is the section that holds every vision, hearing, and mobility setting in Windows.',
      },
      {
        title: 'Turn on Color filters and pick one',
        content: 'Click Color filters, then switch the top toggle on. Choose from the list: Red-green, Green-red, Blue-yellow, Grayscale, Inverted, or Grayscale inverted. The screen changes at once so you can judge it.',
        tip: 'The colored wheel shown on the settings page is the fastest way to compare. Watch how the segments separate as you switch filters.',
      },
      {
        title: 'Learn the on and off shortcut',
        content: 'Hold the Windows key and Ctrl together, then press C. That switches your chosen filter on and off. Practice it twice now so you can undo any change without hunting through Settings.',
      },
      {
        title: 'Try a contrast theme if color is not enough',
        content: 'Go back to Accessibility and click Contrast themes. Pick one from the list, such as Aquatic or Desert, then click Apply. The whole of Windows changes to strong color pairings. To undo it, choose None and Apply again.',
        warning: 'A contrast theme changes how websites and programs look, and a few older programs handle it poorly. If something becomes unreadable, set the theme back to None.',
      },
      {
        title: 'Enlarge text separately',
        content: 'In Accessibility, click Text size and drag the slider right until the sample line is comfortable, then click Apply. This changes text only and leaves colors alone. Many people need this more than a filter.',
      },
      {
        title: 'Live with your choice for a few days',
        content: 'Keep the setting for two or three days before deciding. Eyes adjust, and a change that looks strange in the first minute often reads better by the second evening. Change one thing at a time so you know what helped.',
        tip: 'Quick Tip: On the same Accessibility page, Mouse pointer and touch lets you make the pointer bigger and change its color. A large black or yellow pointer is much easier to find on a busy screen.',
      },
    ],
  },
];
