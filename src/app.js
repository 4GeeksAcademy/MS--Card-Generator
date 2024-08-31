import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = [
    { symbol: "♦", className: "suit-diamonds" },
    { symbol: "♥", className: "suit-hearts" },
    { symbol: "♠", className: "suit-spades" },
    { symbol: "♣", className: "suit-clubs" }
  ];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const generateRandomCard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    return { rank: randomRank, suit: randomSuit };
  };

  const cardDisplay = document.getElementById("card");
  const topLeftDisplay = document.getElementById("top-left");
  const bottomRightDisplay = document.getElementById("bottom-right");
  const valueDisplay = document.getElementById("value");
  const button = document.getElementById("generateCard");

  button.addEventListener("click", () => {
    const randomCard = generateRandomCard();

    topLeftDisplay.textContent = randomCard.suit.symbol;
    bottomRightDisplay.textContent = randomCard.suit.symbol;
    valueDisplay.textContent = randomCard.rank;

    cardDisplay.className = `card ${randomCard.suit.className}`;
  });
};
