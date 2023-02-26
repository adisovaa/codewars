
function findMissingNumber(sequence){
    if(sequence=="") return 0
    sequence=sequence.split(" ").map(Number)
      for(var i=1;i<=sequence.length;i++){
      if(i!==sequence[i-1]) return i
      }
    return 0
  }