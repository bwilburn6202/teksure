import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Linkedin,
  Search,
  FileText,
  PenTool,
  Video,
  Building2,
  Eye,
  ShieldAlert,
  Users,
  Car,
  GraduationCap,
  Network,
  ArrowRight,
  Phone,
  AlertTriangle,
} from 'lucide-react';

const linkedInTips = [
  {
    title: 'Profile completeness — aim for 100%',
    description:
      'LinkedIn ranks complete profiles higher in recruiter searches. That means a photo, banner, headline, about section, work history, education, and skills. Profiles at 100% get 40x more messages.',
  },
  {
    title: 'Your headshot',
    description:
      'Shoulders up, looking at the camera, decent lighting, simple background. No need for a professional photographer — a smartphone near a window works. Smile. People hire people.',
  },
  {
    title: 'Skills section (most underused)',
    description:
      'Add 30–50 skills. LinkedIn matches recruiter searches to your skills. Get endorsements from coworkers by endorsing them first — most reciprocate within a few days.',
  },
  {
    title: 'Getting recommendations',
    description:
      'Message 3–5 former coworkers and ask for a recommendation. Write a draft for them if you want — they can edit it. Most people say yes when asked directly.',
  },
  {
    title: 'Privacy when job searching',
    description:
      'Settings → Privacy → "Job seeking preferences" → turn on "Open to work". Choose "Recruiters only" so your current employer does not see. The green #OpenToWork banner is optional.',
  },
  {
    title: 'Connecting with strangers — do it politely',
    description:
      'Always add a short personal note with your connection request. "Hi [name], I saw your post about [topic] and would love to connect" works better than a blank invite. Never send a sales pitch in the first message.',
  },
];

const jobBoards = [
  {
    name: 'Indeed',
    description:
      'The largest US job board. Most companies cross-post here. Set up email alerts for specific search terms and locations.',
    best: 'Almost every industry',
  },
  {
    name: 'LinkedIn Jobs',
    description:
      'Strong for professional and tech roles. "Easy Apply" lets you apply in one click with your LinkedIn profile. Check the "Applicant insights" for salary and competition.',
    best: 'White-collar, tech, corporate',
  },
  {
    name: 'ZipRecruiter',
    description:
      'One application sent to many relevant jobs. Good if you want speed and are applying broadly.',
    best: 'Entry to mid-level, general roles',
  },
  {
    name: 'Monster',
    description:
      'One of the oldest boards. Less traffic than Indeed but still worth searching — some employers post here exclusively.',
    best: 'General, older-school industries',
  },
  {
    name: 'Glassdoor',
    description:
      'Read company reviews and salary ranges BEFORE applying. The reviews from real employees tell you what the interview is like and what the company culture actually is.',
    best: 'Research + applying',
  },
  {
    name: 'SimplyHired',
    description:
      'Aggregates listings from across the web. Good secondary search when Indeed is not enough.',
    best: 'Backup search',
  },
  {
    name: 'USAJobs (government)',
    description:
      'usajobs.gov — all federal government jobs. Applications are longer but very structured. Veterans get preference on many roles. Great benefits, strong job security.',
    best: 'Federal government',
  },
];

const resumeTools = [
  {
    name: 'ATS optimization',
    description:
      'Applicant Tracking Systems scan your resume before a human sees it. Use plain formatting, standard section headers ("Experience", "Education", "Skills"), and match keywords from the job posting. Avoid tables, columns, and graphics.',
  },
  {
    name: 'Canva resume templates',
    description:
      'Free with a huge library. Caution: fancy multi-column templates often break ATS scanning. Use Canva\'s simpler "professional" templates or download as Word and simplify.',
  },
  {
    name: 'Google Docs templates',
    description:
      'Free. Template gallery has 5 simple resumes that work well with ATS. Easy to share a link if someone asks for your resume.',
  },
  {
    name: 'Microsoft Word templates',
    description:
      'Free with Office. File → New → search "resume". The standard clean templates work perfectly with every ATS.',
  },
  {
    name: 'Resume.io',
    description:
      'Paid ($3/week minimum). Guided builder that produces clean resumes. Cancel immediately after downloading — their "free trial" auto-renews at full price.',
  },
  {
    name: 'Zety',
    description:
      'Similar to Resume.io. Good templates but the same trap — the "free" builder charges you to download. Either pay intentionally or use Google Docs for free.',
  },
];

const coverLetters = [
  {
    title: 'Structure that works',
    description:
      'Paragraph 1: which job, where you saw it, why it interests you. Paragraph 2: two specific achievements that match the job description. Paragraph 3: ask for the interview. Three paragraphs, under one page.',
  },
  {
    title: 'ChatGPT as a starting point',
    description:
      'Paste the job description and your resume, ask for a cover letter draft. Then REWRITE in your own voice. Employers can spot AI-generated letters — and they reject them. Use AI to unblock the blank page, not to ship the final version.',
  },
  {
    title: 'What to avoid',
    description:
      'Never open with "To whom it may concern" — look up the hiring manager on LinkedIn. Never summarize your resume — they can read it. Never write "I am a hard-working team player" — everyone says that.',
  },
  {
    title: 'Skip it when the job says "optional"',
    description:
      'If the posting does not require one, do not send one unless you have something specific to say. A generic cover letter hurts more than no cover letter.',
  },
];

const interviewPrep = [
  {
    title: 'Zoom / video interview setup',
    description:
      'Camera at eye level (stack books under your laptop). Window or lamp in FRONT of you, not behind. Neutral background or blurred. Test your mic — cheap earbuds with a built-in mic beat laptop speakers every time.',
  },
  {
    title: 'Big Interview (mock interviews)',
    description:
      'Paid ($40/month, free trial). AI records you answering real interview questions and gives feedback on pacing, filler words, and eye contact. Worth it for the first week before serious interviews.',
  },
  {
    title: 'Interviewing.io',
    description:
      'Best for tech/engineering roles. Practice technical interviews with real engineers — free or paid. Mock interviews for non-tech roles also available.',
  },
  {
    title: 'Prepare for these 10 questions',
    description:
      'Tell me about yourself. Why this company? Why this role? Strengths. Weaknesses. Describe a challenge you overcame. Where do you see yourself in 5 years? Why are you leaving? Tell me about a conflict. Any questions for us? Write answers for all ten.',
  },
  {
    title: 'Research the company first',
    description:
      'Their website, their LinkedIn posts from the last month, their Glassdoor reviews, and the interviewer\'s LinkedIn profile. 15 minutes of research separates you from 80% of applicants.',
  },
];

const industryBoards = [
  {
    industry: 'Tech',
    boards: 'AngelList / Wellfound, Hired, Dice, Built In, Y Combinator\'s Work at a Startup',
  },
  {
    industry: 'Healthcare',
    boards: 'Health eCareers, Indeed Health, Nurse.com, PracticeLink (for physicians)',
  },
  {
    industry: 'Government',
    boards:
      'USAjobs.gov (federal), your state\'s .gov jobs site, your city/county employment page',
  },
  {
    industry: 'Creative and design',
    boards: 'Dribbble Jobs, Behance, Working Not Working, AIGA job board',
  },
  {
    industry: 'Freelance and contract',
    boards:
      'Upwork (general), Fiverr (set your own services), Toptal (high-end, vetted), Contra',
  },
  {
    industry: 'Nonprofit',
    boards: 'Idealist.org, NonprofitHR, Bridgespan for senior nonprofit roles',
  },
];

const backgroundCheckTips = [
  {
    title: 'What employers typically check',
    description:
      'Criminal background, employment verification, education verification, credit report (for finance/government roles), and your public social media. Reference checks with past managers. Never lie — this is where candidates most often get caught.',
  },
  {
    title: 'Google yourself',
    description:
      'Incognito window, search your full name + your city. Go three pages deep. Delete old Facebook posts, untag bad photos, update LinkedIn with the current email address. This takes one afternoon.',
  },
  {
    title: 'Lock down social media',
    description:
      'Facebook → Settings → Privacy → "Who can see your future posts?" → Friends only. Twitter/X → protected tweets. Instagram → private. Employers can still see your cover photo and profile picture — make those professional.',
  },
  {
    title: 'Data broker removal',
    description:
      'Sites like Spokeo, WhitePages, and BeenVerified sell your personal info. Delete yourself from each (TekSure has a guide). Less data available = cleaner background check appearance.',
  },
];

const scamSigns = [
  {
    sign: 'They ask you to pay upfront',
    detail:
      'Any "training fee", "equipment deposit", or "background check fee" is a scam. No legitimate employer charges you to start. Report to the FTC at reportfraud.ftc.gov.',
  },
  {
    sign: 'The interview is on Telegram, WhatsApp, or Signal',
    detail:
      'Real companies interview on Zoom, Google Meet, or Microsoft Teams — tools you can see their official account on. Messaging-app interviews are almost always scams.',
  },
  {
    sign: 'Job offer with no interview',
    detail:
      'If they offer you the job after a 10-minute chat and one emailed "application", it is a scam. Legitimate hiring always includes a real interview with a real person on video.',
  },
  {
    sign: 'They send a check to deposit',
    detail:
      'Classic scam: they send you a check, ask you to deposit it and send most of it back via Zelle/wire/crypto. The check bounces days later. You lose whatever you sent. Never.',
  },
  {
    sign: 'Email domain does not match the company',
    detail:
      'Job says "Microsoft" but the email is recruiter@microsoft-careers.net? That\'s fake. Real company emails come from the company\'s real domain (@microsoft.com). Always verify.',
  },
  {
    sign: 'Pressure to act immediately',
    detail:
      '"We need to fill this today or lose the budget" is a scam script. Real jobs have real hiring timelines. Anyone pressuring you to decide in hours is manipulating you.',
  },
];

const after50Tips = [
  {
    title: 'AARP Job Board',
    description:
      'aarp.org/work/job-search — job board specifically featuring employers committed to age-inclusive hiring. Real employers, real jobs, no ageism filter to fight through.',
  },
  {
    title: 'Age-friendly companies',
    description:
      'Look for AARP Employer Pledge signatories. These companies publicly committed to hiring based on skill, not age. List at aarp.org/employerpledge.',
  },
  {
    title: 'Addressing age in your resume',
    description:
      'Only include the last 10–15 years of work. Drop the graduation year on your degree. List relevant certifications from the last 5 years. Focus your "Summary" on what you bring, not how long you have been working.',
  },
  {
    title: 'LinkedIn photo matters',
    description:
      'Fair or not, a current, warm, engaged-looking photo helps. If yours is 15 years old, update it. You are not trying to look younger — you are trying to look present and active.',
  },
  {
    title: 'Bring up your experience as a benefit',
    description:
      'In interviews, lean into what experience actually means: stability, judgment, pattern recognition, mentoring ability. Do not apologize for it or hide from it.',
  },
];

const gigWork = [
  {
    name: 'Uber / Lyft (driving)',
    description:
      'Most flexible hours. Need a 2015+ vehicle in most markets. Pay varies wildly by city — $15–$30/hour after expenses is typical. Bonuses for first rides, quests, and streaks.',
  },
  {
    name: 'DoorDash / Uber Eats / Instacart',
    description:
      'Delivery. Need a car, bike, or scooter. Often less lucrative than rideshare but more flexible start/stop. Good for between-jobs bridge income.',
  },
  {
    name: 'TaskRabbit',
    description:
      'Handyman, furniture assembly, moving help, cleaning. Pays well per task ($50–$100/hour for skilled tasks). Build reviews and you can charge more.',
  },
  {
    name: 'Turo',
    description:
      'Rent out your own car when you are not using it. Passive income if you have a second vehicle. $300–$800/month typical for average cars in busy markets.',
  },
  {
    name: 'Rover',
    description:
      'Dog walking and pet sitting. Flexible, mostly weekend demand. Great side income if you already love animals and have the time.',
  },
  {
    name: 'Fiverr / Upwork (skilled)',
    description:
      'If you can write, edit, design, translate, or code — freelance platforms let you earn from home. Takes months to build reputation but can replace a full-time income.',
  },
];

const freeResources = [
  {
    name: 'American Job Centers',
    description:
      'careeronestop.org/localhelp — free career counseling, resume help, interview prep, and training referrals. Run by the US Department of Labor. Every state has them. Walk-ins welcome.',
  },
  {
    name: 'State workforce boards',
    description:
      'Your state unemployment office is also your state workforce office. Even if you are not collecting unemployment, they have free job search services. Search "[your state] workforce commission".',
  },
  {
    name: 'VA VR&E (Vocational Rehab & Employment)',
    description:
      'For veterans with service-connected disabilities — free training, degrees, and career counseling. Apply at va.gov/careers-employment. Underused benefit.',
  },
  {
    name: 'Dress for Success',
    description:
      'Free professional clothing for women entering or returning to the workforce. dressforsuccess.org — find the nearest location. Interview outfits, career coaching, all free.',
  },
  {
    name: 'Career Gear (for men)',
    description:
      'The male equivalent of Dress for Success. Free professional clothing for men. careergear.org.',
  },
  {
    name: 'Business and Professional Women\'s Foundation',
    description:
      'BPW Foundation — scholarships and career programs for women, especially those changing careers or re-entering after gaps.',
  },
];

const networkingApps = [
  {
    name: 'Bumble Bizz',
    description:
      'Networking side of Bumble. Swipe to connect with local professionals. Good for coffee meetings and informal mentorship.',
  },
  {
    name: 'Shapr',
    description:
      'Tinder-for-business-contacts. Daily matches based on interests. Small but dedicated user base in big cities.',
  },
  {
    name: 'Industry Slack communities',
    description:
      'Many fields have their own Slack — Marketing Nerds, Women in Tech, #DevRelCollective. Search "[your field] slack community" to find one. Free, informal, often lead to jobs.',
  },
  {
    name: 'Meetup',
    description:
      'meetup.com — local in-person events. Professional meetups, industry groups, and networking dinners. The pre-pandemic version of networking is back and better than ever.',
  },
  {
    name: 'LinkedIn Groups',
    description:
      'Often overlooked. Join 5–10 groups in your industry. Active participation (thoughtful comments on posts) gets you seen by hiring managers over time.',
  },
];

export default function JobSearchTechHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Job Search Tech Hub — Modern Tools for Finding Work | TekSure"
        description="A complete modern job search guide — LinkedIn, job boards, resume tools, interview prep, scam warnings, and free resources. Plus tips for after-50, gig work, and industry-specific boards."
        path="/job-search-tech-hub"
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="container max-w-3xl text-center py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
              <Briefcase className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Finding Work in 2026
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              The technology you actually need — and how to use it.
            </p>
          </div>
        </section>

        {/* LinkedIn */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Linkedin className="h-7 w-7" />
              LinkedIn essentials
            </h2>
            <p className="text-muted-foreground">
              LinkedIn is where recruiters look. A strong profile does more job searching for you
              than any other single thing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {linkedInTips.map((l) => (
              <Card key={l.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{l.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Job Boards */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Search className="h-7 w-7" />
                Top job boards
              </h2>
              <p className="text-muted-foreground">
                Use 3–4 at once. Each one has different listings, even though they seem to
                overlap.
              </p>
            </div>

            <div className="space-y-3">
              {jobBoards.map((b) => (
                <Card key={b.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{b.name}</h3>
                      <Badge variant="secondary" className="text-xs">{b.best}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Building */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <FileText className="h-7 w-7" />
              Resume building
            </h2>
            <p className="text-muted-foreground">
              Most resumes are filtered by software before a human ever sees them. Keep it simple
              and the machines will let you through.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeTools.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cover Letters */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <PenTool className="h-7 w-7" />
                Cover letter tools
              </h2>
              <p className="text-muted-foreground">
                Many people overthink cover letters. Keep them short, specific, and human.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {coverLetters.map((c) => (
                <Card key={c.title} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Prep */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Video className="h-7 w-7" />
              Interview preparation
            </h2>
            <p className="text-muted-foreground">
              Almost every first interview is on video now. Treat it like a stage, not a phone
              call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {interviewPrep.map((i) => (
              <Card key={i.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{i.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry-Specific Boards */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Building2 className="h-7 w-7" />
                Industry-specific job boards
              </h2>
              <p className="text-muted-foreground">
                Niche boards have less competition and better-matched listings. Always check them
                in addition to Indeed and LinkedIn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {industryBoards.map((ind) => (
                <Card key={ind.industry} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{ind.industry}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.boards}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Background Check */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Eye className="h-7 w-7" />
              Background check reality
            </h2>
            <p className="text-muted-foreground">
              What employers see about you online. Clean it up before you apply — not after you
              get the rejection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {backgroundCheckTips.map((b) => (
              <Card key={b.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scams */}
        <section className="bg-destructive/5 border-y border-destructive/20">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <Badge variant="destructive" className="mb-3">Scam warnings</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <ShieldAlert className="h-7 w-7 text-destructive" />
                Avoiding job scams
              </h2>
              <p className="text-muted-foreground">
                Job scams have exploded. Scammers use fake listings to steal your SSN, deposit
                fraudulent checks, or extract fees. If you see any of these signs — walk away.
              </p>
            </div>

            <div className="space-y-3">
              {scamSigns.map((s) => (
                <Card key={s.sign} className="rounded-2xl border border-destructive/30 bg-background">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{s.sign}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* After 50 */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <Users className="h-7 w-7" />
              Job searching after 50
            </h2>
            <p className="text-muted-foreground">
              Age bias exists. These tactics help you get past the initial filter to the
              conversation where experience wins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {after50Tips.map((t) => (
              <Card key={t.title} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gig Economy */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Car className="h-7 w-7" />
                Gig economy options
              </h2>
              <p className="text-muted-foreground">
                Not a forever solution for most people, but a real bridge for paying bills while
                you look for the right full-time role.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gigWork.map((g) => (
                <Card key={g.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{g.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section className="container max-w-5xl py-14">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <GraduationCap className="h-7 w-7" />
              Free career resources
            </h2>
            <p className="text-muted-foreground">
              Services funded by your tax dollars and philanthropy. Use them — they are some of
              the best-kept secrets in job searching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {freeResources.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Networking */}
        <section className="bg-muted/30 border-y border-border">
          <div className="container max-w-5xl py-14">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                <Network className="h-7 w-7" />
                Networking apps
              </h2>
              <p className="text-muted-foreground">
                The best jobs are not posted — they are shared. These tools help you meet the
                people who will share them with you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {networkingApps.map((n) => (
                <Card key={n.name} className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{n.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{n.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container max-w-4xl py-14">
          <Card className="rounded-2xl border border-border bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                You've got this
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Job searching is a numbers game and a confidence game. If the tech side is
                tripping you up, we can sit down with you and work through it together.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button asChild size="lg" className="rounded-xl gap-2">
                  <Link to="/book">
                    <Phone className="h-4 w-4" />
                    Book a session
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/guides">
                    Browse guides
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
