// ## 1. Arrays

// ### Subtopics

// - Array traversal
// - Two pointers
// - Sliding window
// - Prefix sums
// - Kadane's Algorithm
// - In-place modification
// - Matrix traversal
// - Intervals



// ------------------Array traversal

// --- question 1


// Given [10, 20, 30, 40, 50], find the sum of all elements. 

// const arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum); // 150



// ----------------------Two pointers

// -----question 2


// Given a sorted array [1, 2, 3, 4, 6], find whether two numbers add up to 7. 

// const arr = [1, 2, 3, 4, 6];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   const sum = arr[left] + arr[right];

//   if (sum === 7) {
//     console.log(true);
//     break;
//   }

//   if (sum < 7) {
//     left++;
//   } else {
//     right--;
//   }
// }


// ---------------------sliding window-----------------

// -----question 3

// Find the maximum sum of any 3 consecutive elements in [2, 1, 5, 1, 3, 2]. 

// Answer: 9 → 5 + 1 + 3 


// const arr = [2, 1, 5, 1, 3, 2];

// let windowSum = 0;
// let maxSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   windowSum += arr[i];

//   if (i >= 2) {
//     maxSum = Math.max(maxSum, windowSum);
//     windowSum -= arr[i - 2];
//   }
// }

// console.log(maxSum); // 9




// ------------------------Prefix sums-------------------------

// Given [1, 2, 3, 4, 5], find the sum of elements from index 1 to 3. 

// output = 9 


// const arr = [1, 2, 3, 4, 5];

// const prefixSum = [];

// prefixSum[0] = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   prefixSum[i] = prefixSum[i - 1] + arr[i];
// }

// const left = 1;
// const right = 3;

// const sum = prefixSum[right] - prefixSum[left - 1];

// console.log(sum); // 9




// ------------------------------Kadane's Algorithm----------------------------------------------


// Find the maximum subarray sum in [-2, 1, -3, 4, -1, 2, 1]. 


// ---ans

// const arr = [-2, 1, -3, 4, -1, 2, 1];

// let current = arr[0];
// let maxSum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   current = Math.max(arr[i], current + arr[i]);
//   maxSum = Math.max(maxSum, current);
// }

// console.log(maxSum); // 6



// -----------------------------------in-Place modification ---------------------------------------

// Remove all 0s from [1, 0, 2, 0, 3] in-place and move the non-zero elements to the beginning. 


// const arr = [1, 0, 2, 0, 3];

// let j = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[j] = arr[i];
//     j++;
//   }
// }

// console.log(arr); // [1, 2, 3, 0, 3]

// arr.length = j;

// console.log(arr); // [1, 2, 3]




// -------------------------------------matrix traversal-------------------------------------------

// Find the sum of all elements in this matrix: 

// [
//   [1, 2],
//   [3, 4]
// ]

// output = 10


// ----ans 

// const matrix = [
//   [1, 2],
//   [3, 4]
// ];

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     sum += matrix[i][j];
//   }
// }

// console.log(sum); // 10




// ----------------------------------------8. Intervals------------------------------------------


// Question:
// Given intervals:
// [[1, 3], [2, 6], [8, 10]]

// Merge the overlapping intervals.

//  output -  [[1, 6], [8, 10]] 



// ---ans 

// const intervals = [[1, 3], [2, 6], [8, 10]];

// intervals.sort((a, b) => a[0] - b[0]);

// const result = [intervals[0]];

// for (let i = 1; i < intervals.length; i++) {
//   const last = result[result.length - 1];
//   const current = intervals[i];

//   if (current[0] <= last[1]) {
//     last[1] = Math.max(last[1], current[1]);
//   } else {
//     result.push(current);
//   }
// }

// console.log(result);
// // [[1, 6], [8, 10]]


// Logic:
// If the current interval starts before the previous interval ends, they overlap → merge them.



