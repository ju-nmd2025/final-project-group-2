import doodle from "doodle";
import platform from "platform";

let platforms = [];
const GRAVITY = 8;
const JUMP = -300;
const NUM_PLATFORMS = 15;
const SPEED = 10;

function setup() {
  createCanvas(600, 800);

  for (let i = 0; i < NUM_PLATFORMS; i++) {
    let x = random(0, 600 - 75);
    let y = i * (800 / NUM_PLATFORMS);

    platforms.push(new Platform(x, y, 75, 10));
  }
}

function draw() {
  background(255, 255, 255);

  if (keyIsDown(65) === true) {
    doodle.x -= SPEED;
  }

  if (keyIsDown(68) === true) {
    doodle.x += SPEED;
  }

  doodle.vy = GRAVITY;
  doodle.y += doodle.vy;

  for (let i = 0; i < platforms.length; i++) {
    let p = platforms[i];

    p.draw();
    p.y += 5;

    if (doodle.vy > 0) {
      if (
        doodle.x + doodle.w > p.x &&
        doodle.x < p.x + p.w &&
        doodle.y + doodle.h > p.y &&
        doodle.y + doodle.h < p.y + p.h + GRAVITY + 5
      ) {
        doodle.y = doodle.y + JUMP;
      }
    }

    if (p.y > 800) {
      p.y = -10;
      p.x = random(0, 600 - 75);
    }
  }
  doodle.draw();
  if (doodle.y >= 800) {
    doodle.y = 200;
    doodle.vy = 0;
    doodle.x = 200;
  }

  if (doodle.x <= -doodle.w) {
    doodle.x = 600;
  }
  if (doodle.x >= 601) {
    doodle.x = 1;

    // Floor/death
    line(0, 799, 600, 799);
  }
}
