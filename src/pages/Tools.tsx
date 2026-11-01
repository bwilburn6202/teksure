import { Link } from 'react-router-dom';
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
          eyebrow={`${TOOL_COUNT} free tools · no sign-up`}
          title="Tools"
          description="Each tool walks you through one job, one step at a time."
        />

        <div className="mx-auto max-w-5xl px-4">
          {TOOL_GROUPS.map((group, gi) => (
            <section key={group.title} className="mt-12" aria-labelledby={`group-${gi}`}>
              <h2 id={`group-${gi}`} className="border-b-2 border-foreground pb-2 font-display text-2xl font-bold">
                {group.title}
              </h2>
              <ul className="divide-y divide-border">
                {group.tools.map((t) => (
                  <li key={t.slug} className="py-3">
                    <Link to={`/tools/${t.slug}`} className="text-xl font-bold text-primary underline-offset-4 hover:underline">
                      {t.name}
                    </Link>
                    <p className="mt-1 text-lg text-muted-foreground">{t.description}</p>
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
