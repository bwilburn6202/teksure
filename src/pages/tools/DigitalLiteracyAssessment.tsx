import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, ChevronRight, ChevronLeft, RotateCcw, Printer, Share2, CheckCircle, BookOpen, Shield, Smartphone, Mail, Globe } from 'lucide-react';

type Answer = 'yes' | 'somewhat' | 'no' | null;

interface Question {
  text: string;
}

interface Section {
  title: string;
  icon: typeof Globe;
  color: string;
  questions: Question[];
  guideLinks: { label: string; href: string }[];
}

const sections: Section[] = [
  {
    title: 'Internet Basics',
    icon: Globe,
    color: 'text-blue-600',
    questions: [
      { text: 'I can open a web browser (like Chrome, Safari, or Edge) and type in a website address.' },
      { text: 'I can use a search engine like Google to look up information.' },
      { text: 'I know the difference between a website address (URL) and a search query.' },
      { text: 'I can create bookmarks or favorites to save websites I visit often.' },
      { text: 'I can tell the difference between a regular website and an advertisement or pop-up.' },
    ],
    guideLinks: [
      { label: 'Getting Started With the Internet', href: '/guides/internet-basics' },
      { label: 'How to Use Google Search', href: '/guides/google-search-tips' },
    ],
  },
  {
    title: 'Device Management',
    icon: Smartphone,
    color: 'text-green-600',
    questions: [
      { text: 'I can turn my phone, tablet, or computer on and off without help.' },
      { text: 'I can connect to a Wi-Fi network.' },
      { text: 'I know how to update my phone or computer when updates are available.' },
      { text: 'I can install and delete apps on my phone or tablet.' },
      { text: 'I know how to adjust basic settings like screen brightness, volume, and text size.' },
    ],
    guideLinks: [
      { label: 'Wi-Fi Setup Guide', href: '/guides/wifi-setup' },
      { label: 'How to Update Your Phone', href: '/guides/update-phone' },
    ],
  },
  {
    title: 'Communication',
    icon: Mail,
    color: 'text-purple-600',
    questions: [
      { text: 'I can send and receive emails, including opening attachments.' },
      { text: 'I can send text messages and photos from my phone.' },
      { text: 'I can make a video call (using Zoom, FaceTime, Google Meet, or similar).' },
      { text: 'I know how to add a new contact to my phone.' },
      { text: 'I can use a messaging app like WhatsApp, Facebook Messenger, or iMessage.' },
    ],
    guideLinks: [
      { label: 'Video Calling Made Easy', href: '/guides/video-calling' },
      { label: 'Email Basics', href: '/guides/email-basics' },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    color: 'text-red-600',
    questions: [
      { text: 'I use a different password for my important accounts (email, bank, social media).' },
      { text: 'I know how to spot a phishing email or suspicious text message.' },
      { text: 'I know what two-factor authentication is and have it turned on for at least one account.' },
      { text: 'I know not to share personal information (Social Security number, bank info) over email or text.' },
      { text: 'I can lock my phone with a PIN, password, or fingerprint.' },
    ],
    guideLinks: [
      { label: 'Password Safety Guide', href: '/guides/password-safety' },
      { label: 'How to Spot Scams', href: '/guides/spot-scams' },
      { label: 'Two-Factor Authentication Setup', href: '/tools/two-factor-setup' },
    ],
  },
  {
    title: 'Apps & Services',
    icon: BookOpen,
    color: 'text-amber-600',
    questions: [
      { text: 'I can use an online map (like Google Maps or Apple Maps) to get directions.' },
      { text: 'I know how to order something online or use an online shopping app.' },
      { text: 'I can use a photo app to take, view, and share photos.' },
      { text: 'I know how to use at least one streaming service (Netflix, YouTube, Spotify, etc.).' },
      { text: 'I can use a banking app or website to check my account balance.' },
    ],
    guideLinks: [
      { label: 'Online Shopping Safety', href: '/guides/online-shopping' },
      { label: 'Streaming Services Guide', href: '/guides/streaming-setup' },
    ],
  },
];

const answerPoints: Record<Exclude<Answer, null>, number> = { yes: 3, somewhat: 1, no: 0 };

function getTierInfo(score: number) {
  if (score <= 25) return { tier: 'Beginner', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-950/30', description: 'You are just getting started with technology. That is perfectly fine — everyone starts somewhere. Focus on the basics and take it one step at a time.' };
  if (score <= 50) return { tier: 'Developing', color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-950/30', description: 'You have a foundation of digital skills and are building on them. Keep practicing and exploring new features at your own pace.' };
  if (score <= 65) return { tier: 'Capable', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-950/30', description: 'You are comfortable with most everyday technology tasks. You can handle most situations independently and are ready to learn more advanced skills.' };
  return { tier: 'Confident', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-950/30', description: 'You have strong digital skills and can handle a wide variety of tech tasks. You are well-equipped to help others learn too.' };
}

export default function DigitalLiteracyAssessment() {
  const [answers, setAnswers] = useState<Answer[][]>(sections.map(s => Array(s.questions.length).fill(null)));
  const [currentSection, setCurrentSection] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const setAnswer = (sectionIdx: number, questionIdx: number, answer: Answer) => {
    setAnswers(prev => {
      const next = prev.map(s => [...s]);
      next[sectionIdx][questionIdx] = answer;
      return next;
    });
  };

  const sectionScores = useMemo(() =>
    answers.map(section =>
      section.reduce((sum, a) => sum + (a ? answerPoints[a] : 0), 0)
    ), [answers]);

  const totalScore = sectionScores.reduce((a, b) => a + b, 0);
  const maxScore = 75;
  const maxSectionScore = 15;

  const currentSectionComplete = answers[currentSection].every(a => a !== null);
  const allComplete = answers.every(section => section.every(a => a !== null));

  const tierInfo = getTierInfo(totalScore);

  const weakestSections = useMemo(() => {
    const indexed = sectionScores.map((score, i) => ({ score, index: i }));
    return indexed.sort((a, b) => a.score - b.score).slice(0, 2);
  }, [sectionScores]);

  const handleReset = () => {
    setAnswers(sections.map(s => Array(s.questions.length).fill(null)));
    setCurrentSection(0);
    setShowResults(false);
  };

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const text = `I scored ${totalScore} out of ${maxScore} on the TekSure Digital Literacy Assessment — that makes me a "${tierInfo.tier}" level digital user! Take the assessment at teksure.com/tools/digital-literacy-assessment`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Digital Literacy Score', text });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  const SectionIcon = sections[currentSection].icon;

  return (
    <>
      <SEOHead
        title="Digital Literacy Self-Assessment — Test Your Tech Skills | TekSure"
        description="Take a free 25-question self-assessment to measure your digital literacy skills across 5 categories. Get a personalized learning plan based on your results."
        path="/tools/digital-literacy-assessment"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Digital Literacy Assessment' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Digital Literacy Self-Assessment</h1>
            <p className="text-muted-foreground text-lg">
              Answer 25 questions across 5 categories to discover your digital skill level and get a personalized learning plan.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {!showResults ? (
            <>
              {/* Section progress */}
              <div className="flex gap-2">
                {sections.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSection(i)}
                    className={`flex-1 h-2 rounded-full transition-colors ${
                      i === currentSection ? 'bg-primary' : answers[i].every(a => a !== null) ? 'bg-green-400' : 'bg-muted'
                    }`}
                    aria-label={`Go to section ${i + 1}: ${s.title}${answers[i].every(a => a !== null) ? ' (complete)' : ''}`}
                  />
                ))}
              </div>

              {/* Current section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <SectionIcon className={`h-5 w-5 ${sections[currentSection].color}`} aria-hidden="true" />
                    <CardTitle className="text-lg">
                      Section {currentSection + 1} of {sections.length}: {sections[currentSection].title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">For each statement, choose how well it describes you.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sections[currentSection].questions.map((q, qi) => (
                    <div key={qi} className="rounded-lg border p-4">
                      <p className="text-sm font-medium mb-3">{qi + 1}. {q.text}</p>
                      <div className="flex gap-2">
                        {([['yes', 'Yes, I can'], ['somewhat', 'Somewhat'], ['no', 'No, not yet']] as const).map(([value, label]) => (
                          <Button
                            key={value}
                            variant={answers[currentSection][qi] === value ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setAnswer(currentSection, qi, value)}
                            className="flex-1 text-xs sm:text-sm"
                            aria-pressed={answers[currentSection][qi] === value}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Section score */}
                  {currentSectionComplete && (
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Section score</p>
                      <p className="text-2xl font-bold">{sectionScores[currentSection]} / {maxSectionScore}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {sectionScores[currentSection] >= 12 ? 'Great job!' : sectionScores[currentSection] >= 7 ? 'Good foundation — keep learning!' : 'This is a good area to focus on.'}
                      </p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentSection(prev => prev - 1)}
                      disabled={currentSection === 0}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" aria-hidden="true" /> Previous
                    </Button>
                    {currentSection < sections.length - 1 ? (
                      <Button onClick={() => setCurrentSection(prev => prev + 1)}>
                        Next <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                      </Button>
                    ) : (
                      <Button onClick={() => setShowResults(true)} disabled={!allComplete}>
                        See My Results <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Overall result */}
              <Card>
                <CardContent className="pt-8 pb-8 text-center">
                  <GraduationCap className={`h-12 w-12 mx-auto mb-3 ${tierInfo.color}`} aria-hidden="true" />
                  <p className="text-sm text-muted-foreground mb-1">Your digital literacy level</p>
                  <h2 className="text-3xl font-bold mb-2">{tierInfo.tier}</h2>
                  <p className="text-4xl font-bold mb-4">{totalScore} <span className="text-lg text-muted-foreground font-normal">/ {maxScore} points</span></p>
                  <Progress value={(totalScore / maxScore) * 100} className="h-3 max-w-md mx-auto mb-4" aria-label={`${Math.round((totalScore / maxScore) * 100)}% overall score`} />
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">{tierInfo.description}</p>
                </CardContent>
              </Card>

              {/* Section breakdown */}
              <Card>
                <CardHeader><CardTitle className="text-lg">Score Breakdown</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {sections.map((s, i) => {
                    const Icon = s.icon;
                    const pct = Math.round((sectionScores[i] / maxSectionScore) * 100);
                    return (
                      <div key={i}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="flex items-center gap-2">
                            <Icon className={`h-4 w-4 ${s.color}`} aria-hidden="true" />
                            {s.title}
                          </span>
                          <span className="font-medium">{sectionScores[i]} / {maxSectionScore}</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Learning plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5" aria-hidden="true" /> Your Personalized Learning Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Based on your results, here are the areas where you would benefit most from additional learning:
                  </p>
                  {weakestSections.map(({ index }) => {
                    const section = sections[index];
                    const SIcon = section.icon;
                    return (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <SIcon className={`h-4 w-4 ${section.color}`} aria-hidden="true" />
                          <p className="font-medium text-sm">{section.title} ({sectionScores[index]} / {maxSectionScore})</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {sectionScores[index] <= 5
                            ? `Start with the basics of ${section.title.toLowerCase()}. The guides below will walk you through everything step by step.`
                            : `You have some skills in ${section.title.toLowerCase()} but could benefit from additional practice. Check out these guides:`
                          }
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.guideLinks.map((link, li) => (
                            <a key={li} href={link.href} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                              <CheckCircle className="h-3 w-3" aria-hidden="true" /> {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={handleShare} className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" aria-hidden="true" /> Share Results
                </Button>
                <Button variant="outline" onClick={handlePrint} className="flex-1">
                  <Printer className="h-4 w-4 mr-2" aria-hidden="true" /> Print Summary
                </Button>
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" aria-hidden="true" /> Retake Assessment
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
