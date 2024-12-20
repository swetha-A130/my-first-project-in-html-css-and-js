// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompletedButton");

// Add event listener for adding new tasks
addTaskButton.addEventListener("click", addTask);

// Add event listener for clearing completed tasks
clearCompletedButton.addEventListener("click", clearCompletedTasks);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.classList.add("task");

    // Create a span element for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create a checkbox to mark the task as completed
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("task-checkbox");
    checkBox.addEventListener("change", toggleTaskCompletion);
    li.appendChild(checkBox);

    // Add a delete button to remove the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteTask);
    li.appendChild(deleteButton);

    // Append the task to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
}

// Function to toggle task completion (mark as completed)
function toggleTaskCompletion(event) {
  const li = event.target.closest("li");
  if (event.target.checked) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }
}

// Function to delete a task
function deleteTask(event) {
  const li = event.target.closest("li");
  li.remove();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll(".task.completed");
  completedTasks.forEach(task => task.remove());
}
