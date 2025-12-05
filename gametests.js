import doodle from "doodle";
import platform1 from "platform";

function setup() {
  createCanvas(600, 800);
}

//obstacle/monster/kill

function draw() {
  background(255, 255, 255);

  if (keyIsDown(65) === true) {
    doodle.x -= 10;
  }

  if (keyIsDown(68) === true) {
    doodle.x += 10;
  }

  doodle.draw();
  platform1.draw();

  platform1.y += 5;
  if (platform1.y + platform1.h < 0) {
    platform1.y = 500;
  }

  doodle.y += 5;
  if (doodle.y + doodle.h < 0) {
    doodle.y = 500;
  }

  if (doodle.y >= 800) {
    doodle.y = -86;
  }

  if (doodle.x <= 0) {
    doodle.x = 600;
  }
  if (doodle.x >= 601) {
    doodle.x = 1;

    // Floor/death
    line(0, 799, 600, 799);
  }
}
