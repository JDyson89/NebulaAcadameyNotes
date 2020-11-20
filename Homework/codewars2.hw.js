// // Keep Hydrated!

// function litres(time){
  
//     return Math.floor(time/2);  
  
// }

// // Get the mean of an array

// function getAverage(marks){

//     let total = 0
    
//       for(let i = 0; i <= marks.length - 1; i++){
//         total += marks[i]      
//       }
//      let average = total/marks.length
//        return Math.floor(average)
//     }

// // Gravity Flip
// const flip=(dir, arr)=>{
//     if (dir === 'R'){
//       return arr.sort((a, b) => a - b)  
//     } 
//     return arr.sort((a, b) => b - a)
    
//   }

// // Reversed Words
function reverseWords(str){
    let output = '';
    
    for (let i = str.length - 1; i >= 0; i--){
         output = output + str[i];
    }
    return output;
  }
  console.log(reverseWords(output))



// // Are You Playing Banjo?
// function areYouPlayingBanjo(name) {

//     if (name[0] == 'R' || name[0] == 'r'){
//   return name +  ' plays banjo';// Implement me
// } else{ 
//     return name + ' does not play banjo';
//   }
// }



// // Grasshopper - Summation
// var summation = function (num) {
//     let total = 0
//     for ( let i = 0; i <= num; i++){
//       total += 1
//     }
//     return total;
//   } 
//   //only passed one test



// // Invert values
// function invert(array){
//     let inverse = []
//     for ( let i = 0; i < array.length; i++){
//       let newNum = array[i] * -1
//       inverse.push(newNum)
//     }
//   return inverse
//   }