const name="garima"

const age=22
console.log(name+age);      //here +:concantenation(merge string)

console.log(`my name is ${name} and my age is ${age} `);      //(``:backticks)this way also concat the strings in modern javascript



let gameName=new String("komal");       //here gameName is object because declare through new keyword
console.log(gameName[0]);               //k
console.log(gameName.__proto__);


let secondgame=new String("khatri");

//STRING PREDEFINED METHODS

//concat method(It does not modify the original strings but returns a new concatenated string.)
gameName.concat(secondgame);
console.log(gameName);                                   //[String: 'komal']
gameName=gameName.concat(secondgame);           //here reasign the value of gameName not changes in original string


console.log(gameName);                        //komalkhatri
console.log(typeof gameName);                 //string

const prestringMethod=new String("hello world")
console.log(prestringMethod.length);           //11
console.log(prestringMethod.toUpperCase());    //KOMALKHATRI
console.log(prestringMethod.toLowerCase());    //komalkhatri
console.log(prestringMethod.charAt(4));        //o
console.log(prestringMethod.indexOf(' '));     //5

const newString=prestringMethod;
console.log(newString.substring(0,7));    //can not give negative indexing in substring method and last index value not retrieve

// The slice() method is used to extract a portion of a string and return it as a new string.
console.log(newString.slice(0,-2));      //hello wor
console.log(newString.slice(-4));        //orld(start from right -1)


const newStringOne="     Gamecount    ";
console.log(newStringOne);           //(space)Gamecount
console.log(newStringOne.trim());    //Gamecount(after trim space)


const url="https://garimakhatri.com/garima%78khatri"

console.log(url.replace('%78','-'))      //https://garimakhatri.com/garima-khatri
console.log(url);                        //https://garimakhatri.com/garima%78khatri

console.log(url.includes('komal'));     //false(because komal is not persenting in url string)


console.log(url.split('/'));           //the string is split at every slash
console.log(url.split('/',3));         //here 3 means that The string is split into at most 3 parts.   
