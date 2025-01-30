//foreach loop

const language = ["ruby","js","cpp","javascript"]

// language.forEach(function (item){
//     console.log(item);
    
// })

// language.forEach((item)=>{
// console.log(item);

// })

// function printme(item){
//     console.log(item);
    
// }
// language.forEach(printme)

// language.forEach((item ,index, arr)=>{
//  console.log(item,index,arr);
 
// })

const myCoding =[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"java",
        languagefile:"java"
    },
    {
        languagename:"python",
        languagefile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename);
    
})