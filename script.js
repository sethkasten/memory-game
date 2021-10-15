"use strict";

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const main = document.querySelector(".main");
const cardArray = [];

startButton.addEventListener("click", () => {
  startButton.classList.add("hide");
});

resetButton.addEventListener("click", () => {
  startButton.classList.remove("hide");
});
