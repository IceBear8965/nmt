$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $(this).toggleClass("open");
    $(".sidebar").toggleClass("open");
    $("body").toggleClass("body--fixed");
  });
});
