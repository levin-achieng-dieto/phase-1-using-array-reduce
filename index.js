const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0;

function totals(batteryBatches){
  for (const alls of batteryBatches){
    totalBatteries += alls;
  }
  return totalBatteries;
}
console.log(totals(batteryBatches));
