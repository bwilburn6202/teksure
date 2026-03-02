import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const statusStyles: Record<string, string> = {
  requested: 'status-requested',
  offered: 'status-offered',
  accepted: 'status-accepted',
  in_progress: 'status-in-progress',
  completed: 'status-completed',
  cancelled: 'status-cancelled',
  disputed: 'status-disputed',
};

const statusLabels: Record<string, string> = {
  requested: 'Requested',
  offered: 'Offered',
  accepted: 'Accepted',
  in_progress: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
  disputed: 'Disputed',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="secondary" className={cn('border-0 font-medium', statusStyles[status])}>
      {statusLabels[status] || status}
    </Badge>
  );
}
