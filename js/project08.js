const story = {
    start: {
      text: "You find yourself at a fork in the road. Which way do you go?",
      choices: [
        { text: "Left", next: "left_path" },
        { text: "Right", next: "right_path" },
      ],
    },
    left_path: {
      text: "You encounter a wild river. Do you swim across or walk along the shore?",
      choices: [
        { text: "Swim", next: "swim_path" },
        { text: "Walk", next: "walk_path" },
      ],
    },
    right_path: {
      text: "You meet a traveler who offers you a riddle. Do you accept or decline?",
      choices: [
        { text: "Accept", next: "riddle_path" },
        { text: "Decline", next: "decline_path" },
      ],
    },
    swim_path: {
      text: "You swam across safely. The end!",
      choices: [],
    },
    walk_path: {
      text: "You found a bridge and crossed safely. The end!",
      choices: [],
    },
    riddle_path: {
      text: "You solved the riddle and gained treasure. The end!",
      choices: [],
    },
    decline_path: {
      text: "You walked away safely. The end!",
      choices: [],
    },
  };
  
  let currentNode = "start";
  
  function renderStory() {
    const storyText = document.getElementById("story-text");
    const choices = document.getElementById("choices");
    const progressBar = document.querySelector("#progress-bar div");
  
    // Set the story text for the current node
    storyText.textContent = story[currentNode].text;
  
    // Clear existing choices
    choices.innerHTML = "";
  
    // Update progress bar
    const totalNodes = Object.keys(story).length;
    const currentIndex = Object.keys(story).indexOf(currentNode);
    const progressPercent = ((currentIndex + 1) / totalNodes) * 100;
    progressBar.style.width = progressPercent + "%";
  
    // Render choices as buttons
    story[currentNode].choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", () => {
        currentNode = choice.next;
        renderStory();
      });
      choices.appendChild(button);
    });
  
    // If no choices are left, show a "Restart Game" button
    if (story[currentNode].choices.length === 0) {
      const restartButton = document.createElement("button");
      restartButton.textContent = "Restart Game";
      restartButton.addEventListener("click", () => {
        currentNode = "start";
        renderStory();
      });
      choices.appendChild(restartButton);
    }
  }
  
  // Save progress to localStorage
  document.getElementById("save-button").addEventListener("click", () => {
    localStorage.setItem("adventureGameState", currentNode);
    alert("Progress saved!");
  });
  
  // Resume progress from localStorage
  document.getElementById("resume-button").addEventListener("click", () => {
    const savedNode = localStorage.getItem("adventureGameState");
    if (savedNode) {
      currentNode = savedNode;
      renderStory();
    } else {
      alert("No saved progress found!");
    }
  });
  
  // Restart the game
  document.getElementById("reset-button").addEventListener("click", () => {
    currentNode = "start";
    renderStory();
  });
  
  // Initialize the game
  renderStory();
  