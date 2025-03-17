//with class
var User = /** @class */ (function () {
    function User(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.fname, " ").concat(this.lname);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
//creating instances
var user1 = new User("John", "Doe", 23);
var user2 = new User("Jane", "smith", 23);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());
