function Place(name, temperature, color) {
  this.name = name;
  this.temperature = temperature;
  this.color = color;
}

Place.prototype.nameTemp = function () {
  return this.name +" "+ this.temperature;
}
// var destinationTotal1 = new Place(name, temperature, color);

/////
$(document).ready(function() {
  $("#newplaceform").submit(function(event) {
    event.preventDefault();



    var nameIn = $("input#name").val();
    var temperatureIn = $("input#temperature").val();
    var colorIn = $("input#color").val();


    var outputPlace = new Place(nameIn, temperatureIn, colorIn);
    // alert(outputPlace.temperature);

    // alert(outputPlace);
    // $("#destinationTotal").text(outputPlace.name);
    $("#destinationTotal").append("<li><span class='hiddenOutput'>" +outputPlace.name+"</span></li>");
    console.log(outputPlace);
    console.log(outputPlace.nameTemp());

    $("input#name").val("");

    $("input#temperature").val("");
    $("input#color").val("");
    //3 lines above are used to make boxes blank again for user input
    $(".hiddenOutput").last().click(function() {
      $("#showDestination").show();
      $("#showDestination h2").text(outputPlace.nameTemp());
      $(".name2").text(outputPlace.name);
      $(".temperature2").text(outputPlace.temperature);
      $(".color2").text(outputPlace.color);
    });

  });
});
