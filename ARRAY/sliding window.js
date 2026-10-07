// -----------------------------------------------question 1 ---------------------------------------


// Find the maximum sum of any 3 consecutive elements in [2, 1, 5, 1, 3, 2]. 


// ans 

// function maxSum(arr, k) {
//     let windowSum = 0;
//     let maxSum = 0;

//     // Create the first window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i];
//     }

//     maxSum = windowSum;

//     // Slide the window
//     for (let i = k; i < arr.length; i++) {
//         windowSum = windowSum - arr[i - k] + arr[i];

//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }

// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));





// -----------------------------------------------question 2 ---------------------------------------

//  ------------------fixed sliding window 

// ---the first question (same)


// ------------------------dynamic sliding window 

// Find the smallest subarray whose sum is at least 7 

// --ans

// function minSubArrayLen(target, nums) {
//     let left = 0;
//     let sum = 0;
//     let minLength = Infinity;

//     for (let right = 0; right < nums.length; right++) {

//         // Expand window
//         sum += nums[right];

//         // Shrink window while valid
//         while (sum >= target) {

//             minLength = Math.min(
//                 minLength,
//                 right - left + 1
//             );

//             sum -= nums[left];
//             left++;
//         }
//     }

//     return minLength === Infinity ? 0 : minLength;
// }

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));







// ------------------practice questions using sliding window


// ----------------------------------------question 1--------------------------------------------

// 1. Maximum Sum of K Consecutive Elements 

// Find the maximum sum of 3 consecutive elements. 
// [2, 1, 5, 1, 3, 2] => output = 9 



// ---ans

// function maxSum(arr, k) {
//     let sum = 0;

//     // First window
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//     }

//     let max = sum;

//     // Slide
//     for (let i = k; i < arr.length; i++) {
//         sum = sum - arr[i - k] + arr[i];
//         max = Math.max(max, sum);
//     }

//     return max;
// }

// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));



// ----------------------------------------question 2--------------------------------------------



// 2. Average of Every K Consecutive Elements 

// Find the average of every 5 consecutive elements. 

// [1, 3, 2, 6, -1, 4, 1, 8, 2] = > output = [2.2, 2.8, 2.4, 3.6, 2.8]




// ---ans

// function averages(arr, k) {
//     let sum = 0;
//     let result = [];

//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//     }

//     result.push(sum / k);

//     for (let i = k; i < arr.length; i++) {
//         sum = sum - arr[i - k] + arr[i];

//         result.push(sum / k);
//     }

//     return result;
// }

// console.log(averages(
//     [1, 3, 2, 6, -1, 4, 1, 8, 2],
//     5
// ));






// ----------------------------------------question 3--------------------------------------------


// 3. Maximum Number of Vowels in K Consecutive Characters

// Find the maximum number of vowels in any 3 consecutive characters. 


// "abciiidef"  => output = 3



// ---ans 

// function maxVowels(str, k) {
//     let vowels = "aeiou";
//     let count = 0;

//     // First window
//     for (let i = 0; i < k; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     let max = count;

//     // Slide
//     for (let i = k; i < str.length; i++) {

//         // Remove left character
//         if (vowels.includes(str[i - k])) {
//             count--;
//         }

//         // Add new character
//         if (vowels.includes(str[i])) {
//             count++;
//         }

//         max = Math.max(max, count);
//     }

//     return max;
// }

// console.log(maxVowels("abciiidef", 3));






// ----------------------------------------question 4--------------------------------------------

// 4. Find All Anagrams in a String 

// s = "cbaebabacd"
// p = "abc"

// output = >  [0, 6]

// Find the starting indexes of anagrams of "abc". 

// ---ans 

// function findAnagrams(s, p) {
//     let result = [];

//     let need = {};

//     for (let char of p) {
//         need[char] = (need[char] || 0) + 1;
//     }

//     let window = {};

//     for (let i = 0; i < s.length; i++) {

//         // Add character
//         window[s[i]] = (window[s[i]] || 0) + 1;

//         // Keep window size equal to p.length
//         if (i >= p.length) {
//             let removed = s[i - p.length];

//             window[removed]--;

//             if (window[removed] === 0) {
//                 delete window[removed];
//             }
//         }

//         // Compare
//         if (JSON.stringify(window) === JSON.stringify(need)) {
//             result.push(i - p.length + 1);
//         }
//     }

//     return result;
// }

// console.log(findAnagrams("cbaebabacd", "abc"));


// ----------------------------------------question 5--------------------------------------------

// 5. Longest Substring Without Repeating Characters

// Find the longest substring without repeating characters. 

// "abcabcbb"  => output = 3  (that is "abc") 




//---ans 

// function longestUniqueSubstring(str) {
//     let left = 0;
//     let maxLength = 0;
//     let set = new Set();

//     for (let right = 0; right < str.length; right++) {

//         while (set.has(str[right])) {
//             set.delete(str[left]);
//             left++;
//         }

//         set.add(str[right]);

//         maxLength = Math.max(
//             maxLength,
//             right - left + 1
//         );
//     }

//     return maxLength;
// }

// console.log(longestUniqueSubstring("abcabcbb"));






// ----------------------------------------question 6--------------------------------------------

// 6. Longest Subarray With Sum ≤ K  

// Find the longest continuous subarray whose sum is at most 4.  

// [1, 2, 1, 0, 1, 1, 0]  => output = 5 



// ---ans 

// function longestSubarray(arr, k) {
//     let left = 0;
//     let sum = 0;
//     let maxLength = 0;

//     for (let right = 0; right < arr.length; right++) {

//         sum += arr[right];

//         while (sum > k) {
//             sum -= arr[left];
//             left++;
//         }

//         maxLength = Math.max(
//             maxLength,
//             right - left + 1
//         );
//     }

//     return maxLength;
// }

// console.log(longestSubarray(
//     [1, 2, 1, 0, 1, 1, 0],
//     4
// ));



// ----------------------------------------question 7--------------------------------------------

// 7. Minimum Size Subarray Sum  

// Find the minimum length subarray whose sum is at least 7.  

// [2, 3, 1, 2, 4, 3]  => output = 2 ([4, 3])



// ---ans 

// function minSubarrayLength(arr, target) {
//     let left = 0;
//     let sum = 0;
//     let minLength = Infinity;

//     for (let right = 0; right < arr.length; right++) {

//         sum += arr[right];

//         while (sum >= target) {

//             minLength = Math.min(
//                 minLength,
//                 right - left + 1
//             );

//             sum -= arr[left];
//             left++;
//         }
//     }

//     return minLength === Infinity ? 0 : minLength;
// }

// console.log(
//     minSubarrayLength([2, 3, 1, 2, 4, 3], 7)
// );




// ----------------------------------------question 8--------------------------------------------

// 8. Longest Substring With At Most K Distinct Characters  

// Find the longest substring containing at most 2 different characters. 

// Given:

// "eceba"

// and:

// k = 2

// Find the longest substring containing at most 2 different characters.

// "ece"

// has:

// e, c

// Only 2 distinct characters.

// Length = 3.

// output  = 3 



// ---ans 

// function longestSubstring(str, k) {
//     let left = 0;
//     let maxLength = 0;
//     let map = new Map();

//     for (let right = 0; right < str.length; right++) {

//         let char = str[right];

//         map.set(char, (map.get(char) || 0) + 1);

//         while (map.size > k) {

//             let leftChar = str[left];

//             map.set(
//                 leftChar,
//                 map.get(leftChar) - 1
//             );

//             if (map.get(leftChar) === 0) {
//                 map.delete(leftChar);
//             }

//             left++;
//         }

//         maxLength = Math.max(
//             maxLength,
//             right - left + 1
//         );
//     }

//     return maxLength;
// }

// console.log(longestSubstring("eceba", 2));






// ----------------------------------------question 9--------------------------------------------


// 9. Longest Ones After Replacing K Zeros 

// Find the longest sequence of consecutive 1s.

// You can change at most 2 zeros into ones.

// [1,1,1,0,0,0,1,1,1,1,0] => output = 6   ([0,0,1,1,1,1])



// ---ans 

// function longestOnes(arr, k) {
//     let left = 0;
//     let zeros = 0;
//     let maxLength = 0;

//     for (let right = 0; right < arr.length; right++) {

//         if (arr[right] === 0) {
//             zeros++;
//         }

//         while (zeros > k) {

//             if (arr[left] === 0) {
//                 zeros--;
//             }

//             left++;
//         }

//         maxLength = Math.max(
//             maxLength,
//             right - left + 1
//         );
//     }

//     return maxLength;
// }

// console.log(
//     longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)
// );





// ----------------------------------------question 10--------------------------------------------


// 10. Minimum Window Substring ⭐

// Given:

// s = "ADOBECODEBANC"
// t = "ABC"

// Find the smallest substring of s containing:

// A
// B
// C

// Answer:

// "BANC"



// --ans 

// function minWindow(s, t) {
//     let need = new Map();

//     for (let char of t) {
//         need.set(char, (need.get(char) || 0) + 1);
//     }

//     let window = new Map();

//     let left = 0;
//     let formed = 0;

//     let minLength = Infinity;
//     let start = 0;

//     for (let right = 0; right < s.length; right++) {

//         let char = s[right];

//         if (need.has(char)) {
//             window.set(
//                 char,
//                 (window.get(char) || 0) + 1
//             );

//             if (window.get(char) === need.get(char)) {
//                 formed++;
//             }
//         }

//         // All required characters found
//         while (formed === need.size) {

//             if (right - left + 1 < minLength) {
//                 minLength = right - left + 1;
//                 start = left;
//             }

//             let leftChar = s[left];

//             if (need.has(leftChar)) {

//                 window.set(
//                     leftChar,
//                     window.get(leftChar) - 1
//                 );

//                 if (
//                     window.get(leftChar) <
//                     need.get(leftChar)
//                 ) {
//                     formed--;
//                 }
//             }

//             left++;
//         }
//     }

//     return minLength === Infinity
//         ? ""
//         : s.substring(start, start + minLength);
// }

// console.log(minWindow("ADOBECODEBANC", "ABC"));





// -----------------------------------------------------------------------


// The basic skeleton





// For fixed-size:

// for (let i = 0; i < k; i++) {
//     // build first window
// }

// for (let i = k; i < arr.length; i++) {
//     // remove left
//     // add right
// }






// For variable-size:

// let left = 0;

// for (let right = 0; right < arr.length; right++) {

//     // add arr[right]

//     while (window is invalid) {
//         // remove arr[left]
//         left++;
//     }

//     // update answer
// }