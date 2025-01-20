
//primitive datatypes -> the data will be passed by as a copy 

//string , boolean , Number , bigInt , symbol , null , undefined

//non-primitive -> pass by reference 

//array , objects , function 

const id = Symbol('123')
const symbolid = Symbol('123')

console.log(id===symbolid);


//array 

const heros = ["shaktiman","naagraj","doga"];

let myobj ={
    name:"rahul",
    age:22,
    city:"indore"
}

const myfunction = function(){
    console.log("hello world")
}



//find the datatype 

let number = null

console.log(typeof number);


//non-primitive dataype ka dataype hamesha object hota hai and null ka bi datatype object hota hai


//stack(primitive) , heap(non-primitive)

let myyoutubename = "durgaprasad"
let anothername = myyoutubename
anothername = "rajesh"

console.log(myyoutubename);
console.log(anothername);


let useOne ={
    email:"google.com",
    upl:"user@ybl"
}
let userTwo = useOne;
userTwo.email = "durgaprasad.com"

console.log(useOne.email);
console.log(userTwo.email);

