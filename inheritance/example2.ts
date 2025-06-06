

class Person{
  fname:string
  lname:string
  age:number

  constructor(fname:string,lname:string,age:number){
    this.fname = fname
    this.lname = lname
    this.age = age
  }

  greet(){
    return `Hello, ${this.fname} ${this.lname}`
  }

  getAge(){
    return this.age
  }
}

class User extends Person{
   constructor(fname:string,lname:string,age:number){
    super(fname,lname,age)
   }
}

class Admin extends Person{
  role:string
  constructor(fname:string,lname:string,age:number,role:string){
    super(fname,lname,age)
    this.role = role
  }

  greet(){
    return `Hello, ${this.fname} ${this.lname}, Role:${this.role}`
  }

  manageUsers(){
    return `Managing users with role ${this.role}`
  }
}

let user1 = new User("John","Doe",25)

let admin1 = new Admin("Alice","Smith",35,"Administrator")

console.log(user1.greet())
console.log(user1.getAge())

console.log(admin1.greet())
console.log(admin1.getAge())
console.log(admin1.manageUsers())