var x = 42;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 42);
}
