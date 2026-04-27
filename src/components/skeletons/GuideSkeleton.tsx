import React from 'react';

export function GuideSkeleton() {
  return (
    <div className="space-y-4 p-4 animate-pulse">
      <div className="h-5 bg-slate-200 rounded w-3/4" />
      <div className="h-4 bg-slate-200 rounded w-5/6" />
      <div className="h-4 bg-slate-200 rounded w-4/5" />
      <div className="h-4 bg-slate-200 rounded w-3/5" />
    </div>
  );
}
