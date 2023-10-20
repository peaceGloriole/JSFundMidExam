function solve(input) {
  let loot = input.shift().split('|');

  for (let command of input) {
    let tokens = command.split(' ');
    let action = tokens[0];

    if (action === 'Loot') {
      for (let i = 1; i < tokens.length; i++) {
        let item = tokens[i];
        if (!loot.includes(item)) {
          loot.unshift(item);
        }
      }
    } else if (action === 'Drop') {
      let index = Number(tokens[1]);
      if (index >= 0 && index < loot.length) {
        let removedItem = loot.splice(index, 1)[0];
        loot.push(removedItem);
      }
    } else if (action === 'Steal') {
      let count = Number(tokens[1]);
      if (count >= loot.length) {
        let stolenItems = loot.splice(0);
        console.log(`${stolenItems.join(', ')}`);
      } else {
        let stolenItems = loot.splice(loot.length - count);
        console.log(`${stolenItems.join(', ')}`);
      }
    } else if (action === 'Yohoho!') {
      break;
    }
  }

  if (loot.length === 0) {
    console.log('Failed treasure hunt.');
  } else {
    let totalLength = 0;
    for (let item of loot) {
      totalLength += item.length;
    }
    let averageGain = (totalLength / loot.length).toFixed(2);
    console.log(`Average treasure gain: ${averageGain} pirate credits.`);
  }
}

solve([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
