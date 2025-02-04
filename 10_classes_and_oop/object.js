function multiplby5(num){
    return num*5
}
multiplby5.power = 2
console.log(multiplby5(2));
console.log(multiplby5.power);
console.log(multiplby5.prototype);



//
function createUser(username,score){
    this.username = username,
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

let chai =new createUser("chai",25);
let tea =new createUser("tea",125);

chai.increament()
chai.printMe()