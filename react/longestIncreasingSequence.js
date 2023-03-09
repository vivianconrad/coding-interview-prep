// Write a function that takes an array of integers as input, and returns the length of the longest increasing subsequence. For example, given the array [10, 9, 2, 5, 3, 7, 101, 18], the function should return 4, because the longest increasing subsequence is [2, 3, 7, 101].

// The problem of finding the length of the longest increasing subsequence can be solved using dynamic programming. We can define a function LIS that takes an array nums as input and returns the length of the longest increasing subsequence.

    function LIS(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}


const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = LIS(nums);
console.log(result); // 4
