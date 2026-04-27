import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen, CheckCircle, XCircle, ArrowRight, RotateCcw,
  Trophy, Lightbulb, Globe, Smartphone, Shield, AppWindow, Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'Internet' | 'Devices' | 'Security' | 'Apps' | 'Social Media';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: Category;
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: 'What does "Wi-Fi" let you do?',
    options: [
      'Make phone calls without a phone plan',
      'Connect to the internet without a cable',
      'Send text messages for free',
      'Charge your phone wirelessly',
    ],
    correctIndex: 1,
    explanation:
      'Wi-Fi is a wireless connection that lets your phone, tablet, or computer connect to the internet without plugging in a cable. You find it at home, coffee shops, and libraries.',
    category: 'Internet',
  },
  {
    question: 'What is a "browser"?',
    options: [
      'A type of computer virus',
      'An app that lets you visit websites',
      'A tool for organizing photos',
      'A setting that saves battery',
    ],
    correctIndex: 1,
    explanation:
      'A browser is the app you use to visit websites. Examples include Safari, Chrome, Firefox, and Edge. You type a web address into it or search for things online.',
    category: 'Internet',
  },
  {
    question: 'What does "downloading" mean?',
    options: [
      'Deleting a file from your phone',
      'Sending a file to someone else',
      'Saving a file from the internet to your device',
      'Backing up your phone',
    ],
    correctIndex: 2,
    explanation:
      'Downloading means saving a file (like a photo, app, or document) from the internet onto your phone or computer so you can use it even without an internet connection.',
    category: 'Internet',
  },
  {
    question: 'What is "Bluetooth" used for?',
    options: [
      'Connecting devices wirelessly over short distances',
      'Improving your phone\'s internet speed',
      'Making your screen brighter',
      'Sending emails faster',
    ],
    correctIndex: 0,
    explanation:
      'Bluetooth is a wireless technology that connects devices near each other — like pairing wireless headphones to your phone, or sending a photo to a nearby tablet.',
    category: 'Devices',
  },
  {
    question: 'What is a "screenshot"?',
    options: [
      'A photo taken with your phone camera',
      'A picture of what is on your screen',
      'A short video of your screen',
      'A screen protector for your phone',
    ],
    correctIndex: 1,
    explanation:
      'A screenshot is a picture of exactly what is showing on your screen at that moment. You can use it to save something you see, like a recipe or a confirmation number.',
    category: 'Devices',
  },
  {
    question: 'What does "storage" mean on your phone?',
    options: [
      'How long your battery lasts',
      'The space available for photos, apps, and files',
      'The strength of your phone signal',
      'How fast your phone runs',
    ],
    correctIndex: 1,
    explanation:
      'Storage is the space inside your phone where photos, videos, apps, and files are saved. When storage is full, you may need to delete things or move them to the cloud.',
    category: 'Devices',
  },
  {
    question: 'What is a "password manager"?',
    options: [
      'A person at the phone store who resets passwords',
      'An app that securely stores all your passwords',
      'A setting that removes passwords from your phone',
      'A website that checks if your password is strong',
    ],
    correctIndex: 1,
    explanation:
      'A password manager is an app that safely stores all your passwords in one place. You only need to remember one main password, and it fills in the rest for you.',
    category: 'Security',
  },
  {
    question: 'What is "two-factor authentication" (2FA)?',
    options: [
      'Using two different passwords',
      'An extra security step beyond just your password',
      'Logging in from two devices at once',
      'Changing your password twice a year',
    ],
    correctIndex: 1,
    explanation:
      'Two-factor authentication adds an extra security step when you log in — like a code sent to your phone. Even if someone steals your password, they cannot get in without the second step.',
    category: 'Security',
  },
  {
    question: 'What is "phishing"?',
    options: [
      'A type of online game',
      'A scam that tricks you into sharing personal information',
      'A way to speed up your internet',
      'A method of backing up your phone',
    ],
    correctIndex: 1,
    explanation:
      'Phishing is when scammers send fake emails, texts, or messages that look real to trick you into giving away passwords, credit card numbers, or personal information.',
    category: 'Security',
  },
  {
    question: 'What does "update your software" mean?',
    options: [
      'Buy a new phone',
      'Install the latest improvements and security fixes',
      'Delete old apps you do not use',
      'Restart your phone',
    ],
    correctIndex: 1,
    explanation:
      'Updating your software means installing the latest version of your phone\'s operating system or apps. Updates fix problems, add features, and protect you from security threats.',
    category: 'Devices',
  },
  {
    question: 'What is "the cloud"?',
    options: [
      'A weather app on your phone',
      'Storage space on the internet for your files',
      'A type of Wi-Fi network',
      'The screen saver on your computer',
    ],
    correctIndex: 1,
    explanation:
      'The cloud is storage space on the internet where your files, photos, and backups are kept. Services like iCloud, Google Drive, and Dropbox store your data safely online.',
    category: 'Internet',
  },
  {
    question: 'What is an "app"?',
    options: [
      'The screen on your phone',
      'A program you install on your phone or tablet',
      'A type of phone charger',
      'An internet connection',
    ],
    correctIndex: 1,
    explanation:
      'An app (short for application) is a program on your phone or tablet that does a specific job — like checking email, taking photos, or reading the news.',
    category: 'Apps',
  },
  {
    question: 'What does "streaming" mean?',
    options: [
      'Downloading a movie to keep forever',
      'Watching or listening to content live over the internet',
      'Sending a video to a friend',
      'Recording a video on your phone',
    ],
    correctIndex: 1,
    explanation:
      'Streaming means watching videos or listening to music over the internet in real time, without downloading the whole file first. Netflix, YouTube, and Spotify are streaming services.',
    category: 'Apps',
  },
  {
    question: 'What is a "notification"?',
    options: [
      'An ad that pops up on your phone',
      'An alert from an app about something new',
      'A phone call from an unknown number',
      'A warning that your battery is low',
    ],
    correctIndex: 1,
    explanation:
      'A notification is a message or alert from an app that appears on your screen — like a new text message, email, or reminder. You can control which apps send you notifications.',
    category: 'Apps',
  },
  {
    question: 'What does "posting" mean on social media?',
    options: [
      'Sending a private message to one person',
      'Sharing something (a photo, text, or video) for others to see',
      'Signing up for a new account',
      'Deleting your account',
    ],
    correctIndex: 1,
    explanation:
      'Posting on social media means sharing content — like a photo, message, or video — on your profile or feed where others can see it, like it, or comment on it.',
    category: 'Social Media',
  },
  {
    question: 'What is a "profile" on social media?',
    options: [
      'A type of social media app',
      'Your personal page with your name, photo, and posts',
      'A private message',
      'A group chat with friends',
    ],
    correctIndex: 1,
    explanation:
      'Your profile is your personal page on a social media platform. It usually shows your name, profile photo, and the things you have shared. Other people can visit your profile.',
    category: 'Social Media',
  },
  {
    question: 'What does "private" or "public" mean for your social media account?',
    options: [
      'Whether you can see ads or not',
      'Who can see your posts — everyone or only approved people',
      'How fast your posts load',
      'Whether your account is free or paid',
    ],
    correctIndex: 1,
    explanation:
      'A public account lets anyone see your posts. A private account means only people you approve can see your posts. For safety, many people keep their accounts private.',
    category: 'Social Media',
  },
  {
    question: 'What is a "URL"?',
    options: [
      'A type of computer file',
      'The address of a website (like www.google.com)',
      'A security feature',
      'A social media username',
    ],
    correctIndex: 1,
    explanation:
      'A URL is the web address you type into your browser to go to a website. For example, www.google.com is a URL. URL stands for Uniform Resource Locator.',
    category: 'Internet',
  },
  {
    question: 'What does "VPN" stand for and do?',
    options: [
      'Very Private Network — it makes your phone invisible',
      'Virtual Private Network — it protects your internet activity',
      'Video Player Network — it plays videos faster',
      'Virtual Phone Number — it gives you a second phone number',
    ],
    correctIndex: 1,
    explanation:
      'A VPN (Virtual Private Network) encrypts your internet connection so others cannot easily see what you are doing online. It is especially useful on public Wi-Fi.',
    category: 'Security',
  },
  {
    question: 'What is "spam"?',
    options: [
      'A phone setting',
      'Unwanted messages, emails, or calls',
      'A type of phone virus',
      'A social media feature',
    ],
    correctIndex: 1,
    explanation:
      'Spam refers to unwanted or junk messages — emails you did not sign up for, random texts, or robocalls trying to sell you things or trick you. Most email apps filter spam automatically.',
    category: 'Security',
  },
  {
    question: 'What does "sync" mean?',
    options: [
      'Delete files from all your devices',
      'Keep the same information updated across multiple devices',
      'Connect to a new Wi-Fi network',
      'Turn off your phone',
    ],
    correctIndex: 1,
    explanation:
      'Syncing means keeping your information (like contacts, photos, or calendar events) the same across all your devices. If you add a contact on your phone, it shows up on your tablet too.',
    category: 'Devices',
  },
  {
    question: 'What is a "hashtag" (#)?',
    options: [
      'A way to make text bold',
      'A label that helps people find posts about a topic',
      'A password protection feature',
      'A way to tag someone in a photo',
    ],
    correctIndex: 1,
    explanation:
      'A hashtag is the # symbol followed by a word or phrase (like #travel or #cooking). It groups posts about the same topic together so people can find them easily.',
    category: 'Social Media',
  },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const CATEGORY_ICONS: Record<Category, typeof Globe> = {
  Internet: Globe,
  Devices: Smartphone,
  Security: Shield,
  Apps: AppWindow,
  'Social Media': Users,
};

function getLevel(score: number): { label: string; color: string } {
  if (score <= 5) return { label: 'Beginner', color: 'text-blue-500' };
  if (score <= 10) return { label: 'Growing', color: 'text-amber-500' };
  if (score <= 15) return { label: 'Confident', color: 'text-green-500' };
  return { label: 'Expert', color: 'text-purple-500' };
}

export default function TechGlossaryQuiz() {
  const questions = useMemo(() => shuffle(QUESTIONS), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentIndex];
  const progress = Math.round((currentIndex / questions.length) * 100);
  const answered = selectedOption !== null;
  const isCorrect = answered && selectedOption === question.correctIndex;
  const CatIcon = CATEGORY_ICONS[question.category];
  const level = getLevel(score);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    if (index === question.correctIndex) setScore(s => s + 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <>
      <SEOHead
        title="Tech Vocabulary Quiz"
        description="Test your tech vocabulary with this fun quiz. Learn common tech terms explained in plain English."
        path="/tools/tech-glossary-quiz"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Tech Vocabulary Quiz' },
            ]}
          />
        </div>

        <div className="container max-w-3xl py-8 px-4">
          <div className="text-center mb-10">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Tech Vocabulary Quiz</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              How well do you know common tech words? Answer{' '}
              {questions.length} questions and find out your tech vocabulary
              level.
            </p>
          </div>

          {/* Progress bar */}
          {!showResults && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span>Score: {score}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Results screen */}
          {showResults ? (
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <Trophy className="h-16 w-16 text-primary mx-auto" />
                <div>
                  <div className={`text-5xl font-bold mb-2 ${level.color}`}>
                    {score} / {questions.length}
                  </div>
                  <Badge variant="outline" className="text-base px-4 py-1">
                    Tech Vocabulary Level: {level.label}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {score <= 5 &&
                    'You are just getting started. That is okay! Visit our glossary to learn these terms at your own pace.'}
                  {score > 5 &&
                    score <= 10 &&
                    'You are building a solid foundation. Keep learning and you will be a tech pro in no time.'}
                  {score > 10 &&
                    score <= 15 &&
                    'Nice work! You know your way around common tech terms. A few more and you will be an expert.'}
                  {score > 15 &&
                    'You really know your tech vocabulary. You are ready to help others learn too!'}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={restart} variant="outline" className="gap-2">
                    <RotateCcw className="h-4 w-4" /> Try Again
                  </Button>
                  <Button asChild className="gap-2">
                    <Link to="/glossary">
                      <BookOpen className="h-4 w-4" /> Explore the Glossary
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Question card */
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="gap-1.5">
                    <CatIcon className="h-3.5 w-3.5" />
                    {question.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {questions.length}
                  </span>
                </div>
                <CardTitle className="text-lg mt-3">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options.map((option, i) => {
                  let extraClass = 'hover:bg-muted/50 cursor-pointer';
                  if (answered) {
                    extraClass = 'cursor-default';
                    if (i === question.correctIndex) {
                      extraClass =
                        'bg-green-500 border-green-500 text-white cursor-default';
                    } else if (i === selectedOption && !isCorrect) {
                      extraClass =
                        'bg-red-500 border-red-500 text-white cursor-default';
                    } else {
                      extraClass = 'opacity-50 cursor-default';
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={answered}
                      className={`w-full text-left p-4 rounded-lg border transition-colors flex items-start gap-3 ${extraClass}`}
                    >
                      <span className="flex items-center justify-center h-6 w-6 rounded-full border text-xs font-bold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-sm leading-relaxed">{option}</span>
                      {answered && i === question.correctIndex && (
                        <CheckCircle className="h-5 w-5 ml-auto shrink-0 mt-0.5" />
                      )}
                      {answered && i === selectedOption && !isCorrect && (
                        <XCircle className="h-5 w-5 ml-auto shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}

                {/* Feedback + navigation after answering */}
                {answered && (
                  <div className="mt-4 space-y-4">
                    <div
                      className={`rounded-lg p-4 ${
                        isCorrect
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <span className="font-semibold">
                          {isCorrect ? 'Correct!' : 'Not quite.'}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to="/glossary"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <Lightbulb className="h-3.5 w-3.5" />
                        Learn more in the Glossary
                      </Link>
                      <Button onClick={handleNext} className="gap-2">
                        {currentIndex < questions.length - 1 ? (
                          <>
                            Next Question
                            <ArrowRight className="h-4 w-4" />
                          </>
                        ) : (
                          'See Results'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
