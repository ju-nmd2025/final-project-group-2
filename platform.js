//export let platform = {
// x: 250,
// y: 250,
// w: 80,
// h: 20,

let platform = {
  x: 100,
  y: 100,
  w: 75,
  h: 10,

  draw() {
    push();
    fill("green");
    noStroke();
    circle(this.x, this.y + 15, this.w - 35);

    circle(300, 115, 30);
    rect(100, 100, 200, 30);
    pop();

    push();
    fill("yellow");
    noStroke();
    circle(100, 215, 30);

    circle(300, 215, 30);
    rect(100, 200, 200, 30);
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
