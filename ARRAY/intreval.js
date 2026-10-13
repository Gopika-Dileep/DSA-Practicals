// ----------------------------------------1. Merge Intervals
// Goal: Merge intervals that overlap.

// Example: [1,3] and [2,6] overlap, so they become [1,6].



// let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

// intervals.sort((a, b) => a[0] - b[0]);

// let result = [intervals[0]];

// for (let i = 1; i < intervals.length; i++) {
//     let current = intervals[i];
//     let last = result[result.length - 1];

//     if (current[0] <= last[1]) {
//         last[1] = Math.max(last[1], current[1]);
//     } else {
//         result.push(current);
//     }
// }

// console.log(result);

// Output:

// [[1, 6], [8, 10], [15, 18]]

// How it works:
// 1. Sort intervals by their starting points.
// 2. Store the first interval in result.
// 3. Compare each new interval with the last interval in result.
// 4. If they overlap, update the last interval's ending point.
// 5. Otherwise, add the new interval to result.

// last[1] = Math.max(last[1], current[1]);
// This selects the larger ending point so the merged interval covers both intervals completely. 


// -------------------------------------------2. Insert Interval


// Goal: Insert a new interval and merge any overlaps.

// eg: intervals = [[1, 3], [6, 9]];
//     newInterval = [2, 5];



// let intervals = [[1, 3], [6, 9]];
// let newInterval = [2, 5];

// let result = [];
// let i = 0;

// // Add intervals that end before the new interval starts
// while (
//     i < intervals.length &&
//     intervals[i][1] < newInterval[0]
// ) {
//     result.push(intervals[i]);
//     i++;
// }

// // Merge overlapping intervals
// while (
//     i < intervals.length &&
//     intervals[i][0] <= newInterval[1]
// ) {
//     newInterval[0] = Math.min(
//         newInterval[0], intervals[i][0]
//     );

//     newInterval[1] = Math.max(
//         newInterval[1], intervals[i][1]
//     );

//     i++;
// }

// result.push(newInterval);

// // Add remaining intervals
// while (i < intervals.length) {
//     result.push(intervals[i]);
//     i++;
// }

// console.log(result);



// --output

// [[1, 5], [6, 9]]


// How it works:
// - First while: Adds intervals that are completely before the new interval.
// - Second while: Merges every interval that overlaps with the new interval.
// - result.push(newInterval): Adds the final merged interval.
// - Last while: Adds the intervals that come after it.
// This solution assumes the original intervals are sorted and non-overlapping.






// --------------------------------------3. Non-overlapping Intervals

// Goal: Find the minimum number of intervals to remove so that no intervals overlap.

// eg: [[1, 2], [2, 3], [3, 4], [1, 3]]

// We can remove [1, 3] and keep the other three intervals.




// let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];

// // Sort by ending point
// intervals.sort((a, b) => a[1] - b[1]);

// let removed = 0;
// let end = intervals[0][1];

// for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < end) {
//         // Overlap: remove this interval
//         removed++;
//     } else {
//         // No overlap: keep this interval
//         end = intervals[i][1];
//     }
// }

// console.log(removed);


// output = 1 

// How it works:
// 1. Sort intervals by their ending points.
// 2. Keep the interval that ends earliest.
// 3. If the next interval starts before the kept interval ends, count it as removed.
// 4. Otherwise, keep it and update end.



// intervals[i][0] < end


// We use <, not <=, because [1,2] and [2,3] do not overlap under the usual 
// meeting-interval convention: one ends exactly when the next begins.



// -----------------------------------------4. Meeting Rooms 


// Goal: Check whether a person can attend all meetings without conflicts. 

// [[0, 30], [5, 10], [15, 20]] 

// The first meeting overlaps with the other two, so the answer is false. 




// let intervals = [[0, 30], [5, 10], [15, 20]];

// // Sort by starting time
// intervals.sort((a, b) => a[0] - b[0]);

// let canAttend = true;

// for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < intervals[i - 1][1]) {
//         canAttend = false;
//         break;
//     }
// }

// console.log(canAttend);



// output - false 


// How it works:
// After sorting, compare each meeting's start time with the previous meeting's end time.

// intervals[i][0] < intervals[i - 1][1] 


// If the current meeting starts before the previous meeting ends, there is an overlap. 

// for eg:[[0, 10], [10, 20], [20, 30]]


// output - true

// The meetings don't overlap because each one starts exactly when the previous one ends. 


// Quick revision for interviews

// Problem	                   Main technique	                     Time complexity
// Merge Intervals	           Sort + merge	                         (O(n log n))
// Insert Interval	           Three passes with while loops	     (O(n))
// Non-overlapping Intervals   Greedy + sorting by end	             (O(n log n))
// Meeting Rooms	           Sort + compare neighbors	             (O(n log n))


// Recommended learning order: Merge Intervals → Meeting Rooms → Insert Interval → Non-overlapping 
// Intervals.
// Focus on understanding why each condition uses < or <=. That small difference is important in 
// interval problems and often comes up in interviews.

