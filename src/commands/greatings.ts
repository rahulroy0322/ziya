const greetings = [
  'hello',
  'hi',
  'hey',
  // "good morning",
  // "good afternoon",
  // "good evening",
  // "how are you?",
  // "how's it going?",
  // "what's up?",
  // "how have you been?",
  // "howdy",
  // "greetings",
  'yo',
  // "what's new?",
  // "how's everything?",
  // "how's life?",
  // "how's your day going?",
  // "long time no see",
  // "nice to see you",
  // "it's good to see you",
  // "how are things?",
  // "what's happening?",
  // "what's going on?",
  // "how's everything going?",
  // "how's it goin'?",
  // "how's it goin",
  // "how's life been treating you?",
  // "what's cracking?",
  // "what's good?",
  // "g'day"
];

const responses = [
  'hello sir',
  'i am hear boss',
  'listing you sir',
  // "i'm good, thanks! how about you?",
  // "doing well, thank you!",
  // "not much, just relaxing.",
  // "everything's great, thanks!",
  // "i'm fine, and you?",
  // "couldn't be better!",
  // "all good here!",
  // "i'm doing great, how about yourself?",
  // "pretty good, thanks!",
  // "i'm okay, how are you?",
  // "i'm doing well, thank you!",
  // "everything's going smoothly!",
  // "i'm alright, how about you?",
  // "i'm great, thanks for asking!",
  // "not bad, how are you?",
  // "i'm good, and you?",
  // "i'm doing okay, thanks!",
  // "i'm fine, thank you!"
];

const isGreating = (text: string): boolean =>
  greetings.some((greeting) => text.includes(greeting));
const getGreating = (): string =>
  responses[Math.floor(Math.random() * responses.length)];

export { isGreating, getGreating };
