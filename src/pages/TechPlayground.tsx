import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, CheckCircle, XCircle, RotateCcw, Eye, EyeOff,
  MousePointer, Keyboard, Hand, Wifi, Lock, Mail,
  Settings, Plus, Minus, ChevronRight, BookOpen,
  Shield, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

interface PlaygroundModule {
  id: string;
  title: string;
  description: string;
  icon: typeof MousePointer;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
}

interface PlaygroundExercise {
  id: string;
  instruction: string;
  target?: string;
  correctAction?: string;
  hint: string;
}

const playgroundModules: PlaygroundModule[] = [
  { 
    id: 'mouse-basics', 
    title: 'Mouse Skills', 
    description: 'Practice clicking, double-clicking, dragging, and scrolling',
    icon: MousePointer,
    difficulty: 'beginner',
    duration: '5 min'
  },
  { 
    id: 'keyboard-basics', 
    title: 'Keyboard Practice', 
    description: 'Learn typing shortcuts and special keys',
    icon: Keyboard,
    difficulty: 'beginner',
    duration: '8 min'
  },
  { 
    id: 'touch-gestures', 
    title: 'Touch Gestures', 
    description: 'Swipe, pinch, and tap on a virtual touchscreen',
    icon: Hand,
    difficulty: 'beginner',
    duration: '6 min'
  },
  { 
    id: 'forms-practice', 
    title: 'Form Filling', 
    description: 'Practice entering information in forms safely',
    icon: Mail,
    difficulty: 'beginner',
    duration: '10 min'
  },
  { 
    id: 'password-safety', 
    title: 'Password Safety', 
    description: 'Learn to create and manage secure passwords',
    icon: Lock,
    difficulty: 'intermediate',
    duration: '12 min'
  },
  { 
    id: 'wifi-security', 
    title: 'WiFi Safety', 
    description: 'Understand safe vs unsafe WiFi networks',
    icon: Wifi,
    difficulty: 'intermediate',
    duration: '8 min'
  },
];

const mouseExercises: PlaygroundExercise[] = [
  { id: 'click', instruction: 'Click the button below', target: '#click-btn', hint: 'Single click with left mouse button' },
  { id: 'double-click', instruction: 'Double-click the icon', target: '#double-click-icon', hint: 'Click twice quickly' },
  { id: 'drag', instruction: 'Drag the slider to the right', target: '#slider', hint: 'Click and hold, then move' },
  { id: 'scroll', instruction: 'Scroll down to see more', target: '#scroll-area', hint: 'Use mouse wheel or trackpad' },
];

function MousePlayground() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [scrollY, setScrollY] = useState(0);

  const exercise = mouseExercises[currentExercise];

  const handleComplete = () => {
    if (!completed.includes(exercise.id)) {
      setCompleted([...completed, exercise.id]);
    }
    if (currentExercise < mouseExercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const progress = (completed.length / mouseExercises.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Mouse Practice Area</h3>
          <p className="text-sm text-muted-foreground">Exercise {currentExercise + 1} of {mouseExercises.length}</p>
        </div>
        <Badge variant={completed.length === mouseExercises.length ? 'default' : 'secondary'}>
          {completed.length}/{mouseExercises.length} complete
        </Badge>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="bg-muted/30 rounded-2xl p-6 min-h-[300px]">
        <div className="mb-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
          <p className="font-medium text-primary">{exercise.instruction}</p>
          <p className="text-sm text-muted-foreground mt-1"> {exercise.hint}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {currentExercise === 0 && (
            <Button 
              id="click-btn"
              onClick={handleComplete}
              className="h-12 px-6 rounded-xl"
            >
              Click Me
            </Button>
          )}

          {currentExercise === 1 && (
            <div 
              id="double-click-icon"
              onClick={handleComplete}
              onDoubleClick={handleComplete}
              className="h-16 w-16 bg-primary/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors"
            >
              <MousePointer className="h-8 w-8 text-primary" />
            </div>
          )}

          {currentExercise === 2 && (
            <div className="w-full max-w-xs">
              <input
                type="range"
                id="slider"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                onMouseUp={() => {
                  if (sliderPosition > 70) handleComplete();
                }}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Drag to the right — {sliderPosition}%
              </p>
            </div>
          )}

          {currentExercise === 3 && (
            <div 
              id="scroll-area"
              className="h-40 overflow-y-auto bg-card border rounded-xl p-4"
              onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}
            >
              <p>Scroll down to see more...</p>
              <div className="h-48" />
              <p>Almost there...</p>
              <div className="h-48" />
              {scrollY > 200 && (
                <Button onClick={handleComplete} className="mt-4">
                  Found it! <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {completed.length === mouseExercises.length && (
        <div className="text-center p-6 bg-teksure-success/10 rounded-2xl border border-teksure-success/20">
          <Sparkles className="h-8 w-8 text-teksure-success mx-auto mb-2" />
          <h4 className="font-semibold text-lg">Great job!</h4>
          <p className="text-muted-foreground">You've mastered the basics of using a mouse.</p>
          <Button onClick={() => { setCurrentExercise(0); setCompleted([]); setSliderPosition(50); }} className="mt-4 rounded-xl">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </Button>
        </div>
      )}
    </div>
  );
}

function FormPlayground() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showEmailHint, setShowEmailHint] = useState(false);
  const [score, setScore] = useState(0);

  const handleInput = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const checkForm = () => {
    let points = 0;
    if (formData.name.length >= 2) points += 1;
    if (formData.email.includes('@') && formData.email.includes('.')) points += 1;
    if (formData.phone.length >= 10) points += 1;
    setScore(points);
  };

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <Shield className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-amber-800 dark:text-amber-200">Safe Practice Environment</p>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              This form doesn't actually send anywhere. Practice entering information safely!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInput('name', e.target.value)}
              placeholder="Enter your name"
              className="w-full h-11 px-4 rounded-xl border bg-background"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInput('email', e.target.value)}
              placeholder="you@example.com"
              className="w-full h-11 px-4 rounded-xl border bg-background"
            />
            <button 
              onClick={() => setShowEmailHint(!showEmailHint)}
              className="text-sm text-primary hover:underline mt-1"
            >
              {showEmailHint ? 'Hide tip' : 'What makes a good email?'}
            </button>
            {showEmailHint && (
              <p className="text-sm text-muted-foreground mt-2 bg-muted p-3 rounded-lg">
                A good email has two parts: your name + the email service. 
                Example: john@gmail.com — "john" is your name, "gmail.com" is the service.
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInput('phone', e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full h-11 px-4 rounded-xl border bg-background"
            />
          </div>

          <Button onClick={checkForm} className="w-full h-11 rounded-xl">
            Check My Answers
          </Button>
        </div>

        <div className="glass-card p-6">
          <h4 className="font-semibold mb-4">What you're learning</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {formData.name.length >= 2 ? (
                <CheckCircle className="h-5 w-5 text-teksure-success" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-muted" />
              )}
              <span className="text-sm">Name: At least 2 characters</span>
            </div>
            <div className="flex items-center gap-2">
              {formData.email.includes('@') && formData.email.includes('.') ? (
                <CheckCircle className="h-5 w-5 text-teksure-success" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-muted" />
              )}
              <span className="text-sm">Email: Contains @ and .</span>
            </div>
            <div className="flex items-center gap-2">
              {formData.phone.length >= 10 ? (
                <CheckCircle className="h-5 w-5 text-teksure-success" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-muted" />
              )}
              <span className="text-sm">Phone: At least 10 digits</span>
            </div>
          </div>

          {score > 0 && (
            <div className={`mt-6 p-4 rounded-xl text-center ${score === 3 ? 'bg-teksure-success/10' : 'bg-primary/10'}`}>
              <p className="font-bold text-lg">{score}/3 correct!</p>
              <p className="text-sm text-muted-foreground mt-1">
                {score === 3 ? 'Perfect! Your form is ready to submit.' : 'Keep trying to get all three correct!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function KeyboardPlayground() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
      if (!pressedKeys.includes(key)) {
        setPressedKeys([...pressedKeys, key]);
      }
      if (e.ctrlKey || e.metaKey) {
        setMessage(`You pressed ${e.metaKey ? 'Cmd' : 'Ctrl'} + ${e.key.toUpperCase()}`);
      }
    };
    const handleKeyUp = () => setPressedKeys([]);
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKeys]);

  return (
    <div className="space-y-6">
      <div className="bg-muted/30 rounded-2xl p-8">
        <p className="text-center text-muted-foreground mb-6">
          Type anything on your keyboard to see the keys light up
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {pressedKeys.map((key) => (
            <div 
              key={key}
              className="h-12 px-4 rounded-lg bg-primary text-primary-foreground flex items-center font-mono font-bold animate-in fade-in zoom-in duration-200"
            >
              {key}
            </div>
          ))}
          {pressedKeys.length === 0 && (
            <p className="text-sm text-muted-foreground">Start typing...</p>
          )}
        </div>

        {message && (
          <div className="text-center p-3 bg-primary/10 rounded-xl">
            <p className="font-medium">{message}</p>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <Keyboard className="h-6 w-6 mx-auto mb-2 text-primary" />
          <p className="text-sm font-medium">Type keys</p>
          <p className="text-xs text-muted-foreground">A-Z, numbers, symbols</p>
        </div>
        <div className="glass-card p-4 text-center">
          <span className="text-lg font-bold">Ctrl / ⌘</span>
          <p className="text-sm font-medium">Modifier keys</p>
          <p className="text-xs text-muted-foreground">Combine with others</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Settings className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium">Special keys</p>
          <p className="text-xs text-muted-foreground">Shift, Tab, Enter</p>
        </div>
      </div>
    </div>
  );
}

const TechPlayground = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const markComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const difficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-teksure-success/10 text-teksure-success';
      case 'intermediate': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tech Playground — Practice Technology Safely | TekSure"
        description="Practice mouse, keyboard, and touch skills in a safe, interactive environment. No risk — just learning!"
        path="/playground"
      />
      <Navbar />
      
      <main className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-br from-teksure-success/20 to-primary/5 items-center justify-center mb-6">
            <Play className="h-8 w-8 text-teksure-success" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 display-heading">
            Tech Playground
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Practice technology skills in a safe space. Nothing you do here 
            will affect your real devices — it's all just practice!
          </p>
        </div>

        <Tabs value={activeModule || 'overview'} onValueChange={setActiveModule}>
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
            <TabsTrigger value="overview" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="mouse-basics" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MousePointer className="h-4 w-4 mr-2" /> Mouse
            </TabsTrigger>
            <TabsTrigger value="keyboard-basics" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Keyboard className="h-4 w-4 mr-2" /> Keyboard
            </TabsTrigger>
            <TabsTrigger value="forms-practice" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Mail className="h-4 w-4 mr-2" /> Forms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {playgroundModules.map((module) => {
                const Icon = module.icon;
                return (
                  <Card 
                    key={module.id} 
                    className="hover-lift cursor-pointer border-border/60 hover:border-primary/30"
                    onClick={() => setActiveModule(module.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${completedModules.includes(module.id) ? 'bg-teksure-success/10' : 'bg-muted'}`}>
                          <Icon className={`h-5 w-5 ${completedModules.includes(module.id) ? 'text-teksure-success' : 'text-muted-foreground'}`} />
                        </div>
                        <Badge className={difficultyColor(module.difficulty)}>
                          {module.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-base mb-1">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{module.duration}</span>
                        {completedModules.includes(module.id) && (
                          <>
                            <span>•</span>
                            <span className="text-teksure-success flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" /> Complete
                            </span>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 p-4 bg-muted/30 rounded-2xl">
                <Shield className="h-5 w-5 text-teksure-success" />
                <span className="text-sm">100% safe — nothing you do here affects your real devices</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mouse-basics">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <MousePlayground />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keyboard-basics">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <KeyboardPlayground />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms-practice">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <FormPlayground />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="font-semibold text-lg mb-4">Want more personalized help?</h3>
          <Button asChild size="lg" className="rounded-xl gap-2">
            <Link to="/get-help">
              Talk to a Real Person <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechPlayground;