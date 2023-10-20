function solve(input) {
  let customerType = input.pop();
  let totalPrice = 0;
  for (let price of input) {
    let partsPrice = Number(price);

    if (partsPrice < 0) {
      console.log(`Invalid price!`);
      continue
    }

    totalPrice += partsPrice;

  }

  let taxes = totalPrice * 0.20;

  if (totalPrice <= 0) {
    console.log(`Invalid order!`)
    return;
  } else {
    console.log(`Congratulations you've just bought a new computer!`);

    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
  }
  
  let finalPrice = totalPrice + taxes;

  if (customerType == `special`) {
    finalPrice *= 0.90;
  }
  
  console.log(`Total price: ${finalPrice.toFixed(2)}$`);

}
// solve(['1050','200','450','2','18.50','16.86','special']);
// solve(['1023','15','-20','-5.50','450','20','17.66','19.30','regular']);
solve([

  'regular'
  
  ]);