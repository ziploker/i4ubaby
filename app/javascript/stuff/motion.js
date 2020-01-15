var controller = new ScrollMagic.Controller();


$(document).ready(function() {
  
    
    var tl = gsap.timeline({repeat: 3, repeatDelay: 1});
   

    //var transformRatio = $('.animation').height()/$('#manos').height();
    //var transformRatiox = $('.animation').width()/$('#manos').width();

    //tl.from("#manos", 
        
    //    { yPercent: 100, duration: 1},
        
    //);

    //tl.to("#al", {left: "50%" , duration: 1.5, xPercent: -100, yPercent: -50});
    //tl.to("#nat", {left: "50%" , duration: 1.5, xPercent: -40, yPercent: -60});
    
    //tl.to("#al, #nat, #manos", {opacity: 0, duration: 1});
    //tl.to("#end", {opacity: 1, duration: 1});
    //tl.to("#end", {width: 3000, duration: 3, height: 3000, opacity: 0});

    var timeline = new TimelineMax();
    var tween1 = TweenMax.to("#al", {left: "50%", xPercent: -100, yPercent: -50});
    var tween2 = TweenMax.to("#nat", {left: "50%", xPercent: -40, yPercent: -60});
    var tween3 = TweenMax.to("#al, #nat", {opacity: 0});
    var tween33 = TweenMax.to("#end", {opacity: 1});
    var tween4 = TweenMax.to("#end", {width: 3000, height: 3000, opacity: 0});


    timeline.add(tween1).add(tween2).add(tween3).add(tween33).add(tween4);

    
    

    var scene = new ScrollMagic.Scene({
        triggerElement: ".animation1",
        triggerHook: 0,
        pushFollowers: true,
        duration: 400
    })
    
    //.setTween("#al", {left: "50%", xPercent: -100, yPercent: -50})
    //.setTween("#nat", {left: "50%", xPercent: -40, yPercent: -60})
    
    .setPin(".animation1") // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .setTween(timeline)
    .addTo(controller);
    
   
    
});
