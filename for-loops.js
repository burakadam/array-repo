const numbers = [10, 20, 30, 40, 50];

// FOR 'in' RETURNS INDEXES
for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

//FOR 'of' RETURNS VALUES
for (const value of numbers) {
  console.log(value);
}
