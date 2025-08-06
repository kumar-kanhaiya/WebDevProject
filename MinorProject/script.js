const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");

videocon.addEventListener("mousemove", function(details){
    
    gsap.to(playbtn,{
        scale: 1,
        opacity: 1
        
    })
    
});
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale: 0,
        opacity : 0
    })
})

videocon.addEventListener("mousemove",function(details){
        gsap.to(playbtn,{
            left: details.x-50 ,
            top:details.y-80,
            ease: Power3
        })
})

// loading annimation 
gsap.from("#page1 h1",{
    y:100,
    delay: 0.3,
    opacity:0,
    duration: 0.5 ,
    stagger : 0.5
    
})
gsap.from("#page1 #video-container",{
    scale:0.95,
    y:100,
    delay: 1.2,
    opacity:0,
    duration: 0.3 
    
    
})


