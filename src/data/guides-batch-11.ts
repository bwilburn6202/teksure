// TekSure Guides Batch 11 — Phone battery, Windows recovery, Google account, app crashes, Chrome security (April 2026)
import type { Guide } from './guides';

export const guidesBatch11: Guide[] = [
  // ── PHONE TROUBLESHOOTING ────────────────────────────────────────────────────
  // Social: "Is your phone dying by noon? Apps are the #1 culprit — and there are five quick fixes that cost nothing."
  // Newsletter: "After iOS 18 and Android 15 updates, battery drain complaints shot up. Here are five settings changes that bring your battery life back — no new phone needed."
  {
    slug: 'why-is-my-phone-battery-dying-so-fast',
    title: 'Why Is My Phone Battery Dying So Fast? 5 Ways to Fix It',
    excerpt: 'Apps running in the background drain your battery silently. These five free fixes work on both iPhone and Android.',
    category: 'phone-guides',
    tags: ['battery', 'iPhone', 'Android', 'performance', 'settings'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-18',
    difficulty: 'Beginner',
    body: `A phone that loses charge quickly is one of the most common complaints people have — and it is almost always fixable without buying a new phone. The biggest culprits are apps running in the background when you are not using them, a screen that stays on too long or is too bright, and location services running all the time.

After Apple released iOS 18 and Google released Android 15, many users noticed faster battery drain. This often happens because apps re-sync their data after a major update. Making the five adjustments below usually brings battery life back to normal within a couple of days.

Your phone battery also gradually loses capacity as it ages. iPhones show you exactly how much original capacity is left: go to Settings → Battery → Battery Health and Charging. If it shows below 80%, replacing the battery at an Apple Store or authorized repair shop costs around $89 — much less than a new phone.`,
    steps: [
      {
        title: 'See which apps are draining your battery most',
        content: 'On iPhone, go to Settings → Battery. Scroll down to see a list of apps with percentages showing how much battery each one used in the last 24 hours or last 10 days. On Android, go to Settings → Battery → Battery Usage. Look for apps near the top of the list that you rarely use — those are the ones to fix first.',
        tip: 'If Facebook, Instagram, or TikTok appear near the top, try switching to the browser version of those sites instead of the app — browser versions use much less battery.',
      },
      {
        title: 'Turn off Background App Refresh',
        content: 'On iPhone, go to Settings → General → Background App Refresh. Tap "Background App Refresh" again at the top and select "Off." This stops apps from downloading new content when you are not looking at them. On Android, the setting is called "Background data" — go to Settings → Apps, tap an app, then tap "Mobile data" and turn off "Background data."',
        tip: 'You can turn Background App Refresh off for all apps at once on iPhone, or go app by app and only leave it on for apps you genuinely need fresh — like a news app you check every morning.',
      },
      {
        title: 'Lower screen brightness and shorten screen timeout',
        content: 'Your screen is the single biggest battery drain on any phone. On iPhone, swipe down from the top-right corner to open Control Center, then drag the brightness slider down to around 50%. On Android, swipe down from the top of the screen to find the brightness bar. For screen timeout (how long before your screen turns off on its own), go to Settings → Display → Screen Timeout and set it to 30 seconds or 1 minute.',
      },
      {
        title: 'Turn off location services for apps that do not need them',
        content: 'On iPhone, go to Settings → Privacy & Security → Location Services. Tap each app and choose "Never" or "While Using the App" — not "Always." Apps like games, recipe apps, and shopping apps have no reason to know where you are. On Android, go to Settings → Location → App Permissions and switch apps from "Allow all the time" to "Only while using the app."',
        tip: 'Weather apps only need your location "While Using" — they do not need it "Always." The same goes for most apps that request location.',
      },
      {
        title: 'Restart your phone once a week',
        content: 'A complete restart clears small processes that build up over time and quietly drain battery. On iPhone, press and hold the side button and either volume button, then slide to power off. Wait 30 seconds, then press the side button to turn it back on. On Android, press and hold the power button and tap Restart.',
        tip: `The Apple Support page for iPhone battery optimization is at support.apple.com/en-us/111840. For Android, Google's guide is at support.google.com — search "Android battery life tips."`,
      },
    ],
  },
  // Social: "If a Windows update this week threw up a 'recovery key' screen and you can't get in — here is the plain-English fix."
  // Newsletter: "Microsoft's April 2026 update (KB5083769) triggered BitLocker recovery screens on some Windows 11 PCs. If your computer is asking for a recovery key, here is exactly where to find it and how to get back in — no tech knowledge needed."
  {
    slug: 'windows-11-bitlocker-lockout-fix',
    title: 'Windows 11 Update Locked Me Out — How to Get Back In',
    excerpt: `Microsoft's April 2026 update triggered BitLocker screens on some PCs. Here is where to find your recovery key and get back in safely.`,
    category: 'windows-guides',
    tags: ['Windows 11', 'BitLocker', 'locked out', 'recovery key', 'update'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-18',
    difficulty: 'Beginner',
    body: `After installing Microsoft's April 14, 2026 security update (KB5083769), some Windows 11 computers started showing a blue screen asking for something called a "BitLocker recovery key." If this happened to you, your computer is not broken — it is asking for a security code to confirm you are the real owner.

BitLocker is a security feature built into Windows 11 that encrypts (scrambles) everything on your hard drive. If Windows detects an unusual change — like a major security update — it sometimes asks you to prove you are the owner before letting you in. The good news: if your computer was ever connected to a Microsoft account, your recovery key was saved automatically, and you can get it from another device.

Do not panic, and do not pay anyone who calls offering to help. This is a genuine issue Microsoft has acknowledged, and your data is safe. You need to find the key.`,
    steps: [
      {
        title: 'Look for your recovery key on another device',
        content: 'On a phone, tablet, or another computer, go to account.microsoft.com/devices/recoverykey and sign in with the same Microsoft account you use on your PC. If your key was saved there (most computers set up in the last five years do this automatically), you will see a 48-digit number next to your device name. Write it down.',
        tip: 'Not sure which Microsoft account? Look for any email from Microsoft confirming a past Windows setup or sign-in — it was sent to that account.',
      },
      {
        title: 'Type the recovery key on your locked computer',
        content: 'Back at your locked PC, the blue BitLocker screen has a box for you to enter the key. Type the 48-digit number exactly, including any dashes. The key is case-sensitive for letters, so type them exactly as shown. Press Enter or click Unlock.',
        warning: 'Do not call any number shown on the screen or in a pop-up offering BitLocker help. Scammers are using this issue to trick people into paying for "recovery services." The real fix is free and only needs your Microsoft account.',
      },
      {
        title: 'If you do not have a Microsoft account, check these other places',
        content: 'If your computer was set up without a Microsoft account, your recovery key might be: (1) printed and stored somewhere safe when Windows was first set up; (2) saved on a USB drive; (3) stored by your workplace IT department if it is a work computer. Check those places before assuming the key is lost.',
      },
      {
        title: 'If you cannot find the key anywhere',
        content: 'If the recovery key truly cannot be found, you will need to reset Windows — which removes all files from the drive. Before doing this, ask a trusted tech-savvy person or take the computer to a local repair shop to confirm the key really is gone. A reset should be a last resort only.',
        tip: `Microsoft's official support page for this issue is at support.microsoft.com — search for "find my BitLocker recovery key." Their support phone number is 1-800-642-7676 if you need to talk to someone.`,
      },
      {
        title: 'Once you are back in, run Windows Update again',
        content: 'After getting back into your computer, go to Start → Settings → Windows Update and check for updates. Microsoft has released a follow-up patch (KB5085516) that is intended to prevent the BitLocker screen from appearing again after the April update. Installing it now protects you from future lockouts.',
      },
    ],
  },
  // ── ACCOUNT RECOVERY ────────────────────────────────────────────────────────
  // Social: "Locked out of Gmail? Here is the step-by-step recovery process — including what to try if your phone number has changed."
  // Newsletter: "Getting locked out of a Google account is one of the most stressful tech moments people experience. Here is the complete step-by-step recovery guide — covering every scenario, including when your old phone number no longer works."
  {
    slug: 'get-back-into-locked-google-account',
    title: `Locked Out of Your Google Account? Here's How to Get Back In`,
    excerpt: 'Forgotten your Gmail password or lost access to your account? Follow these steps to recover it safely — even if your phone number changed.',
    category: 'essential-skills',
    tags: ['Google', 'Gmail', 'account recovery', 'password', 'locked out'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-18',
    difficulty: 'Beginner',
    body: `Getting locked out of your Google account — which also locks you out of Gmail, Google Photos, and YouTube — is one of the most stressful tech moments people face. The good news is that Google has multiple recovery options, and most people can get back in by following a few specific steps.

The hardest part is that Google's recovery process uses information from your past to verify you are who you say you are. It may ask for a recent password, the approximate month and year you created the account, or a backup email address. If you have any of those, your chances of recovery are very good.

A few important warnings: do not use any Google account recovery service you find in a search ad or pop-up. All legitimate Google account recovery is free and happens at accounts.google.com. There is no Google phone number that helps with account recovery — anyone calling to offer help is a scammer.`,
    steps: [
      {
        title: `Start Google's account recovery process`,
        content: `On any device with a browser, go to accounts.google.com/signin/recovery. Type your Gmail address and click Next. On the next screen, click "Forgot password?" This begins Google's step-by-step recovery process.`,
        tip: 'If possible, use the same device and browser you normally use for Gmail. Google recognizes familiar devices and is more likely to grant access without extra verification steps.',
      },
      {
        title: 'Try any password you have ever used for this account',
        content: 'Google will ask you to enter a password. Try your current password first, then any older ones you can remember — even a password from years ago counts. Google accepts any password you have used for the account in its history, not only the most recent one. This is the fastest recovery path.',
        tip: 'Check a password manager, a notes app, or an old notebook where you might have written passwords down.',
      },
      {
        title: 'Use a verification code if you have a backup phone or email',
        content: `If you can't remember any password, Google will offer to send a verification code. It might offer to send a text to your phone number or a code to a backup email address. If your phone number is still the same, choose the text option — a 6-digit code arrives in seconds. If you have a backup email (like a work or Yahoo address), choose that instead.`,
        warning: 'If your phone number has changed and you no longer have access to that number, skip this step. Do not get a new SIM card with the old number in order to receive this code — carriers cannot do this, and it will not work.',
      },
      {
        title: `Answer Google's security questions`,
        content: 'If you cannot use a code, Google will ask you questions: "When did you create this Google account?" (answer with the approximate month and year — you do not need to be exact), and "What email addresses have you used to sign in?" Answer as accurately as you can. Google is looking for reasonable answers, not perfect ones.',
      },
      {
        title: 'If nothing else works, try a trusted device',
        content: `If you are signed in to the Google account on another device — a tablet, an older phone, or a family member's computer — go to that device and try to recover from there. Google sends an approval prompt to devices already signed in, which bypasses most verification steps.`,
        tip: `Google's official account recovery help page is at support.google.com/accounts/answer/7682439. If you get stuck, this page walks through every possible recovery scenario step by step.`,
      },
    ],
  },
  // ── TROUBLESHOOTING ──────────────────────────────────────────────────────────
  {
    slug: 'why-does-my-app-keep-crashing-how-to-fix-it',
    title: `Why Does My App Keep Crashing? Here's How to Fix It`,
    excerpt: 'When apps freeze or crash on your phone or computer, these four quick fixes solve the problem most of the time — no tech skills needed.',
    category: 'how-to',
    tags: ['app crash', 'iPhone', 'Android', 'troubleshoot', 'fix'],
    readTime: '5 min',
    thumbnailEmoji: '',
    publishedAt: '2026-04-18',
    difficulty: 'Beginner',
    body: `When an app suddenly closes, freezes, or refuses to open, it almost always comes down to one of four causes: the app needs an update, its temporary data has gotten corrupted, your phone's memory is overloaded, or the app and your phone's operating system are out of sync after a recent update.

The good news is that these four fixes solve app crashes the vast majority of the time — and none of them delete your photos, contacts, or account information. You are clearing temporary files or doing a fresh restart.

Following Apple's iOS 18 release and Google's Android 15 update, many apps had trouble keeping up with the changes. App developers release updates to fix these compatibility issues — so the first thing to always try is checking whether there is an update waiting.`,
    steps: [
      {
        title: 'Force-close the app and reopen it',
        content: 'On iPhone, swipe up from the bottom of the screen (or double-press the Home button on older models) to see all your open apps. Find the crashed app and swipe it upward to close it. Wait five seconds, then tap the app icon to reopen it. On Android, tap the square or three-line button at the bottom to see open apps, then swipe the crashed app away. Reopen it fresh.',
        tip: 'Think of this like restarting a stuck program on a computer — closing it completely clears any glitch that built up while it was running.',
      },
      {
        title: 'Check for and install app updates',
        content: 'On iPhone, open the App Store and tap your profile picture in the top-right corner. Scroll down to see "Available Updates." If the crashing app appears there, tap "Update" next to it. On Android, open the Google Play Store, tap your profile picture, then tap "Manage apps & device" → "Updates available." Update the app that is crashing.',
        tip: 'Turn on automatic app updates so this happens in the background without you having to check. On iPhone: App Store → your profile → App Updates → turn on "App Updates." On Android: Play Store → your profile → Settings → Network Preferences → Auto-update apps.',
      },
      {
        title: `Clear the app's cache (Android only)`,
        content: 'On Android, go to Settings → Apps → tap the crashing app → Storage & Cache → tap "Clear Cache." This deletes temporary files the app stored — it does not delete your account, saved content, or settings. On iPhone, the equivalent is to delete and reinstall the app (see the next step) since iOS manages cache differently.',
        warning: 'Tap "Clear Cache" — not "Clear Data." Clearing data wipes the app back to a fresh install state and will log you out of your account.',
      },
      {
        title: 'Delete and reinstall the app',
        content: 'If clearing the cache did not help, delete the app and install it fresh. On iPhone, press and hold the app icon → "Remove App" → "Delete App." Then go to the App Store, search for the app, and tap the download icon. On Android, press and hold the app icon → "Uninstall." Then go to Google Play and reinstall it.',
        tip: `Your account information and saved content is usually stored on the company's servers, not on your phone — so reinstalling normally brings everything back when you sign in again. This applies to apps like Netflix, Amazon, Facebook, and Gmail. For games, your progress may be tied to your account if you are signed in, so check the game's settings before deleting.`,
      },
      {
        title: 'Restart your phone',
        content: 'If the app still crashes after reinstalling, restart your phone. This clears all temporary memory (RAM) and gives every app a clean start. On iPhone, hold the side button and a volume button → "slide to power off." Wait 30 seconds, then turn it back on. On Android, hold the power button → Restart.',
      },
    ],
  },
  // ── SECURITY ─────────────────────────────────────────────────────────────────
  // Social: "Google just found 60 security holes in Chrome — two of them serious. Here is how to check if your browser is already protected."
  // Newsletter: "Google confirmed 60 newly discovered security vulnerabilities in Chrome this week. The fix rolls out automatically, but can take days to reach your computer. Here is how to manually trigger the update in under 2 minutes."
  ];
