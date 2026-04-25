import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, ExternalLink, Lock, CheckCircle2, ArrowLeft,
  Facebook, Apple, Smartphone, Globe, Info, BookOpen,
} from 'lucide-react';

/* ── Types ─────────────────────────────────────── */
interface PrivacyCheck {
  id: string;
  label: string;
  where: string;         // Plain-English path like "Settings > Privacy > Face ID"
  link?: string;         // Direct https:// link when available
  why: string;           // 2–3 sentences on why it matters
}

interface ServiceSection {
  id: 'facebook' | 'google' | 'apple' | 'iphone' | 'android';
  title: string;
  tagline: string;
  icon: React.ElementType;
  color: string;          // Tailwind classes for the tile background
  guide?: { label: string; to: string };
  checks: PrivacyCheck[];
}

/* ── Service data ──────────────────────────────── */
const SERVICES: ServiceSection[] = [
  /* ── Facebook ───────────────────────────────── */
  {
    id: 'facebook',
    title: 'Facebook',
    tagline: '12 settings that lock down your profile',
    icon: Facebook,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    guide: { label: 'Read our Facebook safety guide', to: '/guides' },
    checks: [
      {
        id: 'fb-future-posts',
        label: 'Set "Who can see your future posts?" to Friends (not Public)',
        where: 'Settings & Privacy > Settings > Privacy > Your Activity',
        link: 'https://www.facebook.com/settings?tab=privacy',
        why:
          'By default, Facebook posts are often Public — meaning strangers can see everything you share. Setting this to Friends means only people you have accepted see your photos and updates.',
      },
      {
        id: 'fb-limit-old',
        label: 'Limit old posts to friends only (one-click cleanup)',
        where: 'Settings > Privacy > Your Activity > Limit Past Posts',
        link: 'https://www.facebook.com/settings?tab=privacy',
        why:
          'Years of old posts may still be Public even after you change the default. This one button makes every post from the past "Friends only" in a single click — so things you shared 10 years ago stop being visible to strangers.',
      },
      {
        id: 'fb-tag-review',
        label: 'Turn on "Review tags before they appear on your profile"',
        where: 'Settings > Profile and Tagging > Reviewing',
        link: 'https://www.facebook.com/settings?tab=timeline',
        why:
          'Without tag review, anyone can tag you in a photo — even an embarrassing or fake one — and it appears on your profile immediately. With review on, you approve each tag first.',
      },
      {
        id: 'fb-lookup',
        label: 'Limit who can look you up by email or phone number',
        where: 'Settings > Privacy > How People Find and Contact You',
        link: 'https://www.facebook.com/settings?tab=privacy',
        why:
          'If this is set to Everyone, anyone with your phone number can find your full profile. Setting it to Friends or Friends of Friends makes it much harder for strangers and scammers to identify you.',
      },
      {
        id: 'fb-face-rec',
        label: 'Turn off Face Recognition',
        where: 'Settings > Face Recognition',
        link: 'https://www.facebook.com/settings?tab=facerec',
        why:
          'Face Recognition lets Facebook automatically identify you in photos other people upload. Turning it off means Facebook will not scan photos for your face or suggest tags of you to others.',
      },
      {
        id: 'fb-off-activity',
        label: 'Clear and turn off "Off-Facebook activity"',
        where: 'Settings > Your Facebook Information > Off-Facebook Activity',
        link: 'https://www.facebook.com/off_facebook_activity/',
        why:
          'Other websites and apps send your activity to Facebook (what you shop for, what articles you read). Clearing this history and disconnecting future activity stops Facebook from tracking you across the internet.',
      },
      {
        id: 'fb-ads',
        label: 'Review ad preferences and clear ad categories',
        where: 'Settings > Ads > Ad Preferences',
        link: 'https://www.facebook.com/adpreferences/',
        why:
          'Facebook builds a detailed profile of your interests for advertisers — including health topics, politics, and finances. Clearing these categories means ads become less targeted and your interest list stays private.',
      },
      {
        id: 'fb-apps',
        label: 'Remove apps and websites you no longer use',
        where: 'Settings > Apps and Websites',
        link: 'https://www.facebook.com/settings?tab=applications',
        why:
          'Every app you have ever logged into with Facebook still has access to your profile data — even ones you have not opened in years. Removing old ones cuts off that access immediately.',
      },
      {
        id: 'fb-login-alerts',
        label: 'Turn on login alerts from unrecognized devices',
        where: 'Settings > Security and Login > Setting Up Extra Security',
        link: 'https://www.facebook.com/settings?tab=security',
        why:
          'If someone tries to log in from a phone or computer Facebook has never seen, you will get an email or text right away. This is often the first warning sign of a hacked account.',
      },
      {
        id: 'fb-sessions',
        label: 'Review active sessions — log out of anything you do not recognize',
        where: 'Settings > Security and Login > Where You Are Logged In',
        link: 'https://www.facebook.com/settings?tab=security',
        why:
          'This shows every phone, computer, and tablet currently signed into your account. If you see a device or location you do not recognize — log it out immediately and change your password.',
      },
      {
        id: 'fb-lock',
        label: 'Lock your profile (optional — strongest setting)',
        where: 'Profile > three-dot menu > Lock Profile',
        link: 'https://www.facebook.com/help/196419427651178',
        why:
          'Locking your profile hides everything from non-friends — photos, posts, even your About info. This is the strongest privacy setting on Facebook and a great choice if you mostly use it to keep up with family.',
      },
      {
        id: 'fb-2fa',
        label: 'Turn on Two-Factor Authentication (2FA)',
        where: 'Settings > Security and Login > Two-Factor Authentication',
        link: 'https://www.facebook.com/security/2fac/settings',
        why:
          'Even if a scammer steals your password, 2FA blocks them — they would also need the code texted to your phone. This is the single most effective thing you can do to protect your account.',
      },
    ],
  },

  /* ── Google ─────────────────────────────────── */
  {
    id: 'google',
    title: 'Google',
    tagline: '15 checks across Gmail, YouTube, Maps, and your Google Account',
    icon: Globe,
    color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
    guide: { label: 'Google Account safety guide', to: '/guides' },
    checks: [
      {
        id: 'g-checkup',
        label: 'Run the Google Privacy Checkup (guided tour)',
        where: 'myaccount.google.com/privacycheckup',
        link: 'https://myaccount.google.com/privacycheckup',
        why:
          'Google\'s own Privacy Checkup walks you through the most important settings in a few minutes. It is a great first stop before diving into individual controls.',
      },
      {
        id: 'g-web-activity',
        label: 'Web & App Activity — turn off OR set to auto-delete',
        where: 'myaccount.google.com > Data & Privacy > Web & App Activity',
        link: 'https://myaccount.google.com/activitycontrols',
        why:
          'This is a record of every Google search, Chrome website, and Google-app interaction you have ever had. Auto-deleting after 3 months keeps search suggestions working while removing old data.',
      },
      {
        id: 'g-location',
        label: 'Location History — turn off OR auto-delete after 3 months',
        where: 'myaccount.google.com > Data & Privacy > Location History',
        link: 'https://myaccount.google.com/activitycontrols',
        why:
          'Google builds a map of every place you have been with your phone — including home, work, and doctors. Most people do not need this saved forever; turning it off or setting auto-delete protects your movement history.',
      },
      {
        id: 'g-youtube',
        label: 'Review YouTube History settings',
        where: 'myaccount.google.com > Data & Privacy > YouTube History',
        link: 'https://myaccount.google.com/activitycontrols',
        why:
          'YouTube watch history tells Google (and anyone who gets access to your account) what you have been watching — including health, relationship, or political videos. Auto-delete or pause keeps this list shorter.',
      },
      {
        id: 'g-ads',
        label: 'Turn off Ad Personalization',
        where: 'myaccount.google.com > Data & Privacy > My Ad Center',
        link: 'https://myadcenter.google.com/',
        why:
          'With this on, Google builds a profile of your likely interests, age, and income to target ads. Turning it off means you will still see ads, but they will not follow you around based on your search history.',
      },
      {
        id: 'g-apps',
        label: 'Review connected apps — remove anything you do not use',
        where: 'myaccount.google.com > Security > Your Connections to Third-Party Apps',
        link: 'https://myaccount.google.com/permissions',
        why:
          'Every app you have ever "Signed in with Google" on still has permission to see parts of your account. Removing old ones cuts their access, which matters if any of those services later get hacked.',
      },
      {
        id: 'g-2fa',
        label: 'Turn on 2-Step Verification',
        where: 'myaccount.google.com > Security > 2-Step Verification',
        link: 'https://myaccount.google.com/signinoptions/two-step-verification',
        why:
          'Your Google account is probably your most important one — it resets almost every other password. 2-Step Verification means a stolen password alone is not enough to log in.',
      },
      {
        id: 'g-password-checkup',
        label: 'Run Password Checkup (find leaked and weak passwords)',
        where: 'passwords.google.com',
        link: 'https://passwords.google.com/checkup',
        why:
          'Google compares your saved passwords against known data breaches. If any of yours have leaked or are reused across sites, this tool tells you exactly which ones to change first.',
      },
      {
        id: 'g-security-events',
        label: 'Review recent security events',
        where: 'myaccount.google.com > Security > Recent Security Activity',
        link: 'https://myaccount.google.com/notifications',
        why:
          'This is a list of every login, password change, and device added — with dates and locations. If you see something you did not do, that is a serious warning sign.',
      },
      {
        id: 'g-backup-codes',
        label: 'Download or print backup codes (in case you lose your phone)',
        where: 'myaccount.google.com > Security > 2-Step Verification > Backup Codes',
        link: 'https://myaccount.google.com/signinoptions/two-step-verification',
        why:
          'If your phone is ever lost, stolen, or broken, you need another way into your Google account. Backup codes are one-time passwords on paper — keep them somewhere safe like a home safe or wallet.',
      },
      {
        id: 'g-inactive',
        label: 'Set up Inactive Account Manager (trusted contact)',
        where: 'myaccount.google.com > Data & Privacy > Inactive Account Manager',
        link: 'https://myaccount.google.com/inactive',
        why:
          'This lets you choose someone to receive your emails, photos, and data if you stop using your account for a long time. It is a simple digital-legacy step that protects your family.',
      },
      {
        id: 'g-spam',
        label: 'Check that Gmail spam filter is catching junk',
        where: 'Gmail > Spam folder (left menu)',
        link: 'https://mail.google.com/mail/u/0/#spam',
        why:
          'Glance at your spam folder every month or so. If real emails from friends are landing there — or scam emails are getting to your inbox — your filter needs training by marking things correctly.',
      },
      {
        id: 'g-photos-face',
        label: 'Google Photos — decide on face grouping',
        where: 'Google Photos > Profile > Photos settings > Group similar faces',
        link: 'https://photos.google.com/settings',
        why:
          'Google Photos can group photos by who is in them — which is handy but involves Google analyzing faces. Some people prefer to turn this off if they share photos with many others.',
      },
      {
        id: 'g-maps-timeline',
        label: 'Review Maps Timeline — delete old locations if needed',
        where: 'timeline.google.com',
        link: 'https://www.google.com/maps/timeline',
        why:
          'Your Timeline is a detailed log of every trip you have taken with your phone — home, work, doctors, anyone you visited. Review it, and delete anything sensitive you do not want stored.',
      },
      {
        id: 'g-assistant',
        label: 'Delete Google Home / Assistant voice recordings',
        where: 'myactivity.google.com > Filter by "Assistant" > Delete',
        link: 'https://myactivity.google.com/product/assistant',
        why:
          'Every time you have said "Hey Google," a recording was saved. You can delete all of them and also turn off voice saving so new recordings are not kept.',
      },
    ],
  },

  /* ── Apple ID ───────────────────────────────── */
  {
    id: 'apple',
    title: 'Apple ID',
    tagline: '12 settings across account recovery and privacy',
    icon: Apple,
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
    guide: { label: 'Apple ID setup guide', to: '/guides' },
    checks: [
      {
        id: 'a-2fa',
        label: 'Two-Factor Authentication (2FA) is on',
        where: 'Settings > [your name] > Sign-In & Security',
        link: 'https://account.apple.com',
        why:
          'With 2FA, a stolen password alone cannot get into your Apple ID — a six-digit code is sent to a trusted device. This protects your photos, iCloud, and every Apple purchase.',
      },
      {
        id: 'a-trusted-devices',
        label: 'Review Trusted Devices — remove anything you do not own anymore',
        where: 'Settings > [your name] > scroll to device list',
        link: 'https://account.apple.com',
        why:
          'Old phones and iPads you sold or gave away may still be trusted. Removing them stops them from receiving your 2FA codes or signing in again.',
      },
      {
        id: 'a-emergency',
        label: 'Set up Emergency Contacts (Medical ID)',
        where: 'Health app > your profile > Medical ID > Emergency Contacts',
        why:
          'Emergency Contacts can be called from the lock screen and are shown on the screen to first responders. This is a genuine safety feature if you are ever hurt.',
      },
      {
        id: 'a-recovery',
        label: 'Set up a Recovery Key or Recovery Contact',
        where: 'Settings > [your name] > Sign-In & Security > Account Recovery',
        link: 'https://support.apple.com/en-us/102641',
        why:
          'If you ever forget your password AND lose access to trusted devices, Apple cannot recover your account without one of these. This is your insurance policy against being permanently locked out.',
      },
      {
        id: 'a-biometrics',
        label: 'Face ID or Touch ID is enabled',
        where: 'Settings > Face ID & Passcode (or Touch ID & Passcode)',
        why:
          'Biometrics are faster and more secure than typing your passcode in public (where people can see). They also protect your phone if it is stolen — a thief cannot unlock it with just your PIN.',
      },
      {
        id: 'a-screen-time',
        label: 'Review Screen Time content restrictions',
        where: 'Settings > Screen Time > Content & Privacy Restrictions',
        why:
          'Even for adults, Screen Time can block adult websites and prevent accidental app purchases. For grandparents setting up a device for grandkids, this is essential.',
      },
      {
        id: 'a-find-my',
        label: 'Find My iPhone is turned on',
        where: 'Settings > [your name] > Find My > Find My iPhone',
        link: 'https://www.icloud.com/find',
        why:
          'If your phone is lost or stolen, this is how you locate it, lock it, or wipe it remotely. Without this on, a lost phone is essentially unrecoverable.',
      },
      {
        id: 'a-legacy',
        label: 'Set up a Legacy Contact (digital will)',
        where: 'Settings > [your name] > Sign-In & Security > Legacy Contact',
        link: 'https://support.apple.com/en-us/102631',
        why:
          'A Legacy Contact can access your photos, messages, and iCloud data after you pass away — without court orders. Setting this up now saves your family a difficult process later.',
      },
      {
        id: 'a-hide-email',
        label: 'Use "Hide My Email" when signing up on new sites (iCloud+)',
        where: 'Settings > [your name] > iCloud > Hide My Email',
        link: 'https://support.apple.com/en-us/102437',
        why:
          'Hide My Email creates a random @icloud email that forwards to your real one. If a site gets hacked or starts spamming, you just turn off that address — your real email stays safe.',
      },
      {
        id: 'a-att',
        label: 'Review App Tracking Transparency decisions',
        where: 'Settings > Privacy & Security > Tracking',
        why:
          'When apps ask "Allow tracking?", most people tap Ask App Not to Track — good. But this screen lets you see what you allowed previously and revoke it, and turn off the prompt entirely.',
      },
      {
        id: 'a-siri',
        label: 'Delete Siri audio history',
        where: 'Settings > Siri & Search > Siri & Dictation History',
        why:
          'Siri keeps audio recordings to "improve" the service. Deleting them and opting out of sharing is a quick way to minimize what Apple stores about your voice.',
      },
      {
        id: 'a-signin-apple',
        label: 'Review "Sign in with Apple" usage — remove stale sites',
        where: 'Settings > [your name] > Sign-In & Security > Sign in with Apple',
        why:
          'Every app you have signed into using your Apple ID shows up here. Removing old ones cuts their ability to check you are still signed in — helpful if you stopped using an app long ago.',
      },
    ],
  },

  /* ── iPhone ─────────────────────────────────── */
  {
    id: 'iphone',
    title: 'iPhone',
    tagline: '15 privacy settings on the device itself',
    icon: Smartphone,
    color: 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300',
    guide: { label: 'iPhone setup & safety guide', to: '/guides' },
    checks: [
      {
        id: 'i-autolock',
        label: 'Auto-Lock set to 1 or 2 minutes (not Never)',
        where: 'Settings > Display & Brightness > Auto-Lock',
        why:
          'If you set your phone down at a coffee shop or the doctor\'s office, it should lock itself quickly. Never or 5 minutes gives a thief plenty of time to snoop.',
      },
      {
        id: 'i-require-passcode',
        label: 'Require passcode Immediately after lock',
        where: 'Settings > Face ID & Passcode > Require Passcode',
        why:
          'If this is set to a longer delay, someone grabbing your phone right after you lock it can still get in without your face or PIN. Immediately is the safe choice.',
      },
      {
        id: 'i-usb-restricted',
        label: 'USB Restricted Mode is on (block unknown cables)',
        where: 'Settings > Face ID & Passcode > USB Accessories (leave OFF)',
        why:
          'This prevents USB accessories plugged in while locked from being able to access your data. It is a defense against tools that try to break into phones via the charging port.',
      },
      {
        id: 'i-location',
        label: 'Review Location Services per app — turn off anything you do not need',
        where: 'Settings > Privacy & Security > Location Services',
        why:
          'A flashlight or game does not need to know where you are. Going through the list and setting apps to "Never" or "While Using" shrinks how much your location is shared.',
      },
      {
        id: 'i-att',
        label: 'Allow Apps to Request to Track — turn off to block all tracking',
        where: 'Settings > Privacy & Security > Tracking',
        why:
          'Turning this off at the top level means every app is automatically denied cross-app tracking — even new apps you install later. This is the simplest and strongest setting.',
      },
      {
        id: 'i-notification-previews',
        label: 'Notification previews: hide when locked',
        where: 'Settings > Notifications > Show Previews > When Unlocked',
        why:
          'Otherwise, text messages — including 2FA codes and private conversations — show up on your lock screen for anyone nearby to read. "When Unlocked" hides the content until you have authenticated.',
      },
      {
        id: 'i-safari-private',
        label: 'Safari privacy — Prevent Cross-Site Tracking is on',
        where: 'Settings > Safari > Prevent Cross-Site Tracking',
        why:
          'This stops advertisers from following you from site to site. It is on by default in modern iOS, but worth confirming.',
      },
      {
        id: 'i-private-relay',
        label: 'iCloud Private Relay on (hides your IP from websites, iCloud+)',
        where: 'Settings > [your name] > iCloud > Private Relay',
        why:
          'Private Relay is Apple\'s built-in light VPN that hides your real IP address from websites. If you pay for iCloud+ storage you already have it — just flip it on.',
      },
      {
        id: 'i-ad-id',
        label: 'Reset Advertising Identifier or limit ad tracking',
        where: 'Settings > Privacy & Security > Apple Advertising',
        why:
          'The advertising ID lets ad networks build a profile tied to your device. Resetting it wipes their history, and turning off Personalized Ads reduces what Apple shares too.',
      },
      {
        id: 'i-lockdown',
        label: 'Know about Lockdown Mode (for extreme risk situations)',
        where: 'Settings > Privacy & Security > Lockdown Mode',
        link: 'https://support.apple.com/en-us/105120',
        why:
          'Lockdown Mode is designed for journalists, activists, or people who may be targeted by sophisticated attacks. Most people do not need it on — but it is good to know it is there.',
      },
      {
        id: 'i-imessage',
        label: 'iMessage/FaceTime — block unknown senders',
        where: 'Settings > Messages > Filter Unknown Senders',
        why:
          'This filters texts from numbers not in your contacts into a separate list. It is the single best defense against scam texts, fake delivery notices, and phishing links.',
      },
      {
        id: 'i-screen-recording',
        label: 'Know how to stop screen recording quickly (if sensitive)',
        where: 'Control Center > Screen Recording button (long-press to stop apps)',
        why:
          'If an app is misbehaving, you can end any recording from Control Center. Also — never accept a screen-share request from someone calling you out of the blue.',
      },
      {
        id: 'i-smart-banners',
        label: 'Review Safari Smart App Banners and pop-ups',
        where: 'Settings > Safari > Block Pop-ups (on), Fraudulent Website Warning (on)',
        why:
          'These two toggles prevent most scam pop-ups and block known malicious websites. Keeping them on is an easy win.',
      },
      {
        id: 'i-analytics',
        label: 'Opt out of Analytics sharing',
        where: 'Settings > Privacy & Security > Analytics & Improvements',
        why:
          'Share iPhone Analytics sends Apple data about how you use your phone. Turning it off means less detail about your usage leaves your device — Apple will still function normally.',
      },
      {
        id: 'i-airdrop',
        label: 'AirDrop set to Contacts Only (not Everyone)',
        where: 'Settings > General > AirDrop > Contacts Only',
        why:
          'AirDrop set to Everyone lets strangers send you photos or files in public places — sometimes as a harassment tactic. Contacts Only stops that cold.',
      },
    ],
  },

  /* ── Android ───────────────────────────────── */
  {
    id: 'android',
    title: 'Android',
    tagline: '15 privacy settings for Android phones and tablets',
    icon: Smartphone,
    color: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
    guide: { label: 'Android setup & safety guide', to: '/guides' },
    checks: [
      {
        id: 'an-play-protect',
        label: 'Google Play Protect is on (scans apps for malware)',
        where: 'Play Store > Profile > Play Protect > Settings',
        why:
          'Play Protect scans every app you install for malware, even ones from the Play Store itself. It is on by default — but worth confirming, especially if someone else set up your phone.',
      },
      {
        id: 'an-screen-lock',
        label: 'Screen lock is PIN, password, or pattern — stronger than 4 digits',
        where: 'Settings > Security > Screen lock',
        why:
          'A 4-digit PIN has 10,000 combinations. A 6-digit PIN has a million. Longer PINs are much harder to guess if your phone is stolen and they get a chance to try.',
      },
      {
        id: 'an-autolock',
        label: 'Auto-lock after 1 minute (not Never)',
        where: 'Settings > Display > Screen timeout',
        why:
          'If your phone is left unlocked on a table, anyone walking by can read your messages and open apps. A short screen timeout is the most basic phone-security habit.',
      },
      {
        id: 'an-lockscreen-notifs',
        label: 'Hide sensitive notifications on lock screen',
        where: 'Settings > Notifications > Notifications on lock screen',
        why:
          'This stops text messages, 2FA codes, and bank alerts from showing on your lock screen. Anyone picking up your phone sees that a notification arrived, but not what it says.',
      },
      {
        id: 'an-location-accuracy',
        label: 'Location accuracy set to Device Only (or Google Location Accuracy off)',
        where: 'Settings > Location > Location services > Google Location Accuracy',
        why:
          'With this on, your phone sends Wi-Fi and Bluetooth data to Google to improve location. Turning it off keeps location working from GPS alone and shares less data about your surroundings.',
      },
      {
        id: 'an-app-perms',
        label: 'Review app permissions — revoke anything unnecessary',
        where: 'Settings > Privacy > Permission manager',
        why:
          'Go through each permission (Location, Camera, Contacts, etc.) and look at which apps have access. A weather app does not need your contacts — revoking surprising permissions is usually safe.',
      },
      {
        id: 'an-chrome',
        label: 'Chrome Privacy Guide — walk through settings',
        where: 'Chrome > menu (three dots) > Settings > Privacy and security > Privacy Guide',
        why:
          'Chrome has a guided tour like Google\'s broader Privacy Checkup — but specific to the browser. It covers safe browsing, cookies, and tracking in a few taps.',
      },
      {
        id: 'an-activity',
        label: 'Google Activity — set auto-delete (Web, Location, YouTube)',
        where: 'Settings > Google > Manage your Google Account > Data & Privacy',
        link: 'https://myaccount.google.com/activitycontrols',
        why:
          'Even on Android, your search, location, and YouTube history live in your Google account. The three auto-delete toggles (3 months) are the single biggest Android privacy win.',
      },
      {
        id: 'an-find-my-device',
        label: 'Find My Device is on (find, lock, or erase a lost phone)',
        where: 'Settings > Security > Find My Device',
        link: 'https://www.google.com/android/find',
        why:
          'If your Android phone is lost or stolen, this is how you locate it, make it ring, lock it remotely, or erase it. Without this, a lost phone is very hard to recover.',
      },
      {
        id: 'an-2fa',
        label: 'Google account 2-Step Verification is on',
        where: 'myaccount.google.com > Security > 2-Step Verification',
        link: 'https://myaccount.google.com/signinoptions/two-step-verification',
        why:
          'Your Google account on Android is tied to everything — Gmail, Play Store purchases, Google Pay. 2-Step Verification is the single strongest protection against account takeover.',
      },
      {
        id: 'an-unknown-sources',
        label: 'Block apps from unknown sources',
        where: 'Settings > Apps > Special app access > Install unknown apps',
        why:
          'Apps from outside the Play Store can contain malware. On modern Android, each app needs permission to install others — make sure only browsers you trust (if any) are allowed.',
      },
      {
        id: 'an-accessibility',
        label: 'Review Accessibility services — watch for anything suspicious',
        where: 'Settings > Accessibility > Installed services',
        why:
          'Accessibility services are extremely powerful — they can read the screen and tap for you. Scam apps sometimes request this to steal banking info. If you see a service you do not recognize, turn it off.',
      },
      {
        id: 'an-device-admin',
        label: 'Review Device Admin apps',
        where: 'Settings > Security > Device admin apps',
        why:
          'Device admin apps can lock your screen or wipe your phone. Legitimate ones include Find My Device. If you see anything else, investigate — some scams install themselves as admin to resist removal.',
      },
      {
        id: 'an-ads-id',
        label: 'Reset Advertising ID and opt out of personalization',
        where: 'Settings > Privacy > Ads',
        why:
          'Your Ad ID is what lets advertisers build a profile tied to your phone. Resetting it wipes their history, and "Delete advertising ID" (newer Android) removes it entirely.',
      },
      {
        id: 'an-backup-encryption',
        label: 'Google One / Android Backup encryption is enabled',
        where: 'Settings > Google > Backup',
        why:
          'Your Android backup to Google includes photos, messages, and app data. Ensuring it is end-to-end encrypted (turn on the screen-lock-based encryption toggle) means even Google cannot read it.',
      },
    ],
  },
];

/* ── Component ─────────────────────────────────── */
export default function PrivacyAudit() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeService, setActiveService] = useState<ServiceSection['id'] | null>(null);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const serviceProgress = (service: ServiceSection) => {
    const ids = service.checks.map((c) => c.id);
    const done = ids.filter((id) => checked[id]).length;
    return { done, total: ids.length, pct: Math.round((done / ids.length) * 100) };
  };

  const totalProgress = useMemo(() => {
    const all = SERVICES.flatMap((s) => s.checks.map((c) => c.id));
    const done = all.filter((id) => checked[id]).length;
    return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
  }, [checked]);

  const active = SERVICES.find((s) => s.id === activeService);

  return (
    <>
      <SEOHead
        title="Privacy Audit — Take Back Your Privacy One Setting at a Time"
        description="Step-by-step guided privacy audit for Facebook, Google, Apple ID, iPhone, and Android. Walks you through the settings that actually matter in plain English."
        path="/tools/privacy-audit"
      />
      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container py-12 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="privacy-audit"
                title="Privacy Audit"
                url="/tools/privacy-audit"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Privacy</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pr-14">
              Take Back Your Privacy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              We'll walk you through the settings that matter — one screen at a time.
            </p>
          </div>
        </section>

        {/* ── Reassurance banner ──────────────── */}
        <section className="container pt-8 pb-2">
          <Card className="border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Your progress stays with you</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We don't collect any data. This is a guided checklist that shows you exactly
                  where to tap on Facebook, Google, your iPhone, or your Android device. Your
                  checkmarks are saved only in this browser.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Total progress bar ──────────────── */}
        <section className="container py-6">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-semibold">Overall Progress</h2>
                <span className="text-lg font-bold text-primary">
                  {totalProgress.done} / {totalProgress.total} settings reviewed
                </span>
              </div>
              <Progress value={totalProgress.pct} className="h-4 mb-2" />
              <p className="text-base text-muted-foreground">
                {totalProgress.pct === 100
                  ? 'Incredible — you have locked down every service. Come back in 6 months to re-check.'
                  : totalProgress.pct === 0
                    ? 'Pick a service below to get started. You do not have to do everything at once.'
                    : 'Keep going! Small steps add up to big privacy wins.'}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Service picker OR active service ─ */}
        {!active ? (
          <section className="container pb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Which service do you want to audit?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start with the one you use most. You can come back to the others anytime.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => {
                const { done, total, pct } = serviceProgress(service);
                const Icon = service.icon;
                const complete = done === total && total > 0;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className="text-left group"
                  >
                    <Card
                      className={`h-full transition-all group-hover:shadow-md group-hover:border-primary/50 ${
                        complete ? 'border-green-500/50' : ''
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg shrink-0 ${service.color}`}>
                            {complete ? (
                              <CheckCircle2 className="w-8 h-8" />
                            ) : (
                              <Icon className="w-8 h-8" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                            <p className="text-base text-muted-foreground leading-snug">
                              {service.tagline}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              {done} of {total} reviewed
                            </span>
                            <span className="font-semibold text-primary">{pct}%</span>
                          </div>
                          <Progress value={pct} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="container pb-12">
            {/* Back button + service header */}
            <Button
              variant="ghost"
              onClick={() => setActiveService(null)}
              className="mb-4 -ml-2 text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all services
            </Button>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className={`p-3 rounded-lg shrink-0 ${active.color}`}>
                    <active.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold">{active.title} Privacy Audit</h2>
                    <p className="text-lg text-muted-foreground">{active.tagline}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-base mb-1">
                    <span className="text-muted-foreground">
                      {serviceProgress(active).done} of {serviceProgress(active).total} reviewed
                    </span>
                    <span className="font-semibold text-primary">
                      {serviceProgress(active).pct}%
                    </span>
                  </div>
                  <Progress value={serviceProgress(active).pct} className="h-3" />
                </div>
                {active.guide && (
                  <div className="mt-5">
                    <Button variant="outline" asChild>
                      <Link to={active.guide.to}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        {active.guide.label}
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Checklist */}
            <div className="space-y-4">
              {active.checks.map((check, i) => {
                const isDone = checked[check.id] ?? false;
                return (
                  <Card
                    key={check.id}
                    className={isDone ? 'border-green-500/40 bg-green-50/30 dark:bg-green-950/10' : ''}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={isDone}
                          onCheckedChange={() => toggle(check.id)}
                          className="mt-1.5 h-6 w-6 shrink-0 cursor-pointer"
                          id={`check-${check.id}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-3">
                            <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground text-sm font-semibold mt-0.5">
                              {i + 1}
                            </span>
                            <label
                              htmlFor={`check-${check.id}`}
                              className={`text-lg md:text-xl font-semibold leading-snug cursor-pointer ${
                                isDone ? 'line-through text-muted-foreground' : 'text-foreground'
                              }`}
                            >
                              {check.label}
                            </label>
                          </div>

                          {/* Where to find it */}
                          <div className="ml-9 mb-3 p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm font-semibold text-muted-foreground mb-1">
                              Where to find it:
                            </p>
                            <p className="text-base font-mono text-foreground break-words">
                              {check.where}
                            </p>
                          </div>

                          {/* Why it matters */}
                          <div className="ml-9 mb-3 flex items-start gap-2">
                            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-muted-foreground mb-1">
                                Why it matters:
                              </p>
                              <p className="text-base leading-relaxed">{check.why}</p>
                            </div>
                          </div>

                          {/* Direct link */}
                          {check.link && (
                            <div className="ml-9 mt-3">
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={check.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open this setting
                                  <ExternalLink className="w-3 h-3 ml-1.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Service-complete card */}
            {serviceProgress(active).pct === 100 && (
              <Card className="mt-6 bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-300" />
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200">
                      {active.title} is locked down!
                    </h3>
                  </div>
                  <p className="text-base text-green-700 dark:text-green-300 leading-relaxed">
                    Every setting reviewed. Set a reminder to come back every 6 months —
                    services change their defaults, so it is worth a quick re-check.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Continue to next service */}
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Keep going</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Audit another service — your progress on this one is saved.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.filter((s) => s.id !== active.id).map((s) => {
                    const { pct } = serviceProgress(s);
                    const Icon = s.icon;
                    return (
                      <Button
                        key={s.id}
                        variant="outline"
                        onClick={() => setActiveService(s.id)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {s.title}
                        {pct > 0 && pct < 100 && (
                          <Badge variant="secondary" className="ml-2">
                            {pct}%
                          </Badge>
                        )}
                        {pct === 100 && (
                          <CheckCircle2 className="w-4 h-4 ml-2 text-green-600" />
                        )}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ── Related tools ───────────────────── */}
        <section className="container pb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Related privacy tools</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/digital-footprint-scanner">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Digital Footprint Scanner — check what is public about you</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/data-breach-checker">
                    <Lock className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Data Breach Checker — has your email been leaked?</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/two-factor-setup">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Two-Factor Setup — the single most important security step</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/app-permissions">
                    <Smartphone className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">App Permissions — review what each app can see</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
