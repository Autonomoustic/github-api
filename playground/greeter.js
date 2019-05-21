var Student = /** @class */ (function () {
    function Student(firstName, middleInitional, lastName) {
        this.firstName = firstName;
        this.middleInitional = middleInitional;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitional + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = new Student('ali', "a", "aziz");
document.body.innerHTML = greeter(user);
