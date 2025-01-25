// Get tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.setAttribute("data-index", index);
    li.setAttribute("draggable", true); // Enable drag-and-drop
    li.addEventListener("dragstart", handleDragStart);
    li.addEventListener("dragover", handleDragOver);
    li.addEventListener("drop", handleDrop);

    // Task content
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.classList.add(task.completed ? "completed" : "pending");

    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(index);

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);

    // Mark as Completed Button
    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.onclick = () => toggleCompletion(index);

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    // Append the task to the list
    taskList.appendChild(li);
  });
}

// Drag-and-Drop Handlers
let draggedIndex = null;

function handleDragStart(e) {
  draggedIndex = this.getAttribute("data-index");
  e.dataTransfer.effectAllowed = "move";
}

function handleDragOver(e) {
  e.preventDefault(); // Necessary for drop to work
  e.dataTransfer.dropEffect = "move";
}

function handleDrop(e) {
  e.preventDefault();
  const targetIndex = this.getAttribute("data-index");
  if (draggedIndex !== null && targetIndex !== null) {
    // Swap tasks in the array
    const temp = tasks[draggedIndex];
    tasks[draggedIndex] = tasks[targetIndex];
    tasks[targetIndex] = temp;

    // Update localStorage and re-render tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = ""; // Clear input
    renderTasks();
  }
}

// Function to edit a task
function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Function to toggle task completion
function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Function to filter tasks based on their status
function filterTasks(status) {
  let filteredTasks;
  if (status === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (status === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else {
    filteredTasks = tasks;
  }
  renderFilteredTasks(filteredTasks);
}

// Function to render filtered tasks
function renderFilteredTasks(filteredTasks) {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing tasks
  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.setAttribute("data-index", index);

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.classList.add(task.completed ? "completed" : "pending");

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.onclick = () => toggleCompletion(index);

    li.appendChild(taskText);
    li.appendChild(completeButton);
    taskList.appendChild(li);
  });
}

// Initialize rendering
renderTasks();
