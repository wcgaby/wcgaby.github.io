// Mutli-button.js that allows a user to click a button to show one item while hiding other items.
$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#archery-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#archery").removeClass("invisible");
    $("#muzzleloader").addClass("invisible");
    $("#rifle").addClass("invisible");
    $("#archery-button").addClass("active");
    $("#muzzleloader-button").removeClass("active");
    $("#rifle-button").removeClass("active");
  });

  $('#muzzleloader-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#archery").addClass("invisible");
    $("#muzzleloader").removeClass("invisible");
    $("#rifle").addClass("invisible");
    $("#archery-button").removeClass("active");
    $("#muzzleloader-button").addClass("active");
    $("#rifle-button").removeClass("active");
  });

  $('#rifle-button').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#archery").addClass("invisible");
    $("#muzzleloader").addClass("invisible");
    $("#rifle").removeClass("invisible");
    $("#archery-button").removeClass("active");
    $("#muzzleloader-button").removeClass("active");
    $("#rifle-button").addClass("active");
  });
});
