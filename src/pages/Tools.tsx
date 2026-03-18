import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { KeyRound, Wifi, Wrench } from 'lucide-react';

const tools = [
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback and security tips.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
  },
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get tips for improving slow connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
  },
];

export default function Tools() {
  return (
    <>
      <SEOHead title="Tools | TekSure" description="Free tech tools to check your password strength, test WiFi speed, and more." path="/tools" />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Wrench className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Tools Dashboard</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Free utilities to help you stay safe and connected. No data is stored or sent anywhere.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.path} to={tool.path} className="group">
              <Card className="h-full transition-shadow hover:shadow-lg hover:border-secondary/50">
                <CardHeader>
                  <tool.icon className={`h-10 w-10 mb-3 ${tool.color} transition-transform group-hover:scale-110`} />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
