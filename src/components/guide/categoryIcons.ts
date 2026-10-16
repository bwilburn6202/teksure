import {
  ShieldCheck,
  Smartphone,
  Laptop,
  Wifi,
  Tv,
  Landmark,
  HeartPulse,
  FileText,
  Bot,
  Settings,
  type LucideIcon,
} from 'lucide-react';
import type { GuideCategory } from '@/data/guide-categories';

/** One icon per guide category, shared by the home page and /guides. */
export const categoryIcons: Record<GuideCategory, LucideIcon> = {
  safety: ShieldCheck,
  phones: Smartphone,
  computers: Laptop,
  internet: Wifi,
  apps: Tv,
  money: Landmark,
  health: HeartPulse,
  life: FileText,
  ai: Bot,
  basics: Settings,
};
