import { useMemo, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Mail,
  AlertTriangle,
  Copy,
  Check,
  ShieldAlert,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

type Tone = 'Professional' | 'Casual' | 'Firm but kind' | 'Warm and personal';

interface ScenarioField {
  key: string;
  label: string;
  placeholder: string;
  type: 'input' | 'textarea';
  optional?: boolean;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  fields: ScenarioField[];
  tones: Tone[];
  warning?: string;
  templates: Record<Tone, (values: Record<string, string>) => string>;
}

const subjectSafe = (v: string, fallback: string) => (v && v.trim() ? v.trim() : fallback);
const lineOrBlank = (v: string) => (v && v.trim() ? v.trim() : '');

const bulletize = (facts: string) =>
  facts
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `- ${line.replace(/^[-•*]\s*/, '')}`)
    .join('\n');

const scenarios: Scenario[] = [
  {
    id: 'complaint',
    title: 'Complaint to a company',
    description: 'Raise an issue and ask for a specific fix.',
    icon: '📣',
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
    icon: '⚠️',
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
    icon: '🩺',
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
    icon: '✂️',
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
    icon: '💸',
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
    icon: '🏥',
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
    icon: '🙏',
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
    icon: '📝',
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
    icon: '💼',
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
    icon: '🚫',
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
    icon: '🎉',
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
      'Casual': (v) => `Subject: 🎉

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
    icon: '🤍',
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
    icon: '🤝',
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
    icon: '🙇',
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
    icon: '📬',
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
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tone, setTone] = useState<Tone>('Professional');
  const [values, setValues] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const active = useMemo(() => scenarios.find(s => s.id === activeId) ?? null, [activeId]);

  const selectScenario = (id: string) => {
    const s = scenarios.find(sc => sc.id === id);
    setActiveId(id);
    setValues({});
    setOutput('');
    if (s) setTone(s.tones[0]);
  };

  const handleGenerate = () => {
    if (!active) return;
    const fn = active.templates[tone];
    const result = fn ? fn(values) : '';
    setOutput(result);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <>
      <SEOHead
        title="Email Writer Helper — Write Better Emails in Plain English | TekSure"
        description="Stuck on a tricky email? Pick a situation, fill in a few details, and get a ready-to-send email you can copy, tweak, and paste."
        path="/tools/email-writer-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Email Writer Helper' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Need to Write an Email? We'll Help You Say It Right.
            </h1>
            <p className="text-muted-foreground text-lg">
              Pick a situation below, fill in a few details, and we'll build a clear, respectful email you can copy and send. No AI, no data collection — just ready-made wording that works.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {!active ? (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                What do you need to write?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scenarios.map(s => (
                  <button
                    key={s.id}
                    onClick={() => selectScenario(s.id)}
                    className="text-left p-4 rounded-2xl border border-border bg-card hover:border-foreground/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm font-semibold mb-2">Why we like this tool</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The hardest part of writing a sensitive email is staring at a blank page. We give you the first draft so you can focus on editing — which is always easier than inventing.
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <button
                onClick={() => { setActiveId(null); setOutput(''); }}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all scenarios
              </button>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-3xl" aria-hidden="true">{active.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{active.title}</h2>
                    <p className="text-sm text-muted-foreground">{active.description}</p>
                  </div>
                </div>
              </div>

              {active.warning && (
                <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-5">
                  <div className="flex gap-3 items-start">
                    <ShieldAlert className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm text-red-800 dark:text-red-300 mb-1">Don't reply.</p>
                      <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
                        {active.warning}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {active.fields.length > 0 && (
                <>
                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Tone</Label>
                    <div className="flex flex-wrap gap-2">
                      {active.tones.map(t => (
                        <button
                          key={t}
                          onClick={() => setTone(t)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors min-h-[44px] ${
                            tone === t
                              ? 'bg-foreground text-background border-foreground'
                              : 'bg-background text-foreground/70 border-border hover:border-foreground/30'
                          }`}
                          aria-pressed={tone === t}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {active.fields.map(f => (
                      <div key={f.key}>
                        <Label htmlFor={`field-${f.key}`} className="text-sm font-medium mb-1.5 block">
                          {f.label}
                          {f.optional && <span className="text-muted-foreground font-normal"> (optional)</span>}
                        </Label>
                        {f.type === 'textarea' ? (
                          <Textarea
                            id={`field-${f.key}`}
                            placeholder={f.placeholder}
                            value={values[f.key] ?? ''}
                            onChange={e => setValues(prev => ({ ...prev, [f.key]: e.target.value }))}
                            rows={4}
                          />
                        ) : (
                          <Input
                            id={`field-${f.key}`}
                            placeholder={f.placeholder}
                            value={values[f.key] ?? ''}
                            onChange={e => setValues(prev => ({ ...prev, [f.key]: e.target.value }))}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button onClick={handleGenerate} size="lg" className="gap-2">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Generate email
                  </Button>
                </>
              )}

              {active.fields.length === 0 && (
                <Button onClick={handleGenerate} size="lg" className="gap-2">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Show me what to do instead
                </Button>
              )}

              {output && (
                <div className="rounded-2xl border border-border bg-card">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <p className="text-sm font-semibold">Your email (edit freely before sending)</p>
                    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                  <Textarea
                    value={output}
                    onChange={e => setOutput(e.target.value)}
                    rows={Math.min(24, Math.max(10, output.split('\n').length + 2))}
                    className="rounded-t-none border-0 font-mono text-sm resize-y"
                  />
                </div>
              )}
            </div>
          )}

          <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/50">
            <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              Read it before you send
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>•</span> Did you spell names right?</li>
              <li className="flex gap-2"><span>•</span> Right email address in the "To" field?</li>
              <li className="flex gap-2"><span>•</span> Right dates, amounts, and reference numbers?</li>
              <li className="flex gap-2"><span>•</span> Did you keep it short (under 200 words if possible)?</li>
              <li className="flex gap-2"><span>•</span> Any emotional outbursts you'd regret? Sleep on it first.</li>
              <li className="flex gap-2"><span>•</span> Did you include how to reach you back?</li>
            </ul>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                For anything legal, medical, or with money on the line, the best version of this email is the one you read aloud once before hitting send. If it sounds off when you hear it, it will read off too.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
