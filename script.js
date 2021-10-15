"use strict";

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameBoard = document.querySelector(".gameboard");
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

const board = () => {
  for (let i = 0; i < 16; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    gameBoard.append(newCard);
  }
};

startButton.addEventListener("click", () => {
  gameBoard.innerHTML = "";
  board();
  startButton.classList.add("hide");
  const card = document.querySelectorAll(".card");
  console.log(card);
  gameBoard.classList.remove("hide");

  card.forEach((item) => {
    console.log(item);
    item.classList.remove("hide");
  });

  clock = setInterval(timerFunction, 1000);
  elapsedSec = 0;
  elapsedMin = 0;
  elapsedHr = 0;
});

resetButton.addEventListener("click", () => {
  startButton.classList.remove("hide");
  gameBoard.classList.toggle("hide");
  const card = document.querySelectorAll(".card");
  card.forEach((item) => {
    console.log(item);
    item.classList.add("hide");
  });

  clearInterval(clock);
});
