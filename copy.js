const numbers = [10, 20, 30, 40, 50];
const copyOfNumbers = [...numbers];
copyOfNumbers;
numbers;

copyOfNumbers[0] = 100;
copyOfNumbers;
numbers;

// EVEN COPY CHANGE ORIGINAL IS NOT CHANGE BECAUSE ARRAY ITEMS ARE NOT REFERENCE TYPE

const people = [{ name: 'Burak' }, { name: 'İpek' }];
const copyOfPeople = [...people];
copyOfPeople[0].name = 'Gofret';
console.log(copyOfPeople);
console.log(people);

console.log(copyOfPeople[0].name === people[0].name);

// WHEN COPY CHANGE ORIGINAL IS CHANGE TOO, BECAUSE ARRAY ITEMS ARE REFERENCE TYPE
