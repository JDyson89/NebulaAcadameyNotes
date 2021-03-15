let add = document.getElementById('add')
let deleteButton = document.getElementById('delete')
let body = document.querySelector('body')

// function addEventListener (param){
//     param.addEventListener('click', hit)
// }
// addEventListener(add);

let i = 0

function hit (){
   let adding = document.createElement('div');
   adding.setAttribute('id', i)
   adding.innerHTML = 'adding'
   body.appendChild(adding);
   console.log(i)
   i++
}

function deleteWord (){
    let deleet = document.getElementById(i-1)
    console.log(i)
    deleet.parentNode.removeChild(deleet);

    i--
}

deleteButton.addEventListener('click', deleteWord)
add.addEventListener('click', hit)
