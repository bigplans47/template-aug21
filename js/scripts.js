$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#name").val();
    $("#result").text(inputFromUser);
  });
});
