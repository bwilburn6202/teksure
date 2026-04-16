import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question { term: string; correct: string; wrong: string[]; }

const QUESTIONS: Question[] = [
  { term: 'Phishing', correct: 'A fake email or message designed to trick you into giving away personal information', wrong: ['A type of computer virus', 'A way to speed up your internet', 'A social media privacy setting'] },
  { term: 'Cloud Storage', correct: 'Saving your files on the internet so you can access them from any device', wrong: ['A weather-tracking app', 'A type of USB drive', 'A computer cooling system'] },
  { term: 'Two-Factor Authentication (2FA)', correct: 'A security feature that requires a second code (like a text message) in addition to your password', wrong: ['Using two different passwords at the same time', 'A way to log in twice as fast', 'Having two email accounts'] },
  { term: 'VPN', correct: 'A tool that encrypts your internet connection and hides your online activity', wrong: ['A type of antivirus software', 'A faster version of Wi-Fi', 'A video calling app'] },
  { term: 'Malware', correct: 'Software designed to harm your computer or steal your information', wrong: ['A broken website link', 'A slow internet connection', 'An email attachment'] },
  { term: 'Browser', correct: 'An app used to visit websites (like Chrome, Safari, or Firefox)', wrong: ['The home screen of your phone', 'A search engine like Google', 'Your email inbox'] },
  { term: 'Bluetooth', correct: 'A wireless technology for connecting devices over short distances (like headphones to your phone)', wrong: ['A type of internet connection', 'A phone screen protector', 'A social media platform'] },
  { term: 'Cache', correct: 'Temporary data stored by apps and websites to load faster next time', wrong: ['Money stored in a digital wallet', 'A type of computer memory upgrade', 'A hidden folder on your desktop'] },
  { term: 'Bandwidth', correct: 'The maximum amount of data your internet connection can handle at once', wrong: ['The physical width of a cable', 'A music streaming quality setting', 'The range of your Wi-Fi signal'] },
  { term: 'Encryption', correct: 'Scrambling data so only authorized people can read it', wrong: ['Compressing a file to make it smaller', 'Deleting files permanently', 'Blocking websites from loading'] },
];

export default function TechGlossaryQuiz() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shuffled] = useState(() => QUESTIONS.map(q => ({ ...q, options: [q.correct, ...q.wrong].sort(() => Math.random() - 0.5) })));
  const q = shuffled[idx];
  const handleSelect = (opt: string) => { if (selected) return; setSelected(opt); if (opt === q.correct) setScore(s => s + 1); };
  const next = () => { if (idx < QUESTIONS.length - 1) { setIdx(i => i + 1); setSelected(null); } else setDone(true); };
  const restart = () => { setIdx(0); setSelected(null); setScore(0); setDone(false); };
  const pct = Math.round((score / QUESTIONS.length) * 100);
  return (
    <>
      <SEOHead title="Tech Glossary Quiz" description="Test your tech vocabulary with this fun quiz. Learn common tech terms in plain English." path="/tools/tech-glossary-quiz" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><BookOpen className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Tech Glossary Quiz</h1><p className="text-muted-foreground">How well do you know common tech terms?</p></div>
        {done ? (
          <Card><CardContent className="p-8 text-center"><div className={`text-6xl font-bold mb-4 ${pct >= 80 ? 'text-green-500' : pct >= 50 ? 'text-amber-500' : 'text-red-500'}`}>{pct}%</div><h2 className="text-xl font-bold mb-2">{score} out of {QUESTIONS.length} correct</h2><p className="text-muted-foreground mb-6">{pct >= 80 ? 'Excellent! You really know your tech terms.' : pct >= 50 ? 'Good effort! Review the ones you missed.' : 'Keep learning! Check out our Glossary page for more terms.'}</p><Button onClick={restart} className="gap-2"><RotateCcw className="h-4 w-4" /> Try Again</Button></CardContent></Card>
        ) : (
          <Card><CardContent className="p-6">
            <div className="flex items-center justify-between mb-4"><span className="text-sm text-muted-foreground">{idx + 1} of {QUESTIONS.length}</span><span className="text-sm font-medium">{score} correct</span></div>
            <h2 className="text-xl font-bold mb-1">What is "{q.term}"?</h2>
            <p className="text-sm text-muted-foreground mb-6">Choose the best definition:</p>
            <div className="space-y-2">{q.options.map(opt => {
              const isCorrect = opt === q.correct;
              const isSelected = opt === selected;
              return <button key={opt} onClick={() => handleSelect(opt)} disabled={!!selected} className={`w-full text-left p-4 rounded-lg border text-sm transition-all ${selected ? (isCorrect ? 'border-green-500 bg-green-500/10' : isSelected ? 'border-red-500 bg-red-500/10' : 'border-border opacity-50') : 'border-border hover:border-primary hover:bg-primary/5'}`}><div className="flex items-center gap-2">{selected && isCorrect && <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />}{selected && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-red-500 shrink-0" />}{opt}</div></button>;
            })}</div>
            {selected && <Button onClick={next} className="w-full mt-4 gap-2">{idx < QUESTIONS.length - 1 ? <>Next<ArrowRight className="h-4 w-4" /></> : 'See Results'}</Button>}
          </CardContent></Card>
        )}
      </div></main>
      <Footer />
    </>
  );
}
