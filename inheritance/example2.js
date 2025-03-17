"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.fname, " ").concat(this.lname);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(fname, lname, age) {
        return _super.call(this, fname, lname, age) || this;
    }
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(fname, lname, age, role) {
        var _this = _super.call(this, fname, lname, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hello, ".concat(this.fname, " ").concat(this.lname, ", Role:").concat(this.role);
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}(Person));
var user1 = new User("John", "Doe", 25);
var admin1 = new Admin("Alice", "Smith", 35, "Administrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());
