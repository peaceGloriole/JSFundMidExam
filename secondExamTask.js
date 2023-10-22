function solve(arr) {
  let sepStr = arr[0].split(">>");
  let tax = 0;
  let count = 0;
  let totalTax = 0;

  for (let els of sepStr) {
    let [carType, years, mileage] = els.split(' ');
    years = Number(years);
    mileage = Number(mileage);

    if (carType !== 'family' && carType !== 'heavyDuty' && carType !== 'sports') {
      console.log(`Invalid car type.`);
      continue;
    }

    if (carType === 'family') {
      tax = 50;
    } else if (carType === 'heavyDuty') {
      tax = 80;
    } else if (carType === 'sports') {
      tax = 100;
    }

    if (carType === `family`) {
      count = Math.floor(mileage / 3000);
      tax += 12 * count;
      tax -= 5 * years;
    } else if (carType === `heavyDuty`) {
      count = Math.floor(mileage / 9000);
      tax += 14 * count;
      tax -= 8 * years;
    } else if (carType === `sports`) {
      count = Math.floor(mileage / 2000);
      tax += 18 * count;
      tax -= 9 * years;
    }

    totalTax += tax

    console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
  }

  console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}

solve(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);

