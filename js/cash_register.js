const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operator');
const balanceStuff = document.querySelectorAll('.bank');
const result = document.querySelector('.equals');
const decimal = document.querySelector('.deci');
const clear = document.querySelector('.reset');
const display = document.querySelector('#display');
// var displayNumber = parseInt(display.value);

//add event listener to all numbers-----------------
for (let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', thisNum);
}
function thisNum(){
    if (display.innerHTML === '0'){
        display.innerHTML = this.innerHTML;
        // display.value = this.value;
    }else{
        display.innerHTML += this.innerHTML;
        // display.value+=this.value;
    }
}
//decimal-------------------------------------------------
decimal.addEventListener('click', function(){
    if (display.innerHTML.includes('.')){
        throw error;
    }else{
        display.innerHTML = display.innerHTML + '.';
    }
})
//balance stuff----------------------------------------
balanceStuff[0].addEventListener('click', function(){
    display.innerHTML = calculator.recallBalance();
})

balanceStuff[1].addEventListener('click', function(){
    let displayNumber = parseFloat(display.innerHTML);
    calculator.depositBalance(displayNumber);
    display.innerHTML = 0;
})
balanceStuff[2].addEventListener('click', function(){
    let displayNumber = parseFloat(display.innerHTML);
    calculator.withdrawBalance(displayNumber);
    display.innerHTML = 0;
})
//clear button--------------------------------------------
clear.addEventListener('click', function(){
    display.innerHTML = 0;
})
//operators----------------------------------------------
let mathoperator;
operation[3].addEventListener('click', function(){
    mathoperator = '+';
    let displayNumber = parseFloat(display.innerHTML);
    calculator.load(displayNumber);
    display.innerHTML = 0;
});
operation[2].addEventListener('click', function(){
    mathoperator = '-'
    let displayNumber = parseFloat(display.innerHTML);
    calculator.load(displayNumber);
    display.innerHTML = 0;
});
operation[1].addEventListener('click', function(){
    mathoperator = 'x';
    let displayNumber = parseFloat(display.innerHTML);
    calculator.load(displayNumber);
    display.innerHTML = 0;
});
operation[0].addEventListener('click', function(){
    mathoperator = '÷';
    let displayNumber = parseFloat(display.innerHTML);
    calculator.load(displayNumber);
    display.innerHTML = 0;
});

//result------------------------------
result.addEventListener('click', function(){
    let displayNumber = parseFloat(display.innerHTML);
    if (mathoperator === '+'){
        return display.innerHTML = calculator.add(displayNumber);
    }else if (mathoperator === '-'){
        return display.innerHTML = calculator.subtract(displayNumber);
    }else if (mathoperator === 'x'){
        return display.innerHTML = calculator.multiply(displayNumber);
    }else if (mathoperator === '÷'){
        return display.innerHTML = calculator.divide(displayNumber);
    }
})