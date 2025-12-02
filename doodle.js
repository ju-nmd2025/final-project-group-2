function draw() {
  createCanvas(400, 400);

  noStroke();
  fill("yellow");
  circle(200, 175, 50);
  noStroke();
  rect(175, 175, 50, 50);

  noStroke();
  fill("green");
  rect(175, 200, 50, 25);

  fill("black");
  circle(205, 175, 6);
  circle(217, 175, 6);

  stroke(1);
  fill("red");
  circle(212, 190, 10);

  push();
  stroke(15);
  line(190, 226, 190, 236);
  line(210, 226, 210, 236);

  line(190, 236, 195, 236);
  line(210, 236, 215, 236);
}

let doodle = {
  x: 200,
  y: 175,
  w: 50,
  h: 50,

  draw() {
    noStroke();
    fill("yellow");
    circle(this.x, this.y, this.w);
    rect(this.x - 25, this.y, this.w, this.h);

    fill("green");
    rect(this.x - 25, this.y + 25, this.w, 25);

    fill("black");
    circle(this.x + 5, this.y, 6);
    circle(this.x + 17, this.y, 6);

    fill("red");
    circle(this.x + 12, this.y + 15, 10);

    stroke(15);
    line(this.x - 10, this.y + 51, this.x - 10, this.y + 61);
    line(this.x + 10, this.y + 51, this.x + 10, this.y + 61);

    line(this.x - 10, this.y + 61, this.x - 5, this.y + 61);
    line(this.x + 10, this.y + 61, this.x + 15, this.y + 61);
  },
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  doodle.draw();
}
