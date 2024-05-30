/*
fixed: per item wood requirements
1. chair --> 3 cft
2. table ---> 10cft
3. bed --> 50cft
vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantuty) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantuty * perBedWood;

  //   console.log(chairQuantity, tableQuantity, bedQuantuty);

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log("total wood required", totalWood);
