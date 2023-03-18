function sumTwoSmallestNumbers(numbers) {  
    let a = Math.min(...numbers)
    numbers.splice(numbers.indexOf(a), 1)
    let b = Math.min(...numbers)
    return a + b
}