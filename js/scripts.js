var pingPong = function(userNumber) {
  for (var i = 1; i <= userNumber; i ++) {
    if (userNumber % 15 === 0) {
      return ([15, 30, 45, 60]);

    } else if (userNumber % 5 === 0) {
      return ([5, 10, 15, 20]);
      
    } else if (userNumber % 3 === 0) {
      return ([3, 6, 9, 12]);
    }
    return ([1, 2, 3, 4, 5, 6, 7]);
  }
}






// var pingPong = function(userNumber) {
//   for (var i = 1; i <= userNumber; i ++) {
//     if (userNumber % 3 === 0) {
//       return ([3, 6, 9, 12]);
//
//     } else if (userNumber % 5 === 0) {
//       return ([5, 10, 15, 20]);
//     } else if (userNumber % 15 ===15) {
//       return ([15, 30, 45, 60]);
//     }
//     return ([1, 2, 3, 4, 5, 6, 7]);
//   }
// }
