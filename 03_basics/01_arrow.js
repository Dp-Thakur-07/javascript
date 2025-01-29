//**arrow function and this keyword */

const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to the website`);
        
    }
}
// user.welcomemessage()
// user.username="rahul"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username="rohit"
//     console.log(this.username);
    
// }

// const chai =function(){
//     let username="rohit"
//     console.log(this.username);
// }

const chai = ()=>{
    let username="rohit"
    console.log(this);
}

//  chai()

//**basic arrow function */

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }

//**implicit return */
const addtwo =(num1,num2)=> (num1+num2)
console.log(addtwo(4,6));
