//**truthy or falsee value */

const useremail = []

if(useremail){
    console.log("got the user email");
    
}else{
    console.log("dont got the user email");
    
}

//***falsy values */

// false , 0 , -0 , BigInt 0n , "",null , undefined , NaN

//**truthy values */

// "0",'false'," ",[],{},function(){}

const username=[]
if(username.length==0){
    console.log("array is empty");
    
}

const emptyojec={}

if(Object.keys(emptyojec).length==0){
    console.log("object is empty");
    
}

// false==0  output->true
//false==''  output->true
//0==''    output->true


//nullish coalescing operetor(??) : null undefined

let val1;
// val1 = 5??10
val1 = null?? 10

console.log(val1);

//terniray operetor

// candition ? true :false

const iceprice = 100

iceprice>=80 ? console.log("true") : console.log("flase");



