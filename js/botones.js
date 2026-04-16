let title = document.querySelector("h1");
let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");
boton1.addEventListener("click", function() {
    title.innerText = "Botón 1";
    bgColor("red");
});
boton1.addEventListener("mouseenter", function() {
    title.innerText = "Botón";
    bgColor("blue");
});

boton3.addEventListener("click", function() {
    title.innerText = "Botón 3";
    bgColor("pink");
});
boton3.addEventListener("mouseenter", function() {
    title.innerText = "Botón";
    bgColor("aquamarine");
});

boton2.addEventListener("click", function() {
    title.innerText = "Botón 2";
    bgColor("pink");
});
boton2.addEventListener("mouseenter", function() {
    title.innerText = "Botón";
    bgColor("aquamarine");
});
function bgColor(color) {
    document.body.style.backgroundColor = color;
}    
