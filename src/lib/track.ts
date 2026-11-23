import { track as vercelTrack } from '@vercel/analytics';

export type TrackEventName =
  | 'mulai_latihan'
  | 'selesai_latihan'
  | 'buka_kasus'
  | 'jawab_kasus'
  | 'reset_data'
  | 'cta_click';

export function trackEvent(
  name: TrackEventName,
  properties?: Record<string, string | number | boolean>,
): void {
  try {
    vercelTrack(name, properties);
  } catch {
    // Abaikan error analytics saat offline, ad-blocker, atau unit test
  }
}
