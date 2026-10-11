import { Link } from 'react-router-dom';
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
        <h1 className="text-4xl font-bold">Tools</h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Free tools that walk you through one job at a time. No sign-up needed.
        </p>

        {TOOL_GROUPS.map((group) => (
          <section key={group.title} className="mt-10" aria-labelledby={`group-${group.title}`}>
            <h2 id={`group-${group.title}`} className="text-2xl font-bold border-b-2 border-border pb-2">
              {group.title}
            </h2>
            <ul className="mt-2 divide-y divide-border">
              {group.tools.map((t) => (
                <li key={t.slug} className="py-3">
                  <Link to={`/tools/${t.slug}`} className="text-lg font-semibold text-primary underline-offset-4 hover:underline">
                    {t.name}
                  </Link>
                  <p className="mt-1 text-base text-muted-foreground">{t.description}</p>
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
