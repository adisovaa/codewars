function filter_list(l) {
    var a = []
    for(var i = 0; i < l.length; i++){
    if(Number.isInteger(l[i])){
    a.push(l[i])
      } 
    }
    return a
}