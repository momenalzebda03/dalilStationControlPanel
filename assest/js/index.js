$(document).ready(function () {
  $("#selectBox").click(function () {
    $(this).toggleClass("open");
  });

  $("#languageSelect").blur(function () {
    $("#selectBox").removeClass("open");
  });
});
