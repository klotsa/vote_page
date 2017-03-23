$(document).ready(function() {
  var age = parseInt($("input#age")).val());
  var gender = $("select#gender").val();

  if(height < 140) {
    $(".kids").show();
    $(".all").show();
    $("#thomas").addClass("green-text");
    $("#batman").addClass("green-text");
  } else {
    $(".adults").show();
    $(".all").show();
    $(".crazyHorse").addClass("red-text");
  }

});
