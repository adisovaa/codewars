function squareDigits(num){
    let string = num.toString();  // turn number to a string
    let results = [];             // create an array to save the new values of the string
    for (let i = 0; i < string.length; i++){  // iterate through the string
        results[i] = string[i] * string[i];   // save the square of the number to the array 
    }
    return Number(results.join(''));    // turn the array into a string and then into a number
  }
  
  // Solution 2 
  function squareDigits(num){
    let array = num.toString().split('').map( function(int) {   // turn number to string then make string to array then use map to return the square of each number
      let i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join("")); // turn the array into a string and then a number
  }
  
  
  // Solution 3 
  function squareDigits(num){
    let result = num
      .toString()                     // turn number to string
      .split("")                      // turn string into array
      .map( num => parseInt(num) )    // map each index and return a number, now you have a number array
      .map( num => num * num )        // map the number array and return the square of each number
      .join("")                       // turn the number array into a string
     
    return parseInt(result)           // turn the string into a number
  }
  
  
  // Solution 4 
  const squareDigits = num => parseInt(num.toString().split("").map(num => parseInt(num)).map(num => num * num).join(""))
  
  
  // Solution 5
  function squareDigits (num) {
    let x = num.toString().split('').map(Number); 
    x.forEach((element, i) => x[i] = element * element);
    return Number(x.join(''));
  }