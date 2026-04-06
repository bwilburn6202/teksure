import React, { useEffect, useState } from 'react'
import { SEOHead } from '@/components/SEOHead'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { supabase } from '@/integrations/supabase/client'

type ReportRow = {
  id: string | number
  guide_slug: string
  user_id: string | null
  report_type: string
  description: string | null
  created_at: string
  resolved?: boolean
}

export default function GuideReports() {
  const [reports, setReports] = useState<ReportRow[]>([])
  const [loading, setLoading] = useState(true)

  const toggleResolved = async (id: string | number) => {
    const current = reports.find(r => r.id === id)
    const next = !(current?.resolved ?? false)
    // optimistic UI update
    setReports(prev => prev.map(r => r.id === id ? { ...r, resolved: next } : r))
    try {
      await (supabase as any).from('guide_reports').update({ resolved: next }).eq('id', id)
    } catch (e) {
      console.error(e)
      // rollback if needed
      setReports(prev => prev.map(r => r.id === id ? { ...r, resolved: current?.resolved } : r))
    }
  }

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data, error } = await (supabase as any).from('guide_reports').select('*').order('created_at', { ascending: false })
        if (error) { console.error(error); setReports([]) }
        else setReports(data as ReportRow[] ?? [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Guide Reports" description="Admin view: user-submitted guide issue reports" path="/admin/guide-reports" />
      <Navbar />
      <main className="container py-12">
        <h1 className="text-2xl font-bold mb-4">Guide Reports</h1>
        {loading ? (
          <div>Loading reports…</div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border px-3 py-2 text-left">ID</th>
                <th className="border px-3 py-2 text-left">Guide</th>
                <th className="border px-3 py-2 text-left">User</th>
                <th className="border px-3 py-2 text-left">Type</th>
                <th className="border px-3 py-2 text-left">Description</th>
                <th className="border px-3 py-2 text-left">Created</th>
                <th className="border px-3 py-2 text-left">Resolved</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(r => (
                <tr key={r.id}>
                  <td className="border px-3 py-2">{r.id}</td>
                  <td className="border px-3 py-2">{r.guide_slug}</td>
                  <td className="border px-3 py-2">{r.user_id ?? 'anonymous'}</td>
                  <td className="border px-3 py-2">{r.report_type}</td>
                  <td className="border px-3 py-2">{r.description ?? ''}</td>
                  <td className="border px-3 py-2">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="border px-3 py-2">{(r as any).resolved ? 'Yes' : 'No'}</td>
                  <td className="border px-3 py-2"><button className="px-2 py-1 text-xs rounded bg-blue-100" onClick={() => toggleResolved(r.id)}>Toggle</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer />
    </div>
  )
}
