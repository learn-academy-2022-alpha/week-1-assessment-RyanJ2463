// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Create a function strLength 
// function needs to hold two strings in the parameter str1, str2
// Conditionals to determine the output
// return the larger string after each condition to end the code when the answer is found 
// output - add the fruit variables to test code 
// console.log 2 times to see both answers

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const strLength = (str1, str2) => {
if(str1.length > str2.length){
    return str1
} else{
    return str2
}
}
console.log(strLength(fruit1, fruit2))
console.log(strLength(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// create a function boilingPoint 
// function needs to hold a number in parameters num
// conditionals to determine if the number is at, above or below boiling point.
// return after each conditional with a statement including the number and if its above, at or below boiling point
// console.log boilingPoint function 3 times with different variables of temp to see answer

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (num) => {
 if(num === 212){
    return `${num} is at boiling point`
} else if (num > 212){
    return `${num} is above boiling point`
} else{
    return `${num} is below boiling point`
}}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// create a code to combine two arrays (console.log)
// use an accessor .concat to combine the two arrays 
// return the length of the two combined with .length 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

// Spilt the string into an array with a new const and .split
// another const to reverse the array reverseName .reverse()
// last const to join the array  .join()
// log the final const 
// 

const currentCohort = "Alpha 2022"
const splitName = currentCohort.split("")
const reverseName = splitName.reverse()
const answer = reverseName.join("")
console.log(answer)



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// create a loop to go through the array 
// have the loop determine if the number is even or odd with conditionals
// log "even" for even numbers in the array
// log "odd" for odd numbers in the array 


const myArray = [13, 34, 5, 10, 27, 42]
for(let i = 0; i < myArray.length; i++){
    if(myArray[i] % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}




// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// create a function numSubtract that holds two numbers num1, num2
// use conditionals to subtract the smaller number from larger number 
// return the difference 
// console.log the 2 sets of numbers

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24



const numSubtract = (num1, num2) => {
    if(num1 > num2){
        return (num1 - num2)
    } else {
        return (num2 - num1)
    }
}
console.log(numSubtract(number1, number2))
console.log(numSubtract(number3, number4))