$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(1000, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
$("input").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash-o'></i></span>" + todoText + "</li>"
    );
  }
});
$(".fa-sticky-note").click(function() {
  $("input").fadeToggle();
});
