const name = "Vlad";
const message = `Hello, my name is ${name}.`;
console.log(message);

const person = { name: "John", age: 25, email: "john@example.com" };
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

const jsonString = '{"name": "Alice", "age": 30, "email": "alice@example.com"}';
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);

function add(a, b) {
  return a + b;
}

const calculate = add;
const sum = calculate(5, 3);
console.log("Sum:", sum);

function operate(a, b, operation) {
  return operation(a, b);
}

function multiply(a, b) {
  return a * b;
}

const result = operate(4, 2, multiply);
console.log("Result of multiplication:", result);

function greetPrefix(prefix) {
  return function(name) {
    console.log(`${prefix}, ${name}!`);
  };
}

const greetHello = greetPrefix("Hello");
const greetHi = greetPrefix("Hi");

greetHello("Alice");
greetHi("Bob");