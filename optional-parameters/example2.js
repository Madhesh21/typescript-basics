var concatStrings = function (a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : " ");
};
console.log(concatStrings('a', 'b', 'c'));
console.log(concatStrings('a', 'b'));
