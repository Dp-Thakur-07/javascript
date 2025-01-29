/**immediately invoked function expression */

//global scope ke polution se problem hoti he to global scoope ke variable ,declaration ke polution ko hatane ke liye iife ka use karte hai

(function chai(){
    //named iife
    console.log('DATABASE CONNECTED'); 
})();

//**also declare using arrow function */
((name)=>{
    console.log(`DATABASE CONNECTED TWO ${name}`);
    
})("rohit")