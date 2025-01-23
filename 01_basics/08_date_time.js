let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

//declare the date , btw date is a object

// let newdate = new Date(2023,0,6);
let newdate = new Date(2023,0,6,4,5);
let newsdate = new Date("2024-01-3");

// console.log(newdate.toLocaleString());
// console.log(newsdate.toDateString());


//interview question 

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(newdate.getTime());
console.log(Math.floor(Date.now()/1000));


let date = new Date();
console.log(date.getMonth()+1);
console.log(date.getDay());





