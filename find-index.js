const names = ['Burak', 'İpek', 'Gofret', 'Sütlaç', 'Burak'];

console.log(names.indexOf('Sütlaç'));
console.log(names.indexOf('Ramazan'));
console.log(names.indexOf('Burak'));
console.log(names.indexOf('Burak', 1));
// RETURNS FIRST MATCH INDEX

console.log(names.lastIndexOf('Burak'));

console.log(names.findIndex((name) => name === 'Burak'));
// INDEXOF HAS BETTER PERFORMANCE
