import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useTier, TIER_META } from '@/contexts/TierContext';
import { COURSES, coursesForTier, type Course } from '@/data/courses';
import {
  getCourseProgress,
  subscribeToCourseUpdates,
  coursePercentComplete,
  courseCompletedLessons,
  isCourseComplete,
  totalCoursesCompleted,
  type CourseProgress,
} from '@/lib/courseProgress';

export default function CourseHub() {
  const { tier } = useTier();
  const [progress, setProgress] = useState<CourseProgress>(() => getCourseProgress());

  useEffect(() => {
    const unsub = subscribeToCourseUpdates(() => setProgress(getCourseProgress()));
    return unsub;
  }, []);

  const ordered = useMemo(() => (tier ? coursesForTier(tier) : COURSES), [tier]);
  const completed = totalCoursesCompleted(progress);
  const anyStarted = ordered.some((c) => courseCompletedLessons(c.slug, progress) > 0);

  return (
    <>
      <SEOHead
        title="Courses — Structured tech learning at your pace"
        path="/courses"
        description="Multi-lesson courses that bundle TekSure guides, mini-quizzes, and hands-on practice into a clear learning path. Finish a course, earn a certificate."
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-12 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-9 w-9 text-primary" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">TekSure Courses</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every course is a short, structured path: read a guide, pass a three-question
              quiz, practice what you learned. Finish every lesson to earn a named certificate.
            </p>

            {tier && (
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-sm">
                <span aria-hidden="true">{TIER_META[tier].emoji}</span>
                <span className="text-muted-foreground">Your level:</span>
                <span className="font-medium">{TIER_META[tier].label}</span>
                <Link to="/setup" className="text-xs text-primary hover:underline ml-1">
                  Change
                </Link>
              </div>
            )}
          </div>
        </section>

        <div className="container max-w-5xl mx-auto px-4 py-10">
          {/* Learner stat strip */}
          {(anyStarted || completed > 0) && (
            <div className="grid grid-cols-3 gap-3 mb-10">
              <StatTile
                icon={<BookOpen className="h-4 w-4" />}
                label="Courses available"
                value={String(ordered.length)}
              />
              <StatTile
                icon={<Trophy className="h-4 w-4" />}
                label="Courses completed"
                value={String(completed)}
              />
              <StatTile
                icon={<Sparkles className="h-4 w-4" />}
                label="Certificates earned"
                value={String(completed)}
              />
            </div>
          )}

          {/* Courses list */}
          <div className="grid md:grid-cols-2 gap-5">
            {ordered.map((course) => (
              <CourseCard key={course.slug} course={course} progress={progress} />
            ))}
          </div>

          {/* How courses work */}
          <Card className="border-border mt-10">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-3">How a course works</h2>
              <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                <li>
                  <strong className="text-foreground">Open a lesson.</strong> You'll read a
                  short guide with clear steps.
                </li>
                <li>
                  <strong className="text-foreground">Take the mini-quiz.</strong> Three
                  questions. Pass with two right and the lesson is marked complete.
                </li>
                <li>
                  <strong className="text-foreground">Try it yourself.</strong> Many lessons
                  end with a practice room or tool so you can use what you learned.
                </li>
                <li>
                  <strong className="text-foreground">Finish the course.</strong> Every lesson
                  passed earns a named certificate you can print or download.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function CourseCard({ course, progress }: { course: Course; progress: CourseProgress }) {
  const pct = coursePercentComplete(course.slug, progress);
  const done = courseCompletedLessons(course.slug, progress);
  const total = course.lessons.length;
  const complete = isCourseComplete(course.slug, progress);

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-2xl leading-none" aria-hidden="true">
            {course.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <span className="px-2 py-0.5 rounded-full bg-muted">Level {course.level}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {course.totalMinutes} min
              </span>
            </div>
            <h3 className="text-lg font-bold leading-tight">{course.title}</h3>
          </div>
        </div>
        {complete ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-label="Completed" />
        ) : (
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{course.tagline}</p>

      <div className="border-t border-border/60 pt-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>
            <strong className="text-foreground">{done}</strong> of {total} lessons
          </span>
          <span className="font-medium text-foreground">{pct}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${pct}%` }}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </Link>
  );
}
