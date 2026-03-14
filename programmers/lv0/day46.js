// 원소들의 곱과 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

// 입출력 예
// num_list	        result
// [3, 4, 5, 2, 1]	1
// [5, 7, 8, 3]	    0

// 입출력 예 설명
// 입출력 예 #1
// 모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.

// 입출력 예 #2
// 모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

// 반복문
function solution(num_list) {
  let product = 1;
  let sum = 0
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i]
    product *= num_list[i]
  }
  return product > sum*sum ? 0 : 1;
}

// reduce
function solution(num_list) {
  const sum = num_list.reduce((a,b)=>a+b,0)
  const product = num_list.reduce((a,b)=>a*b,1)

  return product > sum*sum ? 0 : 1
}