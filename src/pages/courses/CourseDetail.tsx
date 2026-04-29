import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Trophy,
  PlayCircle,
  RotateCcw,
} from 'lucide-react';
import { getCourseBySlug, type CourseLesson } from '@/data/courses';
import {
  getCourseProgress,
  subscribeToCourseUpdates,
  coursePercentComplete,
  courseCompletedLessons,
  isCourseComplete,
  getLessonStatus,
  clearCourseProgress,
  type CourseProgress,
  type LessonStatus,
} from '@/lib/courseProgress';

export default function CourseDetail() {
  const { slug = '' } = useParams();
  const course = getCourseBySlug(slug);
  const [progress, setProgress] = useState<CourseProgress>(() => getCourseProgress());

  useEffect(() => {
    const unsub = subscribeToCourseUpdates(() => setProgress(getCourseProgress()));
    return unsub;
  }, []);

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
          <Card className="border-border max-w-md">
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-2">Course not found</h1>
              <p className="text-muted-foreground mb-5">
                We couldn't find a course with that link. It may have been renamed.
              </p>
              <Button asChild>
                <Link to="/courses">See all courses</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    );
  }

  const pct = coursePercentComplete(course.slug, progress);
  const done = courseCompletedLessons(course.slug, progress);
  const total = course.lessons.length;
  const complete = isCourseComplete(course.slug, progress);

  // Find the next lesson to work on (first one that isn't passed/mastered).
  const nextLessonIndex = course.lessons.findIndex((lesson) => {
    const status = getLessonStatus(course.slug, lesson.id, progress);
    return status !== 'passed' && status !== 'mastered';
  });
  const nextLesson = nextLessonIndex >= 0 ? course.lessons[nextLessonIndex] : null;

  const handleReset = () => {
    if (confirm(`Reset your progress in "${course.title}"? Lesson scores will be cleared.`)) {
      setProgress(clearCourseProgress(course.slug));
    }
  };

  return (
    <>
      <SEOHead
        title={`${course.title} — TekSure Course`}
        path={`/courses/${course.slug}`}
        description={course.tagline}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container max-w-4xl mx-auto px-4 pt-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All courses
          </Link>
        </div>

        {/* Header */}
        <section className="container max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-start gap-4 mb-5">
            <div
              className="p-4 rounded-2xl bg-primary/10 text-4xl leading-none shrink-0"
              aria-hidden="true"
            >
              {course.emoji}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="px-2 py-0.5 rounded-full bg-muted">Level {course.level}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {course.totalMinutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <PlayCircle className="h-3 w-3" />
                  {total} lessons
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                {course.title}
              </h1>
              <p className="text-muted-foreground">{course.tagline}</p>
            </div>
          </div>

          <p className="text-base text-foreground/90 mb-6">{course.intro}</p>

          {/* Progress + primary CTA */}
          <Card className="border-border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{done}</strong> of {total} lessons passed
                </span>
                <span className="font-medium">{pct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden mb-4">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${pct}%` }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {complete ? (
                  <Button asChild>
                    <Link to={`/courses/${course.slug}/certificate`} className="gap-2">
                      <Trophy className="h-4 w-4" />
                      View your certificate
                    </Link>
                  </Button>
                ) : nextLesson ? (
                  <Button asChild>
                    <Link
                      to={`/courses/${course.slug}/lesson/${nextLesson.id}`}
                      className="gap-2"
                    >
                      {done > 0 ? 'Continue' : 'Start course'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}

                {done > 0 && !complete && (
                  <Button variant="ghost" size="sm" onClick={handleReset} className="gap-2 text-muted-foreground">
                    <RotateCcw className="h-4 w-4" />
                    Reset course
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Lessons list */}
        <section className="container max-w-4xl mx-auto px-4 pb-6">
          <h2 className="text-xl font-bold mb-4">Lessons</h2>
          <ol className="space-y-2">
            {course.lessons.map((lesson, i) => {
              const status = getLessonStatus(course.slug, lesson.id, progress);
              return (
                <LessonRow
                  key={lesson.id}
                  courseSlug={course.slug}
                  lesson={lesson}
                  index={i}
                  status={status}
                />
              );
            })}
          </ol>
        </section>

        {/* Certificate teaser */}
        <section className="container max-w-4xl mx-auto px-4 pb-16">
          <Card className="border-border">
            <CardContent className="p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold">{course.certificateTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    {complete
                      ? 'Ready to view — print it, share it, or save a PDF.'
                      : 'Pass every lesson to unlock a printable certificate with your name.'}
                  </p>
                </div>
              </div>
              <Button asChild variant={complete ? 'default' : 'outline'} size="sm">
                <Link to={`/courses/${course.slug}/certificate`}>
                  {complete ? 'View certificate' : 'Preview'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------

function LessonRow({
  courseSlug,
  lesson,
  index,
  status,
}: {
  courseSlug: string;
  lesson: CourseLesson;
  index: number;
  status: LessonStatus;
}) {
  const statusBadge = (() => {
    switch (status) {
      case 'mastered':
        return (
          <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <Trophy className="h-3.5 w-3.5" />
            Mastered
          </span>
        );
      case 'passed':
        return (
          <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Passed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 text-xs font-medium">
            <Circle className="h-3.5 w-3.5 fill-current" />
            In progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
            <Circle className="h-3.5 w-3.5" />
            Not started
          </span>
        );
    }
  })();

  return (
    <li>
      <Link
        to={`/courses/${courseSlug}/lesson/${lesson.id}`}
        className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
          {index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold truncate">{lesson.title}</p>
          <p className="text-xs text-muted-foreground truncate">{lesson.outcome}</p>
          <div className="mt-1.5">{statusBadge}</div>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
      </Link>
    </li>
  );
}
