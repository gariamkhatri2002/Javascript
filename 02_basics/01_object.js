//OBJECT LITERALS

const mySym=Symbol("key1");


const Jsuser={              //Jsuser is object and inside block it's properties
    name:"garima",          //name is key and garima is value     here key is consider as string
    "full name":"garima khatri", 
    
    [mySym]:"mykey1",    
    age:20,
    location:"jaipur",
    email:"garima@dell.com",
    isLoggedIn:false,
    lastloginDate:["Monday","saturday"]
}

//how to access object properties
// console.log(Jsuser.email);               //garima@dell.com
// console.log(Jsuser["email"]);            //garima@dell.com
// console.log(Jsuser["full name"]);        //garima khatri

// console.log(Jsuser[mySym]);              //mykey1
console.log(typeof(Jsuser[mySym]));

console.log(typeof mySym);





Jsuser.email="sunita@regex.com";
// console.log(Jsuser.email);             //sunita@regex.com        reassign value

// Object.freeze(Jsuser);                //after freeze() method can not change the object properties value

Jsuser.email="komal@regex.com",
// console.log(Jsuser.email);
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("hello js user");
    
}

Jsuser.greeting_user=function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(Jsuser.greeting);       //[Function (anonymous)]
 
Jsuser.greeting();
Jsuser.greeting_user();


 


