function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("M");
    console.log("A");
}

// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }

// addTwoNumbers(3,5);

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}

const result=addTwoNumbers(3,5)

console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        //console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("garima"));
// console.log(loginUserMessage("garima"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(11,12,45,38));

const user={
    username:"garima",
    priceS:199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([10,20,30,40]));





