function findOdd(arr) {
    for(let i = 0; i < arr.length; i++){
      const count = arr.filter(value => value === arr[i]).length;
      if(count % 2 == 1){
        return arr[i];
      }
    }
    return -1;
}

function findOdd(A) {
  let count = {};
  A.forEach(v => {
    count[v] = count[v] ? count[v] + 1 : 1;
  });
  return +Object.keys(count).find(key => count[key] % 2 === 1);
}