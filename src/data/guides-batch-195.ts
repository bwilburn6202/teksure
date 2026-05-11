// guides-batch-195 — 4 senior-priority guides on receipts and product warranties
// Drafted 2026-05-08 to help older adults capture receipts and exercise warranty rights
// Sourced from FTC, Consumer Reports, AARP, manufacturer support pages, and Apple/Google support

import type { Guide } from "./guides";

export const guidesBatch195: Guide[] = [
  {
    slug: "how-to-scan-receipts-on-phone",
    title: "How to Scan and Save Receipts on Your Phone",
    excerpt: "Use the Notes or Files app to turn paper receipts into clear digital copies you can find years later when you need them.",
    category: "tips-tricks",
    tags: ["receipts", "phone", "scanning", "organization", "warranty"],
    readTime: "6 min",
    thumbnailEmoji: "🧾",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Paper receipts fade. The thermal paper that most stores print on uses heat-sensitive ink, and within 6 to 18 months the print turns gray and then disappears entirely. By the time the dishwasher breaks down two years after purchase, the receipt you tucked into a drawer is often a blank slip of paper. Without it, the store may refuse a return and the manufacturer may refuse a warranty claim.\n\nA scanned copy on your phone solves the problem. Modern smartphones already have a built-in scanner — there is nothing to download. On iPhone, the Notes app and the Files app both include a Scan Documents option that uses the camera, finds the edges of the paper automatically, and saves a clean PDF. On Android, the Google Drive app does the same thing through its plus button. The scanned image stays sharp forever and can be searched by date, store name, or item.\n\nA scan takes about 15 seconds per receipt. The phone's camera detects the paper's edges, snaps the picture, removes shadows and glare, and saves the result. You can scan a receipt right at the car after a store visit, or batch a stack of receipts at the kitchen table once a week.\n\nOnce scanned, receipts can be organized into folders by year or by category. A folder for each major appliance — refrigerator, washer, dryer, water heater — keeps the receipt and the warranty paperwork together for the entire life of the appliance. Cloud storage through iCloud or Google Drive backs everything up so a lost or broken phone does not erase years of records.\n\nThis guide walks you through scanning a single receipt with the built-in tools on iPhone or Android. Once the first one is done, the rest take seconds, and a year of receipts fits in a folder smaller than a single photo on the phone.",
    steps: [
      {
        title: "Open the right app for your phone",
        content: "On iPhone, open the Notes app (yellow notepad icon). Tap the square-with-pencil icon in the bottom right to start a new note. On Android, open the Google Drive app (a colored triangle). If you do not have Drive, install it free from the Play Store. Tap the colored plus button at the bottom right.",
        tip: "If your iPhone Notes app is missing, swipe down on the home screen, type \"Notes\" in the search bar at the top, and the app appears.",
      },
      {
        title: "Start a scan",
        content: "On iPhone, tap the camera icon above the keyboard, then tap \"Scan Documents.\" On Android Drive, tap the plus button, then tap \"Scan.\" The camera opens and the phone is ready to capture the receipt.",
      },
      {
        title: "Hold the phone over the receipt",
        content: "Lay the receipt flat on a dark surface like a wood table or a placemat. Hold the phone about 12 inches above it, level with the table. The phone draws a yellow or blue rectangle around the paper when it sees the edges. When the rectangle locks on, the phone snaps the picture on its own. If it does not snap automatically, tap the white shutter button.",
        warning: "Avoid bright overhead lights that cast shadows from your hands. If part of the receipt looks dark in the preview, move so the light is behind you instead of behind the phone.",
      },
      {
        title: "Adjust the corners and save",
        content: "The phone shows the captured image with four dots at the corners. Drag any corner that is not on the edge of the paper. Tap \"Keep Scan\" on iPhone or the checkmark on Android. To add another receipt to the same scan, place a new receipt under the camera and repeat. When done, tap \"Save\" on iPhone or the checkmark on Android.",
      },
      {
        title: "Name the file with the store and date",
        content: "Type a name like \"Lowes washer 2026-05-08\" so it is searchable later. Include the store, the item, and the date. Tap Done. The PDF saves into Notes (iPhone) or Drive (Android) and syncs to the cloud automatically if you are signed in.",
      },
      {
        title: "Make a Receipts folder for the year",
        content: "On iPhone in the Files app or on Android in Drive, tap New Folder and name it \"Receipts 2026.\" Move the scan into that folder by tapping the three dots next to the file and choosing Move. Next year, make a \"Receipts 2027\" folder. Major-item receipts (appliances, electronics, furniture) deserve their own subfolder so warranty papers and the receipt stay together.",
      },
    ],
  },
  {
    slug: "how-to-register-product-warranty",
    title: "How to Register a Product to Extend the Warranty",
    excerpt: "Spend 5 minutes filling out the manufacturer's online form right after purchase to lock in coverage and sometimes add free extra months.",
    category: "tips-tricks",
    tags: ["warranty", "product registration", "consumer rights", "appliances", "electronics"],
    readTime: "6 min",
    thumbnailEmoji: "📝",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Product registration is the manufacturer's way of recording who owns each item, what model it is, and when it was bought. The information is used for two things: warranty claims and safety recalls. When a refrigerator catches fire because of a defective compressor, the manufacturer mails recall notices to every registered owner. Unregistered owners never hear about it unless they catch the news.\n\nRegistration also matters for warranty claims. A standard manufacturer warranty lasts 1 year on most appliances and electronics, sometimes 2 to 5 years on premium brands. The clock starts on the date of purchase. When the dishwasher fails 11 months after purchase, calling the manufacturer for a free repair requires proof of purchase and the model and serial number. If the product is registered, the manufacturer pulls the file in seconds. If not, the call takes 30 minutes of digging for old receipts.\n\nMany brands offer a registration bonus. LG, Samsung, GE, and Whirlpool sometimes add 6 extra months to the warranty for owners who register within 30 days of purchase. Bosch and Miele offer free first-year service plans for registered owners. Sony, LG, and Samsung televisions get extended firmware support. Sign-up bonuses vary, but the registration form takes 5 minutes either way.\n\nA growing concern with online registration is data privacy. Most forms ask for name, address, email, and the date of purchase — all reasonable. Some ask for income, household size, or shopping habits. Those questions are optional in nearly every case, even when the form does not say so. Skip every field that is not marked with a red asterisk, and the form still goes through.\n\nNever register through a card or QR code that came in the box without confirming the website. Scammers print fake registration cards that send buyers to look-alike domains and ask for credit card numbers. The legitimate site is always the manufacturer's main domain — samsung.com, lg.com, kitchenaid.com — found by typing the company name into the browser.",
    steps: [
      {
        title: "Find the model and serial number",
        content: "On most appliances, the model and serial numbers are printed on a sticker inside the door, on the back, or under the lid. On electronics, look on the back of the device or in the Settings menu under About. Write both numbers down on a sticky note along with the date and store of purchase. The model number says which product it is; the serial number says which exact unit you own.",
        tip: "Snap a photo of the sticker with your phone. The numbers are small and the sticker is often in an awkward spot. A photo lets you read it slowly later without bending behind the dryer.",
      },
      {
        title: "Go to the manufacturer's website",
        content: "Open a web browser and type the brand name followed by .com — samsung.com, lg.com, whirlpool.com, geappliances.com, kitchenaid.com, sony.com. Do not click on a Google ad result. Scroll to the bottom of the home page and look for a link labeled Support, Owner Center, Register My Product, or Product Registration. Click it.",
        warning: "If a card or QR code in the box sends you to a website that is not the manufacturer's main domain, close the page. Real registration sites end in the brand's name, not a third-party tracking domain.",
      },
      {
        title: "Fill in the required fields",
        content: "The form asks for your name, address, email, the model number, the serial number, and the purchase date. Fields with a red asterisk must be filled in; the rest are optional. Skip questions about household income, brand preferences, or marketing surveys. Type carefully — a wrong serial number breaks the registration.",
      },
      {
        title: "Decline marketing emails if you want",
        content: "Before clicking Submit, look for a checkbox that says \"Yes, send me product news and offers\" or similar. If the box is checked by default, uncheck it to avoid weekly promotional emails. The registration still works without the marketing opt-in.",
      },
      {
        title: "Save the confirmation",
        content: "After clicking Submit, the website shows a confirmation number and usually sends a confirmation email within 5 minutes. Save the email in a folder labeled \"Warranties\" in your inbox. If you scanned the receipt earlier, drop the confirmation email and the receipt into the same folder so both are together when a problem arises.",
      },
      {
        title: "Set a calendar reminder for 11 months later",
        content: "Open the Calendar app on your phone. Add an event 11 months from the purchase date titled \"[Item] warranty ends next month.\" The reminder gives you time to file any small fix-it claims before the manufacturer warranty expires. Repeat the same step for every major appliance and electronic in the house.",
      },
    ],
  },
  {
    slug: "how-to-file-warranty-claim",
    title: "How to File a Manufacturer Warranty Claim",
    excerpt: "Walk through the steps to get a free repair or replacement when a product fails within its warranty period.",
    category: "tips-tricks",
    tags: ["warranty", "claims", "repair", "consumer rights", "appliances"],
    readTime: "8 min",
    thumbnailEmoji: "🛠️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "A warranty is the manufacturer's promise to repair or replace a product that breaks for reasons that are not your fault during a set period of time. The standard period for most appliances and electronics is 1 year, with longer coverage for the compressor on a refrigerator (often 5 to 10 years), the engine on a lawn mower (2 to 3 years), or the screen on a television (2 years on premium models). When something fails inside the covered period, the repair or replacement is free.\n\nThe trouble is that warranty claims take patience. Manufacturers do not make the process simple, partly because every claim costs them money. Most claims involve three steps: gathering paperwork, calling or filing online, and either shipping the item or hosting a technician visit. The whole job often takes 2 to 4 weeks from first call to final repair.\n\nThree pieces of paperwork are required for almost every claim: the receipt or proof of purchase, the model and serial number, and a written or photo description of the failure. Owners who scanned their receipt and registered the product can produce all three in under 5 minutes. Owners with a faded paper receipt and no record of the model number can spend hours digging.\n\nWarranty claims are easier when the failure is described clearly and calmly. \"The dishwasher does not drain — water sits in the bottom after every cycle\" is a useful description. \"It does not work right\" is not. Photos and short videos of the problem help — a 10-second video of an oven that will not heat or a remote that will not respond is much harder for the company to dispute than a verbal complaint.\n\nIf the first call goes nowhere, escalate. Ask for a supervisor. If still no progress after two calls, file a complaint with the Better Business Bureau (bbb.org) and the state Attorney General's consumer protection office. Manufacturers settle most BBB complaints within 30 days because the public score affects sales. The FTC also accepts complaints at reportfraud.ftc.gov.",
    steps: [
      {
        title: "Confirm the warranty is still active",
        content: "Find the original purchase date — from the receipt, the registration confirmation email, or your credit card statement from that month. Compare it to the warranty length printed in the owner's manual or on the manufacturer's website under Support. If the failure date is inside the covered period, you have a claim. If it is outside, the manufacturer may still help as a goodwill gesture, especially for premium brands.",
        tip: "Credit cards from Chase, American Express, Capital One, and Citi often add an extra year of warranty on top of the manufacturer's. Call the number on the back of the card and ask about \"extended warranty benefits\" before paying for any repair.",
      },
      {
        title: "Gather the paperwork in one place",
        content: "Collect the receipt (the scan from earlier works fine), the registration confirmation, the model number, the serial number, and the date the problem started. Take 2 to 4 photos of the failure: a wide shot of the product, a close shot of the broken part, and a photo of the model and serial number sticker. If the failure shows up only when the product is running, record a 10-second video with your phone.",
      },
      {
        title: "Call or file online with the manufacturer",
        content: "Go to the manufacturer's Support page and look for \"Service Request,\" \"File a Claim,\" or a phone number. Online claims often process faster — fill in the form, upload the photos, and submit. For a phone claim, call the number listed and have all the paperwork in front of you. The agent will ask for the model, serial, purchase date, and a description. Stay calm and read your prepared description.",
        warning: "Do not try to repair the item yourself before the warranty claim. Opening the case, removing screws, or replacing parts often voids the warranty entirely. Wait until the company decides whether they will repair, replace, or deny the claim.",
      },
      {
        title: "Get the claim number in writing",
        content: "Before ending the call or closing the form, ask for a claim number, case number, or service ticket number. Write it down. Ask the agent to email a confirmation that includes the claim number, the next step, and the expected timeline. If they say they will email it, ask when, and follow up if the email has not arrived in 24 hours.",
      },
      {
        title: "Schedule the repair or ship the item",
        content: "The manufacturer will offer one of three options: an in-home technician (most appliances over 50 pounds), a mail-in repair (small electronics), or a replacement unit. For an in-home visit, pick a 4-hour window when someone can be home. For mail-in, the company sends a prepaid shipping label by email. Keep the original packaging for major items because some manufacturers require it for safe shipping.",
      },
      {
        title: "Save every email and photo through the process",
        content: "Make a folder in your email labeled with the product and the claim number. Drag every email from the manufacturer into that folder as it arrives. If a phone call happens, write the date, time, the agent's name, and what was said on a sheet of paper kept with the original paperwork. A clear paper trail wins disputes if the company stalls.",
      },
      {
        title: "Escalate if the claim is denied or stalled",
        content: "If 14 days pass with no progress, call back and ask for a supervisor. If a second call also goes nowhere, file a complaint at bbb.org and at the state Attorney General's office (find yours at naag.org). The FTC accepts complaints at reportfraud.ftc.gov. Most manufacturers respond to BBB complaints within 30 days because the score is public and affects future sales.",
      },
    ],
  },
  {
    slug: "how-to-check-return-window-receipt",
    title: "How to Check the Return Window Before Throwing a Receipt Away",
    excerpt: "Find the return deadline printed on every receipt so you do not miss the window for store credit, cash back, or an exchange.",
    category: "shopping",
    tags: ["returns", "receipts", "shopping", "store policy", "consumer rights"],
    readTime: "5 min",
    thumbnailEmoji: "↩️",
    publishedAt: "2026-05-08",
    lastVerifiedAt: "2026-05-08",
    difficulty: "Beginner",
    body: "Every store sets its own return policy, and the rules vary widely. Walmart gives 90 days for most items but only 14 days for electronics. Target gives 90 days, 30 days for electronics, and 1 year for items bought with a Target RedCard. Costco gives a year on most items but 90 days on televisions and computers. Best Buy gives 15 days, except for Best Buy members who get 30 to 60 days. Kohl's, Macy's, and JCPenney each have different rules with different exceptions for clearance, jewelry, and final-sale items.\n\nThe simplest way to know the deadline is to look at the receipt. Most modern stores print the return window directly on the bottom of the receipt — a phrase like \"Return by 08/06/2026\" or \"Returns accepted within 90 days.\" The date appears below the totals, sometimes near the store address, sometimes near the bar code. A 30-second check of the receipt right at the car saves the question \"Can I still take this back?\" weeks later.\n\nIf the return date is not printed, the store's policy applies by default. The policy is posted at the customer service desk, on the back of the receipt for some stores, and on the store's website under Help, Customer Service, or Return Policy. Searching the store name plus \"return policy\" almost always brings the page up first.\n\nThe credit card used to buy the item also matters. Some cards (Chase Sapphire, American Express, Citi) add a return protection benefit — if the store refuses the return, the card company refunds the purchase up to a set limit (often $300 to $500). The benefit usually applies within 90 days of purchase even if the store window has closed.\n\nA receipt is not always required for a return. Most stores accept a return without a receipt for store credit at the lowest sale price within the past 90 days. The customer service desk looks up the original price by scanning the credit card or asking for a phone number. The refund comes as a gift card rather than cash, which is the trade-off for not having the receipt.",
    steps: [
      {
        title: "Look at the bottom of the receipt",
        content: "Hold the receipt under a good light. Below the items list and the total, look for a section with phrases like \"Return Policy,\" \"Return by [date],\" or \"Eligible for return until [date].\" The deadline is often printed in the last 5 lines of the receipt. Walmart, Target, Best Buy, and Home Depot all print it. Some smaller stores do not.",
        tip: "If the receipt is faint, snap a photo with your phone right at the car. Phone cameras capture detail that the human eye misses, and you can pinch to zoom on small print.",
      },
      {
        title: "Check the back of the receipt",
        content: "Some stores print the full return policy on the back. Flip the receipt over and look for the heading \"Return Policy\" or \"Refunds and Exchanges.\" The text lists exceptions — electronics, clearance items, swimwear, opened software — that have shorter windows or no returns at all.",
      },
      {
        title: "Search the store's online return policy if the receipt is silent",
        content: "Open a browser and search the store name plus \"return policy.\" Click the link with the store's domain (target.com, walmart.com, costco.com). Read the section about your item type. Note any exceptions: \"Electronics: 30 days\" or \"Final sale items cannot be returned.\" Bookmark or screenshot the page so you can prove the policy if a clerk later disagrees.",
        warning: "Do not click ads or links that say \"Get refund now\" or \"Easy returns center.\" Scammers create fake return-policy pages that ask for credit card numbers. The real policy is always on the store's main domain, found by typing the address yourself.",
      },
      {
        title: "Add the deadline to your phone calendar",
        content: "On your phone, open the Calendar app. Add an event 3 days before the return deadline titled \"[Store] return window closes — decide on [item].\" The 3-day buffer gives time to drive to the store before the actual deadline. For online orders, add an extra 2 days because returned items have to arrive at the warehouse, not just be shipped, before the deadline.",
      },
      {
        title: "Keep the receipt with the item until the window closes",
        content: "Tape the receipt to the inside of the box or to the appliance manual. Do not toss it into a drawer with last year's receipts. Once the return window has closed and you have decided to keep the item, move the receipt to the warranty folder so it stays available for any future warranty claims.",
      },
    ],
  },
];
