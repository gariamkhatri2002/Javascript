const arr=[10,20,30,40,50];
arr.map((value)=>{
    console.log(value);
})


const q=[
    {
       name:"garima",
       age:12,
       email:"garima@regex.com"
    },
    {
        name:"komal",
       age:20,
       email:"komal@regex.com"
    },
    {
       name:"badhai",
       age:21,
       email:"badhai@regex.com"
    }   
]

let r=q.map((value,index,array)=>{
    // console.log(value);
    for(let a in value){
        console.log("index",index,value[a]);
        
    }
   
    // console.log(array);
})