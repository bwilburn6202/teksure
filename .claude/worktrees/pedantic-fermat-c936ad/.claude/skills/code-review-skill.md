---
name: code-review-skill
description: Reviews TekSure code for accessibility, security, performance, and convention compliance
---

# Code Review — TekSure

## Purpose
Ensures TekSure code meets accessibility, security, performance, and convention standards.

## When to Use
- After building new features (monthly feature build)
- During daily health checks (when fixes are needed)
- Before committing significant changes

## Review Checklist

### Accessibility
- [ ] All interactive elements have aria-labels or visible text
- [ ] Touch targets are 44px minimum (p-2.5 or larger on buttons)
- [ ] Images have alt text
- [ ] Form inputs have associated labels
- [ ] Color is not the only way to convey information
- [ ] Skip-to-content link present

### Security
- [ ] No XSS vulnerabilities (user input properly escaped)
- [ ] No SQL injection (using Supabase parameterized queries)
- [ ] No secrets in client-side code
- [ ] No dangerouslySetInnerHTML without sanitization
- [ ] Auth checks on protected routes

### Performance
- [ ] New pages use React.lazy for code splitting
- [ ] Images are optimized (WebP, proper sizing)
- [ ] No unnecessary re-renders (memoize where needed)
- [ ] Bundle size impact considered

### TekSure Conventions
- [ ] Using shadcn/ui components
- [ ] Tailwind CSS for styling (no inline styles)
- [ ] TypeScript (no any types without comment)
- [ ] SEOHead component on public pages
- [ ] Framer Motion animations use viewport={{ once: true, amount: 0.2 }}
- [ ] prefers-reduced-motion respected

## Constraints
- Fix issues found, don't just report them
- Prioritize: security > accessibility > performance > conventions
