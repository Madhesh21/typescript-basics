function createCounter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getValue: function () {
            return counterValue;
        }
    };
}
var counter1 = createCounter();
var counter2 = createCounter();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue());
console.log(counter2.getValue());
