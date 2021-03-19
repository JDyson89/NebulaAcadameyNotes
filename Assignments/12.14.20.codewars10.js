// Difference in Age
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

// function differenceInAges (ages) {

//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//         diff = max - min
        
//     return [min, max, diff]
// }

// Initials
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// function abbrevName(name){
//     let newName = name.split(' ')
//     return newName[0].charAt(0).toUpperCase() + '.' + newName[1].charAt(0).toUpperCase()
//   }

// Needle in the hay stack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// function findNeedle(haystack) {
//     return 'found the needle at position ' + haystack.findIndex(string => string === 'needle'); 
//   }

// function findNeedle(haystack) {
//       return 'found the needle at position ' + haystack.indexOf('needle'); 
//     }

// Count of positives sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// function countPositivesSumNegatives(input) {
//     let sum = 0
//     let count = 0 
    
//     if (input === null){
//       return []
//     }
//     if (!input.length){
//       return []
//     }
    
    
//     for (let i = 0; i <= input.length-1; i++){
//       if (input[i] < 0){
//         sum += input[i]
//       } 
//       if (input[i] >= 1) {
//         count++
//       }
//     }
  
    
//     return [count, sum]
//   }

// Remove duplicate
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

// function distinct(a) {
//   return [...new Set(a)]
// }

// function distinct(a) {
//     return a.filter((item, index) => a.indexOf(item) === index)
//   }