
/* 1) Find the number of occurances. // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5) */

/*const nums = [2,4,5,2,1,2,2,2,];
const k = 2;
let j = 0; 

function noOfOcurrences(){

    for (let i= 0; i< nums.length ; i ++)
    {
        if(nums[i] == k )
        j = j +1 ; 

    }

   console.log(k + " occurs " +j+ " times")

}

noOfOcurrences()


*/
//2nd 0ne

const nums2 = [2,4,7,11,14,4,16,14];
const target = 18 

const nums2new = nums2.sort();

console.log(nums2)
console.log(nums2new)


function targetReached() {

for (i =0; i < nums2.length; i++ ){

for (j=i; j<nums2.length; j++){

    if (nums2[i] + nums2[j] == 18 ){
        console.log(nums2[i] + "," + nums2[j]);
        }
}    
        
    }
}

targetReached();
