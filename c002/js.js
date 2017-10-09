var collection02 = {
  A002001:{
    price:"500",
    sold : true,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;|",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-space.jpg"
  },
  A002002:{
    price:"800",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-pope.jpg"
  },
  A002003:{
    price:"800",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-bum.jpg"
  },
  A002004:{
    price:"800",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-bum.jpg"
  }

}


var source   = document.getElementById("art-template").innerHTML
var template = Handlebars.compile(source)



function openLighBox(obj){

    obj = collection02[obj.id]

    $('#art-window').addClass("open")
    $('#art-details').html(template(obj))
    $(document.body).css('overflow','hidden')


    setTimeout(function(){
          viewer.load(obj.art)
          $('#art-window').addClass("ready")
    },600)

}
function closeLightBox(){
    $('#art-window').removeClass("ready").removeClass("open")

    $(document.body).css('overflow','hidden')
}

var viewer

$(document).ready(function(){

    viewer = ImageViewer('#art-image',{
    
    })


    $(".round").on("click",function(){
      openLighBox(this)
    })

    $("#close-box").on('click',function(){
        closeLightBox()
    })


})


var controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({triggerElement: "#collection002 h1", triggerHook: "0.2"})
							.setClassToggle("#collection002 h1", "zoom-out")
							.addTo(controller)

new ScrollMagic.Scene({triggerElement: "#A002005", triggerHook: "onLeave"})
							.setClassToggle("#nav", "open")
							.addTo(controller)

new ScrollMagic.Scene({triggerElement: "#A002005", duration:200, triggerHook: "1"})
							.setClassToggle("#intro-viz", "out")
							.addTo(controller)
