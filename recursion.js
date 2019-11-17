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

console.log('QUESTION 4')
const sumEvens = (arr, i = 0, sum = 0) => {
    if(i >= arr.length) return sum
    if(arr[i] % 2 === 0){
        sum += arr[i]
    }
    i++ 
    return sumEvens(arr, i, sum)
}
console.log(sumEvens([2, 3, 5, 6]))
console.log('QUESTION 5')
const range = (num1, num2)=>{
    let answer = []
    if(num1 === num2){
        return answer
    }
    answer.push(num1)
    return answer.concat(range(num1+1, num2))
}
console.log(range(2,10))
