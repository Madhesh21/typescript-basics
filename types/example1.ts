var mystring:string = "this a string"
var mynumber:number = 2
var myboolean:boolean = false

mystring = myboolean
mynumber = mystring
myboolean = mynumber

console.log(mystring,mynumber,myboolean)