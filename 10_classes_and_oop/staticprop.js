class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME IS : ${this.username}`);
    }
   static createID(){
        return '123'
    }
}

const myuser =new user("hitesh")
// console.log(myuser.createID());


class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const iphone = new Teacher("iphone","iphone@mail.com");
 
console.log(iphone.createID());
