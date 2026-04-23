/**
 * Courses — local progress tracking.
 *
 * Mirrors the practiceProgress.ts pattern: localStorage-first, event-based
 * updates, cross-tab sync. A course is "complete" when every lesson has a
 * passing quiz score (2/3 correct). A perfect 3/3 marks the lesson as
 * "mastered" — purely for the UI; both count as complete.
 *
 * Scores are stored per lesson as a best-of-attempts score so retakes never
 * make a learner worse off.
 */

import { COURSES, getCourseBySlug } from '@/data/courses';

const STORAGE_KEY = 'teksure-course-progress';
const EVENT_NAME = 'teksure-course-update';

/** Passing threshold on a 3-question mini-quiz. */
export const PASSING_SCORE = 2;

export type LessonStatus = 'not-started' | 'in-progress' | 'passed' | 'mastered';

export interface LessonRecord {
  /** Best score the learner has achieved on this lesson's quiz (0–3). */
  best: number;
  /** Total number of attempts the learner has made. */
  attempts: number;
  /** epoch ms the lesson was first passed, or null if not yet. */
  passedAt: number | null;
  /** epoch ms of the most recent attempt. */
  lastAt: number;
}

export interface CourseRecord {
  /** epoch ms the course was first opened. */
  startedAt: number;
  /** epoch ms the course was first completed (every lesson passed). */
  completedAt: number | null;
  /** Learner's custom name on the certificate, if they set one. */
  certificateName?: string;
}

export interface CourseProgress {
  /** Per-course meta. */
  courses: Record<string, CourseRecord>;
  /** Keyed by "<courseSlug>:<lessonId>". */
  lessons: Record<string, LessonRecord>;
}

function emptyProgress(): CourseProgress {
  return { courses: {}, lessons: {} };
}

function lessonKey(courseSlug: string, lessonId: string): string {
  return `${courseSlug}:${lessonId}`;
}

export function getCourseProgress(): CourseProgress {
  if (typeof window === 'undefined') return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as CourseProgress;
    return {
      courses: parsed.courses || {},
      lessons: parsed.lessons || {},
    };
  } catch {
    return emptyProgress();
  }
}

function writeProgress(next: CourseProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // quota exceeded — silently no-op
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch {}
}

/**
 * Mark a course as started. Safe to call repeatedly — only the first call
 * sets `startedAt`.
 */
export function markCourseStarted(courseSlug: string): CourseProgress {
  const current = getCourseProgress();
  if (current.courses[courseSlug]) return current;
  const next: CourseProgress = {
    ...current,
    courses: {
      ...current.courses,
      [courseSlug]: { startedAt: Date.now(), completedAt: null },
    },
  };
  writeProgress(next);
  return next;
}

/**
 * Record a quiz attempt for a lesson. Uses best-of scoring — a lower score
 * on a retake does not downgrade the lesson.
 *
 * Returns `{ progress, isNewPass, courseJustCompleted }` so the UI can
 * celebrate the moment a course finishes.
 */
export function recordQuizAttempt(params: {
  courseSlug: string;
  lessonId: string;
  score: number; // 0–3
}): { progress: CourseProgress; isNewPass: boolean; courseJustCompleted: boolean } {
  const current = getCourseProgress();
  const key = lessonKey(params.courseSlug, params.lessonId);
  const now = Date.now();
  const prior = current.lessons[key];

  const newBest = Math.max(prior?.best ?? 0, params.score);
  const wasPassing = (prior?.best ?? 0) >= PASSING_SCORE;
  const nowPassing = newBest >= PASSING_SCORE;
  const isNewPass = !wasPassing && nowPassing;

  const nextLesson: LessonRecord = {
    best: newBest,
    attempts: (prior?.attempts ?? 0) + 1,
    passedAt: prior?.passedAt ?? (nowPassing ? now : null),
    lastAt: now,
  };

  // Make sure the course is marked started before we check completion.
  const existingCourseRecord = current.courses[params.courseSlug] ?? {
    startedAt: now,
    completedAt: null,
  };

  const tentativeLessons = { ...current.lessons, [key]: nextLesson };

  // Check whether this attempt finished the course.
  const course = getCourseBySlug(params.courseSlug);
  let courseJustCompleted = false;
  let nextCourseRecord = existingCourseRecord;
  if (course && !existingCourseRecord.completedAt) {
    const allPassed = course.lessons.every((lesson) => {
      const rec = tentativeLessons[lessonKey(params.courseSlug, lesson.id)];
      return (rec?.best ?? 0) >= PASSING_SCORE;
    });
    if (allPassed) {
      courseJustCompleted = true;
      nextCourseRecord = { ...existingCourseRecord, completedAt: now };
    }
  }

  const next: CourseProgress = {
    courses: { ...current.courses, [params.courseSlug]: nextCourseRecord },
    lessons: tentativeLessons,
  };

  writeProgress(next);
  return { progress: next, isNewPass, courseJustCompleted };
}

/** Compute the current status of a single lesson. */
export function getLessonStatus(
  courseSlug: string,
  lessonId: string,
  progress?: CourseProgress
): LessonStatus {
  const p = progress ?? getCourseProgress();
  const rec = p.lessons[lessonKey(courseSlug, lessonId)];
  if (!rec || rec.attempts === 0) return 'not-started';
  if (rec.best >= 3) return 'mastered';
  if (rec.best >= PASSING_SCORE) return 'passed';
  return 'in-progress';
}

/** Return the full record for a lesson, or null if never attempted. */
export function getLessonRecord(
  courseSlug: string,
  lessonId: string,
  progress?: CourseProgress
): LessonRecord | null {
  const p = progress ?? getCourseProgress();
  return p.lessons[lessonKey(courseSlug, lessonId)] ?? null;
}

/** Number of lessons in the course the learner has passed or mastered. */
export function courseCompletedLessons(
  courseSlug: string,
  progress?: CourseProgress
): number {
  const p = progress ?? getCourseProgress();
  const course = getCourseBySlug(courseSlug);
  if (!course) return 0;
  return course.lessons.filter((lesson) => {
    const rec = p.lessons[lessonKey(courseSlug, lesson.id)];
    return (rec?.best ?? 0) >= PASSING_SCORE;
  }).length;
}

/** Percent of lessons completed in the course, 0–100. */
export function coursePercentComplete(
  courseSlug: string,
  progress?: CourseProgress
): number {
  const course = getCourseBySlug(courseSlug);
  if (!course || course.lessons.length === 0) return 0;
  const done = courseCompletedLessons(courseSlug, progress);
  return Math.round((done / course.lessons.length) * 100);
}

/** True if every lesson in the course has been passed. */
export function isCourseComplete(
  courseSlug: string,
  progress?: CourseProgress
): boolean {
  const course = getCourseBySlug(courseSlug);
  if (!course) return false;
  const p = progress ?? getCourseProgress();
  const rec = p.courses[courseSlug];
  if (rec?.completedAt) return true;
  // Also derive from lessons in case completion wasn't stamped (legacy data).
  return coursePercentComplete(courseSlug, p) === 100;
}

/** Count across all courses. */
export function totalCoursesCompleted(progress?: CourseProgress): number {
  const p = progress ?? getCourseProgress();
  return COURSES.filter((course) => isCourseComplete(course.slug, p)).length;
}

/** Set (or clear) the name printed on the certificate for a course. */
export function setCertificateName(
  courseSlug: string,
  name: string | null
): CourseProgress {
  const current = getCourseProgress();
  const existing = current.courses[courseSlug] ?? {
    startedAt: Date.now(),
    completedAt: null,
  };
  const next: CourseProgress = {
    ...current,
    courses: {
      ...current.courses,
      [courseSlug]: {
        ...existing,
        certificateName: name ?? undefined,
      },
    },
  };
  writeProgress(next);
  return next;
}

/** Clear a single course's progress (lesson scores + course record). */
export function clearCourseProgress(courseSlug: string): CourseProgress {
  const current = getCourseProgress();
  const { [courseSlug]: _removedCourse, ...restCourses } = current.courses;
  const nextLessons: CourseProgress['lessons'] = {};
  const prefix = `${courseSlug}:`;
  for (const [key, value] of Object.entries(current.lessons)) {
    if (!key.startsWith(prefix)) nextLessons[key] = value;
  }
  const next: CourseProgress = { courses: restCourses, lessons: nextLessons };
  writeProgress(next);
  return next;
}

/** Wipe all course progress. */
export function clearAllCourseProgress(): CourseProgress {
  const fresh = emptyProgress();
  writeProgress(fresh);
  return fresh;
}

/** Subscribe to course-progress changes. */
export function subscribeToCourseUpdates(handler: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const wrapped = () => handler();
  window.addEventListener(EVENT_NAME, wrapped);
  const storageHandler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) handler();
  };
  window.addEventListener('storage', storageHandler);
  return () => {
    window.removeEventListener(EVENT_NAME, wrapped);
    window.removeEventListener('storage', storageHandler);
  };
}
