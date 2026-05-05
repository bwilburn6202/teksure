// guides-batch-134 — Dev-loop cycle 10
// Topics: phone repair vs replace decision, smart home starter for seniors, voice assistant accessibility

import type { Guide } from './guides';

export const guidesBatch134: Guide[] = [
  {
    slug: 'phone-repair-vs-replace-decision-2026',
    title: 'Should I Repair or Replace My Phone? A Decision Guide for 2026',
    excerpt: 'Cracked screen, dying battery, water damage — sometimes a $90 repair saves a $900 phone. Here is how to decide which path makes sense.',
    category: 'buying-guides',
    tags: ['phone-repair', 'replacement', 'iphone', 'android', 'cost', 'decision', 'seniors'],
    readTime: '8 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `When something breaks on your phone, the choice between repair and replacement is rarely as clear as it should be. A repair shop has reasons to push repair. A carrier has reasons to push a new phone with a contract. Online forums offer wildly different opinions.

This guide gives you a simple framework to make the call yourself, with real 2026 pricing for the most common phone problems.

**The 50% rule**

If the cost to repair is more than 50% of the cost of a comparable used or refurbished phone in similar condition, replacement usually wins. If it is less than 50%, repair usually wins. There are exceptions — covered below — but this rule covers most cases.

**The age rule**

If your phone is 5 or more years old, lean toward replacement even on small repairs. The phone is approaching the end of software updates, and money spent on it has limited remaining payback.

(Sources: Apple Support, support.apple.com/iphone/repair; iFixit, ifixit.com; Consumer Reports, consumerreports.org; Samsung Support, samsung.com/us/support)`,
    steps: [
      {
        title: 'Cracked screen — typically repair, not replace',
        content: 'Modern screen replacements are durable and reliable. A genuine Apple screen repair on an iPhone 13 or newer is $279 (out-of-warranty) or $29 (with AppleCare+). At Apple Authorized service providers, the same repair is the same price. Third-party shops (uBreakiFix, local shops) charge $130–$200 with similar quality. Samsung Galaxy screens range $99–$299 depending on model.\n\nAt those prices, repair makes sense for any phone newer than 4 years old. Only consider replacement if the screen damage is accompanied by other issues (dead battery, frame damage, broken charge port).',
        tip: 'Quick Tip: AppleCare+ pays for itself if you crack a screen even once during the coverage period. If you have not bought it within 60 days of purchase, you can no longer add it.',
      },
      {
        title: 'Dead or weak battery — almost always repair',
        content: 'A $89 Apple battery replacement (or $50–$120 at a third-party shop) restores like-new battery life on phones up to about 6 years old. A new battery often makes the phone feel as fast as it was when new — modern phones throttle (slow down) when the battery is weak.\n\nFor any phone less than 5 years old that you are otherwise happy with, a battery replacement is the highest-value tech repair you can make. Use our Battery Health Coach to find your battery health % and get specific guidance.',
      },
      {
        title: 'Water damage — depends on how severe',
        content: 'iPhones from iPhone 7 onward and most modern Samsung phones have water resistance ratings. Brief contact with water (a splash, a quick drop in the sink) often causes no permanent harm if the phone is dried promptly.\n\nFor moderate water exposure (toilet, pool, washing machine), Apple charges $549–$649 for water damage repair (it counts as "other damage" — full out-of-warranty pricing). Third-party shops can sometimes save a wet phone for $100–$300 if you bring it in within 48 hours, before corrosion sets in.\n\nIf your phone is more than 4 years old and severely water-damaged, replacement usually wins. If it is newer and the damage is mild, third-party repair is worth a try.',
        warning: 'The single most important step after water damage is: do NOT charge the phone. Charging a wet phone causes the most permanent damage. Power off, dry externally, and bring it to a repair shop within 24–48 hours.',
      },
      {
        title: 'Cracked back glass — usually replace, not repair',
        content: 'Apple charges $169–$549 to replace the back glass on an iPhone (model-dependent). On many models, the back glass is fused to the entire frame, so a "back glass repair" is really a near-full chassis replacement.\n\nIf the back is cracked but the phone otherwise works, a $30 case will hide the damage and protect against further breaks for years. Save the repair money. If the camera lens covers are broken (causing photo issues), that is a smaller targeted repair worth doing — usually $100–$160.',
      },
      {
        title: 'Broken charging port — repair if newer than 4 years',
        content: 'Charging port repair is $80–$170 at most third-party shops. Apple often replaces the entire phone for charging-port issues (under warranty) or charges full out-of-warranty pricing. Samsung does targeted repair.\n\nFor any phone newer than 4 years old, a $100 charge-port repair is worth doing before considering a $700+ replacement. For phones older than 5 years, where the OS is approaching end-of-life anyway, replacement makes more sense.',
      },
      {
        title: 'Software issues that "feel like" hardware — try a reset first',
        content: 'Many issues that feel like hardware failure (apps crashing, sluggish performance, freezing) are software glitches. Before paying for any repair, try the free fixes: restart the phone (hold power button, slide to power off, wait 30 seconds, turn back on). Update to the latest iOS or Android version. As a last resort, back up your phone and do a factory reset.\n\nA factory reset solves a remarkable number of problems and costs nothing.',
      },
      {
        title: 'When replacement clearly wins',
        content: 'Replace if any of these apply:\n\n• The phone is 6 or more years old. Software updates are about to end.\n• Multiple problems at once (cracked screen + dead battery + slow performance).\n• Repair cost is over 50% of the cost of a comparable used phone in similar condition.\n• The phone uses an obsolete charger or technology (Lightning if you also have USB-C devices).\n• You have been wanting to upgrade anyway and the failure is the trigger.\n\nFor replacement, look at certified-refurbished options (Apple Certified Refurbished store, Back Market, Swappa) before buying brand new — refurbished phones save 30–50% with similar warranties.',
      },
      {
        title: 'Where to get repair done',
        content: 'Apple Store / Apple Authorized service providers — most expensive, but uses genuine Apple parts and includes Apple\'s warranty on the repair. Best for AppleCare+ holders and any in-warranty phone.\n\nuBreakiFix (now Asurion) — nationwide chain. Same-day for most repairs. Lifetime warranty on repairs. Carries genuine Samsung parts (authorized).\n\nBest Buy with Geek Squad — does iPhone screen and battery replacements at Apple\'s prices, often with shorter wait times. Honest about when a phone is too old to repair economically.\n\nLocal independent shops — typically the cheapest option, usually 30–50% less than chains. Quality varies — read recent Google reviews. Ask about parts (genuine vs. aftermarket) and warranty length.\n\nMail-in repair (iFixit, MyTrendyPhone, Repair Shore) — cheapest by far for some repairs. Slower turnaround. Best for non-urgent repairs.',
      },
    ],
  },

  {
    slug: 'smart-home-starter-kit-2026-seniors',
    title: 'A Smart Home Starter Kit for Seniors: 5 Devices Worth Buying First',
    excerpt: 'Real value, no gadget overload. The five smart home items that genuinely help — voice control, lights, doorbell, plug, and emergency button — with brands and prices.',
    category: 'smart-home',
    tags: ['smart-home', 'seniors', 'starter-kit', 'amazon-echo', 'google-nest', 'ring', 'kasa', 'safety'],
    readTime: '7 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `The phrase "smart home" sounds complicated, but the genuinely useful smart home items for seniors are simple, cheap, and solve real problems. This guide skips the hype and lists the five devices that actually help.

Total cost for the entire starter kit: $200–$300. Setup time: about 90 minutes total, spread over a weekend.

You do not need a "smart home" all at once. Pick one item from this list to start. Live with it for a month. If it helps, add the next one.

(Sources: Wirecutter Smart Home Recommendations, nytimes.com/wirecutter; AARP Smart Home Guide, aarp.org/home-family/personal-technology; Consumer Reports, consumerreports.org)`,
    steps: [
      {
        title: '1. Voice assistant: Amazon Echo Dot or Google Nest Mini ($30–$50)',
        content: 'A small speaker you can talk to. "Alexa, what is the weather?" "Alexa, set a timer for 20 minutes." "Alexa, call my daughter." It is the gateway to most other smart home features.\n\nWhich one to buy:\n\n• Amazon Echo Dot ($50, often $30 on sale) — works with the broadest list of smart home items. Best if you also use Amazon for shopping.\n\n• Google Nest Mini ($50, often $30 on sale) — better at answering general questions and giving directions. Best if you use Gmail and Google Calendar.\n\n• Apple HomePod Mini ($99) — best sound. Limited to Apple ecosystem. Buy this only if everyone in the house uses iPhones.\n\nBoth Echo and Nest Mini sit on a counter or nightstand. Plug into the wall and follow the app setup (5 minutes).',
        tip: 'Quick Tip: A second one in the bedroom for voice-activated alarms, asking the time without reaching for glasses, and calling for help is often more valuable than the first.',
      },
      {
        title: '2. Smart light bulbs: Kasa or Sengled ($15–$30 for a 2-pack)',
        content: 'A regular bulb you swap into an existing lamp. Now you can say "Alexa, turn off the bedroom lamp" or schedule lights to turn on at sunset.\n\nWhy it matters for seniors: no fumbling for a lamp switch in the dark, automatic security lighting when you are away, and easy bedtime routines without getting out of bed.\n\nWhich one to buy: Kasa or Sengled brands work directly with WiFi (no extra hub needed) and cost $7–$15 per bulb. Avoid bulbs that require a "bridge" or "hub" for your first kit — too much added complexity.\n\nSetup: screw in the bulb, open the Kasa or Sengled app, scan for the bulb, name it ("Living Room Lamp"), connect to your voice assistant. Done in 10 minutes per bulb.',
      },
      {
        title: '3. Video doorbell: Ring or Wyze ($40–$200)',
        content: 'A camera at your front door that shows you who is there from anywhere. You can see the porch from your phone, talk to the visitor through the doorbell, and review who came by while you were out.\n\nWhich one to buy:\n\n• Ring Video Doorbell ($100, often $50 on sale) — Most popular. Works wired or with a rechargeable battery. App is straightforward. Subscription ($4/mo) needed for video history beyond the last few seconds.\n\n• Wyze Video Doorbell v2 ($40) — Cheapest option that works well. Wired install required (replaces existing doorbell wiring).\n\n• Google Nest Doorbell ($180) — Best if you already have Nest products. Includes 3 hours of free history.\n\nInstallation note: All three replace your existing doorbell button. The wires from the old doorbell connect directly to the new one. If you do not have an existing doorbell, the Ring battery model works without wiring.',
      },
      {
        title: '4. Smart plug: Kasa or TP-Link ($10–$15)',
        content: 'A small adapter that plugs into a wall outlet. Anything plugged into the smart plug can be turned on or off by voice or schedule.\n\nWhy it matters: any "dumb" device (a fan, a coffee maker, a Christmas tree, an electric kettle) becomes voice-controllable. Set the coffee maker to start at 6:45 AM automatically. Turn off the iron from your phone if you forgot when you left.\n\nKasa Smart Plug 4-pack: $25 on Amazon. The most reliable budget option. Setup: plug into outlet, open Kasa app, name the plug, connect to your voice assistant.',
        tip: 'Quick Tip: Use a smart plug with a fan or window AC for hands-free temperature control without buying a smart thermostat.',
      },
      {
        title: '5. Emergency button: Apple Watch SE or Medical Alert ($249 + or $25–$45/mo)',
        content: 'For seniors living alone, an emergency button is the highest-value smart device. Two options work well:\n\n• Apple Watch SE ($249) — fall detection automatically calls 911 if you fall and do not respond. Heart-rate alerts. Cellular version ($299) means it works without your phone nearby. Best if you have an iPhone.\n\n• Medical Alert system (Bay Alarm Medical, Medical Guardian, Lively) — $25–$45/month with no contract. Pendant button or wristband. Press the button and a 24/7 operator answers. The button works anywhere in the country (cellular) or anywhere in the home (in-home base station).\n\nThe Apple Watch is a one-time purchase but requires charging daily. The medical alert services have a monthly cost but the device is always on (battery lasts months) and the human operator can dispatch local emergency services even if you cannot speak.\n\nBoth are vastly better than a basic smartphone in an actual emergency.',
      },
      {
        title: 'How to add devices over time without overwhelm',
        content: 'Pick one item. Buy it. Set it up. Use it for a month. If it has earned its place, add the next.\n\nMost senior-friendly order:\n\n1. Voice assistant (Echo Dot or Nest Mini) — your control hub.\n2. One smart bulb in the most-used lamp.\n3. Video doorbell.\n4. One smart plug for a frequently-used device.\n5. Emergency button (the most important — but it does not require any of the above).\n\nDo not add everything at once. Each item adds a small amount of mental load to remember how to use it. Letting one settle in before adding the next keeps the smart home actually helpful instead of frustrating.',
      },
    ],
  },

  {
    slug: 'voice-assistants-for-hard-of-hearing-2026',
    title: 'Voice Assistants When You Are Hard of Hearing: Settings That Actually Help',
    excerpt: 'Alexa, Siri, and Google Assistant can all be tuned for hearing loss — louder responses, slower speech, on-screen captions. Here are the settings that matter.',
    category: 'health-tech',
    tags: ['accessibility', 'hearing-loss', 'voice-assistant', 'siri', 'alexa', 'google-assistant', 'seniors'],
    readTime: '6 min',
    thumbnailEmoji: '',
    publishedAt: '2026-05-05',
    lastVerifiedAt: '2026-05-05',
    difficulty: 'Beginner',
    body: `Voice assistants — Siri, Alexa, and Google Assistant — are remarkable tools for anyone with limited mobility, low vision, or memory issues. But for the millions of Americans with mild to moderate hearing loss, the default settings make them frustrating: responses are too fast, too quiet, or impossible to follow.

The good news: every major voice assistant has accessibility settings designed for hearing loss. The bad news: most are buried in menus and never turned on by default. This guide walks through each one.

If you have moderate or severe hearing loss, the on-screen text response options are the most important — they let you read what the assistant says instead of (or in addition to) hearing it.

(Sources: Apple Support, support.apple.com/accessibility; Amazon Help, amazon.com/help; Google Support, support.google.com/assistant; National Institute on Deafness, nidcd.nih.gov)`,
    steps: [
      {
        title: 'Apple Siri — turn on text responses and slow speech',
        content: 'Settings → Siri → "Siri Responses." Choose:\n\n• "Prefer Spoken Responses" (default) — Siri talks back.\n• "Prefer Silent Responses" — Siri shows the answer on screen as text. Best if you are hard of hearing.\n• "Automatic" — Siri talks when the phone is unlocked, shows text when locked or in silent mode.\n\nFor most users with hearing loss, "Prefer Silent Responses" makes Siri dramatically more useful. You ask out loud (Siri\'s microphone is excellent) and read the answer.\n\nNext: Settings → Accessibility → Spoken Content → "Speaking Rate" → drag the slider to slower. This affects both Siri and the system\'s "Speak Screen" feature.\n\nOptional: Settings → Accessibility → Audio & Visual → "Show Subtitles and Captions" → on. Now any media played through your phone shows captions automatically.',
        tip: 'Quick Tip: For Apple Watch, the same settings live at Settings → Accessibility → Siri → Voice Feedback → "Always On" / "Headphones Only" / "Off."',
      },
      {
        title: 'Amazon Alexa — make Alexa louder, slower, and show captions',
        content: 'Open the Alexa app on your phone. Tap "More" (bottom right) → Settings → Accessibility.\n\nKey settings:\n\n• "Captioning" → "Alexa Captioning" → on. Now if you have an Echo Show (the Echo with a screen), Alexa\'s spoken responses appear as captions on the screen.\n\n• "Captioning" → "Call Captioning" → on. Phone calls made through Alexa show real-time captions.\n\n• "Tap to Alexa" → on. Lets you tap on the Echo Show screen instead of speaking — useful in noisy rooms.\n\nNext: Tap your Echo device in the app → Sounds → "Speech volume" → increase to 8 or 9 out of 10.\n\nFor speech rate: say "Alexa, speak slower." She will talk noticeably more slowly. Say "Alexa, speak slower" again to slow further. Say "Alexa, speak faster" to undo. There are 5 levels.',
      },
      {
        title: 'Google Assistant — increase volume and slow speech',
        content: 'On your Android phone or Google Nest device app:\n\nGoogle Home app → Settings → Accessibility:\n\n• "Closed captions on Assistant" → on. The Assistant\'s spoken responses appear as captions on Nest Hub screens.\n\n• "Send notification when Assistant speaks" → optional, but helpful — your phone vibrates when the Nest device starts speaking, useful if you have your back to it.\n\nFor speech rate: say "Hey Google, slow down" or "Hey Google, speak slower." Google has 4 speed levels. Repeat to go slower.\n\nFor volume on a Nest Mini or Hub: physically turn up the device, or say "Hey Google, set volume to 9 out of 10."',
        tip: 'Quick Tip: Live Caption on Pixel and Samsung phones (Settings → Accessibility → Live Caption) captions any audio playing on the phone — including phone calls, podcasts, YouTube, and FaceTime. Often more useful than Assistant-specific captions.',
      },
      {
        title: 'Pair your hearing aids directly with your phone',
        content: 'Modern hearing aids (Phonak, Oticon, ReSound, Starkey, Widex, and especially Apple-compatible "Made for iPhone" hearing aids) can connect to your phone over Bluetooth. Once paired, voice assistant responses, phone calls, and audio play directly through your hearing aids — vastly clearer than hearing the phone\'s speaker through them.\n\nOn iPhone: Settings → Accessibility → Hearing Devices → tap your hearing aids when they appear. Follow the pairing prompts.\n\nOn Android: Settings → Connected devices → Pair new device. Hearing aids appear as Bluetooth devices.\n\nIf you wear hearing aids and have not paired them with your phone, this is the single biggest improvement you can make.',
      },
      {
        title: 'Use an Echo Show or Nest Hub instead of audio-only',
        content: 'A screened smart device — Echo Show ($90–$250) or Google Nest Hub ($100) — displays Alexa\'s or Google\'s response on the screen as text. You read the answer without straining to hear it.\n\nThe 8-inch Echo Show or Nest Hub Max are best for kitchens and counters. The smaller 5-inch versions work better on a bedside table.\n\nIf you live alone and rely heavily on a voice assistant, replacing an Echo Dot or Nest Mini with a Show or Hub is a meaningful accessibility upgrade.',
      },
      {
        title: 'When voice assistants do not work — alternatives',
        content: 'For severe hearing loss, voice assistants may be more frustrating than helpful. Alternatives:\n\n• Type the question into Siri (iPhone): Settings → Siri → "Type to Siri" → on. Now you press and hold the side button to type instead of speak.\n\n• Type to Google: Google app → tap microphone → tap keyboard icon to type instead.\n\n• Smart displays: Echo Show and Nest Hub respond to taps as well as voice. You can navigate menus by tapping.\n\n• Alexa Tap to Alexa: Echo Show only — taps replace voice commands.\n\nMany people with hearing loss find the typed-input modes faster and more reliable than voice — even when their hearing is good enough for voice. Worth trying.',
      },
    ],
  },
];
