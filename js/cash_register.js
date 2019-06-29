const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operator');
const balanceStuff = document.querySelectorAll('.bank');
const result = document.querySelector('.equals');
const decimal = document.querySelector('.deci');
const clear = document.querySelector('.reset');
const display = document.querySelector('#display');

//currency formatter------------------------------
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
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
    display.innerHTML = formatter.format(calculator.recallBalance());
})
//deposit
balanceStuff[1].addEventListener('click', function(){
    let displayNumber = parseFloat(display.innerHTML);
    calculator.depositBalance(displayNumber);
    display.innerHTML = 0;
})
//withdraw
balanceStuff[2].addEventListener('click', function(){
    let displayNumber = parseFloat(display.innerHTML);
    if (calculator.withdrawBalance(displayNumber) < 0){
        calculator.depositBalance(displayNumber);
        return display.innerHTML = 'Lacking Zenny';
    }else{
        display.innerHTML = 0;
    }
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
        return display.innerHTML = calculator.add(displayNumber).toFixed(2);
    }else if (mathoperator === '-'){
        return display.innerHTML = calculator.subtract(displayNumber).toFixed(2);
    }else if (mathoperator === 'x'){
        return display.innerHTML = calculator.multiply(displayNumber).toFixed(2);
    }else if (mathoperator === '÷'){
        return display.innerHTML = calculator.divide(displayNumber).toFixed(2);
    }
})
//-------------------------------------------
const modelBox = document.createElement('div')
modelBox.id = 'boxx';
document.body.appendChild(modelBox);

const realGrade = document.createElement('div');
realGrade.className = 'models';
realGrade.id = 'rg';
realGrade.innerHTML = 'Real Grade Models:';
modelBox.appendChild(realGrade);

const masterGrade = document.createElement('div');
masterGrade.className = 'models';
masterGrade.id = 'mg';
masterGrade.innerHTML = 'Master Grade Models:';
modelBox.appendChild(masterGrade);

const perfectGrade = document.createElement('div');
perfectGrade.className = 'models';
perfectGrade.id = 'pg';
perfectGrade.innerHTML = 'Perfection Onry:';
modelBox.appendChild(perfectGrade);

const tools = document.createElement('div');
tools.className = 'models';
tools.id = 'tools';
tools.innerHTML = 'Misc & Tools:';
modelBox.appendChild(tools);


//model box-----------------------------------------
const rgs = document.createElement('div');
rgs.className = 'rgmodels';
realGrade.appendChild(rgs);
rgs.style.display = 'none';
realGrade.addEventListener('click', function(){
    if (rgs.style.display === 'none'){
        rgs.style.display = 'block';
    }else{
        rgs.style.display = 'none';
    }
})

const mgs = document.createElement('div');
mgs.className = 'mgmodels';
masterGrade.appendChild(mgs);
mgs.style.display = 'none';
masterGrade.addEventListener('click', function(){
    if (mgs.style.display === 'none'){
        mgs.style.display = 'block';
    }else{
        mgs.style.display = 'none';
    }
})

const pgs = document.createElement('div');
pgs.className = 'pgmodels';
perfectGrade.appendChild(pgs);
pgs.style.display = 'none';
perfectGrade.addEventListener('click', function(){
    if (pgs.style.display === 'none'){
        pgs.style.display = 'block';
    }else{
        pgs.style.display = 'none';
    }
})

const misc = document.createElement('div');
misc.className = 'misc';
tools.appendChild(misc);
misc.style.display = 'none';
tools.addEventListener('click', function(){
    if (misc.style.display === 'none'){
        misc.style.display = 'block';
    }else{
        misc.style.display = 'none';
    }
})
//function to make and append models to category
function makeModels(modelUrl, appendTo){
    for (let i=0;i<modelUrl.length;i++){
        let models = document.createElement('img');
        models.id = 'modelPic';
        models.src = modelUrl[i];
        models.style.height = '170px';
        appendTo.appendChild(models);
    }
}
//-----------------------------------------------
var rgArray = ['https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/r/g/rg-crossbone-gundam-x1-gp.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/r/g/rg-rx-0-unicorn-gundam-bande-dessinee-ver-gp.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/r/g/rg-oz-00ms-tallgeese-ew-ver-gp.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/r/g/rg-msm-07s-z-gok-char-custom-00.jpg'];
makeModels(rgArray, rgs);
//--------------------------------------------------
var mgArray = ['https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/m/g/mg-ms-06r-zaku-ii-high-mobility-type-psycho-zaku-gundam-thunderbolt-ver-ka-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/m/g/mg-msz-010-zz-gundam-ver-ka-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/m/g/mg-gnt-0000-00-qan-t-quanta-gp.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/m/g/mg-rx-78-2-gundam-ver-2-0-titanium-finish-00.jpg']
makeModels(mgArray, mgs);
//----------------------------------------
var pgArray = ['https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/p/g/pg-mbf-p02kai-gundam-astray-red-frame-kai-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/p/g/pg-mbf-02-strike-rouge-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/p/g/pg-zgmf-x20a-strike-freedom-gundam-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/p/g/pg-gn-001-gundam-exia-lightning-edition-00_1.jpg'];
makeModels(pgArray, pgs);
//-----------------------------------------------
var miscArray = ['https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/g/m/gms125-gundam-marker-metallic-set-2.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/w/e/weathering-master-d-set-burnt-blue-red-oil-stain-00.jpg', 'https://www.gundamplanet.com/pub/media/catalog/product/cache/aa72b28f82ebf2d897600ee194018ec6/g/o/god-hand-ultimate-nipper-5-0-side-cutter-00.jpg'];
makeModels(miscArray, misc);