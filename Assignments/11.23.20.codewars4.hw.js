//Problem #1 Maximum Product
// function adjacentElementsProduct(array) {
//     let numbersInArray = [];
//     for (let i = 0; i < array.length -1; i++){
//       let integers = array[i] * array[i+1]
//       numbersInArray.push(integers)
//     }
//     console.log(numbersInArray)
//     return Math.max(...numbersInArray)
//   }

//Problem #2 Maximum Gap (Array Series #4)
// function maxGap (numbers){
//     let max = 0
//     numbers.sort((a, b) => a-b)
    
//     console.log(numbers)
    
//     for (let i = 0; i < numbers.length-1; i++){
//       if ((numbers[i+1] - numbers[i]) > max){
//         max = numbers[i+1] - numbers[i]
//       }
//     }
//     return max
//   }

//Problem #3 Nth Smallest Element (Array Series #4)
// function nthSmallest(arr, pos){
//     let answer = arr.sort((a, b) => a-b)
//     return answer[pos-1]
//  }

//Problem #4 String repeat
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

//Problem #5 Fake Binary
// function fakeBin(x){
    //     let newString = ''
    //     for(let i = 0; i < x.length; i++){
    //       if(Number(x[i]) >= 5){
    //         newString+= '1'
    //       } 
    //       else{
    //       newString+= '0'
    //       }
    //     }
    //     return newString
    //   }
