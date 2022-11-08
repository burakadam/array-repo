const people = [{ name: 'Burak' }, { name: 'İpek' }];

const person = people.find((item) => item.name === 'İpek');
console.log(person);
person.name = 'Wife';
console.log(people);
// ITEM OF ARRAY ARE REFENCE TYPE THAT IS WAY CHANGING PERSON CHANGES PEOPLE
