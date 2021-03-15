let arrayNums= [12, 14, 16, 18]

// divide the element/current value with the index

function divideNums (number){
    return number.map(x => x / 2)
}
console.log(divideNums(arrayNums));