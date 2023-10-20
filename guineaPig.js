function solve(input) {
  let food = input[0] * 1000;
  let hay = input[1] * 1000;
  let cover = input[2] * 1000;

  let weight = input[3] * 1000;

  for (let i = 1; i <= 30; i++) {
    if (food < 0 || hay < 0 || cover < 0) {
      break;
    } else {
      food -= 300;

      if (i % 2 == 0) {
        hay -= food * 0.05;
      }
  
      if (i % 3 == 0) {
        cover -= weight / 3;
      }
    }
  }

  if (food > 0 && hay > 0 && cover > 0) {
    food /= 1000;
    hay /= 1000;
    cover /= 1000;
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}
solve(["10","5","5.2","1"]);