function memoryGame(arr) {
  let sequence = arr.shift().split(' ');
  let moves = 0;

  for (let command of arr) {
    if (command === 'end') {
      if (sequence.length === 0) {
        console.log(`You have won in ${moves} turns!`);
      } else {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
      }
      break;
    }

    let [index1, index2] = command.split(' ');

    if (index1 === index2 || index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length) {
      let middleIndex = Math.floor(sequence.length / 2);
      let additionalElement = `-${moves}a`;

      sequence.splice(middleIndex, 0, additionalElement, additionalElement);
      console.log('Invalid input! Adding additional elements to the board');
    } else if (sequence[index1] === sequence[index2]) {
      let element = sequence[index1];
      sequence.splice(index1, 1);
      if (index1 < index2) {
        sequence.splice(index2 - 1, 1);
      } else {
        sequence.splice(index2, 1);
      }
      console.log(`Congrats! You have found matching elements - ${element}!`);
      moves++;
    } else {
      console.log('Try again!');
      moves++;
    }
  }
}

const input = [
  "a 2 4 a 2 4", 
  "0 3", 
  "0 2",
  "0 1",
  "0 1", 
  "end"
  ];

memoryGame(input);
