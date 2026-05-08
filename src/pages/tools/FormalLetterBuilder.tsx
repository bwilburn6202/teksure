import { useState } from 'react';
import { FileText, Copy, Printer, RotateCcw, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type LetterType =
  | 'dispute-bill'
  | 'cancel-subscription'
  | 'insurance-appeal'
  | 'request-medical-records'
  | 'complaint-service'
  | 'request-refund';

interface LetterTemplate {
  label: string;
  description: string;
  fields: Field[];
  buildLetter: (data: Record<string, string>) => string;
}

interface Field {
  key: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const TEMPLATES: Record<LetterType, LetterTemplate> = {
  'dispute-bill': {
    label: 'Dispute a Bill',
    description: 'Challenge a charge you believe is wrong — medical, utility, or any billing error.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'Mary Johnson' },
      { key: 'yourAddress', label: 'Your address', placeholder: '123 Oak Street, Springfield, IL 62701', multiline: true },
      { key: 'companyName', label: 'Company or provider name', placeholder: 'Acme Medical Center' },
      { key: 'companyAddress', label: 'Company address (from your bill)', placeholder: '456 Main Ave, Chicago, IL 60601', multiline: true },
      { key: 'accountNumber', label: 'Account or invoice number', placeholder: 'INV-2026-00451' },
      { key: 'billDate', label: 'Date on the bill', placeholder: 'April 15, 2026' },
      { key: 'chargeAmount', label: 'Amount being disputed', placeholder: '$245.00' },
      { key: 'reason', label: 'Why you believe the charge is wrong', placeholder: 'This service was already covered by my insurance. My insurance company (Blue Cross) confirmed on April 20 that the claim was paid in full.', multiline: true },
      { key: 'requested', label: 'What you are asking them to do', placeholder: 'Remove the $245.00 charge from my account and send a corrected statement.' },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}

${today}

${d.companyName}
${d.companyAddress}

Re: Billing Dispute — Account No. ${d.accountNumber}

To Whom It May Concern:

I am writing to formally dispute a charge on my account. My account number is ${d.accountNumber}.

On ${d.billDate}, I received a bill that included a charge of ${d.chargeAmount}. I believe this charge is incorrect for the following reason:

${d.reason}

I am requesting that you ${d.requested}

Please respond in writing within 30 days of receiving this letter. If I do not hear from you, I will follow up by phone and, if necessary, contact my state's consumer protection office.

I am keeping a copy of this letter for my records.

Sincerely,

${d.yourName}
${d.yourAddress}`,
  },

  'cancel-subscription': {
    label: 'Cancel a Subscription',
    description: 'Formally request cancellation of a magazine, membership, or any recurring service.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'Robert Harris' },
      { key: 'yourAddress', label: 'Your address', placeholder: '789 Elm Drive, Tampa, FL 33601', multiline: true },
      { key: 'companyName', label: 'Company name', placeholder: 'National Geographic Society' },
      { key: 'companyAddress', label: 'Company address (from your bill or website)', placeholder: '1145 17th St NW, Washington, DC 20036', multiline: true },
      { key: 'accountNumber', label: 'Account, membership, or subscriber number', placeholder: 'SUB-0019234' },
      { key: 'serviceName', label: 'Name of the subscription or service', placeholder: 'National Geographic Magazine — print + digital' },
      { key: 'cancelDate', label: 'Date you want the cancellation to take effect', placeholder: 'May 31, 2026' },
      { key: 'refundRequest', label: 'Any refund or credit you are expecting (or write "No refund needed")', placeholder: 'A prorated refund for the remaining 4 months of my annual subscription, approximately $28.00.' },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}

${today}

${d.companyName}
${d.companyAddress}

Re: Cancellation Request — Account No. ${d.accountNumber}

To Whom It May Concern:

I am writing to request the cancellation of my subscription to ${d.serviceName}. My account number is ${d.accountNumber}.

Please cancel my subscription effective ${d.cancelDate}. I do not wish to receive any further shipments, charges, or renewals after that date.

Regarding any refund or credit: ${d.refundRequest}

Please confirm this cancellation in writing by mail or email. If there is any additional step I need to take, please contact me at the address above.

I am keeping a copy of this letter for my records.

Sincerely,

${d.yourName}
${d.yourAddress}`,
  },

  'insurance-appeal': {
    label: 'Appeal an Insurance Denial',
    description: 'Request that your insurance company reconsider a claim they denied.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'Dorothy Williams' },
      { key: 'yourAddress', label: 'Your address', placeholder: '22 Maple Court, Denver, CO 80201', multiline: true },
      { key: 'insurerName', label: 'Insurance company name', placeholder: 'Aetna Health Insurance' },
      { key: 'insurerAddress', label: 'Insurance company address (from your Explanation of Benefits)', placeholder: 'PO Box 981106, El Paso, TX 79998', multiline: true },
      { key: 'memberId', label: 'Your member ID or policy number', placeholder: 'W123456789' },
      { key: 'claimNumber', label: 'Claim number (from the denial letter)', placeholder: 'CLM-2026-88742' },
      { key: 'serviceDate', label: 'Date of the medical service or procedure', placeholder: 'March 12, 2026' },
      { key: 'serviceDesc', label: 'What was denied (the service, procedure, or medication)', placeholder: 'MRI of the right knee, ordered by Dr. Steven Park' },
      { key: 'denialReason', label: 'Reason they gave for the denial', placeholder: 'Deemed "not medically necessary"' },
      { key: 'whyNecessary', label: 'Why the service was medically necessary', placeholder: 'Dr. Park ordered this MRI because I have had severe knee pain for 6 weeks that has not improved with physical therapy. The MRI is needed to determine whether surgery is required.', multiline: true },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}

${today}

Appeals Department
${d.insurerName}
${d.insurerAddress}

Re: Formal Appeal of Claim Denial
Member ID: ${d.memberId}
Claim Number: ${d.claimNumber}

To Whom It May Concern:

I am writing to formally appeal the denial of coverage for a medical service. I received a denial notice for claim number ${d.claimNumber} related to ${d.serviceDesc}, which was performed on ${d.serviceDate}.

Your denial stated that the service was denied because: ${d.denialReason}.

I respectfully disagree with this determination. The service was medically necessary for the following reason:

${d.whyNecessary}

I am requesting that you review this claim again and approve coverage. I am prepared to provide additional documentation from my physician if needed.

Please respond in writing within 30 days. If my appeal is denied again, please include information about my right to an external review.

I am keeping a copy of this letter for my records.

Sincerely,

${d.yourName}
${d.yourAddress}
Member ID: ${d.memberId}`,
  },

  'request-medical-records': {
    label: 'Request Medical Records',
    description: 'Ask your doctor\'s office or hospital for a copy of your health records.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'James Anderson' },
      { key: 'yourAddress', label: 'Your address', placeholder: '55 River Road, Portland, OR 97201', multiline: true },
      { key: 'yourDOB', label: 'Your date of birth', placeholder: 'January 8, 1952' },
      { key: 'providerName', label: 'Doctor\'s office or hospital name', placeholder: 'Oregon Health & Science University' },
      { key: 'providerAddress', label: 'Their address', placeholder: '3181 SW Sam Jackson Park Rd, Portland, OR 97239', multiline: true },
      { key: 'recordsNeeded', label: 'What records you need', placeholder: 'All records from January 2024 to the present, including lab results, visit notes, and imaging reports' },
      { key: 'purpose', label: 'Why you need them', placeholder: 'I am transferring care to a new primary care physician.' },
      { key: 'deliveryMethod', label: 'How you want to receive them', placeholder: 'By mail to my address above, or electronically to jandeerson52@gmail.com' },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}
Date of Birth: ${d.yourDOB}

${today}

Medical Records Department
${d.providerName}
${d.providerAddress}

Re: Request for Medical Records

To Whom It May Concern:

I am writing to request a copy of my medical records. My name is ${d.yourName} and my date of birth is ${d.yourDOB}.

Specifically, I am requesting: ${d.recordsNeeded}

The reason for this request is: ${d.purpose}

I would like to receive these records: ${d.deliveryMethod}

I understand that under HIPAA, I have the right to receive a copy of my medical records. Please let me know if you require a signed authorization form or any additional identification.

I am happy to pay any reasonable copying fees. Please contact me at the address above if you need anything further.

Thank you for your assistance.

Sincerely,

${d.yourName}
${d.yourAddress}`,
  },

  'complaint-service': {
    label: 'Complain About a Service',
    description: 'Write a formal complaint to a business about poor service or a bad experience.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'Barbara Thompson' },
      { key: 'yourAddress', label: 'Your address', placeholder: '900 Birch Lane, Nashville, TN 37201', multiline: true },
      { key: 'companyName', label: 'Business name', placeholder: 'Sunrise Plumbing Services' },
      { key: 'companyAddress', label: 'Business address', placeholder: '200 Commerce St, Nashville, TN 37201', multiline: true },
      { key: 'incidentDate', label: 'Date the problem occurred', placeholder: 'April 28, 2026' },
      { key: 'whatHappened', label: 'What went wrong', placeholder: 'A technician arrived 3 hours late for a scheduled appointment, then charged me $180 for a repair that did not fix the problem. I called the office twice and received no response.', multiline: true },
      { key: 'resolution', label: 'What you want them to do', placeholder: 'Refund the $180 charge, or send a technician at no charge to properly fix the problem.' },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}

${today}

Customer Service Department
${d.companyName}
${d.companyAddress}

Re: Formal Complaint Regarding Service

To Whom It May Concern:

I am writing to formally express my dissatisfaction with the service I received from ${d.companyName}.

On ${d.incidentDate}, the following occurred:

${d.whatHappened}

I believe this situation requires your attention and a fair resolution. I am requesting that you: ${d.resolution}

Please respond in writing within 14 days of receiving this letter. If I do not receive a satisfactory response, I will consider filing a complaint with the Better Business Bureau and my state's consumer protection office.

I value your business and hope this matter can be resolved promptly.

Sincerely,

${d.yourName}
${d.yourAddress}`,
  },

  'request-refund': {
    label: 'Request a Refund',
    description: 'Ask for your money back on a purchase or service that did not meet expectations.',
    fields: [
      { key: 'yourName', label: 'Your full name', placeholder: 'Charles Davis' },
      { key: 'yourAddress', label: 'Your address', placeholder: '14 Willow Way, Phoenix, AZ 85001', multiline: true },
      { key: 'companyName', label: 'Company name', placeholder: 'HomeGoods Direct' },
      { key: 'companyAddress', label: 'Company address', placeholder: '500 Commerce Blvd, Framingham, MA 01702', multiline: true },
      { key: 'purchaseDate', label: 'Date of purchase', placeholder: 'April 10, 2026' },
      { key: 'orderNumber', label: 'Order or receipt number', placeholder: 'ORD-2026-55841' },
      { key: 'itemName', label: 'Item or service purchased', placeholder: 'Bedside lamp, Model HG-2210, $79.99' },
      { key: 'reason', label: 'Why you are requesting a refund', placeholder: 'The lamp arrived with a cracked base and the electrical cord was frayed. It is not safe to use.', multiline: true },
      { key: 'refundAmount', label: 'Amount you are requesting', placeholder: '$79.99 (full purchase price)' },
    ],
    buildLetter: (d) => `${d.yourName}
${d.yourAddress}

${today}

Customer Service Department
${d.companyName}
${d.companyAddress}

Re: Refund Request — Order No. ${d.orderNumber}

To Whom It May Concern:

I am writing to request a refund for a purchase I made on ${d.purchaseDate}. My order number is ${d.orderNumber}.

The item purchased was: ${d.itemName}

I am requesting a refund for the following reason:

${d.reason}

I am requesting a refund of ${d.refundAmount}. Please let me know your preferred return procedure and I will arrange to send the item back if necessary.

Please respond within 14 business days. I am keeping a copy of this letter and all related receipts for my records.

Thank you for your prompt attention.

Sincerely,

${d.yourName}
${d.yourAddress}`,
  },
};

const LETTER_TYPES: LetterType[] = [
  'dispute-bill',
  'cancel-subscription',
  'insurance-appeal',
  'request-medical-records',
  'complaint-service',
  'request-refund',
];

export default function FormalLetterBuilder() {
  const [step, setStep] = useState<'pick' | 'fill' | 'preview'>('pick');
  const [letterType, setLetterType] = useState<LetterType | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const template = letterType ? TEMPLATES[letterType] : null;

  const setField = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const allFilled = template
    ? template.fields.every(f => (formData[f.key] || '').trim().length > 0)
    : false;

  const letterText = template && allFilled ? template.buildLetter(formData) : '';

  const copyLetter = async () => {
    await navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setStep('pick');
    setLetterType(null);
    setFormData({});
    setCopied(false);
  };

  return (
    <>
      <SEOHead
        title="Formal Letter Builder — TekSure"
        description="Build a professional formal letter in minutes — dispute a bill, cancel a subscription, appeal an insurance denial, request medical records, or file a complaint."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 print:mb-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 mb-4 print:hidden">
              <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Formal Letter Builder</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              Answer a few questions and we'll write a professional letter for you.
            </p>
          </div>

          {/* Step 1: Pick letter type */}
          {step === 'pick' && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-lg">What kind of letter do you need?</p>
              <div className="space-y-2">
                {LETTER_TYPES.map(type => {
                  const t = TEMPLATES[type];
                  return (
                    <button
                      key={type}
                      onClick={() => { setLetterType(type); setFormData({}); setStep('fill'); }}
                      className="w-full text-left px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all"
                    >
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{t.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Fill in fields */}
          {step === 'fill' && template && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-lg">{template.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Fill in the information below. We'll write the letter for you.</p>

              <div className="space-y-4">
                {template.fields.map(field => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {field.label}
                    </label>
                    {field.multiline ? (
                      <textarea
                        value={formData[field.key] || ''}
                        onChange={e => setField(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <input
                        type="text"
                        value={formData[field.key] || ''}
                        onChange={e => setField(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-3 items-center">
                <button onClick={() => setStep('pick')} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep('preview')}
                  disabled={!allFilled}
                  className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-sm transition-colors"
                >
                  Build My Letter <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              {!allFilled && (
                <p className="text-xs text-gray-400 dark:text-gray-500 text-right mt-2">Fill in all fields above to continue.</p>
              )}
            </div>
          )}

          {/* Step 3: Preview */}
          {step === 'preview' && template && (
            <>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm print:border-gray-400">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{template.label}</h2>
                  <span className="text-xs text-gray-400 dark:text-gray-500 print:hidden">Your letter is below</span>
                </div>
                <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-sans leading-relaxed">
                  {letterText}
                </pre>
              </div>

              <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Next steps</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">Copy this letter and paste it into Word, Google Docs, or your email — or print this page. Sign your name and keep a copy for your records before sending.</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 print:hidden">
                <button
                  onClick={() => setStep('fill')}
                  className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <ChevronLeft className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
                <button
                  onClick={copyLetter}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-sm font-medium transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Letter'}
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Letter
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
