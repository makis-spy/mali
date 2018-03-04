var collection02 = {
  A002001:{
    price:"500",
    sold : true,
    id: "A002001",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;|",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-space.jpg",
    story: "This guy went into space to plant a flag on the moon and on the way alien giraffes blocked him in a spaceship. The giraffes want to fight him."
  },
  A002002:{
    price:"800",
    sold : false,
    id: "A002002",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-pope.jpg",
    story: "Everyone checking out her sexy bum"
  },
  A002003:{
    price:"800",
    sold : false,
    id: "A002003",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-dots.jpg",
    story : "Trap maze game"
  },
  A002004:{
    price:"1200",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-bum.jpg",
    story: "She come back from space to get revenge on the little guys."
  },
  A002005:{
    price:"200",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-trap.jpg",
    story:"If they fall they die"

  },
  A002006:{
    price:"200",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-thrones.jpg",
    story : "Portrait with the little guys that he trapped"
  },
  GODDESSING:{
    price:"2000",
    sold : false,
    story: "They like her because she helps them kill the bad guys",
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "c002/art-goddess.jpg",
    story : "Those guys like her because she help them kill the bad guy"
  }

}
var guys = {
  best:{
    price:"300",
    sold : false,
    tag : "eyes",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "guys/art-best.jpg"

  },
  deadWeight:{
      price:"300",
      sold : false,
      tag : "eyes",
      description:'A3 16.5" x 11.7". marker on paper',
      art : "guys/art-dead-weight.jpg",
      story : "Guys went to super market to buy giraffe heads. But the bodies haunted him so he runaway"
    },
    floaters:{
        price:"300",
        sold : false,
        tag : "eyes",
        description:'A3 16.5" x 11.7". marker on paper',
        art : "guys/art-floaters.jpg",
        story : "Cutting heads to make a ballon"
      },
      partiers:{
          price:"300",
          sold : false,
          tag : "eyes",
          description:'A3 16.5" x 11.7". marker on paper',
          art : "guys/art-guy-party.jpg",
          story : "Guy party"
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


    $(".round, .art-box, .lb").on("click",function(){

      openLighBox(this)
    })

    $("#close-box").on('click',function(){
        closeLightBox()
    })


})





var c002thumbs = document.querySelectorAll('#collection002 .round')

for(var i = 0, l=c002thumbs.length; i<l; ++i){
  new ScrollMagic.Scene({triggerElement: c002thumbs[i], triggerHook: 'onEnter'})
                .setClassToggle(c002thumbs[i], 'show')
                .addTo(controller)
}

new ScrollMagic.Scene({triggerElement: "#A002001", triggerHook: 0})
							.setClassToggle("#collection002 h1", "zoom-out")
							.addTo(controller)

new ScrollMagic.Scene({triggerElement: "#goddess", triggerHook: 0, offset:100})
							.setClassToggle("#nav", "open")
							.addTo(controller)

new ScrollMagic.Scene({triggerElement: "#A002001",duration:400, triggerHook: 0})
							.setClassToggle("#intro-viz", "in")
							.addTo(controller)


new ScrollMagic.Scene({triggerElement: "#illustration-splash", triggerHook: 0.4})

  							.setClassToggle("#illustration-splash-img", "fade-in")
                .reverse(false)
  							.addTo(controller)
