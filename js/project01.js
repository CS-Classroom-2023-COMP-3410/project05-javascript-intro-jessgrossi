const cardGrid = document.getElementById("card-grid");
const moveCountEl = document.getElementById("move-count");
const timerEl = document.getElementById("timer");
const restartBtn = document.getElementById("restart-btn");

let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let timer = null;
let timeElapsed = 0;

const symbols = ["★", "❤", "☀", "☂", "☘", "♫", "⚡", "☕"];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCards() {
  const cardSymbols = shuffle([...symbols, ...symbols]);
  cardGrid.innerHTML = "";
  cardSymbols.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${symbol}</div>
      </div>
    `;
    card.addEventListener("click", handleCardClick);
    cardGrid.appendChild(card);
    cards.push(card);
  });
}

function handleCardClick(event) {
  const clickedCard = event.currentTarget;

  if (clickedCard.classList.contains("flipped") || secondCard) return;

  clickedCard.classList.add("flipped");

  if (!firstCard) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;
    moves++;
    moveCountEl.textContent = moves;

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
      resetSelectedCards();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetSelectedCards();
      }, 1000);
    }
  }
}

function resetSelectedCards() {
  firstCard = null;
  secondCard = null;
}

function startTimer() {
  timeElapsed = 0;
  timerEl.textContent = "0:00";
  timer = setInterval(() => {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetGame() {
  stopTimer();
  moves = 0;
  moveCountEl.textContent = moves;
  firstCard = null;
  secondCard = null;
  cards = [];
  createCards();
  startTimer();
}

restartBtn.addEventListener("click", resetGame);

// Initialize the game
resetGame();
