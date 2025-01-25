const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");
const optionsContainer = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");
const resetButton = document.getElementById("reset-button");

let gameState = {
  currentScene: "start",
  progress: 0
};

const scenes = {
  start: {
    text: "You find yourself in a dark forest. A path splits in two directions.",
    options: [
      { text: "Take the left path", nextScene: "leftPath" },
      { text: "Take the right path", nextScene: "rightPath" }
    ]
  },
  leftPath: {
    text: "You encounter a friendly wolf. It wants to guide you.",
    options: [
      { text: "Follow the wolf", nextScene: "wolf" },
      { text: "Ignore the wolf and move on", nextScene: "moveOn" }
    ]
  },
  rightPath: {
    text: "You stumble upon an abandoned hut. Do you go inside?",
    options: [
      { text: "Enter the hut", nextScene: "hut" },
      { text: "Stay outside", nextScene: "outside" }
    ]
  },
  wolf: {
    text: "The wolf leads you to a treasure chest! You win!",
    options: []
  },
  moveOn: {
    text: "You get lost and can't find your way back. Game over.",
    options: []
  },
  hut: {
    text: "Inside the hut, you find a map leading to safety. You win!",
    options: []
  },
  outside: {
    text: "You decide not to risk it, but the night grows colder. Game over.",
    options: []
  }
};

function updateStory() {
  const currentScene = scenes[gameState.currentScene];
  storyText.textContent = currentScene.text;

  optionsContainer.innerHTML = "";
  currentScene.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => {
      gameState.currentScene = option.nextScene;
      gameState.progress += 20;
      saveGame();
      updateStory();
      updateProgress();
    });
    optionsContainer.appendChild(button);
  });

  if (currentScene.options.length === 0) {
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", resetGame);
    optionsContainer.appendChild(restartButton);
  }
}

function updateProgress() {
  progressBar.style.width = `${gameState.progress}%`;
}

function resetGame() {
  gameState = { currentScene: "start", progress: 0 };
  saveGame();
  updateStory();
  updateProgress();
}

function saveGame() {
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

function loadGame() {
  const savedGame = localStorage.getItem("gameState");
  if (savedGame) {
    gameState = JSON.parse(savedGame);
  }
}

resetButton.addEventListener("click", resetGame);

loadGame();
updateStory();
updateProgress();

