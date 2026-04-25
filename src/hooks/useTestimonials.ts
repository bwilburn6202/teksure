import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
  rating: number;
}

interface UseTestimonialsResult {
  testimonials: Testimonial[];
  loading: boolean;
  source: 'supabase' | 'fallback';
}

/**
 * Fetch published homepage testimonials from Supabase, ordered by display_order.
 * If the network call fails or returns nothing, the caller's fallback list is used —
 * the homepage always renders something friendly.
 */
export function useTestimonials(fallback: Testimonial[]): UseTestimonialsResult {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<'supabase' | 'fallback'>('fallback');

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('name, detail, quote, rating')
        .eq('is_published', true)
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false })
        .limit(6);

      if (cancelled) return;

      if (!error && Array.isArray(data) && data.length > 0) {
        setTestimonials(
          data.map((row) => ({
            name: row.name,
            detail: row.detail,
            quote: row.quote,
            rating: row.rating ?? 5,
          })),
        );
        setSource('supabase');
      }
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { testimonials, loading, source };
}
