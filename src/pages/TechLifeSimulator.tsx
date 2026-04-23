import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, CheckCircle, XCircle, RotateCcw, ArrowRight, 
  AlertTriangle, Shield, Smartphone, Laptop, Mail,
  ShoppingCart, CreditCard, Wifi, Lock, MessageCircle,
  Phone, Video, Camera, Users, Star, Trophy, Clock,
  ChevronRight, HelpCircle, Zap, Brain, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: typeof Smartphone;
  category: 'safety' | 'communication' | 'shopping' | 'basics' | 'health';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  steps: ScenarioStep[];
}

interface ScenarioStep {
  id: number;
  situation: string;
  options: { id: string; text: string; correct: boolean; feedback: string }[];
  tip?: string;
}

const scenarios: Scenario[] = [
  {
    id: 'scam-email',
    title: 'The Suspicious Email',
    description: 'An email claims you need to verify your bank account immediately. Can you spot the scam?',
    icon: Mail,
    category: 'safety',
    difficulty: 'beginner',
    duration: '3 min',
    steps: [
      {
        id: 1,
        situation: 'You receive an email from "bank-security@urgent-verify.com" saying your account will be locked in 24 hours unless you click a link to verify your password.',
        options: [
          { id: 'a', text: 'Click the link immediately and enter your password', correct: false, feedback: 'This is a scam! Real banks never ask for passwords via email.' },
          { id: 'b', text: 'Ignore the email and call your bank directly using the number on their official website', correct: true, feedback: 'Perfect! Always verify by contacting your bank through official channels.' },
          { id: 'c', text: 'Reply to the email asking if it\'s real', correct: false, feedback: 'Responding tells scammers your email is active. Never reply to suspicious emails.' },
        ],
        tip: 'Real banks use official email addresses, not random domains like urgent-verify.com'
      },
      {
        id: 2,
        situation: 'The email has the bank\'s logo and looks very professional. It also mentions your actual account number.',
        options: [
          { id: 'a', text: 'It looks real because of the logo and account details, so it must be safe', correct: false, feedback: 'Scammers copy logos and use leaked data to make emails look legitimate.' },
          { id: 'b', text: 'Still a scam — logos can be stolen and account info can be guessed or leaked', correct: true, feedback: 'Exactly! Professional appearance doesn\'t prove authenticity.' },
          { id: 'c', text: 'Forward it to friends to warn them', correct: false, feedback: 'Forwarding spreads the scam. Report it to your bank and the FTC instead.' },
        ],
        tip: 'Phishing emails often include stolen personal information to seem more convincing'
      },
      {
        id: 3,
        situation: 'After reporting, you get a text saying "Your bank account has been compromised. Click here to secure funds." The sender is "BankSecure2024".',
        options: [
          { id: 'a', text: 'Click the link — it\'s the bank trying to help', correct: false, feedback: 'Banks don\'t text about security issues. This is a "smishing" scam.' },
          { id: 'b', text: 'Delete it and log into your bank\'s official app or website directly', correct: true, feedback: 'Correct! Always access your bank through official apps or websites, never via links.' },
          { id: 'c', text: 'Call the number in the text', correct: false, feedback: 'The number in the text goes to the scammers, not your bank.' },
        ],
        tip: 'Bank texts come from specific shortcodes, not random phone numbers'
      }
    ]
  },
  {
    id: 'online-shopping',
    title: 'Too Good to Be True?',
    description: 'A website offers a brand-name laptop at 80% off. Is it a deal or a scam?',
    icon: ShoppingCart,
    category: 'shopping',
    difficulty: 'beginner',
    duration: '4 min',
    steps: [
      {
        id: 1,
        situation: 'You find a website selling a $1,200 laptop for $240. The page looks professional with many product images and customer reviews.',
        options: [
          { id: 'a', text: 'Great deal! Order it before it sells out', correct: false, feedback: 'Too good to be true usually is. Professional-looking sites can be fakes.' },
          { id: 'b', text: 'Search for the same laptop on other well-known websites to compare prices', correct: true, feedback: 'Smart! If the price is dramatically lower everywhere else, something\'s wrong.' },
          { id: 'c', text: 'Check the "About Us" page to learn more about the company', correct: false, feedback: 'Scammers create fake "About Us" pages. Even if it looks legitimate, verify through other means.' },
        ],
        tip: 'If a price is suspiciously low, search the exact product name and price on other sites'
      },
      {
        id: 2,
        situation: 'The website shows the laptop as "In Stock" with only 3 left. A pop-up says "5 people are viewing this!" creating urgency.',
        options: [
          { id: 'a', text: 'Order now — it might sell out!', correct: false, feedback: 'Fake urgency is a common scam tactic. Don\'t let pressure push you into bad decisions.' },
          { id: 'b', text: 'This is a red flag — fake scarcity and social proof pressure tactics', correct: true, feedback: 'Exactly! Legitimate retailers don\'t use fake "5 people viewing" pop-ups.' },
          { id: 'c', text: 'Check if there\'s a physical address and phone number', correct: false, feedback: 'Scammers often list fake addresses. Even real-looking addresses need verification.' },
        ],
        tip: "Real deals don't need artificial urgency or fake 'someone is viewing' notifications"
      },
      {
        id: 3,
        situation: 'You search for reviews of this website and find some negative reviews saying they never received their orders.',
        options: [
          { id: 'a', text: 'The negative reviews might be fake from competitors — order anyway', correct: false, feedback: 'Don\'t dismiss real warnings. Multiple negative reviews are a serious red flag.' },
          { id: 'b', text: 'This confirms it\'s a scam — do not order and report the site', correct: true, feedback: 'Great judgment! Use sites like BBB or Trustpilot to verify legitimacy.' },
          { id: 'c', text: 'Try ordering a cheap item first to test if they\'re legitimate', correct: false, feedback: 'Even cheap orders can lead to stolen credit card info. Avoid entirely.' },
        ],
        tip: 'Search "[website name] reviews" or "[website name] scam" before buying anything'
      }
    ]
  },
  {
    id: 'grandchild-scam',
    title: 'The Grandchild Emergency',
    description: 'You receive a frantic call claiming your grandchild is in trouble. Could it be a scam?',
    icon: Phone,
    category: 'safety',
    difficulty: 'beginner',
    duration: '3 min',
    steps: [
      {
        id: 1,
        situation: 'A caller says "Grandma, it\'s me! I\'m in trouble and need your help. Please don\'t tell Mom and Dad." The voice sounds a bit like your grandchild.',
        options: [
          { id: 'a', text: 'Ask for their name directly and keep them on the line', correct: true, feedback: 'Good instinct! But verify by asking something only your real grandchild would know.' },
          { id: 'b', text: 'Rush to help — sounds like your grandchild needs you!', correct: false, feedback: 'Scammers use urgency and claim to be family. Take a breath before acting.' },
          { id: 'c', text: 'Ask them to describe themselves to confirm who they are', correct: false, feedback: 'Scammers can guess or find basic info online. Ask for specific shared knowledge.' },
        ],
        tip: 'Create a family code word that strangers wouldn\'t know to verify identity'
      },
      {
        id: 2,
        situation: 'The caller says they\'re at a hospital and need $3,000 for an emergency surgery. They can\'t call their parents because "they\'ll be so mad."',
        options: [
          { id: 'a', text: 'Wire the money immediately — it\'s an emergency!', correct: false, feedback: 'Never wire money or send gift cards to "family" without verification. This is a common scam.' },
          { id: 'b', text: 'Hang up and call your grandchild\'s actual phone number or their parents', correct: true, feedback: 'Perfect! Call the real person directly using contact info you already have.' },
          { id: 'c', text: 'Offer to send half the amount to help', correct: false, feedback: 'Any amount sent is too much. Always verify through a known number.' },
        ],
        tip: 'Real emergencies don\'t require secrecy or wire transfers'
      },
      {
        id: 3,
        situation: 'The caller gets aggressive: "You don\'t care about your grandchild! I\'m in real danger and you\'re just sitting there!"',
        options: [
          { id: 'a', text: 'Feel guilty and agree to send money to calm them down', correct: false, feedback: 'Aggression is a manipulation tactic. Real family wouldn\'t attack you for being careful.' },
          { id: 'b', text: 'Stay calm, hang up, and verify by calling your family directly', correct: true, feedback: 'Excellent! Scammers use anger to override your judgment. Stay calm and verify.' },
          { id: 'c', text: 'Ask more questions to figure out who this really is', correct: false, feedback: 'Don\'t engage further. Hang up and verify through known contacts.' },
        ],
        tip: 'A real loved one would understand your need to verify, not attack your caution'
      }
    ]
  },
  {
    id: 'wifi-public',
    title: 'Coffee Shop WiFi Trap',
    description: 'At a café, you need internet. How do you safely connect?',
    icon: Wifi,
    category: 'safety',
    difficulty: 'intermediate',
    duration: '3 min',
    steps: [
      {
        id: 1,
        situation: 'You see two WiFi networks: "CoffeeShop_Free" and "CoffeeShop Guest". Which should you use?',
        options: [
          { id: 'a', text: 'Connect to CoffeeShop_Free — it looks official', correct: false, feedback: 'Scammers create fake "CoffeeShop_Free" networks to intercept your data.' },
          { id: 'b', text: 'Ask an employee which network is the real one', correct: true, feedback: 'Smart! Always verify the official network name from staff.' },
          { id: 'c', text: 'Connect to either — they both seem safe', correct: false, feedback: 'Unknown networks can be dangerous. Always verify before connecting.' },
        ],
        tip: 'Ask staff for the exact name of their guest WiFi'
      },
      {
        id: 2,
        situation: 'You need to do some online banking while at the café. What\'s the safest approach?',
        options: [
          { id: 'a', text: 'Use the café WiFi — it\'s convenient', correct: false, feedback: 'Public WiFi is risky for sensitive activities like banking.' },
          { id: 'b', text: 'Use your phone\'s mobile data instead', correct: true, feedback: 'Mobile data (4G/5G) is much more secure than public WiFi.' },
          { id: 'c', text: 'Wait until you get home to do banking', correct: false, feedback: 'While safer, you can use mobile data securely in public.' },
        ],
        tip: 'Use mobile data or a personal hotspot for sensitive activities in public'
      },
      {
        id: 3,
        situation: 'A "server" approaches and says "We have a premium WiFi for guests, just give me your email to set up."',
        options: [
          { id: 'a', text: 'Give your email — they\'re just trying to help', correct: false, feedback: 'This is a social engineering tactic to gain access to your accounts.' },
          { id: 'b', text: 'Politely decline — real cafés don\'t need your email for WiFi', correct: true, feedback: 'Correct! Real public WiFi doesn\'t require email registration or personal info.' },
          { id: 'c', text: 'Ask to see their employee ID to verify', correct: false, feedback: 'Even with fake ID, don\'t provide personal info to strangers offering "free" services.' },
        ],
        tip: 'Legitimate businesses never need your email or personal info for basic WiFi'
      }
    ]
  },
  {
    id: 'video-call-tech',
    title: 'The Tech Support Call',
    description: 'Someone calls saying your computer has a virus. What do you do?',
    icon: Laptop,
    category: 'safety',
    difficulty: 'beginner',
    duration: '3 min',
    steps: [
      {
        id: 1,
        situation: 'A caller says "We\'ve detected a virus on your computer. You need to let us in immediately to fix it or your data will be lost."',
        options: [
          { id: 'a', text: 'Let them in — they\'re trying to help', correct: false, feedback: 'This is a classic tech support scam. Real companies don\'t call you first.' },
          { id: 'b', text: 'Hang up — legitimate tech companies don\'t call out of the blue', correct: true, feedback: 'Exactly! Microsoft, Apple, and others never call about undetected viruses.' },
          { id: 'c', text: 'Ask them to prove they\'re from a real company', correct: false, feedback: 'Scammers can fake company names and ID numbers. Just hang up.' },
        ],
        tip: 'Real tech companies never call to report problems on your computer'
      },
      {
        id: 2,
        situation: 'The caller ID shows "Microsoft Support" and they know your name. This must be real, right?',
        options: [
          { id: 'a', text: 'Yes, it\'s Microsoft — they know my name', correct: false, feedback: 'Caller ID can be spoofed to say anything. Your name might be from a data leak.' },
          { id: 'b', text: 'Still a scam — caller ID and basic info can be faked', correct: true, feedback: 'Correct! Personal info is easy to find or buy online. Never trust unknown callers.' },
          { id: 'c', text: 'Ask them to email you instead so you have proof', correct: false, feedback: 'Scammers can send convincing emails too. Just hang up and verify yourself.' },
        ],
        tip: 'Your personal information is often available from data breaches — it doesn\'t prove legitimacy'
      },
      {
        id: 3,
        situation: 'The caller threatens: "If you don\'t fix this now, your computer will be destroyed and you\'ll lose everything!"',
        options: [
          { id: 'a', text: 'Panic and do whatever they say', correct: false, feedback: 'Threats are scare tactics. Your real computer is fine — this is just manipulation.' },
          { id: 'b', text: 'Hang up and relax — threats mean it\'s definitely a scam', correct: true, feedback: 'Perfect! Real tech support doesn\'t threaten or create panic. This is a huge red flag.' },
          { id: 'c', text: 'Let them in but watch everything they do', correct: false, feedback: 'Even watching doesn\'t help — they can install malware while you watch.' },
        ],
        tip: 'Real support helps calmly, not with threats and urgency'
      }
    ]
  },
  {
    id: 'password-reset',
    title: 'The Password Reset Trap',
    description: 'A text says your password will expire in 24 hours. What do you do?',
    icon: Lock,
    category: 'safety',
    difficulty: 'beginner',
    duration: '3 min',
    steps: [
      {
        id: 1,
        situation: 'You get a text: "Your Apple ID password will expire in 24 hours. Reset now: appleid-secure.com/reset"',
        options: [
          { id: 'a', text: 'Click the link and reset immediately', correct: false, feedback: 'This is a phishing text. The URL appleid-secure.com is fake.' },
          { id: 'b', text: 'Go to Settings on your actual iPhone to check — never click text links', correct: true, feedback: 'Exactly! Real password issues appear in your device settings, not texts.' },
          { id: 'c', text: 'Reply STOP to unsubscribe', correct: false, feedback: 'Replying shows your number is active and leads to more scams.' },
        ],
        tip: 'Real company texts come from official numbers and never contain links'
      },
      {
        id: 2,
        situation: 'The text looks very official with proper Apple colors and logos. It could be real.',
        options: [
          { id: 'a', text: 'It looks real, so the link must be safe', correct: false, feedback: 'Scammers copy official branding perfectly. Looks don\'t prove authenticity.' },
          { id: 'b', text: 'Always check via official app or website — never via links in texts', correct: true, feedback: 'Smart! Go to apple.com or your iPhone Settings directly.' },
          { id: 'c', text: 'Search online to see if this text is real', correct: false, feedback: 'By the time you search, you might have already been phished. Just ignore the text.' },
        ],
        tip: 'Real Apple texts come from Apple ID numbers, not random numbers'
      },
      {
        id: 3,
        situation: 'You ignore the text and later log into your real Apple account. Everything is fine — no reset needed.',
        options: [
          { id: 'a', text: 'Good thing I didn\'t fall for it!', correct: true, feedback: 'Exactly! Your caution saved you. Always verify through official channels.' },
          { id: 'b', text: 'Share the text on social media to warn others', correct: false, feedback: 'Good intention, but just report it to your carrier or the real company.' },
        ],
        tip: 'When in doubt, ignore and verify through official websites or settings'
      }
    ]
  }
];

function ScenarioCard({ scenario, onClick, completed }: { scenario: Scenario; onClick: () => void; completed?: boolean }) {
  const Icon = scenario.icon;
  const difficultyColors = {
    beginner: 'bg-teksure-success/10 text-teksure-success',
    intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <button onClick={onClick} className="text-left w-full">
      <Card className="hover-lift h-full border-border/60 hover:border-primary/30">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${completed ? 'bg-teksure-success/10' : 'bg-muted'}`}>
              <Icon className={`h-5 w-5 ${completed ? 'text-teksure-success' : 'text-muted-foreground'}`} />
            </div>
            {completed && <Badge className="bg-teksure-success/10 text-teksure-success border-0">Completed</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-base mb-1">{scenario.title}</CardTitle>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{scenario.description}</p>
          <div className="flex items-center gap-2">
            <Badge className={difficultyColors[scenario.difficulty]}>{scenario.difficulty}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {scenario.duration}
            </span>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function ScenarioPlay({ scenario, onComplete }: { scenario: Scenario; onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [finished, setFinished] = useState(false);

  const step = scenario.steps[currentStep];
  const progress = ((currentStep + 1) / scenario.steps.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOption(optionId);
    setShowFeedback(true);
    
    const option = step.options.find(o => o.id === optionId);
    if (option?.correct) {
      setCorrect(c => c + 1);
    } else {
      setWrong(w => w + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < scenario.steps.length - 1) {
      setCurrentStep(c => c + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setCorrect(0);
    setWrong(0);
    setFinished(false);
  };

  const score = Math.round((correct / (correct + wrong || 1)) * 100);

  if (finished) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <div className={`inline-flex h-20 w-20 rounded-full items-center justify-center mb-4 ${score >= 70 ? 'bg-teksure-success/10' : 'bg-amber-100 dark:bg-amber-900/30'}`}>
            {score >= 70 ? (
              <Trophy className="h-10 w-10 text-teksure-success" />
            ) : (
              <Target className="h-10 w-10 text-amber-500" />
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {score >= 70 ? "Great job!" : "Keep learning!"}
          </h2>
          <p className="text-muted-foreground">
            You scored {score}% ({correct} correct, {wrong} needs work)
          </p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="font-semibold mb-4">Key takeaways</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-teksure-success mt-0.5 shrink-0" />
              <span>When in doubt, hang up and verify through official channels</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <span>Urgency and threats are manipulation tactics — stay calm</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Never share passwords or send money to unverified callers</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button onClick={handleRestart} variant="outline" size="lg" className="gap-2 rounded-xl">
            <RotateCcw className="h-4 w-4" /> Try Again
          </Button>
          <Button onClick={onComplete} size="lg" className="gap-2 rounded-xl">
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {scenario.steps.length}</span>
        <div className="flex items-center gap-2">
          <Badge className="bg-teksure-success/10 text-teksure-success">{correct} </Badge>
          <Badge variant="destructive">{wrong} </Badge>
        </div>
      </div>
      <Progress value={progress} className="h-2 mb-6" />

      <div className="mb-6">
        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl mb-4">
          <p className="font-medium text-amber-900 dark:text-amber-100">{step.situation}</p>
        </div>

        {step.tip && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
            <HelpCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{step.tip}</span>
          </div>
        )}

        <div className="space-y-3">
          {step.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const showAsCorrect = showFeedback && option.correct;
            const showAsWrong = showFeedback && isSelected && !option.correct;

            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  showAsCorrect 
                    ? 'border-teksure-success bg-teksure-success/10' 
                    : showAsWrong 
                      ? 'border-destructive bg-destructive/10'
                      : isSelected 
                        ? 'border-primary bg-primary/10'
                        : 'border-border/60 bg-card hover:border-primary/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    showAsCorrect 
                      ? 'border-teksure-success bg-teksure-success text-white'
                      : showAsWrong
                        ? 'border-destructive bg-destructive text-white'
                        : isSelected
                          ? 'border-primary bg-primary text-white'
                          : 'border-muted-foreground/30'
                  }`}>
                    {showAsCorrect ? <CheckCircle className="h-4 w-4" /> : showAsWrong ? <XCircle className="h-4 w-4" /> : null}
                  </div>
                  <span className="text-sm">{option.text}</span>
                </div>

                {showFeedback && (
                  <div className={`mt-3 p-3 rounded-lg text-sm ${
                    option.correct ? 'bg-teksure-success/10 text-teksure-success' : 'bg-destructive/10 text-destructive'
                  }`}>
                    {option.feedback}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showFeedback && (
        <div className="flex justify-end">
          <Button onClick={handleNext} size="lg" className="rounded-xl gap-2">
            {currentStep < scenario.steps.length - 1 ? 'Next Step' : 'See Results'} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

const TechLifeSimulator = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('teksure-completed-scenarios');
      if (saved) setCompletedScenarios(JSON.parse(saved));
    } catch {}
  }, []);

  const handleScenarioComplete = (scenarioId: string) => {
    if (!completedScenarios.includes(scenarioId)) {
      const updated = [...completedScenarios, scenarioId];
      setCompletedScenarios(updated);
      localStorage.setItem('teksure-completed-scenarios', JSON.stringify(updated));
    }
    setActiveScenario(null);
  };

  const filteredScenarios = activeTab === 'all' 
    ? scenarios 
    : scenarios.filter(s => s.category === activeTab);

  const categoryLabels = {
    safety: 'Safety & Security',
    communication: 'Communication',
    shopping: 'Shopping',
    basics: 'Basics',
    health: 'Health'
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tech Life Simulator — Practice Real-World Scenarios | TekSure"
        description="Practice identifying scams, safe browsing, and tech decisions in realistic scenarios. Learn by doing — no risk, just learning."
        path="/simulator"
      />
      <Navbar />
      
      <main id="main-content" className="container py-12 md:py-20">
        {activeScenario ? (
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setActiveScenario(null)} 
              className="mb-6 gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" /> Back to scenarios
            </Button>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeScenario.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{activeScenario.title}</h2>
                  <p className="text-sm text-muted-foreground">{activeScenario.description}</p>
                </div>
              </div>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <ScenarioPlay 
                  scenario={activeScenario} 
                  onComplete={() => handleScenarioComplete(activeScenario.id)}
                />
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-br from-amber-500/20 to-primary/5 items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-amber-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 display-heading">
                Tech Life Simulator
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Practice spotting scams, making safe decisions, and handling 
                real situations — all in a safe environment. No risk, just learning.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['all', 'safety', 'communication', 'shopping', 'basics', 'health'].map(tab => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab)}
                  className="rounded-xl"
                >
                  {tab === 'all' ? 'All Scenarios' : categoryLabels[tab as keyof typeof categoryLabels]}
                </Button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredScenarios.map(scenario => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onClick={() => setActiveScenario(scenario)}
                  completed={completedScenarios.includes(scenario.id)}
                />
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 p-4 bg-muted/30 rounded-2xl">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  {completedScenarios.length} of {scenarios.length} scenarios completed
                </span>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TechLifeSimulator;