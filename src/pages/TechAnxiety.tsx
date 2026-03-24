import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Users, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const tips = [
  { emoji: '🐢', title: 'Go at your own pace', body: 'There is no schedule, no exam, no one judging you. Technology is a skill — it takes practice, just like driving or cooking. Everyone learns differently, and slower is fine.' },
  { emoji: '✅', title: 'Start with one thing', body: 'Don\'t try to learn everything at once. Pick one small task — checking email, or making a video call — and do only that until it feels comfortable. Then move on.' },
  { emoji: '🔄', title: 'It\'s OK to make mistakes', body: 'Pressing the wrong button rarely causes permanent damage. Modern devices are designed to be forgiving. You can almost always undo, go back, or restart.' },
  { emoji: '🤝', title: 'Ask for help without embarrassment', body: 'Every single person who is good at technology was once a complete beginner. Asking for help is a sign of intelligence, not weakness.' },
  { emoji: '📝', title: 'Write things down', body: 'Keep a small notebook of things you learn — passwords (in a safe place), steps for tasks you do regularly, useful phone numbers. This removes the pressure of remembering everything.' },
  { emoji: '🧘', title: 'Take breaks', body: 'If frustration builds, step away for 10 minutes. Come back fresh. Trying to force your way through when stressed rarely works and makes the anxiety worse.' },
];

const resources = [
  { icon: BookOpen, title: 'Beginner Basics Learning Path', desc: 'Start from absolute zero — we\'ll walk you through everything step by step.', href: '/my-path', cta: 'Start here' },
  { icon: Users, title: 'Community Forum', desc: 'A friendly community of people at every level. Ask any question — no judgement.', href: '/forum', cta: 'Join the community' },
  { icon: MessageCircle, title: 'TekBot Assistant', desc: 'Type any question in plain English and get a simple, patient answer instantly.', href: '/', cta: 'Ask TekBot' },
  { icon: Phone, title: 'Book Human Help', desc: 'Sometimes you just need a real person. Book a one-to-one session with a TekSure technician.', href: '/book', cta: 'Book support' },
];

const quotes = [
  { text: '"I was so scared of breaking something. Now I video call my grandchildren every day."', name: 'Margaret, 74' },
  { text: '"The guides are so patient. I read the same one three times until it clicked."', name: 'Derek, 68' },
  { text: '"Nobody laughed at my questions. That made all the difference."', name: 'Patricia, 71' },
];

export default function TechAnxiety() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-pink-50 to-background border-b border-border py-16">
          <div className="container max-w-2xl text-center">
            <div className="text-5xl mb-4">💙</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Feeling Overwhelmed by Technology?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You are not alone. Millions of people feel anxious, frustrated, or left behind by technology. This page is for you — gentle, honest support with no jargon and no judgement.
            </p>
          </div>
        </div>

        <div className="container max-w-4xl py-12">
          {/* Reassurance section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">First of all: this is completely normal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">Technology changes faster than any other part of modern life. Feeling behind isn\'t a personal failing — it\'s a natural response to an unrealistic rate of change. The fact that you\'re here, trying, is what matters.</p>
          </div>

          {/* Tips grid */}
          <h2 className="text-xl font-bold mb-6 text-center">Tips for managing tech anxiety</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {tips.map((tip, i) => (
              <motion.div key={tip.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                <Card className="h-full">
                  <CardContent className="pt-5 pb-5">
                    <span className="text-3xl block mb-3">{tip.emoji}</span>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quotes */}
          <div className="bg-muted rounded-2xl p-8 mb-14">
            <h2 className="text-xl font-bold text-center mb-6">What others have said</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quotes.map(q => (
                <div key={q.name} className="bg-background rounded-xl p-5 border border-border">
                  <Heart className="h-4 w-4 text-pink-400 mb-3" />
                  <p className="text-sm italic mb-3 text-muted-foreground leading-relaxed">{q.text}</p>
                  <p className="text-sm font-medium">— {q.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <h2 className="text-xl font-bold text-center mb-6">Where to go from here</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {resources.map(r => (
              <Card key={r.title} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-5 pb-4 flex items-start gap-4">
                  <div className="rounded-lg bg-secondary/10 p-2.5 shrink-0">
                    <r.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                    <Button asChild variant="ghost" size="sm" className="h-7 px-0 gap-1 text-secondary hover:text-secondary hover:bg-transparent">
                      <Link to={r.href}>{r.cta} <ArrowRight className="h-3.5 w-3.5" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/5 rounded-2xl p-8">
            <p className="text-lg font-semibold mb-2">You can do this.</p>
            <p className="text-muted-foreground mb-5">Thousands of people have learned to use technology with TekSure\'s help. Every guide is written for real people — not tech experts.</p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
              <Link to="/my-path"><BookOpen className="h-4 w-4" /> Start My Learning Path</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
