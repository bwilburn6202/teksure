-- Fix security definer view
CREATE OR REPLACE VIEW public.guide_rating_stats
WITH (security_invoker = true) AS
  SELECT
    guide_slug,
    round(avg(stars)::numeric, 1) as avg_stars,
    count(*)::int as rating_count
  FROM public.guide_ratings
  GROUP BY guide_slug;

-- Fix function search path
ALTER FUNCTION public.set_updated_at() SET search_path = public;
ALTER FUNCTION public.update_video_tutorials_updated_at() SET search_path = public;