
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
            left: details.x-50,
            top:details.y-80,
            ease: Power3
        })
})