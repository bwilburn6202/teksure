import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Award, Printer, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { getCourseBySlug } from '@/data/courses';
import {
  getCourseProgress,
  isCourseComplete,
  setCertificateName,
  subscribeToCourseUpdates,
  courseCompletedLessons,
  type CourseProgress,
} from '@/lib/courseProgress';
import { useAuth } from '@/contexts/AuthContext';

export default function CourseCertificate() {
  const { slug = '' } = useParams();
  const course = getCourseBySlug(slug);
  const { user } = useAuth();
  const [progress, setProgress] = useState<CourseProgress>(() => getCourseProgress());

  useEffect(() => {
    const unsub = subscribeToCourseUpdates(() => setProgress(getCourseProgress()));
    return unsub;
  }, []);

  // Seed the name field from the stored certificate name, falling back to the
  // authenticated user's name. Both are optional.
  const storedName = course ? progress.courses[course.slug]?.certificateName : undefined;
  const defaultName = storedName ?? user?.fullName ?? '';
  const [name, setName] = useState(defaultName);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // If storedName/user changes (e.g. login completes), update the field.
    if (!saved) setName(storedName ?? user?.fullName ?? '');
  }, [storedName, user?.fullName, saved]);

  const completedAtISO = useMemo(() => {
    if (!course) return null;
    const rec = progress.courses[course.slug];
    return rec?.completedAt ? new Date(rec.completedAt) : null;
  }, [course, progress.courses]);

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
          <Card className="border-border max-w-md">
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-2">Course not found</h1>
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

  const complete = isCourseComplete(course.slug, progress);
  const done = courseCompletedLessons(course.slug, progress);
  const total = course.lessons.length;

  const handleSaveName = () => {
    const trimmed = name.trim();
    setCertificateName(course.slug, trimmed.length ? trimmed : null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const displayName = (name.trim() || user?.fullName || 'Learner').replace(/\s+/g, ' ');
  const dateStr = (completedAtISO ?? new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SEOHead
        title={`${course.certificateTitle} — Certificate`}
        path={`/courses/${course.slug}/certificate`}
        description={`Certificate for completing ${course.title} on TekSure.`}
      />
      <Navbar />

      <main className="min-h-screen bg-background print:bg-white">
        <div className="container max-w-4xl mx-auto px-4 pt-6 print:hidden">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to course
          </Link>
        </div>

        {!complete ? (
          <section className="container max-w-3xl mx-auto px-4 py-12">
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-600 mb-4">
                  <Award className="h-8 w-8" aria-hidden="true" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Your certificate is waiting
                </h1>
                <p className="text-muted-foreground mb-6">
                  Pass every lesson in <strong>{course.title}</strong> to unlock your{' '}
                  {course.certificateTitle}. You're at{' '}
                  <strong>
                    {done} of {total}
                  </strong>{' '}
                  lessons.
                </p>
                <Button asChild>
                  <Link to={`/courses/${course.slug}`}>Continue the course</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        ) : (
          <>
            {/* Controls (hidden on print) */}
            <section className="container max-w-4xl mx-auto px-4 py-8 print:hidden">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-1">Your certificate is ready</h1>
                  <p className="text-sm text-muted-foreground mb-5">
                    Add the name you'd like printed, then save or print. Use your browser's
                    "Save as PDF" option in the print dialog to download a copy.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
                    <div className="flex-1 min-w-0 w-full">
                      <label htmlFor="cert-name" className="text-sm font-medium">
                        Name on certificate
                      </label>
                      <Input
                        id="cert-name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setSaved(false);
                        }}
                        placeholder="e.g. Margaret Thompson"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button variant="outline" onClick={handleSaveName} className="gap-2">
                        {saved ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            Saved
                          </>
                        ) : (
                          'Save name'
                        )}
                      </Button>
                      <Button onClick={handlePrint} className="gap-2">
                        <Printer className="h-4 w-4" />
                        Print
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Certificate */}
            <section className="container max-w-4xl mx-auto px-4 pb-16 print:py-0 print:px-0 print:max-w-none">
              <div
                id="teksure-certificate"
                className="relative bg-white text-slate-900 border-[6px] border-double border-amber-500 rounded-2xl p-10 md:p-14 shadow-md print:shadow-none print:rounded-none print:border-[6px] print:border-amber-500"
                style={{ aspectRatio: '297 / 210' }}
              >
                {/* Ornamental corner */}
                <div className="absolute top-4 right-4 flex items-center gap-1 text-amber-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs tracking-widest uppercase">TekSure</span>
                </div>

                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="inline-flex p-4 rounded-full bg-amber-500/10 text-amber-600 mb-4">
                    <Trophy className="h-10 w-10" aria-hidden="true" />
                  </div>

                  <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-500 mb-2">
                    Certificate of Completion
                  </p>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
                    {course.certificateTitle}
                  </h2>

                  <p className="text-sm md:text-base text-slate-600 mb-2">This certifies that</p>
                  <p className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-5 max-w-full break-words">
                    {displayName}
                  </p>

                  <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mb-6">
                    has completed every lesson and mini-quiz in <em>{course.title}</em> on
                    TekSure, a course of {total} lessons covering {course.totalMinutes} minutes
                    of practical learning.
                  </p>

                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-auto pt-6 border-t border-amber-500/30 w-full max-w-2xl mx-auto">
                    <div className="flex-1 text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Awarded</p>
                      <p className="font-medium">{dateStr}</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Level</p>
                      <p className="font-medium">
                        Level {course.level} · {course.emoji} {course.title.split(' ')[0]}
                      </p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Issued by</p>
                      <p className="font-medium">TekSure.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Next steps */}
            <section className="container max-w-4xl mx-auto px-4 pb-16 print:hidden">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-3">What's next</h2>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="secondary">
                      <Link to="/courses">Browse other courses</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to={`/courses/${course.slug}`}>Revisit this course</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </>
        )}
      </main>

      <Footer />

      {/* Print-only CSS: hide chrome, keep just the certificate card. */}
      <style>{`
        @media print {
          html, body { background: white !important; }
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          #teksure-certificate { box-shadow: none !important; border-radius: 0 !important; }
          @page { size: landscape; margin: 0.5in; }
        }
      `}</style>
    </>
  );
}
