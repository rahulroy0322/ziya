/* const timeQuestions = [
  "what time is it?",
  "can you tell me the time?",
  "do you know what time it is?",
  "what's the current time?",
  "could you give me the time?",
  "tell me the time please",
  "what's the time now?",
  "current time?",
  "time please",
  "what time is it right now?",
  "i need the time",
  "what's the exact time?",
  "do you have the time?"
];
 */
import { transformStr } from './main';

const transformTimeString = (str: (typeof timeResponses)[number]) => {
  const time = new Date();

  let hour = time.getHours();

  const mode = hour > 5 && hour < 17 ? 'day' : 'night';

  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour <= 0) {
    hour = 12;
  }

  return transformStr(str, '{{time}}', `${hour} o'clock of ${mode}`);
};

const timeResponses = [
  "it's currently {{time}}.",
  'the time is {{time}}.',
  "right now, it's {{time}}.",
  "it's about {{time}} now.",
  "as of now, it's {{time}}.",
  "let me check... . it's {{time}}.",
  "it's {{time}} at the moment.",
] as const;

const intl = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  hourCycle: 'h12',
  dayPeriod: 'long',
});

const getPeriodOfTheDay = () =>
  intl
    .formatToParts(new Date())
    .find((part) => part.type === 'dayPeriod')
    ?.value.split(' ')
    .at(-1);

const isTime = (text: string): boolean =>
  text.includes('time') || (text.includes('period') && text.includes('day'));

const getTimeRes = (text: string): string =>
  text.includes('period')
    ? `currently it's ${getPeriodOfTheDay()} of the day`
    : transformTimeString(
        timeResponses[Math.floor(Math.random() * timeResponses.length)]
      );

export { isTime, getTimeRes };
