//object declared by two way litrals and constructor
//jab ham constroctor se banate he to sigleton object banata hai

//singleton
// Object.create

//**oject literals

const mysmb = Symbol("key1");

const jsUsers ={
    name:"durgaprasad",
    "full name":"durgaprasad parmar",
    [mysmb]:"mykey1",
    age:20,
    location:"indore",
    email:"durgaprasad@gmail.com",
    isLoggedIn:false,
    lasttimelogin:["monday","tuesday"]
}
//how to access
//  console.log(jsUsers.email);
//  console.log(jsUsers["email"]);
//  console.log(jsUsers["full name"]);
//  console.log(jsUsers[mysmb]);
 
 //**how to chage the values
 jsUsers.email ="durgaprasad@chatgpt.com";
//  console.log(jsUsers["email"]);
 // ** freez the object so it can not be changed
//  Object.freeze(jsUsers)
 jsUsers.email = "durgaprasad@microsoft.com";
//  console.log(jsUsers);
 
 jsUsers.greeting = function(){
    console.log("hello js users");
    
 }

 jsUsers.greetingTwo = function(){
    console.log(`hello js users ${this.name}`);
    
 }
  console.log(jsUsers.greeting());
  console.log(jsUsers.greetingTwo());
  
  
 
 