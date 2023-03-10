function solution(str, ending){
    return console.log(str.endsWith(ending))
  }

  solution('abc', 'bc') 
  solution('abc', 'd')
  solution('abc', 'c')