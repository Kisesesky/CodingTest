// 1. Multiples of 3 and 5
// https://codingdojang.com/scode/350?answer_mode=hide

// 10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.

// 1000미만의 자연수에서 3,5의 배수의 총합을 구하라.

import promptSync from 'prompt-sync';

const prompt = promptSync();

function multiples(limit: number): number {
  let resultSum: number = 0;

  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      resultSum += i;
    }
  }

  return resultSum;
}

const limit = Number(prompt('3 또는 5의 배수 합을 구할 상한값을 입력하세요 (예: 1000): '));
console.log(`1 ~ ${limit}까지 3 또는 5의 배수 합: ${multiples(limit)}`);