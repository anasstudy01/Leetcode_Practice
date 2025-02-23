// Write a function createHelloWorld. It should return a new function that always returns "Hello World"

function createHelloWorld() {
  return function() {
    return "Hello World";
  }

}
// Test the function
const helloWorld = createHelloWorld();
console.log(helloWorld()); // Output: Hello World

