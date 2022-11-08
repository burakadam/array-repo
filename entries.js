const numbers = [10, 20, 30, 40, 50];

const ent = numbers.entries();
console.log(ent);

for (const value of ent) console.log(value);

const customers = {
  Jack: 12,
  Jim: 15,
  Kim: 5,
};

function sum(objOrArray) {
  return Object.values(objOrArray).reduce((sum, value) => sum + value, 0);
}

sum(numbers);
sum(customers);
