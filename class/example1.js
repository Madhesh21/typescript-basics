//without class
var user1 = { fname: "John", lname: "Doe", age: 25 };
var user2 = { fname: "Jane", lname: "smith", age: 25 };
function greetUser(user) {
    return "Hello ".concat(user.fname, " ").concat(user.lname);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(greetUser(user2));
console.log(getUserAge(user1));
console.log(getUserAge(user2));
