import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const features = [
  { icon: Zap, title: 'Fast Matching', desc: 'Get matched with a qualified tech in minutes, not hours.' },
  { icon: Shield, title: 'Verified Techs', desc: 'Every technician goes through ID and background verification.' },
  { icon: Star, title: 'Transparent Pricing', desc: 'See rates upfront. Pay securely. No hidden fees.' },
];

const steps = [
  { step: '1', title: 'Describe Your Issue', desc: "WiFi issues, slow PC, printer problems — tell us what's wrong." },
  { step: '2', title: 'Get Matched', desc: 'We match you with verified techs based on skill, location, and availability.' },
  { step: '3', title: 'Get It Fixed', desc: 'Your tech resolves the issue remotely or in-person. Pay when done.' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Tech Support,<br />On Your Terms
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Connect with verified technicians for remote or in-person help. Fast, secure, and transparent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/signup">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-hero-outline">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why TekSure?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <f.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Join thousands of customers and technicians on TekSure.
        </p>
        <Button asChild size="lg">
          <Link to="/signup">Create Your Account <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
