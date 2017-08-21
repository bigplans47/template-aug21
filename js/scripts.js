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
    $("#destinationTotal").append("<li>"+outputPlace.name+"</li>");
    console.log(outputPlace);
    $("input#name").val("");
    $("input#temperature").val("");
    $("input#color").val("");
    //3 lines above are used to make boxes blank again for user input


  });
});
