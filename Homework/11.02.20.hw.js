// Q1:
// Given the variable: let string = 'Nebula Academy'
// Create a function that checks to see if the letter 'a' exists in the string - if it does exist, return the string: 'The letter a exists in the string: (string)'
// If it does not exist, return the string: 'the letter a does not exist'

// let string = "Nebula Academy"

// function doesAExist (letter){
//         if (string.indexOf('a') >= 0){
//             return 'The letter a does exist in the string'
//         } else {
//             return 'the letter a does not exist in the string'
//         }
//     }
//     console.log(doesAExist(string));


// Q2:
// Create a function that checks to see if the argument passed into this function is an array or not. If it is an array, return the string: 'it's an array!'
// If it's not an array, return the string: 'It's not an array!'

// function isAnArray (arrayChecker){
//     if (Array.isArray(arrayChecker)){
//         return 'its an Array!'
//     } else {
//         return 'It is not an array!'
//     }
// }
// console.log(isAnArray(8))
// console.log(isAnArray([1, 2, 3]));
 

// Q3:
// Create a function that checks to see if any number passed into this function is an even number or an odd number.
// If the number is an even number, return the string: '(number) is an even number'
// If the number is an odd number, return the string: '(number) is an odd number'

// function isNumEven (num){
//         if (num % 4 === 0){
//             return `the number ${num} is an even number`
//         } else {
//             return `the number ${num} is an odd number`
//         }
//     }
//     console.log(isNumEven(16))
//     console.log(isNumEven(15));



// Q4:
// Create a function that checks the data type of any argument passed into this function. If the argument is a number, return the string: 'it's a number'
// If the argument is a string, return the string: 'it's a string'
// / If the argument is a boolean, return the string: 'it's a boolean'

// function theType (dataType){
//     if (typeof dataType === 'number'){
//         return 'its a number'
//     } if (typeof dataType === 'string'){
//         return 'its a string'
//     } if (typeof dataType === 'boolean'){
//         return 'its a boolean'
//     } 
//     }    
// console.log(theType(8))
// console.log(theType(true))
// console.log(theType('Jasmine'))


// Q5:
// Create a function that takes in two numbers as parameters: num1 and num2
// If num1 is greater than num2, return the string: '(num1) is greater than (num2)'
// If num1 is less than num2, return the string: (num1) is less than (num2)'
// And if num1 and num2 are equal to each other, return the string, '(num1) and (num2) are equal'

// function twoNums(num1, num2){
//     if (num1 > num2){
//         return `${num1} is greater than ${num2}`
//     } else {
//         return `${num1} is less than ${num2}`
//     }
// }
// console.log(twoNums(6, 4))
// console.log(twoNums(8, 10))