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

const dateResponses = [
  'today is {{date}}.',
  "it's {{date}} today.",
  'the date is {{date}}.',
  "as of now, it's {{date}}.",
  "we're on {{date}}.",
  "currently it's {{date}}.",
];

const { format: monthFormat } = Intl.DateTimeFormat(undefined, {
  month: 'long',
});

const { format: dayFormat } = Intl.DateTimeFormat(undefined, {
  weekday: 'long',
});

const transformDateString = (str: (typeof dateResponses)[number]) => {
  const time = new Date();
  const date = time.getDate();

  return transformStr(
    str,
    '{{date}}',
    `${dayFormat(date)} of ${monthFormat(time)}`
  );
};

const isDate = (text: string): boolean => text.includes('date');
const getDateRes = (): string =>
  transformDateString(
    dateResponses[Math.floor(Math.random() * dateResponses.length)]
  );

export { isDate, getDateRes };
