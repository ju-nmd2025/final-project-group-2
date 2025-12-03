import { character } from "./character";
import platform from "platform";

function setup() {
  createCanvas(400, 600);
}

//obstacle/monster/kill

function draw() {
  background(100, 100, 100);

  character.draw();
  platform.draw();

  platform.y += 10;
  if (platform.y + platform.h < 0) {
    platform.y = 500;
  }

  if (character.y + character.h === platform.y) {
    character.y = character.y + 10;
  }

  // Floor
  line(0, 300, 400, 300);
}

function keyPressed() {
  if (character.y + character.h === 300) {
    character.y -= 80;
  }
}
