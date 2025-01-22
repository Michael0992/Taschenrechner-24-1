let operation = "";
let last_value = "";
let last_operator = "";
let valuelist = {};

function toOperation(x){
   if(x == ",") x = ".";
   
   if(x == "+" || x == "-" || x == "*" || x == "/"){
    last_value = operation;
    const pattern = /[+\-*/%]/g;
    let cache = operation.replace(pattern, " ");
    valuelist = cache.split(" ");
    last_operator = x
    
   }

   if(x == "%"){
    x == "";
    let cache = operation.substring(operation.length - last_value.length);
    if(valuelist.length == 0) cache = 0;
    cache = valuelist[valuelist.length - 1] / 100 * parseFloat(cache);
    operation = last_value + last_operator + parseFloat(cache);
   }
   else operation += x;

   document.getElementById('display_top').value = operation
}

function last_clear(){
    operation = last_value;
    valuelist.pop();
    last_operator = "";
    document.getElementById('display_top').value = operation;    

}

function clear_all(){
    operation = "";
    last_operator = "";
    valuelist = {};
    document.getElementById('display_top').value = operation;    
    document.getElementById('display_bottom').value = operation;    

}

function inverse_operator(){
    operation = "-(" + operation +")";
    document.getElementById('display_top').value = operation;    

}


function calculate(){
    operation = String(eval(operation))
    document.getElementById('display_bottom').value = operation;
    document.getElementById('display_top').value = operation;
    

}