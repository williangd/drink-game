var rollButton = document.getElementById("roll");
var options = document.getElementsByClassName("option");


rollButton.addEventListener("click", function() {
  for(var i = 0; i < options.length; i++) {
    options[i].removeAttribute("id", "selected");
  }
  var num = Math.floor(Math.random() * 13);
  num === 0 ? num = num : num--;
  var optionPicked = options[num];
  optionPicked.setAttribute("id", "selected");
});

