import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Target,
  Trophy,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { getLessonInCourse, type QuizQuestion, type CourseLesson as CourseLessonType } from '@/data/courses';
import { guides } from '@/data/guides';
import {
  markCourseStarted,
  recordQuizAttempt,
  getLessonStatus,
  getLessonRecord,
  PASSING_SCORE,
} from '@/lib/courseProgress';
import { MiniQuiz } from '@/components/courses/MiniQuiz';

export default function CourseLesson() {
  const { slug = '', lessonId = '' } = useParams();
  const result = getLessonInCourse(slug, lessonId);

  useEffect(() => {
    if (result) markCourseStarted(result.course.slug);
  }, [result?.course.slug]);

  if (!result) {
    return <Navigate to={`/courses/${slug}`} replace />;
  }

  const { course, lesson, index, next } = result;
  const guide = useMemo(() => guides.find((g) => g.slug === lesson.guideSlug), [lesson.guideSlug]);

  const priorStatus = getLessonStatus(course.slug, lesson.id);
  const priorRecord = getLessonRecord(course.slug, lesson.id);

  // Quiz state — `submittedScore` is null until the learner finishes the quiz.
  const [submittedScore, setSubmittedScore] = useState<number | null>(null);
  const [courseJustCompleted, setCourseJustCompleted] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);

  const handleQuizComplete = (score: number) => {
    const { courseJustCompleted: done } = recordQuizAttempt({
      courseSlug: course.slug,
      lessonId: lesson.id,
      score,
    });
    setSubmittedScore(score);
    setCourseJustCompleted(done);
  };

  const retake = () => {
    setSubmittedScore(null);
    setCourseJustCompleted(false);
    setAttemptKey((k) => k + 1);
  };

  const passedThisAttempt = submittedScore !== null && submittedScore >= PASSING_SCORE;

  return (
    <>
      <SEOHead
        title={`${lesson.title} — ${course.title}`}
        path={`/courses/${course.slug}/lesson/${lesson.id}`}
        description={lesson.outcome}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container max-w-3xl mx-auto px-4 pt-6">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-foreground">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/courses/${course.slug}`} className="hover:text-foreground truncate">
              {course.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">
              Lesson {index + 1} of {course.lessons.length}
            </span>
          </nav>
        </div>

        {/* Header */}
        <section className="container max-w-3xl mx-auto px-4 py-8">
          <p className="text-sm text-muted-foreground mb-2">
            <span aria-hidden="true">{course.emoji}</span> {course.title}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">{lesson.title}</h1>
          <p className="text-muted-foreground text-lg">{lesson.outcome}</p>
          {priorStatus !== 'not-started' && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
              {priorStatus === 'mastered' ? (
                <>
                  <Trophy className="h-4 w-4 text-emerald-600" />
                  <span>You've mastered this lesson — best: {priorRecord?.best}/3</span>
                </>
              ) : priorStatus === 'passed' ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>You've passed this lesson — best: {priorRecord?.best}/3</span>
                </>
              ) : (
                <>
                  <Target className="h-4 w-4 text-amber-600" />
                  <span>Best so far: {priorRecord?.best}/3 — keep going</span>
                </>
              )}
            </div>
          )}
        </section>

        {/* Lesson content (guide summary) */}
        <section className="container max-w-3xl mx-auto px-4 pb-8">
          {guide ? (
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>Lesson reading · {guide.readTime}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    <Link to={`/guides/${guide.slug}`} target="_blank" rel="noreferrer">
                      Full guide
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>

                <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span aria-hidden="true">{guide.thumbnailEmoji}</span>
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mb-5">{guide.excerpt}</p>

                {guide.steps && guide.steps.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-foreground">Key steps</h3>
                    <ol className="space-y-3">
                      {guide.steps.slice(0, 6).map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary font-semibold text-xs shrink-0">
                            {i + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="font-medium text-sm">{step.title}</p>
                            {(step.content || step.description) && (
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {step.content || step.description}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                    {guide.steps.length > 6 && (
                      <Button asChild variant="link" size="sm" className="px-0">
                        <Link to={`/guides/${guide.slug}`} target="_blank" rel="noreferrer">
                          Read all {guide.steps.length} steps in the full guide
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border border-dashed">
              <CardContent className="p-6 text-sm text-muted-foreground">
                This lesson's reading hasn't been linked yet. You can still take the mini-quiz
                below.
              </CardContent>
            </Card>
          )}
        </section>

        {/* Quiz */}
        <section className="container max-w-3xl mx-auto px-4 pb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Check your understanding</h2>
            <span className="text-xs text-muted-foreground">
              Pass: {PASSING_SCORE} of 3 correct
            </span>
          </div>
          <MiniQuiz
            key={attemptKey}
            questions={lesson.quiz}
            onComplete={handleQuizComplete}
          />
        </section>

        {/* Result */}
        {submittedScore !== null && (
          <section className="container max-w-3xl mx-auto px-4 pb-16">
            <Card
              className={
                passedThisAttempt
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-amber-500/30 bg-amber-500/5'
              }
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  {passedThisAttempt ? (
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  ) : (
                    <Target className="h-6 w-6 text-amber-600 shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold text-lg">
                      You got {submittedScore} of {lesson.quiz.length}.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {submittedScore === 3
                        ? 'Mastered — three for three.'
                        : passedThisAttempt
                        ? 'Lesson passed. Keep going.'
                        : 'Not quite — try again, or review the reading above.'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" onClick={retake} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retake quiz
                  </Button>

                  {passedThisAttempt && lesson.practice && (
                    <Button asChild size="sm" variant="secondary">
                      <Link to={lesson.practice.path} className="gap-2">
                        <Target className="h-4 w-4" />
                        {lesson.practice.label}
                      </Link>
                    </Button>
                  )}

                  {passedThisAttempt && next && (
                    <Button asChild size="sm">
                      <Link to={`/courses/${course.slug}/lesson/${next.id}`} className="gap-2">
                        Next lesson
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {passedThisAttempt && !next && (
                    <Button asChild size="sm">
                      <Link to={`/courses/${course.slug}/certificate`} className="gap-2">
                        <Trophy className="h-4 w-4" />
                        View certificate
                      </Link>
                    </Button>
                  )}
                </div>

                {courseJustCompleted && (
                  <div className="mt-5 pt-5 border-t border-emerald-500/20 flex items-center gap-3 text-sm">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>
                      <strong>Course complete!</strong> You've earned the{' '}
                      <Link
                        to={`/courses/${course.slug}/certificate`}
                        className="underline font-medium"
                      >
                        {course.certificateTitle}
                      </Link>
                      .
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Lesson nav (always available) */}
        <section className="container max-w-3xl mx-auto px-4 pb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <Button variant="ghost" size="sm" asChild>
              <Link to={`/courses/${course.slug}`} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to course
              </Link>
            </Button>
            {next && (
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/courses/${course.slug}/lesson/${next.id}`} className="gap-2">
                  Skip to next lesson
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
