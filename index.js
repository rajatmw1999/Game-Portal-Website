// $(".playButtons").click(function(event) {
//       var returnValueOfPlay = play();
//       console.log(returnValueOfPlay);
// });

//
// $("#tick").click(function(event) {
//       var returnValueOfPlay = play();
//       if(returnValueOfPlay === true)
//         console.log("+5");
//       else {
//         console.log("-1");
//       }
// });
// $("#cross").click(function(event) {
//       var returnValueOfPlay = play();
//       if(returnValueOfPlay === false)
//         console.log("+5");
//       else {
//         console.log("-1");
//       }
// });

var clicked = 0;

$(document).keypress(function() {
  play();
});

function play() {
  ++clicked;
  var color = ["VIOLET", "BLUE", "GREEN", "YELLOW", "ORANGE", "RED"];

  var ensureTheSame = Math.random();
  ensureTheSame = ensureTheSame * 20;
  ensureTheSame = Math.floor(ensureTheSame);

  // pos is to fix the name of that appears on the game board
  var pos = Math.random();
  pos = pos * 6;
  pos = Math.floor(pos);

  //pos1 is to fix the actual color of the text that appears on the game boards
  var pos1 = Math.random();
  pos1 = pos1 * 6;
  pos1 = Math.floor(pos1);

  var pos2 = Math.random();
  pos2 = pos2 * 6;
  pos2 = Math.floor(pos2);

  $(".playButtons").hide();
  $(".game-board").slideUp();
  setTimeout(function() {
    $("#display-color-name").html(color[pos]).css("color", color[pos1]);
  }, 400);
  $(".game-board").slideDown();
  setTimeout(function() {
    $(".playButtons").show();
  }, 700)

  var iconClasses = ["fas fa-circle", "fas fa-stop", "fas fa-caret-up", "fas fa-apple-alt", "fas fa-star", "fas fa-heart"];

  var answer = (pos == pos2);

  setTimeout(function() {
    if (pos1 === 2) {
      $("#shape-that-appears").removeClass().addClass(iconClasses[pos1]).addClass("fa-10x");
    } else {
      $("#shape-that-appears").removeClass().addClass(iconClasses[pos1]).addClass("fa-8x");
    }
    if (ensureTheSame < 6) {
      $("#shape-that-appears").css("color", color[pos]);
      answer = true;
    } else {
      $("#shape-that-appears").css("color", color[pos2]);
      answer = (pos == pos2);
    }
  }, 400);


  document.querySelector("#tick").addEventListener("click", function(event) {

    if (answer === true)
      console.log(clicked, " +5");
    else {
      console.log(clicked, " -1");
    }
  });
  document.querySelector("#cross").addEventListener("click", function(event) {
    if (answer === false)
      console.log(clicked, " +5");
    else {
      console.log(clicked, " -1");
    }
  });
}
