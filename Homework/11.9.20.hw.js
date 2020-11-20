// Problem # 1
// Using the array above, create a function that 
// loops through the array and return a new array 
// with only the odd numbers
// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

// function sortOddNums(array){
//     let count = []

//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 1){
//             count.push(array[i])
//          }
//     }
//         return count
// }
// console.log(sortOddNums(numArray))



// Problem # 2


// Using the array above, loop through the array
// and COUNT the amount of even numbers that are
// in the array

// function countEven (numArray){
//     let count = 0

//     for (let i = 0; i < numArray.length; i++){
//         if (numArray[i] % 2 === 0){
//             count += 1
//         }
//     }
//     return count
// }
// console.log(countEven(numArray))


// Problem # 3
// Using the array above, create a function that
// loops through the array and adds every number 
// that is inside the array. Return the total.
// let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

//  function addNums (adding){
//      let total = 0;

//      for (let i = 0; i < adding.length; i++){
//          total += adding[i]
//      }
//      return total
//  }
// console.log(addNums(numArray))


// Part 2
// Problem # 4
// Create a function that accepts an array and a
// searchValue. This function will return true if 
// the searchValue is an element in the array. 
// Otherwise, it will return false. 
// (do not use the built in .includes() method. 
// This function should loop through the array!)

// function acceptArray (array, value){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value){
//             return true
//         }            
//     } 
//         return false
// }
// console.log(acceptArray(['blue', 'orange', 'green', 'purple'], ('pink')))
// console.log(acceptArray(['blue', 'orange', 'green', 'purple'], ('green')))

// Examples for problem #4 what the function invocation could look like:

 

// doesItInclude([40, 7, 8, 23, 43], 23) -> true

// doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false

 

// Part 3

 

// Problem # 5

// Create a function that accepts an array.
// This function will return a new array with
// the elements in reverse order

// let array = ['blue', 'orange', 'green', 'pink']

// function acceptArray(arrays){
//     let output = [];

//     for (let i = arrays.length - 1; i >= 0; i--){
//         output.push(arrays[i])
//     }   
//     return output
// }
// console.log(acceptArray(['blue', 'orange', 'green', 'pink']))


// Part 4

let numbers = [1, 4, 6, 8, 9]

// Problem # 6

// Create a function that takes in a array of numbers.
// This function will return a new array with number that are
// NOT divisible by 3

// function divisible (numberThree){
//     let total = [];
//     for (let i = 0; i < numberThree.length; i++){
//         if (numberThree[i] % 3 !== 0){
//             total.push(numberThree[i])
//         }
//     }
//     return total
// }
// console.log(divisible(numbers));

 

// Problem # 7

// Create another function that adds the numbers
// in the array that are NOT divisible by 3 and 
// return the total

function notDivisible (nums){
        let total = 0
        for (let i = 0; i < nums.length; i++){
            if (nums[i] % 3 === 0){
                continue
            }
            total += nums[i]
        }
            return total
    }
    console.log(notDivisible(numbers));

    // Another way to do problem
    function notDivisible (nums){
        let total = 0
        for (let i = 0; i < nums.length; i++){
            if (nums[i] % 3 !== 0){
                total += nums[i]
            }
        }
            return total
    }
    console.log(notDivisible(numbers));