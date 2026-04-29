// Configuración inicial
function setup() {
    // Crear un canvas que ocupe toda la ventana
    createCanvas(windowWidth, windowHeight);
    textFont("owltail, sans-serif"); // Establecer la tipografía
    textAlign(CENTER, CENTER); // Centrar el texto
  }
  
  // Dibujar en el canvas
  function draw() {
    background(0, 255, 4); // Fondo verde fluorescente
  
    const textContent = "METRO CHILPANCINGO";
    const mouseXRatio = constrain(mouseX / width, 0, 1); // Relación del mouse en X
    const expandIndex = floor(mouseXRatio * textContent.length); // Índice de expansión
  
    let x = width / 2 - textWidth(textContent) / 2; // Posición inicial del texto
  
    for (let i = 0; i < textContent.length; i++) {
      const char = textContent[i];
      let size = 48; // Tamaño base de la tipografía
  
      // Expandir el carácter bajo el cursor y comprimir los demás
      if (i === expandIndex) {
        size = 96; // Tamaño expandido
      } else {
        size = 32; // Tamaño comprimido
      }
  
      textSize(size); // Aplicar el tamaño
      fill(0); // Color del texto (negro)
      text(char, x + textWidth(char) / 2, height / 2); // Dibujar el carácter
      x += textWidth(char); // Mover la posición para el siguiente carácter
    }
  }
  
  // Ajustar el canvas cuando se redimensiona la ventana
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }