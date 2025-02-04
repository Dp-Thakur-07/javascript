// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls , cryptography , network calling

//     setTimeout(function (){
//         console.log("async task is completed");
//          resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("promised completed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("promise task 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//          resolve({username:"chai",email:"exmaple@.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//      let error = true
//      if(!error){
//         resolve({username:"karan",email:"roj@mail"})
//      }else{
//         reject('Wrong : something went wrong')
//      }
     
     
// })

// promiseFour.then((user)=>{
//     console.log(user);
//    return user.username
// }).then((username)=>{
//    console.log(username);
// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=> console.log("the promise is either resolve or reject"))


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("WRONG : something went wrong")
        }
    },1000)
})

async function ConsumepormisFive() {
    try {
        const response = await PromiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

ConsumepormisFive()


fetch('https://api.github.com/users/Dp-Thakur-07')
.then((response)=>{
   return response.json()
})
.then((data)=>{
   console.log(data);
   
}).catch((error)=> console.log(error))
