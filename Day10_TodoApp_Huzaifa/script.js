function addTask() {
  // Get input box and value
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") return;

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Optional: Mark task as completed on click
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Add the list item to the task list
  document.getElementById("taskList").appendChild(li);

  // Clear the input box
  input.value = "";
}
