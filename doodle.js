export let doodle = {
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
