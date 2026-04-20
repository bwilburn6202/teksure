import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Clock, Send, CheckCircle2, Loader2, XCircle, AlertTriangle, HandshakeIcon } from 'lucide-react';

const statusConfig: Record<string, { className: string; icon: typeof Clock }> = {
  requested:   { className: 'bg-blue-100 text-blue-700 border-blue-200',    icon: Send },
  offered:     { className: 'bg-purple-100 text-purple-700 border-purple-200', icon: HandshakeIcon },
  accepted:    { className: 'bg-sky-100 text-sky-700 border-sky-200',       icon: CheckCircle2 },
  in_progress: { className: 'bg-amber-100 text-amber-700 border-amber-200', icon: Loader2 },
  completed:   { className: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle2 },
  cancelled:   { className: 'bg-gray-100 text-gray-600 border-gray-200',    icon: XCircle },
  disputed:    { className: 'bg-red-100 text-red-700 border-red-200',       icon: AlertTriangle },
};

const statusLabels: Record<string, string> = {
  requested:   'Requested',
  offered:     'Offered',
  accepted:    'Accepted',
  in_progress: 'In Progress',
  completed:   'Completed',
  cancelled:   'Cancelled',
  disputed:    'Disputed',
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status];
  const Icon = config?.icon;
  return (
    <Badge
      variant="secondary"
      className={cn('border font-medium gap-1 inline-flex items-center', config?.className)}
    >
      {Icon && <Icon className={cn('h-3 w-3 shrink-0', status === 'in_progress' && 'animate-spin')} aria-hidden="true" />}
      {statusLabels[status] || status}
    </Badge>
  );
}
