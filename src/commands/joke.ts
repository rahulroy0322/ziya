import { getRandomJoke } from 'random-jokes';

import { speak } from '@/lib';

/* const jokeFunFactPhrases = [
  "tell me a joke",
  "make me laugh",
  "give me a fun fact",
  "do you know any jokes?",
  "say something funny",
  "surprise me with a joke",
  "what's a fun fact?",
  "i want to hear a joke",
  "say something interesting",
  "make me smile",
  "tell me a science fact",
  "do you have any trivia?",
  "give me some random knowledge",
  "share something cool",
  "fun fact of the day?",
  "what’s a weird fact?",
  "got any dad jokes?",
  "give me a riddle",
  "amuse me",
  "tell me a joke about robots"
];
 */

/*
 ,
 "give me a fun fact",
 "say something funny",
 "surprise me with a joke",
 "what's a fun fact?",
 "i want to hear a joke",
 "say something interesting",

 "tell me a science fact",
 "do you have any trivia?",
 "give me some random knowledge",
 "share something cool",
 "fun fact of the day?",
 "what’s a weird fact?",

 "give me a riddle",
 "amuse me",
 "tell me a joke about robots" */

console.warn('TODO: `commands/joke.ts`');

const isJoke = (text: string): boolean =>
  (text.includes('joke') &&
    (text.includes('tell') || text.includes('surprise'))) ||
  (text.includes('make') && (text.includes('laugh') || text.includes('smile')));

const getJokeRes = async (): Promise<void> => {
  const { joke } = await getRandomJoke();
  if (joke) {
    speak(joke);
  }
};

export { isJoke, getJokeRes };
