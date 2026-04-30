import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const APPS = [
  { name: 'Khan Academy Kids', cost: 'FREE', best: 'Ages 2-8. Reading, math, social-emotional. NO ads, NO subscription. Funded by Khan Academy.', good: 'Best free preschool.' },
  { name: 'Khan Academy', cost: 'FREE', best: 'Ages 6-adult. Math, science, history, SAT prep. World-class.', good: 'Best free school-age.' },
  { name: 'PBS Kids', cost: 'FREE', best: 'Educational games + videos. All curated by educators. Free.', good: 'Best free entertainment.' },
  { name: 'ABCmouse', cost: '$13/mo', best: 'Ages 2-8. Reading + math curriculum. 1-month free trial.', good: 'Best curriculum.' },
  { name: 'Epic!', cost: 'FREE for educators / $10/mo home', best: 'Library of 40,000+ kids books. Read aloud option. K-6.', good: 'Best for reading.' },
  { name: 'Duolingo', cost: 'FREE', best: 'Languages for kids 8+. Spanish, French, etc. Game-like.', good: 'Best for languages.' },
  { name: 'Tynker / code.org', cost: 'FREE / $10-30/mo', best: 'Coding for kids. Build games, animations.', good: 'Best for coding.' },
];

export default function OnlineLearningKids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Learning Apps for Kids | TekSure" description="Khan Academy, ABCmouse, PBS Kids. Plain-English picks for educational apps for grandkids — free first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Learning for Kids</h1>
          <p className="text-lg text-muted-foreground">Educational gifts that don&apos;t feel like work.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">By age</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>2-5</strong> — Khan Academy Kids, ABCmouse, PBS Kids.</li>
              <li><strong>5-8</strong> — Epic! reading, Khan Kids, ScratchJr coding, Prodigy Math.</li>
              <li><strong>8-12</strong> — Khan Academy, Duolingo, Scratch coding, BrainPOP, Outschool live classes.</li>
              <li><strong>12+</strong> — Khan Academy SAT prep, Duolingo, Coursera, Codecademy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free tutoring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Learn To Be</strong> — free 1-on-1 online tutoring for under-served kids.</li>
              <li><strong>UPchieve</strong> — free homework help, college counseling for low-income.</li>
              <li><strong>Library tutoring</strong> — many libraries offer free Brainfuse tutoring with library card.</li>
              <li><strong>YouTube channels</strong> — Khan Academy, CrashCourse, MinutePhysics. Free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outschool live classes</h2>
            <p className="text-sm">$15-30 per class. Live online classes from real teachers — math help, art, Minecraft modding, creative writing. Small groups. Best gift for grandkids who finish homework fast or want to dive into a passion.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Library card opens worlds</h3>
            <p className="text-sm text-muted-foreground">Make sure grandkids have library cards. Free access to Hoopla, Libby (audiobooks), Kanopy Kids (movies), often Brainfuse tutoring, often Lynda/LinkedIn Learning. Worth more than any paid app.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
