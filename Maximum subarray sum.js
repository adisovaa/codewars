var maxSequence = function(arr){
    var rec = 0, sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum = 0;
      for (var j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum > rec) {
          rec = sum;      
        }
      }
    }
    
    return rec;
  }
  
  
  
  var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }
  
  var maxSequence = function(arr){
      var currentSum = 0;
      return arr.reduce(function(maxSum, number){
          currentSum = Math.max(currentSum+number, 0);
          return Math.max(currentSum, maxSum);
      }, 0);
  }