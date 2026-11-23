import type { Transition } from 'motion/react';

export const CLINICAL_SPRING: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 28,
};

export const SNAPPY_TRANSITION: Transition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1],
};

export const TAP_FEEDBACK = {
  scale: 0.97,
};

export const HOVER_ELEVATE = {
  y: -2,
};

export function getTransition(reduced: boolean | null, transition: Transition = CLINICAL_SPRING): Transition {
  if (reduced) {
    return { duration: 0.01 };
  }
  return transition;
}
