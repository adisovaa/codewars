// 1
function XO(str) {
    let arr = str.toLowerCase().split('');
    return arr.filter(element => element == 'x').length == arr.filter(element => element == 'o').length;
}


//  2
function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}
 

// 3
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}