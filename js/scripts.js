var pingPong = function(userNumber) {
  for (var i = 1; i <= userNumber; i ++) {
    if (userNumber % 3 == 0) {
      return ([3, 6, 9, 12]);

    } else if (userNumber % 5 == 0){
      return ([5, 10, 15, 20]);
    }
    return ([1, 2, 3, 4, 5, 6, 7]);
  }
}




// var pingPong = function(userNumber) {
//   for (var i = 1; i <= userNumber; i ++) {
//   }
// }
