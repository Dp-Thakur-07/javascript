const marval_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marval_heros.push(dc_heros);
// console.log(marval_heros);
// console.log(marval_heros[3][2]);


//using spread operator

let all_new_heros = [...marval_heros ,...dc_heros];
// console.log(all_new_heros);

const new_another_arr = [1,2,3,[4,5],6,[7,[8,9]]];

// const ans_array = new_another_arr.flat(Infinity)
// flat is used to remove the all depth so we can access easily
// console.log(ans_array);


//CHECK ARRAY OR NOT 
// console.log(Array.isArray("rohit"))  => return false

// console.log(Array.from("rohit")) =>convert in array

// console.log(Array.from({name:"rohit"})); =>return []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


