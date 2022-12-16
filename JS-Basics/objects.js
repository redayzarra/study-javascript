let name = 'ReDay';
let age = 21;

let person = { // This is an object, basically a dictionary in Python
  name: 'ReDay', // Notice how there are keys and values for every pair
  age: 21,
}

console.log(person) // Spits out the entire object


// DOT notation - easier and concise
console.log(person.name) //objectName.keyName gives us the value from that key
person.name = 'De'; // Can be used to change the value of a given key

// BRACKET notation - allows the key to be a variable
console.log(person['name'])//objectName['keyName'] gives us the value at the key
person['name'] = 'De'; // Another way of changing the value at given key
selection = 'age';
console.log(person[selection]); // Gets value with a variable as a key