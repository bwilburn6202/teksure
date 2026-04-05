import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

const Accessibility = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="Accessibility — TekSure"
      description="Learn about TekSure's commitment to accessibility. We design our guides, tools, and support for everyone — including seniors and people with disabilities."
      path="/accessibility"
    />
    <Navbar />

    <main id="main-content" className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Accessibility Commitment
            </h1>
            <p className="text-lg text-muted-foreground">
              TekSure is built for everyone. We believe that technology help should be available and
              usable by all people, regardless of ability or experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16">
        <div className="max-w-2xl mx-auto space-y-12">

          {/* Commitment */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">What We're Working Toward</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to meet the{' '}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </a>{' '}
              standard. WCAG is a widely recognized set of recommendations for making websites
              usable by people with disabilities — including those who use screen readers, keyboard
              navigation, or other assistive tools.
            </p>
          </div>

          {/* What we do */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Accessibility is part of how we design and write every page. Here are some of the
              things we do to make TekSure usable for as many people as possible:
            </p>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Large, readable text</strong> — Our content uses larger font sizes and generous spacing so it's comfortable to read, even on smaller screens.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>High contrast colors</strong> — We choose color combinations that are clear and distinguishable, including a high-contrast mode you can turn on.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Plain language</strong> — Every guide, tool, and page is written in everyday English. When we use a technical term, we explain what it means right away.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Keyboard navigation</strong> — You can use TekSure with a keyboard alone. All interactive elements (buttons, links, menus) can be reached by pressing the Tab key.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Screen reader support</strong> — We add descriptive labels and structure to our pages so screen readers (tools that read a website out loud) can present our content clearly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Mobile-friendly design</strong> — TekSure works well on phones, tablets, laptops, and desktop computers. Content adjusts to fit your screen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                <span><strong>Skip navigation link</strong> — A "Skip to main content" link appears when you press Tab, letting keyboard users jump past the menu to the page content.</span>
              </li>
            </ul>
          </div>

          {/* Known limitations */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Known Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're always improving. While we work hard to make every part of TekSure accessible,
              some areas may not yet fully meet our goals. For example, some older guides may not
              have complete heading structures, and certain interactive tools may need further
              testing with all assistive technologies. We review and update our site regularly, and
              accessibility improvements are an ongoing priority.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Need Help? We're Here for You</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you run into any part of TekSure that's hard to use because of an accessibility
              barrier, we want to know. Your feedback helps us make the site better for everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can reach us through our{' '}
              <Link to="/get-help" className="text-primary underline hover:opacity-80">
                Get Help page
              </Link>
              , or send an email to{' '}
              <a
                href="mailto:hello@teksure.com"
                className="text-primary underline hover:opacity-80"
              >
                hello@teksure.com
              </a>
              . Please describe what you were trying to do and what made it difficult, and we'll do
              our best to help and to fix the issue.
            </p>
          </div>

          {/* Third-party content */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Third-Party Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some of our guides link to external websites and videos (for example, YouTube tutorials
              or official support pages from companies like Apple, Google, and Microsoft). We choose
              these resources carefully, but we cannot guarantee that third-party sites meet the same
              accessibility standards we follow. If you have trouble accessing a linked resource,
              please let us know and we'll try to find an alternative.
            </p>
          </div>

        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Accessibility;
