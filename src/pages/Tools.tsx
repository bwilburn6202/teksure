import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { TOOL_GROUPS } from '@/data/tools-list';

export default function Tools() {
  return (
    <>
      <SEOHead
        title="Free Tech Tools for Seniors & Beginners | TekSure"
        description="Free, plain-English tools: check for scams, make strong passwords, fix Wi-Fi and printers, find a lost phone and compare phone plans."
        path="/tools"
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 pt-10 outline-none">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Tools</h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Free tools that walk you through one job at a time. No sign-up needed.
        </p>

        {TOOL_GROUPS.map((group) => (
          <section key={group.title} className="mt-12" aria-labelledby={`group-${group.title}`}>
            <h2 id={`group-${group.title}`} className="text-2xl font-bold border-b-2 border-border pb-3">
              {group.title}
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {group.tools.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={`/tools/${t.slug}`}
                    className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>
                      <span className="block text-lg font-semibold text-primary underline-offset-4 group-hover:underline">{t.name}</span>
                      <span className="mt-1 block text-base text-muted-foreground">{t.description}</span>
                    </span>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
