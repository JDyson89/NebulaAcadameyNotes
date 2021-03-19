// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// function between(a, b) {
//     //   for (var array = []; a <= b; a++) array.push(a)
//     //   return array 
      
//       let arr = []
//       for (let i = a; i <= b; i++){
//         arr.push(i)
//       }
//       return arr
//     }

// Tip Calculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087

// function calculateTip(amount, rating) {
//     let x = rating.toLowerCase()
    
//     if (x === 'terrible'){
//       return 0
//     }
//     if (x === 'poor'){
//       return Math.ceil(amount * .05)
//     } 
//     if (x === 'good'){
//       return Math.ceil(amount * .1)
//     }
//     if (x === 'great'){
//       return Math.ceil(amount * .15)
//     } 
//     if (x === 'excellent'){
//       return Math.ceil(amount * .2)
//     } else {
//       return "Rating not recognised"
//     }

// function calculateTip(amount, rating) {
//     let x = rating.toLowerCase()
//     switch (x){
//         case 'terrible':
//           return 0
//         case 'poor':
//           return Math.ceil(amount * .05)
//         case 'good':
//           return Math.ceil(amount * .1)
//         case 'great':
//           return Math.ceil(amount * .15)
//         case 'excellent':
//           return Math.ceil(amount * .2)
//         default:
//           return "Rating not recognised"
//     }
//   }

// Draw Stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

// function drawStairs(n) {
//     let result = [];
//     console.log(result)
//     for (let i = 0; i < n; i++){
//       result[i] = `${' '.repeat(i)}I` 
//     }
//     return result.join('\n')
//   }

// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// function noSpace(x){
//     return x.split(' ').join('')
// }

//LeetCode Problem:

// TwoSum:
// https://leetcode.com/problems/two-sum

// var twoSum = function(arr, target) {
//     var result = []
//      for (let i = 0; i < arr.length; i++){
//          for (let j = i + 1; j < arr.length; j++){
//              if (arr[i] + arr[j] === target){
//                  result.push(i)
//                  result.push(j)
//              }
//          }
//      }
//     return result
// };
