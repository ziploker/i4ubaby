
$(document).ready(function() {
  
    //WITH Timelines (cleaner, more versatile)
    //var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
    //tl.to(".al", {x: 100, duration: 1});
    //tl.to(".al", {y: 50, duration: 1});
    //tl.to(".al", {opacity: 0, duration: 1});

    // then we can control the whole thing easily...
    //tl.pause();
    //tl.resume();
    //tl.seek(1.5);
    //tl.reverse();

    //gsap.to("#al", {x: 100, duration: 1});
    //gsap.to("#al", {y: 50, duration: 1, delay: 1});      //wait 1 second
    //gsap.to("#al", {opacity: 0, duration: 1, delay: 2}); //wait 2 seconds

    //WITH Timelines (cleaner, more versatile)
    var tl = gsap.timeline({repeat: 3, repeatDelay: 1});
    //tl.to("#al", {x: 100, duration: 5});
    //tl.to("#al", {y: 50, duration: 1});
    //tl.to("#al", {opacity: 0, duration: 1});

    var transformRatio = $('.animation').height()/$('#manos').height();
    var transformRatiox = $('.animation').width()/$('#manos').width();

    tl.from("#manos", 
        
        { yPercent: 100, duration: 1},
        
        
        
        
        
    );

    tl.to("#al", {left: "50%" , duration: 1.5, xPercent: -100, yPercent: -50});
    tl.to("#nat", {left: "50%" , duration: 1.5, xPercent: -40, yPercent: -60});
    
    tl.to("#al, #nat, #manos", {opacity: 0, duration: 1});
    tl.to("#end", {opacity: 1, duration: 1});
    tl.to("#end", {width: 3000, duration: 3, height: 3000, opacity: 0});
    
    
   
    
    //tl.to("#manos", 
        
        //{ xPercent: -100 * transformRatiox, duration: 1}
        //{ xPercent: 50 * transformRatio + 50, duration: 1}
        //{ yPercent: -50 * transformRatio - 50, duration: 1}
        
        
        
        
    //);

    //tl.to("#manos", 

        
        //{width: 5000, duration: 2 }
        
        //{ xPercent: -100 * transformRatiox, duration: 1}
        //{ xPercent: 50 * transformRatio + 50, duration: 1}
        //{ yPercent: -50 * transformRatio - 50, duration: 1}
        
        
        
        
  //  );

     
    
   

   // tl.to("#manos", {transform: 'translateX(100vw)', duration: 2});

    //alert("wtf");

    //tl.resume();
    
});
