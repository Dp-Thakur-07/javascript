// const score = 200

// if(score>100){
//     let power="fly"
//     console.log(`the power is ${power}`);
// }
// console.log(`the power is ${power}`);

// const balance = 500
// if(balance<1000) console.log("test"),console.log("test2");

const userLoggedIn=true
const Userdebitcard=true
const userlogginfromgoogle=false
const userlogginfromfacebook=true

if(userLoggedIn && Userdebitcard){
    console.log("allow to buy course");
}

if(userlogginfromfacebook || userlogginfromgoogle){
    console.log("allow as to access information");
    
}