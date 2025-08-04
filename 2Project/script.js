

// var rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(details){

    gsap.utils.
    gsap.to('#rect',{
        left: details.clientX + 'px',
        ease: Power3
    })
})
