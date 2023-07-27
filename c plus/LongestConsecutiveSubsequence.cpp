#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int longestConsecutive(vector<int>& nums) {
    // Create a set to store all elements of the array
    unordered_set<int> numSet;
    for (int num : nums) {
        numSet.insert(num);
    }

    int longestStreak = 0;
    for (int num : nums) {
        // If num is the starting element of a consecutive subsequence
        if (numSet.find(num - 1) == numSet.end()) {
            int currentNum = num;
            int currentStreak = 1;

            // Find the length of the consecutive subsequence starting from num
            while (numSet.find(currentNum + 1) != numSet.end()) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest consecutive streak found so far
            longestStreak = max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

int main() {
    vector<int> nums = {100, 4, 200, 1, 3, 2, 5};
    cout << longestConsecutive(nums) << endl; // Output: 5

    return 0;
}
