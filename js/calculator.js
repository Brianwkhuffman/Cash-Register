
var calculator = (function(){
    var balance = 100;
    var memory = 0;
    var total = 0;
    var calculatorModule = {
        load: function(x){
            if (typeof x === 'number'){
                return total = x;
            }else{
                throw error;
            }
        },
        getTotal: function(){
            return total + memory;
            //return console.log('this is a test')
        },
        add: function(x){
            if (typeof x === 'number'){
                return total += x;
            }else{
                throw error;
            }
        },
        subtract: function(x){
            if (typeof x === 'number'){
                return total -= x;
            }else{
                throw error;
            }
        },
        multiply: function(x){
            if (typeof x === 'number'){
                return total *= x;
            }else{
                throw error;
            }
        },
        divide: function(x){
            if (typeof x === 'number'){
                return total /= x;
            }else{
                throw error;
            }
        },
        recallMemory: function(){
            return memory;
        },
        saveMemory: function(){
            memory = total;
        },
        clearMemory: function(){
            memory = 0;
        },
        recallBalance: function(){
            return balance;
        },
        withdrawBalance: function(x){
            balance = balance - x;
            return balance;
        },
        depositBalance: function(x){
            balance = display.innerHTML;
            return balance;
        }
    }
    return calculatorModule;
})();
