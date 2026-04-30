import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Brain,
  MessageCircle,
  Phone,
  Wifi,
  ShieldAlert,
  Smartphone,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Heart,
} from 'lucide-react';

interface QuestionStarter {
  text: string;
  href: string;
  icon: typeof Wifi;
}

const QUESTION_STARTERS: QuestionStarter[] = [
  { text: "I can't connect to WiFi", href: '/brain?q=I+cant+connect+to+wifi', icon: Wifi },
  { text: 'I think I got scammed', href: '/scam-defense', icon: ShieldAlert },
  { text: 'My phone is running slow', href: '/brain?q=my+phone+is+running+slow', icon: Smartphone },
];

interface PopularQuestion {
  question: string;
  href: string;
  emoji: string;
}

const POPULAR_QUESTIONS: PopularQuestion[] = [
  { question: 'How do I connect to WiFi?', href: '/guide/how-to-connect-to-wifi', emoji: '' },
  { question: 'How do I spot a scam?', href: '/guide/how-to-spot-a-scam', emoji: '' },
  { question: 'How do I create a strong password?', href: '/guide/create-a-strong-password', emoji: '' },
  { question: 'How do I update my iPhone?', href: '/guide/how-to-update-iphone', emoji: '' },
  { question: 'How do I set up two-factor authentication?', href: '/guide/set-up-two-factor-authentication', emoji: '' },
  { question: 'How do I back up my photos?', href: '/guide/how-to-back-up-photos', emoji: '' },
  { question: 'How do I block spam calls?', href: '/guide/how-to-block-spam-calls', emoji: '' },
  { question: 'How do I use AirDrop?', href: '/guide/how-to-use-airdrop', emoji: '' },
];

export default function AskTekSure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <SEOHead
        title="Ask TekSure — Get Plain-English Answers to Any Tech Question | TekSure"
        description="Three simple ways to get tech help. Ask our AI brain, post in the community, or talk to a real person. No jargon. No judgment."
        path="/ask"
      />
      <Navbar />

      <main id="main-content" className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="secondary" className="mb-6 text-base px-4 py-1.5">
            <Sparkles className="w-4 h-4 mr-2" />
            Start here
          </Badge>
          <h1
            className="font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Got a Tech Question?
            <br />
            <span className="text-amber-600 dark:text-amber-400">We've Got Answers.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Three ways to get help. Pick whichever feels easiest.
          </p>
        </section>

        {/* Three Options */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Option 1 */}
            <Card className="border-2 border-amber-200 dark:border-amber-900 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-5xl mb-4"></div>
                <Badge className="w-fit mb-3 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                  Fastest
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Ask the Brain
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 flex-grow leading-relaxed">
                  Type your question. Get instant answers from our library of 1,200+ guides. Free. No sign-up.
                </p>
                <Button asChild size="lg" className="text-lg py-6 bg-amber-600 hover:bg-amber-700 text-white">
                  <Link to="/brain">
                    <Brain className="w-5 h-5 mr-2" />
                    Ask Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Option 2 */}
            <Card className="border-2 border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-5xl mb-4"></div>
                <Badge className="w-fit mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                  Community
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Post in the Community
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 flex-grow leading-relaxed">
                  Post your question. Real people and our team answer. Free. No judgment.
                </p>
                <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-blue-600 text-blue-700 dark:text-blue-300 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950">
                  <Link to="/forum">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Visit Forum
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Option 3 */}
            <Card className="border-2 border-rose-200 dark:border-rose-900 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-5xl mb-4"></div>
                <Badge className="w-fit mb-3 bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
                  One-on-one
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Get Real Help
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 flex-grow leading-relaxed">
                  Talk to a real person. Book a session with a technician. ($15 deposit)
                </p>
                <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-rose-600 text-rose-700 dark:text-rose-300 dark:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950">
                  <Link to="/get-help">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Help
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Question Starters */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-10">
            Try one of these common questions.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {QUESTION_STARTERS.map(({ text, href, icon: Icon }) => (
              <Link key={text} to={href} className="group">
                <Card className="h-full hover:shadow-lg hover:border-amber-400 dark:hover:border-amber-600 transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p className="text-lg font-medium text-slate-800 dark:text-slate-100 flex-grow">
                      "{text}"
                    </p>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Questions */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Popular Questions This Week
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-10">
            The questions other people are asking right now.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POPULAR_QUESTIONS.map(({ question, href, emoji }) => (
              <Link key={question} to={href} className="group">
                <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all border-slate-200 dark:border-slate-700">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-3xl mb-3">{emoji}</div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100 flex-grow leading-snug">
                      {question}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-amber-600 dark:text-amber-400 font-semibold">
                      Read guide
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Still need help */}
        <section className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 border-amber-200 dark:border-amber-900">
            <CardContent className="p-10 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Still need help?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                Take a deep breath. We're here whenever you're ready. No question is too small, and nobody here will make you feel silly for asking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" variant="outline" className="bg-white dark:bg-slate-900">
                  <Link to="/find-a-guide">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Browse all guides
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white dark:bg-slate-900">
                  <Link to="/emergency-help">
                    <ShieldAlert className="w-5 h-5 mr-2" />
                    Emergency help
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
