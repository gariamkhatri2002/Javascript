//normal function
function normal(a,b){
    let c=a+b;
    console.log(`add`,c);
}
normal(10,20)

//anonymous function
let sub=function(a,b){
    let c=a-b;
    console.log(`sub`,c);
    
}
sub(20,10);

//Immediately Invoked Function Expressions (IIFE)
(function(a,b){
    let c=a*b
    console.log('multi',c);
})(10,2);

//arrow function
let print=(msg)=>{
    return msg
}
console.log(print("arrow function"));

//recursive function
function recursion(num){
    if(num==100){
        console.log(num);
        return
    }
    console.log(num);
    recursion(num+1);
    
}
recursion(50);
