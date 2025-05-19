import { MODEL } from '@/config';
import { speak } from '@/lib';
import { isListining } from '@/listen';

import {
  getDateRes,
  getDayRes,
  getGreating,
  getJokeRes,
  getMathRes,
  getTimeRes,
  isDate,
  isDay,
  isGreating,
  isJoke,
  isMath,
  isTime,
} from '.';

const transformStr = (
  sentence: string,
  replaceWord: string,
  replaceStr: string
) => sentence.replace(replaceWord, replaceStr);

let listining = isListining.get();

isListining.subscribe((l) => (listining = l));

const processCommand = (command: string): void => {
  //  listining = true
  command = command.trim().toLowerCase();
  if (command === MODEL) {
    return speak('TODO');
  }
  if (command.includes(MODEL)) {
    return speak('TODO');
  }
  const comd = command.replace(MODEL, '').trim().toLowerCase();
  if (isGreating(comd)) {
    return speak(getGreating());
  }
  if (isJoke(comd)) {
    if (listining) {
      return getJokeRes() as unknown as void;
    }
    return;
  }
  if (isTime(comd)) {
    return speak(getTimeRes(comd));
  }
  if (isDate(comd)) {
    return speak(getDateRes());
  }
  if (isDay(comd)) {
    return speak(getDayRes());
  }
  if (isMath(comd)) {
    return speak(getMathRes(comd));
  }
};

export { transformStr, processCommand };
