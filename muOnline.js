function solve(input) {
  let initialHP = 100;
  let initialCoin = 0;
  let count = 0;

  let sepStr = input.split(`|`);
  
  for (let room of sepStr) {
    count++;
    let tokens = room.split(` `);
    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command == `potion`) {
      let healedFor = Math.min(100 - initialHP, num);
      initialHP += healedFor; 

      console.log(`You healed for ${healedFor} hp.`);
      console.log(`Current health: ${initialHP} hp.`);

    } else if (command == `chest`) {
      initialCoin += num;
      console.log(`You found ${num} bitcoins.`);
      
    } else {
      initialHP -= num;

      if (initialHP <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${count}`);
        break;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }

  if (initialHP > 0) {
    console.log(`You've made it!\nBitcoins: ${initialCoin}\nHealth: ${initialHP}`);
  }
}

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
solve ("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");