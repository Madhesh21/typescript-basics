var concatStrings = function (a, b, c) {
    if (a === void 0) { a = 'apple'; }
    if (b === void 0) { b = 'ball'; }
    if (c === void 0) { c = 'cat'; }
    return a + b + c;
};
console.log(concatStrings('a', 'b', 'c'));
console.log(concatStrings());
console.log(concatStrings('a', 'b'));
