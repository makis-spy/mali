
$("#nav a").click(function(){


  var go = "#"+$(this).attr("go-to");

  $('html, body').animate({
      scrollTop: $(go).offset().top
  }, 1000);

})
