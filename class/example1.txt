/* 
//without class
 let user1 = {fname:"John",lname:"Doe",age:25}
 let user2 = {fname:"Jane",lname:"smith",age:25}

 function greetUser(user: {fname:string,lname:string}){
   return `Hello ${user.fname} ${user.lname}`
 }

 function getUserAge(user:{age:number}){
  return user.age
 }

console.log(greetUser(user1))
console.log(greetUser(user2))

console.log(getUserAge(user1))
console.log(getUserAge(user2)) */