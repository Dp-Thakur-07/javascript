//for of 

let arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting="hello world!"

for (const greet of greeting) {
    // console.log(greet);
    
}

//Maps

const map = new Map()
map.set("IN","India")
map.set("USA","United state of america")
map.set("FR","France")
map.set("IN","India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key ,'-:',value);
    
}


//ojects iteratable nhi hote he by using forof loop

const myobject={
    game1:"nfs",
    game2:"spiderman"
}

for (const [key,value] of myobject) {
    console.log(key,'-:',value);
    
}