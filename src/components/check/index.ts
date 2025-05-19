import { Signal } from '@/hooks';

type StatusType = 'checking' | 'idal' | 'error';

const canRun = Signal<StatusType>('checking');

speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();

  if (!voices.length) {
    return canRun.set('error');
  }
  canRun.set('idal');
};

export { canRun };

export { default as Error } from './error';
export { default as Checking } from './check';
export { default as CheckAndRender } from './main';

export type { StatusType };
