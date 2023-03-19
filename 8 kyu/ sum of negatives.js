function countPositivesSumNegatives(input) {
    let p = 0;
    let n = 0;
    
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? p++ : n += num);
    }
    return [p , n]}