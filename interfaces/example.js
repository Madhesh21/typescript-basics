function greet(user) {
    return "Hello ".concat(user.fname, " ").concat(user.lname);
}
function logUserDetails(user) {
    console.log("User: ".concat(user.fname, " ").concat(user.lname, ",age: ").concat(user.age));
}
var user1 = { fname: "John", lname: "Doe", middlename: 'J', age: 24 };
console.log(greet(user1));
logUserDetails(user1);
