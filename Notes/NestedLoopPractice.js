// using the nestedArray above, log every 
// number in the array and the nested array

// let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]

// function loopNested (array){
//      for (let i = 0; i < array.length; i++){
//         let firstNested = array[i]
//         if (Array.isArray(firstNested)){
//             for (let j = 0; j < firstNested.length; j++){
//                 let secondNested = firstNested[j]
//                 console.log(secondNested)
//             }
//         } else{
//             console.log(firstNested)
//         }
        
//     }
// }
// console.log(loopNested(nestedArray));


// let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']

// //  using the nested array above (nestedArr),
// // remove the first element in the nested arrays
// //use .shift() to remove first element

// // function removeElement (array){
// //     for(let i = 0; i < array.length; i++){
// //         let element = array[i]
// //         if (Array.isArray(element)){
// //             for (let j = 0; j < element.length; j++){
// //                 let nestedElement = element[j]
// //             }
// //         }
// //         nestedElement.shift()
// //         console.log(element[j])
// //     } return 'Did it!'
        
// // } 
// // console.log(removeElement(nestedArr))

// // using the nested array above (nestedArr), add 's' to 
// // every word in the elements inside the array and 
// // in the nested arrays

// function addLetterS(array){
//     for(let i = 0; i < array.length; i++){
//         // console.log(array[i])
//         let element = array[i]
//         if (Array.isArray(element)){
//             for(let j = 0; j < element.length; j++){
//                 let nestedElement = element[j]
//             }
//         } else if (nestedElement.push()){
//             console.log(nestedElement)
//         } 
//     }return 'Done!'

// }console.log(addLetterS(nestedArr));

// // } console.log(addLetterS(nestedArr));