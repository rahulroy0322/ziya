import { transformStr } from '.';

/* 
const mathQuestions = [
  "what's 2 plus 2?",
  "how much is 5 minus 3?",
  "what is 10 divided by 2?",
  "can you multiply 4 and 6?",
  "what's the sum of 8 and 7?",
  "what is 9 times 3?",
  "how much is 14 plus 5?",
  "what's the difference between 12 and 4?",
  "calculate 15 divided by 5",
  "what's 7 multiplied by 8?",
  "what's 3 + 4?",
  "what's 10 - 6?",
  "what is 8 * 3?",
  "what is 20 / 4?",
  "can you solve 9 + 1?",
  "what is 100 minus 45?"
]; */

const mathResponses = [
  'the answer is {{result}}.',
  "it's {{result}}.",
  '{{result}} is the result.',
  'that would be {{result}}.',
  'the solution is {{result}}.',
  "after calculating, it's {{result}}.",
  // "{{result}} is correct."
];

// ["plus", "add", "sum"]
//  "minus", "subtract", "difference"
//  "times", "multiplied by", "product"
// "divided by", "over", "quotient"

const transformMathString = (
  str: (typeof mathResponses)[number],
  res: string
) => transformStr(str, '{{result}}', res);

console.warn('TODO: `commands/math.ts`');

const isAdd = (text: string): boolean =>
  text.includes('plus') || text.includes('add') || text.includes('sum ');

const isSubtract = (text: string): boolean =>
  text.includes('minus') ||
  text.includes('subtract') ||
  text.includes('difference');

const isMultiply = (text: string): boolean =>
  text.includes('times') ||
  text.includes('multiply') ||
  text.includes('product');

const isDivide = (text: string): boolean =>
  text.includes('divide') || text.includes('over') || text.includes('quotient');

const isPower = (text: string): boolean =>
  text.includes('power') || text.includes('exponent');

const isRoot = (text: string): boolean => text.includes('root');

const isSquare = (text: string): boolean => text.includes('square');

const isMath = (text: string): boolean =>
  isAdd(text) ||
  isSubtract(text) ||
  isMultiply(text) ||
  isDivide(text) ||
  isPower(text) ||
  isRoot(text) ||
  isSquare(text);

const getResult = (text: string, numbers: number[]): number | string => {
  if (isAdd(text)) {
    return numbers.reduce((acc, value) => acc + value, 0);
  }
  if (isSubtract(text)) {
    if (text.includes('from')) {
      return (numbers[1] || 0) - numbers[0];
    }

    return numbers.reduce((acc, value) => acc - value);
  }
  if (isMultiply(text)) {
    return numbers.reduce((acc, value) => acc * value);
  }
  if (isDivide(text)) {
    if (numbers.length !== 2) {
      return 'please provide only two numbers to devide';
    }
    return numbers[0] / numbers[1];
  }
  if (isPower(text)) {
    if (numbers.length !== 2) {
      return 'please provide only two numbers to power up';
    }
    return Math.pow(numbers[0], numbers[1]);
  }
  if (isRoot(text)) {
    if (numbers.length !== 1) {
      return 'please provide only one number to square root';
    }
    return Math.sqrt(numbers[0]);
  }
  if (isSquare(text)) {
    if (numbers.length !== 1) {
      return 'please provide only one number to square root';
    }
    return numbers[0] * numbers[0];
  }
  // should not run in any way
  console.error('some function(math) has been called unexpectedly');
  return 0;
};

const getMathRes = (text: string): string => {
  const numbers = text.match(/(\d+)/gi);

  if (!numbers) {
    return "please try with providing number's to calculate";
  }

  let res = getResult(text, numbers.map(Number));
  if (typeof res === 'string') {
    return res;
  }
  if (res.toString().includes('.')) {
    res = res.toFixed(2);
  }
  return transformMathString(
    mathResponses[Math.floor(Math.random() * mathResponses.length)],
    res.toString()
  );
};

export { isMath, getMathRes };
