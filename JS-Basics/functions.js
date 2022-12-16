function myFunction() { // This initiates the function 
  console.log('Another JS course');
}

myFunction(); // Calls our function


function whatsUp (name) {
  console.log("What's up, " + name +"!");
}

whatsUp('ReDay'); // Passing in my name as an argument to our function

// Performs a task
function yetAgain(firstName, lastName) {
  console.log("Good god... please not again, " + firstName + " " + lastName + "!")
}

yetAgain('Adam', 'Sandler');

//Calculates a value
function square(number) {
  return number * number; // Think of return as the value of the function
}

let ourNumber = square(2); // Assigns the return value with argument to variable
console.log(ourNumber); 

console.log(square(3)); // Or just directly print the result of the function