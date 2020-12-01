// Problem #1

// Create a function that checks the type of the argument as well as if the argument is an array or not

// IF it is a string, return the string passed in as the argument
// IF it is a number, return the number passed in as the argument
// IF it is a boolean, return the boolean passed in as the argument
// IF it is an array, return the array passed in as the argument

//  function typeOfArgument (which){
//      if (typeof which === 'string'){
//          return which
//      }
//      if (typeof which === 'number'){
//          return which
//      }
//      if (typeof which === 'boolean'){
//          return which
//      }
//      if (Array.isArray(which))
//          return which
//  }

// console.log(typeOfArgument('blessed'));
// console.log(typeOfArgument(8));
// console.log(typeOfArgument(false));
// console.log(typeOfArgument(['blessed', 'faith', 'hope']));


// Problem #2

// Create a function that takes in 2 parameters: num1 and num2
// IF both of the numbers passed into the function as arguments are greater than 50, then return num1*num2
// IF both of the numbers are less then 50, add the two numbers : return num1+num2
// IF one of the numbers is greater than 50 and the other is less than 50, divide the two numbers: return num1/num2

// function twoParams(num1, num2){
//     if (num1 > 50 && num2 > 50){
//         return num1*num2
//     } 
//     else if (num1 < 50 && num2 < 50){
//         return num1+num2
//     }
//     //trying to get one number greater than 50 and one number less than 50
//     else if ((num1 > 50 || num2 > 50) && (num1 < 50 || num2 < 50)){
//         return num1/num2
//     }
// }
// console.log(twoParams(55, 80));
// console.log(twoParams(10, 22));
// console.log(twoParams(5, 55));

// Problem #3

// Create a function that that takes in 2 parameters that are numbers.
// IF the first number divided by the second number has a remainder, return the string: 'the remainder if (num1) divided by (num2) is (remainder)
// IF there is no remainder, return the string: '(num1) divided by (num2) has no remainders'
// function twoNumParams (num1, num2){
//     let remainder = num1 % num2
//     if (num1  % num2 >= 1){
//         return `the remainder of ${num1} is divided by ${num2} the remainder is ${remainder}`
//     }
//     else {
//         return `${num1} divided by ${num2} has no remainder`
// }
// }
// console.log(twoNumParams(16, 4));
// console.log(twoNumParams(21, 4))

// Problem #4

// Create a function that takes in a string. This function will calculate the length of any string passed into this function.
// IF the length of the string is an odd number, return the string: 'the length of (string) is an odd number'
// IF it is an even number, return the string: 'the length of (string) is an even number'

//  function lengthOf (str){
//     //  console.log(str.length)
//      if (str.length % 2 !== 0){
//         return `the length of "${str}" is a odd number`
//      }
//      else{
//          return `the length of "${str}" is an even number`
//      }
//  }
// console.log(lengthOf('today is thursday'));
// console.log(lengthOf('today is thursdays'))


// Problem #5

// Create a function that takes in an array. This function calculates the length of the array.
// IF the length of the array is even, remove the last element of the array, add a new element at the beginning of the array and return the new array
// IF the length of the array is od, remove the first element of the array, add a new element to the end of the array and return the new array

function firstEl(array){  
    if (array.length % 2 === 0){
        array.pop()
        array.unshift('people')
        return array
    }
    else if (array.length % 2 !== 0){
        array.shift()
        array.push('love')
        return array
    }

}
console.log(firstEl(['beach', 'sand', 'water', 'waves', 'crabs']));
