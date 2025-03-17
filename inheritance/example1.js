var User = /** @class */ (function () {
    function User(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.fname, " ").concat(this.lname);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(fname, lname, age, role) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "Hello, ".concat(this.fname, " ").concat(this.lname, " Role:").concat(this.role);
    };
    Admin.prototype.getAge = function () {
        return this.age;
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}());
var user1 = new User("John", "Doe", 25);
var admin1 = new Admin("Alice", "Smith", 35, "Administrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());
