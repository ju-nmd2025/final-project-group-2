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
