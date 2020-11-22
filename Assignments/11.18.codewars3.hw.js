// Problem 1 Area or Perimeter

const areaOrPerimeter = function(l , w) {
   
    if (l === w){
      return l * w // Return your answer
    }else 
      return l + l + w + w
  };

// Problem 2 Range of Intergers

function generateRange(min, max, step){
let arr = []
    for (let i = min; i <= max; i += step){
      arr.push(i)
    }  return arr
  }

// Problem 3 Hello Name or World!

function hello(name){
    if (name === '' || name === undefined){
      return 'Hello, World!'
    } else {
      name = name.toLowerCase()
    return 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1) + '!'
    }  
  }


// Problem 4 Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
        return true
      } else {
        return false
      }
  }

// Problem 5 Sum of positive
function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
  }