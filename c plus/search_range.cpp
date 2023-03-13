// Given a sorted array nums of n integers and a target value target, write a function to find the starting and ending position of a given target value in the array.
// If the target is not found in the array, return [-1, -1].


#include <iostream>
#include <vector>

using namespace std;

vector<int> searchRange(vector<int>& nums, int target) {
    int n = nums.size();
    int left = 0, right = n - 1;
    int start = -1, end = -1;

    // Find the start position of the target value
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            right = mid - 1;
            if (nums[mid] == target) {
                start = mid;
            }
        } else {
            left = mid + 1;
        }
    }

    // Find the end position of the target value
    left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] <= target) {
            left = mid + 1;
            if (nums[mid] == target) {
                end = mid;
            }
        } else {
            right = mid - 1;
        }
    }

    return {start, end};
}

int main() {
    vector<int> nums = {5,7,7,8,8,10};
    int target = 8;
    vector<int> result = searchRange(nums, target);
    cout << "[" << result[0] << "," << result[1] << "]" << endl;
    return 0;
}
