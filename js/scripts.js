$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var senderInput = $("input#sender").val();
    var recieverInput = $("input#reciever").val();
    var dollarsInput = $("input#dollars").val();


    console.log ("Im here");
    $(".sender1").text(senderInput);
    $(".reciever1").text(recieverInput);
    $(".dollars1").text(dollarsInput);

    console.log ("Im here 2");
    $("#story").show();
    console.log ("Im here 3");
    event.preventDefault();
  });
});
