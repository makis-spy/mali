var controller = new ScrollMagic.Controller()
$(document).ready(function(){



$("#nav a").click(function() {
	var go = "#" + $(this).attr("go-to")

	$("html, body").animate(
		{
			scrollTop: $(go).offset().top
		},
		1000
	)
})

$("#nav .hamburger").click(function() {
	$("#nav").toggleClass("down")
	$("#nav a").click(function() {
		$("#nav").removeClass("down")
	})
})

var togo = document.querySelectorAll(".faded")

for (var i = 0, l = togo.length; i < l; ++i) {
	new ScrollMagic.Scene({triggerElement: togo[i], triggerHook: "onEnter"})
		.setClassToggle(togo[i], "shown")
		.addTo(controller)
}

new ScrollMagic.Scene({triggerElement: "#the-best-guys", triggerHook: "onEnter"})
	.setClassToggle("#the-best-guys", "shownR")
	.addTo(controller)


new ScrollMagic.Scene({triggerElement: "#deadWeight", pushFollowers:true, triggerHook:"onEnter"})
	.on("enter", function() {


		Drip.init(document.getElementById("drip"))
		document.getElementById("drip").className = "show-me"

    document.body.style.overflow="hidden"

    setTimeout(()=>{
      document.body.style.overflow="auto"
    },8000)

	})
	.setPin("#deadgo")
  .reverse(false)
	.addTo(controller)

new ScrollMagic.Scene({triggerElement: "#deadgo", offset:100})
	.on("enter", function() {
		document.getElementById("drip").className = ""
		$("#drip").remove()
    document.body.style.overflow="auto"
	})
	.reverse(false)
	.addTo(controller)


})
