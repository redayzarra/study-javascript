let myVariable = 'ReDay'; // Let simply creates the variable...
console.log(typeof firstName); // Tells us that the variable is a string

myVariable = 21; // The variable can be reassigned without using let
console.log(typeof age); // Tells us that the variable type changed to number

myVariable = 21.234; // In python this would be a float...
console.log(typeof myVariable); // But JS considers all numbers as number type

myVariable = undefined; // Undefined is a value as well as a type

myVariable = null;
console.log(typeof myVariable); // Tells us that the variable is an object