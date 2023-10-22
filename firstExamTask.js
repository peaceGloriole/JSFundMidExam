function solve(input) {
  let count = 0;
  let totalProfit = 0;

  for (let i = 1; i < input.length; i += 3) {
    
    let town = input[i];
    let income = Number(input[i + 1]);
    let expenses = Number(input[i + 2]);
    count++;
    
    if (count % 3 == 0) {
      expenses *= 1.5;
    } 

    if (count % 5 == 0) {
      income *= 0.90;
    }
    

    let totalIncome = income - expenses;

    totalProfit += totalIncome;

    console.log(`In ${town} Burger Bus earned ${totalIncome.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

// solve(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"]);
solve(["5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20"]);