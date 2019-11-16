console.log('QUESTION 1')
const sumAll = num=>{
if(num ===1) return 1
return num + sumAll(num-1)
}


console.log(sumAll(5))


    
