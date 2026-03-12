// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let result = '';
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i]
    } else {
      break;
    }
  }
  return result;
};