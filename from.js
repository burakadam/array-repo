const numbers = [10, 20, 30, 40, 50];

const newArr = Array.from(numbers);
console.log(newArr);

const newArr10 = Array.from(numbers, (value) => value * 10);
console.log(newArr10);
