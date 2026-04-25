import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Copy, Check } from 'lucide-react';

interface Template {
  title: string;
  category: string;
  body: string;
}

const templates: Template[] = [
  {
    title: 'Complaint to a Company',
    category: 'Shopping',
    body: `Dear [Company Name],

I am writing to express my dissatisfaction with [product/service] purchased on [date]. [Describe the issue briefly].

I would appreciate it if you could [desired resolution, e.g. provide a refund, replace the item, investigate the matter].

Please respond within 14 days. I have attached relevant receipts/evidence for your reference.

Kind regards,
[Your Name]
[Your Contact Details]`,
  },
  {
    title: 'Return Request',
    category: 'Shopping',
    body: `Dear [Company Name],

I would like to return order #[order number], placed on [date]. The item I wish to return is [item name].

Reason for return: [reason].

Please let me know the next steps, including any return labels or instructions.

Thank you,
[Your Name]
[Your Email / Phone]`,
  },
  {
    title: 'Job Enquiry',
    category: 'Work',
    body: `Dear [Hiring Manager / Company Name],

I am writing to enquire about potential job opportunities within your organization. I am particularly interested in [role type / department].

I have experience in [brief summary of skills/experience]. I have attached my CV for your consideration.

I would welcome the opportunity to discuss any current or upcoming vacancies.

Kind regards,
[Your Name]
[Your Phone Number]`,
  },
  {
    title: 'Meeting Request',
    category: 'Work',
    body: `Hi [Recipient Name],

I hope this email finds you well. I would like to schedule a meeting to discuss [topic/agenda].

Would any of the following times work for you?
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration]. Please let me know what suits you best.

Best regards,
[Your Name]`,
  },
  {
    title: 'Out of Office',
    category: 'Work',
    body: `Thank you for your email. I am currently out of the office from [start date] to [end date] with limited access to email.

For urgent matters, please contact [colleague name] at [colleague email/phone].

I will respond to your email upon my return.

Kind regards,
[Your Name]`,
  },
  {
    title: 'Password Reset Request',
    category: 'General',
    body: `Dear [Service / IT Team],

I am unable to access my account ([username / email address]) and would like to request a password reset.

I have tried the self-service reset option but [describe any issues encountered].

Please could you assist me with resetting my password or unlocking my account?

Thank you,
[Your Name]
[Your Contact Details]`,
  },
  {
    title: 'IT Support Request',
    category: 'Work',
    body: `Hi IT Support,

I am experiencing an issue with [describe problem — e.g. my laptop, a software application, email, printer].

Details:
• Device/System: [e.g. Windows laptop, model]
• Issue: [brief description]
• When it started: [date/time]
• Steps already tried: [e.g. restarted, cleared cache]

Please could someone look into this at your earliest convenience?

Thank you,
[Your Name]
[Department / Location]`,
  },
  {
    title: 'Cancellation Request',
    category: 'Shopping',
    body: `Dear [Company Name],

I would like to cancel my subscription/order/account, effective immediately or at the end of my current billing period.

Account details:
• Name: [Your Name]
• Account/Order number: [number]
• Email on file: [email]

Please confirm the cancellation and any final charges in writing.

Thank you,
[Your Name]`,
  },
  {
    title: 'Leave a Review',
    category: 'General',
    body: `Hi [Business Name],

I recently [used your service / purchased a product] and wanted to share my experience.

[Describe your experience — what went well, what could be improved].

Overall, I would rate my experience [X/5] and would [recommend / suggest improvements].

Thank you for [the great service / taking feedback on board].

Best,
[Your Name]`,
  },
  {
    title: 'Thank You Email',
    category: 'General',
    body: `Dear [Recipient Name],

I just wanted to take a moment to say thank you for [reason — e.g. your help with…, the lovely gift, taking the time to meet with me].

[Add a personal note or specific detail about why you're grateful].

It really meant a lot, and I truly appreciate it.

Warm regards,
[Your Name]`,
  },
];

const categoryColors: Record<string, string> = {
  Work: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Shopping: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  General: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
};

export default function EmailTemplates() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <>
      <SEOHead
        title="Email Templates | TekSure"
        description="10 ready-to-use email templates for complaints, returns, job enquiries, meetings, IT support, and more."
        path="/tools/email-templates"
      />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2 border-b border-border pb-6">
          <Mail className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Email Templates</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Ready-to-use email templates — just copy, paste, and personalise the bits in [brackets].
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {templates.map((t, i) => (
            <Card key={t.title} className="rounded-2xl border border-border bg-card flex flex-col">
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{t.title}</CardTitle>
                  <Badge className={`shrink-0 text-xs font-normal ${categoryColors[t.category] || ''}`}>
                    {t.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4 flex-1 flex flex-col">
                <Textarea
                  readOnly
                  value={t.body}
                  className="min-h-[180px] text-sm font-mono resize-y bg-muted/50 flex-1"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => handleCopy(t.body, i)}
                >
                  {copiedIdx === i ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
