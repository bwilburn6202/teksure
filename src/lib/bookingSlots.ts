// Half-hour appointment slots from 7:00 AM through 10:00 PM.

export type BookingSlotOption = { id: string; label: string };

const START_MINUTES = 7 * 60;   // 7:00 AM
const END_MINUTES = 22 * 60;    // 10:00 PM
const STEP_MINUTES = 30;

const LEGACY_LABELS: Record<string, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
};

function pad2(n: number) {
  return n.toString().padStart(2, '0');
}

function formatHHMM(totalMinutes: number): string {
  return `${pad2(Math.floor(totalMinutes / 60))}:${pad2(totalMinutes % 60)}`;
}

function formatLabelFromHHMM(hhmm: string): string | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  if (!m) return null;
  const h = Number(m[1]);
  const min = m[2];
  if (h < 0 || h > 23) return null;
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${min} ${period}`;
}

export function generateBookingSlots(): BookingSlotOption[] {
  const slots: BookingSlotOption[] = [];
  for (let t = START_MINUTES; t <= END_MINUTES; t += STEP_MINUTES) {
    const id = formatHHMM(t);
    slots.push({ id, label: formatLabelFromHHMM(id) ?? id });
  }
  return slots;
}

export function formatBookingSlot(slot: string | null | undefined): string {
  if (!slot) return '';
  if (slot in LEGACY_LABELS) return LEGACY_LABELS[slot];
  return formatLabelFromHHMM(slot) ?? slot;
}
