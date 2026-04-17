import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Heart,
  HandHeart,
  Users,
  PhoneCall,
  ExternalLink,
  Stethoscope,
  FileText,
  LifeBuoy,
  Star,
} from 'lucide-react';

type Resource = {
  name: string;
  url: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof Shield;
  badge: string;
  intro: string;
  accent: string;
  resources: Resource[];
};

const sections: Section[] = [
  {
    id: 'va-online',
    title: 'VA online services',
    icon: Stethoscope,
    badge: 'VA.GOV',
    accent: 'from-blue-50 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/10',
    intro:
      'Almost everything you used to wait in line for is now online. Bookmark these and never make a phone-tree call again.',
    resources: [
      {
        name: 'My HealtheVet',
        url: 'https://www.myhealth.va.gov',
        description:
          'Refill prescriptions, message your VA care team, view lab results, and download your full medical history. The single most useful tool for any vet using VA health care.',
      },
      {
        name: 'VA.gov',
        url: 'https://www.va.gov',
        description:
          'Apply for compensation, pension, education, home loan, and burial benefits — all in one place. Replaces the old eBenefits site.',
      },
      {
        name: 'VA Telehealth',
        url: 'https://www.va.gov/health-care/about-va-health-benefits/va-telehealth-services/',
        description:
          'See your VA doctor by video from home. Helpful for follow-ups, mental health appointments, and anything that does not need an in-person exam.',
      },
      {
        name: 'VA Claim Status',
        url: 'https://www.va.gov/claim-or-appeal-status/',
        description:
          'Check the live status of any open compensation, pension, or appeal claim. Shows what evidence is missing and what stage you are in.',
      },
      {
        name: 'Blue Button Report',
        url: 'https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/download-my-data',
        description:
          'Download a single PDF with your full VA health record — meds, labs, allergies, problem list. Take it to any non-VA provider so they have the full picture.',
      },
    ],
  },
  {
    id: 'benefits',
    title: 'Benefits management',
    icon: FileText,
    badge: 'BENEFITS',
    accent: 'from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10',
    intro:
      'Manage compensation, debt, education, and home-loan benefits without setting foot in a regional office.',
    resources: [
      {
        name: 'eBenefits to VA.gov',
        url: 'https://www.va.gov/change-from-ebenefits-to-va-gov/',
        description:
          'eBenefits is being retired. VA.gov now handles disability ratings, dependents, direct deposit, and document downloads. The migration page walks through what moved where.',
      },
      {
        name: 'VA Debt Management',
        url: 'https://www.va.gov/manage-va-debt/',
        description:
          'Pay a VA copay, set up a repayment plan, or request a waiver online. Lets you avoid collections and check what you actually owe versus what you do not.',
      },
      {
        name: 'GI Bill enrollment status',
        url: 'https://www.va.gov/education/check-enrollment-status/',
        description:
          'See which months of GI Bill benefits you have left, what your current school is reporting, and the date your next housing payment is due.',
      },
      {
        name: 'VA Home Loan',
        url: 'https://www.va.gov/housing-assistance/home-loans/',
        description:
          'Request your Certificate of Eligibility online (used to take weeks by mail). Compare lenders, calculate your funding fee, and apply for cash-out refinance — all from VA.gov.',
      },
    ],
  },
  {
    id: 'free-tech',
    title: 'Free tech for vets',
    icon: HandHeart,
    badge: 'FREE TECH',
    accent: 'from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10',
    intro:
      'Veterans-only programs that hand out laptops, tablets, internet credits, and tech training at no cost.',
    resources: [
      {
        name: 'Operation We Are Here',
        url: 'https://www.opwah.org',
        description:
          'Maintains the most complete index of free tech and connectivity programs for service members, vets, and military families. A great starting point for anything you need.',
      },
      {
        name: 'Disabled American Veterans (DAV)',
        url: 'https://www.dav.org',
        description:
          'DAV chapters across the country offer help filing benefits claims online, free transportation to VA appointments, and tech navigation for older vets.',
      },
      {
        name: 'VFW',
        url: 'https://www.vfw.org',
        description:
          'Local VFW posts often have computers vets can use, plus volunteer tech help for resume work, telehealth setup, and applying for benefits.',
      },
      {
        name: 'Soldier On',
        url: 'https://www.wesoldieron.org',
        description:
          'Housing-first non-profit with case managers who help vets get connected — from setting up a smartphone to using housing apps and Medicaid portals.',
      },
      {
        name: 'Connected Warriors',
        url: 'https://connectedwarriors.org',
        description:
          'Free yoga and wellness classes, many delivered virtually. A simple tech-enabled way for vets and families to find community and ease PTSD symptoms.',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family resources',
    icon: Users,
    badge: 'FAMILY',
    accent: 'from-violet-50 to-violet-100/40 dark:from-violet-950/30 dark:to-violet-900/10',
    intro:
      'Support designed specifically for spouses, children, and surviving family members of those who served.',
    resources: [
      {
        name: 'TAPS — Tragedy Assistance Program for Survivors',
        url: 'https://www.taps.org',
        description:
          'For families grieving a military loss. Free 24/7 helpline, peer-to-peer connection, online support groups, and youth programs — all designed by survivors, for survivors.',
      },
      {
        name: 'Military OneSource',
        url: 'https://www.militaryonesource.mil',
        description:
          'Free, 24/7, confidential — non-medical counseling, financial coaching, tax filing software, and moving assistance for service members and families.',
      },
      {
        name: 'Blue Star Families',
        url: 'https://bluestarfam.org',
        description:
          'Community for active-duty, Guard, Reserve, and veteran families. Hosts events, free museum admissions, and the largest annual Military Family Lifestyle Survey.',
      },
    ],
  },
  {
    id: 'caregivers',
    title: 'Caregivers',
    icon: Heart,
    badge: 'CAREGIVERS',
    accent: 'from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10',
    intro:
      'If you are caring for a vet at home, the VA has a dedicated program with stipends, training, and respite care.',
    resources: [
      {
        name: 'VA Caregiver Support Program',
        url: 'https://www.caregiver.va.gov',
        description:
          'Includes the Program of Comprehensive Assistance for Family Caregivers (PCAFC) — monthly stipend, health insurance, mental health counseling, and respite care for eligible caregivers.',
      },
      {
        name: 'VA Caregiver Support Line',
        url: 'tel:1-855-260-3274',
        description:
          'Call 1-855-260-3274 Monday–Friday, 8 AM–10 PM ET. Talk to a licensed social worker who can connect you with local support and walk you through PCAFC eligibility.',
      },
    ],
  },
];

export default function VeteransTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Veterans Tech Hub — Free Tech Resources for Vets & Families | TekSure"
        description="Free tech resources, VA online services, benefits help, and family support for veterans, service members, and their loved ones — all in one place."
        path="/veterans-tech-hub"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Star className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Free Tech Resources for Those Who Served
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              VA online services, benefits help, free tech programs, and family support — all in plain language.
            </p>
          </div>
        </section>

        {/* Crisis line callout — top of page so it can never be missed */}
        <section className="container max-w-4xl py-8">
          <Card className="rounded-2xl border-2 border-rose-400 bg-rose-50/80 dark:bg-rose-950/30 dark:border-rose-800">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-rose-100 dark:bg-rose-900/50 w-12 h-12 flex items-center justify-center shrink-0">
                  <LifeBuoy className="h-6 w-6 text-rose-700 dark:text-rose-300" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 bg-background/60 border-rose-300 text-rose-700 dark:text-rose-300">
                    24/7 — FREE & CONFIDENTIAL
                  </Badge>
                  <h2 className="text-xl font-bold text-foreground mb-2">Veterans Crisis Line</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    If you or a vet you love is in crisis, reach out right now. Help is available 24 hours a day, 7 days a week — no VA enrollment needed.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <Button asChild variant="default" className="rounded-xl gap-2 bg-rose-600 hover:bg-rose-700">
                      <a href="tel:988">
                        <PhoneCall className="h-4 w-4" />
                        Call 988, press 1
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl gap-2 border-rose-300 dark:border-rose-800">
                      <a href="sms:838255">
                        Text 838255
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl gap-2 border-rose-300 dark:border-rose-800">
                      <a href="https://www.veteranscrisisline.net" target="_blank" rel="noopener noreferrer">
                        Online chat
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sections */}
        <section className="container max-w-6xl py-10 space-y-14">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <div
                className={`rounded-2xl bg-gradient-to-br ${section.accent} border border-border p-6 md:p-8 mb-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-background/70 w-12 h-12 flex items-center justify-center shrink-0">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs bg-background/60">
                      {section.badge}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground">{section.intro}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {section.resources.map((r) => (
                  <Card
                    key={r.name}
                    className="rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {r.description}
                      </p>
                      <Button asChild variant="outline" size="sm" className="rounded-xl gap-2 self-start">
                        <a href={r.url} target="_blank" rel="noopener noreferrer">
                          {r.url.startsWith('tel:') ? 'Call now' : 'Visit'}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer thank-you */}
        <section className="container max-w-3xl py-12">
          <Card className="rounded-2xl border border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Thank you for your service</h3>
              <p className="text-sm text-muted-foreground">
                If something on this page is out of date or missing, let us know — we update it as soon as we hear.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
