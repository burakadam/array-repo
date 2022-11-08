const numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

// FLAT ONLY ONE LEVEL
console.log(numbers.flat());
//INFINITE LEVEL
console.log(numbers.flat(Infinity));

const values = [10, 20, 30, 40, 50];

const mapNum = values.map((v, i) => [v, i]);
console.log(mapNum);

const flatNum = values.flatMap((v, i) => [v, i]);
console.log(flatNum);
