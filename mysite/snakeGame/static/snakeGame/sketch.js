var x = 100;

function preload() {

}

function setup() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const color = urlParams.get('color');

  createCanvas(400, 400);
  rectMode(CENTER);
  console.log(color.slice(0, 2), color.slice(3, 5), color.slice(6, 8));
}

function draw() {
  background(0);
  fill(color.slice(0, 2), color.slice(3, 5), color.slice(6, 8));
  ellipse(mouseX, mouseY, x);
}
