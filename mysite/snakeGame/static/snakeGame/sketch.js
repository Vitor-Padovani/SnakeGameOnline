var x = 100;
var red = 255;
var green = 0;
var blue = 0;

function preload() {

}

function setup() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    color = urlParams.get('color');
    red = color.slice(0, 3);
    green = color.slice(3, 6);
    blue = color.slice(6, 9);
  } catch {
    
  }

  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(red, green, blue);
  ellipse(mouseX, mouseY, x);
}
