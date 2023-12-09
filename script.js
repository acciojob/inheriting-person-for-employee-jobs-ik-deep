// complete this js code
function Person(name, age) {
	this.name = name;
this.age = age;
}

// Adding greet method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor within the context of Employee
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage:
const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice, I am 30 years old.

const employee1 = new Employee('Bob', 30, 'Manager');
employee1.greet(); // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Bob, I am 25 years old, and my job title is Developer.
