import { Navigate, useParams } from 'react-router-dom';
import { lazy } from 'react';
import { toolRegistry } from '@/data/tools-registry';
import { toolRedirects } from '@/data/tool-redirects';

const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * Resolves /tools/<slug> against the tool registry.
 *
 * Replaces ~3,000 hand-written <Route> entries in App.tsx. A slug that was
 * removed but has an equivalent redirects; anything else renders NotFound,
 * which already sets noindex.
 */
export default function ToolRoute() {
  const { slug = '' } = useParams<{ slug: string }>();

  const target = toolRedirects[slug];
  if (target) return <Navigate to={target} replace />;

  const Tool = toolRegistry[slug];
  if (!Tool) return <NotFound />;

  return <Tool />;
}
