/**
 * Scroll immediately to the top of the viewport, bypassing CSS `scroll-behavior: smooth`.
 */
export function scrollToTopInstant(): void {
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  } catch {
    window.scrollTo(0, 0);
  }
}
