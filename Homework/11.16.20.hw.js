// Problem #1 Square(n) Sum
function squareSum(numbers){
    let sum = 0
      for (let i = 0; i < numbers.length; i++){
        sum+= Math.pow(numbers[i], 2)  
      }
      return sum
  
  }


// Problem #2 L1: Set Alarm
function setAlarm(employed, vacation){
    if (employed === true && vacation === false){
      return true
    } else{
      return false
    }
  }

//   Problem #3 Array plus array
function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let total = 0
    
    for (let i = 0; i<= arr3.length - 1; i++){
      total += arr3[i]
    }
    return total
  }

// Problem #4 Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

// Problem #5 Filling in array(part 1)
const arr = N => {
    let array = []
  
    for (let i = 0; i < N; i++){
      array.push(i)
    }
    return array
  }

//   Problem #6 N-th Power

function index(array, n){
    if(array[n] === undefined){
     return -1
   }
  return Math.pow(array[n], n)
 }

// Problem #7 Beginner Series #2 Clock

function past(h, m, s){
    let sec = s*1000
    let minutes = m*60000
    let hour = h*3600000
    
    return hour + minutes + sec
  }