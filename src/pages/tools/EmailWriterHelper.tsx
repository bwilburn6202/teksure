import { useMemo, useRef, useState } from 'react';
import {
  Mail,
  Copy,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Minus,
  Plus,
  Shuffle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/* ── Types ─────────────────────────────────────────── */
type EmailKind =
  | 'complain'
  | 'cancel'
  | 'medical-records'
  | 'doctor-question'
  | 'interview-followup'
  | 'thank-you'
  | 'difficult-family'
  | 'reschedule'
  | 'refund'
  | 'benefits';

type Recipient = 'stranger' | 'professional' | 'family' | 'friend';
type Tone = 'polite-firm' | 'warm' | 'formal' | 'casual';
type Length = 'short' | 'normal' | 'long';

interface Inputs {
  kind: EmailKind | '';
  recipientType: Recipient | '';
  recipientName: string;
  yourName: string;
  tone: Tone | '';
  keyPoints: string;
}

/* ── Labels & metadata ─────────────────────────────── */
const kindLabels: Record<EmailKind, string> = {
  complain: 'Complain about bad service',
  cancel: 'Cancel a subscription',
  'medical-records': 'Request medical records',
  'doctor-question': 'Ask a doctor a question',
  'interview-followup': 'Follow up after a job interview',
  'thank-you': 'Send a thank-you note',
  'difficult-family': 'Address a difficult family topic',
  reschedule: 'Reschedule an appointment',
  refund: 'Ask for a refund',
  benefits: 'Apply for benefits',
};

const kindEmojis: Record<EmailKind, string> = {
  complain: '',
  cancel: '',
  'medical-records': '',
  'doctor-question': '',
  'interview-followup': '',
  'thank-you': '',
  'difficult-family': '',
  reschedule: '',
  refund: '',
  benefits: '',
};

const recipientLabels: Record<Recipient, string> = {
  stranger: "Someone I don't know",
  professional: 'A professional (doctor, lawyer, agent, etc.)',
  family: 'A family member',
  friend: 'A friend',
};

const toneLabels: Record<Tone, string> = {
  'polite-firm': 'Polite & firm',
  warm: 'Warm',
  formal: 'Formal',
  casual: 'Casual',
};

/* ── Subject lines ─────────────────────────────────── */
function getSubject(kind: EmailKind, tone: Tone): string {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  switch (kind) {
    case 'complain':
      return tone === 'formal'
        ? `Formal complaint regarding recent service — ${today}`
        : `Concern about a recent experience — ${today}`;
    case 'cancel':
      return 'Request to cancel my subscription';
    case 'medical-records':
      return 'Request for a copy of my medical records';
    case 'doctor-question':
      return 'Quick question about my care';
    case 'interview-followup':
      return 'Thank you — following up on our interview';
    case 'thank-you':
      return 'Thank you';
    case 'difficult-family':
      return "Something I've been wanting to share";
    case 'reschedule':
      return 'Request to reschedule our appointment';
    case 'refund':
      return 'Refund request';
    case 'benefits':
      return 'Application for benefits — please see details';
  }
}

/* ── Greeting ──────────────────────────────────────── */
function getGreeting(recipient: Recipient, tone: Tone, name: string): string {
  const n = name.trim();
  const nameSuffix = n ? ` ${n}` : '';

  if (recipient === 'stranger') {
    if (tone === 'formal') return 'To Whom It May Concern,';
    if (tone === 'casual') return 'Hello,';
    return n ? `Dear${nameSuffix},` : 'Hello,';
  }

const scenarios: Scenario[] = [
  {
    id: 'complaint',
    title: 'Complaint to a company',
    description: 'Raise an issue and ask for a specific fix.',
    icon: '',
    tones: ['Professional', 'Firm but kind', 'Casual'],
    fields: [
      { key: 'to', label: "Who's this to?", placeholder: 'e.g. ABC Appliance Customer Service', type: 'input' },
      { key: 'reference', label: 'Order or reference number', placeholder: 'e.g. Order #A1234', type: 'input', optional: true },
      { key: 'issue', label: 'What went wrong?', placeholder: 'The dishwasher stopped working after 3 weeks', type: 'input' },
      { key: 'when', label: 'When did it happen?', placeholder: 'March 30, 2026', type: 'input' },
      { key: 'details', label: 'Key facts (one per line)', placeholder: 'Delivered March 1\nStopped draining March 22\nCalled support March 23', type: 'textarea' },
      { key: 'tried', label: "What you've already tried", placeholder: 'Called support twice, emailed on March 25', type: 'input', optional: true },
      { key: 'outcome', label: 'What outcome do you want?', placeholder: 'A full refund or a working replacement within 14 days', type: 'input' },
      { key: 'contact', label: 'Your contact info', placeholder: 'jane@email.com / (555) 555-0123', type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: ${subjectSafe(v.reference, 'Request for resolution')} — ${subjectSafe(v.issue, 'Issue with recent service')}

Dear ${subjectSafe(v.to, 'Customer Service Team')},

I am writing regarding ${subjectSafe(v.issue, 'an issue with my recent order')}. On ${subjectSafe(v.when, 'the date in question')}, the following occurred:

${bulletize(v.details) || '- Please describe what happened here.'}

${lineOrBlank(v.tried) ? `I have already ${v.tried.toLowerCase()}, but the issue remains unresolved.\n\n` : ''}I would like to request ${subjectSafe(v.outcome, 'a resolution')}. I can be reached at ${subjectSafe(v.contact, '[your contact info]')}.

Thank you for your prompt attention to this matter.

Sincerely,
${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': (v) => `Subject: ${subjectSafe(v.reference, 'Request for resolution')} — Request for resolution

Dear ${subjectSafe(v.to, 'Customer Service')},

I'm writing about ${subjectSafe(v.issue, 'an issue with my recent purchase')}. On ${subjectSafe(v.when, 'the date in question')}, this is what happened:

${bulletize(v.details) || '- Please describe what happened here.'}

${lineOrBlank(v.tried) ? `I've tried ${v.tried.toLowerCase()}, but the issue is still not resolved.\n\n` : ''}I appreciate that mistakes happen, but I need this addressed. I'm asking for ${subjectSafe(v.outcome, 'a clear resolution')}. Please reach me at ${subjectSafe(v.contact, '[your contact]')}.

I'd like to hear back within 7 business days so we can resolve this without further escalation.

Thank you,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Quick issue with ${subjectSafe(v.reference, 'my order')}

Hi ${subjectSafe(v.to, 'there')},

I wanted to reach out about ${subjectSafe(v.issue, 'a problem I ran into')}. Here's the short version:

${bulletize(v.details) || '- What went wrong'}

${lineOrBlank(v.tried) ? `I already tried ${v.tried.toLowerCase()}, no luck.\n\n` : ''}What I'm hoping for: ${subjectSafe(v.outcome, 'a fair fix')}. You can reach me at ${subjectSafe(v.contact, '[your contact]')} — appreciate any help.

Thanks,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: Hoping you can help — ${subjectSafe(v.reference, 'recent issue')}

Hi ${subjectSafe(v.to, 'team')},

I've generally had a good experience with you, so I wanted to flag ${subjectSafe(v.issue, 'an issue')} directly rather than leave a bad review. On ${subjectSafe(v.when, 'the date')}, here's what happened:

${bulletize(v.details) || '- Please describe what happened here.'}

I'd really appreciate ${subjectSafe(v.outcome, 'some help making this right')}. I'm at ${subjectSafe(v.contact, '[your contact]')} whenever is easiest.

Thanks so much,
${subjectSafe(v.name, '[Your name]')}`,
    },
  },
  {
    id: 'scam',
    title: 'Reply to scam or junk email',
    description: "How to NOT reply — and what to do instead.",
    icon: '',
    tones: ['Professional'],
    warning:
      "Don't reply! Replying tells scammers your email is active — which makes you a bigger target. Do these things instead.",
    fields: [],
    templates: {
      'Professional': () => `DO NOT REPLY TO THE SCAM EMAIL.

Here's exactly what to do instead:

1. Do not click any links or open attachments.
2. Do not reply — even "stop" or "unsubscribe" confirms your address is active.
3. Mark it as spam/junk in your email (Gmail: ⋮ > Report spam. Outlook: Junk > Block).
4. Block the sender's address.
5. If it pretends to be a real company (bank, Amazon, IRS, USPS), report it:
   - Forward to the real company's abuse address (spoof@paypal.com, phishing@irs.gov, etc.)
   - Forward to reportphishing@apwg.org
   - Report to the FTC at ReportFraud.ftc.gov
6. If you already clicked a link or entered a password, change that password immediately on any site where you reuse it, and turn on two-factor authentication.

You do not owe scammers a reply. The best response is silence + reporting.`,
      'Casual': () => '',
      'Firm but kind': () => '',
      'Warm and personal': () => '',
    },
  },
  {
    id: 'fire-doctor',
    title: 'Firing a doctor or service provider',
    description: 'End a professional relationship cleanly.',
    icon: '',
    tones: ['Professional', 'Firm but kind'],
    fields: [
      { key: 'to', label: 'Who to (name)', placeholder: 'Dr. Smith / ABC Dental Office', type: 'input' },
      { key: 'role', label: 'Their role', placeholder: 'primary care physician', type: 'input' },
      { key: 'since', label: 'Patient/client since', placeholder: 'January 2020', type: 'input', optional: true },
      { key: 'reason', label: 'Reason (optional, keep brief)', placeholder: 'changing providers / moving / need different specialty', type: 'input', optional: true },
      { key: 'records', label: 'Where to send records', placeholder: 'New Provider Name, 123 Main St, City, State ZIP', type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
      { key: 'dob', label: 'Your date of birth', placeholder: '01/15/1962', type: 'input', optional: true },
    ],
    templates: {
      'Professional': (v) => `Subject: Termination of care — ${subjectSafe(v.name, '[Your name]')}${lineOrBlank(v.dob) ? `, DOB ${v.dob}` : ''}

Dear ${subjectSafe(v.to, 'Dr. [Name]')},

I am writing to formally end my relationship as a patient of your practice${lineOrBlank(v.since) ? `, effective today. I have been a patient since ${v.since}.` : '.'}

${lineOrBlank(v.reason) ? `The reason: ${v.reason}.\n\n` : ''}Please transfer a complete copy of my medical records to:

${subjectSafe(v.records, '[new provider name and address]')}

I understand a records release form may be required — please send it to me to sign. Please also cancel any upcoming appointments on file.

Thank you for the care you've provided.

Sincerely,
${subjectSafe(v.name, '[Your name]')}${lineOrBlank(v.dob) ? `\nDOB: ${v.dob}` : ''}`,
      'Firm but kind': (v) => `Subject: Ending care — ${subjectSafe(v.name, '[Your name]')}

Dear ${subjectSafe(v.to, 'Dr. [Name]')},

I've decided to end my care with your office${lineOrBlank(v.since) ? ` after being a patient since ${v.since}` : ''}. ${lineOrBlank(v.reason) ? v.reason.charAt(0).toUpperCase() + v.reason.slice(1) + '.' : ''}

Please send a full copy of my records to:

${subjectSafe(v.records, '[new provider info]')}

Please cancel any scheduled appointments and confirm once records have been sent.

I appreciate the care I received.

Best regards,
${subjectSafe(v.name, '[Your name]')}${lineOrBlank(v.dob) ? `\nDOB: ${v.dob}` : ''}`,
      'Casual': () => '',
      'Warm and personal': () => '',
    },
  },
  {
    id: 'cancel-sub',
    title: 'Canceling a subscription',
    description: 'End a recurring charge clearly and in writing.',
    icon: '',
    tones: ['Professional', 'Casual', 'Firm but kind'],
    fields: [
      { key: 'to', label: 'Company', placeholder: 'ACME Streaming', type: 'input' },
      { key: 'account', label: 'Account / email on file', placeholder: 'jane@email.com', type: 'input' },
      { key: 'service', label: 'Service being canceled', placeholder: 'Premium plan, monthly', type: 'input' },
      { key: 'effective', label: 'Effective date', placeholder: 'immediately / end of current billing period', type: 'input' },
      { key: 'reason', label: 'Reason (optional)', placeholder: "too expensive / don't use it", type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Cancellation request — ${subjectSafe(v.service, 'my subscription')}

To whom it may concern at ${subjectSafe(v.to, '[company]')},

Please cancel my ${subjectSafe(v.service, 'subscription')} associated with the account ${subjectSafe(v.account, '[your email/account]')}, effective ${subjectSafe(v.effective, 'the end of the current billing period')}.

${lineOrBlank(v.reason) ? `Reason: ${v.reason}.\n\n` : ''}Please confirm the cancellation in writing and confirm that no further charges will be made to my payment method. If any charges occur after this date, I will dispute them with my bank.

Thank you,
${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': (v) => `Subject: Please cancel ${subjectSafe(v.service, 'my subscription')}

Hi ${subjectSafe(v.to, 'team')},

I'm asking to cancel my ${subjectSafe(v.service, 'subscription')} (account: ${subjectSafe(v.account, '[account]')}) effective ${subjectSafe(v.effective, 'immediately')}. ${lineOrBlank(v.reason) ? `${v.reason}.` : ''}

Please reply to confirm the cancellation date and that no future charges will be made. I'd rather not have to dispute charges with my bank.

Thanks,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Canceling my ${subjectSafe(v.service, 'subscription')}

Hey ${subjectSafe(v.to, 'team')},

Please cancel my subscription — account is ${subjectSafe(v.account, '[account]')}, service is ${subjectSafe(v.service, '[plan]')}. Please end it ${subjectSafe(v.effective, 'at the end of this billing cycle')}. Can you send me a quick confirmation?

Thanks,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': () => '',
    },
  },
  {
    id: 'refund',
    title: 'Requesting a refund',
    description: 'Ask for your money back with a clear reason.',
    icon: '',
    tones: ['Professional', 'Firm but kind', 'Casual'],
    fields: [
      { key: 'to', label: 'Company / person', placeholder: 'ABC Online Store', type: 'input' },
      { key: 'order', label: 'Order or reference', placeholder: 'Order #12345', type: 'input' },
      { key: 'date', label: 'Purchase date', placeholder: 'March 10, 2026', type: 'input' },
      { key: 'amount', label: 'Amount', placeholder: '$89.99', type: 'input' },
      { key: 'reason', label: 'Reason for refund', placeholder: 'Item arrived damaged', type: 'input' },
      { key: 'method', label: 'Preferred refund method', placeholder: 'Refund to original card', type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Refund request — ${subjectSafe(v.order, 'recent purchase')}

Dear ${subjectSafe(v.to, 'Customer Service')},

I am requesting a refund of ${subjectSafe(v.amount, '[amount]')} for ${subjectSafe(v.order, 'my recent order')}, placed on ${subjectSafe(v.date, '[date]')}.

Reason: ${subjectSafe(v.reason, '[reason]')}.

Please issue the refund ${subjectSafe(v.method, 'to the original payment method')} and confirm once processed.

Thank you,
${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': (v) => `Subject: Refund needed — ${subjectSafe(v.order, 'order issue')}

Hi ${subjectSafe(v.to, 'team')},

I need a refund of ${subjectSafe(v.amount, '[amount]')} for ${subjectSafe(v.order, 'this order')} from ${subjectSafe(v.date, '[date]')}. Reason: ${subjectSafe(v.reason, '[reason]')}.

Please refund ${subjectSafe(v.method, 'to the original payment method')} within the next 7 business days. If that isn't possible, please let me know what the next step is — I'd prefer to resolve this with you rather than dispute the charge with my card issuer.

Thank you,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Refund for ${subjectSafe(v.order, 'my order')}

Hey ${subjectSafe(v.to, 'team')},

Can I get a refund for ${subjectSafe(v.order, '[order]')} from ${subjectSafe(v.date, '[date]')}? It was ${subjectSafe(v.amount, '[amount]')}. Reason: ${subjectSafe(v.reason, '[reason]')}.

Refund back to ${subjectSafe(v.method, 'the card I used')} would be great. Thanks!

${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': () => '',
    },
  },
  {
    id: 'medical-cancel',
    title: 'Medical appointment cancellation',
    description: 'Cancel a doctor/dentist/specialist appointment politely.',
    icon: '',
    tones: ['Professional', 'Warm and personal'],
    fields: [
      { key: 'to', label: 'Office name', placeholder: 'Dr. Smith / ABC Family Medicine', type: 'input' },
      { key: 'apptDate', label: 'Appointment date/time', placeholder: 'April 22, 2026 at 10:30 AM', type: 'input' },
      { key: 'reason', label: 'Reason (optional)', placeholder: 'work conflict / feeling under the weather', type: 'input', optional: true },
      { key: 'reschedule', label: 'Do you want to reschedule?', placeholder: 'Yes, please offer next available / No', type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
      { key: 'dob', label: 'Date of birth', placeholder: '01/15/1962', type: 'input', optional: true },
    ],
    templates: {
      'Professional': (v) => `Subject: Appointment cancellation — ${subjectSafe(v.name, '[Your name]')} on ${subjectSafe(v.apptDate, '[date/time]')}

Dear ${subjectSafe(v.to, 'Office')},

I need to cancel my appointment scheduled for ${subjectSafe(v.apptDate, '[date/time]')}.${lineOrBlank(v.reason) ? ` Reason: ${v.reason}.` : ''}

${subjectSafe(v.reschedule, 'Please let me know if I can reschedule.')}

Thank you for your understanding.

Sincerely,
${subjectSafe(v.name, '[Your name]')}${lineOrBlank(v.dob) ? `\nDOB: ${v.dob}` : ''}`,
      'Warm and personal': (v) => `Subject: Needing to cancel ${subjectSafe(v.apptDate, 'my appointment')}

Hi ${subjectSafe(v.to, 'team')},

I'm sorry for the short notice — I need to cancel my appointment on ${subjectSafe(v.apptDate, '[date/time]')}.${lineOrBlank(v.reason) ? ` ${v.reason.charAt(0).toUpperCase() + v.reason.slice(1)}.` : ''}

${subjectSafe(v.reschedule, 'I would love to reschedule at your next available opening — whatever is easiest for you.')}

Thank you so much,
${subjectSafe(v.name, '[Your name]')}${lineOrBlank(v.dob) ? `\nDOB: ${v.dob}` : ''}`,
      'Casual': () => '',
      'Firm but kind': () => '',
    },
  },
  {
    id: 'thank-you',
    title: 'Thanking someone',
    description: 'A sincere thank-you note that actually lands.',
    icon: '',
    tones: ['Warm and personal', 'Professional', 'Casual'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Sarah', type: 'input' },
      { key: 'forWhat', label: 'What they did', placeholder: 'helping me move last Saturday', type: 'input' },
      { key: 'impact', label: 'How it helped or what it meant', placeholder: "I couldn't have done it without you", type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Warm and personal': (v) => `Subject: Thank you — really

${subjectSafe(v.to, '[Name]')},

I wanted to take a minute to properly thank you for ${subjectSafe(v.forWhat, '[what they did]')}. ${subjectSafe(v.impact, 'It meant a lot.')}

It's the kind of thing I won't forget.

With gratitude,
${subjectSafe(v.name, '[Your name]')}`,
      'Professional': (v) => `Subject: Thank you

Dear ${subjectSafe(v.to, '[Name]')},

I wanted to express my sincere appreciation for ${subjectSafe(v.forWhat, '[what they did]')}. ${subjectSafe(v.impact, 'Your help made a real difference.')}

Thank you again for your time and support.

Best regards,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Thanks!

Hey ${subjectSafe(v.to, '[Name]')},

Just wanted to say thanks for ${subjectSafe(v.forWhat, '[what they did]')}. ${subjectSafe(v.impact, 'Seriously helped me out.')}

Owe you one.

${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': () => '',
    },
  },
  {
    id: 'reference',
    title: 'Asking for a reference',
    description: 'Request a professional reference gracefully.',
    icon: '',
    tones: ['Professional', 'Warm and personal'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Dr. Johnson', type: 'input' },
      { key: 'relationship', label: 'How you know them', placeholder: 'my manager for 3 years at ABC Corp', type: 'input' },
      { key: 'purpose', label: 'What the reference is for', placeholder: 'a senior analyst role at XYZ Inc.', type: 'input' },
      { key: 'deadline', label: 'Deadline', placeholder: 'April 30, 2026', type: 'input' },
      { key: 'details', label: 'Any details or link you can share', placeholder: 'job description link, key skills to highlight', type: 'textarea', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Would you consider being a reference for me?

Dear ${subjectSafe(v.to, '[Name]')},

I hope you're doing well. I'm writing to ask whether you would be willing to serve as a reference for me. ${lineOrBlank(v.relationship) ? `Given that you were ${v.relationship}, ` : ''}your perspective would carry a lot of weight.

I'm applying for ${subjectSafe(v.purpose, '[role/purpose]')}, and the reference would need to be in by ${subjectSafe(v.deadline, '[deadline]')}.

${lineOrBlank(v.details) ? `A few details that might help:\n${bulletize(v.details)}\n\n` : ''}I completely understand if this isn't something you have capacity for — please don't feel any pressure either way.

Thank you for considering it.

Best regards,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: A favor to ask

Hi ${subjectSafe(v.to, '[Name]')},

Hope all is well with you. I have a favor to ask: would you be willing to be a reference for me? ${lineOrBlank(v.relationship) ? `You've known my work ${v.relationship.startsWith('as') ? v.relationship : `as ${v.relationship}`}, ` : ''}and your voice would mean a lot.

It's for ${subjectSafe(v.purpose, '[role/purpose]')}, and the deadline is ${subjectSafe(v.deadline, '[deadline]')}.

${lineOrBlank(v.details) ? `I can send over whatever helps:\n${bulletize(v.details)}\n\n` : ''}No pressure at all if it's not a good time.

Thank you either way,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': () => '',
      'Firm but kind': () => '',
    },
  },
  {
    id: 'offer-response',
    title: 'Responding to a job offer',
    description: 'Accept, negotiate, or ask for more time.',
    icon: '',
    tones: ['Professional', 'Warm and personal'],
    fields: [
      { key: 'to', label: 'Hiring manager / recruiter name', placeholder: 'Mr. Kim', type: 'input' },
      { key: 'company', label: 'Company', placeholder: 'XYZ Inc.', type: 'input' },
      { key: 'role', label: 'Role', placeholder: 'Senior Analyst', type: 'input' },
      { key: 'stance', label: 'Your response (accept / negotiate / need time)', placeholder: 'accept / negotiate / need time', type: 'input' },
      { key: 'details', label: 'Any specifics (new salary ask, start date, etc.)', placeholder: 'Requesting $95k base, flexible on start date', type: 'textarea', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Re: ${subjectSafe(v.role, '[Role]')} offer — ${subjectSafe(v.name, '[Your name]')}

Dear ${subjectSafe(v.to, '[Name]')},

Thank you very much for the offer to join ${subjectSafe(v.company, '[Company]')} as ${subjectSafe(v.role, '[Role]')}. I really appreciate the time the team has put into this process.

${v.stance?.toLowerCase().includes('accept')
  ? `I am delighted to accept the offer. ${lineOrBlank(v.details) ? `To confirm the specifics on my end:\n${bulletize(v.details)}\n\n` : ''}Please let me know next steps for paperwork and onboarding.`
  : v.stance?.toLowerCase().includes('need')
    ? `I'm very interested in the role. Would it be possible to have a few additional days to review the full package and discuss with my family? I can respond by [date you choose]. ${lineOrBlank(v.details) ? `\n\nA few notes on what I'm reviewing:\n${bulletize(v.details)}` : ''}`
    : `I'm very excited about the role and would like to discuss a few details before formally accepting:\n${bulletize(v.details) || '- Compensation\n- Start date\n- Other terms'}\n\nHappy to jump on a quick call if that's easier.`}

Thank you again,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: About the ${subjectSafe(v.role, '[Role]')} offer

Hi ${subjectSafe(v.to, '[Name]')},

Thank you — truly — for the offer. It's a real honor to be considered for ${subjectSafe(v.role, '[Role]')} at ${subjectSafe(v.company, '[Company]')}.

${v.stance?.toLowerCase().includes('accept')
  ? `I'd love to accept. ${lineOrBlank(v.details) ? `Quick notes on my side:\n${bulletize(v.details)}\n\n` : ''}Let me know what you need from me next.`
  : v.stance?.toLowerCase().includes('need')
    ? `I'd like to give this the thought it deserves. Could I come back to you with a decision by [date]? ${lineOrBlank(v.details) ? `\n\n${bulletize(v.details)}` : ''}`
    : `Before I formally say yes, I'd love to talk through a few pieces of the package:\n${bulletize(v.details) || '- Compensation\n- Start date'}\n\nIs there a good time this week?`}

Thanks so much,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': () => '',
      'Firm but kind': () => '',
    },
  },
  {
    id: 'decline',
    title: 'Declining politely',
    description: 'Say no without burning bridges.',
    icon: '',
    tones: ['Professional', 'Warm and personal'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Mark', type: 'input' },
      { key: 'what', label: 'What are you declining?', placeholder: 'the invitation to speak at the April event', type: 'input' },
      { key: 'reason', label: 'Reason (optional, keep short)', placeholder: 'schedule conflict / not a fit right now', type: 'input', optional: true },
      { key: 'leaveDoor', label: "Leave door open? (yes/no)", placeholder: 'yes', type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Re: ${subjectSafe(v.what, 'your invitation')}

Dear ${subjectSafe(v.to, '[Name]')},

Thank you for thinking of me for ${subjectSafe(v.what, '[what it is]')}. Unfortunately, I'm not able to accept${lineOrBlank(v.reason) ? ` — ${v.reason}` : ''}.

${v.leaveDoor?.toLowerCase().startsWith('y')
  ? `I'd be glad to stay in touch and would welcome the opportunity to connect again in the future.`
  : ''}

Thank you again, and best of luck with the plans.

Sincerely,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: Re: ${subjectSafe(v.what, 'your invitation')}

Hi ${subjectSafe(v.to, '[Name]')},

Thank you so much for thinking of me for ${subjectSafe(v.what, '[what it is]')}. I have to pass this time${lineOrBlank(v.reason) ? ` — ${v.reason}` : ''}.

${v.leaveDoor?.toLowerCase().startsWith('y')
  ? `Please keep me in mind down the road — I'd love the chance to be part of something together.`
  : ''}

Wishing you all the best,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': () => '',
      'Firm but kind': () => '',
    },
  },
  {
    id: 'congrats',
    title: 'Congratulations message',
    description: 'A meaningful note for a big moment.',
    icon: '',
    tones: ['Warm and personal', 'Professional', 'Casual'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Sarah', type: 'input' },
      { key: 'event', label: 'What are you congratulating them on?', placeholder: 'the promotion to VP', type: 'input' },
      { key: 'note', label: 'One specific thing you admire about it', placeholder: "You've worked toward this for years", type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Warm and personal': (v) => `Subject: Congratulations!

${subjectSafe(v.to, '[Name]')},

Just saw the news about ${subjectSafe(v.event, '[the event]')} — couldn't be happier for you. ${subjectSafe(v.note, 'It is well deserved.')}

Celebrating from here.

${subjectSafe(v.name, '[Your name]')}`,
      'Professional': (v) => `Subject: Congratulations on ${subjectSafe(v.event, '[event]')}

Dear ${subjectSafe(v.to, '[Name]')},

Please accept my sincere congratulations on ${subjectSafe(v.event, '[the event]')}. ${subjectSafe(v.note, 'It is a tremendous achievement.')}

Wishing you continued success.

Warm regards,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: 

${subjectSafe(v.to, '[Name]')},

Huge congrats on ${subjectSafe(v.event, '[the event]')}. ${subjectSafe(v.note, 'So happy for you.')}

${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': () => '',
    },
  },
  {
    id: 'condolence',
    title: 'Condolence message',
    description: 'A caring note for a hard time.',
    icon: '',
    tones: ['Warm and personal', 'Professional'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Michael', type: 'input' },
      { key: 'loss', label: 'Who they lost (name or relationship)', placeholder: 'your mother, Mary / your father', type: 'input' },
      { key: 'memory', label: 'A short memory or quality (optional)', placeholder: 'Her kindness to everyone she met stuck with me.', type: 'textarea', optional: true },
      { key: 'offer', label: 'Concrete offer of help (optional)', placeholder: "I'll drop off dinner Thursday — no need to respond.", type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Warm and personal': (v) => `Subject: Thinking of you

${subjectSafe(v.to, '[Name]')},

I am so sorry to hear about ${subjectSafe(v.loss, 'your loss')}. ${lineOrBlank(v.memory) ? v.memory : 'There are no right words, but you and your family are in my thoughts.'}

${lineOrBlank(v.offer) ? v.offer : 'Please know I am here — you don\'t need to reply, and you don\'t need to carry this alone.'}

With love,
${subjectSafe(v.name, '[Your name]')}`,
      'Professional': (v) => `Subject: With sympathy

Dear ${subjectSafe(v.to, '[Name]')},

I was deeply saddened to learn of ${subjectSafe(v.loss, 'your loss')}. Please accept my sincere condolences to you and your family.

${lineOrBlank(v.memory) ? v.memory + '\n\n' : ''}${lineOrBlank(v.offer) ? v.offer : 'Please take the time you need — there is no need to respond.'}

With sympathy,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': () => '',
      'Firm but kind': () => '',
    },
  },
  {
    id: 'favor',
    title: 'Asking a favor',
    description: 'Make the ask clearly, respect their time.',
    icon: '',
    tones: ['Professional', 'Warm and personal', 'Casual'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Alex', type: 'input' },
      { key: 'favor', label: 'What you need', placeholder: 'an intro to someone in your network', type: 'input' },
      { key: 'why', label: 'Why this matters', placeholder: 'I am changing fields and their team is doing what I want to do', type: 'input' },
      { key: 'effort', label: 'How much effort it is on their side', placeholder: 'A 2-sentence intro email — I will take it from there', type: 'input' },
      { key: 'timing', label: 'Timing', placeholder: 'no rush, anytime in the next 2 weeks', type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: A quick favor — ${subjectSafe(v.favor, 'a small request')}

Dear ${subjectSafe(v.to, '[Name]')},

I hope you're doing well. I'm writing to ask a favor: ${subjectSafe(v.favor, '[what you need]')}. ${subjectSafe(v.why, '')}

On your side, it would be ${subjectSafe(v.effort, '[how easy]')}. ${lineOrBlank(v.timing) ? v.timing.charAt(0).toUpperCase() + v.timing.slice(1) + '.' : ''}

No pressure at all — please say no if it isn't a good fit.

Thank you for considering it,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: Asking a small favor

Hi ${subjectSafe(v.to, '[Name]')},

Hope life is treating you well. I wanted to ask you something: ${subjectSafe(v.favor, '[what you need]')}. ${subjectSafe(v.why, '')}

On your side, it really is ${subjectSafe(v.effort, '[how easy]')}. ${lineOrBlank(v.timing) ? v.timing.charAt(0).toUpperCase() + v.timing.slice(1) + '.' : ''}

Totally fine if the answer is no — and thank you either way.

${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Quick favor?

Hey ${subjectSafe(v.to, '[Name]')},

Can I ask a favor? ${subjectSafe(v.favor, '[what you need]')}. ${subjectSafe(v.why, '')}

Should take about ${subjectSafe(v.effort, '5 minutes on your end')}. ${lineOrBlank(v.timing) ? v.timing + '.' : ''}

No worries if now isn't a good time. Thanks for considering it!

${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': () => '',
    },
  },
  {
    id: 'apology',
    title: 'Apologizing',
    description: 'Own the mistake and move forward.',
    icon: '',
    tones: ['Professional', 'Warm and personal', 'Casual'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Sam', type: 'input' },
      { key: 'what', label: 'What you are sorry for', placeholder: 'missing our call yesterday', type: 'input' },
      { key: 'impact', label: 'How it affected them', placeholder: 'I wasted your time and left you hanging', type: 'input' },
      { key: 'fix', label: 'What you will do differently', placeholder: 'I put our meetings in my calendar with a 30-minute reminder', type: 'input' },
      { key: 'makeup', label: 'How to make it up (optional)', placeholder: 'Happy to reschedule at a time that works best for you.', type: 'input', optional: true },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: My apologies

Dear ${subjectSafe(v.to, '[Name]')},

I want to apologize sincerely for ${subjectSafe(v.what, '[what happened]')}. ${subjectSafe(v.impact, 'I understand this caused inconvenience and I take responsibility for it.')}

Going forward, ${subjectSafe(v.fix, 'I will do better.')} ${lineOrBlank(v.makeup) ? v.makeup : ''}

Thank you for your understanding.

Sincerely,
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': (v) => `Subject: I'm sorry

${subjectSafe(v.to, '[Name]')},

I owe you an apology for ${subjectSafe(v.what, '[what happened]')}. ${subjectSafe(v.impact, 'That wasn\'t fair to you.')}

Here's what I'll do differently: ${subjectSafe(v.fix, '[your fix]')}. ${lineOrBlank(v.makeup) ? v.makeup : ''}

Thank you for your patience with me.

${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Sorry about ${subjectSafe(v.what, 'earlier')}

Hey ${subjectSafe(v.to, '[Name]')},

I'm really sorry about ${subjectSafe(v.what, '[what happened]')}. ${subjectSafe(v.impact, 'My bad.')} ${subjectSafe(v.fix, 'Won\'t happen again.')} ${lineOrBlank(v.makeup) ? v.makeup : ''}

${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': () => '',
    },
  },
  {
    id: 'follow-up',
    title: 'Following up',
    description: 'A polite nudge that gets a reply.',
    icon: '',
    tones: ['Professional', 'Firm but kind', 'Casual'],
    fields: [
      { key: 'to', label: 'Their name', placeholder: 'Chris', type: 'input' },
      { key: 'original', label: 'What was the original email/request about?', placeholder: 'the quote I sent on March 12', type: 'input' },
      { key: 'when', label: 'When you first reached out', placeholder: 'March 12', type: 'input' },
      { key: 'ask', label: 'What you need from them', placeholder: 'confirmation on whether to move forward', type: 'input' },
      { key: 'name', label: 'Your name', placeholder: 'Jane', type: 'input' },
    ],
    templates: {
      'Professional': (v) => `Subject: Following up on ${subjectSafe(v.original, 'my previous email')}

Dear ${subjectSafe(v.to, '[Name]')},

I wanted to follow up on ${subjectSafe(v.original, '[what it is about]')}, which I sent on ${subjectSafe(v.when, '[date]')}.

When you have a moment, I'd appreciate ${subjectSafe(v.ask, 'a short update')}.

Thank you,
${subjectSafe(v.name, '[Your name]')}`,
      'Firm but kind': (v) => `Subject: Following up — ${subjectSafe(v.original, 'pending request')}

Hi ${subjectSafe(v.to, '[Name]')},

Checking back on ${subjectSafe(v.original, '[what it is about]')} from ${subjectSafe(v.when, '[date]')} — I haven't heard back and wanted to make sure it didn't get lost.

Specifically, I need ${subjectSafe(v.ask, '[what you need]')}. Could you let me know by the end of the week?

Thanks,
${subjectSafe(v.name, '[Your name]')}`,
      'Casual': (v) => `Subject: Checking in

Hey ${subjectSafe(v.to, '[Name]')},

Just following up on ${subjectSafe(v.original, '[what it is about]')} from ${subjectSafe(v.when, '[date]')}. Any update on ${subjectSafe(v.ask, '[what you need]')}?

Thanks!
${subjectSafe(v.name, '[Your name]')}`,
      'Warm and personal': () => '',
    },
  },
];

export default function EmailWriterHelper() {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<Inputs>({
    kind: '',
    recipientType: '',
    recipientName: '',
    yourName: '',
    tone: '',
    keyPoints: '',
  });
  const [showEmail, setShowEmail] = useState(false);
  const [length, setLength] = useState<Length>('normal');
  const emailRef = useRef<HTMLDivElement | null>(null);

  const email = useMemo(() => composeEmail(inputs, length), [inputs, length]);

  const formComplete =
    inputs.kind &&
    inputs.recipientType &&
    inputs.tone &&
    inputs.keyPoints.trim().length > 0;

  function handleGenerate() {
    if (!formComplete) {
      toast({
        title: 'A few things are missing',
        description:
          'Please choose the kind of email, the recipient, a tone, and add a few key points before we write the draft.',
      });
      return;
    }
    setShowEmail(true);
    setTimeout(
      () => emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      100,
    );
  }

  async function handleCopy() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(emailToPlainText(email));
      toast({
        title: 'Email copied to your clipboard',
        description: 'Paste it into your email app with Ctrl+V (or Cmd+V on Mac).',
      });
    } catch {
      toast({
        title: "Couldn't copy automatically",
        description: 'Select the text below and press Ctrl+C (or Cmd+C on Mac).',
      });
    }
  }

  function handleTryDifferentTone() {
    if (!inputs.tone) return;
    const next = nextTone(inputs.tone);
    setInputs((p) => ({ ...p, tone: next }));
    toast({
      title: `Rewritten with a ${toneLabels[next].toLowerCase()} tone`,
      description: 'Take a look — tap the button again to try another.',
    });
  }

  function handleShorter() {
    setLength('short');
    toast({
      title: 'Shortened',
      description: "We've trimmed the draft down to the essentials.",
    });
  }

  function handleLonger() {
    setLength('long');
    toast({
      title: 'Expanded',
      description: "We've added a little more context to the draft.",
    });
  }

  function handleReset() {
    setInputs({
      kind: '',
      recipientType: '',
      recipientName: '',
      yourName: '',
      tone: '',
      keyPoints: '',
    });
    setLength('normal');
    setShowEmail(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SEOHead
        title="Email Writer Helper | TekSure"
        description="Draft clear, polite emails for any situation — complaints, cancellations, medical requests, thank-yous, family conversations, and more. Templates only — we never send your email for you."
        path="/tools/email-writer-helper"
      />

      {/* Print-only styles (for folks who want to print the draft) */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          main { padding: 0 !important; max-width: none !important; }
          .print-break-avoid { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      <div className="no-print">
        <Navbar />
      </div>

      <main className="container py-10 min-h-[80vh] max-w-3xl mx-auto text-lg">
        <div className="flex items-center gap-3 mb-2 no-print">
          <Mail className="h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl font-bold">Email Writer Helper</h1>
        </div>
        <p className="text-muted-foreground mb-6 no-print">
          Answer four quick questions and we&apos;ll draft a polished email you can copy into your
          email app. Works for complaints, cancellations, medical requests, thank-you notes,
          difficult family topics, and more.
        </p>

        {/* Privacy badge */}
        <div
          className="flex items-start gap-3 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4 mb-8 no-print"
          role="note"
        >
          <ShieldCheck
            className="h-6 w-6 text-green-700 dark:text-green-300 shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-base text-green-900 dark:text-green-100">
            <span className="font-semibold">Your privacy is protected.</span> This tool uses
            templates that run entirely in your browser — we never send your email for you and
            nothing you type here leaves your device.
          </p>
        </div>

        {/* Input form */}
        <Card className="no-print print-break-avoid">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Tell us about your email</h2>

            {/* Kind of email */}
            <div className="space-y-2">
              <Label htmlFor="kind" className="text-base">
                What kind of email are you writing?
              </Label>
              <Select
                value={inputs.kind}
                onValueChange={(v: EmailKind) => setInputs((p) => ({ ...p, kind: v }))}
              >
                <SelectTrigger id="kind" className="h-12 text-base">
                  <SelectValue placeholder="Choose the type of email" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(kindLabels) as EmailKind[]).map((k) => (
                    <SelectItem key={k} value={k}>
                      {kindEmojis[k]} {kindLabels[k]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Recipient type */}
            <div className="space-y-3">
              <Label className="text-base">Who will receive this email?</Label>
              <RadioGroup
                value={inputs.recipientType}
                onValueChange={(v: Recipient) =>
                  setInputs((p) => ({ ...p, recipientType: v }))
                }
                className="grid gap-2"
              >
                {(Object.keys(recipientLabels) as Recipient[]).map((r) => (
                  <label
                    key={r}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer"
                  >
                    <RadioGroupItem value={r} id={`recipient-${r}`} />
                    <span>{recipientLabels[r]}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Recipient name (optional) */}
            <div className="space-y-2">
              <Label htmlFor="recipient-name" className="text-base">
                Their name <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="recipient-name"
                className="h-12 text-base"
                placeholder='e.g. "Dr. Patel", "Aunt Mary", or leave blank'
                value={inputs.recipientName}
                onChange={(e) =>
                  setInputs((p) => ({ ...p, recipientName: e.target.value }))
                }
              />
            </div>

            {/* Tone */}
            <div className="space-y-3">
              <Label className="text-base">What tone fits this message?</Label>
              <RadioGroup
                value={inputs.tone}
                onValueChange={(v: Tone) => setInputs((p) => ({ ...p, tone: v }))}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {(Object.keys(toneLabels) as Tone[]).map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-primary/60 cursor-pointer"
                  >
                    <RadioGroupItem value={t} id={`tone-${t}`} />
                    <span>{toneLabels[t]}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Key points */}
            <div className="space-y-2">
              <Label htmlFor="key-points" className="text-base">
                What do you want to say?{' '}
                <span className="text-muted-foreground">(a few bullet points is plenty)</span>
              </Label>
              <Textarea
                id="key-points"
                className="text-base min-h-[160px]"
                placeholder={
                  'e.g.\n- My bill went up $30 this month with no warning\n- I\'ve been a customer for 7 years\n- I\'d like the old rate back or an explanation'
                }
                value={inputs.keyPoints}
                onChange={(e) =>
                  setInputs((p) => ({ ...p, keyPoints: e.target.value }))
                }
              />
              <p className="text-sm text-muted-foreground">
                Put one thought per line. Don&apos;t worry about grammar — we&apos;ll polish it up.
              </p>
            </div>

            {/* Your name */}
            <div className="space-y-2">
              <Label htmlFor="your-name" className="text-base">
                Your name <span className="text-muted-foreground">(for the signature)</span>
              </Label>
              <Input
                id="your-name"
                className="h-12 text-base"
                placeholder="e.g. Barbara Wilson"
                value={inputs.yourName}
                onChange={(e) => setInputs((p) => ({ ...p, yourName: e.target.value }))}
              />
            </div>

            <Button
              size="lg"
              className="w-full h-14 text-lg gap-2"
              onClick={handleGenerate}
              disabled={!formComplete}
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Write my email
            </Button>
          </CardContent>
        </Card>

        {/* Email output */}
        {showEmail && email && (
          <div ref={emailRef} className="mt-10 space-y-6">
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 no-print">
              <Button size="lg" onClick={handleCopy} className="gap-2 h-12 text-base">
                <Copy className="h-5 w-5" aria-hidden="true" /> Copy email
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleTryDifferentTone}
                className="gap-2 h-12 text-base"
              >
                <Shuffle className="h-5 w-5" aria-hidden="true" /> Try a different tone
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleShorter}
                className="gap-2 h-12 text-base"
                disabled={length === 'short'}
              >
                <Minus className="h-5 w-5" aria-hidden="true" /> Make it shorter
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLonger}
                className="gap-2 h-12 text-base"
                disabled={length === 'long'}
              >
                <Plus className="h-5 w-5" aria-hidden="true" /> Make it longer
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={handleReset}
                className="gap-2 h-12 text-base ml-auto"
              >
                <RotateCcw className="h-5 w-5" aria-hidden="true" /> Start over
              </Button>
            </div>

            {/* Email card */}
            <Card className="print-break-avoid">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <h2 className="text-2xl font-bold">Your email draft</h2>
                  {inputs.kind && (
                    <Badge className="bg-primary text-primary-foreground">
                      {kindLabels[inputs.kind]}
                    </Badge>
                  )}
                  {inputs.tone && (
                    <Badge variant="outline">{toneLabels[inputs.tone]}</Badge>
                  )}
                  {length !== 'normal' && (
                    <Badge variant="outline">
                      {length === 'short' ? 'Shortened' : 'Expanded'}
                    </Badge>
                  )}
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Subject line
                  </div>
                  <div className="text-lg font-semibold rounded-lg bg-muted/60 px-4 py-3 border">
                    {email.subject}
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Email body */}
                <div className="space-y-5 leading-relaxed">
                  <p className="font-semibold">{email.greeting}</p>

                  <p>{email.opening}</p>

                  {email.bodyPoints.length > 0 && (
                    <>
                      <p>{email.context}</p>
                      {email.bodyPoints.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </>
                  )}

                  {email.ask && <p>{email.ask}</p>}

                  <p>{email.closing}</p>

                  <div className="pt-2">
                    <p>{email.signOff}</p>
                    <p className="font-semibold">{email.signature}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tip note */}
            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 no-print">
              <p className="text-base font-semibold text-amber-800 dark:text-amber-300 mb-1">
                 A couple of tips before you send
              </p>
              <ul className="text-sm text-amber-800/90 dark:text-amber-200/90 list-disc pl-5 space-y-1">
                <li>
                  Read the draft out loud once. If a sentence feels wrong when you say it, edit it
                  before sending.
                </li>
                <li>
                  Double-check any names, dates, account numbers, or dollar amounts — the draft
                  only knows what you typed in.
                </li>
                <li>
                  For important emails, wait an hour and re-read before sending. A fresh pair of
                  eyes catches a lot.
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
