function heron(a, b, c) {
    let res = (a+b+c)/2
    return Math.sqrt(res * (res - a) * (res - b) * (res - c));
}