import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShieldCheck, ExternalLink, CheckCircle, XCircle, AlertTriangle, ArrowRight, RotateCcw, Search, Image, Newspaper, BarChart3, Globe } from 'lucide-react';

const FACT_CHECKERS = [
  { name: 'Snopes', url: 'https://www.snopes.com/', description: 'The internet\'s oldest fact-checking site. Covers urban legends, rumors, and viral claims.', category: 'general' },
  { name: 'FactCheck.org', url: 'https://www.factcheck.org/', description: 'Non-partisan fact-checking from the Annenberg Public Policy Center at the University of Pennsylvania.', category: 'general' },
  { name: 'PolitiFact', url: 'https://www.politifact.com/', description: 'Pulitzer Prize-winning political fact-checker. Rates claims on the "Truth-O-Meter."', category: 'political' },
  { name: 'AP Fact Check', url: 'https://apnews.com/hub/ap-fact-check', description: 'Associated Press fact-checking — one of the most trusted news organizations in the world.', category: 'general' },
  { name: 'Reuters Fact Check', url: 'https://www.reuters.com/fact-check/', description: 'Reuters global fact-checking team verifies claims, photos, and videos.', category: 'general' },
  { name: 'Google Fact Check Explorer', url: 'https://toolbox.google.com/factcheck/explorer', description: 'Search across fact-checks from hundreds of organizations worldwide.', category: 'general' },
  { name: 'AFP Fact Check', url: 'https://factcheck.afp.com/', description: 'Agence France-Presse fact-checking in 80+ countries and 20+ languages.', category: 'general' },
  { name: 'Full Fact', url: 'https://fullfact.org/', description: 'UK-based independent fact-checker. Covers health, science, politics, and viral claims.', category: 'general' },
  { name: 'ClaimBuster', url: 'https://idir.uta.edu/claimbuster/', description: 'AI-powered tool that scores sentences by how "check-worthy" they are.', category: 'tools' },
  { name: 'Hoaxy', url: 'https://hoaxy.osome.iu.edu/', description: 'Visualize how claims and fact-checks spread on Twitter/X.', category: 'tools' },
];

const IMAGE_VERIFIERS = [
  { name: 'FotoForensics', url: 'https://fotoforensics.com/', description: 'Error Level Analysis (ELA) to detect if an image has been digitally modified.' },
  { name: 'Forensically', url: 'https://29a.ch/photo-forensics/', description: 'Browser-based image forensics — clone detection, noise analysis, and metadata extraction.' },
  { name: 'InVID Verification', url: 'https://www.invid-project.eu/tools-and-services/', description: 'EU-funded toolkit for verifying images and videos — includes keyframe extraction.' },
  { name: 'Jeffrey\'s EXIF Viewer', url: 'https://exif.regex.info/', description: 'Extract and display all EXIF metadata from any image — camera, GPS, date, software used.' },
  { name: 'Google Reverse Image', url: 'https://images.google.com/', description: 'Upload an image to find where else it appears online and when it was first published.' },
];

const BIAS_CHECKERS = [
  { name: 'AllSides', url: 'https://www.allsides.com/', description: 'See the same news story from left, center, and right perspectives side by side.' },
  { name: 'Media Bias/Fact Check', url: 'https://mediabiasfactcheck.com/', description: 'Look up any news source to see its political bias rating and factual accuracy score.' },
  { name: 'Ad Fontes Media', url: 'https://adfontesmedia.com/', description: 'Interactive media bias chart — rates news sources on reliability and bias.' },
  { name: 'Ground News', url: 'https://ground.news/', description: 'See how the same story is covered across the political spectrum with blind spot alerts.' },
];

const RED_FLAGS = [
  'The headline uses ALL CAPS or excessive exclamation points!!!',
  'The article has no author name or publication date',
  'The website URL looks unusual (misspellings, extra words, strange domain)',
  'The story makes you feel strong emotions (anger, fear, outrage) immediately',
  'No other reputable news outlets are reporting the same story',
  'The article cites no sources, studies, or named experts',
  'Images look manipulated, out of context, or too dramatic',
  'The "About Us" page is missing or vague about who runs the site',
];

interface QuizQuestion { headline: string; isFake: boolean; explanation: string; }
const QUIZ: QuizQuestion[] = [
  { headline: 'Scientists Discover New Species of Fish That Can Walk on Land', isFake: false, explanation: 'Several species of fish can "walk" — mudskippers and certain catfish use their fins to move on land. New species are discovered regularly.' },
  { headline: 'BREAKING: Government to Ban All Cell Phones for Children Under 16', isFake: true, explanation: 'The all-caps "BREAKING" and extreme claim ("ban ALL cell phones") are red flags. No democratic government has enacted such a sweeping ban. Always check if major news outlets are reporting the same story.' },
  { headline: 'Study Finds Coffee Drinkers Live 10 Years Longer on Average', isFake: true, explanation: 'The "10 years" claim is extreme. While some studies link moderate coffee consumption to health benefits, no credible study claims a 10-year life extension. Exaggerated health claims are a common form of misinformation.' },
  { headline: 'NASA Confirms Water Ice on the Moon\'s South Pole', isFake: false, explanation: 'NASA\'s Lunar Reconnaissance Orbiter and India\'s Chandrayaan missions have confirmed the presence of water ice in permanently shadowed craters near the Moon\'s south pole.' },
  { headline: 'Local Man Wins Lottery Twice in Same Week Using Secret Math Formula', isFake: true, explanation: 'Lotteries are random — no formula can predict winning numbers. "Secret formula" claims are designed to get clicks and sometimes sell scam products.' },
];

export default function FactCheckToolkit() {
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const q = QUIZ[quizIdx];
  const handleQuiz = (fake: boolean) => { setQuizAnswer(fake); if (fake === q.isFake) setQuizScore(s => s + 1); };
  const nextQuiz = () => { if (quizIdx < QUIZ.length - 1) { setQuizIdx(i => i + 1); setQuizAnswer(null); } else setQuizDone(true); };
  const resetQuiz = () => { setQuizIdx(0); setQuizAnswer(null); setQuizScore(0); setQuizDone(false); };

  return (
    <>
      <SEOHead title="Fact-Check Toolkit" description="Verify claims, check images for manipulation, spot fake news, and test your fact-checking skills." path="/tools/fact-check-toolkit" />
      <main className="min-h-screen bg-background"><div className="container max-w-4xl py-12 px-4">
        <div className="text-center mb-10"><ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Fact-Check Toolkit</h1><p className="text-muted-foreground max-w-lg mx-auto">Verify claims, check images for manipulation, and learn how to spot misinformation.</p></div>

        <Tabs defaultValue="checkers">
          <TabsList className="w-full justify-start mb-6 flex-wrap">
            <TabsTrigger value="checkers" className="gap-1.5"><Search className="h-3.5 w-3.5" /> Fact Checkers</TabsTrigger>
            <TabsTrigger value="images" className="gap-1.5"><Image className="h-3.5 w-3.5" /> Image Verification</TabsTrigger>
            <TabsTrigger value="bias" className="gap-1.5"><BarChart3 className="h-3.5 w-3.5" /> Media Bias</TabsTrigger>
            <TabsTrigger value="redflags" className="gap-1.5"><AlertTriangle className="h-3.5 w-3.5" /> Red Flags</TabsTrigger>
            <TabsTrigger value="quiz" className="gap-1.5"><Globe className="h-3.5 w-3.5" /> Quiz</TabsTrigger>
          </TabsList>

          <TabsContent value="checkers">
            <div className="grid sm:grid-cols-2 gap-3">{FACT_CHECKERS.map(fc => (
              <Card key={fc.name}><CardContent className="p-4">
                <div className="flex items-start justify-between mb-2"><h3 className="font-semibold text-sm">{fc.name}</h3><Badge variant="outline" className="text-xs">{fc.category === 'general' ? 'General' : fc.category === 'political' ? 'Political' : 'Tool'}</Badge></div>
                <p className="text-xs text-muted-foreground mb-3">{fc.description}</p>
                <a href={fc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Visit <ExternalLink className="h-3 w-3" /></a>
              </CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="images">
            <p className="text-sm text-muted-foreground mb-4">These tools help detect if an image has been digitally altered, taken out of context, or generated by AI.</p>
            <div className="grid sm:grid-cols-2 gap-3">{IMAGE_VERIFIERS.map(iv => (
              <Card key={iv.name}><CardContent className="p-4"><h3 className="font-semibold text-sm mb-1">{iv.name}</h3><p className="text-xs text-muted-foreground mb-3">{iv.description}</p><a href={iv.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Open <ExternalLink className="h-3 w-3" /></a></CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="bias">
            <p className="text-sm text-muted-foreground mb-4">Understanding media bias helps you evaluate sources. These tools rate news outlets on their political leaning and factual accuracy.</p>
            <div className="grid sm:grid-cols-2 gap-3">{BIAS_CHECKERS.map(bc => (
              <Card key={bc.name}><CardContent className="p-4"><h3 className="font-semibold text-sm mb-1">{bc.name}</h3><p className="text-xs text-muted-foreground mb-3">{bc.description}</p><a href={bc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Visit <ExternalLink className="h-3 w-3" /></a></CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="redflags">
            <Card><CardContent className="p-6"><h2 className="text-lg font-semibold mb-4">How to Spot Fake News: 8 Red Flags</h2>
              <div className="space-y-3">{RED_FLAGS.map((flag, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"><AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /><p className="text-sm">{flag}</p></div>
              ))}</div>
              <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30"><h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Quick verification checklist</h3>
                <ol className="space-y-1 text-xs text-muted-foreground list-decimal list-inside">{['Search the headline on Google — are major news outlets reporting it?', 'Check the source — who published this? Are they credible?', 'Read past the headline — does the article body support the headline?', 'Check the date — is this current or old news being reshared?', 'Look for the original source — who said or did this first?'].map((s, i) => <li key={i}>{s}</li>)}</ol>
              </div>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="quiz">
            {quizDone ? (
              <Card><CardContent className="p-8 text-center">
                <div className={`text-6xl font-bold mb-4 ${quizScore >= 4 ? 'text-green-500' : quizScore >= 3 ? 'text-amber-500' : 'text-red-500'}`}>{quizScore}/{QUIZ.length}</div>
                <h2 className="text-xl font-bold mb-2">{quizScore >= 4 ? 'Sharp eye! You can spot fake news.' : quizScore >= 3 ? 'Not bad — but some fakes slipped through.' : 'Keep practicing! Fake news is tricky.'}</h2>
                <Button onClick={resetQuiz} className="mt-4 gap-2"><RotateCcw className="h-4 w-4" /> Try Again</Button>
              </CardContent></Card>
            ) : (
              <Card><CardContent className="p-6">
                <div className="flex items-center justify-between mb-4"><span className="text-sm text-muted-foreground">Headline {quizIdx + 1} of {QUIZ.length}</span><span className="text-sm font-medium">{quizScore} correct</span></div>
                <div className="rounded-xl bg-muted p-5 mb-6"><Newspaper className="h-5 w-5 text-muted-foreground mb-2" /><h2 className="text-lg font-bold leading-snug">{q.headline}</h2></div>
                {quizAnswer === null ? (
                  <div className="flex gap-3"><Button onClick={() => handleQuiz(true)} variant="destructive" className="flex-1 gap-2"><XCircle className="h-4 w-4" /> Fake / Misleading</Button><Button onClick={() => handleQuiz(false)} className="flex-1 gap-2"><CheckCircle className="h-4 w-4" /> Real / Plausible</Button></div>
                ) : (
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 ${quizAnswer === q.isFake ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                      <div className="flex items-center gap-2 mb-2">{quizAnswer === q.isFake ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}<span className="font-semibold">{quizAnswer === q.isFake ? 'Correct!' : 'Not quite.'}</span><Badge variant="outline" className="ml-auto text-xs">{q.isFake ? 'FAKE' : 'REAL'}</Badge></div>
                      <p className="text-sm">{q.explanation}</p>
                    </div>
                    <Button onClick={nextQuiz} className="w-full gap-2">{quizIdx < QUIZ.length - 1 ? <>Next <ArrowRight className="h-4 w-4" /></> : 'See Results'}</Button>
                  </div>
                )}
              </CardContent></Card>
            )}
          </TabsContent>
        </Tabs>
      </div></main>
    </>
  );
}
