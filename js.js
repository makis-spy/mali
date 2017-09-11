

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

let arr = document.querySelectorAll("div[type=round]");



[].forEach.call(arr, function(div) {
            new ScrollMagic.Scene({triggerElement: div, duration: 10})
            .triggerHook(0.6)
            .reverse(false)
            .on("enter", function () {


              Velocity(div, 'transition.bounceIn');


            })
            .addTo(controller)
})


var LB = document.querySelector("#LB")
var IMG = document.querySelector("#IMG-VIEW")

function openLighBox(path){



}
