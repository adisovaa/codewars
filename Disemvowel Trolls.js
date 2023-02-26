//?Solution 1
function disemvowel(str) {
    return (str || '').replace(/[aeiou]/gi, '');
}

//?Solution 2
function disemvowel(str) {
var vowels = ['a', 'e', 'i', 'o', 'u'];
return str
    .split('')
    .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
    .join('');
}

console.log(disemvowel('This website is for losers LOL!'));