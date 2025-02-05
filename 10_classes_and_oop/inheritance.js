class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User{
     constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
     }

     addCourse(){
        console.log(`A new course added by ${this.username}`);
     }
}

const chai = new Teacher("chai","chai@gmail.com","123");
chai.addCourse()
 
chai.logme()
const masalachai = new User("masalachai")
masalachai.logme()

console.log(chai instanceof User);
