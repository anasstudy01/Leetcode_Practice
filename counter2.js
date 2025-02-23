// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). 

// For example, if n = 3, the counter function should return 3 the first time it is called, 4 the second time, 5 the third time, and so on.


function counter(n) {
  return function() {
    return n++;
  }
}
// test the function
const count = counter(3);
console.log(count()); // Output: 3
console.log(count()); // Output: 4
console.log(count()); // Output: 5