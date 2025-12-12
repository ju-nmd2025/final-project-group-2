export default class Platform {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.broken = false;
  }

  draw() {
    if (this.broken) return;

    push();
    noStroke();

    if (this.type === 0) {
      fill("green");
    } else if (this.type === 1) {
      fill("red");
    } else if (this.type === 2) {
      fill(145, 85, 77);
    }

    circle(this.x, this.y + this.h / 2, this.h);
    circle(this.x + this.w, this.y + this.h / 2, this.h);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

export { Platform };
