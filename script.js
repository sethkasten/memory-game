"use strict";

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const main = document.querySelector(".main");
const cardArray = [];
const timer = document.querySelector(".timer");
let elapsedSec = 0;
let elapsedMin = 0;
let elapsedHr = 0;
let clock;

const timerFunction = () => {
  elapsedSec++;
  timer.innerHTML = `${elapsedHr}:${elapsedMin}:${elapsedSec}`;
  if (elapsedSec === 59) {
    elapsedSec = 0;
    elapsedMin++;
  }
  if (elapsedMin === 60) {
    elapsedMin = 0;
    elapsedHr++;
  }
};

startButton.addEventListener("click", () => {
  clock = setInterval(timerFunction, 1000);
  elapsedSec = 0;
  elapsedMin = 0;
  elapsedHr = 0;
});

resetButton.addEventListener("click", () => {
  clearInterval(clock);
});
