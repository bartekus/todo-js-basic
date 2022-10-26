                                                                          // Vanila JavaScript todo list app
let taskInput = document.getElementById("new-task");                      // New-task
let addButton = document.getElementsByTagName("button")[0];               // First button
let incompleteTasksHolder = document.getElementById("incomplete-tasks");  // Incomplete-tasks
let completedTasksHolder = document.getElementById("completed-tasks");    // Completed-tasks

let createNewTaskElement = function(taskString) {       // New Task List Item
  let listItem = document.createElement("li");          // Create List Item
  let checkBox = document.createElement("input");       // Input (checkbox)
  let label = document.createElement("label");          // Label
  let editInput = document.createElement("input");      // Input (text)
  let editButton = document.createElement("button");    // Button.edit
  let deleteButton = document.createElement("button");  // Button.delete

  checkBox.type = "checkbox";         // Each element needs to be modified
  editInput.type = "text";            //
  editButton.innerText = "Edit";      //
  editButton.className = "edit";      //
  deleteButton.innerText = "Delete";  //
  deleteButton.className = "delete";  //
  label.innerText = taskString;       //

  listItem.appendChild(checkBox);      // Each element needs to be appended
  listItem.appendChild(label);         //
  listItem.appendChild(editInput);     //
  listItem.appendChild(editButton);    //
  listItem.appendChild(deleteButton);  //

  return listItem;
};

let addTask = function() {                            // Add a new task
  let listItemName = taskInput.value || "New Item";   // We hold the current value or provide the default one
  let listItem = createNewTaskElement(listItemName);  // Create a new list item with the text from #new-task
  incompleteTasksHolder.appendChild(listItem);        // Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted);            // We bind it to the incomplete holder
  taskInput.value = "";                               // Resets the field
};

let editTask = function() {                                     // Edit an existing task
  let listItem = this.parentNode;                               // Create List Item
  let editInput = listItem.querySelector("input[type=text");    // Input (text)
  let label = listItem.querySelector("label");                  // Label
  let button = listItem.getElementsByTagName("button")[0];      // Button

  let containsClass = listItem.classList.contains("editMode");  // We check for .editMode and assign it a letiable
  if(containsClass) {                                           // Switch from .editMode
      label.innerText = editInput.value;                        // Label text become the input's value
      button.innerText = "Edit";                                // Buttons name modified to Edit
  } else {                                                      // Switch to .editMode
     editInput.value = label.innerText;                         // Input value becomes the label's text
     button.innerText = "Save";                                 // Button name modified to Save
  }
    listItem.classList.toggle("editMode");                      // Toggle .editMode on the parent
};

let deleteTask = function() {      // Delete an existing task
  let listItem = this.parentNode;  // We use parentNode to target the object containing the delete button
  let ul = listItem.parentNode;    // We use parentNode again to target the list containing the task
  ul.removeChild(listItem);        // Remove the parent list item from the ul
};

let taskCompleted = function() {               // Mark a task as complete
  let listItem = this.parentNode;              // We assign it for readability
  completedTasksHolder.appendChild(listItem);  // Append the task list item to the #completed-tasks
  bindTaskEvents(listItem, taskIncomplete);    // We bind it to the opposite holder
};

let taskIncomplete = function() {               // Mark a task as incomplete
  let listItem = this.parentNode;               // We assign it for readability
  incompleteTasksHolder.appendChild(listItem);  // Append the task list item to the #incomplete-tasks
  bindTaskEvents(listItem, taskCompleted);      // We bind it to the opposite holder
};

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {   // Select it's children
  let checkBox = taskListItem.querySelector("input[type=checkbox]");  //
  let editButton = taskListItem.querySelector("button.edit");         //
  let deleteButton = taskListItem.querySelector("button.delete");     //
  editButton.onclick = editTask;                                      // Bind editTask to edit button
  deleteButton.onclick = deleteTask;                                  // Bind deleteTask to delete button
  checkBox.onchange = checkBoxEventHandler;                           // Bind checkBoxEventHandler to checkbox
};

let ajaxRequest = function() {
  console.log("AJAX request");
};

addButton.addEventListener("click", addTask);      // Adds event listener for the click handler to the addTask function
addButton.addEventListener("click", ajaxRequest);  // Adds an event listener for AJAX

for(let i = 0; i < incompleteTasksHolder.children.length; i++) {     // Cycle over incompleteTasksHolder ul list items
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);  // Bind events to list item's children (taskCompleted)
}

for(let i = 0; i < completedTasksHolder.children.length; i++) {      // Cycle over completedTasksHolder ul list items
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);   // Bind events to list item's children (taskIncomplete)
}