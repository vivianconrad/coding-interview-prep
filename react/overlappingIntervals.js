// Given a set of non-overlapping intervals, write a function that merges any overlapping intervals. For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].

//The problem of merging overlapping intervals can be solved by sorting the intervals by their start times, and then merging overlapping intervals as we traverse the sorted list.
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}


const intervals = [[1,3],[2,6],[8,10],[15,18]];
const result = mergeIntervals(intervals);
console.log(result); // [[1,6],[8,10],[15,18]]
