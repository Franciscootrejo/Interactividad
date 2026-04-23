let color = "aquamarine";
let stroke_weight = 5;
let coordinates = [];
let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorPicker = createColorPicker(color);
  colorPicker.position(20, 20); 
}

function draw() {
    background(255);
    color = colorPicker.value();
    stroke(color);
    strokeWeight(stroke_weight);
    noFill(0);
    beginShape();
   /* vertex(0, 100);
    vertex(100, 100);
    vertex(0, 100);*/
    for (let i = 0; i < coordinates.length; i++) {
        let coord = coordinates[i];
        vertex(coord.x, coord.y);
    }
    endShape();

}   
function mousePressed() {
    coordinates.push({x: mouseX, y: mouseY});
}

function mouseDragged() {
    coordinates.push({x: mouseX, y: mouseY});
}