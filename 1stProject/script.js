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
        
    }
    else{

    }
    
})