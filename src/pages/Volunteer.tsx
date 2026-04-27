import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  DollarSign,
  Globe2,
  Heart,
  MessageCircle,
  PenLine,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

/**
 * TekSure — Volunteer page.
 *
 * Warm, welcoming page inviting visitors to help TekSure grow. Matches the
 * cream/amber About.tsx aesthetic. Focuses on low-friction ways to get
 * involved: writing guides, sharing stories, answering community questions,
 * beta testing, translating, or donating. Includes a simple mailto form and
 * three fictional but realistic volunteer spotlights.
 */

type HelpCard = {
  icon: typeof PenLine;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

const helpCards: HelpCard[] = [
  {
    icon: PenLine,
    title: 'Write a guide',
    body: 'Know a tech topic well? Share it. Our editors will polish your plain-language draft and you get full contributor credit.',
    cta: 'Start a guide',
    href: 'mailto:volunteer@teksure.com?subject=I%27d%20like%20to%20write%20a%20guide&body=Hi%20TekSure%20team%2C%0A%0AI%27d%20like%20to%20contribute%20a%20guide.%20Here%27s%20a%20topic%20I%20know%20well%3A%0A%0A',
    external: true,
  },
  {
    icon: Heart,
    title: 'Share your story',
    body: 'A tech moment that changed things for you or someone you love? Tell us. Stories help other people see they are not alone.',
    cta: 'stories@teksure.com',
    href: 'mailto:stories@teksure.com?subject=My%20TekSure%20story',
    external: true,
  },
  {
    icon: MessageCircle,
    title: 'Answer community questions',
    body: 'Join our forum and help someone who is stuck. Kind, patient answers are worth their weight in gold.',
    cta: 'Visit the forum',
    href: '/forum',
  },
  {
    icon: Sparkles,
    title: 'Test new tools',
    body: 'Join the beta tester group. See new tools before launch and tell us what works (and what does not).',
    cta: 'Join beta testers',
    href: 'mailto:volunteer@teksure.com?subject=I%27d%20like%20to%20beta%20test&body=Hi%20TekSure%20team%2C%0A%0AI%27d%20like%20to%20join%20the%20beta%20tester%20group.%20My%20main%20device%20is%3A%0A%0A',
    external: true,
  },
  {
    icon: Globe2,
    title: 'Translate guides',
    body: 'Help us reach Spanish, Mandarin, and Vietnamese speakers. Every translated guide reaches thousands more families.',
    cta: 'Help translate',
    href: 'mailto:volunteer@teksure.com?subject=I%27d%20like%20to%20translate%20guides&body=Hi%20TekSure%20team%2C%0A%0AI%27d%20like%20to%20help%20translate%20guides.%20Languages%20I%20can%20translate%20into%3A%0A%0A',
    external: true,
  },
  {
    icon: DollarSign,
    title: 'Donate',
    body: 'If you prefer, a one-time or monthly gift keeps guides free for everyone. Even a small amount covers hosting for a week.',
    cta: 'Send a donation',
    href: 'mailto:hello@teksure.com?subject=I%27d%20like%20to%20donate',
    external: true,
  },
];

type Spotlight = {
  name: string;
  age: number;
  tagline: string;
  story: string;
  avatarBg: string;
  avatarColor: string;
  initials: string;
};

const spotlights: Spotlight[] = [
  {
    name: 'Ray',
    age: 68,
    tagline: 'Retired teacher · Wrote 12 guides last year',
    story:
      '"I spent 40 years explaining things to kids. Now I explain things to their grandparents. Same work, same joy — and I finally have time to do it right."',
    avatarBg: '#FFEFD9',
    avatarColor: '#B35A00',
    initials: 'R',
  },
  {
    name: 'Priya',
    age: 43,
    tagline: 'Software engineer · Mom’s caregiver · Beta tester',
    story:
      '"I help my mom with her phone every week. Now when I find something confusing, I tell TekSure before it ships. It feels good knowing I am saving other families that exact phone call."',
    avatarBg: '#E6F0FF',
    avatarColor: '#2A5FCC',
    initials: 'P',
  },
  {
    name: 'Marcus',
    age: 22,
    tagline: 'College student · Studying gerontology · Translator',
    story:
      '"My abuela is the reason I got into gerontology. Translating TekSure guides into Spanish is the smallest thing I can do to say thank you — and it reaches a lot of abuelas."',
    avatarBg: '#DFF1E4',
    avatarColor: '#1E6A3D',
    initials: 'M',
  },
];

const helpOptions = [
  'Writing a guide',
  'Sharing my story',
  'Answering community questions',
  'Beta testing new tools',
  'Translating guides',
  'Donating',
  'Something else',
];

const Volunteer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [helpType, setHelpType] = useState(helpOptions[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Volunteer signup — ${helpType}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || '(not provided)'}`,
        `Email: ${email || '(not provided)'}`,
        `How I'd like to help: ${helpType}`,
        '',
        'A bit more about me:',
        message || '(left blank)',
        '',
        '— Sent from teksure.com/volunteer',
      ].join('\n')
    );
    window.location.href = `mailto:volunteer@teksure.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="teksure-volunteer">
      <SEOHead
        title="Volunteer with TekSure — Help Your Community Get Confident With Tech"
        description="Write a guide, share a story, answer community questions, beta test new tools, translate guides, or donate. Whether you have an hour a month or a skill to share, there's a way to help."
        path="/volunteer"
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <style>{`
        .teksure-volunteer {
          min-height: 100vh;
          background:
            radial-gradient(1100px 520px at 50% -10%, #FFE9C7 0%, rgba(255,233,199,0) 60%),
            radial-gradient(800px 400px at 90% 10%, #FFEAD2 0%, rgba(255,234,210,0) 60%),
            #FAF8F4;
          color: #1A1A1A;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .teksure-volunteer *, .teksure-volunteer *::before, .teksure-volunteer *::after {
          box-sizing: border-box;
        }
        .teksure-volunteer :focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(42,95,204,.35);
          border-radius: 12px;
        }

        .teksure-volunteer .wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .teksure-volunteer .wrap-narrow {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .teksure-volunteer .hero {
          padding: 64px 0 56px;
          text-align: center;
        }
        .teksure-volunteer .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; border: 1px solid #E4DFD4;
          border-radius: 999px; padding: 8px 18px;
          font-weight: 600; font-size: 15px; color: #444;
          margin-bottom: 24px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .teksure-volunteer .hero-eyebrow .dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: #E87A2B;
          box-shadow: 0 0 0 3px rgba(232,122,43,0.22);
        }
        .teksure-volunteer .hero h1 {
          font-size: clamp(36px, 5.2vw, 58px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 auto 20px;
          max-width: 860px;
          text-wrap: balance;
        }
        .teksure-volunteer .hero h1 .accent { color: #2A5FCC; }
        .teksure-volunteer .hero .lede {
          font-size: clamp(18px, 1.8vw, 22px);
          line-height: 1.6;
          color: #444;
          max-width: 680px;
          margin: 0 auto 8px;
        }

        /* SECTION */
        .teksure-volunteer section { padding: 64px 0; }
        .teksure-volunteer .section-head {
          text-align: center;
          margin: 0 auto 44px;
          max-width: 760px;
        }
        .teksure-volunteer .eyebrow {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 13px;
          font-weight: 700;
          color: #B35A00;
          margin-bottom: 14px;
        }
        .teksure-volunteer h2 {
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.15;
          margin: 0 0 16px;
          color: #1A1A1A;
          text-wrap: balance;
        }
        .teksure-volunteer .section-lede {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.6;
          color: #444;
        }
        .teksure-volunteer .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E4DFD4, transparent);
          max-width: 1080px;
          margin: 0 auto;
        }

        /* HELP CARDS */
        .teksure-volunteer .help-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .teksure-volunteer .help-card {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 22px;
          padding: 32px 28px;
          display: flex; flex-direction: column;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .teksure-volunteer .help-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.07);
        }
        .teksure-volunteer .help-icon {
          width: 58px; height: 58px; border-radius: 16px;
          display: grid; place-items: center;
          background: #FFEFD9; color: #B35A00;
          margin-bottom: 20px;
        }
        .teksure-volunteer .help-icon svg { width: 28px; height: 28px; stroke-width: 2; }
        .teksure-volunteer .help-card h3 {
          font-size: 20px; font-weight: 700;
          margin: 0 0 10px; color: #1A1A1A;
          letter-spacing: -0.005em;
        }
        .teksure-volunteer .help-card p {
          font-size: 16px; line-height: 1.6; color: #444;
          margin: 0 0 20px; flex: 1;
        }
        .teksure-volunteer .help-cta {
          display: inline-flex; align-items: center; gap: 6px;
          color: #2A5FCC; font-weight: 700; font-size: 16px;
          text-decoration: none;
        }
        .teksure-volunteer .help-cta:hover { text-decoration: underline; }

        /* EXPANDED SECTION (write a guide / beta tester) */
        .teksure-volunteer .detail-card {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 24px;
          padding: 44px 40px;
          box-shadow: 0 2px 0 rgba(0,0,0,0.02), 0 12px 30px rgba(0,0,0,0.05);
        }
        .teksure-volunteer .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 28px;
        }
        .teksure-volunteer .detail-item {
          background: #FAF7F1;
          border: 1px solid #E4DFD4;
          border-radius: 16px;
          padding: 22px 22px;
        }
        .teksure-volunteer .detail-item h4 {
          font-size: 16px;
          font-weight: 700;
          color: #B35A00;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 8px;
        }
        .teksure-volunteer .detail-item p {
          font-size: 17px;
          line-height: 1.55;
          color: #2a2a2a;
          margin: 0;
        }
        .teksure-volunteer .needs-list {
          margin-top: 28px;
          padding: 22px 24px;
          background: linear-gradient(180deg, #FFF6E4 0%, #FFFBEF 100%);
          border: 1px solid #F0E4C5;
          border-radius: 16px;
        }
        .teksure-volunteer .needs-list h4 {
          font-size: 16px;
          font-weight: 700;
          color: #B35A00;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 12px;
        }
        .teksure-volunteer .needs-list ul {
          margin: 0; padding: 0; list-style: none;
          display: flex; flex-wrap: wrap; gap: 10px;
        }
        .teksure-volunteer .needs-list li {
          background: #fff;
          border: 1px solid #F0D7A6;
          color: #2a2a2a;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 15px;
          font-weight: 600;
        }

        /* Beta tester list */
        .teksure-volunteer .beta-list {
          list-style: none; padding: 0; margin: 28px 0 0;
          display: grid; gap: 14px;
        }
        .teksure-volunteer .beta-list li {
          display: flex; gap: 14px; align-items: flex-start;
          font-size: 18px; line-height: 1.55;
          color: #2a2a2a;
        }
        .teksure-volunteer .beta-list svg {
          flex-shrink: 0; margin-top: 3px;
          color: #1E6A3D;
        }

        /* SPOTLIGHTS */
        .teksure-volunteer .spotlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .teksure-volunteer .spotlight-card {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 22px;
          padding: 32px 28px;
          text-align: center;
        }
        .teksure-volunteer .spotlight-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          margin: 0 auto 18px;
          display: grid; place-items: center;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .teksure-volunteer .spotlight-name {
          font-size: 20px; font-weight: 700;
          margin: 0 0 6px; color: #1A1A1A;
        }
        .teksure-volunteer .spotlight-tagline {
          font-size: 15px;
          font-weight: 600;
          color: #B35A00;
          margin: 0 0 16px;
        }
        .teksure-volunteer .spotlight-story {
          font-size: 16px;
          line-height: 1.6;
          color: #444;
          margin: 0;
          font-style: italic;
        }

        /* FORM */
        .teksure-volunteer .form-card {
          background: #fff;
          border: 1px solid #E4DFD4;
          border-radius: 24px;
          padding: 44px 40px;
          box-shadow: 0 2px 0 rgba(0,0,0,0.02), 0 18px 40px rgba(0,0,0,0.05);
        }
        .teksure-volunteer .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        .teksure-volunteer label {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 8px;
        }
        .teksure-volunteer input[type="text"],
        .teksure-volunteer input[type="email"],
        .teksure-volunteer select,
        .teksure-volunteer textarea {
          width: 100%;
          padding: 14px 16px;
          font-size: 17px;
          font-family: inherit;
          color: #1A1A1A;
          background: #FAF7F1;
          border: 1px solid #E4DFD4;
          border-radius: 12px;
          transition: border-color .15s, box-shadow .15s, background .15s;
        }
        .teksure-volunteer input:focus,
        .teksure-volunteer select:focus,
        .teksure-volunteer textarea:focus {
          outline: none;
          border-color: #2A5FCC;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(42,95,204,.18);
        }
        .teksure-volunteer textarea {
          min-height: 110px;
          resize: vertical;
        }
        .teksure-volunteer .form-submit {
          margin-top: 24px;
          display: inline-flex; align-items: center; gap: 10px;
          background: #2A5FCC; color: #fff;
          padding: 14px 28px;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(42,95,204,0.35);
          transition: transform .15s, box-shadow .15s, background .15s;
        }
        .teksure-volunteer .form-submit:hover {
          background: #234FB0;
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(42,95,204,0.4);
        }

        /* TRUST NOTE */
        .teksure-volunteer .trust {
          background: linear-gradient(180deg, #FFEFD9 0%, #FFF6E4 100%);
          border: 1px solid #F0D7A6;
          border-radius: 20px;
          padding: 28px 32px;
          display: flex; gap: 18px; align-items: flex-start;
        }
        .teksure-volunteer .trust-icon {
          flex-shrink: 0;
          width: 48px; height: 48px;
          border-radius: 14px;
          display: grid; place-items: center;
          background: #fff;
          color: #B35A00;
          box-shadow: 0 4px 12px rgba(179,90,0,0.15);
        }
        .teksure-volunteer .trust p {
          margin: 0;
          font-size: 17px;
          line-height: 1.6;
          color: #3a2a10;
        }
        .teksure-volunteer .trust strong { color: #1A1A1A; }

        /* Responsive */
        @media (max-width: 900px) {
          .teksure-volunteer section { padding: 48px 0; }
          .teksure-volunteer .help-grid { grid-template-columns: 1fr; }
          .teksure-volunteer .detail-grid { grid-template-columns: 1fr; }
          .teksure-volunteer .spotlight-grid { grid-template-columns: 1fr; }
          .teksure-volunteer .form-row { grid-template-columns: 1fr; }
          .teksure-volunteer .detail-card, .teksure-volunteer .form-card { padding: 32px 26px; }
        }
        @media (max-width: 640px) {
          .teksure-volunteer .wrap, .teksure-volunteer .wrap-narrow { padding: 0 18px; }
          .teksure-volunteer .hero { padding: 48px 0 40px; }
          .teksure-volunteer .trust { flex-direction: column; }
          .teksure-volunteer .form-submit { width: 100%; justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .teksure-volunteer .help-card:hover,
          .teksure-volunteer .form-submit:hover { transform: none; }
        }
      `}</style>

      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" aria-labelledby="volunteer-hero">
          <div className="wrap">
            <span className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              Volunteer with TekSure
            </span>

            <h1 id="volunteer-hero">
              Join Us — Help Your Community{' '}
              <span className="accent">Get Confident With Tech</span>
            </h1>

            <p className="lede">
              Whether you have an hour a month or a skill to share, there&rsquo;s
              a way to help.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ============ HOW YOU CAN HELP ============ */}
        <section aria-labelledby="help-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How you can help</span>
              <h2 id="help-heading">Six ways to pitch in</h2>
              <p className="section-lede">
                Pick whatever fits your life. Every little bit makes TekSure
                better for the next person who&rsquo;s stuck.
              </p>
            </div>

            <div className="help-grid">
              {helpCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="help-card">
                    <div className="help-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <a
                      href={card.href}
                      className="help-cta"
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {card.cta}
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WRITE A GUIDE (EXPANDED) ============ */}
        <section aria-labelledby="write-guide-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Write a guide</span>
              <h2 id="write-guide-heading">The contributor path, explained</h2>
              <p className="section-lede">
                You don&rsquo;t need to be a writer. If you can explain
                something clearly to a patient beginner, you can write a
                TekSure guide.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-grid">
                <div className="detail-item">
                  <h4>Who writes guides</h4>
                  <p>
                    Anyone comfortable explaining tech to a patient beginner.
                    Retired teachers, caregivers, IT folks, college students,
                    family tech-support people — all welcome.
                  </p>
                </div>
                <div className="detail-item">
                  <h4>How it works</h4>
                  <p>
                    Submit a topic idea. We send you our style guide. You draft
                    in plain language. Our editors polish it. You&rsquo;re
                    credited as the contributor on the published guide.
                  </p>
                </div>
                <div className="detail-item">
                  <h4>What we pay</h4>
                  <p>
                    Guides are volunteer-written. Published contributors get
                    lifetime TekSure Plus access (when we launch it) as a
                    thank-you.
                  </p>
                </div>
                <div className="detail-item">
                  <h4>How long it takes</h4>
                  <p>
                    Most guides are 600–1,200 words and take a few hours to
                    draft. Editing is a couple of back-and-forth emails.
                    Nothing rushed.
                  </p>
                </div>
              </div>

              <div className="needs-list">
                <h4>Topics we&rsquo;re looking for right now</h4>
                <ul>
                  <li>Setting up a new iPad for a parent</li>
                  <li>Understanding Medicare plan portals</li>
                  <li>Safely selling an old device</li>
                  <li>Video calling grandkids on a smart TV</li>
                  <li>Recognizing deepfake phone calls</li>
                  <li>Switching from Yahoo Mail to Gmail</li>
                  <li>Recovering a locked Facebook account</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ BETA TESTER ============ */}
        <section aria-labelledby="beta-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Beta tester group</span>
              <h2 id="beta-heading">Shape what ships</h2>
              <p className="section-lede">
                Our beta testers see new tools before anyone else and tell us
                what&rsquo;s confusing, what&rsquo;s missing, and what to cut.
              </p>
            </div>

            <div className="detail-card">
              <ul className="beta-list">
                <li>
                  <CheckCircle2 size={22} strokeWidth={2} aria-hidden="true" />
                  <span>
                    A short monthly email with <strong>1–2 new tools</strong>{' '}
                    before they launch publicly.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={22} strokeWidth={2} aria-hidden="true" />
                  <span>
                    Try them out, send back whatever feedback you have —{' '}
                    <strong>we actually change things based on it.</strong>
                  </span>
                </li>
                <li>
                  <Clock size={22} strokeWidth={2} aria-hidden="true" />
                  <span>
                    Time commitment: roughly{' '}
                    <strong>15–30 minutes a month.</strong> Skip any month you
                    don&rsquo;t have time.
                  </span>
                </li>
                <li>
                  <Users size={22} strokeWidth={2} aria-hidden="true" />
                  <span>
                    We especially need testers who are{' '}
                    <strong>not</strong> tech experts — the whole point is to
                    see how tools feel to a regular person.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ VOLUNTEER SPOTLIGHT ============ */}
        <section aria-labelledby="spotlight-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Volunteer spotlight</span>
              <h2 id="spotlight-heading">The neighbors behind TekSure</h2>
              <p className="section-lede">
                A few of the people who&rsquo;ve been showing up. Every single
                one started with a simple &ldquo;how can I help?&rdquo;
              </p>
            </div>

            <div className="spotlight-grid">
              {spotlights.map((person) => (
                <div key={person.name} className="spotlight-card">
                  <div
                    className="spotlight-avatar"
                    style={{ background: person.avatarBg, color: person.avatarColor }}
                    aria-hidden="true"
                  >
                    {person.initials}
                  </div>
                  <h3 className="spotlight-name">
                    {person.name}, {person.age}
                  </h3>
                  <p className="spotlight-tagline">{person.tagline}</p>
                  <p className="spotlight-story">{person.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ SIGN-UP FORM ============ */}
        <section aria-labelledby="signup-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Sign up</span>
              <h2 id="signup-heading">Tell us you&rsquo;re in</h2>
              <p className="section-lede">
                Fill in whatever you&rsquo;re comfortable sharing.
                Submitting opens your email app with a pre-filled message to
                our volunteer team.
              </p>
            </div>

            <div className="form-card">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div>
                    <label htmlFor="vol-name">Your name</label>
                    <input
                      id="vol-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="First name is fine"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="vol-email">Email address</label>
                    <input
                      id="vol-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="vol-help">How would you like to help?</label>
                  <select
                    id="vol-help"
                    value={helpType}
                    onChange={(e) => setHelpType(e.target.value)}
                  >
                    {helpOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="vol-message">
                    Anything you&rsquo;d like us to know? (optional)
                  </label>
                  <textarea
                    id="vol-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your background, what you're good at, topics you care about, or anything else."
                  />
                </div>

                <button type="submit" className="form-submit">
                  <Send size={18} aria-hidden="true" />
                  Send my volunteer note
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ TRUST NOTE ============ */}
        <section aria-labelledby="trust-heading">
          <div className="wrap-narrow">
            <div className="trust">
              <div className="trust-icon" aria-hidden="true">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <p id="trust-heading">
                <strong>We&rsquo;re a small team.</strong> We read every email
                personally — there&rsquo;s no form letter, no autoresponder,
                no bot. Give us a week to reply, and please send a nudge if
                we miss you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;
