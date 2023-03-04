function validBraces(braces){
    var stack = [];
    return braces.split('').map(b=> {
      if ('({['.indexOf(b)>=0) {
        stack.push(b);
        return true;
      } else {
        var e = stack.pop();
        return '({['.indexOf(e) == ')}]'.indexOf(b);
      }
    }).every(b=>b) && stack.length == 0;
  }