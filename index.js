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
$("#scoreDisplay").hide();
$(".playButtons").hide();
var increment =5;
var decrement =1;
var level = 0;
var score = 0;
var health = 5;
  var answer;
$(document).keypress(function() {
  if(level===0)
    {play();
    $("#scoreDisplay").show();
      $(".playButtons").hide();
    }
});
//
function play() {
  ++level;
  $("#levelDisplay").html("Level : "+level);
  $("#healthDisplay").html("Health : "+health);
  // $("#levelDisplay").html("Level : " + level);
  //array of colors
  var color = ["VIOLET", "BLUE", "GREEN", "YELLOW", "ORANGE", "RED"];

  //random number to ensure that a TRUE condition occurs randomly
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

  //animation of the gameboard
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

  //answer variable is to check whether the appered name and the color of the shape are same.


  setTimeout(function() {
    if (pos1 === 2) {
      $("#shape-that-appears").removeClass().addClass(iconClasses[pos1]).addClass("fa-10x");
    } else {
      $("#shape-that-appears").removeClass().addClass(iconClasses[pos1]).addClass("fa-8x");
    }
    if (ensureTheSame < 6) {
      $("#shape-that-appears").css("color", color[pos]);
    } else {
      $("#shape-that-appears").css("color", color[pos2]);
    }
  }, 400);

if(ensureTheSame<6)
  answer=true;
else if(pos===pos2){
  answer=true;
}
else if(pos!=pos2)
answer = false;
}
//end of the function play()..


$("#tick").click(function(){
  if (answer == true){
    score+=increment;
    $("#scoreDisplay").html("Score : " + score);
    $("#levelDisplay").addClass("right");
    setTimeout(function(){
      $("#levelDisplay").removeClass("right");
    },300);
  }
  else if(answer==false){
  score-=decrement;
  health-=1;
  $("#scoreDisplay").html("Score : " + score);
  $("#levelDisplay").addClass("wrong");
  setTimeout(function(){
    $("#levelDisplay").removeClass("wrong");
  },300);
}
if(level!=0)
  play();
}
  );
  $("#cross").click(function(){
    if (answer == false){
      score+=increment;
      $("#scoreDisplay").html("Score : " + score);
      $("#levelDisplay").addClass("right");
      setTimeout(function(){
        $("#levelDisplay").removeClass("right");
      },300);
    }
    else if(answer == true){
    score-=decrement;
    health-=1;
    $("#scoreDisplay").html("Score : " + score);
    $("#levelDisplay").addClass("wrong");
    setTimeout(function(){
      $("#levelDisplay").removeClass("wrong");
    },300);
    }
    if(level!=0)
    play();
  });
