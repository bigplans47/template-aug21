function Place(name, temperature, color) {
  this.name = name;
  this.temperature = temperature;
  this.color = color;
}

// var destinationTotal1 = new Place(name, temperature, color);

/////
$(document).ready(function() {
  $("#newplaceform").submit(function(event) {
    event.preventDefault();



    var name = $("input#name").val();
    var temperature = $("input#temperature").val();
    var color = $("input#color").val();


    var outputPlace = new Place(name, temperature, color);
    // alert(outputPlace);
    // $("#destinationTotal").text(outputPlace.name);
    $("#destinationTotal").append("<li><span class='hiddenOutput'>" +outputPlace.name+"</span></li>");
    console.log(outputPlace);
    $("input#name").val("");
    $("input#temperature").val("");
    $("input#color").val("");
    //3 lines above are used to make boxes blank again for user input
    $(".hiddenOutput").last().click(function() {
      $("#showDestination").show();
      $("#showDestination h2").text(outputPlace.name);
      $(".name2").text(outputPlace.name);
      $(".temperature2").text(outputPlace.temperature);
      $(".color2").text(outputPlace.color);
    });

  });
});
