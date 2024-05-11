'use strict'
console.log('sono collegato');
//MILESTONE 1
//Aggiungere event listener a tutti i numeri (0-9)
const operando = document.getElementById('result');

const numbers = document.querySelectorAll('.bottone');

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        selectNumber(numbers[i].innerText);
    })
}
//quando si clicca su un numero, concatenarlo al numero visualizzato in alto
function selectNumber(selectedNumber){
    if(operando.innerText=="0") operando.innerText = selectedNumber;
    else operando.innerText += selectedNumber;
}
