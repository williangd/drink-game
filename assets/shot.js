var rollButton = document.getElementById("roll");
var options = document.getElementsByClassName("option");
var optionPicked;


rollButton.addEventListener("click", function() {
  for(var i = 0; i < options.length; i++) {
    options[i].removeAttribute("id", "selected");
  }

  var times = random(5);
  var repeater = setInterval(function() {
    optionPicked = mark();
    setTimeout(dismark, 500, optionPicked);
    times--;
    if(times <= 0) {
      clearInterval(repeater);
      setTimeout(mark, 1000);
    }
  }, 1000);
});

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function mark(optionPicked) {
  var num = random(13);
  num === 0 ? num = num : num--;
  optionPicked = options[num];
  optionPicked.setAttribute("id", "selected");
  return optionPicked;
}

function dismark(optionPicked) {
  optionPicked.removeAttribute("id", "selected");
}

