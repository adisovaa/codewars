function highAndLow(numbers){
    var arr =numbers.split(' ');
    var max = arr[0],min =arr[0];
    for(var i = 0;i<arr.length;i++){
      if(parseInt(arr[i]) > max){
        max = arr[i];
      }
      if(parseInt(arr[i]) < min){
        min = arr[i]
      }
    }
    var result = max + ' ' + min;
    return result;
  }