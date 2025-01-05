const accountId=11032002
let accountEmail="garima@regex.com"
var accountPassword="garima@45632"
accountCity="jaipur"

let accountstate;    //declare variable does not need to defined in javascript    (output:-undefined)

// accountId=45210369        can not reasign the const value
console.log(accountId,accountEmail);  


accountEmail="gaurav@youtube.com"
accountPassword="45698khatri"
accountCity="mumbai"

//print in a table format
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])

/*
prefer not to use var
because of issue in block scope and functional scope
*/
