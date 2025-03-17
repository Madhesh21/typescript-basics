//with class
class User {
  fname:string
  lname:string
  age:number

  constructor(fname:string,lname:string,age:number){
    this.fname = fname
    this.lname = lname
    this.age = age
  }

  greet(){
    return `Hello ${this.fname} ${this.lname}`
  }

  getAge(){
    return this.age
  }
}

//creating instances
let user1 = new User("John","Doe",23)
let user2 = new User("Jane","smith",23)

console.log(user1.greet())
console.log(user1.getAge())
console.log(user2.greet())
console.log(user2.getAge())