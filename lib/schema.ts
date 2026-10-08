export const SITE_URL = "https://lucaslongacre.com";
export const PERSON_ID = `${SITE_URL}/#person`;
export const LL_LABS_ID = `${SITE_URL}/#ll-labs`;
export const PODCAST_ID = `${SITE_URL}/signal-and-noise#series`;

// Feed dates only carry month and year, so structured data gets "YYYY-MM"
// rather than an invented day. Strings without a 4-digit year (e.g. "March 25")
// are skipped because Date would silently guess a year.
export function yearMonth(date: string): string | undefined {
  if (!/\b\d{4}\b/.test(date)) return undefined;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}`;
}
