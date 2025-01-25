document.addEventListener("DOMContentLoaded", () => {
    const arrayContainer = document.getElementById("arrayContainer");
    const startButton = document.getElementById("startButton");
    const resetButton = document.getElementById("resetButton");
    const algorithmSelect = document.getElementById("algorithm");
    const speedInput = document.getElementById("speed");
    const commentary = document.getElementById("commentary");
  
    let array = [];
    const arraySize = 20;
    let animationSpeed = 300;
  
    function generateArray() {
      array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
      renderArray();
      commentary.textContent = "New random array generated. Select an algorithm and click 'Start'!";
    }
  
    function renderArray() {
      arrayContainer.innerHTML = "";
      array.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);
      });
    }
  
    async function bubbleSort() {
      commentary.textContent = "Starting Bubble Sort: Comparing adjacent elements...";
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          renderArray();
          await highlightBars(j, j + 1);
          commentary.textContent = `Comparing ${array[j]} and ${array[j + 1]}...`;
          if (array[j] > array[j + 1]) {
            commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}.`;
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            renderArray();
          }
          await delay();
        }
        commentary.textContent = `Pass ${i + 1} completed. Largest element is now in the correct position.`;
      }
      commentary.textContent = "Bubble Sort completed! The array is now sorted.";
    }
  
    async function insertionSort() {
      commentary.textContent = "Starting Insertion Sort: Building the sorted portion of the array...";
      for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        commentary.textContent = `Placing element ${key} into the correct position in the sorted portion of the array.`;
        while (j >= 0 && array[j] > key) {
          commentary.textContent = `Comparing ${array[j]} and ${key}: ${array[j]} is greater, shifting it one position to the right.`;
          array[j + 1] = array[j];
          renderArray();
          await delay();
          j--;
        }
        array[j + 1] = key;
        commentary.textContent = `Element ${key} placed in position ${j + 1}. Sorted portion is now: ${array.slice(0, i + 1).join(", ")}.`;
        renderArray();
        await delay();
      }
      commentary.textContent = "Insertion Sort completed! The array is now sorted.";
    }
  
    function delay() {
      return new Promise((resolve) => setTimeout(resolve, animationSpeed));
    }
  
    async function highlightBars(index1, index2) {
      const bars = document.getElementsByClassName("bar");
      bars[index1].classList.add("highlight");
      bars[index2].classList.add("highlight");
      await delay();
      bars[index1].classList.remove("highlight");
      bars[index2].classList.remove("highlight");
    }
  
    function resetArray() {
      generateArray();
      commentary.textContent = "Array reset! You can now choose an algorithm and start the visualization.";
    }
  
    startButton.addEventListener("click", () => {
      const algorithm = algorithmSelect.value;
      animationSpeed = 600 - speedInput.value * 100;
      if (algorithm === "bubbleSort") bubbleSort();
      if (algorithm === "insertionSort") insertionSort();
    });
  
    resetButton.addEventListener("click", resetArray);
  
    generateArray();
  });
  