let value=3;
let negvalue=-value          //VALUE NEGATIVE
console.log(negvalue);

console.log(4+2);       //ADD
console.log(4-2);       //SUBSTRACT
console.log(4*2);       //MULTIPLTY
console.log(4**2);      //POWER
console.log(4/2);       //DIV
console.log(4%2);       //MOD

//ADD STRING
let string1="Garima"
let string2=" khatri"

let string3=string1+string2;
console.log(string3);          //Garima Khatri

console.log("1"+2);         //12
console.log(1+"2");         //12
console.log("1"+2+2);       //122
console.log(1+2+"2");       //32

console.log(1+true);                    //2
console.log("1"+true+null);             //1truenull
console.log(1+undefined+"2"+true);      //NaN2true        (here 1 + undefined results in NaN (because arithmetic with undefined yields NaN))
console.log("1"+undefined+"2"+true);    //1undefined2true (here "1" + undefined results in "1undefined" (as undefined is converted to a string).
console.log(1+null+"2")                 //12        null is object      (Therefore, 1 + null evaluates to 1 + 0, which equals 1)


console.log(+true);        //true is converted to a number, it becomes 1 
console.log(+"");          //The empty string is treated as 0 when converted to a number.

//INCREMENT AND DECREMENT
let gamecounter=11;
//postfix
console.log(gamecounter++);     //Prints 11, then increments gamecounter to 12      output:11
//prefix
console.log(++gamecounter);     //first Increment in gamecounter, then prints       output:13
















          

















