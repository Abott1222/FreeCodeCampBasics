$(document).ready(function() {
  var operatorPlaced = false;
  var numberPlaced = false;

	$("span").on("click", function() {

    var $elem = $(this);
    var $screen = $("#screen");
    var elemVal = $elem.text();
    if(elemVal == "÷") elemVal = "/";
    if(elemVal == "x") elemVal = "*";
    
    if ($elem.hasClass("operator")) {
      if(numberPlaced) {
        if(elemVal == "C") {
          $screen.text("");
          operatorPlaced = false;
        } else  {
          if (operatorPlaced == false) {
            operatorPlaced = true;
            $screen.text($screen.text() + " " + elemVal);
          } else {
            var res = eval($screen.text());
            $screen.text(res+ " " + elemVal);
            operatorPlaced = true;
          }
        }
      }
    } else {
      $screen.text($screen.text() + " " + elemVal);
      numberPlaced = true;
    }
  });
});
