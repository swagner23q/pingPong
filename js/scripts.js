var pingPong = function(userNumber) {
  var outcome = [];

  // if (isNan(userNumber)) {
  //   alert("Please enter a numeric value, thx.")
  // }

  for (var i = 1; i <= userNumber; i ++) {
    if (i % 15 === 0) {
      outcome.push("ping-pong");
    } else if (i % 5 === 0) {
      outcome.push("pong");
    } else if (i % 3 === 0) {
      outcome.push("ping");
    } else {
      outcome.push(i);
    }
  }
  return outcome;
};

$(document).ready(function() {
  $("button#pongMe").click(function(event) {
    $("#pingPongpang" ).empty();
    var userNumber = parseInt($("input#userNum").val());
    var results = pingPong(userNumber);

    $("#pingPongpang").append("<ul>");
        results.forEach(function(singleResult){
    $("#pingPongpang").append("<li>" + singleResult + "</li>");
  });
    $("#pingPongpang").append("</ul>");

    event.preventDefault();
  });
});
