/* 1. Create a function named `calculateGrade` that takes a student's score as a parameter. 
2. Use `switch` statement inside the function - - Use a `switch` statement with the condition `true`. 
- Use `case` statements to check different score ranges and return the corresponding grade. 
3. Declare and initialize the variable 
4. Call the function and print the result //grading input /60–100 A 50–59 B 40–49 C <40 F 
*/ 

let studentScore = 40;

let grade = console.log(calculateGrade(studentScore))

function calculateGrade(score){

    switch(true){
    case (score>=60):
        return "Grade is A "
        break;

    case (score>=50):
        return "Grade is B "
        break;

    case (score>=40):
        return "Grade is C "
        break;

    default:
        return "Grade is D "
        

    }



}