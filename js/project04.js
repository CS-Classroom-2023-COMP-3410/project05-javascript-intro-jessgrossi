const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitBtn = document.getElementById("submit-btn");
  const resultsContainer = document.getElementById("results");
  
  // Display questions
  function loadQuiz() {
    const output = questions.map((q, index) => {
      const options = q.options
        .map(
          (option, i) =>
            `<label>
              <input type="radio" name="question${index}" value="${i}">
              ${option}
            </label>`
        )
        .join("");
      return `<div class="question">
        <h3>${q.question}</h3>
        <div class="options">${options}</div>
      </div>`;
    });
    quizContainer.innerHTML = output.join("");
  }
  
  // Show results
  function showResults() {
    const answers = quizContainer.querySelectorAll(".question");
    let score = 0;
  
    answers.forEach((answerBlock, index) => {
      // Clear existing classes
      answerBlock.classList.remove("correct", "incorrect");
  
      const selectedOption = answerBlock.querySelector(
        `input[name="question${index}"]:checked`
      );
  
      const isCorrect =
        selectedOption && parseInt(selectedOption.value) === questions[index].correct;
  
      if (isCorrect) {
        score++;
        answerBlock.classList.add("correct");
      } else {
        answerBlock.classList.add("incorrect");
      }
    });
  
    resultsContainer.innerHTML = `
      <h2>Your Score: ${score} / ${questions.length}</h2>
      <h3>Review Answers:</h3>
      <ul>
        ${questions
          .map(
            (q, index) => `
          <li>${q.question}<br>
            Correct Answer: ${q.options[q.correct]}</li>`
          )
          .join("")}
      </ul>
    `;
  }
  
  // Initialize quiz and add event listener
  loadQuiz();
  submitBtn.addEventListener("click", showResults);
  