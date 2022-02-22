// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Answer: 5. I did not pay attention to details. .push adds a value to the end of the array. If i were to add another console.log with colors it would show indigo at the end of the array.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Answer: 10. .length will count the contents and plus one. That can be confusing since arrays start counting at the index of 0.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: answer: o. We are calling on greeting but the 4th index. [4] will log the 4th index of the string "Hello World!" and because index starts at 0 the 4th index will be the 5th character.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Answer: Ruby. The console.log is calling languages but at index 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: Answer: TypeError: weekendDays.toUpperCase is not a function. .toUpperCase() only works on strings not arrays


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Answer: number. typeof will find out if there is a number, boolean, string. The .length will print how many characters or index's are in the array or string. Adding the two commands together the .length will say 3 then the typeof will read that as a number.
