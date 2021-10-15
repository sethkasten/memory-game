"use strict";

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameBoard = document.querySelector(".gameboard");
const main = document.querySelector(".main");
const cardArray = [];

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
});

resetButton.addEventListener("click", () => {
  startButton.classList.remove("hide");
  gameBoard.classList.toggle("hide");
  const card = document.querySelectorAll(".card");
  card.forEach((item) => {
    console.log(item);
    item.classList.add("hide");
  });
});
