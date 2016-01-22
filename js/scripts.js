var pingPong = function(userNumber) {
  for (var i = 1; i <= userNumber; i ++) {
    if (userNumber % 15 === 0) {
      return ("ping-pong");

    } else if (userNumber % 5 === 0) {
      return ("pong");

    } else if (userNumber % 3 === 0) {
      return ("ping");
    }
    return ([1, 2, 3, 4, 5, 6, 7]);
  }
}
// $(document).ready(function() {
//   $("form#pongPlatform").submit(function(event) {
//     var userNumber = parseFloat($("input#userNum").val());
//
//
//
//
//     event.preventDefault();
//   });
// });
