import type { UserTier } from '@/contexts/TierContext';

/**
 * Practice Rooms data — fake scams for users to spot in a safe sandbox.
 *
 * Two scenario types:
 *   - "email":  fake inbox messages
 *   - "phone":  fake incoming calls and text messages
 *
 * Each scenario carries a tier so we can match difficulty to the user's
 * comfort level. Power-user scenarios are subtle spear-phishing attempts
 * with valid-looking domains and clean grammar; just-starting scenarios
 * are obvious robocalls and gift-card scams.
 */

export type PracticeTier = UserTier;

export type PracticeVerdict = 'phishing' | 'legit';

export interface EmailScenario {
  id: string;
  kind: 'email';
  tier: PracticeTier;
  fromName: string;
  fromAddress: string;
  subject: string;
  receivedAt: string; // human label like "9:42 AM" or "Yesterday"
  preview: string;
  body: string;
  hasAttachment?: boolean;
  attachmentName?: string;
  verdict: PracticeVerdict;
  redFlags: string[];
  explanation: string;
}

export type PhoneEvent =
  | {
      id: string;
      kind: 'phone';
      type: 'call';
      tier: PracticeTier;
      callerId: string; // what the phone displays
      number: string; // raw number
      transcript: string; // what they say if you answer / voicemail snippet
      verdict: PracticeVerdict;
      redFlags: string[];
      explanation: string;
    }
  | {
      id: string;
      kind: 'phone';
      type: 'text';
      tier: PracticeTier;
      sender: string; // shortcode or number
      message: string;
      verdict: PracticeVerdict;
      redFlags: string[];
      explanation: string;
    };

export type PracticeScenario = EmailScenario | PhoneEvent;

// ---------------------------------------------------------------------------
// Email scenarios
// ---------------------------------------------------------------------------

export const EMAIL_SCENARIOS: EmailScenario[] = [
  // ── Just Starting (4) — very obvious red flags
  {
    id: 'email-001',
    kind: 'email',
    tier: 'just-starting',
    fromName: 'AMAZON SECURITY',
    fromAddress: 'security-alert@amaz0n-billing.support',
    subject: 'URGENT!! Your account will be DELETED in 24hrs',
    receivedAt: '6:14 AM',
    preview: 'Your Amazon account has been compromised. Click here to verify…',
    body: `Dear Customer,

Your Amazon account has been COMPROMISED. We have detected unauthorized access from a foreign country.

To prevent permanent deletion of your account in 24 hours, click the link below to verify your identity:

>> CLICK HERE TO VERIFY <<

Failure to act will result in suspension and loss of all order history.

Amazon Security Team`,
    verdict: 'phishing',
    redFlags: [
      'Sender address uses "amaz0n" with a zero instead of an "o"',
      'Threat-and-deadline pressure ("24 hours" / "permanent deletion")',
      'All-caps subject line and shouting words like "URGENT"',
      'Generic greeting — Amazon knows your real name',
    ],
    explanation:
      'Real Amazon emails come from amazon.com and address you by name. They never threaten to delete your account in 24 hours over an email link.',
  },
  {
    id: 'email-002',
    kind: 'email',
    tier: 'just-starting',
    fromName: 'IRS Tax Refund',
    fromAddress: 'refunds@irs-gov-payment.com',
    subject: 'You are eligible for a $1,478 refund',
    receivedAt: 'Yesterday',
    preview: 'Submit your bank info to receive your refund within 3 business days…',
    body: `Hello,

After review of your filings, we confirm you are eligible for a refund of $1,478.00 USD.

Please submit your bank routing and account number using the secure form so we can deposit your refund within 3 business days.

Internal Revenue Service
Refund Processing Department`,
    verdict: 'phishing',
    redFlags: [
      'IRS never emails about refunds — they only mail letters',
      'Domain is "irs-gov-payment.com", not irs.gov',
      'Asks for bank info by email',
      'No real IRS case number, name, or filing reference',
    ],
    explanation:
      'The IRS contacts taxpayers by physical mail, not email. Any unsolicited "refund" email asking for bank details is a scam.',
  },
  {
    id: 'email-003',
    kind: 'email',
    tier: 'just-starting',
    fromName: 'Costco Member Rewards',
    fromAddress: 'reward-team@costco-promo-deals.net',
    subject: 'Congratulations! You won a $500 Costco gift card',
    receivedAt: '11:03 AM',
    preview: 'Claim your $500 Costco card. Limited time — only 50 cards left.',
    body: `Congratulations Member!

You have been selected to receive a $500 Costco gift card as part of our customer appreciation program.

Click here to claim your prize before it expires.

Hurry! Only 50 cards remaining.`,
    verdict: 'phishing',
    redFlags: [
      'You did not enter any contest',
      'Domain is not costco.com',
      '"Limited time / only 50 left" pressure',
      'Generic "Member" greeting with no membership number',
    ],
    explanation:
      'If you did not enter a contest, you cannot win one. Real promotions from a store you shop at would show up in your account on their official site, not a random link in email.',
  },
  {
    id: 'email-004',
    kind: 'email',
    tier: 'just-starting',
    fromName: 'Geek Squad',
    fromAddress: 'auto-renew@geek-squad-services.org',
    subject: 'Your Geek Squad subscription has been renewed - $399.99',
    receivedAt: '7:38 AM',
    preview: 'Your annual subscription was charged $399.99. Call 1-866-555-0133 to cancel.',
    body: `Thank you for being a Geek Squad member.

Your annual protection plan has auto-renewed for $399.99 USD on your card ending in ****.

If you did NOT authorize this renewal, please call our cancellation hotline immediately:

1-866-555-0133

Refund will be issued within 24 hours upon cancellation.`,
    verdict: 'phishing',
    redFlags: [
      'You never signed up for Geek Squad',
      'Domain is not bestbuy.com (Geek Squad\'s real owner)',
      'Pushes you to call a phone number, where they will ask for remote access',
      'No real account number or card last-4 shown',
    ],
    explanation:
      'This is a classic "fake invoice" scam. The goal is to get you to call the number, where a fake agent will ask for remote computer access or your bank info to "refund" the charge.',
  },

  // ── Getting Comfortable (4) — common patterns, slightly more polished
  {
    id: 'email-005',
    kind: 'email',
    tier: 'getting-comfortable',
    fromName: 'Netflix',
    fromAddress: 'no-reply@netflix-billing-update.com',
    subject: 'Action required: Update your payment method',
    receivedAt: '2:12 PM',
    preview: 'We were unable to process your latest billing cycle…',
    body: `Hi,

We were unable to process your most recent payment. To keep your membership active, please update your billing information within 48 hours.

Update Payment Method →

If you do not update, your account will be paused.

— The Netflix Team`,
    verdict: 'phishing',
    redFlags: [
      'Sender domain is "netflix-billing-update.com", not netflix.com',
      'Generic "Hi" — Netflix uses your profile name',
      '48-hour deadline pressure',
      'Sign in directly at netflix.com to verify, never through an email link',
    ],
    explanation:
      'Netflix does send billing emails, but they always use netflix.com and address you by name. When in doubt, open netflix.com in your browser yourself and check the account page.',
  },
  {
    id: 'email-006',
    kind: 'email',
    tier: 'getting-comfortable',
    fromName: 'USPS Delivery',
    fromAddress: 'no-reply@usps-redeliver-confirm.xyz',
    subject: 'Your package could not be delivered',
    receivedAt: '8:45 AM',
    preview: 'We attempted to deliver your package today. Please reschedule…',
    body: `USPS Notification

Your package (tracking #1Z9R7-XX-0421) could not be delivered today due to an incomplete address.

Please confirm your delivery address and pay the $1.99 redelivery fee to reschedule.

Reschedule Delivery →

— US Postal Service`,
    verdict: 'phishing',
    redFlags: [
      'Domain ends in .xyz, not usps.com',
      'USPS does not charge a redelivery fee for residential mail',
      'Tracking number format is wrong (real USPS starts with "9", not "1Z")',
      'Asks for a small payment that gives them your card details',
    ],
    explanation:
      'The "$1.99 redelivery fee" is the giveaway. The point is to harvest your card number for bigger fraud later. Real USPS issues are handled at usps.com or the local post office — not paid online by random link.',
  },
  {
    id: 'email-007',
    kind: 'email',
    tier: 'getting-comfortable',
    fromName: 'Chase Bank',
    fromAddress: 'fraud-alerts@chase.com',
    subject: 'New sign-in to your Chase account',
    receivedAt: '10:20 AM',
    preview: 'A new device signed in to your account at 10:18 AM.',
    body: `We noticed a new sign-in to your Chase account.

Device: Safari on iPhone
Location: Cleveland, OH
Time: 10:18 AM ET

If this was you, no action is needed.

If you don't recognize this activity, sign in at chase.com or call the number on the back of your card.

— Chase Online Security`,
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This one is real. The sender is the actual chase.com domain. The email does not include any links to click — it tells you to sign in at chase.com (which you would type yourself) or call the number on the back of your card. That is exactly how legitimate bank alerts work.',
  },
  {
    id: 'email-008',
    kind: 'email',
    tier: 'getting-comfortable',
    fromName: 'Dr. Patel\'s Office',
    fromAddress: 'appointments@elmwoodfamilycare.com',
    subject: 'Reminder: Your appointment on Thursday',
    receivedAt: 'Tuesday 4:00 PM',
    preview: 'This is a reminder of your upcoming appointment with Dr. Patel on Thursday at 2:30 PM.',
    body: `Hello,

This is a friendly reminder of your upcoming appointment:

Provider: Dr. Aisha Patel
Date: Thursday, April 23
Time: 2:30 PM
Location: 412 Elmwood Ave, Suite 200

Please arrive 10 minutes early. If you need to reschedule, call our office at 555-0142.

Elmwood Family Care`,
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This looks like a normal medical appointment reminder. It includes a real-sounding office name, a specific date and provider, and asks you to call the office to reschedule — not click a link. If you actually have an appointment with this office, this is the kind of routine email they would send.',
  },

  // ── Confident (4) — subtler phishing + mixed legit emails
  {
    id: 'email-009',
    kind: 'email',
    tier: 'confident',
    fromName: 'Microsoft 365',
    fromAddress: 'security@accounts.microsoft.com',
    subject: 'Unusual sign-in activity',
    receivedAt: '5:14 AM',
    preview: 'We detected a sign-in from a new device.',
    body: `Microsoft account
Unusual sign-in activity

We detected something unusual about a recent sign-in to the Microsoft account a***@outlook.com.

Country/region: Vietnam
IP address: 14.232.x.x
Date: Today
Browser/Operating system: Chrome / Windows

If this wasn't you, please review your recent activity at account.microsoft.com.

Thanks,
The Microsoft account team`,
    verdict: 'legit',
    redFlags: [],
    explanation:
      'The sender is the real accounts.microsoft.com domain, the email points you to account.microsoft.com (which you type yourself) instead of clicking a link, and the masked email shows that the system actually knows the account. Microsoft really does send emails like this. Sign in directly to verify.',
  },
  {
    id: 'email-010',
    kind: 'email',
    tier: 'confident',
    fromName: 'DocuSign',
    fromAddress: 'dse@docusign-verify.com',
    subject: 'Karen Mitchell sent you a document to sign',
    receivedAt: '3:47 PM',
    preview: 'Please review and sign the attached agreement.',
    body: `Karen Mitchell sent you a new DocuSign document.

Document: Q2_Contract_Renewal.pdf

[ Review Document ]

If you have questions, contact the sender directly. Do not reply to this email.`,
    hasAttachment: true,
    attachmentName: 'Q2_Contract_Renewal.pdf',
    verdict: 'phishing',
    redFlags: [
      'Real DocuSign emails come from docusign.net, not docusign-verify.com',
      'You don\'t recognize Karen Mitchell',
      'No personal note from the sender',
      'Attachment + button is a classic combo to install malware or harvest passwords',
    ],
    explanation:
      'DocuSign branding is one of the most spoofed in business email. The real sender domain is docusign.net. Anything else — including docusign-verify, docusign-secure, docu-sign — is fake. When in doubt, ask the sender by phone or text whether they actually sent something.',
  },
  {
    id: 'email-011',
    kind: 'email',
    tier: 'confident',
    fromName: 'Zelle',
    fromAddress: 'noreply@zellepay-alerts.com',
    subject: 'Payment request: $850 from Marcus Reed',
    receivedAt: '11:55 AM',
    preview: 'Marcus Reed has requested $850. Tap to send or decline.',
    body: `You have received a Zelle® payment request.

From: Marcus Reed
Amount: $850.00
Memo: "Owed for Saturday — please send before noon"

[ Send Payment ]   [ Decline ]

Need help? Visit our help center.`,
    verdict: 'phishing',
    redFlags: [
      'Zelle does not have its own email address — payments come through your bank\'s system',
      'Domain is zellepay-alerts.com, not your bank',
      'Pressure phrase "before noon"',
      'Vague memo with no real context',
    ],
    explanation:
      'Zelle requests come through your bank\'s app, not from a "Zelle" email address. Once you send a Zelle payment, it is nearly impossible to recover. Always verify any payment request by calling the person on a number you already have for them.',
  },
  {
    id: 'email-012',
    kind: 'email',
    tier: 'confident',
    fromName: 'GitHub',
    fromAddress: 'noreply@github.com',
    subject: '[SecurityAlert] A new SSH key was added to your account',
    receivedAt: '9:08 AM',
    preview: 'A new SSH key was added to your GitHub account.',
    body: `Hey bwilburn6202,

A new SSH key was added to your account.

Key fingerprint: SHA256:Xj3v...
Added from: 73.18.x.x (Cleveland, OH)
Date: April 20

If you did not add this key, please visit https://github.com/settings/keys to remove it and reset your password.

— GitHub`,
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This is a real GitHub security alert. Sender is the actual github.com, the username is correct, and it points you to a real github.com path to manage keys. If you did add a new SSH key recently, you can ignore it. If you didn\'t, sign in directly and remove it.',
  },

  // ── Power User (3) — spear-phishing that requires careful reading
  {
    id: 'email-013',
    kind: 'email',
    tier: 'power-user',
    fromName: 'Jennifer Liu (CEO)',
    fromAddress: 'jliu@elm-corp.co',
    subject: 'quick favor — out of meeting in 5',
    receivedAt: '2:01 PM',
    preview: 'Are you at your desk? Need you to handle something for me before 4.',
    body: `Hey,

Are you at your desk? I need you to grab 4 Apple gift cards ($500 each) for a client thank-you. I'm in back-to-back meetings until 5 and the courier is leaving at 4:30.

Can you expense it and send me the codes once you have them? I'll explain on Slack later.

Thanks,
Jen`,
    verdict: 'phishing',
    redFlags: [
      'Domain is elm-corp.co (not the real company domain — likely .com)',
      'Gift cards as urgent business expense — never legitimate',
      '"Can\'t talk, in meetings" prevents you from verifying by voice',
      'Asks for the codes (which is the same as cash) then says "I\'ll explain later"',
    ],
    explanation:
      'This is a classic "CEO impersonation" or "business email compromise" attack. Tells: gift cards, urgency, can\'t-be-reached executive, look-alike domain (.co instead of .com). Always verify any unusual money request by walking to the person\'s desk or calling them on a number you already have.',
  },
  {
    id: 'email-014',
    kind: 'email',
    tier: 'power-user',
    fromName: 'Adobe Sign',
    fromAddress: 'echosign@echosign.com',
    subject: 'Action required: Sign your invoice for processing',
    receivedAt: 'Today 6:33 AM',
    preview: 'Please sign the attached invoice within 7 days.',
    body: `Adobe Sign

A document has been shared with you for signature:

Document name: Invoice_April_2026_AcmeCo.pdf
From: Accounts Receivable <ar@acme-co-billing.com>
Expires: 7 days

Review and sign

This is a legitimate request from Adobe Sign. Adobe will never ask for your password.`,
    hasAttachment: true,
    attachmentName: 'Invoice_April_2026_AcmeCo.pdf',
    verdict: 'phishing',
    redFlags: [
      'echosign@echosign.com is a real-sounding but defunct domain (Adobe Sign sends from adobesign.com)',
      'The "from" inside the body is a different look-alike (acme-co-billing.com)',
      'Unsolicited invoice from a vendor you may not have',
      'Self-assurance "this is legitimate" is itself a red flag',
    ],
    explanation:
      'Layered impersonation: a fake Adobe Sign wrapper hiding a fake invoice from a fake AR address. When two unrelated unknown domains stack like this, treat the whole thing as hostile and report it to your IT or security team.',
  },
  {
    id: 'email-015',
    kind: 'email',
    tier: 'power-user',
    fromName: 'AWS Billing',
    fromAddress: 'no-reply@aws.amazon.com',
    subject: 'Your AWS Invoice for April is now available',
    receivedAt: '1st of month, 12:04 AM',
    preview: 'Your monthly AWS invoice is now available in the Billing console.',
    body: `Greetings from Amazon Web Services,

Your monthly AWS invoice for the period of April 1, 2026 - April 30, 2026 is now available.

Total charges: $182.47
Payment due: May 5, 2026

You can view and download your invoice from the Billing & Cost Management console at https://console.aws.amazon.com/billing.

— AWS Billing`,
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This is a real, monthly billing email from AWS. Sender is the actual aws.amazon.com domain, the URL points to the real AWS Billing console, and the format matches every other AWS invoice email. If the dollar amount matches your usage, no action is needed.',
  },
];

// ---------------------------------------------------------------------------
// Phone scenarios — mix of calls (incoming + voicemail) and SMS
// ---------------------------------------------------------------------------

export const PHONE_SCENARIOS: PhoneEvent[] = [
  // ── Just Starting (4)
  {
    id: 'phone-001',
    kind: 'phone',
    type: 'call',
    tier: 'just-starting',
    callerId: 'POTENTIAL SPAM',
    number: '+1 (876) 555-0142',
    transcript:
      '"Congratulations, you have been selected for an all-expenses-paid Caribbean cruise. Press 1 to claim your free vacation."',
    verdict: 'phishing',
    redFlags: [
      'Caller ID literally says "Potential Spam"',
      '876 area code is Jamaica — common scam origin',
      'Robocall offering a "free" prize',
      'Asks you to press a button to confirm your line is active',
    ],
    explanation:
      'Pressing 1 confirms to the scammer that a real person picked up — your number then gets sold to even more scammers. Hang up. Don\'t press anything.',
  },
  {
    id: 'phone-002',
    kind: 'phone',
    type: 'call',
    tier: 'just-starting',
    callerId: 'Social Security Admin',
    number: '+1 (800) 555-0188',
    transcript:
      '"This is Officer Davis from Social Security. Your number has been suspended due to suspicious activity. Press 1 to speak with an agent before legal action is taken against you."',
    verdict: 'phishing',
    redFlags: [
      'Social Security numbers are not "suspended" — that is not a real thing',
      'Threatening "legal action" to scare you',
      'Caller ID can be faked (spoofed) to show an official-looking name',
      'Real SSA contacts you by mail',
    ],
    explanation:
      'The Social Security Administration does not call to threaten you. They send letters. Hang up immediately and call the real SSA at 1-800-772-1213 if you want to verify.',
  },
  {
    id: 'phone-003',
    kind: 'phone',
    type: 'text',
    tier: 'just-starting',
    sender: '+1 (415) 555-0177',
    message:
      'Hi grandma! It\'s me. I lost my phone and im texting from a friends. I need $300 for car repair, can you send via Cash App? Pls don\'t tell mom, ill explain later. Love u',
    verdict: 'phishing',
    redFlags: [
      'Unknown number claiming to be a relative',
      '"Don\'t tell mom" — isolating you from people who would catch the lie',
      'Cash App / wire / gift cards = unrecoverable money',
      'Vague "explain later" to avoid questions',
    ],
    explanation:
      'This is the "grandparent scam." Always verify by calling the family member on the number you already have for them. Even better, ask them a question only the real person would know.',
  },
  {
    id: 'phone-004',
    kind: 'phone',
    type: 'text',
    tier: 'just-starting',
    sender: '32665',
    message:
      'CVS Pharmacy: Your prescription for J. WILBURN is ready for pickup at the Lakewood store. Reply STOP to opt out.',
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This is a real text. CVS uses short numeric codes (called "shortcodes") like 32665 to send pickup reminders. There\'s no link to click and no money involved — it\'s a plain notice that a prescription is ready. If you\'re a CVS customer, this is normal.',
  },

  // ── Getting Comfortable (3)
  {
    id: 'phone-005',
    kind: 'phone',
    type: 'text',
    tier: 'getting-comfortable',
    sender: '+1 (216) 555-0103',
    message:
      'Bank of America: Did you authorize a $487.22 charge at BEST BUY OH on 4/19? Reply Y for Yes or N for No. STOP to opt out.',
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This is how Bank of America\'s real fraud-alert texts look — short, no links, ask for a Y/N reply. The trick: only reply if you actually have BoA. If you don\'t, it\'s a scam. To be safe, never reply to a banking text — call the number on the back of your card and ask.',
  },
  {
    id: 'phone-006',
    kind: 'phone',
    type: 'text',
    tier: 'getting-comfortable',
    sender: '+1 (888) 555-0119',
    message:
      'USPS: Your package is held at our facility due to incomplete address info. Confirm here: http://usps-track.delivery-help.xyz/8R12 within 12 hours or it will be returned.',
    verdict: 'phishing',
    redFlags: [
      'USPS does not text random tracking links — texts only come if you signed up for them',
      'Domain ends in .xyz, not usps.com',
      '"Within 12 hours" deadline pressure',
      'Asks you to confirm address details that will be reused for fraud',
    ],
    explanation:
      'A wave of "package held" smishing texts hit the US over the past two years. The link leads to a page that asks for your card to "pay a small fee," then steals it. Delete and don\'t click.',
  },
  {
    id: 'phone-007',
    kind: 'phone',
    type: 'call',
    tier: 'getting-comfortable',
    callerId: 'Cleveland Clinic',
    number: '+1 (216) 444-2200',
    transcript:
      '"Hi, this is Maria from Dr. Schwartz\'s office at the Cleveland Clinic confirming your appointment for Thursday at 10 AM. Please call us back at 216-444-2200 if you need to reschedule. Thanks!"',
    verdict: 'legit',
    redFlags: [],
    explanation:
      'Ordinary appointment confirmation: a real-sounding name, doctor, and time, with a known main number to call back. Doesn\'t ask for personal info, payment, or pressure you. The Cleveland Clinic\'s actual main number is 216-444-2200, which matches.',
  },

  // ── Confident (3)
  {
    id: 'phone-008',
    kind: 'phone',
    type: 'call',
    tier: 'confident',
    callerId: 'Microsoft Support',
    number: '+1 (425) 555-0190',
    transcript:
      '"Hello, this is Brian from the Microsoft Windows support team. We\'ve detected viruses on your computer that are sending illegal data. I need you to install our remote help software so we can remove them right now."',
    verdict: 'phishing',
    redFlags: [
      'Microsoft does not call you about your computer — ever',
      'Asking you to install remote-control software is the goal',
      'Caller ID can be spoofed to read "Microsoft Support"',
      'Pressure to act "right now" prevents you from checking',
    ],
    explanation:
      'This is the most common tech-support scam. Once you give them remote access, they install spyware, lock you out, or trick you into a bogus "refund" that actually drains your bank account. Hang up. If your computer truly has a problem, you call the manufacturer using a number from their website.',
  },
  {
    id: 'phone-009',
    kind: 'phone',
    type: 'text',
    tier: 'confident',
    sender: '+1 (385) 555-0166',
    message:
      'Hello, this is Sarah from Indeed Recruiting. We saw your resume and have a remote data-entry role paying $45/hr. Reply YES for details or text me on WhatsApp at +1-385-555-0166.',
    verdict: 'phishing',
    redFlags: [
      'Real recruiters use email or LinkedIn — not random SMS',
      '"Remote data entry, $45/hr" is a classic fake-job lure',
      'Move-to-WhatsApp is a way off the carrier\'s spam filters',
      'Indeed itself does not text job offers',
    ],
    explanation:
      'Job-offer texts almost always lead to a fake-check scam: they "hire" you, send you a check to buy equipment, then ask you to send back the difference — and the original check bounces a week later. Real recruiters reach out through your inbox or your LinkedIn account.',
  },
  {
    id: 'phone-010',
    kind: 'phone',
    type: 'text',
    tier: 'confident',
    sender: '692-639',
    message:
      'Your Google verification code is 472918. Don\'t share this code with anyone — Google will never ask you for it.',
    verdict: 'legit',
    redFlags: [],
    explanation:
      'This is a genuine Google verification code text. The catch: this text is only safe if YOU are the one who asked for it (signing in or resetting a password). If you didn\'t request a code and someone calls or texts you asking you to "read it back," that\'s the scam. Never share the code.',
  },

  // ── Power User (2)
  {
    id: 'phone-011',
    kind: 'phone',
    type: 'call',
    tier: 'power-user',
    callerId: 'Chase Fraud Dept',
    number: '+1 (800) 935-9935',
    transcript:
      '"This is Chase fraud prevention calling about a $1,420 charge at Walmart in Houston. Press 1 to authorize, press 2 to dispute. If you don\'t respond, the charge will be approved automatically."',
    verdict: 'phishing',
    redFlags: [
      'Caller ID can be spoofed — even to the bank\'s real number',
      'Real Chase asks you to call them back or use the app, not press buttons',
      '"Press 2 to dispute" routes to a fake agent who asks for your debit card and PIN',
      '"Will be approved automatically" is artificial pressure',
    ],
    explanation:
      'Spoofing the bank\'s actual number is very common now. The safest move on any "fraud alert" call: hang up and call your bank back using the number printed on the back of your card. If the alert is real, they\'ll see it on their end. If not, you\'ve dodged a sophisticated scam.',
  },
  {
    id: 'phone-012',
    kind: 'phone',
    type: 'text',
    tier: 'power-user',
    sender: '+1 (310) 555-0144',
    message:
      'Hi this is Jordan with Apple. We see suspicious sign-in attempts on your iCloud. To secure your account, read me back the 6-digit code we just sent you: 728-491.',
    verdict: 'phishing',
    redFlags: [
      'Apple never calls or texts you for verification codes',
      'The phrase "read me back the code" is the entire scam in one sentence',
      'Combines a real-looking text (the code) with a fake follow-up to trick you',
      'Pretending to "secure" the account is what they\'re actually trying to take over',
    ],
    explanation:
      'Code-relay scams: the attacker triggers a real Apple sign-in (which sends you a real verification code), then calls or texts pretending to be Apple to get you to read it to them. With that code, they sign in as you. Rule: any verification code is only ever for you to type, never to read aloud.',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const ALL_SCENARIOS: PracticeScenario[] = [...EMAIL_SCENARIOS, ...PHONE_SCENARIOS];

/**
 * Pick scenarios for a given tier, with a fallback so users always get
 * something to practice on. Returns scenarios at or below their tier so
 * a "power-user" still sees the easy ones for warm-up.
 */
export function getEmailScenariosForTier(tier: PracticeTier | null): EmailScenario[] {
  if (!tier) return EMAIL_SCENARIOS;
  const order: PracticeTier[] = ['just-starting', 'getting-comfortable', 'confident', 'power-user'];
  const idx = order.indexOf(tier);
  return EMAIL_SCENARIOS.filter(s => order.indexOf(s.tier) <= idx);
}

export function getPhoneScenariosForTier(tier: PracticeTier | null): PhoneEvent[] {
  if (!tier) return PHONE_SCENARIOS;
  const order: PracticeTier[] = ['just-starting', 'getting-comfortable', 'confident', 'power-user'];
  const idx = order.indexOf(tier);
  return PHONE_SCENARIOS.filter(s => order.indexOf(s.tier) <= idx);
}

export function getScenarioById(id: string): PracticeScenario | undefined {
  return ALL_SCENARIOS.find(s => s.id === id);
}
