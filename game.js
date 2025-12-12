import { doodle } from "./doodle.js";
import { Platform } from "./platform.js";
import { pressReset } from "./buttons.js";
import { pressStart } from "./buttons.js";

let platforms = [];
let GRAVITY = 6;
const JUMP = -300;
const NUM_PLATFORMS = 10;
const SPEED = 8;
let startTime;
let finalScore;

function setup() {
  createCanvas(600, 800);

  for (let i = 0; i < NUM_PLATFORMS; i++) {
    let x = random(0, 600 - 75);
    let y = i * (800 / NUM_PLATFORMS);

    let type = 0;
    let r = random(0, 100);

    if (r < 10) {
      type = 1;
    } else if (r < 20) {
      type = 2;
    }

    platforms.push(new Platform(x, y, 75, 10, type));
  }
}

function mouseClicked() {
  if (gameState === 0) {
    if (mouseX > 200 && mouseX < 400 && mouseY > 350 && mouseY < 450) {
      gameState = 1;
      startTime = millis();
    }
  }
  if (gameState === 2) {
    if (mouseX > 200 && mouseX < 400 && mouseY > 350 && mouseY < 450) {
      gameReset();
    }
  }
}

let gameState = 0;

function draw() {
  background("lightblue");
  if (gameState === 0) {
    drawGameStart();
  } else if (gameState === 1) {
    drawGamePlay();
  } else if (gameState === 2) {
    drawGameEnd();
  }
}

function drawGameStart() {
  push();
  textSize(50);
  fill(0, 0, 0);
  text("doodledash.io", 140, 200);
  pop();
  push();
  textSize(20);
  fill(0, 0, 0);
  text("Red platforms kill you, Brown platforms", 140, 600);
  text("will break, and Green will make you jump!", 130, 640);
  text("Use W + D or the left and right arrow keys to move!", 85, 680);
  pop();
  push();
  pressStart.draw();
}

function drawGamePlay() {
  background("lightblue");

  if (keyIsDown(65) === true) {
    doodle.x -= SPEED;
  }
  if (keyIsDown(37) === true) {
    doodle.x -= SPEED;
  }

  if (keyIsDown(68) === true) {
    doodle.x += SPEED;
  }
  if (keyIsDown(39) === true) {
    doodle.x += SPEED;
  }

  doodle.vy = GRAVITY;
  doodle.y += doodle.vy;

  for (let i = 0; i < platforms.length; i++) {
    let p = platforms[i];

    p.draw();
    p.y += 5;

    if (doodle.vy > 0 && p.broken === false) {
      if (
        doodle.x + doodle.w > p.x &&
        doodle.x < p.x + p.w &&
        doodle.y + doodle.h > p.y &&
        doodle.y + doodle.h < p.y + p.h + GRAVITY + 5
      ) {
        if (p.type === 0) {
          doodle.y = doodle.y + JUMP;
        } else if (p.type === 1) {
          calculateScore();
          gameState = 2;
        } else if (p.type === 2) {
          p.broken = true;
        }
      }
    }

    if (p.y > 800) {
      p.y = -10;
      p.x = random(0, 600 - 75);
      p.broken = false;

      let r = random(0, 100);
      if (r < 10) p.type = 1;
      else if (r < 20) p.type = 2;
      else p.type = 0;
    }
  }

  doodle.draw();
  if (doodle.y >= 800) {
    calculateScore();
    gameState = gameState + 1;
  }

  if (doodle.x <= -doodle.w) {
    doodle.x = 600;
  }
  if (doodle.x >= 601) {
    doodle.x = 1;
  }
}

function drawGameEnd() {
  push();
  textSize(75);
  fill("red");
  text("GAME OVER", 70, 250);
  pop();
  push();
  textSize(40);
  fill(0);
  text("Score: " + finalScore, 225, 550);
  pop();
  pressReset.draw();
}
function calculateScore() {
  let endTime = millis();
  let durationMs = endTime - startTime;
  let durationSec = durationMs / 1000;
  finalScore = durationSec.toFixed(0) * 13;
}
function gameReset() {
  gameState = 0;
  doodle.y = 300;
  doodle.x = 275;

  startTime = 0;
}

window.setup = setup;

window.draw = draw;

window.addEventListener("click", function (event) {
  mouseClicked();
});

window.addEventListener("keydown", function (event) {
  keyIsDown();
});
