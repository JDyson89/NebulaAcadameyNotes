// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => {      
//       if (month < 4 ){
//           return 1
//       }
//       if (month > 3 && month < 7){
//         return 2
//       }
//       if (month > 6 && month < 10){
//         return 3
//       } else {
//         return 4
//       }
    
//     //   return Math.ceil(month/3)
      
//     }

// Multiplication Table
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// function multiTable(number) {
//       let result = '';
//       for (let i = 1; i <= 10; i++){
//         let total = number * i
//         result += i + ' * ' + number + ' = ' + total + '\n'
        
//         console.log(result)
//       }
//       return result.slice(0, -1) 
//     }

// Enough Space
// https://www.codewars.com/kata/5875b200d520904a04000003

// function enough(cap, on, wait) {
//     let total = on + wait
    
//     if (total <= cap){
//       return 0
//     } else {
//       return total - cap
//     }
    
//   }

// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {     
//       let result = [];
      
//       for (let i = n; i >= 1; i--){
//         result.push(i);
//       }
//       return result
      
//     };

// Switch it up
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// function switchItUp(number){

//     let numberObject = {
//       '0' : 'Zero',
//       '1' : 'One',
//       '2' : 'Two',
//       '3' : 'Three',
//       '4' : 'Four',
//       '5' : 'Five',
//       '6' : 'Six',
//       '7' : 'Seven',
//       '8' : 'Eight',
//       '9' : 'Nine'
//     }
    
//     for (let key in numberObject){
      
//       if (number === Number(key)){
//        return numberObject[key]
//       }
//     }
     
//    }

// A Wolf in Sheep's Clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// function warnTheSheep(queue) {
  
//     queue = queue.reverse()
    
//     if (queue[0] === 'wolf'){
//       return "Pls go away and stop eating my sheep"
//     }
  
//     for (let i = 0; i < queue.length; i++){
//       if (queue[i] === 'wolf'){
        
//         return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
//       }
//     }
