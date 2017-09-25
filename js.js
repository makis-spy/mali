

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

let arr = document.querySelectorAll("div.round");

window.addEventListener("scroll",function(e){
      if(document.body.scrollTop>0){
          document.body.className="scrolled"
      }else{
          document.body.className = ""
      }

});


[].forEach.call(arr, function(div) {
            new ScrollMagic.Scene({triggerElement: div, duration: 10})
            .triggerHook(0.6)
            .reverse(true)
            .on("enter", function () {


              Velocity(div, 'transition.bounceIn');


            })

            .addTo(controller)
})




var collection02 = {
  A002001:{
    price:"500",
    sold : true,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;|",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "img/collection02/art-space.jpg"
  },
  A002002:{
    price:"800",
    sold : false,
    tag : "|&nbsp;&nbsp;||&nbsp;&nbsp;||",
    description:'A3 16.5" x 11.7". marker on paper',
    art : "img/collection02/art-pope.jpg"
  }

}


var source   = document.getElementById("art-template").innerHTML
var template = Handlebars.compile(source)
var detailEl = document.getElementById("art-window")

function openLighBox(obj){


    detailEl.className="open"
    detailEl.innerHTML=template(obj)

    setTimeout(function(){
        $("#art-img").pinchzoomer()
        detailEl.className="open ready"
    },100)

}
function closeLightBox(){
    detailEl.className=""
}

detailEl.addEventListener("click",function(evt){

    //  closeLightBox()
})

document.querySelector("#collection002").addEventListener("click",function(evt){

      if(evt.srcElement.className==="round")
      openLighBox(collection02[evt.srcElement.id])
})
