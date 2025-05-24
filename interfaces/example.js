function greet(user) {
    return "Hello ".concat(user.fname, " ").concat(user.lname);
}
function logUserDetails(user) {
    console.log("User: ".concat(user.fname, " ").concat(user.lname, ",age: ").concat(user.age));
}
var user1 = { fname: "John", lname: "Doe", age: 22 };
console.log(greet(user1));
logUserDetails(user1);
