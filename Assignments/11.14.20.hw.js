// Part 1
// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

// For each problem, use the nested array above and….

// Problem #1

// Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.
// Return the string, 'Done!' at the end

// function arraysNested(array){
//     for (let i = 0; i < array.length; i++){
//         let firstLoop = array[i]
//         if (Array.isArray(firstLoop)){
//             for (let j = 0; j < firstLoop.length; j++){
//                 let secondLoop = firstLoop[j]
//                 console.log(secondLoop)
//             }
//         }else {
//             console.log(firstLoop) 
//         }        
//     }
//     return 'Done!'
// }
// console.log(arraysNested(nested));

// Problem #2

// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

// Create a function that adds only the ODD numbers inside
// the NESTED arrays.
// Return the total
// function addingOdds(array){
//     let count = 0;
    
//     for(let i = 0; i < array.length; i++){
//         let first = array[i]
//         if (Array.isArray(first)){
//             for(let j = 0; j < first.length; j++){
//                 let second = first[j]
               
//                 if(second % 2 === 1){
//                     count += second
//                 }
//             }
//         }
//     } return count
// }
// console.log(addingOdds(nested)); 

// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

// Problem #3

// Create a function that logs only the EVEN numbers in
// the array and in the nested arrays.
// After logging every even number, return, 'Done!'
// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

// function onlyEvens(evenNums){
//     for (let i = 0; i < evenNums.length; i++){
//         let element = evenNums[i]
//         if(Array.isArray(element)){
//             for(let j = 0; j < element.length; j++){
//                 let adding = element[j]
//                 if (adding % 2 === 0){
//                     console.log(adding)
//                 }
//             }
//         }else if (element % 2 === 0){
//                 console.log(element)
//             }
        
//     } return 'Done!'
// }
// console.log(onlyEvens(nested));

// Part 2

 
let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
// For each problem, use the nested array above and….

// Problem #4

// Create a function that logs every word in the 
// array and the nested arrays.
// Return 'Done!' at the end
// function logWords(words){
//     for (let i = 0; i < words.length; i++){
//         let first = words[i]
//         if (Array.isArray(first)){
//             for (let j =0; j < first.length; j++){
//                 let second = first[j]
//                 console.log(second)
//             }
//         } else{
//             console.log(first)
//         }
//     }
//     return 'Done!'
// }
// console.log(logWords(nestedArr))
 

// Problem #5

// Create a function that adds that word 'nested' 
// to the end of every nested array.
// Return the new array
// function addWord (nested){
//     for (let i = 0; i < nested.length; i++){
//             let newArr = nested[i]
//         if (Array.isArray(newArr)){
//                 newArr.push('nested')
//         }
   
//     } return nested
// }
// console.log(addWord(nestedArr));
 

// Problem #6

// Create a function that logs every word that has the
// letter 'a' in the word in the array and the nested 
// arrays.
// Return 'Done!' at the end

function doesAExist (array){
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        if (Array.isArray(element)){
            for (let j = 0; j < element.length; j++){
                let nestedElement = element[j]
                if (nestedElement.includes('a')){
                    console.log(nestedElement)
                }
            }
        } else if (element.includes('a')){
            console.log(element)
        }
    }
    return 'Done!'
}
console.log(doesAExist(nestedArr));
 

// Problem #7

// Create a function that logs every word that has a 
// length of 4 in the array and in the nested arrays.
// Return 'Done!' at the end

function logElement (array){
    for(let i=0; i < array.length; i++){
        let element = array[i]
        if(Array.isArray(element)){
            for(let j = 0; j < element.length; j++){
                let nestedElement= element[j]
                if (nestedElement.length === 4){
                    console.log(nestedElement)
                }
            }
        } else if (element.length  === 4){
            console.log(element)
        }
    } return 'Done!'
}
console.log(logElement(nestedArr))