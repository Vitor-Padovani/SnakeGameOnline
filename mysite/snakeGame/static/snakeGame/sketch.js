playerColors = new colors();
player1 = new snake();
let scale = 20;

function preload() {

}

function setup() {
  url_info();

  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(127);
  fill(playerColors.red, playerColors.green, playerColors.blue);
  ellipse(mouseX, mouseY, 100);
  player1.update();
  player1.show();
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
  this.x_speed = 1;
  this.y_speed = 0;
  this.size = 0;
  this.tail = 0;

  this.update = function() {
    this.x = this.x + this.x_speed*scale;
    this.y = this.y + this.y_speed*scale;

    this.x = constrain(this.x, 0, width-scale)
    this.y = constrain(this.y, 0, height-scale)
  }
  this.show = function() {
    for (var i = 0; i < this.size; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale);
    }
    rect(this.x, this.y, scale);
  }
}
