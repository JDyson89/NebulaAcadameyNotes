// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009

// function multipleOfIndex(array) {
  
//     return array.filter((num, i) => num % i === 0 )
    
//   //   let copy = []
//   //   for (let i = 0; i < array.length; i++){
//   //     if(array[i] % i === 0){
//   //       copy.push(array[i])
//   //     }
//   //   }
//   //   return copy
//   }

// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// function digitize(n) {
//     let stringn = String(n)
//     let arrayNum = stringn.split('')
//     let mapArray = arrayNum.map(Number)
//     let final = mapArray.reverse()
//     console.log(final)
    
//     return String(n).split('').map(Number).reverse()
// }

// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(array){
  
//     let sum = 0; 
//     array.map(function(element){
//       sum += parseInt(element)
//     })
//     return sum


// let count = 0
// x.forEach(num => 
//   if (typeof num === 'string'){
//     count += Number(num)
//   } else {
//     count += num
//   })
//   return count

// }

// Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// function sumOfDifferences(arr) {
//     if(arr.length < 2)
//       return 0
//     //sort the numbers from greatest to smallest
//     arr.sort((a,b) => b-a)
//      let sum = []
//     //loop through the array to sum the consecutive numbers
//     for(let i= 0; i < arr.length; i++){
//        sum.push(arr[i] - arr[i +1])
//     }
//     sum.pop()
//       return sum.reduce((a,b) => a + b)
//   }

// take the derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
// function derive(coefficient,exponent) {
//     let multiply = coefficient * exponent
//     let subtraction = exponent - 1
//       return `${multiply}x^${subtraction}`
//     }


// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// function points(games) {
//     let total= 0;
//     games.forEach(game => {
//       const [x,y] = game.split(':').map(Number);
//         if(x>y){
//           total+= 3
//         } else if(x===y){
//           total+= 1
//         }
//       })
//         return total
//   }