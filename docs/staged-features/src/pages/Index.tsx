/**
 * Index — Homepage (decluttered)
 *
 * Design goals:
 *  - One clear hero: headline + single sentence + ONE primary CTA
 *  - 3 "how it works" steps (not 6 feature cards)
 *  - 4 popular guide cards (no badge soup)
 *  - Single bottom CTA strip
 *  - Max-width container, consistent spacing, no competing colours
 */

import { Link } from "react-router-dom";
import { BookOpen, Wrench, Users, ArrowRight, Shield, Wifi, Smartphone } from "lucide-react";
import TrendingTopics from "@/components/TrendingTopics";
import TechNews from "@/components/TechNews";

// ── Popular guides — update slugs to match your real guide IDs ────────────────
const FEATURED_GUIDES = [
  {
    slug: "how-to-connect-to-wifi",
    title: "Connect to Wi-Fi",
    category: "Wi-Fi",
    icon: Wifi,
  },
  {
    slug: "how-to-stay-safe-online",
    title: "Stay Safe Online",
    category: "Security",
    icon: Shield,
  },
  {
    slug: "how-to-backup-photos",
    title: "Back Up Your Photos",
    category: "Backup",
    icon: Smartphone,
  },
  {
    slug: "how-to-update-your-apps",
    title: "Update Your Apps",
    category: "Software",
    icon: Wrench,
  },
];

// ── How it works steps ────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "1",
    heading: "Find your answer",
    body: "Browse plain-English guides or ask TekBot — no jargon, no confusion.",
  },
  {
    number: "2",
    heading: "Follow along",
    body: "Step-by-step instructions with pictures, written for everyday people.",
  },
  {
    number: "3",
    heading: "Get live help if you need it",
    body: "Book a real technician for in-home, remote, or phone support.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
        <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase">
          Tech help for everyone
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Technology made simple,<br className="hidden md:block" /> one step at a time.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
          Guides, tools, and friendly support — built for people who just want their tech to work.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/guides"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-base"
          >
            Browse guides
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors text-base"
          >
            Book a technician
          </Link>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-10">
            How TekSure works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ number, heading, body }) => (
              <div key={number} className="flex flex-col items-start">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-base flex items-center justify-center mb-4 shrink-0">
                  {number}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1.5">{heading}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular guides ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Popular guides</h2>
          <Link
            to="/guides"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            All guides <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURED_GUIDES.map(({ slug, title, category, icon: Icon }) => (
            <Link
              key={slug}
              to={`/guides/${slug}`}
              className="group p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{category}</p>
                <p className="text-sm font-medium text-gray-800 leading-snug">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Trending Topics (live from Reddit & HN) ──────────────────────── */}
      <TrendingTopics />

      {/* ── Tech News ────────────────────────────────────────────────────── */}
      <TechNews />

      {/* ── Quick links ──────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              to: "/tools",
              icon: Wrench,
              label: "Free tools",
              desc: "App Recommender, Backup Wizard, and more",
            },
            {
              to: "/forum",
              icon: Users,
              label: "Community",
              desc: "Ask questions and help others",
            },
            {
              to: "/guides",
              icon: BookOpen,
              label: "All guides",
              desc: "Wi-Fi, security, phones, and beyond",
            },
          ].map(({ to, icon: Icon, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm mb-0.5">{label}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Need hands-on help?
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
            Book a friendly technician for in-home, remote, or phone support — starting from £15.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm"
          >
            Book now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
