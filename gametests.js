import doodle from "doodle";
import platform from "platform";

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
  platform.draw();

  platform.y += 5;
  if (platform.y + platform.h < 0) {
    platform.y = 500;
  }

  doodle.y += 5;
  if (doodle.y + doodle.h < 0) {
    doodle.y = 500;
  }

  if (doodle.y >= 800) {
    doodle.y = -86;
  }

  if (doodle.x + doodle.w <= 0) {
    doodle.x = 599;
  }
  if (doodle.x >= 600) {
    doodle.x = 1;

    // Floor/death
    line(0, 799, 600, 799);
  }

  //function keyPressed() {
  //if (key === "a") {
  //   doodle.x -= 5;
  // } else if (key === "d") {
  //   doodle.x += 5;
  // }
  //}
}
