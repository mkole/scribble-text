/*
 * Copyright (c) 2023 Michael Kolesidis
 * GNU Affero General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 */

let x, y, newX, newY;
let color1 = 255;
let color2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(color1);

  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(color2);
  strokeWeight(4);

  newX = random(-50, width + 50);
  newY = random(-50, height + 50);
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}

function mouseClicked() {
  let temp;
  temp = color1;
  color1 = color2;
  color2 = temp;
  background(color1);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Fullscreen mode
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
