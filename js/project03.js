const cardsArray = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍇", "🍇",
    "🍒", "🍒",
    "🍉", "🍉",
    "🍓", "🍓",
    "🥝", "🥝",
    "🍍", "🍍"
  ];
  
  let moves = 0;
  let timer = 0;
  let timerInterval;
  let firstCard = null;
  let secondCard = null;
  let matchedPairs = 0;
  
  const movesElement = document.getElementById("moves");
  const timeElement = document.getElementById("time");
  const gameBoard = document.getElementById("game-board");
  const restartButton = document.getElementById("restart-btn");
  
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function startGame() {
    moves = 0;
    timer = 0;
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    movesElement.textContent = moves;
    timeElement.textContent = timer;
    clearInterval(timerInterval);
  
    timerInterval = setInterval(() => {
      timer++;
      timeElement.textContent = timer;
    }, 1000);
  
    const shuffledCards = shuffle(cardsArray);
    gameBoard.innerHTML = "";
  
    shuffledCards.forEach((emoji) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.emoji = emoji;
      card.addEventListener("click", handleCardClick);
      gameBoard.appendChild(card);
    });
  }
  
  function handleCardClick(event) {
    const clickedCard = event.target;
  
    if (clickedCard.classList.contains("flipped") || clickedCard.classList.contains("matched")) return;
  
    if (!firstCard) {
      firstCard = clickedCard;
      revealCard(clickedCard);
    } else if (!secondCard) {
      secondCard = clickedCard;
      revealCard(clickedCard);
      checkMatch();
    }
  }
  
  function revealCard(card) {
    card.textContent = card.dataset.emoji;
    card.classList.add("flipped");
  }
  
  function checkMatch() {
    moves++;
    movesElement.textContent = moves;
  
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      firstCard = null;
      secondCard = null;
      matchedPairs++;
  
      if (matchedPairs === cardsArray.length / 2) {
        clearInterval(timerInterval);
        alert(`You won! Moves: ${moves}, Time: ${timer} seconds`);
      }
    } else {
      setTimeout(() => {
        hideCard(firstCard);
        hideCard(secondCard);
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
  
  function hideCard(card) {
    card.textContent = "";
    card.classList.remove("flipped");
  }
  
  restartButton.addEventListener("click", startGame);
  
  startGame();
  