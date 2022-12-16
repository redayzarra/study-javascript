let myColors = []; // Initializes the array into myColors but it is empty

myColors = ['red', 'green', 'blue', 'silver']; // Array now stores strings

console.log(myColors); // Prints the entire array
console.log(myColors[0]); //Prints out 'red' because it is at index 0

myColors[4] = 'orange'; // The array is dynamic so the array got larger
myColors[12] = 'test'; // Adds 'test' at index 12 with seven empties in middle
console.log(myColors);

myColors[2] = 3; // Arrays can also store numbers alongside anything else
console.log(typeof myColors) //Arrays are a type of object 

console.log(myColors.length) // Tells us the length of the array