const score = [73, 67, 38, 33];

let round = [];
score.forEach((item) => {
  if (item % 5 < 3) {
    round.push(item);
  } else if (item < 38) {
    round.push(item);
  } else if (item % 5 >= 3) {
    round.push(Math.round(item / 5) * 5);
  }
});

console.log(round);

// let round = [];
// for (let i = 0; i < score.length; i++) {
//   let iterate = score[i];
//   if (iterate > 38) {
//     if (Math.floor(iterate) != iterate) {
//       round = iterate;
//     } else {
//       round = Math.ceil(iterate);
//     }
//   } else {
//     round = iterate;
//   }
// }
// console.log(round);
