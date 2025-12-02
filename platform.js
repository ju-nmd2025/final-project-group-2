//export let platform = {
// x: 250,
// y: 250,
// w: 80,
// h: 20,

function draw() {
  createCanvas(500, 500);

  push();
  fill("green");
  noStroke();
  circle(100, 115, 30);

  circle(300, 115, 30);
  rect(100, 100, 200, 30);

  fill("yellow");
  noStroke();
  circle(100, 215, 30);

  circle(300, 215, 30);
  rect(100, 200, 200, 30);
  pop();
}
