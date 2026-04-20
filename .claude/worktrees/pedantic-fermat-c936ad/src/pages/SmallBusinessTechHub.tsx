import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Mail,
  Phone,
  Globe,
  Calculator,
  CreditCard,
  FileText,
  Landmark,
  Megaphone,
  Users,
  ShoppingCart,
  Truck,
  HandHeart,
  Sparkles,
  Receipt,
  ShieldAlert,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

type Tool = {
  name: string;
  url?: string;
  description: string;
  price?: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof Briefcase;
  badge: string;
  intro: string;
  accent: string;
  tools: Tool[];
};

const sections: Section[] = [
  {
    id: 'essentials',
    title: 'The essentials every small business needs',
    icon: Briefcase,
    badge: 'START HERE',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'Before you worry about anything else, get these five basics right. They separate a real business from a hobby.',
    tools: [
      {
        name: 'Business email (not personal email)',
        description:
          'Google Workspace ($7/mo), Microsoft 365 ($6/mo), or Zoho Mail (free tier). Use a name@yourbusiness.com address — customers trust it far more than a gmail or yahoo account.',
      },
      {
        name: 'Business phone number',
        description:
          'Google Voice is free for personal use, Google Voice for Business is $10/mo. Grasshopper runs $29/mo with auto-attendant. Sideline is $10/mo and puts a second number on your existing phone.',
      },
      {
        name: 'A simple website',
        description:
          'Squarespace ($16/mo) and Wix ($17/mo) for most small businesses. Shopify ($29/mo) if you sell products online. Carrd is free and perfect for a one-page site with your hours and phone number.',
      },
      {
        name: 'Accounting software',
        description:
          'QuickBooks Online ($30/mo) is the industry standard. Wave is completely free for invoicing and basic accounting. FreshBooks ($19/mo) is friendly for service businesses. Xero ($15/mo) is popular for growing teams.',
      },
      {
        name: 'Payment processing',
        description:
          'Stripe for online (2.9% + 30 cents per charge). Square for in-person card swipes (2.6% + 10 cents). PayPal Business for customers who prefer PayPal. Most businesses end up using at least two.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal and registration tech',
    icon: FileText,
    badge: 'REGISTRATION',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    intro:
      'You can pay a service to file your paperwork, or you can do it yourself for the cost of the state fee. Here is what each option looks like.',
    tools: [
      {
        name: 'LLC formation services',
        description:
          'LegalZoom ($0 + state fee, upsells heavy), Incfile/Bizee ($0 + state fee, first year free registered agent), ZenBusiness ($0 + state fee). You can also go directly to your Secretary of State website and file for just the state fee — usually $50–$300.',
      },
      {
        name: 'Employer Identification Number (EIN)',
        description:
          'The EIN is 100% free from the IRS at irs.gov/ein. Any site charging you for one is a middleman. Takes about 10 minutes online. Required for business banking, payroll, and most licenses.',
      },
      {
        name: 'State business registration',
        description:
          'Every state has a business filing portal through its Secretary of State. Search "[your state] secretary of state business filing." Register your LLC, get your certificate, and file annual reports from there.',
      },
      {
        name: 'Licenses and permits',
        description:
          'Check sba.gov/business-guide/launch-your-business/apply-licenses-permits. Your city or county may also require a general business license — a $25 item that many people forget.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial tech',
    icon: Landmark,
    badge: 'MONEY',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    intro:
      'Mixing personal and business money is the single most common reason owners get into trouble at tax time. Keep them separate from day one.',
    tools: [
      {
        name: 'Business banking (separate from personal)',
        description:
          'Chase Business Complete ($15/mo, waived with balance or activity). Relay (free, up to 20 checking accounts, great for freelancers). Mercury (free, built for online businesses). Novo (free, small-business focused with invoicing built in).',
      },
      {
        name: 'Payroll',
        description:
          'Gusto ($40/mo + $6/employee) is the favorite for small teams. QuickBooks Payroll ($45/mo + $6/employee) integrates with QuickBooks. OnPay ($40/mo + $6/employee) runs a close third. All handle taxes and year-end forms automatically.',
      },
      {
        name: 'Invoicing',
        description:
          'FreshBooks, Wave (free), and QuickBooks all send professional invoices, accept online payment, and chase overdue invoices automatically. Even a free Wave account is a huge upgrade over a Word document.',
      },
      {
        name: 'Tax prep for businesses',
        description:
          'TurboTax Business ($170+) for self-filing an S-corp or partnership. Bench ($249–$499/mo) does bookkeeping + tax filing for you. A real local CPA usually runs $500–$2,000 per year and is worth every penny once you clear $75k in revenue.',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing and customer tools',
    icon: Megaphone,
    badge: 'GROWTH',
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    intro:
      'You do not need a marketing agency in year one. You need three or four free tools used consistently.',
    tools: [
      {
        name: 'Email marketing',
        description:
          'Mailchimp (free up to 500 contacts). ConvertKit/Kit (free up to 10,000 contacts, creator-friendly). MailerLite (free up to 1,000 contacts, cleanest editor). Email beats social media for actual sales — build a list from day one.',
      },
      {
        name: 'Social media scheduling',
        description:
          'Later (free tier, visual calendar). Buffer ($6/mo per channel). Hootsuite ($99/mo, for larger teams). Write a week of posts in one sitting instead of staring at your phone every day.',
      },
      {
        name: 'Google Business Profile',
        description:
          'Completely free and the single biggest thing a local business can do. Set up at google.com/business. Controls how you show up in Google Maps and local search. Post updates, respond to reviews, add photos.',
      },
      {
        name: 'Yelp for Business',
        description:
          'Free to claim your page at biz.yelp.com. Respond to reviews, update hours, upload photos. You do not need to pay for Yelp ads — those are expensive and rarely pay off.',
      },
      {
        name: 'Customer CRM',
        description:
          'HubSpot CRM (free forever for core features) is the most generous free plan on the market. Zoho CRM (free for 3 users) is simpler. A CRM keeps track of leads, conversations, and follow-ups so nothing falls through the cracks.',
      },
    ],
  },
  {
    id: 'productivity',
    title: 'Productivity tools',
    icon: Users,
    badge: 'RUN THE BUSINESS',
    accent: 'from-purple-50 to-purple-100/40 dark:from-purple-950/30 dark:to-purple-900/10',
    intro:
      'Pick one from each category and stick with it. Switching tools every quarter costs more time than any of them save.',
    tools: [
      {
        name: 'Project management',
        description:
          'Trello (free, sticky-notes-on-a-wall style). Asana (free up to 10 users, task lists). Notion (free personal, great wiki + tasks combo). ClickUp (free forever, most features — also the steepest learning curve).',
      },
      {
        name: 'Scheduling',
        description:
          'Calendly (free for one calendar) lets clients book time with you without email ping-pong. Acuity ($20/mo) handles paid appointments and intake forms, good for service businesses.',
      },
      {
        name: 'File sharing',
        description:
          'Google Drive (15GB free, built into Google Workspace). Dropbox (2GB free, $12/mo for 2TB). OneDrive (comes with Microsoft 365). Pick the one that matches your email provider.',
      },
      {
        name: 'Team communication',
        description:
          'Slack (free tier covers basics, $7.25/user/mo for history and integrations). Microsoft Teams (included with Microsoft 365). Use one — do not run your business on text messages.',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce specifics',
    icon: ShoppingCart,
    badge: 'SELLING PRODUCTS',
    accent: 'from-indigo-50 to-indigo-100/40 dark:from-indigo-950/30 dark:to-indigo-900/10',
    intro:
      'If you sell physical products, your choice of platform shapes everything else. Pick based on where your customers already are.',
    tools: [
      {
        name: 'Shopify vs Etsy vs Amazon',
        description:
          'Shopify ($29/mo) is your own storefront — you build the audience. Etsy (20¢ listing + 6.5% fee) brings you shoppers looking for handmade and vintage. Amazon (15% fee + $40/mo Pro plan) has the traffic but owns the customer relationship. Many sellers use all three.',
      },
      {
        name: 'Shipping',
        description:
          'ShipStation ($10–$160/mo) for order management across platforms. Pirate Ship (free) gives the cheapest USPS rates on the market — genuinely cheaper than the post office. Use Pirate Ship first, add ShipStation when volume grows.',
      },
      {
        name: 'Inventory',
        description:
          'Square inventory (free with Square POS) for in-person + online. Shopify inventory (built in). For multi-warehouse or wholesale, Cin7 or Zoho Inventory ($50–$100/mo).',
      },
    ],
  },
  {
    id: 'gov-help',
    title: 'Free government help',
    icon: HandHeart,
    badge: 'TAX-FUNDED',
    accent: 'from-teal-50 to-teal-100/40 dark:from-teal-950/30 dark:to-teal-900/10',
    intro:
      'Your tax dollars already pay for these. Most business owners never use them. That is free money and free expertise sitting on the table.',
    tools: [
      {
        name: 'SBA — Small Business Administration',
        url: 'https://www.sba.gov',
        description:
          'Free business plan templates, loan programs, disaster assistance, and contracting opportunities. The Lender Match tool connects you to pre-screened SBA-backed lenders.',
      },
      {
        name: 'SCORE mentoring',
        url: 'https://www.score.org',
        description:
          'Free one-on-one mentoring from retired executives. You can talk to someone who ran a business like yours for 30 years, at no cost, as many times as you want. The best-kept secret in American small business.',
      },
      {
        name: 'Small Business Development Centers',
        url: 'https://americassbdc.org',
        description:
          'Free consulting through your local SBDC (usually based at a university). Help with business plans, financial projections, marketing, and applying for capital.',
      },
      {
        name: 'State minority, women, and veteran business certification',
        description:
          'Every state offers free certification (MBE, WBE, VBE, DBE) that qualifies you for set-aside government contracts. Search "[your state] minority business certification."',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI tools for small business',
    icon: Sparkles,
    badge: 'NEW',
    accent: 'from-fuchsia-50 to-fuchsia-100/40 dark:from-fuchsia-950/30 dark:to-fuchsia-900/10',
    intro:
      'Used well, AI saves a few hours a week on writing and admin. Used carelessly, it ships typos and wrong facts to customers. A human reads everything before it goes out.',
    tools: [
      {
        name: 'ChatGPT, Claude, or Gemini',
        description:
          'For emails, product descriptions, first drafts of marketing copy, and reply templates. Free tiers are enough for most owners. Always read and edit before sending — AI makes up details.',
      },
      {
        name: 'Canva Magic Write and Magic Design',
        description:
          'Built into the free Canva plan. Drafts social captions and generates simple designs. Still needs a human eye, but cuts blank-page time in half.',
      },
      {
        name: 'DALL·E, Midjourney, or Ideogram for images',
        description:
          'Good for social graphics, background patterns, and illustrations. Do not use AI-generated images to misrepresent a real product — always disclose and keep real product photos of what you actually sell.',
      },
    ],
  },
  {
    id: 'taxes',
    title: 'Tax season prep',
    icon: Receipt,
    badge: 'DO NOT SKIP',
    accent: 'from-orange-50 to-orange-100/40 dark:from-orange-950/30 dark:to-orange-900/10',
    intro:
      'The business owners who hate tax season are the ones who keep no records all year. These tools fix that.',
    tools: [
      {
        name: 'Keep digital records year-round',
        description:
          'Snap receipts as you get them. Every accounting app (QuickBooks, Wave, FreshBooks) has a mobile app with receipt capture. A shoebox full of paper receipts in March is a $500 tax-prep bill waiting to happen.',
      },
      {
        name: 'Expense tracking apps',
        description:
          'Everlance ($5/mo) and MileIQ ($6/mo) auto-track mileage in the background. The standard mileage deduction is 67 cents per mile in 2026 — most drivers miss thousands in deductions without tracking.',
      },
      {
        name: 'Quarterly estimated taxes',
        description:
          'If you expect to owe more than $1,000 in federal tax, the IRS wants quarterly payments on April 15, June 15, September 15, and January 15. Pay online at irs.gov/payments. Skipping them triggers penalties even if you pay in full in April.',
      },
    ],
  },
  {
    id: 'scams',
    title: 'Common scams targeting small business',
    icon: ShieldAlert,
    badge: 'WATCH OUT',
    accent: 'from-red-50 to-red-100/40 dark:from-red-950/30 dark:to-red-900/10',
    intro:
      'The moment your LLC is filed, your contact info becomes public. Within weeks you will start getting scam mail and calls that look very official. None of these are real.',
    tools: [
      {
        name: 'Fake invoice scams',
        description:
          'Random invoices for toner, domain renewal, or "office supplies" you never ordered. They hope a busy bookkeeper pays without checking. Verify every invoice against an actual purchase order.',
      },
      {
        name: 'USPTO trademark scams',
        description:
          'Official-looking letters demanding hundreds of dollars to "renew" or "publish" your trademark. The real USPTO only emails, and all fees go to uspto.gov directly.',
      },
      {
        name: 'State filing scams',
        description:
          'Mail from companies named like "Corporate Compliance Center" asking $200–$400 to file your annual report. Your state does this for $10–$50 through its own portal. Throw these envelopes away.',
      },
      {
        name: '"Your business is delinquent" robocalls',
        description:
          'Robocalls threatening that your LLC will be suspended unless you "press 1." Real state agencies never call with threats. Hang up. When in doubt, log in to your Secretary of State portal directly.',
      },
    ],
  },
];

export default function SmallBusinessTechHub() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Small Business Tech Hub — Start & Run a Business Online | TekSure"
        description="The plain-English guide to the technology you need to start or run a small business: email, banking, accounting, marketing, ecommerce, AI, and the scams to avoid."
        path="/small-business-tech-hub"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Small Business Tech Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The Technology You Need to Start or Run a Small Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real tools, real prices, real alternatives. No upsells, no agency pitches — just the
            software, services, and free government help that every owner should know about.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-4 py-2 rounded-full border border-border hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <Card className={`overflow-hidden bg-gradient-to-br ${section.accent} border-2`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-background shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {section.badge}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {section.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="p-4 rounded-lg bg-background/80 backdrop-blur border border-border/60"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                {tool.url ? (
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold hover:underline inline-flex items-center gap-1"
                                  >
                                    {tool.name}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  <span className="font-semibold">{tool.name}</span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {tool.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        {/* Call to action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Want more step-by-step help?</h2>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                TekSure has guides on setting up business email, configuring a website, filing your
                EIN, and spotting scams — all written in plain English, with screenshots.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="/explore">
                    <Globe className="w-4 h-4 mr-2" />
                    Browse all guides
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
                >
                  <a href="/tools">
                    <Calculator className="w-4 h-4 mr-2" />
                    Free tools
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
