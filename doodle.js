export let doodle = {
  x: 275,
  y: 400,
  w: 50,
  h: 86,
  vy: 0,

  draw() {
    noStroke();
    fill("yellow");
    circle(this.x, this.y + 25, this.w);
    rect(this.x - 25, this.y + 25, this.w, this.h - 36);

    fill("green");
    rect(this.x - 25, this.y + 50, this.w, this.h - 25 - 36);

    fill("black");
    circle(this.x + 5, this.y + 25, 6);
    circle(this.x + 17, this.y + 25, 6);

    fill("red");
    circle(this.x + 12, this.y + 25 + 15, 10);

    stroke(15);
    line(this.x - 10, this.y + 51 + 25, this.x - 10, this.y + 61 + 25);
    line(this.x + 10, this.y + 51 + 25, this.x + 10, this.y + 61 + 25);

    line(this.x - 10, this.y + 61 + 25, this.x - 5, this.y + 61 + 25);
    line(this.x + 10, this.y + 61 + 25, this.x + 15, this.y + 61 + 25);
  },
};
