/*  Create a function names "checkNumberType'

Use if to check if the number is greater than 0
Use else if to check if the number is less than 0 
Use else to check if the number is not greater or lesser than 0 
Return the corresponding value for each case 
Declare and initialize the variable 
Call the function and print the result . 
*/

let number = -1

let typeOfNumber = console.log(checkNumberType(number))



function checkNumberType(num)
{

    if(num > 0){

        return "Number is greater than 0 "
    } else if( num < 0){
        return "Number is less than 0"
    }else {
        return " Number is equal to zero"
    }

}
