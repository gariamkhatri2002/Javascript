let mydate=new Date();
console.log(mydate);       //not organized

// date and time methods     
console.log(mydate.toString());         //Thu Jan 09 2025 11:56:47 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());     //Thu Jan 09 2025
console.log(mydate.toLocaleString());   //9/1/2025, 11:57:52 am

let myCreateDate=new Date(2023,0,18)          //here month start from 0
console.log(myCreateDate.toDateString());     //Wed Jan 18 2023

let myCreateDate1=new Date(2022,11,22,4,8)
console.log(myCreateDate1.toLocaleString());   //22/1/2023, 4:08:00 am

let myCreateDate2=new Date("2024-03-11");
console.log(myCreateDate2.toLocaleString());         //11/3/2024, 5:30:00 am

let myCreateDate3=new Date("01-14-2022");
console.log(myCreateDate3.toLocaleString());        //14/1/2022, 12:00:00 am


let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());