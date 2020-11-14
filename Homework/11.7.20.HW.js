// Create a function that loops through any string passed into the function.
// Log every character in this string
// Once all characters are successfully logged, return the string, 'Done!'

// function throughLoop (over){
//     for (let i = 0; i < over.length; i++){
//         console.log(over[i])
//     }
//         return 'Done!'
// }
// console.log(throughLoop('Engineer'))

// Create a function that takes in a number as a parameter.
// This function will log from 1- any number passed in this function as an argument
// // After all numbers are successfully logged, return the string, 'Done!'

// function oneToNine (numbers){
//     for (let i = 1; i <= numbers; i++){
//         console.log(i)
//     }
//     return 'Done!'
// }
// console.log(oneToNine(9))
// console.log(oneToNine(5))


// Create a function that takes in an array as a parameter.
// This function will Loop/iterate through the array and log every element inside the array
// After all elements are logged, return the string, 'Done!'

// let classmates = ['Jasmine', 'Anitria', 'Eddy', 'Tauseef']

// function arrayIs (array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
//     return 'Done!'
// }
// console.log(arrayIs(classmates))


// Create a function that takes in a string.
// This function will loop through the string and log the indices of each character in the string.
// After the indices are logged, return the string, 'Done!'

// let takeInString = 'Thanks'

// function stringLoop (){
//     for (let i = 0; i <= takeInString.length - 1; i++){
//         console.log(i)
        
//     }
//     return 'Done!'
// }
// console.log(stringLoop(takeInString))


// // Create a function that only logs the even numbers from 1-10
// // After the even numbers are logged, return the string, 'Done!'

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// function evenNums(numbers){
//     for (let i = 1; i < numbers.length; i+= 2){
//         console.log(numbers[i])    
//         }
//         return 'Done!'   
// }
// console.log(evenNums(numbers))

// Another Way

function evenNum(){
    for (let i = 1; i <= 10; i ++){
        //any number divided by 2 has to have no remainder
        if (i % 2 === 0){
            console.log(i)
        }
    }
    return 'Done!'
}
console.log(evenNum())