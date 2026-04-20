// TekSure Guides Batch 13 — 25 guides covering top content gaps April 2026
// Topics: telehealth appointments, Zoom, smart TV setup, Alexa, Apple Maps,
// Google Maps, SSA account, investment scams, MyChart, Bluetooth headphones,
// phone photos, sharing photos, imposter scams, recovery scams, Google Meet,
// Siri, Google Assistant, iPhone to TV, Apple Pay, Zelle, delete apps,
// FaceTime on iPad, scan documents, dark mode, update apps.
import type { Guide } from './guides';

export const guidesBatch13: Guide[] = [
  {
    slug: 'how-to-do-telehealth-appointment',
    title: 'How to Do a Video Doctor Appointment From Home',
    excerpt: `Telehealth lets you see your doctor on your phone or computer without driving anywhere — here's exactly how to prepare and join the visit.`,
    category: 'health-tech',
    tags: ['telehealth', 'doctor', 'video call', 'health', 'medicare', 'appointment'],
    readTime: '7 min',
    thumbnailEmoji: '🩺',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Telehealth — seeing your doctor through a video call — has become one of the most common ways people manage their health. It works on any smartphone, tablet, or computer with a camera and internet connection. Medicare now covers telehealth visits for most appointments, so there is usually no extra cost compared to an in-person visit.",
    steps: [
      {
        title: 'Confirm your appointment details and the platform your doctor uses',
        content: `After scheduling a telehealth appointment, your doctor's office will send you an email or text with a link. Most offices use one of three platforms: Zoom, Doximity, or their own patient portal (like MyChart or FollowMyHealth). Open the email or text from your doctor's office and look for a button that says "Join Visit," "Click Here for Your Appointment," or similar. Keep this email handy for the day of your appointment.`,
        tip: `If you can't find the link, call your doctor's office the day before and ask them to resend it. Have them walk you through how to join if you're not sure.`,
      },
      {
        title: 'Test your camera and microphone beforehand',
        content: `Arrive at your visit prepared by testing your device ahead of time. On an iPhone or iPad: go to Settings → Privacy & Security → Camera, and make sure your browser or the telehealth app is listed and allowed. On Android, go to Settings → Apps → find your browser or app → Permissions → make sure Camera and Microphone are allowed. For a quick camera test, open your phone's camera app and flip to the front-facing camera (the selfie camera) — if you can see yourself, you're ready.`,
      },
      {
        title: 'Set up your space before the visit',
        content: `Find a quiet, well-lit spot to sit. Natural light from a window works best — sit facing the window, not with your back to it. If you're on a phone, prop it up against a book or cup at eye level so your hands are free. Have your insurance card, list of medications, and any questions written down before the visit starts. Give yourself 10 minutes before the scheduled time to open the link and get settled.`,
        tip: `Wearing earbuds or headphones during the visit can help you hear the doctor more clearly, especially if there's background noise in your home.`,
      },
      {
        title: `Join the visit when it's time`,
        content: 'At your appointment time, tap or click the link your doctor sent. You may be placed in a virtual "waiting room" for a minute or two before the doctor joins. If the platform asks for permission to access your camera and microphone, tap "Allow." Once the doctor appears on screen, the visit works just like an in-person appointment — you talk, they examine you visually, and they can review your records and send prescriptions electronically.',
      },
      {
        title: `What to do if the technology isn't working`,
        content: `If you can't get the video to work, most doctors can switch to a phone-only audio call — just call the office directly. If your internet connection is weak and the video keeps freezing, try moving closer to your WiFi router or asking family members to pause streaming video in your home during the visit. Many telehealth platforms also have a "Call me instead" option that lets you dial in by phone.`,
        tip: `Medicare covers telehealth through December 2026 due to the Consolidated Appropriations Act, 2026. Confirm with your doctor's office whether your specific visit is covered before scheduling.`,
      },
    ],
  },

  {
    slug: 'how-to-use-zoom-video-calls',
    title: 'How to Use Zoom for Video Calls With Family and Friends',
    excerpt: `Zoom is a free video calling app that works on any phone or computer — here's how to join a call and start one yourself.`,
    category: 'essential-skills',
    tags: ['zoom', 'video call', 'family', 'communication', 'meeting'],
    readTime: '6 min',
    thumbnailEmoji: '📹',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Zoom is one of the most popular video calling apps in the world. It works on iPhones, Android phones, iPads, Windows computers, and Macs. You can use it to talk face-to-face with family members anywhere, attend virtual events or classes, or see your doctor for a telehealth visit. The basic plan is free and includes everything most people need.",
    steps: [
      {
        title: 'Download Zoom and create a free account',
        content: `On your phone: open the App Store (iPhone) or Google Play Store (Android) and search for "Zoom." Install the free "Zoom - One Platform to Connect" app. Open the app and tap "Sign Up Free." Enter your email address, choose a password, and verify your email by clicking the link Zoom sends you. That's all — you now have a free Zoom account.`,
        tip: 'On a Windows computer, go to zoom.us and click "Download" to install the desktop app. A Zoom account is free for calls up to 40 minutes with 3 or more people, and unlimited for two-person calls.',
      },
      {
        title: 'Join a Zoom meeting someone else set up',
        content: `When someone invites you to a Zoom call, they'll send you a link that looks like "zoom.us/j/123456789" or a Meeting ID number. If they send a link, tap or click it and the Zoom app will open automatically and join the meeting. If they send only a Meeting ID, open the Zoom app, tap "Join a Meeting," type in the Meeting ID, type your name, and tap "Join Meeting."`,
      },
      {
        title: 'Start your own Zoom meeting',
        content: `Open the Zoom app and tap "New Meeting." You'll see yourself on camera right away. Tap "Start a Meeting." To invite others, tap "Participants" at the bottom of the screen, then "Invite." You can send the meeting link to people via text message or email. When they click your link, they'll join your meeting automatically.`,
        tip: 'To see everyone in "Gallery View" (small squares showing all participants at once instead of just the person talking), tap the three dots at the bottom right of the Zoom screen and select "Gallery View."',
      },
      {
        title: 'Control your microphone and camera during the call',
        content: `At the bottom of the Zoom screen, you'll see two main buttons: a microphone icon and a video camera icon. Tap the microphone icon to mute or unmute yourself — a red line through it means you're muted and others can't hear you. Tap the camera icon to turn your video on or off. The red "End" button at the bottom right ends the call.`,
      },
      {
        title: 'Use the chat and reactions features',
        content: `During a Zoom meeting, tap the three dots at the bottom right for more options. "Chat" opens a text chat where you can type messages to everyone without speaking — useful in large groups. "Reactions" lets you give a thumbs-up or clapping hands to respond without interrupting the speaker. These features make Zoom calls work well even in noisy settings or when you don't want to unmute.`,
      },
    ],
  },

  {
    slug: 'how-to-use-amazon-alexa',
    title: 'How to Set Up and Use Amazon Alexa (Echo)',
    excerpt: "Amazon Alexa is a voice assistant that answers questions, sets reminders, and controls smart home devices — here's how to get started.",
    category: 'smart-home',
    tags: ['alexa', 'amazon echo', 'smart home', 'voice assistant', 'setup'],
    readTime: '6 min',
    thumbnailEmoji: '🔊',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Amazon Alexa is the voice assistant built into Amazon Echo devices. You talk to Alexa out loud, and she talks back. She can answer questions, tell you the weather, set timers and reminders, play music, control smart lights and thermostats, and much more. Echo devices start at around $30 and plug into any wall outlet.",
    steps: [
      {
        title: 'Plug in your Echo device and download the Alexa app',
        content: `Plug your Echo into a wall outlet using the included power cord. The light ring on top will turn orange, which means it's ready to set up. On your phone, download the free "Amazon Alexa" app from the App Store or Google Play Store. Sign in with your Amazon account (the same one you use to shop on Amazon). The app will detect your Echo device automatically.`,
        tip: `If you don't have an Amazon account, you can create one for free at amazon.com. An Amazon account is separate from Amazon Prime — you don't need a Prime membership to use Alexa.`,
      },
      {
        title: 'Connect Alexa to your WiFi',
        content: `In the Alexa app, tap the "Devices" icon at the bottom right. Tap the plus (+) button, then "Add Device," then "Amazon Echo." Follow the on-screen steps — the app will walk you through connecting your Echo to your home WiFi network. You'll need to enter your WiFi password once. After connecting, the Echo's light ring will turn blue and then off, meaning it's ready.`,
      },
      {
        title: 'Try your first Alexa commands',
        content: `To use Alexa, say "Alexa," wait for the blue light ring to appear (it's listening), then ask your question or give your command. Some useful things to try first: "Alexa, what's the weather today?" — "Alexa, set a timer for 10 minutes" — "Alexa, what time is it?" — "Alexa, tell me a joke" — "Alexa, play some relaxing music." Alexa will respond out loud through the Echo speaker.`,
        tip: `You don't need to be close to the Echo — it can hear you from across the room, even with moderate background noise. Speak at a normal pace; you don't need to shout.`,
      },
      {
        title: 'Set up reminders for medications or appointments',
        content: `Alexa is particularly useful for reminders. Say "Alexa, remind me to take my medication every day at 8 AM." Or "Alexa, remind me about my doctor's appointment on Thursday at 2 PM." Alexa will speak the reminder out loud at the scheduled time. You can also ask "Alexa, what are my reminders?" to hear your current list, or "Alexa, cancel all reminders" to clear them.`,
      },
      {
        title: 'Control Alexa with the app if you prefer not to speak',
        content: `If you're in a situation where you can't speak out loud (or prefer not to), open the Alexa app on your phone and tap the microphone icon at the bottom center. Tap it once and speak your command. You can also type commands by tapping the keyboard icon instead. The Alexa app also lets you manage your reminders, check the Echo's shopping list, and control any smart home devices.`,
      },
    ],
  },

  {
    slug: 'how-to-use-apple-maps',
    title: 'How to Use Apple Maps for Driving and Walking Directions',
    excerpt: "Apple Maps gives you free turn-by-turn directions on your iPhone — here's how to get directions, save places, and use it without getting lost.",
    category: 'app-guides',
    tags: ['apple maps', 'navigation', 'directions', 'iphone', 'driving'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apple Maps is the free navigation app built into every iPhone. It gives you turn-by-turn directions whether you're driving, walking, or taking public transportation — and it speaks the directions out loud through your phone's speaker so you can keep your eyes on the road.",
    steps: [
      {
        title: 'Open Maps and search for your destination',
        content: 'Open the Maps app (it has an icon that looks like a road map with a red pin). Tap the search bar at the top and type where you want to go — you can type a full address, a business name, or even a general place like "nearest pharmacy" or "Italian restaurants nearby." Maps will show matching options — tap the correct one to see its location on the map.',
      },
      {
        title: 'Get directions and start navigation',
        content: `After selecting your destination, tap the green "Directions" button. Maps will show you the best route. For driving directions, tap the car icon. For walking, tap the person walking icon. For public transit, tap the bus icon. You'll see the estimated travel time and distance. Tap "Go" or "Start" to begin navigation with spoken turn-by-turn instructions.`,
        tip: 'When the navigation voice tells you to turn, it gives you two notices: an early warning ("In 500 feet, turn right") and then a final cue ("Turn right onto Main Street"). If you miss a turn, Maps automatically recalculates a new route without any extra steps from you.',
      },
      {
        title: 'Adjust the volume of spoken directions',
        content: `The navigation voice uses the same volume as your phone's ringer. Use the physical volume buttons on the side of your iPhone to make it louder or quieter. You can also go to Maps → the route overview screen → tap the speaker icon to choose between loud, normal, or no voice. Many people find loud is best when driving so they can hear it clearly.`,
      },
      {
        title: 'Save a place you visit often',
        content: `Search for a place you want to save — your doctor's office, a family member's home, or a favorite restaurant. Scroll down on the location's information card and tap "Add to Favorites" (the heart icon). Saved favorites appear in Maps' search screen for one-tap access. You can also tap "Add to Guides" to create themed lists like "My Doctors" or "Family Homes."`,
      },
      {
        title: 'Use Maps with Apple CarPlay if your car supports it',
        content: `If your car has an infotainment screen with CarPlay support, you can mirror Apple Maps on your car's larger screen. Connect your iPhone to your car using a USB cable (or wirelessly on newer iPhones) and CarPlay starts automatically. You'll see Maps and other apps on your car's display — this keeps your eyes on the road better than looking at your phone.`,
        tip: 'Even without CarPlay, many people prop their phone in a cup holder or on a phone mount attached to the dashboard. A phone mount costs $10-$20 at any electronics or auto parts store.',
      },
    ],
  },

  {
    slug: 'how-to-use-my-social-security-account',
    title: 'How to Create and Use Your my Social Security Online Account',
    excerpt: "The Social Security Administration's free online account lets you check your benefits, earnings record, and more — here's how to set it up.",
    category: 'government-civic',
    tags: ['social security', 'SSA', 'benefits', 'government', 'retirement', 'online account'],
    readTime: '6 min',
    thumbnailEmoji: '🏛️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "The Social Security Administration offers a free online account called my Social Security at ssa.gov/myaccount. Once you create your account, you can view your estimated future benefits, check your earnings history, get a benefit verification letter, and manage direct deposit information — all without calling or visiting an SSA office.",
    steps: [
      {
        title: 'Go to the official Social Security website',
        content: `Open a browser on your phone or computer and go to ssa.gov/myaccount. This is the official Social Security Administration website. Do not search for "Social Security login" and click a random result — type the address directly to make sure you're on the official site.`,
        warning: `Scammers create fake government websites that look identical to the real SSA site. Always go directly to ssa.gov — look for the ".gov" ending, which confirms it's a real government site.`,
      },
      {
        title: 'Create your account',
        content: `Click "Create an Account." You'll need to verify your identity. The SSA uses Login.gov, the US government's secure login system. Click "Sign in with Login.gov" → "Create an account." Enter your email address and create a password. Login.gov will send a verification code to your email — enter it to confirm your address. You'll also be asked to set up two-step verification using your phone number.`,
        tip: `Login.gov is used for many government websites. If you've used it before for another government service, you can use the same account to log in to my Social Security.`,
      },
      {
        title: 'Verify your identity with your Social Security number',
        content: `After creating your Login.gov account, the SSA will ask you to verify your identity by confirming your Social Security number and some personal information — your name, date of birth, and address. This information is used only to confirm you're the account owner, not stored for other purposes. The entire process usually takes about 10-15 minutes.`,
      },
      {
        title: 'Explore your account features',
        content: `Once signed in, you'll see your Social Security account dashboard. Key things to check: "Review your Social Security Statement" shows your complete earnings history and estimated future monthly benefit at different retirement ages. "Get a Benefit Verification Letter" creates an official letter proving your benefit amount — useful for housing or financial applications. "Update Direct Deposit" lets you change which bank receives your payments.`,
        tip: 'Check your earnings history carefully. If you notice a year where your earnings appear as $0 but you were working, this could affect your future benefits. Contact the SSA at 1-800-772-1213 if you spot an error.',
      },
      {
        title: 'Check your estimated benefits',
        content: `Click "Review your full Social Security Statement." Scroll down to "Your estimated benefits." You'll see estimates for retirement benefits at different ages — at 62 (early), at your full retirement age, and at 70 (maximum). These estimates help you plan when to claim Social Security. The longer you wait (up to age 70), the higher your monthly benefit will be.`,
      },
    ],
  },

  {
    slug: 'investment-scams-social-media',
    title: 'How to Recognize Investment Scams on Social Media',
    excerpt: 'Scammers are using Facebook, Instagram, and TikTok to run fake investment schemes — learn the warning signs before you lose money.',
    category: 'safety-guides',
    tags: ['investment scam', 'social media', 'fraud', 'facebook', 'cryptocurrency', 'scam'],
    readTime: '6 min',
    thumbnailEmoji: '📈',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Investment scams have become the number-one way scammers steal money from older adults, according to the Federal Trade Commission. The scammers post on Facebook, Instagram, TikTok, and YouTube showing fake screenshots of huge profits and promise to teach you how to make money in cryptocurrency, stocks, or foreign currency trading. The investments are entirely fake.",
    steps: [
      {
        title: 'Know the warning signs of investment scams',
        content: `Every investment scam has the same features: (1) guaranteed high returns with no risk — no real investment guarantees profits; (2) urgency — "this offer expires in 24 hours"; (3) unsolicited contact — someone you don't know reaches out about an investment opportunity; (4) requests for cryptocurrency, wire transfer, or gift cards — legitimate brokers never request these payment methods; (5) pressure to recruit friends and family.`,
        warning: 'In 2024, older adults reported losing more money to investment scams than any other fraud type, often losing tens of thousands of dollars. Most of these scams start on social media.',
      },
      {
        title: 'Watch out for "pig butchering" scams',
        content: `One of the most common investment scam formats is called "pig butchering." A friendly stranger contacts you on Facebook, Instagram, or a dating app, builds a friendship over weeks, then introduces you to a "great investment opportunity" — usually a fake cryptocurrency platform. You deposit money, see fake profits on the platform, try to withdraw, and discover you've been scammed. The scammer disappears.`,
        tip: 'The Federal Bureau of Investigation (FBI) warns that these scammers are patient and skilled at building trust over weeks or months before introducing the investment.',
      },
      {
        title: 'Before investing, verify with FINRA',
        content: 'Before putting any money into an investment recommended online, check whether the person or company is registered at brokercheck.finra.org. This is a free tool from the Financial Industry Regulatory Authority that shows whether a broker or firm is licensed. Unregistered brokers offering high returns are almost always scammers.',
      },
      {
        title: 'Report investment scams to the FTC and SEC',
        content: `If you've been contacted by a scammer or lost money, report it to: the FTC at reportfraud.ftc.gov; the SEC (Securities and Exchange Commission) at sec.gov/tcr; the FBI's Internet Crime Complaint Center at ic3.gov. Reporting helps investigators track down and shut down these operations and protects other people from the same scams.`,
      },
      {
        title: 'Be skeptical of financial advice from strangers online',
        content: `Real financial advisors are licensed and regulated by state and federal agencies. They don't recruit clients through Instagram comments or Facebook Messenger. If someone contacts you unsolicited about making money with investments, assume it's a scam. The general rule: if someone contacts you first with an investment opportunity — especially online — it's almost certainly not legitimate.`,
        tip: 'Talk to a family member, friend, or your bank before sending any money to an investment you learned about online. A second opinion costs nothing and can save thousands.',
      },
    ],
  },

  {
    slug: 'connect-bluetooth-headphones',
    title: 'How to Connect Bluetooth Headphones or Earbuds to Your Phone',
    excerpt: `Bluetooth headphones connect wirelessly to your phone for calls and music — here's how to pair them in a few simple steps.`,
    category: 'essential-skills',
    tags: ['bluetooth', 'headphones', 'earbuds', 'wireless', 'iphone', 'android', 'pairing'],
    readTime: '5 min',
    thumbnailEmoji: '🎧',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Bluetooth headphones and earbuds connect wirelessly to your phone — no cable needed. Once paired, they stay connected every time you put them near your phone. You can use them for calls, music, podcasts, or hearing your phone's speaker more clearly without disturbing others.",
    steps: [
      {
        title: 'Put your headphones or earbuds in pairing mode',
        content: 'Before you can connect Bluetooth headphones to a phone, you need to put them in "pairing mode" — a state where they broadcast their signal so your phone can find them. For most earbuds in a case (like AirPods or Galaxy Buds): open the case lid and hold the small button on the back of the case for 3-5 seconds until a light flashes. For over-ear headphones: turn them on by holding the power button for 5 seconds until you hear a tone or see a flashing light.',
        tip: 'The first time you pair a device, it needs to be in pairing mode. After that, the headphones connect automatically when you take them out of the case or turn them on near your phone.',
      },
      {
        title: 'Open Bluetooth settings on your iPhone',
        content: `Go to Settings → Bluetooth and make sure Bluetooth is turned on (the toggle should be green). Under "Other Devices," you'll see a list of Bluetooth devices nearby. Your headphones should appear in the list within 30-60 seconds. Tap the name of your headphones and they will connect. You'll hear a sound in the headphones confirming the connection.`,
      },
      {
        title: 'Open Bluetooth settings on Android',
        content: `Go to Settings → Connections (or "Connected devices" on some phones) → Bluetooth and make sure Bluetooth is on. Tap "Scan" or "Add new device." Your headphones should appear in the list. Tap the name of your headphones to connect. You'll see a "Connected" message on screen and usually hear a confirmation tone in the headphones.`,
        tip: 'After the first pairing, your phone remembers the headphones. In the future, when you open the case or turn on the headphones near your phone, they connect automatically within 5-10 seconds.',
      },
      {
        title: 'Use your headphones for phone calls',
        content: 'Once connected, incoming calls will play through your headphones automatically. To answer a call while wearing headphones, press the small button on the headphones (one press usually answers). To end the call, press the button once more. The microphone on the headphones picks up your voice so the other person can hear you clearly, even hands-free.',
      },
      {
        title: `Troubleshoot if the headphones won't connect`,
        content: `If your headphones don't appear in the Bluetooth list, try these steps in order: (1) Put the headphones back in pairing mode again (the pairing mode window is usually only 3 minutes). (2) Turn Bluetooth off on your phone and turn it back on. (3) Turn the headphones off and on again. (4) On iPhone, go to Settings → Bluetooth → tap the "i" next to the device → "Forget This Device," then pair again from scratch.`,
      },
    ],
  },

  {
    slug: 'how-to-take-better-phone-photos',
    title: 'How to Take Better Photos With Your Phone',
    excerpt: 'Your phone camera is more powerful than most people realize — a few easy adjustments can make your photos look dramatically better.',
    category: 'tips-tricks',
    tags: ['photos', 'camera', 'iphone', 'android', 'photography', 'tips'],
    readTime: '5 min',
    thumbnailEmoji: '📷',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Modern phone cameras can take photos that rival dedicated cameras — but a few common mistakes keep most people from getting the best results. The good news is that the improvements are simple and free, using features that are already built into your phone.",
    steps: [
      {
        title: 'Get the lighting right',
        content: `Lighting is the single biggest factor in photo quality. The rule: light should be in front of your subject, not behind them. If you're taking a portrait of someone outdoors, position them so the sun (or a bright sky) is in front of their face, not behind their head. Indoors, seat the person near a window and face them toward the light. Avoid using your phone's flash for close-up portraits — it creates harsh, unflattering light.`,
        tip: 'Overcast days with soft clouds are actually ideal for outdoor portraits — the clouds diffuse the light and eliminate harsh shadows.',
      },
      {
        title: 'Tap the screen to focus on what matters',
        content: `Your phone camera automatically tries to focus, but it doesn't always pick what's most important in your photo. Tap directly on the face, flower, or object you want sharp. A yellow square (iPhone) or circle (Android) will appear to confirm where the camera is focusing. The camera also adjusts brightness based on where you tap — tap a dark area to brighten the photo, or a bright area to darken it.`,
      },
      {
        title: 'Hold the phone steady with two hands',
        content: 'Blurry photos are almost always caused by movement when you tap the shutter button. Hold your phone with both hands and brace your elbows against your body. Take a breath and exhale slowly as you tap the shutter. You can also use the volume button on the side of your iPhone as a shutter button — many people find this less wobbly than tapping the screen.',
        tip: 'On iPhone, use the "burst mode" for moving subjects like children or pets — press and hold the shutter button to take 10 photos per second, then pick the sharpest one.',
      },
      {
        title: 'Use portrait mode for people photos',
        content: `Most modern phones have a "Portrait" mode that blurs the background and makes the person stand out. To use it on iPhone: open Camera and swipe to "Portrait." On Android (Samsung, Pixel): look for "Portrait" in the camera modes at the bottom. Stand 3-5 feet from the subject, make sure they're in good light, and take the photo. The result looks like a professional headshot.`,
      },
      {
        title: 'Edit your photos with the built-in tools',
        content: `After taking a photo, tap "Edit" in the Photos app (iPhone) or the pencil icon (Android) to improve it without any extra apps. "Brightness" makes dark photos lighter. "Contrast" makes colors pop. "Warmth" can remove the blue cast from indoor lighting. "Sharpness" can recover some blurry detail. The "Auto" button applies all adjustments automatically — tap it first and you'll often be happy with the result.`,
      },
    ],
  },

  {
    slug: 'how-to-share-photos-text-email',
    title: 'How to Share Photos With Family by Text or Email',
    excerpt: "Sharing photos from your phone is easy once you know where the Share button is — here's how to send a single photo or a whole album.",
    category: 'essential-skills',
    tags: ['photos', 'sharing', 'text message', 'email', 'family', 'iphone', 'android'],
    readTime: '4 min',
    thumbnailEmoji: '🖼️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "One of the most common questions people have is how to send photos to family members. The process is the same whether you're on an iPhone or Android — find the photo, tap Share, and choose how you want to send it.",
    steps: [
      {
        title: 'Open the photo you want to share',
        content: 'Open the Photos app on your phone and find the photo you want to share. Tap on it to open the full-size view.',
      },
      {
        title: 'Tap the Share button',
        content: 'On iPhone: tap the Share button — it looks like a square with an arrow pointing upward, located in the bottom left corner. On Android (Samsung, Pixel): tap the Share icon — it looks like three circles connected by lines, or an arrow pointing left, usually at the bottom of the screen.',
      },
      {
        title: 'Choose how to send the photo',
        content: `A menu will appear with options for how to share. To send by text: tap "Messages." To send by email: tap "Mail." To share via WhatsApp: tap "WhatsApp." To share to Facebook: tap "Facebook." After choosing a method, you'll be taken to a new message with the photo already attached — type the recipient's name or phone number and send.`,
        tip: 'To send multiple photos at once on iPhone: open the Photos app, tap "Select" in the top right, tap each photo you want (a blue checkmark appears), then tap the Share button. On Android, press and hold one photo, then tap others to select multiple, then tap the Share icon.',
      },
      {
        title: 'Use AirDrop to share instantly with nearby Apple devices',
        content: `If you're sharing with someone who's physically nearby and they have an iPhone or iPad, AirDrop is the fastest option — it transfers photos instantly over WiFi without using any of your data plan. Tap Share → AirDrop → tap the person's name if they appear in the list. They'll get a notification on their device asking if they want to accept.`,
        tip: 'AirDrop only works between Apple devices. For sharing with Android users, use text messages or email instead.',
      },
    ],
  },

  {
    slug: 'government-imposter-scam-guide',
    title: 'How to Recognize Government Imposter Scams (SSA, IRS, Medicare)',
    excerpt: `Scammers pretend to be from the Social Security Administration, IRS, or Medicare to steal money — here's how to tell the real from the fake.`,
    category: 'safety-guides',
    tags: ['scam', 'government imposter', 'SSA', 'IRS', 'Medicare', 'fraud'],
    readTime: '6 min',
    thumbnailEmoji: '🚨',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Government imposter scams are one of the most common types of fraud targeting older adults. Scammers call or email pretending to be from the Social Security Administration, IRS, Medicare, or other government agencies and threaten you with arrest, suspended benefits, or large fines unless you pay immediately. The calls and emails look and sound very convincing — but they are always fake.",
    steps: [
      {
        title: 'Know what real government agencies will never do',
        content: `The IRS, Social Security Administration, and Medicare will never: call and demand immediate payment by gift card, wire transfer, Zelle, or cryptocurrency; threaten to arrest you if you don't pay right now; ask you to confirm your Social Security number or bank account information over the phone in an unsolicited call; send someone to your home to collect payment; or send threatening emails asking you to click a link to avoid penalties.`,
        warning: 'Scammers have technology that makes caller ID show the actual phone numbers of the IRS or SSA. A real-looking caller ID does NOT confirm the call is legitimate.',
      },
      {
        title: 'Recognize the specific scams',
        content: 'Common government imposter scripts: "Your Social Security number has been suspended due to suspicious activity — press 1 to speak with an officer." "You owe back taxes and a warrant has been issued for your arrest — call immediately." "Your Medicare benefits have been suspended — we need to verify your card number." "Your SNAP/Medicaid benefits are at risk — confirm your information now." All of these are scams.',
      },
      {
        title: 'What to do when you get a suspicious call',
        content: `Hang up. Do not press 1 or any other number, which can connect you to a scammer or confirm your number is active. If you're worried the call might be real, hang up and call the agency back at their official number: SSA: 1-800-772-1213 | IRS: 1-800-829-1040 | Medicare: 1-800-633-4227. These numbers are on the official websites ssa.gov, irs.gov, and medicare.gov.`,
      },
      {
        title: 'Report the call to the FTC and OIG',
        content: `Report SSA impersonation scams to the Social Security Administration's Office of Inspector General at oig.ssa.gov/report. Report IRS scams at reportphishing.antiphishing.org. Report all government imposter scams to the FTC at reportfraud.ftc.gov. If you sent money or gave information, also contact your bank and place a fraud alert on your credit reports at equifax.com, transunion.com, and experian.com.`,
        tip: `The AARP Fraud Watch Network Helpline at 1-877-908-3360 is free and available to anyone. If you're unsure whether a call or letter is real, call AARP's helpline before taking any action.`,
      },
    ],
  },

  {
    slug: 'recovery-scam-what-to-know',
    title: "The 'We'll Get Your Money Back' Recovery Scam — What to Know",
    excerpt: 'After losing money to a scam, some victims get contacted by scammers offering to recover the money — for an upfront fee. This is always another scam.',
    category: 'safety-guides',
    tags: ['recovery scam', 'fraud', 'scam', 'money recovery', 'victim'],
    readTime: '5 min',
    thumbnailEmoji: '💰',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "If you've lost money to a scam, you may receive a phone call, email, or social media message from someone claiming they can recover your stolen money — for a fee. This is almost always a second scam targeting the same victim. The FTC warns that recovery scams are rising sharply as more people lose money to the original frauds.",
    steps: [
      {
        title: 'Understand how recovery scams work',
        content: `After losing money to a tech support scam, romance scam, or investment scam, your name and contact information may be sold on criminal networks to other scammers. The recovery scammer contacts you, claims to be a law firm, government agency, or recovery service, and says they've located your stolen funds and can return them — for an upfront fee, "taxes," or "insurance." After you pay, they disappear and you lose more money.`,
        warning: 'The people running recovery scams often claim to be with the FBI, FTC, or a law firm. They use convincing fake documents and websites. There is no legitimate recovery service that requires an upfront fee to return stolen money.',
      },
      {
        title: 'Know the warning signs',
        content: `Every recovery scam shares these red flags: (1) They contacted you first — you didn't seek them out; (2) They claim to know the details of your previous scam loss; (3) They ask for an upfront payment, "retainer," or "release fee" before any recovery happens; (4) They promise specific amounts will be returned; (5) They pressure you to act quickly before the opportunity expires.`,
      },
      {
        title: `What to do if you're contacted by a recovery scammer`,
        content: 'Do not pay anything. Do not provide any personal information. Report the contact to the FTC at reportfraud.ftc.gov. Block the number and email address. Unfortunately, if your money was lost to a gift card scam, wire transfer, or cryptocurrency, it is extremely difficult to recover. No fee-charging service can change this reality.',
      },
      {
        title: 'How to actually try to recover lost money',
        content: `The only legitimate free resources for scam victims: if you paid by credit card, dispute the charge with your card issuer immediately (you have more protection than with debit cards). If you wired money within the last 24 hours, call your bank immediately — some wire transfers can be recalled. If you paid by gift card, call the gift card company's fraud line — some companies have small victim recovery funds. Report to the FTC at reportfraud.ftc.gov and to your state attorney general.`,
        tip: 'A free, legitimate resource is the Identity Theft Resource Center at idtheftcenter.org or by phone at 888-400-5530. They help scam victims understand their options at no cost.',
      },
    ],
  },

  {
    slug: 'how-to-use-google-meet',
    title: 'How to Use Google Meet for Free Video Calls',
    excerpt: 'Google Meet is a free video calling service built into Gmail — you can start or join a call with anyone who has an email address.',
    category: 'essential-skills',
    tags: ['google meet', 'video call', 'google', 'gmail', 'meeting', 'free'],
    readTime: '5 min',
    thumbnailEmoji: '📞',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Google Meet is a free video calling service from Google. It works in your web browser without any download, and it's built directly into Gmail. You can use it to video call family, attend virtual events, or join telehealth appointments — for free, with no time limits for calls of up to 60 minutes.",
    steps: [
      {
        title: 'Access Google Meet through Gmail or the website',
        content: `The fastest way to access Google Meet is through Gmail. Open Gmail on your computer or phone. On the left side, you'll see a section called "Meet" with options to "Start a meeting" or "Join a meeting." You can also go directly to meet.google.com in any browser. On your phone, download the free "Google Meet" app from the App Store or Google Play.`,
      },
      {
        title: 'Start a new video call',
        content: `Click or tap "New Meeting" or "Start a meeting." Google Meet will ask for permission to use your camera and microphone — click or tap "Allow." You'll see yourself on screen in a preview. Click "Start now" to open the meeting room. To invite someone, click "Add people" or "Copy joining info" to get a link you can send by text or email.`,
        tip: `Before clicking "Start now," you'll see a preview of how you look and sound. Use this to check your lighting and camera angle.`,
      },
      {
        title: 'Join a meeting from a link someone sent you',
        content: `If someone sends you a Google Meet link (it looks like meet.google.com/abc-defg-hij), tap or click it. Google Meet will open in your browser or app. You may be placed in a "waiting room" if the organizer hasn't started the meeting yet. Click "Ask to join" and the organizer will admit you. Make sure to allow camera and microphone access when prompted.`,
      },
      {
        title: 'Use the controls during the call',
        content: 'During a Google Meet call, the controls are at the bottom center of the screen. The microphone icon mutes/unmutes you. The camera icon turns your video on or off. The three dots menu has more options including changing your background, turning on captions (which shows what people are saying in text), and recording the meeting. The red phone icon ends the call.',
        tip: 'Turn on "Captions" if you have trouble hearing — Google Meet shows a real-time text transcript of everything being said during the call. Find it under the three-dot menu → Turn on captions.',
      },
    ],
  },

  {
    slug: 'how-to-use-siri-iphone',
    title: 'How to Use Siri to Control Your iPhone With Your Voice',
    excerpt: "Siri is Apple's built-in voice assistant — just say 'Hey Siri' and ask it anything, set reminders, make calls, or send texts hands-free.",
    category: 'tips-tricks',
    tags: ['siri', 'voice assistant', 'iphone', 'hands-free', 'accessibility'],
    readTime: '4 min',
    thumbnailEmoji: '🎤',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Siri is Apple's voice assistant, available on every iPhone, iPad, and Mac. You activate it by saying 'Hey Siri' or pressing a button, and then you talk to it naturally. Siri can set timers and reminders, make calls, send texts, answer questions, open apps, and control settings — all without you having to tap the screen.",
    steps: [
      {
        title: 'Turn on Hey Siri',
        content: `Go to Settings → Siri & Search → turn on "Listen for 'Hey Siri.'" If prompted, speak a few phrases so Siri learns your voice. Once enabled, you can activate Siri at any time — even when your phone is locked and face-down on a table — by saying "Hey Siri" out loud.`,
        tip: 'You can also activate Siri by pressing and holding the side button (on Face ID iPhones) or the Home button (on older iPhones with a round button at the bottom).',
      },
      {
        title: 'Ask Siri practical questions and commands',
        content: `Say "Hey Siri" followed by your request in plain language. Useful examples: "Hey Siri, call Mom" — "Hey Siri, what's the weather tomorrow?" — "Hey Siri, set a timer for 20 minutes" — "Hey Siri, remind me to take my pill at 9 AM every day" — "Hey Siri, send a text to John saying I'll be there at 3" — "Hey Siri, how many cups in a gallon?" — "Hey Siri, turn up the volume."`,
      },
      {
        title: 'Use Siri to open apps and control settings',
        content: 'Siri can open any app by name: "Hey Siri, open Facebook" or "Hey Siri, open Maps." It can also adjust settings: "Hey Siri, turn on WiFi" — "Hey Siri, make my screen brighter" — "Hey Siri, turn on Do Not Disturb" — "Hey Siri, increase text size." This is especially useful if you find it hard to navigate through multiple Settings menus.',
      },
      {
        title: 'Use Siri to read and respond to messages',
        content: 'Say "Hey Siri, read my latest message" to hear your most recent text. Siri will read it out loud and ask "Would you like to reply?" Say "Yes" and then speak your reply — Siri will transcribe it and ask you to confirm before sending. This lets you have a full text conversation without looking at your phone, which is particularly useful while cooking, doing chores, or when your hands are full.',
      },
    ],
  },

  {
    slug: 'how-to-use-google-assistant',
    title: 'How to Use Google Assistant on Android to Get Things Done With Your Voice',
    excerpt: "Google Assistant lets you control your Android phone, get answers, and set reminders — all by speaking naturally.",
    category: 'tips-tricks',
    tags: ['google assistant', 'voice assistant', 'android', 'hands-free', 'google'],
    readTime: '4 min',
    thumbnailEmoji: '🤖',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Google Assistant is Google's voice assistant built into Android phones. Say 'Hey Google' and then talk to it like you're talking to a person. It can answer questions, set reminders, play music, open apps, make calls, and control smart home devices — all hands-free.",
    steps: [
      {
        title: 'Set up Google Assistant and enable Hey Google',
        content: 'On most Android phones, Google Assistant is already set up. To enable "Hey Google" (the voice activation phrase), open the Google app (the colorful G icon), tap your profile picture in the top right, tap Settings → Google Assistant → Hey Google & Voice Match → turn on "Hey Google." Follow the prompts to teach Google your voice.',
        tip: 'Some older Android phones use "OK Google" instead of "Hey Google" — both phrases work on most devices.',
      },
      {
        title: 'Try these practical commands',
        content: `Say "Hey Google" followed by your request. Useful examples: "Hey Google, call home" — "Hey Google, what's today's weather?" — "Hey Google, set an alarm for 7 AM" — "Hey Google, remind me to take my medication at noon" — "Hey Google, open Gmail" — "Hey Google, navigate to 123 Main Street" — "Hey Google, how many steps have I taken today?" — "Hey Google, text Sarah I'm running late."`,
      },
      {
        title: 'Use Google Assistant for quick calculations and lookups',
        content: `Google Assistant is great for instant answers while your hands are busy. "Hey Google, what's 15% of $47?" — "Hey Google, convert 350 degrees Fahrenheit to Celsius" — "Hey Google, what's the phone number for CVS on Oak Street?" — "Hey Google, when does Walmart close?" — "Hey Google, what are the side effects of metformin?" — "Hey Google, translate 'where is the bathroom' into Spanish."`,
      },
      {
        title: `Control your phone's settings with your voice`,
        content: 'You can control many phone settings through voice commands: "Hey Google, turn on Bluetooth" — "Hey Google, turn up the volume" — "Hey Google, take a screenshot" — "Hey Google, flashlight on" — "Hey Google, turn on airplane mode." This is especially helpful in situations where tapping through menus is inconvenient.',
        tip: `If Google Assistant doesn't understand you the first time, try speaking a little more slowly and clearly. Background noise can sometimes interfere — moving to a quieter spot helps.`,
      },
    ],
  },

  {
    slug: 'connect-iphone-to-tv',
    title: 'How to Show Your iPhone Screen on Your TV',
    excerpt: "You can mirror your iPhone's screen on your TV to share photos, watch videos, or make video calls on a bigger screen — here's how.",
    category: 'tips-tricks',
    tags: ['iphone', 'TV', 'AirPlay', 'screen mirroring', 'Apple TV', 'HDMI'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Connecting your iPhone to your TV lets you show photos and videos on a big screen — great for sharing vacation pictures with family, watching movies, or doing a FaceTime video call so everyone can see. There are three main ways to do this depending on what equipment you have.",
    steps: [
      {
        title: 'Use AirPlay with an Apple TV or AirPlay-compatible smart TV (wireless)',
        content: 'This is the most convenient method if you have an Apple TV or a smart TV made after 2019 that supports AirPlay 2 (most Samsung, LG, Sony, and Vizio TVs do). Make sure your iPhone and TV are connected to the same WiFi network. On your iPhone, swipe down from the top right corner to open Control Center. Tap "Screen Mirroring" (the icon with two overlapping rectangles). Your TV should appear in the list — tap it. Your iPhone screen will appear on your TV.',
        tip: 'To stop mirroring, open Control Center again, tap Screen Mirroring, and tap "Stop Mirroring."',
      },
      {
        title: 'Use an HDMI adapter cable (wired)',
        content: `If you don't have AirPlay, you can connect with a cable. You'll need a Lightning to HDMI adapter (for older iPhones with a Lightning port) or a USB-C to HDMI adapter (for iPhone 15 and newer). These cost $15-$30 at Amazon, Apple, or electronics stores. Plug the adapter into your iPhone, connect an HDMI cable to the adapter and then to your TV, and switch your TV to the correct HDMI input — your iPhone screen will appear instantly.`,
      },
      {
        title: 'Share photos and videos to a smart TV without full screen mirroring',
        content: `If you just want to watch a specific video or show a photo rather than mirror your whole screen, open the Photos app, select the photo or video, tap the Share button, and look for your TV's name in the sharing options (it may show as "Play on TV" or your TV's name). For videos, many smart TVs support "casting" from the YouTube or Netflix app directly — tap the cast icon (a rectangle with a WiFi symbol) in the app.`,
      },
      {
        title: `What to do if AirPlay doesn't show your TV`,
        content: `If your TV doesn't appear in the AirPlay list, check that both your iPhone and TV are on the same WiFi network (not one on 2.4GHz and the other on 5GHz). Restart both your TV and iPhone. On some TVs, you need to enable AirPlay in the TV's settings — look in the TV's settings for "Apple AirPlay" and make sure it's turned on.`,
      },
    ],
  },

  {
    slug: 'how-to-use-zelle-safely',
    title: 'How to Use Zelle to Send Money — and How to Use It Safely',
    excerpt: "Zelle sends money instantly from your bank account to another person's account — here's how to use it and what to watch out for.",
    category: 'financial-tech',
    tags: ['zelle', 'money transfer', 'bank', 'payments', 'send money', 'fraud'],
    readTime: '6 min',
    thumbnailEmoji: '💸',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Zelle is a fast, free way to send money directly from your bank account to someone else's bank account. It's built into most major bank apps, so you don't need a separate app. Money transfers instantly — usually within minutes. It's useful for splitting a dinner bill, paying rent, or reimbursing a family member. However, Zelle transfers cannot be reversed, which is why it's important to know how scammers try to misuse it.",
    steps: [
      {
        title: `Find Zelle in your bank's app`,
        content: `Zelle is already built into the apps of most major US banks — Bank of America, Chase, Wells Fargo, US Bank, Citibank, and hundreds of credit unions. Open your bank's app and look for a "Send Money," "Pay," or "Zelle" option in the main menu. If you can't find it, search the app for "Zelle." Alternatively, download the standalone Zelle app at zellepay.com.`,
        tip: 'Go to zellepay.com to see if your bank is enrolled in Zelle. Most major US banks and credit unions are listed.',
      },
      {
        title: 'Send money to someone you trust',
        content: `In Zelle, tap "Send Money." Enter the recipient's email address or US mobile phone number. Type the amount you want to send. Add a memo if you want (like "Splitting dinner" or "Birthday gift"). Review the details carefully and tap "Send." The money leaves your account immediately and arrives in the recipient's account usually within minutes.`,
        warning: 'Always double-check the email address or phone number before sending. Once you send money with Zelle, it cannot be reversed unless the recipient voluntarily returns it.',
      },
      {
        title: 'Know how Zelle is misused in scams',
        content: `Scammers love Zelle because transfers are instant and cannot be reversed. Common Zelle scams: someone "accidentally" sends you money and asks you to send it back (the original transfer was made with stolen information and will be reversed by your bank, leaving you responsible); someone poses as your bank's fraud department and asks you to Zelle money to "protect" your account; a seller asks for Zelle payment for an item they never actually intend to send.`,
      },
      {
        title: 'The rules for safe Zelle use',
        content: 'Three rules to keep your money safe with Zelle: (1) Only send money to people you know and trust in real life — Zelle is for personal payments, not purchases from strangers. (2) Your bank will never ask you to send money via Zelle. If someone claiming to be from your bank asks you to Zelle money, hang up and call your bank at the number on your card. (3) Never accept a Zelle payment from a stranger and then send money back — this is always a scam.',
        tip: 'For purchases from strangers (like Facebook Marketplace or Craigslist), use a method with buyer protection like a credit card or PayPal Goods & Services — never Zelle.',
      },
    ],
  },

  {
    slug: 'how-to-delete-apps-iphone-android',
    title: 'How to Delete Apps You No Longer Use',
    excerpt: "Deleting apps you don't use frees up storage and clears clutter from your phone — here's how to do it on iPhone and Android.",
    category: 'tips-tricks',
    tags: ['delete apps', 'uninstall', 'storage', 'iphone', 'android', 'phone space'],
    readTime: '3 min',
    thumbnailEmoji: '🗑️',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Apps you downloaded once and never use again take up storage space on your phone and can even drain your battery in the background. Deleting unused apps is one of the quickest ways to free up space. Don't worry — deleting an app doesn't delete your account with that service. If you want to use it again, just download it from the App Store or Google Play.",
    steps: [
      {
        title: 'Delete an app on iPhone',
        content: `Press and hold your finger on any app icon on your Home Screen. After a moment, the icons will start to "wiggle" and small X symbols will appear in the top corners. Tap the X on the app you want to remove. A pop-up asks "Remove App?" — tap "Delete App" to confirm. If you're not sure what an app does, tap "Remove from Home Screen" instead of deleting it — this hides it without deleting it.`,
        tip: `On iOS 17 and later, you can also find and delete apps by going to Settings → General → iPhone Storage. You'll see a list of all apps with their file sizes. Tap any app, then "Delete App."`,
      },
      {
        title: 'Delete an app on Android',
        content: 'Press and hold the app icon you want to remove. A small menu will appear — tap "Uninstall." Or drag the app icon to the "Uninstall" text that appears at the top of the screen. Tap "OK" to confirm. On some Samsung phones, tap "App info" from the menu, then tap "Uninstall."',
        tip: 'You can also uninstall multiple apps at once on Android: open the Google Play Store → tap your profile picture → Manage apps & device → Manage → check boxes next to multiple apps → tap the trash icon.',
      },
      {
        title: 'Check which apps are using the most space',
        content: 'To find the biggest space-wasters on your phone: On iPhone, go to Settings → General → iPhone Storage. Apps are listed from largest to smallest. On Android, go to Settings → Storage → Apps (the name varies by phone model). Look for apps with large sizes that you rarely use. Games, photo editing apps, and social media apps are often the biggest.',
      },
    ],
  },

  {
    slug: 'facetime-on-ipad',
    title: 'How to Make FaceTime Video Calls on an iPad',
    excerpt: "FaceTime works on every iPad just like on iPhone — here's how to make calls and use the iPad's bigger screen for more comfortable video chats.",
    category: 'essential-skills',
    tags: ['facetime', 'ipad', 'video call', 'apple', 'family', 'communication'],
    readTime: '4 min',
    thumbnailEmoji: '📲',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "FaceTime on an iPad works the same way as on an iPhone, with one advantage: the bigger screen makes it easier to see the person you're talking to. iPads are especially popular for FaceTime because they're easy to prop up on a table, leaving your hands free during the call.",
    steps: [
      {
        title: 'Find and open FaceTime on your iPad',
        content: `The FaceTime app has a green icon with a white video camera. If you don't see it on your Home Screen, swipe left to check other pages, or swipe down from the middle of the screen to search. Type "FaceTime" in the search bar. If FaceTime isn't installed, open the App Store and download it for free.`,
      },
      {
        title: 'Make a FaceTime call',
        content: `Tap the plus (+) button in the top right of FaceTime. Type the name of someone in your contacts, or their phone number or Apple ID email address. Tap their name when it appears. Tap "Video" to start a video call. Their device will ring and when they accept, you'll see their face on the screen.`,
        tip: `FaceTime works best over WiFi. If you're using cellular data, FaceTime may use mobile data — check Settings → Cellular → FaceTime to confirm cellular is allowed.`,
      },
      {
        title: 'Prop up your iPad for hands-free calling',
        content: 'One of the best things about using an iPad for FaceTime is being able to set it on a stand or prop it against something so your hands are free. The smart cover or keyboard case that came with your iPad often doubles as a stand. You can also purchase a simple iPad stand for $10-$20 at most electronics stores. Position it so the front camera is at roughly eye level for the most natural-looking conversation.',
      },
      {
        title: 'Use FaceTime with a group',
        content: `To add more people to a FaceTime call on your iPad, tap the screen to see controls, then tap "Add Person" (the person icon with a plus). Type in another person's name or contact. They'll be added to the call. With a Group FaceTime on the larger iPad screen, you can see multiple people at once — great for family gatherings or when relatives are spread across different cities.`,
      },
    ],
  },

  {
    slug: 'scan-documents-iphone',
    title: 'How to Scan Documents Using Your iPhone (No Scanner Needed)',
    excerpt: "Your iPhone can scan any paper document and save it as a PDF — here's how to use the built-in scanner in the Notes app.",
    category: 'essential-skills',
    tags: ['scan', 'documents', 'iphone', 'PDF', 'notes', 'paperwork'],
    readTime: '4 min',
    thumbnailEmoji: '📄',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "Your iPhone has a built-in document scanner hidden in the Notes app. It automatically straightens documents, adjusts the contrast to make text easy to read, and saves the result as a PDF you can share by email or text. You don't need a separate scanner or any extra apps.",
    steps: [
      {
        title: 'Open a new note in the Notes app',
        content: 'Open the Notes app (the yellow icon with white lines). Tap the compose icon in the bottom right corner to create a new note. At the bottom of the keyboard, tap the camera icon (it looks like a camera with two arrows). A menu pops up — tap "Scan Documents."',
        tip: 'You can also access the scanner without creating a new note: hold your finger on the Notes app icon on the Home Screen and tap "Scan Document" from the quick action menu.',
      },
      {
        title: 'Position the document and let the iPhone capture it',
        content: `Place your document on a flat surface with good lighting — a table near a window works well. Hold your iPhone over the document. You'll see a yellow or green rectangle automatically outline the document edges. When the shape is clearly detected, the iPhone takes the photo automatically. If it doesn't take the photo on its own after a few seconds, tap the white shutter button.`,
        tip: `You don't need perfect lighting, but the clearer the contrast between the document and the surface it's resting on, the better. A white document on a dark table scans beautifully.`,
      },
      {
        title: 'Scan multiple pages',
        content: `After each page is scanned, you can keep scanning more pages to add to the same document. Move to the next page of your document and hold the iPhone over it — the iPhone will scan it automatically. When you're done scanning all pages, tap "Save." The entire multi-page document is saved as a single file in your Note.`,
      },
      {
        title: 'Share the scanned document',
        content: `To share the scan: open the note containing your scanned document. Tap the share icon (square with upward arrow). Choose how to send it: tap "Mail" to email it, "Messages" to text it, or "Save to Files" to save it to your iPhone's storage. Most recipients will receive it as a PDF, which can be opened on any device.`,
      },
    ],
  },

  {
    slug: 'how-to-update-apps',
    title: 'How to Update Apps on iPhone and Android',
    excerpt: `Keeping apps updated fixes bugs, improves security, and gives you new features — here's how to update on both platforms.`,
    category: 'essential-skills',
    tags: ['update apps', 'app store', 'google play', 'iphone', 'android', 'security'],
    readTime: '4 min',
    thumbnailEmoji: '🔄',
    publishedAt: '2026-04-19',
    difficulty: 'Beginner',
    body: "App updates fix security problems, patch bugs, and add new features. Keeping your apps updated — especially banking, email, and health apps — is an important part of keeping your phone secure. Both iPhones and Android phones can update apps automatically, but it's good to know how to do it manually too.",
    steps: [
      {
        title: 'Update apps on iPhone',
        content: `Open the App Store (the blue icon with a white A). Tap your profile picture in the top right corner. Scroll down to see "Available Updates." If apps need updating, you'll see them listed with an "Update" button. Tap "Update All" to update every app at once, or tap "Update" next to individual apps.`,
        tip: 'A red badge (circle with a number) on the App Store icon on your Home Screen means updates are waiting. Tap the badge to go directly to the updates list.',
      },
      {
        title: 'Turn on automatic app updates on iPhone',
        content: `To have your iPhone update apps automatically, go to Settings → App Store. Under "Automatic Downloads," turn on "App Updates." With this on, apps update in the background overnight over WiFi — you'll always have the latest version without having to manually check.`,
      },
      {
        title: 'Update apps on Android',
        content: 'Open the Google Play Store (the colorful triangle icon). Tap your profile picture in the top right corner. Tap "Manage apps & device." Tap "Updates available." Tap "Update all" to update everything, or tap "Update" next to specific apps.',
        tip: 'On Android, go to Play Store → profile picture → Settings → Network preferences → Auto-update apps → "Over Wi-Fi only" to enable automatic updates without using your mobile data.',
      },
      {
        title: `What to do if an app won't update`,
        content: `If an app shows "Update" but the update fails: make sure you have enough storage on your phone (go to Settings → General → iPhone Storage or Android Settings → Storage to check). If storage is low, delete unused apps first. Also make sure you're connected to WiFi. If the update still fails, try deleting the app and reinstalling it from the App Store or Google Play — your account and data are usually saved in the cloud.`,
      },
    ],
  },
];
