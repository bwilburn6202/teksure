import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  DollarSign,
  Gift,
  Heart,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Share2,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { guides } from '@/data/guides';

/**
 * TekSure — About page.
 *
 * Warm, trust-building page that tells TekSure's story in plain English.
 * Matches the cream/amber palette of the Index.tsx landing, with large,
 * readable type and lots of breathing room. Built to be read aloud by
 * an 80-year-old who has never used a computer.
 */

const guideCount = guides.length;
// Round down to the nearest hundred for a friendlier, less-brittle number.
const guideCountRounded = Math.floor(guideCount / 100) * 100;

const pillars = [
  {
    icon: BookOpen,
    title: 'Free Guides & Tutorials',
    desc: 'Over 300 step-by-step guides written in plain English, covering everything from Wi-Fi setup to AI tools.',
    emoji: '',
  },
  {
    icon: Users,
    title: 'Verified Tech Support',
    desc: 'Need hands-on help? Get matched with a background-checked technician for remote or in-person support.',
    emoji: '',
  },
  {
    icon: Headphones,
    title: 'Patient, Jargon-Free Help',
    desc: 'We explain things the way a patient friend would — no judgment, no jargon, just clear answers.',
    emoji: '',
  },
];

const audience = [
  { icon: Heart, label: 'Seniors who got handed a smartphone and told “good luck”' },
  { icon: Users, label: 'Adult kids and caregivers helping a parent navigate tech from afar' },
  { icon: Sparkles, label: 'New Americans learning English and American tech at the same time' },
  { icon: MessageCircle, label: 'Anyone who’s ever felt dumb asking a tech question — you’re not' },
];

    <main id="main-content" className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Mission</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology should empower everyone — not just the tech-savvy. TekSure helps seniors,
              beginners, and anyone who feels overwhelmed by tech to understand, troubleshoot, and
              master their devices with confidence.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ============ OUR PROMISE ============ */}
        <section aria-labelledby="promise-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our promise</span>
              <h2 id="promise-heading">Three things we’ll never do</h2>
              <p className="section-lede">
                Everything we build is measured against these three rules. If
                we ever break one, you can call us on it.
              </p>
            </div>

            <div className="pillars">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="pillar">
                    <div
                      className="pillar-icon"
                      style={{ background: p.accent, color: p.ring }}
                      aria-hidden="true"
                    >
                      <Icon />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHO WE'RE FOR ============ */}
        <section aria-labelledby="who-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Who we’re for</span>
              <h2 id="who-heading">Built for people, not power users</h2>
              <p className="section-lede">
                We wrote TekSure for the folks tech companies forget about.
              </p>
            </div>

            <div className="who-box">
              <ul className="who-list">
                {audience.map((a) => {
                  const Icon = a.icon;
                  return (
                    <li key={a.label}>
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                      <span>{a.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="who-not">
                <strong>Who we’re not for:</strong> software engineers, IT
                professionals, or folks debugging enterprise networks. Our
                guides will feel obvious to you — and that’s the point. If
                that’s you, please send us to your mom. (We mean it.)
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHY WE STARTED ============ */}
        <section aria-labelledby="story-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">Why we started TekSure</span>
              <h2 id="story-heading">
                Nobody should feel stupid asking for help
              </h2>
            </div>

            <div className="story">
              <p>
                TekSure started the way a lot of family tech-support does — a
                phone call. A grandparent asking how to join a video call. A
                parent wondering if the email in their inbox is a scam. An aunt
                afraid to press a button in case she broke something expensive.
              </p>
              <p>
                Every time, the hardest part wasn’t the tech — it was watching
                a smart, capable person apologize for not knowing something no
                one had ever actually explained to them. That apology is
                everywhere. It shouldn’t be.
              </p>
              <p>
                So we started writing things down. One guide became ten. Ten
                became a hundred. We kept a single rule the whole time: if an
                80-year-old who’s never used a computer can’t read it aloud and
                follow along, it isn’t done yet.
              </p>
              <p>
                Our vision is a web where nobody has to apologize for asking a
                tech question. Where “I don’t know how this works” is met with
                a clear answer, not a sigh. Where help is free, kind, and
                actually helpful. We’re not there yet — but every guide, tool,
                and human on this site is a step toward it.
              </p>
              <p className="story-sig">
                <strong>Bailey Wilburn</strong>
                Founder, TekSure
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ WHAT MAKES US DIFFERENT ============ */}
        <section aria-labelledby="diff-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What makes us different</span>
              <h2 id="diff-heading">
                A few things you won’t find anywhere else
              </h2>
            </div>

            <ul className="diff-list">
              {differences.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.title} className="diff-item">
                    <div className="ic" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <h3>{d.title}</h3>
                      <p>{d.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="divider" />

        {/* ============ TRUST NUMBERS ============ */}
        <section aria-labelledby="stats-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">By the numbers</span>
              <h2 id="stats-heading">Small team, big library</h2>
            </div>

            <div className="stats" role="list">
              {trustStats.map((s) => (
                <div key={s.label} role="listitem">
                  <div className="stat-num">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="stats-caption">
              Numbers grow every week. The work of helping people never stops.
            </p>
          </div>
        </section>

        <div className="divider" />

        {/* ============ MEET TEKBRAIN ============ */}
        <section aria-labelledby="brain-heading">
          <div className="wrap">
            <div className="brain-card">
              <div className="brain-icon" aria-hidden="true">
                <Sparkles />
              </div>
              <div>
                <span className="eyebrow" style={{ color: '#513C9C' }}>
                  Meet TekBrain
                </span>
                <h2 id="brain-heading">Your patient, plain-English helper</h2>
                <p>
                  TekBrain is a friendly AI assistant that can answer your
                  tech questions any time of day. Here’s the important part:
                  TekBrain only answers from our verified, human-reviewed
                  guides — so it can’t make things up, invent fake steps, or
                  wander off into strange corners of the internet. When it
                  replies, it shows you exactly which guide the answer came
                  from.
                </p>
                <p>
                  No scary robot. No surveillance. Just a calm, patient second
                  opinion — available whenever you need one.
                </p>
                <Link to="/brain" className="brain-cta">
                  <MessageCircle size={20} aria-hidden="true" />
                  Ask TekBrain a question
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ HOW WE'RE FUNDED ============ */}
        <section aria-labelledby="fund-heading">
          <div className="wrap-narrow">
            <div className="section-head">
              <span className="eyebrow">How we’re funded</span>
              <h2 id="fund-heading">Free forever, with nothing hidden</h2>
            </div>

            <div className="funding-box">
              <div className="funding-icon" aria-hidden="true">
                <DollarSign />
              </div>
              <div>
                <h3>Where the money actually comes from</h3>
                <p>
                  TekSure is <strong>free forever</strong> — no subscriptions,
                  no paywalls, no ads. When you book a real human technician,
                  we take a small share to keep the lights on. That’s it. No
                  data sales, no tracking deals, no mystery sponsors.
                </p>
                <p>
                  If we can’t explain how we make money in one sentence, we
                  won’t make money that way.
                </p>
                <span className="promise">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  We never sell your data
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ GET INVOLVED ============ */}
        <section aria-labelledby="involve-heading">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Get involved</span>
              <h2 id="involve-heading">Help us help more people</h2>
              <p className="section-lede">
                TekSure gets better when neighbors show up for neighbors.
                Here are three ways to pitch in.
              </p>
            </div>

            <div className="involve-grid">
              {involvement.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="involve-card">
                    <div className="involve-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.external ? (
                      <a
                        href={item.href}
                        className="involve-cta"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link to={item.href} className="involve-cta">
                        {item.cta}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ============ CONTACT ============ */}
        <section aria-labelledby="contact-heading">
          <div className="wrap-narrow">
            <div className="contact-box">
              <span className="eyebrow">Contact</span>
              <h2 id="contact-heading">Come say hi</h2>
              <p>
                Got a question, a guide idea, or a story about a family member
                we could help? We read every email — a real human writes back.
              </p>
              <div className="contact-row">
                <a href="mailto:hello@teksure.com" className="c-btn c-primary">
                  <Mail size={20} aria-hidden="true" />
                  Email hello@teksure.com
                </a>
                <Link to="/get-help" className="c-btn c-secondary">
                  <Calendar size={20} aria-hidden="true" />
                  Book a session
                </Link>
                <Link to="/forum" className="c-btn c-tertiary">
                  <Users size={20} aria-hidden="true" />
                  Community forum
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
