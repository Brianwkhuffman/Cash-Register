const first = document.querySelectorAll('.firstRow');
const second = document.querySelectorAll('.secRow');
const third = document.querySelectorAll('.thirdRow');
const fourth = document.querySelectorAll('.fourthRow');
const equalSign = document.querySelectorAll('.lastRow');
const display = document.querySelector('#display');

//numeric buttons--------------------------------------------
first[0].addEventListener('click', seven);
function seven(){
    if (display.innerHTML === '0'){
        display.innerHTML = 7;
    }else{
        display.innerHTML += 7;
    }
}
first[1].addEventListener('click', eight);
function eight(){
    if (display.innerHTML === '0'){
        display.innerHTML = 8;
    }else{
        display.innerHTML += 8;
    }
}
first[2].addEventListener('click', nine);
function nine(){
    if (display.innerHTML === '0'){
        display.innerHTML = 9;
    }else{
        display.innerHTML += 9;
    }
}
second[0].addEventListener('click', four);
function four(){
    if (display.innerHTML === '0'){
        display.innerHTML = 4;
    }else{
        display.innerHTML += 4;
    }
}
second[1].addEventListener('click', five);
function five(){
    if (display.innerHTML === '0'){
        display.innerHTML = 5;
    }else{
        display.innerHTML += 5;
    }
}
second[2].addEventListener('click', six);
function six(){
    if (display.innerHTML === '0'){
        display.innerHTML = 6;
    }else{
        display.innerHTML += 6;
    }
}
third[0].addEventListener('click', one);
function one(){
    if (display.innerHTML === '0'){
        display.innerHTML = 1;
    }else{
        display.innerHTML += 1;
    }
}
third[1].addEventListener('click', two);
function two(){
    if (display.innerHTML === '0'){
        display.innerHTML = 2;
    }else{
        display.innerHTML += 2;
    }
}
third[2].addEventListener('click', three);
function three(){
    if (display.innerHTML === '0'){
        display.innerHTML = 3;
    }else{
        display.innerHTML += 3;
    }
}
fourth[0].addEventListener('click', zero);
function zero(){
    if (display.innerHTML === '0'){
        display.innerHTML = 0;
    }else{
        display.innerHTML += 0;
    }
}
fourth[1].addEventListener('click', zerozero);
function zerozero(){
    if (display.innerHTML === '0'){
        display.innerHTML = 0;
    }else{
        display.innerHTML += 00;
    }
}
//display convert number----------------------------------
let displayConvert = parseInt(display.innerHTML);
//clear-----------------------------------------------
first[4].addEventListener('click', reset);
function reset(){
    display.innerHTML = 0;
}
//balance stuff------------------------------------------
second[4].addEventListener('click', getBalance);
function getBalance(){
    display.innerHTML = calculator.recallBalance();
}

third[4].addEventListener('click', depositMonies);
function depositMonies(){
    calculator.depositBalance(displayConvert);
    display.innerHTML = 0;
}

fourth[4].addEventListener('click', withdrawMonies);
function withdrawMonies(){
    calculator.withdrawBalance(displayConvert);
    display.innerHTML = 0;
}
//decimal---------------------------------------------
fourth[2].addEventListener('click', dot);
function dot(){
        if (display.innerHTML.includes('.')){
        throw error;
    }else{
        display.innerHTML = display.innerHTML + '.';
    }
}

//operators--------------------------------------------
let operation;
fourth[3].addEventListener('click', adding);
function adding(displayNumber){
    let operation = '+';
    display.innerHTML = 0;
}
third[3].addEventListener('click', minus);
function minus(){
    let operation = '-'
    display.innerHTML = 0;
}
second[3].addEventListener('click', times);
function times(){
    let operation = 'x';
    display.innerHTML = 0;
}
first[3].addEventListener('click', divide);
function divide(){
    let operation = '÷'
    display.innerHTML = 0;
}
//equals----------------------------------------------------
equalSign[0].addEventListener('click', results);
function results(){
    if (operation === '+'){
        //code
    }else if (operation === '-'){
        //code
    }else if (operation === 'x'){
        //code
    }else if (operation === '÷'){
        //code
    }
}
//display.innerHTML = calculator.subtract(displayConvert);
//display.innerHTML = displayConvert