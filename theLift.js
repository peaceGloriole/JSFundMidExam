function solve(arr) {
  let maxNum = 4;
  let pplWaiting = Number(arr[0]);
  let wagons = arr[1].split(' ').map(Number);

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < maxNum) {
      let spaceLeft = maxNum - wagons[i];
      if (spaceLeft >= pplWaiting) {
        wagons[i] += pplWaiting;
        pplWaiting = 0;
        break;
      } else {
        wagons[i] = maxNum;
        pplWaiting -= spaceLeft;
      }

    }
  }

  if (pplWaiting === 0) {
    if (wagons.every(space => space === maxNum)) {
      console.log(wagons.join(' '));
    } else {
      console.log(`The lift has empty spots!`);
      console.log(wagons.join(' '));
    }
  } else {
    console.log(`There isn't enough space! ${pplWaiting} people in a queue!`);
    console.log(wagons.join(' '));
  }
}

solve(["20", "0 0 0 0 0"]);
