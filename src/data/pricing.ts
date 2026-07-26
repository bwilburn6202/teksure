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

/** Miles of travel included in the price before a mileage charge applies. */
export const INCLUDED_TRAVEL_MILES = 10;

/** Per-mile charge beyond INCLUDED_TRAVEL_MILES. */
export const PER_MILE_RATE = 0.45;

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
