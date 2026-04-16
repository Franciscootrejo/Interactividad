let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");

boton1.addEventListener("mouseenter", function() {
    bgColor("red");
});
boton1.addEventListener("mouseleave", function() {
    bgColor("blue");
});

boton3.addEventListener("mouseenter", function() {
    bgColor("pink");
});
boton3.addEventListener("mouseleave", function() {
    bgColor("aquamarine");
});

boton2.addEventListener("mouseenter", mouseEnter);
boton2.addEventListener("mouseleave", mouseLeave);
function mouseEnter() {
    bgColor("lightblue");
}
function mouseLeave() {
    bgColor("white");
}
function bgColor(color) {
    document.body.style.backgroundColor = color;
}    
