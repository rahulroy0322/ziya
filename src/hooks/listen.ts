/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

type UseListenPropsTyep = {
  // eslint-disable-next-line no-unused-vars
  onListenChange?: (isListining: boolean) => void;
};

const useListen = ({ onListenChange }: UseListenPropsTyep = {}) => {
  const [isListining, setIsListining] = useState(false);
  const [transcribe, setTranscribe] = useState('');
  const [recg, setRecg] = useState<SpeechRecognition>();
  const [error, setError] = useState<
    'not support' | SpeechRecognitionErrorEvent['error'] | null
  >(null);

  const start = useCallback(() => {
    if (!isListining || !error) {
      recg?.start();
    }
  }, [error, isListining, recg]);

  const stop = useCallback(() => {
    if (isListining && !error) {
      recg?.stop();
    }
  }, [error, isListining, recg]);

  useEffect(() => {
    if (!SpeechRecognition) {
      setError('not support');
      return;
    }

    const onStart = () => {
      console.log('started');
      setIsListining(true);
    };

    const onResult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[e.resultIndex][0].transcript;
      setTranscribe(transcript);
    };
    const onError = (e: SpeechRecognitionErrorEvent) => {
      console.log('ERROR');
      if (!e.error.toLowerCase().includes('no-speech')) {
        setError(e.error);
      }
    };
    const onEnd = () => {
      console.log('Speech recg service disconnected');
      recg.start();
    };

    const recg = new SpeechRecognition();
    recg.lang = 'en-IN';
    recg.interimResults = false;
    recg.continuous = true;

    recg.addEventListener('start', onStart);
    recg.addEventListener('result', onResult);
    recg.addEventListener('error', onError);
    recg.addEventListener('end', onEnd);

    setRecg(recg);

    return () => {
      recg.removeEventListener('start', onStart);
      recg.removeEventListener('result', onResult);
      recg.removeEventListener('error', onError);
      recg.removeEventListener('end', onEnd);
    };
  }, []);

  useEffect(() => {
    onListenChange?.(isListining);
  }, [isListining, onListenChange]);
  return {
    start,
    stop,
    error,
    transcribe,
    isListining,
  };
};

export default useListen;
