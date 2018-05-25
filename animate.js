var box = document.getElementById("yeet");
var xpos = 0;
var ypos = 0;
var xstep = 4;
var ystep = 3;
var id = setInterval(frame, 4);

function frame() {
    if (xpos > 1380 || xpos < 0) {
        xstep = -xstep;
    }
    if (ypos > 500 || ypos < 0) {
        ystep = -ystep;
    }

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    box.style.top = ypos + 'px';
    box.style.left = xpos + 'px';
}
var thing = document.getElementById("thing");
var container = document.getElementById("Trump");
var mousecoords = document.getElementById("mousecoords");

container.addEventListener("mousemove", printMouseCoords);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    mousecoords.textContent = mouseX + ", " + mouseY;
}

container.addEventListener("click", moveThing);

function moveThing(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (thing.clientWidth / 2);
    var yPosition = event.clientY - container.getBoundingClientRect().top - (thing.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    thing.style.left = xPosition + "px";
    thing.style.top = yPosition + "px";
}

container.addEventListener("mousemove", moveThing);

window.addEventListener("keypress", changeThing);

function changeThing(event) {
    if ( event.key === "b"){
        thing.style.opacity = .5;
    } if ( event.key === "n"){
        thing.style.opacity = 1;
    }
}
