// cursor position

var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRect = details.clientX - rectangleLocation.left;
    let change = document.getElementById("center");
    
    if(insideRect < rectangleLocation.width/2){
        // let percentage = (rectangleLocation.width -insideRect)/100;
        // change.style.opacity = percentage;
        // change.style.backgroundColor = "red"
        // this is also a correct approach 
        // let redcolor = gsap.utils.mapRange(0,250,255,0,insideRect);
        gsap.to(rect, color: )
        change.style.backgroundColor = `rgb(${redcolor} , 0 , 0)`;
        
    }
    else{

    }
    console.log(gsap.utils.mapRange(0,250,255,0,insideRect));
    
})