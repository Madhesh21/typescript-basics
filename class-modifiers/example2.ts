//with class modifiers
class User {
   private name: string;
   private age: number

    constructor(name:string, age: number) {
        this.name = name;
       this.age = age;
    }

    public getName(){
      return this.name
    }

    public getAge(){
      return this.age
    }

    public setName(name:string){
      this.name = name
    }

    public setAge(age:number){
      this.age = age
    }
}

const user = new User("Karthiga",21)
console.log(user.getName())
console.log(user.getAge())

user.setName("Madhesh")
user.setAge(22)
console.log(user.getName())
console.log(user.getAge())
//console.log(user.name)