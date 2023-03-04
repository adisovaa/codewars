function SeriesSum(n) {
  if(0 == n) return "0.00"
  let s = 1;
  for(let i=1; i<n; i++) s += 1/(1+3*i);
  return `${s.toFixed(2)}`;
}