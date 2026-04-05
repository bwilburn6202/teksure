import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function ReportGuideDialog({ open, onClose, slug, onSubmit }: {
  open: boolean
  onClose: () => void
  slug: string
  onSubmit: (payload: { guide_slug: string; report_type: string; description: string; user_id?: string | null; created_at: string }) => void
}) {
  const [type, setType] = useState('outdated')
  const [description, setDescription] = useState('')

  if (!open) return null

  return (
    <div role="dialog" aria-label="Report issue" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: '90%', maxWidth: 520, margin: '8vh auto', background: '#fff', padding: 20, borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
        <h3 className="text-lg font-semibold mb-3">Report issue with this guide</h3>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full border rounded px-2 py-2">
            <option value="outdated">Outdated steps</option>
            <option value="broken_link">Broken link</option>
            <option value="unclear">Unclear instructions</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Description (optional)</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="w-full border rounded px-2 py-2" placeholder="Provide details to help us fix it." />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
          <Button onClick={() => onSubmit({ guide_slug: slug, report_type: type, description: description.trim(), created_at: new Date().toISOString() })}>
            Submit Report
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">This will help us improve TekSure content for everyone.</p>
      </div>
    </div>
  )
}
