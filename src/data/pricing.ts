/**
 * Single source of truth for TekSure service pricing.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Before this file, three different prices for the same service were live on
 * the site at the same time:
 *
 *   - GetHelp.tsx (the real booking flow, wired to Stripe): $49 first hour,
 *     $29 each additional hour
 *   - Pricing.tsx: flat tiers of $49 / $99 / $149
 *   - FAQ.tsx: "Remote sessions start at $29 for a 20-minute fix"
 *
 * A customer could read one price in the FAQ and be charged a different one at
 * checkout. That is a trust problem and a consumer-protection problem, and it
 * is the kind of thing that only gets worse as more pages quote prices.
 *
 * The booking flow is treated as the source of truth here, because it is what
 * is actually connected to Stripe and what the customer is actually charged.
 *
 * RULE: never hardcode a price in a page. Import it from here.
 */

/** What the customer pays for the first hour of any service. */
export const FIRST_HOUR_PRICE = 49;

/** What each hour after the first costs. */
export const ADDITIONAL_HOUR_PRICE = 29;

/** Deposit taken at booking time to hold the slot. Charged via Stripe. */
export const DEPOSIT_AMOUNT = 15;

/**
 * Hours before the appointment that a customer can still cancel and get the
 * deposit back in full. Referenced by the booking flow and the refund policy —
 * these must agree, so both read it from here.
 */
export const FREE_CANCELLATION_HOURS = 24;

/**
 * Whether TekSure can currently send a technician to a customer's home.
 *
 * FALSE as of July 2026. TekSure has no homebase and no technicians placed in
 * any particular area, so an in-home booking could not actually be fulfilled —
 * a customer could pay a deposit for a visit nobody could make. Advertising it
 * anyway is the fastest way to lose the trust the brand is built on.
 *
 * Remote support has no such limit: it works in all 50 states today.
 *
 * FLIP THIS TO TRUE once there are technicians who can actually travel. The
 * booking flow, pricing page, and policy pages all read this flag, so the
 * in-home option reappears everywhere at once and stays consistent.
 */
export const ONSITE_AVAILABLE = false;

/**
 * Miles of travel included before a mileage charge applies.
 * Only meaningful when ONSITE_AVAILABLE is true.
 */
export const INCLUDED_TRAVEL_MILES = 10;

/**
 * Per-mile charge beyond INCLUDED_TRAVEL_MILES.
 * Only meaningful when ONSITE_AVAILABLE is true.
 */
export const PER_MILE_RATE = 0.45;

/**
 * Brand positioning, kept here so the money pages all say it the same way.
 *
 * The competition for "help me with my computer" is largely offshore call
 * centers and, for this audience especially, outright tech-support scams that
 * impersonate them. Being American and answering as a named human is the thing
 * that separates TekSure from both.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * ONLY PUT CLAIMS IN THIS LIST THAT ARE TRUE TODAY.
 *
 * "Insured" and "Audited" are planned but NOT yet in place (confirmed July 26,
 * 2026), so they are deliberately absent. Advertising them before they exist
 * would be a false advertising claim — and this audience is precisely the group
 * that fake tech-support operations target with exactly those words. Getting
 * caught overstating here costs more trust than the claims would ever buy.
 *
 * When the insurance policy and the audit are actually in place, add them below
 * and they appear across every page at once. Keep the certificate and the audit
 * report on file first.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const BRAND_PROMISE = 'American Help, trusted and secure';

export const TRUST_POINTS = [
  {
    label: 'Based in America',
    detail: 'You talk to an American, not an overseas call center.',
  },
  {
    label: 'A real named person',
    detail: 'You know who is helping you before they ever touch your computer.',
  },
  {
    label: 'No fix, no charge',
    detail: 'If we cannot solve it, you do not pay. Deposit refunded.',
  },
] as const;

/** Formats a whole-dollar amount as "$49". */
export const formatPrice = (amount: number): string => `$${amount}`;

/**
 * What the customer still owes on the day, given what they paid up front.
 * Used so the booking summary can state a real number instead of the vague
 * word "remainder".
 */
export const remainderAfterDeposit = (
  jobTotal: number = FIRST_HOUR_PRICE,
  depositPaid: number = DEPOSIT_AMOUNT,
): number => Math.max(0, jobTotal - depositPaid);

/**
 * The one-line price summary used wherever a page needs to state the cost
 * without laying out a full table.
 */
export const PRICE_SUMMARY = `${formatPrice(FIRST_HOUR_PRICE)} for the first hour, ${formatPrice(
  ADDITIONAL_HOUR_PRICE,
)} for each additional hour`;
