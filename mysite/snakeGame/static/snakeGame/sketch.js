let scale = 20;

function preload() {

}

function setup() {
  frames = new fps();
  playerColors = new colors();
  player1 = new snake();
  food = new food();

  url_info();

  createCanvas(640, 640);
  frameRate(frames.num);

  food.pick_location();
}

function mousePressed() {
  food.pick_location();
}

function draw() {
  background('#212121');
  frameRate(frames.num);

  player1.update();
  player1.show();

  if (player1.eat(food.vector)) {
    food.pick_location();
  }

  rect(food.vector.x, food.vector.y, scale);
}

function url_info() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  try {
    url_color = urlParams.get('color');
  } catch {
    console.log('Color Error;')
  }
}

function key_pressed(player) {
  if (((keyCode == UP_ARROW) | (keyCode == 87)) & (player.y_speed < 1)) {
    player.dir(0, -1);
  } else if (((keyCode == RIGHT_ARROW) | (keyCode == 68)) & (player.x_speed > -1)) {
    player.dir(1, 0);
  } else if (((keyCode == DOWN_ARROW) | (keyCode == 83)) & (player.y_speed > -1)) {
    player.dir(0, 1);
  } else if (((keyCode == LEFT_ARROW) | (keyCode == 65)) & (player.x_speed < 1)) {
    player.dir(-1, 0);
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
  this.x = scale;
  this.y = scale;
  this.x_speed = 1;
  this.y_speed = 0;
  this.size = 0;
  this.tail = [];

  this.eat = function(food) {
    var d = dist(this.x, this.y, food.x, food.y);
    if (d < 1) {
      this.size++;
      frames.increase(0.3);
      return true
    } else {
      return false
    }
  }

  this.update = function() {
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.size-1] = createVector(this.x, this.y);

    key_pressed(this);

    this.x = this.x + this.x_speed*scale;
    this.y = this.y + this.y_speed*scale;

    this.x = constrain(this.x, 0, width-scale)
    this.y = constrain(this.y, 0, height-scale)
  }

  this.show = function() {
    fill('#' + url_color);
    for (var i = 0; i < this.size; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale);
    }
    rect(this.x, this.y, scale);
  }

  this.dir = function(x, y) {
    this.x_speed = x;
    this.y_speed = y;
  }
}

function food() {
  this.vector = createVector();

  this.pick_location = function() {
    var cols = floor(width/scale);
    var rows = floor(height/scale);

    this.vector = createVector(floor(random(1, cols-1)), floor(random(1, rows-1)));
    this.vector.mult(scale);
  }
}

function fps() {
  this.base_value = 10;
  this.max_value = 21;
  this.num = this.base_value;

  this.increase = function(value) {
    if (value > 0) {
      this.num += value;
    } else {
      this.num = this.base_value;
    }
  
    this.num = constrain(this.num, this.base_value, this.max_value);
  }

}
