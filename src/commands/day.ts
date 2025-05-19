import { transformStr } from './main';

/* 
const dateQuestions = [
  "what's the date today?",
  "can you tell me the date?",
  "do you know today's date?",
  "what day is it?",
  "what is the current date?",
  "today's date?",
  "what's today?",
  "give me the date",
  "what day is today?",
  "tell me the date please"
];
 */

const dayResponses = [
  'today is {{day}}.',
  "it's {{day}} today.",
  'the day is {{day}}.',
  "as of now, it's {{day}}.",
  "we're on {{day}}.",
  'the whole day is {{day}}',
  "currently it's {{day}}.",
];

const { format } = Intl.DateTimeFormat(undefined, {
  weekday: 'long',
});

const transformDayString = (str: (typeof dayResponses)[number]) =>
  transformStr(str, '{{day}}', `${format(new Date())}`);

const isDay = (text: string): boolean => text.includes('day');
const getDayRes = (): string =>
  transformDayString(
    dayResponses[Math.floor(Math.random() * dayResponses.length)]
  );

export { isDay, getDayRes };
