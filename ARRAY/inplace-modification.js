// In-place modification in arrays means changing the original array directly without creating a new array. 



// -------------------------------------1. Example: In-place modification

// let arr = [10, 20, 30, 40];

// arr[1] = 99;

// console.log(arr);

// ---output 
// [10, 99, 30, 40] 

// ---note 
// Here, we changed 20 to 99 directly in the original array. 
// We didn't create another array. So, this is in-place modification.


// -------------------------------------2. Example: Swapping elements


// let arr = [10, 20, 30];

// [arr[0], arr[2]] = [arr[2], arr[0]];

// console.log(arr);


// ---output 
// [30, 20, 10] 


// ---note

// We swapped the first and last elements inside the original array. This is also in-place modification. 




// -------------------------------------3. Example: Removing duplicates in-place


// let arr = [1, 1, 2, 2, 3];

// let j = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[j]) {
//         j++;
//         arr[j] = arr[i];
//     }
// }

// arr.length = j + 1;

// console.log(arr);



// ----output

// [1, 2, 3]

// ----notes 
// We modified the original array instead of creating a separate array to store the unique elements.





// -------------------------------------4. In-place vs. creating a new array

// In-place
// let arr = [1, 2, 3];
// arr[0] = 100;

// The original array becomes [100, 2, 3].


// New array
// let arr = [1, 2, 3];
// let newArr = arr.map(x => x * 2);


// arr remains [1, 2, 3], while newArr becomes [2, 4, 6].






// 5. Which array methods modify the original array?

// Method	   In-place?
// push()	     Yes
// pop()	     Yes
// splice()	     Yes
// sort()	     Yes
// reverse()	 Yes
// map()	      No
// filter()    	  No
// slice()	      No
// concat()	      No



// Remember for DSA interviews: In-place modification often means solving a problem by changing 
// the original array, ideally using \(O(1)\) extra space.

// For example, swapping elements, reversing an array, moving zeroes to the end, or removing 
// duplicates in-place are common interview problems.