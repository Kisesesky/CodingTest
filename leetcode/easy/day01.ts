// 1. TwoSum
// https://leetcode.com/problems/two-sum/description/

// 정수 배열 nums와 정수 target이 주어졌을 때, 두 수의 합이 target이 되도록 하는 두 숫자의 인덱스를 반환하시오.
// 각 입력에는 정확히 하나의 해답만 존재한다고 가정할 수 있으며, 같은 요소를 두 번 사용할 수는 없습니다.
// 정답의 인덱스 순서는 어떤 순서로 반환해도 됩니다.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number} = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}