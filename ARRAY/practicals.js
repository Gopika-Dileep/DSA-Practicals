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

