const randomTextElement = document.getElementById("random-text");
const userInputElement = document.getElementById("user-input");
const wpmElement = document.getElementById("wpm-value");
const accuracyElement = document.getElementById("accuracy-value");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const difficultyElement = document.getElementById("difficulty");

let randomText = "";
let startTime;
let typedCharacters = 0;

const texts = {
  easy: ["Hello world", "Typing is fun", "Keep it simple"],
  medium: ["JavaScript is awesome", "Coding challenges are great", "Practice makes perfect"],
  hard: ["Complex algorithms are challenging", "Asynchronous programming requires patience", "Debugging code can be tricky"]
};

function generateRandomText(difficulty) {
  const textPool = texts[difficulty];
  return textPool[Math.floor(Math.random() * textPool.length)];
}

function startTest() {
  randomText = generateRandomText(difficultyElement.value);
  randomTextElement.textContent = randomText;
  userInputElement.value = "";
  userInputElement.disabled = false;
  userInputElement.focus();
  startTime = new Date();
  wpmElement.textContent = "0";
  accuracyElement.textContent = "100%";
  restartButton.hidden = true;
}

function updateRealTimeMetrics() {
  const userInput = userInputElement.value;
  const elapsedTime = (new Date() - startTime) / 1000 / 60; // elapsed time in minutes

  // Calculate WPM
  const wordsTyped = userInput.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / elapsedTime);
  wpmElement.textContent = isNaN(wpm) ? "0" : wpm;

  // Calculate accuracy
  let errors = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== randomText[i]) {
      errors++;
    }
  }
  const accuracy = ((randomText.length - errors) / randomText.length) * 100;
  accuracyElement.textContent = Math.max(0, Math.round(accuracy)) + "%";

  // Highlight errors in real time
  const matchedText = randomText.slice(0, userInput.length);
  userInputElement.style.backgroundColor = userInput === matchedText ? "#d4edda" : "#f8d7da";

  // If typing is complete
  if (userInput === randomText) {
    userInputElement.disabled = true;
    restartButton.hidden = false;
  }
}

startButton.addEventListener("click", startTest);
restartButton.addEventListener("click", startTest);
userInputElement.addEventListener("input", updateRealTimeMetrics);
