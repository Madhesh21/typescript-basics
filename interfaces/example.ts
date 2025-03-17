
interface User {
  fname:string,
  lname:string,
  age?:number,
  middlename?:string
}

function greet(user:User){
  return `Hello ${user.fname} ${user.lname}`
}

function logUserDetails(user:User){
  console.log(
    `User: ${user.fname} ${user.lname},age: ${user.age}`
  )
}

let user1 = {fname:"John",lname:"Doe"}
console.log(greet(user1))
logUserDetails(user1)