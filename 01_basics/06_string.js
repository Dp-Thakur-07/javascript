const name = "durgaprasad"
const repocount = 50

console.log(`my name is ${name} and my repo count is ${repocount}`);


//declare string 

const gamename = new String('hitesh')

console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));


const newstring = gamename.substring(0,4);
console.log(newstring);


const anotherstring = gamename.slice(0,-5);
console.log(anotherstring);

const newstringOne = "  vijay   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://hitesh.com//hitesh%20/user.com"

console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
