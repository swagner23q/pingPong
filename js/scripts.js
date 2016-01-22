var pingPong = function(userNumber) {
  for (var i = 1; i <= userNumber; i ++) {
    if (userNumber % 15 === 0) {
      $("ul#pingPongpang").append("<li>ping-pong</li>");

    } else if (userNumber % 5 === 0) {
      $("ul#pingPongpang").append("<li>pong</li>");

    } else if (userNumber % 3 === 0) {
      $("ul#pingPongpang").append("<li>ping</li>");
    }
    return $("ul#pingPongpang").append("<li></li>");
  }
}
$(document).ready(function() {
  $("button#pongMe").click(function(event) {

    var userNumber = parseFloat($("input#userNum").val());
    var results = pingPong(userNumber);

    $("#pingPongpang").text(results);
    event.preventDefault();
  });
});

// var pingPong = function(userNumber) {
//   for (var i = 1; i <= userNumber; i ++) {
//     if (userNumber % 15 === 0) {
//       return ("ping-pong");
//
//     } else if (userNumber % 5 === 0) {
//       return ("pong");
//
//     } else if (userNumber % 3 === 0) {
//       return ("ping");
//     }
//     return ([1, 2, 3, 4, 5, 6, 7]);
//   }
// }
// (isNaN(userNumber)) {
//   return false;
