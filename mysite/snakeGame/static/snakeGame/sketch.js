playerColors = new colors()

function preload() {

}

function setup() {
  url_info();

  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(127);
  fill(playerColors.red, playerColors.green, playerColors.blue);
  ellipse(mouseX, mouseY, 100);
}

function url_info() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  try {
    color = urlParams.get('color');
    playerColors.red = color.slice(0, 3);
    playerColors.green = color.slice(3, 6);
    playerColors.blue = color.slice(6, 9);
  } catch {
    console.log('Color Error;')
  }
}

function colors() {
  this.red = 255;
  this.green = 255;
  this.blue = 0;

  this.set_colors = function(r, g, b) {
      this.red = r;
      this.green = g;
      this.blue = b;
  }
}

function snake() {
  this.x = 0;
  this.y = 0;
  this.x_speed = 0;
  this.y_speed = 0;
}
