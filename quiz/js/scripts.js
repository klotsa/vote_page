$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    debugger;
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age <= 40 && gender === "female") {
        $(".Tom").show();
    } else if (age > 40 && gender === "female") {
        $(".Pacino").show();
    } else if ((age <= 40) && (gender === "male")) {
        $(".Rachel").show();
    } else if (age > 40 && gender === "male") {
        $(".Brigitte").show();
    } else {
        $(".Yoda").show();
    }
    event.preventDefault();

  });
});

  //
  // if(height < 140) {
  //   $(".kids").show();
  //   $(".all").show();
  //   $("#thomas").addClass("green-text");
  //   $("#batman").addClass("green-text");
  // } else {
  //   $(".adults").show();
  //   $(".all").show();
  //   $(".crazyHorse").addClass("red-text");
  // }
  // event.preventDefault();
