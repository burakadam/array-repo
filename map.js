const people = [
  {
    first: 'İpek',
    last: 'Kömürcüoğlu',
    address: {
      city: 'İstanbul',
    },
  },
  {
    first: 'Burak',
    last: 'Erden',
    address: {
      city: 'İzmir',
    },
  },
];

const fullNames = people.map((person) => ({
  ...person,
  fullName: `${person.first} ${person.last}`,
}));

console.log(fullNames);

fullNames[0].first = 'Kuş';
fullNames[0].address.city = 'Paris';

console.log(fullNames[0].first === people[0].first);
console.log(fullNames[0].address.city === people[0].address.city);
