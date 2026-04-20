import { Guide } from './guides';

// Social: "Microsoft's April 2026 update locked thousands of Windows 11 users out with a blue screen. The fix takes 2 minutes and costs nothing — here's exactly what to do."
// Newsletter: "The April 2026 Windows 11 update (KB5083769) accidentally triggered BitLocker on some PCs — locking users out with a recovery key screen. The real fix is free. Here's the step-by-step guide."
// Social: "Don't pay anyone who calls offering to help with the Windows 11 BitLocker lockout. The fix is free. Here's how to do it yourself in under 5 minutes."

// Social: "iPhone says 'Not Enough Storage' to update — but deleting photos feels scary. Here's how to clear space safely without losing anything."
// Newsletter: "A critical iOS 18 security update is sitting uninstalled on millions of iPhones because of storage warnings. Here's how to make room for the update in 5 minutes — without losing photos."

// Social: "Gmail suddenly stopped loading in Outlook or Apple Mail? Google changed how sign-ins work. Here's the free fix that takes 3 minutes."
// Newsletter: "If Gmail stopped working in Outlook or Apple Mail, Google's 2024 authentication change is likely why. Re-adding your account takes 3 minutes and fixes it for good."

// Social: "Locked out of your Google or Microsoft account after a device change? Don't panic — here's the fastest way back in."
// Newsletter: "Password lockouts spike every time a major OS update ships. Here's the step-by-step account recovery process for Google, Microsoft, and Apple — bookmark it before you need it."

// Social: "Is your iPhone battery draining unusually fast after an update? Here's why it happens and what actually helps."
// Newsletter: "Battery drain after an iOS update is normal for 24–48 hours — your iPhone is reindexing. If it lasts longer, one of these free fixes almost always resolves it."

export const guidesBatch95: Guide[] = [
  {
    slug: 'fix-windows-11-bitlocker-recovery-screen-2026',
    title: 'Windows 11 Update Showed a BitLocker Recovery Screen — Here Is the Free Fix',
    excerpt: 'If Microsoft\'s April 2026 update locked your PC with a blue BitLocker screen asking for a 48-digit key, the key is stored free in your Microsoft account. Here\'s how.',
    category: 'windows-guides',
    tags: ['windows 11', 'bitlocker', 'recovery key', 'locked out', 'update', 'KB5083769'],
    readTime: '6 min',
    thumbnailEmoji: '🔑',
    publishedAt: '2026-04-20',
    difficulty: 'Beginner',
    body: `After Microsoft's April 2026 Patch Tuesday update (KB5083769), some Windows 11 computers started showing a blue "BitLocker Recovery" screen before Windows loads. The screen asks you to type a 48-digit recovery key. If this happened to you, do not panic — your computer is not broken and all your files are safe. The fix is free and takes about 5 minutes.

Here is what happened: Windows has a security feature called BitLocker that encrypts your data to protect it if your laptop is ever lost or stolen. Normally BitLocker runs silently in the background. The April 2026 update accidentally triggered a security check that BitLocker treats as a sign of unauthorized hardware changes — so it locked the drive as a precaution.

The recovery key is the only way past this screen. Microsoft stores a copy of your recovery key in your Microsoft account automatically when BitLocker is first set up on most computers sold with Windows 11. You access it from any other device — your phone, a tablet, or another computer.

One important warning: if anyone calls you offering to help fix this problem for a fee, hang up immediately. The real fix is completely free and takes two minutes. Scammers are actively targeting people who have been locked out by this update.

After you are back in, Microsoft has released a follow-up update that prevents this from happening again. Install it as soon as you are logged in.`,
    steps: [
      {
        title: 'Write down what you see on the blue screen',
        content: 'Before you reach for your phone, note the Recovery Key ID shown on the blue BitLocker screen — it is a short code that looks like "A1B2-C3D4." You will need this to match the correct key in your Microsoft account if you have multiple devices.',
        tip: 'Quick Tip: Take a photo of the blue screen with your phone so you have the Recovery Key ID handy.',
      },
      {
        title: 'Find your BitLocker recovery key using another device',
        content: 'On your phone, tablet, or another computer, open a web browser and go to account.microsoft.com. Sign in with the same Microsoft account you use on the locked computer (the email address and password you use to sign into Windows). Once signed in, tap or click "Devices" in the left menu, then look for "BitLocker data recovery" or "View recovery key." Your 48-digit recovery key will appear — it looks like groups of numbers separated by dashes.',
        tip: 'Quick Tip: Microsoft\'s official BitLocker recovery page is at support.microsoft.com/en-us/windows/bitlocker — bookmark it so you can find it quickly.',
      },
      {
        title: 'Enter the 48-digit recovery key on the locked computer',
        content: 'Go back to the locked computer. Use your keyboard to type the 48-digit recovery key exactly as shown in your Microsoft account. The key entry field is separated into groups of six digits — type them in order. When you finish entering all 48 digits, press Enter or click the Continue button. Windows will unlock and boot normally.',
        warning: 'Type slowly and carefully. The recovery screen does not show you what you are typing, so it helps to read the digits in groups of six.',
      },
      {
        title: 'Install the follow-up fix from Windows Update',
        content: 'Once you are logged in to Windows, install the latest update to prevent this happening again. Click the Start button → Settings → Windows Update → Check for updates. Download and install any updates that appear, then restart your computer. Microsoft released a follow-up patch that addresses the April 2026 BitLocker trigger.',
      },
      {
        title: 'Save your recovery key in a safe place for the future',
        content: 'Now that you know where your BitLocker recovery key lives, it is worth writing it down and keeping a printed copy somewhere safe — a home safe, a locked drawer, or with your other important documents. You can view it any time at account.microsoft.com → Devices. Knowing where it is means you will not be locked out for long if this ever happens again.',
      },
    ],
  },
  {
    slug: 'fix-iphone-battery-drain-after-update',
    title: 'iPhone Battery Draining Fast After an Update? Here Is How to Fix It',
    excerpt: 'It\'s normal for an iPhone to use extra battery for 24–48 hours after a big iOS update while it catches up on background tasks. Here\'s what to do if it doesn\'t improve.',
    category: 'phone-guides',
    tags: ['iphone', 'battery', 'ios update', 'battery drain', 'fix', 'slow phone'],
    readTime: '6 min',
    thumbnailEmoji: '🔋',
    publishedAt: '2026-04-20',
    difficulty: 'Beginner',
    body: `After any major iPhone update, it is completely normal for your battery to drain faster than usual for the first day or two. Your iPhone has a lot of work to do after an update — it rebuilds its search index, re-downloads cached content, checks for compatibility with your apps, and reoptimizes your photos. All of this happens in the background, and it uses extra battery while it runs.

If your battery is still draining unusually fast after 48 hours, something else is likely going on. The most common causes are an app that started misbehaving after the update, a background process that got stuck, or a setting that the update changed without you noticing.

The good news is that most iPhone battery problems after an update are fixed by one of a handful of free steps — no trips to the Apple Store needed in most cases.

If you check your Battery settings and notice one specific app is using a surprisingly large percentage of your battery, that app is the most likely culprit. Try deleting and reinstalling it. Many apps have their own updates released alongside iOS updates to stay compatible, and installing those app updates often fixes the battery drain.`,
    steps: [
      {
        title: 'Wait 24–48 hours after the update before troubleshooting',
        content: 'Give your iPhone time to finish its background work after a big update. Plug it in to charge at night as usual. If battery life is still noticeably worse after a full 48 hours, move on to the steps below.',
      },
      {
        title: 'Check which apps are using the most battery',
        content: 'Go to Settings → Battery. Scroll down to see a list of apps with their battery usage percentage for the last 24 hours and the last 10 days. If one app is using a disproportionate amount — for example, 50% or more — that app is the main problem. Tap the app name to see whether the usage is from time on screen or time in the background. High background time means the app is active even when you are not using it.',
        tip: 'Quick Tip: If you see an app called "Background App Refresh" using a lot of battery, see Step 3.',
      },
      {
        title: 'Turn off Background App Refresh for apps that don\'t need it',
        content: 'Go to Settings → General → Background App Refresh. You will see a list of every app on your phone with a toggle. Turn off Background App Refresh for apps that do not need to update in the background — games, shopping apps, and entertainment apps generally do not need this. Leave it on for apps you actually need real-time updates from, like Messages or your email.',
      },
      {
        title: 'Update all your apps',
        content: 'Open the App Store and tap your profile picture in the top right corner. Scroll down to see apps with available updates. Tap "Update All" to install them all at once. App developers release compatibility updates alongside new iOS versions — installing these often resolves battery issues caused by apps that had not been updated for the new iOS version.',
        tip: 'Quick Tip: You can turn on automatic app updates so this happens without you thinking about it: Settings → App Store → App Updates → toggle on.',
      },
      {
        title: 'Check your battery health',
        content: 'Go to Settings → Battery → Battery Health & Charging. Look at the Maximum Capacity percentage. A brand-new battery starts at 100%. Below 80% means your battery has aged significantly and may no longer hold a full charge — this is when genuine battery life problems begin. Apple will replace the battery at the Apple Store or an authorized repair shop. The service takes about an hour and costs $89 for most iPhone models.',
        tip: 'Quick Tip: Apple\'s official battery service info is at support.apple.com/iphone/repair. You can also schedule an appointment at any Apple Store via the Apple Support app.',
      },
      {
        title: 'Try a soft reset if the problem persists',
        content: 'A soft reset clears the phone\'s memory without deleting any of your data. On iPhone 8 and newer: press and quickly release Volume Up, press and quickly release Volume Down, then press and hold the Side button until you see the Apple logo. Your phone restarts fresh. On iPhone 7: hold the Volume Down button and the Sleep/Wake button together for 10 seconds until you see the Apple logo.',
      },
    ],
  },
  {
    slug: 'fix-iphone-not-enough-storage-to-update',
    title: 'iPhone Says "Not Enough Storage" to Update? Here Is How to Free Up Space',
    excerpt: 'Your iPhone needs free space to download and install iOS updates. These steps will clear enough room in minutes without permanently deleting your photos.',
    category: 'phone-guides',
    tags: ['iphone', 'storage full', 'ios update', 'not enough space', 'free up storage', 'icloud'],
    readTime: '7 min',
    thumbnailEmoji: '📦',
    publishedAt: '2026-04-20',
    difficulty: 'Beginner',
    body: `When your iPhone tells you there is not enough storage to install an update, it can feel like a catch-22 — you need space to update, but you need to update to stay safe. The good news is you almost always have more space than you think, and there are several ways to free up enough room for any iOS update without permanently losing your photos or contacts.

iOS updates typically need between 500MB and 2.5GB of free space to download and install. If your phone is nearly full, you may need to temporarily free up some room even though the update itself will not permanently increase your phone's storage use.

The single biggest space-saver for most people is photos and videos. If your photos are backed up to iCloud, Google Photos, or another cloud service, you can remove them from your phone without losing them — they will still be accessible through the Photos app (they will just download from the cloud when you open them instead of being stored on your phone).

If clearing space on your phone does not work, there is an alternative method: update your iPhone through a computer using iTunes (Windows) or Finder (Mac). This method does not require the phone to have free space for the update because the computer handles the download.`,
    steps: [
      {
        title: 'Check how much space you need and how much you have',
        content: 'Go to Settings → General → iPhone Storage. At the top you will see a colored bar showing how your storage is used: System, Apps, Photos, Messages, and Other. The number in gray at the right of the bar shows how much free space remains. When an update fails, note what size the update is — you can see this in Settings → General → Software Update next to the update name.',
      },
      {
        title: 'Turn on iCloud Photos to offload photos to the cloud',
        content: 'If you do not already use iCloud Photos, go to Settings → Photos → iCloud Photos and turn it on. Your photos will upload to iCloud and the high-resolution originals will be replaced with smaller previews on your phone, freeing up significant storage. The photos are not deleted — they are fully accessible in your Photos app whenever you have Wi-Fi.',
        tip: 'Quick Tip: iCloud storage starts free at 5GB, which fills quickly. 50GB of storage costs 99 cents per month and is enough for most people\'s photo libraries.',
      },
      {
        title: 'Review and delete the largest items on your phone',
        content: 'Go to Settings → General → iPhone Storage. Your apps are listed from largest to smallest. Tap any app to see options — for apps you have not used in months, tap "Delete App." Your iPhone also shows "Recommendations" near the top of this screen — suggestions like "Review Large Attachments," "Offload Unused Apps," and "Review Personal Videos" that can quickly free up significant space. Tap each recommendation to review what it will remove.',
      },
      {
        title: 'Delete message attachments from large group chats',
        content: 'Open your Messages app and look for large group chats or conversations with lots of photos and videos. Tap and hold a conversation, then tap "Delete" to remove the whole conversation, including all attachments. Alternatively, open a conversation, tap the person\'s name or icon at the top, scroll down, and tap "See All Photos" — you can select and delete old photos without deleting the conversation.',
      },
      {
        title: 'Clear your browser cache',
        content: 'Safari stores website data that takes up space over time. Go to Settings → Safari → Clear History and Website Data, then tap "Clear History and Data." This removes cached websites and browsing history. If you use Chrome instead, open Chrome → tap the three dots in the bottom right → Settings → Privacy → Clear Browsing Data.',
      },
      {
        title: 'Update your iPhone through a computer if storage is still low',
        content: 'This method bypasses the on-device storage requirement entirely. On a Mac running macOS Catalina or later: connect your iPhone with a USB cable, open Finder, click your iPhone in the left sidebar, and click "Check for Update." On a Windows PC: connect your iPhone, open iTunes, click the phone icon at the top, and click "Check for Update." The computer downloads the update itself and installs it directly to your iPhone.',
        tip: 'Quick Tip: Apple\'s official guide to updating via computer is at support.apple.com — search "update iPhone using Finder" for Mac or "update iPhone using iTunes" for Windows.',
      },
    ],
  },
  {
    slug: 'fix-gmail-not-working-in-outlook-apple-mail',
    title: 'Gmail Stopped Working in Outlook or Apple Mail? Here Is How to Fix It',
    excerpt: 'If Gmail suddenly stopped syncing in Outlook or Apple Mail, Google\'s updated sign-in requirement is likely why. Re-adding your account takes about 3 minutes.',
    category: 'app-guides',
    tags: ['gmail', 'outlook', 'apple mail', 'email', 'not working', 'fix', 'google account'],
    readTime: '7 min',
    thumbnailEmoji: '📧',
    publishedAt: '2026-04-20',
    difficulty: 'Beginner',
    body: `If Gmail suddenly stopped loading, sending, or syncing in Outlook, Apple Mail, or another email program on your phone or computer, the most likely reason is a change Google made to how Gmail accounts log in to third-party apps.

Google used to allow email apps to sign in to Gmail using a username and password the same way a person would. Starting in 2024, Google ended this older method — called Basic Authentication — and now requires all apps to use a newer, more secure sign-in system called OAuth 2.0. Apps that have not been updated to use this system will simply stop connecting to Gmail.

The fix is not complicated. You remove your Gmail account from the email app and add it back again. When you add it back, the app will use the correct, updated sign-in method and connect to Gmail successfully.

This is not a problem with your Google account, and nothing is wrong with your Gmail itself. You can still access all your email normally at gmail.com or through the Gmail app on your phone. The issue is only with third-party email programs.`,
    steps: [
      {
        title: 'Check that your Gmail is working normally first',
        content: 'Open your web browser and go to gmail.com. Sign in if needed. If your email loads normally here, your Gmail account is fine — the problem is with the connection between Gmail and your email app. If you cannot sign in to gmail.com either, go to accounts.google.com and follow the prompts to recover your account.',
      },
      {
        title: 'Re-add Gmail in Microsoft Outlook on your phone',
        content: 'Open the Outlook app. Tap the three horizontal lines (≡) in the top left → Settings (gear icon) → tap your Gmail account → Remove Account. Then tap the plus (+) icon to add an account → select Google → sign in with your Google account credentials. Outlook will open a Google sign-in page where you approve the connection. This uses the new sign-in method and should restore full Gmail access.',
        tip: 'Quick Tip: Make sure you have the latest version of Outlook installed — old versions of Outlook do not support Google\'s updated sign-in. Update Outlook through the App Store (iPhone) or Google Play Store (Android) first.',
      },
      {
        title: 'Re-add Gmail in Apple Mail on iPhone or iPad',
        content: 'Go to Settings → Mail → Accounts → tap your Gmail account → Delete Account. Then go back to Settings → Mail → Accounts → Add Account → Google. Sign in with your Google email and password — Apple Mail will open a Google sign-in page where you authorize access. Your email will start syncing within a few minutes.',
      },
      {
        title: 'Re-add Gmail in Apple Mail on a Mac',
        content: 'Open the Mail app. Click Mail in the menu bar → Settings → Accounts → select your Gmail account → click the minus (−) button to remove it. Then click the plus (+) button → Google → sign in with your Google account. Follow the prompts to authorize Apple Mail. Your inbox will begin re-downloading shortly.',
        tip: 'Quick Tip: If you use Gmail on a Mac and want fewer sync problems in the future, the Gmail app at mail.google.com in your browser is the most reliable option for Gmail — it is always fully compatible with Google\'s latest sign-in requirements.',
      },
      {
        title: 'Re-add Gmail in Microsoft Outlook on a PC',
        content: 'Open the Outlook desktop app. Click File → Account Settings → Account Settings → select your Gmail account → Remove. Then click New → Email Account → enter your name and Gmail address → click Connect. Outlook will open a browser window for Google sign-in — complete the sign-in and grant Outlook permission. Outlook will connect and begin syncing your inbox.',
      },
      {
        title: 'Turn on two-step verification if you haven\'t already',
        content: 'While you are managing your Google account settings, this is a good time to turn on two-step verification if you have not done so. Go to myaccount.google.com → Security → 2-Step Verification → Get started. This adds a second check when signing in from a new device, which helps protect your Gmail from unauthorized access.',
        tip: 'Quick Tip: Google\'s official help page for connecting Gmail to other email apps is at support.google.com/mail/answer/7126229.',
      },
    ],
  },
  {
    slug: 'locked-out-google-microsoft-account-recovery',
    title: 'Locked Out of Your Google or Microsoft Account? Here Is How to Get Back In',
    excerpt: 'A forgotten password or failed two-factor sign-in can lock you out of your email and apps. These steps walk you through account recovery for Google, Microsoft, and Apple.',
    category: 'troubleshooting',
    tags: ['account recovery', 'forgot password', 'locked out', 'google account', 'microsoft account', 'apple id', 'two-factor'],
    readTime: '8 min',
    thumbnailEmoji: '🔐',
    publishedAt: '2026-04-20',
    difficulty: 'Beginner',
    body: `Getting locked out of an email account — especially after a phone upgrade or a forgotten password — is one of the most common tech problems people face. The lock is frightening because so many other services depend on your email: bank notifications, medical apps, shopping accounts, and social media all use your email address to verify who you are.

The good news is that Google, Microsoft, and Apple all have account recovery processes specifically designed to get you back in even if you have forgotten your password and cannot access the two-factor verification method they normally send a code to.

The process works by verifying your identity through other means — backup email addresses, phone numbers, trusted devices, or security questions you set up when you first created the account. The more of these backup verification methods you have, the easier recovery will be.

If you cannot get back in through the standard recovery process, all three companies offer a manual identity verification option — often called an account recovery form — where a support team reviews your case and may restore access after verifying your identity in other ways. This process can take a few days.

After you recover your account, the single most important thing you can do is add backup recovery methods so you are not in this situation again: a backup email address, a verified phone number, and saved recovery codes.`,
    steps: [
      {
        title: 'Recover a Google (Gmail) account',
        content: 'On any device, go to accounts.google.com/signin/recovery. Enter the email address you are trying to recover. Google will ask you to verify your identity using methods you set up when you created your account — a backup email address, a phone number that can receive a text message, or a phone that is already signed in to your Google account. Follow the prompts for whichever method is available to you.',
        tip: 'Quick Tip: If none of the standard options work, Google offers an account recovery form at accounts.google.com/signin/v2/recoveryidentifier. You will be asked to confirm details about your account — the more accurately you can answer, the better your chances. Google\'s help page for account recovery is at support.google.com/accounts/answer/7682439.',
      },
      {
        title: 'Recover a Microsoft (Outlook, Hotmail, Live) account',
        content: 'Go to account.live.com/acsr — this is Microsoft\'s Account Recovery page. Enter your email address and the CAPTCHA, then click Next. Microsoft will offer options to verify your identity including a code sent to a backup email, a code sent to a phone number, or a trusted device that is already signed in. Complete whichever method is available.',
        tip: 'Quick Tip: Microsoft\'s recovery page is at support.microsoft.com/account-recovery. If automated options fail, look for "I don\'t have any of these" to start a manual review.',
      },
      {
        title: 'Recover an Apple ID account',
        content: 'Go to iforgot.apple.com. Enter your Apple ID (your email address) and click Continue. Apple will try to verify you using a trusted phone number or a trusted device that is already signed in to your Apple ID. If you have a trusted iPhone or iPad nearby, Apple can send a reset notification directly to that device. If you have none of these, Apple offers an account recovery process that may take several days and requires you to confirm personal information.',
      },
      {
        title: 'Use a trusted device you are already signed in to',
        content: 'This is often the fastest recovery method. If you have another phone, tablet, or computer where you are already signed into the account, use it to change your password from within the account settings. For Google: go to myaccount.google.com → Security → Password. For Microsoft: go to account.microsoft.com → Security → Change password. For Apple: go to Settings → tap your name → Password & Security → Change Password.',
      },
      {
        title: 'Contact support as a last resort',
        content: 'If automated recovery fails: Google support is at support.google.com/accounts/gethelp. Microsoft phone support is 1-800-642-7676 (Monday–Friday, 6 AM–10 PM Pacific). Apple phone support is 1-800-275-2273 (available 24 hours). Be prepared to verify your identity — they may ask for purchase history, account creation details, or other information tied to the account.',
        warning: 'Only contact support through official phone numbers or websites you find yourself. Do not call any phone number given to you in an email, a pop-up, or a search ad — those are often scam numbers targeting people who are locked out of accounts.',
      },
      {
        title: 'Secure your account after getting back in',
        content: 'Once you have access again, take 10 minutes to add backup methods so recovery is faster next time. Add a backup email address, verify a phone number, and for Google and Apple, save a set of one-time recovery codes and store them somewhere safe. Turn on two-factor verification if it was not already on. Check "Recent activity" or "Security events" in your account settings to confirm no unauthorized sign-ins occurred while you were locked out.',
        tip: 'Quick Tip: Google\'s account security checkup is at myaccount.google.com/security-checkup. Microsoft\'s is at account.microsoft.com/security. Running these takes about 3 minutes and flags any issues.',
      },
    ],
  },
];
