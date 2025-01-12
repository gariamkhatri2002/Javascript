//empty object
// const tinderuser=new Object();     //singleton object

const tinderuser={};                //normal object

tinderuser.id="1234abc"
tinderuser.name="ansh"
tinderuser.tologgedIn=false

// console.log(tinderuser);          //{}

//CREATE NESTED OBJECT

const regularuser={
    fullname:{
        userfirstname:{
            firstname:"garima",
            lastname:"khatri"
        }

    }
}

// console.log(regularuser.fullname.userfirstname.firstname);     //garima

const obj1={1:"a",2:"b",3:"c"};
const obj2={3:"c",4:"d"};
// const obj3={5:"e",6:"f"};

// Merging objects
// const obj3={obj1,obj2};          //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }  not a good way to merge 
// If multiple source objects have properties with the same key, the property from the last source overwrites the earlier ones.

// const obj3=Object.assign(obj1,obj2)          //first argument is target and others are source  
// console.log(obj3===obj1);               //true


const obj3=Object.assign({},obj1,obj2);
console.log(obj1);
console.log(obj3);                   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj3===obj1);           //false

//merge through spread operator
const obj4={...obj1,...obj2};
// console.log(obj1);                no change in obj1

console.log(obj4);











