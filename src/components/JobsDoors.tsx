import { Link } from 'react-router-dom';
import { GraduationCap, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * Three jobs-to-be-done doors shown on the homepage.
 *
 * Rather than asking users to browse a nav bar, we surface the three most
 * common reasons people land on TekSure:
 *
 *   1. Teach me something — they're trying to learn.
 *   2. Fix something      — something is broken right now.
 *   3. Is this safe?      — they need to verify a link / call / email.
 */
const doors = [
  {
    to: '/learn',
    icon: GraduationCap,
    emoji: '🧑‍🏫',
    title: 'Teach me something',
    blurb: 'Step-by-step lessons at your pace. Start with the basics or pick a topic.',
    accent: 'from-blue-500/10 to-blue-500/5',
    ring: 'hover:ring-blue-500/30',
  },
  {
    to: '/quick-fixes',
    icon: Wrench,
    emoji: '🛠️',
    title: 'Fix something',
    blurb: 'Something is broken — phone, Wi-Fi, printer, password. Walk me through it.',
    accent: 'from-amber-500/10 to-amber-500/5',
    ring: 'hover:ring-amber-500/30',
  },
  {
    to: '/scam-defense',
    icon: ShieldCheck,
    emoji: '🛡️',
    title: 'Is this safe?',
    blurb: 'Paste a link, phone number, or email. We\u2019ll tell you if it looks real.',
    accent: 'from-emerald-500/10 to-emerald-500/5',
    ring: 'hover:ring-emerald-500/30',
  },
] as const;

interface JobsDoorsProps {
  className?: string;
}

export function JobsDoors({ className = '' }: JobsDoorsProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-3 ${className}`}
      role="navigation"
      aria-label="What brings you here today"
    >
      {doors.map((d) => {
        const Icon = d.icon;
        return (
          <Link
            key={d.to}
            to={d.to}
            className={
              'group relative flex flex-col gap-3 rounded-3xl border bg-background p-6 ' +
              'transition-all min-h-[200px] hover:-translate-y-1 hover:shadow-xl hover:ring-4 ' +
              'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 ' +
              d.ring
            }
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${d.accent}`}
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3">
              <span className="text-4xl leading-none" aria-hidden="true">{d.emoji}</span>
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="relative text-xl font-semibold text-foreground">{d.title}</h3>
            <p className="relative text-base leading-relaxed text-muted-foreground">{d.blurb}</p>
            <span className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
              Start here
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
