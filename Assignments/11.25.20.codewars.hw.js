// Problem #1 Larger Product or Sum

// function sumOrProduct(array, n) {
//     let sum = 0;
//     let product = 1;
    
//     let answer = array.sort((a, b) => b-a) 
    
//     for (let i = 0; i < n; i++){
//       sum += answer[i];
//     }
//     for (let i = answer.length-1; i >= answer.length -n; i--){
//       product *= answer[i]
//     }
    
//     if (sum > product){
//       return 'sum'
//     } 
//     if (product > sum){
//       return 'product'
//     } else {
//       return 'same'
//     }
    
//   }

// Problem #2 Simple directions reversal

// function solve(arr){
//     const directions = [];
//     const roads = [];
  
//   for (let i = 0; i < arr.length; i++){
//     const onIdx = arr[i].indexOf('on ');
//     directions.push(arr[i].slice(0, onIdx));
//     roads.push(arr[i].slice(onIdx+2, arr[i].length))
//   }
//    if (directions.length > 1){
//      console.log(directions)
//       for (let i = 0; i < directions.length; i++){
//         console.log(directions[i])
//        if (directions[i] === 'Left ' ){
//          directions[i] = 'Right '
//        } 
//       else if (directions[i] === 'Right ') {
//         console.log(i)
//          directions[i] = 'Left '
//        }
//       }
//     } 
//   directions.shift()
//   directions.push('Begin ')
//   const newPath = [];
//   for (let i = 0; i < directions.length; i++){
//     newPath.push(directions[i] + 'on' + roads[i])
//   }
//   return newPath.reverse()
// }


// Problem #3 Life Path Number



// Problem #4 Form the Largest