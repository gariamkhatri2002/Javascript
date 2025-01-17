const a=10;
//give error because we can not change const value
// for(const i=0;i<a;i++){
//     console.log(i);
// }

for(let i=0;i<a;i++){
    console.log(i+1);
}


//sum
const x=10;
const y=50;
let sum=0;
for(let i=x;i<=y;i++){
    sum=i+sum;
    
    
}
console.log(" "+sum);

//FOR IN LOOP
const p={
    name:"Garima",
    age:20,
    email:"garima@regex.com",
    city:"jaipur",
    contact:456987123
}

for(let a in p){
    console.log(a +":"+p[a]);
    
}

//for of loop
for(let b of "garima"){
    console.log(b);
}