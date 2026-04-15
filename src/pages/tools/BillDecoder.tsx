import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Receipt, Search, ChevronDown, ChevronUp, HelpCircle, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';

type Provider = 'All' | 'Internet' | 'Phone' | 'TV' | 'Streaming' | 'Any';

interface LineItem {
  id: string;
  name: string;
  aliases: string[];
  provider: Provider[];
  plainEnglish: string;
  amount: string;
  isOptional: boolean;
  canNegotiate: boolean;
  tip?: string;
  keywords: string[];
}

const lineItems: LineItem[] = [
  {
    id: 'broadcast-tv-surcharge',
    name: 'Broadcast TV Surcharge',
    aliases: ['Broadcast TV Fee', 'Local Broadcast TV'],
    provider: ['TV'],
    plainEnglish: 'This is a fee your cable company added to help cover the cost of airing local TV channels (like ABC, NBC, CBS, and Fox). Despite the name, this is not a government-required fee — the cable company created it themselves and added it to your bill separately from the advertised price.',
    amount: 'Usually $15–$25/month',
    isOptional: false,
    canNegotiate: true,
    tip: 'You can sometimes get this reduced by calling and threatening to cancel. You can also cut the cord entirely — local channels are free over the air with a $20–$40 antenna.',
    keywords: ['broadcast tv', 'broadcast surcharge', 'local tv fee', 'broadcast television fee'],
  },
  {
    id: 'regional-sports-fee',
    name: 'Regional Sports Fee',
    aliases: ['RSN Fee', 'Regional Sports Network Fee', 'Sports Programming Fee'],
    provider: ['TV'],
    plainEnglish: 'A charge for local sports channels in your area (like NBC Sports regional channels or Bally Sports). This fee exists even if you never watch sports. Cable companies charge it to every subscriber regardless.',
    amount: 'Usually $8–$15/month',
    isOptional: false,
    canNegotiate: true,
    tip: 'If you don\'t watch live sports, this is one of the best arguments for canceling cable. Streaming services like Hulu Live TV or YouTube TV include these channels at a lower overall cost.',
    keywords: ['regional sports', 'rsn', 'sports fee', 'regional sports network'],
  },
  {
    id: 'hd-technology-fee',
    name: 'HD Technology Fee',
    aliases: ['HD Fee', 'High Definition Technology Fee'],
    provider: ['TV'],
    plainEnglish: 'A charge for receiving HD (high-definition) picture quality on your TV. This is controversial because HD is now the standard — charging extra for it is like a restaurant charging extra for clean plates. You almost certainly already pay for this.',
    amount: 'Usually $5–$10/month',
    isOptional: false,
    canNegotiate: true,
    tip: 'Call and ask to have this removed. Many customers successfully get it waived, especially if they\'ve been a customer for years.',
    keywords: ['hd technology fee', 'hd fee', 'high definition fee', 'hd service fee'],
  },
  {
    id: 'equipment-rental',
    name: 'Equipment Rental / Set-Top Box Fee',
    aliases: ['Cable Box Rental', 'DVR Fee', 'Receiver Fee', 'Gateway Rental', 'Modem Rental'],
    provider: ['TV', 'Internet'],
    plainEnglish: 'A monthly fee for renting the cable box, DVR, or internet modem/router from your provider. This is optional — you can buy your own compatible equipment instead and eliminate this charge permanently.',
    amount: 'Usually $10–$15/month per device',
    isOptional: true,
    canNegotiate: false,
    tip: 'Buying your own modem and router typically pays for itself in under a year. Search "compatible modem for [your provider]" on Amazon and look for ones listed as approved by your carrier. For cable boxes, check if your provider offers an app on your smart TV instead.',
    keywords: ['equipment rental', 'set top box', 'cable box rental', 'dvr fee', 'modem rental', 'receiver fee', 'gateway rental'],
  },
  {
    id: 'admin-fee',
    name: 'Administrative Fee',
    aliases: ['Admin Fee', 'Service Fee', 'Network Access Fee'],
    provider: ['Phone'],
    plainEnglish: 'A fee that phone companies charge for the cost of doing business — things like maintaining their network, customer service, and billing. This is not a government-required fee; the carrier invented it to keep advertised prices lower while increasing your actual bill.',
    amount: 'Usually $2–$4/month',
    isOptional: false,
    canNegotiate: false,
    tip: 'While you can\'t remove this fee, you can factor it in when comparing plans. A plan advertised at $40/month might actually cost $46/month after fees like this.',
    keywords: ['administrative fee', 'admin fee', 'network access fee', 'service fee'],
  },
  {
    id: 'activation-fee',
    name: 'Activation Fee',
    aliases: ['Setup Fee', 'New Line Fee', 'Service Activation Fee'],
    provider: ['Phone', 'Internet', 'TV'],
    plainEnglish: 'A one-time charge when you start new service or add a new line. This fee is almost entirely negotiable — providers regularly waive it to attract new customers.',
    amount: 'Usually $25–$35 one time',
    isOptional: true,
    canNegotiate: true,
    tip: 'Always ask to have this waived before you sign up. Say "Is there any way to waive the activation fee?" — agents have the authority to remove it and often will without much pushback.',
    keywords: ['activation fee', 'setup fee', 'new line fee', 'service activation'],
  },
  {
    id: 'paper-bill-fee',
    name: 'Paper Bill Fee',
    aliases: ['Mailed Bill Fee', 'Paper Statement Fee', 'Printed Bill Charge'],
    provider: ['Internet', 'Phone', 'TV'],
    plainEnglish: 'A charge for having your bill mailed to you on paper instead of receiving it electronically by email. Switching to paperless billing removes this fee instantly.',
    amount: 'Usually $1–$5/month',
    isOptional: true,
    canNegotiate: false,
    tip: 'Log in to your account online (or call customer service) and switch to paperless billing. You\'ll receive the same bill information by email and save this charge immediately.',
    keywords: ['paper bill', 'mailed bill', 'paper statement', 'printed bill fee'],
  },
  {
    id: 'early-termination-fee',
    name: 'Early Termination Fee (ETF)',
    aliases: ['ETF', 'Cancellation Fee', 'Contract Cancellation Fee'],
    provider: ['Phone', 'Internet', 'TV'],
    plainEnglish: 'A charge if you cancel your service before your contract period ends (usually 1 or 2 years). This fee is designed to keep you locked in. If you\'re paying off a financed phone, you\'ll also still owe the remaining phone balance.',
    amount: 'Usually $100–$350 or remaining phone balance',
    isOptional: false,
    canNegotiate: true,
    tip: 'If a competitor offers to pay your ETF when you switch, get that offer in writing. Many carriers (T-Mobile, Verizon, AT&T) run promotions to cover switching costs. Also check if you qualify for military, medical, or relocation exceptions that waive the ETF.',
    keywords: ['early termination', 'etf', 'cancellation fee', 'contract cancellation', 'termination fee'],
  },
  {
    id: 'universal-service-fund',
    name: 'Universal Service Fund (USF)',
    aliases: ['Federal Universal Service Fund', 'FUSF', 'Universal Service Charge'],
    provider: ['Phone'],
    plainEnglish: 'A federally regulated fee that phone carriers collect and pass on to the FCC. The money goes to programs that provide affordable phone and internet service to low-income households, schools, libraries, and rural areas. This is a real government-related fee (unlike many other surcharges).',
    amount: 'Usually 1–3% of your bill',
    isOptional: false,
    canNegotiate: false,
    tip: 'This fee is legitimate and non-negotiable. However, if you have low income, you may qualify for the Lifeline program (which subsidizes your phone bill) or the Affordable Connectivity Program (ACP).',
    keywords: ['universal service fund', 'usf', 'federal universal service', 'universal service charge'],
  },
  {
    id: 'e911-fee',
    name: 'E911 Fee',
    aliases: ['Emergency 911', '911 Fee', 'Emergency Services Fee'],
    provider: ['Phone'],
    plainEnglish: 'A small fee charged by your state or local government to fund 911 emergency services. This is a real, government-mandated fee that goes toward maintaining the 911 call centers that help people in emergencies.',
    amount: 'Usually $0.25–$1/month',
    isOptional: false,
    canNegotiate: false,
    tip: 'This is a legitimate government fee you cannot avoid. It goes directly toward emergency services in your community.',
    keywords: ['e911', '911 fee', 'emergency services fee', 'emergency 911'],
  },
  {
    id: 'data-overage',
    name: 'Data Overage Charge',
    aliases: ['Data Usage Fee', 'Overage Fee', 'Exceeded Data Limit'],
    provider: ['Phone', 'Internet'],
    plainEnglish: 'A charge for using more internet data than your plan allows in a billing month. On phones, data is what you use when you browse the internet, stream videos, or use apps without being on WiFi.',
    amount: 'Usually $10–$15 per extra GB',
    isOptional: true,
    canNegotiate: true,
    tip: 'To avoid this: connect to WiFi whenever possible, turn on "Data Saver" mode on your phone, and set a data warning in your phone\'s settings. If you frequently hit your limit, a plan with unlimited data may be cheaper than recurring overage charges.',
    keywords: ['data overage', 'overage charge', 'exceeded data', 'data usage fee', 'over limit'],
  },
  {
    id: 'late-payment-fee',
    name: 'Late Payment Fee',
    aliases: ['Late Fee', 'Past Due Fee', 'Returned Payment Fee'],
    provider: ['Internet', 'Phone', 'TV'],
    plainEnglish: 'A charge applied when your bill is not paid by the due date. This is avoidable by setting up autopay or setting a reminder a few days before your bill is due each month.',
    amount: 'Usually $5–$15',
    isOptional: true,
    canNegotiate: true,
    tip: 'If this is your first late fee, call and ask to have it waived as a "one-time courtesy." Most companies will do this once per year. Then set up autopay (you often get a discount of $5–$10/month for autopay too).',
    keywords: ['late payment', 'late fee', 'past due', 'returned payment'],
  },
  {
    id: 'streaming-service',
    name: 'Streaming Service Charge',
    aliases: ['Netflix', 'Hulu', 'Disney+', 'Max', 'Peacock', 'Prime Video', 'Paramount+', 'Apple TV+'],
    provider: ['Streaming'],
    plainEnglish: 'A monthly subscription for an on-demand video service. These are separate from your cable or internet bill. You pay them independently, and they can be canceled at any time — usually right on the company\'s website.',
    amount: '$7–$23/month depending on service and tier',
    isOptional: true,
    canNegotiate: false,
    tip: 'Audit your streaming subscriptions: look at your credit card or bank statement for the last 3 months and find every streaming charge. Cancel any you haven\'t used in the last month. Many people pay for 4–6 services and only actively use 2.',
    keywords: ['netflix', 'hulu', 'disney plus', 'max', 'hbo max', 'peacock', 'prime video', 'streaming', 'apple tv', 'paramount'],
  },
  {
    id: 'installation-fee',
    name: 'Professional Installation Fee',
    aliases: ['Technician Visit Fee', 'Install Fee', 'Service Call Fee'],
    provider: ['Internet', 'TV'],
    plainEnglish: 'A one-time charge for having a technician come to your home to set up your internet or cable service. Self-installation (doing it yourself with a kit they mail you) is almost always free and usually takes about 30 minutes.',
    amount: 'Usually $50–$100 one time',
    isOptional: true,
    canNegotiate: true,
    tip: 'Ask for a self-install kit. Most providers offer them free. The kits come with step-by-step picture instructions, and you can call customer service while you set it up if you get stuck.',
    keywords: ['installation fee', 'professional installation', 'technician visit', 'service call', 'install fee'],
  },
  {
    id: 'line-access-fee',
    name: 'Line Access Fee',
    aliases: ['Access Charge', 'Device Access Charge', 'Per Line Fee'],
    provider: ['Phone'],
    plainEnglish: 'A charge for each phone line (device) on your account. If you have a family plan with 4 lines, you pay this fee 4 times. It covers the basic cost of having a phone number and access to the carrier\'s network.',
    amount: 'Usually $10–$30/line/month',
    isOptional: false,
    canNegotiate: true,
    tip: 'Ask your carrier if there are discounts for adding multiple lines, or if autopay reduces the per-line cost. Carriers like Visible and Mint Mobile offer single-line unlimited plans for $25–$35/month total, much cheaper for single users.',
    keywords: ['line access fee', 'access charge', 'device access', 'per line fee', 'line fee'],
  },
];

const providerFilters: Provider[] = ['All', 'Internet', 'Phone', 'TV', 'Streaming'];

export default function BillDecoder() {
  const [search, setSearch] = useState('');
  const [activeProvider, setActiveProvider] = useState<Provider>('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return lineItems.filter(item => {
      const matchesSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.aliases.some(a => a.toLowerCase().includes(q)) ||
        item.keywords.some(k => k.includes(q)) ||
        item.plainEnglish.toLowerCase().includes(q);
      const matchesProvider = activeProvider === 'All' || item.provider.includes(activeProvider);
      return matchesSearch && matchesProvider;
    });
  }, [search, activeProvider]);

  return (
    <>
      <SEOHead
        title="Tech Bill Decoder — What Are These Charges? | TekSure"
        description="Confused by charges on your internet, phone, or cable bill? Look them up here and get a plain-English explanation of what each fee means — and whether you can get rid of it."
        path="/tools/bill-decoder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Bill Decoder' }]} />
        </div>

        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                <Receipt className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Bill Decoder
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Got a confusing charge on your internet, phone, cable, or streaming bill? Search for it here and get a plain-English explanation — plus whether you can get rid of it.
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
              <Input
                placeholder='Search for a charge, e.g. "broadcast TV surcharge" or "equipment rental"…'
                className="pl-11 h-12 rounded-2xl text-sm"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search for a bill charge"
              />
            </div>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* Provider filter pills */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by bill type">
            {providerFilters.map(prov => (
              <button
                key={prov}
                onClick={() => setActiveProvider(prov)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] border ${
                  activeProvider === prov
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-foreground/70 border-border hover:border-foreground/30'
                }`}
                aria-pressed={activeProvider === prov}
              >
                {prov === 'All' ? 'All Bills' : `${prov} Bill`}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
              Can negotiate or remove
            </span>
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
              Optional / avoidable
            </span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden="true" />
              Required / non-negotiable
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} charge{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">🧾</p>
              <p className="font-semibold text-lg mb-2">Charge not found</p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Try searching for just part of the charge name — for example "sports" instead of "Regional Sports Network Fee."
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map(item => {
                const isOpen = expanded === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-md"
                  >
                    {/* Header */}
                    <button
                      className="w-full text-left p-5 flex items-start gap-4"
                      onClick={() => setExpanded(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`charge-${item.id}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          {item.canNegotiate && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 px-2 py-0.5 rounded-full">
                              <CheckCircle className="h-3 w-3" aria-hidden="true" /> Can negotiate
                            </span>
                          )}
                          {item.isOptional && (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded-full">
                              <AlertTriangle className="h-3 w-3" aria-hidden="true" /> Optional
                            </span>
                          )}
                          {item.provider.map(p => (
                            <Badge key={p} variant="outline" className="text-xs">{p}</Badge>
                          ))}
                        </div>
                        <h2 className="font-semibold text-base leading-snug mb-1">{item.name}</h2>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-sm text-muted-foreground font-medium">{item.amount}</span>
                          {item.aliases.length > 0 && (
                            <span className="text-xs text-muted-foreground/60">
                              Also listed as: {item.aliases.slice(0, 2).join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen
                          ? <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                          : <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        }
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div id={`charge-${item.id}`} className="px-5 pb-6 border-t border-border pt-5 space-y-5">
                        <div>
                          <h3 className="font-semibold text-sm mb-2">What this charge is</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.plainEnglish}</p>
                        </div>

                        {item.tip && (
                          <div className="flex gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <div>
                              <p className="text-xs font-semibold text-primary mb-1">Quick Tip</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-4 text-sm flex-wrap">
                          <div className="flex items-center gap-1.5">
                            {item.isOptional
                              ? <><AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" /><span className="text-amber-700 dark:text-amber-400 font-medium">Optional — you can avoid it</span></>
                              : <><HelpCircle className="h-4 w-4 text-muted-foreground/50" aria-hidden="true" /><span className="text-muted-foreground">Required on this plan</span></>
                            }
                          </div>
                          <div className="flex items-center gap-1.5">
                            {item.canNegotiate
                              ? <><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" /><span className="text-green-700 dark:text-green-400 font-medium">Negotiable — worth asking</span></>
                              : <><HelpCircle className="h-4 w-4 text-muted-foreground/50" aria-hidden="true" /><span className="text-muted-foreground">Not negotiable</span></>
                            }
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom tip */}
          <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/50">
            <div className="flex gap-3 items-start">
              <Receipt className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm mb-1">Quick Tip: Call and ask</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most people never call to negotiate their bill — which is exactly what providers count on. A 10-minute call saying "I'm thinking about switching carriers" often results in $20–$40 off your monthly bill, waived fees, or a loyalty discount. The worst they can say is no.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">Helpful resource</p>
            <a
              href="https://www.consumerreports.org/telecom-services/how-to-lower-your-cable-bill/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Consumer Reports: How to Lower Your Cable Bill
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
