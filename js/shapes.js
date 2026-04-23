let bg_color = "black";
const PALETTE = ["red", "green", "blue"];
let x = 0, y = 0;
const RECT_SIZE = 300;


function setup() {
  createCanvas(windowWidth, windowHeight);
    //frameRate(60); 
    //bg_color = color(random(255), random(255), random(255));
    //bg_color = random(PALETTE);
    bg_color = PALETTE[0];
    x = random(width);
    y = random(height);
}

function draw() {
    background(bg_color); 

   fill(PALETTE[1]);
    stroke(PALETTE[2]); 
    
    rect(x, y, RECT_SIZE, RECT_SIZE);
    y += 1;
    //ellipse(300, 150, 100, 100);
    //triangle(500, 200, 450, 300, 550, 300);
    if (y > width) {
        y = RECT_SIZE;
    }
}

function mousePressed() {
    // Change background color on mouse press
    bg_color = random(PALETTE);
    x = random(width);
    y = random(height);
}