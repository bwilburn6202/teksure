// guides-batch-191 — 4 senior-priority guides on home blood sugar monitoring
// Drafted 2026-05-08 for diabetes self-care content gap
// Sourced from CDC, ADA, Apple Support, and FDA guidance

import type { Guide } from "./guides";

export const guidesBatch191: Guide[] = [
  {
    slug: "how-to-test-blood-sugar-at-home",
    title: "How to Test Your Blood Sugar at Home",
    excerpt: "A plain-English walkthrough for using a finger-stick glucose meter, from washing your hands to writing down your number.",
    category: "health-tech",
    tags: ["diabetes", "blood sugar", "glucose meter", "home health"],
    readTime: "7 min",
    thumbnailEmoji: "🩸",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Testing your blood sugar at home is one of the most useful things you can do to stay on top of diabetes. The number you see on the meter tells you and your doctor whether your food, medicine, and activity are keeping things in a safe range. Once you have done it a few times, the whole process takes about a minute.\n\nA standard home test uses three pieces: a small meter that shows the number, a test strip that you slide into the meter, and a lancing device that pricks the side of your fingertip to get a tiny drop of blood. Most kits come with everything you need, and pharmacies sell replacement strips and lancets without a prescription.\n\nThe side of your fingertip hurts less than the pad and gives a good reading. Many people rotate fingers so no single spot gets sore. If your hands are cold, run them under warm water for 30 seconds first — warm fingers give a drop of blood more readily, so you do not have to squeeze hard.\n\nYour doctor will tell you when to test. Common times are first thing in the morning before eating (called fasting), two hours after a meal, and at bedtime. Some people only test once a day; others test four or more times. Write down each number along with the time and what you ate, because patterns matter more than any single reading.\n\nA normal fasting reading for most adults with diabetes is between 80 and 130 mg/dL, and after meals under 180 mg/dL. Anything under 70 is low and needs quick treatment with juice or glucose tablets. Anything over 240 with symptoms like heavy thirst or confusion is a reason to call your doctor the same day.",
    steps: [
      {
        title: "Gather your supplies on a clean surface",
        content: "Set out your meter, a fresh test strip, the lancing device with a new lancet inside, and a tissue. Check the expiration date printed on the strip container — old strips give wrong readings. Have your logbook or phone nearby so you can write down the number when you are done.",
      },
      {
        title: "Wash your hands with warm, soapy water",
        content: "Wash for about 20 seconds, then dry completely. Soap residue or food on your fingers can throw off the reading by a lot. Skip alcohol wipes if you can — they dry out the skin and can sting. Warm water also brings blood closer to the surface so the prick hurts less.",
      },
      {
        title: "Load a test strip into the meter",
        content: "Take one strip out of the bottle and close the lid right away (strips spoil if left open). Slide the strip into the slot on top of the meter, with the contact end going in first. The meter turns on automatically and shows a small drop-of-blood symbol when it is ready for your sample.",
        tip: "Never reuse a strip. Each one is single-use and will not work a second time.",
      },
      {
        title: "Prick the side of a fingertip",
        content: "Press the lancing device firmly against the side of any fingertip (not the pad) and click the button. You will feel a quick pinch. Squeeze gently from the base of the finger toward the tip until a small round drop forms — about the size of a pencil eraser tip.",
      },
      {
        title: "Touch the drop to the test strip",
        content: "Bring the edge of the test strip to the drop of blood. The strip pulls the blood in by itself — you do not press the strip into your finger. The meter beeps or shows a countdown for about 5 seconds, then displays your number in mg/dL.",
        warning: "If the meter shows an error or the number looks wrong, wash your hands again and retest with a fresh strip before acting on it.",
      },
      {
        title: "Write down the number and time",
        content: "Note the reading, the time of day, and whether it was before or after a meal. A simple notebook works, or you can type it into the Health app on iPhone or Google Fit on Android. Bring this log to every doctor appointment.",
      },
      {
        title: "Throw away the lancet safely",
        content: "Used lancets are sharp and can carry blood, so do not toss them loose in the trash. Drop them in a hard plastic container with a screw-on lid (an empty laundry detergent bottle works) and label it \"Sharps.\" When full, your pharmacy or county health department will tell you where to drop it off.",
      },
    ],
  },
  {
    slug: "how-to-spot-low-blood-sugar-signs",
    title: "How to Spot Low Blood Sugar Warning Signs",
    excerpt: "Learn the body signals that mean your blood sugar is dropping, plus the 15-15 rule for treating it fast at home.",
    category: "health-tech",
    tags: ["diabetes", "hypoglycemia", "low blood sugar", "warning signs"],
    readTime: "6 min",
    thumbnailEmoji: "⚠️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Low blood sugar, called hypoglycemia by doctors, happens when the sugar in your blood drops below about 70 mg/dL. For people who take insulin or certain diabetes pills, this can come on in minutes and needs to be treated right away. The good news is that your body sends clear warning signals, and once you know what to watch for, you can fix it at home with a few sips of juice or a handful of glucose tablets.\n\nThe earliest signs are usually shaky hands, a fast heartbeat, and a sudden feeling of hunger. You may sweat even though the room is not warm, or feel a wave of dizziness when you stand up. Many people describe a strange jittery feeling, like they drank too much coffee. These symptoms come from adrenaline, which your body releases to push sugar out of storage.\n\nIf the low keeps dropping, the brain starts running short on fuel. That is when thinking gets fuzzy, words come out wrong, and simple tasks feel impossible. Some people get cranky or weepy without knowing why. A spouse or grown child often notices the change before you do, which is one reason to tell people close to you what to look for.\n\nVery low blood sugar — below 54 mg/dL — is a medical emergency. The person may pass out, have a seizure, or be unable to swallow. In that case, do not try to give them food or drink. Instead, give a glucagon shot or nasal spray if you have one, then call 911.\n\nNighttime lows are sneaky because you sleep through them. Signs the next morning include damp pajamas, a pounding headache, or waking up confused. If this happens more than once, call your doctor — the bedtime medication dose may need to come down.\n\nThe standard treatment is the 15-15 rule: have 15 grams of fast sugar, wait 15 minutes, then test again. Repeat until the meter reads above 70 mg/dL.",
    steps: [
      {
        title: "Learn the early warning signs by heart",
        content: "The classic early signs are shakiness, sweating, a racing heart, sudden hunger, and dizziness. You may also feel anxious for no reason or get a tingling around the lips. Write these on a card and keep it in your wallet so a stranger or first responder can see it.",
      },
      {
        title: "Watch for thinking changes in yourself or a loved one",
        content: "If words come out garbled, vision goes blurry, or someone seems unusually cranky or confused, suspect low blood sugar — especially within a few hours of an insulin dose. Family members are often the first to notice these mental changes.",
        tip: "Tell your spouse, neighbor, or anyone you see often what your warning signs look like. They may catch it before you do.",
      },
      {
        title: "Check with your meter if you can",
        content: "If a meter is within reach, do a finger-stick test right away. Anything under 70 mg/dL is officially low and needs treatment. If no meter is handy and you feel the symptoms, treat first and test second — the food will not hurt you if you turn out to be normal.",
      },
      {
        title: "Use the 15-15 rule to treat",
        content: "Have 15 grams of fast-acting sugar: 4 ounces of regular (not diet) juice or soda, 1 tablespoon of honey, or 4 glucose tablets from the pharmacy. Wait 15 minutes. Test again. If still under 70, repeat with another 15 grams. Once you are back above 70, eat a small snack with protein, like a cheese stick or peanut butter on crackers, to keep it from dropping again.",
        warning: "Do not treat with chocolate, ice cream, or a candy bar. The fat in them slows the sugar from getting into your blood, which is the opposite of what you need in an emergency.",
      },
      {
        title: "Know when to call 911",
        content: "Call 911 right away if the person passes out, has a seizure, cannot swallow safely, or does not improve after two rounds of the 15-15 rule. If you have a glucagon kit (an injection or nasal spray your doctor prescribed for emergencies), use it before the ambulance arrives.",
      },
      {
        title: "Write down what happened and tell your doctor",
        content: "After things settle, jot down the time, the reading if you took one, what you ate or did beforehand, and how you treated it. Bring this note to your next appointment. Two or more lows in a week is a sign your medication may need to be adjusted.",
      },
    ],
  },
  {
    slug: "how-to-choose-continuous-glucose-monitor",
    title: "How to Choose a Continuous Glucose Monitor",
    excerpt: "Compare the Dexcom G7, Freestyle Libre 3, and Eversense — and see which one fits your insurance and lifestyle.",
    category: "health-tech",
    tags: ["CGM", "diabetes", "Dexcom", "Freestyle Libre", "buying guide"],
    readTime: "9 min",
    thumbnailEmoji: "📡",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Intermediate",
    body: "A continuous glucose monitor, or CGM, is a small sensor you wear on your arm or belly that reads your blood sugar every few minutes and sends the number straight to your phone. No finger sticks, no pricking — you can check your level by glancing at your watch. For people with diabetes, this has changed the day-to-day experience of managing the disease.\n\nThree main brands sell CGMs to home users in the United States as of 2026: the Dexcom G7, the Abbott Freestyle Libre 3 Plus, and the Senseonics Eversense 365. Each one has trade-offs in price, sensor life, app quality, and how often you need to replace the part on your skin.\n\nThe Dexcom G7 is small (about the size of three stacked nickels) and lasts 10 days per sensor. It sends a reading every 5 minutes and has alarms that wake you up if your sugar drops at night. Most pharmacies stock it, and Medicare covers it for anyone who takes insulin or has had a serious low in the past year.\n\nThe Freestyle Libre 3 Plus is the thinnest sensor on the market and lasts 15 days, which means fewer replacements and a lower yearly cost. It sends a reading every minute. It used to require you to scan it with your phone, but the newer Plus version sends data automatically like the Dexcom does.\n\nThe Eversense 365 is different — a doctor inserts a small sensor under the skin of your upper arm, and it lasts a full year before replacement. You wear a removable patch on top that you can take off for showers or swimming. It costs more upfront but is the only option if you do not want to change a sensor every two weeks.\n\nMedicare covers all three for people who take insulin daily, and most private insurance does too. Without insurance, expect to pay $200 to $400 a month out of pocket. Talk with your doctor about which one fits your routine.",
    steps: [
      {
        title: "Check what your insurance will cover",
        content: "Call the number on the back of your insurance card and ask: \"Is the Dexcom G7 covered under my pharmacy benefit or my durable medical equipment benefit?\" Ask the same question for Freestyle Libre 3 Plus. Medicare Part B covers CGMs for anyone on insulin, with a 20% copay after the deductible.",
        tip: "Pharmacy-benefit CGMs are cheaper for most people because the copay is fixed, not a percentage. Ask the pharmacy to run both options.",
      },
      {
        title: "Decide how often you want to change the sensor",
        content: "Dexcom G7 lasts 10 days, Freestyle Libre 3 Plus lasts 15 days, and Eversense 365 lasts a full year (inserted by a doctor). If sticky patches irritate your skin, the longer-wear options mean fewer applications. If you travel a lot, the 15-day Libre means one less thing to pack mid-trip.",
      },
      {
        title: "Compare the phone apps",
        content: "Dexcom and Libre both have free apps for iPhone and Android. The Dexcom Clarity app shares your numbers with up to 10 family members in real time, which is helpful if a grown child wants to keep an eye on you. The Libre app has clean charts but fewer sharing options. Try downloading both apps before you buy — you can preview the screens.",
      },
      {
        title: "Think about alarms and sleep",
        content: "All three CGMs can wake you up with a phone alarm if your sugar drops overnight. Dexcom has the loudest, most customizable alarms — you can set different sounds for high vs low. If you sleep heavily or live alone, this matters more than features like styling.",
      },
      {
        title: "Ask your doctor for a prescription",
        content: "All CGMs need a prescription. At your next appointment, say: \"I would like to try a continuous glucose monitor. Which one do you recommend, and can you send the prescription to my pharmacy?\" Most doctors have a preference based on what their other patients use.",
      },
      {
        title: "Order a starter kit and ask about training",
        content: "When the kit arrives, do not rush. Both Dexcom and Abbott have free 15-minute video tutorials on their websites. Many diabetes educators (covered by Medicare) will sit with you in person for the first sensor application. Call your clinic and ask if they offer this.",
      },
      {
        title: "Plan for replacements before you run out",
        content: "Set a reminder on your phone to reorder sensors a week before the current one expires. Pharmacies sometimes run short, and sensors are not interchangeable between brands — you will need to wait if your refill is late. Auto-refill programs at chain pharmacies help avoid gaps.",
      },
    ],
  },
  {
    slug: "how-to-log-glucose-iphone-health-app",
    title: "How to Log Glucose Readings in the iPhone Health App",
    excerpt: "Track every finger-stick or CGM reading in one place on your iPhone, and share the chart with your doctor.",
    category: "health-tech",
    tags: ["iPhone", "Health app", "glucose", "diabetes", "Apple"],
    readTime: "6 min",
    thumbnailEmoji: "📱",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "The Health app on your iPhone is a free tool from Apple that comes pre-installed on every iPhone. It has a section called Blood Glucose where you can type in each reading from your meter, or pull readings in from a continuous glucose monitor. Once a few weeks of numbers are in there, the app draws a chart that shows your patterns at a glance — exactly the kind of picture your doctor wants to see.\n\nThe app is on the home screen as a white square with a red heart in the corner. If you cannot find it, swipe down on the home screen and type \"Health\" into the search bar at the top. Apple does not let you delete this app, so it is always there somewhere.\n\nYou do not need an Apple Watch or any other gear to use it. A plain iPhone running iOS 17 or newer works. The app is free, and Apple does not sell or share your health data — it stays on your phone unless you choose to share it.\n\nThere are three ways to get glucose readings into the app. The first is to type each one in by hand, which works fine if you test two or three times a day. The second is to scan a paper logbook with the camera and let the app read the numbers (a feature added in iOS 18). The third, and easiest, is to pair a Bluetooth meter or CGM and let it send the numbers automatically.\n\nOnce you have a few weeks of data, tap the Browse tab, then Blood Glucose, and you will see a graph of your readings over the past day, week, month, or year. The graph color-codes each dot: green for in range, yellow for borderline, red for too high or low. You can tap Share with Doctor to send a PDF straight to your patient portal or email.",
    steps: [
      {
        title: "Open the Health app and find Blood Glucose",
        content: "Tap the Health app icon (white square with a red heart). At the bottom, tap Browse. Scroll down to the section called Heart and Body, then tap Blood Glucose. If it is your first time, the screen will be blank with a button that says \"Add Data.\"",
      },
      {
        title: "Add your first reading by hand",
        content: "Tap Add Data in the top right. A small form appears with three boxes: the number from your meter (in mg/dL), the date, and the time. Type in the number, leave the date and time as the current moment (or tap to change them), and tap Add. The reading saves to the app right away.",
        tip: "Tap the small clock icon to log a reading from earlier in the day if you forgot at the time.",
      },
      {
        title: "Tag the reading as before-meal or after-meal",
        content: "After adding a number, tap the entry to open it. Tap the field called Meal Time and pick from Before Breakfast, After Breakfast, Before Lunch, After Lunch, Before Dinner, After Dinner, or Bedtime. This tag tells the app which target range to compare against, so the dot shows up the right color on the chart.",
      },
      {
        title: "Connect a Bluetooth meter or CGM (optional but easier)",
        content: "If you own a OneTouch Verio Reflect, Contour Next One, Dexcom G7, or Freestyle Libre 3 Plus, download that brand's app from the App Store. When the app asks for permission to write to Apple Health, tap Turn On All. From then on, every reading flows into the Health app automatically — no typing.",
      },
      {
        title: "View your trends on the chart",
        content: "Back on the Blood Glucose page, tap D, W, M, or Y at the top to see your readings over a Day, Week, Month, or Year. The line chart shows highs, lows, and the average. Tap any dot to see the exact number, time, and meal tag for that reading.",
      },
      {
        title: "Share a report with your doctor",
        content: "From the Blood Glucose page, scroll to the bottom and tap Export All Health Data. The phone makes a PDF with all your readings, charts, and dates. Tap the share icon (the square with an arrow) and pick Mail to email it to your doctor, or Save to Files and upload it to your patient portal at the next visit.",
        warning: "Do not text or share the PDF over public WiFi. Health data is sensitive — use email through your patient portal whenever you can.",
      },
      {
        title: "Set a daily reminder to log",
        content: "Open the Health app, tap your photo in the top right, then Notifications. Turn on a daily reminder for Blood Glucose at the time you usually test. The phone will buzz a gentle reminder, which helps build the habit during the first month.",
      },
    ],
  },
];
