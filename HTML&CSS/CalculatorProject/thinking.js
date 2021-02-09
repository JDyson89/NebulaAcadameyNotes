function doCalculations(string){
       
    for(let i = 0; i < string.length; i++){
        if(string[i] === '*'){
            let firstOp = string.split('*')
            console.log(firstOp)
            return parseInt(firstOp[0]) * parseInt(firstOp[1])  
        } 
        if(string[i] === '+'){
            let secOp = string.split('+')
            return parseInt(secOp[0]) + parseInt(secOp[1])  
        } 
        if(string[i] === '-'){
            let thirdOp = string.split('-')
            return parseInt(thirdOp[0]) - parseInt(thirdOp[1])  
        } 
        if(string[i] === '/'){
            let fourthOp = string.split('/')
            return parseInt(fourthOp[0]) / parseInt(fourthOp[1])  
        }
    }
}
    console.log(doCalculations('10*5'))//[ '5', '*', '5' ]
    console.log(doCalculations('10+5'))//[ '1', '0', '+', '5' ]
    console.log(doCalculations('30/15'))
    console.log(doCalculations('50-25'))
