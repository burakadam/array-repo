const numbers = [10, 20, 30, 40, 50];

// BAD
const middleThree = numbers.filter((_, i) => i > 0 && i < numbers.length - 1);
console.log(middleThree);

// GOOD
const goodMiddleThree = numbers.slice(1, numbers.length - 1);
console.log(goodMiddleThree);

//COPY ARRAY
const copy = numbers.slice();
console.log(copy);

console.log(numbers.slice(1));
console.log(numbers.slice(-1));
console.log(numbers.slice(-2));
