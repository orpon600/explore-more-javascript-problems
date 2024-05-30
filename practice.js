/*
1.
19 53 odd number 
problem practice

*/

//1. feet to inch

// function feetToInch(inch) {
//   const feet = inch / 12;
//   return feet;
// }

// const dadaInch = 180;
// const dadaFeet = feetToInch(dadaInch);
// console.log(dadaFeet);
//
//
// 2. centimeter to meter
// function centimeterToMeter(centimeter) {
//   const meter = centimeter * 0.01;
//   return meter;
// }

// const dadacentimeter = 500;
// const dadameter = centimeterToMeter(dadacentimeter);
// console.log(dadameter);
//
//
//3. count paper
// book1 ---> 100
// book2 ---> 200
// book3 ---> 300

// function paperRequirements(copiesFirstBook, copiesSecondBook, copiesThirdBook) {
//   const pageFirstBook = 100;
//   const pageSeconBook = 200;
//   const pageThirdBook = 300;

//   let totalPaper =
//     copiesFirstBook * pageFirstBook +
//     copiesSecondBook * pageSeconBook +
//     copiesThirdBook * pageThirdBook;

//   return totalPaper;
// }

// let copiesFirstBook = 2;
// let copiesSecondBook = 3;
// let copiesThirdBook = 1;

// let totalPaperRequired = paperRequirements(
//   copiesFirstBook,
//   copiesSecondBook,
//   copiesThirdBook
// );

// console.log("total pages of paper required", totalPaperRequired);
//
//
//
//4. ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

// function bestFriend(friend) {
//   let longestName = "";

//   for (let i = 0; i < friend.length; i++) {
//     if (friend[i].length > longestName.length) {
//       longestName = friend[i];
//     }
//   }
//   return longestName;
// }

// let myFriends = ["sajid", "mamun", "kamal", "jubayer bin rased", "chinku"];
// let bestFriendName = bestFriend(myFriends);
// console.log(bestFriendName);
//
//
//
//5. [ 45, 85, 96, 11, 63, -54, 71, 28];

function onlyPositive(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    } else {
      break;
    }
  }
  return positiveNumbers;
}

let myNumber = [45, 85, 96, 11, 63, -54, 71, 28];
let positiveNumbers = onlyPositive(myNumber);
console.log(positiveNumbers);
