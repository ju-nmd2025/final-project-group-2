export default class Button {
  constructor(x, y, w, h, words, textColor, bubbleColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.words = words;
    this.textColor = textColor;
    this.bubbleColor = bubbleColor;
  }

  draw() {
    push();
    fill(this.bubbleColor);
    rect(this.x, this.y, this.w, this.h);
    pop();

    push();
    textSize(22);
    fill(this.textColor);
    textAlign(CENTER, CENTER);
    let centerX = this.x + this.w / 2;
    let centerY = this.y + this.h / 2;
    text(this.words, centerX, centerY);
    pop();
  }
}

let pressStart = new Button(
  200,
  350,
  200,
  100,
  "Press Start",
  "black",
  "white"
);
let pressReset = new Button(200, 350, 200, 100, "Restart", "white", "red");

export { Button };
