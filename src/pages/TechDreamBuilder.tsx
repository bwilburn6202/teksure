import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle, BookOpen, 
  Lightbulb, Target, ChevronRight, Zap, Clock,
  GraduationCap, Users, Heart, Monitor, Smartphone,
  Mail, Camera, Video, Shield, ShoppingCart,
  MapPin, Trophy, Star, Flame, Calendar, Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, type Guide } from '@/data/guides';
import { isGuideCompleted, getCompletedGuides, getProgressCount } from '@/lib/progress';

interface DreamGoal {
  id: string;
  icon: typeof Heart;
  label: string;
  description: string;
  keywords: string[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const dreamGoals: DreamGoal[] = [
  { id: 'video-call', icon: Video, label: 'Video call family', description: 'Use Zoom, FaceTime, or WhatsApp to see loved ones', keywords: ['video call', 'zoom', 'facetime', 'skype', 'grandkids', 'family', 'face to face'], category: 'connect', difficulty: 'beginner' },
  { id: 'share-photos', icon: Camera, label: 'Share photos', description: 'Send pictures to family and friends', keywords: ['photos', 'share', 'pictures', 'icloud', 'google photos', 'send images'], category: 'connect', difficulty: 'beginner' },
  { id: 'send-email', icon: Mail, label: 'Send emails', description: 'Write and send emails to loved ones', keywords: ['email', 'gmail', 'outlook', 'attach', 'send', 'message'], category: 'basics', difficulty: 'beginner' },
  { id: 'shop-online', icon: ShoppingCart, label: 'Shop online safely', description: 'Buy gifts and essentials safely online', keywords: ['shop', 'amazon', 'buy', 'pay', 'cart', 'online', 'purchase'], category: 'practical', difficulty: 'beginner' },
  { id: 'stay-safe', icon: Shield, label: 'Stay safe online', description: 'Protect yourself from scams and fraud', keywords: ['scam', 'phishing', 'password', 'safe', 'security', 'fraud'], category: 'safety', difficulty: 'beginner' },
  { id: 'use-phone', icon: Smartphone, label: 'Use smartphone basics', description: 'Navigate your phone with confidence', keywords: ['phone', 'iphone', 'android', 'apps', 'settings', 'touchscreen'], category: 'basics', difficulty: 'beginner' },
  { id: 'use-computer', icon: Monitor, label: 'Use computer', description: 'Basic computer skills for everyday tasks', keywords: ['computer', 'laptop', 'windows', 'mac', 'mouse', 'keyboard', 'desktop'], category: 'basics', difficulty: 'beginner' },
  { id: 'learn-tech', icon: GraduationCap, label: 'Build confidence', description: 'Feel comfortable with technology', keywords: ['learn', 'beginner', 'start', 'confident', 'understand', 'basics'], category: 'mindset', difficulty: 'beginner' },
  { id: 'telehealth', icon: Heart, label: 'Doctor video visit', description: 'Have a medical appointment from home', keywords: ['doctor', 'telehealth', 'medical', 'health', 'appointment', 'virtual'], category: 'health', difficulty: 'beginner' },
  { id: 'streaming', icon: Video, label: 'Watch streaming TV', description: 'Netflix, YouTube, and other streaming services', keywords: ['netflix', 'youtube', 'streaming', 'tv', 'movies', 'hulu', 'disney'], category: 'entertainment', difficulty: 'beginner' },
  { id: 'social-media', icon: Users, label: 'Social media basics', description: 'Stay connected on Facebook, Instagram, or TikTok', keywords: ['facebook', 'instagram', 'tiktok', 'social', 'post', 'share'], category: 'connect', difficulty: 'beginner' },
  { id: 'smart-home', icon: Shield, label: 'Smart home devices', description: 'Set up smart speakers, thermostats, and cameras', keywords: ['smart', 'alexa', 'google home', 'nest', 'echo', 'automation'], category: 'devices', difficulty: 'intermediate' },
];

const goalToGuides: Record<string, string[]> = {
  'video-call': ['how-to-video-call-grandkids', 'facetime-guide', 'zoom-complete-guide-v2', 'whatsapp-complete-guide'],
  'share-photos': ['share-photos-iphone', 'google-photos-sharing', 'send-pictures-email'],
  'send-email': ['send-email-gmail', 'send-email-outlook', 'attach-file-email'],
  'shop-online': ['shop-amazon-safely', 'online-shopping-tips', 'secure-payment-online'],
  'stay-safe': ['avoid-phishing-scams', 'create-strong-password', 'spam-call-protection'],
  'use-phone': ['iphone-facetime-call', 'iphone-basics-beginners', 'android-basics-beginners'],
  'use-computer': ['chromebook-getting-started', 'computer-basics-windows', 'computer-basics-mac'],
  'learn-tech': ['tech-terminology-explained', 'how-internet-works', 'digital-confidence-course'],
  'telehealth': ['telehealth-guide-v2', 'telehealth-appointments'],
  'streaming': ['youtube-tips-guide', 'youtube-watch-videos', 'netflix-basics'],
  'social-media': ['social-media-for-grandparents', 'facebook-messenger', 'tiktok-beginners-guide'],
  'smart-home': ['set-up-amazon-echo', 'google-nest-setup', 'smart-home-security'],
};

function DreamCard({ goal, selected, completedCount, totalCount, onClick }: { goal: DreamGoal; selected: boolean; completedCount?: number; totalCount?: number; onClick: () => void }) {
  const Icon = goal.icon;
  const progress = totalCount ? (completedCount || 0) / totalCount : 0;
  
  return (
    <button
      onClick={() => {}}
      className={`text-left w-full p-4 rounded-2xl border transition-all duration-300 hover-lift relative overflow-hidden ${
        selected 
          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
          : 'border-border/60 bg-card hover:border-primary/30 hover:shadow-md'
      }`}
    >
      {progress > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
          <div 
            className="h-full bg-teksure-success transition-all" 
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${
        selected ? 'bg-primary/10' : 'bg-muted'
      }`}>
        <Icon className={`h-5 w-5 ${selected ? 'text-primary' : 'text-muted-foreground'}`} />
      </div>
      <h3 className={`font-semibold mb-1 ${selected ? 'text-primary' : ''}`}>{goal.label}</h3>
      <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs">{goal.difficulty}</Badge>
        {completedCount !== undefined && totalCount && totalCount > 0 && (
          <span className="text-xs text-teksure-success flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> {completedCount}/{totalCount} done
          </span>
        )}
      </div>
    </button>
  );
}

function GuideJourney({ guides: journeyGuides, goalSlug }: { guides: Guide[]; goalSlug: string }) {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompletedSlugs(getCompletedGuides());
    const handleUpdate = () => setCompletedSlugs(getCompletedGuides());
    window.addEventListener('teksure-progress-update', handleUpdate);
    return () => window.removeEventListener('teksure-progress-update', handleUpdate);
  }, []);

  const progress = journeyGuides.filter(g => completedSlugs.has(g.slug)).length;
  const total = journeyGuides.length;
  const pct = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Your progress</span>
        <span className="text-sm font-medium">{progress} of {total} complete</span>
      </div>
      <Progress value={pct} className="h-2 mb-6" />
      
      <div className="space-y-3">
        {journeyGuides.map((guide, index) => {
          const isCompleted = completedSlugs.has(guide.slug);
          return (
            <Link 
              key={guide.slug} 
              to={`/guides/${guide.slug}`}
              className="block group"
            >
              <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-all hover-lift ${
                isCompleted 
                  ? 'border-teksure-success/30 bg-teksure-success/5' 
                  : 'border-border/60 bg-card hover:border-primary/30'
              }`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                  isCompleted 
                    ? 'bg-teksure-success text-white' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {isCompleted ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium line-clamp-1 ${isCompleted ? 'text-muted-foreground line-through' : 'group-hover:text-primary'}`}>
                    {guide.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{guide.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">{guide.readTime}</Badge>
                    {isCompleted && (
                      <Badge variant="outline" className="text-xs border-teksure-success text-teksure-success">Completed</Badge>
                    )}
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 transition-all ${isCompleted ? 'text-teksure-success' : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'}`} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function DreamResult({ 
  goal, 
  matchedGuides, 
  onReset,
  onExplore 
}: { 
  goal: DreamGoal; 
  matchedGuides: Guide[]; 
  onReset: () => void;
  onExplore: () => void;
}) {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());

  useEffect(() => {
    setCompletedSlugs(getCompletedGuides());
    const handleUpdate = () => setCompletedSlugs(getCompletedGuides());
    window.addEventListener('teksure-progress-update', handleUpdate);
    return () => window.removeEventListener('teksure-progress-update', handleUpdate);
  }, []);

  const totalTime = matchedGuides.reduce((acc, g) => {
    const mins = parseInt(g.readTime) || 5;
    return acc + mins;
  }, 0);

  const progress = matchedGuides.filter(g => completedSlugs.has(g.slug)).length;
  const pct = matchedGuides.length > 0 ? Math.round((progress / matchedGuides.length) * 100) : 0;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your {goal.label} Journey</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          {pct === 100 
            ? " Amazing! You've completed this journey!" 
            : `We've found ${matchedGuides.length} guides to help you achieve this goal.`
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Journey Progress</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Guides completed</span>
              <span className="font-medium">{progress} / {matchedGuides.length}</span>
            </div>
            <Progress value={pct} className="h-3" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Est. total time</span>
              <span className="font-medium">{totalTime} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Difficulty</span>
              <Badge variant="outline">{goal.difficulty}</Badge>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h3 className="font-semibold">Your Goals</h3>
          </div>
          <div className="space-y-2">
            {matchedGuides.slice(0, 4).map((guide, i) => (
              <div key={guide.slug} className="flex items-center gap-2 text-sm">
                {completedSlugs.has(guide.slug) ? (
                  <CheckCircle className="h-4 w-4 text-teksure-success" />
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={completedSlugs.has(guide.slug) ? 'text-muted-foreground line-through' : ''}>
                  {guide.title}
                </span>
              </div>
            ))}
            {matchedGuides.length > 4 && (
              <p className="text-sm text-muted-foreground">+{matchedGuides.length - 4} more guides</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Your personalized learning path
        </h3>
        <GuideJourney guides={matchedGuides} goalSlug={goal.id} />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg" className="gap-2 rounded-xl">
          <Link to={`/guides?goal=${goal.id}`}>
            Continue Learning <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={onReset} className="gap-2 rounded-xl">
          Try Another Goal
        </Button>
      </div>
    </div>
  );
}

function MyJourneys() {
  const [journeys, setJourneys] = useState<{goalId: string; completed: number; total: number}[]>([]);

  useEffect(() => {
    const completed = getCompletedGuides();
    const journeyProgress = dreamGoals.map(goal => {
      const guideIds = goalToGuides[goal.id] || [];
      const completedCount = guideIds.filter(id => completed.has(id)).length;
      return { goalId: goal.id, completed: completedCount, total: guideIds.length };
    }).filter(j => j.total > 0 && j.completed > 0);
    
    setJourneys(journeyProgress.sort((a, b) => b.completed / b.total - a.completed / a.total));
  }, []);

  if (journeys.length === 0) return null;

  return (
    <div className="glass-card p-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Flame className="h-5 w-5 text-orange-500" />
        Your Active Journeys
      </h3>
      <div className="space-y-3">
        {journeys.slice(0, 3).map(j => {
          const goal = dreamGoals.find(g => g.id === j.goalId);
          if (!goal) return null;
          const pct = Math.round((j.completed / j.total) * 100);
          const Icon = goal.icon;
          return (
            <Link key={j.goalId} to={`/dream-builder?goal=${j.goalId}`} className="block">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{goal.label}</p>
                  <Progress value={pct} className="h-1 mt-1" />
                </div>
                <span className="text-sm text-muted-foreground">{pct}%</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const TechDreamBuilder = () => {
  const [step, setStep] = useState<'select' | 'result'>('select');
  const [selectedGoal, setSelectedGoal] = useState<DreamGoal | null>(null);
  const [customInput, setCustomInput] = useState('');
  const [activeTab, setActiveTab] = useState('goals');

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

  const getGoalProgress = (goalId: string) => {
    const completed = getCompletedGuides();
    const guideIds = goalToGuides[goalId] || [];
    const completedCount = guideIds.filter(id => completed.has(id)).length;
    return { completed: completedCount, total: guideIds.length };
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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
            <TabsTrigger value="goals" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="h-4 w-4 mr-2" /> Discover Goals
            </TabsTrigger>
            <TabsTrigger value="myjourneys" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MapPin className="h-4 w-4 mr-2" /> My Journeys
            </TabsTrigger>
          </TabsList>

          <TabsContent value="goals">
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dreamGoals.map((goal) => {
                    const progress = getGoalProgress(goal.id);
                    return (
                      <DreamCard 
                        key={goal.id} 
                        goal={goal} 
                        selected={selectedGoal?.id === goal.id}
                        completedCount={progress.completed}
                        totalCount={progress.total}
                        onClick={() => handleGoalSelect(goal)}
                      />
                    );
                  })}
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
                    onExplore={() => {}}
                  />
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="myjourneys">
            <div className="max-w-2xl mx-auto">
              <MyJourneys />
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Start a new journey to learn something new!</p>
                <Button onClick={() => { setActiveTab('goals'); setStep('select'); }} className="rounded-xl">
                  <Sparkles className="h-4 w-4 mr-2" /> Discover New Goals
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default TechDreamBuilder;