//function definition
function sum(){
    var a=5
    b=10
    console.log(a+b);
    
}
sum();

//function parameter
function sum(a=0,b=0){
    console.log(`sum of a and b`,a+b);
    console.log(`sub of a and b`,a-b);
    console.log(`mutli of a and b`,a*b);
    console.log(`div of a and b`,a/b);
}
sum(10,20)     //here second sum function override the first one,so both calling sum() function represnt the second function

function greet(name){
    console.log(`Good morning ${name}`);
}
greet("Garima")


//function expression
var sum=function add(a,b){
    console.log(a+b);
    
}
sum(5,3)

//anonymous function
var sum=function(a,b){
    console.log(`add`,a+b);
    
}
sum(7,5);

//return expression
function sum1(a,b){
    return a+b;
    
}
console.log(sum1(8,10)) 

//IIFE  :-it always execute first
var result=(function(a,b){
    return a+b;
    
})(9,10)
console.log(`result ${result}`);



