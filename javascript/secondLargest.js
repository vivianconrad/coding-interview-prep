// Write a function that takes an array of integers and returns the second-largest number.

function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the second element
    return arr[1];
}

// Example usage
let arr = [5, 3, 8, 2, 9, 1];
console.log(findSecondLargest(arr)); // Output: 8
