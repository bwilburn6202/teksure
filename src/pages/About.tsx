import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

const PROMISES = [
  {
    title: 'We will never use jargon without explaining it first.',
    body: 'If we have to use a word like “browser,” “router” or “phishing,” we tell you what it means first.',
  },
  {
    title: 'We will never try to sell you something you do not need.',
    body: 'Our guides are free. We will tell you when the answer is “you do not need that.”',
  },
  {
    title: 'We will always treat you with respect.',
    body: 'You are not “bad at tech.” Tech is bad at explaining itself. We write for smart adults who have not been given a clear explanation yet.',
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About TekSure — Tech Help That Speaks Plain English"
        description="TekSure is free tech help for seniors, caregivers and anyone who finds technology frustrating. No jargon, no ads, no selling your data."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TekSure',
          url: 'https://www.teksure.com',
          logo: 'https://www.teksure.com/og-image.png',
          description: 'Free technology guides and support for everyday people.',
          contactPoint: { '@type': 'ContactPoint', email: 'hello@teksure.com', contactType: 'customer service' },
          foundingDate: '2025',
          founder: { '@type': 'Person', name: 'Bailey Wilburn' },
        }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-10 outline-none">
        <h1 className="text-4xl font-bold">About TekSure</h1>
        <p className="mt-4 text-xl">
          TekSure is a small American company with a simple goal: make technology make sense for
          people who have been quietly feeling left behind. No jargon. No judgment. No selling your data.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why we started</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed">
            <p>
              TekSure started the way a lot of family tech support does: a phone call. A grandparent
              asking how to join a video call. A parent wondering if an email is a scam.
            </p>
            <p>
              Every time, the hardest part was not the tech. It was watching a smart, capable person
              apologize for not knowing something no one had ever explained to them.
            </p>
            <p>
              So we started writing things down, with one rule: if someone who has never used a
              computer cannot read it aloud and follow along, it is not done yet.
            </p>
            <p className="font-semibold">— Bailey Wilburn, founder</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Three promises</h2>
          <ul className="mt-4 space-y-5">
            {PROMISES.map((p) => (
              <li key={p.title}>
                <p className="text-xl font-semibold">{p.title}</p>
                <p className="mt-1 text-lg text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">How we pay for it</h2>
          <p className="mt-4 text-lg leading-relaxed">
            The guides and tools are free, with no ads and no paywall. When you book a session with a
            real person, that fee keeps the lights on. We never sell your data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              Email{' '}
              <a href="mailto:hello@teksure.com" className="text-primary underline underline-offset-4">hello@teksure.com</a>
              . Guide suggestions are welcome.
            </li>
            <li>
              Need help now?{' '}
              <Link to="/get-help" className="text-primary underline underline-offset-4">Talk to a real person</Link>.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
