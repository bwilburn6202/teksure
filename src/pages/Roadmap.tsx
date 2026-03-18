import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Clock, CheckCircle2, Lightbulb, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

type Status = 'planned' | 'in-progress' | 'completed' | 'idea';

interface Feature {
  title: string;
  description: string;
  status: Status;
  category: string;
}

const statusConfig: Record<Status, { label: string; icon: typeof Rocket; colorClass: string; badgeClass: string }> = {
  'completed': { label: 'Completed', icon: CheckCircle2, colorClass: 'text-[hsl(var(--teksure-success))]', badgeClass: 'bg-[hsl(var(--teksure-success)/0.15)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]' },
  'in-progress': { label: 'In Progress', icon: Rocket, colorClass: 'text-secondary', badgeClass: 'bg-[hsl(var(--secondary)/0.15)] text-secondary border-[hsl(var(--secondary)/0.3)]' },
  'planned': { label: 'Planned', icon: Clock, colorClass: 'text-[hsl(var(--teksure-info))]', badgeClass: 'bg-[hsl(var(--teksure-info)/0.15)] text-[hsl(var(--teksure-info))] border-[hsl(var(--teksure-info)/0.3)]' },
  'idea': { label: 'Idea', icon: Lightbulb, colorClass: 'text-[hsl(var(--teksure-warning))]', badgeClass: 'bg-[hsl(var(--teksure-warning)/0.15)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]' },
};

const features: Feature[] = [
  // Completed (20)
  { title: 'User Registration & Login', description: 'Create an account and sign in securely.', status: 'completed', category: 'Account' },
  { title: 'Tech Glossary', description: 'Plain-language definitions for 80+ tech terms.', status: 'completed', category: 'Learning' },
  { title: 'Quick Fixes Library', description: 'Step-by-step solutions for common tech problems.', status: 'completed', category: 'Support' },
  { title: 'Device Hub', description: 'Browse devices by category with helpful info.', status: 'completed', category: 'Devices' },
  { title: 'TekBot Chat Assistant', description: 'AI-powered chat helper for instant tech answers.', status: 'completed', category: 'Support' },
  { title: 'How It Works Page', description: 'Clear explanation of TekSure services.', status: 'completed', category: 'Info' },
  { title: 'Search Functionality', description: 'Search across guides, glossary, and quick fixes.', status: 'completed', category: 'Navigation' },
  { title: 'Guides & Tutorials', description: 'In-depth articles on tech topics for seniors.', status: 'completed', category: 'Learning' },
  { title: 'Mobile-Friendly Design', description: 'All pages work great on phones and tablets.', status: 'completed', category: 'Design' },
  { title: 'Customer Dashboard', description: 'View and manage your support requests.', status: 'completed', category: 'Account' },
  { title: 'Tech Dashboard', description: 'Technicians can manage assigned jobs.', status: 'completed', category: 'Technicians' },
  { title: 'Job Room Chat', description: 'Real-time messaging between customer and tech.', status: 'completed', category: 'Support' },
  { title: 'Pricing Page', description: 'Transparent pricing for all service tiers.', status: 'completed', category: 'Info' },
  { title: 'About Page', description: 'Learn about TekSure\'s mission and team.', status: 'completed', category: 'Info' },
  { title: 'Breadcrumb Navigation', description: 'Easy-to-follow page navigation trail.', status: 'completed', category: 'Navigation' },
  { title: 'Senior-Friendly Font Sizes', description: 'Minimum 16px text across the entire site.', status: 'completed', category: 'Design' },
  { title: 'Dark Navy & Teal Theme', description: 'Consistent, calming color palette throughout.', status: 'completed', category: 'Design' },
  { title: 'SEO Optimization', description: 'Search engine friendly pages with proper metadata.', status: 'completed', category: 'Info' },
  { title: 'Admin Console', description: 'Admin panel for managing users and content.', status: 'completed', category: 'Admin' },
  { title: 'Opportunity Dashboard', description: 'View available tech support opportunities.', status: 'completed', category: 'Technicians' },

  // In Progress (15)
  { title: 'TekBot AI Upgrade', description: 'Smarter AI responses using advanced language models.', status: 'in-progress', category: 'Support' },
  { title: 'Video Call Support', description: 'Connect with a technician via video for hands-on help.', status: 'in-progress', category: 'Support' },
  { title: 'Appointment Scheduling', description: 'Book a specific time slot for tech support.', status: 'in-progress', category: 'Support' },
  { title: 'Email Notifications', description: 'Get updates about your support requests via email.', status: 'in-progress', category: 'Account' },
  { title: 'Password Reset Flow', description: 'Easily reset your password if you forget it.', status: 'in-progress', category: 'Account' },
  { title: 'Rating & Reviews', description: 'Rate your technician after a support session.', status: 'in-progress', category: 'Support' },
  { title: 'Profile Customization', description: 'Add a photo and personal details to your profile.', status: 'in-progress', category: 'Account' },
  { title: 'Push Notifications', description: 'Real-time alerts on your phone or browser.', status: 'in-progress', category: 'Account' },
  { title: 'Guided Setup Wizard', description: 'Step-by-step onboarding for new users.', status: 'in-progress', category: 'Account' },
  { title: 'Interactive Tutorials', description: 'Click-along tutorials that guide you through tasks.', status: 'in-progress', category: 'Learning' },
  { title: 'Accessibility Improvements', description: 'Screen reader support and keyboard navigation.', status: 'in-progress', category: 'Design' },
  { title: 'Multi-Language Support', description: 'Use TekSure in Spanish, French, and more.', status: 'in-progress', category: 'Design' },
  { title: 'File Sharing in Chat', description: 'Share screenshots and documents with your tech.', status: 'in-progress', category: 'Support' },
  { title: 'Tech Certification Badges', description: 'Verified badges for certified technicians.', status: 'in-progress', category: 'Technicians' },
  { title: 'Knowledge Base Search', description: 'Search through all help articles in one place.', status: 'in-progress', category: 'Navigation' },

  // Planned (30)
  { title: 'Remote Desktop Access', description: 'Let a tech safely control your screen to fix issues.', status: 'planned', category: 'Support' },
  { title: 'Subscription Management', description: 'Manage your plan, billing, and payment methods.', status: 'planned', category: 'Account' },
  { title: 'Family Account Sharing', description: 'Share your plan with family members.', status: 'planned', category: 'Account' },
  { title: 'Device Health Check', description: 'Automatic scan to find and fix common device issues.', status: 'planned', category: 'Devices' },
  { title: 'Printable Cheat Sheets', description: 'Download and print quick-reference guides.', status: 'planned', category: 'Learning' },
  { title: 'Community Forum', description: 'Ask questions and share tips with other users.', status: 'planned', category: 'Community' },
  { title: 'Scam Alert Center', description: 'Stay informed about the latest tech scams.', status: 'planned', category: 'Safety' },
  { title: 'Password Manager Integration', description: 'Securely store and manage all your passwords.', status: 'planned', category: 'Safety' },
  { title: 'Dark Mode', description: 'A darker color scheme that\'s easier on the eyes at night.', status: 'planned', category: 'Design' },
  { title: 'Favorite Articles', description: 'Save guides and articles for quick access later.', status: 'planned', category: 'Learning' },
  { title: 'Progress Tracking', description: 'Track which guides you\'ve completed.', status: 'planned', category: 'Learning' },
  { title: 'Tech Support History', description: 'View all your past support sessions and solutions.', status: 'planned', category: 'Account' },
  { title: 'Automated Follow-Ups', description: 'Check-in messages after support to make sure things work.', status: 'planned', category: 'Support' },
  { title: 'Voice Commands', description: 'Talk to TekBot instead of typing.', status: 'planned', category: 'Support' },
  { title: 'Smart Home Guides', description: 'Learn to set up and use smart home devices.', status: 'planned', category: 'Learning' },
  { title: 'Photo Backup Tutorial', description: 'Step-by-step guide to backing up your photos.', status: 'planned', category: 'Learning' },
  { title: 'Browser Extension', description: 'Quick access to TekSure help right in your browser.', status: 'planned', category: 'Navigation' },
  { title: 'Referral Program', description: 'Invite friends and earn rewards.', status: 'planned', category: 'Account' },
  { title: 'Seasonal Tech Tips', description: 'Timely advice for holiday shopping, tax season, etc.', status: 'planned', category: 'Learning' },
  { title: 'Device Comparison Tool', description: 'Compare phones, tablets, and computers side by side.', status: 'planned', category: 'Devices' },
  { title: 'Technician Matching', description: 'Get matched with a tech who specializes in your issue.', status: 'planned', category: 'Technicians' },
  { title: 'In-Person Visit Booking', description: 'Schedule a technician to visit your home.', status: 'planned', category: 'Support' },
  { title: 'Loyalty Rewards', description: 'Earn points for using TekSure services.', status: 'planned', category: 'Account' },
  { title: 'Troubleshooting Flowcharts', description: 'Visual step-by-step problem-solving diagrams.', status: 'planned', category: 'Support' },
  { title: 'Newsletter', description: 'Weekly tech tips and updates delivered to your inbox.', status: 'planned', category: 'Community' },
  { title: 'Senior Tech Webinars', description: 'Live online classes on popular tech topics.', status: 'planned', category: 'Learning' },
  { title: 'App for Android', description: 'Download TekSure from the Google Play Store.', status: 'planned', category: 'Devices' },
  { title: 'App for iPhone', description: 'Download TekSure from the Apple App Store.', status: 'planned', category: 'Devices' },
  { title: 'Two-Factor Authentication', description: 'Extra security step when you log in.', status: 'planned', category: 'Safety' },
  { title: 'Data Privacy Dashboard', description: 'See and control what data TekSure stores.', status: 'planned', category: 'Safety' },

  // Ideas (35)
  { title: 'AR Device Repair Guide', description: 'Point your camera at a device to get visual repair steps.', status: 'idea', category: 'Devices' },
  { title: 'Grandkid Connect', description: 'Invite a grandchild to help you remotely.', status: 'idea', category: 'Community' },
  { title: 'Tech Anxiety Score', description: 'Assess your comfort level and get personalized learning paths.', status: 'idea', category: 'Learning' },
  { title: 'Voice-Only Mode', description: 'Use TekSure entirely through voice, no typing needed.', status: 'idea', category: 'Design' },
  { title: 'Local Tech Events', description: 'Find tech classes and workshops near you.', status: 'idea', category: 'Community' },
  { title: 'Device Setup Service', description: 'We set up your new device and transfer your data.', status: 'idea', category: 'Support' },
  { title: 'Medication Reminder App Guide', description: 'Learn to set up medication reminders on your phone.', status: 'idea', category: 'Learning' },
  { title: 'Video Calling Tutorial', description: 'Master FaceTime, Zoom, and Google Meet.', status: 'idea', category: 'Learning' },
  { title: 'Online Banking Safety Guide', description: 'Stay safe when banking online.', status: 'idea', category: 'Safety' },
  { title: 'Social Media Privacy Guide', description: 'Protect your privacy on Facebook, Instagram, etc.', status: 'idea', category: 'Safety' },
  { title: 'Tech Gift Finder', description: 'Find the perfect tech gift for any occasion.', status: 'idea', category: 'Devices' },
  { title: 'Repair vs Replace Calculator', description: 'Should you fix your device or buy a new one?', status: 'idea', category: 'Devices' },
  { title: 'Internet Speed Test', description: 'Check your internet speed right from TekSure.', status: 'idea', category: 'Devices' },
  { title: 'Wi-Fi Coverage Map', description: 'See where your Wi-Fi signal is strong or weak.', status: 'idea', category: 'Devices' },
  { title: 'Tech Buddy Program', description: 'Get paired with a volunteer for ongoing tech help.', status: 'idea', category: 'Community' },
  { title: 'Gamified Learning', description: 'Earn badges and points as you learn new tech skills.', status: 'idea', category: 'Learning' },
  { title: 'Podcast: Tech Made Simple', description: 'Weekly podcast explaining tech in plain language.', status: 'idea', category: 'Learning' },
  { title: 'Smart TV Setup Guide', description: 'Get your streaming services up and running.', status: 'idea', category: 'Devices' },
  { title: 'Email Declutter Tool', description: 'Clean up your inbox with one-click unsubscribe.', status: 'idea', category: 'Support' },
  { title: 'Photo Organizing Tutorial', description: 'Learn to sort and find your photos easily.', status: 'idea', category: 'Learning' },
  { title: 'Accessibility Widget', description: 'Adjust font size, contrast, and spacing site-wide.', status: 'idea', category: 'Design' },
  { title: 'Offline Mode', description: 'Access saved guides even without internet.', status: 'idea', category: 'Navigation' },
  { title: 'Tech Dictionary Widget', description: 'Hover over any tech term on the site for a definition.', status: 'idea', category: 'Learning' },
  { title: 'Caregiver Dashboard', description: 'Let a caregiver monitor and manage support requests.', status: 'idea', category: 'Account' },
  { title: 'Wearable Device Guides', description: 'Set up and use smartwatches and fitness trackers.', status: 'idea', category: 'Devices' },
  { title: 'VPN Setup Guide', description: 'Protect your privacy with a VPN, explained simply.', status: 'idea', category: 'Safety' },
  { title: 'Automated Backups', description: 'Set up automatic backups so you never lose files.', status: 'idea', category: 'Safety' },
  { title: 'Tech Support Gift Cards', description: 'Buy TekSure support as a gift for loved ones.', status: 'idea', category: 'Account' },
  { title: 'Senior Discount Program', description: 'Special pricing for seniors on fixed incomes.', status: 'idea', category: 'Account' },
  { title: 'Community Champions', description: 'Recognize helpful community members with badges.', status: 'idea', category: 'Community' },
  { title: 'Device Recycling Info', description: 'Learn how to safely recycle old electronics.', status: 'idea', category: 'Devices' },
  { title: 'Parental Controls Guide', description: 'Set up safety features for grandchildren\'s devices.', status: 'idea', category: 'Safety' },
  { title: 'Custom Notification Sounds', description: 'Choose friendly sounds for TekSure alerts.', status: 'idea', category: 'Design' },
  { title: 'Annual Tech Review', description: 'Yearly summary of your tech learning journey.', status: 'idea', category: 'Account' },
  { title: 'Integration with Smart Assistants', description: 'Ask Alexa or Google for TekSure help.', status: 'idea', category: 'Support' },
];

const categories = [...new Set(features.map(f => f.category))].sort();

export default function Roadmap() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    return features.filter(f => {
      const matchesSearch = !search || f.title.toLowerCase().includes(search.toLowerCase()) || f.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const counts: Record<Status, number> = {
    completed: filtered.filter(f => f.status === 'completed').length,
    'in-progress': filtered.filter(f => f.status === 'in-progress').length,
    planned: filtered.filter(f => f.status === 'planned').length,
    idea: filtered.filter(f => f.status === 'idea').length,
  };

  return (
    <>
      <SEOHead
        title="TekSure Roadmap – See What's Coming Next"
        description="Explore 100 feature ideas we're building to help seniors master technology. See completed, in-progress, planned, and idea features."
        path="/roadmap"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem><BreadcrumbPage className="text-primary-foreground">Roadmap</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">TekSure Roadmap</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                See what we're building next to help you master technology
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl py-8 md:py-12">
          {/* Status summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {(Object.keys(statusConfig) as Status[]).map(status => {
              const cfg = statusConfig[status];
              const Icon = cfg.icon;
              return (
                <Card key={status} className="border-border">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${cfg.colorClass} shrink-0`} />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{counts[status]}</p>
                      <p className="text-sm text-muted-foreground">{cfg.label}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Search & filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search features…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 text-base"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', ...categories].map(cat => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  className="cursor-pointer text-sm px-3 py-1"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tabbed feature lists */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start mb-6 flex-wrap h-auto gap-1 bg-muted/50 p-1">
              <TabsTrigger value="all" className="text-base">All ({filtered.length})</TabsTrigger>
              {(Object.keys(statusConfig) as Status[]).map(status => (
                <TabsTrigger key={status} value={status} className="text-base">
                  {statusConfig[status].label} ({counts[status]})
                </TabsTrigger>
              ))}
            </TabsList>

            {['all', ...Object.keys(statusConfig)].map(tab => (
              <TabsContent key={tab} value={tab}>
                <div className="grid gap-3">
                  {filtered
                    .filter(f => tab === 'all' || f.status === tab)
                    .map((feature, i) => {
                      const cfg = statusConfig[feature.status];
                      const Icon = cfg.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.5) }}
                        >
                          <Card className="border-border hover:shadow-md transition-shadow">
                            <CardContent className="p-4 flex items-start gap-3">
                              <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${cfg.colorClass}`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <h3 className="font-semibold text-foreground text-base">{feature.title}</h3>
                                  <Badge variant="outline" className={`text-xs border ${cfg.badgeClass}`}>
                                    {cfg.label}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {feature.category}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground text-base">{feature.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}
