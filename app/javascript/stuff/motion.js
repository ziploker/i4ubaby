var controller = new ScrollMagic.Controller();


$(document).ready(function() {
  
    
    //var tl = gsap.timeline({repeat: 3, repeatDelay: 1});
   

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
    

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1"
    })
    .setTween("#animate1", 0.5, {scale: 8.5}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
   
    
});
