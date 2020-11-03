// Mutli-button.js that allows a user to click a button to show one item while hiding other items.
$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#bow-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#bow-calendar").removeClass("invisible");
    $("#shotgun-calendar").addClass("invisible");
    $("#rifle-calendar").addClass("invisible");
    $("#bow-button").addClass("active");
    $("#shotgun-button").removeClass("active");
    $("#rifle-button").removeClass("active");
  });

  $('#shotgun-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#bow-calendar").addClass("invisible");
    $("#shotgun-calendar").removeClass("invisible");
    $("#rifle-calendar").addClass("invisible");
    $("#bow-button").removeClass("active");
    $("#shotgun-button").addClass("active");
    $("#rifle-button").removeClass("active");
  });

  $('#rifle-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#bow-calendar").addClass("invisible");
    $("#shotgun-calendar").addClass("invisible");
    $("#rifle-calendar").removeClass("invisible");
    $("#bow-button").removeClass("active");
    $("#shotgun-button").removeClass("active");
    $("#rifle-button").addClass("active");
  });
});
