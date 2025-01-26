//singlton ojbect
const tinderUsers = new Object()
tinderUsers.id="123abc"
tinderUsers.name="sammy"
tinderUsers.age=23
// console.log(tinderUsers);

const regularUser = {
    email:"durgaprasad@gail.com",
    fullname:{
        userfullname:{
            firstname:"durgaprasad",
            lastname:"parmar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//* combine the objects

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",3:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
   const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


// console.log(tinderUsers);
// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));

//* to check the key exist or not
// console.log(tinderUsers.hasOwnProperty('name'));

//**object destructuring */

const course = {
    courseName:"js in hindi",
    price:"666",
    courseInstructure:"hitesh"
}
//*** ham courseintructure ka name bi change kar sakte he destructuring se aage kahi bi use kar sakte hai */
const{courseInstructure:instructure}=course
console.log(instructure);



