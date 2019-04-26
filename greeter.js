function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "naoki", lastName: "terauchi" };
document.body.innerHTML = greeter(user);
