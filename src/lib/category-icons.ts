import {
  ShieldCheck, Smartphone, Laptop, Wifi, Tv, CreditCard, HeartPulse, Landmark, Sparkles, Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { GuideCategory } from '@/data/guide-categories';

/** One icon per guide topic, used on the home page and the guides list. */
export const categoryIcons: Record<GuideCategory, LucideIcon> = {
  safety: ShieldCheck,
  phones: Smartphone,
  computers: Laptop,
  internet: Wifi,
  apps: Tv,
  money: CreditCard,
  health: HeartPulse,
  life: Landmark,
  ai: Sparkles,
  basics: Wrench,
};
