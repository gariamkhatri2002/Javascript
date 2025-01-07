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

//Loose equality (==)
console.log(null==undefined);   //true(== automatically changes the values being compared to a common type before checking if they are equal.)


//Strict equality (===) 

console.log("2"===2);          //false(the === operator in JavaScript does not change the values being compared)
