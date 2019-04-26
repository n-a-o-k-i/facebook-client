class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
	firstName: string;
	lastName: string;
	middleInitial: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

let user = new Student("naoki", "X", "terarara");

document.body.innerHTML = greeter(user);