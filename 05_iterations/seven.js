//map (callback function)
const mynumber = [1,2,3,4,5,6,7,8,9,10]

const mynums = mynumber.map((nums)=> nums+10 )

// console.log(mynums);


//**chaining */

const newnumber = [1,2,3,4,5,6,7,8,9,10]

const ans = newnumber
                   .map((num)=> num*10)
                   .map((num)=> num+1)
                   .filter((num)=> num>=40)

console.log(ans);

        

