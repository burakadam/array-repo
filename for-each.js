const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

//FOREACH CAN NOT BE STOPPED SO FOR CAN BE BETTER TO USE
for (const value of numbers) {
  if (value > 20) break;
  console.log(value);
}
