let x = 0, y = 0;
let stroke_Color = "black";
let stroke_weight = 1;
let fill_color = "white";
let size = 42;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(60);
}

function draw() {
    background(0, 50);
    updateColor();
    //background(255,100);
    stroke(stroke_Color);
    strokeWeight(stroke_weight);
    fill(fill_color)
    ellipse(mouseX, mouseY, 100, 100);
}

function updateColor(){
    fill_color = map(mouseX, 0, width, 255, 0);
    stroke_Color = map(mouseX, 0, height, 0, 255);
    stroke_weight = map(mouseY, 0, height, 1, 10);

}

function windowResized(){
    resizeCanvas (windowWidth, windowHeight);
    background(0); 

}