import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  FIRST_HOUR_PRICE,
  ADDITIONAL_HOUR_PRICE,
  DEPOSIT_AMOUNT,
  FREE_CANCELLATION_HOURS,
  formatPrice,
} from '@/data/pricing';

interface FAQItem {
  q: string;
  a: string;
  link?: { to: string; label: string };
}

/**
 * Every answer here must be true of the site as it is. Prices come from
 * src/data/pricing.ts — never type a price into this file.
 */
const SECTIONS: { title: string; items: FAQItem[] }[] = [
  {
    title: 'About TekSure',
    items: [
      {
        q: 'What is TekSure?',
        a: 'Free, step-by-step tech help in plain English for phones, computers, the internet and avoiding scams. It is written for seniors and beginners, and for the family members who help them.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes. Every guide and every tool is free, with no sign-up. You only pay if you choose to book a session with a real person.',
        link: { to: '/guides', label: 'Browse the guides' },
      },
      {
        q: 'Do I need an account?',
        a: 'No. You can read every guide and use every tool without one. An account lets you follow a help request you have booked.',
      },
    ],
  },
  {
    title: 'Reading the guides',
    items: [
      {
        q: 'Can I print a guide?',
        a: 'Yes. Every guide has a Print button near the top. The printed page leaves out the menus and buttons.',
      },
      {
        q: 'Can a guide be read aloud to me?',
        a: 'Yes. Press "Read aloud" near the top of any guide and your device reads it to you. Press it again to stop.',
      },
      {
        q: 'How do I make the text bigger?',
        a: 'Use the text size button at the top of the page. Your choice is remembered on this device. You can also make text bigger on your whole phone or computer.',
        link: { to: '/guides/hidden-accessibility-features-your-phone-already-has', label: 'Make text bigger on your phone' },
      },
      {
        q: 'Is there a dark mode?',
        a: 'Yes. Use the sun and moon button at the top of the page. Your choice is remembered between visits.',
      },
    ],
  },
  {
    title: 'Scams and safety',
    items: [
      {
        q: 'I think I have been scammed. What do I do?',
        a: 'Stop talking to the scammer and do not send more money. Then call your bank using the number on the back of your card. Our checklist walks you through the rest in order.',
        link: { to: '/emergency-help', label: 'What to do right now' },
      },
      {
        q: 'How do I report a scam?',
        a: 'Report it to the Federal Trade Commission at ReportFraud.ftc.gov. If you lost money, also call your bank and file a report with your local police.',
        link: { to: '/tools/scam-recovery-checklist', label: 'Scam recovery checklist' },
      },
      {
        q: 'How can I tell if a message is a scam?',
        a: 'Answer a few questions about the call, text or email and our tool tells you how worried to be and what to do next.',
        link: { to: '/tools/is-this-a-scam', label: 'Is This a Scam?' },
      },
      {
        q: 'Do you sell my data?',
        a: 'No. Our Privacy page explains what we collect and why, in plain English.',
        link: { to: '/privacy', label: 'Read the privacy policy' },
      },
    ],
  },
  {
    title: 'Getting help from a person',
    items: [
      {
        q: 'How do I book a session?',
        a: 'Open the Get Help page, choose the kind of problem, pick a time, and describe what is going on in your own words.',
        link: { to: '/get-help', label: 'Get help from a person' },
      },
      {
        q: 'How much does it cost?',
        a: `${formatPrice(FIRST_HOUR_PRICE)} for the first hour and ${formatPrice(ADDITIONAL_HOUR_PRICE)} for each extra hour. A ${formatPrice(DEPOSIT_AMOUNT)} deposit holds your time. You see the price before you book.`,
        link: { to: '/pricing', label: 'See pricing' },
      },
      {
        q: 'What if you cannot fix it?',
        a: `If we cannot solve the problem you booked us for, you pay nothing. You can cancel up to ${FREE_CANCELLATION_HOURS} hours before your session and get your deposit back.`,
        link: { to: '/refund-policy', label: 'Read the refund policy' },
      },
      {
        q: 'Can a family member join?',
        a: 'Yes. Mention it when you book and we will make sure they can join the call.',
      },
    ],
  },
  {
    title: 'Trouble with this website',
    items: [
      {
        q: 'A page will not load. What do I do?',
        a: 'Refresh the page (Ctrl+R on Windows, Cmd+R on Mac) and check your internet connection. Still stuck? Email hello@teksure.com.',
      },
      {
        q: 'Which browsers does TekSure work on?',
        a: 'Any up-to-date version of Chrome, Safari, Edge or Firefox, on a phone, tablet or computer.',
      },
    ],
  },
];

export default function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SECTIONS.flatMap((s) =>
      s.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
    ),
  };

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | TekSure"
        description="Answers about TekSure: what is free, how to print or listen to a guide, what to do about a scam, and how booking a real person works."
        path="/faq"
        jsonLd={[jsonLd]}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-10 outline-none">
        <h1 className="text-4xl font-bold">Frequently asked questions</h1>
        {SECTIONS.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-2xl font-bold border-b-2 border-border pb-2">{section.title}</h2>
            <dl className="mt-4 space-y-6">
              {section.items.map((item) => (
                <div key={item.q}>
                  <dt className="text-xl font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-lg">
                    {item.a}
                    {item.link && (
                      <>
                        {' '}
                        <Link to={item.link.to} className="text-primary underline underline-offset-4">
                          {item.link.label}
                        </Link>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
