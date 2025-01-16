//Numeric comparisons (<, >, <=, >=) 
console.log(2>1);      //true
console.log(2<1);      //false
console.log(2>=1);     //true
console.log(2==1);     //false
console.log(2!=1);     //true

//COMPARE DIFFERENT DATA TYPES
console.log("22">1);       //true(When comparing a string and a number, JavaScript attempts to convert the string to a number.)
console.log("a12"<45);     //false("a12" is converted to NaN)


console.log(null>0);        //false
console.log(null==0);       //false
console.log(null>=0);       //true


console.log(undefined==0);   //false
console.log(undefined>0);    //false
console.log(undefined<0);    //false

// //Loose equality (==)
console.log(null==undefined);   //true(== automatically changes the values being compared to a common type before checking if they are equal.)

//!=
console.log(8!=8);           //false

//Strict equality (===) 

console.log("2"===2);          //false(the === operator in JavaScript does not change the values being compared)

//!==  not equal value or not equal type

console.log(null!==undefined);        //true

console.log("8"!==8);                 //true


//LOGICAL OPERATOR
let a=5
let b=8
console.log(a<b && a==5);        //check both condition are true
console.log(a>b || a==5);        //check any one condition true
console.log(!false);            //true
console.log(!true);             //false
