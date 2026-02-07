export function slowScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - 40; // offset
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  const duration = 1800; // milliseconds (this is the magic knob)
  let start: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


