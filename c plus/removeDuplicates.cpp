// Given an integer array nums, write a function to remove all duplicates from the array and return the new length of the array. 
// You must do this in-place, i.e., you cannot allocate extra space for another array. You are allowed to modify the input array.

// include <iostream>
// include <vector>
// include <algorithm>

using namespace std;

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) {
        return 0;
    }

    int n = nums.size();
    int i = 0;
    for (int j = 1; j < n; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

int main() {
    vector<int> nums = {1,1,2,2,3,3};
    int newLength = removeDuplicates(nums);
    cout << "New length: " << newLength << endl;
    cout << "Array: ";
    for (int i = 0; i < newLength; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}
