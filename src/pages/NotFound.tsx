import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

/**
 * 404. Many visitors land here from a guide or tool page retired in the
 * 2026-10-11 revamp, so offer a search built from the old address's words.
 */
export default function NotFound() {
  const { pathname } = useLocation();
  const words = (pathname.split('/').pop() || '').replace(/-/g, ' ').replace(/\b(guide|for|seniors|v\d+|\d{4})\b/g, '').trim();
  const retired = /^\/(guides|tools)\//.test(pathname);

  return (
    <>
      <SEOHead title="Page Not Found | TekSure" description="This page is not on TekSure any more." noindex />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-12 min-h-[50vh] outline-none">
        <h1 className="text-4xl font-bold">We could not find that page</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {retired
            ? 'We trimmed TekSure down to our most useful guides and tools, and this one was removed.'
            : 'The address may be mistyped, or the page has moved.'}
        </p>
        <ul className="mt-8 space-y-3 text-xl">
          {words && (
            <li>
              <Link to={`/search?q=${encodeURIComponent(words)}`} className="font-semibold text-primary underline underline-offset-4">
                Search for “{words}”
              </Link>
            </li>
          )}
          <li><Link to="/guides" className="text-primary underline underline-offset-4">Browse all guides</Link></li>
          <li><Link to="/get-help" className="text-primary underline underline-offset-4">Ask a real person for help</Link></li>
          <li><Link to="/" className="text-primary underline underline-offset-4">Go to the home page</Link></li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
