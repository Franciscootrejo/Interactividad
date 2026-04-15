let a = 1;
let b = "2";
let c = a + b;

console.log(c);

function saludar(nombre="Mundo") {
    alert("Hola " + nombre);
}
saludar("Juan");
saludar("María");
saludar("Nat");
saludar();

function sumar(a, b) {
    const resultado = a + b;
    alert("la suma de " + a + " y " + b + " es: " + resultado); 
}

sumar(2, 3);
sumar(8, 5);

function restar(a, b) {
    const resultado = a - b;
    alert("la resta de " + a + " y " + b + " es: " + resultado); 
}

restar(4, 2);
restar(10, 6);

function changecolor() {
    //camelcase la primera letra de la primera palabra en minúscula y la primera letra de la segunda en mayúscula
    const r =  Math.random() * 255;
    const g =  Math.random() * 255;
    const b =  Math.random() * 255;    
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

document.addEventListener("click", changecolor);
