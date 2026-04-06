import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle, BookOpen, 
  Lightbulb, Target, ChevronRight, Zap, Clock,
  GraduationCap, Users, Heart, Monitor, Smartphone,
  Mail, Camera, Video, Shield, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, type Guide } from '@/data/guides';

interface DreamGoal {
  id: string;
  icon: typeof Heart;
  label: string;
  description: string;
  keywords: string[];
  category: string;
}

const dreamGoals: DreamGoal[] = [
  { id: 'video-call', icon: Video, label: 'Video call family', description: 'Use Zoom, FaceTime, or WhatsApp to see loved ones', keywords: ['video call', 'zoom', 'faceTime', 'skype', 'grandkids', 'family'], category: 'connect' },
  { id: 'share-photos', icon: Camera, label: 'Share photos', description: 'Send pictures to family and friends', keywords: ['photos', 'share', 'iphone', 'android', 'icloud', 'google photos'], category: 'connect' },
  { id: 'send-email', icon: Mail, label: 'Send emails', description: 'Write and send emails to loved ones', keywords: ['email', 'gmail', 'outlook', 'attach', 'send'], category: 'basics' },
  { id: 'shop-online', icon: ShoppingCart, label: 'Shop online', description: 'Buy gifts and essentials safely online', keywords: ['shop', 'amazon', 'buy', 'pay', 'cart', 'online'], category: 'practical' },
  { id: 'stay-safe', icon: Shield, label: 'Stay safe online', description: 'Protect yourself from scams and fraud', keywords: ['scam', 'phishing', 'password', 'safe', 'security'], category: 'safety' },
  { id: 'use-phone', icon: Smartphone, label: 'Use smartphone', description: 'Navigate your phone with confidence', keywords: ['phone', 'iphone', 'android', 'apps', 'settings'], category: 'basics' },
  { id: 'use-computer', icon: Monitor, label: 'Use computer', description: 'Basic computer skills for everyday tasks', keywords: ['computer', 'laptop', 'windows', 'mac', 'mouse', 'keyboard'], category: 'basics' },
  { id: 'learn-tech', icon: GraduationCap, label: 'Build confidence', description: 'Feel comfortable with technology', keywords: ['learn', 'beginner', 'start', 'confident', 'understand'], category: 'mindset' },
];

const goalToGuides: Record<string, string[]> = {
  'video-call': ['video-call-grandkids', 'install-zoom-computer', 'faceTime-iphone-setup', 'whatsapp-video-call'],
  'share-photos': ['share-photos-iphone', 'google-photos-sharing', 'send-pictures-email', 'airdrop-iphone-mac'],
  'send-email': ['send-email-gmail', 'send-email-outlook', 'attach-file-email', 'reply-email'],
  'shop-online': ['shop-amazon-safely', 'online-shopping-tips', 'secure-payment-online', 'avoid-online-scams'],
  'stay-safe': ['avoid-phishing-scams', 'create-strong-password', 'spam-call-protection', 'online-privacy-basics'],
  'use-phone': ['iphone-basics-beginners', 'android-basics-beginners', 'download-apps-iphone', 'phone-settings-basics'],
  'use-computer': ['computer-basics-windows', 'computer-basics-mac', 'using-mouse-keyboard', 'folders-files-basics'],
  'learn-tech': ['tech-terminology-explained', 'how-internet-works', 'understanding-cloud', 'digital-confidence-course'],
};

function DreamCard({ goal, selected, onClick }: { goal: DreamGoal; selected: boolean; onClick: () => void }) {
  const Icon = goal.icon;
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-4 rounded-2xl border transition-all duration-300 hover-lift ${
        selected 
          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
          : 'border-border/60 bg-card hover:border-primary/30 hover:shadow-md'
      }`}
    >
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${
        selected ? 'bg-primary/10' : 'bg-muted'
      }`}>
        <Icon className={`h-5 w-5 ${selected ? 'text-primary' : 'text-muted-foreground'}`} />
      </div>
      <h3 className={`font-semibold mb-1 ${selected ? 'text-primary' : ''}`}>{goal.label}</h3>
      <p className="text-sm text-muted-foreground">{goal.description}</p>
    </button>
  );
}

function GuideJourney({ guides: journeyGuides }: { guides: Guide[] }) {
  return (
    <div className="space-y-4">
      {journeyGuides.map((guide, index) => (
        <Link 
          key={guide.slug} 
          to={`/guides/${guide.slug}`}
          className="block group"
        >
          <div className="flex items-start gap-4 p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all hover-lift">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-1">{guide.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{guide.excerpt}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">{guide.readTime}</Badge>
                {guide.difficulty && (
                  <Badge variant="outline" className="text-xs">{guide.difficulty}</Badge>
                )}
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      ))}
    </div>
  );
}

function DreamResult({ 
  goal, 
  matchedGuides, 
  onReset 
}: { 
  goal: DreamGoal; 
  matchedGuides: Guide[]; 
  onReset: () => void;
}) {
  const totalTime = matchedGuides.reduce((acc, g) => {
    const mins = parseInt(g.readTime) || 5;
    return acc + mins;
  }, 0);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your {goal.label} Journey</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We found {matchedGuides.length} guides to help you achieve this goal. 
          Estimated time: {totalTime} minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">What you'll learn</h3>
          </div>
          <ul className="space-y-3">
            {matchedGuides.slice(0, 3).map((guide, i) => (
              <li key={guide.slug} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-teksure-success mt-0.5 shrink-0" />
                <span>{guide.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Quick overview</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Guides to complete</span>
              <span className="font-medium">{matchedGuides.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Est. total time</span>
              <span className="font-medium">{totalTime} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Difficulty</span>
              <span className="font-medium">Beginner-friendly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Your personalized learning path
        </h3>
        <GuideJourney guides={matchedGuides} />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg" className="gap-2 rounded-xl">
          <Link to="/guides">
            Start Learning <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={onReset} className="gap-2 rounded-xl">
          Try Another Goal
        </Button>
      </div>
    </div>
  );
}

const TechDreamBuilder = () => {
  const [step, setStep] = useState<'select' | 'result'>('select');
  const [selectedGoal, setSelectedGoal] = useState<DreamGoal | null>(null);
  const [customInput, setCustomInput] = useState('');

  const matchedGuides = useMemo(() => {
    if (!selectedGoal) return [];
    
    const guideSlugs = goalToGuides[selectedGoal.id] || [];
    return guideSlugs
      .map(slug => guides.find(g => g.slug === slug))
      .filter((g): g is Guide => g !== undefined);
  }, [selectedGoal]);

  const handleGoalSelect = (goal: DreamGoal) => {
    setSelectedGoal(goal);
    setStep('result');
  };

  const handleCustomSearch = () => {
    if (!customInput.trim()) return;
    const matched = dreamGoals.find(g => 
      g.keywords.some(k => customInput.toLowerCase().includes(k)) ||
      g.label.toLowerCase().includes(customInput.toLowerCase())
    );
    if (matched) {
      setSelectedGoal(matched);
      setStep('result');
    }
  };

  const handleReset = () => {
    setStep('select');
    setSelectedGoal(null);
    setCustomInput('');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tech Dream Builder — Build Your Personal Tech Journey | TekSure"
        description="Tell us what you want to do with technology — we'll build a personalized learning path just for you. No jargon, just clear steps."
        path="/dream-builder"
      />
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {step === 'select' ? (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 display-heading">
                What do you want to do?
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Pick a goal — or tell us in your own words. We'll create a 
                personalized journey to get you there.
              </p>
            </div>

            {/* Custom input */}
            <div className="mb-10">
              <div className="flex gap-2 max-w-md mx-auto">
                <Input 
                  placeholder='Describe your goal (e.g., "call my grandkids")'
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCustomSearch()}
                  className="h-12 rounded-xl"
                />
                <Button onClick={handleCustomSearch} className="h-12 px-6 rounded-xl">
                  <Zap className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Goal cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dreamGoals.map((goal) => (
                <DreamCard 
                  key={goal.id} 
                  goal={goal} 
                  selected={selectedGoal?.id === goal.id}
                  onClick={() => handleGoalSelect(goal)}
                />
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              <Lightbulb className="h-4 w-4 inline mr-1" />
              Can't find your goal? <Link to="/get-help" className="text-primary hover:underline">Talk to a real person</Link>
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {selectedGoal && (
              <DreamResult 
                goal={selectedGoal} 
                matchedGuides={matchedGuides}
                onReset={handleReset}
              />
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TechDreamBuilder;