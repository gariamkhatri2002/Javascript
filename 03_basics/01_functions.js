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
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("garima"));
console.log(loginUserMessage("garima"));


