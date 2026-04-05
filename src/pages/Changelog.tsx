import React from 'react'
import { SEOHead } from '@/components/SEOHead'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const entries = [
  { date: '2026-04-16', text: 'Phase 3: Added end-to-end report-broken-guide flow and saved to guide_reports; SafeLink external anchors; canonical SEO; data-guides index; tool skeletons.' },
  { date: '2026-04-01', text: 'Phase 2 milestone: skeletons, RLs, command palette, and progress hooks.' },
  { date: '2026-03-25', text: 'Phase 1: Accessibility, routing stability, and UI polish.' },
]

export function Changelog() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="TekSure Changelog" description="Recent updates to TekSure platform" />
      <Navbar />
      <main className="container py-12 max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Changelog</h1>
        <ul className="space-y-4">{entries.map((e, idx) => (
          <li key={idx} className="border rounded p-4 bg-muted/50">
            <strong className="block">{e.date}</strong>
            <span className="text-sm text-muted-foreground">{e.text}</span>
          </li>
        ))}</ul>
      </main>
      <Footer />
    </div>
  )
}
