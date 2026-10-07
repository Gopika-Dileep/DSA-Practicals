// --------------------------- 1.two sum---------------------------------------

//  method used = one-pass hash map (or dictionary) method

// ----using normal object 


// var twoSum = function(nums, target) {
//     let map = {}

//     for(let i = 0 ; i<nums.length ; i++){
//         let needed = target- nums[i]

//         if(map[needed]!== undefined){
//             return [map[needed],i]
//         } 
//         map[nums[i]] = i
//     }
    
// };


// -------using hash map 

// var twoSum = function(nums, target) {
//     let map = new Map()

//     for(let i = 0 ; i<nums.length ; i++){
//         let needed = target- nums[i]

//         if(map.has(needed)){
//             return [map.get(needed),i]
//         } 
//         map.set(nums[i],i)
//     }
    
// };


//both solution are same they are same method , they optimie the code time complexity from o(n^2) to o(n)