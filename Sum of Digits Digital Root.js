function digitalRoot(n) {
    if (n < 10) {
      return n;
    }
  
    while (n > 9) {
      var digits = String(n).split("").map(Number);
      n = digits.reduce((sum, current) => sum + current);
    }
    console.log('n - ',n);
    return n;
}