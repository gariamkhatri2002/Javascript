const user={
    name:"garima",
    email:"khatrigarima78@gmail.com",
    phone:45569332,
    city:"jaipur"
}

// console.log(user)

localStorage.setItem("data",JSON.stringify(user))



let getData=JSON.parse(localStorage.getItem("data"))
console.log(getData);

document.getElementById("local").innerText=`Name:${getData.name}`;
