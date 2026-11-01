import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageHeader } from '@/components/layout/PageHeader';
import { TOOL_GROUPS } from '@/data/tools-list';

const TOOL_COUNT = TOOL_GROUPS.reduce((n, g) => n + g.tools.length, 0);

export default function Tools() {
  return (
    <>
      <SEOHead
        title="Free Tech Safety Tools for Seniors & Beginners | TekSure"
        description="Free, plain-English safety tools: check a message or link for scams, make strong passwords, stop robocalls, freeze your credit and recover from a scam."
        path="/tools"
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <PageHeader
          eyebrow={`${TOOL_COUNT} free tools`}
          title="Tools"
          description="Free tools that walk you through one job at a time. No sign-up needed."
        />

        <div className="mx-auto max-w-5xl px-4">
          {TOOL_GROUPS.map((group, gi) => (
            <section key={group.title} className="mt-12" aria-labelledby={`group-${gi}`}>
              <h2 id={`group-${gi}`} className="font-display text-2xl font-bold">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {group.tools.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to={`/tools/${t.slug}`}
                      className="group flex h-full flex-col rounded-xl border-2 border-border bg-card p-5 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="flex items-start justify-between gap-3 text-xl font-semibold text-primary">
                        {t.name}
                        <ArrowRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      <span className="mt-1 text-lg text-muted-foreground">{t.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
