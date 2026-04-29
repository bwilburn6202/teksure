import { useState, useMemo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  HelpCircle,
  Info,
  MousePointerClick,
  Brain as BrainIcon,
  Shield,
  Users,
  HeartHandshake,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

/**
 * Each FAQ has:
 *  - q: the question
 *  - a: a React node (so we can embed <Link> to related guides)
 *  - plain: a plain-text version used for the schema.org JSON-LD payload
 */
interface FAQItem {
  q: string;
  a: ReactNode;
  plain: string;
}

interface FAQCategory {
  id: string;
  title: string;
  blurb: string;
  icon: typeof HelpCircle;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: 'about',
    title: 'About TekSure',
    blurb: 'Who we are and why we built this.',
    icon: Info,
    items: [
      {
        q: 'What is TekSure?',
        plain:
          'TekSure is a friendly tech-help website that turns scary technology into simple, step-by-step answers. We publish free guides, clear explainers, and safety tools for everyday people — with no jargon, ever.',
        a: (
          <>
            TekSure is a friendly tech-help website that turns scary
            technology into simple, step-by-step answers. We publish{' '}
            <Link to="/guides" className="text-primary hover:underline">free guides</Link>,
            clear explainers, and safety tools for everyday people &mdash; with
            no jargon, ever. If you&rsquo;ve ever felt stuck with a phone,
            computer, Wi-Fi, or a suspicious email, TekSure is built for you.
          </>
        ),
      },
      {
        q: 'Who is it for?',
        plain:
          'TekSure is for anyone who wants tech to feel less scary — seniors, caregivers, busy parents, non-native English speakers, first-time device owners, and anyone who prefers plain language over jargon.',
        a: (
          <>
            TekSure is for anyone who wants tech to feel less scary &mdash;
            seniors, caregivers, busy parents, non-native English speakers,
            first-time device owners, and anyone who prefers plain language
            over jargon. We have special hubs for{' '}
            <Link to="/senior-tech-path" className="text-primary hover:underline">seniors</Link>,{' '}
            <Link to="/caregiver-hub" className="text-primary hover:underline">caregivers</Link>,
            and{' '}
            <Link to="/kids-online-safety" className="text-primary hover:underline">families</Link>.
          </>
        ),
      },
      {
        q: 'Who built this?',
        plain:
          'TekSure was built by a small American team who got tired of watching family members struggle with tech that was supposed to make life easier. Read our full story on the About page.',
        a: (
          <>
            TekSure was built by a small American team who got tired of
            watching family members struggle with tech that was supposed to
            make life easier. Read our full story on the{' '}
            <Link to="/about" className="text-primary hover:underline">About page</Link>.
          </>
        ),
      },
      {
        q: 'Is TekSure really free?',
        plain:
          'Yes. All of our guides, tools, scam alerts, and the TekBrain AI assistant are free to use. You only pay if you choose to book a one-on-one session with a real technician — and even that is transparently priced up front.',
        a: (
          <>
            Yes. All of our{' '}
            <Link to="/guides" className="text-primary hover:underline">guides</Link>,{' '}
            <Link to="/tools" className="text-primary hover:underline">tools</Link>,{' '}
            <Link to="/safety/scam-alerts" className="text-primary hover:underline">scam alerts</Link>,
            and the TekBrain AI assistant are free to use. You only pay if you
            choose to book a one-on-one session with a real technician &mdash;
            and even that is transparently priced up front.
          </>
        ),
      },
      {
        q: 'How do you make money if it is free?',
        plain:
          'We earn revenue from optional paid technician sessions, a small number of tastefully-placed affiliate links in gift guides, and donations. We never sell your data, and we never run ads that track you.',
        a: (
          <>
            We earn revenue from optional paid technician sessions (you can{' '}
            <Link to="/get-help" className="text-primary hover:underline">book one here</Link>),
            a small number of tastefully-placed affiliate links in gift guides,
            and donations. We never sell your data, and we never run ads that
            track you around the internet.
          </>
        ),
      },
      {
        q: 'Can I trust TekSure with my information?',
        plain:
          'Yes. We only collect the minimum we need to run the site. We do not sell data, we do not share it with advertisers, and we explain exactly what we collect in plain English on our Privacy page.',
        a: (
          <>
            Yes. We only collect the minimum we need to run the site. We do
            not sell data, we do not share it with advertisers, and we explain
            exactly what we collect in plain English on our{' '}
            <Link to="/privacy" className="text-primary hover:underline">Privacy page</Link>.
          </>
        ),
      },
    ],
  },
  {
    id: 'using-the-site',
    title: 'Using the Site',
    blurb: 'Getting around TekSure — the basics.',
    icon: MousePointerClick,
    items: [
      {
        q: 'Do I need an account?',
        plain:
          'No. You can read every guide, use every tool, and ask TekBrain questions without signing up. An account only unlocks extras like saved guides, progress tracking, and booking real-human help.',
        a: (
          <>
            No. You can read every guide, use every tool, and ask TekBrain
            questions without signing up. An account only unlocks extras like{' '}
            <Link to="/favorites" className="text-primary hover:underline">saved guides</Link>,
            progress tracking, and booking real-human help. You can{' '}
            <Link to="/signup" className="text-primary hover:underline">create a free account</Link>{' '}
            in under a minute.
          </>
        ),
      },
      {
        q: 'How do I save a guide for later?',
        plain:
          'Open any guide and tap the heart icon at the top. Saved guides live on your Favorites page, where you can search through them, sort them, and pick up right where you left off.',
        a: (
          <>
            Open any guide and tap the heart icon at the top. Saved guides live
            on your{' '}
            <Link to="/favorites" className="text-primary hover:underline">Favorites page</Link>,
            where you can search through them, sort them, and pick up right
            where you left off. You do need a free account to save guides
            across devices.
          </>
        ),
      },
      {
        q: 'Can I print guides?',
        plain:
          'Yes. Every guide has a print button near the top. We strip out menus, buttons, and ads so the paper version is clean and clutter-free — great for sticking on the fridge or next to the computer.',
        a: (
          <>
            Yes. Every guide has a print button near the top. We strip out
            menus, buttons, and ads so the paper version is clean and
            clutter-free &mdash; great for sticking on the fridge or next to the
            computer. Our{' '}
            <Link to="/quick-reference-cards" className="text-primary hover:underline">Quick Reference Cards</Link>{' '}
            are designed to be printed and kept handy.
          </>
        ),
      },
      {
        q: 'Can I read guides aloud?',
        plain:
          'Yes. Every guide works with your device’s built-in read-aloud feature — like Narrator on Windows, VoiceOver on Mac and iPhone, or Select-to-Speak on Android. Open our Accessibility Hub for step-by-step setup.',
        a: (
          <>
            Yes. Every guide works with your device&rsquo;s built-in read-aloud
            feature &mdash; like Narrator on Windows, VoiceOver on Mac and
            iPhone, or Select-to-Speak on Android. Open our{' '}
            <Link to="/accessibility" className="text-primary hover:underline">Accessibility Hub</Link>{' '}
            for step-by-step setup instructions.
          </>
        ),
      },
      {
        q: 'How do I make the text bigger?',
        plain:
          'Look for the "A" button at the top of any page — it cycles through normal, large, and extra-large text sizes. Your choice is remembered on your device, so you only have to set it once.',
        a: (
          <>
            Look for the &ldquo;A&rdquo; button at the top of any page
            &mdash; it cycles through normal, large, and extra-large text
            sizes. Your choice is remembered on your device, so you only have
            to set it once. Need more? The{' '}
            <Link to="/accessibility" className="text-primary hover:underline">Accessibility Hub</Link>{' '}
            shows how to enlarge text system-wide on any device.
          </>
        ),
      },
      {
        q: 'I have trouble with bright screens — is there a dark mode?',
        plain:
          'Yes. Look for the sun/moon toggle in the top navigation bar. Dark mode uses warmer colors that are easier on tired eyes, especially at night. Your choice is remembered between visits.',
        a: (
          <>
            Yes. Look for the sun/moon toggle in the top navigation bar. Dark
            mode uses warmer colors that are easier on tired eyes, especially
            at night. Your choice is remembered between visits. We also offer a
            high-contrast mode and larger touch targets &mdash; see the{' '}
            <Link to="/accessibility" className="text-primary hover:underline">Accessibility Hub</Link>{' '}
            for all the options.
          </>
        ),
      },
      {
        q: 'Do guides work on my phone?',
        plain:
          'Yes. TekSure is built mobile-first, so every guide, tool, and page works on phones and tablets as well as on a computer. Large tap targets, big text, and swipe-friendly navigation throughout.',
        a: (
          <>
            Yes. TekSure is built mobile-first, so every guide, tool, and page
            works on phones and tablets as well as on a computer. Large tap
            targets, big text, and swipe-friendly navigation throughout.
          </>
        ),
      },
    ],
  },
  {
    id: 'tekbrain',
    title: 'TekBrain AI',
    blurb: 'Our friendly AI helper — what it is and how to use it.',
    icon: BrainIcon,
    items: [
      {
        q: 'What is TekBrain?',
        plain:
          'TekBrain is our free AI helper trained on plain-English tech answers. Ask it a question in normal language — “why is my printer offline?” — and it walks you through a fix step by step.',
        a: (
          <>
            TekBrain is our free AI helper trained on plain-English tech
            answers. Ask it a question in normal language &mdash; &ldquo;why
            is my printer offline?&rdquo; &mdash; and it walks you through a
            fix step by step.{' '}
            <Link to="/tekbrain" className="text-primary hover:underline">Try TekBrain here</Link>.
          </>
        ),
      },
      {
        q: 'Is TekBrain safe? Will it share my questions?',
        plain:
          'Your questions are never sold, shared with advertisers, or tied to your identity. We briefly store conversations to improve the service and detect abuse, and we explain exactly what happens in our Privacy page.',
        a: (
          <>
            Your questions are never sold, shared with advertisers, or tied to
            your identity. We briefly store conversations to improve the
            service and detect abuse, and we explain exactly what happens in
            our{' '}
            <Link to="/privacy" className="text-primary hover:underline">Privacy page</Link>.
            Don&rsquo;t paste passwords, credit card numbers, or Social
            Security numbers into any chatbot &mdash; including ours.
          </>
        ),
      },
      {
        q: 'Can I trust what TekBrain says?',
        plain:
          'TekBrain is accurate for the vast majority of common tech questions, but like any AI it can occasionally be wrong or out of date. For safety-critical things — like scams or banking — double-check with an official source, or ask a real technician.',
        a: (
          <>
            TekBrain is accurate for the vast majority of common tech
            questions, but like any AI it can occasionally be wrong or out of
            date. For safety-critical things &mdash; like scams or banking
            &mdash; double-check with an official source, or{' '}
            <Link to="/get-help" className="text-primary hover:underline">book a real technician</Link>.
          </>
        ),
      },
      {
        q: 'Why can’t TekBrain answer every question?',
        plain:
          'TekBrain sticks to consumer tech topics. It will gently steer away from medical, legal, or financial advice, and it does not have access to your personal accounts. For those, talk to a qualified human.',
        a: (
          <>
            TekBrain sticks to consumer tech topics. It will gently steer away
            from medical, legal, or financial advice, and it does not have
            access to your personal accounts. For those, talk to a qualified
            human &mdash; or, for tech issues, our{' '}
            <Link to="/get-help" className="text-primary hover:underline">real-human technicians</Link>.
          </>
        ),
      },
      {
        q: 'Can I talk to TekBrain with my voice?',
        plain:
          'Yes. On most phones and computers you can tap the microphone icon on your keyboard to dictate instead of typing. TekBrain reads everything aloud too — turn on your device’s read-aloud feature.',
        a: (
          <>
            Yes. On most phones and computers you can tap the microphone icon
            on your keyboard to dictate instead of typing. TekBrain reads
            everything aloud too &mdash; turn on your device&rsquo;s
            read-aloud feature (see our{' '}
            <Link to="/accessibility" className="text-primary hover:underline">Accessibility Hub</Link>).
          </>
        ),
      },
      {
        q: 'What if TekBrain gets something wrong?',
        plain:
          'Every answer has a thumbs-up / thumbs-down button. Tap thumbs-down and tell us what went wrong — a real person reads every piece of feedback, and it helps us make the tool smarter.',
        a: (
          <>
            Every answer has a thumbs-up / thumbs-down button. Tap thumbs-down
            and tell us what went wrong &mdash; a real person reads every
            piece of feedback, and it helps us make the tool smarter. If you
            need a human right away, you can always{' '}
            <Link to="/get-help" className="text-primary hover:underline">book a technician</Link>.
          </>
        ),
      },
    ],
  },
  {
    id: 'safety-privacy',
    title: 'Safety & Privacy',
    blurb: 'Scams, tracking, cookies, and keeping you safe.',
    icon: Shield,
    items: [
      {
        q: 'How do I report a scam?',
        plain:
          'Use our free Scam Report tool. Paste the email, text, or phone number, and we will check it against known scam patterns and tell you what to do next — plus forward it to the right authorities.',
        a: (
          <>
            Use our free{' '}
            <Link to="/tools/scam-report" className="text-primary hover:underline">Scam Report tool</Link>.
            Paste the email, text, or phone number, and we will check it
            against known scam patterns and tell you what to do next &mdash;
            plus forward it to the right authorities. You can also browse
            current threats on our{' '}
            <Link to="/safety/scam-alerts" className="text-primary hover:underline">Scam Alerts page</Link>.
          </>
        ),
      },
      {
        q: 'I think I got scammed — what do I do?',
        plain:
          'Take a breath. Visit our Scam Defense Center — it has a minute-by-minute checklist: change your password, freeze your cards, contact your bank, and file a report. Fast action recovers most losses.',
        a: (
          <>
            Take a breath. Visit our{' '}
            <Link to="/scam-defense" className="text-primary hover:underline">Scam Defense Center</Link>{' '}
            &mdash; it has a minute-by-minute checklist: change your password,
            freeze your cards, contact your bank, and file a report. Fast
            action recovers most losses. If you need a human, you can also{' '}
            <Link to="/emergency-help" className="text-primary hover:underline">get emergency help</Link>.
          </>
        ),
      },
      {
        q: 'Do you track me on this site?',
        plain:
          'We use basic, anonymous analytics to know which pages are popular. We do not profile you, follow you around the web, or sell your activity. You can opt out at any time from the cookie banner.',
        a: (
          <>
            We use basic, anonymous analytics to know which pages are popular.
            We do not profile you, follow you around the web, or sell your
            activity. You can opt out at any time from the cookie banner or
            read the full breakdown on our{' '}
            <Link to="/privacy" className="text-primary hover:underline">Privacy page</Link>.
          </>
        ),
      },
      {
        q: 'Do you sell my data?',
        plain:
          'No. We have never sold user data and we never will. It is written into our Privacy Policy, and it is one of the reasons TekSure exists in the first place.',
        a: (
          <>
            No. We have never sold user data and we never will. It is written
            into our{' '}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,
            and it is one of the reasons TekSure exists in the first place.
          </>
        ),
      },
      {
        q: 'Do you use cookies?',
        plain:
          'Yes — but only the helpful kind. We use cookies to remember your text size, dark mode choice, and whether you are logged in. No advertising or cross-site tracking cookies.',
        a: (
          <>
            Yes &mdash; but only the helpful kind. We use cookies to remember
            your text size, dark mode choice, and whether you are logged in.
            No advertising or cross-site tracking cookies. You can review
            exactly which cookies we use on our{' '}
            <Link to="/privacy" className="text-primary hover:underline">Privacy page</Link>.
          </>
        ),
      },
      {
        q: 'How is my TekSure account kept secure?',
        plain:
          'Passwords are encrypted, you can turn on two-factor authentication, and we log every sign-in for review. If anything looks off, we notify you by email within minutes.',
        a: (
          <>
            Passwords are encrypted, you can turn on{' '}
            <Link to="/tools/two-factor-setup" className="text-primary hover:underline">two-factor authentication</Link>,
            and we log every sign-in for review. If anything looks off, we
            notify you by email within minutes.
          </>
        ),
      },
      {
        q: 'Will you email me spam?',
        plain:
          'No. If you join our newsletter, you get one short tip per week — nothing else. You can unsubscribe with one click from the bottom of any email. We never share your address with anyone.',
        a: (
          <>
            No. If you join our newsletter, you get one short tip per week
            &mdash; nothing else. You can unsubscribe with one click from the
            bottom of any email. We never share your address with anyone.
          </>
        ),
      },
    ],
  },
  {
    id: 'real-human-help',
    title: 'Real Human Help',
    blurb: 'When you want a real person, not a chatbot.',
    icon: HeartHandshake,
    items: [
      {
        q: 'How do I book a technician?',
        plain:
          'Open the Book page, pick a time, and describe your problem in your own words. We match you with a verified technician based on the issue, your location, and their availability.',
        a: (
          <>
            Open the{' '}
            <Link to="/get-help" className="text-primary hover:underline">Book page</Link>,
            pick a time, and describe your problem in your own words. We match
            you with a verified technician based on the issue, your location,
            and their availability. You can also browse individual{' '}
            <Link to="/technicians" className="text-primary hover:underline">technician profiles</Link>{' '}
            first.
          </>
        ),
      },
      {
        q: 'What’s a typical session like?',
        plain:
          'Most sessions happen by video call and last 20–45 minutes. The technician introduces themselves, asks a few questions, and walks you through the fix. You never have to hand over passwords — ever.',
        a: (
          <>
            Most sessions happen by video call and last 20&ndash;45 minutes.
            The technician introduces themselves, asks a few questions, and
            walks you through the fix. You never have to hand over passwords
            &mdash; ever. Read real stories on our{' '}
            <Link to="/success-stories" className="text-primary hover:underline">Success Stories page</Link>.
          </>
        ),
      },
      {
        q: 'How much does a booking cost?',
        plain:
          'Remote sessions start at $29 for a 20-minute fix. You see the exact price before you book, and you only pay when the job is done. No subscriptions, no hidden fees.',
        a: (
          <>
            Remote sessions start at $29 for a 20-minute fix. You see the
            exact price before you book, and you only pay when the job is
            done. No subscriptions, no hidden fees. Prefer local, in-person
            help? Try{' '}
            <Link to="/local-help" className="text-primary hover:underline">Local Help</Link>.
          </>
        ),
      },
      {
        q: 'What if the technician can’t help?',
        plain:
          'If your session does not solve the problem, you do not pay. Period. We also tell you honestly when a job needs a specialist — like a phone repair shop or your internet provider.',
        a: (
          <>
            If your session does not solve the problem, you do not pay.
            Period. We also tell you honestly when a job needs a specialist
            &mdash; like a phone repair shop or your internet provider
            &mdash; and we will point you in the right direction.
          </>
        ),
      },
      {
        q: 'Can a family member join the session?',
        plain:
          'Absolutely. Many of our bookings include a caregiver or adult child sitting in. Just let us know when booking — we will send the video link to both of you.',
        a: (
          <>
            Absolutely. Many of our bookings include a caregiver or adult
            child sitting in. Just let us know when{' '}
            <Link to="/get-help" className="text-primary hover:underline">booking</Link>{' '}
            &mdash; we will send the video link to both of you. Our{' '}
            <Link to="/caregiver-hub" className="text-primary hover:underline">Caregiver Hub</Link>{' '}
            has more tips for helping a loved one remotely.
          </>
        ),
      },
    ],
  },
  {
    id: 'families-caregivers',
    title: 'For Families & Caregivers',
    blurb: 'Helping a parent, grandparent, or loved one.',
    icon: Users,
    items: [
      {
        q: 'Can I use TekSure to help my parent?',
        plain:
          'Yes — many of our users are adult children helping aging parents. Start at the Caregiver Hub for how-tos on setting up devices, filtering scam calls, and simplifying a loved one’s phone or computer.',
        a: (
          <>
            Yes &mdash; many of our users are adult children helping aging
            parents. Start at the{' '}
            <Link to="/caregiver-hub" className="text-primary hover:underline">Caregiver Hub</Link>{' '}
            for how-tos on setting up devices, filtering scam calls, and
            simplifying a loved one&rsquo;s phone or computer.
          </>
        ),
      },
      {
        q: 'Is there a family plan?',
        plain:
          'Yes. Family Sharing lets you save favorites, progress, and devices for up to 6 household members under one free account.',
        a: (
          <>
            Yes.{' '}
            <Link to="/family-sharing" className="text-primary hover:underline">Family Sharing</Link>{' '}
            lets you save favorites, progress, and devices for up to 6
            household members under one free account.
          </>
        ),
      },
      {
        q: 'Can I track my parent’s progress?',
        plain:
          'With their permission, yes. The Progress Report page shows which guides they have finished, which tools they have used, and where they might still be stuck — so you can offer help before frustration sets in.',
        a: (
          <>
            With their permission, yes. The{' '}
            <Link to="/progress-report" className="text-primary hover:underline">Progress Report page</Link>{' '}
            shows which guides they have finished, which tools they have used,
            and where they might still be stuck &mdash; so you can offer help
            before frustration sets in.
          </>
        ),
      },
      {
        q: 'My parent is losing memory — can TekSure help?',
        plain:
          'Yes. Our Dementia Care Tech Hub covers simplified home screens, photo-dial phones, scam-filtering tools, and gentle routines that reduce confusion and fear around technology.',
        a: (
          <>
            Yes. Our{' '}
            <Link to="/dementia-care-tech" className="text-primary hover:underline">Dementia Care Tech Hub</Link>{' '}
            covers simplified home screens, photo-dial phones, scam-filtering
            tools, and gentle routines that reduce confusion and fear around
            technology.
          </>
        ),
      },
      {
        q: 'What if English isn’t their first language?',
        plain:
          'We publish a growing set of guides in Spanish, and our ESL Tech Hub has simplified English guides written at a 5th-grade reading level. Every page works with your browser’s translate feature too.',
        a: (
          <>
            We publish a growing set of guides in{' '}
            <Link to="/guias" className="text-primary hover:underline">Spanish (Espa&ntilde;ol)</Link>,
            and our{' '}
            <Link to="/esl-tech-hub" className="text-primary hover:underline">ESL Tech Hub</Link>{' '}
            has simplified English guides written at a 5th-grade reading
            level. Every page works with your browser&rsquo;s translate
            feature too.
          </>
        ),
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    blurb: 'Site glitches, browsers, and offline use.',
    icon: Wrench,
    items: [
      {
        q: 'Why won’t a page load?',
        plain:
          'Try refreshing the page first (Ctrl+R on Windows, Cmd+R on Mac). If that does not work, check your internet connection. Still stuck? Email us at hello@teksure.com — we answer within a day.',
        a: (
          <>
            Try refreshing the page first (Ctrl+R on Windows, Cmd+R on Mac).
            If that does not work, check your internet connection using our{' '}
            <Link to="/tools/wifi-speed" className="text-primary hover:underline">Wi-Fi Speed tool</Link>.
            Still stuck? Email us at{' '}
            <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
              hello@teksure.com
            </a>{' '}
            &mdash; we answer within a day.
          </>
        ),
      },
      {
        q: 'Why is the site slow?',
        plain:
          'Usually it is a slow internet connection, not TekSure. Run our free Wi-Fi Speed test to check. If the site itself is slow for everyone, we post updates on the Changelog page.',
        a: (
          <>
            Usually it is a slow internet connection, not TekSure. Run our
            free{' '}
            <Link to="/tools/wifi-speed" className="text-primary hover:underline">Wi-Fi Speed test</Link>{' '}
            to check. If the site itself is slow for everyone, we post updates
            on the{' '}
            <Link to="/changelog" className="text-primary hover:underline">Changelog page</Link>.
          </>
        ),
      },
      {
        q: 'Which browsers does TekSure work on?',
        plain:
          'TekSure works on any modern browser — Chrome, Safari, Firefox, and Edge — on phones, tablets, and computers. If you are using a very old browser, you may see a gentle prompt to update.',
        a: (
          <>
            TekSure works on any modern browser &mdash; Chrome, Safari,
            Firefox, and Edge &mdash; on phones, tablets, and computers. If
            you are using a very old browser, you may see a gentle prompt to
            update. Our{' '}
            <Link to="/glossary" className="text-primary hover:underline">Glossary</Link>{' '}
            explains what a browser is, if you are curious.
          </>
        ),
      },
      {
        q: 'Can I use TekSure offline?',
        plain:
          'Partly. Guides you have already visited stay readable offline, and an offline banner tells you when you have lost connection. TekBrain and booking a technician both need an active internet connection.',
        a: (
          <>
            Partly. Guides you have already visited stay readable offline, and
            an offline banner tells you when you have lost connection.
            TekBrain and booking a technician both need an active internet
            connection.
          </>
        ),
      },
    ],
  },
];

// Build the schema.org FAQPage JSON-LD from the plain-text answers.
// All questions across all categories are included.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.plain,
      },
    }))
  ),
};

const FAQ = () => {
  const [search, setSearch] = useState('');

  const normalized = search.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalized) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalized) ||
            item.plain.toLowerCase().includes(normalized)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [normalized]);

  const totalVisible = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  const totalAll = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Frequently Asked Questions — Plain-English Answers | TekSure"
        description={`Everything you want to know about TekSure, in plain English. ${totalAll}+ answers on our free guides, TekBrain AI, privacy, real-human help, and more.`}
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <Navbar />

      <div className="max-w-4xl mx-auto pt-4 px-4 w-full">
        <PageBreadcrumb segments={[{ label: 'FAQ' }]} />
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="max-w-4xl mx-auto py-16 md:py-20 px-4 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <HelpCircle className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Questions, Answered
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you want to know about TekSure, in plain English.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/60"
                aria-hidden="true"
              />
              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>
              <Input
                id="faq-search"
                placeholder="Search questions… (try “dark mode” or “scam”)"
                className="pl-12 h-14 text-base md:text-lg bg-card rounded-2xl border-border shadow-sm focus:border-primary/40 focus:shadow-md transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
              />
            </div>

            {normalized && (
              <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
                Showing {totalVisible} {totalVisible === 1 ? 'answer' : 'answers'} for
                &ldquo;{search}&rdquo;
              </p>
            )}
          </div>
        </section>

        {/* Category jump nav (hidden when searching) */}
        {!normalized && (
          <nav
            aria-label="FAQ categories"
            className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <cat.icon className="h-4 w-4" aria-hidden="true" />
                  {cat.title}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* Categories */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-14">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-5xl mb-4" aria-hidden="true"></p>
                <p className="text-xl font-semibold mb-2">No answers found</p>
                <p className="text-muted-foreground text-base">
                  Try a different search term, or ask{' '}
                  <Link
                    to="/tekbrain"
                    className="text-primary hover:underline font-medium"
                  >
                    TekBrain
                  </Link>{' '}
                  directly.
                </p>
              </div>
            ) : (
              filteredCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    className="scroll-mt-36"
                  >
                    <header className="mb-6 pb-4 border-b border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                          <Icon
                            className="h-5 w-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                          {cat.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-base">
                        {cat.blurb}
                      </p>
                    </header>

                    <Accordion
                      type="multiple"
                      className="bg-card rounded-2xl border border-border divide-y divide-border"
                    >
                      {cat.items.map((item, idx) => (
                        <AccordionItem
                          key={item.q}
                          value={`${cat.id}-${idx}`}
                          className="border-b-0 px-5 md:px-6"
                        >
                          <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-5">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* Still stuck? CTA */}
        <section className="bg-foreground text-background">
          <div className="container py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Still stuck? We&rsquo;ve got you.
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Ask our free AI helper, or talk to a real human. Either way,
              you&rsquo;ll have an answer in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-xl h-12 px-6 bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/tekbrain">
                  Ask TekBrain
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl h-12 px-6 border-background/20 text-background hover:bg-background/10"
              >
                <Link to="/get-help">Book a Human</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
