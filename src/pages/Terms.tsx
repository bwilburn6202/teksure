import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  FileText,
  Handshake,
  Wrench,
  AlertTriangle,
  BookOpen,
  Scale,
  UserCheck,
  Mail,
} from 'lucide-react';
import {
  FIRST_HOUR_PRICE,
  ADDITIONAL_HOUR_PRICE,
  DEPOSIT_AMOUNT,
  formatPrice,
} from '@/data/pricing';

/**
 * Terms of Service. Stripe requires a business processing live payments to
 * publish terms covering what the service is, what it costs, and what the
 * customer's and business's obligations are.
 *
 * Written in the same plain-English voice as the rest of the site — a terms
 * page nobody can read is not much better than no terms page, especially for
 * an audience of seniors and non-technical users.
 *
 * NOTE FOR BAILEY: the "Governing law" section needs your registered business
 * entity name and home state before this is fully airtight. It is written to
 * be honest and usable as-is, but have a lawyer review it if TekSure grows.
 */
const Terms = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="Terms of Service — TekSure"
      description="The agreement between you and TekSure, written in plain English: what we provide, what it costs, what we promise, and what we ask of you."
      path="/terms"
    />
    <Navbar />

    <main id="main-content" className="flex-1">
      <div className="container max-w-3xl py-8 px-4 space-y-8">
        <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            This is the agreement between you and TekSure. We've written it in plain English instead
            of legal jargon, because terms you can't read aren't much use to anyone.
          </p>
          <p className="text-sm text-muted-foreground">Last updated: July 26, 2026</p>
        </div>

        {/* Agreement */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Handshake className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Agreeing to these terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              By using teksure.com — reading our guides, using our tools, or booking a technician —
              you're agreeing to these terms. If you don't agree with something here, please don't
              use the service.
            </p>
            <p>
              You need to be 18 or older to book a paid session. Anyone of any age is welcome to
              read the free guides.
            </p>
          </CardContent>
        </Card>

        {/* What we provide */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Wrench className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">What TekSure provides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>We offer two different things:</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-foreground">Free educational content</strong> — guides,
                tools, checklists, and articles. Free to everyone, no account required.
              </li>
              <li>
                <strong className="text-foreground">Paid tech support sessions</strong> — a real
                technician helps you remotely or in your home, at{' '}
                {formatPrice(FIRST_HOUR_PRICE)} for the first hour and{' '}
                {formatPrice(ADDITIONAL_HOUR_PRICE)} for each additional hour.
              </li>
            </ul>
            <p className="text-sm">
              We're an independent tech support company. We are not affiliated with, endorsed by, or
              acting on behalf of Apple, Microsoft, Google, Amazon, or any device manufacturer,
              internet provider, or government agency. When our guides mention those companies, it's
              to help you use their products — nothing more.
            </p>
          </CardContent>
        </Card>

        {/* Payment */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <FileText className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Booking and payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              You can book with no money up front and pay on the day, or hold your slot with a{' '}
              {formatPrice(DEPOSIT_AMOUNT)} deposit. Deposits are processed by Stripe; we never see
              or store your full card number.
            </p>
            <p>
              We show you the price before you book. We will not add charges you haven't agreed to,
              and a technician will never start a second billable hour without asking you first.
            </p>
            <p>
              Cancellations, refunds, and our no-fix-no-charge guarantee are covered in the{' '}
              <Link to="/refund-policy" className="text-primary hover:underline">
                Refund &amp; Cancellation Policy
              </Link>
              , which is part of these terms.
            </p>
          </CardContent>
        </Card>

        {/* Your side */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <UserCheck className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">What we ask of you</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Only ask us to work on devices and accounts you own or have permission to access.
              </li>
              <li>
                Back up anything irreplaceable before a session if you can. We're careful, but no
                repair is risk-free. We're happy to help you back things up first — just ask.
              </li>
              <li>
                Be present (or have an adult present) for in-home visits, and let us know about
                anything at the property a technician should be aware of.
              </li>
              <li>
                Treat our technicians decently. We reserve the right to end a session and refuse
                further service in cases of abuse, harassment, or an unsafe environment.
              </li>
              <li>
                Don't scrape, republish, or resell our guides wholesale. Linking to them, printing
                them, and sharing them with family is welcome and encouraged.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Guides disclaimer */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">About our free guides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              We work hard to keep our guides accurate and current, and we cite official sources
              wherever we can. But technology changes constantly — menus move, apps update, and
              prices shift. We can't guarantee every step is current for every device.
            </p>
            <p>
              Our guides are general information, not professional advice. Guides touching on
              financial, medical, or legal topics are there to help you use the technology involved
              — they are not a substitute for a doctor, lawyer, or financial advisor.
            </p>
            <p className="text-sm">
              Found something wrong or out of date?{' '}
              <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
                Tell us
              </a>{' '}
              and we'll fix it. We genuinely want to know.
            </p>
          </CardContent>
        </Card>

        {/* Liability */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Limits on our responsibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              We stand behind our work. If we damage your device through our own negligence during a
              session, tell us and we will make it right.
            </p>
            <p>
              What we can't take responsibility for: pre-existing faults that surface during a
              session, data loss on a device that had no working backup, problems caused by hardware
              already failing when we arrived, or issues arising from actions you take after our
              session ends based on your own decisions.
            </p>
            <p>
              To the extent the law allows, our total liability for any claim is limited to the
              amount you paid us for the session in question. We aren't liable for indirect losses
              such as lost income or lost opportunity.
            </p>
            <p className="text-sm">
              Some states don't allow certain limitations of liability, so parts of this section may
              not apply to you. Nothing here removes rights you have under your state's consumer
              protection laws.
            </p>
          </CardContent>
        </Card>

        {/* Changes & law */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Scale className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Changes and governing law</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              We may update these terms as the business changes. When we do, we'll change the "last
              updated" date at the top. Material changes to pricing or refunds will be announced on
              the site rather than slipped in quietly.
            </p>
            <p>
              TekSure operates in the United States and these terms are governed by United States
              law and the laws of the state in which TekSure is registered. We'd always rather sort
              out a disagreement by talking to you directly first — most things can be settled with
              a phone call.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Questions about these terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Email{' '}
              <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
                hello@teksure.com
              </a>{' '}
              or call{' '}
              <a href="tel:8779083360" className="text-primary hover:underline">
                877-908-3360
              </a>
              . If any part of this page is unclear, ask us — a confusing terms page is our problem
              to fix, not yours to decipher.
            </p>
            <p className="text-sm">
              See also our{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/refund-policy" className="text-primary hover:underline">
                Refund &amp; Cancellation Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </main>

    <Footer />
  </div>
);

export default Terms;
