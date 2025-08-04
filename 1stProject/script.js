// cursor position

var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var mousePosition = details.clientX - rectangleLocation.left;
    console.log(mousePosition)
    
})