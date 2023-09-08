// map(). Example 1

const temperaturesCelsius = [0, 15, 30, 45];

const temperaturesKelvin = temperaturesCelsius.map((celsius) => celsius + 273.15);

console.log('Celsius Temperatures:', temperaturesCelsius);
console.log('Kelvin Temperatures:', temperaturesKelvin);

// map(). Example 2

const names = ['alice', 'bob', 'carol'];

const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase());

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);

// spread operator. Example 1

const originalArray = [10, 20, 30];
const newArray = [...originalArray, 40, 50];

console.log('Original Array:', originalArray);
console.log('New Array with Additional Elements:', newArray);

// spread operator. Example 2

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const mergedArray = [...arr1, ...arr2, ...arr3];

console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Array 3:', arr3);
console.log('Merged Array:', mergedArray);

// Object Destructuring. Example 1

const person = { name: 'Alice', info: { age: 30, occupation: 'Engineer' } };

const { name, info: { age, occupation } } = person;

console.log('Name:', name);
console.log('Age:', age);
console.log('Occupation:', occupation);

// Object Destructuring. Example 2

function greetUser({ name, age }) {
    console.log(`Hello, ${name}! You're ${age} years old.`);
  }
  
  greetUser({ name: 'Bob', age: 25 });