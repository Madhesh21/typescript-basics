function createCounter(){
  let counterValue:number = 0

  return {
    increment: function(){
      counterValue++
    },
    getValue: function(){
      return counterValue
    }
  }
}

const counter1 = createCounter()
const counter2 = createCounter()
counter1.increment()
counter2.increment()
counter2.increment()
console.log(counter1.getValue(),'COUNTER 1')
console.log(counter2.getValue(),'COUNTER 2')