const numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (const value of numbers) sum += value;
console.log(sum);

const total = numbers.reduce((sum, value) => sum + value, 0);
console.log(total);

//AVERAGE
const av = numbers.reduce((avr, value, _, arr) => avr + value / arr.length, 0);
console.log(av);

const newArr = numbers.reduce((arr, number) => [...arr, number], []);
console.log(newArr);

//START FROM END
const newArrReverse = numbers.reduceRight(
  (arr, number) => [...arr, number],
  []
);
console.log(newArrReverse);

//MAP CAN BE USE FOR THESE EXAMPLE

const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

// [2,2,2,5,5,7,7,7]

const counts = groups.reduce((arr, [count, value]) => {
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}, []);
console.log(counts);

//EASIER WAY
const countsArr = groups.reduce(
  (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
  []
);
console.log(countsArr);

const nums = [12, 15, 12, 2, 6, 6, 2, 12];

const forLookUp = {};
for (const number of nums) {
  forLookUp[number] = (forLookUp[number] ?? 0) + 1;
}
console.log(forLookUp);

const reduceLookup = nums.reduce(
  (arr, value) => ({ ...arr, [value]: (arr[value] ?? 0) + 1 }),
  {}
);
console.log(reduceLookup);

const minAndMax = nums.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);
console.log(minAndMax);
