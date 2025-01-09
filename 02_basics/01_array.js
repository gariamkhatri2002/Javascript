const myarr=[1,2,3,4,5];
console.log(myarr);

const myarr1=["komal","garima","badhai"];
console.log(myarr1);

//indexing start from 0        
const myarr2=new Array(11,12,13,14,15);
console.log(myarr2[2]);


//ARRAY METHODS

//PUSH()
myarr.push(6);        //this method add the element in array last
myarr.push(7);
myarr.push(8);
myarr.push(9);
myarr.push(10);
console.log(myarr);


//POP()
myarr.pop()          //delete top most element in array
console.log(myarr);

//unshift()
myarr.unshift(45);       //adds new elements to the beginning of an array  (here:45 is element)
myarr.shift();           //shift() method removes the first item of an array
myarr.shift();
console.log(myarr);


console.log(myarr.includes(8));       //true(check element persent in array or not)
console.log(myarr.indexOf(5));        //give element index:3


//JOIN()
//The join() method returns an array as a string
//does not change the original array
const newarr=myarr.join();
console.log(myarr);                 //[2, 3, 4, 5,6, 7, 8, 9  ]
console.log(newarr);               //2,3,4,5,6,7,8,9

console.log(typeof myarr);              //type:object
console.log(typeof newarr);             //type:string


//Slice and splice
const newarr1=myarr.slice(1,3);        //returns selected elements in an array, as a new array and not give last index value [ 3, 4 ]
console.log(newarr1);  
console.log(myarr);            //does not change in original array


const newarrsplice=myarr.splice(1,3);      //Used to add, remove, or replace elements in an array
console.log(newarrsplice);             //[ 3, 4, 5 ]
console.log(myarr);                    //[ 2, 6, 7, 8, 9 ]


const newarr2=myarr.splice(1,3,50,60,70,80);
console.log(newarr2);                         //[ 6, 7, 8 ]
console.log(myarr);                           //[ 2, 50, 60, 70, 80, 9 ]
