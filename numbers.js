function solve(input) {
  let numbers = input.split(' ').map(Number);
  let sum = numbers.reduce((acc, value) => acc + value);
  let average = sum / numbers.length;

  let topNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
      topNumbers.push(numbers[i]);
    }
  }

  topNumbers.sort((a, b) => b - a);

  if (topNumbers.length > 5) {
    topNumbers = topNumbers.slice(0, 5);
  }

  if (topNumbers.length === 0) {
    console.log('No');
  } else {
    console.log(topNumbers.join(' '));
  }
}

solve('10 20 30 40 50');
