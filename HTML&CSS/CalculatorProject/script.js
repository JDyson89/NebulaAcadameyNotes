//this variable grabs all the 'buttons' in this section
//and stores it to a variable 'allButtons'
const allButtons = document.querySelectorAll('.buttons')

//this variable is storing the screen element to 'screen'
const screen = document.querySelector('#screen')

//this stores the 'clear' button to a variable
const clearButton = document.querySelector('#AC')

//this stores the 'operators' button to a variable
const operators = document.querySelectorAll('.operator')

//
const equalSign = document.querySelector('#equal')


//this function loops through my Element array and 
//allows the 'click' event to work
function addEventListenerToButtons(buttonArray){
    //loops through the buttons array to store each
    //button to the EventListener
    for(let i =0; i < buttonArray.length; i++){
        if(buttonArray[i].innerText !== '='){
        //grabbing each element in the array individually
        //to show once 'click' is done
        buttonArray[i].addEventListener('click', inputChange)
        }
    }
}
//this function gets the text of the Element to show
// on the text of the screen
function inputChange(event){
    //this grabs just the text "AC" from the element and
    //stores to a variable
    console.log(event.target)
    let indivText = event.target.innerText
    //then this shows that text of "AC" to
    // the screens 'text' to show the individual 
    //texts, their individual  on screen
    screen.innerText += indivText 
}
//setting my eventListener method to all my buttons
addEventListenerToButtons(allButtons);

//this function will remove text on screen
function removeText(){
    //this is clearing the screen when AC is being clicked
    screen.innerText = '';
}
//telling the event listener to 'remove text' 
//when click is performed
clearButton.addEventListener('click', removeText)

//this function allows you to use the operators
function doCalculations(string){
    //loop through each string and split it by the operators
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'x'){
            let firstOp = string.split('x')
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

function equalElement(){
screen.innerText = doCalculations(screen.innerText)
}
equalSign.addEventListener('click', equalElement)