const geometricSequenceElements = (a, r, n) => [...new Array(n)].map((_, index) => a * r ** index).join(', ')

// Function Export
module.exports = geometricSequenceElements