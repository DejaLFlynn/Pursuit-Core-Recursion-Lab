console.log('QUESTION 1')
const sumAll = num=>{
if(num ===1) return 1
return num + sumAll(num-1)
}


console.log(sumAll(5))

console.log('QUESTION 2')
const multArr = (arr, i = 0, prod = 1) => {
    if(i >= arr.length) return prod
    prod *= arr[i] 
    i++
    return multArr(arr, i, prod)
}
console.log(multArr([1,2,3,4]))

console.log('QUESTION 3')
const concatArr = (arr, i = 0, str = " ") =>{
    if(i>=arr.length) return str
    str += arr[i] + " "
    i++
    return concatArr(arr,i, str)
}

console.log(concatArr(['is', 'it', 'tomorrow']))
