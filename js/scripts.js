$(function () {
  $(".carousel").carousel({
    interval: !1
  }), $(".search").on("click", function () {
    $(".navbar-right .navbar-form").slideToggle()
  });
  $('#elastislide').elastislide();
}),
  
  
  $(window).load(function () {
  var a = $("#carousel-sidebar .active img").width();
  $("#carousel-sidebar img").each(function () {
    $(this).attr("width", a)
  }), $("#carousel-sidebar .carousel-caption-sidebar").css("max-width", a + "px"), $("#carousel-sidebar .carousel-indicators").css("max-width", a + "px"), $(".banner").css("max-width", a + "px")
});