// let name = "durgaprasad   "

// console.log(name.tureLength);

let myheros = ["thor", "spiderman"]

let heropower = {
    thor:"running",
    spiderman:"skying",

    getSpiderpower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.karan = function(){
    console.log(`karan is present in all object`);
}

Array.prototype.hykaran = function(){
    console.log(`hyy karan`);
}

// heropower.karan()
// myheros.karan()
myheros.hykaran()


//inheritance 
const user={
    name:"karan",
    email:"durgaprasad@gmail.com"
}

const teacher = {
    makevideo:true
}

const teachingsupport ={
    isavailable:false
}

Object.setPrototypeOf(teachingsupport,teacher);


let anotherusername = "chaiorcode  ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the length of string is ${this.trim().length}`);
}

anotherusername.trueLength();
"hitesh".trueLength()



//note 
//windows {this->window}
//node {this->{}}