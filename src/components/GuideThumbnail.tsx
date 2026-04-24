import {
  AppWindow,
  Apple,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Gamepad2,
  Heart,
  Laptop,
  Lightbulb,
  MessageSquare,
  MonitorSmartphone,
  PiggyBank,
  Shield,
  Smartphone,
  Sparkles,
  Tv,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { GuideCategory } from "@/data/guides";

const ICON_BY_CATEGORY: Record<GuideCategory, LucideIcon> = {
  "windows-guides": Laptop,
  "mac-guides": Apple,
  "essential-skills": BookOpen,
  "tips-tricks": Lightbulb,
  "ai-guides": Bot,
  "ai-advanced": Brain,
  "safety-guides": Shield,
  "how-to": Sparkles,
  "app-guides": AppWindow,
  "health-tech": Heart,
  "phone-guides": Smartphone,
  "social-media": Users,
  "government-civic": Building2,
  "financial-tech": PiggyBank,
  "smart-home": MonitorSmartphone,
  "entertainment": Tv,
  "communication": MessageSquare,
  "life-transitions": Gamepad2,
  "internet-connectivity": Wifi,
};

interface GuideThumbnailProps {
  category: GuideCategory;
  /** Tailwind size class, e.g. "h-8 w-8". Defaults to h-8 w-8. */
  size?: string;
  /** Tailwind classes for the wrapper (background, padding, rounded). */
  className?: string;
  /** Tailwind color class for the icon itself. */
  iconClassName?: string;
}

/**
 * Renders a lucide SVG icon keyed off a guide's category. Replaces the older
 * per-guide thumbnailEmoji — emoji-free UI, consistent visual weight, and
 * accessible out of the box (aria-hidden decorative mark).
 */
export function GuideThumbnail({
  category,
  size = "h-8 w-8",
  className = "inline-flex items-center justify-center rounded-xl bg-primary/10 p-2 shrink-0",
  iconClassName = "text-primary",
}: GuideThumbnailProps) {
  const Icon = ICON_BY_CATEGORY[category] ?? BookOpen;
  return (
    <span className={className} aria-hidden="true">
      <Icon className={`${size} ${iconClassName}`} />
    </span>
  );
}

/** Map a GuideCategory to its lucide icon component (for callers that need
 *  to render the icon inline without the default wrapper). */
export function iconForCategory(category: GuideCategory): LucideIcon {
  return ICON_BY_CATEGORY[category] ?? BookOpen;
}
