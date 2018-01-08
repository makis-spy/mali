var collection02 = {
  A002001:{
    price:"500",
    sold : true,
    id: "A002001",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;|",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-space.jpg"
  },
  A002002:{
    price:"800",
    sold : false,
    id: "A002002",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-pope.jpg"
  },
  A002003:{
    price:"800",
    sold : false,
    id: "A002003",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-dots.jpg"
  },
  A002004:{
    price:"1200",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-bum.jpg"
  },
  A002005:{
    price:"200",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-trap.jpg"
  }

}
var illustrations = {
  eyes:{
    price:"300",
    sold : false,
    tag : "eyes",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "illustration/art-eyes.jpg"
  },
  kids:{
      tag : "Kids",
      price:"-Inquire",
      sold : false,
      description:'Print pattern for fabric',
      art : "illustration/art-kids.jpg"
  },
  jail:{
      price:"120",
      sold : false,
      tag : "Jail",
      description:'A3 16.5" x 11.7". marker on paper',
      art : "illustration/art-jail.jpg"
  },
  hat:{
      price:"150",
      sold : true,
      tag : "hat",
      description:'A3 16.5" x 11.7". marker on paper',
      art : "illustration/art-hat.jpg"
  },leaves:{
      price:"300",
      sold : true,
      tag : "leaves",
      description:'A3 16.5" x 11.7". marker on paper',
      art : "illustration/art-leaves.jpg"
  }
}

var source   = document.getElementById("art-template").innerHTML
var template = Handlebars.compile(source)
var viewer
var ARTWIN

function openLighBox(obj){

    collection = eval($(obj).attr('data-collection'))

    obj = collection[obj.id]

    ARTWIN.addClass("open")
    $('#art-details').html(template(obj))
    $(document.body).css('overflow','hidden')


    viewer.load(obj.art)
    ARTWIN.addClass("ready")


}

function closeLightBox(){
    ARTWIN.addClass("close").removeClass("ready").removeClass('open')
    setTimeout(function(){

        ARTWIN.removeClass('close')
    },700)
    $(document.body).css('overflow','auto')
}



$(document).ready(function(){

    ARTWIN = $('#art-window')

    viewer = ImageViewer('#art-image',{
      zoomValue : 50
    })


    $(".round, .art-box").on("click",function(){

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

new ScrollMagic.Scene({triggerElement: "#A002004", duration:200, triggerHook: "0.4"})
							.setClassToggle("#intro-viz", "out")
							.addTo(controller)


  new ScrollMagic.Scene({triggerElement: "#illustration-splash", triggerHook: "0.02"})
  							.setClassToggle("#illustration-splash-img", "fade-in")
                .reverse(false)
  							.addTo(controller)
