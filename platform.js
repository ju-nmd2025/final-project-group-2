export let platform1 = {
  x: 100,
  y: 100,
  w: 75,
  h: 10,

  draw() {
    push();
    fill("green");
    noStroke();
    circle(this.x, this.y + 5, this.h);

    circle(this.x + 75, this.y + 5, this.h);
    rect(this.x, this.y, this.w, this.h);
    pop();
  },
};

class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    push();
    fill("green");
    noStroke();
    circle(this.x, this.y + this.h / 2, this.h);

    circle(this.x + this.w, this.y + this.h / 2, this.h);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
