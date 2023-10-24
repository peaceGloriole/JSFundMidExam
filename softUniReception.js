function solve(arr) {
  let employeeEfficiency = arr.slice(0, arr.length - 1).map(Number);
  
  let studentCount = Number(arr[3]);
  let totalEfficiency = 0;

  for (let efficiency of employeeEfficiency) {
    totalEfficiency += efficiency;
  }

  let hours = 0;
  while (studentCount > 0) {
    hours++;
    if (hours % 4 === 0) {
      continue;
    }

    studentCount -= totalEfficiency;
  }

  console.log(`Time needed: ${hours}h.`);
}

solve(['1', '2', '3', '45']);
