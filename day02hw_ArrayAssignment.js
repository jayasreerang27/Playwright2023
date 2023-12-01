/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/


//3 Maximum and Minumum

const nums = [34, 7, 21, 89, 54, 10, 91, 67]
maxmin();

function maxmin(){
    let maxnum = Math.max.apply(Math, nums)
    let minnum = Math.min.apply(Math, nums)
    let indmaxnum = nums.indexOf(maxnum);
    let indminnum = nums.indexOf(minnum);

    console.log("The maximum value of the number in the array is " + maxnum + " Index "+ indmaxnum);
    console.log("The minimum value of the number in the array is " + minnum + " Index "+ indminnum);
}

//4 Removing duplicates 


let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]

let outputArray = [] 

function removeDuplicates(){

inputArray.forEach((number) => {
if (!outputArray.includes(number))
{
    outputArray.push(number)
}
}
)
console.log(outputArray)
}

removeDuplicates();


// Array intersection

//Declare array 1
let nums1 = [4,9,5]

//Declare a new array to store the unique values from array1 
let newnums1 = [] 

//Declare array 2
let nums2 = [9,4,9,8,4]

//Declare a new array to store the unique values from array2 
let newnums2 = [] 

//Call function
intersection();

//Create a fucntion to remove duplicates from both arrays and find the interesection
function intersection(){

 //Removing duplicates from the 1st array    
nums1.forEach((number1) => {
if (!newnums1.includes(number1))
{
    newnums1.push(number1)
}
}
)

 //Removing duplicates from the 2nd  array    
 nums2.forEach((number2) => {
    if (!newnums2.includes(number2))
    {
        newnums2.push(number2)
    }
    }
    )

 //Fimd interesection b/w the arrays
 
 let intersection = newnums1.filter(x => newnums2.includes(x));

console.log(intersection)
}
