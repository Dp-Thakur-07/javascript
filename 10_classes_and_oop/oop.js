//object litrals

let user = {
    username:"rohit",
    password:4,
    singIN : true,
    
    getuserdetails: function(){
        console.log(`username: ${this.username}`);
        // console.log(this);
        //this refers to the current context .
        
        
    }

}

// console.log(this); => {}

// console.log(user);
// console.log(user.getuserdetails());

//constructor 
// const promiseOne = new Promise()
// const date = new Date()  //new referes to the constructor


function Userone(username,logincount,isloogin){
    this.username = username
    this.logincount=logincount
    this.isloogin=isloogin

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne =new Userone("hitesh",11,true)
const userTwo =new Userone("rohit",12,false)

console.log(userOne);
console.log(userTwo);

//steps of when we write new keyword

// step1-> naya object create hota

// step2->constructor function call hota hai new keyword ke karan

// step3-> this keyword sare argument ko enject kar leta hai function se 

// step4-> function ke ander value mil jati hai 
