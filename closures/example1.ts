//without closure

let counter:number = 0

function incrementCounter(){
  counter++
}

function getCounterValue(){
  return counter
}

incrementCounter()
console.log(getCounterValue())

incrementCounter()
console.log(getCounterValue())