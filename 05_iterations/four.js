//for in loop for object iteration 

const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobject) {
     console.log(`${key},shortcut is for ${myobject[key]}`);
    
}

//we can find the key using forin loop in array and also values

const arr=[1,2,3,4,5]

for (const key in arr) {
//    console.log(arr[key]);   find the value using arr[key]
   
}
