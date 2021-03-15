//Function 2- squaring an argument




// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript

// function capitalizeWord(word) {
 
//     let firstLetter = word[0].toUpperCase()
//     let secondString = word.substr(1)
        
    
//     return firstLetter + secondString;
//   }


// //Problem
// let database = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//     }
    
//     function greet(language){
//       for (let key in database){
//          if(language === key){
//           return database[key]
//         }
//       }
//           return 'Welcome'
//     }
    


// function match(candidate, job) {
    // is this job a valid match for the candidate?
// let need = candidate.minSalary
// let offer = job.maxSalary

//   if(offer >= need){
//     return true
//   } else{
//     return false
//     }
// }

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

// function sumOrProduct(array, n){
//     let sum = 0
//     let product = 1;
//     let answer = array.sort((a,b) => b - a)
    
//     for(let i = 0; i < n; i++){
//       sum+= answer[i]
//     }
//     for(let i = answer.length - 1; i >= answer.length - n; i--){
//       product*= answer[i]
//     }
//      if(sum > product){
//        return 'sum'
//      }
//     if(sum < product){
//       return 'product'
//     } else{
//       return 'same'
//     }
//   }


// 1/9/21

//https://www.codewars.com/kata/5704aea738428f4d30000914/solutions/javascript
//Triple Trouble

function tripleTrouble(one, two, three){ // an array 
    let string = "";
    
    for (let i =0; i < one.length; i++){
      string += one[i]+ two[i]+three[i]
    }
    return string;
}

