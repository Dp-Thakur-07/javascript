//how to declare array 

const arr = [1,2,3,4,5]
// const myheros = ["shaktiman","naagraj","spiderman"]

// const newarray = new Array(1,2,3,4,5)

console.log(arr[0]);
// console.log(myheros[2]);
// console.log(newarray[4]);

//array methods 

// arr.push(6);
// arr.pop()     -> remove the last element

// arr.unshift(7);  ->add the element in first place
// arr.shift()     ->remove the element from the first place

// console.log(arr.includes(6)); ->check the value is present or not and return the true and false

// console.log(arr.indexOf(3)); ->give the index

// const newarray = arr.join() ->change the value in string formate => 1,2,3,4,5
// console.log(newarray);

// console.log(arr);


//slice , splice 

console.log("A",arr);

const arr1 = arr.slice(1,3);
console.log(arr1);

console.log("B",arr);

const arr2 = arr.splice(1,3);
console.log(arr2);
console.log("C",arr);





