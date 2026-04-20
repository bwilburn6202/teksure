import React from 'react'

export function ToolSkeleton() {
  return (
    <div className="space-y-4 p-4 animate-pulse">
      <div className="h-6 bg-slate-200 rounded w-3/4" />
      <div className="h-4 bg-slate-200 rounded w-5/6" />
      <div className="h-4 bg-slate-200 rounded w-2/3" />
    </div>
  )
}
