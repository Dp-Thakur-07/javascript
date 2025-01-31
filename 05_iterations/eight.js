//reduce used to add the all the vlaue like shoping card prices etc

const myarr=[1,2,3]

const ans = myarr.reduce((acc,currval)=>{
    console.log(`acc:${acc},and currval:${currval}`);
    
   return acc+currval
},0)

console.log(ans);
