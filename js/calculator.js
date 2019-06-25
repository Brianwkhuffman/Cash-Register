
var calculator = (function(){
    var balance = 0;
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
            return this.balance;
        },
        withdrawBalance: function(x){
            return x -= balance;
        },
        depositBalance: function(x){
            if (typeof x === 'number'){
                return balance += x;
            }else{
                throw error;
            }
        }
    }
    return calculatorModule;
})();
