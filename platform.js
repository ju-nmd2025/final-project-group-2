export let platform = {
  x: 100,
  y: 100,
  w: 75,
  h: 10,

  draw() {
    push();
    fill("green");
    noStroke();
    circle(this.x, this.y + 5, this.h);

    circle(this.x + this.w, this.y + 5, this.h);
    rect(this.x, this.y, this.w, this.h);
    pop();
  },
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  platform.draw();
}
